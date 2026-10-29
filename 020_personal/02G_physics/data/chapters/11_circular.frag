<!--meta
{"chapter": 11, "verify": {"date":"2026-10-15","checked":27,"match":24,"fixed":3,"unconfirmed":0}, "part": "物理", "title": "円運動・単振動・万有引力", "thesis": "速さが一定でも向きが変わる円運動には中心向きの加速度 v²/r がある。その円運動を真横から見た影が単振動で復元力が変位に比例する運動である。惑星の公転を円運動として扱いケプラーの第3法則と組み合わせると逆2乗の万有引力が導かれる。"}
-->
<p>第3章の運動方程式は直線運動で使ってきた。第9章では平面内の放物運動を x と y の成分に分けて扱った。この章ではもう1つの基本的な平面運動である円運動を扱う。円運動では速さが一定でも速度の向きが絶えず変わるので加速度がある。その加速度を導くことが出発点である。</p>
<p>円運動を真横から見ると物体は往復運動をする。これが単振動である。ばね振り子と振り子の周期は単振動として求める。さらに惑星の公転を円運動とみなすと万有引力の法則が導かれる。共通テストの「物理」では向心力の式・鉛直面内の円運動の条件・単振動の周期・万有引力による運動と宇宙速度が繰り返し問われる。</p>

<h2 id="s1">等速円運動の角速度と周期</h2>
<p>物体が円周上を一定の速さで回る運動を<strong>等速円運動</strong>と呼ぶ。回転の速さは角度で測ると扱いやすい。角度は弧度法で表す。半径 \( r \) の円で中心角 \( \theta \) に対する弧の長さを \( s \) とすると \( \theta=s/r \) であり単位は rad である。1周は \( 2\pi \) rad である。</p>
<p>単位時間あたりに回転する角度を<strong>角速度</strong>と呼び \( \omega \) で表す。単位は rad/s である。</p>
\[ \omega=\frac{\Delta\theta}{\Delta t} \]
<p>時間 \( \Delta t \) の間に物体が進む弧の長さは \( r\Delta\theta \) なので速さは次の式になる。</p>
\[ v=\frac{r\Delta\theta}{\Delta t}=r\omega \]
<p>1周に要する時間を<strong>周期</strong> \( T \) と呼ぶ。1周は \( 2\pi \) rad なので \( T=2\pi/\omega \) である。1秒あたりの回転数 \( n \) は \( n=1/T \) で単位は Hz または 1/s である。</p>
<p>角速度は同じ回転体の上ではどこでも等しい。速さは半径に比例する。回転する円盤の外側ほど速く動くのはこのためである。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>半径 0.50 m の円周上を周期 2.0 s で等速円運動する物体がある。角速度と速さを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 ω ＝ 2π ÷ T ＝ 2π ÷ 2.0 ＝ π ≒ 3.14 rad/s である。<br>手順2 v ＝ rω ＝ 0.50 × 3.14 ≒ 1.57 m/s である。<br>答え 角速度 3.1 rad/s ／ 速さ 1.6 m/s</div></details></div>

<p>典型的な誤りは角度を度のまま使うことである。\( v=r\omega \) は角度を rad で測ったときにだけ成り立つ。</p>

<h2 id="s2">向心加速度と向心力</h2>
<p>等速円運動では速さが一定でも速度の向きが変わる。速度が変わるので加速度がある。その大きさと向きを求める。</p>
<p>短い時間 \( \Delta t \) の間に物体は角度 \( \Delta\theta=\omega\Delta t \) だけ進む。速度ベクトルも同じ角度だけ向きを変える。2つの速度ベクトルの始点をそろえると大きさ \( v \) の2辺と頂角 \( \Delta\theta \) の二等辺三角形ができる。\( \Delta\theta \) が小さいとき底辺の長さ \( |\Delta\vec{v}| \) は弧の長さ \( v\Delta\theta \) に等しいとみなせる。</p>
\[ a=\frac{|\Delta\vec{v}|}{\Delta t}=\frac{v\,\Delta\theta}{\Delta t}=v\omega=r\omega^2=\frac{v^2}{r} \]
<p>\( \Delta\vec{v} \) の向きは2つの速度の中間の向きに垂直で円の中心を向く。<strong class="hit">等速円運動の加速度は大きさ \( v^2/r \) で常に円の中心を向く</strong>。これを<strong>向心加速度</strong>と呼ぶ。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="等速円運動の速度と加速度の向きと速度の変化">
  <defs>
    <marker id="ah11a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
    <marker id="ah11b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
  </defs>
  <text x="20" y="24" font-size="13" fill="var(--muted)">円周上の物体</text>
  <text x="400" y="24" font-size="13" fill="var(--muted)">速度の始点をそろえる</text>
  <circle cx="180" cy="140" r="100" fill="none" stroke="var(--line)" stroke-width="1.5"/>
  <circle cx="180" cy="140" r="3" fill="var(--ink)"/>
  <line x1="180" y1="140" x2="266.6" y2="90" stroke="var(--sub)" stroke-dasharray="4 3"/>
  <text x="214" y="132" font-size="12.5" fill="var(--sub)">r</text>
  <circle cx="266.6" cy="90" r="7" fill="var(--ink)"/>
  <line x1="266.6" y1="90" x2="236.6" y2="38" stroke="var(--cool)" stroke-width="2.4" marker-end="url(#ah11a)"/>
  <text x="196" y="40" font-size="12.5" fill="var(--cool)">速度 v</text>
  <line x1="266.6" y1="90" x2="223.3" y2="115" stroke="var(--warm)" stroke-width="2.4" marker-end="url(#ah11b)"/>
  <text x="290" y="128" font-size="12.5" fill="var(--warm)">加速度 v²/r</text>
  <text x="290" y="146" font-size="12.5" fill="var(--warm)">中心向き</text>
  <line x1="520" y1="210" x2="460" y2="106.1" stroke="var(--cool)" stroke-width="2.2" marker-end="url(#ah11a)"/>
  <line x1="520" y1="210" x2="416.1" y2="150" stroke="var(--cool)" stroke-width="2.2" marker-end="url(#ah11a)"/>
  <line x1="460" y1="106.1" x2="419.5" y2="146.6" stroke="var(--warm)" stroke-width="2.4" marker-end="url(#ah11b)"/>
  <text x="496" y="140" font-size="12.5" fill="var(--cool)">はじめの速度</text>
  <text x="420" y="196" font-size="12.5" fill="var(--cool)">後の速度</text>
  <text x="420" y="114" font-size="12.5" fill="var(--warm)">Δv</text>
  <path d="M 504 182.3 A 32 32 0 0 0 492.3 194" fill="none" stroke="var(--sub)"/>
  <text x="540" y="236" font-size="12.5" text-anchor="middle" fill="var(--sub)">間の角 Δθ</text>
</svg>
<figcaption>左は反時計回りに回る物体の速度と加速度である。速度は円の接線方向で加速度は中心向きである。右は時間 Δt の前後の速度を同じ点から描いたもので差 Δv は中心の向きを向き大きさは約 vΔθ である。</figcaption>
</figure>

<p>運動方程式によれば加速度が中心向きなら力の合力も中心向きである。この中心向きの合力を<strong>向心力</strong>と呼ぶ。</p>
\[ m\frac{v^2}{r}=F \qquad mr\omega^2=F \]
<p>向心力は重力や弾性力のような新しい種類の力ではない。ひもの張力・摩擦力・万有引力など実際に働く力の合力が中心向きの役を担うときにその合力を向心力と呼ぶ。力の図に「向心力」を別の矢印として書き加えるのは典型的な誤りである。</p>

<aside class="an an-biz"><b>スタートアップで言えば</b>
<p class="an-h">向心力は役職名で人の名前ではない</p>
<p>CFO という職を誰かが担うように張力・摩擦力・重力のどれかが中心向きの役を担う。役職名を人数に数えると二重計上になる。</p>
</aside>

<div class="ex"><div class="ex-h">例題 2</div>
<p>質量 1000 kg の自動車が平らな道路の半径 50 m のカーブを速さ 10 m/s で曲がる。必要な向心力の大きさとそれを担う力を答えよ。タイヤと路面の静止摩擦係数が 0.80 のとき横すべりせずに曲がれる最大の速さも求めよ。重力加速度を 9.8 m/s² とする。</p>
<details open><summary>解き方</summary><div>手順1 向心力 F ＝ mv²/r ＝ 1000 × 10<sup>2</sup> ÷ 50 ＝ 2.0×10<sup>3</sup> N である。平らな道路では路面がタイヤに及ぼす静止摩擦力が中心向きに働く。<br>手順2 最大摩擦力は μmg なので mv²/r ≦ μmg である。<br>手順3 v ≦ √(μgr) ＝ √(0.80 × 9.8 × 50) ＝ √392 ≒ 19.8 m/s である。<br>答え 2.0×10<sup>3</sup> N で静止摩擦力が担う ／ 最大の速さ 約 20 m/s</div></details></div>

<p>最大の速さの式に質量が入らない点に注目する。摩擦力も必要な向心力もどちらも質量に比例するからである。</p>

<h2 id="s3">慣性力と遠心力</h2>
<p>ここまでは地面に固定した観測者から運動を見てきた。運動の法則がそのまま成り立つこのような座標系を慣性系と呼ぶ。加速度 \( \vec{a} \) で加速する電車やエレベーターの中の観測者から見ると物体には実際の力に加えて次の力が働いているように扱うと運動方程式が成り立つ。</p>
\[ \vec{F}_{\text{慣性}}=-m\vec{a} \]
<p>これを<strong>慣性力</strong>と呼ぶ。向きは観測者の加速度と逆で大きさは物体の質量に比例する。慣性力には反作用がない。他の物体が及ぼす力ではないからである。</p>
<p>上向きに加速度 \( a \) で加速するエレベーター内の人には下向きに \( ma \) の慣性力が加わる。体重計が示す値は垂直抗力 \( N=m(g+a) \) で静止時より大きい。下向きに加速すると \( N=m(g-a) \) となり \( a=g \) のとき体重計の値は0になる。これが無重量状態である。</p>
<h3>遠心力</h3>
<p>等速円運動する物体と一緒に回る観測者から見ると物体は静止している。この観測者の加速度は中心向きに \( r\omega^2 \) なので物体には中心から外向きに大きさ \( mr\omega^2=mv^2/r \) の慣性力が加わる。これを<strong>遠心力</strong>と呼ぶ。回転する観測者から見ると実際の力の合力と遠心力がつり合う。</p>
<p><strong class="hit">遠心力は回転する観測者の立場でだけ書く力である</strong>。地面から見た運動方程式 \( mv^2/r=F \) と回転する観測者のつり合いの式 \( F-mv^2/r=0 \) は同じ式を移項しただけである。どちらかの立場を1つ選び1つの式の中で混ぜない。地面から見て向心力と遠心力がつり合うと書くのは典型的な誤りである。つり合っていれば物体は等速直線運動をするはずである。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>質量 60 kg の人がエレベーターの中で体重計に乗っている。エレベーターが上向きに 2.0 m/s² で加速しているとき体重計が人に及ぼす力の大きさを求めよ。重力加速度を 9.8 m/s² とする。</p>
<details open><summary>解き方</summary><div>手順1 エレベーター内の観測者から見ると人には重力 mg と下向きの慣性力 ma と上向きの垂直抗力 N が働きつり合う。<br>手順2 N ＝ m(g ＋ a) ＝ 60 × (9.8 ＋ 2.0) ＝ 708 N である。<br>手順3 地面から見て運動方程式 60 × 2.0 ＝ N − 60 × 9.8 を立てても同じ値になる。<br>答え 約 7.1×10<sup>2</sup> N</div></details></div>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">慣性力は為替換算差額である</p>
<p>外貨建ての帳簿を円に直すときだけ現れ取引の相手がいない。加速する観測者に乗り換えたときだけ現れ反作用がない点が同じである。</p>
</aside>

<h2 id="s4">鉛直面内の円運動</h2>
<p>ひもにつけた小球を鉛直面内で円運動させる場合やジェットコースターが宙返りする場合は重力が仕事をするので速さが一定でない。それでも各瞬間には半径方向の運動方程式が成り立つ。解き方は2本の式を組み合わせる。</p>
<ol>
<li>速さは力学的エネルギー保存則で求める。張力や垂直抗力は運動の向きに垂直で仕事をしない</li>
<li>張力や垂直抗力は中心方向の運動方程式 \( mv^2/r=\text{中心向きの力の和} \) で求める</li>
</ol>

<figure class="tb-fig">
<svg viewBox="0 0 720 320" role="img" aria-label="鉛直面内の円運動の最高点と最下点に働く力">
  <defs>
    <marker id="ah11c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah11d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
  </defs>
  <circle cx="200" cy="160" r="100" fill="none" stroke="var(--line)" stroke-width="1.5"/>
  <circle cx="200" cy="160" r="3" fill="var(--ink)"/>
  <circle cx="200" cy="60" r="9" fill="var(--ink)"/>
  <circle cx="200" cy="260" r="9" fill="var(--ink)"/>
  <line x1="190" y1="60" x2="190" y2="110" stroke="var(--warm)" stroke-width="2.4" marker-end="url(#ah11c)"/>
  <text x="180" y="104" font-size="12.5" text-anchor="end" fill="var(--warm)">重力 mg</text>
  <line x1="210" y1="60" x2="210" y2="100" stroke="var(--cool)" stroke-width="2.4" marker-end="url(#ah11d)"/>
  <text x="218" y="96" font-size="12.5" fill="var(--cool)">張力 T₁</text>
  <line x1="190" y1="260" x2="190" y2="305" stroke="var(--warm)" stroke-width="2.4" marker-end="url(#ah11c)"/>
  <text x="128" y="300" font-size="12.5" fill="var(--warm)">重力 mg</text>
  <line x1="210" y1="260" x2="210" y2="190" stroke="var(--cool)" stroke-width="2.4" marker-end="url(#ah11d)"/>
  <text x="218" y="214" font-size="12.5" fill="var(--cool)">張力 T₂</text>
  <text x="208" y="40" font-size="12.5" fill="var(--sub)">最高点 速さ v₁</text>
  <text x="230" y="276" font-size="12.5" fill="var(--sub)">最下点 速さ v₂</text>
  <g font-size="13" fill="var(--ink)">
    <text x="380" y="70">最高点 どちらの力も中心向き</text>
    <text x="400" y="94">mv₁²/r ＝ T₁ ＋ mg</text>
    <text x="380" y="140">最下点 張力だけが中心向き</text>
    <text x="400" y="164">mv₂²/r ＝ T₂ − mg</text>
    <text x="380" y="210">1周する条件 最高点で T₁ ≧ 0</text>
    <text x="400" y="234">v₁ ≧ √(gr) ／ v₂ ≧ √(5gr)</text>
  </g>
</svg>
<figcaption>最高点では重力と張力がどちらも中心の向きに働く。最下点では張力が中心向きで重力は外向きである。ひもがたるまずに1周する条件は最高点で張力が0以上になることである。</figcaption>
</figure>

<p>最高点でひもがたるまない条件を求める。最高点の式 \( mv_1{}^2/r=T_1+mg \) で \( T_1\geqq0 \) とすると \( v_1\geqq\sqrt{gr} \) である。最下点と最高点の高さの差は \( 2r \) なので力学的エネルギー保存則 \( \frac{1}{2}mv_2{}^2=\frac{1}{2}mv_1{}^2+mg\cdot2r \) より最下点の速さは \( v_2\geqq\sqrt{5gr} \) が必要である。</p>

<div class="ex"><div class="ex-h">例題 4</div>
<p>長さ 0.40 m の軽いひもに質量 0.10 kg の小球をつけ鉛直面内で円運動させる。小球がひもをたるませずに1周するための最下点での最小の速さと そのときの最下点での張力を求めよ。重力加速度を 9.8 m/s² とする。</p>
<details open><summary>解き方</summary><div>手順1 最下点の最小の速さは v<sub>2</sub> ＝ √(5gr) ＝ √(5 × 9.8 × 0.40) ＝ √19.6 ≒ 4.4 m/s である。<br>手順2 最下点の式 T<sub>2</sub> ＝ mv<sub>2</sub><sup>2</sup>/r ＋ mg ＝ m(5g) ＋ mg ＝ 6mg である。<br>手順3 T<sub>2</sub> ＝ 6 × 0.10 × 9.8 ≒ 5.9 N である。<br>答え 約 4.4 m/s ／ 約 5.9 N</div></details></div>

<p>典型的な誤りは最高点で速さが0でもよいと考えて \( v_2=\sqrt{4gr} \) とすることである。ひもの場合は最高点でも円運動を続けるために速さ \( \sqrt{gr} \) 以上が必要である。棒でつながれた場合や管の中を動く場合は内側からも力を受けられるので最高点の速さは0でもよい。条件の違いを問題文から確認する。</p>


<h2 id="s5">単振動</h2>
<p>等速円運動をする物体に横から平行な光を当てスクリーンに映した影を考える。影は一直線上を往復する。この往復運動を<strong>単振動</strong>と呼ぶ。半径 \( A \) で角速度 \( \omega \) の円運動の影の位置は次の式で表せる。</p>
\[ x=A\sin\omega t \]
<p>\( A \) を<strong>振幅</strong>・\( \omega \) を<strong>角振動数</strong>と呼ぶ。周期は円運動と同じ \( T=2\pi/\omega \) で振動数は \( f=1/T \) である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 280" role="img" aria-label="等速円運動の影が正弦曲線を描く単振動">
  <circle cx="130" cy="140" r="90" fill="none" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="30" y1="140" x2="230" y2="140" stroke="var(--line)"/>
  <line x1="130" y1="40" x2="130" y2="240" stroke="var(--line)"/>
  <line x1="130" y1="140" x2="187.9" y2="71.1" stroke="var(--sub)" stroke-width="1.5"/>
  <circle cx="187.9" cy="71.1" r="7" fill="var(--warm)"/>
  <text x="150" y="128" font-size="12.5" fill="var(--sub)">ωt</text>
  <text x="70" y="262" font-size="12.5" fill="var(--muted)">半径 A の等速円運動</text>
  <line x1="260" y1="140" x2="690" y2="140" stroke="var(--ink)" stroke-width="1.3"/>
  <line x1="260" y1="40" x2="260" y2="240" stroke="var(--ink)" stroke-width="1.3"/>
  <g stroke="var(--line)" stroke-dasharray="3 3"><line x1="260" y1="50" x2="690" y2="50"/><line x1="260" y1="230" x2="690" y2="230"/></g>
  <text x="252" y="54" font-size="12" text-anchor="end" fill="var(--sub)">A</text>
  <text x="252" y="234" font-size="12" text-anchor="end" fill="var(--sub)">−A</text>
  <text x="252" y="144" font-size="12" text-anchor="end" fill="var(--sub)">0</text>
  <text x="680" y="160" font-size="12" text-anchor="middle" fill="var(--sub)">T</text>
  <text x="470" y="160" font-size="12" text-anchor="middle" fill="var(--sub)">T/2</text>
  <text x="694" y="128" font-size="12" text-anchor="end" fill="var(--muted)">時間</text>
  <polyline points="260.0,140.0 267.0,130.6 274.0,121.3 281.0,112.2 288.0,103.4 295.0,95.0 302.0,87.1 309.0,79.8 316.0,73.1 323.0,67.2 330.0,62.1 337.0,57.8 344.0,54.4 351.0,52.0 358.0,50.5 365.0,50.0 372.0,50.5 379.0,52.0 386.0,54.4 393.0,57.8 400.0,62.1 407.0,67.2 414.0,73.1 421.0,79.8 428.0,87.1 435.0,95.0 442.0,103.4 449.0,112.2 456.0,121.3 463.0,130.6 470.0,140.0 477.0,149.4 484.0,158.7 491.0,167.8 498.0,176.6 505.0,185.0 512.0,192.9 519.0,200.2 526.0,206.9 533.0,212.8 540.0,217.9 547.0,222.2 554.0,225.6 561.0,228.0 568.0,229.5 575.0,230.0 582.0,229.5 589.0,228.0 596.0,225.6 603.0,222.2 610.0,217.9 617.0,212.8 624.0,206.9 631.0,200.2 638.0,192.9 645.0,185.0 652.0,176.6 659.0,167.8 666.0,158.7 673.0,149.4 680.0,140.0" fill="none" stroke="var(--cool)" stroke-width="2.4"/>
  <line x1="187.9" y1="71.1" x2="318.3" y2="71.1" stroke="var(--warm)" stroke-dasharray="5 4"/>
  <circle cx="318.3" cy="71.1" r="5" fill="var(--warm)"/>
  <text x="480" y="30" font-size="12.5" text-anchor="middle" fill="var(--cool)">影の位置 x＝A sin ωt</text>
</svg>
<figcaption>左の物体が反時計回りに角 ωt だけ進んだとき 縦方向の位置は A sin ωt である。その値を時間に対して描くと右の正弦曲線になる。図の点は ωt＝50° の瞬間で 1周の T で曲線も1往復する。</figcaption>
</figure>

<h3>速度と加速度と復元力</h3>
<p>影の速度は円運動の速度 \( A\omega \) の縦成分で \( v=A\omega\cos\omega t \) である。影の加速度は向心加速度 \( A\omega^2 \) の縦成分で中心向きなので \( a=-A\omega^2\sin\omega t \) である。2つ目の式を位置の式と比べると次の関係が得られる。</p>
\[ a=-\omega^2x \]
<p>運動方程式に代入すると \( F=ma=-m\omega^2x \) である。<strong class="hit">単振動は変位に比例し逆向きの力である復元力 \( F=-Kx \) を受ける運動である</strong>。逆に力が \( F=-Kx \) の形なら運動は単振動で \( m\omega^2=K \) から周期が定まる。</p>
\[ \omega=\sqrt{\frac{K}{m}} \qquad T=2\pi\sqrt{\frac{m}{K}} \]
<p>速さは振動の中心 \( x=0 \) で最大値 \( A\omega \) になり両端で0になる。加速度の大きさは両端で最大値 \( A\omega^2 \) になり中心で0になる。</p>
<h3>ばね振り子</h3>
<p>ばね定数 \( k \) のばねにつけた質量 \( m \) の物体はつり合いの位置からの変位 \( x \) に対して力 \( -kx \) を受ける。\( K=k \) なので周期は \( T=2\pi\sqrt{m/k} \) である。ばねを鉛直につるした場合も重力でつり合いの位置がずれるだけで周期は同じである。周期は振幅によらない。この性質を<strong>等時性</strong>と呼ぶ。</p>
<p>単振動のエネルギーは運動エネルギーとばねの弾性エネルギーの和で一定である。\( \frac{1}{2}mv^2+\frac{1}{2}kx^2=\frac{1}{2}kA^2 \) が成り立つ。</p>
<h3>単振り子</h3>
<p>長さ \( L \) の糸に質量 \( m \) のおもりをつけた振り子を考える。糸が鉛直と角 \( \theta \) をなすとき おもりを最下点へ戻す向きの力は重力の接線成分 \( mg\sin\theta \) である。振れの角が小さいとき \( \sin\theta \) は \( \theta \) で近似でき 最下点からの弧の長さ \( x=L\theta \) を使うと力は \( -\frac{mg}{L}x \) になる。\( K=mg/L \) なので周期は次の式になる。</p>
\[ T=2\pi\sqrt{\frac{L}{g}} \]
<p>単振り子の周期は糸の長さと重力加速度だけで決まりおもりの質量によらない。振れの角が大きくなると近似が成り立たず周期はわずかに長くなる。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>ばね定数 20 N/m のばねに質量 0.20 kg の物体をつけ なめらかな水平面上で振幅 0.10 m の単振動をさせた。周期と速さの最大値と加速度の大きさの最大値を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 ω ＝ √(k/m) ＝ √(20 ÷ 0.20) ＝ 10 rad/s である。<br>手順2 T ＝ 2π ÷ ω ＝ 0.628 s である。<br>手順3 速さの最大値は Aω ＝ 0.10 × 10 ＝ 1.0 m/s である。<br>手順4 加速度の最大値は Aω<sup>2</sup> ＝ 0.10 × 100 ＝ 10 m/s<sup>2</sup> である。<br>答え 周期 約 0.63 s ／ 最大の速さ 1.0 m/s ／ 最大の加速度 10 m/s<sup>2</sup></div></details></div>

<div class="ex"><div class="ex-h">例題 6</div>
<p>長さ 1.0 m の単振り子の周期を求めよ。周期を2倍にするには長さを何倍にすればよいか。重力加速度を 9.8 m/s² とする。</p>
<details open><summary>解き方</summary><div>手順1 T ＝ 2π√(1.0 ÷ 9.8) ＝ 2π × 0.319 ≒ 2.0 s である。<br>手順2 T は √L に比例するので T を2倍にするには L を 2<sup>2</sup> ＝ 4 倍にする。<br>答え 約 2.0 s ／ 4 倍</div></details></div>

<p>典型的な誤りは2つある。ばね振り子の周期に重力加速度を入れること・単振り子の周期に質量を入れることである。周期の式に入る量は復元力の係数 \( K \) と質量の比だけから決まる。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">単振動はずれに比例した平均回帰である</p>
<p>中心からの乖離が大きいほど戻す力が強い。その比例係数 K が大きいほど周期は短い。</p>
<p class="an-x">実際の価格には一定の周期はない。比例する復元力という構造だけが対応する。</p>
</aside>

<h2 id="s6">ケプラーの法則と万有引力の法則</h2>
<p>ケプラーはティコ・ブラーエの火星の観測記録を解析して惑星の運動に関する3つの法則を発表した。第1法則と第2法則は1609年・第3法則は1619年である。</p>
<div class="tb-tw"><table>
<thead><tr><th>法則</th><th>内容</th></tr></thead>
<tbody>
<tr><td>第1法則</td><td>惑星は太陽を1つの焦点とする楕円軌道を描く</td></tr>
<tr><td>第2法則</td><td>太陽と惑星を結ぶ線分が単位時間に描く面積は一定である。これを面積速度一定の法則と呼ぶ</td></tr>
<tr><td>第3法則</td><td>公転周期 T の2乗は楕円の長半径 a の3乗に比例する。T²/a³ はすべての惑星で同じ値である</td></tr>
</tbody></table></div>

<figure class="tb-fig">
<svg viewBox="0 0 720 350" role="img" aria-label="楕円軌道で同じ時間に描く面積が等しい">
  <ellipse cx="320" cy="175" rx="200" ry="160" fill="none" stroke="var(--line)" stroke-width="1.5"/>
  <path d="M 440.0 175.0 L451.8 295.3 L461.7 287.9 L471.4 279.5 L480.8 270.1 L489.7 259.6 L498.0 248.0 L505.3 235.2 L511.4 221.3 L516.1 206.5 L519.0 190.9 L520.0 175.0 L519.0 159.1 L516.1 143.5 L511.4 128.7 L505.3 114.8 L498.0 102.0 L489.7 90.4 L480.8 79.9 L471.4 70.5 L461.7 62.1 L451.8 54.7 Z" fill="var(--warm)" fill-opacity="0.3" stroke="var(--warm)"/>
  <path d="M 440.0 175.0 L126.3 135.3 L125.1 139.2 L124.0 143.1 L123.1 147.1 L122.3 151.1 L121.6 155.0 L121.0 159.0 L120.6 163.0 L120.3 167.0 L120.1 171.0 L120.0 175.0 L120.1 179.0 L120.3 183.0 L120.6 187.0 L121.0 191.0 L121.6 195.0 L122.3 198.9 L123.1 202.9 L124.0 206.9 L125.1 210.8 L126.3 214.7 Z" fill="var(--cool)" fill-opacity="0.3" stroke="var(--cool)"/>
  <circle cx="440" cy="175" r="11" fill="var(--accent)"/>
  <text x="440" y="200" font-size="12.5" text-anchor="middle" fill="var(--ink)">太陽</text>
  <circle cx="200" cy="175" r="3" fill="var(--sub)"/>
  <text x="200" y="196" font-size="12" text-anchor="middle" fill="var(--sub)">もう1つの焦点</text>
  <text x="530" y="180" font-size="12.5" fill="var(--warm)">近日点付近 速い</text>
  <text x="110" y="128" font-size="12.5" text-anchor="end" fill="var(--cool)">遠日点付近</text>
  <text x="110" y="146" font-size="12.5" text-anchor="end" fill="var(--cool)">遅い</text>
  <text x="610" y="60" font-size="12.5" text-anchor="middle" fill="var(--sub)">同じ時間に描く</text>
  <text x="610" y="78" font-size="12.5" text-anchor="middle" fill="var(--sub)">2つの領域の</text>
  <text x="610" y="96" font-size="12.5" text-anchor="middle" fill="var(--sub)">面積は等しい</text>
</svg>
<figcaption>離心率0.6の楕円軌道でケプラー方程式を解き 同じ時間に惑星が進む範囲を塗った。近日点付近では太陽に近く速く動くので扇形は短く太い。遠日点付近では遠く遅いので細長い。2つの面積は等しい。実際の惑星の軌道はこれより円に近い。</figcaption>
</figure>

<p>第2法則から近日点と遠日点の速さの関係が得られる。この2点では速度が太陽と惑星を結ぶ線分に垂直なので面積速度は \( \frac{1}{2}rv \) である。近日点の距離と速さを \( r_1,\ v_1 \)・遠日点を \( r_2,\ v_2 \) とすると \( r_1v_1=r_2v_2 \) が成り立つ。</p>
<h3>第3法則から逆2乗の力を導く</h3>
<p>惑星の軌道を半径 \( r \) の円とみなすと運動は等速円運動である。必要な向心力は \( F=mr\omega^2=mr(2\pi/T)^2 \) である。第3法則より \( T^2=kr^3 \) とおくと次の式になる。</p>
\[ F=\frac{4\pi^2mr}{kr^3}=\frac{4\pi^2}{k}\cdot\frac{m}{r^2} \]
<p>惑星が受ける力は惑星の質量に比例し距離の2乗に反比例する。作用反作用の法則により太陽も同じ大きさの力を受けるので力は太陽の質量 \( M \) にも比例するはずである。ニュートンはこの考えから1687年の著書で<strong>万有引力の法則</strong>を示した。</p>
\[ F=G\frac{Mm}{r^2} \]
<p>\( G \) は<strong>万有引力定数</strong>で約 \( 6.67\times10^{-11}\,\mathrm{N\cdot m^2/kg^2} \) である。キャベンディッシュは1798年にねじればかりを使った実験で地球の密度を求めた。G の値は後にこの測定結果から計算された。<strong class="hit">りんごを落下させる力と月を公転させる力は同じ万有引力である</strong>。</p>
<h3>重力加速度との関係</h3>
<p>地表の物体が受ける重力は地球の万有引力である。地球の質量を \( M \) で半径を \( R \) とすると \( mg=GMm/R^2 \) なので次の関係がある。</p>
\[ GM=gR^2 \]
<p>この式を使うと \( G \) と \( M \) を別々に知らなくても \( g \) と \( R \) で計算できる。地表から高さ \( h \) の点の重力加速度は \( g'=g\left(\frac{R}{R+h}\right)^2 \) である。厳密には地球の自転による遠心力が加わるので重力は万有引力と遠心力の合力である。遠心力は赤道でも重力の0.4％以下なので通常は無視する。</p>

<div class="ex"><div class="ex-h">例題 7</div>
<p>地表から高さが地球の半径 R に等しい点での重力加速度を求めよ。地表の重力加速度を 9.8 m/s² とする。</p>
<details open><summary>解き方</summary><div>手順1 中心からの距離は 2R である。<br>手順2 g′ ＝ g × (R/2R)<sup>2</sup> ＝ 9.8 ÷ 4 ＝ 2.45 m/s<sup>2</sup> である。<br>答え 約 2.5 m/s<sup>2</sup></div></details></div>

<p>典型的な誤りは距離を地表からの高さ \( h \) で測ることである。万有引力の式の \( r \) は中心間の距離である。</p>

<h2 id="s7">人工衛星と宇宙速度</h2>
<p>地球のまわりを半径 \( r \) の円軌道で回る人工衛星では万有引力が向心力を担う。</p>
\[ m\frac{v^2}{r}=G\frac{Mm}{r^2} \quad\Rightarrow\quad v=\sqrt{\frac{GM}{r}} \]
<p>半径が大きいほど速さは小さい。周期は \( T=2\pi r/v \) で \( T^2=\frac{4\pi^2}{GM}r^3 \) となりケプラーの第3法則が再び得られる。</p>
<h3>第1宇宙速度</h3>
<p>地表すれすれ \( r=R \) を回る衛星の速さを<strong>第1宇宙速度</strong>と呼ぶ。\( GM=gR^2 \) を使う。</p>
\[ v_1=\sqrt{gR}=\sqrt{9.8\times6.4\times10^6}\approx7.9\times10^3\,\mathrm{m/s} \]
<p>水平に投げた物体は放物線を描いて地面に向かう。投げる速さを大きくすると着地点は遠くなる。秒速約 7.9 km になると落下する距離と地表が丸みで下がる距離が一致し物体は地面に届かず回り続ける。この計算は空気抵抗と地球の自転を無視しており、実際の打ち上げでは自転の速さを利用するために東向きに打ち上げる。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">人工衛星は永遠に着地しない遠投である</p>
<p>遠投も衛星も同じく重力で落下し続ける。秒速 7.9 km なら落下分を地表の丸みが打ち消して高度が変わらない。</p>
</aside>

<h3>万有引力による位置エネルギーと第2宇宙速度</h3>
<p>万有引力による位置エネルギーは無限遠を基準として次の式で表す。</p>
\[ U=-G\frac{Mm}{r} \]
<p>無限遠から距離 \( r \) まで近づく間に万有引力は正の仕事をするので位置エネルギーは基準より小さく負になる。値はF−rグラフの \( r \) から無限遠までの面積から求まる。地表付近で高さの変化が小さいときはこの式の差が \( mgh \) と一致する。</p>
<p>地表から打ち上げた物体が無限遠まで到達する最小の速さを<strong>第2宇宙速度</strong>または脱出速度と呼ぶ。無限遠で速さが0になる条件を力学的エネルギー保存則で立てる。</p>
\[ \frac{1}{2}mv_2{}^2-G\frac{Mm}{R}=0 \quad\Rightarrow\quad v_2=\sqrt{2gR}=\sqrt{2}\,v_1\approx1.12\times10^4\,\mathrm{m/s} \]

<div class="ex"><div class="ex-h">例題 8</div>
<p>地表から高さ 400 km の円軌道を回る衛星の速さと周期を求めよ。地球の半径を 6.4×10<sup>6</sup> m・地表の重力加速度を 9.8 m/s² とする。</p>
<details open><summary>解き方</summary><div>手順1 軌道半径は r ＝ 6.4×10<sup>6</sup> ＋ 0.4×10<sup>6</sup> ＝ 6.8×10<sup>6</sup> m である。<br>手順2 v ＝ √(gR<sup>2</sup>/r) ＝ √(9.8 × (6.4×10<sup>6</sup>)<sup>2</sup> ÷ 6.8×10<sup>6</sup>) ≒ 7.7×10<sup>3</sup> m/s である。<br>手順3 T ＝ 2πr/v ＝ 2π × 6.8×10<sup>6</sup> ÷ 7.68×10<sup>3</sup> ≒ 5.6×10<sup>3</sup> s である。<br>答え 約 7.7 km/s ／ 約 93 分</div></details></div>

<p>典型的な誤りは高い軌道ほど速いと考えることである。高い軌道ほど速さは小さく周期は長い。</p>

<h2 id="s8">現実世界の円軌道</h2>
<p>例題8の高度は国際宇宙ステーションの軌道高度と同程度である。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>国際宇宙ステーションは高度約 400 km を約 90 分で1周する。例題8の計算値に近い。静止衛星は赤道上空約 35,786 km を地球の自転と同じ周期 23 時間 56 分 4 秒で回る。地上からは空の一点に静止して見えるので放送衛星や気象衛星に使われる。静止軌道の高さは T²/r³ が一定という関係から計算で決まる。</p>
</aside>

<h2 id="s9">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 向心加速度</div>
<p class="qz-q">半径 2.0 m の円周上を速さ 4.0 m/s で等速円運動する物体の角速度と加速度の大きさの組み合わせとして正しいものを1つ選べ。</p>
<ol><li>0.50 rad/s ・ 2.0 m/s²</li><li>2.0 rad/s ・ 8.0 m/s²</li><li>2.0 rad/s ・ 4.0 m/s²</li><li>8.0 rad/s ・ 32 m/s²</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。ω ＝ v/r ＝ 2.0 rad/s である。a ＝ v²/r ＝ 16 ÷ 2.0 ＝ 8.0 m/s² で rω² ＝ 2.0 × 4.0 ＝ 8.0 でも一致する。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 向心力と遠心力</div>
<p class="qz-q">平らな道路のカーブを一定の速さで曲がる自動車について誤りを含む記述を1つ選べ。</p>
<ol><li>地面から見ると自動車の加速度はカーブの中心を向く</li><li>中心向きの力を担うのは路面がタイヤに及ぼす静止摩擦力である</li><li>地面から見ると向心力と遠心力がつり合うので自動車は円運動を続ける</li><li>同じ速さなら半径が小さいカーブほど大きな摩擦力が必要である</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。遠心力は回転する観測者の立場でだけ現れる慣性力である。地面から見て力がつり合えば物体は等速直線運動をする。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 鉛直面内の円運動</div>
<p class="qz-q">長さ 0.90 m の軽いひもにつけた小球を鉛直面内で円運動させる。ひもがたるまずに最高点を通過するための最高点での最小の速さ [m/s] を有効数字2桁で求めよ。重力加速度を 9.8 m/s² とする。</p>
<details><summary>解答と解説</summary><div>答えは 3.0 m/s である。最高点で張力が0になる場合 mv²/r ＝ mg なので v ＝ √(gr) ＝ √(9.8 × 0.90) ＝ √8.82 ≒ 2.97 m/s である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ ばね振り子の周期</div>
<p class="qz-q">ばね定数 50 N/m のばねに質量 0.50 kg のおもりをつけて単振動させた。周期として最も近いものを1つ選べ。</p>
<ol><li>0.31 s</li><li>0.63 s</li><li>1.3 s</li><li>6.3 s</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。T ＝ 2π√(m/k) ＝ 2π√(0.50/50) ＝ 2π × 0.10 ≒ 0.63 s である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 単振り子の周期</div>
<p class="qz-q">単振り子の周期について正しい記述を1つ選べ。振れの角は十分小さいとする。</p>
<ol><li>おもりの質量を2倍にすると周期は √2 倍になる</li><li>振幅を2倍にすると周期は2倍になる</li><li>糸の長さを4倍にすると周期は2倍になる</li><li>重力加速度が小さい月面では周期は短くなる</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。T ＝ 2π√(L/g) は √L に比例する。質量と振幅にはよらない。g が小さい月面では周期は長くなる。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ ケプラーの第3法則</div>
<p class="qz-q">太陽のまわりを円軌道で公転する小惑星の軌道半径が地球の 4.0 倍である。この小惑星の公転周期は何年か。</p>
<details><summary>解答と解説</summary><div>答えは 8.0 年である。T² は r³ に比例するので T ＝ 1 × (4.0)<sup>3/2</sup> ＝ 8.0 年である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 宇宙速度</div>
<p class="qz-q">ある惑星の半径は地球の 2 倍で表面の重力加速度は地球と等しい。この惑星の第1宇宙速度は地球の第1宇宙速度の何倍か。最も適当なものを1つ選べ。</p>
<ol><li>1/2 倍</li><li>1 倍</li><li>√2 倍</li><li>2 倍</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。v<sub>1</sub> ＝ √(gR) で g は等しく R が2倍なので √2 倍になる。</div></details></div>

<h2 id="s10">この章の要点</h2>
<div class="tb-key"><b>要点</b>
v＝rω ／ T＝2π/ω ／ 向心加速度 a＝v²/r＝rω² で常に中心を向く。<br>
向心力は実際の力の合力の呼び名である。遠心力は回転する観測者の立場でだけ書く慣性力である。<br>
鉛直面内の円運動は力学的エネルギー保存則と中心方向の運動方程式を組み合わせる。ひもなら最高点で v ≧ √(gr)。<br>
単振動は等速円運動の影で a＝−ω²x。復元力 F＝−Kx なら T＝2π√(m/K)。<br>
ばね振り子 T＝2π√(m/k) ／ 単振り子 T＝2π√(L/g)。どちらも振幅によらない。<br>
万有引力 F＝GMm/r² ／ GM＝gR² ／ 位置エネルギー U＝−GMm/r。<br>
第1宇宙速度 √(gR)≒7.9 km/s ／ 第2宇宙速度 √(2gR)≒11.2 km/s。</div>

<h2 id="s11">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>振れの角が小さいとみなしてよい範囲は、何によって決まるか。</strong> 本文は \( \sin\theta \) を \( \theta \) で近似して単振り子の周期を求め、振れの角が大きくなると周期はわずかに長くなるとした。どの程度のずれまでを許すかで、近似が使える範囲は異なる。</li>
<li class="tb-vnote"><strong>惑星の軌道を円とみなして導いた万有引力の法則を、楕円軌道を描く実際の惑星に当てはめてよいか。</strong> ケプラーの第1法則は惑星の軌道を楕円とする。一方で本文は軌道を円とみなし、第3法則と組み合わせて逆2乗の力を導いた。図の注記は実際の惑星の軌道が円に近いとしている。</li>
</ul>

<h2 id="s12">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Kepler's laws of planetary motion — Wikipedia — https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion</li>
<li>Newton's law of universal gravitation — Wikipedia — https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation</li>
<li>Cavendish experiment — Wikipedia — https://en.wikipedia.org/wiki/Cavendish_experiment</li>
<li>Escape velocity — Wikipedia — https://en.wikipedia.org/wiki/Escape_velocity</li>
<li>Geosynchronous orbit — Wikipedia — https://en.wikipedia.org/wiki/Geosynchronous_orbit</li>
<li>International Space Station — NASA — https://www.nasa.gov/international-space-station/</li>
<li>Pendulum (mechanics) — Wikipedia — https://en.wikipedia.org/wiki/Pendulum_(mechanics)</li>
<li>CODATA Value Newtonian constant of gravitation — NIST — https://physics.nist.gov/cgi-bin/cuu/Value?bg</li>
<li>Philosophiæ Naturalis Principia Mathematica — Wikipedia — https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica</li>
</ol>
