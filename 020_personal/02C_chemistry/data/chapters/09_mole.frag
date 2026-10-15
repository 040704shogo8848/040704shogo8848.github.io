<!--meta
{"chapter": 9, "part": "第2編 物質の変化とその利用", "title": "原子量・分子量・物質量", "thesis": "原子1個の質量は小さすぎて天秤で量れない。そこで 6.02×10²³ 個を1束にした物質量 mol を基軸の単位に置く。質量・粒子数・気体の体積はどれも mol との換算レートで結ばれ単位ごと掛け算すれば答えが出る。", "verify": {"date": "2026-10-15", "checked": 50, "match": 46, "fixed": 1, "unconfirmed": 3}}
-->
<p>第1編では原子の構造とイオン・分子・金属の結合を扱った。そこで数えた対象は原子1個・電子1個という粒子である。第2編からは実験室で量れる量を扱う。天秤が示すのはグラムで目盛りが示すのはリットルである。粒子の個数とグラムをつなぐ単位がこの章の物質量であり化学基礎の計算問題はすべてこの単位の上に組み立てられる。</p>
<p>共通テストでこの範囲から出る論点は5種類である。相対質量と原子量の定義・同位体の存在比からの原子量の計算・分子量と式量・アボガドロ定数と物質量の換算・気体のモル体積と密度を使った計算である。後半の第10章と第11章はこの章の換算を部品として使う。換算の型をここで固める。</p>

<h2 id="s1">原子の質量は相対値で表す</h2>
<p>炭素原子1個の質量は約 1.99×10<sup>−23</sup> g である。水素原子1個は約 1.67×10<sup>−24</sup> g である。この桁の数を毎回書くと計算の誤りが増える。そこで基準の原子を1つ定めて他の原子の質量をその何倍かで表す。これを<strong>相対質量</strong>と呼ぶ。</p>
<p>現在の基準は質量数12の炭素原子 <sup>12</sup>C である。<strong class="hit"><sup>12</sup>C 1個の質量をちょうど 12 と定め他の原子の質量をこれとの比で表す</strong>。相対質量は比なので単位をもたない。<sup>1</sup>H の相対質量は約 1.0078 で <sup>16</sup>O は約 15.995 である。陽子と中性子の質量がそれぞれ約1なので相対質量は質量数に近い値になる。</p>
<p>基準は歴史の中で変わってきた。19世紀末から酸素を16とする基準が使われていた。物理学と化学で酸素の扱いが異なり値に食い違いが生じたため1960年と1961年に国際学会が <sup>12</sup>C を基準とする目盛りに統一した。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 230" role="img" aria-label="12Cを12とした相対質量の目盛り">
  <text x="20" y="26" font-size="13" fill="var(--muted)">相対質量の目盛り 12C 1個を 12 と定める</text>
  <line x1="60" y1="120" x2="680" y2="120" stroke="var(--ink)" stroke-width="1.5"/>
  <g stroke="var(--line)" stroke-width="1">
    <line x1="60" y1="114" x2="60" y2="126"/><line x1="160" y1="114" x2="160" y2="126"/><line x1="260" y1="114" x2="260" y2="126"/>
    <line x1="360" y1="114" x2="360" y2="126"/><line x1="460" y1="114" x2="460" y2="126"/><line x1="560" y1="114" x2="560" y2="126"/><line x1="660" y1="114" x2="660" y2="126"/>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="60" y="144">0</text><text x="160" y="144">6</text><text x="260" y="144">12</text><text x="360" y="144">18</text>
    <text x="460" y="144">24</text><text x="560" y="144">30</text><text x="660" y="144">36</text>
  </g>
  <g font-size="13" font-weight="600" text-anchor="middle">
    <circle cx="77" cy="92" r="9" fill="var(--cool)"/><text x="77" y="72">¹H</text>
    <circle cx="260" cy="88" r="15" fill="var(--ink)"/><text x="260" y="62">¹²C 基準</text>
    <circle cx="327" cy="88" r="15" fill="var(--warm)"/><text x="327" y="62">¹⁶O</text>
    <circle cx="643" cy="86" r="18" fill="var(--accent)"/><text x="643" y="58">³⁵Cl</text>
  </g>
  <g font-size="12.5" fill="var(--sub)" text-anchor="middle">
    <text x="77" y="172">1.0078</text><text x="260" y="172">12 ちょうど</text><text x="327" y="172">15.995</text><text x="643" y="172">34.969</text>
  </g>
  <text x="360" y="210" font-size="12.5" fill="var(--muted)" text-anchor="middle">実際の質量 ¹²C 1個 ＝ 1.99×10⁻²³ g を「12」と読み替えた比の目盛り</text>
</svg>
<figcaption>相対質量は12Cを12とした比である。実際の質量は10⁻²³ g の桁だが比に直すと1から数十の扱いやすい数になる。相対質量が質量数に近いのは陽子と中性子がどちらも相対質量約1だからである。</figcaption>
</figure>

<h2 id="s2">同位体の存在比と原子量</h2>
<p>同じ元素でも中性子の数が異なる同位体が存在する。塩素には <sup>35</sup>Cl と <sup>37</sup>Cl がある。自然界の塩素はこの2種の混合物であり混合の比率は地球上のどこでもおおむね一定である。そこで同位体の相対質量を存在比で重み付けした平均値を元素の<strong>原子量</strong>とする。</p>
<div class="fx">Cl の原子量 ＝ 34.969 × 0.758 ＋ 36.966 × 0.242 ＝ 26.51 ＋ 8.95 ＝ 35.45<small>存在比 <sup>35</sup>Cl 75.8 % ・ <sup>37</sup>Cl 24.2 %。教科書では 35 × 0.75 ＋ 37 × 0.25 ＝ 35.5 と丸めて計算することが多い</small></div>
<p><strong class="hit">原子量は平均値なので Cl 原子が 35.5 という質量をもつわけではない</strong>。1個ずつ量れば 35 前後の原子と 37 前後の原子しか存在しない。大量の原子を集めたときの1個あたりの平均が 35.5 である。化学で扱う試料は 10<sup>20</sup> 個以上の原子を含むので平均値で計算して誤差は生じない。</p>
<p>この平均は加重平均である。2つの同位体の質量を数直線上に置き存在比をおもりとみなすと支点が原子量の位置にくる。存在比の大きい <sup>35</sup>Cl の側に支点が寄る。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 240" role="img" aria-label="塩素の原子量は同位体の加重平均であり天秤の支点の位置にくる">
  <text x="20" y="26" font-size="13" fill="var(--muted)">数直線の天秤 おもりは存在比</text>
  <line x1="120" y1="130" x2="620" y2="130" stroke="var(--ink)" stroke-width="3"/>
  <!-- 34.969 at x=150, 36.966 at x=590 ; scale 220.3 px per unit ; 35.45 -> 150+0.483*220.3=256 -->
  <rect x="100" y="60" width="100" height="70" fill="var(--cool)" opacity=".85"/>
  <text x="150" y="100" font-size="15" font-weight="700" fill="#fff" text-anchor="middle">75.8 %</text>
  <rect x="560" y="108" width="60" height="22" fill="var(--warm)" opacity=".85"/>
  <text x="590" y="100" font-size="15" font-weight="700" fill="var(--warm)" text-anchor="middle">24.2 %</text>
  <path d="M256 132 L240 168 L272 168 Z" fill="var(--accent)"/>
  <g font-size="13" text-anchor="middle" font-weight="600">
    <text x="150" y="190">³⁵Cl 34.969</text>
    <text x="590" y="190">³⁷Cl 36.966</text>
    <text x="256" y="190" fill="var(--accent)">35.45</text>
  </g>
  <g font-size="12.5" fill="var(--sub)" text-anchor="middle">
    <text x="203" y="152">0.48</text>
    <text x="423" y="152">1.52</text>
  </g>
  <text x="360" y="222" font-size="12.5" fill="var(--muted)" text-anchor="middle">支点の左右で 75.8×0.48 ≒ 24.2×1.52 ≒ 36.6 となり釣り合う</text>
</svg>
<figcaption>加重平均は数直線上の重心である。支点から各同位体までの距離に存在比を掛けた値が左右で等しくなる位置が原子量である。存在比の大きい35Clに近い35.45に支点がくる。</figcaption>
</figure>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">原子量はチーム打率である。打数で重みをつけた平均である</p>
<p>同位体の相対質量が各打者の打率 ／ 存在比が打数。存在比24.2 %の <sup>37</sup>Cl は控え選手で平均を 37 の側へ引く力は弱い。</p>
</aside>

<h3>原子量の計算で問われる型</h3>
<p>原子量の計算には存在比から原子量を求める順方向の型と原子量から存在比を逆算する型がある。逆算は存在比を x と置いて1次方程式を立てる。</p>
<div class="fx">ホウ素 <sup>10</sup>B 10.0 ・ <sup>11</sup>B 11.0 ・ 原子量 10.8 → 10.0x ＋ 11.0(1 − x) ＝ 10.8 → x ＝ 0.20<small><sup>10</sup>B が 20 % で <sup>11</sup>B が 80 %。支点 10.8 から 10.0 までの距離 0.8 と 11.0 までの距離 0.2 の逆比 1 対 4 が存在比になる</small></div>

<h2 id="s3">分子量と式量</h2>
<p>分子をつくる原子の原子量を合計した値を<strong>分子量</strong>と呼ぶ。H<sub>2</sub>O は H が2個と O が1個なので 1.0×2 ＋ 16×1 ＝ 18 である。CO<sub>2</sub> は 12 ＋ 16×2 ＝ 44 である。分子量も原子量と同じく <sup>12</sup>C を12とする比なので単位はない。</p>
<p>イオン結晶や金属には分子という単位が存在しない。第6章で扱ったとおりイオン結晶は組成式で表す。組成式に含まれる原子の原子量の合計を<strong>式量</strong>と呼ぶ。NaCl の式量は 23 ＋ 35.5 ＝ 58.5 である。イオンの式量も同じ方法で求める。電子の質量は陽子の約1840分の1なので電子の出入りは式量に影響しない。Na<sup>+</sup> の式量は 23 である。</p>
<div class="tb-tw"><table>
<thead><tr><th>物質</th><th>化学式</th><th>計算</th><th>値</th><th>呼び方</th></tr></thead>
<tbody>
<tr><td>水</td><td>H<sub>2</sub>O</td><td>1.0×2 ＋ 16</td><td>18</td><td>分子量</td></tr>
<tr><td>二酸化炭素</td><td>CO<sub>2</sub></td><td>12 ＋ 16×2</td><td>44</td><td>分子量</td></tr>
<tr><td>アンモニア</td><td>NH<sub>3</sub></td><td>14 ＋ 1.0×3</td><td>17</td><td>分子量</td></tr>
<tr><td>塩化ナトリウム</td><td>NaCl</td><td>23 ＋ 35.5</td><td>58.5</td><td>式量</td></tr>
<tr><td>炭酸カルシウム</td><td>CaCO<sub>3</sub></td><td>40 ＋ 12 ＋ 16×3</td><td>100</td><td>式量</td></tr>
<tr><td>硫酸イオン</td><td>SO<sub>4</sub><sup>2−</sup></td><td>32 ＋ 16×4</td><td>96</td><td>式量</td></tr>
</tbody></table></div>
<p>原子量の値は問題文に与えられる。共通テストでは H＝1.0 ・ C＝12 ・ N＝14 ・ O＝16 ・ Na＝23 ・ Cl＝35.5 などの概数が使われる。この章の計算もこの概数で行う。</p>

<h2 id="s4">アボガドロ定数と物質量</h2>
<p>相対質量は比なので単位がない。ここで原子量の数値にグラムを付けた質量を考える。<sup>12</sup>C を 12 g 集めたときに含まれる原子の数は約 6.02×10<sup>23</sup> 個である。H は 1.0 g ・ O は 16 g で同じ個数になる。<strong class="hit">原子量の数値にグラムを付けた質量にはどの元素でも同じ個数の原子が含まれる</strong>。相対質量が原子1個の質量の比なので同じ比で集めれば個数がそろうからである。</p>
<p>この個数 6.02×10<sup>23</sup> 個を1つの束とみなして数える単位が<strong>モル</strong>であり記号は mol である。mol を単位として表した量を<strong>物質量</strong>と呼ぶ。1 mol あたりの粒子数を<strong>アボガドロ定数</strong> N<sub>A</sub> と呼ぶ。</p>
<div class="fx">N<sub>A</sub> ＝ 6.02214076×10<sup>23</sup> /mol（定義値）<small>2019年5月20日の国際単位系の改定でこの値が定義として固定された。計算では 6.02×10<sup>23</sup> /mol や 6.0×10<sup>23</sup> /mol を使う</small></div>
<p>改定前のモルは「0.012 kg の <sup>12</sup>C に含まれる原子の数と等しい粒子を含む物質量」と定義されていた。改定後は個数そのものが定義になった。高校の計算では改定の前後で結果は変わらない。</p>
<p>鉛筆12本を1ダースと数えるのと同じく mol は個数の単位である。粒子の種類を必ず指定する。水 1 mol は H<sub>2</sub>O 分子が 6.02×10<sup>23</sup> 個である。その中に H 原子は 2 mol あり O 原子は 1 mol ある。分子の物質量と原子の物質量の取り違えは誤答の選択肢として置かれやすい。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">物質量は株数でありモル質量は株価である</p>
<p>質量＝物質量×モル質量は時価総額＝株数×株価と同じ式である。反応で数えるのは時価総額ではなく株数のほうである。</p>
</aside>

<aside class="an an-lv"><b>男女で言えば</b>
<p class="an-h">お見合いは体重の合計ではなく人数でそろえる。反応も同じである</p>
<p>H<sub>2</sub> 1 g は 0.50 mol ／ O<sub>2</sub> 1 g は 0.031 mol。同じ 1 g でも組になる粒子の数はそろわない。</p>
<p class="an-x">組になる個数の比は1対1とは限らず反応式の係数で特定される。</p>
</aside>

<h2 id="s5">モル質量と気体のモル体積</h2>
<p>物質 1 mol あたりの質量を<strong>モル質量</strong>と呼ぶ。単位は g/mol である。<strong class="hit">モル質量の数値は原子量・分子量・式量の数値に g/mol を付けたもの</strong>に等しい。H<sub>2</sub>O のモル質量は 18 g/mol で NaCl は 58.5 g/mol である。分子量は単位のない比でモル質量は単位をもつ量である。両者の数値は同じだが概念は異なる。</p>
<p>気体には別の換算が成り立つ。同じ温度と同じ圧力のもとで同じ体積の気体には種類によらず同じ数の分子が含まれる。これをアボガドロの法則と呼ぶ。1811年にアボガドロが提唱した。気体の分子どうしの距離は分子自体の大きさより十分に大きいので体積は分子の種類ではなく個数で特定される。</p>
<div class="fx">0 ℃ ・ 1.013×10<sup>5</sup> Pa（標準状態）で 気体 1 mol の体積 ＝ 22.4 L/mol<small>理想気体の計算値は 22.414 L/mol。H<sub>2</sub> でも CO<sub>2</sub> でも同じ値を使う</small></div>
<p>22.4 L は一辺約 28 cm の立方体の体積である。気体の種類が変わってもこの値は変わらないが温度と圧力が変われば変わる。問題文に「標準状態」または「0 ℃ ・ 1.013×10<sup>5</sup> Pa」とある場合だけ 22.4 L/mol を使う。温度や圧力が異なる条件の計算は気体の状態方程式として化学で扱う。</p>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">気体の体積は体格ではなく相手との距離で特定される</p>
<p>まばらな会場では大柄でも小柄でも1人が占める空間は同じである。気体 1 mol が種類によらず 22.4 L を占めるのはこの状態である。</p>
<p class="an-x">液体と固体は分子どうしが接していて 22.4 L/mol は使えない。</p>
</aside>

<h3>気体の密度と分子量</h3>
<p>標準状態の気体の密度はモル質量を 22.4 L/mol で割れば求まる。CO<sub>2</sub> は 44 ÷ 22.4 ＝ 1.96 g/L である。逆に密度に 22.4 を掛ければ分子量が求まる。空気は N<sub>2</sub> と O<sub>2</sub> が約 4 対 1 の混合気体であり平均のモル質量は 28×0.8 ＋ 32×0.2 ＝ 28.8 g/mol である。分子量が 28.8 より小さい気体は空気より軽く大きい気体は空気より重い。気体の捕集方法の選択はこの比較で行う。</p>

<h2 id="s6">換算のハブと単位ごと掛け算する方法</h2>
<p>ここまでの換算はすべて mol を中心に置いた放射状の関係にまとまる。質量から粒子数を求める場合も直接は換算しない。いったん mol を経由する。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 360" role="img" aria-label="物質量molを中心に質量・粒子数・気体の体積を結ぶ換算の図">
  <defs><marker id="ah09a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>
  <circle cx="360" cy="180" r="62" fill="var(--accent)"/>
  <text x="360" y="176" font-size="20" font-weight="700" fill="#fff" text-anchor="middle">物質量</text>
  <text x="360" y="200" font-size="15" fill="#fff" text-anchor="middle">mol</text>
  <!-- mass left -->
  <rect x="30" y="148" width="150" height="64" rx="6" fill="none" stroke="var(--warm)" stroke-width="2"/>
  <text x="105" y="176" font-size="15" font-weight="600" text-anchor="middle">質量</text><text x="105" y="198" font-size="13" fill="var(--sub)" text-anchor="middle">g</text>
  <!-- particles right -->
  <rect x="540" y="148" width="150" height="64" rx="6" fill="none" stroke="var(--cool)" stroke-width="2"/>
  <text x="615" y="176" font-size="15" font-weight="600" text-anchor="middle">粒子数</text><text x="615" y="198" font-size="13" fill="var(--sub)" text-anchor="middle">個</text>
  <!-- gas volume bottom -->
  <rect x="285" y="290" width="150" height="56" rx="6" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <text x="360" y="314" font-size="15" font-weight="600" text-anchor="middle">気体の体積</text><text x="360" y="334" font-size="13" fill="var(--sub)" text-anchor="middle">L 標準状態</text>
  <!-- solution top -->
  <rect x="285" y="14" width="150" height="56" rx="6" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="360" y="38" font-size="15" font-weight="600" text-anchor="middle">溶液の体積</text><text x="360" y="58" font-size="13" fill="var(--sub)" text-anchor="middle">L 第10章</text>
  <!-- arrows mass <-> mol -->
  <line x1="182" y1="168" x2="294" y2="168" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah09a)"/>
  <line x1="296" y1="194" x2="184" y2="194" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah09a)"/>
  <text x="238" y="160" font-size="12.5" text-anchor="middle" fill="var(--warm)">÷ モル質量</text>
  <text x="238" y="214" font-size="12.5" text-anchor="middle" fill="var(--warm)">× モル質量</text>
  <!-- mol <-> particles -->
  <line x1="424" y1="168" x2="536" y2="168" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah09a)"/>
  <line x1="538" y1="194" x2="426" y2="194" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah09a)"/>
  <text x="482" y="160" font-size="12.5" text-anchor="middle" fill="var(--cool)">× 6.02×10²³</text>
  <text x="482" y="214" font-size="12.5" text-anchor="middle" fill="var(--cool)">÷ 6.02×10²³</text>
  <!-- mol <-> gas volume -->
  <line x1="348" y1="244" x2="348" y2="286" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah09a)"/>
  <line x1="372" y1="288" x2="372" y2="246" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah09a)"/>
  <text x="340" y="270" font-size="12.5" text-anchor="end">× 22.4</text>
  <text x="380" y="270" font-size="12.5">÷ 22.4</text>
  <!-- mol <-> solution -->
  <line x1="360" y1="74" x2="360" y2="114" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#ah09a)"/>
  <text x="372" y="98" font-size="12.5" fill="var(--muted)">モル濃度 mol/L で換算</text>
  <!-- density link -->
  <path d="M60 146 C 60 70, 200 52, 280 44" fill="none" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="130" y="100" font-size="12.5" fill="var(--muted)">密度 g/cm³ で</text>
  <text x="130" y="118" font-size="12.5" fill="var(--muted)">体積と質量を換算</text>
</svg>
<figcaption>どの量からどの量へ換算する場合も中心のmolを経由する。外向きの矢印は掛け算で内向きの矢印は割り算である。この章で使う換算のレートはモル質量・アボガドロ定数・モル体積の3つである。溶液の体積との換算は第10章のモル濃度で扱う。固体と液体の体積は密度でいったん質量に直してからmolへ進む。</figcaption>
</figure>

<p>換算の誤りを防ぐ方法が<strong>単位ごと掛け算する</strong>方法である。数値だけでなく単位も分数として書き分子と分母に同じ単位があれば約分する。最後に残った単位が求めたい単位なら式は正しい。換算レートは「1 mol ／ 18 g」のように1を含む分数として書き向きは消したい単位が分母にくるように選ぶ。</p>

<div class="fx">例1 ・ 水 9.0 g に含まれる水分子の数<br>9.0 g × (1 mol ／ 18 g) × (6.02×10<sup>23</sup> 個 ／ 1 mol) ＝ 3.01×10<sup>23</sup> 個<small>g が約分されて mol が残り次に mol が約分されて個が残る。H 原子の数を問われたら分子1個に2個なので 6.02×10<sup>23</sup> 個になる</small></div>

<div class="fx">例2 ・ 標準状態で 5.6 L の CO<sub>2</sub> の質量<br>5.6 L × (1 mol ／ 22.4 L) × (44 g ／ 1 mol) ＝ 0.25 mol × 44 g/mol ＝ 11 g<small>L が約分されて mol になり mol が約分されて g が残る</small></div>

<div class="fx">例3 ・ アルミニウム 1.0 cm<sup>3</sup> に含まれる原子の数 ・ 密度 2.7 g/cm<sup>3</sup> ・ Al＝27<br>1.0 cm<sup>3</sup> × (2.7 g ／ 1 cm<sup>3</sup>) × (1 mol ／ 27 g) × (6.0×10<sup>23</sup> 個 ／ 1 mol) ＝ 6.0×10<sup>22</sup> 個<small>密度は体積と質量の換算レートである。cm<sup>3</sup> → g → mol → 個の順に約分が続く</small></div>

<div class="fx">例4 ・ 原子1個の質量 ・ C＝12<br>(12 g ／ 1 mol) × (1 mol ／ 6.02×10<sup>23</sup> 個) ＝ 1.99×10<sup>−23</sup> g/個<small>モル質量をアボガドロ定数で割ると1個あたりの質量に戻る。第1節の値と一致する</small></div>

<aside class="an an-biz"><b>資本主義で言えば</b>
<p class="an-h">mol は換算の基軸通貨である</p>
<p>g と個は直接換算せず mol を経由する。モル質量は g と mol の為替レート ／ アボガドロ定数は mol と個の為替レートである。</p>
<p class="an-x">気体のモル体積だけは温度と圧力で変わる条件付きのレートである。</p>
</aside>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">単位を書くのは年俸にドルと書くのと同じ取り違えの防止である</p>
<p>年俸 200 万ドルに円 ／ ドルのレートを掛ければドルが約分されて円が残る。9.0 g を 18 g/mol で割る向きも単位の約分で特定される。</p>
</aside>

<h3>例外と注意点</h3>
<p>22.4 L/mol は気体にだけ使う。水 18 g を 22.4 L と答える誤りは誤答の選択肢として置かれやすい。標準状態の水は液体または固体である。また 22.4 L/mol は理想気体の値であり実在の気体ではわずかに異なる。高校の計算では種類によらず 22.4 を使う。</p>
<p>粒子の種類の指定を確認する。「酸素 1 mol」が O<sub>2</sub> 分子 1 mol を指すのか O 原子 1 mol を指すのかは問題文の化学式で判別する。O<sub>2</sub> 1 mol の質量は 32 g で O 原子 1 mol は 16 g である。</p>

<h2 id="s7">現実世界のアボガドロ定数 キログラム原器からシリコン球へ</h2>
<p>2019年の国際単位系の改定はキログラムの定義も変えた。それまでの1キログラムは1889年からフランスで保管されてきた国際キログラム原器という金属塊の質量だった。人工物の質量はわずかに変わりうる。改定ではプランク定数を定義値として固定し質量の単位を物理定数から導く方式に移った。モルも同時にアボガドロ定数の固定値で定義し直された。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>改定に先立ちアボガドロ定数を精密に測る国際プロジェクトが進められた。用いられたのは <sup>28</sup>Si の割合を高めたケイ素の単結晶を研磨した真球である。球の体積と結晶の原子の間隔から球に含まれる原子の数を数え質量と比べて 1 mol あたりの個数を求めた。この章の例3と同じく体積と密度とモル質量からアボガドロ定数へ進む換算である。同位体の割合を高めたのは第2節の加重平均の不確かさを小さくするためである。</p>
<p>改定の結果として <sup>12</sup>C のモル質量は定義上ちょうど 12 g/mol ではなくなり実験で決まる値になった。差は高校の計算に現れない桁である。</p>
</aside>

<h2 id="s8">確認問題</h2>
<p>必要があれば次の値を使うこと。H＝1.0 ・ C＝12 ・ N＝14 ・ O＝16 ・ アボガドロ定数 6.0×10<sup>23</sup> /mol ・ 標準状態の気体のモル体積 22.4 L/mol。</p>

<div class="qz"><div class="qz-h">問1 ・ 同位体と原子量</div>
<p class="qz-q">ホウ素には相対質量 10.0 の <sup>10</sup>B と 11.0 の <sup>11</sup>B がある。存在比が <sup>10</sup>B 20 % ・ <sup>11</sup>B 80 % のときホウ素の原子量として最も適当なものを1つ選べ。</p>
<ol><li>10.2</li><li>10.5</li><li>10.8</li><li>11.0</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。10.0×0.20 ＋ 11.0×0.80 ＝ 2.0 ＋ 8.8 ＝ 10.8。2 は単純平均の値であり存在比で重み付けしていない。加重平均は存在比の大きい 11.0 の側に寄る。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 分子と原子の物質量</div>
<p class="qz-q">二酸化炭素 4.4 g に含まれる酸素原子の数として最も適当なものを1つ選べ。</p>
<ol><li>6.0×10<sup>22</sup> 個</li><li>1.2×10<sup>23</sup> 個</li><li>6.0×10<sup>23</sup> 個</li><li>1.2×10<sup>24</sup> 個</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。4.4 g × (1 mol ／ 44 g) ＝ 0.10 mol の CO<sub>2</sub>。分子1個に O 原子が2個なので O 原子は 0.20 mol。0.20 mol × 6.0×10<sup>23</sup> 個/mol ＝ 1.2×10<sup>23</sup> 個。1 は CO<sub>2</sub> 分子の数であり原子の数に直していない。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 気体の体積から分子量</div>
<p class="qz-q">標準状態で 5.6 L を占める気体の質量が 8.0 g であった。この気体として最も適当なものを1つ選べ。</p>
<ol><li>CH<sub>4</sub></li><li>N<sub>2</sub></li><li>O<sub>2</sub></li><li>CO<sub>2</sub></li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。5.6 L × (1 mol ／ 22.4 L) ＝ 0.25 mol。モル質量は 8.0 g ÷ 0.25 mol ＝ 32 g/mol で O<sub>2</sub> の分子量 32 と一致する。CH<sub>4</sub> は 16 ・ N<sub>2</sub> は 28 ・ CO<sub>2</sub> は 44 である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 単位の異なる量の比較</div>
<p class="qz-q">次のうち含まれる分子の数が最も多いものを1つ選べ。</p>
<ol><li>水素 H<sub>2</sub> 1.0 g</li><li>水 H<sub>2</sub>O 18 g</li><li>標準状態の二酸化炭素 33.6 L</li><li>6.0×10<sup>23</sup> 個のメタン分子</li><li>酸素 O<sub>2</sub> 64 g</li></ol>
<details><summary>解答と解説</summary><div>正解は 5 である。すべて mol に直して比べる。1 は 1.0 ÷ 2.0 ＝ 0.50 mol。2 は 18 ÷ 18 ＝ 1.0 mol。3 は 33.6 ÷ 22.4 ＝ 1.5 mol。4 は 1.0 mol。5 は 64 ÷ 32 ＝ 2.0 mol。質量が最も小さい 1 が最も少ないわけではない点と体積の大きい 3 が最多ではない点を確認する。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 密度を使う換算</div>
<p class="qz-q">ダイヤモンドは炭素原子だけからなり密度は 3.5 g/cm<sup>3</sup> である。ダイヤモンド 1.0 cm<sup>3</sup> に含まれる炭素原子の数として最も適当なものを1つ選べ。</p>
<ol><li>1.8×10<sup>22</sup> 個</li><li>1.8×10<sup>23</sup> 個</li><li>2.9×10<sup>23</sup> 個</li><li>2.5×10<sup>25</sup> 個</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。1.0 cm<sup>3</sup> × (3.5 g ／ 1 cm<sup>3</sup>) × (1 mol ／ 12 g) × (6.0×10<sup>23</sup> 個 ／ 1 mol) ＝ 0.292 mol × 6.0×10<sup>23</sup> ＝ 1.75×10<sup>23</sup> 個。4 は 12 で割る代わりに 12 を掛けた値である。単位を書けば g と g/mol の積となり約分できないので誤りを検出できる。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 空気との重さ比べ</div>
<p class="qz-q">空気を N<sub>2</sub> と O<sub>2</sub> が物質量の比 4 対 1 で混合した気体とみなす。同じ温度と圧力で同じ体積の空気より軽い気体を1つ選べ。</p>
<ol><li>CO<sub>2</sub></li><li>O<sub>2</sub></li><li>NH<sub>3</sub></li><li>Cl<sub>2</sub>（Cl＝35.5）</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。空気の平均モル質量は 28×0.8 ＋ 32×0.2 ＝ 28.8 g/mol である。同じ体積には同じ物質量が含まれるので重さはモル質量で比べられる。NH<sub>3</sub> は 17 で空気より軽い。CO<sub>2</sub> は 44 ・ O<sub>2</sub> は 32 ・ Cl<sub>2</sub> は 71 でいずれも空気より重い。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
相対質量は 12C 1個を 12 と定めた比で単位はない。原子量は同位体の相対質量を存在比で重み付けした平均である。<br>
分子量と式量は原子量の合計である。イオンの式量に電子の出入りは影響しない。<br>
1 mol は 6.02×10²³ 個の粒子の集まりで2019年からこの個数が定義値 6.02214076×10²³ /mol になった。<br>
モル質量は分子量などの数値に g/mol を付けた値で標準状態の気体は種類によらず 22.4 L/mol である。<br>
換算は必ず mol を経由し単位ごと掛け算して約分で向きを確かめる。</div>

<h2 id="s10">残っている問い</h2>
<ul>
<li class="tb-vnote">原子量は地球上で一定とみなしているが実際には試料の産地で同位体の存在比がわずかに異なる。IUPAC は塩素の原子量を 35.446 から 35.457 の幅で示している。高校の計算で使う 35.5 はこの幅を丸めた値である。</li>
<li class="tb-vnote">標準状態の定義は分野で異なる。IUPAC は1982年以降 0 ℃ ・ 100 kPa を標準状態とし気体のモル体積は 22.7 L/mol になる。共通テストは問題文に条件を明記する。この章では 0 ℃ ・ 1.013×10⁵ Pa の 22.4 L/mol を使った。</li>
<li class="tb-vnote">22.4 L/mol は理想気体の値である。実在の気体は分子間の引力と分子自体の体積のため値がずれる。ずれの大きさと補正の方法は化学で扱う。</li>
<li class="tb-vnote">ケイ素球によるアボガドロ定数の測定で到達した相対不確かさの具体的な値は本章の出典で確定していない。</li>
<li class="tb-vnote">原子量の逆算の出題・分子と原子の物質量の取り違え・水を 22.4 L とする誤りが共通テストの選択肢にどの程度の頻度で置かれるかは大学入試センターの公表資料で確認できなかった。本文では頻度を断定しない表現に改めた。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Isotopes of chlorine — Wikipedia — https://en.wikipedia.org/wiki/Isotopes_of_chlorine</li>
<li>Dalton (unit) — Wikipedia — https://en.wikipedia.org/wiki/Dalton_(unit)</li>
<li>Avogadro constant — Wikipedia — https://en.wikipedia.org/wiki/Avogadro_constant</li>
<li>2019 revision of the SI — Wikipedia — https://en.wikipedia.org/wiki/2019_revision_of_the_SI</li>
<li>Molar volume — Wikipedia — https://en.wikipedia.org/wiki/Molar_volume</li>
<li>Gay-Lussac's law — Wikipedia — https://en.wikipedia.org/wiki/Gay-Lussac%27s_law</li>
</ol>
