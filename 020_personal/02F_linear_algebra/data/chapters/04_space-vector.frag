<!--meta
{"chapter": 4, "part": "数学C", "title": "空間ベクトル", "thesis": "空間の点は3つの数の組で表せる。成分が3つに増えるだけで和・実数倍・大きさ・内積の計算は平面と同じ形になる。違いは独立な方向が3本になることで同じ平面上にある条件と直線と平面の交点はその係数比較で求まる。", "verify": {"date": "2026-10-15", "checked": 37, "match": 33, "fixed": 3, "unconfirmed": 1}}
-->
<p>第1章から第3章までは平面のベクトルを扱った。この章では座標とベクトルを空間に広げる。学習指導要領は数学Cのベクトルの3つ目の項目として「座標及びベクトルの考えが平面から空間に拡張できること」を挙げている。解説は平面のベクトルと対比して空間のベクトルが平面の拡張であると捉えることに重点を置くと述べている。</p>
<p>新しく暗記する公式は少ない。成分を3つにすれば大きさも内積も平面と同じ形で計算できる。新しく加わるのは独立な方向が3本になることでそこから4点が同じ平面上にある条件が生まれる。2025年の共通テストの第6問は座標空間の球面上の3点を扱った。この章は空間座標・成分と内積・同じ平面上の条件・直線と平面の交点・平面と球面の方程式の順に進む。</p>

<h2 id="s1">空間座標と2点間の距離</h2>
<p>空間に点Oをとり Oで互いに直交する3本の数直線を引く。これを<strong>x軸・y軸・z軸</strong>と呼びOを原点と呼ぶ。x軸の正の向きからy軸の正の向きへ右手の指を回した時に親指が向く方向をz軸の正の向きにとる。この向きの取り方を右手系と呼ぶ。</p>
<p>2本の軸を含む平面を<strong>座標平面</strong>と呼ぶ。x軸とy軸を含む平面をxy平面と呼びその方程式は \( z=0 \) である。同様にyz平面は \( x=0 \) ・zx平面は \( y=0 \) である。</p>
<p>点Pを通り各座標平面に平行な3枚の平面がx軸・y軸・z軸と交わる点の座標を \( a \) ・ \( b \) ・ \( c \) とする。3つの数の組 \( (a,b,c) \) を点Pの<strong>座標</strong>と呼び \( P(a,b,c) \) と書く。空間の点と3つの実数の組は1対1に対応する。</p>
<p>空間の図は紙の上に斜めから見た形で描く。x軸を手前の斜め下に描くので長さと角は正しく表れない。図は位置関係を確かめるためだけに使い長さと角は必ず成分で計算する。座標平面に平行な平面も方程式で表せる。点 \( (2,0,0) \) を通りyz平面に平行な平面は \( x=2 \) であり平面 \( z=4 \) はxy平面を4だけ上に平行移動した平面である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 320" role="img" aria-label="空間座標と点P(2, 3, 4)">
  <defs><marker id="ah04a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker>
  <marker id="ah04b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker></defs>
  <g transform="translate(0,20)">
    <g stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah04a)">
      <line x1="272" y1="192" x2="162" y2="282"/><line x1="210" y1="210" x2="450" y2="210"/><line x1="250" y1="242" x2="250" y2="10"/>
    </g>
    <g stroke="var(--sub)" stroke-width="1.2" stroke-dasharray="4 4" fill="none">
      <polyline points="206,246 326,246 370,210"/>
      <polyline points="206,246 206,86 250,50"/>
      <polyline points="206,86 326,86 370,50 250,50"/>
      <line x1="326" y1="246" x2="326" y2="86"/><line x1="370" y1="210" x2="370" y2="50"/>
    </g>
    <line x1="250" y1="210" x2="326" y2="86" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah04b)"/>
    <line x1="250" y1="210" x2="326" y2="246" stroke="var(--warm)" stroke-width="2" stroke-dasharray="6 3"/>
    <circle cx="326" cy="86" r="5" fill="var(--accent)"/>
    <circle cx="326" cy="246" r="4" fill="var(--warm)"/>
    <g font-size="13">
      <text x="150" y="290" fill="var(--ink)">x</text><text x="456" y="214" fill="var(--ink)">y</text><text x="256" y="12" fill="var(--ink)">z</text>
      <text x="256" y="230" fill="var(--sub)">O</text>
      <text x="318" y="76" fill="var(--accent)" font-weight="600" text-anchor="end">P(2, 3, 4)</text>
      <text x="334" y="262" fill="var(--warm)">H(2, 3, 0)</text>
      <text x="184" y="250" fill="var(--sub)">2</text><text x="372" y="226" fill="var(--sub)">3</text><text x="232" y="54" fill="var(--sub)">4</text>
    </g>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="490" y="90" font-weight="600">距離は三平方の定理を2回</text>
    <text x="490" y="120" fill="var(--warm)">OH² ＝ 2² ＋ 3² ＝ 13</text>
    <text x="490" y="148">OP² ＝ OH² ＋ 4² ＝ 29</text>
    <text x="490" y="176" fill="var(--accent)">OP ＝ √29</text>
    <text x="490" y="226" fill="var(--sub)">H は P から xy 平面に</text>
    <text x="490" y="248" fill="var(--sub)">下ろした垂線の足</text>
  </g>
</svg>
<figcaption>x軸は手前左下・y軸は右・z軸は上に描いている。点P(2, 3, 4) は辺の長さ2・3・4の直方体の頂点である。xy平面上の H までの距離を先に求めて z 方向の4と合わせると OP ＝ √29 になる。</figcaption>
</figure>

<p>2点間の距離は三平方の定理を2回使って求める。原点から \( P(a,b,c) \) までの距離はxy平面上の点 \( H(a,b,0) \) を経由すると \( OH^2=a^2+b^2 \) で \( OP^2=OH^2+c^2 \) となる。2点 \( A(x_1,y_1,z_1) \) と \( B(x_2,y_2,z_2) \) の場合も同じ理由で次の式になる。</p>
\[ AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2} \]
<p>座標平面や軸に関する対称な点は符号の変化で表せる。\( P(a,b,c) \) とxy平面に関して対称な点は \( (a,b,-c) \) でz軸に関して対称な点は \( (-a,-b,c) \) で原点に関して対称な点は \( (-a,-b,-c) \) である。<strong class="hit">平面に関する対称は1つの符号を変え軸に関する対称は2つの符号を変え原点に関する対称は3つの符号を変える</strong>。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>2点 \( A(1,2,3) \) ・ \( B(3,-1,9) \) の距離を求めよ。また \( A(1,2,3) \) と \( C(3,0,1) \) から等距離にあるx軸上の点を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( AB=\sqrt{2^2+(-3)^2+6^2}=\sqrt{49}=7 \)。<br>手順2 x軸上の点は \( P(x,0,0) \) とおける。\( PA^2=PC^2 \) から \( (x-1)^2+4+9=(x-3)^2+0+1 \)。<br>手順3 展開して \( -2x+14=-6x+10 \) から \( x=-1 \)。<br>検算 \( PA^2=4+4+9=17 \) ・ \( PC^2=16+0+1=17 \)。<br>答え \( AB=7 \) ・ \( (-1,0,0) \)</div></details></div>

<p>典型的な誤りはx軸上の点を \( (x,x,x) \) や \( (x,0,x) \) とおくことである。x軸上の点はy座標とz座標がともに0である。同様にxy平面上の点は \( (x,y,0) \) とおく。図で軸と平面を確かめてから文字をおく。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">フライの位置は方向と距離だけでなく高さも要る</p>
<p>ゴロは地面の2つの数で位置が定まるがフライは高さを加えた3つの数で定まる。捕球できるかは3成分の位置で判定する。</p>
</aside>

<h2 id="s2">空間ベクトルの成分と内積</h2>
<p>空間の有向線分から位置を捨てて向きと大きさだけを考えたものが<strong>空間のベクトル</strong>である。相等・和・差・実数倍の定義は平面と同じで演算法則もそのまま成り立つ。x軸・y軸・z軸の正の向きの単位ベクトル \( \vec{e_1} \) ・ \( \vec{e_2} \) ・ \( \vec{e_3} \) を基本ベクトルとすると任意のベクトルは次のように書ける。</p>
\[ \vec{a}=a_1\vec{e_1}+a_2\vec{e_2}+a_3\vec{e_3}=(a_1,a_2,a_3) \]
<p>成分による計算は平面の式の成分を1つ増やしたものである。</p>
\[ |\vec{a}|=\sqrt{a_1^{\,2}+a_2^{\,2}+a_3^{\,2}},\qquad \vec{a}\cdot\vec{b}=a_1b_1+a_2b_2+a_3b_3,\qquad \overrightarrow{AB}=(b_1-a_1,\ b_2-a_2,\ b_3-a_3) \]
<p>内積の定義 \( \vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\theta \) も同じである。空間の2本のベクトルは始点をそろえると1枚の平面に載るのでなす角は平面と同じように測れる。成分の式は第2章と同じく余弦定理から導ける。垂直条件・面積の公式 \( S=\dfrac{1}{2}\sqrt{|\vec{a}|^2|\vec{b}|^2-(\vec{a}\cdot\vec{b})^2} \) ・正射影もそのまま使える。ただし面積の公式 \( \dfrac{1}{2}|a_1b_2-a_2b_1| \) は平面専用であり空間では使えない。</p>
<p>平面との大きな違いは1次独立なベクトルの本数である。空間の3つのベクトル \( \vec{a} \) ・ \( \vec{b} \) ・ \( \vec{c} \) の始点をそろえた時に4点O・A・B・Cが同じ平面上にない場合 3つのベクトルは<strong>1次独立</strong>であるという。この時次の定理が成り立つ。</p>
<div class="tb-key"><b>空間のベクトルの分解</b>
\( \vec{a} \) ・ \( \vec{b} \) ・ \( \vec{c} \) が1次独立ならば空間の任意のベクトル \( \vec{p} \) は \( \vec{p}=s\vec{a}+t\vec{b}+u\vec{c} \) の形にただ1通りに表せる。</div>
<p>理由は平面の場合と同じである。Pを通り \( \vec{c} \) に平行な直線がO・A・Bを含む平面と交わる点をP′とする。P′はその平面上にあるので \( s\vec{a}+t\vec{b} \) と書け残りの \( \overrightarrow{P'P} \) は \( \vec{c} \) の実数倍である。<strong class="hit">空間では3本の係数を比べられる</strong>。2本しかないと平面1枚分のベクトルしか表せない。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>平行六面体の1つの頂点Oから出る3辺を \( \overrightarrow{OA}=\vec{a} \) ・ \( \overrightarrow{OB}=\vec{b} \) ・ \( \overrightarrow{OC}=\vec{c} \) とし Oと向かい合う頂点をDとする。対角線ODが三角形ABCの重心Gを通ることを示しOG対GDを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 平行六面体なので \( \overrightarrow{OD}=\vec{a}+\vec{b}+\vec{c} \)。<br>手順2 \( \overrightarrow{OG}=\dfrac{\vec{a}+\vec{b}+\vec{c}}{3}=\dfrac{1}{3}\overrightarrow{OD} \)。<br>手順3 \( \overrightarrow{OG} \) が \( \overrightarrow{OD} \) の実数倍なので3点O・G・Dは一直線上にある。<br>答え 対角線ODはGを通り \( OG:GD=1:2 \)。</div></details></div>

<p>例題2は第3章の平面の計算と同じ考え方で係数が3つになっただけである。対角線という空間図形の性質が位置ベクトルの1行の計算で示せる。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>\( \vec{a}=(1,1,0) \) と \( \vec{b}=(1,0,1) \) のなす角を求めよ。また \( \vec{a} \) と \( \vec{c}=(0,1,1) \) の両方に垂直な単位ベクトルを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( \vec{a}\cdot\vec{b}=1 \) ・ \( |\vec{a}|=|\vec{b}|=\sqrt{2} \)。\( \cos\theta=\dfrac{1}{2} \) で \( \theta=60^\circ \)。<br>手順2 求めるベクトルを \( \vec{n}=(x,y,z) \) とおく。\( \vec{n}\cdot\vec{a}=x+y=0 \) ・ \( \vec{n}\cdot\vec{c}=y+z=0 \)。<br>手順3 \( y=-x \) ・ \( z=x \) なので \( \vec{n}=x(1,-1,1) \)。大きさを1にして \( x=\pm\dfrac{1}{\sqrt{3}} \)。<br>答え \( 60^\circ \) ・ \( \pm\dfrac{1}{\sqrt{3}}(1,-1,1) \)</div></details></div>

<p>例題3の後半は未知数3つに対し条件式が2つである。成分の比だけが定まり大きさを1とする条件で3つ目の式を補う。空間で2本のベクトルに垂直な方向は1つに定まり向きが2通りある。</p>

<div class="ex"><div class="ex-h">例題 4</div>
<p>正四面体OABCで \( \overrightarrow{OA}=\vec{a} \) ・ \( \overrightarrow{OB}=\vec{b} \) ・ \( \overrightarrow{OC}=\vec{c} \) とする。OAとBCが垂直であることを示せ。</p>
<details open><summary>解き方</summary><div>手順1 1辺の長さを \( k \) とする。どの2辺も \( 60^\circ \) をなすので \( \vec{a}\cdot\vec{b}=\vec{a}\cdot\vec{c}=k^2\cos60^\circ=\dfrac{k^2}{2} \)。<br>手順2 \( \overrightarrow{BC}=\vec{c}-\vec{b} \)。<br>手順3 \( \vec{a}\cdot(\vec{c}-\vec{b})=\vec{a}\cdot\vec{c}-\vec{a}\cdot\vec{b}=\dfrac{k^2}{2}-\dfrac{k^2}{2}=0 \)。<br>答え 内積が0なので \( OA\perp BC \)。学習指導要領解説が空間図形の考察の例として挙げる問題である。</div></details></div>

<div class="ex"><div class="ex-h">例題 5</div>
<p>3点 \( A(1,0,0) \) ・ \( B(0,2,0) \) ・ \( C(0,0,3) \) を頂点とする三角形の面積を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( \overrightarrow{AB}=(-1,2,0) \) ・ \( \overrightarrow{AC}=(-1,0,3) \)。<br>手順2 \( |\overrightarrow{AB}|^2=5 \) ・ \( |\overrightarrow{AC}|^2=10 \) ・ \( \overrightarrow{AB}\cdot\overrightarrow{AC}=1 \)。<br>手順3 \( S=\dfrac{1}{2}\sqrt{5\times10-1^2}=\dfrac{1}{2}\sqrt{49}=\dfrac{7}{2} \)。<br>答え \( \dfrac{7}{2} \)</div></details></div>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">2人の距離は価値観と生活リズムと金銭感覚の差の2乗和の平方根で測る</p>
<p>1つの軸の差が小さくても残りの軸の差が大きければ距離は遠い。3成分の距離の公式と同じ構造である。</p>
</aside>

<h2 id="s3">4点が同一平面上にある条件</h2>
<p>同じ直線上にない3点A・B・Cは平面を1枚だけ定める。点Pがこの平面ABC上にある条件は \( \overrightarrow{AB} \) と \( \overrightarrow{AC} \) が1次独立であることから次のように書ける。</p>
\[ P\ \text{が平面}\ ABC\ \text{上}\iff\overrightarrow{AP}=s\overrightarrow{AB}+t\overrightarrow{AC}\ \text{となる実数}\ s,\ t\ \text{がある} \]
<p>基準点Oからの位置ベクトルで書き直すと \( \vec{p}-\vec{a}=s(\vec{b}-\vec{a})+t(\vec{c}-\vec{a}) \) から次の形になる。</p>
\[ \vec{p}=(1-s-t)\vec{a}+s\vec{b}+t\vec{c} \]
<p><strong class="hit">点Pが平面ABC上にあるのは \( \vec{p}=k\vec{a}+l\vec{b}+m\vec{c} \) で係数の和 \( k+l+m \) が1と書ける時である</strong>。第3章の3点が一直線上にある条件の係数の和が1という形がそのまま1つ次元を上げて成り立つ。ただし O・A・B・C が同じ平面上にない場合に限る。その時は \( \vec{a} \) ・ \( \vec{b} \) ・ \( \vec{c} \) が1次独立で表し方が1通りになるからである。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 350" role="img" aria-label="四面体OABCと平面LMNと直線OGの交点Q">
  <polygon points="135,280 350,230 200,185" fill="var(--warm)" fill-opacity="0.25" stroke="var(--warm)" stroke-width="2"/>
  <g stroke="var(--ink)" stroke-width="2" fill="none">
    <line x1="70" y1="330" x2="425" y2="230"/><line x1="70" y1="330" x2="200" y2="50"/><line x1="425" y1="230" x2="200" y2="50"/>
  </g>
  <g stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="5 4" fill="none">
    <line x1="200" y1="230" x2="70" y2="330"/><line x1="200" y1="230" x2="425" y2="230"/><line x1="200" y1="230" x2="200" y2="50"/>
  </g>
  <line x1="200" y1="230" x2="231.7" y2="203.3" stroke="var(--accent)" stroke-width="2.5"/>
  <line x1="231.7" y1="203.3" x2="257" y2="182" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <g>
    <circle cx="200" cy="230" r="4" fill="var(--ink)"/>
    <circle cx="135" cy="280" r="4" fill="var(--warm)"/><circle cx="350" cy="230" r="4" fill="var(--warm)"/><circle cx="200" cy="185" r="4" fill="var(--warm)"/>
    <circle cx="231.7" cy="203.3" r="4" fill="var(--accent)"/>
    <circle cx="212.7" cy="219.3" r="5" fill="var(--cool)"/>
  </g>
  <g font-size="13" font-weight="600">
    <text x="186" y="250">O</text><text x="52" y="342">A</text><text x="432" y="236">B</text><text x="194" y="40">C</text>
    <text x="114" y="276" fill="var(--warm)">L</text><text x="352" y="250" fill="var(--warm)">M</text><text x="176" y="182" fill="var(--warm)">N</text>
    <text x="242" y="214" fill="var(--accent)">G</text><text x="221" y="229" fill="var(--cool)">Q</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="470" y="60">L は OA の中点</text>
    <text x="470" y="84">M は OB を 2 対 1 に内分</text>
    <text x="470" y="108">N は OC を 1 対 3 に内分</text>
    <text x="470" y="132">G は三角形ABCの重心</text>
    <text x="470" y="176" fill="var(--cool)" font-weight="600">OQ ＝ (2/5)OG</text>
    <text x="470" y="200" fill="var(--sub)">＝ (2/15)(a ＋ b ＋ c)</text>
    <text x="470" y="244" fill="var(--sub)">OL・OM・ON で表した係数</text>
    <text x="470" y="268" fill="var(--sub)">4/15 ＋ 3/15 ＋ 8/15 ＝ 1</text>
  </g>
</svg>
<figcaption>橙の三角形が平面LMNである。直線OGはこの平面と点Qで交わる。OQ を OL・OM・ON で表した係数の和が1になる条件からQの位置が定まる。破線は手前から見えない辺である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 6</div>
<p>4点 \( A(1,0,0) \) ・ \( B(0,2,0) \) ・ \( C(0,0,3) \) ・ \( P(x,1,1) \) が同じ平面上にある時 \( x \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( \overrightarrow{AP}=s\overrightarrow{AB}+t\overrightarrow{AC} \) とおく。\( (x-1,1,1)=s(-1,2,0)+t(-1,0,3) \)。<br>手順2 y成分 \( 1=2s \) から \( s=\dfrac{1}{2} \)。z成分 \( 1=3t \) から \( t=\dfrac{1}{3} \)。<br>手順3 x成分 \( x-1=-s-t=-\dfrac{5}{6} \) から \( x=\dfrac{1}{6} \)。<br>検算 平面ABCは \( x+\dfrac{y}{2}+\dfrac{z}{3}=1 \) で表せる。\( \dfrac{1}{6}+\dfrac{1}{2}+\dfrac{1}{3}=1 \) を満たす。<br>答え \( x=\dfrac{1}{6} \)</div></details></div>

<p>典型的な誤りは平面の条件を \( \overrightarrow{AP}=s\overrightarrow{AB} \) のように1本だけで書くことである。これは直線ABの条件であり平面には2本の方向が要る。逆に空間の点を表す時に3本目を忘れて \( s\vec{a}+t\vec{b} \) とおくとO・A・Bを含む平面上の点しか表せない。</p>

<h2 id="s4">直線と平面の交点</h2>
<p>直線と平面の交点は第3章の2直線の交点と同じ方針で求める。<strong>直線上の点として1つの文字で表し平面上にある条件で文字を定める</strong>。四面体の問題では係数の和が1という条件を使い座標の問題では成分の連立方程式を使う。</p>

<div class="ex"><div class="ex-h">例題 7</div>
<p>四面体OABCで \( \overrightarrow{OA}=\vec{a} \) ・ \( \overrightarrow{OB}=\vec{b} \) ・ \( \overrightarrow{OC}=\vec{c} \) とする。辺OAの中点をL・辺OBを \( 2:1 \) に内分する点をM・辺OCを \( 1:3 \) に内分する点をNとする。三角形ABCの重心をGとし直線OGと平面LMNの交点をQとする。\( \overrightarrow{OQ} \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( \overrightarrow{OG}=\dfrac{\vec{a}+\vec{b}+\vec{c}}{3} \)。QはOG上にあるので \( \overrightarrow{OQ}=\dfrac{k}{3}(\vec{a}+\vec{b}+\vec{c}) \) とおく。<br>手順2 \( \overrightarrow{OL}=\dfrac{1}{2}\vec{a} \) ・ \( \overrightarrow{OM}=\dfrac{2}{3}\vec{b} \) ・ \( \overrightarrow{ON}=\dfrac{1}{4}\vec{c} \) から \( \vec{a}=2\overrightarrow{OL} \) ・ \( \vec{b}=\dfrac{3}{2}\overrightarrow{OM} \) ・ \( \vec{c}=4\overrightarrow{ON} \)。<br>手順3 \( \overrightarrow{OQ}=\dfrac{k}{3}\left(2\overrightarrow{OL}+\dfrac{3}{2}\overrightarrow{OM}+4\overrightarrow{ON}\right) \)。<br>手順4 Qは平面LMN上なので係数の和が1。\( \dfrac{k}{3}\left(2+\dfrac{3}{2}+4\right)=\dfrac{5k}{2}=1 \) から \( k=\dfrac{2}{5} \)。<br>答え \( \overrightarrow{OQ}=\dfrac{2}{15}(\vec{a}+\vec{b}+\vec{c}) \)。\( OQ:QG=2:3 \) である。</div></details></div>

<div class="ex"><div class="ex-h">例題 8</div>
<p>原点Oと \( D(1,1,1) \) を通る直線が例題6の平面ABCと交わる点を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 直線上の点は \( t(1,1,1)=(t,t,t) \)。<br>手順2 \( \vec{a}=(1,0,0) \) ・ \( \vec{b}=(0,2,0) \) ・ \( \vec{c}=(0,0,3) \) を使うと \( (t,t,t)=t\vec{a}+\dfrac{t}{2}\vec{b}+\dfrac{t}{3}\vec{c} \)。<br>手順3 平面ABC上の条件は係数の和が1なので \( t\left(1+\dfrac{1}{2}+\dfrac{1}{3}\right)=\dfrac{11t}{6}=1 \) から \( t=\dfrac{6}{11} \)。<br>答え \( \left(\dfrac{6}{11},\dfrac{6}{11},\dfrac{6}{11}\right) \)</div></details></div>

<p>平面に下ろした垂線の足も同じ考え方で求まる。垂線の足Hは平面上にありOHが平面の2本の方向と垂直になる点である。</p>

<div class="ex"><div class="ex-h">例題 9</div>
<p>原点Oから例題6の平面ABCに下ろした垂線の足Hの座標と線分OHの長さを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( H(x,y,z) \) とおく。\( \overrightarrow{OH}\perp\overrightarrow{AB} \) から \( -x+2y=0 \)。\( \overrightarrow{OH}\perp\overrightarrow{AC} \) から \( -x+3z=0 \)。<br>手順2 \( y=\dfrac{x}{2} \) ・ \( z=\dfrac{x}{3} \)。Hは平面上なので例題6と同じく \( x+\dfrac{y}{2}+\dfrac{z}{3}=1 \)。<br>手順3 \( x\left(1+\dfrac{1}{4}+\dfrac{1}{9}\right)=\dfrac{49x}{36}=1 \) から \( x=\dfrac{36}{49} \)。\( H\left(\dfrac{36}{49},\dfrac{18}{49},\dfrac{12}{49}\right) \)。<br>手順4 \( OH=\dfrac{\sqrt{36^2+18^2+12^2}}{49}=\dfrac{\sqrt{1764}}{49}=\dfrac{42}{49}=\dfrac{6}{7} \)。<br>検算 四面体OABCの体積は \( \dfrac{1}{3}\times\dfrac{1}{2}\times1\times2\times3=1 \)。底面を三角形ABCとすると面積は例題5の \( \dfrac{7}{2} \) で \( \dfrac{1}{3}\times\dfrac{7}{2}\times OH=1 \) から \( OH=\dfrac{6}{7} \)。一致する。<br>答え \( H\left(\dfrac{36}{49},\dfrac{18}{49},\dfrac{12}{49}\right) \) ・ \( OH=\dfrac{6}{7} \)</div></details></div>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">3財の予算制約は空間の平面で法線は価格ベクトルである</p>
<p>\( p_1x+p_2y+p_3z=I \) は3財の消費量の空間に置かれた1枚の平面である。第3章の予算制約線が1次元上がった形である。</p>
</aside>

<h2 id="s5">平面の方程式と球面</h2>
<p>第3章の法線ベクトルの考え方は空間では平面を表す。点 \( A(x_1,y_1,z_1) \) を通り法線ベクトルが \( \vec{n}=(a,b,c) \) の平面は \( \vec{n}\cdot(\vec{p}-\vec{a})=0 \) と書ける。成分で書くと次の式になる。</p>
\[ a(x-x_1)+b(y-y_1)+c(z-z_1)=0\qquad\text{展開して}\qquad ax+by+cz+d=0 \]
<p>点 \( (x_0,y_0,z_0) \) と平面 \( ax+by+cz+d=0 \) の距離は平面の場合と同じ理由で \( \dfrac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}} \) である。例題9の平面は \( 6x+3y+2z=6 \) と書け原点との距離は \( \dfrac{6}{\sqrt{49}}=\dfrac{6}{7} \) となり例題9と一致する。</p>
<p>平面の方程式が数学Cのどこまでに含まれるかは解説で確かめておく。数学Cの解説は空間について座標と成分と内積の拡張を中心に述べ平面の方程式に触れていない。一方で理数科の科目である理数数学特論の内容の取扱いには「数学Cの内容の(1)に加えて空間における直線や平面の方程式も扱うこと」とある。<strong class="hit">平面の方程式は数学Cの必須の内容ではなく発展の扱いである</strong>。共通テストで使う時は誘導が付くと考え例題6から例題9のように係数の和と内積でも解けるようにしておく。</p>
<p>中心 \( C(\vec{c}) \) ・半径 \( r \) の<strong>球面</strong>は中心からの距離が \( r \) の点の集まりで \( |\vec{p}-\vec{c}|=r \) と書ける。中心を \( (a,b,c) \) として成分で書くと次の式になる。</p>
\[ (x-a)^2+(y-b)^2+(z-c)^2=r^2 \]
<p>球面と平面が交わる部分は円になる。中心から平面までの距離を \( d \) とすると \( d<r \) の時に交わりは半径 \( \sqrt{r^2-d^2} \) の円である。中心と円の中心と円周上の点が直角三角形をつくるからである。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 290" role="img" aria-label="球面をxy平面で切った断面の円の半径">
  <line x1="40" y1="230" x2="400" y2="230" stroke="var(--ink)" stroke-width="2"/>
  <text x="330" y="252" font-size="13" fill="var(--sub)">xy 平面 z ＝ 0</text>
  <circle cx="200" cy="140" r="120" fill="var(--cool)" fill-opacity="0.08" stroke="var(--cool)" stroke-width="2.5"/>
  <line x1="120.6" y1="230" x2="279.4" y2="230" stroke="var(--warm)" stroke-width="5"/>
  <line x1="200" y1="140" x2="200" y2="230" stroke="var(--sub)" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="200" y1="140" x2="279.4" y2="230" stroke="var(--accent)" stroke-width="2.5"/>
  <polyline points="200,220 210,220 210,230" fill="none" stroke="var(--sub)" stroke-width="1.5"/>
  <circle cx="200" cy="140" r="4" fill="var(--ink)"/>
  <g font-size="13">
    <text x="208" y="134" fill="var(--ink)" font-weight="600">中心 (1, −2, 3)</text>
    <text x="176" y="190" fill="var(--sub)">3</text>
    <text x="246" y="176" fill="var(--accent)">4</text>
    <text x="226" y="270" fill="var(--warm)">√7</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="450" y="70">球面の半径 r ＝ 4</text>
    <text x="450" y="96">中心と平面の距離 d ＝ 3</text>
    <text x="450" y="140" fill="var(--warm)">断面の円の半径</text>
    <text x="450" y="164" fill="var(--warm)">√(4² − 3²) ＝ √7</text>
    <text x="450" y="216" fill="var(--sub)">中心を通り xy 平面に垂直な</text>
    <text x="450" y="238" fill="var(--sub)">平面で切った断面図</text>
  </g>
</svg>
<figcaption>球面 (x − 1)² ＋ (y + 2)² ＋ (z − 3)² ＝ 16 を横から見た断面である。中心の高さは3で半径は4なのでxy平面との交わりは半径 √7 の円になる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 10</div>
<p>球面 \( x^2+y^2+z^2-2x+4y-6z-2=0 \) の中心と半径を求めよ。またこの球面とxy平面の交わりの円の中心と半径を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 平方完成する。\( (x-1)^2+(y+2)^2+(z-3)^2=2+1+4+9=16 \)。<br>手順2 中心 \( (1,-2,3) \) ・半径4。<br>手順3 xy平面は \( z=0 \)。代入して \( (x-1)^2+(y+2)^2=16-9=7 \)。<br>答え 球面の中心 \( (1,-2,3) \) 半径4 ・ 交わりの円はxy平面上で中心 \( (1,-2,0) \) 半径 \( \sqrt{7} \)</div></details></div>

<p>典型的な誤りは平方完成の定数の符号である。\( x^2-2x=(x-1)^2-1 \) なので移項すると右辺に \( +1 \) が加わる。右辺は元の定数項 \( -2 \) を移した \( 2 \) と各平方完成で生じた \( 1 \) ・ \( 4 \) ・ \( 9 \) の和である。右辺が0以下なら球面にならない。</p>
<p>球面上の点の問題では \( |\vec{p}-\vec{c}|=r \) を2乗して内積の式に直す。中心を原点にとれば球面上の点の位置ベクトルはどれも大きさが \( r \) になる。2点 \( P(\vec{p}) \) ・ \( Q(\vec{q}) \) の距離は \( |\vec{p}-\vec{q}|^2=2r^2-2\,\vec{p}\cdot\vec{q} \) で表せる。球面上の3点が正三角形をなす条件は3組の内積がすべて等しいことになる。2025年の共通テストの第6問はこの型の条件を誘導に沿って扱った。</p>

<h2 id="s6">現実世界 3DCGの明るさとGPS</h2>
<p>3次元のコンピュータグラフィックスは物体の表面を小さな三角形の集まりで表す。各三角形には第5節の法線ベクトル \( \vec{n} \) を持たせる。光源への方向を単位ベクトル \( \vec{l} \) とすると拡散反射の明るさは \( \vec{n}\cdot\vec{l} \) に比例するとみなせる。これをランベルトの余弦則と呼ぶ。内積が負の面は光源と反対側を向くので明るさを0とする。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 240" role="img" aria-label="面の法線と光の向きのなす角で明るさが定まる">
  <defs><marker id="ah04c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  <marker id="ah04d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker></defs>
  <line x1="60" y1="200" x2="380" y2="200" stroke="var(--ink)" stroke-width="4"/>
  <line x1="220" y1="200" x2="220" y2="60" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah04c)"/>
  <line x1="220" y1="200" x2="341.2" y2="130" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah04d)"/>
  <path d="M220 150 A50 50 0 0 1 263.3 175" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <g font-size="13">
    <text x="228" y="62" fill="var(--accent)" font-weight="600">法線 n</text>
    <text x="346" y="128" fill="var(--warm)" font-weight="600">光源の向き l</text>
    <text x="236" y="146" fill="var(--ink)">60°</text>
    <text x="70" y="226" fill="var(--sub)">物体の表面</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="440" y="70" font-weight="600">明るさ ∝ n·l ＝ cos θ</text>
    <text x="440" y="104">θ ＝ 0° 正面から 1</text>
    <text x="440" y="130" fill="var(--warm)">θ ＝ 60° この図 0.5</text>
    <text x="440" y="156">θ ＝ 90° 真横から 0</text>
    <text x="440" y="190" fill="var(--sub)">n と l はどちらも単位ベクトル</text>
  </g>
</svg>
<figcaption>面の法線 n と光源への向き l のなす角が60°なら明るさは正面から照らした場合の半分になる。単位ベクトルどうしの内積は cos θ に等しい。</figcaption>
</figure>

<p>GPSの測位は球面の交わりの問題である。受信機は各衛星からの信号の到達時間に光速をかけて衛星までの距離を求める。衛星の位置を中心とし距離を半径とする球面を考えると受信機はすべての球面の上にある。2つの球面の交わりは円で3つ目の球面との交わりは2点に絞られる。受信機の時計の誤差も未知数として解くので実際には4機以上の衛星を使う。</p>

<aside class="an an-rw"><b>現実世界</b>
<p>ゲームの描画用の半導体は1秒間に膨大な数の内積を計算する。各画素で行う計算の中心は \( n_1l_1+n_2l_2+n_3l_3 \) という3成分の積の和である。</p>
</aside>

<h2 id="s7">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 2点間の距離</div>
<p class="qz-q">2点 \( A(2,-1,3) \) ・ \( B(4,1,2) \) の距離を求めよ。</p>
<ol><li>\( \sqrt{5} \)</li><li>3</li><li>\( \sqrt{13} \)</li><li>9</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( \sqrt{2^2+2^2+(-1)^2}=\sqrt{9}=3 \)。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ なす角</div>
<p class="qz-q">\( \vec{a}=(1,-1,2) \) と \( \vec{b}=(2,1,1) \) のなす角を求めよ。</p>
<ol><li>\( 30^\circ \)</li><li>\( 45^\circ \)</li><li>\( 60^\circ \)</li><li>\( 90^\circ \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\( \vec{a}\cdot\vec{b}=2-1+2=3 \) ・ \( |\vec{a}|=|\vec{b}|=\sqrt{6} \)。\( \cos\theta=\dfrac{3}{6}=\dfrac{1}{2} \)。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 2本に垂直なベクトル</div>
<p class="qz-q">\( \vec{a}=(1,0,1) \) と \( \vec{b}=(0,1,1) \) の両方に垂直なベクトルを1つ選べ。</p>
<ol><li>\( (1,1,1) \)</li><li>\( (1,1,-1) \)</li><li>\( (1,-1,1) \)</li><li>\( (-1,1,1) \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( (1,1,-1)\cdot\vec{a}=1-1=0 \) ・ \( (1,1,-1)\cdot\vec{b}=1-1=0 \)。他の3つはどちらかとの内積が0にならない。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 同一平面上の条件</div>
<p class="qz-q">4点 \( A(1,0,0) \) ・ \( B(0,1,0) \) ・ \( C(0,0,1) \) ・ \( P(x,2,3) \) が同じ平面上にある時 \( x \) を求めよ。</p>
<ol><li>\( -6 \)</li><li>\( -4 \)</li><li>4</li><li>6</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( \overrightarrow{AP}=(x-1,2,3)=s(-1,1,0)+t(-1,0,1) \) とおくと \( s=2 \) ・ \( t=3 \) で \( x-1=-5 \)。\( x=-4 \)。検算 \( -4+2+3=1 \) で平面 \( x+y+z=1 \) 上にある。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 直線と平面の交点</div>
<p class="qz-q">四面体OABCで \( \overrightarrow{OP}=k(\vec{a}+2\vec{b}+3\vec{c}) \) とする。Pが平面ABC上にある時 \( k \) を求めよ。ただし \( \vec{a}=\overrightarrow{OA} \) ・ \( \vec{b}=\overrightarrow{OB} \) ・ \( \vec{c}=\overrightarrow{OC} \) である。</p>
<ol><li>\( \dfrac{1}{3} \)</li><li>\( \dfrac{1}{4} \)</li><li>\( \dfrac{1}{6} \)</li><li>6</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。係数の和 \( k+2k+3k=6k=1 \) から \( k=\dfrac{1}{6} \)。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 球面の中心と半径</div>
<p class="qz-q">球面 \( x^2+y^2+z^2-4x+2y-6z+5=0 \) の中心と半径の組を1つ選べ。</p>
<ol><li>中心 \( (2,-1,3) \) ・半径3</li><li>中心 \( (-2,1,-3) \) ・半径3</li><li>中心 \( (2,-1,3) \) ・半径 \( \sqrt{19} \)</li><li>中心 \( (4,-2,6) \) ・半径3</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。\( (x-2)^2+(y+1)^2+(z-3)^2=4+1+9-5=9 \)。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 球面と平面の交わり</div>
<p class="qz-q">問6の球面と平面 \( z=1 \) の交わりの円の半径を求めよ。</p>
<ol><li>1</li><li>2</li><li>\( \sqrt{5} \)</li><li>\( 2\sqrt{2} \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。中心 \( (2,-1,3) \) と平面 \( z=1 \) の距離は2。半径は \( \sqrt{3^2-2^2}=\sqrt{5} \)。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 空間の三角形の面積</div>
<p class="qz-q">原点Oと \( A(1,1,0) \) ・ \( B(0,1,1) \) を頂点とする三角形の面積を求めよ。</p>
<ol><li>\( \dfrac{1}{2} \)</li><li>\( \dfrac{\sqrt{3}}{2} \)</li><li>1</li><li>\( \sqrt{3} \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( |\vec{a}|^2=|\vec{b}|^2=2 \) ・ \( \vec{a}\cdot\vec{b}=1 \)。\( S=\dfrac{1}{2}\sqrt{4-1}=\dfrac{\sqrt{3}}{2} \)。三角形OABは1辺 \( \sqrt{2} \) の正三角形で \( \dfrac{\sqrt{3}}{4}\times2 \) とも一致する。</div></details></div>

<h2 id="s8">この章の要点</h2>
<div class="tb-key"><b>要点</b>
空間の点は \( (a,b,c) \) で表し距離は \( \sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2} \)。<br>
大きさ・内積・角・垂直・面積の根号の式は成分を3つにして平面と同じ形で使う。<br>
1次独立な3本で空間の任意のベクトルは \( s\vec{a}+t\vec{b}+u\vec{c} \) とただ1通りに表せる。<br>
Pが平面ABC上 \( \iff\vec{p}=k\vec{a}+l\vec{b}+m\vec{c} \) で \( k+l+m=1 \)。<br>
直線と平面の交点は直線上の点を1文字で表し平面上の条件で定める。<br>
球面 \( (x-a)^2+(y-b)^2+(z-c)^2=r^2 \)。平面の方程式 \( ax+by+cz+d=0 \) は数学Cでは発展である。</div>

<h2 id="s9">残っている問い</h2>
<ul>
<li class="tb-vnote">数学Cの解説は空間について座標とベクトルの拡張を述べるだけで球面の方程式に触れていない。2025年の共通テストが球面上の点を扱ったことは予備校の講評で確認した。教科書ごとに球面の方程式を本文と発展のどちらで扱うかは確認していない。</li>
<li class="tb-vnote">右手系の向きは高校の教科書の図の慣習に従った。座標軸の描き方は教科書によって異なる。</li>
<li class="tb-vnote">ランベルトの余弦則は理想的な拡散面の近似である。実際の描画では鏡面反射や環境光の項を加える。GPSの説明は大気の遅れや相対論の補正を省いた。</li>
<li class="tb-vnote">大学の線形代数では2本のベクトルに垂直なベクトルを外積で直接求める。外積は高校の範囲外であり例題3では連立方程式で求めた。</li>
</ul>

<h2 id="s10">出典</h2>
<ol>
<li>高等学校学習指導要領 平成30年告示 解説 数学編 理数編 数学C (1)ベクトル ・ 理数数学特論 — https://www.mext.go.jp/content/20260115-mxt_kyoiku02-100002620_04.pdf</li>
<li>東進 2025年共通テスト 数学Ⅱ・B・C 分析 — https://www.toshin.com/kyotsutest/2025/analysis_suugaku2bc.html</li>
<li>Cartesian coordinate system — Wikipedia — https://en.wikipedia.org/wiki/Cartesian_coordinate_system</li>
<li>Plane (mathematics) — Wikipedia — https://en.wikipedia.org/wiki/Plane_(mathematics)</li>
<li>Sphere — Wikipedia — https://en.wikipedia.org/wiki/Sphere</li>
<li>Lambert's cosine law — Wikipedia — https://en.wikipedia.org/wiki/Lambert%27s_cosine_law</li>
<li>Global Positioning System — Wikipedia — https://en.wikipedia.org/wiki/Global_Positioning_System</li>
</ol>
