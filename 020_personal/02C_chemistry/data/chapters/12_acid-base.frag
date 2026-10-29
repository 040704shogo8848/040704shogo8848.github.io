<!--meta
{"chapter": 12, "part": "第2編 物質の変化とその利用", "title": "酸と塩基・pH", "thesis": "酸は H⁺ を渡す物質で塩基は H⁺ を受け取る物質である。強さは価数ではなく電離度で決まる。pH は水素イオン濃度を10倍ごとの目盛で数えた値であり1の差が10倍の差を表す。", "verify": {"date": "2026-10-15", "checked": 63, "match": 56, "fixed": 5, "unconfirmed": 2}}
-->
<p>第10章ではモル濃度で溶液の濃さを表し第11章では化学反応式の係数から物質量の比を読み取った。この章はその2つを酸と塩基に当てはめる。酸と塩基を物質の名称ではなく H<sup>+</sup> の動きで定義し直す。そのうえで水溶液中の H<sup>+</sup> の量を mol/L で数え pH という1つの数に変換する。</p>
<p>共通テストでこの範囲から問われる論点は5つである。H<sup>+</sup> の授受による酸と塩基の判別・酸と塩基の価数・強酸と弱酸の区別と電離度・水素イオン濃度から pH を求める計算と希釈・指示薬の色である。中和の量的関係と滴定は第13章で扱う。</p>

<h2 id="s1">酸と塩基の2つの定義</h2>
<p>酸は酸味をもち青色リトマス紙を赤くする。塩基は赤色リトマス紙を青くし酸の性質を打ち消す。中学校ではこの性質で酸とアルカリを区別した。水に溶ける塩基をアルカリと呼ぶ。高校ではこの性質がどの粒子から生じるかを定義に組み込む。</p>
<p>スウェーデンのアレニウスは1884年の博士論文で電解質が水中でイオンに分かれるという考えを示し1903年にノーベル化学賞を受けた。この考えに基づく<strong>アレニウスの定義</strong>では次のように分ける。</p>
<div class="tb-vs">
<div><h5>アレニウスの酸</h5><ul>
<li>水に溶けて H<sup>+</sup> を生じる物質</li>
<li>HCl → H<sup>+</sup> ＋ Cl<sup>−</sup></li>
</ul></div>
<div><h5>アレニウスの塩基</h5><ul>
<li>水に溶けて OH<sup>−</sup> を生じる物質</li>
<li>NaOH → Na<sup>+</sup> ＋ OH<sup>−</sup></li>
</ul></div>
</div>
<p>水溶液中の H<sup>+</sup> は単独では存在しない。水分子 H<sub>2</sub>O と結びつき<strong>オキソニウムイオン</strong> H<sub>3</sub>O<sup>+</sup> として存在する。H<sup>+</sup> は水素原子から電子を取り去った陽子1個であり非共有電子対をもつ水分子に配位結合でつながる。式を簡単にするため H<sub>3</sub>O<sup>+</sup> を H<sup>+</sup> と略記することが多い。</p>
<div class="fx">HCl ＋ H<sub>2</sub>O → H<sub>3</sub>O<sup>+</sup> ＋ Cl<sup>−</sup><small>略記すると HCl → H<sup>+</sup> ＋ Cl<sup>−</sup> になる</small></div>
<p>アレニウスの定義ではアンモニア NH<sub>3</sub> を説明しにくい。NH<sub>3</sub> は OH 基をもたないのに水溶液は塩基性を示す。1923年にデンマークのブレンステッドとイギリスのローリーが独立に別の定義を示した。<strong>ブレンステッド・ローリーの定義</strong>である。</p>
<p><strong class="hit">H<sup>+</sup> を相手に与える分子やイオンが酸であり H<sup>+</sup> を相手から受け取る分子やイオンが塩基である</strong>。この定義は水溶液に限らず反応の中での役割で酸と塩基を決める。</p>
<div class="fx">NH<sub>3</sub> ＋ H<sub>2</sub>O ⇄ NH<sub>4</sub><sup>+</sup> ＋ OH<sup>−</sup><small>H<sub>2</sub>O が H<sup>+</sup> を与えるので酸 ・ NH<sub>3</sub> が H<sup>+</sup> を受け取るので塩基</small></div>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="塩化水素と水 アンモニアと水の間で H+ が移る">
  <defs><marker id="ah12a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker></defs>
  <text x="398" y="40" font-size="13" fill="var(--muted)">反応1 塩化水素を水に溶かす</text>
  <text x="398" y="170" font-size="13" fill="var(--muted)">反応2 アンモニアを水に溶かす</text>
  <g font-size="15" font-weight="600" text-anchor="middle">
    <rect x="50" y="56" width="100" height="40" rx="8" fill="var(--warm)" opacity=".9"/><text x="100" y="82" fill="#fff">HCl</text>
    <text x="178" y="82" fill="var(--ink)">＋</text>
    <rect x="206" y="56" width="100" height="40" rx="8" fill="var(--cool)" opacity=".9"/><text x="256" y="82" fill="#fff">H₂O</text>
    <text x="352" y="82" fill="var(--ink)">→</text>
    <rect x="398" y="56" width="100" height="40" rx="8" fill="var(--line)"/><text x="448" y="82" fill="var(--ink)">Cl⁻</text>
    <text x="526" y="82" fill="var(--ink)">＋</text>
    <rect x="554" y="56" width="110" height="40" rx="8" fill="var(--line)"/><text x="609" y="82" fill="var(--ink)">H₃O⁺</text>

    <rect x="50" y="186" width="100" height="40" rx="8" fill="var(--warm)" opacity=".9"/><text x="100" y="212" fill="#fff">H₂O</text>
    <text x="178" y="212" fill="var(--ink)">＋</text>
    <rect x="206" y="186" width="100" height="40" rx="8" fill="var(--cool)" opacity=".9"/><text x="256" y="212" fill="#fff">NH₃</text>
    <text x="352" y="212" fill="var(--ink)">⇄</text>
    <rect x="398" y="186" width="100" height="40" rx="8" fill="var(--line)"/><text x="448" y="212" fill="var(--ink)">OH⁻</text>
    <text x="526" y="212" fill="var(--ink)">＋</text>
    <rect x="554" y="186" width="110" height="40" rx="8" fill="var(--line)"/><text x="609" y="212" fill="var(--ink)">NH₄⁺</text>
  </g>
  <path d="M112 54 C 140 26, 200 26, 236 52" fill="none" stroke="var(--accent)" stroke-width="2" marker-end="url(#ah12a)"/>
  <text x="174" y="24" font-size="13" text-anchor="middle" fill="var(--accent)" font-weight="600">H⁺</text>
  <path d="M112 184 C 140 156, 200 156, 236 182" fill="none" stroke="var(--accent)" stroke-width="2" marker-end="url(#ah12a)"/>
  <text x="174" y="152" font-size="13" text-anchor="middle" fill="var(--accent)" font-weight="600">H⁺</text>
  <g font-size="13" text-anchor="middle" fill="var(--sub)">
    <text x="100" y="116">酸 H⁺ を与える</text><text x="256" y="116">塩基 H⁺ を受け取る</text>
    <text x="100" y="246">酸 H⁺ を与える</text><text x="256" y="246">塩基 H⁺ を受け取る</text>
  </g>
  <text x="530" y="130" font-size="13" text-anchor="middle" fill="var(--accent)">同じ H₂O が反応1では塩基で反応2では酸</text>
</svg>
<figcaption>赤い枠が H<sup>+</sup> を与える側で青い枠が受け取る側である。水は相手が HCl なら H<sup>+</sup> を受け取り相手が NH<sub>3</sub> なら H<sup>+</sup> を与える。酸か塩基かは物質ごとに固定されず反応の中の役割で特定される。</figcaption>
</figure>

<p>図の2つの反応で水の役割が入れ替わる。水のように相手によって酸にも塩基にもなる物質がある点がこの定義の特徴である。反応式を示して下線部の分子が酸と塩基のどちらとして働くかを問う形の問題がある。判別の手順は1つである。<strong>左辺と右辺を比べて H<sup>+</sup> が1個減った側が酸で1個増えた側が塩基である</strong>。</p>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">酸と塩基は性格ではなくその場で H<sup>+</sup> を渡したか受け取ったかで呼ぶ</p>
<p>渡した側が酸 ／ 受け取った側が塩基。水は相手によって渡す側にも受け取る側にもなる。</p>
</aside>

<h2 id="s2">酸と塩基の価数</h2>
<p>酸1分子が出すことのできる H<sup>+</sup> の最大数を<strong>酸の価数</strong>と呼ぶ。塩基1つが受け取ることのできる H<sup>+</sup> の数または出すことのできる OH<sup>−</sup> の数を<strong>塩基の価数</strong>と呼ぶ。価数は第13章の中和の計算でそのまま係数として使う。</p>
<div class="tb-tw"><table>
<thead><tr><th>価数</th><th>酸</th><th>塩基</th></tr></thead>
<tbody>
<tr><td>1価</td><td>塩酸 HCl ／ 硝酸 HNO<sub>3</sub> ／ 酢酸 CH<sub>3</sub>COOH</td><td>水酸化ナトリウム NaOH ／ 水酸化カリウム KOH ／ アンモニア NH<sub>3</sub></td></tr>
<tr><td>2価</td><td>硫酸 H<sub>2</sub>SO<sub>4</sub> ／ シュウ酸 (COOH)<sub>2</sub> ／ 炭酸 H<sub>2</sub>CO<sub>3</sub></td><td>水酸化カルシウム Ca(OH)<sub>2</sub> ／ 水酸化バリウム Ba(OH)<sub>2</sub></td></tr>
<tr><td>3価</td><td>リン酸 H<sub>3</sub>PO<sub>4</sub></td><td>水酸化アルミニウム Al(OH)<sub>3</sub></td></tr>
</tbody></table></div>
<p>価数は分子に含まれる H の個数とは限らない。酢酸 CH<sub>3</sub>COOH は H を4個もつが H<sup>+</sup> として出せるのは COOH の H の1個だけである。CH<sub>3</sub> の3個の H は炭素と強く結びつき電離しない。アンモニアは OH を含まないが H<sup>+</sup> を1個受け取るので1価の塩基である。</p>
<p>2価の酸は H<sup>+</sup> を2段階に分けて出す。硫酸の場合は次の2段階である。</p>
<div class="fx">H<sub>2</sub>SO<sub>4</sub> → H<sup>+</sup> ＋ HSO<sub>4</sub><sup>−</sup> ／ HSO<sub>4</sub><sup>−</sup> → H<sup>+</sup> ＋ SO<sub>4</sub><sup>2−</sup><small>化学基礎の計算では2段階とも完全に進むとみなし 1 mol の硫酸から 2 mol の H<sup>+</sup> が生じると扱う</small></div>
<p>実際には2段階目の電離は完全には進まず、希硫酸の pH は計算値よりわずかに大きくなる。</p>

<h2 id="s3">酸と塩基の強さと電離度</h2>
<p>酸や塩基の強さは価数では特定されない。<strong class="hit">強さを決めるのは水に溶かした分子のうち何割が電離するかである</strong>。この割合を<strong>電離度</strong> α と呼ぶ。</p>
<div class="fx">電離度 α ＝ 電離した酸や塩基の物質量 ÷ 溶かした酸や塩基の物質量<small>0 ＜ α ≦ 1 ・ 濃度で割っても同じ値になる</small></div>
<p>水溶液中で α が1に近い酸を<strong>強酸</strong>と呼び α が小さい酸を<strong>弱酸</strong>と呼ぶ。塩基も同様に強塩基と弱塩基に分ける。共通テストでは次の表の分類を問う。化学基礎で扱う酸と塩基の多くは表に載っている。表に載らない酸のうち臭化水素 HBr とヨウ化水素 HI は強酸である。</p>
<div class="tb-tw"><table>
<thead><tr><th>分類</th><th>代表例</th><th>価数</th></tr></thead>
<tbody>
<tr><td>強酸</td><td>塩酸 HCl ／ 硝酸 HNO<sub>3</sub> ／ 硫酸 H<sub>2</sub>SO<sub>4</sub></td><td>1 ／ 1 ／ 2</td></tr>
<tr><td>弱酸</td><td>酢酸 CH<sub>3</sub>COOH ／ シュウ酸 (COOH)<sub>2</sub> ／ 炭酸 H<sub>2</sub>CO<sub>3</sub> ／ 硫化水素 H<sub>2</sub>S ／ リン酸 H<sub>3</sub>PO<sub>4</sub></td><td>1 ／ 2 ／ 2 ／ 2 ／ 3</td></tr>
<tr><td>強塩基</td><td>水酸化ナトリウム NaOH ／ 水酸化カリウム KOH ／ 水酸化カルシウム Ca(OH)<sub>2</sub> ／ 水酸化バリウム Ba(OH)<sub>2</sub></td><td>1 ／ 1 ／ 2 ／ 2</td></tr>
<tr><td>弱塩基</td><td>アンモニア NH<sub>3</sub> ／ 水酸化銅(Ⅱ) Cu(OH)<sub>2</sub> ／ 水酸化マグネシウム Mg(OH)<sub>2</sub></td><td>1 ／ 2 ／ 2</td></tr>
</tbody></table></div>
<p>強塩基は1族の水酸化物と2族のうちカルシウムより下の元素の水酸化物である。水酸化マグネシウムは2族だが水に溶けにくく弱塩基に分類する。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="強酸は全部電離し弱酸は一部だけが電離する">
  <text x="40" y="24" font-size="13" fill="var(--muted)">塩酸 電離度 約1</text>
  <text x="400" y="24" font-size="13" fill="var(--muted)">酢酸 電離度 約0.01</text>
  <g fill="none" stroke="var(--sub)" stroke-width="2">
    <path d="M40 40 L40 220 L320 220 L320 40"/>
    <path d="M400 40 L400 220 L680 220 L680 40"/>
  </g>
  <g fill="var(--warm)">
    <circle cx="70" cy="80" r="11"/><circle cx="130" cy="70" r="11"/><circle cx="200" cy="85" r="11"/><circle cx="270" cy="72" r="11"/>
    <circle cx="90" cy="140" r="11"/><circle cx="170" cy="130" r="11"/><circle cx="250" cy="145" r="11"/>
    <circle cx="70" cy="195" r="11"/><circle cx="150" cy="190" r="11"/><circle cx="290" cy="190" r="11"/>
  </g>
  <g fill="var(--cool)">
    <circle cx="100" cy="100" r="8"/><circle cx="165" cy="95" r="8"/><circle cx="235" cy="105" r="8"/><circle cx="295" cy="110" r="8"/>
    <circle cx="60" cy="160" r="8"/><circle cx="130" cy="165" r="8"/><circle cx="210" cy="165" r="8"/>
    <circle cx="110" cy="200" r="8"/><circle cx="220" cy="200" r="8"/><circle cx="285" cy="155" r="8"/>
  </g>
  <g fill="var(--dim)" stroke="var(--sub)" stroke-width="1">
    <circle cx="440" cy="75" r="13"/><circle cx="510" cy="70" r="13"/><circle cx="580" cy="78" r="13"/><circle cx="650" cy="72" r="13"/>
    <circle cx="460" cy="140" r="13"/><circle cx="600" cy="145" r="13"/>
    <circle cx="430" cy="195" r="13"/><circle cx="520" cy="195" r="13"/><circle cx="650" cy="190" r="13"/>
  </g>
  <circle cx="540" cy="135" r="11" fill="var(--warm)"/>
  <circle cx="565" cy="160" r="8" fill="var(--cool)"/>
  <g font-size="13" fill="var(--sub)">
    <circle cx="60" cy="250" r="8" fill="var(--warm)"/><text x="74" y="255">H₃O⁺</text>
    <circle cx="160" cy="250" r="6" fill="var(--cool)"/><text x="172" y="255">陰イオン</text>
    <circle cx="290" cy="250" r="9" fill="var(--dim)" stroke="var(--sub)"/><text x="304" y="255">電離していない分子</text>
  </g>
  <text x="540" y="255" font-size="13" text-anchor="middle" fill="var(--accent)">同じ濃度でも H₃O⁺ の数が異なる</text>
</svg>
<figcaption>同じ物質量を溶かした場合の模式図である。塩酸は溶かした HCl が全部 H<sub>3</sub>O<sup>+</sup> と Cl<sup>−</sup> になる。酢酸は大部分が分子のまま残る。実際の 0.1 mol/L 酢酸では約75分子に1分子だけが電離する。図は弱酸側の電離の割合を誇張して描いている。</figcaption>
</figure>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">電離度はベンチ入りした選手のうち出場した選手の割合である</p>
<p>強酸は全員が出場 ／ 弱酸は100人を登録しても出場は1人か2人。酸性の強さを左右するのは登録人数ではなく出場した H<sup>+</sup> の数である。</p>
</aside>

<p>電離度は濃度と温度で変わる。弱酸は薄めるほど電離度が大きくなる。0.10 mol/L の酢酸の電離度は25 ℃で約0.013であり水溶液がより薄いと値は増える。共通テストでは問題文に電離度が与えられ「濃度×価数×電離度」で水素イオン濃度を求める形で出題される。</p>
<div class="fx">[H<sup>+</sup>] ＝ c × 価数 × α<small>c は酸のモル濃度 ・ 強酸では α ＝ 1 とみなす</small></div>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">電離度は配当性向であり価数は株数である</p>
<p>強酸は利益を全額配当 ／ 弱酸はわずかだけ配当。株数が多くても配当性向が低ければ届く現金は少ない。2価の弱酸が1価の強酸より弱いのはこのためである。</p>
</aside>

<h2 id="s4">水素イオン濃度と pH</h2>
<p>純粋な水もわずかに電離している。25 ℃の純水では [H<sup>+</sup>] と [OH<sup>−</sup>] がどちらも 1.0×10<sup>−7</sup> mol/L で等しい。[ ] はかっこの中のイオンのモル濃度を表す記号である。</p>
<div class="fx">H<sub>2</sub>O ⇄ H<sup>+</sup> ＋ OH<sup>−</sup><small>25 ℃の純水 [H<sup>+</sup>] ＝ [OH<sup>−</sup>] ＝ 1.0×10<sup>−7</sup> mol/L</small></div>
<p>酸を溶かすと [H<sup>+</sup>] が増え [OH<sup>−</sup>] が減る。塩基を溶かすと逆になる。25 ℃の水溶液では<strong class="hit">[H<sup>+</sup>] と [OH<sup>−</sup>] の積が常に 1.0×10<sup>−14</sup> (mol/L)<sup>2</sup> で一定に保たれる</strong>。片方が10倍になればもう片方は10分の1になる。この積を水のイオン積と呼ぶ。学習指導要領解説では化学基礎で pH と水の電離の関係に触れ水のイオン積との関連は化学で扱うと定めている。化学基礎の計算では塩基の水溶液の pH を求める場面でこの積を使う。</p>
<p>[H<sup>+</sup>] は 10<sup>−1</sup> から 10<sup>−14</sup> mol/L まで13桁にわたって変わる。そこで桁の数だけを取り出した指標が <strong>pH</strong> である。厳密な pH は濃度ではなく活量で定まり、濃い溶液では濃度から求めた値と実測値がずれる。</p>
<div class="fx">[H<sup>+</sup>] ＝ 1.0×10<sup>−n</sup> mol/L のとき pH ＝ n<small>定義は pH ＝ −log<sub>10</sub>[H<sup>+</sup>] ・ 化学基礎の計算では n が整数になる場合を扱う</small></div>
<div class="tb-vs">
<div><h5>酸性 中性 塩基性の境目 25 ℃</h5><ul>
<li>酸性 [H<sup>+</sup>] ＞ 1.0×10<sup>−7</sup> mol/L ・ pH ＜ 7</li>
<li>中性 [H<sup>+</sup>] ＝ 1.0×10<sup>−7</sup> mol/L ・ pH ＝ 7</li>
<li>塩基性 [H<sup>+</sup>] ＜ 1.0×10<sup>−7</sup> mol/L ・ pH ＞ 7</li>
</ul></div>
<div><h5>pH が1異なると</h5><ul>
<li>[H<sup>+</sup>] は10倍異なる</li>
<li>pH 2 の溶液は pH 4 の溶液の100倍の H<sup>+</sup> を含む</li>
<li>pH が小さいほど酸性が強い</li>
</ul></div>
</div>

<figure class="tb-fig">
<svg viewBox="0 0 720 245" role="img" aria-label="pH の目盛と身近な物質">
  <defs>
    <linearGradient id="g12ph" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="var(--warm)"/><stop offset=".5" stop-color="var(--dim)"/><stop offset="1" stop-color="var(--cool)"/>
    </linearGradient>
  </defs>
  <rect x="40" y="100" width="630" height="26" rx="4" fill="url(#g12ph)"/>
  <g font-size="12" text-anchor="middle" fill="var(--ink)">
    <text x="40" y="146">0</text><text x="85" y="146">1</text><text x="130" y="146">2</text><text x="175" y="146">3</text><text x="220" y="146">4</text><text x="265" y="146">5</text><text x="310" y="146">6</text><text x="355" y="146">7</text><text x="400" y="146">8</text><text x="445" y="146">9</text><text x="490" y="146">10</text><text x="535" y="146">11</text><text x="580" y="146">12</text><text x="625" y="146">13</text><text x="670" y="146">14</text>
  </g>
  <g stroke="var(--ink)" stroke-width="1.5">
    <line x1="107" y1="70" x2="107" y2="100"/><line x1="175" y1="70" x2="175" y2="100"/><line x1="355" y1="70" x2="355" y2="100"/><line x1="413" y1="70" x2="413" y2="100"/><line x1="580" y1="70" x2="580" y2="100"/>
    <line x1="130" y1="152" x2="130" y2="176"/><line x1="292" y1="152" x2="292" y2="176"/><line x1="373" y1="152" x2="373" y2="176"/><line x1="535" y1="152" x2="535" y2="176"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="var(--ink)">
    <text x="107" y="44">胃液</text><text x="107" y="62" font-size="12" fill="var(--sub)">1〜3</text>
    <text x="175" y="44">食酢</text><text x="175" y="62" font-size="12" fill="var(--sub)">約3</text>
    <text x="355" y="44">純水</text><text x="355" y="62" font-size="12" fill="var(--sub)">7</text>
    <text x="413" y="44">重曹水</text><text x="413" y="62" font-size="12" fill="var(--sub)">約8.3</text>
    <text x="580" y="44">塩素系漂白剤</text><text x="580" y="62" font-size="12" fill="var(--sub)">約12</text>
    <text x="130" y="192">レモン汁</text><text x="130" y="208" font-size="12" fill="var(--sub)">約2</text>
    <text x="292" y="192">酸性雨の目安</text><text x="292" y="208" font-size="12" fill="var(--sub)">5.6 以下</text>
    <text x="385" y="192">血液</text><text x="385" y="208" font-size="12" fill="var(--sub)">約7.4</text>
    <text x="535" y="192">アンモニア水</text><text x="535" y="208" font-size="12" fill="var(--sub)">約11</text>
  </g>
  <text x="40" y="90" font-size="12" fill="var(--warm)">酸性が強い</text>
  <text x="670" y="90" font-size="12" text-anchor="end" fill="var(--cool)">塩基性が強い</text>
  <text x="680" y="236" font-size="12" text-anchor="end" fill="var(--muted)">1目盛で [H⁺] は10倍</text>
</svg>
<figcaption>pH は等間隔の目盛だが [H<sup>+</sup>] は1目盛ごとに10倍異なる。胃液の pH 1 と純水の pH 7 では [H<sup>+</sup>] が100万倍異なる。身近な物質の値は濃度や製品で変わるため目安である。</figcaption>
</figure>

<aside class="an an-biz"><b>資本主義で言えば</b>
<p class="an-h">pH は時価総額を桁で呼ぶのと同じ目盛である</p>
<p>10億円と1,000億円は桁が2つ異なり規模は100倍である。pH 3 と pH 5 も [H<sup>+</sup>] は100倍異なる。</p>
<p class="an-x">pH は数値が小さいほど [H<sup>+</sup>] が大きい。</p>
</aside>

<h3>pH の計算の型</h3>
<p>共通テストで問われる pH の計算は次の3つの型に分かれる。どの型も [H<sup>+</sup>] を 1.0×10<sup>−n</sup> の形に直してから n を読み取る。</p>
<div class="tb-tw"><table>
<thead><tr><th>型</th><th>例</th><th>手順</th><th>pH</th></tr></thead>
<tbody>
<tr><td>強酸</td><td>0.010 mol/L 塩酸</td><td>[H<sup>+</sup>] ＝ 0.010×1×1 ＝ 1.0×10<sup>−2</sup></td><td>2</td></tr>
<tr><td>弱酸</td><td>0.10 mol/L 酢酸 ・ α ＝ 0.010 と与えられた場合</td><td>[H<sup>+</sup>] ＝ 0.10×1×0.010 ＝ 1.0×10<sup>−3</sup></td><td>3</td></tr>
<tr><td>強塩基</td><td>0.010 mol/L 水酸化ナトリウム</td><td>[OH<sup>−</sup>] ＝ 1.0×10<sup>−2</sup> なので [H<sup>+</sup>] ＝ 1.0×10<sup>−14</sup> ÷ 1.0×10<sup>−2</sup> ＝ 1.0×10<sup>−12</sup></td><td>12</td></tr>
</tbody></table></div>
<p>強塩基は「14 から [OH<sup>−</sup>] の桁を引く」と暗記しても同じ答えになる。0.010 mol/L の NaOH なら [OH<sup>−</sup>] の桁が2なので pH ＝ 14 − 2 ＝ 12 である。</p>

<h3>希釈と pH</h3>
<p>強酸の水溶液を水で10倍に薄めると [H<sup>+</sup>] は10分の1になり pH は1大きくなる。pH 2 の塩酸を100倍に薄めると pH 4 になる。<strong class="hit">ただし酸をいくら薄めても pH は7を超えない</strong>。薄めるほど水自身の電離による 1.0×10<sup>−7</sup> mol/L の H<sup>+</sup> が無視できなくなるからである。pH 5 の塩酸を1000倍に薄めた溶液の pH は8ではなく7に近い値になる。塩基も同様で薄めても pH は7を下回らない。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 290" role="img" aria-label="酸と塩基を薄めると pH は7に近づくが7を越えない">
  <line x1="80" y1="20" x2="80" y2="240" stroke="var(--ink)"/>
  <line x1="80" y1="240" x2="680" y2="240" stroke="var(--ink)"/>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="72" y="34">13</text><text x="72" y="85">10</text><text x="72" y="136">7</text><text x="72" y="187">4</text><text x="72" y="238">1</text>
  </g>
  <text x="34" y="132" font-size="13" fill="var(--sub)" transform="rotate(-90 34 132)" text-anchor="middle">pH</text>
  <line x1="80" y1="132" x2="680" y2="132" stroke="var(--line)" stroke-dasharray="5 4"/>
  <text x="676" y="126" font-size="12" text-anchor="end" fill="var(--muted)">pH 7</text>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="120" y="258">元の溶液</text><text x="220" y="258">10倍</text><text x="320" y="258">10²倍</text><text x="420" y="258">10³倍</text><text x="520" y="258">10⁴倍</text><text x="620" y="258">10⁵倍</text>
  </g>
  <text x="380" y="280" font-size="12" text-anchor="middle" fill="var(--muted)">水で薄めた倍率</text>
  <polyline fill="none" stroke="var(--warm)" stroke-width="2.5" points="120,217 220,200 320,183 420,166 520,149 620,136"/>
  <polyline fill="none" stroke="var(--cool)" stroke-width="2.5" points="120,47 220,64 320,81 420,98 520,115 620,128"/>
  <g fill="var(--warm)"><circle cx="120" cy="217" r="4"/><circle cx="220" cy="200" r="4"/><circle cx="320" cy="183" r="4"/><circle cx="420" cy="166" r="4"/><circle cx="520" cy="149" r="4"/><circle cx="620" cy="136" r="4"/></g>
  <g fill="var(--cool)"><circle cx="120" cy="47" r="4"/><circle cx="220" cy="64" r="4"/><circle cx="320" cy="81" r="4"/><circle cx="420" cy="98" r="4"/><circle cx="520" cy="115" r="4"/><circle cx="620" cy="128" r="4"/></g>
  <text x="140" y="233" font-size="13" fill="var(--warm)">pH 2 の塩酸</text>
  <text x="132" y="35" font-size="13" fill="var(--cool)">pH 12 の水酸化ナトリウム水溶液</text>
  <text x="612" y="168" font-size="12" text-anchor="end" fill="var(--warm)">10⁵倍で約6.79</text>
  <text x="612" y="104" font-size="12" text-anchor="end" fill="var(--cool)">10⁵倍で約7.21</text>
</svg>
<figcaption>赤は pH 2 の塩酸で青は pH 12 の水酸化ナトリウム水溶液である。10倍ごとに pH は1ずつ7へ近づく。10<sup>5</sup>倍では単純な計算なら pH 7 になるが水の電離による H<sup>+</sup> と OH<sup>−</sup> が加わり酸は約6.79で塩基は約7.21にとどまる。どちらも7を越えない。</figcaption>
</figure>

<aside class="an an-lv"><b>男女で言えば</b>
<p class="an-h">酸を水で薄めるのは男女同数の集団を足すことである。多数派は逆転しない</p>
<p>水 ／ H<sup>+</sup> と OH<sup>−</sup> が同数の集団。足すほど比率は1対1に近づくが pH は7を越えない。</p>
</aside>

<h2 id="s5">指示薬の色の変化</h2>
<p>pH によって色が変わる色素を<strong>指示薬</strong>と呼ぶ。指示薬そのものが弱酸であり H<sup>+</sup> を保持した形と放した形で色が異なる。色が変わる pH の範囲を<strong>変色域</strong>と呼ぶ。変色域は1点ではなく1から2程度の幅をもつ。</p>
<div class="tb-tw"><table>
<thead><tr><th>指示薬</th><th>変色域 pH</th><th>酸性側の色</th><th>塩基性側の色</th></tr></thead>
<tbody>
<tr><td>メチルオレンジ</td><td>約 3.1〜4.4</td><td>赤</td><td>黄</td></tr>
<tr><td>ブロモチモールブルー BTB</td><td>約 6.0〜7.6</td><td>黄</td><td>青 ・ 中間は緑</td></tr>
<tr><td>フェノールフタレイン</td><td>約 8.0〜9.8</td><td>無色</td><td>赤</td></tr>
<tr><td>リトマス</td><td>中性付近</td><td>赤</td><td>青</td></tr>
</tbody></table></div>
<p>フェノールフタレインの変色域は日本の化学基礎の教科書で約8.0〜9.8と示されることが多い。試薬メーカーの資料では8.2〜9.8や8.2〜10.0とするものもある。中和滴定の指示薬の選択では変色域が塩基性側にあるか酸性側にあるかの区別で判断でき端の細かな値は判断を左右しない。</p>
<p>指示薬の色だけでは溶液の正確な pH は判別できない。正確に測るには pH メーターや pH 試験紙を使う。第13章では中和点の pH に合わせて指示薬を選ぶ方法を扱う。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">変色域はストライクゾーンの境目である</p>
<p>真ん中は誰が見てもストライク ／ 大きく外れればボール。フェノールフタレインも約 8.0〜9.8 の間だけ色がしだいに濃くなる。</p>
</aside>

<h2 id="s6">現実世界の酸 硫酸と胃酸と酸性雨</h2>
<p>硫酸は世界で最も大量に製造される化学製品の1つである。工業的な製法を<strong>接触法</strong>と呼ぶ。1831年にイギリスのペレグリン・フィリップスが特許を取得した。触媒として初めは白金が使われ現在は酸化バナジウム(Ⅴ) V<sub>2</sub>O<sub>5</sub> が使われる。</p>
<div class="fx">S ＋ O<sub>2</sub> → SO<sub>2</sub> ／ 2SO<sub>2</sub> ＋ O<sub>2</sub> → 2SO<sub>3</sub> ／ SO<sub>3</sub> ＋ H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub><small>2段目は V<sub>2</sub>O<sub>5</sub> を触媒として約 450 ℃ で進める ・ 3段目は SO<sub>3</sub> を濃硫酸に溶かして発煙硫酸にしてから希硫酸で薄める</small></div>
<p>三酸化硫黄を水に直接溶かさない理由は発熱が大きく液体ではなく硫酸の霧が生じるためである。濃硫酸に溶かして発煙硫酸とし希硫酸で薄めて目的の濃度の硫酸を得る。</p>

<aside class="an an-rw"><b>現実世界</b>
<p>ドイツの化学者リービッヒは1843年の著作で次のように述べた。「一国の商業の繁栄はその国が消費する硫酸の量で十分に正確に判定できる」。硫酸は肥料・合成繊維・顔料の酸化チタン・金属の精錬と用途が広い。工業のどの部門が伸びても硫酸の消費量が増えるため国の工業活動の指標として扱われた。リービッヒの原文は生産量ではなく消費量について述べている。</p>
<p>日本の硫酸の生産量は経済産業省の生産動態統計で2008年に約723万トンを記録し2024年は約622万トンであった。公正取引委員会の平成14年度の資料では日本の硫酸の7割強が銅や亜鉛を製錬するときの副産物とされている。硫化物の鉱石を焼くと SO<sub>2</sub> が生じこれを大気に出さずに回収して接触法で硫酸に変える。SO<sub>2</sub> を回収しない場合に生じる環境問題が酸性雨である。</p>
</aside>

<div class="tb-tl">
<li><b>1831年</b><strong>接触法の特許</strong> イギリスのフィリップスが SO<sub>2</sub> を触媒で SO<sub>3</sub> にする方法の特許を取得した</li>
<li><b>1843年</b><strong>リービッヒの指摘</strong> 硫酸の消費量で国の商業の繁栄を判定できると述べた</li>
<li><b>1884年</b><strong>アレニウスの電離説</strong> 電解質が水中でイオンに分かれるという考えを博士論文で示した</li>
<li><b>1923年</b><strong>ブレンステッド・ローリーの定義</strong> H<sup>+</sup> の授受で酸と塩基を定義した</li>
</div>

<h3>胃酸</h3>
<p>胃の内壁の壁細胞は塩酸を分泌する。ヒトの胃液の pH は約1〜3である。胃の中は強酸性に保たれ食物とともに入った微生物の多くを不活性化する。胃の内壁は粘液で覆われ自身の塩酸から守られる。胃酸が過剰になったときに飲む制酸薬は塩基で胃酸を中和する薬である。その仕組みは第13章で扱う。</p>

<h3>酸性雨</h3>
<p>汚染のない大気でも雨は弱い酸性を示す。大気中の二酸化炭素が雨に溶けて炭酸を生じ十分に溶けた場合の pH が約5.6になるためである。そこで pH 5.6 以下の雨を酸性雨と呼ぶ目安が使われる。工場や自動車から出る硫黄酸化物や窒素酸化物が雨に取り込まれ硫酸や硝酸に変わると pH はさらに下がる。硫酸と硝酸はどちらも強酸であり少量でも pH を大きく下げる。</p>

<aside class="an an-biz"><b>スタートアップで言えば</b>
<p class="an-h">製錬所の硫酸は排ガスを商品に変えた副産物事業である</p>
<p>銅の製錬で必ず生じる SO<sub>2</sub> は放置すれば環境対策の費用 ／ 回収すれば硫酸という売上。主力の製錬が続く限り生産は止められない。</p>
</aside>

<h2 id="s7">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ ブレンステッド・ローリーの定義</div>
<p class="qz-q">次の反応 ア と イ で下線の物質 H<sub>2</sub>O が酸として働くか塩基として働くかの組合せとして正しいものを1つ選べ。<br>ア HCl ＋ <u>H<sub>2</sub>O</u> → Cl<sup>−</sup> ＋ H<sub>3</sub>O<sup>+</sup><br>イ CH<sub>3</sub>COO<sup>−</sup> ＋ <u>H<sub>2</sub>O</u> ⇄ CH<sub>3</sub>COOH ＋ OH<sup>−</sup></p>
<ol><li>ア 酸 ・ イ 酸</li><li>ア 酸 ・ イ 塩基</li><li>ア 塩基 ・ イ 酸</li><li>ア 塩基 ・ イ 塩基</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。ア で H<sub>2</sub>O は H<sup>+</sup> を受け取り H<sub>3</sub>O<sup>+</sup> になるので塩基である。イ で H<sub>2</sub>O は H<sup>+</sup> を CH<sub>3</sub>COO<sup>−</sup> に与えて OH<sup>−</sup> になるので酸である。左辺と右辺で H の数が増えたか減ったかを比べれば判別できる。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 酸と塩基の強弱と価数</div>
<p class="qz-q">酸と塩基に関する記述として正しいものを1つ選べ。</p>
<ol><li>硫酸は2価の酸なので1価の塩酸より必ず強い酸である</li><li>酢酸は分子中に H を4個もつので4価の酸である</li><li>アンモニアは OH を含まないので塩基ではない</li><li>水酸化カルシウムは2価の強塩基である</li><li>濃度の高い酢酸水溶液は強酸に分類される</li></ol>
<details><summary>解答と解説</summary><div>正解は 4 である。1 は誤りで酸の強さは価数ではなく電離度で特定される。硫酸と塩酸はどちらも強酸である。2 は誤りで酢酸が出す H<sup>+</sup> は COOH の1個だけなので1価である。3 は誤りでアンモニアは H<sup>+</sup> を受け取る塩基である。5 は誤りで強酸と弱酸の区別は物質の種類で決まり濃度では変わらない。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 2価の強酸の pH</div>
<p class="qz-q">0.0050 mol/L の希硫酸の pH として最も適当なものを1つ選べ。ただし硫酸は完全に電離するものとする。</p>
<ol><li>1</li><li>2</li><li>3</li><li>5</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。硫酸は2価なので [H<sup>+</sup>] ＝ 0.0050×2×1 ＝ 0.010 ＝ 1.0×10<sup>−2</sup> mol/L である。したがって pH は2である。価数を掛け忘れると 5.0×10<sup>−3</sup> mol/L となり整数の pH にならない。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 強塩基の pH</div>
<p class="qz-q">水酸化ナトリウム 0.040 g を水に溶かして 1.0 L にした水溶液の pH として最も適当なものを1つ選べ。NaOH のモル質量は 40 g/mol で25 ℃の水のイオン積は 1.0×10<sup>−14</sup> (mol/L)<sup>2</sup> とする。</p>
<ol><li>3</li><li>9</li><li>11</li><li>12</li><li>13</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。NaOH の物質量は 0.040 ÷ 40 ＝ 1.0×10<sup>−3</sup> mol で 1.0 L に溶けているので [OH<sup>−</sup>] ＝ 1.0×10<sup>−3</sup> mol/L である。[H<sup>+</sup>] ＝ 1.0×10<sup>−14</sup> ÷ 1.0×10<sup>−3</sup> ＝ 1.0×10<sup>−11</sup> mol/L なので pH は11である。選択肢 1 の3は [OH<sup>−</sup>] の桁をそのまま pH と取り違えた値である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 弱酸と電離度</div>
<p class="qz-q">0.050 mol/L の酢酸水溶液の pH が3であった。この酢酸の電離度として最も適当なものを1つ選べ。</p>
<ol><li>0.0010</li><li>0.010</li><li>0.020</li><li>0.050</li><li>0.20</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。pH 3 より [H<sup>+</sup>] ＝ 1.0×10<sup>−3</sup> mol/L である。酢酸は1価なので 1.0×10<sup>−3</sup> ＝ 0.050×1×α となり α ＝ 1.0×10<sup>−3</sup> ÷ 0.050 ＝ 0.020 である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 希釈</div>
<p class="qz-q">pH 3 の塩酸を水で薄めた。薄めた後の溶液に関する記述として最も適当なものを1つ選べ。温度は25 ℃とする。</p>
<ol><li>100倍に薄めると pH は1になる</li><li>100倍に薄めると pH は5になる</li><li>10<sup>5</sup>倍に薄めると pH は8になる</li><li>10<sup>5</sup>倍に薄めると溶液は塩基性になる</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。[H<sup>+</sup>] は 1.0×10<sup>−3</sup> から 1.0×10<sup>−5</sup> mol/L になり pH は5である。1 は薄めると pH が大きくなる向きを逆にしている。3 と 4 は誤りで酸をいくら薄めても水の電離による H<sup>+</sup> があるため pH は7に近づくだけで7を超えない。</div></details></div>

<h2 id="s8">この章の要点</h2>
<div class="tb-key"><b>要点</b>
ブレンステッド・ローリーの定義では H<sup>+</sup> を与える側が酸で受け取る側が塩基である。水は相手によって酸にも塩基にもなる。<br>
価数は H<sup>+</sup> を出せる数または受け取れる数であり強さとは無関係である。<br>
強酸は HCl・HNO<sub>3</sub>・H<sub>2</sub>SO<sub>4</sub> で強塩基は NaOH・KOH・Ca(OH)<sub>2</sub>・Ba(OH)<sub>2</sub> である。<br>
[H<sup>+</sup>] ＝ 濃度×価数×電離度 で求め 1.0×10<sup>−n</sup> なら pH ＝ n である。塩基は 1.0×10<sup>−14</sup> を [OH<sup>−</sup>] で割る。<br>
10倍に薄めると pH は1ずつ7に近づくが7を越えない。</div>

<h2 id="s9">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>硫酸の生産量や消費量は、現在も国の工業活動の指標になるか。</strong> 本文は、リービッヒが1843年に硫酸の消費量で商業の繁栄を判定できると述べたことを示す。一方で日本の硫酸の7割強は銅や亜鉛の製錬の副産物とする資料があり、生産量が需要と製錬のどちらを反映するかで評価が異なる。</li>
<li class="tb-vnote"><strong>酸と塩基は、アレニウスとブレンステッド・ローリーのどちらの定義で捉えるべきか。</strong> 本文は、アレニウスの定義ではアンモニアの塩基性を説明しにくく、ブレンステッド・ローリーの定義は反応の中での役割で酸と塩基を決めるとする。後者では水が相手によって酸にも塩基にもなり、物質の性質として分類するか反応の中の役割として分類するかで答えが異なる。</li>
</ul>

<h2 id="s10">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Brønsted–Lowry acid–base theory — Wikipedia — https://en.wikipedia.org/wiki/Br%C3%B8nsted%E2%80%93Lowry_acid%E2%80%93base_theory</li>
<li>Svante Arrhenius — Wikipedia — https://en.wikipedia.org/wiki/Svante_Arrhenius</li>
<li>Contact process — Wikipedia — https://en.wikipedia.org/wiki/Contact_process</li>
<li>Sulphuric Acid Quotations Justus von Liebig — Today in Science History — https://todayinsci.com/QuotationsCategories/S_Cat/SulphuricAcid-Quotations.htm</li>
<li>硫酸の市場規模の推移 経済産業省 生産動態統計による — https://the-shashi.com/market/chemical/sulfuric-acid/</li>
<li>公正取引委員会 平成14年度における主要な企業結合事例 — https://www.jftc.go.jp/dk/kiketsu/jirei/h14mokuji/h14jirei10.html</li>
<li>Gastric acid — Wikipedia — https://en.wikipedia.org/wiki/Gastric_acid</li>
<li>青森県 酸性雨調査結果 — https://www.pref.aomori.lg.jp/soshiki/kankyo/kankyo/acid_rain.html</li>
<li>Acid-Base Indicators — Wired Chemist — https://wiredchemist.com/acid-base-indicators</li>
<li>Indicators used in Titration — Save My Exams — https://www.savemyexams.com/a-level/chemistry/cie/25/revision-notes/7-equilibria/7-2-brnsted-lowry-theory-of-acids-and-bases/indicators-used-in-titration/</li>
<li>Acetic acid — Wikipedia — https://en.wikipedia.org/wiki/Acetic_acid</li>
</ol>
