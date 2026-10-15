<!--meta
{"chapter": 8, "part": "大学の線形代数", "outside": true, "final": true, "title": "固有値と固有ベクトル", "thesis": "行列で移しても向きが変わらないベクトルを固有ベクトルと呼び伸びる倍率を固有値と呼ぶ。固有ベクトルを軸に取ると行列は各軸方向の拡大だけになり n 乗が簡単に求まる。マルコフ連鎖の定常状態とPageRankと主成分分析はどれも固有ベクトルを求める計算である。", "verify": {"date": "2026-10-15", "checked": 41, "match": 37, "fixed": 4, "unconfirmed": 0}}
-->
<p>第7章では 2×2 行列を平面の変換として描いた。一般の行列はほとんどのベクトルの向きを変える。ところが多くの行列には向きを変えずに長さだけを変える特別な方向がある。この方向が固有ベクトルであり長さの倍率が固有値である。</p>
<p>この章では固有値を求める固有方程式から始め対角化による行列の n 乗の計算へ進む。後半ではマルコフ連鎖の長期の状態・Googleの検索順位の計算・データの主成分分析とAIの文章の類似度を扱う。どれも第2章の内積と第6章と第7章の行列の計算の組み合わせである。最終章なので最後に本全体の要点を置く。</p>

<h2 id="s1">固有値と固有ベクトルの定義</h2>
<p>正方行列 A に対して次の式を満たす実数または複素数 λ と零ベクトルでないベクトル v があるとする。</p>
\[ A\boldsymbol{v}=\lambda\boldsymbol{v}\qquad(\boldsymbol{v}\neq\boldsymbol{0}) \]
<p>このとき λ を A の<strong>固有値</strong>と呼び v を λ に対する<strong>固有ベクトル</strong>と呼ぶ。図形で言えば <strong class="hit">A で移しても同じ直線上にとどまり長さが λ 倍になるだけのベクトル</strong>である。λ が負なら向きが反対になり λ＝0 なら原点に移る。</p>
<p>v＝0 を除く理由は \(A\boldsymbol{0}=\lambda\boldsymbol{0}\) がどの λ でも成り立ち意味がないからである。また v が固有ベクトルなら 0 でない k について kv も同じ固有値の固有ベクトルである。\(A(k\boldsymbol{v})=kA\boldsymbol{v}=\lambda(k\boldsymbol{v})\) だからである。固有ベクトルは1本の矢印ではなく1本の直線の方向として決まる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="行列 2 1 1 2 で移すと 1 1 と 1 マイナス1 の方向だけ向きが変わらない">
  <defs>
    <marker id="ah08a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah08b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker>
    <marker id="ah08c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
  </defs>
  <g stroke="var(--line)" stroke-dasharray="3 4"><line x1="140" y1="290" x2="400" y2="30"/><line x1="140" y1="90" x2="340" y2="290"/></g>
  <line x1="120" y1="190" x2="420" y2="190" stroke="var(--ink)" stroke-width="1.2"/>
  <line x1="240" y1="290" x2="240" y2="20" stroke="var(--ink)" stroke-width="1.2"/>
  <g font-size="12" fill="var(--muted)" text-anchor="middle"><text x="280" y="206">1</text><text x="320" y="206">2</text><text x="360" y="206">3</text><text x="232" y="206">O</text></g>
  <g font-size="12" fill="var(--muted)" text-anchor="end"><text x="234" y="154">1</text><text x="234" y="114">2</text><text x="234" y="74">3</text></g>
  <line x1="240" y1="190" x2="317.3" y2="151.3" stroke="var(--muted)" stroke-width="2" marker-end="url(#ah08b)"/>
  <line x1="240" y1="190" x2="278.7" y2="112.7" stroke="var(--muted)" stroke-width="2" marker-end="url(#ah08b)"/>
  <line x1="240" y1="190" x2="357.9" y2="72.1" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah08a)"/>
  <line x1="240" y1="190" x2="277.9" y2="227.9" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah08c)"/>
  <g fill="none" stroke="var(--ink)" stroke-width="1.5"><circle cx="280" cy="190" r="4"/><circle cx="240" cy="150" r="4"/><circle cx="280" cy="150" r="4"/></g>
  <g font-size="12.5" fill="var(--sub)"><text x="326" y="150">(1, 0) → (2, 1)</text><text x="130" y="100">(0, 1) → (1, 2)</text></g>
  <g font-size="13" font-weight="600"><text x="366" y="72" fill="var(--warm)">(1, 1) → (3, 3)</text><text x="288" y="244" fill="var(--cool)">(1, −1) → (1, −1)</text></g>
  <g font-size="13" fill="var(--ink)">
    <text x="490" y="80">A ＝ (2 1 / 1 2)</text>
    <text x="490" y="112" fill="var(--warm)">(1, 1) 方向 3 倍 固有値 3</text>
    <text x="490" y="138" fill="var(--cool)">(1, −1) 方向 1 倍 固有値 1</text>
    <text x="490" y="170" fill="var(--sub)">灰色の2本は向きが変わる</text>
    <text x="490" y="194" fill="var(--sub)">白丸は移す前の点</text>
  </g>
</svg>
<figcaption>A＝(2 1 / 1 2) で移すと (1, 0) は (2, 1) に移り向きが変わる。(1, 1) は (3, 3) に移り同じ直線 y＝x の上で3倍になる。(1, −1) は動かない。点線の2本の直線が固有ベクトルの方向である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 1</div>
<p>\(A=\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}\) について (1, 1) と (1, −1) が固有ベクトルであることを確かめ固有値を求めよ。</p>
<details open><summary>解き方</summary><div>\(A\begin{pmatrix} 1 \\ 1 \end{pmatrix}=\begin{pmatrix} 3 \\ 3 \end{pmatrix}=3\begin{pmatrix} 1 \\ 1 \end{pmatrix}\) である。固有値は3である。<br>\(A\begin{pmatrix} 1 \\ -1 \end{pmatrix}=\begin{pmatrix} 1 \\ -1 \end{pmatrix}\) である。固有値は1である。</div></details></div>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">固有ベクトルは打球が切れない打球方向である</p>
<p>多くの打球は風で曲がるが風と同じ方向の打球は曲がらず距離だけ変わる。曲がらない方向が固有ベクトルで距離の倍率が固有値である。</p>
</aside>

<h2 id="s2">固有方程式</h2>
<p>固有値を求める方法を導く。\(A\boldsymbol{v}=\lambda\boldsymbol{v}\) を \(A\boldsymbol{v}-\lambda E\boldsymbol{v}=\boldsymbol{0}\) と書き直すと次の形になる。</p>
\[ (A-\lambda E)\boldsymbol{v}=\boldsymbol{0} \]
<p>この連立方程式が \(\boldsymbol{v}\neq\boldsymbol{0}\) の解をもつ条件を考える。もし \(A-\lambda E\) が逆行列をもつなら両辺に左から逆行列を掛けて v＝0 となり固有ベクトルは存在しない。第6章の同値関係から <strong class="hit">0 でない解をもつのは \(\det(A-\lambda E)=0\) のときに限る</strong>。この方程式を<strong>固有方程式</strong>と呼ぶ。2×2 なら次の2次方程式になる。</p>
\[ \det\begin{pmatrix} a-\lambda & b \\ c & d-\lambda \end{pmatrix}=\lambda^2-(a+d)\lambda+(ad-bc)=0 \]
<p>\(a+d\) を A の<strong>トレース</strong>と呼び \(\mathrm{tr}\,A\) と書く。解と係数の関係から2つの固有値 \(\lambda_1, \lambda_2\) について次が成り立つ。</p>
\[ \lambda_1+\lambda_2=\mathrm{tr}\,A,\qquad \lambda_1\lambda_2=\det A \]
<p>固有値の積が行列式になるのは第7章の面積の拡大率と整合する。2つの固有ベクトルの方向にそれぞれ \(\lambda_1\) 倍と \(\lambda_2\) 倍に伸びれば面積は \(\lambda_1\lambda_2\) 倍になるからである。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>\(A=\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}\) の固有値と固有ベクトルを求めよ。</p>
<details open><summary>解き方</summary><div>固有方程式は \(\lambda^2-7\lambda+(12-2)=\lambda^2-7\lambda+10=0\) である。<br>\((\lambda-2)(\lambda-5)=0\) から固有値は2と5である。<br>λ＝5 のとき \(A-5E=\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\) で条件は \(-x+y=0\) である。固有ベクトルは (1, 1) の0でない定数倍である。<br>λ＝2 のとき \(A-2E=\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\) で条件は \(2x+y=0\) である。固有ベクトルは (1, −2) の0でない定数倍である。<br>検算する。\(A(1,-2)=(4-2,\ 2-6)=(2,-4)=2(1,-2)\) である。</div></details></div>

<p>固有値は実数とは限らない。第7章の \(90^\circ\) 回転 \(\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\) の固有方程式は \(\lambda^2+1=0\) で解は \(\pm i\) である。どのベクトルも \(90^\circ\) 回されるので向きを保つ実数のベクトルは存在しない。複素数の範囲では固有値が存在しそれが第5章の i を掛ける回転と対応する。</p>
<p>典型的な誤りは \(A-\lambda\) と書いて行列から数を引くことである。λ は対角成分だけから引く。もう1つは固有ベクトルを (0, 0) と答えることである。固有方程式を正しく解けば連立方程式の2つの式は同じ直線を表し0でない解が必ず存在する。</p>

<h2 id="s3">対角化と行列の n 乗</h2>
<p>2つの固有ベクトル \(\boldsymbol{v}_1, \boldsymbol{v}_2\) が平行でないとする。これらを列に並べた行列を \(P=(\boldsymbol{v}_1\ \boldsymbol{v}_2)\) とし固有値を対角に並べた行列を D とする。\(A\boldsymbol{v}_1=\lambda_1\boldsymbol{v}_1\) と \(A\boldsymbol{v}_2=\lambda_2\boldsymbol{v}_2\) を列ごとに並べると次の式になる。</p>
\[ AP=P\begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix}=PD \]
<p>P は平行でない2本の列をもつので逆行列をもつ。右から \(P^{-1}\) を掛けると \(A=PDP^{-1}\) である。左から掛けると \(P^{-1}AP=D\) である。この変形を<strong>対角化</strong>と呼ぶ。</p>
<p>図形の意味は座標軸の取り替えである。固有ベクトルの方向を新しい軸に取ると A は各軸方向の拡大だけになる。\(\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}\) のように斜めに引き伸ばして見える変換も軸を選び直すと単純な拡大になる。ただし第7章の回転とせん断は実数の固有ベクトルが2本そろわないのでこの方法では拡大に分けられない。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 290" role="img" aria-label="単位円は固有ベクトルの方向を軸とする楕円に移る">
  <defs><marker id="ah08d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--sub)"/></marker></defs>
  <line x1="120" y1="160" x2="380" y2="160" stroke="var(--ink)" stroke-width="1.2"/>
  <line x1="250" y1="275" x2="250" y2="45" stroke="var(--ink)" stroke-width="1.2"/>
  <g stroke="var(--line)" stroke-dasharray="3 4"><line x1="150" y1="260" x2="350" y2="60"/><line x1="160" y1="70" x2="340" y2="250"/></g>
  <circle cx="250" cy="160" r="40" fill="none" stroke="var(--sub)" stroke-dasharray="4 3" stroke-width="1.5"/>
  <polyline fill="var(--warm)" fill-opacity="0.1" stroke="var(--warm)" stroke-width="2" points="330.0,120.0 333.2,113.2 335.7,106.7 337.6,100.7 338.9,95.1 339.4,89.9 339.3,85.4 338.5,81.3 337.0,77.9 334.9,75.1 332.1,73.0 328.7,71.5 324.6,70.7 320.1,70.6 314.9,71.1 309.3,72.4 303.3,74.3 296.8,76.8 290.0,80.0 282.9,83.8 275.5,88.2 267.9,93.1 260.2,98.5 252.4,104.4 244.6,110.7 236.9,117.4 229.2,124.4 221.7,131.7 214.4,139.2 207.4,146.9 200.7,154.6 194.4,162.4 188.5,170.2 183.1,177.9 178.2,185.5 173.8,192.9 170.0,200.0 166.8,206.8 164.3,213.3 162.4,219.3 161.1,224.9 160.6,230.1 160.7,234.6 161.5,238.7 163.0,242.1 165.1,244.9 167.9,247.0 171.3,248.5 175.4,249.3 179.9,249.4 185.1,248.9 190.7,247.6 196.7,245.7 203.2,243.2 210.0,240.0 217.1,236.2 224.5,231.8 232.1,226.9 239.8,221.5 247.6,215.6 255.4,209.3 263.1,202.6 270.8,195.6 278.3,188.3 285.6,180.8 292.6,173.1 299.3,165.4 305.6,157.6 311.5,149.8 316.9,142.1 321.8,134.5 326.2,127.1 330.0,120.0"/>
  <line x1="250" y1="160" x2="333" y2="77" stroke="var(--warm)" stroke-width="2.5"/>
  <line x1="250" y1="160" x2="278.3" y2="188.3" stroke="var(--cool)" stroke-width="2.5"/>
  <circle cx="290" cy="160" r="4" fill="var(--ink)"/><circle cx="330" cy="120" r="4" fill="var(--ink)"/>
  <path d="M292 154 Q 318 150 326 126" fill="none" stroke="var(--sub)" stroke-width="1.3" marker-end="url(#ah08d)"/>
  <g font-size="12.5"><text x="342" y="118" fill="var(--sub)">(1, 0) → (2, 1)</text><text x="300" y="66" fill="var(--warm)">長半径 3</text><text x="284" y="206" fill="var(--cool)">短半径 1</text></g>
  <g font-size="13" fill="var(--ink)">
    <text x="460" y="90">点線の円 半径 1 の単位円</text>
    <text x="460" y="116">実線の楕円 A で移した後</text>
    <text x="460" y="150" fill="var(--warm)">y ＝ x 方向に 3 倍</text>
    <text x="460" y="174" fill="var(--cool)">y ＝ −x 方向に 1 倍</text>
    <text x="460" y="208">面積 π → 3π ＝ det A × π</text>
  </g>
</svg>
<figcaption>A＝(2 1 / 1 2) で単位円を移すと楕円になる。楕円の長軸と短軸は固有ベクトルの方向で長さの倍率は固有値3と1である。軸を斜め45°に取り直すと A は縦横の拡大だけになる。楕円の点は t を5°刻みに動かして (2cos t＋sin t, cos t＋2sin t) を計算した。</figcaption>
</figure>

<p>対角化の最大の利点は n 乗の計算である。\(A^n=(PDP^{-1})(PDP^{-1})\cdots(PDP^{-1})\) で隣り合う \(P^{-1}P\) が E になって消える。</p>
\[ A^n=PD^nP^{-1}=P\begin{pmatrix} \lambda_1^{\,n} & 0 \\ 0 & \lambda_2^{\,n} \end{pmatrix}P^{-1} \]
<p><strong class="hit">対角行列の n 乗は対角成分を n 乗するだけである</strong>。行列を n 回掛ける計算が数の n 乗に置き換わる。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>\(A=\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}\) について \(A^n\) を求めよ。</p>
<details open><summary>解き方</summary><div>例題1から \(P=\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\) と \(D=\begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}\) である。<br>\(\det P=-2\) なので \(P^{-1}=\dfrac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\) である。<br>\(PD^n=\begin{pmatrix} 3^n & 1 \\ 3^n & -1 \end{pmatrix}\) である。<br>これに \(P^{-1}\) を掛けて \(A^n=\dfrac{1}{2}\begin{pmatrix} 3^n+1 & 3^n-1 \\ 3^n-1 & 3^n+1 \end{pmatrix}\) を得る。<br>n＝2 で検算する。公式は \(\dfrac{1}{2}\begin{pmatrix} 10 & 8 \\ 8 & 10 \end{pmatrix}=\begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix}\) で直接計算した \(A^2\) と一致する。</div></details></div>

<p>すべての行列が対角化できるわけではない。\(\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\) は第7章のせん断で固有値は1だけである。固有ベクトルは (1, 0) の方向しかなく平行でない2本を選べない。2つの固有値が異なる場合は必ず対角化できる。対称行列すなわち \(b=c\) の行列は必ず実数の範囲で対角化でき固有ベクトルどうしが直交する。例題3の (1, 1) と (1, −1) の内積は0である。</p>
<p>典型的な誤りは P の列の順序と D の対角成分の順序を食い違えることである。P の第1列が固有値 \(\lambda_1\) の固有ベクトルなら D の (1,1) 成分は \(\lambda_1\) である。</p>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">対角化は複数の資産を独立な複利の口座に分けることである</p>
<p>互いに影響し合う量も固有ベクトルの軸で見ると軸ごとに固有値の率で独立に増える。n 期後は各口座の \(\lambda^n\) を足し戻すだけである。</p>
</aside>

<h2 id="s4">マルコフ連鎖の定常状態</h2>
<p>ある集団の状態が一定の確率で毎期移り変わる仕組みを<strong>マルコフ連鎖</strong>と呼ぶ。次の期の状態の確率は今の期の状態だけで決まるとする。</p>
<p>例として2つのブランド A と B の利用者の割合を考える。毎月 A の利用者の 90% は A に残り 10% は B に移る。B の利用者の 30% は A に移り 70% は B に残る。n か月後の割合を \(\boldsymbol{x}_n=(a_n, b_n)\) とすると次の式で更新される。</p>
\[ \boldsymbol{x}_{n+1}=P\boldsymbol{x}_n,\qquad P=\begin{pmatrix} 0.9 & 0.3 \\ 0.1 & 0.7 \end{pmatrix} \]
<p>P を<strong>推移行列</strong>と呼ぶ。各列は移る前の状態ごとの行き先の確率で列の和は1である。\(\boldsymbol{x}_n=P^n\boldsymbol{x}_0\) なので長期の様子は P の n 乗で決まり第3節の対角化が使える。</p>
<p>P の固有方程式は \(\lambda^2-1.6\lambda+0.6=(\lambda-1)(\lambda-0.6)=0\) である。<strong class="hit">推移行列は必ず固有値1をもつ</strong>。列の和が1なので \(P^{\mathsf{T}}\) が (1, 1) を固有ベクトルにもち P と \(P^{\mathsf{T}}\) の固有方程式は同じだからである。固有値1の固有ベクトルを成分の和が1になるように選んだものを<strong>定常分布</strong>と呼ぶ。\(P\boldsymbol{\pi}=\boldsymbol{\pi}\) から \(0.1\pi_A=0.3\pi_B\) で \(\boldsymbol{\pi}=(0.75, 0.25)\) である。</p>
<p>初期の割合が \(\boldsymbol{x}_0=(0.2, 0.8)\) なら \(\boldsymbol{x}_0=\boldsymbol{\pi}-0.55(1,-1)\) と分解できる。(1, −1) は固有値0.6の固有ベクトルなので次の式になる。</p>
\[ a_n=0.75-0.55\times 0.6^{\,n} \]
<p>\(0.6^n\) は0に近づくので \(a_n\) は0.75に近づく。初期値によらず同じ定常分布に近づき近づく速さは2番目の固有値0.6で決まる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="ブランド A の割合が初期値によらず0.75に近づくグラフ">
  <g stroke="var(--line)"><line x1="80" y1="40" x2="640" y2="40"/><line x1="80" y1="95" x2="640" y2="95" stroke="var(--accent)" stroke-dasharray="6 4"/><line x1="80" y1="150" x2="640" y2="150"/><line x1="80" y1="205" x2="640" y2="205"/></g>
  <line x1="80" y1="260" x2="650" y2="260" stroke="var(--ink)" stroke-width="1.2"/>
  <line x1="80" y1="270" x2="80" y2="30" stroke="var(--ink)" stroke-width="1.2"/>
  <g font-size="12" fill="var(--muted)" text-anchor="end"><text x="72" y="264">0</text><text x="72" y="209">0.25</text><text x="72" y="154">0.5</text><text x="72" y="99">0.75</text><text x="72" y="44">1</text></g>
  <g font-size="12" fill="var(--muted)" text-anchor="middle"><text x="80" y="278">0</text><text x="192" y="278">2</text><text x="304" y="278">4</text><text x="416" y="278">6</text><text x="528" y="278">8</text><text x="640" y="278">10</text></g>
  <text x="660" y="264" font-size="12" fill="var(--muted)">月</text>
  <polyline fill="none" stroke="var(--warm)" stroke-width="2.5" points="80,216 136,167.6 192,138.6 248,121.1 304,110.7 360,104.4 416,100.6 472,98.4 528,97.0 584,96.2 640,95.7"/>
  <g fill="var(--warm)"><circle cx="80" cy="216" r="3.5"/><circle cx="136" cy="167.6" r="3.5"/><circle cx="192" cy="138.6" r="3.5"/><circle cx="248" cy="121.1" r="3.5"/><circle cx="304" cy="110.7" r="3.5"/><circle cx="360" cy="104.4" r="3.5"/><circle cx="416" cy="100.6" r="3.5"/><circle cx="472" cy="98.4" r="3.5"/><circle cx="528" cy="97.0" r="3.5"/><circle cx="584" cy="96.2" r="3.5"/><circle cx="640" cy="95.7" r="3.5"/></g>
  <polyline fill="none" stroke="var(--cool)" stroke-width="2.5" points="80,62 136,75.2 192,83.1 248,87.9 304,90.7 360,92.4 416,93.5 472,94.1 528,94.5 584,94.7 640,94.8"/>
  <g fill="var(--cool)"><circle cx="80" cy="62" r="3.5"/><circle cx="136" cy="75.2" r="3.5"/><circle cx="192" cy="83.1" r="3.5"/><circle cx="248" cy="87.9" r="3.5"/><circle cx="304" cy="90.7" r="3.5"/><circle cx="360" cy="92.4" r="3.5"/><circle cx="416" cy="93.5" r="3.5"/><circle cx="472" cy="94.1" r="3.5"/><circle cx="528" cy="94.5" r="3.5"/><circle cx="584" cy="94.7" r="3.5"/><circle cx="640" cy="94.8" r="3.5"/></g>
  <g font-size="12.5"><text x="96" y="232" fill="var(--warm)">初期値 0.2</text><text x="96" y="56" fill="var(--cool)">初期値 0.9</text><text x="520" y="86" fill="var(--accent)">定常分布 0.75</text></g>
</svg>
<figcaption>ブランド A の利用者の割合 aₙ の推移である。初期値 0.2 からは 0.42・0.552・0.6312 と増え初期値 0.9 からは 0.84・0.804 と減る。どちらも 0.75 に近づき定常分布との差は毎月 0.6 倍になる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 4</div>
<p>推移行列 \(P=\begin{pmatrix} 0.8 & 0.4 \\ 0.2 & 0.6 \end{pmatrix}\) の定常分布を求めよ。</p>
<details open><summary>解き方</summary><div>\(P\boldsymbol{\pi}=\boldsymbol{\pi}\) の第1成分は \(0.8\pi_1+0.4\pi_2=\pi_1\) である。<br>整理すると \(0.2\pi_1=0.4\pi_2\) で \(\pi_1=2\pi_2\) である。<br>\(\pi_1+\pi_2=1\) から \(\boldsymbol{\pi}=\left(\dfrac{2}{3}, \dfrac{1}{3}\right)\) である。<br>検算する。\(0.8\cdot\dfrac{2}{3}+0.4\cdot\dfrac{1}{3}=\dfrac{1.6+0.4}{3}=\dfrac{2}{3}\) である。</div></details></div>

<p>典型的な誤りは行と列の向きの取り違えである。この章では列ベクトルに左から P を掛ける形で書き各列の和を1にした。確率の教科書には行ベクトルに右から掛けて各行の和を1にする流儀もある。どちらの流儀かを最初に確認する。</p>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">定常分布は出会いと別れが釣り合った後の交際率である</p>
<p>毎月の成立と解消の確率が一定なら最初の状況によらず交際中の人の割合は一定値に近づく。流入と流出が等しい点が固有値1の固有ベクトルである。</p>
</aside>

<h2 id="s5">応用1 PageRank</h2>
<p>Googleの創業者ブリンとペイジは1998年の論文で検索結果の順位付けに使う PageRank を示した。考え方は「多くの重要なページからリンクされるページは重要である」である。この定義は自分自身を含む循環した定義に見えるが固有ベクトルとして書くと1つに定まる。</p>
<p>ネット上をランダムに移動する閲覧者を考える。閲覧者は今のページにあるリンクの中から1つを等しい確率で選んで移る。これは第4節のマルコフ連鎖であり PageRank は<strong>この連鎖の定常分布</strong>である。すなわちリンク行列の固有値1の固有ベクトルである。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="3ページのリンク構造と PageRank">
  <defs><marker id="ah08e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--sub)"/></marker></defs>
  <g stroke="var(--sub)" stroke-width="2" fill="none" marker-end="url(#ah08e)">
    <line x1="192.3" y1="139.3" x2="373.4" y2="78.8"/>
    <line x1="192.3" y1="160.7" x2="363.9" y2="218.0"/>
    <line x1="400" y1="96" x2="400" y2="192"/>
    <path d="M370.6 247 Q 250 290 180 183"/>
  </g>
  <circle cx="160" cy="150" r="34" fill="var(--warm)" fill-opacity="0.85"/>
  <circle cx="400" cy="70" r="24" fill="var(--cool)" fill-opacity="0.85"/>
  <circle cx="400" cy="230" r="34" fill="var(--warm)" fill-opacity="0.85"/>
  <g font-size="16" font-weight="700" fill="#fff" text-anchor="middle"><text x="160" y="156">A</text><text x="400" y="76">B</text><text x="400" y="236">C</text></g>
  <g font-size="13" fill="var(--ink)"><text x="96" y="104">PageRank 0.4</text><text x="432" y="74">0.2</text><text x="442" y="236">0.4</text></g>
  <g font-size="12" fill="var(--sub)"><text x="262" y="96">1/2</text><text x="262" y="214">1/2</text><text x="408" y="150">1</text><text x="250" y="286">1</text></g>
  <g font-size="13" fill="var(--ink)">
    <text x="510" y="96">A は B と C へリンク</text>
    <text x="510" y="120">B は C へリンク</text>
    <text x="510" y="144">C は A へリンク</text>
    <text x="510" y="182">r ＝ M r の解</text>
    <text x="510" y="206">r ＝ (0.4, 0.2, 0.4)</text>
  </g>
</svg>
<figcaption>矢印の数字は閲覧者がそのリンクを選ぶ確率である。円の大きさは PageRank の大きさに対応する。B はリンクを1本しか受けず値が小さい。C は2本受け A は C の全票を受けるので2つの値が等しくなる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 5</div>
<p>図の3ページの PageRank \(\boldsymbol{r}=(r_A, r_B, r_C)\) を求めよ。</p>
<details open><summary>解き方</summary><div>リンク行列 M の第 j 列はページ j から各ページへ移る確率である。<br>\(M=\begin{pmatrix} 0 & 0 & 1 \\ 1/2 & 0 & 0 \\ 1/2 & 1 & 0 \end{pmatrix}\) である。<br>\(M\boldsymbol{r}=\boldsymbol{r}\) を成分で書く。\(r_A=r_C\) ／ \(r_B=\dfrac{1}{2}r_A\) ／ \(r_C=\dfrac{1}{2}r_A+r_B\) である。<br>\(r_A=2r_B\) と \(r_C=r_A\) を和が1の条件に代入すると \(5r_B=1\) である。<br>答えは \(\boldsymbol{r}=(0.4, 0.2, 0.4)\) である。第3式は \(0.2+0.2=0.4\) で成り立つ。</div></details></div>

<p>実際の PageRank ではリンクをたどる確率を d として残りの確率 \(1-d\) で全ページから無作為に1つへ移ると仮定する。論文は d を通常0.85に設定すると述べている。この修正で閉じた輪があっても定常分布が1つに定まる。リンクを出さないページには別の約束を加えて扱う。数十億ページの固有ベクトルは固有方程式では解けないので \(\boldsymbol{r}\) に M を繰り返し掛けて収束させる。この方法をべき乗法と呼ぶ。</p>

<h2 id="s6">応用2 主成分分析とAIの埋め込み</h2>
<h3>主成分分析</h3>
<p>多数の変数をもつデータを少数の指標に要約する方法が<strong>主成分分析</strong>である。2科目の試験の点数を例にとる。各科目の分散と2科目の共分散を並べた行列を分散共分散行列と呼ぶ。この行列は対称行列なので第3節から直交する固有ベクトルをもつ。</p>
<p><strong class="hit">最大の固有値の固有ベクトルの方向がデータのばらつきが最大になる方向である</strong>。この方向を第1主成分と呼ぶ。固有値はその方向のばらつきの大きさであり全固有値の和に対する比を寄与率と呼ぶ。</p>

<div class="ex"><div class="ex-h">例題 6</div>
<p>2科目の点数の分散共分散行列が \(\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}\) であった。第1主成分の方向と寄与率を求めよ。</p>
<details open><summary>解き方</summary><div>例題1から固有値は3と1で固有値3の固有ベクトルは (1, 1) である。<br>第1主成分は2科目を同じ重みで足す方向で合計点に当たる。<br>寄与率は \(\dfrac{3}{3+1}=0.75\) である。<br>合計点の1つの指標でばらつき全体の75%を説明できる。</div></details></div>

<h3>埋め込みとコサイン類似度</h3>
<p>現在の文章を扱うAIは単語や文章を数百から数千の成分をもつベクトルに変換して計算する。このベクトルを<strong>埋め込み</strong>と呼ぶ。意味が近い文章ほどベクトルの向きが近くなるように学習される。</p>
<p>2つのベクトルの向きの近さは第2章の内積で測る。\(\boldsymbol{a}\cdot\boldsymbol{b}=|\boldsymbol{a}||\boldsymbol{b}|\cos\theta\) を変形した次の値を<strong>コサイン類似度</strong>と呼ぶ。</p>
\[ \cos\theta=\frac{\boldsymbol{a}\cdot\boldsymbol{b}}{|\boldsymbol{a}||\boldsymbol{b}|} \]
<p>値は −1 から1の範囲にあり1に近いほど向きが近い。<strong class="hit">AIの類似文書検索の中心にある計算は高校で学ぶ内積と同じである</strong>。成分の数が2や3から数千に増えるだけで式の形は変わらない。</p>

<div class="ex"><div class="ex-h">例題 7</div>
<p>2つの埋め込み \(\boldsymbol{a}=(1, 2, 2)\) と \(\boldsymbol{b}=(2, 1, 2)\) のコサイン類似度を求めよ。</p>
<details open><summary>解き方</summary><div>内積は \(1\cdot 2+2\cdot 1+2\cdot 2=8\) である。<br>大きさはどちらも \(\sqrt{1+4+4}=3\) である。<br>答えは \(\dfrac{8}{3\times 3}=\dfrac{8}{9}\) である。</div></details></div>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">主成分分析の第1主成分は市場全体の値動きである</p>
<p>多数の銘柄の日次収益率に主成分分析を行うと第1主成分は全銘柄がそろって動く方向になることが多い。株価指数に相当する成分である。</p>
</aside>

<h2 id="s7">現実世界の固有ベクトル</h2>
<p>固有ベクトルの考え方は数学と科学のさまざまな場面で別々に現れた。ロシアの数学者マルコフは1906年に後にマルコフ連鎖と呼ばれる確率過程の研究を発表した。イギリスの統計学者ピアソンは1901年にデータに最もよく当てはまる直線と平面の論文を書き主成分分析の起源とされる。主成分分析の名称は1933年のホテリングの論文による。単語の埋め込みを大規模に学習する word2vec は2013年にミコロフらが発表した。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>量子力学では原子のエネルギーの値がある演算子の固有値として求まる。水素原子が特定の波長の光だけを出す理由はエネルギーが固有値の飛び飛びの値に限られるからである。橋や建物の設計でも構造の固有振動数を固有値問題として計算し地震の揺れと共振しないように設計する。</p>
</aside>

<h2 id="s8">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 固有値</div>
<p class="qz-q">\(\begin{pmatrix} 5 & 2 \\ 2 & 2 \end{pmatrix}\) の固有値として正しい組を1つ選べ。</p>
<ol><li>2 と 5</li><li>1 と 6</li><li>3 と 4</li><li>−1 と 6</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。トレースは7で行列式は \(10-4=6\) である。固有方程式は \(\lambda^2-7\lambda+6=(\lambda-1)(\lambda-6)=0\) である。和が7で積が6になる組を選んでもよい。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 固有ベクトル</div>
<p class="qz-q">問1の行列の固有値6に対する固有ベクトルとして正しいものを1つ選べ。</p>
<ol><li>(1, 2)</li><li>(1, −2)</li><li>(2, 1)</li><li>(2, −1)</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\(A-6E=\begin{pmatrix} -1 & 2 \\ 2 & -4 \end{pmatrix}\) で条件は \(x=2y\) である。検算すると \(A(2,1)=(12, 6)=6(2,1)\) である。2 の (1, −2) は固有値1の固有ベクトルであり取り違えやすい。1 の (1, 2) は A で (9, 6) に移り固有ベクトルではない。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 固有ベクトルによる n 乗の計算</div>
<p class="qz-q">\(A=\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}\) について \(A^4\begin{pmatrix} 3 \\ 1 \end{pmatrix}\) を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは (163, 161) である。\((3,1)=2(1,1)+(1,-1)\) と固有ベクトルに分解する。\(A^4\) を掛けると \(2\cdot 3^4(1,1)+1^4(1,-1)=(162+1,\ 162-1)\) である。例題3の公式でも \(\dfrac{1}{2}(82\cdot 3+80\cdot 1,\ 80\cdot 3+82\cdot 1)=(163, 161)\) となる。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 定常分布</div>
<p class="qz-q">毎期 A の 80% が A に残り 20% が B に移る。B の 10% が A に移り 90% が B に残る。長期的に A にいる割合を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \(\dfrac{1}{3}\) である。定常状態では A から出る量と A に入る量が等しい。\(0.2\pi_A=0.1\pi_B\) から \(\pi_B=2\pi_A\) で \(\pi_A=\dfrac{1}{3}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 実数の固有値をもたない行列</div>
<p class="qz-q">次の行列のうち実数の固有値をもたないものを1つ選べ。</p>
<ol><li>\(\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\)</li><li>\(\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\)</li><li>\(\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\)</li><li>\(\begin{pmatrix} 2 & 0 \\ 0 & -3 \end{pmatrix}\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\(90^\circ\) の回転で固有方程式は \(\lambda^2+1=0\) である。1 はせん断で固有値1をもつ。2 は直線 y＝x に関する対称移動で固有値は1と −1 である。4 は固有値2と −3 である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ コサイン類似度</div>
<p class="qz-q">ベクトル (1, 1, 0, 1) と (1, 0, 1, 1) のコサイン類似度を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \(\dfrac{2}{3}\) である。内積は \(1+0+0+1=2\) で大きさはどちらも \(\sqrt{3}\) である。\(\dfrac{2}{\sqrt{3}\sqrt{3}}=\dfrac{2}{3}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ PageRank</div>
<p class="qz-q">3ページ A・B・C がある。A は B へ・B は C へ・C は A と B へリンクする。ダンピングを考えない PageRank の \(r_A\) を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 0.2 である。C の票は A と B に半分ずつ渡る。\(r_A=\dfrac{1}{2}r_C\) ／ \(r_B=r_A+\dfrac{1}{2}r_C\) ／ \(r_C=r_B\) である。\(r_B=r_C=t\) とすると \(r_A=\dfrac{t}{2}\) で和は \(2.5t=1\) から \(t=0.4\) である。\(r_A=0.2\) で第2式は \(0.2+0.2=0.4\) で成り立つ。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 収束の速さ</div>
<p class="qz-q">第4節の例で定常分布との差は毎月0.6倍になる。差が初めの差の10分の1未満になるのは何か月後か。最小の整数で答えよ。</p>
<details><summary>解答と解説</summary><div>答えは5か月後である。\(0.6^4=0.1296\) は0.1以上で \(0.6^5=0.07776\) は0.1未満である。2番目の固有値が1に近いほど収束は遅くなる。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
Av＝λv かつ v≠0 を満たす λ が固有値で v が固有ベクトルである。向きを変えない方向と倍率を表す。<br>
固有値は固有方程式 det(A−λE)＝0 の解で 2×2 では λ²−(tr A)λ＋det A＝0 である。<br>
固有値の和はトレースで積は行列式である。<br>
平行でない2本の固有ベクトルを並べた P で A＝PDP⁻¹ と対角化でき Aⁿ＝PDⁿP⁻¹ である。<br>
推移行列は固有値1をもちその固有ベクトルが定常分布である。収束の速さは2番目の固有値で決まる。<br>
PageRank はリンク行列の固有値1の固有ベクトルで主成分分析は分散共分散行列の固有ベクトルである。<br>
埋め込みのコサイン類似度は内積を大きさで割った cosθ である。</div>

<h2 id="s10">本全体の要点</h2>
<div class="tb-key"><b>ベクトルと線形代数の要点</b>
ベクトルは大きさと向きの量で和と実数倍で平面と空間のすべての点を表す。第1章と第4章。<br>
内積 a・b＝|a||b|cosθ は長さと角を計算に変える道具である。第2章。<br>
位置ベクトルとベクトル方程式で直線と平面と円を式で表す。第3章。<br>
複素数の積は回転と拡大でありド・モアブルの定理と1の n 乗根がそこから導かれる。第5章。<br>
行列は連立一次方程式と代入の合成を1つの表で扱い掃き出し法とランクで解の個数が決まる。第6章。<br>
行列は平面の変換であり行列式はその面積の拡大率で0なら逆に戻せない。第7章。<br>
固有ベクトルは変換で向きを変えない方向でマルコフ連鎖・PageRank・主成分分析の計算の中心にある。第8章。</div>

<h2 id="s11">残っている問い</h2>
<ul>
<li class="tb-vnote">推移行列の n 乗が定常分布に収束する条件は既約性と非周期性である。この章の例はその条件を満たすがその証明はペロン・フロベニウスの定理を用い大学の範囲になる。</li>
<li class="tb-vnote">現在のGoogle検索の順位付けで PageRank がどの程度の比重を占めるかは公開されていない。本文は1998年の論文の定義に基づく。</li>
<li class="tb-vnote">AIの埋め込みの学習方法と次元数は製品ごとに異なる。本文では数百から数千という幅で記し特定の製品の値は記さなかった。</li>
<li class="tb-vnote">主成分分析の第1主成分が市場全体の値動きに当たるという記述は多くの実証研究で報告される傾向であり期間と銘柄の選び方によって異なる。</li>
</ul>

<h2 id="s12">出典</h2>
<ol>
<li>Eigenvalues and eigenvectors — Wikipedia — https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors</li>
<li>Diagonalizable matrix — Wikipedia — https://en.wikipedia.org/wiki/Diagonalizable_matrix</li>
<li>Markov chain — Wikipedia — https://en.wikipedia.org/wiki/Markov_chain</li>
<li>Brin and Page The Anatomy of a Large-Scale Hypertextual Web Search Engine 1998 — http://infolab.stanford.edu/~backrub/google.html</li>
<li>PageRank — Wikipedia — https://en.wikipedia.org/wiki/PageRank</li>
<li>Principal component analysis — Wikipedia — https://en.wikipedia.org/wiki/Principal_component_analysis</li>
<li>Cosine similarity — Wikipedia — https://en.wikipedia.org/wiki/Cosine_similarity</li>
<li>Word2vec — Wikipedia — https://en.wikipedia.org/wiki/Word2vec</li>
<li>Cornell University Lecture 3 PageRank Algorithm The Mathematics of Google Search — https://pi.math.cornell.edu/~mec/Winter2009/RalucaRemus/Lecture3/lecture3.html</li>
</ol>
