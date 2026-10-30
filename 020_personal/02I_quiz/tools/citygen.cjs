#!/usr/bin/env node
// Builds the city questions ("which city is the dot on the map?").
//
//   node tools/citygen.cjs <node_modules dir>
//
// Needs cities.json@1.1.42 (GeoNames, places of 1,000+ people) and i18n-iso-countries@7.11.3
// installed outside the repo (see mapgen.cjs). Reads data/city_raw.jsonl: the places each
// page mentions, as listed by agents with their own rough coordinates
//   {"page","ja","en","cc","lat","lon","imp"}
// A place is kept only when GeoNames has a city of that name in that country within
// 0.7 degrees of the rough position, so a wrong guess cannot put the dot in the wrong
// place. Small Japanese towns missing from GeoNames are listed in EXTRA by hand.
// Writes data/city_items.json; build.py bundles it onto the pages the places came from.
const path = require('path'), fs = require('fs');
const NM = path.resolve(process.argv[2] || 'node_modules');
const req = m => require(path.join(NM, m));
const DB = req('cities.json');
const iso = req('i18n-iso-countries'); iso.registerLocale(req('i18n-iso-countries/langs/ja.json'));
const W = path.join(__dirname, '..', 'data');

// village/town offices (geospatial information authority of Japan)
const EXTRA = {
  'JP:rokkasho': [40.967, 141.374], 'JP:futaba': [37.449, 141.012], 'JP:atsuma': [42.69, 142.01],
  'JP:kikuyo': [32.862, 130.829], 'JP:tomioka-fukushima': [37.334, 141.007],
};
const CC_JA = { CN: '中国', KR: '韓国', KP: '北朝鮮', RU: 'ロシア', IR: 'イラン', SY: 'シリア', LA: 'ラオス', VE: 'ベネズエラ', BO: 'ボリビア', BN: 'ブルネイ', MD: 'モルドバ', US: 'アメリカ合衆国', GB: 'イギリス', ZA: '南アフリカ共和国', TW: '台湾', HK: '香港', MO: 'マカオ', PS: 'パレスチナ', VA: 'バチカン', CZ: 'チェコ', MK: '北マケドニア', TZ: 'タンザニア' };
const ccJa = cc => CC_JA[cc] || iso.getName(cc, 'ja') || cc;

const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/\b(city|shi|cho|chō|machi|mura|son|town|village)\b/g, '').replace(/[-'’ .]/g, '').replace(/(shi|cho|machi|mura)$/, '');
const byCc = {};
for (const c of DB) (byCc[c.country] ||= []).push({ n: norm(c.name), lat: +c.lat, lon: +c.lng, name: c.name });
const dist = (a, b) => Math.hypot((a[0] - b[0]), (a[1] - b[1]) * Math.cos(a[0] * Math.PI / 180));

function locate(x) {
  const extra = EXTRA[`${x.cc}:${norm(x.en)}`] || (x.cc === 'JP' && norm(x.en) === 'tomioka' && x.lat > 37 ? EXTRA['JP:tomioka-fukushima'] : null);
  if (extra) return { pos: extra, key: `${x.cc}:${extra}` };
  const n = norm(x.en), cand = (byCc[x.cc] || []).filter(c => c.n === n || (n.length >= 5 && (c.n.startsWith(n) || n.startsWith(c.n)) && c.n.length >= 4));
  const best = cand.map(c => [c, dist([c.lat, c.lon], [x.lat, x.lon])]).sort((a, b) => a[1] - b[1])[0];
  if (best && best[1] <= 0.7) return { pos: [best[0].lat, best[0].lon], key: `${x.cc}:${best[0].name}:${best[0].lat}` };
  // spelling variants (Ulaanbaatar / Ulan Bator, Ayutthaya / Phra Nakhon Si Ayutthaya): a nearby
  // city whose name starts the same way or contains the other one
  const alt = (byCc[x.cc] || []).map(c => [c, dist([c.lat, c.lon], [x.lat, x.lon])])
    .filter(([c, d]) => (d <= 0.1 && c.n.slice(0, 3) === n.slice(0, 3)) || (d <= 0.3 && n.length >= 5 && (c.n.includes(n) || n.includes(c.n)) && c.n.length >= 4))
    .sort((a, b) => a[1] - b[1])[0];
  return alt ? { pos: [alt[0].lat, alt[0].lon], key: `${x.cc}:${alt[0].name}:${alt[0].lat}` } : null;
}

const pages = Object.fromEntries(JSON.parse(fs.readFileSync(path.join(W, 'pages.json'))).map(p => [p.id, p]));
const raw = fs.readFileSync(path.join(W, 'city_raw.jsonl'), 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l));
const places = new Map(), miss = [];
for (const x of raw) {
  if (!pages[x.page]) continue;
  const src = fs.readFileSync(path.join(W, 'src', x.page + '.txt'), 'utf8');
  if (!src.includes(x.ja)) continue;
  const loc = locate(x);
  if (!loc) { miss.push(`${x.ja} (${x.en}, ${x.cc})`); continue; }
  const p = places.get(loc.key) || { pos: loc.pos, cc: x.cc, men: [] };
  p.men.push({ ...x, src });
  places.set(loc.key, p);
}

// One question per place: the name most pages use, on the page that treats it most centrally
// (a city's own research page first).
const sentence = (src, w) => {
  // skip the header lines (TITLE:, PATH: …) that open every src file
  const body = src.search(/\n\n/) + 2;
  let i = src.indexOf(w, body); if (i < 0) i = src.indexOf(w);
  const a = Math.max(src.lastIndexOf('。', i), src.lastIndexOf('\n', i)) + 1;
  let b = src.slice(i).search(/[。\n]/); b = b < 0 ? src.length : i + b + 1;
  let s = src.slice(a, b).trim();
  if (s.length > 200) s = s.slice(Math.max(0, i - a - 60), i - a + w.length + 100).trim();
  return s.replace(/^[#|>\-\s]+/, '');
};
// Japanese cities are shown without 市 so the four options read alike (大牟田, 熊本, not
// 大牟田 vs 熊本市); names whose own reading ends in いち keep it (四日市, 廿日市).
const show = (ja, cc, en) => cc === 'JP' && /[^市]市$|市市$/.test(ja) && !(ja.length <= 3 && /ichi$/.test(norm(en))) ? ja.slice(0, -1) : ja;
const list = [];
for (const p of places.values()) {
  // the city's own research page first, then the most central mention
  const own = m => (pages[m.page].genre === 'geo_cities' && m.imp === 1 ? 0 : 1);
  const m = p.men.slice().sort((a, b) => own(a) - own(b) || a.imp - b.imp)[0];
  list.push({ ja: show(m.ja, p.cc, m.en), page: m.page, own: own(m) === 0, imp: Math.min(...p.men.map(x => x.imp)), pos: p.pos, cc: p.cc, ev: sentence(m.src, m.ja) });
}
// two places that would read the same (伊達 in Fukushima and in Hokkaido): keep the one with its own page
const byName = {};
for (const c of list) (byName[c.ja] ||= []).push(c);
const pool = Object.values(byName).flatMap(g => g.length === 1 ? g : g.filter(c => c.own).slice(0, 1)).filter(c => c.ev.length >= 6);

const items = [];
for (const c of pool) {
  // distractors: the nearest other places far enough apart to tell on the map, same country first
  const near = pool.filter(o => o !== c && dist(o.pos, c.pos) > 0.25)
    .map(o => [o, dist(o.pos, c.pos) * (o.cc === c.cc ? 1 : 1.6)]).sort((a, b) => a[1] - b[1]).slice(0, 3).map(x => x[0].ja);
  if (near.length < 3) continue;
  items.push({ page: c.page, q: '地図の●で示した都市はどこか。', a: c.ja, d: near, pt: [Math.round(c.pos[1] * 1000) / 1000, Math.round(c.pos[0] * 1000) / 1000],
    e: `${c.ja}は${ccJa(c.cc)}の都市である。`, ev: c.ev, lv: c.imp });
}
items.sort((a, b) => a.page.localeCompare(b.page) || a.a.localeCompare(b.a, 'ja'));
fs.writeFileSync(path.join(W, 'city_items.json'), JSON.stringify(items).replace(/},{/g, '},\n{') + '\n');
console.log(`${raw.length} mentions, ${places.size} places located, ${miss.length} not found, ${items.length} questions (lv1 ${items.filter(x => x.lv === 1).length}, lv2 ${items.filter(x => x.lv === 2).length}, lv3 ${items.filter(x => x.lv === 3).length})`);
fs.writeFileSync(path.join(W, 'city_missing.txt'), [...new Set(miss)].sort().join('\n') + '\n');
