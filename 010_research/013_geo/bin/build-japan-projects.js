// Generates japan_projects.html from data/japan_projects.json.
// The shared site nav is lifted out of index.html so both pages stay in sync.
//
//   node bin/build-japan-projects.js
const fs = require('fs');
const path = require('path');

const SEC = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(SEC, 'data', 'japan_projects.json'), 'utf8'));
const index = fs.readFileSync(path.join(SEC, 'index.html'), 'utf8');

const i = index.indexOf('<!-- snav:start -->');
const j = index.indexOf('<!-- snav:end -->');
if (i === -1 || j === -1) { console.error('index.html に snav マーカーが無い'); process.exit(1); }
const snav = index.slice(i, j + '<!-- snav:end -->'.length);

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const MODES = data.modes;
const modeLabel = Object.fromEntries(MODES.map((m) => [m.key, m.label]));
const byIso = Object.fromEntries(data.countries.map((c) => [c.iso, c]));

const projects = data.projects;
const stray = projects.filter((p) => !byIso[p.iso]);
if (stray.length) { console.error('countries に無い iso: ' + stray.map((p) => p.iso).join(', ')); process.exit(1); }

const countOf = (key) => projects.filter((p) => p.mode === key).length;

// ── project card ─────────────────────────────────────────────────────────────
function card(p, n) {
  const c = byIso[p.iso];
  const q = [p.name, c.country, p.place, p.what, p.geo, p.context, modeLabel[p.mode], ...(p.players || [])]
    .join(' ').toLowerCase();
  const rows = [
    ['金額・規模', p.money],
    ['何をしたか', p.what],
    ['参画形態', p.modeNote],
    ['地理', p.geo],
    ['周辺知識', p.context],
  ].filter(([, v]) => v);

  return `      <article class="pj" data-mode="${p.mode}" data-iso="${p.iso}" data-q="${esc(q)}">
        <div class="pj-hd">
          <span class="pj-n">${String(n).padStart(2, '0')}</span>
          <h3 class="pj-t">${esc(p.name)}</h3>
          <span class="pj-mode m-${p.mode}">${esc(modeLabel[p.mode])}</span>
        </div>
        <div class="pj-meta">${esc(c.country)}／${esc(p.place)}<span class="sep">・</span>${esc(p.period)}</div>
        <div class="pj-players">${(p.players || []).map(esc).join('<span class="dot">/</span>')}</div>
        <dl class="pj-dl">
${rows.map(([k, v]) => `          <dt>${k}</dt><dd>${esc(v)}</dd>`).join('\n')}
        </dl>
        <div class="pj-links">${(p.links || []).map((l) => `<a href="${esc(l.u)}" target="_blank" rel="noopener">${esc(l.t)}</a>`).join('')}</div>
      </article>`;
}

let n = 0;
const sections = data.countries.map((c) => {
  const list = projects.filter((p) => p.iso === c.iso);
  const cards = list.map((p) => card(p, ++n)).join('\n');
  return `    <section class="cty" data-iso="${c.iso}">
      <div class="cty-hd">
        <h2 class="cty-t">${esc(c.country)}<span class="cty-n">${list.length} 件</span></h2>
        <a class="cty-link" href="${esc(c.file)}">国リサーチを見る</a>
      </div>
      <p class="cty-lede">${esc(c.lede)}</p>
${cards}
    </section>`;
}).join('\n');

const chips = [`<button class="f f-mode on" data-mode="all">すべて<span class="fn">${projects.length}</span></button>`]
  .concat(MODES.map((m) => `<button class="f f-mode" data-mode="${m.key}">${esc(m.label)}<span class="fn">${countOf(m.key)}</span></button>`))
  .join('');

const ctyChips = [`<button class="f f-cty on" data-iso="all">全17カ国</button>`]
  .concat(data.countries.map((c) => `<button class="f f-cty" data-iso="${c.iso}">${esc(c.country)}</button>`))
  .join('');

const modeTable = MODES.map((m) => `        <tr>
          <td><span class="pj-mode m-${m.key}">${esc(m.label)}</span></td>
          <td class="num">${countOf(m.key)}</td>
          <td>${esc(m.desc)}</td>
        </tr>`).join('\n');

const html = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>日本企業のインフラ案件 — 訪問17カ国</title>
<style>
  :root{
    --bg:#F8F7F3; --ink:#1a1a1a; --sub:#555; --muted:#8a8a8a; --accent:#2563EB;
    --line:#E5E2DA; --card:#fff; --chip:#EEF2FF; --hair:#EFEDE7;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:-apple-system,"Hiragino Sans","Hiragino Kaku Gothic ProN",sans-serif;
    line-height:1.78;font-size:15px;-webkit-font-smoothing:antialiased}
  .wrap{max-width:1000px;margin:0 auto;padding:40px 28px 90px}

  .crumb{font-size:12px;color:var(--sub);margin-bottom:18px}
  .crumb a{color:var(--sub);text-decoration:none}
  .crumb a:hover{color:var(--accent)}

  h1{font-size:26px;margin:0 0 6px;letter-spacing:-.01em}
  h1 .en{display:block;font-size:12px;color:var(--sub);font-weight:400;letter-spacing:.05em;margin-top:3px}
  .lead{color:var(--sub);font-size:14px;margin:0 0 8px;max-width:700px}
  .srcnote{color:var(--muted);font-size:12px;margin:0 0 28px;max-width:700px}

  h2.sec{font-size:19px;margin:46px 0 6px;padding-top:14px;border-top:1px solid var(--line)}
  h2.sec .en{display:block;font-size:12px;color:var(--sub);font-weight:400;letter-spacing:.04em}

  .kpi{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:18px 0 6px}
  .kpi .card{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px}
  .kpi .k{font-size:12px;color:var(--sub)}
  .kpi .v{font-size:22px;font-weight:700;margin-top:3px;font-variant-numeric:tabular-nums}
  .kpi .v small{font-size:12px;font-weight:400;color:var(--sub)}

  table{width:100%;border-collapse:collapse;font-size:14px;margin:14px 0}
  th,td{border:1px solid var(--line);padding:9px 12px;text-align:left;vertical-align:top}
  th{background:#F0EEE8;font-weight:600;font-size:12px;letter-spacing:.03em;color:var(--sub)}
  td.num,th.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
  .tbl-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch}
  .tbl-scroll>table{min-width:min(100%,560px)}

  .memo{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:4px 18px 14px;margin:14px 0}
  .memo h3{font-size:15px;margin:16px 0 4px}
  .memo p{margin:4px 0 10px;font-size:14px;color:var(--sub)}
  .memo p b{color:var(--ink);font-weight:600}

  /* tools */
  .tools{position:sticky;top:56px;background:var(--bg);padding:12px 0 10px;z-index:50;
    border-bottom:1px solid var(--line);margin-bottom:6px}
  .tools .row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
  .search{flex:1;min-width:200px;padding:9px 13px;border:1px solid var(--line);
    border-radius:8px;font-size:14px;background:#fff;font-family:inherit;color:var(--ink)}
  .search:focus{outline:none;border-color:var(--ink)}
  .count{font-size:13px;color:var(--sub);white-space:nowrap;font-variant-numeric:tabular-nums}
  .f{border:1px solid var(--line);background:#fff;color:var(--sub);font-size:12px;padding:4px 11px;
    border-radius:13px;cursor:pointer;font-family:inherit;white-space:nowrap}
  .f:hover{border-color:var(--accent);color:var(--accent)}
  .f.on{background:var(--ink);border-color:var(--ink);color:#fff}
  .f .fn{margin-left:5px;opacity:.55;font-variant-numeric:tabular-nums}
  .fset{display:flex;gap:5px;flex-wrap:wrap;margin-top:8px}
  .fset.cty{max-height:98px;overflow-y:auto}

  /* country section */
  .cty{margin-top:38px}
  .cty.hide{display:none}
  .cty-hd{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;
    border-bottom:2px solid var(--ink);padding-bottom:6px}
  .cty-t{font-size:20px;margin:0;letter-spacing:-.01em}
  .cty-n{font-size:12px;color:var(--muted);font-weight:400;margin-left:9px;font-variant-numeric:tabular-nums}
  .cty-link{font-size:12px;color:var(--accent);text-decoration:none;margin-left:auto}
  .cty-link:hover{text-decoration:underline}
  .cty-lede{font-size:13.5px;color:var(--sub);margin:9px 0 14px;max-width:720px}

  /* project card */
  .pj{background:var(--card);border:1px solid var(--line);border-radius:10px;
    padding:15px 18px 13px;margin-bottom:10px}
  .pj.hide{display:none}
  .pj-hd{display:flex;align-items:baseline;gap:9px;flex-wrap:wrap}
  .pj-n{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums;letter-spacing:.06em}
  .pj-t{font-size:15.5px;margin:0;letter-spacing:-.01em;font-weight:700}
  .pj-mode{display:inline-block;font-size:10.5px;padding:1px 8px;border-radius:4px;white-space:nowrap;
    border:1px solid;letter-spacing:.02em}
  .m-equity{color:#1E5E3A;background:#EEF7F1;border-color:#C6E3D2}
  .m-epc{color:#1D4ED8;background:#EEF2FF;border-color:#CBD5FF}
  .m-oda{color:#7A4A00;background:#FDF6E7;border-color:#EBD9AE}
  .m-ops{color:#6B21A8;background:#F5EEFB;border-color:#DFCCEF}
  .m-tech{color:#9F1239;background:#FDF0F3;border-color:#F0C9D4}
  .pj-meta{font-size:12px;color:var(--muted);margin-top:4px}
  .pj-meta .sep{margin:0 6px;opacity:.5}
  .pj-players{font-size:12.5px;color:var(--ink);margin-top:6px}
  .pj-players .dot{margin:0 7px;color:var(--muted)}
  .pj-dl{display:grid;grid-template-columns:88px 1fr;gap:0 14px;margin:11px 0 0;
    border-top:1px solid var(--hair);padding-top:10px}
  .pj-dl dt{font-size:11.5px;color:var(--muted);padding:4px 0;letter-spacing:.02em}
  .pj-dl dd{margin:0;padding:4px 0;font-size:13.5px;color:var(--sub)}
  .pj-dl dd:not(:last-child){border-bottom:1px solid var(--hair)}
  .pj-dl dt:not(:last-of-type){border-bottom:1px solid var(--hair)}
  .pj-links{margin-top:10px;display:flex;gap:6px;flex-wrap:wrap}
  .pj-links a{font-size:11.5px;color:var(--sub);text-decoration:none;border:1px solid var(--line);
    border-radius:11px;padding:2px 9px;background:#FCFBF8}
  .pj-links a:hover{border-color:var(--accent);color:var(--accent)}

  .empty{display:none;padding:40px 0;text-align:center;color:var(--muted);font-size:14px}
  .note{background:var(--card);border:1px solid var(--line);border-radius:10px;
    padding:12px 16px;margin:22px 0;font-size:13px;color:var(--sub)}
  a{color:var(--accent)}

  @media print{
    body{background:#fff}
    .tools{position:static;display:none}
    .pj{page-break-inside:avoid}
    .cty-hd{page-break-after:avoid}
  }
  @media(max-width:640px){
    .wrap{padding:28px 18px 70px}
    .kpi{grid-template-columns:repeat(2,1fr)}
    .pj-dl{grid-template-columns:1fr;gap:0}
    .pj-dl dt{padding-bottom:0;border-bottom:none!important}
    .pj-dl dd{padding-top:1px}
    .tools{position:static}
  }
</style>
</head>
<body>
${snav}

<div class="wrap">
  <div class="crumb"><a href="../../index.html">shogo</a> / research / <a href="index.html">geo</a> / japan projects</div>

  <h1>日本企業のインフラ案件<span class="en">Japanese Infrastructure Footprint — 17 Countries Visited</span></h1>
  <p class="lead">行った17カ国で、日本の商社・鉄鋼・重工・建設・電力・エンジニアリングが何を作り、何を持っているかを案件単位で並べた。案件名、参画形態、金額と内容、地理的な条件、周辺の化学・地理・歴史、出典を1件ずつ揃えている。</p>
  <p class="srcnote">出典は各社リリース、JICA、JBIC、JOGMEC、外務省、報道。金額は契約時または調印時の公表額で、通貨と時点は出典に従う。非公表のものは非公表と書いた。数字が資料間で割れるものは併記せず、その旨を注記している。最終更新 ${esc(data.meta.updated)}。</p>

  <div class="kpi">
    <div class="card"><div class="k">収録案件</div><div class="v">${projects.length}<small> 件</small></div></div>
    <div class="card"><div class="k">対象国</div><div class="v">${data.countries.length}<small> カ国</small></div></div>
    <div class="card"><div class="k">出資・JV</div><div class="v">${countOf('equity')}<small> 件</small></div></div>
    <div class="card"><div class="k">ODA連動</div><div class="v">${countOf('oda')}<small> 件</small></div></div>
  </div>

  <h2 class="sec">参画形態の読み方<span class="en">How They Get In</span></h2>
  <p class="lead">同じ発電所でも、株を持つのか工事を請けるのかで背負うリスクが違う。この表の5分類で全案件にタグを振った。</p>
  <div class="tbl-scroll">
    <table>
      <thead><tr><th>形態</th><th class="num">件数</th><th>何を背負うか</th></tr></thead>
      <tbody>
${modeTable}
      </tbody>
    </table>
  </div>

  <h2 class="sec">横断して見えること<span class="en">Patterns</span></h2>
  <div class="memo">
    <h3>1. ODAが需要を作り、日本企業が受注する</h3>
    <p>最も件数が多い形が<b>ODA連動の${countOf('oda')}件</b>だ。円借款にSTEP（本邦技術活用条件）が付くと金利が下がる代わりに、主要な資機材と工事の調達先が日本企業に限定される。カイロ地下鉄4号線、マニラ首都圏地下鉄、南北通勤鉄道はどれもこの枠で、三菱商事のシステム一括受注と住友商事の車両という分担まで同じだ。援助と受注が同じ設計図の上に乗っている。</p>

    <h3>2. 資源と電力は請けずに持つ</h3>
    <p>カシャガン7.56%、ACG油田4.30%、MLNG Dua 10%、ペトロ・ラービグ37.5%。工事を請けるのではなく権益を持ち、価格の変動を自社が背負う形が<b>${countOf('equity')}件</b>ある。集まっているのは商社、電力会社、石油開発会社の3種で、ゼネコンはここにいない。ウランではカザフスタンの住友商事が合弁から入り、ウズベキスタンの伊藤忠は長期売買契約から権益へ進んだ。入り口が逆になっている。</p>

    <h3>3. 作る側から運ぶ側へ</h3>
    <p>大林組はドバイ案件の損失で640億円の経常赤字に転落した。物価急騰と設計変更の負担が請負側に寄ったからだ。同じ路線の運行・保守は2021年に三菱重工エンジニアリングと三菱商事が最長15年で取っている。日立レールのスイス連邦鉄道向け信号更新も25年契約だ。一括建設の利幅は外部条件で消えるが、運行と保守は読める。<b>運営・O&amp;Mは${countOf('ops')}件</b>とまだ少ないが、増える方向にある。</p>

    <h3>4. 技術移転が競合を育てた</h3>
    <p>1978年の宝山製鉄所と2004年のCRH2型電車。どちらも移転先が世界最大の生産者になり、その後に競合として戻ってきた。日本製鉄と宝鋼の自動車鋼板合弁は2024年に解消へ向かい、中国の高速鉄道車両は輸出市場で日本と競合している。以後の日本の鉄道輸出が車両単体ではなくシステム一括に軸を移したのは、この2件の帰結として読める。</p>

    <h3>5. 地理が形態を決めている</h3>
    <p><b>内陸国</b>のスイス、キルギス、カザフスタン、ウズベキスタンでは、輸送費が売価に乗らない資産か、国境を跨がない電力と地下資源に案件が寄る。<b>海峡と隘路</b>のトルコ、シンガポール、エジプトでは、通行そのものを直す橋・トンネル・港湾が集まる。<b>砂漠</b>のサウジアラビア、UAE、クウェートでは電気と水が同じ設備から出てくるため、発電と造水を一体で持つ形になる。<b>群島とデルタ</b>のインドネシア、フィリピン、カンボジアでは陸が繋がらないので、橋と港と、船に載せたままのFSRUが解になる。</p>
  </div>

  <h2 class="sec">案件一覧<span class="en">Projects</span></h2>

  <div class="tools">
    <div class="row">
      <input type="text" class="search" id="q" placeholder="検索（案件名・企業名・地名・キーワード）" autocomplete="off">
      <span class="count" id="count"></span>
    </div>
    <div class="fset">${chips}</div>
    <div class="fset cty">${ctyChips}</div>
  </div>

${sections}

  <div class="empty" id="empty">該当する案件がない。検索語か絞り込みを変える。</div>

  <p class="note">未収録のものがある。金額や出資比率が公表されていない案件、現地法人の小口案件、製造業の工場投資は原則として落としてある。数字の裏取りは各案件の参考リンクから辿れる。誤りを見つけたら直す。</p>
</div>

<script>
const cards = [...document.querySelectorAll('.pj')];
const ctys = [...document.querySelectorAll('.cty')];
let mode = 'all', iso = 'all';

function render() {
  const q = document.getElementById('q').value.trim().toLowerCase();
  let shown = 0;
  for (const el of cards) {
    const ok = (mode === 'all' || el.dataset.mode === mode)
      && (iso === 'all' || el.dataset.iso === iso)
      && (!q || el.dataset.q.includes(q));
    el.classList.toggle('hide', !ok);
    if (ok) shown++;
  }
  for (const s of ctys)
    s.classList.toggle('hide', !s.querySelector('.pj:not(.hide)'));
  document.getElementById('count').textContent = shown + ' / ' + cards.length + ' 件';
  document.getElementById('empty').style.display = shown ? 'none' : 'block';
}

for (const b of document.querySelectorAll('.f-mode'))
  b.addEventListener('click', () => {
    mode = b.dataset.mode;
    document.querySelectorAll('.f-mode').forEach((x) => x.classList.toggle('on', x === b));
    render();
  });

for (const b of document.querySelectorAll('.f-cty'))
  b.addEventListener('click', () => {
    iso = b.dataset.iso;
    document.querySelectorAll('.f-cty').forEach((x) => x.classList.toggle('on', x === b));
    render();
  });

document.getElementById('q').addEventListener('input', render);
render();
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(SEC, 'japan_projects.html'), html);
console.log(`japan_projects: ${projects.length} 件 / ${data.countries.length} カ国`);
for (const m of MODES) console.log(`  ${m.label}: ${countOf(m.key)}`);
