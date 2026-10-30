#!/usr/bin/env node
// Builds the country-map questions and the shapes they draw.
//
//   node tools/mapgen.cjs <node_modules dir>
//
// Needs world-atlas@2.0.2 topojson-client@3.1.0 topojson-simplify@3.0.3
// i18n-iso-countries@7.11.3 installed somewhere outside the repo (a scratchpad),
// passed as the argument. Writes:
//   map.js               window.QMAP = {k: cos-latitude scale, s: {name: [path, [x0,y0,x1,y1]]}}
//   data/map_items.json  the questions; build.py bundles them like any page's questions
// Coordinates are degrees (x = longitude, y = -latitude); the app scales x by
// cos(latitude) around each view so mid-latitude countries keep their shape.
const path = require('path'), fs = require('fs');
const NM = path.resolve(process.argv[2] || 'node_modules');
const req = m => require(path.join(NM, m));
const topo = req('world-atlas/countries-50m.json');
const { feature, merge, neighbors } = req('topojson-client');
const { presimplify, simplify, quantile } = req('topojson-simplify');
const iso = req('i18n-iso-countries'); iso.registerLocale(req('i18n-iso-countries/langs/ja.json'));
const OUT = path.join(__dirname, '..');

// The names the site uses, where i18n gives the formal one.
const ALIAS = {
  '156': '中国', '410': '韓国', '408': '北朝鮮', '643': 'ロシア', '364': 'イラン', '760': 'シリア', '418': 'ラオス',
  '862': 'ベネズエラ', '068': 'ボリビア', '096': 'ブルネイ', '498': 'モルドバ', '748': 'エスワティニ',
  '710': '南アフリカ共和国', '840': 'アメリカ合衆国', '826': 'イギリス', '807': '北マケドニア', '203': 'チェコ',
  '670': 'セントビンセント・グレナディーン', '336': 'バチカン', '583': 'ミクロネシア連邦', '275': 'パレスチナ',
};
// Drawn grey but never asked: dependencies, Antarctica and the parts of a country
// that Natural Earth keeps as separate shapes.
const NOT_ASKED = new Set(['010', '304', '344', '446', '630', '316', '533', '832', '831', '833', '060', '092', '796', '500', '850',
  '016', '580', '239', '086', '654', '612', '660', '238', '136', '534', '531', '184', '570', '666', '876', '663', '652', '258', '540',
  '260', '248', '234', '574', '334', '732']);
// Somaliland is drawn as part of Somalia.
const MERGE_INTO = { Somaliland: '706' };

let t = presimplify(topo);
t = simplify(t, quantile(t, 0.35));
const geoms = t.objects.countries.geometries;
const keyOf = g => MERGE_INTO[g.properties.name] || g.id || null;

// one geometry per country key
const groups = new Map();
geoms.forEach((g, i) => { const k = keyOf(g); if (!groups.has(k ?? 'x' + i)) groups.set(k ?? 'x' + i, []); groups.get(k ?? 'x' + i).push(i); });
const nb = neighbors(geoms);

const r2 = v => Math.round(v * 100) / 100;
function ringPath(ring) {
  let d = '', px, py;
  ring.forEach(([x, y], j) => {
    const X = r2(x), Y = r2(-y);
    if (j && X === px && Y === py) return;
    d += (j ? 'L' : 'M') + X + ' ' + Y; px = X; py = Y;
  });
  return d + 'Z';
}
function shape(idx) {
  const g = idx.length > 1 ? merge(t, idx.map(i => geoms[i])) : feature(t, geoms[idx[0]]).geometry;
  let polys = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
  if (!polys.length) return [''];
  // rings cut by the antimeridian come back with points at both -180 and 180: keep them on one side
  polys = polys.map(p => p.map(r => { const xs = r.map(c => c[0]); return Math.max(...xs) - Math.min(...xs) > 180 ? r.map(([x, y]) => [x < 0 ? x + 360 : x, y]) : r; }));
  const pbb = p => p[0].reduce((b, [x, y]) => [Math.min(b[0], x), Math.min(b[1], -y), Math.max(b[2], x), Math.max(b[3], -y)], [999, 999, -999, -999]);
  const area = p => { let a = 0; const r = p[0]; for (let i = 0; i < r.length - 1; i++) a += r[i][0] * r[i + 1][1] - r[i + 1][0] * r[i][1]; return Math.abs(a / 2); };
  const main = polys.slice().sort((a, b) => area(b) - area(a))[0];
  const mx = (pbb(main)[0] + pbb(main)[2]) / 2;
  // pieces across the antimeridian from the main part move next to it (Chukotka, the Aleutians, Fiji)
  polys = polys.map(p => { const b = pbb(p), cx = (b[0] + b[2]) / 2; const s = cx - mx > 180 ? -360 : mx - cx > 180 ? 360 : 0; return s ? p.map(r => r.map(([x, y]) => [x + s, y])) : p; });
  const d = polys.map(p => p.map(ringPath).join('')).join('');
  // the view covers the main part and the islands within 12 degrees of it, so
  // overseas territories (Reunion, Easter Island) do not shrink the country to a dot
  let bb = pbb(main), grew = true;
  const boxes = polys.map(pbb);
  while (grew) { grew = false; for (const b of boxes) {
    const near = b[0] < bb[2] + 12 && b[2] > bb[0] - 12 && b[1] < bb[3] + 12 && b[3] > bb[1] - 12;
    const nb2 = [Math.min(bb[0], b[0]), Math.min(bb[1], b[1]), Math.max(bb[2], b[2]), Math.max(bb[3], b[3])];
    if (near && nb2.some((v, i) => v !== bb[i])) { bb = nb2; grew = true; } } }
  return [d, bb.map(r2)];
}

const S = {}, info = [];
for (const [k, idx] of groups) {
  const name = /^\d+$/.test(k) ? ALIAS[k] || iso.getName(k, 'ja') : null;
  const [d, bb] = shape(idx);
  if (!d) continue;
  const key = name || 'z' + info.length;
  S[key] = [d, bb];
  if (name && !NOT_ASKED.has(k)) info.push({ k, name, idx, bb });
}

// difficulty from how often the site mentions the country
global.window = global; require(path.join(OUT, 'questions.js'));
const text = QDATA.q.filter(x => !x[11]).map(x => x[2] + x[3] + x[4].join('') + x[5]).join('\n');
const mentions = n => text.split(n).length - 1;
const cen = c => [(c.bb[0] + c.bb[2]) / 2, (c.bb[1] + c.bb[3]) / 2];
const items = [];
for (const c of info) {
  const [cx, cy] = cen(c);
  // distractors: the nearest countries, so the map has to be read rather than guessed
  const near = info.filter(o => o !== c).map(o => { const [x, y] = cen(o); return [o, Math.hypot(((dx => Math.min(dx, 360 - dx))(Math.abs(x - cx))) * Math.cos(cy * Math.PI / 180), y - cy)]; })
    .sort((a, b) => a[1] - b[1]).slice(0, 3).map(x => x[0].name);
  const adj = [...new Set(c.idx.flatMap(i => nb[i]).map(j => keyOf(geoms[j])))].filter(k => k && k !== c.k)
    .map(k => (info.find(o => o.k === k) || {}).name).filter(Boolean);
  const m = mentions(c.name);
  items.push({ q: '地図で色を付けた国・地域はどこか。', a: c.name, d: near, mp: c.name, lv: m >= 10 ? 1 : m >= 1 ? 2 : 3,
    e: adj.length ? `${c.name}と陸上で接する国・地域は${adj.length}あり、${adj.slice(0, 6).join('／')}${adj.length > 6 ? 'など' : ''}である。` : `${c.name}は陸上で他の国・地域と接していない。` });
}
items.sort((a, b) => a.lv - b.lv || a.a.localeCompare(b.a, 'ja'));
fs.writeFileSync(path.join(OUT, 'map.js'), 'window.QMAP=' + JSON.stringify({ s: S }) + ';\n');
fs.writeFileSync(path.join(OUT, 'data', 'map_items.json'), JSON.stringify(items, null, 0).replace(/},{/g, '},\n{') + '\n');
console.log(`${Object.keys(S).length} shapes, ${items.length} questions (lv1 ${items.filter(x => x.lv === 1).length}, lv2 ${items.filter(x => x.lv === 2).length}, lv3 ${items.filter(x => x.lv === 3).length}), map.js ${Math.round(fs.statSync(path.join(OUT, 'map.js')).size / 1024)} KB`);
