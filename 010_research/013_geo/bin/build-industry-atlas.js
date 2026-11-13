#!/usr/bin/env node
// Build the integrated Japan industry atlas page.
// Usage: node site/bin/build-industry-atlas.js
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const themes = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/themes.json'), 'utf8'));
const companiesRaw = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/companies.json'), 'utf8'));
const logoMap = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/logo_map.json'), 'utf8'));

const J = v => JSON.stringify(v).replace(/</g, '\\u003c');
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const stripCo = s => String(s || '').replace(/^(株式会社|有限会社|合同会社)\s*|\s*(株式会社|有限会社|合同会社)$/g, '');

const themePacks = [];
const sites = [];
const cityKeys = new Set();
let checkedMax = '';

for (const t of themes) {
  const dataPath = path.join(ROOT, `data/japan_${t.key}.json`);
  const metaPath = path.join(ROOT, `data/japan_${t.key}_meta.json`);
  if (!fs.existsSync(dataPath) || !fs.existsSync(metaPath)) {
    console.warn(`skip theme ${t.key}: missing data or meta`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  if (meta.checked && meta.checked > checkedMax) checkedMax = meta.checked;

  const faded = meta.faded || [];
  const categories = meta.categories || {};
  themePacks.push({
    key: t.key,
    label: t.label,
    color: t.color,
    out: meta.out,
    title: meta.title,
    checked: meta.checked,
    categories,
    faded,
  });

  const rows = data
    .filter(r => typeof r.lat === 'number' && typeof r.lon === 'number')
    .map((r, i) => ({
      theme: t.key,
      idx: i,
      company: r.company,
      yard: r.yard,
      pref: r.pref,
      city: r.city,
      address: r.address || '',
      lat: r.lat,
      lon: r.lon,
      cat: r.category || '',
      products: r.products || '',
      capacity: r.capacity || '',
      note: r.note || '',
      source: r.source || '',
      owners: Array.isArray(r.owners) ? r.owners.map(o => ({ name: o.name, share: o.share || '' })) : [],
    }));

  const missing = data.length - rows.length;
  if (missing) console.warn(`skip ${missing} rows without lat/lon in ${t.key}`);

  // Spread identical coordinates within the whole atlas after all themes load.
  for (const r of rows) {
    cityKeys.add(`${r.pref}${r.city}`);
    sites.push(r);
  }
}

// Spread rows that share identical coordinates so every marker stays clickable
const seen = {};
for (const r of sites) {
  const k = `${r.lat.toFixed(5)},${r.lon.toFixed(5)}`;
  const n = seen[k] = (seen[k] || 0) + 1;
  if (n > 1) {
    r.lat += 0.0015 * (n - 1);
    r.lon += 0.0015 * (n - 1);
  }
}

// Assign global id after spread
sites.forEach((r, i) => { r.id = i; });

const companyNames = new Set();
for (const r of sites) {
  if (r.company) companyNames.add(r.company);
  for (const o of r.owners) if (o.name) companyNames.add(o.name);
}

const companies = {};
for (const name of Object.keys(companiesRaw)) {
  const c = companiesRaw[name];
  companies[name] = {
    name: c.name || name,
    short: c.short || stripCo(name),
    parent: c.parent || '',
    domain: c.domain || '',
    listed: !!c.listed,
    ticker: c.ticker || '',
    market: c.market || '',
    market_cap_oku: c.market_cap_oku ?? null,
    market_cap_asof: c.market_cap_asof || '',
    market_cap_of: c.market_cap_of || '',
    revenue_oku: c.revenue_oku ?? null,
    revenue_fy: c.revenue_fy || '',
    revenue_of: c.revenue_of || '',
    employees: c.employees ?? null,
    industry: c.industry || '',
    summary: c.summary || '',
    competitors: Array.isArray(c.competitors) ? c.competitors : [],
    ai: Array.isArray(c.ai) ? c.ai : [],
    sources: Array.isArray(c.sources) ? c.sources : [],
    logo: logoMap[name] || '',
  };
}

// Ensure every site/owner name has at least a stub so the UI can open a card.
for (const name of companyNames) {
  if (companies[name]) continue;
  companies[name] = {
    name,
    short: stripCo(name),
    parent: '',
    domain: '',
    listed: false,
    ticker: '',
    market: '',
    market_cap_oku: null,
    market_cap_asof: '',
    market_cap_of: '',
    revenue_oku: null,
    revenue_fy: '',
    revenue_of: '',
    employees: null,
    industry: '',
    summary: '',
    competitors: [],
    ai: [],
    sources: [],
    logo: logoMap[name] || '',
    stub: true,
  };
}

const nSites = sites.length;
const nCompanies = new Set(sites.map(r => r.company).filter(Boolean)).size;
const nThemes = themePacks.length;
const nCities = cityKeys.size;
const checked = checkedMax || '—';

const html = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>日本の産業拠点アトラス</title>
<meta name="description" content="日本の産業拠点${nSites}件をテーマ横断で地図に表示する。企業情報と拠点の所在地を一つのページで確認できる。">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
<style>
  :root{--bg:#F8F7F3;--ink:#1a1a1a;--sub:#555;--accent:#2563EB;--line:#E5E2DA;--chip:#EEF2FF;--panel:380px}
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:-apple-system,"Hiragino Sans","Hiragino Kaku Gothic ProN",sans-serif;
    line-height:1.75;font-size:15px;-webkit-font-smoothing:antialiased}
  .wrap{max-width:1180px;margin:0 auto;padding:40px 28px 80px;min-width:0}
  @media(max-width:820px){.wrap{padding:28px 16px 60px}}
  header.top{border-bottom:2px solid var(--ink);padding-bottom:20px;margin-bottom:8px;min-width:0}
  header.top h1{font-size:26px;margin:0 0 4px}
  header.top .meta{color:var(--sub);font-size:13px;line-height:1.6;overflow-wrap:anywhere;word-break:break-word}
  .lead{color:var(--sub);font-size:14px;margin-top:6px}
  h2{font-size:20px;margin:44px 0 6px;padding-top:14px;border-top:1px solid var(--line)}
  h2 .en{display:block;font-size:12px;color:var(--sub);font-weight:400;letter-spacing:.04em}
  a{color:var(--accent)}
  .kpi{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:18px 0;min-width:0}
  @media(max-width:820px){.kpi{grid-template-columns:repeat(2,1fr)}}
  .kpi .card{background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px;min-width:0}
  .kpi .k{font-size:12px;color:var(--sub)}
  .kpi .v{font-size:22px;font-weight:700;margin-top:3px;font-variant-numeric:tabular-nums}
  .tools{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:10px 0 8px;min-width:0;width:100%}
  .tools input{flex:1 1 100%;min-width:0;width:100%;box-sizing:border-box;padding:8px 12px;border:1px solid var(--line);border-radius:8px;font-size:14px;background:#fff;font-family:inherit}
  .chips{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0;min-width:0}
  .chip{border:1px solid var(--line);background:#fff;color:var(--ink);font-size:12px;padding:4px 11px;border-radius:14px;cursor:pointer;font-family:inherit;display:inline-flex;align-items:center;gap:6px;max-width:100%}
  .chip .dot{width:10px;height:10px;border-radius:50%;display:inline-block;flex:0 0 auto;box-sizing:border-box}
  .chip.off{background:#fff;color:#999;opacity:1}
  .chip.off .n{color:#999}
  .chip .n{color:var(--sub);font-variant-numeric:tabular-nums}
  .chip.pick{border-color:var(--accent);background:var(--chip)}
  .chip-act{border:1px solid var(--line);background:#F8F7F3;color:var(--sub);font-size:11px;padding:3px 9px;border-radius:12px;cursor:pointer;font-family:inherit}
  .count{font-size:12px;color:var(--sub);white-space:nowrap;flex:0 0 auto}
  .atlas{display:grid;grid-template-columns:1fr var(--panel);gap:14px;align-items:stretch;margin-top:4px;min-width:0}
  @media(max-width:820px){.atlas{grid-template-columns:1fr}}
  .map-pane{min-width:0}
  #map{height:640px;border:1px solid var(--line);border-radius:10px;background:#EDEBE4}
  @media(max-width:820px){#map{height:62vh;max-height:520px;min-height:360px}}
  .panel{background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px;overflow:auto;max-height:640px;min-height:280px;min-width:0}
  @media(max-width:820px){.panel{max-height:none}}
  .clear-sel{display:inline-block;margin:0 0 10px;border:1px solid var(--line);background:#fff;color:var(--ink);font-size:12px;padding:5px 11px;border-radius:8px;cursor:pointer;font-family:inherit}
  .parent-tag{font-size:10px;color:#999;margin-left:4px;font-weight:400;vertical-align:middle}
  .site-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
  .btn-link{display:inline-block;background:#fff;border:1px solid var(--line);border-radius:6px;padding:5px 11px;text-decoration:none;color:var(--ink);font-size:12.5px;font-family:inherit}
  .panel h3{font-size:15px;margin:0 0 8px}
  .panel .hint{color:var(--sub);font-size:12.5px;margin:0 0 10px}
  .scard,.ccard{background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px;margin:0 0 12px}
  .scard:last-child,.ccard:last-child{margin-bottom:0}
  .scard .ttl{font-size:15px;font-weight:700;margin:0 0 4px}
  .scard .meta,.ccard .meta{font-size:12px;color:var(--sub)}
  .scard dl,.ccard dl{margin:8px 0 0;display:grid;grid-template-columns:72px 1fr;gap:4px 8px;font-size:12.5px}
  .scard dt,.ccard dt{color:var(--sub);margin:0}
  .scard dd,.ccard dd{margin:0;word-break:break-word}
  .ccard .head{display:flex;gap:10px;align-items:flex-start}
  .logo{width:40px;height:40px;border-radius:8px;object-fit:contain;background:#F5F4F0;border:1px solid var(--line);flex:0 0 auto}
  .logo-badge{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#fff;flex:0 0 auto}
  .ccard .name{font-size:14px;font-weight:700;margin:0}
  .ccard .sub{font-size:12px;color:var(--sub);margin:2px 0 0}
  .nums{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px}
  .nums .box{background:#F8F7F3;border-radius:8px;padding:8px}
  .nums .k{font-size:12px;color:var(--sub)}
  .nums .v{font-size:14px;font-weight:700;font-variant-numeric:tabular-nums;text-align:right}
  .nums .u{font-size:12px;color:var(--sub);text-align:right}
  .ofnote{font-size:12px;color:var(--sub);margin-top:4px}
  .theme-dots{display:inline-flex;gap:4px;flex-wrap:wrap;align-items:center;vertical-align:middle}
  .theme-dots .td{width:8px;height:8px;border-radius:50%;display:inline-block}
  .site-by-theme{font-size:12px;margin-top:6px;color:var(--sub)}
  .ai-list{margin:8px 0 0;padding:0;list-style:none}
  .ai-list li{border-top:1px solid var(--line);padding:8px 0;font-size:12.5px}
  .ai-list li:first-child{border-top:0;padding-top:0}
  .ai-list .y{color:var(--sub);font-variant-numeric:tabular-nums;margin-right:6px}
  .top10{margin:0;padding:0;list-style:none}
  .top10 li{display:flex;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px solid var(--line);font-size:12.5px;cursor:pointer}
  .top10 li:hover{background:#FFFDF5}
  .top10 .n{font-variant-numeric:tabular-nums;color:var(--sub);white-space:nowrap}
  .tbl-tools{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:10px 0}
  .tbl-tools select{padding:6px 10px;border:1px solid var(--line);border-radius:8px;font-size:13px;background:#fff;font-family:inherit}
  table{width:100%;border-collapse:collapse;font-size:13px}
  th,td{border:1px solid var(--line);padding:7px 9px;text-align:left;vertical-align:top}
  th{background:#F0EEE8;font-weight:600;white-space:nowrap;cursor:pointer;user-select:none}
  th .sort{color:var(--sub);font-weight:400;margin-left:4px}
  td.num{text-align:right;font-variant-numeric:tabular-nums}
  tbody tr{cursor:pointer}
  tbody tr:hover{background:#FFFDF5}
  tbody tr.on{background:#EEF2FF}
  .tbl-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:14px 0}
  .tbl-scroll>table{min-width:760px}
  .logo-sm{width:28px;height:28px;border-radius:6px;object-fit:contain;background:#F5F4F0;border:1px solid var(--line);vertical-align:middle}
  .logo-badge-sm{width:28px;height:28px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;vertical-align:middle}
  .theme-links{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:12px 0}
  @media(max-width:680px){.theme-links{grid-template-columns:1fr}}
  .theme-links a{display:flex;align-items:center;gap:8px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:10px 12px;text-decoration:none;color:var(--ink);font-size:13px}
  .theme-links a:hover{border-color:var(--accent)}
  .fn{color:var(--sub);font-size:12.5px}
  .leaflet-tooltip{font-family:inherit}
  .marker-hi{filter:drop-shadow(0 0 2px rgba(37,99,235,.9))}
</style>
</head>
<body>
<!-- snav:start --><!-- snav:end -->
<div class="wrap">
<header class="top">
  <h1>日本の産業拠点アトラス</h1>
  <div class="meta">確認日 ${esc(checked)}／${nSites}拠点・${nCompanies}社・${nThemes}テーマ・${nCities}市区町村</div>
  <p class="lead">製鉄所からデータセンターまで、産業拠点をテーマ横断で一つの地図に表示する。点の色はテーマを示す。</p>
</header>

<div class="kpi">
  <div class="card"><div class="k">拠点数</div><div class="v">${nSites}</div></div>
  <div class="card"><div class="k">企業数</div><div class="v">${nCompanies}</div></div>
  <div class="card"><div class="k">テーマ数</div><div class="v">${nThemes}</div></div>
  <div class="card"><div class="k">市区町村数</div><div class="v">${nCities}</div></div>
</div>

<h2>地図と詳細<span class="en">Map and Detail</span></h2>
<div class="chips" id="tchips"></div>
<div class="tools">
  <input type="search" id="q" placeholder="検索（企業名・拠点名・市区町村・製品）" autocomplete="off">
  <span class="count" id="count"></span>
</div>
<div class="atlas">
  <div class="map-pane"><div id="map" role="img" aria-label="日本の産業拠点アトラス"></div></div>
  <aside class="panel" id="panel" aria-live="polite"></aside>
</div>
<p class="fn">地図：国土地理院 淡色地図・全国最新写真。右上で航空写真に切り替えられる。拠点を選択すると右側のパネルに詳細を表示する。同じ座標の拠点は、選択できるように位置をわずかにずらしている。</p>

<h2>企業一覧<span class="en">Companies</span></h2>
<p class="fn">拠点を持つ企業を拠点数の多い順に示す。列見出しを選択すると並べ替える。行を選択すると地図とその企業のカードへ移る。</p>
<div class="tbl-tools">
  <label>業種 <select id="ind"></select></label>
  <span class="count" id="coCount"></span>
</div>
<div class="tbl-scroll"><table id="cotbl"><thead><tr>
  <th data-k="logo">ロゴ</th>
  <th data-k="name">企業名<span class="sort"></span></th>
  <th data-k="industry">業種<span class="sort"></span></th>
  <th data-k="mcap">時価総額<span class="sort"></span></th>
  <th data-k="rev">売上高<span class="sort"></span></th>
  <th data-k="sites">拠点数<span class="sort"></span></th>
  <th data-k="themes">テーマ</th>
  <th data-k="ai">AI<span class="sort"></span></th>
</tr></thead><tbody></tbody></table></div>

<h2>テーマ別の個別ページ<span class="en">Theme Pages</span></h2>
<p class="fn">テーマごとの詳細な区分と注記は個別ページを参照する。</p>
<div class="theme-links" id="tlinks"></div>

<h2>注記<span class="en">Notes</span></h2>
<p class="fn">データの確認日はテーマごとに異なる。ヘッダーの確認日は各テーマの確認日のうち最も新しい日付である。</p>
<p class="fn">時価総額と売上高は各社の公表値を用いる。親会社の値を使う場合は企業カードに「親会社（名称）の値」と記載する。</p>
<p class="fn">ロゴは各社公式サイトのアイコンを識別のために表示している。</p>
<p class="fn">座標は国土地理院ジオコーダの値である。広い敷地では構内の一点を示す。</p>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script>
const THEMES = ${J(themePacks)};
const SITES = ${J(sites)};
const COMPANIES = ${J(companies)};
const themeByKey = Object.fromEntries(THEMES.map(t => [t.key, t]));
const catLabel = (theme, cat) => (themeByKey[theme] && themeByKey[theme].categories[cat]) || cat || '';
const fadedOf = theme => (themeByKey[theme] && themeByKey[theme].faded) || [];
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const stripCo = s => String(s || '').replace(/^(株式会社|有限会社|合同会社)\\s*|\\s*(株式会社|有限会社|合同会社)$/g, '');

function fmtOku(n) {
  if (n == null || n === '') return '—';
  const x = Number(n);
  if (!Number.isFinite(x)) return '—';
  if (x >= 10000) return (x / 10000).toFixed(1) + '兆円';
  return x.toLocaleString('ja-JP') + '億円';
}
function fmtNum(n) {
  if (n == null || n === '') return '—';
  const x = Number(n);
  if (!Number.isFinite(x)) return '—';
  return x.toLocaleString('ja-JP');
}
function initialOf(name) {
  const s = (COMPANIES[name] && COMPANIES[name].short) || stripCo(name) || name || '?';
  return s.charAt(0);
}
function badgeColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  const hue = h % 360;
  return 'hsl(' + hue + ' 42% 42%)';
}
function logoHtml(name, sm) {
  const c = COMPANIES[name];
  const cls = sm ? 'logo-sm' : 'logo';
  const bcls = sm ? 'logo-badge-sm' : 'logo-badge';
  if (c && c.logo) return '<img class="' + cls + '" src="' + esc(c.logo) + '" alt="" width="' + (sm?28:40) + '" height="' + (sm?28:40) + '">';
  return '<span class="' + bcls + '" style="background:' + badgeColor(name) + '">' + esc(initialOf(name)) + '</span>';
}
function knownCompany(name) {
  if (!name) return false;
  if (COMPANIES[name] && !COMPANIES[name].stub) return true;
  return SITES.some(r => r.company === name || (r.owners || []).some(o => o.name === name));
}
function sitesOfCompany(name) {
  return SITES.filter(r => r.company === name || (r.owners || []).some(o => o.name === name));
}
function siteCountByTheme(name) {
  const m = {};
  for (const r of sitesOfCompany(name)) m[r.theme] = (m[r.theme] || 0) + 1;
  return m;
}
function operatorSites(name) {
  return SITES.filter(r => r.company === name);
}

const onT = new Set(THEMES.map(t => t.key));
let map = null;
const markers = {};
let selectedSiteId = null;
let selectedCompany = null;
let sortKey = 'sites';
let sortDir = -1;

if (window.L) {
  map = L.map('map', { scrollWheelZoom: true, zoomSnap: 0.5 }).fitBounds(SITES.map(r => [r.lat, r.lon]), { padding: [24, 24] });
  const gsiAttr = '<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>';
  const pale = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', { maxZoom: 18, attribution: gsiAttr }).addTo(map);
  const photo = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', { maxZoom: 18, attribution: gsiAttr });
  L.control.layers({ '淡色地図': pale, '航空写真': photo }, null, { position: 'topright', collapsed: false }).addTo(map);
  for (const r of SITES) {
    const faded = fadedOf(r.theme).includes(r.cat);
    const color = themeByKey[r.theme] ? themeByKey[r.theme].color : '#8a8880';
    const m = L.circleMarker([r.lat, r.lon], {
      radius: faded ? 6 : 7, color: '#fff', weight: 2,
      fillColor: color, fillOpacity: faded ? 0.55 : 0.95
    });
    m.bindTooltip(esc(r.company) + ' ' + esc(r.yard), { direction: 'top', offset: [0, -6] });
    m.on('click', () => selectSite(r.id, true));
    markers[r.id] = m;
  }
} else {
  document.getElementById('map').innerHTML = '<p style="padding:20px">地図ライブラリを読み込めなかった。下の一覧で所在地を確認できる。</p>';
}

const tc = document.getElementById('tchips');
function syncChipStyles() {
  tc.querySelectorAll('.chip[data-key]').forEach(b => {
    const key = b.dataset.key;
    const on = onT.has(key);
    const color = themeByKey[key] ? themeByKey[key].color : '#8a8880';
    b.classList.toggle('off', !on);
    const dot = b.querySelector('.dot');
    if (!dot) return;
    if (on) {
      dot.style.background = color;
      dot.style.border = 'none';
    } else {
      dot.style.background = 'transparent';
      dot.style.border = '2px solid ' + color;
    }
  });
}
for (const t of THEMES) {
  const n = SITES.filter(r => r.theme === t.key).length;
  if (!n) continue;
  const b = document.createElement('button');
  b.className = 'chip'; b.type = 'button';
  b.dataset.key = t.key;
  b.innerHTML = '<span class="dot" style="background:' + t.color + '"></span>' + esc(t.label) + ' <span class="n">' + n + '</span>';
  b.onclick = () => {
    if (onT.has(t.key)) onT.delete(t.key); else onT.add(t.key);
    syncChipStyles();
    renderMap();
  };
  tc.appendChild(b);
}
{
  const allBtn = document.createElement('button');
  allBtn.type = 'button'; allBtn.className = 'chip-act'; allBtn.textContent = 'すべて';
  allBtn.onclick = () => { THEMES.forEach(t => onT.add(t.key)); syncChipStyles(); renderMap(); };
  const noneBtn = document.createElement('button');
  noneBtn.type = 'button'; noneBtn.className = 'chip-act'; noneBtn.textContent = 'すべて解除';
  noneBtn.onclick = () => { onT.clear(); syncChipStyles(); renderMap(); };
  tc.appendChild(allBtn);
  tc.appendChild(noneBtn);
}
syncChipStyles();

const q = document.getElementById('q');
q.addEventListener('input', renderMap);

function visible(r) {
  if (!onT.has(r.theme)) return false;
  const t = q.value.trim();
  if (!t) return true;
  const themeLabel = themeByKey[r.theme] ? themeByKey[r.theme].label : '';
  const ownerNames = (r.owners || []).map(o => o.name).join(' ');
  return [r.company, r.yard, r.pref, r.city, r.products, themeLabel, ownerNames].join(' ').includes(t);
}

function setHash() {
  if (selectedSiteId != null) {
    const r = SITES[selectedSiteId];
    if (r) { location.hash = 's=' + encodeURIComponent(r.theme) + ':' + r.idx; return; }
  }
  if (selectedCompany) { location.hash = 'c=' + encodeURIComponent(selectedCompany); return; }
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
}

function styleMarkers() {
  const hi = selectedCompany ? new Set(sitesOfCompany(selectedCompany).map(r => r.id)) : null;
  const front = [];
  for (const r of SITES) {
    const m = markers[r.id];
    if (!m) continue;
    const faded = fadedOf(r.theme).includes(r.cat);
    const color = themeByKey[r.theme] ? themeByKey[r.theme].color : '#8a8880';
    const base = faded ? 6 : 7;
    const isSel = selectedSiteId === r.id;
    const isHi = hi && hi.has(r.id);
    if (hi) {
      m.setStyle({
        radius: isHi ? base * 1.5 : base,
        weight: 2,
        color: isHi ? '#1a1a1a' : '#fff',
        fillColor: color,
        fillOpacity: isHi ? (faded ? 0.55 : 0.95) : 0.18
      });
      if (isHi) front.push(m);
    } else {
      m.setStyle({
        radius: isSel ? base * 1.5 : base,
        weight: 2,
        color: isSel ? '#1a1a1a' : '#fff',
        fillColor: color,
        fillOpacity: faded ? 0.55 : 0.95
      });
      if (isSel) front.push(m);
    }
  }
  for (const m of front) m.bringToFront();
}

function earthUrl(lat, lon) {
  return 'https://earth.google.com/web/@' + lat + ',' + lon + ',0a,1500d,35y,0h,0t,0r';
}

function chipBtn(label, name, extra) {
  const ok = knownCompany(name);
  if (!ok) return '<span class="chip" style="cursor:default">' + esc(label) + (extra ? ' <span class="n">' + esc(extra) + '</span>' : '') + '</span>';
  return '<button type="button" class="chip pick" data-co="' + esc(name) + '">' + esc(label) + (extra ? ' <span class="n">' + esc(extra) + '</span>' : '') + '</button>';
}

function renderSiteCard(r) {
  const t = themeByKey[r.theme];
  const lines = [];
  lines.push('<div class="scard">');
  lines.push('<div class="ttl">' + esc(r.yard) + '</div>');
  lines.push('<div class="meta"><span class="dot" style="background:' + (t ? t.color : '#888') + ';width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:6px"></span>' + esc(t ? t.label : r.theme) + '</div>');
  lines.push('<dl>');
  lines.push('<dt>所在地</dt><dd>' + esc(r.pref + r.city) + (r.address ? '／' + esc(r.address) : '') + '</dd>');
  lines.push('<dt>区分</dt><dd>' + esc(catLabel(r.theme, r.cat)) + '</dd>');
  if (r.products) lines.push('<dt>製品</dt><dd>' + esc(r.products) + '</dd>');
  if (r.capacity) lines.push('<dt>規模</dt><dd>' + esc(r.capacity) + '</dd>');
  if (r.note) lines.push('<dt>注記</dt><dd>' + esc(r.note) + '</dd>');
  lines.push('</dl>');
  lines.push('<div class="site-actions">');
  if (r.source) lines.push('<a class="btn-link" href="' + esc(r.source.split(/\\s+/)[0]) + '" target="_blank" rel="noopener">出典を開く</a>');
  lines.push('<a class="btn-link" href="' + esc(earthUrl(r.lat, r.lon)) + '" target="_blank" rel="noopener">Google Earthで開く</a>');
  lines.push('</div>');
  if (r.owners && r.owners.length) {
    lines.push('<div class="meta" style="margin-top:10px">出資者</div>');
    lines.push('<div class="chips" style="margin:6px 0 0">' + r.owners.map(o => chipBtn(o.name, o.name, o.share)).join('') + '</div>');
  }
  lines.push('</div>');
  return lines.join('');
}

function renderCompanyCard(name) {
  const c = COMPANIES[name] || { name, short: stripCo(name), stub: true, competitors: [], ai: [] };
  const byT = siteCountByTheme(name);
  const total = Object.values(byT).reduce((a, b) => a + b, 0);
  const themeBits = THEMES.filter(t => byT[t.key]).map(t => '<span class="td" style="background:' + t.color + '" title="' + esc(t.label) + '"></span> ' + esc(t.label) + ' ' + byT[t.key]).join('／');
  const mcapOf = c.market_cap_of === 'parent' && c.parent;
  const revOf = c.revenue_of === 'parent' && c.parent;
  const listed = c.listed
    ? ((c.market || '上場') + (c.ticker ? ' ' + c.ticker : ''))
    : (c.ticker
      ? ('非上場（親会社 ' + (c.parent || '—') + ' 証券コード ' + c.ticker + '）')
      : '非上場');
  let html = '<div class="ccard" data-co="' + esc(name) + '">';
  html += '<div class="head">' + logoHtml(name, false) + '<div>';
  html += '<p class="name">' + esc(c.short || stripCo(name)) + '</p>';
  html += '<p class="sub">' + esc(c.name || name) + (c.industry ? '／' + esc(c.industry) : '') + '</p>';
  html += '</div></div>';
  if (!c.stub) {
    html += '<div class="nums">';
    html += '<div class="box"><div class="k">時価総額</div><div class="v">' + fmtOku(c.market_cap_oku) + (mcapOf ? '<span class="parent-tag" title="親会社（' + esc(c.parent) + '）の値">親</span>' : '') + '</div><div class="u">' + esc(c.market_cap_asof || '') + '</div></div>';
    html += '<div class="box"><div class="k">売上高</div><div class="v">' + fmtOku(c.revenue_oku) + (revOf ? '<span class="parent-tag" title="親会社（' + esc(c.parent) + '）の値">親</span>' : '') + '</div><div class="u">' + esc(c.revenue_fy || '') + '</div></div>';
    html += '</div>';
    if (mcapOf || revOf) {
      const notes = [];
      if (mcapOf) notes.push('時価総額は親会社（' + c.parent + '）の値');
      if (revOf) notes.push('売上高は親会社（' + c.parent + '）の値');
      html += '<div class="ofnote">' + esc(notes.join('。')) + '。</div>';
    }
    html += '<dl>';
    html += '<dt>上場</dt><dd>' + esc(listed) + '</dd>';
    html += '<dt>従業員</dt><dd class="num" style="text-align:left">' + fmtNum(c.employees) + (c.employees != null ? '人' : '') + '</dd>';
    if (c.summary) html += '<dt>概要</dt><dd>' + esc(c.summary) + '</dd>';
    html += '</dl>';
  } else {
    html += '<p class="ofnote">企業の財務プロフィールは未収録である。</p>';
  }
  html += '<div class="site-by-theme">拠点数 ' + total + (themeBits ? '（' + themeBits + '）' : '') + '</div>';
  if (c.competitors && c.competitors.length) {
    html += '<div class="meta" style="margin-top:10px">競合</div>';
    html += '<div class="chips" style="margin:6px 0 0">' + c.competitors.map(n => chipBtn((COMPANIES[n] && COMPANIES[n].short) || stripCo(n) || n, n)).join('') + '</div>';
  }
  if (c.ai && c.ai.length) {
    html += '<div class="meta" style="margin-top:10px">AIの取り組み</div>';
    html += '<ul class="ai-list">' + c.ai.map(a => '<li><span class="y">' + esc(a.year || '') + '</span><b>' + esc(a.title || '') + '</b><div>' + esc(a.summary || '') + '</div>' + (a.source ? '<div><a href="' + esc(a.source) + '" target="_blank" rel="noopener">出典</a></div>' : '') + '</li>').join('') + '</ul>';
  }
  html += '</div>';
  return html;
}

function clearSelection() {
  selectedSiteId = null;
  selectedCompany = null;
  styleMarkers();
  renderPanel();
  setHash();
  highlightTable();
}

function clearSelBtnHtml() {
  return '<button type="button" class="clear-sel" id="clearSel">選択を解除</button>';
}

function bindClearSel(el) {
  const b = el.querySelector('#clearSel');
  if (b) b.onclick = () => clearSelection();
}

function renderPanel() {
  const el = document.getElementById('panel');
  if (selectedSiteId != null) {
    const r = SITES[selectedSiteId];
    if (!r) { selectedSiteId = null; }
    else {
      const names = [];
      if (r.company) names.push(r.company);
      for (const o of (r.owners || [])) if (o.name && !names.includes(o.name)) names.push(o.name);
      el.innerHTML = clearSelBtnHtml() + renderSiteCard(r) + names.map(renderCompanyCard).join('');
      bindClearSel(el);
      bindPanelClicks(el);
      return;
    }
  }
  if (selectedCompany) {
    el.innerHTML = clearSelBtnHtml() + renderCompanyCard(selectedCompany);
    bindClearSel(el);
    bindPanelClicks(el);
    return;
  }
  const top = [...new Set(SITES.map(r => r.company).filter(Boolean))]
    .map(n => ({ name: n, n: operatorSites(n).length, short: (COMPANIES[n] && COMPANIES[n].short) || stripCo(n) }))
    .sort((a, b) => b.n - a.n || a.name.localeCompare(b.name, 'ja'))
    .slice(0, 10);
  el.innerHTML = '<h3>使い方</h3>' +
    '<p class="hint">地図上の点を選択すると、拠点の概要と運営企業の情報を右側に表示する。</p>' +
    '<p class="hint">テーマのチップと検索欄で表示する拠点を絞り込める。企業一覧の行を選択すると、その企業の拠点を地図で強調する。</p>' +
    '<h3 style="margin-top:16px">拠点数の多い企業</h3>' +
    '<ul class="top10">' + top.map(t => '<li data-co="' + esc(t.name) + '"><span>' + esc(t.short) + '</span><span class="n">' + t.n + '</span></li>').join('') + '</ul>';
  el.querySelectorAll('[data-co]').forEach(node => {
    node.onclick = () => selectCompany(node.getAttribute('data-co'), true);
  });
}

function bindPanelClicks(el) {
  el.querySelectorAll('button.chip[data-co]').forEach(b => {
    b.onclick = e => { e.preventDefault(); selectCompany(b.getAttribute('data-co'), true); };
  });
}

function selectSite(id, fly) {
  selectedSiteId = id;
  selectedCompany = null;
  const r = SITES[id];
  styleMarkers();
  renderPanel();
  setHash();
  if (fly && map && r) {
    map.flyTo([r.lat, r.lon], Math.max(map.getZoom(), 12));
    document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  highlightTable();
}

function selectCompany(name, fly) {
  selectedCompany = name;
  selectedSiteId = null;
  styleMarkers();
  renderPanel();
  setHash();
  const rows = sitesOfCompany(name);
  if (fly && map && rows.length) {
    const b = L.latLngBounds(rows.map(r => [r.lat, r.lon]));
    map.fitBounds(b, { padding: [36, 36], maxZoom: 12 });
    document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  highlightTable();
}

function renderMap() {
  const vis = SITES.filter(visible);
  document.getElementById('count').textContent = vis.length + '／' + SITES.length + '拠点';
  if (map) for (const r of SITES) {
    const m = markers[r.id];
    if (!m) continue;
    if (visible(r)) m.addTo(map); else m.remove();
  }
  styleMarkers();
}

// ----- company table -----
const operatorList = [...new Set(SITES.map(r => r.company).filter(Boolean))];
const industries = [...new Set(operatorList.map(n => (COMPANIES[n] && COMPANIES[n].industry) || '').filter(Boolean))].sort((a, b) => a.localeCompare(b, 'ja'));
const indSel = document.getElementById('ind');
indSel.innerHTML = '<option value="">すべて</option>' + industries.map(i => '<option value="' + esc(i) + '">' + esc(i) + '</option>').join('');
indSel.addEventListener('change', renderCompanyTable);

document.querySelectorAll('#cotbl th[data-k]').forEach(th => {
  th.addEventListener('click', () => {
    const k = th.dataset.k;
    if (k === 'logo' || k === 'themes') return;
    if (sortKey === k) sortDir *= -1; else { sortKey = k; sortDir = (k === 'name' || k === 'industry') ? 1 : -1; }
    renderCompanyTable();
  });
});

function companyRow(name) {
  const c = COMPANIES[name] || { short: stripCo(name), industry: '', market_cap_oku: null, revenue_oku: null, ai: [], stub: true, parent: '', market_cap_of: '', revenue_of: '' };
  const byT = {};
  for (const r of operatorSites(name)) byT[r.theme] = (byT[r.theme] || 0) + 1;
  const nSites = Object.values(byT).reduce((a, b) => a + b, 0);
  const mcapParent = c.market_cap_of === 'parent' && !!c.parent;
  const revParent = c.revenue_of === 'parent' && !!c.parent;
  return {
    name,
    short: c.short || stripCo(name),
    industry: c.industry || '',
    parent: c.parent || '',
    mcap: c.market_cap_oku,
    rev: c.revenue_oku,
    mcapParent,
    revParent,
    sites: nSites,
    themes: byT,
    ai: (c.ai && c.ai.length) || 0,
  };
}

function parentTag(parent) {
  return '<span class="parent-tag" title="親会社（' + esc(parent) + '）の値">親</span>';
}

function renderCompanyTable() {
  const ind = indSel.value;
  let rows = operatorList.map(companyRow).filter(r => !ind || r.industry === ind);
  rows.sort((a, b) => {
    const mul = sortDir;
    const ka = a[sortKey]; const kb = b[sortKey];
    if (sortKey === 'name' || sortKey === 'industry') return mul * String(ka).localeCompare(String(kb), 'ja');
    if (sortKey === 'mcap' || sortKey === 'rev') {
      const aParent = sortKey === 'mcap' ? (a.mcapParent ? 1 : 0) : (a.revParent ? 1 : 0);
      const bParent = sortKey === 'mcap' ? (b.mcapParent ? 1 : 0) : (b.revParent ? 1 : 0);
      if (aParent !== bParent) return aParent - bParent;
    }
    const na = ka == null ? -Infinity : Number(ka);
    const nb = kb == null ? -Infinity : Number(kb);
    if (na === nb) return a.name.localeCompare(b.name, 'ja');
    return mul * (na - nb);
  });
  document.getElementById('coCount').textContent = rows.length + '社';
  document.querySelectorAll('#cotbl th[data-k] .sort').forEach(s => { s.textContent = ''; });
  const active = document.querySelector('#cotbl th[data-k="' + sortKey + '"] .sort');
  if (active) active.textContent = sortDir > 0 ? '▲' : '▼';
  const tb = document.querySelector('#cotbl tbody');
  tb.innerHTML = rows.map(r => {
    const dots = THEMES.filter(t => r.themes[t.key]).map(t => '<span class="td" style="background:' + t.color + '" title="' + esc(t.label) + '"></span>').join('');
    const mcapCell = fmtOku(r.mcap) + (r.mcapParent ? parentTag(r.parent) : '');
    const revCell = fmtOku(r.rev) + (r.revParent ? parentTag(r.parent) : '');
    return '<tr data-co="' + esc(r.name) + '"' + (selectedCompany === r.name ? ' class="on"' : '') + '>' +
      '<td>' + logoHtml(r.name, true) + '</td>' +
      '<td>' + esc(r.short) + '</td>' +
      '<td>' + esc(r.industry || '—') + '</td>' +
      '<td class="num">' + mcapCell + '</td>' +
      '<td class="num">' + revCell + '</td>' +
      '<td class="num">' + r.sites + '</td>' +
      '<td><span class="theme-dots">' + dots + '</span></td>' +
      '<td class="num">' + r.ai + '</td></tr>';
  }).join('');
  tb.querySelectorAll('tr').forEach(tr => {
    tr.onclick = () => selectCompany(tr.getAttribute('data-co'), true);
  });
}

function highlightTable() {
  document.querySelectorAll('#cotbl tbody tr').forEach(tr => {
    tr.classList.toggle('on', tr.getAttribute('data-co') === selectedCompany);
  });
}

const tlinks = document.getElementById('tlinks');
tlinks.innerHTML = THEMES.map(t => '<a href="' + esc(t.out) + '"><span class="dot" style="background:' + t.color + ';width:10px;height:10px;border-radius:50%;display:inline-block"></span>' + esc(t.label) + '</a>').join('');

function applyHash() {
  const h = location.hash.replace(/^#/, '');
  if (!h) { selectedSiteId = null; selectedCompany = null; styleMarkers(); renderPanel(); highlightTable(); return; }
  if (h.startsWith('c=')) {
    const name = decodeURIComponent(h.slice(2));
    if (COMPANIES[name] || operatorList.includes(name)) selectCompany(name, true);
    return;
  }
  if (h.startsWith('s=')) {
    const body = decodeURIComponent(h.slice(2));
    const i = body.indexOf(':');
    if (i < 0) return;
    const theme = body.slice(0, i);
    const idx = Number(body.slice(i + 1));
    const r = SITES.find(x => x.theme === theme && x.idx === idx);
    if (r) selectSite(r.id, true);
  }
}

window.addEventListener('hashchange', applyHash);
renderMap();
renderCompanyTable();
applyHash();
if (!location.hash) renderPanel();
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, 'japan_industry_atlas.html'), html);
console.log(`wrote japan_industry_atlas.html: ${nSites} sites, ${nCompanies} companies, ${nThemes} themes, ${nCities} municipalities`);
for (const t of themePacks) {
  const n = sites.filter(r => r.theme === t.key).length;
  console.log(`  ${t.label}: ${n}`);
}
