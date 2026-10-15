<!--meta
{"chapter": 11, "part": "第2編 物質の変化とその利用", "title": "化学反応式と量的関係", "thesis": "化学反応式の係数は反応する粒子の個数の比であり物質量の比である。質量の比ではない。量の計算はすべて mol に直して係数比を掛け最後に求める単位へ戻す。足りない側の物質が生成物の量を決める。", "verify": {"date": "2026-10-15", "checked": 53, "match": 51, "fixed": 1, "unconfirmed": 1}}
-->
<p>第9章では質量・粒子数・気体の体積を物質量に換算する方法を扱い第10章では溶液の体積とモル濃度から物質量を求める方法を扱った。この章ではそれらの物質量を化学反応式でつなぐ。反応式の係数が分かれば反応物の量から生成物の量を計算できる。化学基礎の計算問題の大半はこの手順の組み合わせである。</p>
<p>共通テストでこの範囲から出る論点は5種類である。化学反応式とイオン反応式の係数の決め方・係数比と物質量比の関係・質量保存の法則など化学の基本法則・気体反応の法則とアボガドロの法則・過不足のある反応の計算とグラフの読み取りである。最後の論点は加えた量と発生量のグラフの折れ点を問う形で出題されることがある。</p>

<h2 id="s1">化学反応式の係数の決め方</h2>
<p>化学反応式は左辺に反応物を書き右辺に生成物を書き矢印で結ぶ。<strong class="hit">係数は両辺で各元素の原子の数が等しくなるように決め最も簡単な整数比にする</strong>。係数が1の場合は書かない。反応の前後で原子は生成も消滅もせず組み合わせだけが変わるからである。</p>
<h3>目算法</h3>
<p>登場する回数が最も少ない元素から合わせ最後に単体の元素を合わせる方法である。燃焼の反応式で使う。</p>
<div class="fx">C<sub>3</sub>H<sub>8</sub> ＋ □O<sub>2</sub> → □CO<sub>2</sub> ＋ □H<sub>2</sub>O<br>C を合わせる → CO<sub>2</sub> は 3 ・ H を合わせる → H<sub>2</sub>O は 4 ・ 右辺の O は 3×2 ＋ 4 ＝ 10 → O<sub>2</sub> は 5<br>C<sub>3</sub>H<sub>8</sub> ＋ 5O<sub>2</sub> → 3CO<sub>2</sub> ＋ 4H<sub>2</sub>O<small>単体の O<sub>2</sub> の係数は他の元素の原子の数に影響しないので最後に合わせる</small></div>
<p>O<sub>2</sub> の係数が分数になる場合は全体を2倍する。エタン C<sub>2</sub>H<sub>6</sub> では O<sub>2</sub> の係数が 7/2 になるので全体を2倍して 2C<sub>2</sub>H<sub>6</sub> ＋ 7O<sub>2</sub> → 4CO<sub>2</sub> ＋ 6H<sub>2</sub>O とする。</p>
<h3>未定係数法</h3>
<p>目算で合わない反応式は係数を文字で置き元素ごとに方程式を立てる。未知数が n 個なら1つを1と置き残りを連立方程式で解く。</p>
<div class="fx">a Cu ＋ b HNO<sub>3</sub> → c Cu(NO<sub>3</sub>)<sub>2</sub> ＋ d NO ＋ e H<sub>2</sub>O<br>Cu ： a ＝ c ・ H ： b ＝ 2e ・ N ： b ＝ 2c ＋ d ・ O ： 3b ＝ 6c ＋ d ＋ e<br>c ＝ 1 と置く → a ＝ 1 ・ b ＝ 2 ＋ d ・ e ＝ b/2 ・ 3b ＝ 6 ＋ d ＋ b/2 → d ＝ 2/3 ・ b ＝ 8/3 ・ e ＝ 4/3<br>全体を3倍する → 3Cu ＋ 8HNO<sub>3</sub> → 3Cu(NO<sub>3</sub>)<sub>2</sub> ＋ 2NO ＋ 4H<sub>2</sub>O<small>検算 ： O は左辺 24 ・ 右辺 18 ＋ 2 ＋ 4 ＝ 24 で一致する</small></div>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">化学反応式は元素の数だけ貸借が一致する仕訳である</p>
<p>借方と貸方 ／ 左辺と右辺。一致の条件が元素ごとに並ぶので未定係数法では連立方程式として解く。</p>
<p class="an-x">係数は粒子の個数の比なので最後に整数比に直す。</p>
</aside>

<h3>イオン反応式</h3>
<p>水溶液中の反応では実際に変化したイオンだけを書いた<strong>イオン反応式</strong>を使う。硝酸銀水溶液に塩化ナトリウム水溶液を加えると塩化銀の白色沈殿が生じる。Na<sup>+</sup> と NO<sub>3</sub><sup>−</sup> は反応の前後で水溶液中に残り変化しないので省く。</p>
<div class="fx">AgNO<sub>3</sub> ＋ NaCl → AgCl ＋ NaNO<sub>3</sub> → イオン反応式 ： Ag<sup>+</sup> ＋ Cl<sup>−</sup> → AgCl<small>イオン反応式では原子の数に加えて両辺の電荷の合計も一致させる</small></div>
<p>電荷の条件が加わる例が金属とイオンの反応である。Cu ＋ 2Ag<sup>+</sup> → Cu<sup>2+</sup> ＋ 2Ag では左辺の電荷が ＋2 で右辺も ＋2 である。Cu ＋ Ag<sup>+</sup> → Cu<sup>2+</sup> ＋ Ag は原子の数は合っているが電荷が合わないので誤りである。</p>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">イオン反応式は合コンの成立報告である。組にならなかった人は書かない</p>
<p>Na<sup>+</sup> と NO<sub>3</sub><sup>−</sup> は来たときと同じ状態で帰った参加者であり傍観イオンと呼ぶ。</p>
<p class="an-x">報告から省いても水溶液中には残っている。</p>
</aside>

<h2 id="s2">係数比は物質量の比である</h2>
<p>係数は粒子の個数の比を表す。個数の比に 6.02×10<sup>23</sup> を掛けても比は変わらないので<strong class="hit">係数の比は物質量の比に等しい</strong>。気体どうしなら同温同圧で体積の比にも等しい。質量の比には等しくない。各物質のモル質量が異なるからである。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="窒素と水素からアンモニアが生じる反応の分子の数と各量の比">
  <g font-size="13" fill="var(--muted)"><text x="20" y="26">N₂ ＋ 3H₂ → 2NH₃ を分子で描く</text></g>
  <!-- N2 -->
  <g><circle cx="120" cy="90" r="16" fill="var(--cool)"/><circle cx="146" cy="90" r="16" fill="var(--cool)"/></g>
  <text x="195" y="96" font-size="20" text-anchor="middle">＋</text>
  <!-- 3 H2 -->
  <g fill="var(--warm)">
    <circle cx="245" cy="62" r="10"/><circle cx="261" cy="62" r="10"/>
    <circle cx="245" cy="92" r="10"/><circle cx="261" cy="92" r="10"/>
    <circle cx="245" cy="122" r="10"/><circle cx="261" cy="122" r="10"/>
  </g>
  <defs><marker id="ah11a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>
  <line x1="290" y1="92" x2="365" y2="92" stroke="var(--ink)" stroke-width="2" marker-end="url(#ah11a)"/>
  <!-- 2 NH3 -->
  <g>
    <circle cx="410" cy="72" r="16" fill="var(--cool)"/><circle cx="392" cy="56" r="9" fill="var(--warm)"/><circle cx="430" cy="58" r="9" fill="var(--warm)"/><circle cx="410" cy="94" r="9" fill="var(--warm)"/>
    <circle cx="480" cy="112" r="16" fill="var(--cool)"/><circle cx="462" cy="96" r="9" fill="var(--warm)"/><circle cx="500" cy="98" r="9" fill="var(--warm)"/><circle cx="480" cy="134" r="9" fill="var(--warm)"/>
  </g>
  <text x="560" y="70" font-size="12.5" fill="var(--sub)">左辺 N 2 ・ H 6</text>
  <text x="560" y="92" font-size="12.5" fill="var(--sub)">右辺 N 2 ・ H 6</text>
  <text x="560" y="114" font-size="12.5" fill="var(--accent)">原子の数は一致</text>
  <!-- table of ratios -->
  <g font-size="13">
    <line x1="20" y1="168" x2="700" y2="168" stroke="var(--line)"/>
    <text x="30" y="190" fill="var(--sub)">分子の数</text><text x="133" y="190" text-anchor="middle">1</text><text x="253" y="190" text-anchor="middle">3</text><text x="445" y="190" text-anchor="middle">2</text>
    <text x="30" y="214" fill="var(--sub)">物質量</text><text x="133" y="214" text-anchor="middle">1 mol</text><text x="253" y="214" text-anchor="middle">3 mol</text><text x="445" y="214" text-anchor="middle">2 mol</text><text x="560" y="214" fill="var(--accent)">係数の比と同じ</text>
    <text x="30" y="238" fill="var(--sub)">気体の体積</text><text x="133" y="238" text-anchor="middle">22.4 L</text><text x="253" y="238" text-anchor="middle">67.2 L</text><text x="445" y="238" text-anchor="middle">44.8 L</text><text x="560" y="238" fill="var(--accent)">係数の比と同じ</text>
    <text x="30" y="262" fill="var(--sub)">質量</text><text x="133" y="262" text-anchor="middle">28 g</text><text x="253" y="262" text-anchor="middle">6.0 g</text><text x="445" y="262" text-anchor="middle">34 g</text><text x="560" y="262" fill="#B91C1C">係数の比と異なる</text>
  </g>
</svg>
<figcaption>係数1・3・2は分子の数の比である。物質量の比と標準状態の気体の体積の比も1対3対2になる。質量は28 g・6.0 g・34 gで係数の比と一致しない。左辺の合計28＋6.0と右辺の34は等しく質量保存の法則が成り立つ。</figcaption>
</figure>

<p>量の計算の手順は3段である。与えられた量を mol に直す。係数比を掛けて求める物質の mol を出す。求める単位に戻す。第9章の単位ごと掛け算する方法に係数比の分数を1つ挟むだけである。</p>
<div class="fx">例1 ・ プロパン 22 g を完全燃焼させたときに生じる CO<sub>2</sub> の質量 ・ C<sub>3</sub>H<sub>8</sub>＝44 ・ CO<sub>2</sub>＝44<br>22 g × (1 mol C<sub>3</sub>H<sub>8</sub> ／ 44 g) × (3 mol CO<sub>2</sub> ／ 1 mol C<sub>3</sub>H<sub>8</sub>) × (44 g ／ 1 mol CO<sub>2</sub>) ＝ 66 g<small>係数比の分数には物質名を付けて書く。C<sub>3</sub>H<sub>8</sub> の mol が約分されて CO<sub>2</sub> の mol が残る</small></div>
<div class="fx">例2 ・ 同じ反応で消費される O<sub>2</sub> の標準状態での体積<br>0.50 mol C<sub>3</sub>H<sub>8</sub> × (5 mol O<sub>2</sub> ／ 1 mol C<sub>3</sub>H<sub>8</sub>) × (22.4 L ／ 1 mol) ＝ 56 L</div>

<aside class="an an-biz"><b>スタートアップで言えば</b>
<p class="an-h">係数は部品表である。個数で書かれ重さでは書かれない</p>
<p>自転車1台にフレーム1個と車輪2個 ／ 係数は個数の比で質量の比ではない。個数で組み立ててから最後にモル質量を掛けて質量に直す。</p>
</aside>

<h2 id="s3">化学の基本法則</h2>
<p>反応式と物質量の考え方は18世紀後半から19世紀初めに見いだされた5つの法則の上に成り立つ。共通テストでは法則の名称と内容の対応を問う。</p>
<div class="tb-tw"><table>
<thead><tr><th>法則</th><th>提唱者</th><th>内容</th><th>原子・分子での説明</th></tr></thead>
<tbody>
<tr><td>質量保存の法則</td><td>ラボアジエ ・ 18世紀後半</td><td>反応の前後で物質の質量の総和は変わらない</td><td>原子は生成も消滅もせず組み合わせだけが変わる</td></tr>
<tr><td>定比例の法則</td><td>プルースト ・ 1797年ごろ</td><td>1つの化合物を構成する元素の質量の比は一定である</td><td>化合物の原子の数の比が一定である</td></tr>
<tr><td>倍数比例の法則</td><td>ドルトン ・ 19世紀初め</td><td>2元素が複数の化合物をつくるとき一方の一定質量と結びつく他方の質量は簡単な整数比になる</td><td>原子は分割できない単位なので1個 ・ 2個と整数個ずつ結びつく</td></tr>
<tr><td>気体反応の法則</td><td>ゲーリュサック ・ 1808年</td><td>反応する気体と生成する気体の体積は同温同圧で簡単な整数比になる</td><td>アボガドロの法則により体積の比が分子の数の比になる</td></tr>
<tr><td>アボガドロの法則</td><td>アボガドロ ・ 1811年</td><td>同温同圧で同体積の気体は種類によらず同数の分子を含む</td><td>気体の体積は分子の数で特定される</td></tr>
</tbody></table></div>
<p>倍数比例の法則の典型例は炭素の酸化物である。CO では炭素 12 g と結びつく酸素は 16 g で CO<sub>2</sub> では 32 g である。16 対 32 ＝ 1 対 2 の整数比になる。定比例の法則と混同しない。定比例は1つの化合物の中の比であり倍数比例は2つの化合物の間の比較である。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">質量保存はトレードで球界の選手の総数が変わらないことである</p>
<p>選手は球団を移るだけ ／ 原子は分子から分子へ移るだけ。変わるのは所属だけである。</p>
</aside>

<h2 id="s4">気体反応の法則とアボガドロの法則</h2>
<p>ゲーリュサックは水素と酸素から水蒸気が生じる反応で体積の比が 2 対 1 対 2 になることを示した。当時のドルトンの原子説では気体の単体は原子1個ずつの粒子と考えられていた。この考えでは酸素1体積から水蒸気2体積が生じる説明に<strong class="hit">酸素原子を半分に割る必要が生じて原子は分割できないという前提と矛盾する</strong>。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="水素2体積と酸素1体積から水蒸気2体積が生じることを分子で説明する">
  <g font-size="13" font-weight="600" text-anchor="middle">
    <text x="130" y="26">水素 2 体積</text><text x="330" y="26">酸素 1 体積</text><text x="560" y="26">水蒸気 2 体積</text>
  </g>
  <g fill="none" stroke="var(--line)" stroke-width="1.5">
    <rect x="50" y="40" width="76" height="76"/><rect x="134" y="40" width="76" height="76"/>
    <rect x="292" y="40" width="76" height="76"/>
    <rect x="476" y="40" width="76" height="76"/><rect x="560" y="40" width="76" height="76"/>
  </g>
  <g fill="var(--warm)">
    <circle cx="80" cy="78" r="10"/><circle cx="96" cy="78" r="10"/>
    <circle cx="164" cy="78" r="10"/><circle cx="180" cy="78" r="10"/>
  </g>
  <g fill="var(--cool)"><circle cx="319" cy="78" r="12"/><circle cx="341" cy="78" r="12"/></g>
  <g>
    <circle cx="514" cy="80" r="12" fill="var(--cool)"/><circle cx="500" cy="66" r="8" fill="var(--warm)"/><circle cx="528" cy="66" r="8" fill="var(--warm)"/>
    <circle cx="598" cy="80" r="12" fill="var(--cool)"/><circle cx="584" cy="66" r="8" fill="var(--warm)"/><circle cx="612" cy="66" r="8" fill="var(--warm)"/>
  </g>
  <text x="250" y="84" font-size="20" text-anchor="middle">＋</text>
  <text x="420" y="84" font-size="20" text-anchor="middle">→</text>
  <g font-size="12.5" fill="var(--sub)">
    <text x="50" y="150">各体積に同数の分子が入るとするアボガドロの法則</text>
    <text x="50" y="172">酸素は O₂ 分子なので2個の O 原子を水蒸気2体積へ1個ずつ分けられる</text>
  </g>
  <g font-size="12.5" fill="#B91C1C">
    <text x="50" y="208">原子1個ずつとするドルトンの考えでは酸素1体積の O 1個を2体積に分ける必要が生じる</text>
    <text x="50" y="230">原子は分割できないので矛盾する</text>
  </g>
</svg>
<figcaption>1つの枠は同温同圧の同じ体積を表し中に同数の分子が入る。酸素を2原子からなる分子O₂と考えれば体積の比2対1対2が分子の数の比2対1対2と一致する。アボガドロは分子という単位を導入してこの矛盾を解消した。</figcaption>
</figure>

<p>1811年にアボガドロは気体の単体が複数の原子からなる分子であると考え同温同圧で同体積の気体は同数の分子を含むと提唱した。この2つの仮定で気体反応の法則は説明できる。2H<sub>2</sub> ＋ O<sub>2</sub> → 2H<sub>2</sub>O の係数の比 2 対 1 対 2 がそのまま体積の比になる。アボガドロの説は約50年間ほとんど受け入れられず1860年にカニッツァーロが再評価して定着した。</p>
<p>この法則から気体の計算には便利な性質が生じる。<strong>同温同圧の気体どうしなら体積のまま係数比を掛けてよい</strong>。mol に直す必要がない。</p>
<div class="fx">例3 ・ 同温同圧で一酸化炭素 20 mL と酸素 20 mL を反応させた後の気体の体積<br>2CO ＋ O<sub>2</sub> → 2CO<sub>2</sub> ・ CO 20 mL と反応する O<sub>2</sub> は 10 mL<br>反応後 ： CO<sub>2</sub> 20 mL ＋ 余った O<sub>2</sub> 10 mL ＝ 30 mL<small>気体の体積は反応で必ず保存されるわけではない。40 mL が 30 mL に減る。保存されるのは質量と原子の数である</small></div>

<aside class="an an-lv"><b>男女で言えば</b>
<p class="an-h">気体の体積は人数ではなく組の数で数える</p>
<p>酸素は2人1組で来場する。組なら2人を別のテーブルに分けられる。全員が1人で来ると仮定したドルトンの考えでは分けられなかった。</p>
</aside>

<h2 id="s5">過不足のある反応とグラフの折れ点</h2>
<p>反応物が係数比どおりの量で用意されるとは限らない。一方が先になくなると反応はそこで止まり他方は余る。<strong class="hit">生成物の量は先になくなる側の反応物の量で特定される</strong>。手順は2段である。各反応物を mol に直し係数で割って比べる。値が小さいほうが不足する側である。</p>
<div class="fx">例4 ・ マグネシウム 0.36 g と 0.020 mol の HCl を含む塩酸の反応 ・ Mg＝24<br>Mg ＋ 2HCl → MgCl<sub>2</sub> ＋ H<sub>2</sub><br>Mg ＝ 0.36 ÷ 24 ＝ 0.015 mol ・ HCl ＝ 0.020 mol<br>係数で割る → Mg 0.015 ÷ 1 ＝ 0.015 ・ HCl 0.020 ÷ 2 ＝ 0.010 → HCl が不足する<br>H<sub>2</sub> ＝ 0.020 mol HCl × (1 mol H<sub>2</sub> ／ 2 mol HCl) ＝ 0.010 mol → 標準状態で 224 mL<small>余る Mg は 0.015 − 0.010 ＝ 0.005 mol ＝ 0.12 g</small></div>
<p>共通テストはこの計算をグラフで問う。一定量の塩酸に加えるマグネシウムの量を変えて発生する水素の体積を測ると折れ線のグラフになる。<strong class="hit">折れ点は2つの反応物が係数比どおりに過不足なく反応する点である</strong>。折れ点より左ではマグネシウムが不足し加えた量に比例して水素が増える。折れ点より右では塩酸が不足し水素は増えない。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="一定量の塩酸に加えたマグネシウムの質量と発生した水素の体積のグラフ">
  <text x="20" y="22" font-size="13" fill="var(--muted)">1.0 mol/L の塩酸 100 mL ＝ HCl 0.10 mol に Mg を加える</text>
  <!-- axes -->
  <line x1="90" y1="240" x2="650" y2="240" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="90" y1="240" x2="90" y2="50" stroke="var(--ink)" stroke-width="1.5"/>
  <!-- x ticks: 0..2.4 g -> 90..630 (225 px/g) -->
  <g stroke="var(--line)"><line x1="225" y1="240" x2="225" y2="246"/><line x1="360" y1="240" x2="360" y2="246"/><line x1="495" y1="240" x2="495" y2="246"/><line x1="630" y1="240" x2="630" y2="246"/></g>
  <g font-size="12.5" fill="var(--sub)" text-anchor="middle">
    <text x="90" y="262">0</text><text x="225" y="262">0.6</text><text x="360" y="262">1.2</text><text x="495" y="262">1.8</text><text x="630" y="262">2.4</text>
    <text x="370" y="290">加えた Mg の質量 g</text>
  </g>
  <!-- y ticks: 0..1.4 L -> 240..58 (130 px/L) ; 0.56 -> 167.2 ; 1.12 -> 94.4 -->
  <g font-size="12.5" fill="var(--sub)" text-anchor="end">
    <text x="82" y="244">0</text><text x="82" y="171">0.56</text><text x="82" y="98">1.12</text>
  </g>
  <text x="96" y="46" font-size="12.5" fill="var(--sub)">発生した H₂ の体積 L 標準状態</text>
  <!-- line -->
  <polyline points="90,240 360,94.4 630,94.4" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <line x1="360" y1="94.4" x2="360" y2="240" stroke="var(--muted)" stroke-dasharray="4 4"/>
  <line x1="90" y1="94.4" x2="360" y2="94.4" stroke="var(--muted)" stroke-dasharray="4 4"/>
  <circle cx="360" cy="94.4" r="6" fill="var(--accent)"/>
  <text x="372" y="82" font-size="13" font-weight="600" fill="var(--accent)">折れ点 Mg 0.050 mol ＝ 1.2 g ・ H₂ 0.050 mol</text>
  <g font-size="12.5">
    <text x="250" y="205" fill="var(--warm)">Mg が不足</text><text x="250" y="223" fill="var(--sub)">HCl が余る</text>
    <text x="470" y="140" fill="var(--cool)">HCl が不足</text><text x="470" y="158" fill="var(--sub)">Mg が余る</text>
  </g>
</svg>
<figcaption>HCl 0.10 molと過不足なく反応するMgは係数比1対2から0.050 molで質量は1.2 gである。このとき水素は0.050 molで標準状態の体積は1.12 Lになる。折れ点より左の傾きはMg 1 gあたりの水素の発生量で折れ点より右の水平線の高さは塩酸の量で特定される。</figcaption>
</figure>

<p>グラフ問題で問われる操作は3種類である。折れ点の座標から一方の反応物の量を求める。条件を変えたときのグラフの形を選ぶ。塩酸の濃度を2倍にすると水平線の高さと折れ点の横の位置がともに2倍になり傾きは変わらない。マグネシウムを原子量の異なる金属に替えると傾きが変わる。傾きは加えた金属 1 g あたりに発生する水素の量で特定されるからである。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">反応量はバッテリーの組数であり人数の少ない側で特定される</p>
<p>投手5人と捕手2人なら2組で投手3人が余る。Mg ＋ 2HCl は捕手2人を要する組なので HCl の物質量÷2 が組数になる。</p>
</aside>

<aside class="an an-biz"><b>資本主義で言えば</b>
<p class="an-h">過不足の折れ点はボトルネックが入れ替わる点である</p>
<p>半導体が足りなければ車体が余っても車は完成しない。折れ点の左では Mg が不足 ／ 右では HCl が不足である。</p>
</aside>

<h2 id="s6">現実世界の量計算 ハーバー・ボッシュ法</h2>
<p>空気中の窒素と水素からアンモニアを合成する方法がハーバー・ボッシュ法である。ハーバーが実験室で合成に成功しボッシュが高圧の工業設備を開発した。1913年にドイツの BASF 社のオッパウ工場で工業生産が始まった。ハーバーは1918年にボッシュは1931年にノーベル化学賞を受けた。反応式は次のとおりである。</p>
<div class="fx">N<sub>2</sub> ＋ 3H<sub>2</sub> → 2NH<sub>3</sub><small>実際の工業反応は可逆反応で触媒と高温高圧を使う。反応の速さと平衡は化学で扱う。ここでは反応が完全に進むとして量の関係だけを計算する</small></div>

<div class="fx">例5 ・ アンモニア 1.0 t をつくるのに要する水素と窒素の質量 ・ H＝1.0 ・ N＝14<br>NH<sub>3</sub> ＝ 1.0×10<sup>6</sup> g × (1 mol ／ 17 g) ＝ 5.88×10<sup>4</sup> mol<br>H<sub>2</sub> ＝ 5.88×10<sup>4</sup> mol × (3 ／ 2) × 2.0 g/mol ＝ 1.76×10<sup>5</sup> g ＝ 0.18 t<br>N<sub>2</sub> ＝ 5.88×10<sup>4</sup> mol × (1 ／ 2) × 28 g/mol ＝ 8.24×10<sup>5</sup> g ＝ 0.82 t<small>検算 ： 0.176 ＋ 0.824 ＝ 1.000 t で質量保存の法則と一致する。質量で見ると水素は 18 % にすぎないが分子の数では反応物の 75 % を占める</small></div>

<figure class="tb-fig">
<svg viewBox="0 0 720 210" role="img" aria-label="アンモニア1トンに要する窒素と水素の質量と物質量の比較">
  <text x="20" y="24" font-size="13" fill="var(--muted)">アンモニア 1.0 t の原料 同じ反応を質量と物質量で比べる</text>
  <text x="20" y="70" font-size="13" fill="var(--sub)">質量</text>
  <rect x="110" y="50" width="453" height="34" fill="var(--cool)" opacity=".85"/>
  <rect x="563" y="50" width="97" height="34" fill="var(--warm)" opacity=".85"/>
  <text x="336" y="72" font-size="13" fill="#fff" text-anchor="middle" font-weight="600">N₂ 0.82 t</text>
  <text x="611" y="72" font-size="13" fill="#fff" text-anchor="middle" font-weight="600">H₂ 0.18 t</text>
  <text x="20" y="140" font-size="13" fill="var(--sub)">物質量</text>
  <rect x="110" y="120" width="137" height="34" fill="var(--cool)" opacity=".85"/>
  <rect x="247" y="120" width="413" height="34" fill="var(--warm)" opacity=".85"/>
  <text x="178" y="142" font-size="12.5" fill="#fff" text-anchor="middle" font-weight="600">N₂ 2.9×10⁴</text>
  <text x="453" y="142" font-size="13" fill="#fff" text-anchor="middle" font-weight="600">H₂ 8.8×10⁴ mol</text>
  <text x="360" y="192" font-size="12.5" fill="var(--muted)" text-anchor="middle">質量では N₂ が 82 % だが物質量では H₂ が 75 % を占める ・ 係数の比 1 対 3</text>
</svg>
<figcaption>同じ原料を質量で表すと窒素が大部分を占め物質量で表すと水素が4分の3を占める。係数の比は物質量の比であり質量の比ではないことを示す例である。</figcaption>
</figure>

<aside class="an an-rw"><b>現実世界</b>
<p>米国地質調査所の2025年の資料ではアンモニアとして固定された窒素の世界生産量は2024年の推定で窒素換算 1億5,000万 t である。窒素の質量をアンモニアの質量に直すには NH<sub>3</sub> と N のモル質量の比 17 ／ 14 を掛ける。1.5×10<sup>8</sup> t × 17 ／ 14 ＝ 1.8×10<sup>8</sup> t のアンモニアに相当する。例5の比率を使うとこの量の合成には 1.8×10<sup>8</sup> × 0.176 ＝ 3.2×10<sup>7</sup> t の水素を要する計算になる。工業ではこの水素の多くを天然ガスなどの化石資源から得ている。</p>
<p>合成されたアンモニアの大部分は窒素肥料になる。Erisman らの2008年の論文は合成窒素肥料によって支えられている人口の割合を2000年に44 % ・ 2008年に48 % と推計した。Smil は2000年ごろの値を約40 % としている。どちらも食料生産のモデルに基づく推計値であり直接の観測値ではない。</p>
</aside>

<h2 id="s7">確認問題</h2>
<p>必要があれば次の値を使うこと。H＝1.0 ・ C＝12 ・ N＝14 ・ O＝16 ・ Ca＝40 ・ 標準状態の気体のモル体積 22.4 L/mol。</p>

<div class="qz"><div class="qz-h">問1 ・ 係数の決定</div>
<p class="qz-q">エタンの完全燃焼の反応式 a C<sub>2</sub>H<sub>6</sub> ＋ b O<sub>2</sub> → c CO<sub>2</sub> ＋ d H<sub>2</sub>O の係数を最も簡単な整数比にしたとき b の値として正しいものを1つ選べ。</p>
<ol><li>5</li><li>6</li><li>7</li><li>8</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。a ＝ 1 と置くと c ＝ 2 ・ d ＝ 3 で右辺の O は 2×2 ＋ 3 ＝ 7 なので b ＝ 7/2。全体を2倍して 2C<sub>2</sub>H<sub>6</sub> ＋ 7O<sub>2</sub> → 4CO<sub>2</sub> ＋ 6H<sub>2</sub>O。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 質量の計算</div>
<p class="qz-q">メタン CH<sub>4</sub> 8.0 g を完全燃焼させたときに生じる水の質量として最も適当なものを1つ選べ。反応式は CH<sub>4</sub> ＋ 2O<sub>2</sub> → CO<sub>2</sub> ＋ 2H<sub>2</sub>O である。</p>
<ol><li>9.0 g</li><li>18 g</li><li>22 g</li><li>36 g</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。8.0 g × (1 mol ／ 16 g) ＝ 0.50 mol の CH<sub>4</sub>。係数比 1 対 2 から H<sub>2</sub>O は 1.0 mol で 18 g である。1 は係数比を掛け忘れた値である。3 は CO<sub>2</sub> の質量である。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 気体の体積</div>
<p class="qz-q">同温同圧で一酸化炭素 40 mL と酸素 30 mL を混合し CO を完全に燃焼させた。反応後の気体の体積は同温同圧で何 mL か。最も適当なものを1つ選べ。</p>
<ol><li>40 mL</li><li>50 mL</li><li>60 mL</li><li>70 mL</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。2CO ＋ O<sub>2</sub> → 2CO<sub>2</sub> で CO 40 mL と反応する O<sub>2</sub> は 20 mL である。生じる CO<sub>2</sub> は 40 mL で O<sub>2</sub> が 30 − 20 ＝ 10 mL 余る。反応後の気体は 40 ＋ 10 ＝ 50 mL である。1 は余った O<sub>2</sub> を数え忘れた値で 4 は反応前の体積の和である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ グラフの折れ点</div>
<p class="qz-q">0.20 mol/L の塩酸 200 mL に炭酸カルシウムを少しずつ加え発生した二酸化炭素の物質量を測った。反応式は CaCO<sub>3</sub> ＋ 2HCl → CaCl<sub>2</sub> ＋ H<sub>2</sub>O ＋ CO<sub>2</sub> である。加えた CaCO<sub>3</sub> の質量を横軸にとったグラフの折れ点の横軸の値として最も適当なものを1つ選べ。CaCO<sub>3</sub>＝100 とする。</p>
<ol><li>1.0 g</li><li>2.0 g</li><li>4.0 g</li><li>8.0 g</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。HCl は 0.20 × 0.200 ＝ 0.040 mol。係数比 1 対 2 から過不足なく反応する CaCO<sub>3</sub> は 0.020 mol で 2.0 g である。3 は係数比を考えず HCl と同じ物質量とした値である。折れ点より右では HCl が不足し CO<sub>2</sub> は 0.020 mol のまま増えない。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 化学の基本法則</div>
<p class="qz-q">法則とその内容の組み合わせとして誤りを含むものを1つ選べ。</p>
<ol><li>質量保存の法則 ・ 反応の前後で物質の質量の総和は変わらない</li><li>定比例の法則 ・ 1つの化合物を構成する元素の質量の比は一定である</li><li>倍数比例の法則 ・ 同温同圧で同体積の気体は同数の分子を含む</li><li>気体反応の法則 ・ 反応する気体と生成する気体の体積は同温同圧で簡単な整数比になる</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。同温同圧で同体積の気体が同数の分子を含むのはアボガドロの法則である。倍数比例の法則は2元素が複数の化合物をつくるとき一方の一定質量と結びつく他方の質量が簡単な整数比になるという法則である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ アンモニアの合成</div>
<p class="qz-q">N<sub>2</sub> ＋ 3H<sub>2</sub> → 2NH<sub>3</sub> の反応が完全に進むとする。アンモニア 3.4 t をつくるのに要する水素の質量として最も適当なものを1つ選べ。</p>
<ol><li>0.20 t</li><li>0.60 t</li><li>1.2 t</li><li>5.1 t</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。3.4×10<sup>6</sup> g × (1 mol ／ 17 g) ＝ 2.0×10<sup>5</sup> mol の NH<sub>3</sub>。H<sub>2</sub> は 2.0×10<sup>5</sup> × 3 ／ 2 ＝ 3.0×10<sup>5</sup> mol で 3.0×10<sup>5</sup> × 2.0 ＝ 6.0×10<sup>5</sup> g ＝ 0.60 t。4 は係数の比 3 対 2 を質量の比とみなして 3.4 × 3 ／ 2 ＝ 5.1 とした誤りである。</div></details></div>

<h2 id="s8">この章の要点</h2>
<div class="tb-key"><b>要点</b>
係数は両辺の原子の数が等しくなるように決める。イオン反応式では電荷の合計も等しくする。<br>
係数の比は粒子の数の比・物質量の比・同温同圧の気体の体積の比に等しく質量の比には等しくない。<br>
量の計算は mol に直し係数比を掛け求める単位に戻す3段で行う。<br>
気体の体積の比が整数比になる理由はアボガドロの法則と分子の考え方で説明される。<br>
過不足のある反応では不足する側が生成物の量を決め折れ点は過不足なく反応する点である。</div>

<h2 id="s9">残っている問い</h2>
<ul>
<li class="tb-vnote">ハーバー・ボッシュ法の反応は可逆反応であり1回の通過で全量がアンモニアになるわけではない。未反応の気体を循環させて転化率を高める。例5は反応が完全に進むとした理想値である。平衡の扱いは化学で扱う。</li>
<li class="tb-vnote">世界のアンモニア合成に使われる水素の量の実測値と水素の原料の内訳は本章の出典で確定していない。本文の 3.2×10⁷ t は USGS の窒素換算の生産量から反応式で計算した値である。</li>
<li class="tb-vnote">合成窒素肥料が支える人口の割合 48 % は Erisman らの論文の図から Our World in Data が読み取った推計値である。論文本文の数値は確認できていない。</li>
<li class="tb-vnote">プルーストが定比例の法則を発表した年は文献により1794年から1799年まで幅がある。ドルトンの倍数比例の法則も1803年と1804年の両説がある。本文では年を幅で示した。</li>
</ul>

<h2 id="s10">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Haber process — Wikipedia — https://en.wikipedia.org/wiki/Haber_process</li>
<li>U.S. Geological Survey Mineral Commodity Summaries 2025 Nitrogen (Fixed)—Ammonia — https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-nitrogen.pdf</li>
<li>Erisman J. W. et al. How a century of ammonia synthesis changed the world. Nature Geoscience 2008 — https://pure.iiasa.ac.at/id/eprint/8475/</li>
<li>Our World in Data Population fed by Haber-Bosch fertilizers metadata — https://api.ourworldindata.org/v1/indicators/1290379.metadata.json</li>
<li>Law of definite proportions — Wikipedia — https://en.wikipedia.org/wiki/Law_of_definite_proportions</li>
<li>Law of multiple proportions — Wikipedia — https://en.wikipedia.org/wiki/Law_of_multiple_proportions</li>
<li>Gay-Lussac's law — Wikipedia — https://en.wikipedia.org/wiki/Gay-Lussac%27s_law</li>
</ol>
