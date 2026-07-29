// data/net.json（真実のソース）にエントリを1件マージし、data/net.js を再生成して
// index.html に静的な行を書き込む。
//
//   echo '<entry JSON>' | node bin/update-net.js <pages/xxx.html>
const fs = require('fs');
const path = require('path');

const SEC = path.resolve(__dirname, '..');
const jsonPath = path.join(SEC, 'data', 'net.json');
const jsPath = path.join(SEC, 'data', 'net.js');
const indexPath = path.join(SEC, 'index.html');

const fileRel = process.argv[2];
if (!fileRel) { console.error('usage: ... | node update-net.js <pages/xxx.html>'); process.exit(1); }

const entry = JSON.parse(fs.readFileSync(0, 'utf8'));
entry.file = fileRel;
if (!entry.title) { console.error('entry needs a "title"'); process.exit(1); }
if (!['youtube', 'podcast', 'article'].includes(entry.kind)) {
  console.error(`kind must be youtube | podcast | article (got: ${entry.kind})`);
  process.exit(1);
}
entry.tags ??= [];

let arr = fs.existsSync(jsonPath) ? JSON.parse(fs.readFileSync(jsonPath, 'utf8')) : [];
// 同じ元URLを二度分析したら差し替える。file 基準だと日付違いで二重に並ぶ。
arr = arr.filter((r) => r.file !== entry.file && !(entry.url && r.url === entry.url));
arr.unshift(entry);
arr.sort((a, b) => String(b.published ?? '').localeCompare(String(a.published ?? '')));

fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
fs.writeFileSync(jsonPath, JSON.stringify(arr, null, 2) + '\n');
fs.writeFileSync(
  jsPath,
  '// 自動生成ファイル — 直接編集しない。真実のソースは data/net.json。\n' +
    '// 追加は bin/add-net.sh 経由。\n' +
    'window.NET = ' + JSON.stringify(arr, null, 2) + ';\n'
);

// 静的な行。JS が動かなくても一覧が読める。
const KIND_JA = { youtube: 'YouTube', podcast: 'Podcast', article: '記事' };
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return ''; } };

const rows = arr.map((r) => `      <tr>
        <td class="c-title"><a href="${esc(r.file)}">${esc(r.title)}</a>` +
  (r.channel ? `<span class="ch">${esc(r.channel)}${r.duration ? ' · ' + esc(r.duration) : ''}</span>` : '') + `</td>
        <td><span class="kd kd-${esc(r.kind)}">${esc(KIND_JA[r.kind] ?? r.kind)}</span></td>
        <td class="c-date">${esc(r.published ?? '')}</td>
        <td class="c-sum">${esc(r.summary)}</td>
        <td class="src">${r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(host(r.url))}</a>` : '—'}</td>
      </tr>`).join('\n');

const START = '<!-- rows:start -->';
const END = '<!-- rows:end -->';
const html = fs.readFileSync(indexPath, 'utf8');
const i = html.indexOf(START);
const j = html.indexOf(END);
if (i === -1 || j === -1) { console.error('index.html にマーカーが無い'); process.exit(1); }
fs.writeFileSync(indexPath, html.slice(0, i) + START + '\n' + rows + '\n      ' + html.slice(j));

console.log(`net: ${arr.length} entries (head: ${entry.title})`);
