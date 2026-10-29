<!--meta
{"chapter": 3, "verify": {"date":"2026-10-15","checked":42,"match":37,"fixed":5,"unconfirmed":0}, "part": "物理基礎", "title": "運動の法則", "thesis": "物体に働く力の合力が0なら速度は変わらない。合力が0でなければ合力の向きに加速度が生じその大きさは合力に比例し質量に反比例する。運動方程式 ma＝F は物体ごとに力を全部描いてから立てる。"}
-->
<p>第1章では運動を位置と速度と加速度で記述し第2章では物体に働く力を描いてつり合いの式を立てた。この章では2つをつなぐ。力が働くと加速度が生じるという関係が運動の法則である。この法則を使うと物体に働く力から運動を予測できる。</p>
<p>共通テストでこの範囲から問われるのは主に5種類である。慣性の法則に関する誤概念の判定・運動方程式による加速度の計算・糸や接触でつながった複数の物体・斜面と摩擦のある運動・エレベーターの中の体重計の値である。どの問題も同じ手順で解ける。手順を第2節で確定させる。</p>

<h2 id="s1">慣性の法則</h2>
<p>物体に力が働かないか働く力の合力が0のとき静止している物体は静止し続け運動している物体は等速直線運動を続ける。これを<strong>慣性の法則</strong>と呼ぶ。ニュートンの運動の第一法則である。物体が速度を保とうとする性質を<strong>慣性</strong>と呼ぶ。</p>
<p>日常の経験では動いている物体はやがて止まる。これは力が働かないからではない。摩擦力や空気抵抗が運動と反対向きに働くからである。ガリレイは向かい合わせた2つの斜面で球を転がす考察を行った。上る側の斜面の傾きを小さくするほど球は遠くまで進む。そこから水平面なら力が働かない限り運動は続くと考えた。</p>
<p><strong class="hit">運動している物体の運動の向きに力が働いているとは限らない</strong>。学習指導要領の解説は運動の向きに常に力が働いているという考えを生徒が経験的にもつ誤った概念として挙げている。投げ上げたボールが上昇している間にボールに働く力は重力だけで向きは下向きである。手から離れた後に上向きの力は働かない。</p>
<p>走っているバスが急ブレーキをかけると乗客は前に倒れそうになる。乗客は慣性で前向きの速度を保とうとしバスだけが減速するからである。前向きの力が乗客に働いたのではない。この章の運動の法則は加速していない観測者から見た場合に成り立ち、加速するバスの中から見た運動は第11章の慣性力で扱う。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">打球が飛び続けるのはバットの力が続くからではない</p>
<p>バットが力を及ぼすのは接触している約0.7ミリ秒だけである。離れた後の打球に働くのは重力と空気の力である。</p>
</aside>

<aside class="an an-biz"><b>スタートアップで言えば</b>
<p class="an-h">慣性は大企業の方向転換の遅さである</p>
<p>同じ力を加えても質量が大きいほど速度の変化は小さい。小さい組織ほど同じ力で大きく向きを変えられる。</p>
</aside>

<h2 id="s2">運動方程式 ma＝F</h2>
<p>滑らかな水平面上の台車に一定の力を加え続ける実験を行うと2つの関係が得られる。質量を一定にして力を変えると<strong>加速度は力に比例する</strong>。力を一定にして質量を変えると<strong>加速度は質量に反比例する</strong>。2つをまとめると加速度 \(a\) は力 \(F\) に比例し質量 \(m\) に反比例する。</p>
<p>\[ a=k\frac{F}{m} \]</p>
<p>比例定数 \(k\) が1になるように力の単位を定める。<strong class="hit">質量 1 kg の物体に \(\mathrm{1\,m/s^2}\) の加速度を生じさせる力の大きさを 1 N と定義する</strong>。この定義で次の式が成り立つ。</p>
<p>\[ ma=F \]</p>
<p>これを<strong>運動方程式</strong>と呼びこの関係を<strong>運動の法則</strong>と呼ぶ。ニュートンの運動の第二法則である。\(F\) は物体に働く力の合力である。力が複数あれば向きを考えて合計した値を代入する。加速度の向きは合力の向きと同じである。合力が0なら加速度は0で慣性の法則に一致する。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="質量1 kgと2 kgの物体の加速度と力の関係">
  <g stroke="var(--ink)" stroke-width="1.2">
    <line x1="70" y1="220" x2="500" y2="220"/><line x1="70" y1="220" x2="70" y2="40"/>
  </g>
  <g stroke="var(--line)" stroke-dasharray="3 3">
    <line x1="70" y1="188" x2="480" y2="188"/><line x1="70" y1="156" x2="480" y2="156"/><line x1="70" y1="124" x2="480" y2="124"/><line x1="70" y1="92" x2="480" y2="92"/><line x1="70" y1="60" x2="480" y2="60"/>
  </g>
  <line x1="70" y1="220" x2="470" y2="60" stroke="var(--warm)" stroke-width="2.5"/>
  <line x1="70" y1="220" x2="470" y2="140" stroke="var(--cool)" stroke-width="2.5"/>
  <circle cx="310" cy="124" r="4" fill="var(--warm)"/><circle cx="310" cy="172" r="4" fill="var(--cool)"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="70" y="236">0</text><text x="150" y="236">2</text><text x="230" y="236">4</text><text x="310" y="236">6</text><text x="390" y="236">8</text><text x="470" y="236">10</text>
    <text x="470" y="256">合力 F 単位 N</text>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="62" y="224">0</text><text x="62" y="192">2</text><text x="62" y="160">4</text><text x="62" y="128">6</text><text x="62" y="96">8</text><text x="62" y="64">10</text>
  </g>
  <text x="76" y="34" font-size="12" fill="var(--muted)">加速度 a 単位 m/s²</text>
  <g font-size="12.5">
    <text x="150" y="90" fill="var(--warm)">m＝1 kg 傾き 1</text>
    <text x="400" y="128" fill="var(--cool)">m＝2 kg 傾き 1/2</text>
    <text x="250" y="116" fill="var(--warm)">6 m/s²</text>
    <text x="320" y="190" fill="var(--cool)">3 m/s²</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="530" y="90">傾き＝1/m</text>
    <text x="530" y="116">同じ 6 N でも</text>
    <text x="530" y="138">質量2倍で加速度は半分</text>
  </g>
</svg>
<figcaption>a＝F/m を質量 1 kg と 2 kg について描いた。どちらも原点を通る直線で傾きは質量の逆数である。合力 6 N のとき加速度は 6 m/s² と 3 m/s² になる。</figcaption>
</figure>

<h3>重さ mg と運動方程式</h3>
<p>第2章の重さ \(W=mg\) は運動方程式から導ける。空気抵抗のない自由落下では物体に働く力は重力だけで加速度は \(g\) である。運動方程式 \(ma=F\) に \(a=g\) を代入すると重力の大きさは \(mg\) になる。<strong class="hit">質量は加速されにくさの量で重さはその物体に働く重力の大きさである</strong>。2つが比例するので重い物体ほど大きな重力を受けるが加速されにくさも同じ割合で大きい。その結果として落下の加速度は質量によらず \(g\) になる。</p>
<p>運動方程式を使う手順は4段階である。</p>
<div class="tb-tw"><table>
<thead><tr><th>段階</th><th>内容</th><th>確認すること</th></tr></thead>
<tbody>
<tr><td>1</td><td>着目する物体を1つ決める</td><td>複数の物体があれば物体ごとに式を立てる</td></tr>
<tr><td>2</td><td>その物体に働く力を全部描く</td><td>重力と接触している相手から受ける接触力。他の物体に働く力は描かない</td></tr>
<tr><td>3</td><td>加速度の向きに正の向きを取る</td><td>加速度と垂直な方向はつり合いの式を立てる</td></tr>
<tr><td>4</td><td>加速度の方向の成分で ma＝F を書く</td><td>右辺は正の向きの力を正・逆向きの力を負として合計する</td></tr>
</tbody></table></div>
<p>右辺に ma を力として書き加える誤りが多い。\(ma\) は力ではなく力の合計の結果である。物体に働く力の一覧に \(ma\) という力は存在しない。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>滑らかな水平面上の質量 2.0 kg の物体を右向きに 10 N で引き同時に左向きに 4.0 N で引いた。加速度を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 物体に働く力は重力・垂直抗力・右向き 10 N・左向き 4.0 N である。<br>手順2 鉛直方向は重力と垂直抗力がつり合う。<br>手順3 右向きを正として運動方程式は \(2.0a=10-4.0\) である。<br>答え \(a=3.0\,\mathrm{m/s^2}\) で右向きである。</div></details></div>

<div class="ex"><div class="ex-h">例題 2</div>
<p>質量 50 kg の人がエレベーターの床の体重計に乗っている。エレベーターが上向きに \(\mathrm{2.0\,m/s^2}\) で加速するとき体重計が人を押す力を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 人に働く力は重力 \(mg\) と体重計の垂直抗力 \(N\) の2つである。<br>手順2 加速度の向きの上向きを正とすると運動方程式は \(ma=N-mg\) である。<br>手順3 \(N=m(g+a)=50\times(9.8+2.0)=590\,\mathrm{N}\) である。<br>答え 590 N である。静止時の 490 N より大きい。体重計はこの力を質量に換算して約 60 kg と表示する。下向きに加速するときは \(N=m(g-a)\) で表示は小さくなる。</div></details></div>

<h2 id="s3">作用反作用と複数の物体</h2>
<p>複数の物体が接触していたり糸でつながっていたりする問題では物体ごとに運動方程式を立てる。物体と物体の間に働く力は作用反作用の組で大きさが等しく向きが反対である。<strong class="hit">物体の間の力は未知数として両方の式に符号を反対にして入れる</strong>。物体どうしが離れずに動くなら加速度は共通である。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>滑らかな水平面上で質量 3.0 kg の物体 A と質量 1.0 kg の物体 B を接触させて並べ A を右向きに 8.0 N で押した。加速度と A が B を押す力を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 A が B を押す力を \(f\) とする。B が A を押す力は左向きに \(f\) である。<br>手順2 A の運動方程式は \(3.0a=8.0-f\) で B の運動方程式は \(1.0a=f\) である。<br>手順3 2式を足すと \(4.0a=8.0\) で \(a=2.0\,\mathrm{m/s^2}\) である。<br>答え 加速度は右向き 2.0 m/s² で \(f=2.0\,\mathrm{N}\) である。8.0 N すべてが B に伝わるわけではない。</div></details></div>

<p>糸でつながれた物体では糸の張力が物体の間の力になる。軽い糸の張力は糸のどこでも等しい。滑らかな滑車を通すと向きが変わるだけで大きさは変わらない。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="水平な台の上の物体と滑車を通してつるした物体の運動と力">
  <defs>
    <marker id="ah02g03a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah02g03b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
    <marker id="ah02g03c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  </defs>
  <rect x="30" y="140" width="270" height="12" fill="var(--sub)" opacity=".5"/>
  <rect x="40" y="152" width="10" height="90" fill="var(--sub)" opacity=".4"/><rect x="280" y="152" width="10" height="90" fill="var(--sub)" opacity=".4"/>
  <rect x="110" y="100" width="80" height="40" fill="var(--warm)" opacity=".6"/><text x="150" y="125" font-size="13" text-anchor="middle">A</text>
  <circle cx="312" cy="128" r="12" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="190" y1="116" x2="312" y2="116" stroke="var(--ink)"/>
  <line x1="324" y1="128" x2="324" y2="190" stroke="var(--ink)"/>
  <rect x="304" y="190" width="40" height="36" fill="var(--cool)" opacity=".6"/><text x="324" y="213" font-size="13" text-anchor="middle">B</text>
  <line x1="120" y1="88" x2="180" y2="88" stroke="var(--accent)" stroke-width="2" marker-end="url(#ah02g03c)"/>
  <line x1="356" y1="196" x2="356" y2="236" stroke="var(--accent)" stroke-width="2" marker-end="url(#ah02g03c)"/>
  <g font-size="12.5" fill="var(--accent)"><text x="142" y="80">a</text><text x="362" y="222">a</text></g>
  <g font-size="12" fill="var(--sub)"><text x="70" y="128">質量 M</text><text x="352" y="186">質量 m</text><text x="40" y="30">滑らかな台と滑車</text></g>
  <line x1="390" y1="30" x2="390" y2="250" stroke="var(--line)" stroke-dasharray="4 4"/>
  <text x="410" y="30" font-size="12" fill="var(--sub)">物体ごとに力を全部描く</text>
  <rect x="430" y="80" width="70" height="40" fill="var(--warm)" opacity=".6"/><text x="465" y="105" font-size="13" text-anchor="middle">A</text>
  <g stroke-width="2.5">
    <line x1="465" y1="78" x2="465" y2="42" stroke="var(--cool)" marker-end="url(#ah02g03b)"/>
    <line x1="465" y1="122" x2="465" y2="160" stroke="var(--warm)" marker-end="url(#ah02g03a)"/>
    <line x1="502" y1="100" x2="552" y2="100" stroke="var(--cool)" marker-end="url(#ah02g03b)"/>
  </g>
  <g font-size="12.5"><text x="472" y="56" fill="var(--cool)">N</text><text x="472" y="158" fill="var(--warm)">Mg</text><text x="530" y="92" fill="var(--cool)">T</text></g>
  <rect x="610" y="90" width="50" height="40" fill="var(--cool)" opacity=".6"/><text x="635" y="115" font-size="13" text-anchor="middle">B</text>
  <g stroke-width="2.5">
    <line x1="635" y1="88" x2="635" y2="50" stroke="var(--cool)" marker-end="url(#ah02g03b)"/>
    <line x1="635" y1="132" x2="635" y2="185" stroke="var(--warm)" marker-end="url(#ah02g03a)"/>
  </g>
  <g font-size="12.5"><text x="642" y="66" fill="var(--cool)">T</text><text x="642" y="176" fill="var(--warm)">mg</text></g>
  <g font-size="13" fill="var(--ink)">
    <text x="420" y="222">A の式 Ma＝T</text>
    <text x="560" y="222">B の式 ma＝mg − T</text>
  </g>
</svg>
<figcaption>左は滑らかな台の上の物体 A と滑車を通してつるした物体 B である。右は物体ごとに描いた力である。A の正の向きは右で B の正の向きは下である。2つの物体の加速度の大きさは等しい。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 4</div>
<p>上の図で A の質量 \(M=3.0\,\mathrm{kg}\)・B の質量 \(m=2.0\,\mathrm{kg}\) とする。加速度の大きさと糸の張力を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 A の運動方程式は \(3.0a=T\) で B の運動方程式は \(2.0a=2.0\times9.8-T\) である。<br>手順2 2式を足すと \(5.0a=19.6\) で \(a\approx3.9\,\mathrm{m/s^2}\) である。<br>手順3 \(T=3.0\times3.92\approx12\,\mathrm{N}\) である。<br>答え 加速度は約 3.9 m/s² で張力は約 12 N である。張力は B の重さ 19.6 N より小さい。B は加速しているので重力と張力はつり合っていない。</div></details></div>

<p>一般に2式を足すと \( (M+m)a=mg \) になる。2つの物体をまとめて1つと見ると動かす力は B の重力 \(mg\) だけで動く質量は \(M+m\) である。張力は物体の間の内力なので足すと消える。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>軽い滑車に軽い糸をかけ両端に質量 3.0 kg の物体 P と 1.0 kg の物体 Q をつるして静かに放した。加速度の大きさと張力を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 重い P は下向きに軽い Q は上向きに同じ大きさの加速度 \(a\) で動く。それぞれ運動の向きを正とする。<br>手順2 P の運動方程式は \(3.0a=3.0\times9.8-T\) で Q の運動方程式は \(1.0a=T-1.0\times9.8\) である。<br>手順3 2式を足すと \(4.0a=2.0\times9.8\) で \(a=4.9\,\mathrm{m/s^2}\) である。<br>手順4 Q の式から \(T=1.0\times(9.8+4.9)\approx15\,\mathrm{N}\) である。<br>答え 加速度は 4.9 m/s² で張力は約 15 N である。張力は Q の重さ 9.8 N より大きく P の重さ 29.4 N より小さい。</div></details></div>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">糸でつながれた2物体は歩調をそろえる二人である</p>
<p>一方だけが速くはならず張力が両者の加速度を等しく調整する。</p>
</aside>

<h2 id="s4">斜面上の運動</h2>
<p>傾きの角 \(\theta\) の滑らかな斜面上の物体に働く力は重力と垂直抗力の2つである。第2章と同じく重力を斜面に平行な成分 \(mg\sin\theta\) と垂直な成分 \(mg\cos\theta\) に分解する。斜面に垂直な方向には運動しないのでつり合いの式 \(N=mg\cos\theta\) が成り立つ。斜面に平行な方向の運動方程式は次のとおりである。</p>
<p>\[ ma=mg\sin\theta \qquad a=g\sin\theta \]</p>
<p>加速度は質量によらない。\(\theta=90^\circ\) で \(a=g\) となり自由落下に一致する。</p>
<p>粗い斜面を滑り下りる場合は斜面を上る向きに動摩擦力 \(\mu'N=\mu'mg\cos\theta\) が加わる。</p>
<p>\[ ma=mg\sin\theta-\mu'mg\cos\theta \qquad a=g(\sin\theta-\mu'\cos\theta) \]</p>
<p><strong class="hit">摩擦力の向きは運動の向きと反対である</strong>。同じ斜面を滑り上がる場合は動摩擦力が斜面を下る向きになり減速の大きさは \(g(\sin\theta+\mu'\cos\theta)\) である。上りと下りで加速度の大きさが異なる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="粗い斜面を滑り下りる物体に働く力">
  <defs>
    <marker id="ah02g03d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah02g03e" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
    <marker id="ah02g03f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  </defs>
  <polygon points="60,20.6 60,240 440,240" fill="var(--line)" opacity=".5"/>
  <line x1="60" y1="20.6" x2="440" y2="240" stroke="var(--ink)" stroke-width="1.5"/>
  <path d="M390 240 A50 50 0 0 1 396.7 215" fill="none" stroke="var(--ink)"/>
  <text x="365" y="232" font-size="13" fill="var(--ink)">θ</text>
  <rect x="214.2" y="81.5" width="60" height="40" fill="var(--sub)" opacity=".35" transform="rotate(30 244.2 101.5)"/>
  <g stroke-width="2.5">
    <line x1="244.2" y1="101.5" x2="244.2" y2="199" stroke="var(--warm)" marker-end="url(#ah02g03d)"/>
    <line x1="244.2" y1="101.5" x2="287.5" y2="29" stroke="var(--cool)" marker-end="url(#ah02g03e)"/>
    <line x1="233.2" y1="120.6" x2="198" y2="100.3" stroke="var(--cool)" marker-end="url(#ah02g03e)"/>
  </g>
  <line x1="279.2" y1="40.9" x2="320" y2="64.5" stroke="var(--accent)" stroke-width="2" marker-end="url(#ah02g03f)"/>
  <g font-size="12.5">
    <text x="250" y="215" fill="var(--warm)">mg</text>
    <text x="294" y="34" fill="var(--cool)">N</text>
    <text x="150" y="104" fill="var(--cool)">μ′N</text>
    <text x="326" y="64" fill="var(--accent)">a 運動の向き</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="470" y="70">斜面に平行な方向 下向きを正</text>
    <text x="490" y="94">ma＝mg sinθ − μ′N</text>
    <text x="470" y="140">斜面に垂直な方向</text>
    <text x="490" y="164">N＝mg cosθ</text>
    <text x="470" y="210">a＝g(sinθ − μ′cosθ)</text>
  </g>
</svg>
<figcaption>粗い斜面を滑り下りる物体に働く力は重力・垂直抗力・動摩擦力の3つである。動摩擦力は運動の向きと反対の斜面を上る向きに働く。図は θ＝30° で描いた。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 6</div>
<p>傾きの角 30° の粗い斜面を物体が滑り下りる。動摩擦係数は 0.20 である。加速度の大きさを求めよ。\(\cos30^\circ=0.866\) とする。</p>
<details open><summary>解き方</summary><div>手順1 斜面を下る向きを正とする。<br>手順2 \(a=g(\sin30^\circ-\mu'\cos30^\circ)=9.8\times(0.50-0.20\times0.866)\) である。<br>手順3 括弧の中は \(0.50-0.173=0.327\) で \(a=9.8\times0.327\approx3.2\,\mathrm{m/s^2}\) である。<br>答え 約 3.2 m/s² である。摩擦がなければ 4.9 m/s² である。</div></details></div>

<h2 id="s5">摩擦がある水平面上の運動</h2>
<p>粗い水平面上を滑る物体には運動と反対向きに動摩擦力 \(\mu'mg\) が働く。他に水平な力がなければ運動方程式は \(ma=-\mu'mg\) で加速度は \(-\mu'g\) である。減速の大きさは質量によらない。初速度 \(v_0\) で滑り出した物体が止まるまでの距離は第1章の3つ目の公式から求められる。</p>
<p>\[ 0-v_0^2=2(-\mu'g)x \qquad x=\frac{v_0^2}{2\mu'g} \]</p>
<p>水平に力 \(F\) で引きながら滑らせる場合の運動方程式は \(ma=F-\mu'mg\) である。<strong class="hit">引く力が動摩擦力と等しければ加速度は0で物体は等速で動き続ける</strong>。等速で動いていることから力が働いていないと判定するのは誤りである。合力が0なのであって個々の力は働いている。</p>

<div class="ex"><div class="ex-h">例題 7</div>
<p>粗い水平面上で物体を 6.0 m/s で滑らせた。動摩擦係数は 0.30 である。止まるまでに滑る距離と時間を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 加速度は \(-0.30\times9.8=-2.94\,\mathrm{m/s^2}\) である。<br>手順2 距離は \(6.0^2\div(2\times2.94)\approx6.1\,\mathrm{m}\) である。<br>手順3 時間は \(0=6.0-2.94t\) より \(t\approx2.0\,\mathrm{s}\) である。<br>答え 約 6.1 m 滑り約 2.0 s で止まる。</div></details></div>

<div class="ex"><div class="ex-h">例題 8</div>
<p>粗い水平面上の質量 4.0 kg の物体を水平に 20 N で引き続けた。動摩擦係数は 0.25 である。加速度を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 鉛直方向のつり合いから垂直抗力は \(N=4.0\times9.8=39.2\,\mathrm{N}\) である。<br>手順2 動摩擦力は \(0.25\times39.2=9.8\,\mathrm{N}\) で引く向きと反対である。<br>手順3 運動方程式は \(4.0a=20-9.8\) で \(a=2.55\approx2.6\,\mathrm{m/s^2}\) である。<br>答え 約 2.6 m/s² である。斜め上向きに引く場合は引く力の鉛直成分の分だけ垂直抗力が小さくなり動摩擦力も小さくなる。</div></details></div>

<h2 id="s6">空気抵抗と終端速度</h2>
<p>第1章の自由落下では空気抵抗を無視した。実際に空気中を落下する物体には運動と反対向きに<strong>空気抵抗</strong>が働く。広げた紙と丸めた紙を同時に落とすと丸めた紙が先に床に着く。質量は同じでも空気抵抗の大きさが異なるからである。</p>
<p>空気抵抗の大きさは速さが大きいほど大きい。遅い運動では速さ \(v\) に比例するとみなせる。比例定数を \(k\) として下向きを正とすると運動方程式は次のとおりである。</p>
<p>\[ ma=mg-kv \]</p>
<p>落下し始めは \(v=0\) で加速度は \(g\) である。速さが増すと空気抵抗が増し加速度は小さくなる。やがて \(mg=kv\) となると合力が0になり加速度は0になる。その後は一定の速さで落下する。この速さを<strong>終端速度</strong>と呼ぶ。</p>
<p>\[ v_f=\frac{mg}{k} \]</p>
<p><strong class="hit">終端速度に達した物体は落下を続けているが合力は0である</strong>。同じ形と大きさなら質量が大きいほど終端速度は大きい。物理基礎は空気抵抗の存在に定性的に触れる範囲である。抵抗力を \(kv\) とおく運動方程式と終端速度の計算は科目「物理」で扱う内容である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="空気抵抗を受けて落下する物体の速さが終端速度に近づくv−tグラフ">
  <g stroke="var(--ink)" stroke-width="1.2">
    <line x1="70" y1="230" x2="600" y2="230"/><line x1="70" y1="230" x2="70" y2="40"/>
  </g>
  <g stroke="var(--line)" stroke-dasharray="3 3">
    <line x1="70" y1="200" x2="580" y2="200"/><line x1="70" y1="170" x2="580" y2="170"/><line x1="70" y1="140" x2="580" y2="140"/><line x1="70" y1="110" x2="580" y2="110"/><line x1="70" y1="80" x2="580" y2="80"/>
  </g>
  <line x1="70" y1="83" x2="580" y2="83" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="70" y1="230" x2="190" y2="53.6" stroke="var(--sub)" stroke-width="1.8" stroke-dasharray="5 4"/>
  <polyline fill="none" stroke="var(--warm)" stroke-width="2.5" points="70.0,230.0 80.0,216.0 90.0,203.4 100.0,191.9 110.0,181.5 120.0,172.2 130.0,163.7 140.0,156.0 150.0,149.1 160.0,142.8 170.0,137.1 180.0,131.9 190.0,127.3 200.0,123.1 210.0,119.2 220.0,115.8 230.0,112.7 240.0,109.9 250.0,107.3 260.0,105.0 270.0,102.9 280.0,101.0 290.0,99.3 300.0,97.7 310.0,96.3 320.0,95.1 330.0,93.9 340.0,92.9 350.0,91.9 360.0,91.1 370.0,90.3 380.0,89.6 390.0,89.0 400.0,88.4 410.0,87.9 420.0,87.4 430.0,87.0 440.0,86.6 450.0,86.3 460.0,86.0 470.0,85.7 480.0,85.4 490.0,85.2 500.0,85.0 510.0,84.8 520.0,84.6 530.0,84.5 540.0,84.3 550.0,84.2 560.0,84.1 570.0,84.0"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="70" y="246">0</text><text x="170" y="246">1</text><text x="270" y="246">2</text><text x="370" y="246">3</text><text x="470" y="246">4</text><text x="570" y="246">5</text>
    <text x="570" y="264">t 単位 s</text>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="62" y="234">0</text><text x="62" y="204">2</text><text x="62" y="174">4</text><text x="62" y="144">6</text><text x="62" y="114">8</text><text x="62" y="84">10</text>
  </g>
  <text x="76" y="34" font-size="12" fill="var(--muted)">v 単位 m/s</text>
  <g font-size="12.5">
    <text x="196" y="56" fill="var(--sub)">空気抵抗がない場合 v＝gt</text>
    <text x="400" y="72" fill="var(--accent)">終端速度 v<tspan font-size="10" dy="3">f</tspan><tspan dy="-3">＝mg/k＝9.8 m/s</tspan></text>
    <text x="300" y="130" fill="var(--warm)">空気抵抗 kv を受ける落下</text>
  </g>
</svg>
<figcaption>空気抵抗が速さに比例し k/m＝1 /s の場合の速さを0.1 s ごとに計算して描いた。初めの傾きは g で空気抵抗がない場合と一致する。傾きは次第に小さくなり速さは終端速度 9.8 m/s に近づく。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 9 物理の内容</div>
<p>質量 0.010 kg の小球が空気中を落下する。空気抵抗の大きさは速さに比例し比例定数は 0.049 kg/s である。終端速度を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 終端速度では合力が0で \(mg=kv_f\) である。<br>手順2 \(v_f=0.010\times9.8\div0.049=2.0\,\mathrm{m/s}\) である。<br>答え 2.0 m/s である。質量を2倍にすると終端速度も2倍になる。</div></details></div>

<h2 id="s7">現実世界の運動の法則 スカイダイビング</h2>
<p>ニュートンは1687年の『プリンキピア』で運動の3法則を示した。力の単位の名称 N はニュートンにちなむ。運動方程式は人工衛星の軌道計算から自動車の衝突安全設計まで同じ形で使われる。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>腹を下にした姿勢のスカイダイバーの終端速度は約 55 m/s で時速に直すと約 200 km である。パラシュートを開くと空気抵抗の比例定数に相当する量が大きくなり終端速度が下がる。着地できる速さまで減速するのは \(v_f=mg/k\) の \(k\) を大きくした結果である。</p>
<p class="an-x">高速の空気抵抗は速さの2乗に比例するので本文の kv の式は低速の近似である。</p>
</aside>

<h2 id="s8">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 運動方程式</div>
<p class="qz-q">滑らかな水平面上の質量 4.0 kg の物体に水平に 12 N の力を加え続けた。加速度の大きさを1つ選べ。</p>
<ol><li>0.33 m/s²</li><li>3.0 m/s²</li><li>8.0 m/s²</li><li>48 m/s²</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(a=F/m=12\div4.0=3.0\,\mathrm{m/s^2}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 慣性の法則</div>
<p class="qz-q">鉛直上向きに投げ上げたボールが上昇している間にボールに働く力として正しいものを1つ選べ。空気抵抗は無視する。</p>
<ol><li>上向きの投げた力と下向きの重力</li><li>下向きの重力だけ</li><li>上向きの投げた力だけ</li><li>力は働いていない</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。手から離れた後はボールに接触している物体がないので接触力は働かない。上昇を続けるのは慣性による。重力が下向きに働くので上向きの速度は減っていく。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 接触した2物体</div>
<p class="qz-q">滑らかな水平面上で質量 3.0 kg の物体 A と質量 1.0 kg の物体 B を接触させて並べ A を水平に 8.0 N で押した。A が B を押す力の大きさを1つ選べ。</p>
<ol><li>2.0 N</li><li>4.0 N</li><li>6.0 N</li><li>8.0 N</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。全体の加速度は \(8.0\div4.0=2.0\,\mathrm{m/s^2}\) である。B の運動方程式 \(1.0\times2.0=f\) から \(f=2.0\,\mathrm{N}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 糸でつながれた2物体</div>
<p class="qz-q">滑らかな水平な台の上の質量 3.0 kg の物体 A と滑車を通してつるした質量 1.0 kg の物体 B を軽い糸でつなぎ静かに放した。糸の張力に最も近い値を1つ選べ。</p>
<ol><li>2.5 N</li><li>7.4 N</li><li>9.8 N</li><li>29 N</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\((3.0+1.0)a=1.0\times9.8\) で \(a=2.45\,\mathrm{m/s^2}\) である。A の運動方程式から \(T=3.0\times2.45\approx7.4\,\mathrm{N}\) である。3 は B の重さで B が静止していると誤って判定した値である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ エレベーター</div>
<p class="qz-q">質量 60 kg の人がエレベーターの床に立っている。エレベーターが下向きに 1.8 m/s² で加速しているとき床が人を押す力を1つ選べ。</p>
<ol><li>480 N</li><li>588 N</li><li>696 N</li><li>108 N</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。下向きを正とすると \(60\times1.8=60\times9.8-N\) で \(N=60\times8.0=480\,\mathrm{N}\) である。3 は上向きに加速するときの値である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 滑らかな斜面</div>
<p class="qz-q">傾きの角 30° の滑らかな斜面上で物体を静かに放した。斜面に沿って 4.9 m 滑るのにかかる時間に最も近い値を1つ選べ。</p>
<ol><li>1.0 s</li><li>1.4 s</li><li>2.0 s</li><li>2.8 s</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。加速度は \(9.8\times\sin30^\circ=4.9\,\mathrm{m/s^2}\) である。\(4.9=\frac{1}{2}\times4.9\times t^2\) より \(t^2=2.0\) で \(t\approx1.4\,\mathrm{s}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 摩擦による減速</div>
<p class="qz-q">粗い水平面上で物体を 10 m/s で滑らせた。動摩擦係数は 0.50 である。止まるまでに滑る距離に最も近い値を1つ選べ。</p>
<ol><li>5.1 m</li><li>10 m</li><li>20 m</li><li>51 m</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(x=v_0^2/(2\mu'g)=100\div(2\times0.50\times9.8)\approx10\,\mathrm{m}\) である。質量は計算に現れない。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 終端速度</div>
<p class="qz-q">空気抵抗を受けて落下する雨粒が終端速度で落下しているときの記述として正しいものを1つ選べ。</p>
<ol><li>雨粒に働く力は重力だけである</li><li>雨粒に働く重力と空気抵抗の合力は0である</li><li>雨粒の加速度は下向きに g である</li><li>空気抵抗は重力より大きい</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。終端速度では速度が一定なので加速度は0で運動方程式から合力も0である。重力と空気抵抗は大きさが等しく向きが反対である。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
合力が0なら静止または等速直線運動を続ける。運動の向きに力が働いているとは限らない。<br>
運動方程式 \(ma=F\) の \(F\) は合力である。1 N は 1 kg に 1 m/s² を生じさせる力である。<br>
手順は着目物体を決める・力を全部描く・加速度の向きを正にする・成分で ma＝F を書くの4段階である。<br>
複数の物体は物体ごとに式を立て物体の間の力は作用反作用として両方の式に入れる。<br>
斜面では \(a=g\sin\theta\) で滑り下りるときの摩擦は \(a=g(\sin\theta-\mu'\cos\theta)\) である。<br>
空気抵抗が重力とつり合うと加速度が0になり終端速度 \(v_f=mg/k\) で落下する。</div>

<h2 id="s10">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>パラシュートの減速を、空気抵抗が速さに比例する式で説明してよいか。</strong> 本文は終端速度 \(v_f=mg/k\) の \(k\) が大きくなることで減速を説明した。一方で高速の空気抵抗は速さの2乗に比例するとも述べており、説明の目的が定性的な理解か数値の予測かによって評価が異なる。</li>
<li class="tb-vnote"><strong>急ブレーキで乗客が前に倒れる現象に、前向きの力は働いていないといえるか。</strong> 本文は地上から見て、乗客が慣性で前向きの速度を保つと説明した。加速するバスの中から見た運動は第11章の慣性力で扱い、どの観測者の立場をとるかで説明の形が異なる。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Newton's laws of motion — Wikipedia — https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion</li>
<li>Philosophiæ Naturalis Principia Mathematica — Wikipedia — https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica</li>
<li>Newton (unit) — Wikipedia — https://en.wikipedia.org/wiki/Newton_(unit)</li>
<li>Terminal velocity — Wikipedia — https://en.wikipedia.org/wiki/Terminal_velocity</li>
<li>Drag (physics) — Wikipedia — https://en.wikipedia.org/wiki/Drag_(physics)</li>
<li>Atwood machine — Wikipedia — https://en.wikipedia.org/wiki/Atwood_machine</li>
<li>Inertia — Wikipedia — https://en.wikipedia.org/wiki/Inertia</li>
<li>Daniel A. Russell Physics of Baseball and Softball Bats Impulse and Momentum — https://www.acs.psu.edu/drussell/bats/impulse.html</li>
</ol>
