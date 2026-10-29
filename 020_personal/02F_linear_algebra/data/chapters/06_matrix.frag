<!--meta
{"chapter": 6, "part": "大学の線形代数", "outside": true, "title": "行列と連立一次方程式", "thesis": "行列は数を長方形に並べた表であり連立一次方程式の係数をまとめて扱う道具である。積の定義は代入を2回続ける計算から決まる。掃き出し法で行列を簡単な形に変えると解が1つか無数か存在しないかを判定できる。", "verify": {"date": "2026-10-15", "checked": 38, "match": 33, "fixed": 5, "unconfirmed": 0}}
-->
<p>第1章から第4章ではベクトルを成分の組として扱い第5章では複素数の積を回転と拡大として扱った。この章から先は高校の学習指導要領の範囲外であり大学の1年生が学ぶ線形代数の入門である。平成11年告示の学習指導要領の数学Cには行列があり2×2の行列の演算と逆行列と連立一次方程式と点の移動を学んでいた。2012年度の高校入学生から適用された平成21年告示の学習指導要領で行列は数学Cから外れて新設の数学活用に移り数学Ⅲに複素数平面が加わった。現行の平成30年告示の学習指導要領では行列は数学Cの数学的な表現の工夫の中で表現の方法として扱われるだけである。この章の逆行列・掃き出し法・ランクはその範囲を超える。</p>
<p>この章では行列の和と積を定義し積がなぜその形に定められたのかを示す。続いて逆行列と連立一次方程式の行列表示を扱う。最後に掃き出し法で解の個数を判定する。ここで身につける計算は第7章の線形変換と第8章の固有値の前提になる。共通テストには出題されないが経済学の産業連関分析や計量経済学の回帰分析はすべてこの計算の上に成り立つ。</p>

<h2 id="s1">行列の定義と和とスカラー倍</h2>
<p>数を長方形に並べて括弧でくくったものを<strong>行列</strong>と呼ぶ。横の並びを<strong>行</strong>・縦の並びを<strong>列</strong>と呼ぶ。m 個の行と n 個の列をもつ行列を m×n 行列と呼ぶ。行の数と列の数が等しい行列を正方行列と呼ぶ。上から i 番目の行と左から j 番目の列が交わる位置の数を (i, j) 成分と呼び \(a_{ij}\) と書く。</p>
\[ A=\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \end{pmatrix}\qquad (2\times 3 \text{ 行列}) \]
<p>1行だけの行列を行ベクトル・1列だけの行列を列ベクトルと呼ぶ。第1章の平面ベクトル \((a_1, a_2)\) は 1×2 行列または 2×1 行列とみなせる。この本では以後ベクトルを列ベクトルで書く。</p>
<p>2つの行列が等しいのは型が同じで対応する成分がすべて等しいときである。<strong>和</strong>は同じ型の行列どうしで対応する成分を足して定める。<strong>スカラー倍</strong>はすべての成分に同じ実数を掛けて定める。型が異なる行列の和は定義しない。</p>
\[ \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}+\begin{pmatrix} 5 & 0 \\ -1 & 2 \end{pmatrix}=\begin{pmatrix} 6 & 2 \\ 2 & 6 \end{pmatrix},\qquad 3\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}=\begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix} \]
<p>すべての成分が0の行列を<strong>零行列</strong>と呼び O と書く。和とスカラー倍については数の計算と同じ法則が成り立つ。\(A+B=B+A\) と \((A+B)+C=A+(B+C)\) と \(k(A+B)=kA+kB\) である。成分ごとの計算なので数の法則がそのまま成分に当てはまるからである。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>\(A=\begin{pmatrix} 2 & -1 \\ 0 & 3 \end{pmatrix}\) と \(B=\begin{pmatrix} 1 & 4 \\ -2 & 1 \end{pmatrix}\) について \(2A-B\) を求めよ。</p>
<details open><summary>解き方</summary><div>\(2A=\begin{pmatrix} 4 & -2 \\ 0 & 6 \end{pmatrix}\) である。<br>成分ごとに B を引く。(1,1) 成分は \(4-1=3\) で (1,2) 成分は \(-2-4=-6\) である。<br>(2,1) 成分は \(0-(-2)=2\) で (2,2) 成分は \(6-1=5\) である。<br>答えは \(\begin{pmatrix} 3 & -6 \\ 2 & 5 \end{pmatrix}\) である。</div></details></div>

<h2 id="s2">行列の積とその定義の理由</h2>
<p>行列の積は成分ごとの掛け算ではない。A が m×n 行列で B が n×p 行列のとき積 AB は m×p 行列であり (i, j) 成分は次の式で定める。</p>
\[ (AB)_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{in}b_{nj} \]
<p><strong class="hit">A の第 i 行と B の第 j 列を成分ごとに掛けて足す</strong>。これは第2章の内積の計算と同じ形である。A の列の数と B の行の数が等しくなければ積は定義できない。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 230" role="img" aria-label="A の第1行と B の第2列の内積が AB の 1 2 成分になる">
  <g font-size="15" text-anchor="middle" fill="var(--ink)">
    <rect x="40" y="70" width="140" height="40" rx="6" fill="var(--warm)" fill-opacity="0.15" stroke="var(--warm)"/>
    <text x="75" y="96">1</text><text x="145" y="96">2</text>
    <text x="75" y="146">3</text><text x="145" y="146">4</text>
    <path d="M44 62 Q30 115 44 168" fill="none" stroke="var(--ink)" stroke-width="1.5"/><path d="M176 62 Q190 115 176 168" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
    <text x="110" y="200" font-size="13" fill="var(--sub)">A</text>
    <text x="215" y="122">×</text>
    <rect x="320" y="66" width="56" height="90" rx="6" fill="var(--cool)" fill-opacity="0.15" stroke="var(--cool)"/>
    <text x="278" y="96">5</text><text x="348" y="96">6</text>
    <text x="278" y="146">7</text><text x="348" y="146">8</text>
    <path d="M254 62 Q240 115 254 168" fill="none" stroke="var(--ink)" stroke-width="1.5"/><path d="M386 62 Q400 115 386 168" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
    <text x="313" y="200" font-size="13" fill="var(--sub)">B</text>
    <text x="425" y="122">=</text>
    <rect x="530" y="72" width="56" height="36" rx="6" fill="var(--accent)" fill-opacity="0.18" stroke="var(--accent)"/>
    <text x="490" y="96">19</text><text x="558" y="96" font-weight="700">22</text>
    <text x="490" y="146">43</text><text x="558" y="146">50</text>
    <path d="M464 62 Q450 115 464 168" fill="none" stroke="var(--ink)" stroke-width="1.5"/><path d="M596 62 Q610 115 596 168" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
    <text x="530" y="200" font-size="13" fill="var(--sub)">AB</text>
  </g>
  <text x="360" y="34" font-size="14" text-anchor="middle" fill="var(--ink)">(1, 2) 成分 ＝ 1 × 6 ＋ 2 × 8 ＝ 22</text>
  <text x="625" y="96" font-size="12.5" fill="var(--sub)">第1行 × 第2列</text>
</svg>
<figcaption>AB の (1, 2) 成分は A の第1行 (1, 2) と B の第2列 (6, 8) を成分ごとに掛けて足した値である。残りの3つの成分も同じ規則で 1×5＋2×7＝19 と 3×5＋4×7＝43 と 3×6＋4×8＝50 になる。</figcaption>
</figure>

<p>この定義には理由がある。2段階の代入を1回の計算にまとめるためである。変数 \(x_1, x_2\) から \(y_1, y_2\) を作り さらに \(y_1, y_2\) から \(z_1, z_2\) を作る場面を考える。</p>
\[ \begin{cases} y_1=a x_1+b x_2 \\ y_2=c x_1+d x_2 \end{cases}\qquad \begin{cases} z_1=p y_1+q y_2 \\ z_2=r y_1+s y_2 \end{cases} \]
<p>右の式に左の式を代入して \(z_1\) を \(x_1, x_2\) で表す。</p>
\[ z_1=p(a x_1+b x_2)+q(c x_1+d x_2)=(pa+qc)x_1+(pb+qd)x_2 \]
<p>\(x_1\) の係数 \(pa+qc\) は2つ目の係数の表の第1行 \((p, q)\) と1つ目の表の第1列 \((a, c)\) の内積である。\(z_2\) も同じ形になる。つまり \(\boldsymbol{y}=A\boldsymbol{x}\) と \(\boldsymbol{z}=B\boldsymbol{y}\) から \(\boldsymbol{z}=(BA)\boldsymbol{x}\) を得る。<strong class="hit">行列の積は代入の合成を表すように定めた演算である</strong>。第7章ではこの代入を平面の点の移動として見る。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>2店舗で2種類の商品を販売する。1日の販売数を行列 \(Q=\begin{pmatrix} 30 & 20 \\ 10 & 40 \end{pmatrix}\) で表す。行は店舗で列は商品である。単価を列ベクトル \(\boldsymbol{p}=\begin{pmatrix} 200 \\ 500 \end{pmatrix}\) とする。各店舗の売上を求めよ。</p>
<details open><summary>解き方</summary><div>売上は販売数と単価の積の和なので \(Q\boldsymbol{p}\) で求まる。<br>第1行は \(30\times 200+20\times 500=6000+10000=16000\) である。<br>第2行は \(10\times 200+40\times 500=2000+20000=22000\) である。<br>答えは店舗1が 16,000 円・店舗2が 22,000 円である。</div></details></div>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">行列の積は請求書の作成である</p>
<p>数量の表の行と単価の列を掛けて足すと各店舗の売上が求まる。表の列の項目と相手の行の項目が一致しないと積が定義できないのも請求書と同じである。</p>
</aside>

<h2 id="s3">積は交換法則を満たさない</h2>
<p>数の掛け算では \(ab=ba\) が成り立つ。行列の積では一般に \(AB\neq BA\) である。次の例で確かめる。</p>
\[ A=\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix},\ B=\begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\quad\Rightarrow\quad AB=\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix},\ BA=\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} \]
<p>理由は第2節の代入の見方から明らかである。AB は先に B の代入を行い次に A の代入を行う計算である。2つの操作の順序を入れ替えると一般に結果が異なる。型の面でも 2×3 行列 A と 3×2 行列 B では AB が 2×2 で BA が 3×3 になり比較すらできない。</p>
<p>結合法則 \((AB)C=A(BC)\) と分配法則 \(A(B+C)=AB+AC\) は成り立つ。交換法則だけが成り立たないので数の公式をそのまま使うと誤る。代表的な例が展開公式である。</p>
\[ (A+B)^2=A^2+AB+BA+B^2 \]
<p>\(AB=BA\) が成り立つ特別な場合を除き \(A^2+2AB+B^2\) にはならない。</p>
<p>もう1つ数と異なる性質がある。O でない2つの行列の積が O になる場合がある。</p>
\[ \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}=\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \]
<p>したがって \(AB=O\) から \(A=O\) または \(B=O\) を結論できない。数の \(ab=0\) から \(a=0\) または \(b=0\) を導く議論は行列では使えない。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>\(A=\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\) と \(B=\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}\) について AB と BA を求めて比べよ。</p>
<details open><summary>解き方</summary><div>AB の第1行は \((1\cdot 2+2\cdot 0,\ 1\cdot 0+2\cdot 3)=(2, 6)\) である。第2行は \((0, 3)\) である。<br>BA の第1行は \((2\cdot 1+0\cdot 0,\ 2\cdot 2+0\cdot 1)=(2, 4)\) である。第2行は \((0, 3)\) である。<br>\(AB=\begin{pmatrix} 2 & 6 \\ 0 & 3 \end{pmatrix}\) と \(BA=\begin{pmatrix} 2 & 4 \\ 0 & 3 \end{pmatrix}\) で (1,2) 成分が異なる。</div></details></div>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">行列の積は打順と同じで入れ替えると結果が変わる</p>
<p>四球の後に本塁打なら2点で本塁打の後に四球なら1点である。同じ2つの操作でも順序が結果を決める。</p>
</aside>

<h2 id="s4">単位行列と逆行列</h2>
<p>対角線上の成分が1でそれ以外が0の正方行列を<strong>単位行列</strong>と呼び E または I と書く。2×2 では \(E=\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}\) である。どの行列 A についても \(AE=EA=A\) が成り立つ。数の1と同じ役割である。</p>
<p>正方行列 A に対して \(AX=XA=E\) を満たす行列 X が存在するとき X を A の<strong>逆行列</strong>と呼び \(A^{-1}\) と書く。数の逆数に当たる。2×2 の場合は次の計算から公式が得られる。</p>
\[ \begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}=\begin{pmatrix} ad-bc & 0 \\ 0 & ad-bc \end{pmatrix}=(ad-bc)E \]
<p>右辺が E の \((ad-bc)\) 倍なので両辺を \(ad-bc\) で割れば逆行列になる。</p>
\[ A^{-1}=\frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}\qquad (ad-bc\neq 0) \]
<p>\(ad-bc\) を A の<strong>行列式</strong>と呼び \(\det A\) または \(|A|\) と書く。<strong class="hit">\(\det A\neq 0\) のときに限り A は逆行列をもつ</strong>。\(\det A=0\) のときに逆行列が存在しない理由は第7章で図形から示す。</p>
<p>逆行列については \((AB)^{-1}=B^{-1}A^{-1}\) が成り立つ。順序が逆になる。\((AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AEA^{-1}=AA^{-1}=E\) と確かめられる。靴下を履いてから靴を履いた場合に脱ぐ順序は靴が先で靴下が後になるのと同じ構造である。</p>

<div class="ex"><div class="ex-h">例題 4</div>
<p>\(A=\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}\) の逆行列を求めよ。</p>
<details open><summary>解き方</summary><div>行列式は \(3\times 2-1\times 5=1\) で0でない。<br>公式に代入して \(A^{-1}=\dfrac{1}{1}\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}\) である。<br>検算する。\(AA^{-1}\) の (1,1) 成分は \(3\cdot 2+1\cdot(-5)=1\) で (1,2) 成分は \(3\cdot(-1)+1\cdot 3=0\) である。<br>残りの成分も \(5\cdot 2+2\cdot(-5)=0\) と \(5\cdot(-1)+2\cdot 3=1\) で E になる。</div></details></div>

<p>典型的な誤りは公式の符号と位置の取り違えである。a と d は入れ替え b と c は符号だけ変える。入れ替えるのは対角線上の2つだけである。求めた後に A と掛けて E になるかを必ず検算する。</p>

<h2 id="s5">連立一次方程式の行列表示</h2>
<p>連立一次方程式は行列と列ベクトルの積で書ける。</p>
\[ \begin{cases} ax+by=p \\ cx+dy=q \end{cases}\iff \begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix}=\begin{pmatrix} p \\ q \end{pmatrix} \]
<p>左の行列を<strong>係数行列</strong>と呼ぶ。式全体を \(A\boldsymbol{x}=\boldsymbol{b}\) と書く。A が逆行列をもつなら両辺に左から \(A^{-1}\) を掛けて解が1つに定まる。</p>
\[ \boldsymbol{x}=A^{-1}\boldsymbol{b} \]
<p>左から掛けることが重要である。行列の積は交換法則を満たさないので \(\boldsymbol{b}A^{-1}\) としてはならない。そもそも 2×1 行列と 2×2 行列の積はこの順序では定義できない。</p>
<p>行列表示には2通りの読み取り方がある。1つ目は行ごとに読む方法で各式を平面上の直線とみなし交点を求める。2つ目は列ごとに読む方法である。\(A\boldsymbol{x}\) は A の列ベクトル \(\boldsymbol{a}_1, \boldsymbol{a}_2\) を使って次のように書ける。</p>
\[ A\boldsymbol{x}=x\,\boldsymbol{a}_1+y\,\boldsymbol{a}_2 \]
<p>連立方程式を解くことは <strong>b を列ベクトルの和で表す係数 x と y を求めること</strong>である。第3章で学んだ \(\vec{p}=s\vec{a}+t\vec{b}\) の係数を求める計算と同じである。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 320" role="img" aria-label="ベクトル 3 1 を列ベクトル 1 1 の2倍と 1 マイナス1 の1倍の和で表す">
  <defs>
    <marker id="ah06a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah06b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
    <marker id="ah06c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  </defs>
  <g stroke="var(--line)"><line x1="320" y1="40" x2="320" y2="300"/><line x1="380" y1="40" x2="380" y2="300"/><line x1="440" y1="40" x2="440" y2="300"/><line x1="200" y1="50" x2="480" y2="50"/><line x1="200" y1="110" x2="480" y2="110"/><line x1="200" y1="170" x2="480" y2="170"/><line x1="200" y1="290" x2="480" y2="290"/></g>
  <line x1="190" y1="230" x2="490" y2="230" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="260" y1="306" x2="260" y2="30" stroke="var(--ink)" stroke-width="1.5"/>
  <g font-size="12" fill="var(--muted)" text-anchor="middle"><text x="320" y="246">1</text><text x="380" y="246">2</text><text x="440" y="246">3</text><text x="250" y="246">O</text></g>
  <g font-size="12" fill="var(--muted)" text-anchor="end"><text x="254" y="174">1</text><text x="254" y="114">2</text><text x="254" y="294">−1</text></g>
  <line x1="260" y1="230" x2="318" y2="172" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah06a)"/>
  <line x1="260" y1="230" x2="318" y2="288" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah06b)"/>
  <line x1="320" y1="170" x2="378" y2="112" stroke="var(--warm)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah06a)"/>
  <line x1="380" y1="110" x2="438" y2="168" stroke="var(--cool)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah06b)"/>
  <line x1="260" y1="230" x2="437" y2="171" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah06c)"/>
  <circle cx="440" cy="170" r="5" fill="var(--accent)"/>
  <g font-size="13" font-weight="600">
    <text x="252" y="150" fill="var(--warm)" text-anchor="end">a₁ = (1, 1)</text>
    <text x="300" y="306" fill="var(--cool)">a₂ = (1, −1)</text>
    <text x="448" y="190" fill="var(--accent)">b = (3, 1)</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="540" y="100">x + y = 3</text><text x="540" y="122">x − y = 1</text>
    <text x="540" y="160">b = 2a₁ + 1a₂</text>
    <text x="540" y="190">解は x = 2 と y = 1</text>
  </g>
</svg>
<figcaption>連立方程式 x＋y＝3 と x−y＝1 を列ごとに見る。b＝(3, 1) に到達するには a₁ を2回進んでから a₂ を1回進めばよい。その回数 2 と 1 が解である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 5</div>
<p>連立方程式 \(3x+y=4\) と \(5x+2y=7\) を逆行列で解け。</p>
<details open><summary>解き方</summary><div>係数行列は例題4の A である。\(A^{-1}=\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}\) である。<br>\(\boldsymbol{x}=A^{-1}\begin{pmatrix} 4 \\ 7 \end{pmatrix}\) を計算する。<br>第1成分は \(2\cdot 4-1\cdot 7=1\) で第2成分は \(-5\cdot 4+3\cdot 7=1\) である。<br>答えは \(x=1,\ y=1\) である。代入すると \(3+1=4\) と \(5+2=7\) で成り立つ。</div></details></div>

<h2 id="s6">掃き出し法</h2>
<p>逆行列の公式は 2×2 なら簡単であるが未知数が増えると計算量が急に増える。実際に連立一次方程式を解く標準の方法は<strong>掃き出し法</strong>である。<strong>ガウスの消去法</strong>とも呼ぶ。中学で学んだ加減法を行列の上で機械的に実行する手順である。コンピュータで大きな連立方程式を解く時は、誤差を抑える工夫を加えた LU 分解や反復法を使う。</p>
<p>係数行列の右に定数項の列を付け加えた行列を<strong>拡大係数行列</strong>と呼ぶ。この行列に次の3種類の操作を行う。これを<strong>行基本変形</strong>と呼ぶ。</p>
<div class="tb-tw"><table>
<thead><tr><th>操作</th><th>方程式で言うと</th><th>解が変わらない理由</th></tr></thead>
<tbody>
<tr><td>2つの行を入れ替える</td><td>式を書く順序を変える</td><td>同じ式の組のままである</td></tr>
<tr><td>1つの行を0でない数で割る</td><td>式の両辺を同じ数で割る</td><td>同じ数を掛ければ元に戻せる</td></tr>
<tr><td>1つの行に別の行の定数倍を加える</td><td>加減法で文字を消す</td><td>同じ定数倍を引けば元に戻せる</td></tr>
</tbody></table></div>
<p><strong class="hit">3つの操作はどれも逆の操作で元に戻せるので解の集合を変えない</strong>。この性質があるから変形の後の簡単な式から元の方程式の解が求まる。</p>

<div class="ex"><div class="ex-h">例題 6</div>
<p>次の連立方程式を掃き出し法で解け。<br>\(x+y+z=2\) ／ \(2x+3y+z=1\) ／ \(x-y+2z=6\)</p>
<details open><summary>解き方</summary><div>拡大係数行列を書く。最後の列が定数項である。\(\left(\begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 2 & 3 & 1 & 1 \\ 1 & -1 & 2 & 6 \end{array}\right)\)<br>
第2行から第1行の2倍を引き第3行から第1行を引く。\(\left(\begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & -1 & -3 \\ 0 & -2 & 1 & 4 \end{array}\right)\)<br>
第3行に第2行の2倍を足す。\(\left(\begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & -1 & -3 \\ 0 & 0 & -1 & -2 \end{array}\right)\)<br>
第3行を −1 で割ると \(z=2\) である。<br>
第2行と第1行に第3行を使って z を消す。第2行に第3行を足すと \(y=-1\) である。第1行から第3行を引くと \(x+y=0\) である。<br>
第1行から第2行を引くと \(x=1\) である。<br>
最終形は \(\left(\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & -1 \\ 0 & 0 & 1 & 2 \end{array}\right)\) で答えは \(x=1,\ y=-1,\ z=2\) である。<br>
検算する。\(1-1+2=2\) ／ \(2-3+2=1\) ／ \(1+1+4=6\) である。</div></details></div>

<p>手順は2段階に分かれる。前半は左下の成分を0にして階段の形を作る。これを前進消去と呼ぶ。後半は下の行から順に未知数を確定して上の行へ代入する。これを後退代入と呼ぶ。最終形まで変形する方法を掃き出し法と呼ぶ教科書もある。</p>
<p>逆行列も同じ手順で求まる。\(\left(A\mid E\right)\) を行基本変形して左半分を E にすると右半分が \(A^{-1}\) になる。3×3 以上の逆行列はこの方法で計算する。</p>
<p>典型的な誤りは列に対する操作を混ぜることである。連立方程式を解くときに使ってよいのは行の操作だけである。列を入れ替えると未知数の対応がずれる。また定数項の列にも同じ操作を行うことを忘れやすい。</p>

<aside class="an an-biz"><b>スタートアップで言えば</b>
<p class="an-h">掃き出し法は株主名簿の整理と同じで1人ずつ確定させる</p>
<p>階段の形を作った後は最下行の1変数が確定しそこから上へ順に確定する。最初から全員を同時に決めようとしない。</p>
</aside>

<h2 id="s7">解が1つか無数かなしか ランクの入口</h2>
<p>2元の連立一次方程式を行ごとに見ると2本の直線である。2本の直線の位置関係は3通りしかない。交わる・平行で離れている・一致するの3通りである。それぞれ解は1つ・なし・無数になる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 290" role="img" aria-label="2本の直線が交わる場合と平行な場合と一致する場合">
  <g font-size="13" fill="var(--ink)" text-anchor="middle"><text x="125" y="30">交わる 解は1つ</text><text x="365" y="30">平行 解はなし</text><text x="605" y="30">一致 解は無数</text></g>
  <g stroke="var(--ink)" stroke-width="1.2">
    <line x1="40" y1="200" x2="210" y2="200"/><line x1="60" y1="240" x2="60" y2="80"/>
    <line x1="280" y1="200" x2="450" y2="200"/><line x1="300" y1="240" x2="300" y2="80"/>
    <line x1="520" y1="200" x2="690" y2="200"/><line x1="540" y1="240" x2="540" y2="80"/>
  </g>
  <g stroke="var(--line)"><line x1="236" y1="44" x2="236" y2="270"/><line x1="476" y1="44" x2="476" y2="270"/></g>
  <line x1="45" y1="95" x2="180" y2="230" stroke="var(--warm)" stroke-width="2.5"/>
  <line x1="60" y1="230" x2="195" y2="95" stroke="var(--cool)" stroke-width="2.5"/>
  <circle cx="120" cy="170" r="5" fill="var(--accent)"/>
  <text x="150" y="150" font-size="12.5" fill="var(--accent)">交点 (2, 1)</text>
  <line x1="285" y1="95" x2="420" y2="230" stroke="var(--warm)" stroke-width="2.5"/>
  <line x1="285" y1="155" x2="360" y2="230" stroke="var(--cool)" stroke-width="2.5"/>
  <line x1="525" y1="95" x2="660" y2="230" stroke="var(--warm)" stroke-width="5" stroke-opacity="0.5"/>
  <line x1="525" y1="95" x2="660" y2="230" stroke="var(--cool)" stroke-width="2" stroke-dasharray="7 5"/>
  <g font-size="12.5" fill="var(--sub)">
    <text x="30" y="262">x + y = 3 と x − y = 1</text>
    <text x="270" y="262">x + y = 3 と x + y = 1</text>
    <text x="510" y="262">x + y = 3 と 2x + 2y = 6</text>
  </g>
</svg>
<figcaption>目盛りは各図とも1目盛り30ピクセルで原点は左下の軸の交点である。左は1点 (2, 1) で交わる。中央は傾きが等しく切片が異なるので共有点がない。右の2式は一方が他方の2倍で同じ直線を表す。</figcaption>
</figure>

<p>この区別を掃き出し法の結果から行う。行基本変形で階段の形にしたとき0でない成分を含む行の数をその行列の<strong>ランク</strong>または階数と呼び rank A と書く。ランクは行基本変形の手順によらず1つに定まることが知られている。係数行列 A と拡大係数行列 \((A\mid\boldsymbol{b})\) のランクを比べると次のように判定できる。未知数の個数を n とする。</p>
<div class="tb-tw"><table>
<thead><tr><th>ランクの関係</th><th>解</th><th>階段の形の特徴</th></tr></thead>
<tbody>
<tr><td>rank A ＜ rank (A | b)</td><td>なし</td><td>左が全部0で右だけ0でない行がある。0＝c の矛盾</td></tr>
<tr><td>rank A ＝ rank (A | b) ＝ n</td><td>1つ</td><td>未知数ごとに1つずつ行がある</td></tr>
<tr><td>rank A ＝ rank (A | b) ＜ n</td><td>無数</td><td>n − rank A 個の未知数を自由に選べる</td></tr>
</tbody></table></div>
<p><strong class="hit">ランクは方程式の中で本当に独立な式の本数である</strong>。他の式の和や定数倍で作れる式は新しい情報を加えないので階段の形にすると 0 の行になる。</p>

<div class="ex"><div class="ex-h">例題 7</div>
<p>連立方程式 \(x+y+z=3\) ／ \(x+2y+3z=6\) ／ \(2x+3y+4z=9\) を解け。</p>
<details open><summary>解き方</summary><div>第2行から第1行を引くと \(y+2z=3\) である。<br>第3行から第1行の2倍を引くと \(y+2z=3\) である。<br>さらに第3行から第2行を引くと \(0=0\) の行になる。<br>rank A ＝ rank (A | b) ＝ 2 で未知数は3個なので解は無数である。<br>\(z=t\) と置くと \(y=3-2t\) で \(x=3-y-z=t\) である。<br>答えは \((x, y, z)=(t,\ 3-2t,\ t)\) で t は任意の実数である。<br>t＝0 の \((0, 3, 0)\) を代入すると 3・6・9 で3式とも成り立つ。</div></details></div>

<p>解が無数にある場合は答えを媒介変数 t で表す。これは第3章の直線のベクトル方程式と同じ形である。例題7の解は \((0, 3, 0)+t(1, -2, 1)\) と書けて空間内の1本の直線になる。</p>
<p>正方行列 A について次の4つは同値である。この同値関係は第7章と第8章で何度も使う。</p>
<div class="tb-tw"><table>
<thead><tr><th>同値な条件</th></tr></thead>
<tbody>
<tr><td>A は逆行列をもつ</td></tr>
<tr><td>\(\det A\neq 0\) である</td></tr>
<tr><td>rank A が行列の次数 n に等しい</td></tr>
<tr><td>\(A\boldsymbol{x}=\boldsymbol{0}\) の解は \(\boldsymbol{x}=\boldsymbol{0}\) だけである</td></tr>
</tbody></table></div>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">ランクが足りない表は合計しか残っていない集計表である</p>
<p>2部門の売上の合計と合計の2倍だけでは内訳を復元できない。式が2本あっても独立な情報は1本である。</p>
</aside>

<h2 id="s8">現実世界の行列 方程から産業連関表まで</h2>
<p>連立一次方程式を数の表で解く方法は古い。中国の数学書『九章算術』の第8章「方程」には係数を算木で表の形に並べて消去する手順が書かれている。成立時期は紀元前2世紀から紀元後1世紀ごろとされる。ヨーロッパではガウスが1810年の小惑星パラスの軌道の論文で最小二乗法の方程式をこの消去法で解く記法を示した。行列そのものを計算の対象とする理論は1858年のケイリーの論文「行列の理論に関する覚書」で整えられた。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>経済学者レオンチェフは産業どうしの取引を行列で表す投入産出分析を作り1973年のノーベル経済学賞を受けた。各産業の生産額を x・最終需要を d・投入係数行列を A とすると \(\boldsymbol{x}=A\boldsymbol{x}+\boldsymbol{d}\) である。生産額は \(\boldsymbol{x}=(E-A)^{-1}\boldsymbol{d}\) で求まる。日本の総務省などが作成する産業連関表はこの計算の基礎資料である。</p>
</aside>

<h2 id="s9">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 積の計算</div>
<p class="qz-q">\(A=\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\) と \(B=\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\) について AB として正しいものを1つ選べ。</p>
<ol><li>\(\begin{pmatrix} 0 & 2 \\ 3 & 0 \end{pmatrix}\)</li><li>\(\begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}\)</li><li>\(\begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}\)</li><li>\(\begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。AB の第1行は \((1\cdot 0+2\cdot 1,\ 1\cdot 1+2\cdot 0)=(2, 1)\) で第2行は \((4, 3)\) である。右から B を掛けると A の列が入れ替わる。3 は BA で行が入れ替わる。1 は成分ごとの積で誤りである。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 逆行列</div>
<p class="qz-q">\(\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}\) の逆行列を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \(\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}\) である。行列式は \(2\cdot 3-1\cdot 5=1\) である。検算すると (1,1) 成分は \(2\cdot 3+1\cdot(-5)=1\) で (1,2) 成分は \(2\cdot(-1)+1\cdot 2=0\) である。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 逆行列で解く</div>
<p class="qz-q">連立方程式 \(2x+y=5\) と \(5x+3y=13\) の解を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \(x=2,\ y=1\) である。問2の逆行列を使う。第1成分は \(3\cdot 5-1\cdot 13=2\) で第2成分は \(-5\cdot 5+2\cdot 13=1\) である。代入すると \(4+1=5\) と \(10+3=13\) で成り立つ。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 逆行列が存在しない条件</div>
<p class="qz-q">\(\begin{pmatrix} k & 2 \\ 3 & 6 \end{pmatrix}\) が逆行列をもたないような実数 k の値を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \(k=1\) である。行列式 \(6k-6\) が0になる条件である。k＝1 のとき第2行 (3, 6) は第1行 (1, 2) の3倍である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 掃き出し法</div>
<p class="qz-q">連立方程式 \(x+y+z=6\) ／ \(2x+y-z=1\) ／ \(x-y+2z=5\) の解の z の値を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \(z=3\) である。第2行から第1行の2倍を引くと \(-y-3z=-11\) である。第3行から第1行を引くと \(-2y+z=-1\) である。後の式から前の式の2倍を引くと \(7z=21\) で \(z=3\) である。\(y=2\) と \(x=1\) も求まる。代入すると 6・1・5 で3式とも成り立つ。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 解の個数</div>
<p class="qz-q">連立方程式 \(x+2y=3\) と \(2x+4y=k\) について正しいものを1つ選べ。</p>
<ol><li>どの k についても解は1つである</li><li>k＝6 のとき解は無数にありそれ以外のとき解はない</li><li>k＝6 のとき解はなくそれ以外のとき解は1つである</li><li>どの k についても解は無数にある</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。第2式から第1式の2倍を引くと \(0=k-6\) である。k＝6 なら 0＝0 で rank A ＝ rank (A | b) ＝ 1 ＜ 2 となり解は無数である。k≠6 なら矛盾で解はない。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ ランク</div>
<p class="qz-q">行列 \(\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 0 & 1 \end{pmatrix}\) のランクを求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 2 である。第2行から第1行の2倍を引くと0の行になる。第3行から第1行を引くと \((0, -2, -2)\) で0でない。行を入れ替えて階段の形にすると0でない行は2本である。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 行列の計算法則</div>
<p class="qz-q">2×2 行列 A と B について常に成り立つものを1つ選べ。ただし逆行列が現れる式では A と B がともに逆行列をもつとする。</p>
<ol><li>\((A+B)^2=A^2+2AB+B^2\)</li><li>\(AB=O\) ならば \(A=O\) または \(B=O\)</li><li>\((AB)^{-1}=B^{-1}A^{-1}\)</li><li>\((AB)^{-1}=A^{-1}B^{-1}\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\((AB)(B^{-1}A^{-1})=E\) となる。1 は AB＝BA のときしか成り立たない。2 は第3節の反例がある。4 は一般には順序が逆で成り立たない。</div></details></div>

<h2 id="s10">この章の要点</h2>
<div class="tb-key"><b>要点</b>
行列の積 AB の (i, j) 成分は A の第 i 行と B の第 j 列の内積である。A の列数と B の行数が等しいときだけ定義できる。<br>
積の定義は代入の合成を1回の計算にまとめるために決まった。<br>
AB と BA は一般に異なる。AB＝O でも A と B が O とは限らない。<br>
2×2 行列の逆行列は (1/(ad−bc)) (d, −b ; −c, a) で ad−bc≠0 のときだけ存在する。<br>
連立方程式は Ax＝b と書け A が逆行列をもてば x＝A⁻¹b である。<br>
掃き出し法の行基本変形は元に戻せるので解を変えない。<br>
ランクは独立な式の本数で A と (A | b) のランクの比較から解が1つか無数かなしかが定まる。</div>

<h2 id="s11">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>行列の積を成分ごとの掛け算で定めず、代入の合成に合わせて定めたのは自然な選択か。</strong> 本文は和とスカラー倍を成分ごとに定め、積だけを行と列の内積の形で定めた。積の形は代入を2回続ける計算から決まり、その代わりに交換法則が成り立たなくなった。</li>
</ul>

<h2 id="s12">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 数学編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Matrix (mathematics) — Wikipedia — https://en.wikipedia.org/wiki/Matrix_(mathematics)</li>
<li>Gaussian elimination — Wikipedia — https://en.wikipedia.org/wiki/Gaussian_elimination</li>
<li>Rank (linear algebra) — Wikipedia — https://en.wikipedia.org/wiki/Rank_(linear_algebra)</li>
<li>Fangcheng (mathematics) — Wikipedia — https://en.wikipedia.org/wiki/Fangcheng_(mathematics)</li>
<li>A Memoir on the Theory of Matrices — Philosophical Transactions of the Royal Society of London 1858 — https://royalsocietypublishing.org/doi/10.1098/rstl.1858.0002</li>
<li>Wassily Leontief Facts — NobelPrize.org — https://www.nobelprize.org/prizes/economic-sciences/1973/leontief/facts/</li>
<li>日本数学会 2015年 教育シンポジウム 森田康夫 発表資料 — https://www.mathsoc.jp/comm/kyoiku/sympo/pdf/2015_3_morita.pdf</li>
<li>文部科学省 行列入門 本教材について — https://www.mext.go.jp/content/20230828-mxt-kyoiku01_000250597_1.pdf</li>
<li>How Ordinary Elimination Became Gaussian Elimination — https://arxiv.org/abs/0907.2397</li>
<li>総務省 産業連関表 — https://www.soumu.go.jp/toukei_toukatsu/data/io/index.htm</li>
</ol>
