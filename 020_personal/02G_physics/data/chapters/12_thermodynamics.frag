<!--meta
{"chapter": 12, "verify": {"date":"2026-10-15","checked":30,"match":23,"fixed":4,"unconfirmed":3}, "part": "物理", "title": "気体分子の運動と熱力学", "thesis": "気体の圧力は無数の分子が壁に衝突して与える力積の平均である。この見方から絶対温度は分子1個の平均運動エネルギーに比例することが導かれる。熱力学第1法則を4つの状態変化に当てはめると熱と仕事と内部エネルギーの出入りがすべて計算できる。"}
-->
<p>第5章では温度と熱量・内部エネルギー・熱力学第1法則の考え方を物理基礎の範囲で扱った。この章ではその内容を気体について定量的に積み上げる。まず気体の圧力と体積と温度の関係を法則として整理する。次に気体を多数の分子の集まりとみなし第10章の運動量と力積を使って圧力を導く。そこから温度と分子の運動エネルギーが結びつく。</p>
<p>共通テストの「物理」でこの範囲から問われる論点は5つである。理想気体の状態方程式・分子運動論による圧力と温度の意味・単原子分子の内部エネルギー・p−Vグラフと熱力学第1法則による状態変化の計算・熱効率である。どの問題も「状態方程式」「内部エネルギーの式」「第1法則」の3本の式を組み合わせて解く。</p>

<h2 id="s1">ボイル・シャルルの法則</h2>
<p>一定量の気体の状態は圧力 \( p \)・体積 \( V \)・温度 \( T \) の3つの量で表す。圧力の単位は Pa で \( 1\,\mathrm{Pa}=1\,\mathrm{N/m^2} \) である。温度は絶対温度 \( T \) [K] で表し セルシウス温度 \( t \) [℃] とは \( T=t+273 \) の関係にある。</p>
<div class="tb-tw"><table>
<thead><tr><th>法則</th><th>一定に保つ量</th><th>関係</th></tr></thead>
<tbody>
<tr><td>ボイルの法則 1662年</td><td>温度</td><td>\( pV=\text{一定} \)。圧力と体積は反比例する</td></tr>
<tr><td>シャルルの法則</td><td>圧力</td><td>\( V/T=\text{一定} \)。体積は絶対温度に比例する</td></tr>
<tr><td>ボイル・シャルルの法則</td><td>気体の量</td><td>\( \dfrac{pV}{T}=\text{一定} \)</td></tr>
</tbody></table></div>
<p>シャルルの法則では一定の圧力のもとで温度が1 K 上がるごとに体積が0 ℃のときの体積の 1/273 ずつ増える。この直線を低温側に延ばすと −273 ℃で体積が0になる。<strong class="hit">この直線が体積0に達する温度を0とする目盛りが絶対温度である</strong>。体積が絶対温度に比例するのはこのためである。現在の SI では 0 K はボルツマン定数の値を使って定義され −273.15 ℃にあたる。</p>
<p>2つの法則を組み合わせるとボイル・シャルルの法則になる。状態1から状態2へ変化するとき次の式で未知の量を求める。</p>
\[ \frac{p_1V_1}{T_1}=\frac{p_2V_2}{T_2} \]

<div class="ex"><div class="ex-h">例題 1</div>
<p>27 ℃・1.0×10<sup>5</sup> Pa で体積 3.0 L の気体を 127 ℃に加熱し体積を 2.0 L にした。このときの圧力を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 絶対温度に直す。T<sub>1</sub> ＝ 300 K ・ T<sub>2</sub> ＝ 400 K である。<br>手順2 p<sub>2</sub> ＝ p<sub>1</sub> × (V<sub>1</sub>/V<sub>2</sub>) × (T<sub>2</sub>/T<sub>1</sub>) ＝ 1.0×10<sup>5</sup> × (3.0/2.0) × (400/300) である。<br>手順3 p<sub>2</sub> ＝ 1.0×10<sup>5</sup> × 2.0 ＝ 2.0×10<sup>5</sup> Pa である。<br>答え 2.0×10<sup>5</sup> Pa</div></details></div>

<p>典型的な誤りはセルシウス温度のまま代入することである。27 と 127 で計算すると圧力が約 7.1 倍になり正しい 2.0 倍から大きく外れる。体積は両辺で同じ単位なら L のままでよいが温度は必ず K に直す。</p>

<h2 id="s2">理想気体の状態方程式</h2>
<p>ボイル・シャルルの法則の一定値 \( pV/T \) は気体の物質量 \( n \) [mol] に比例する。比例定数を \( R \) とおくと次の式になる。</p>
\[ pV=nRT \]
<p>これを<strong>理想気体の状態方程式</strong>と呼ぶ。\( R \) は<strong>気体定数</strong>で \( R\approx8.31\,\mathrm{J/(mol\cdot K)} \) である。気体の種類によらない。値は0 ℃・\( 1.013\times10^5 \) Pa で 1 mol の気体の体積が \( 22.4\times10^{-3}\,\mathrm{m^3} \) であることから求まる。</p>
\[ R=\frac{1.013\times10^5\times22.4\times10^{-3}}{1\times273}\approx8.31 \]
<p>状態方程式に厳密に従う仮想の気体を<strong>理想気体</strong>と呼ぶ。分子自身の大きさと分子間の力を無視した気体である。実在の気体も高温・低圧では理想気体として扱える。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>2.0 mol の理想気体を体積 5.0×10<sup>−2</sup> m<sup>3</sup> の容器に入れ 300 K に保った。圧力を求めよ。気体定数を 8.31 J/(mol·K) とする。</p>
<details open><summary>解き方</summary><div>手順1 p ＝ nRT/V である。<br>手順2 p ＝ 2.0 × 8.31 × 300 ÷ (5.0×10<sup>−2</sup>) ＝ 4986 ÷ 0.050 ≒ 9.97×10<sup>4</sup> Pa である。<br>答え 約 1.0×10<sup>5</sup> Pa</div></details></div>

<p>単位をそろえることが状態方程式の要点である。\( R=8.31 \) を使うときは圧力を Pa・体積を \( \mathrm{m^3} \)・温度を K で代入する。体積を L のまま代入すると答えが1000倍ずれる。</p>

<h2 id="s3">気体分子運動論</h2>
<p>気体の圧力は分子が容器の壁に衝突して壁を押す力から生じる。この考えで圧力を分子の運動から導く。</p>
<p>1辺の長さ \( L \) の立方体の容器に質量 \( m \) の分子が \( N \) 個ある。分子どうしの衝突は無視し壁との衝突は弾性衝突とする。分子どうしの衝突が弾性衝突なら含めても結論は変わらないが、その証明は高校の範囲を超える。1個の分子の速度の x 成分を \( v_x \) とする。</p>
<ol>
<li>分子が x 軸に垂直な壁に当たると x 成分が \( v_x \) から \( -v_x \) に変わる。分子の運動量の変化は \( -2mv_x \) である。作用反作用により壁は1回の衝突で力積 \( 2mv_x \) を受ける</li>
<li>分子は x 方向に距離 \( 2L \) を往復して同じ壁に戻る。かかる時間は \( 2L/v_x \) なので単位時間あたりの衝突回数は \( v_x/(2L) \) である</li>
<li>壁が単位時間に受ける力積が平均の力である。1個の分子では \( 2mv_x\times\frac{v_x}{2L}=\frac{mv_x{}^2}{L} \) である</li>
<li>N 個の分子について合計すると \( F=\frac{Nm\overline{v_x{}^2}}{L} \) である。\( \overline{v_x{}^2} \) は \( v_x{}^2 \) の平均である</li>
</ol>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="立方体の容器内の分子が壁に衝突して力積を与える">
  <defs>
    <marker id="ah12a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah12b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
  </defs>
  <g fill="none" stroke="var(--line)" stroke-width="1.5">
    <rect x="60" y="70" width="200" height="200"/>
    <polyline points="110,30 310,30 310,230"/>
    <polyline points="110,30 110,230 310,230" stroke-dasharray="4 4"/>
    <line x1="60" y1="70" x2="110" y2="30"/><line x1="260" y1="70" x2="310" y2="30"/><line x1="260" y1="270" x2="310" y2="230"/><line x1="60" y1="270" x2="110" y2="230" stroke-dasharray="4 4"/>
  </g>
  <polygon points="260,70 310,30 310,230 260,270" fill="var(--warm)" fill-opacity="0.12"/>
  <circle cx="140" cy="170" r="7" fill="var(--cool)"/>
  <line x1="148" y1="166" x2="240" y2="126" stroke="var(--cool)" stroke-width="2.2" marker-end="url(#ah12b)"/>
  <text x="150" y="196" font-size="12.5" fill="var(--cool)">分子 質量 m</text>
  <text x="160" y="290" font-size="12.5" text-anchor="middle" fill="var(--sub)">1辺 L</text>
  <text x="300" y="290" font-size="12.5" text-anchor="middle" fill="var(--warm)">着目する壁</text>
  <line x1="430" y1="40" x2="430" y2="240" stroke="var(--ink)" stroke-width="3"/>
  <circle cx="400" cy="100" r="9" fill="var(--cool)"/>
  <line x1="340" y1="100" x2="388" y2="100" stroke="var(--cool)" stroke-width="2.4" marker-end="url(#ah12b)"/>
  <text x="340" y="86" font-size="12.5" fill="var(--cool)">衝突前 mvₓ</text>
  <circle cx="400" cy="180" r="9" fill="var(--cool)"/>
  <line x1="390" y1="180" x2="342" y2="180" stroke="var(--cool)" stroke-width="2.4" marker-end="url(#ah12b)"/>
  <text x="340" y="206" font-size="12.5" fill="var(--cool)">衝突後 −mvₓ</text>
  <line x1="432" y1="140" x2="500" y2="140" stroke="var(--warm)" stroke-width="2.6" marker-end="url(#ah12a)"/>
  <g font-size="12.5" fill="var(--ink)">
    <text x="512" y="120">壁が1回に受ける力積 2mvₓ</text>
    <text x="512" y="146">同じ壁に戻る時間 2L／vₓ</text>
    <text x="512" y="172">1個の平均の力 mvₓ²／L</text>
  </g>
</svg>
<figcaption>左は1辺 L の立方体の容器で塗った面が着目する壁である。右は壁との1回の衝突で速度の x 成分だけが逆向きになる様子である。壁が受ける力積と衝突の頻度の積が平均の力になる。</figcaption>
</figure>

<p>分子の運動に特定の方向はないので \( \overline{v_x{}^2}=\overline{v_y{}^2}=\overline{v_z{}^2} \) である。\( v^2=v_x{}^2+v_y{}^2+v_z{}^2 \) より \( \overline{v_x{}^2}=\overline{v^2}/3 \) となる。圧力は力を壁の面積 \( L^2 \) で割り \( L^3=V \) を使う。</p>
\[ p=\frac{F}{L^2}=\frac{Nm\overline{v^2}}{3V} \]
<h3>温度の意味</h3>
<p>この式を変形すると \( pV=\frac{2}{3}N\cdot\frac{1}{2}m\overline{v^2} \) である。状態方程式 \( pV=nRT \) と比べる。分子の数は \( N=nN_A \) で \( N_A\approx6.02\times10^{23}\,/\mathrm{mol} \) はアボガドロ定数である。</p>
\[ \frac{1}{2}m\overline{v^2}=\frac{3}{2}\cdot\frac{R}{N_A}T=\frac{3}{2}kT \]
<p>\( k=R/N_A\approx1.38\times10^{-23}\,\mathrm{J/K} \) を<strong>ボルツマン定数</strong>と呼ぶ。<strong class="hit">絶対温度は気体分子1個の平均の運動エネルギーに比例する量である</strong>。比例係数は気体の種類によらない。同じ温度なら軽い分子ほど速く動く。</p>
<p>平均の運動エネルギーから分子の速さの目安として2乗平均速度 \( \sqrt{\overline{v^2}} \) が求まる。モル質量を \( M \) [kg/mol] とすると \( mN_A=M \) なので次の式になる。</p>
\[ \sqrt{\overline{v^2}}=\sqrt{\frac{3RT}{M}} \]

<div class="ex"><div class="ex-h">例題 3</div>
<p>300 K の窒素分子の2乗平均速度を求めよ。窒素のモル質量は 2.8×10<sup>−2</sup> kg/mol・気体定数は 8.31 J/(mol·K) とする。同じ温度のヘリウム（モル質量 4.0×10<sup>−3</sup> kg/mol）の値は窒素の何倍か。</p>
<details open><summary>解き方</summary><div>手順1 √(3 × 8.31 × 300 ÷ 0.028) ＝ √(2.67×10<sup>5</sup>) ≒ 517 m/s である。<br>手順2 2乗平均速度は √(1/M) に比例するので √(28/4.0) ＝ √7 ≒ 2.6 倍である。<br>答え 約 5.2×10<sup>2</sup> m/s ／ 約 2.6 倍</div></details></div>

<p>典型的な誤りはモル質量を g/mol のまま代入することである。窒素の 28 をそのまま入れると速さは √1000 倍小さくなる。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">気体の圧力は防球ネットが受けるファウルボールの総量である</p>
<p>1球の運動量の変化 2mvₓ に毎秒の球数を掛けた値がネットにかかる平均の力である。</p>
</aside>
<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">温度は1人あたり所得で内部エネルギーはGDPである</p>
<p>温度は分子1個あたりの平均運動エネルギーで決まり総量は分子数に比例する。</p>
</aside>

<h2 id="s4">内部エネルギー</h2>
<p>気体の分子がもつ運動エネルギーと分子間の力による位置エネルギーの総和を<strong>内部エネルギー</strong>と呼ぶ。理想気体では分子間の力を無視するので内部エネルギーは分子の運動エネルギーの和である。</p>
<p>ヘリウムやアルゴンのように1個の原子で1個の分子をつくる気体を単原子分子と呼ぶ。単原子分子の運動エネルギーは並進運動だけなので N 個の分子の内部エネルギーは次の式になる。</p>
\[ U=N\cdot\frac{3}{2}kT=\frac{3}{2}nRT \]
<p><strong class="hit">理想気体の内部エネルギーは物質量と絶対温度だけで決まる</strong>。圧力や体積が異なっても温度が同じなら内部エネルギーは等しい。変化の途中の経路にもよらない。温度変化が \( \Delta T \) なら \( \Delta U=\frac{3}{2}nR\Delta T \) である。</p>
<p>窒素や酸素のような2原子分子は回転運動のエネルギーももつので常温では \( U=\frac{5}{2}nRT \) となる。高温では分子内の振動のエネルギーも加わる。問題文が単原子分子と指定していない場合は \( \frac{3}{2} \) を使わない。</p>

<div class="ex"><div class="ex-h">例題 4</div>
<p>2.0 mol の単原子分子理想気体の温度が 300 K から 400 K に上がった。内部エネルギーの変化を求めよ。気体定数を 8.31 J/(mol·K) とする。</p>
<details open><summary>解き方</summary><div>手順1 ΔU ＝ (3/2) nRΔT である。<br>手順2 ΔU ＝ 1.5 × 2.0 × 8.31 × 100 ＝ 2493 J である。<br>答え 約 2.5×10<sup>3</sup> J の増加</div></details></div>

<h2 id="s5">気体がする仕事と熱力学第1法則</h2>
<p>断面積 \( S \) のピストンがついたシリンダーに気体を入れる。気体の圧力が \( p \) のとき気体はピストンを力 \( pS \) で押す。圧力を一定に保ったままピストンが \( \Delta x \) だけ動くと気体がする仕事は次の式になる。</p>
\[ W'=pS\Delta x=p\Delta V \]
<p>体積が増える膨張では \( W'\gt 0 \) で気体が外へ仕事をする。体積が減る圧縮では \( W'\lt 0 \) で気体が外から仕事をされる。圧力が変化する場合は体積を細かく区切って足し合わせる。<strong class="hit">気体がする仕事は p−Vグラフで変化の線と V 軸に囲まれた面積に等しい</strong>。F−tグラフの面積が力積になったのと同じ構造である。</p>
<h3>熱力学第1法則</h3>
<p>気体の内部エネルギーを変える方法は熱を与えることと仕事をすることの2つである。気体が受け取った熱量を \( Q \)・気体が外からされた仕事を \( W \) とすると次の式が成り立つ。</p>
\[ \Delta U=Q+W \]
<p>これを<strong>熱力学第1法則</strong>と呼ぶ。熱も含めたエネルギー保存則である。気体がした仕事 \( W'=-W \) を使うと \( Q=\Delta U+W' \) と書ける。受け取った熱は内部エネルギーの増加と外への仕事に分かれる。どちらの形で書くかを問題ごとに確認し符号を取り違えないことが要点である。</p>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">第1法則は内部エネルギーの残高の増減表である</p>
<p>受け取った熱 Q が入金で外にした仕事 W′ が出金である。残高の増加が ΔU で入金−出金に一致する。</p>
</aside>

<h3>4つの状態変化</h3>
<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="同じ状態から出発する定積・定圧・等温・断熱変化のp−Vグラフ">
  <rect x="260" y="100" width="270" height="160" fill="var(--warm)" fill-opacity="0.10"/>
  <g stroke="var(--ink)" stroke-width="1.5"><line x1="80" y1="260" x2="640" y2="260"/><line x1="80" y1="260" x2="80" y2="14"/></g>
  <g font-size="12" fill="var(--sub)" text-anchor="middle"><text x="80" y="278">0</text><text x="260" y="278">1</text><text x="440" y="278">2</text><text x="620" y="278">3</text></g>
  <g font-size="12" fill="var(--sub)" text-anchor="end"><text x="72" y="184">1</text><text x="72" y="104">2</text><text x="72" y="24">3</text></g>
  <text x="652" y="264" font-size="12" fill="var(--muted)">V</text>
  <text x="88" y="18" font-size="12" fill="var(--muted)">p</text>
  <line x1="260" y1="100" x2="260" y2="36" stroke="var(--accent)" stroke-width="2.4"/>
  <line x1="260" y1="100" x2="530" y2="100" stroke="var(--warm)" stroke-width="2.4"/>
  <polyline points="260.0,100.0 269.0,107.6 278.0,114.5 287.0,120.9 296.0,126.7 305.0,132.0 314.0,136.9 323.0,141.5 332.0,145.7 341.0,149.7 350.0,153.3 359.0,156.8 368.0,160.0 377.0,163.0 386.0,165.9 395.0,168.6 404.0,171.1 413.0,173.5 422.0,175.8 431.0,177.9 440.0,180.0 449.0,182.0 458.0,183.8 467.0,185.6 476.0,187.3 485.0,188.9 494.0,190.4 503.0,191.9 512.0,193.3 521.0,194.7 530.0,196.0" fill="none" stroke="var(--cool)" stroke-width="2.4"/>
  <polyline points="260.0,100.0 269.0,112.5 278.0,123.5 287.0,133.2 296.0,141.9 305.0,149.7 314.0,156.7 323.0,163.0 332.0,168.7 341.0,173.9 350.0,178.6 359.0,182.9 368.0,186.9 377.0,190.6 386.0,193.9 395.0,197.0 404.0,199.9 413.0,202.6 422.0,205.1 431.0,207.4 440.0,209.6 449.0,211.6 458.0,213.5 467.0,215.3 476.0,217.0 485.0,218.6 494.0,220.1 503.0,221.5 512.0,222.8 521.0,224.1 530.0,225.3" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-dasharray="7 4"/>
  <circle cx="260" cy="100" r="5" fill="var(--ink)"/>
  <text x="246" y="96" font-size="12.5" text-anchor="end" fill="var(--ink)">A</text>
  <g font-size="12.5">
    <text x="270" y="52" fill="var(--accent)">定積 加熱</text>
    <text x="540" y="104" fill="var(--warm)">定圧 膨張</text>
    <text x="540" y="200" fill="var(--cool)">等温 膨張 pV＝一定</text>
    <text x="540" y="229" fill="var(--ink)">断熱 膨張</text>
    <text x="395" y="248" text-anchor="middle" fill="var(--warm)">塗った面積＝定圧変化で気体がする仕事</text>
  </g>
</svg>
<figcaption>状態Aは V＝1 ・ p＝2 である。体積を2.5倍にするとき等温変化では p＝2÷2.5＝0.80 になる。単原子分子の断熱変化では p×V<sup>5/3</sup> が一定で p≒0.43 まで下がる。断熱線が等温線より急なのは膨張で温度も下がるからである。</figcaption>
</figure>

<div class="tb-tw"><table>
<thead><tr><th>変化</th><th>条件</th><th>気体がする仕事 W′</th><th>内部エネルギー ΔU</th><th>受け取る熱 Q</th></tr></thead>
<tbody>
<tr><td>定積変化</td><td>体積一定</td><td>0</td><td>\( \frac{3}{2}nR\Delta T \)</td><td>\( Q=\Delta U \)</td></tr>
<tr><td>定圧変化</td><td>圧力一定</td><td>\( p\Delta V=nR\Delta T \)</td><td>\( \frac{3}{2}nR\Delta T \)</td><td>\( Q=\frac{5}{2}nR\Delta T \)</td></tr>
<tr><td>等温変化</td><td>温度一定</td><td>p−Vグラフの面積</td><td>0</td><td>\( Q=W' \)</td></tr>
<tr><td>断熱変化</td><td>熱の出入りなし</td><td>\( W'=-\Delta U \)</td><td>膨張で減少・圧縮で増加</td><td>0</td></tr>
</tbody></table></div>
<p>内部エネルギーの列は単原子分子の場合である。断熱変化では \( Q=0 \) なので第1法則は \( \Delta U=-W' \) となる。断熱膨張では気体が外へ仕事をした分だけ内部エネルギーが減り温度が下がる。断熱圧縮では外からされた仕事の分だけ温度が上がる。自転車の空気入れの筒が熱くなるのは断熱圧縮に近い変化である。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>1.0 mol の単原子分子理想気体を圧力を一定に保って 300 K から 400 K まで加熱した。気体がした仕事・内部エネルギーの変化・受け取った熱量を求めよ。気体定数を 8.31 J/(mol·K) とする。</p>
<details open><summary>解き方</summary><div>手順1 定圧では pΔV ＝ nRΔT なので W′ ＝ 1.0 × 8.31 × 100 ＝ 831 J である。<br>手順2 ΔU ＝ (3/2) × 1.0 × 8.31 × 100 ≒ 1247 J である。<br>手順3 Q ＝ ΔU ＋ W′ ≒ 2078 J である。<br>答え W′ 約 8.3×10<sup>2</sup> J ／ ΔU 約 1.2×10<sup>3</sup> J ／ Q 約 2.1×10<sup>3</sup> J</div></details></div>

<p>典型的な誤りは定圧変化で熱量を \( \frac{3}{2}nR\Delta T \) とすることである。この値は内部エネルギーの増加だけで膨張に使った仕事が含まれない。</p>

<h2 id="s6">モル比熱</h2>
<p>1 mol の気体の温度を1 K 上げるのに必要な熱量を<strong>モル比熱</strong>と呼ぶ。物質量 \( n \) の気体が熱量 \( Q \) を受け取り温度が \( \Delta T \) 上がるとき \( Q=nC\Delta T \) である。気体のモル比熱は変化の条件で値が異なる。</p>
<ul>
<li><strong>定積モル比熱</strong> \( C_V \)。体積一定では仕事をしないので受け取った熱はすべて内部エネルギーになる。単原子分子では \( C_V=\frac{3}{2}R \) である</li>
<li><strong>定圧モル比熱</strong> \( C_p \)。圧力一定では膨張して \( nR\Delta T \) の仕事もするのでその分だけ多くの熱が必要になる</li>
</ul>
\[ C_p=C_V+R \]
<p>この関係を<strong>マイヤーの関係</strong>と呼ぶ。気体の種類によらず成り立つ。単原子分子では \( C_p=\frac{5}{2}R \) である。2原子分子では常温で \( C_V=\frac{5}{2}R \) で \( C_p=\frac{7}{2}R \) である。</p>
<div class="tb-bars"><h5>単原子分子のモル比熱 単位 J/(mol·K)</h5>
<div class="tb-bar"><span>定積 C<sub>V</sub>＝3R/2</span><u class="c"><i style="width:60%"></i></u><b>12.5</b></div>
<div class="tb-bar"><span>定圧 C<sub>p</sub>＝5R/2</span><u class="w"><i style="width:100%"></i></u><b>20.8</b></div>
</div>
<p>比熱比 \( \gamma=C_p/C_V \) は単原子分子で \( 5/3 \) である。断熱変化では \( pV^{\gamma}=\text{一定} \) が成り立つ。この式をポアソンの法則と呼ぶ。高校の物理では発展の内容である。</p>

<div class="ex"><div class="ex-h">例題 6</div>
<p>単原子分子理想気体 0.50 mol に定圧で 1040 J の熱を与えた。温度の上昇を求めよ。気体定数を 8.31 J/(mol·K) とする。</p>
<details open><summary>解き方</summary><div>手順1 定圧モル比熱は C<sub>p</sub> ＝ (5/2) × 8.31 ≒ 20.8 J/(mol·K) である。<br>手順2 ΔT ＝ Q ÷ (nC<sub>p</sub>) ＝ 1040 ÷ (0.50 × 20.8) ＝ 100 K である。<br>答え 100 K</div></details></div>

<h2 id="s7">熱機関と熱効率</h2>
<p>熱を受け取って仕事をくり返し取り出す装置を<strong>熱機関</strong>と呼ぶ。気体を元の状態に戻すまでの一連の変化をサイクルと呼ぶ。1サイクルで元の状態に戻るので内部エネルギーの変化は0である。第1法則より1サイクルで気体が外にした正味の仕事は受け取った熱から放出した熱を引いた値に等しい。</p>
\[ W'=Q_{\text{in}}-Q_{\text{out}} \qquad e=\frac{W'}{Q_{\text{in}}}=1-\frac{Q_{\text{out}}}{Q_{\text{in}}} \]
<p>\( e \) を<strong>熱効率</strong>と呼ぶ。<strong class="hit">正味の仕事は p−Vグラフでサイクルが囲む面積に等しい</strong>。サイクルを時計回りにたどると膨張で正の仕事・圧縮で負の仕事をし その差が囲まれた面積になる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 290" role="img" aria-label="長方形のサイクルとその面積が正味の仕事になる様子">
  <defs><marker id="ah12c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>
  <g stroke="var(--ink)" stroke-width="1.5"><line x1="90" y1="250" x2="600" y2="250"/><line x1="90" y1="250" x2="90" y2="20"/></g>
  <g font-size="12" fill="var(--sub)" text-anchor="middle"><text x="90" y="268">0</text><text x="290" y="268">1.0</text><text x="490" y="268">2.0</text></g>
  <g font-size="12" fill="var(--sub)" text-anchor="end"><text x="82" y="166">1.0</text><text x="82" y="78">2.0</text></g>
  <text x="610" y="268" font-size="12" fill="var(--muted)">V ×10⁻² m³</text>
  <text x="98" y="18" font-size="12" fill="var(--muted)">p ×10⁵ Pa</text>
  <g stroke="var(--line)" stroke-dasharray="3 3"><line x1="290" y1="250" x2="290" y2="162"/><line x1="490" y1="250" x2="490" y2="162"/><line x1="90" y1="162" x2="290" y2="162"/><line x1="90" y1="74" x2="290" y2="74"/></g>
  <rect x="290" y="74" width="200" height="88" fill="var(--accent)" fill-opacity="0.15" stroke="var(--ink)" stroke-width="2"/>
  <line x1="290" y1="140" x2="290" y2="110" stroke="var(--ink)" stroke-width="2" marker-end="url(#ah12c)"/>
  <line x1="370" y1="74" x2="410" y2="74" stroke="var(--ink)" stroke-width="2" marker-end="url(#ah12c)"/>
  <line x1="490" y1="100" x2="490" y2="130" stroke="var(--ink)" stroke-width="2" marker-end="url(#ah12c)"/>
  <line x1="410" y1="162" x2="370" y2="162" stroke="var(--ink)" stroke-width="2" marker-end="url(#ah12c)"/>
  <g font-size="13" font-weight="600"><text x="276" y="178" text-anchor="end">A</text><text x="276" y="70" text-anchor="end">B</text><text x="504" y="70">C</text><text x="504" y="178">D</text></g>
  <text x="390" y="124" font-size="13" text-anchor="middle" fill="var(--ink)">正味の仕事 1000 J</text>
  <g font-size="12.5">
    <text x="180" y="124" text-anchor="middle" fill="var(--warm)">受け取る 1500 J</text>
    <text x="390" y="56" text-anchor="middle" fill="var(--warm)">受け取る 5000 J</text>
    <text x="510" y="124" fill="var(--cool)">放出 3000 J</text>
    <text x="390" y="190" text-anchor="middle" fill="var(--cool)">放出 2500 J</text>
  </g>
</svg>
<figcaption>単原子分子の気体を A→B 定積・B→C 定圧・C→D 定積・D→A 定圧と変化させる。囲まれた面積は 1.0×10⁵ Pa × 1.0×10⁻² m³ ＝ 1000 J である。受け取る熱の合計は 6500 J で放出は 5500 J でありその差が面積に一致する。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 7</div>
<p>上の図のサイクルで各過程の熱の出入りを求め熱効率を計算せよ。気体は単原子分子の理想気体とする。</p>
<details open><summary>解き方</summary><div>手順1 定積では Q ＝ (3/2)VΔp・定圧では Q ＝ (5/2)pΔV である。nRΔT ＝ Δ(pV) を使って温度を経由せずに計算する。<br>手順2 A→B は 1.5 × 1.0×10<sup>−2</sup> × 1.0×10<sup>5</sup> ＝ 1500 J を受け取る。B→C は 2.5 × 2.0×10<sup>5</sup> × 1.0×10<sup>−2</sup> ＝ 5000 J を受け取る。<br>手順3 C→D は 1.5 × 2.0×10<sup>−2</sup> × 1.0×10<sup>5</sup> ＝ 3000 J を放出する。D→A は 2.5 × 1.0×10<sup>5</sup> × 1.0×10<sup>−2</sup> ＝ 2500 J を放出する。<br>手順4 Q<sub>in</sub> ＝ 6500 J で W′ ＝ 1000 J なので e ＝ 1000 ÷ 6500 ≒ 0.15 である。<br>答え 約 15 ％</div></details></div>

<p>典型的な誤りは熱効率の分母に Q<sub>in</sub> − Q<sub>out</sub> や放出した熱を入れることである。分母は受け取った熱の合計だけである。</p>
<h3>熱効率の上限</h3>
<p>第5章で扱った熱力学第2法則により熱機関は受け取った熱をすべて仕事に変えることはできない。必ず低温の熱源に熱を捨てる。高温 \( T_H \) と低温 \( T_L \) の熱源の間で働く熱機関の熱効率は \( 1-T_L/T_H \) を超えない。この上限はカルノーが1824年に考察した理想的なサイクルの効率である。式の形は後に絶対温度を使って表された。600 K と 300 K の間なら上限は50％である。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">熱機関の Q<sub>out</sub> は手数料ゼロにできない取引コストである</p>
<p>受け取った熱の一部は必ず低温側へ払う。利回りの上限は2つの温度の比で決まる。</p>
</aside>

<h2 id="s8">現実世界の熱効率</h2>
<p>自動車のエンジンは燃料の燃焼で高温になった気体の膨張から仕事を取り出す熱機関である。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>トヨタ自動車は2016年に排気量 2.5 L のガソリンエンジンで最大熱効率 40％・ハイブリッド車用で 41％を達成したと発表した。残りの約6割は排気と冷却と機械の作動に伴う損失として失われる。高温側を仮に 2000 K・低温側を 300 K とすると上限は 85％である。実際の熱効率はその半分以下である。</p>
</aside>

<h2 id="s9">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ ボイル・シャルルの法則</div>
<p class="qz-q">一定量の理想気体の圧力を2倍にし絶対温度を3倍にした。体積は元の何倍になるか。最も適当なものを1つ選べ。</p>
<ol><li>2/3 倍</li><li>3/2 倍</li><li>6 倍</li><li>1/6 倍</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。V は T/p に比例するので 3 ÷ 2 ＝ 3/2 倍である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 状態方程式</div>
<p class="qz-q">体積 8.31×10<sup>−3</sup> m<sup>3</sup> の容器に理想気体を入れ 400 K に保つと圧力が 2.0×10<sup>5</sup> Pa になった。気体の物質量 [mol] を求めよ。気体定数を 8.31 J/(mol·K) とする。</p>
<details><summary>解答と解説</summary><div>答えは 0.50 mol である。n ＝ pV/(RT) ＝ 2.0×10<sup>5</sup> × 8.31×10<sup>−3</sup> ÷ (8.31 × 400) ＝ 1662 ÷ 3324 ＝ 0.50 である。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 分子の速さ</div>
<p class="qz-q">同じ容器に入った同じ温度の水素分子 H<sub>2</sub> と酸素分子 O<sub>2</sub> について正しい記述を1つ選べ。</p>
<ol><li>平均の運動エネルギーは酸素分子のほうが16倍大きい</li><li>平均の運動エネルギーは等しく2乗平均速度は水素分子が4倍である</li><li>平均の運動エネルギーは等しく2乗平均速度は水素分子が16倍である</li><li>2乗平均速度は等しく平均の運動エネルギーは酸素分子が16倍である</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。平均の運動エネルギーは (3/2)kT で温度だけで決まる。2乗平均速度は √(1/M) に比例しモル質量の比は 2:32 ＝ 1:16 なので √16 ＝ 4 倍である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 内部エネルギーと第1法則</div>
<p class="qz-q">単原子分子理想気体 2.0 mol を体積一定で加熱して温度を 50 K 上げた。気体が受け取った熱量 [J] を有効数字2桁で求めよ。気体定数を 8.31 J/(mol·K) とする。</p>
<details><summary>解答と解説</summary><div>答えは 1.2×10<sup>3</sup> J である。定積なので W′ ＝ 0 で Q ＝ ΔU ＝ 1.5 × 2.0 × 8.31 × 50 ≒ 1247 J である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 状態変化の判定</div>
<p class="qz-q">理想気体の状態変化について誤りを含む記述を1つ選べ。</p>
<ol><li>等温膨張では気体が受け取った熱はすべて外への仕事になる</li><li>断熱膨張では気体の温度が下がる</li><li>定積変化では気体は仕事をしない</li><li>断熱圧縮では外から熱を受け取らないので温度は変わらない</li></ol>
<details><summary>解答と解説</summary><div>正解は 4 である。断熱圧縮では Q ＝ 0 でも外からされた仕事の分だけ内部エネルギーが増え温度は上がる。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ p−Vグラフの仕事</div>
<p class="qz-q">理想気体の状態を p−V グラフ上で (V, p) ＝ (1.0×10<sup>−3</sup> m<sup>3</sup>, 3.0×10<sup>5</sup> Pa) から (3.0×10<sup>−3</sup> m<sup>3</sup>, 1.0×10<sup>5</sup> Pa) まで直線に沿って変化させた。この間に気体がした仕事 [J] を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 400 J である。グラフと V 軸に囲まれた台形の面積は (3.0×10<sup>5</sup> ＋ 1.0×10<sup>5</sup>) × 2.0×10<sup>−3</sup> ÷ 2 ＝ 400 J である。始めと終わりで pV が 300 J で等しいので温度は同じで ΔU ＝ 0 である。受け取った熱も 400 J である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 熱効率</div>
<p class="qz-q">ある熱機関が1サイクルで高温の熱源から 2.0×10<sup>3</sup> J の熱を受け取り低温の熱源に 1.5×10<sup>3</sup> J の熱を放出する。熱効率として正しいものを1つ選べ。</p>
<ol><li>0.25</li><li>0.33</li><li>0.75</li><li>1.3</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。正味の仕事は 2.0×10<sup>3</sup> − 1.5×10<sup>3</sup> ＝ 500 J で e ＝ 500 ÷ 2000 ＝ 0.25 である。2 は放出した熱で割った誤りである。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ モル比熱</div>
<p class="qz-q">単原子分子理想気体の定圧モル比熱が定積モル比熱より大きい理由として最も適当なものを1つ選べ。</p>
<ol><li>定圧では分子の質量が増えるため</li><li>定圧では温度上昇に加えて膨張による仕事の分の熱が必要なため</li><li>定圧では内部エネルギーの式が 5/2 nRT に変わるため</li><li>定積では外から仕事をされるため</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。内部エネルギーは温度だけで決まり条件によらず (3/2)nRT である。定圧では膨張して nRΔT の仕事をする分だけ余分に熱が必要で C<sub>p</sub> ＝ C<sub>V</sub> ＋ R となる。</div></details></div>

<h2 id="s10">この章の要点</h2>
<div class="tb-key"><b>要点</b>
pV/T＝一定 ／ pV＝nRT。温度は K・圧力は Pa・体積は m³ で代入する。<br>
分子運動論より p＝Nm\(\overline{v^2}\)/(3V)。分子1個の平均運動エネルギーは (3/2)kT で温度だけで決まる。<br>
単原子分子の内部エネルギー U＝(3/2)nRT。理想気体の U は温度だけで決まる。<br>
気体がする仕事は p−Vグラフの面積。定圧なら W′＝pΔV＝nRΔT。<br>
第1法則 ΔU＝Q＋W（W は外からされた仕事）／ Q＝ΔU＋W′（W′ は気体がした仕事）。<br>
定積 W′＝0 ／ 等温 ΔU＝0 ／ 断熱 Q＝0。C<sub>p</sub>＝C<sub>V</sub>＋R で単原子分子は C<sub>V</sub>＝3R/2。<br>
熱効率 e＝W′/Q<sub>in</sub>＝1−Q<sub>out</sub>/Q<sub>in</sub>。正味の仕事はサイクルが囲む面積である。</div>

<h2 id="s11">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>温度は、温度計で測る量と分子の運動の激しさの尺度の、どちらとして理解すべきか。</strong> 本文はボイル・シャルルの法則で温度を気体の体積や圧力と結び付けて扱い、分子運動論では絶対温度が分子1個の平均運動エネルギーに比例することを導いた。どちらの見方を出発点とするかで温度の意味の説明が異なる。</li>
<li class="tb-vnote"><strong>熱効率の上限と実際の熱効率の差は、どこまで縮められるとみるべきか。</strong> 本文の仮の値では上限は85％であり、実際のエンジンの最大熱効率は40％から41％である。残りは排気と冷却と機械の作動に伴う損失として失われ、どの損失を減らせるとみるかで見通しが異なる。</li>
</ul>

<h2 id="s12">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Kinetic theory of gases — Wikipedia — https://en.wikipedia.org/wiki/Kinetic_theory_of_gases</li>
<li>Ideal gas law — Wikipedia — https://en.wikipedia.org/wiki/Ideal_gas_law</li>
<li>Boltzmann constant — Wikipedia — https://en.wikipedia.org/wiki/Boltzmann_constant</li>
<li>Mayer's relation — Wikipedia — https://en.wikipedia.org/wiki/Mayer%27s_relation</li>
<li>Carnot cycle — Wikipedia — https://en.wikipedia.org/wiki/Carnot_cycle</li>
<li>トヨタ自動車 TNGAに基づき新開発したパワートレーン 2016年12月6日 — https://global.toyota/jp/detail/14384373</li>
<li>Boyle's law — Wikipedia — https://en.wikipedia.org/wiki/Boyle%27s_law</li>
<li>CODATA Value molar gas constant — NIST — https://physics.nist.gov/cgi-bin/cuu/Value?r</li>
<li>CODATA Value Boltzmann constant — NIST — https://physics.nist.gov/cgi-bin/cuu/Value?k</li>
<li>CODATA Value Avogadro constant — NIST — https://physics.nist.gov/cgi-bin/cuu/Value?na</li>
</ol>
