<!--meta
{"chapter": 7, "part": "大学の線形代数", "outside": true, "title": "線形変換と行列式", "thesis": "2×2 行列は平面の点を動かす規則であり2本の基本ベクトルの行き先だけで決まる。変換を続けて行うことは行列の積である。行列式は面積が何倍になるかを表し0なら平面が直線以下に縮んで元に戻せない。", "verify": {"date": "2026-10-15", "checked": 40, "match": 38, "fixed": 2, "unconfirmed": 0}}
-->
<p>第6章では行列の積を代入の合成として定めた。この章ではその代入を平面上の点の移動として描く。行列 A で点 \(\boldsymbol{x}\) を点 \(A\boldsymbol{x}\) に移すと平面全体が回転したり伸びたり傾いたりする。この見方を得ると第6章で結果だけを示した2つの事実に図形の理由が付く。積の順序を入れ替えると結果が変わる理由と行列式が0のとき逆行列がない理由である。</p>
<p>後半では行列式を面積と体積の拡大率として定め 3×3 の計算法を扱う。最後に第5章の複素数の積がこの章の行列の特別な場合であることを示す。高校の範囲外の内容である。1970年改訂の課程では一次変換の名称で扱い平成11年告示の数学Cでも行列による点の移動として一部を扱っていた。</p>

<h2 id="s1">線形変換の定義</h2>
<p>平面上の各点 \(\boldsymbol{x}\) に平面上の点 \(f(\boldsymbol{x})\) を1つずつ対応させる規則を平面の<strong>変換</strong>と呼ぶ。変換 f が次の2つの条件を満たすとき f を<strong>線形変換</strong>または一次変換と呼ぶ。</p>
\[ f(\boldsymbol{x}+\boldsymbol{y})=f(\boldsymbol{x})+f(\boldsymbol{y}),\qquad f(k\boldsymbol{x})=k\,f(\boldsymbol{x}) \]
<p>1つ目は和を移した点が移した点の和に等しいという条件である。2つ目は k 倍を移した点が移した点の k 倍に等しいという条件である。2つ目で k＝0 とすると \(f(\boldsymbol{0})=\boldsymbol{0}\) となる。<strong class="hit">線形変換は原点を動かさない</strong>。</p>
<p>線形変換は2つの基本ベクトル \(\boldsymbol{e}_1=(1,0)\) と \(\boldsymbol{e}_2=(0,1)\) の行き先だけで決まる。任意の点は \(\boldsymbol{x}=x\boldsymbol{e}_1+y\boldsymbol{e}_2\) と書けるので2つの条件から次が成り立つからである。</p>
\[ f(\boldsymbol{x})=x\,f(\boldsymbol{e}_1)+y\,f(\boldsymbol{e}_2) \]
<p>\(f(\boldsymbol{e}_1)=\begin{pmatrix} a \\ c \end{pmatrix}\) と \(f(\boldsymbol{e}_2)=\begin{pmatrix} b \\ d \end{pmatrix}\) とすると右辺は第6章の行列の積そのものである。</p>
\[ f(\boldsymbol{x})=\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} \]
<p><strong class="hit">行列の第1列は e₁ の行き先で第2列は e₂ の行き先である</strong>。この1行が線形変換の問題の出発点になる。逆にどの 2×2 行列 A についても \(\boldsymbol{x}\mapsto A\boldsymbol{x}\) は2つの条件を満たすので線形変換である。平面の線形変換と 2×2 行列は1対1に対応する。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>線形変換 f が \(f(\boldsymbol{e}_1)=(2,1)\) と \(f(\boldsymbol{e}_2)=(-1,3)\) を満たす。f を表す行列と点 (3, 2) の行き先を求めよ。</p>
<details open><summary>解き方</summary><div>行き先を列として並べる。行列は \(\begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}\) である。<br>\(f(3,2)=3(2,1)+2(-1,3)=(6-2,\ 3+6)\) である。<br>答えは (4, 9) である。</div></details></div>

<p>典型的な誤りは平行移動を線形変換とみなすことである。\(\boldsymbol{x}\mapsto\boldsymbol{x}+(1,0)\) は原点を (1, 0) に移すので線形変換ではない。2×2 行列だけでは平行移動を表せない。</p>

<h2 id="s2">行列が表す平面の変換</h2>
<p>第1節の原理から代表的な変換の行列が求まる。どれも e₁ と e₂ の行き先を列に並べるだけである。</p>
<div class="tb-tw"><table>
<thead><tr><th>変換</th><th>e₁ の行き先</th><th>e₂ の行き先</th><th>行列</th></tr></thead>
<tbody>
<tr><td>原点のまわりの角 θ の回転</td><td>(cosθ, sinθ)</td><td>(−sinθ, cosθ)</td><td>\(\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}\)</td></tr>
<tr><td>x 方向に k 倍・y 方向に l 倍の拡大</td><td>(k, 0)</td><td>(0, l)</td><td>\(\begin{pmatrix} k & 0 \\ 0 & l \end{pmatrix}\)</td></tr>
<tr><td>x 方向のせん断</td><td>(1, 0)</td><td>(1, 1)</td><td>\(\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\)</td></tr>
<tr><td>x 軸への正射影</td><td>(1, 0)</td><td>(0, 0)</td><td>\(\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}\)</td></tr>
<tr><td>x 軸に関する対称移動</td><td>(1, 0)</td><td>(0, −1)</td><td>\(\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\)</td></tr>
<tr><td>直線 y＝x に関する対称移動</td><td>(0, 1)</td><td>(1, 0)</td><td>\(\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\)</td></tr>
</tbody></table></div>
<p>回転の e₂ の行き先は e₂ が角 \(90^\circ\) の位置にあるので角 \(90^\circ+\theta\) の位置の \((\cos(90^\circ+\theta), \sin(90^\circ+\theta))=(-\sin\theta, \cos\theta)\) である。せん断は高さ y の点を y だけ横にずらす変換で正方形を平行四辺形に変える。正射影は各点から x 軸へ垂線を下ろした足に移す変換である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="単位正方形が回転と拡大とせん断と射影で移る先">
  <g font-size="13" fill="var(--ink)" text-anchor="middle"><text x="90" y="28">回転 90°</text><text x="270" y="28">x 方向に2倍</text><text x="450" y="28">せん断</text><text x="630" y="28">x 軸への射影</text></g>
  <g stroke="var(--line)"><line x1="180" y1="40" x2="180" y2="235"/><line x1="360" y1="40" x2="360" y2="235"/><line x1="540" y1="40" x2="540" y2="235"/></g>
  <g stroke="var(--ink)" stroke-width="1.2">
    <line x1="10" y1="180" x2="170" y2="180"/><line x1="75" y1="200" x2="75" y2="60"/>
    <line x1="190" y1="180" x2="350" y2="180"/><line x1="255" y1="200" x2="255" y2="60"/>
    <line x1="370" y1="180" x2="530" y2="180"/><line x1="435" y1="200" x2="435" y2="60"/>
    <line x1="550" y1="180" x2="710" y2="180"/><line x1="615" y1="200" x2="615" y2="60"/>
  </g>
  <g fill="none" stroke="var(--sub)" stroke-dasharray="4 3">
    <polygon points="75,180 125,180 125,130 75,130"/><polygon points="255,180 305,180 305,130 255,130"/>
    <polygon points="435,180 485,180 485,130 435,130"/><polygon points="615,180 665,180 665,130 615,130"/>
  </g>
  <g fill="var(--warm)" fill-opacity="0.25" stroke="var(--warm)" stroke-width="2">
    <polygon points="75,180 75,130 25,130 25,180"/>
    <polygon points="255,180 355,180 355,130 255,130"/>
    <polygon points="435,180 485,180 535,130 485,130"/>
  </g>
  <line x1="615" y1="180" x2="665" y2="180" stroke="var(--warm)" stroke-width="5"/>
  <g fill="var(--accent)"><circle cx="75" cy="130" r="4"/><circle cx="355" cy="180" r="4"/><circle cx="485" cy="180" r="4"/><circle cx="665" cy="180" r="4"/></g>
  <g fill="var(--cool)"><circle cx="25" cy="180" r="4"/><circle cx="255" cy="130" r="4"/><circle cx="485" cy="130" r="4"/><circle cx="615" cy="180" r="4" fill-opacity="0.6"/></g>
  <g font-size="12.5" fill="var(--sub)" text-anchor="middle">
    <text x="90" y="222">面積 1 倍</text><text x="270" y="222">面積 2 倍</text><text x="450" y="222">面積 1 倍</text><text x="630" y="222">面積 0 倍</text>
  </g>
</svg>
<figcaption>点線は元の単位正方形で色の付いた図形が移った先である。e₁ の行き先を青の点で e₂ の行き先を緑の点で示す。せん断は高さ1の辺を横に1ずらすので底辺と高さは変わらず面積も変わらない。射影では正方形が線分になり面積は0になる。</figcaption>
</figure>

<p>線形変換は直線を直線か1点に移す。直線 \(\boldsymbol{p}+t\boldsymbol{v}\) の行き先は \(A\boldsymbol{p}+tA\boldsymbol{v}\) で第3章の直線のベクトル方程式の形だからである。\(A\boldsymbol{v}=\boldsymbol{0}\) のときだけ1点になる。平行な2直線は平行な2直線か1本の直線に移る。</p>

<p>直線 \(y=(\tan\theta)x\) に関する対称移動も同じ方法で求まる。e₁ は角0の位置にあり直線に関して折り返すと角 \(2\theta\) の位置に移る。e₂ は角 \(90^\circ\) の位置にあり角 \(2\theta-90^\circ\) の位置に移る。</p>
\[ \begin{pmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{pmatrix} \]
<p>\(\theta=45^\circ\) とすると表の直線 y＝x に関する対称移動の行列と一致する。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>点 (2, 1) を原点のまわりに \(90^\circ\) 回転した点を行列で求めよ。また第5章の複素数の計算と比べよ。</p>
<details open><summary>解き方</summary><div>\(\theta=90^\circ\) の回転行列は \(\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\) である。<br>\(\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 2 \\ 1 \end{pmatrix}=\begin{pmatrix} -1 \\ 2 \end{pmatrix}\) である。<br>答えは (−1, 2) である。<br>第5章で \(i(2+i)=-1+2i\) と求めた結果と一致する。</div></details></div>

<div class="ex"><div class="ex-h">例題 3</div>
<p>直線 \(y=\sqrt{3}\,x\) に関する対称移動の行列を求めよ。また直線 \(y=2x+1\) を \(A=\begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}\) で移した図形を求めよ。</p>
<details open><summary>解き方</summary><div>直線の傾きは \(\tan 60^\circ\) なので \(\theta=60^\circ\) で \(2\theta=120^\circ\) である。<br>行列は \(\begin{pmatrix} -\frac{1}{2} & \frac{\sqrt{3}}{2} \\ \frac{\sqrt{3}}{2} & \frac{1}{2} \end{pmatrix}\) である。点 \((1, \sqrt{3})\) を移すと \(\left(-\frac{1}{2}+\frac{3}{2},\ \frac{\sqrt{3}}{2}+\frac{\sqrt{3}}{2}\right)=(1, \sqrt{3})\) で直線上の点は動かない。<br>後半は直線上の点を \((t, 2t+1)\) と置く。<br>A で移すと \((t+2t+1,\ 4t+2)=(3t+1,\ 4t+2)\) である。<br>\(X=3t+1\) と \(Y=4t+2\) から t を消去する。\(t=\dfrac{X-1}{3}\) を代入して \(Y=\dfrac{4X+2}{3}\) である。<br>答えは直線 \(y=\dfrac{4}{3}x+\dfrac{2}{3}\) である。</div></details></div>

<p>A が逆行列をもつとき \(A^{-1}\) は A の逆の変換を表す。A で移した点に \(A^{-1}\) を掛けると元の点に戻るからである。角 θ の回転の逆は角 −θ の回転であり対称移動の逆はその対称移動自身である。対称移動の行列 F について \(F^2=E\) が成り立つ。</p>

<h2 id="s3">合成変換と行列の積</h2>
<p>変換 f を行った後に変換 g を行う変換を f と g の<strong>合成変換</strong>と呼び \(g\circ f\) と書く。f が行列 A で g が行列 B で表されるとき次が成り立つ。</p>
\[ (g\circ f)(\boldsymbol{x})=B(A\boldsymbol{x})=(BA)\boldsymbol{x} \]
<p><strong class="hit">先に行う変換の行列が右に来る</strong>。第6章で積を代入の合成として定めたのはこの性質のためである。積の順序を入れ替えると結果が変わる理由もここにある。回転してから対称移動するのと対称移動してから回転するのでは一般に異なる位置に移る。</p>

<div class="ex"><div class="ex-h">例題 4</div>
<p>\(90^\circ\) 回転を \(R=\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\) で x 軸に関する対称移動を \(F=\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\) で表す。回転してから対称移動する変換と対称移動してから回転する変換の行列を求めよ。</p>
<details open><summary>解き方</summary><div>回転が先なので R が右に来る。\(FR=\begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}\) である。<br>これは e₁ を (0, −1) に e₂ を (−1, 0) に移すので直線 y＝−x に関する対称移動である。<br>対称移動が先なら \(RF=\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\) で直線 y＝x に関する対称移動である。<br>2つは異なる変換である。</div></details></div>

<p>回転を2回続けると角が足される。角 α の回転の後に角 β の回転を行う行列を計算する。</p>
\[ \begin{pmatrix} \cos\beta & -\sin\beta \\ \sin\beta & \cos\beta \end{pmatrix}\begin{pmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{pmatrix}=\begin{pmatrix} \cos\beta\cos\alpha-\sin\beta\sin\alpha & * \\ \sin\beta\cos\alpha+\cos\beta\sin\alpha & * \end{pmatrix} \]
<p>合成は角 \(\alpha+\beta\) の回転なので左辺の第1列は \((\cos(\alpha+\beta), \sin(\alpha+\beta))\) に等しい。成分を比べると数学Ⅱの加法定理が得られる。回転どうしは順序を入れ替えても結果が同じである。行列の積が交換できる数少ない例である。</p>
<p>合成の考え方で変換の性質を式に表せる。x 軸への正射影 \(Q=\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}\) は1回射影した点をもう1回射影しても動かないので \(Q^2=Q\) である。対称移動 F は2回続けると元に戻るので \(F^2=E\) である。角 \(\dfrac{2\pi}{n}\) の回転 R は n 回続けると1周するので \(R^n=E\) である。第5章の1の n 乗根 \(z^n=1\) と同じ構造である。</p>
<p>典型的な誤りは「A の後に B」を AB と書くことである。式 \(B(A\boldsymbol{x})\) を書いてから括弧を外す手順を守ると誤らない。</p>

<h2 id="s4">行列式と面積の拡大率</h2>
<p>第6章で 2×2 行列の行列式を \(\det A=ad-bc\) と定めた。この値には図形の意味がある。単位正方形は e₁ と e₂ で張られる。A で移すと列ベクトル \(\boldsymbol{u}=(a,c)\) と \(\boldsymbol{v}=(b,d)\) で張られる平行四辺形になる。その面積が \(|ad-bc|\) である。</p>

<figure class="tb-fig">
<svg viewBox="0 80 720 210" role="img" aria-label="ベクトル 3 1 と 1 2 で張られる平行四辺形の面積は5">
  <defs>
    <marker id="ah07a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah07b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
  </defs>
  <g stroke="var(--line)"><line x1="200" y1="100" x2="200" y2="270"/><line x1="250" y1="100" x2="250" y2="270"/><line x1="300" y1="100" x2="300" y2="270"/><line x1="350" y1="100" x2="350" y2="270"/><line x1="140" y1="110" x2="380" y2="110"/><line x1="140" y1="160" x2="380" y2="160"/><line x1="140" y1="210" x2="380" y2="210"/></g>
  <line x1="130" y1="260" x2="390" y2="260" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="150" y1="280" x2="150" y2="90" stroke="var(--ink)" stroke-width="1.5"/>
  <g font-size="12" fill="var(--muted)" text-anchor="middle"><text x="200" y="276">1</text><text x="250" y="276">2</text><text x="300" y="276">3</text><text x="350" y="276">4</text><text x="142" y="276">O</text></g>
  <g font-size="12" fill="var(--muted)" text-anchor="end"><text x="144" y="214">1</text><text x="144" y="164">2</text><text x="144" y="114">3</text></g>
  <rect x="150" y="110" width="200" height="150" fill="none" stroke="var(--sub)" stroke-dasharray="5 4"/>
  <polygon points="150,260 300,210 350,110 200,160" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="1.5"/>
  <line x1="150" y1="260" x2="297" y2="211" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah07a)"/>
  <line x1="150" y1="260" x2="198.7" y2="162.7" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah07b)"/>
  <g font-size="13" font-weight="600"><text x="306" y="226" fill="var(--warm)">u = (3, 1)</text><text x="160" y="150" fill="var(--cool)">v = (1, 2)</text></g>
  <text x="250" y="196" font-size="14" font-weight="700" fill="var(--accent)" text-anchor="middle">面積 5</text>
  <g font-size="13" fill="var(--ink)">
    <text x="420" y="110">外側の長方形 4 × 3 ＝ 12</text>
    <text x="420" y="136">直角三角形 2個 3 × 1 ÷ 2 × 2 ＝ 3</text>
    <text x="420" y="162">直角三角形 2個 1 × 2 ÷ 2 × 2 ＝ 2</text>
    <text x="420" y="188">隅の正方形 2個 1 × 1 × 2 ＝ 2</text>
    <text x="420" y="220" font-weight="600">12 − 3 − 2 − 2 ＝ 5 ＝ 3 × 2 − 1 × 1</text>
  </g>
</svg>
<figcaption>u＝(3, 1) と v＝(1, 2) で張られる平行四辺形は 4×3 の長方形から周りの三角形と隅の正方形を除いた部分である。残りの面積は5で行列式 3×2−1×1 に等しい。</figcaption>
</figure>

<p>図の計算を文字で行う。a・b・c・d が正で図と同じ配置のとき外側の長方形の面積は \((a+b)(c+d)\) である。そこから三角形 \(\dfrac{ac}{2}\) と \(\dfrac{bd}{2}\) を2個ずつと隅の長方形 bc を2個除く。</p>
\[ (a+b)(c+d)-ac-bd-2bc=ad-bc \]
<p>単位正方形の面積1が \(|ad-bc|\) になるので平面上のどの図形の面積も \(|\det A|\) 倍になる。図形を細かい正方形に分けるとどの正方形も同じ倍率で変わるからである。<strong class="hit">行列式の絶対値は面積の拡大率である</strong>。</p>
<p>符号にも意味がある。正なら e₁ から e₂ への回転の向きが保たれる。負なら向きが反転し図形が裏返る。x 軸に関する対称移動の行列式は −1 である。</p>
<p>合成変換では拡大率が掛け算になる。したがって次が成り立つ。</p>
\[ \det(AB)=\det A\cdot\det B \]
<p>特に \(AA^{-1}=E\) と \(\det E=1\) から \(\det(A^{-1})=\dfrac{1}{\det A}\) である。</p>
<p>この結果は第2章の三角形の面積の公式と一致する。O と \((a_1,a_2)\) と \((b_1,b_2)\) を頂点とする三角形の面積 \(\dfrac{1}{2}|a_1b_2-a_2b_1|\) は平行四辺形の半分である。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>O(0, 0)・P(3, 1)・Q(1, 2) を頂点とする三角形を \(A=\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}\) で移した図形の面積を求めよ。</p>
<details open><summary>解き方</summary><div>元の三角形の面積は \(\dfrac{1}{2}|3\cdot 2-1\cdot 1|=\dfrac{5}{2}\) である。<br>\(\det A=2\cdot 3-1\cdot 1=5\) である。<br>面積は5倍になるので答えは \(\dfrac{25}{2}\) である。<br>検算する。P と Q の行き先は (7, 6) と (4, 7) である。\(\dfrac{1}{2}|7\cdot 7-6\cdot 4|=\dfrac{25}{2}\) で一致する。</div></details></div>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">行列式が負の変換は右打者を左打者に変える</p>
<p>鏡に映すと打席が左右入れ替わる。面積の倍率は絶対値に現れ左右の反転は符号に現れる。</p>
</aside>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">det(AB)＝det A・det B は希薄化の掛け算と同じである</p>
<p>持分が1回目の増資で0.8倍・2回目で0.75倍なら合計0.6倍である。面積の倍率も各段階の倍率の積になる。</p>
</aside>

<h2 id="s5">3×3 の行列式と体積</h2>
<p>空間の線形変換は 3×3 行列で表される。第4章の空間ベクトル e₁・e₂・e₃ の行き先を列に並べる。3×3 行列の行列式は次の式で定める。</p>
\[ \det\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{12}a_{21}a_{33}-a_{11}a_{23}a_{32} \]
<p>暗記の方法として<strong>サラスの方法</strong>がある。左上から右下へ向かう3本の斜めの積を正の符号で足し右上から左下へ向かう3本の斜めの積を負の符号で足す。斜めの線は行列の右端で折り返して左端へつなぐ。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 230" role="img" aria-label="サラスの方法の斜めの線">
  <g font-size="15" text-anchor="middle" fill="var(--ink)">
    <text x="120" y="70">a₁₁</text><text x="190" y="70">a₁₂</text><text x="260" y="70">a₁₃</text><text x="330" y="70" fill="var(--muted)">a₁₁</text><text x="400" y="70" fill="var(--muted)">a₁₂</text>
    <text x="120" y="130">a₂₁</text><text x="190" y="130">a₂₂</text><text x="260" y="130">a₂₃</text><text x="330" y="130" fill="var(--muted)">a₂₁</text><text x="400" y="130" fill="var(--muted)">a₂₂</text>
    <text x="120" y="190">a₃₁</text><text x="190" y="190">a₃₂</text><text x="260" y="190">a₃₃</text><text x="330" y="190" fill="var(--muted)">a₃₁</text><text x="400" y="190" fill="var(--muted)">a₃₂</text>
  </g>
  <line x1="295" y1="40" x2="295" y2="205" stroke="var(--line)" stroke-dasharray="4 4"/>
  <g stroke="var(--warm)" stroke-width="2" fill="none" stroke-opacity="0.55">
    <line x1="106" y1="52" x2="274" y2="196"/><line x1="176" y1="52" x2="344" y2="196"/><line x1="246" y1="52" x2="414" y2="196"/>
  </g>
  <g stroke="var(--cool)" stroke-width="2" fill="none" stroke-dasharray="6 4" stroke-opacity="0.55">
    <line x1="274" y1="52" x2="106" y2="196"/><line x1="344" y1="52" x2="176" y2="196"/><line x1="414" y1="52" x2="246" y2="196"/>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="460" y="80" fill="var(--warm)">実線 右下がり 3本 ＋</text>
    <text x="460" y="110" fill="var(--cool)">破線 右上がり 3本 −</text>
    <text x="460" y="150" fill="var(--sub)">右の灰色の2列は</text>
    <text x="460" y="172" fill="var(--sub)">左の2列の写しである</text>
  </g>
</svg>
<figcaption>行列の右に第1列と第2列を書き写すと6本の斜めの積がすべて直線で結べる。右下がりの3本は正の符号で右上がりの3本は負の符号で足す。サラスの方法は 3×3 までしか使えない。</figcaption>
</figure>

<p>図形の意味は面積の場合と同じである。3本の列ベクトルが張る平行六面体の体積が \(|\det A|\) であり空間図形の体積は \(|\det A|\) 倍になる。行列式が0なら3本の列ベクトルは同じ平面上にあり平行六面体はつぶれて体積0になる。</p>
<p>4×4 以上では<strong>余因子展開</strong>を使う。1つの行または列について各成分と残りの小さな行列の行列式を掛けて符号を交互に付けて足す方法である。第1行で展開すると次の形になる。</p>
\[ \det A=a_{11}\begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix}-a_{12}\begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix}+a_{13}\begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix} \]

<div class="ex"><div class="ex-h">例題 6</div>
<p>\(\det\begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{pmatrix}\) を求めよ。</p>
<details open><summary>解き方</summary><div>サラスの方法で正の3項は \(2\cdot 3\cdot 2+1\cdot 1\cdot 0+0\cdot 1\cdot 1=12\) である。<br>負の3項は \(0\cdot 3\cdot 0+1\cdot 1\cdot 2+2\cdot 1\cdot 1=4\) である。<br>答えは \(12-4=8\) である。<br>第1行の余因子展開で検算する。\(2(3\cdot 2-1\cdot 1)-1(1\cdot 2-1\cdot 0)+0=10-2=8\) で一致する。</div></details></div>

<p>典型的な誤りはサラスの方法を 4×4 に当てはめることである。4×4 の行列式は24項の和であり斜めの線8本では足りない。</p>

<h2 id="s6">行列式が0のとき逆行列がない理由</h2>
<p>\(\det A=0\) なら単位正方形の行き先の面積が0である。2本の列ベクトルが同じ直線上にあり平面全体が1本の直線か原点に移る。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 290" role="img" aria-label="行列式0の行列は平面を直線に移し異なる2点が同じ点に移る">
  <defs><marker id="ah07c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--sub)"/></marker></defs>
  <g font-size="13" fill="var(--ink)" text-anchor="middle"><text x="160" y="28">移す前</text><text x="520" y="28">A ＝ (1 2 / 2 4) で移した後</text></g>
  <line x1="340" y1="40" x2="340" y2="280" stroke="var(--line)"/>
  <g stroke="var(--ink)" stroke-width="1.2"><line x1="30" y1="190" x2="300" y2="190"/><line x1="130" y1="280" x2="130" y2="50"/>
    <line x1="380" y1="250" x2="700" y2="250"/><line x1="460" y1="280" x2="460" y2="50"/></g>
  <polygon points="130,190 170,190 170,150 130,150" fill="var(--warm)" fill-opacity="0.2" stroke="var(--warm)" stroke-width="2"/>
  <line x1="50" y1="150" x2="250" y2="250" stroke="var(--cool)" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="130" cy="190" r="5" fill="var(--accent)"/><circle cx="210" cy="230" r="5" fill="var(--accent)"/>
  <text x="218" y="226" font-size="12.5" fill="var(--accent)">(2, −1)</text>
  <text x="54" y="142" font-size="12.5" fill="var(--cool)">x + 2y ＝ 0</text>
  <g font-size="12" fill="var(--muted)"><text x="164" y="206">1</text><text x="116" y="154">1</text></g>
  <line x1="450" y1="270" x2="530" y2="110" stroke="var(--warm)" stroke-width="4" stroke-opacity="0.7"/>
  <circle cx="460" cy="250" r="6" fill="var(--accent)"/>
  <g fill="var(--warm)"><circle cx="480" cy="210" r="4"/><circle cx="500" cy="170" r="4"/><circle cx="520" cy="130" r="4"/></g>
  <g font-size="12.5" fill="var(--sub)"><text x="488" y="214">(1, 2)</text><text x="508" y="174">(2, 4)</text><text x="528" y="134">(3, 6)</text></g>
  <text x="540" y="104" font-size="12.5" fill="var(--warm)">直線 y ＝ 2x</text>
  <text x="470" y="272" font-size="12.5" fill="var(--accent)">(0, 0) と (2, −1) がともに原点へ</text>
  <path d="M300 230 Q 380 260 450 252" fill="none" stroke="var(--sub)" stroke-width="1.5" marker-end="url(#ah07c)"/>
  <g font-size="12.5" fill="var(--ink)"><text x="570" y="150">正方形は線分に</text><text x="570" y="172">平面は直線に移る</text></g>
</svg>
<figcaption>A＝(1 2 / 2 4) の行列式は 4−4＝0 である。左の正方形は右の直線 y＝2x 上の線分に移る。点線の直線 x＋2y＝0 上の点はすべて原点に移る。原点に移った点から元の点を1つに決める方法はない。右の図は縦横とも1目盛り20ピクセルで描いた。</figcaption>
</figure>

<p>逆行列が存在しない理由は2つある。1つ目は<strong>行き先が重なる</strong>ことである。図では (0, 0) と (2, −1) がどちらも原点に移る。逆の変換があるとすれば原点を2つの点に戻さなければならず1つの変換にならない。2つ目は<strong>届かない点がある</strong>ことである。直線 y＝2x の外の点は何の行き先にもならない。</p>
<p>連立方程式で言い換える。\(A\boldsymbol{x}=\boldsymbol{b}\) は b が直線 y＝2x 上にあれば解が無数にあり直線の外にあれば解がない。<strong class="hit">行列式が0の行列は解を1つに定められない</strong>。第6章のランクで言えば rank A＝1 であり行き先の直線の次元が1であることに対応する。</p>

<div class="ex"><div class="ex-h">例題 7</div>
<p>\(A=\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}\) について \(A\boldsymbol{x}=(1,2)\) と \(A\boldsymbol{x}=(1,0)\) の解をそれぞれ調べよ。</p>
<details open><summary>解き方</summary><div>\(A\boldsymbol{x}=(x+2y,\ 2x+4y)\) で第2成分は第1成分の2倍である。<br>(1, 2) は第2成分が第1成分の2倍なので \(x+2y=1\) だけが条件になる。解は \((1-2t,\ t)\) で無数にある。<br>(1, 0) は \(x+2y=1\) と \(2(x+2y)=0\) が両立しないので解はない。</div></details></div>

<aside class="an an-rw"><b>現実世界</b>
<p class="an-h">行列式0の変換は書類のシュレッダーである</p>
<p>異なる書類が同じ紙くずになり紙くずから元の書類を1つに決められない。情報を失った変換に逆はない。</p>
</aside>

<h2 id="s7">複素数の積との対応</h2>
<p>第5章で複素数 \(w=a+bi\) を掛ける操作は原点のまわりの回転と拡大であった。この操作を行列で書く。\(z=x+yi\) とすると次の計算になる。</p>
\[ wz=(a+bi)(x+yi)=(ax-by)+(bx+ay)i \]
<p>実部と虚部を縦に並べると行列の積で表せる。</p>
\[ \begin{pmatrix} ax-by \\ bx+ay \end{pmatrix}=\begin{pmatrix} a & -b \\ b & a \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} \]
<p><strong class="hit">複素数 a＋bi を掛ける変換は行列 (a −b / b a) の線形変換である</strong>。\(w=r(\cos\theta+i\sin\theta)\) なら行列は \(r\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}\) で第2節の回転行列の r 倍である。</p>
<p>この対応から3つの事実が読み取れる。1つ目は行列式が \(a^2+b^2=|w|^2\) になることである。長さが \(|w|\) 倍なので面積は \(|w|^2\) 倍になる。2つ目はこの形の行列どうしの積がまたこの形になり複素数の積に対応することである。複素数の積は交換できるのでこの形の行列どうしの積も交換できる。3つ目は i に対応する行列 \(J=\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\) が \(J^2=-E\) を満たすことである。\(i^2=-1\) の行列版である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="1 足す i を掛ける変換は単位正方形を45度回して ルート2 倍に広げる">
  <line x1="200" y1="230" x2="500" y2="230" stroke="var(--ink)" stroke-width="1.2"/>
  <line x1="360" y1="255" x2="360" y2="40" stroke="var(--ink)" stroke-width="1.2"/>
  <g font-size="12" fill="var(--muted)" text-anchor="middle"><text x="420" y="246">1</text><text x="300" y="246">−1</text><text x="352" y="246">O</text></g>
  <g font-size="12" fill="var(--muted)" text-anchor="end"><text x="354" y="174">i</text><text x="354" y="114">2i</text></g>
  <polygon points="360,230 420,230 420,170 360,170" fill="none" stroke="var(--sub)" stroke-dasharray="4 3"/>
  <polygon points="360,230 420,170 360,110 300,170" fill="var(--warm)" fill-opacity="0.2" stroke="var(--warm)" stroke-width="2"/>
  <circle cx="420" cy="170" r="4" fill="var(--accent)"/><circle cx="300" cy="170" r="4" fill="var(--cool)"/>
  <text x="428" y="166" font-size="12.5" fill="var(--accent)">1 の行き先 1 + i</text>
  <text x="292" y="166" font-size="12.5" fill="var(--cool)" text-anchor="end">i の行き先 −1 + i</text>
  <g font-size="13" fill="var(--ink)">
    <text x="540" y="90">w ＝ 1 + i</text>
    <text x="540" y="114">行列 (1 −1 / 1 1)</text>
    <text x="540" y="138">回転 45° 長さ √2 倍</text>
    <text x="540" y="162">行列式 1 + 1 ＝ 2 ＝ |w|²</text>
  </g>
</svg>
<figcaption>1＋i を掛ける変換で単位正方形は45°回って1辺が √2 の正方形になる。面積は2倍で行列式 1×1−(−1)×1＝2 と |1＋i|²＝2 に等しい。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 8</div>
<p>第5章では \((1+i)(2+i)=1+3i\) を求めた。同じ計算を行列で行え。</p>
<details open><summary>解き方</summary><div>1＋i に対応する行列は \(\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}\) である。<br>2＋i を列ベクトル (2, 1) で表す。<br>\(\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 2 \\ 1 \end{pmatrix}=\begin{pmatrix} 1 \\ 3 \end{pmatrix}\) である。<br>答えは (1, 3) で 1＋3i と一致する。</div></details></div>

<p>一般の 2×2 行列は複素数より多くの変換を表す。せん断や射影や片方向だけの拡大は形が (a −b / b a) にならないので複素数の積では表せない。複素数平面は線形変換の中で回転と拡大だけを取り出した世界である。</p>

<h2 id="s8">現実世界の線形変換 画面の中の図形</h2>
<p>行列式の考え方は行列より古い。日本の関孝和は1683年の著作で連立方程式から文字を消去する計算の中で行列式に当たる式を扱った。ドイツのライプニッツも1693年の書簡で同じ考えを示している。行列式は行列という名称が生まれる前から連立方程式の解の公式の一部として扱われた。</p>
<p>その解の公式を<strong>クラメルの公式</strong>と呼ぶ。スイスのクラメルが1750年に発表した。2元の場合は \(ax+by=p\) と \(cx+dy=q\) の解が次の形になる。</p>
\[ x=\frac{\begin{vmatrix} p & b \\ q & d \end{vmatrix}}{\begin{vmatrix} a & b \\ c & d \end{vmatrix}},\qquad y=\frac{\begin{vmatrix} a & p \\ c & q \end{vmatrix}}{\begin{vmatrix} a & b \\ c & d \end{vmatrix}} \]
<p>分母が係数行列の行列式なので行列式が0なら公式は使えない。第6節の結論と一致する。未知数が多いと計算量が急に増えるので実際の計算には第6章の掃き出し法を使う。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>コンピュータの画面で図形を回したり拡大したりする処理は行列の積で計算する。平行移動は 2×2 行列では表せないので座標に1を付け加えた3成分の列ベクトルと 3×3 行列を使う。こうすると平行移動も含めて変換の合成が行列の積1回で済む。</p>
</aside>

<h2 id="s9">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 回転行列</div>
<p class="qz-q">点 (2, 0) を原点のまわりに \(60^\circ\) 回転した点を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \((1, \sqrt{3})\) である。回転行列の第1列 \((\cos 60^\circ, \sin 60^\circ)=\left(\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right)\) を2倍する。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 平行四辺形の面積</div>
<p class="qz-q">2つのベクトル (2, 1) と (1, 3) で張られる平行四辺形の面積を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 5 である。\(|2\cdot 3-1\cdot 1|=5\) である。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 面積の拡大率</div>
<p class="qz-q">半径1の円を \(\begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}\) で移した図形の面積として正しいものを1つ選べ。</p>
<ol><li>\(5\pi\)</li><li>\(6\pi\)</li><li>\(7\pi\)</li><li>\(36\pi\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。行列式は \(3\cdot 2-1\cdot 0=6\) で面積は6倍になる。元の面積 \(\pi\) から \(6\pi\) である。移った図形は楕円であるが面積は行列式だけで求まる。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 3×3 の行列式</div>
<p class="qz-q">\(\det\begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 2 & 0 & 1 \end{pmatrix}\) を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 13 である。正の3項は \(1\cdot 1\cdot 1+2\cdot 3\cdot 2+0\cdot 0\cdot 0=13\) で負の3項は \(0\cdot 1\cdot 2+2\cdot 0\cdot 1+1\cdot 3\cdot 0=0\) である。第1行の余因子展開でも \(1(1-0)-2(0-6)+0=13\) となる。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 合成変換</div>
<p class="qz-q">原点のまわりに \(90^\circ\) 回転してから x 方向に2倍に拡大する変換の行列として正しいものを1つ選べ。</p>
<ol><li>\(\begin{pmatrix} 0 & -2 \\ 1 & 0 \end{pmatrix}\)</li><li>\(\begin{pmatrix} 0 & -1 \\ 2 & 0 \end{pmatrix}\)</li><li>\(\begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix}\)</li><li>\(\begin{pmatrix} 2 & -1 \\ 1 & 0 \end{pmatrix}\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。先に行う回転 R を右に置き \(\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}=\begin{pmatrix} 0 & -2 \\ 1 & 0 \end{pmatrix}\) である。2 は順序を逆にした積である。e₁ で確かめると回転で (0, 1) に移り x 方向の拡大では動かないので行き先は (0, 1) である。1 の第1列と一致する。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 行列式の積</div>
<p class="qz-q">\(\det A=2\) と \(\det B=-3\) のとき \(\det(A^2B^{-1})\) を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \(-\dfrac{4}{3}\) である。\(\det(A^2)=2^2=4\) で \(\det(B^{-1})=-\dfrac{1}{3}\) である。積は \(-\dfrac{4}{3}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 複素数との対応</div>
<p class="qz-q">複素数 \(1+\sqrt{3}\,i\) を掛ける変換について正しいものを1つ選べ。</p>
<ol><li>行列は \(\begin{pmatrix} 1 & \sqrt{3} \\ -\sqrt{3} & 1 \end{pmatrix}\) で面積は2倍になる</li><li>行列は \(\begin{pmatrix} 1 & -\sqrt{3} \\ \sqrt{3} & 1 \end{pmatrix}\) で面積は4倍になる</li><li>行列は \(\begin{pmatrix} 1 & -\sqrt{3} \\ \sqrt{3} & 1 \end{pmatrix}\) で面積は2倍になる</li><li>行列は \(\begin{pmatrix} 1 & 0 \\ 0 & \sqrt{3} \end{pmatrix}\) で面積は \(\sqrt{3}\) 倍になる</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。a＋bi に対応する行列は (a −b / b a) である。行列式は \(1+3=4\) で \(|1+\sqrt{3}\,i|^2=4\) と一致する。長さが2倍なので面積は4倍である。1 は時計回りの回転になり \(1-\sqrt{3}\,i\) に対応する。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 逆行列をもたない条件</div>
<p class="qz-q">\(\begin{pmatrix} k & 1 \\ 4 & k \end{pmatrix}\) が平面全体を1本の直線に移すような実数 k をすべて求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \(k=\pm 2\) である。行列式 \(k^2-4\) が0になる条件である。このとき列ベクトル (k, 4) と (1, k) は平行で零ベクトルではないので行き先は原点だけでなく直線になる。</div></details></div>

<h2 id="s10">この章の要点</h2>
<div class="tb-key"><b>要点</b>
線形変換は和と定数倍を保つ変換で原点を動かさない。<br>
行列の第1列は e₁ の行き先で第2列は e₂ の行き先である。<br>
角 θ の回転行列は (cosθ −sinθ / sinθ cosθ) である。<br>
f の後に g を行う変換は BA で表され先に行う変換の行列が右に来る。<br>
|det A| は面積の拡大率で det(AB)＝det A・det B が成り立つ。<br>
3×3 の行列式はサラスの方法か余因子展開で求め体積の拡大率を表す。<br>
det A＝0 なら平面が直線以下に移り行き先が重なるので逆行列はない。<br>
a＋bi を掛ける変換は行列 (a −b / b a) で行列式は |w|² である。</div>

<h2 id="s11">残っている問い</h2>
<ul>
<li class="tb-vnote">面積が \(|\det A|\) 倍になることを曲線で囲まれた図形にまで広げるには積分による議論が要る。本文では正方形に分ける直感的な説明にとどめた。</li>
<li class="tb-vnote">4×4 以上の行列式の定義は置換を用いる。余因子展開がその定義と一致することの証明は大学の線形代数で扱う。</li>
<li class="tb-vnote">関孝和の1683年の著作で行列式に当たる計算がどの範囲まで一般的に扱われたかについては研究者の評価が分かれる。本文では年と概要だけを記した。</li>
</ul>

<h2 id="s12">出典</h2>
<ol>
<li>Linear map — Wikipedia — https://en.wikipedia.org/wiki/Linear_map</li>
<li>Rotation matrix — Wikipedia — https://en.wikipedia.org/wiki/Rotation_matrix</li>
<li>Determinant — Wikipedia — https://en.wikipedia.org/wiki/Determinant</li>
<li>Rule of Sarrus — Wikipedia — https://en.wikipedia.org/wiki/Rule_of_Sarrus</li>
<li>Complex number — Matrix representation — Wikipedia — https://en.wikipedia.org/wiki/Complex_number#Matrix_representation_of_complex_numbers</li>
<li>Seki Takakazu — MacTutor History of Mathematics — https://mathshistory.st-andrews.ac.uk/Biographies/Seki/</li>
<li>Gabriel Cramer — MacTutor History of Mathematics — https://mathshistory.st-andrews.ac.uk/Biographies/Cramer/</li>
<li>Cramer's rule — Wikipedia — https://en.wikipedia.org/wiki/Cramer%27s_rule</li>
<li>Homogeneous coordinates — Wikipedia — https://en.wikipedia.org/wiki/Homogeneous_coordinates</li>
</ol>
