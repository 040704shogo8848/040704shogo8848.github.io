// data/people.json（真実のソース）に人物エントリを1件マージし、
// index.html が読む data/manifest.js を再生成する。コード実行なし・JSON.parse のみ。
// 使い方: echo '<entry JSON>' | node bin/update-people.js <file相対パス>
//   エントリの形は _tools/person-template.md を参照。
const fs = require('fs');
const path = require('path');

const HUB = path.resolve(__dirname, '..');
const jsonPath = path.join(HUB, 'data', 'people.json');
const manifestPath = path.join(HUB, 'data', 'manifest.js');

const fileRel = process.argv[2];
if (!fileRel) { console.error('usage: ... | node update-people.js <people/xxx.html>'); process.exit(1); }

const entry = JSON.parse(fs.readFileSync(0, 'utf8'));
entry.file = fileRel;

if (!entry.name) { console.error('entry needs a "name"'); process.exit(1); }
entry.field ??= 'investor';
entry.status ??= 'active';
entry.tags ??= [];

let arr = [];
if (fs.existsSync(jsonPath)) arr = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// 重複判定は file ではなく name。同じ人物を別日付で再リサーチしたとき、
// file 基準だと行が2本並んで気づかないまま増える（011_company と同じ理由）。
const newer = arr.find((p) => p.name === entry.name && (p.date || '') > (entry.date || ''));
if (newer) {
  console.log(`kept newer entry for ${entry.name} (${newer.date} > ${entry.date}), nothing changed`);
  process.exit(0);
}
arr = arr.filter((p) => p.name !== entry.name && p.file !== entry.file);
arr.unshift(entry);
arr.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

// 1人目を登録するときは data/ がまだ無い
fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
fs.writeFileSync(jsonPath, JSON.stringify(arr, null, 2) + '\n');

const header =
`// 自動生成ファイル — 直接編集しない。真実のソースは data/people.json。
// 人物の追加は bin/add-person.sh 経由（people.json 更新→この manifest.js 再生成）。
// index.html はこの window.PEOPLE を <script> で読む（file:// でも Pages でも動く）。`;

fs.writeFileSync(manifestPath, header + '\nwindow.PEOPLE = ' + JSON.stringify(arr, null, 2) + ';\n');

// 行を index.html にも直接書き込む。検索・並べ替え・絞り込みは JS が足すが、
// 一覧そのものは JS 無しで読めていなければならない（011_company と同じ方針）。
const FIELD_JA = {
  investor: '投資家', founder: '創業者', operator: '経営者',
  politician: '政治家', scientist: '研究者', financier: '金融',
};
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const life = (p) => {
  if (!p.born) return '—';
  return p.died ? `${p.born}–${p.died}` : `${p.born}–`;
};

const rows = arr.map((p) => `      <tr>
        <td class="c-name"><a href="${esc(p.file)}">${esc(p.name)}</a>` +
  (p.nameEn ? `<span class="full">${esc(p.nameEn)}</span>` : '') + `</td>
        <td><span class="fd fd-${esc(p.field)}">${esc(FIELD_JA[p.field] ?? p.field)}</span></td>
        <td class="c-life">${esc(life(p))}</td>
        <td class="c-sum">${esc(p.summary)}</td>
        <td class="c-date">${esc(p.date)}</td>
      </tr>`).join('\n');

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

console.log('updated: ' + arr.length + ' entries (head: ' + entry.name + ')');
