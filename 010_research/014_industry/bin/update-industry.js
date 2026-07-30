// data/industry.json（真実のソース）にエントリを1件マージし、data/industry.js を再生成して
// index.html に静的な行を書き込む。
//
//   echo '<entry JSON>' | node bin/update-industry.js <reports/xxx.html>
// entry: {title, date:"YYYY-MM-DD", tags:[...], summary, source?}
const fs = require('fs');
const path = require('path');

const HUB = path.resolve(__dirname, '..');
const jsonPath = path.join(HUB, 'data', 'industry.json');
const jsPath = path.join(HUB, 'data', 'industry.js');
const indexPath = path.join(HUB, 'index.html');

const fileRel = process.argv[2];
if (!fileRel) { console.error('usage: ... | node update-industry.js <reports/xxx.html>'); process.exit(1); }

const entry = JSON.parse(fs.readFileSync(0, 'utf8'));
entry.file = fileRel;
if (!entry.title) { console.error('entry needs a "title"'); process.exit(1); }
entry.tags ??= [];

let arr = fs.existsSync(jsonPath) ? JSON.parse(fs.readFileSync(jsonPath, 'utf8')) : [];
arr = arr.filter((r) => r.file !== entry.file && r.title !== entry.title);
arr.unshift(entry);
arr.sort((a, b) => String(b.date ?? '').localeCompare(String(a.date ?? '')));

fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
fs.writeFileSync(jsonPath, JSON.stringify(arr, null, 2) + '\n');
fs.writeFileSync(
  jsPath,
  '// 自動生成ファイル — 直接編集しない。真実のソースは data/industry.json。\n' +
    '// 追加は bin/add-report.sh 経由。\n' +
    'window.INDUSTRY = ' + JSON.stringify(arr, null, 2) + ';\n'
);

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const rows = arr.map((r) => `      <tr>
        <td class="c-title"><a href="${esc(r.file)}">${esc(r.title)}</a>` +
  (r.source ? `<span class="ch">${esc(r.source)}</span>` : '') + `</td>
        <td class="c-date">${esc(r.date ?? '')}</td>
        <td class="c-sum">${esc(r.summary)}</td>
        <td class="c-tags">${(r.tags || []).map((t) => `<span class="pill">${esc(t)}</span>`).join('')}</td>
      </tr>`).join('\n');

const START = '<!-- rows:start -->';
const END = '<!-- rows:end -->';
const html = fs.readFileSync(indexPath, 'utf8');
const i = html.indexOf(START);
const j = html.indexOf(END);
if (i === -1 || j === -1) { console.error('index.html にマーカーが無い'); process.exit(1); }
fs.writeFileSync(indexPath, html.slice(0, i) + START + '\n' + rows + '\n      ' + html.slice(j));

console.log(`industry: ${arr.length} entries (head: ${entry.title})`);
