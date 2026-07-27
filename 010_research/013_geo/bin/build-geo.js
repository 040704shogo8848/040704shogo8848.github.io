// Merges a country entry into data/countries.json, regenerates data/geo.js, and
// writes the static rows into index.html.
//
//   echo '<entry JSON>' | node bin/build-geo.js
//   node bin/build-geo.js --rebuild        regenerate from existing data only
//
// Entry shape is documented in _tools/geo-template.md.
const fs = require('fs');
const path = require('path');

const SEC = path.resolve(__dirname, '..');
const jsonPath = path.join(SEC, 'data', 'countries.json');
const tripsPath = path.join(SEC, 'data', 'trips.json');
const jsPath = path.join(SEC, 'data', 'geo.js');
const indexPath = path.join(SEC, 'index.html');

// Countries visited but not yet written up still need a display name, so the
// index lists everywhere Shogo has been rather than only the finished pages.
const ISO_NAMES = {
  KH: 'カンボジア', CH: 'スイス', NL: 'オランダ', ID: 'インドネシア',
  SG: 'シンガポール', MY: 'マレーシア', CN: '中国', AZ: 'アゼルバイジャン',
  TR: 'トルコ', KW: 'クウェート', EG: 'エジプト', SA: 'サウジアラビア',
  AE: 'アラブ首長国連邦', PH: 'フィリピン', KG: 'キルギス',
  KZ: 'カザフスタン', UZ: 'ウズベキスタン',
};

let arr = fs.existsSync(jsonPath) ? JSON.parse(fs.readFileSync(jsonPath, 'utf8')) : [];

if (!process.argv.includes('--rebuild')) {
  const entry = JSON.parse(fs.readFileSync(0, 'utf8'));
  if (!entry.iso) { console.error('entry needs an "iso"'); process.exit(1); }
  if (!ISO_NAMES[entry.iso]) { console.error(`unknown iso: ${entry.iso}`); process.exit(1); }
  arr = arr.filter((c) => c.iso !== entry.iso);
  arr.push(entry);
}

const trips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));
const order = [...new Set(trips.flatMap((t) => t.countries))];
arr.sort((a, b) => order.indexOf(a.iso) - order.indexOf(b.iso));

// Every entry must correspond to somewhere actually visited.
const stray = arr.filter((c) => !order.includes(c.iso));
if (stray.length) {
  console.error('trips.json に無い国が countries.json に入っている: ' + stray.map((c) => c.iso).join(', '));
  process.exit(1);
}

fs.writeFileSync(jsonPath, JSON.stringify(arr, null, 2) + '\n');

fs.writeFileSync(
  jsPath,
  '// 自動生成ファイル — 直接編集しない。真実のソースは data/countries.json と data/trips.json。\n' +
    '// 国の追加は bin/build-geo.js 経由。\n' +
    'window.TRIPS = ' + JSON.stringify(trips, null, 2) + ';\n' +
    'window.COUNTRIES = ' + JSON.stringify(arr, null, 2) + ';\n' +
    'window.ISO_NAMES = ' + JSON.stringify(ISO_NAMES, null, 2) + ';\n'
);

// Static rows, so the list reads without JavaScript.
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const num = (n) => (n == null ? '—' : Number(n).toLocaleString('en-US'));
const byIso = Object.fromEntries(arr.map((c) => [c.iso, c]));

const rows = order.map((iso) => {
  const c = byIso[iso];
  const name = c
    ? `<a href="${esc(c.file)}">${esc(c.country)}</a><span class="en">${esc(c.en)}</span>`
    : `<span class="pending">${esc(ISO_NAMES[iso])}</span>`;
  return `      <tr>
        <td class="c-name">${name}</td>
        <td>${c?.region ? `<span class="rg">${esc(c.region)}</span>` : '—'}</td>
        <td>${esc(c?.capital ?? '—')}</td>
        <td class="num">${num(c?.population)}</td>
        <td class="num">${c?.gdp_per_capita == null ? '—' : '$' + num(c.gdp_per_capita)}</td>
        <td class="c-sum">${esc(c?.summary ?? '')}</td>
      </tr>`;
}).join('\n');

const START = '<!-- rows:start -->';
const END = '<!-- rows:end -->';
const html = fs.readFileSync(indexPath, 'utf8');
const i = html.indexOf(START);
const j = html.indexOf(END);
if (i === -1 || j === -1) { console.error('index.html にマーカーが無い'); process.exit(1); }
fs.writeFileSync(indexPath, html.slice(0, i) + START + '\n' + rows + '\n      ' + html.slice(j));

console.log(`geo: ${arr.length} / ${order.length} カ国`);
