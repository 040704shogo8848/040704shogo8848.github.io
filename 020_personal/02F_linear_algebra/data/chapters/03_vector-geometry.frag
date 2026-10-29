<!--meta
{"chapter": 3, "part": "数学C", "title": "位置ベクトルとベクトル方程式", "thesis": "点を基準点からの矢印で表すと図形の問題が文字式の計算になる。内分点は加重平均で3点が一直線上にある条件は係数の和が1である。直線と円も実数を1つ動かす式や内積の式で書ける。", "verify": {"date": "2026-10-15", "checked": 35, "match": 32, "fixed": 2, "unconfirmed": 1}}
-->
<p>第1章では1次独立な2本のベクトルで平面のどのベクトルも1通りに表せることを示した。第2章では内積で長さと角と垂直を計算した。この章ではこの2つを点と図形に使う。基準点を1つ決めて点をベクトルで表すと内分点・重心・交点が文字式の計算で求まる。直線と円も実数を動かす式で書ける。</p>
<p>共通テストのベクトルの大問で最も多い流れは次の3段である。図形の点を2本のベクトルで表す・2通りに表して係数を比べる・内積で長さや角を求める。2026年の第6問は等式を満たす点の存在範囲を扱った。この章の第3節がその準備になる。</p>

<h2 id="s1">位置ベクトルと分点</h2>
<p>平面上に基準になる点Oを1つ決める。点Pに対し \( \vec{p}=\overrightarrow{OP} \) をOに関する点Pの<strong>位置ベクトル</strong>と呼ぶ。点Pの位置ベクトルが \( \vec{p} \) であることを \( P(\vec{p}) \) と書く。基準点Oを原点にとれば位置ベクトルの成分は点の座標と一致する。</p>
<p>2点 \( A(\vec{a}) \) と \( B(\vec{b}) \) について第1章の差の式から次が成り立つ。</p>
\[ \overrightarrow{AB}=\vec{b}-\vec{a} \]
<p><strong class="hit">どの矢印も終点の位置ベクトルから始点の位置ベクトルを引けば基準点Oからの矢印だけで書ける</strong>。これがこの章のすべての計算の出発点である。</p>
<p>線分ABを \( m:n \) に内分する点Pを求める。\( m>0 \) ・ \( n>0 \) とする。PはAからBへ全体の \( \dfrac{m}{m+n} \) だけ進んだ点なので \( \overrightarrow{AP}=\dfrac{m}{m+n}\overrightarrow{AB} \) である。</p>
\[ \vec{p}=\vec{a}+\frac{m}{m+n}(\vec{b}-\vec{a})=\frac{n\vec{a}+m\vec{b}}{m+n} \]
<p>係数の付き方に注意する。<strong>Aの係数は反対側の比 \( n \) でBの係数は \( m \) である</strong>。Bに近い点ほどBの重みが大きいので \( m \) がBにつく。中点は \( m=n \) の場合で \( \dfrac{\vec{a}+\vec{b}}{2} \) である。</p>
<p>線分ABを \( m:n \) に外分する点Qは \( m\neq n \) の時に存在し内分の式の \( n \) を \( -n \) に置き換えて得られる。</p>
\[ \vec{q}=\frac{-n\vec{a}+m\vec{b}}{m-n} \]
<p>\( m>n \) ならQはBの外側にあり \( m<n \) ならAの外側にある。</p>
<p>分点の式は基準点Oの選び方によらない。係数の和が \( \dfrac{n}{m+n}+\dfrac{m}{m+n}=1 \) なので基準点を \( \vec{e} \) だけずらすと両辺が同じだけずれるからである。外分でも係数の和は \( \dfrac{-n+m}{m-n}=1 \) である。そのため問題に合わせて三角形の頂点の1つを基準点にとってよい。頂点Aを基準にすると \( \vec{a}=\vec{0} \) となり式が短くなる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 200" role="img" aria-label="線分ABを2対1に内分する点と外分する点">
  <line x1="40" y1="100" x2="680" y2="100" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="100" y1="100" x2="340" y2="100" stroke="var(--ink)" stroke-width="3"/>
  <g fill="var(--ink)"><circle cx="100" cy="100" r="5"/><circle cx="340" cy="100" r="5"/></g>
  <circle cx="260" cy="100" r="6" fill="var(--accent)"/>
  <circle cx="580" cy="100" r="6" fill="var(--warm)"/>
  <g font-size="13" text-anchor="middle">
    <text x="100" y="80" font-weight="600">A</text><text x="340" y="80" font-weight="600">B</text>
    <text x="260" y="80" fill="var(--accent)" font-weight="600">P</text><text x="580" y="80" fill="var(--warm)" font-weight="600">Q</text>
    <text x="180" y="124" fill="var(--accent)">2</text><text x="300" y="124" fill="var(--accent)">1</text>
    <text x="460" y="124" fill="var(--warm)">BQ ＝ 3</text>
  </g>
  <path d="M100 136 V146 H580 V136" fill="none" stroke="var(--warm)" stroke-width="1.5"/>
  <text x="340" y="164" font-size="13" text-anchor="middle" fill="var(--warm)">AQ ＝ 6</text>
  <g font-size="13" fill="var(--sub)">
    <text x="40" y="30">内分 P ＝ (a ＋ 2b) ÷ 3</text>
    <text x="400" y="30">外分 Q ＝ (−a ＋ 2b) ÷ (2 − 1)</text>
  </g>
  <text x="360" y="192" font-size="12.5" text-anchor="middle" fill="var(--sub)">AB の長さを3とすると AP ＝ 2 ・ PB ＝ 1 ・ AQ ＝ 6 ・ BQ ＝ 3 で比はどちらも 2 対 1</text>
</svg>
<figcaption>Pは線分ABを2対1に内分しQは2対1に外分する。外分点Qは線分の外側でAからの距離とBからの距離の比が2対1になる点である。</figcaption>
</figure>

<p>三角形ABCの<strong>重心</strong>Gは3本の中線の交点であり各中線を頂点から2対1に内分する。辺BCの中点を \( M\left(\dfrac{\vec{b}+\vec{c}}{2}\right) \) としAMを2対1に内分すると次の式になる。</p>
\[ \vec{g}=\frac{1\cdot\vec{a}+2\cdot\dfrac{\vec{b}+\vec{c}}{2}}{3}=\frac{\vec{a}+\vec{b}+\vec{c}}{3} \]
<p>結果は \( \vec{a} \) ・ \( \vec{b} \) ・ \( \vec{c} \) について対称である。BやCから出発しても同じ点になるので3本の中線は1点で交わる。学習指導要領解説は初等幾何による証明とベクトルによる証明を比べる例としてこの事実を挙げている。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>2点 \( A(\vec{a}) \) ・ \( B(\vec{b}) \) について線分ABを \( 2:1 \) に内分する点Pと外分する点Qと \( 1:3 \) に外分する点Rの位置ベクトルを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 内分 \( \vec{p}=\dfrac{1\cdot\vec{a}+2\vec{b}}{2+1}=\dfrac{\vec{a}+2\vec{b}}{3} \)。<br>手順2 外分 \( \vec{q}=\dfrac{-1\cdot\vec{a}+2\vec{b}}{2-1}=-\vec{a}+2\vec{b} \)。<br>手順3 \( 1:3 \) の外分は \( \vec{r}=\dfrac{-3\vec{a}+1\cdot\vec{b}}{1-3}=\dfrac{3\vec{a}-\vec{b}}{2} \)。\( m<n \) なのでRはAの外側にある。<br>答え \( \dfrac{\vec{a}+2\vec{b}}{3} \) ・ \( -\vec{a}+2\vec{b} \) ・ \( \dfrac{3\vec{a}-\vec{b}}{2} \)</div></details></div>

<div class="ex"><div class="ex-h">例題 2</div>
<p>3点 \( A(1,2) \) ・ \( B(4,-1) \) ・ \( C(1,5) \) を頂点とする三角形の重心Gの座標を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 原点を基準にすると位置ベクトルの成分は座標である。<br>手順2 \( \vec{g}=\dfrac{1}{3}\{(1,2)+(4,-1)+(1,5)\}=\dfrac{1}{3}(6,6)=(2,2) \)。<br>答え \( G(2,2) \)</div></details></div>

<p>典型的な誤りは内分の係数を逆にすることである。\( 2:1 \) の内分を \( \dfrac{2\vec{a}+\vec{b}}{3} \) と書くとAに近い点になる。迷った時は \( m:n=1:0 \) を代入して点Bになるかを確かめる。正しい式なら \( \dfrac{0\cdot\vec{a}+1\cdot\vec{b}}{1}=\vec{b} \) となる。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">内分点は2銘柄の組み入れ比率で外分点は空売りである</p>
<p>\( (1-t)\vec{a}+t\vec{b} \) は資金の \( 1-t \) をA・ \( t \) をBに配分した位置である。\( t>1 \) はAを空売りしてBを買い増す外分になる。</p>
</aside>

<h2 id="s2">3点が一直線上にある条件と2直線の交点</h2>
<p>3点A・B・Cが一直線上にある条件は \( \overrightarrow{AC} \) が \( \overrightarrow{AB} \) の実数倍になることである。</p>
\[ A,\ B,\ C\ \text{が一直線上}\iff\overrightarrow{AC}=k\overrightarrow{AB}\ \text{となる実数}\ k\ \text{がある} \]
<p>これを位置ベクトルで書き直すと \( \vec{c}=\vec{a}+k(\vec{b}-\vec{a})=(1-k)\vec{a}+k\vec{b} \) である。<strong class="hit">点Cが直線AB上にあるのはCの位置ベクトルが \( s\vec{a}+t\vec{b} \) で \( s+t=1 \) と書ける時である</strong>。係数の和が1という条件は前節の内分の式で \( \dfrac{n}{m+n}+\dfrac{m}{m+n}=1 \) となることと同じ内容である。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>三角形OABで \( \overrightarrow{OA}=\vec{a} \) ・ \( \overrightarrow{OB}=\vec{b} \) とする。辺OAの中点をD・三角形OABの重心をGとする。3点D・G・Bが一直線上にあることを示し \( DG:GB \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( \overrightarrow{OD}=\dfrac{1}{2}\vec{a} \) ・ \( \overrightarrow{OG}=\dfrac{\vec{0}+\vec{a}+\vec{b}}{3}=\dfrac{1}{3}\vec{a}+\dfrac{1}{3}\vec{b} \)。<br>手順2 \( \overrightarrow{DG}=\overrightarrow{OG}-\overrightarrow{OD}=-\dfrac{1}{6}\vec{a}+\dfrac{1}{3}\vec{b} \)。<br>手順3 \( \overrightarrow{DB}=\vec{b}-\dfrac{1}{2}\vec{a} \)。<br>手順4 \( \overrightarrow{DB}=3\overrightarrow{DG} \) なので3点は一直線上にある。<br>答え 一直線上にあり \( DG:GB=1:2 \)。GはBからの中線を2対1に内分するという重心の性質と一致する。</div></details></div>

<p>2直線の交点は同じ点を2通りに表して係数を比べて求める。第1章の分解の一意性がここで使われる。</p>

<div class="ex"><div class="ex-h">例題 4</div>
<p>三角形OABで \( \overrightarrow{OA}=\vec{a} \) ・ \( \overrightarrow{OB}=\vec{b} \) とする。辺OAを \( 1:2 \) に内分する点をC・辺OBの中点をDとし線分ADと線分BCの交点をPとする。\( \overrightarrow{OP} \) を \( \vec{a} \) と \( \vec{b} \) で表せ。</p>
<details open><summary>解き方</summary><div>手順1 \( \overrightarrow{OC}=\dfrac{1}{3}\vec{a} \) ・ \( \overrightarrow{OD}=\dfrac{1}{2}\vec{b} \)。<br>手順2 PはAD上にあるので \( AP:PD=s:(1-s) \) とおくと \( \overrightarrow{OP}=(1-s)\vec{a}+\dfrac{s}{2}\vec{b} \)。<br>手順3 PはBC上にあるので \( BP:PC=t:(1-t) \) とおくと \( \overrightarrow{OP}=\dfrac{t}{3}\vec{a}+(1-t)\vec{b} \)。<br>手順4 \( \vec{a} \) と \( \vec{b} \) は1次独立なので係数を比べて \( 1-s=\dfrac{t}{3} \) ・ \( \dfrac{s}{2}=1-t \)。<br>手順5 2式目から \( s=2-2t \)。1式目に代入して \( 2t-1=\dfrac{t}{3} \) から \( t=\dfrac{3}{5} \) ・ \( s=\dfrac{4}{5} \)。<br>検算 \( 1-s=\dfrac{1}{5}=\dfrac{t}{3} \) ・ \( \dfrac{s}{2}=\dfrac{2}{5}=1-t \)。<br>答え \( \overrightarrow{OP}=\dfrac{1}{5}\vec{a}+\dfrac{2}{5}\vec{b} \)</div></details></div>

<figure class="tb-fig">
<svg viewBox="0 0 720 280" role="img" aria-label="三角形OABの線分ADと線分BCの交点P">
  <polygon points="120,240 420,240 220,40" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <line x1="420" y1="240" x2="170" y2="140" stroke="var(--accent)" stroke-width="2.5"/>
  <line x1="220" y1="40" x2="220" y2="240" stroke="var(--warm)" stroke-width="2.5"/>
  <g fill="var(--ink)"><circle cx="120" cy="240" r="4"/><circle cx="420" cy="240" r="4"/><circle cx="220" cy="40" r="4"/><circle cx="220" cy="240" r="4"/><circle cx="170" cy="140" r="4"/></g>
  <circle cx="220" cy="160" r="6" fill="var(--cool)"/>
  <g font-size="13" font-weight="600">
    <text x="102" y="258">O</text><text x="426" y="258">A</text><text x="214" y="30">B</text>
    <text x="214" y="262">C</text><text x="148" y="136">D</text><text x="230" y="156" fill="var(--cool)">P</text>
  </g>
  <g font-size="12.5" fill="var(--sub)">
    <text x="160" y="232">1</text><text x="310" y="232">2</text>
    <text x="134" y="190">1</text><text x="182" y="88">1</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="470" y="70">AD 上 (1 − s)a ＋ (s/2)b</text>
    <text x="470" y="98">BC 上 (t/3)a ＋ (1 − t)b</text>
    <text x="470" y="140" fill="var(--sub)">係数比較で s ＝ 4/5 ・ t ＝ 3/5</text>
    <text x="470" y="182" fill="var(--cool)" font-weight="600">OP ＝ (1/5)a ＋ (2/5)b</text>
    <text x="470" y="220" fill="var(--sub)">AP 対 PD ＝ 4 対 1</text>
    <text x="470" y="244" fill="var(--sub)">BP 対 PC ＝ 3 対 2</text>
  </g>
</svg>
<figcaption>Cは辺OAを1対2に内分しDは辺OBの中点である。P を AD 上の点と BC 上の点の2通りに表し係数を比べると OP ＝ (1/5)a ＋ (2/5)b となる。図は O(0, 0) ・ A(6, 0) ・ B(2, 4) の場合で P(2, 1.6) である。</figcaption>
</figure>

<p>典型的な誤りは2つある。1つは2つの直線で同じ文字 \( s \) を使うことである。AD上の位置とBC上の位置は別の実数なので文字を分ける。もう1つは1次独立を確かめずに係数を比べることである。\( \vec{a} \) と \( \vec{b} \) が三角形の2辺なら平行でないので比べてよい。答案には「1次独立なので」と一言書く。</p>
<p>例題4はメネラウスの定理でも解ける。三角形OADと直線BCに定理を使うと \( \dfrac{OC}{CA}\cdot\dfrac{AP}{PD}\cdot\dfrac{DB}{BO}=1 \) から \( \dfrac{1}{2}\cdot\dfrac{AP}{PD}\cdot\dfrac{1}{2}=1 \) で \( AP:PD=4:1 \) となり結果は一致する。ベクトルの方法は補助線や定理の選択を必要としない点が利点である。</p>
<p>共通テストで繰り返し出る形に \( l\overrightarrow{PA}+m\overrightarrow{PB}+n\overrightarrow{PC}=\vec{0} \) を満たす点Pの位置がある。始点をAにそろえて解く。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>三角形ABCと点Pが \( 2\overrightarrow{PA}+3\overrightarrow{PB}+4\overrightarrow{PC}=\vec{0} \) を満たす。\( \overrightarrow{AP} \) を \( \overrightarrow{AB} \) と \( \overrightarrow{AC} \) で表しPの位置を述べよ。</p>
<details open><summary>解き方</summary><div>手順1 始点をAにそろえる。\( \overrightarrow{PA}=-\overrightarrow{AP} \) ・ \( \overrightarrow{PB}=\overrightarrow{AB}-\overrightarrow{AP} \) ・ \( \overrightarrow{PC}=\overrightarrow{AC}-\overrightarrow{AP} \)。<br>手順2 代入して \( -2\overrightarrow{AP}+3\overrightarrow{AB}-3\overrightarrow{AP}+4\overrightarrow{AC}-4\overrightarrow{AP}=\vec{0} \) から \( 9\overrightarrow{AP}=3\overrightarrow{AB}+4\overrightarrow{AC} \)。<br>手順3 内分の形に直す。\( \overrightarrow{AP}=\dfrac{7}{9}\cdot\dfrac{3\overrightarrow{AB}+4\overrightarrow{AC}}{7} \)。\( \dfrac{3\overrightarrow{AB}+4\overrightarrow{AC}}{7} \) は辺BCを \( 4:3 \) に内分する点Dへのベクトルである。<br>答え \( \overrightarrow{AP}=\dfrac{1}{3}\overrightarrow{AB}+\dfrac{4}{9}\overrightarrow{AC} \)。Pは辺BCを \( 4:3 \) に内分する点Dに対して線分ADを \( 7:2 \) に内分する点である。</div></details></div>

<p>例題5の結果から面積の比も分かる。三角形PBC・PCA・PABの面積の比は係数の比 \( 2:3:4 \) に一致する。例えば三角形PBCと三角形ABCは底辺BCが共通で高さの比が \( PD:AD=2:9 \) なので面積の比は \( 2:9 \) である。係数の合計9のうち2を占めると解釈できる。</p>

<h2 id="s3">直線のベクトル方程式と点の存在範囲</h2>
<p>点 \( A(\vec{a}) \) を通り \( \vec{0} \) でないベクトル \( \vec{d} \) に平行な直線を考える。点 \( P(\vec{p}) \) がこの直線上にあるのは \( \overrightarrow{AP} \) が \( \vec{d} \) の実数倍になる時である。</p>
\[ \vec{p}=\vec{a}+t\vec{d}\qquad(t\ \text{は実数}) \]
<p>これを直線の<strong>ベクトル方程式</strong>と呼ぶ。\( \vec{d} \) を<strong>方向ベクトル</strong>と呼び \( t \) を<strong>媒介変数</strong>と呼ぶ。\( t \) を動かすと点Pが直線上を動く。\( A(x_1,y_1) \) ・ \( \vec{d}=(l,m) \) として成分で書くと次の媒介変数表示になる。</p>
\[ x=x_1+lt,\qquad y=y_1+mt \]
<p>2式から \( t \) を消去すると \( m(x-x_1)-l(y-y_1)=0 \) となり数学Ⅱで学んだ直線の方程式に戻る。</p>
<p>2点 \( A(\vec{a}) \) と \( B(\vec{b}) \) を通る直線は方向ベクトルを \( \vec{b}-\vec{a} \) にとって \( \vec{p}=(1-t)\vec{a}+t\vec{b} \) と書ける。\( 0\le t\le1 \) に制限すると線分ABになる。これは前節の係数の和が1という条件と同じものである。</p>
<p>この見方を広げると点の<strong>存在範囲</strong>が分かる。\( \overrightarrow{OP}=s\vec{a}+t\vec{b} \) の \( s \) と \( t \) に条件を付けた時Pが動く範囲は次のようになる。</p>
<div class="tb-tw"><table>
<thead><tr><th>条件</th><th>Pの存在範囲</th></tr></thead>
<tbody>
<tr><td>\( s+t=1 \)</td><td>直線AB</td></tr>
<tr><td>\( s+t=1,\ s\ge0,\ t\ge0 \)</td><td>線分AB</td></tr>
<tr><td>\( s+t\le1,\ s\ge0,\ t\ge0 \)</td><td>三角形OABの周と内部</td></tr>
<tr><td>\( 0\le s\le1,\ 0\le t\le1 \)</td><td>OA・OBを2辺とする平行四辺形の周と内部</td></tr>
</tbody></table></div>
<p>3行目の理由を確かめる。\( s+t=k \) で \( 0<k\le1 \) とすると \( \overrightarrow{OP}=\dfrac{s}{k}(k\vec{a})+\dfrac{t}{k}(k\vec{b}) \) で係数の和は1である。PはOAとOBを \( k \) 倍した2点を結ぶ線分上にある。\( k \) を0から1まで動かすとこの線分がOからABまで平行に移り三角形を覆う。\( k=0 \) の場合はPはO自身である。<strong class="hit">係数の和を1にそろえるように基準のベクトルを伸縮するのが存在範囲の問題の定石である</strong>。</p>
<p>4行目の平行四辺形は \( s \) と \( t \) を別々に動かす場合である。\( t \) を固定して \( s \) を0から1まで動かすとPは \( t\vec{b} \) の終点から \( \vec{a} \) の方向に長さ \( |\vec{a}| \) の線分を描く。その線分を \( t \) について0から1まで平行に動かすと平行四辺形になる。条件の不等式が \( s \) と \( t \) の和についてか個別についてかで範囲の形が変わる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="係数の条件と点の存在範囲">
  <defs><marker id="ah03a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--sub)"/></marker></defs>
  <g stroke="var(--sub)" stroke-width="1.5" marker-end="url(#ah03a)">
    <line x1="40" y1="200" x2="160" y2="200"/><line x1="40" y1="200" x2="80" y2="90"/>
    <line x1="280" y1="200" x2="400" y2="200"/><line x1="280" y1="200" x2="320" y2="90"/>
    <line x1="520" y1="200" x2="640" y2="200"/><line x1="520" y1="200" x2="560" y2="90"/>
  </g>
  <line x1="160" y1="200" x2="80" y2="90" stroke="var(--accent)" stroke-width="4"/>
  <polygon points="280,200 400,200 320,90" fill="var(--accent)" fill-opacity="0.25" stroke="var(--accent)" stroke-width="2"/>
  <line x1="640" y1="200" x2="540" y2="145" stroke="var(--warm)" stroke-width="4"/>
  <circle cx="540" cy="145" r="4" fill="var(--warm)"/>
  <g font-size="13" font-weight="600">
    <text x="26" y="218">O</text><text x="164" y="218">A</text><text x="70" y="82">B</text>
    <text x="266" y="218">O</text><text x="404" y="218">A</text><text x="310" y="82">B</text>
    <text x="506" y="218">O</text><text x="644" y="218">A</text><text x="550" y="82">B</text>
    <text x="508" y="142" fill="var(--warm)">M</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="40" y="36">s ＋ t ＝ 1</text><text x="40" y="56" fill="var(--sub)">s ≧ 0 ・ t ≧ 0</text>
    <text x="40" y="246" fill="var(--accent)">線分AB</text>
    <text x="280" y="36">s ＋ t ≦ 1</text><text x="280" y="56" fill="var(--sub)">s ≧ 0 ・ t ≧ 0</text>
    <text x="280" y="246" fill="var(--accent)">三角形OABの周と内部</text>
    <text x="520" y="36">s ＋ 2t ＝ 1</text><text x="520" y="56" fill="var(--sub)">s ≧ 0 ・ t ≧ 0</text>
    <text x="520" y="246" fill="var(--warm)">線分AM M は OB の中点</text>
  </g>
</svg>
<figcaption>どれも OP ＝ sa ＋ tb である。左は係数の和が1で線分AB上にある。中央は和が1以下で三角形を覆う。右は s ＋ 2t ＝ 1 を s·a ＋ (2t)·(b/2) と書き直すと b/2 の終点Mと A を結ぶ線分になる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 6</div>
<p>点 \( A(1,2) \) を通り \( \vec{d}=(3,-1) \) に平行な直線を媒介変数で表し \( t \) を消去した方程式を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( (x,y)=(1,2)+t(3,-1) \) から \( x=1+3t \) ・ \( y=2-t \)。<br>手順2 2式目から \( t=2-y \)。1式目に代入して \( x=1+3(2-y)=7-3y \)。<br>答え \( x=1+3t,\ y=2-t \) ・ \( x+3y=7 \)。検算 \( t=1 \) の点 \( (4,1) \) は \( 4+3=7 \) を満たす。</div></details></div>

<div class="ex"><div class="ex-h">例題 7</div>
<p>三角形OABで \( \overrightarrow{OP}=s\overrightarrow{OA}+t\overrightarrow{OB} \) とする。\( s+2t=1 \) ・ \( s\ge0 \) ・ \( t\ge0 \) を満たす時Pの存在範囲を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 係数の和を1にするため \( t\overrightarrow{OB}=(2t)\cdot\dfrac{1}{2}\overrightarrow{OB} \) と書き直す。<br>手順2 \( \dfrac{1}{2}\overrightarrow{OB}=\overrightarrow{OM} \) とおくとMは辺OBの中点である。<br>手順3 \( \overrightarrow{OP}=s\overrightarrow{OA}+(2t)\overrightarrow{OM} \) で \( s+2t=1 \) ・ \( s\ge0 \) ・ \( 2t\ge0 \)。<br>答え 辺OBの中点をMとして線分AM。</div></details></div>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">ゴロの位置は打った地点と速度と時間で書ける</p>
<p>本塁 \( \vec{a} \) から速度 \( \vec{d} \) で転がるゴロの \( t \) 秒後の位置が \( \vec{a}+t\vec{d} \) である。内野手が捕れるかは交点を求める問題になる。</p>
</aside>

<h2 id="s4">法線ベクトルと直線の方程式</h2>
<p>直線を「通る点」と「垂直な向き」で表すこともできる。直線に垂直な \( \vec{0} \) でないベクトルを<strong>法線ベクトル</strong>と呼ぶ。点 \( A(\vec{a}) \) を通り法線ベクトルが \( \vec{n} \) の直線上の点 \( P(\vec{p}) \) は \( \overrightarrow{AP} \) が \( \vec{n} \) と垂直である点の集まりである。</p>
\[ \vec{n}\cdot(\vec{p}-\vec{a})=0 \]
<p>\( \vec{n}=(a,b) \) ・ \( A(x_1,y_1) \) ・ \( P(x,y) \) として成分で書くと次の式になる。</p>
\[ a(x-x_1)+b(y-y_1)=0 \]
<p>展開すると \( ax+by+c=0 \) の形になる。<strong class="hit">直線 \( ax+by+c=0 \) の \( x \) と \( y \) の係数を並べた \( (a,b) \) はその直線の法線ベクトルである</strong>。方向ベクトルは法線ベクトルに垂直なので \( (b,-a) \) にとれる。</p>
<p>法線ベクトルを使うと点と直線の距離の公式が導ける。点 \( Q(x_0,y_0) \) から直線 \( ax+by+c=0 \) への距離 \( d \) は直線上の点Aから見た \( \overrightarrow{AQ} \) の法線方向の成分の大きさである。第2章の正射影の長さの式から次が得られる。</p>
\[ d=\frac{|\vec{n}\cdot\overrightarrow{AQ}|}{|\vec{n}|}=\frac{|a(x_0-x_1)+b(y_0-y_1)|}{\sqrt{a^2+b^2}}=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} \]
<p>最後の変形ではAが直線上にあるので \( ax_1+by_1=-c \) となることを使った。数学Ⅱで学んだ公式がベクトルでは1行で導ける。</p>
<p>2直線のなす角は法線ベクトルのなす角から求める。法線ベクトルのなす角が \( \theta \) なら2直線のなす角は \( \theta \) と \( 180^\circ-\theta \) の小さい方である。</p>

<div class="ex"><div class="ex-h">例題 8</div>
<p>点 \( (1,2) \) を通り \( \vec{n}=(3,-1) \) を法線ベクトルとする直線の方程式を求めよ。また点 \( (2,4) \) とこの直線の距離を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( 3(x-1)-(y-2)=0 \) を展開して \( 3x-y-1=0 \)。<br>手順2 距離は \( \dfrac{|3\times2-4-1|}{\sqrt{9+1}}=\dfrac{1}{\sqrt{10}} \)。<br>答え \( 3x-y-1=0 \) ・ \( \dfrac{\sqrt{10}}{10} \)</div></details></div>

<div class="ex"><div class="ex-h">例題 9</div>
<p>2直線 \( x-2y+1=0 \) と \( 3x-y-2=0 \) のなす角を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 法線ベクトルは \( \vec{n_1}=(1,-2) \) ・ \( \vec{n_2}=(3,-1) \)。<br>手順2 \( \vec{n_1}\cdot\vec{n_2}=3+2=5 \) ・ \( |\vec{n_1}|=\sqrt{5} \) ・ \( |\vec{n_2}|=\sqrt{10} \)。<br>手順3 \( \cos\theta=\dfrac{5}{\sqrt{50}}=\dfrac{1}{\sqrt{2}} \) で \( \theta=45^\circ \)。<br>答え \( 45^\circ \)</div></details></div>

<p>直線の表し方は3通りになった。問題で与えられる情報に合わせて選ぶ。</p>
<div class="tb-tw"><table>
<thead><tr><th>与えられる情報</th><th>ベクトル方程式</th><th>向いている問題</th></tr></thead>
<tbody>
<tr><td>通る2点A・B</td><td>\( \vec{p}=(1-t)\vec{a}+t\vec{b} \)</td><td>交点の係数比較 ／ 存在範囲</td></tr>
<tr><td>通る点Aと方向 \( \vec{d} \)</td><td>\( \vec{p}=\vec{a}+t\vec{d} \)</td><td>運動する点の位置 ／ 媒介変数表示</td></tr>
<tr><td>通る点Aと法線 \( \vec{n} \)</td><td>\( \vec{n}\cdot(\vec{p}-\vec{a})=0 \)</td><td>垂直条件 ／ 距離 ／ 2直線のなす角</td></tr>
</tbody></table></div>
<p>前の2つは媒介変数 \( t \) を含み点を1つずつ生成する書き方である。最後の1つは条件を満たす点を判定する書き方で \( t \) を含まない。第4章の空間では前の書き方が直線になり後の書き方が平面になる。同じ式の形が空間では異なる図形を表すので区別しておく。</p>
<p>典型的な誤りは法線ベクトルと方向ベクトルの取り違えである。\( ax+by+c=0 \) の係数 \( (a,b) \) は直線に垂直な向きであり直線の向きではない。直線 \( y=2x \) すなわち \( 2x-y=0 \) の法線ベクトルは \( (2,-1) \) で方向ベクトルは \( (1,2) \) である。</p>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">予算制約線の法線ベクトルは価格ベクトルである</p>
<p>\( p_1x+p_2y=I \) の法線は \( (p_1,p_2) \)。所得が増えると線は法線方向へ平行移動し価格比が変わると法線が回転して傾きが変わる。</p>
</aside>

<h2 id="s5">円のベクトル方程式</h2>
<p>中心 \( C(\vec{c}) \) ・半径 \( r \) の円は中心からの距離が \( r \) の点の集まりである。</p>
\[ |\vec{p}-\vec{c}|=r\qquad\text{または}\qquad(\vec{p}-\vec{c})\cdot(\vec{p}-\vec{c})=r^2 \]
<p>\( \vec{c}=(a,b) \) ・ \( \vec{p}=(x,y) \) として成分で書くと \( (x-a)^2+(y-b)^2=r^2 \) となり数学Ⅱの円の方程式と一致する。</p>
<p>2点 \( A(\vec{a}) \) ・ \( B(\vec{b}) \) を直径の両端とする円は次の形でも書ける。</p>
\[ (\vec{p}-\vec{a})\cdot(\vec{p}-\vec{b})=0 \]
<p>理由は直径に対する円周角が直角であることである。P がA・Bと異なる円周上の点なら \( \overrightarrow{AP}\perp\overrightarrow{BP} \) で内積は0である。PがAかBに一致する時も一方が \( \vec{0} \) なので内積は0である。<strong class="hit">円周角の定理が内積0の1本の式に変わる</strong>。</p>
<p>円周上の点 \( P_0(\vec{p_0}) \) における接線は半径 \( CP_0 \) に垂直である。接線上の点 \( P \) について \( (\vec{p_0}-\vec{c})\cdot(\vec{p}-\vec{p_0})=0 \) が成り立つ。これを変形すると \( (\vec{p_0}-\vec{c})\cdot(\vec{p}-\vec{c})=r^2 \) となる。法線ベクトルが \( \vec{p_0}-\vec{c} \) の直線であることが分かる。</p>
<p>円の問題の誤りは2つある。1つは \( |\vec{p}-\vec{c}|=r \) を2乗せずに成分の式へ直そうとして根号の計算で行き詰まることである。大きさの式は2乗して内積に直すという第2章の手順をここでも使う。もう1つは \( x^2+y^2+lx+my+n=0 \) の形がいつも円を表すと考えることである。平方完成した右辺が0なら1点であり負なら図形は存在しない。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="直径ABの円と直角になる円周角">
  <g stroke="var(--line)" stroke-width="1">
    <line x1="110" y1="20" x2="110" y2="280"/><line x1="160" y1="20" x2="160" y2="280"/><line x1="210" y1="20" x2="210" y2="280"/><line x1="260" y1="20" x2="260" y2="280"/><line x1="310" y1="20" x2="310" y2="280"/><line x1="360" y1="20" x2="360" y2="280"/>
    <line x1="60" y1="230" x2="370" y2="230"/><line x1="60" y1="180" x2="370" y2="180"/><line x1="60" y1="130" x2="370" y2="130"/><line x1="60" y1="80" x2="370" y2="80"/><line x1="60" y1="30" x2="370" y2="30"/>
  </g>
  <line x1="60" y1="280" x2="370" y2="280" stroke="var(--ink)"/><line x1="60" y1="280" x2="60" y2="15" stroke="var(--ink)"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle"><text x="110" y="296">1</text><text x="160" y="296">2</text><text x="210" y="296">3</text><text x="260" y="296">4</text><text x="310" y="296">5</text><text x="48" y="234">1</text><text x="48" y="184">2</text><text x="48" y="134">3</text><text x="48" y="84">4</text><text x="48" y="34">5</text></g>
  <circle cx="210" cy="130" r="111.8" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <line x1="110" y1="180" x2="310" y2="80" stroke="var(--ink)" stroke-width="2"/>
  <line x1="113.2" y1="74.1" x2="110" y2="180" stroke="var(--warm)" stroke-width="2.5"/>
  <line x1="113.2" y1="74.1" x2="310" y2="80" stroke="var(--warm)" stroke-width="2.5"/>
  <polyline points="112.9,84.1 122.9,84.4 123.2,74.4" fill="none" stroke="var(--warm)" stroke-width="1.5"/>
  <g fill="var(--ink)"><circle cx="110" cy="180" r="4"/><circle cx="310" cy="80" r="4"/><circle cx="210" cy="130" r="4"/><circle cx="113.2" cy="74.1" r="4" fill="var(--warm)"/></g>
  <g font-size="13" font-weight="600">
    <text x="84" y="196">A(1, 2)</text><text x="316" y="74">B(5, 4)</text><text x="216" y="148">C(3, 3)</text><text x="86" y="62" fill="var(--warm)">P</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="420" y="70">(p − a)·(p − b) ＝ 0</text>
    <text x="420" y="104" fill="var(--sub)">(x − 1)(x − 5) ＋ (y − 2)(y − 4) ＝ 0</text>
    <text x="420" y="138" fill="var(--sub)">x² − 6x ＋ y² − 6y ＋ 13 ＝ 0</text>
    <text x="420" y="172" fill="var(--accent)">(x − 3)² ＋ (y − 3)² ＝ 5</text>
    <text x="420" y="220" fill="var(--warm)">円周上のどの P でも</text>
    <text x="420" y="244" fill="var(--warm)">AP と BP は垂直</text>
  </g>
</svg>
<figcaption>1目盛りは1。A(1, 2) と B(5, 4) を直径の両端とする円は中心 C(3, 3) ・半径 √5 である。円周上の点Pから A と B を見る角は直角で内積が0になる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 10</div>
<p>2点 \( A(1,2) \) ・ \( B(5,4) \) を直径の両端とする円の方程式を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( (\vec{p}-\vec{a})\cdot(\vec{p}-\vec{b})=0 \) を成分で書くと \( (x-1)(x-5)+(y-2)(y-4)=0 \)。<br>手順2 展開して \( x^2-6x+5+y^2-6y+8=0 \)。<br>手順3 平方完成して \( (x-3)^2+(y-3)^2=9+9-13=5 \)。<br>検算 中心は中点 \( (3,3) \) で半径は \( \dfrac{|\overrightarrow{AB}|}{2}=\dfrac{\sqrt{16+4}}{2}=\sqrt{5} \) と一致する。<br>答え \( (x-3)^2+(y-3)^2=5 \)</div></details></div>

<div class="ex"><div class="ex-h">例題 11</div>
<p>中心 \( C(1,2) \) ・半径5の円上の点 \( P_0(4,6) \) における接線の方程式を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( \vec{p_0}-\vec{c}=(3,4) \) で大きさは5なので \( P_0 \) は円周上にある。<br>手順2 接線は \( (3,4)\cdot(x-1,\ y-2)=25 \)。<br>手順3 展開して \( 3x-3+4y-8=25 \) から \( 3x+4y=36 \)。<br>検算 \( P_0 \) を代入すると \( 12+24=36 \)。<br>答え \( 3x+4y=36 \)</div></details></div>

<h2 id="s6">現実世界 2隻の船は衝突するか</h2>
<p>学習指導要領解説は直線のベクトル方程式を日常の問題に使う例として2隻の帆船の衝突を挙げている。帆船Aは位置 \( \vec{a} \) から速度 \( \vec{v_a} \) で進み帆船Bは位置 \( \vec{b} \) から速度 \( \vec{v_b} \) で進む。\( s \) 秒後のAの位置は \( \vec{a}+s\vec{v_a} \) で \( t \) 秒後のBの位置は \( \vec{b}+t\vec{v_b} \) である。</p>
<p>2本の航路の交点Cは \( \vec{a}+s\vec{v_a}=\vec{b}+t\vec{v_b} \) を解いて求まる。ただし交点があるだけでは衝突しない。<strong class="hit">衝突する条件は同じ時刻に交点に着くことで \( s=t \) である</strong>。</p>
<p>数値で確かめる。単位を km と時間とし \( \vec{a}=(0,0) \) ・ \( \vec{v_a}=(3,4) \) ・ \( \vec{b}=(10,0) \) ・ \( \vec{v_b}=(-2,4) \) とする。時刻 \( t \) の2隻の位置は \( (3t,4t) \) と \( (10-2t,4t) \) である。y成分は常に等しく x成分は \( 3t=10-2t \) の時に等しくなる。\( t=2 \) で2隻は点 \( (6,8) \) に同時に着き衝突する。Bの速度が \( (-2,5) \) なら航路の交点は存在するが同じ時刻には着かない。</p>
<p>解説はもう1つの見方も示している。時刻 \( k \) に衝突するなら \( \overrightarrow{AB}=k(\vec{v_a}-\vec{v_b}) \) が成り立つ。点Bから \( \vec{v_b}-\vec{v_a} \) の向きに引いた半直線の上に点Aがあるかを調べる方法である。2点間の距離 \( |(\vec{b}+t\vec{v_b})-(\vec{a}+t\vec{v_a})| \) の最小値を求めれば船の大きさを考えた衝突の判定にもなる。これは第2章の例題6と同じ最小値の計算である。</p>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">道が交わるだけでは会えない。同じ時刻に交点にいて初めて会える</p>
<p>2人の位置を \( \vec{a}+s\vec{u} \) と \( \vec{b}+t\vec{v} \) で書くと交点は \( s \) と \( t \) が異なっても存在する。出会うには \( s=t \) が要る。</p>
</aside>

<h2 id="s7">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 内分点</div>
<p class="qz-q">2点 \( A(\vec{a}) \) ・ \( B(\vec{b}) \) を結ぶ線分ABを \( 3:1 \) に内分する点の位置ベクトルを1つ選べ。</p>
<ol><li>\( \dfrac{3\vec{a}+\vec{b}}{4} \)</li><li>\( \dfrac{\vec{a}+3\vec{b}}{4} \)</li><li>\( \dfrac{\vec{a}+3\vec{b}}{2} \)</li><li>\( \dfrac{-\vec{a}+3\vec{b}}{2} \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。Bの係数が \( m=3 \) でAの係数が \( n=1 \) である。4 は \( 3:1 \) の外分点である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 外分点</div>
<p class="qz-q">\( A(2,1) \) ・ \( B(4,5) \) を結ぶ線分ABを \( 3:1 \) に外分する点の座標を求めよ。</p>
<ol><li>\( (3,3) \)</li><li>\( (5,7) \)</li><li>\( (7,11) \)</li><li>\( (1,-1) \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( \dfrac{-1\cdot(2,1)+3(4,5)}{3-1}=\dfrac{(10,14)}{2}=(5,7) \)。検算 \( \overrightarrow{AQ}=(3,6) \) は \( \overrightarrow{AB}=(2,4) \) の \( \dfrac{3}{2} \) 倍で AQ 対 QB ＝ 3 対 1 である。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 重心</div>
<p class="qz-q">\( A(2,1) \) ・ \( B(5,4) \) ・ \( C(-1,7) \) を頂点とする三角形の重心の座標を求めよ。</p>
<ol><li>\( (2,4) \)</li><li>\( (3,6) \)</li><li>\( (2,3) \)</li><li>\( (6,12) \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。\( \left(\dfrac{2+5-1}{3},\ \dfrac{1+4+7}{3}\right)=(2,4) \)。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 2直線の交点</div>
<p class="qz-q">三角形OABで辺OAの中点をC・辺OBを \( 2:1 \) に内分する点をDとし線分ADとBCの交点をPとする。\( \overrightarrow{OA}=\vec{a} \) ・ \( \overrightarrow{OB}=\vec{b} \) として \( \overrightarrow{OP} \) を求めよ。</p>
<ol><li>\( \dfrac{1}{3}\vec{a}+\dfrac{1}{3}\vec{b} \)</li><li>\( \dfrac{1}{4}\vec{a}+\dfrac{1}{2}\vec{b} \)</li><li>\( \dfrac{1}{2}\vec{a}+\dfrac{1}{4}\vec{b} \)</li><li>\( \dfrac{1}{5}\vec{a}+\dfrac{2}{5}\vec{b} \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。AD上で \( (1-s)\vec{a}+\dfrac{2s}{3}\vec{b} \) ・ BC上で \( \dfrac{t}{2}\vec{a}+(1-t)\vec{b} \)。係数比較で \( 1-s=\dfrac{t}{2} \) ・ \( \dfrac{2s}{3}=1-t \)。2式目から \( t=1-\dfrac{2s}{3} \) を代入して \( 1-s=\dfrac{1}{2}-\dfrac{s}{3} \) から \( s=\dfrac{3}{4} \) ・ \( t=\dfrac{1}{2} \)。\( \overrightarrow{OP}=\dfrac{1}{4}\vec{a}+\dfrac{1}{2}\vec{b} \)。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 点と直線の距離</div>
<p class="qz-q">点 \( (2,-1) \) を通り \( \vec{n}=(1,3) \) を法線ベクトルとする直線と点 \( (1,1) \) の距離を求めよ。</p>
<ol><li>\( \dfrac{\sqrt{10}}{10} \)</li><li>\( \dfrac{\sqrt{10}}{2} \)</li><li>\( \sqrt{10} \)</li><li>\( \dfrac{3\sqrt{10}}{10} \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。直線は \( (x-2)+3(y+1)=0 \) すなわち \( x+3y+1=0 \)。距離は \( \dfrac{|1+3+1|}{\sqrt{10}}=\dfrac{5}{\sqrt{10}}=\dfrac{\sqrt{10}}{2} \)。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 存在範囲の面積</div>
<p class="qz-q">\( \overrightarrow{OA}=(2,0) \) ・ \( \overrightarrow{OB}=(0,3) \) とする。\( \overrightarrow{OP}=s\overrightarrow{OA}+t\overrightarrow{OB} \) で \( s+t\le2 \) ・ \( s\ge0 \) ・ \( t\ge0 \) の時Pの存在範囲の面積を求めよ。</p>
<ol><li>3</li><li>6</li><li>12</li><li>24</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\( \overrightarrow{OP}=\dfrac{s}{2}(2\overrightarrow{OA})+\dfrac{t}{2}(2\overrightarrow{OB}) \) と書き直すと係数の和が1以下である。範囲は O ・ \( (4,0) \) ・ \( (0,6) \) を頂点とする三角形で面積は \( \dfrac{1}{2}\times4\times6=12 \)。三角形OABの面積3の4倍である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 円のベクトル方程式</div>
<p class="qz-q">2点 \( A(-1,0) \) ・ \( B(3,2) \) について \( (\vec{p}-\vec{a})\cdot(\vec{p}-\vec{b})=0 \) を満たす点Pの集まりはどれか。</p>
<ol><li>中心 \( (1,1) \) ・半径 \( \sqrt{5} \) の円</li><li>中心 \( (1,1) \) ・半径 \( 2\sqrt{5} \) の円</li><li>線分ABの垂直二等分線</li><li>中心 \( (2,2) \) ・半径 \( \sqrt{5} \) の円</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。ABを直径とする円で中心は中点 \( (1,1) \)。半径は \( \dfrac{\sqrt{16+4}}{2}=\sqrt{5} \)。展開しても \( (x+1)(x-3)+y(y-2)=0 \) から \( (x-1)^2+(y-1)^2=5 \) となる。</div></details></div>

<h2 id="s8">この章の要点</h2>
<div class="tb-key"><b>要点</b>
\( \overrightarrow{AB}=\vec{b}-\vec{a} \) で全部の矢印を基準点からのベクトルに直す。<br>
内分 \( \dfrac{n\vec{a}+m\vec{b}}{m+n} \) ・外分 \( \dfrac{-n\vec{a}+m\vec{b}}{m-n} \) ・重心 \( \dfrac{\vec{a}+\vec{b}+\vec{c}}{3} \)。<br>
Cが直線AB上 \( \iff\vec{c}=s\vec{a}+t\vec{b} \) で \( s+t=1 \)。<br>
交点は2通りに表し1次独立を確かめて係数を比べる。<br>
直線 \( \vec{p}=\vec{a}+t\vec{d} \) ・法線形 \( \vec{n}\cdot(\vec{p}-\vec{a})=0 \)。\( ax+by+c=0 \) の法線は \( (a,b) \)。<br>
円 \( |\vec{p}-\vec{c}|=r \) ・直径ABの円 \( (\vec{p}-\vec{a})\cdot(\vec{p}-\vec{b})=0 \)。</div>

<h2 id="s9">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>船を点とみなし速度を一定とするモデルで、衝突の判定はどこまで信頼できるか。</strong> 本文は同じ時刻に交点に着くこと \( s=t \) を衝突の条件とした。船の大きさを考える場合は2点間の距離の最小値で判定するとも述べており、どこまでの近似で足りるかは判定の目的によって異なる。</li>
<li class="tb-vnote"><strong>直線を表す式として、媒介変数を使うベクトル方程式と法線ベクトルを使う方程式のどちらが直線の性質をよく表すか。</strong> 媒介変数の式は \( t \) を動かすと点が直線上を動く様子を表す。法線ベクトルの式は垂直という条件を満たす点の集まりとして直線を表し、2つの式は同じ直線を異なる見方で表す。</li>
</ul>

<h2 id="s10">出典</h2>
<ol>
<li>高等学校学習指導要領 平成30年告示 解説 数学編 理数編 数学C (1)ベクトル — https://www.mext.go.jp/content/20260115-mxt_kyoiku02-100002620_04.pdf</li>
<li>リセマム 2026年共通テスト 数学Ⅱ・B・C 講評 — https://resemom.jp/article/2026/01/18/84675.html</li>
<li>Position (geometry) — Wikipedia — https://en.wikipedia.org/wiki/Position_(geometry)</li>
<li>Menelaus's theorem — Wikipedia — https://en.wikipedia.org/wiki/Menelaus%27s_theorem</li>
<li>Distance from a point to a line — Wikipedia — https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line</li>
<li>Thales's theorem — Wikipedia — https://en.wikipedia.org/wiki/Thales%27s_theorem</li>
<li>Budget constraint — Wikipedia — https://en.wikipedia.org/wiki/Budget_constraint</li>
</ol>
