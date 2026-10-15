<!--meta
{"chapter": 13, "part": "第2編 物質の変化とその利用", "title": "中和反応と塩・中和滴定", "thesis": "中和の本体は H⁺ と OH⁻ が結合して水になる反応である。酸の出す H⁺ の物質量と塩基の受け取る H⁺ の物質量が等しい点が中和点であり強弱には左右されない。中和点の pH は塩の性質で決まり指示薬はその pH に合わせて選ぶ。", "verify": {"date": "2026-10-15", "checked": 65, "match": 58, "fixed": 1, "unconfirmed": 6}}
-->
<p>第12章では酸を H<sup>+</sup> を与える物質と定義し水溶液中の H<sup>+</sup> の量を pH で表した。この章では酸と塩基を混ぜたときに H<sup>+</sup> と OH<sup>−</sup> がどれだけ消費されるかを物質量で数える。第11章の反応式の量的関係と第10章のモル濃度がそのまま計算の道具になる。</p>
<p>共通テストでこの範囲から問われる論点は6つである。中和の量的関係の計算・塩の分類・塩の水溶液の液性・滴定器具の扱いと共洗い・滴定曲線と指示薬の選択・食酢の濃度を求める計算である。</p>

<h2 id="s1">中和反応の本体</h2>
<p>酸と塩基が反応して互いの性質を打ち消す反応を<strong>中和反応</strong>と呼ぶ。塩酸と水酸化ナトリウム水溶液を混ぜると塩化ナトリウムと水が生じる。</p>
<div class="fx">HCl ＋ NaOH → NaCl ＋ H<sub>2</sub>O</div>
<p>この反応式を水溶液中のイオンで書き直すと何が起きているかが明らかになる。</p>
<div class="fx">H<sup>+</sup> ＋ Cl<sup>−</sup> ＋ Na<sup>+</sup> ＋ OH<sup>−</sup> → Na<sup>+</sup> ＋ Cl<sup>−</sup> ＋ H<sub>2</sub>O<small>両辺に共通する Na<sup>+</sup> と Cl<sup>−</sup> を消すと H<sup>+</sup> ＋ OH<sup>−</sup> → H<sub>2</sub>O が残る</small></div>
<p><strong class="hit">中和反応の本体は H<sup>+</sup> と OH<sup>−</sup> が結合して水になる反応である</strong>。Na<sup>+</sup> と Cl<sup>−</sup> は反応の前後で変化せず水溶液中にとどまる。水を蒸発させると Na<sup>+</sup> と Cl<sup>−</sup> が結晶になり塩化ナトリウムが得られる。</p>
<p>酸の陰イオンと塩基の陽イオンからなる化合物を<strong>塩</strong>と呼ぶ。「えん」と読む。塩化ナトリウムは塩の1つにすぎず硫酸ナトリウムや酢酸ナトリウムも塩である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 230" role="img" aria-label="H+ と OH- が結合して水になり Na+ と Cl- は残る">
  <defs><marker id="ah13a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>
  <g font-size="13" text-anchor="middle" fill="var(--muted)">
    <text x="120" y="28">塩酸</text><text x="360" y="28">水酸化ナトリウム水溶液</text><text x="600" y="28">混合後</text>
  </g>
  <g fill="none" stroke="var(--line)" stroke-width="1.5">
    <rect x="20" y="40" width="200" height="150" rx="10"/><rect x="260" y="40" width="200" height="150" rx="10"/><rect x="500" y="40" width="200" height="150" rx="10"/>
  </g>
  <text x="240" y="122" font-size="18" text-anchor="middle" fill="var(--ink)">＋</text>
  <line x1="466" y1="115" x2="494" y2="115" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah13a)"/>
  <g font-size="12" font-weight="600" text-anchor="middle">
    <circle cx="60" cy="80" r="16" fill="var(--warm)"/><text x="60" y="84" fill="#fff">H⁺</text>
    <circle cx="120" cy="80" r="16" fill="var(--warm)"/><text x="120" y="84" fill="#fff">H⁺</text>
    <circle cx="180" cy="80" r="16" fill="var(--warm)"/><text x="180" y="84" fill="#fff">H⁺</text>
    <circle cx="60" cy="150" r="16" fill="var(--dim)"/><text x="60" y="154" fill="var(--ink)">Cl⁻</text>
    <circle cx="120" cy="150" r="16" fill="var(--dim)"/><text x="120" y="154" fill="var(--ink)">Cl⁻</text>
    <circle cx="180" cy="150" r="16" fill="var(--dim)"/><text x="180" y="154" fill="var(--ink)">Cl⁻</text>
    <circle cx="300" cy="80" r="16" fill="var(--cool)"/><text x="300" y="84" fill="#fff">OH⁻</text>
    <circle cx="360" cy="80" r="16" fill="var(--cool)"/><text x="360" y="84" fill="#fff">OH⁻</text>
    <circle cx="420" cy="80" r="16" fill="var(--cool)"/><text x="420" y="84" fill="#fff">OH⁻</text>
    <circle cx="300" cy="150" r="16" fill="var(--dim)"/><text x="300" y="154" fill="var(--ink)">Na⁺</text>
    <circle cx="360" cy="150" r="16" fill="var(--dim)"/><text x="360" y="154" fill="var(--ink)">Na⁺</text>
    <circle cx="420" cy="150" r="16" fill="var(--dim)"/><text x="420" y="154" fill="var(--ink)">Na⁺</text>
    <circle cx="540" cy="72" r="19" fill="var(--accent)"/><text x="540" y="76" fill="#fff">H₂O</text>
    <circle cx="600" cy="72" r="19" fill="var(--accent)"/><text x="600" y="76" fill="#fff">H₂O</text>
    <circle cx="660" cy="72" r="19" fill="var(--accent)"/><text x="660" y="76" fill="#fff">H₂O</text>
    <circle cx="540" cy="128" r="15" fill="var(--dim)"/><text x="540" y="132" fill="var(--ink)">Na⁺</text>
    <circle cx="600" cy="128" r="15" fill="var(--dim)"/><text x="600" y="132" fill="var(--ink)">Na⁺</text>
    <circle cx="660" cy="128" r="15" fill="var(--dim)"/><text x="660" y="132" fill="var(--ink)">Na⁺</text>
    <circle cx="540" cy="168" r="15" fill="var(--dim)"/><text x="540" y="172" fill="var(--ink)">Cl⁻</text>
    <circle cx="600" cy="168" r="15" fill="var(--dim)"/><text x="600" y="172" fill="var(--ink)">Cl⁻</text>
    <circle cx="660" cy="168" r="15" fill="var(--dim)"/><text x="660" y="172" fill="var(--ink)">Cl⁻</text>
  </g>
  <g font-size="12" text-anchor="middle" fill="var(--sub)">
    <text x="120" y="212">H⁺ 3個</text><text x="360" y="212">OH⁻ 3個</text><text x="600" y="212">Na⁺ と Cl⁻ は反応せず残る</text>
  </g>
</svg>
<figcaption>H<sup>+</sup> 3個と OH<sup>−</sup> 3個が1対1で結合し水分子3個になる。灰色の Na<sup>+</sup> と Cl<sup>−</sup> は反応に加わらない。中和点では H<sup>+</sup> と OH<sup>−</sup> のどちらも余らない。</figcaption>
</figure>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">中和点は余りが1人も出ないマッチング会である</p>
<p>H<sup>+</sup> と OH<sup>−</sup> は1対1で組になり水として退場する ／ Na<sup>+</sup> と Cl<sup>−</sup> は誰とも組まず会場に残る。余りが出た側が酸性か塩基性かを示す。</p>
<p class="an-x">残った Na<sup>+</sup> と Cl<sup>−</sup> は溶液中では組にならない。</p>
</aside>

<p>アンモニアと塩酸の中和では水が生じない。</p>
<div class="fx">NH<sub>3</sub> ＋ HCl → NH<sub>4</sub>Cl<small>NH<sub>3</sub> が HCl から H<sup>+</sup> を直接受け取る ・ ブレンステッド・ローリーの定義では中和にあたる</small></div>
<p>第12章のブレンステッド・ローリーの定義に立てば中和は H<sup>+</sup> の受け渡しであり水が生じるかどうかは条件ではない。</p>

<h2 id="s2">中和の量的関係</h2>
<p>中和点では酸が出した H<sup>+</sup> の物質量と塩基が受け取った H<sup>+</sup> の物質量が等しい。塩基が受け取る H<sup>+</sup> の物質量は塩基が出す OH<sup>−</sup> の物質量と同じである。酸の物質量に価数を掛けると H<sup>+</sup> の物質量が求まる。</p>
<div class="fx">a × c × V ＝ b × c′ × V′<small>a ・ b は酸と塩基の価数 ／ c ・ c′ はモル濃度 mol/L ／ V ・ V′ は体積 ・ 両辺で体積の単位をそろえれば mL のままでもよい</small></div>
<p>この式は「H<sup>+</sup> の物質量 ＝ OH<sup>−</sup> の物質量」を濃度と体積で書いたものである。c×V で酸や塩基そのものの物質量を求め価数を掛けて H<sup>+</sup> と OH<sup>−</sup> の物質量に換算する。</p>
<div class="tb-tw"><table>
<thead><tr><th>手順</th><th>例 0.10 mol/L 硫酸 20 mL を 0.20 mol/L NaOH で中和</th></tr></thead>
<tbody>
<tr><td>1 酸の H<sup>+</sup> の物質量</td><td>2 × 0.10 mol/L × 20/1000 L ＝ 4.0×10<sup>−3</sup> mol</td></tr>
<tr><td>2 塩基の OH<sup>−</sup> の物質量</td><td>1 × 0.20 mol/L × V′/1000 L</td></tr>
<tr><td>3 等式を解く</td><td>4.0×10<sup>−3</sup> ＝ 0.20 × V′/1000 より V′ ＝ 20 mL</td></tr>
</tbody></table></div>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">2価の酸は1プレーで併殺を取る内野手である</p>
<p>1価の酸は1プレーでアウト1つ ／ 硫酸は1プレーでアウト2つ。走者 OH<sup>−</sup> 2人を硫酸1回でアウトにする。H<sub>2</sub>SO<sub>4</sub> 1 mol に NaOH 2 mol が対応する理由である。</p>
</aside>

<h3>強弱は中和の量に関係しない</h3>
<p>試験で誤りやすい点がある。<strong class="hit">弱酸でも強酸と同じ量の塩基で中和される</strong>。0.10 mol/L の酢酸 10 mL と 0.10 mol/L の塩酸 10 mL はどちらも 0.10 mol/L NaOH 10 mL で中和点に達する。酢酸は初めに一部しか電離していない。しかし電離した H<sup>+</sup> が OH<sup>−</sup> と反応して消費されると残りの酢酸分子が次々に電離する。最終的には溶かした酢酸の全部が H<sup>+</sup> を出す。</p>
<p>中和に要する塩基の量を決めるのは酸の物質量と価数だけである。電離度は中和点までの pH の変わり方と中和点の pH に影響する。この点は第5節で扱う。</p>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">中和の計算は債権と債務の相殺である。一括か分割かは総額を変えない</p>
<p>酸の H<sup>+</sup> の総額 ／ 塩基の OH<sup>−</sup> の総額。同額で決済が終わる。弱酸は分割で提示するだけで総額は価数と物質量が同じ強酸と等しい。</p>
</aside>

<h2 id="s3">塩の分類と水溶液の性質</h2>
<p>塩は化学式の形で3種類に分類する。<strong>この分類は名称上の分類であり水溶液の液性とは別である</strong>。試験ではこの2つを混同させる選択肢が置かれる場合がある。</p>
<div class="tb-tw"><table>
<thead><tr><th>分類</th><th>定義</th><th>例</th></tr></thead>
<tbody>
<tr><td>正塩</td><td>酸の H も塩基の OH も残っていない塩</td><td>NaCl ／ Na<sub>2</sub>SO<sub>4</sub> ／ CH<sub>3</sub>COONa ／ NH<sub>4</sub>Cl ／ Na<sub>2</sub>CO<sub>3</sub></td></tr>
<tr><td>酸性塩</td><td>酸の H が残っている塩</td><td>NaHSO<sub>4</sub> ／ NaHCO<sub>3</sub></td></tr>
<tr><td>塩基性塩</td><td>塩基の OH が残っている塩</td><td>MgCl(OH) ／ CuCl(OH)</td></tr>
</tbody></table></div>
<p>NH<sub>4</sub>Cl の H は酸の H ではなくアンモニウムイオンの一部であり NH<sub>4</sub>Cl は正塩である。</p>

<h3>塩の水溶液の液性</h3>
<p>正塩の水溶液が中性になるとは限らない。液性はもとの酸と塩基の強弱の組み合わせで特定される。<strong class="hit">強い側の性質が水溶液に現れる</strong>。</p>
<div class="tb-tw"><table>
<thead><tr><th>酸 ＼ 塩基</th><th>強塩基 NaOH など</th><th>弱塩基 NH<sub>3</sub> など</th></tr></thead>
<tbody>
<tr><td>強酸 HCl など</td><td><strong>中性</strong> NaCl ／ Na<sub>2</sub>SO<sub>4</sub> ／ KNO<sub>3</sub></td><td><strong>酸性</strong> NH<sub>4</sub>Cl ／ (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub></td></tr>
<tr><td>弱酸 CH<sub>3</sub>COOH など</td><td><strong>塩基性</strong> CH<sub>3</sub>COONa ／ Na<sub>2</sub>CO<sub>3</sub></td><td>組み合わせごとに異なり化学基礎では扱わない</td></tr>
</tbody></table></div>
<p>理由は弱酸の陰イオンと弱塩基の陽イオンの振る舞いにある。CH<sub>3</sub>COONa を水に溶かすと CH<sub>3</sub>COO<sup>−</sup> の一部が水分子から H<sup>+</sup> を受け取って CH<sub>3</sub>COOH に戻る。水分子は H<sup>+</sup> を失って OH<sup>−</sup> になるので水溶液は塩基性を示す。NH<sub>4</sub>Cl では NH<sub>4</sub><sup>+</sup> の一部が水分子に H<sup>+</sup> を与えて NH<sub>3</sub> に戻り H<sub>3</sub>O<sup>+</sup> が生じるので酸性を示す。強酸の陰イオン Cl<sup>−</sup> や強塩基の陽イオン Na<sup>+</sup> は水と反応しない。</p>
<div class="fx">CH<sub>3</sub>COO<sup>−</sup> ＋ H<sub>2</sub>O ⇄ CH<sub>3</sub>COOH ＋ OH<sup>−</sup> ／ NH<sub>4</sub><sup>+</sup> ＋ H<sub>2</sub>O ⇄ NH<sub>3</sub> ＋ H<sub>3</sub>O<sup>+</sup><small>この反応の詳しい扱いは化学の塩の加水分解で学ぶ</small></div>

<aside class="an an-lv"><b>男女で言えば</b>
<p class="an-h">弱酸の塩が塩基性を示すのは陰イオンに H<sup>+</sup> への未練が残るからである</p>
<p>CH<sub>3</sub>COO<sup>−</sup> は水分子から H<sup>+</sup> を取り戻し OH<sup>−</sup> が残る ／ Cl<sup>−</sup> は未練がなく取り戻さない。</p>
</aside>

<h3>酸性塩の液性</h3>
<p>酸性塩という名称と液性は一致しない。NaHSO<sub>4</sub> は HSO<sub>4</sub><sup>−</sup> がさらに H<sup>+</sup> を出すので水溶液は酸性である。NaHCO<sub>3</sub> は酸性塩だが水溶液は弱い塩基性で pH は約8である。HCO<sub>3</sub><sup>−</sup> が H<sup>+</sup> を出す反応より受け取る反応のほうが進みやすいからである。</p>

<aside class="an an-biz"><b>資本主義で言えば</b>
<p class="an-h">酸性塩は登記上の業種であり液性は決算書の中身である</p>
<p>NaHCO<sub>3</sub> は登記上は酸性塩 ／ 水溶液の実態は塩基性。分類は化学式の形を示し液性は水中の反応で決まる。</p>
</aside>

<h2 id="s4">中和滴定の器具と操作</h2>
<p>濃度がわかっている酸や塩基の水溶液を<strong>標準溶液</strong>と呼ぶ。標準溶液を使って濃度不明の溶液と中和させ必要な体積から濃度を求める操作を<strong>中和滴定</strong>と呼ぶ。体積を正確に量る4つのガラス器具を使い分ける。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="中和滴定の4つの器具と共洗いの要否">
  <g fill="none" stroke="var(--ink)" stroke-width="1.8">
    <path d="M82 40 L82 132 A42 42 0 1 0 98 132 L98 40"/>
    <path d="M268 30 L268 102 A12 30 0 0 0 268 160 L268 205 M272 30 L272 102 A12 30 0 0 1 272 160 L272 205"/>
    <rect x="442" y="30" width="16" height="148"/>
    <path d="M450 178 L450 210"/><rect x="438" y="184" width="24" height="8"/>
    <path d="M615 100 L615 135 L598 205 L662 205 L645 135 L645 100"/>
  </g>
  <g stroke="var(--accent)" stroke-width="2">
    <line x1="74" y1="70" x2="106" y2="70"/>
    <line x1="260" y1="62" x2="280" y2="62"/>
  </g>
  <g stroke="var(--sub)" stroke-width="1">
    <line x1="442" y1="50" x2="452" y2="50"/><line x1="442" y1="70" x2="452" y2="70"/><line x1="442" y1="90" x2="452" y2="90"/><line x1="442" y1="110" x2="452" y2="110"/><line x1="442" y1="130" x2="452" y2="130"/><line x1="442" y1="150" x2="452" y2="150"/>
  </g>
  <path d="M601 192 L659 192 L662 205 L598 205 Z" fill="var(--cool)" opacity=".35"/>
  <circle cx="90" cy="168" r="36" fill="var(--cool)" opacity=".2"/>
  <g font-size="12" fill="var(--accent)">
    <text x="112" y="74">標線</text><text x="284" y="66">標線</text>
  </g>
  <g font-size="13" text-anchor="middle" font-weight="600" fill="var(--ink)">
    <text x="90" y="236">メスフラスコ</text><text x="270" y="236">ホールピペット</text><text x="450" y="236">ビュレット</text><text x="630" y="236">コニカルビーカー</text>
  </g>
  <g font-size="13" text-anchor="middle">
    <text x="90" y="258" fill="var(--cool)">純水でぬれたまま使用可</text>
    <text x="270" y="258" fill="var(--warm)">使う溶液で共洗い</text>
    <text x="450" y="258" fill="var(--warm)">使う溶液で共洗い</text>
    <text x="630" y="258" fill="var(--cool)">純水でぬれたまま使用可</text>
  </g>
  <g font-size="12" text-anchor="middle" fill="var(--sub)">
    <text x="90" y="280">一定体積の溶液を調製</text><text x="270" y="280">一定体積を正確に採取</text><text x="450" y="280">滴下した体積を読み取る</text><text x="630" y="280">中和させる容器</text>
  </g>
</svg>
<figcaption>赤字の2つは中に入れる溶液の濃度が実験の値そのものになる器具で純水が残ると溶液が薄まる。青字の2つは中に入る溶質の物質量だけが意味をもつ器具で純水が残っても物質量は変わらない。</figcaption>
</figure>

<div class="tb-tw"><table>
<thead><tr><th>器具</th><th>用途</th><th>内部が純水でぬれている場合</th><th>理由</th></tr></thead>
<tbody>
<tr><td>ホールピペット</td><td>一定体積を正確に量り取る</td><td>使う溶液で共洗いする</td><td>残った純水で溶液が薄まり量り取る物質量が減る</td></tr>
<tr><td>ビュレット</td><td>滴下した体積を量る</td><td>使う溶液で共洗いする</td><td>標準溶液が薄まり滴下量が多めに出る</td></tr>
<tr><td>メスフラスコ</td><td>一定体積の溶液を調製する</td><td>そのまま使ってよい</td><td>後から標線まで純水を加えるので残った純水は影響しない</td></tr>
<tr><td>コニカルビーカー</td><td>滴定の反応容器</td><td>そのまま使ってよい</td><td>ホールピペットで入れた溶質の物質量は純水で変わらない</td></tr>
</tbody></table></div>
<p><strong>共洗い</strong>は器具の内部をこれから入れる溶液で2度か3度すすぐ操作である。<strong class="hit">共洗いが必要なのは中の溶液の濃度がそのまま結果に影響するホールピペットとビュレットの2つである</strong>。メスフラスコとコニカルビーカーを共洗いすると器具の壁に溶質が残り物質量が増えるので誤差の原因になる。</p>
<p>器具の扱いにはもう1つ論点がある。ホールピペット・ビュレット・メスフラスコは加熱して乾燥させてはならない。ガラスが熱で膨張と収縮をくり返すと容積が変わり目盛の正確さが失われるからである。</p>
<h3>滴定の手順</h3>
<ol>
<li>濃度不明の溶液をホールピペットで一定体積だけ量り取りコニカルビーカーに入れる</li>
<li>指示薬を数滴加える</li>
<li>標準溶液をビュレットに入れ目盛を読む。液面の底を真横から読み最小目盛の10分の1まで読み取る</li>
<li>コニカルビーカーを振り混ぜながらビュレットから標準溶液を滴下する</li>
<li>指示薬の色が変わり振り混ぜても戻らなくなった点で滴下を止め目盛を読む</li>
<li>2回の読みの差が滴下量である。複数回くり返して平均をとる</li>
</ol>

<h2 id="s5">滴定曲線と指示薬の選択</h2>
<p>滴下量を横軸に取り溶液の pH を縦軸に取ったグラフを<strong>滴定曲線</strong>と呼ぶ。下の3本は 0.10 mol/L の酸または塩基 10 mL に 0.10 mol/L の相手を滴下した場合の計算値である。どの組み合わせでも中和点は 10 mL で同じである。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 340" role="img" aria-label="強酸と強塩基 弱酸と強塩基 強酸と弱塩基の滴定曲線">
  <g fill="var(--warm)" opacity=".18">
    <rect x="50" y="123" width="180" height="27"/><rect x="290" y="123" width="180" height="27"/><rect x="530" y="123" width="180" height="27"/>
  </g>
  <g fill="var(--cool)" opacity=".2">
    <rect x="50" y="204" width="180" height="20"/><rect x="290" y="204" width="180" height="20"/><rect x="530" y="204" width="180" height="20"/>
  </g>
  <g stroke="var(--ink)" stroke-width="1" fill="none">
    <path d="M50 60 L50 270 L230 270"/><path d="M290 60 L290 270 L470 270"/><path d="M530 60 L530 270 L710 270"/>
  </g>
  <g stroke="var(--line)" stroke-dasharray="4 4">
    <line x1="140" y1="60" x2="140" y2="270"/><line x1="380" y1="60" x2="380" y2="270"/><line x1="620" y1="60" x2="620" y2="270"/>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="44" y="64">14</text><text x="44" y="169">7</text><text x="44" y="274">0</text>
    <text x="284" y="64">14</text><text x="284" y="169">7</text><text x="284" y="274">0</text>
    <text x="524" y="64">14</text><text x="524" y="169">7</text><text x="524" y="274">0</text>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="50" y="288">0</text><text x="140" y="288">10</text><text x="226" y="288">20</text>
    <text x="290" y="288">0</text><text x="380" y="288">10</text><text x="466" y="288">20</text>
    <text x="530" y="288">0</text><text x="620" y="288">10</text><text x="706" y="288">20</text>
  </g>
  <g fill="none" stroke-width="2.5">
    <path stroke="var(--ink)" d="M50.0 255.0 L59.0 253.7 L68.0 252.4 L77.0 251.0 L86.0 249.5 L95.0 247.8 L104.0 246.0 L113.0 243.7 L122.0 240.7 L131.0 235.8 L135.5 231.1 L138.2 225.1 L139.1 220.5 L139.6 216.0 L140.0 165.0 L140.4 114.0 L140.9 109.5 L141.8 105.1 L144.5 99.2 L149.0 94.8 L158.0 90.6 L176.0 86.7 L194.0 84.6 L212.0 83.2 L230.0 82.2"/>
    <path stroke="var(--ink)" d="M290.0 226.8 L299.0 212.8 L308.0 207.6 L317.0 204.1 L326.0 201.3 L335.0 198.6 L344.0 196.0 L353.0 193.1 L362.0 189.6 L371.0 184.3 L375.5 179.5 L378.2 173.3 L379.1 168.7 L379.6 164.2 L380.0 139.1 L380.4 114.0 L380.9 109.5 L381.8 105.1 L384.5 99.2 L389.0 94.8 L398.0 90.6 L416.0 86.7 L434.0 84.6 L452.0 83.2 L470.0 82.2"/>
    <path stroke="var(--ink)" d="M530.0 103.1 L539.0 117.0 L548.0 122.2 L557.0 125.7 L566.0 128.5 L575.0 131.2 L584.0 133.8 L593.0 136.7 L602.0 140.2 L611.0 145.5 L615.5 150.4 L618.2 156.5 L619.1 161.1 L619.5 165.7 L620.0 190.8 L620.5 216.0 L620.9 220.5 L621.8 224.9 L624.5 230.8 L629.0 235.2 L638.0 239.4 L656.0 243.3 L674.0 245.4 L692.0 246.8 L710.0 247.8"/>
  </g>
  <g fill="var(--accent)"><circle cx="140" cy="165" r="5"/><circle cx="380" cy="139" r="5"/><circle cx="620" cy="191" r="5"/></g>
  <g font-size="13" font-weight="600" text-anchor="middle" fill="var(--ink)">
    <text x="140" y="24">強酸 ＋ 強塩基</text><text x="380" y="24">弱酸 ＋ 強塩基</text><text x="620" y="24">弱塩基 ＋ 強酸</text>
  </g>
  <g font-size="12" text-anchor="middle" fill="var(--sub)">
    <text x="140" y="44">HCl に NaOH を滴下</text><text x="380" y="44">CH₃COOH に NaOH を滴下</text><text x="620" y="44">NH₃ に HCl を滴下</text>
  </g>
  <g font-size="12" text-anchor="middle" fill="var(--accent)">
    <text x="140" y="306">中和点 pH 7.0 ・ 両方使える</text><text x="380" y="306">中和点 約8.7 ・ フェノールフタレイン</text><text x="620" y="306">中和点 約5.3 ・ メチルオレンジ</text>
  </g>
  <rect x="150" y="320" width="14" height="10" fill="var(--warm)" opacity=".35"/><text x="170" y="330" font-size="12" fill="var(--sub)">フェノールフタレイン 8.0〜9.8</text>
  <rect x="400" y="320" width="14" height="10" fill="var(--cool)" opacity=".4"/><text x="420" y="330" font-size="12" fill="var(--sub)">メチルオレンジ 3.1〜4.4</text>
</svg>
<figcaption>縦軸は pH で横軸は滴下量 mL である。赤い帯はフェノールフタレインの変色域で青い帯はメチルオレンジの変色域である。曲線が帯を垂直に近い角度で横切る組み合わせではその指示薬が使える。弱酸と強塩基では曲線がメチルオレンジの帯を中和点よりずっと前に横切るので使えない。強酸と弱塩基ではフェノールフタレインの帯を緩やかに横切り色の変化が中和点と一致しない。</figcaption>
</figure>

<p>3本に共通する特徴は中和点の前後で pH が急に変わる区間があることである。この区間を pH の<strong>ジャンプ</strong>と呼ぶ。指示薬の変色域がジャンプの中に入っていれば1滴で色が変わり中和点を正確に示す。</p>
<div class="tb-tw"><table>
<thead><tr><th>組み合わせ</th><th>中和点の液性</th><th>ジャンプの範囲 目安</th><th>使える指示薬</th></tr></thead>
<tbody>
<tr><td>強酸 ＋ 強塩基</td><td>中性 pH 7</td><td>約 3〜11</td><td>フェノールフタレイン ／ メチルオレンジ</td></tr>
<tr><td>弱酸 ＋ 強塩基</td><td>塩基性</td><td>約 7〜11</td><td>フェノールフタレイン</td></tr>
<tr><td>強酸 ＋ 弱塩基</td><td>酸性</td><td>約 3〜7</td><td>メチルオレンジ</td></tr>
</tbody></table></div>
<p>中和点の液性は第3節の塩の液性と一致する。酢酸と NaOH の中和点の溶液は CH<sub>3</sub>COONa 水溶液なので塩基性になる。アンモニアと塩酸の中和点の溶液は NH<sub>4</sub>Cl 水溶液なので酸性になる。<strong class="hit">指示薬は中和点の pH が変色域に入るものを選ぶ</strong>。弱酸と弱塩基の組み合わせではジャンプが小さく適した指示薬がないため滴定には使わない。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">中和点は8回まで動かず9回裏の1球で決まる試合である</p>
<p>pH は中和点の手前まで緩やかに変わり最後の1滴で跳ね上がる ／ 指示薬はその1球を判定する審判。弱酸の滴定にメチルオレンジを使うのは7回で試合終了を宣告することにあたる。</p>
</aside>

<h2 id="s6">食酢の濃度を求める</h2>
<p>学習指導要領解説は化学基礎の実験例として食酢の中和滴定を挙げている。解説は食酢中の酸のモル濃度と質量パーセント濃度との関係に触れることも挙げている。食酢の主な酸は酢酸である。</p>
<div class="tb-tw"><table>
<thead><tr><th>操作</th><th>内容</th></tr></thead>
<tbody>
<tr><td>1 希釈</td><td>食酢 10.0 mL をホールピペットで量り取りメスフラスコに入れ純水を標線まで加えて 100 mL にする。濃度は10分の1になる</td></tr>
<tr><td>2 採取</td><td>薄めた溶液 10.0 mL をホールピペットでコニカルビーカーに取りフェノールフタレインを加える</td></tr>
<tr><td>3 滴定</td><td>0.100 mol/L の NaOH 水溶液をビュレットから滴下し 7.50 mL で薄い赤色が消えなくなった</td></tr>
</tbody></table></div>
<div class="fx">1 × c × 10.0 ＝ 1 × 0.100 × 7.50 より c ＝ 0.0750 mol/L<small>薄めた溶液の濃度 ・ 元の食酢はその10倍で 0.750 mol/L</small></div>
<p>次に質量パーセント濃度に換算する。CH<sub>3</sub>COOH のモル質量は 60 g/mol である。食酢 1 L に含まれる酢酸は 0.750 × 60 ＝ 45.0 g である。食酢の密度を 1.0 g/cm<sup>3</sup> とすると食酢 1 L の質量は 1000 g なので質量パーセント濃度は 45.0 ÷ 1000 × 100 ＝ 4.5 % である。</p>
<div class="tb-kpi">
<div><b>0.0750<small>mol/L</small></b><i>薄めた溶液の酢酸濃度</i></div>
<div><b>0.750<small>mol/L</small></b><i>元の食酢の酢酸濃度</i></div>
<div><b>4.5<small>%</small></b><i>質量パーセント濃度</i><em>密度 1.0 g/cm³ と仮定</em></div>
</div>
<p>指示薬にフェノールフタレインを使う理由は酢酸が弱酸で NaOH が強塩基だからである。中和点の溶液は酢酸ナトリウム水溶液で塩基性を示す。メチルオレンジを使うと pH 4.4 付近で色が変わり滴下量は中和点よりはるかに少なく読み取られる。</p>

<h2 id="s7">現実世界の中和 酸性土壌と制酸薬</h2>
<p>中和は実験室の外でも使われる。農業と医薬品の2つの例を見る。</p>
<h3>酸性土壌に石灰を撒く</h3>
<p>日本のように雨の多い地域では土壌のカルシウムやマグネシウムが雨水に溶けて流れ出し土壌は酸性に傾く。窒素肥料の硫酸アンモニウムを使い続けても酸性化が進む。多くの作物は強い酸性の土壌では生育が悪くなる。そこで消石灰 Ca(OH)<sub>2</sub> や炭酸カルシウム CaCO<sub>3</sub> や苦土石灰を撒いて土壌の H<sup>+</sup> を中和する。</p>
<div class="fx">Ca(OH)<sub>2</sub> ＋ 2H<sup>+</sup> → Ca<sup>2+</sup> ＋ 2H<sub>2</sub>O ／ CaCO<sub>3</sub> ＋ 2H<sup>+</sup> → Ca<sup>2+</sup> ＋ H<sub>2</sub>O ＋ CO<sub>2</sub></div>
<p>国の地力増進基本指針は水田の土壌 pH の改善目標を 6.0 以上 6.5 以下としている。散布量は土壌診断で測った pH から計算する。</p>

<h3>制酸薬</h3>
<p>胃酸の主成分は塩酸である。制酸薬はすでに分泌された胃酸を中和して胃の中の pH を上げる薬である。成分には炭酸水素ナトリウム・水酸化マグネシウム・炭酸カルシウム・水酸化アルミニウムが使われる。</p>
<div class="fx">NaHCO<sub>3</sub> ＋ HCl → NaCl ＋ H<sub>2</sub>O ＋ CO<sub>2</sub> ／ Mg(OH)<sub>2</sub> ＋ 2HCl → MgCl<sub>2</sub> ＋ 2H<sub>2</sub>O<small>Mg(OH)<sub>2</sub> は2価の塩基なので 1 mol で HCl 2 mol を中和する</small></div>

<aside class="an an-rw"><b>現実世界</b>
<p>制酸薬の成分選びは中和の量と速さの設計である。炭酸水素ナトリウムは水に溶けやすく速く中和するが二酸化炭素が発生し胃が張る原因になる。水酸化マグネシウムや水酸化アルミニウムは水に溶けにくく少しずつ溶けて中和を続ける。成分の価数と溶けやすさで1錠あたりの中和量と中和が始まる速さが変わる。</p>
<p>農業の石灰も同じ構造である。消石灰は反応が速いが撒きすぎると土壌が強い塩基性に振れる。炭酸カルシウムは溶けにくく反応が緩やかで過剰になりにくい。酸を打ち消すという同じ目的でも塩基の強さと溶解度で製品を使い分ける。</p>
</aside>

<h2 id="s8">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 中和の量的関係</div>
<p class="qz-q">0.050 mol/L の水酸化カルシウム水溶液 20 mL を過不足なく中和するのに必要な 0.10 mol/L の塩酸の体積として正しいものを1つ選べ。</p>
<ol><li>5.0 mL</li><li>10 mL</li><li>20 mL</li><li>40 mL</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。Ca(OH)<sub>2</sub> は2価の塩基なので OH<sup>−</sup> の物質量は 2 × 0.050 × 20/1000 ＝ 2.0×10<sup>−3</sup> mol である。塩酸は1価なので 1 × 0.10 × V/1000 ＝ 2.0×10<sup>−3</sup> より V ＝ 20 mL である。価数の2を掛け忘れると 2 の 10 mL を選ぶ。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 塩の水溶液の液性</div>
<p class="qz-q">次の塩のうち水溶液が塩基性を示すものを1つ選べ。</p>
<ol><li>NaCl</li><li>NH<sub>4</sub>Cl</li><li>NaHSO<sub>4</sub></li><li>CH<sub>3</sub>COONa</li><li>KNO<sub>3</sub></li></ol>
<details><summary>解答と解説</summary><div>正解は 4 である。CH<sub>3</sub>COONa は弱酸の酢酸と強塩基の NaOH からなる塩で塩基性を示す。1 と 5 は強酸と強塩基の塩で中性である。2 は強酸と弱塩基の塩で酸性である。3 は HSO<sub>4</sub><sup>−</sup> が H<sup>+</sup> を出すので酸性である。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 塩の分類と液性</div>
<p class="qz-q">塩に関する記述として正しいものを1つ選べ。</p>
<ol><li>正塩の水溶液はすべて中性である</li><li>酸性塩の水溶液はすべて酸性である</li><li>NaHCO<sub>3</sub> は酸性塩であり水溶液は弱い塩基性を示す</li><li>NH<sub>4</sub>Cl は H を含むので酸性塩である</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。1 は誤りで正塩の CH<sub>3</sub>COONa は塩基性を示し NH<sub>4</sub>Cl は酸性を示す。2 は誤りで酸性塩の NaHCO<sub>3</sub> は塩基性を示す。4 は誤りで NH<sub>4</sub>Cl の H はアンモニウムイオンの一部であり酸の H が残った形ではないので正塩である。正塩・酸性塩・塩基性塩は化学式の形の分類であり液性とは別である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 器具の扱い</div>
<p class="qz-q">中和滴定で内部が純水でぬれている器具を使う。これから入れる溶液で共洗いしてから使う器具の組み合わせとして正しいものを1つ選べ。</p>
<ol><li>メスフラスコ と コニカルビーカー</li><li>ホールピペット と ビュレット</li><li>ホールピペット と コニカルビーカー</li><li>ビュレット と メスフラスコ</li><li>4つの器具すべて</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。ホールピペットとビュレットは内部の溶液の濃度が結果にそのまま影響するので純水が残ると溶液が薄まる。メスフラスコは後から純水を加え コニカルビーカーは入れた溶質の物質量だけが問題になるので純水でぬれたまま使える。これらを共洗いすると溶質が余分に残り誤差が生じる。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 指示薬の選択</div>
<p class="qz-q">濃度不明のアンモニア水を塩酸で滴定する。指示薬とその理由の組み合わせとして最も適当なものを1つ選べ。</p>
<ol><li>フェノールフタレイン ・ 中和点の溶液が塩基性を示すため</li><li>フェノールフタレイン ・ 中和点の溶液が中性を示すため</li><li>メチルオレンジ ・ 中和点の溶液が酸性を示すため</li><li>メチルオレンジ ・ 中和点の溶液が塩基性を示すため</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。中和点の溶液は強酸と弱塩基の塩 NH<sub>4</sub>Cl の水溶液で pH は約5の酸性になる。変色域が酸性側にあるメチルオレンジを使う。フェノールフタレインは中和点よりずっと手前の塩基性の範囲でしだいに色が変わるので中和点を示さない。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 食酢の濃度</div>
<p class="qz-q">食酢を水で正確に10倍に薄めた。薄めた溶液 10.0 mL を 0.100 mol/L の NaOH 水溶液で滴定したところ中和に 7.20 mL を要した。元の食酢中の酢酸の質量パーセント濃度として最も近いものを1つ選べ。食酢の密度は 1.0 g/cm<sup>3</sup> で CH<sub>3</sub>COOH のモル質量は 60 g/mol とする。</p>
<ol><li>0.43 %</li><li>2.2 %</li><li>4.3 %</li><li>7.2 %</li><li>8.6 %</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。薄めた溶液の濃度は 0.100 × 7.20 ÷ 10.0 ＝ 0.0720 mol/L で元の食酢は 0.720 mol/L である。食酢 1 L 中の酢酸は 0.720 × 60 ＝ 43.2 g で食酢 1 L の質量は 1000 g なので 43.2 ÷ 1000 × 100 ＝ 4.32 % である。1 は10倍を掛け忘れた値である。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
中和の本体は H<sup>+</sup> ＋ OH<sup>−</sup> → H<sub>2</sub>O であり残った陽イオンと陰イオンが塩になる。<br>
中和点では 酸の価数×濃度×体積 ＝ 塩基の価数×濃度×体積 が成り立ち酸と塩基の強弱は関係しない。<br>
正塩・酸性塩・塩基性塩は化学式の分類で液性は元の酸と塩基の強い側で特定される。NaHCO<sub>3</sub> は酸性塩だが塩基性を示す。<br>
共洗いするのはホールピペットとビュレットでメスフラスコとコニカルビーカーは純水でぬれたまま使う。<br>
弱酸と強塩基はフェノールフタレイン ・ 強酸と弱塩基はメチルオレンジ ・ 強酸と強塩基はどちらでもよい。</div>

<h2 id="s10">残っている問い</h2>
<ul>
<li class="tb-vnote">滴定曲線の図は電離定数を酢酸 1.75×10<sup>−5</sup> とアンモニア 1.8×10<sup>−5</sup> として計算した値である。中和点の pH 約8.7 と約5.3 は 0.050 mol/L の塩の水溶液についての値であり濃度によって変わる。塩の加水分解の計算は化学で扱う。</li>
<li class="tb-vnote">フェノールフタレインの変色域は資料により 8.0〜9.8 から 8.3〜10.0 まで幅がある。本文は日本の化学基礎の教科書で多い値を使った。</li>
<li class="tb-vnote">地力増進基本指針の改善目標は水田の値を確認した。普通畑と樹園地の値は一次資料の本文で確認できていない。</li>
<li class="tb-vnote">弱酸と弱塩基の塩の液性は2つの電離定数の大小で決まる。CH<sub>3</sub>COONH<sub>4</sub> の水溶液が中性に近いことは化学で扱い本章では断定しない。</li>
<li class="tb-vnote">食酢の密度を 1.0 g/cm<sup>3</sup> とする仮定は計算を簡単にするための近似である。実際の食酢の密度はこれよりわずかに大きい。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Neutralization chemistry — Wikipedia — https://en.wikipedia.org/wiki/Neutralization_(chemistry)</li>
<li>Acid–base titration — Wikipedia — https://en.wikipedia.org/wiki/Acid%E2%80%93base_titration</li>
<li>Acid-Base Indicators — Wired Chemist — https://wiredchemist.com/acid-base-indicators</li>
<li>Indicators used in Titration — Save My Exams — https://www.savemyexams.com/a-level/chemistry/cie/25/revision-notes/7-equilibria/7-2-brnsted-lowry-theory-of-acids-and-bases/indicators-used-in-titration/</li>
<li>Acetic acid — Wikipedia — https://en.wikipedia.org/wiki/Acetic_acid</li>
<li>Ammonia — Wikipedia — https://en.wikipedia.org/wiki/Ammonia</li>
<li>MSDマニュアル家庭版 胃酸の治療に用いられる薬剤 — https://www.msdmanuals.com/ja-jp/home/03-消化器系の病気/胃炎と消化性潰瘍/胃酸の治療に用いられる薬剤</li>
<li>農林水産省 地力増進基本指針の改善目標を含む資料 — https://www.maff.go.jp/j/study/dozyo_kanri/01/attach/pdf/index-5.pdf</li>
<li>東京都 土壌診断 — https://www.agri.metro.tokyo.lg.jp/files/R4_dojyousindan.pdf</li>
</ol>
