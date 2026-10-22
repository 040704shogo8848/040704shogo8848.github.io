// data/reports.json（真実のソース）に会社エントリを1件マージし、
// index.html が読む data/manifest.js を再生成する。コード実行なし・JSON.parse のみ。
// 使い方: echo '<entry JSON>' | node bin/update-manifest.js <file相対パス>
//   エントリの形は _tools/report-template.md を参照。
//   非上場の ticker/market は文字列 "非上場" ではなく null。
const fs = require('fs');
const path = require('path');

const HUB = path.resolve(__dirname, '..');
const jsonPath = path.join(HUB, 'data', 'reports.json');
const manifestPath = path.join(HUB, 'data', 'manifest.js');

const fileRel = process.argv[2];
if (!fileRel) { console.error('usage: ... | node update-manifest.js <reports/xxx.html>'); process.exit(1); }

const entry = JSON.parse(fs.readFileSync(0, 'utf8'));
entry.file = fileRel;

if (!entry.company) { console.error('entry needs a "company"'); process.exit(1); }
entry.status ??= entry.ticker ? 'listed' : 'private';
entry.cohort ??= entry.market && /東証/.test(entry.market) ? 'jp-listed' : 'other';
entry.tags ??= [];

let arr = [];
if (fs.existsSync(jsonPath)) arr = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// 重複判定は file ではなく company。同じ会社を別日付で再リサーチしたとき、
// file 基準だと行が2本並んで気づかないまま増える。
const newer = arr.find(r => r.company === entry.company && (r.date || '') > (entry.date || ''));
if (newer) {
  console.log(`kept newer entry for ${entry.company} (${newer.date} > ${entry.date}), nothing changed`);
  process.exit(0);
}
arr = arr.filter(r => r.company !== entry.company && r.file !== entry.file);
arr.unshift(entry);
arr.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

fs.writeFileSync(jsonPath, JSON.stringify(arr, null, 2) + '\n');

const header =
`// 自動生成ファイル — 直接編集しない。真実のソースは data/reports.json。
// 会社の追加は bin/add-report.sh 経由（reports.json 更新→この manifest.js 再生成）。
// index.html はこの window.REPORTS を <script> で読む（file:// でも Pages でも動く）。`;

fs.writeFileSync(manifestPath, header + '\nwindow.REPORTS = ' + JSON.stringify(arr, null, 2) + ';\n');

// Also write the rows straight into index.html. The JS on that page adds
// search, sorting and facets on top, but the list itself has to be there
// without it — Kyo's category indexes are plain HTML, and a table that only
// exists after a script runs reads as an empty page to anything that doesn't
// run one.
const STATUS_JA = { listed: '上場', private: '非上場', acquired: '買収済', defunct: '消滅' };
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const rows = arr.map((r) => {
  const code = r.ticker
    ? `<span class="tk">${esc(r.ticker)}</span>` +
      (r.market ? `<br><span class="tk" style="opacity:.7">${esc(r.market)}</span>` : '')
    : '—';
  return `      <tr>
        <td class="c-name"><a href="${esc(r.file)}">${esc(r.company)}</a>` +
    (r.fullName && r.fullName !== r.company ? `<span class="full">${esc(r.fullName)}</span>` : '') + `</td>
        <td><span class="st st-${esc(r.status)}">${esc(STATUS_JA[r.status] ?? r.status)}</span></td>
        <td>${code}</td>
        <td class="c-sum">${esc(r.summary)}</td>
        <td class="c-date">${esc(r.date)}</td>
      </tr>`;
}).join('\n');

const indexPath = path.join(HUB, 'index.html');
if (fs.existsSync(indexPath)) {
  const START = '<!-- rows:start -->';
  const END = '<!-- rows:end -->';
  const html = fs.readFileSync(indexPath, 'utf8');
  const i = html.indexOf(START);
  const j = html.indexOf(END);
  if (i === -1 || j === -1) {
    console.error('index.html に <!-- rows:start --> / <!-- rows:end --> が無い。表を更新できない');
    process.exit(1);
  }
  fs.writeFileSync(indexPath, html.slice(0, i) + START + '\n' + rows + '\n' + '      ' + html.slice(j));
}

console.log('updated: ' + arr.length + ' entries (head: ' + entry.company + ')');
