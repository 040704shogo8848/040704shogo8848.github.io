#!/usr/bin/env node
// Build a Japan industry-site map page (013_geo/<meta.out>) from
// data/japan_<key>.json + data/japan_<key>_meta.json
// Usage: node bin/build-japan-industry-map.js shipyards|steelworks
// Afterwards run: node _tools/build-nav.mjs  (the builder writes empty snav markers)
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const KEY = process.argv[2];
if (!KEY) { console.error('usage: build-japan-industry-map.js <key>'); process.exit(1); }
const data = JSON.parse(fs.readFileSync(path.join(ROOT, `data/japan_${KEY}.json`), 'utf8'));
const meta = JSON.parse(fs.readFileSync(path.join(ROOT, `data/japan_${KEY}_meta.json`), 'utf8'));

// Groups, categories and page texts come from the meta file (one per industry).
// Group order = fixed categorical slots (dataviz default palette, light).
const GROUPS = meta.groups.map(g => ({ ...g, re: new RegExp(g.pattern) }));
const OTHER = { key: 'other', label: 'その他の企業', color: '#8a8880' };
const CAT = meta.categories;
const FADED = meta.faded || [];
const MATCH_ORDER = meta.match_order || GROUPS.map(g => g.key);
function groupOf(r) {
  const byKey = Object.fromEntries(GROUPS.map(g => [g.key, g]));
  for (const field of [r.group || '', r.company || '']) {
    for (const k of MATCH_ORDER) if (byKey[k].re.test(field)) return k;
  }
  return OTHER.key;
}

const rows = data
  .filter(r => typeof r.lat === 'number' && typeof r.lon === 'number')
  .map((r, i) => ({ ...r, id: i, g: groupOf(r), cityKey: `${r.pref}${r.city}`, company: r.company.replace(/^(株式会社|有限会社)\s*|\s*(株式会社|有限会社)$/g, '') }))
  .sort((a, b) => a.lat === b.lat ? 0 : b.lat - a.lat);

// Spread rows that share identical coordinates so every marker stays clickable
const seen = {};
for (const r of rows) {
  const k = `${r.lat.toFixed(5)},${r.lon.toFixed(5)}`;
  const n = seen[k] = (seen[k] || 0) + 1;
  if (n > 1) { r.lat += 0.0015 * (n - 1); r.lon += 0.0015 * (n - 1); }
}

const missing = data.filter(r => typeof r.lat !== 'number' || typeof r.lon !== 'number');
if (missing.length) console.warn(`skip ${missing.length} rows without lat/lon:`, missing.map(r => r.yard).join(', '));

const cities = {};
for (const r of rows) {
  const c = cities[r.cityKey] ||= { pref: r.pref, city: r.city, n: 0, companies: new Set(), lat: 0, lon: 0 };
  c.n++; c.companies.add(r.company); c.lat += r.lat; c.lon += r.lon;
}
const cityList = Object.values(cities).map(c => ({ ...c, lat: c.lat / c.n, lon: c.lon / c.n, companies: [...c.companies] }))
  .sort((a, b) => b.n - a.n || b.companies.length - a.companies.length);

const nCompanies = new Set(rows.map(r => r.company)).size;
const nPrefs = new Set(rows.map(r => r.pref)).size;
const J = v => JSON.stringify(v).replace(/</g, '\\u003c');
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const groupDefs = [...GROUPS, OTHER].map(({ key, label, color }) => ({ key, label, color }));
const countBy = k => rows.filter(r => r.g === k).length;

const html = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.title)}</title>
<meta name="description" content="${esc(meta.description.replace('{n}', rows.length))}">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
<style>
  :root{--bg:#F8F7F3;--ink:#1a1a1a;--sub:#555;--accent:#2563EB;--line:#E5E2DA;--chip:#EEF2FF}
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:-apple-system,"Hiragino Sans","Hiragino Kaku Gothic ProN",sans-serif;
    line-height:1.75;font-size:15px;-webkit-font-smoothing:antialiased}
  .wrap{max-width:1080px;margin:0 auto;padding:40px 28px 80px}
  @media(max-width:680px){.wrap{padding:28px 16px 60px}}
  header.top{border-bottom:2px solid var(--ink);padding-bottom:20px;margin-bottom:8px}
  header.top h1{font-size:26px;margin:0 0 4px}
  header.top .meta{color:var(--sub);font-size:13px}
  .lead{color:var(--sub);font-size:14px;margin-top:6px}
  h2{font-size:20px;margin:44px 0 6px;padding-top:14px;border-top:1px solid var(--line)}
  h2 .en{display:block;font-size:12px;color:var(--sub);font-weight:400;letter-spacing:.04em}
  a{color:var(--accent)}
  .kpi{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:18px 0}
  @media(max-width:680px){.kpi{grid-template-columns:repeat(2,1fr)}}
  .kpi .card{background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px}
  .kpi .k{font-size:12px;color:var(--sub)}
  .kpi .v{font-size:22px;font-weight:700;margin-top:3px;font-variant-numeric:tabular-nums}
  #map{height:640px;border:1px solid var(--line);border-radius:10px;background:#EDEBE4}
  @media(max-width:680px){#map{height:70vh}}
  .tools{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:14px 0 8px}
  .tools input{flex:1;min-width:180px;padding:8px 12px;border:1px solid var(--line);border-radius:8px;font-size:14px;background:#fff;font-family:inherit}
  .chips{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0}
  .chip{border:1px solid var(--line);background:#fff;color:var(--ink);font-size:12.5px;padding:4px 11px;border-radius:14px;cursor:pointer;font-family:inherit;display:inline-flex;align-items:center;gap:6px}
  .chip .dot{width:10px;height:10px;border-radius:50%;display:inline-block}
  .chip.off{opacity:.35}
  .chip .n{color:var(--sub);font-variant-numeric:tabular-nums}
  .count{font-size:12.5px;color:var(--sub);white-space:nowrap}
  table{width:100%;border-collapse:collapse;font-size:13.5px}
  th,td{border:1px solid var(--line);padding:7px 9px;text-align:left;vertical-align:top}
  th{background:#F0EEE8;font-weight:600;white-space:nowrap}
  td.num{text-align:right;font-variant-numeric:tabular-nums}
  tbody tr{cursor:pointer}
  tbody tr:hover{background:#FFFDF5}
  .tbl-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:14px 0}
  .tbl-scroll>table{min-width:760px}
  .gdot{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:6px;vertical-align:middle}
  .fn{color:var(--sub);font-size:12.5px}
  .pop b{font-size:14px}
  .pop .s{color:#555;font-size:12px}
  .leaflet-tooltip{font-family:inherit}
</style>
</head>
<body>
<!-- snav:start --><!-- snav:end -->
<div class="wrap">
<header class="top">
  <h1>${esc(meta.title)}</h1>
  <div class="meta">確認日 ${esc(meta.checked)}／${rows.length}拠点・${nCompanies}社・${cityList.length}市区町村</div>
  <p class="lead">${esc(meta.lead)}</p>
</header>

<div class="kpi">
  <div class="card"><div class="k">拠点数</div><div class="v">${rows.length}</div></div>
  <div class="card"><div class="k">企業数</div><div class="v">${nCompanies}</div></div>
  <div class="card"><div class="k">市区町村数</div><div class="v">${cityList.length}</div></div>
  <div class="card"><div class="k">都道府県数</div><div class="v">${nPrefs}</div></div>
</div>

<h2>地図<span class="en">Map</span></h2>
<div class="chips" id="gchips"></div>
<div class="chips" id="cchips"></div>
<div class="tools">
  <input type="search" id="q" placeholder="${esc(meta.search_placeholder)}" autocomplete="off">
  <span class="count" id="count"></span>
</div>
<div id="map" role="img" aria-label="${esc(meta.title)}"></div>
<p class="fn">地図：国土地理院 淡色地図。同じ市区町村に複数の拠点がある場合は、拡大すると個別の点に分かれる。</p>

<h2>市区町村別<span class="en">By Municipality</span></h2>
<p class="fn">拠点数の多い順。行を選択すると地図がその市区町村に移動する。</p>
<div class="tbl-scroll"><table id="ctbl"><thead><tr><th>市区町村</th><th>都道府県</th><th>拠点数</th><th>企業</th></tr></thead><tbody></tbody></table></div>

<h2>拠点一覧<span class="en">All Sites</span></h2>
<p class="fn">北から順に並べる。行を選択すると地図がその拠点に移動する。</p>
<div class="tbl-scroll"><table id="ytbl"><thead><tr><th>企業</th><th>${esc(meta.col_site)}</th><th>所在地</th><th>区分</th><th>${esc(meta.col_products)}</th><th>出典</th></tr></thead><tbody></tbody></table></div>

<h2>対象と注記<span class="en">Scope</span></h2>
${meta.notes.map(n => `<p class="fn">${esc(n)}</p>`).join('\n')}
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script>
const ROWS = ${J(rows.map(r => ({ id: r.id, company: r.company, yard: r.yard, pref: r.pref, city: r.city, address: r.address, lat: r.lat, lon: r.lon, cat: r.category, products: r.products, capacity: r.capacity, note: r.note, source: r.source, g: r.g })))};
const CITIES = ${J(cityList)};
const GROUPS = ${J(groupDefs)};
const CAT = ${J(CAT)};
const FADED = ${J(FADED)};
const gColor = Object.fromEntries(GROUPS.map(g => [g.key, g.color]));
const gLabel = Object.fromEntries(GROUPS.map(g => [g.key, g.label]));
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const onG = new Set(GROUPS.map(g => g.key));
const onC = new Set(Object.keys(CAT));
let map = null; const markers = {};

if (window.L) {
  map = L.map('map', { scrollWheelZoom: true, zoomSnap: 0.5 }).fitBounds(ROWS.map(r => [r.lat, r.lon]), { padding: [24, 24] });
  L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    maxZoom: 18, attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
  }).addTo(map);
  for (const r of ROWS) {
    const m = L.circleMarker([r.lat, r.lon], {
      radius: FADED.includes(r.cat) ? 6 : 8, color: '#fff', weight: 2,
      fillColor: gColor[r.g], fillOpacity: FADED.includes(r.cat) ? 0.55 : 0.95
    });
    m.bindTooltip(esc(r.company) + ' ' + esc(r.yard), { direction: 'top', offset: [0, -6] });
    m.bindPopup('<div class="pop"><b>' + esc(r.company) + '</b><br>' + esc(r.yard) +
      '<div class="s">' + esc(r.pref + r.city) + (r.address ? '／' + esc(r.address) : '') + '</div>' +
      '<div class="s">' + esc(gLabel[r.g]) + '／' + esc(CAT[r.cat] || '') + '</div>' +
      (r.products ? '<div>' + esc(r.products) + '</div>' : '') +
      (r.capacity ? '<div class="s">' + esc(r.capacity) + '</div>' : '') +
      (r.note ? '<div class="s">' + esc(r.note) + '</div>' : '') +
      (r.source ? '<div class="s"><a href="' + esc(r.source) + '" target="_blank" rel="noopener">出典</a></div>' : '') + '</div>');
    markers[r.id] = m;
  }
} else {
  document.getElementById('map').innerHTML = '<p style="padding:20px">地図ライブラリを読み込めなかった。下の一覧で所在地を確認できる。</p>';
}

function chip(label, color, n, on, fn) {
  const b = document.createElement('button');
  b.className = 'chip' + (on ? '' : ' off'); b.type = 'button';
  b.innerHTML = (color ? '<span class="dot" style="background:' + color + '"></span>' : '') + esc(label) + ' <span class="n">' + n + '</span>';
  b.onclick = () => { fn(); b.classList.toggle('off'); render(); };
  return b;
}
const gc = document.getElementById('gchips');
for (const g of GROUPS) {
  const n = ROWS.filter(r => r.g === g.key).length; if (!n) continue;
  gc.appendChild(chip(g.label, g.color, n, true, () => onG.has(g.key) ? onG.delete(g.key) : onG.add(g.key)));
}
const cc = document.getElementById('cchips');
for (const [k, v] of Object.entries(CAT)) {
  const n = ROWS.filter(r => r.cat === k).length; if (!n) continue;
  cc.appendChild(chip(v, null, n, true, () => onC.has(k) ? onC.delete(k) : onC.add(k)));
}
const q = document.getElementById('q');
q.addEventListener('input', render);

function visible(r) {
  const t = q.value.trim();
  if (!onG.has(r.g) || !onC.has(r.cat)) return false;
  if (!t) return true;
  return [r.company, r.yard, r.pref, r.city, r.products, gLabel[r.g]].join(' ').includes(t);
}
function focus(lat, lon, z, id) {
  if (!map) return;
  map.flyTo([lat, lon], z);
  if (id != null && markers[id]) setTimeout(() => markers[id].openPopup(), 600);
  document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function render() {
  const vis = ROWS.filter(visible);
  document.getElementById('count').textContent = vis.length + '／' + ROWS.length + '拠点';
  if (map) for (const r of ROWS) { const m = markers[r.id]; visible(r) ? m.addTo(map) : m.remove(); }
  const ids = new Set(vis.map(r => r.id));
  const yb = document.querySelector('#ytbl tbody');
  yb.innerHTML = vis.map(r => '<tr data-id="' + r.id + '"><td><span class="gdot" style="background:' + gColor[r.g] + '"></span>' + esc(r.company) +
    '</td><td>' + esc(r.yard) + '</td><td>' + esc(r.pref + r.city) + '</td><td>' + esc(CAT[r.cat] || '') + '</td><td>' + esc(r.products) +
    '</td><td>' + (r.source ? '<a href="' + esc(r.source) + '" target="_blank" rel="noopener">link</a>' : '') + '</td></tr>').join('');
  yb.querySelectorAll('tr').forEach(tr => tr.onclick = e => {
    if (e.target.tagName === 'A') return;
    const r = ROWS[ROWS.findIndex(x => x.id == tr.dataset.id)]; focus(r.lat, r.lon, 13, r.id);
  });
  const cb = document.querySelector('#ctbl tbody');
  const cs = CITIES.map(c => ({ ...c, v: vis.filter(r => r.pref === c.pref && r.city === c.city) })).filter(c => c.v.length)
    .sort((a, b) => b.v.length - a.v.length);
  cb.innerHTML = cs.map((c, i) => '<tr data-i="' + i + '"><td>' + esc(c.city) + '</td><td>' + esc(c.pref) + '</td><td class="num">' + c.v.length +
    '</td><td>' + [...new Set(c.v.map(r => '<span class="gdot" style="background:' + gColor[r.g] + '"></span>' + esc(r.company)))].join('、') + '</td></tr>').join('');
  cb.querySelectorAll('tr').forEach(tr => tr.onclick = () => { const c = cs[tr.dataset.i]; focus(c.lat, c.lon, 11); });
}
render();
</script>
</body>
</html>
`;
fs.writeFileSync(path.join(ROOT, meta.out), html);
console.log(`wrote ${meta.out}: ${rows.length} yards, ${cityList.length} municipalities`);
for (const g of [...GROUPS, OTHER]) console.log(`  ${g.label}: ${countBy(g.key)}`);
