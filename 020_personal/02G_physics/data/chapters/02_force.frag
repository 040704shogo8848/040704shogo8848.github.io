<!--meta
{"chapter": 2, "verify": {"date":"2026-10-15","checked":40,"match":37,"fixed":3,"unconfirmed":0}, "part": "物理基礎", "title": "力とつり合い", "thesis": "力は大きさと向きと作用点をもつベクトルである。物体に働く力を全部挙げて成分ごとに合計が0になればつり合う。つり合いは1つの物体に働く2力の関係で作用反作用は2つの物体の間の関係である。この区別が力学の計算の出発点である。"}
-->
<p>第1章では力を考えずに運動を位置と速度と加速度で記述した。この章では運動を変える原因である力を扱う。物体に働く力の種類と表し方とつり合いの条件を確定させる。第3章ではこの章の力をそのまま運動方程式に代入する。物体に働く力を漏れなく正しく描けるかどうかが第3章以降のすべての計算を左右する。</p>
<p>共通テストでこの範囲から問われるのは主に5種類である。力の合成と分解・つり合いの式・作用反作用とつり合いの区別・摩擦力の大きさ・水圧と浮力である。特に静止摩擦力の大きさと作用反作用の組の判定は計算ではなく概念の正誤で得点が分かれる。</p>

<h2 id="s1">力の表し方と単位</h2>
<p>力は物体の運動の状態を変えたり物体を変形させたりする働きである。力には3つの要素がある。<strong>大きさ・向き・作用点</strong>である。図では作用点から力の向きに矢印を描き矢印の長さを力の大きさに比例させる。作用点を通り力の向きに引いた直線を<strong>作用線</strong>と呼ぶ。</p>
<p>力の単位は<strong>ニュートン</strong>で記号は N である。1 N は質量 1 kg の物体に \(\mathrm{1\,m/s^2}\) の加速度を生じさせる力の大きさで第3章で定義を確定させる。目安として質量 100 g の物体に働く重力の大きさが約 1 N である。</p>
<p>力は働き方で2つに分けられる。物体どうしが接触して働く力を<strong>接触力</strong>と呼ぶ。垂直抗力・張力・弾性力・摩擦力・浮力がこれにあたる。離れていても働く力を<strong>遠隔力</strong>と呼ぶ。重力・静電気力・磁力がこれにあたる。<strong class="hit">物体に働く力は重力などの遠隔力と接触している相手から受ける接触力ですべてである</strong>。粗い面からは垂直抗力と摩擦力の2つを受ける。接触している相手ごとに受ける力を数えると力の描き漏れと描き過ぎを防げる。</p>
<div class="tb-tw"><table>
<thead><tr><th>力</th><th>働く相手</th><th>向き</th><th>大きさの決まり方</th></tr></thead>
<tbody>
<tr><td>重力</td><td>地球</td><td>鉛直下向き</td><td>\(mg\)</td></tr>
<tr><td>垂直抗力</td><td>接触している面</td><td>面に垂直で面から離れる向き</td><td>つり合いや運動方程式から求める</td></tr>
<tr><td>張力</td><td>糸</td><td>糸に沿って物体から糸の向き</td><td>つり合いや運動方程式から求める</td></tr>
<tr><td>弾性力</td><td>ばね</td><td>自然の長さに戻る向き</td><td>\(kx\)</td></tr>
<tr><td>摩擦力</td><td>接触している面</td><td>面に平行で滑りを妨げる向き</td><td>静止摩擦は条件で変わり動摩擦は \(\mu'N\)</td></tr>
<tr><td>浮力</td><td>周囲の流体</td><td>鉛直上向き</td><td>\(\rho Vg\)</td></tr>
</tbody></table></div>

<h2 id="s2">重力と質量の区別</h2>
<p>地球上の物体には地球が引く力が働く。これを<strong>重力</strong>と呼ぶ。質量 \(m\) の物体に働く重力の大きさは次の式で表される。</p>
<p>\[ W=mg \]</p>
<p>\(g\) は第1章の重力加速度 \(\mathrm{9.8\,m/s^2}\) である。重力の大きさを<strong>重さ</strong>とも呼ぶ。質量 50 kg の人の重さは \(50\times9.8=490\,\mathrm{N}\) である。</p>
<p><strong>質量</strong>は物体そのものの量で場所によって変わらない。単位は kg である。重さは力で単位は N で場所によって変わる。月面の重力加速度は約 \(\mathrm{1.6\,m/s^2}\) で地球の約6分の1である。<strong class="hit">月面で変わるのは重さだけで質量は変わらない</strong>。体重計が示す kg の値は地球上で重さを測って質量に換算した値である。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>質量 60 kg の宇宙飛行士の地球上と月面での質量と重さを求めよ。地球の重力加速度を 9.8 m/s² で月面を 1.6 m/s² とする。</p>
<details open><summary>解き方</summary><div>手順1 質量は場所によらず 60 kg である。<br>手順2 地球上の重さは \(60\times9.8=588\approx5.9\times10^2\,\mathrm{N}\) である。<br>手順3 月面の重さは \(60\times1.6=96\,\mathrm{N}\) である。<br>答え 質量はどちらも 60 kg で重さは地球上で約 590 N・月面で 96 N である。</div></details></div>

<h2 id="s3">垂直抗力と張力と弾性力</h2>
<p>机の上に置いた本には机の面から上向きの力が働く。面が物体を垂直に押し返す力を<strong>垂直抗力</strong>と呼び記号 \(N\) で表す。垂直抗力の大きさは物体の重さで決まるわけではない。本を上から手で押せば垂直抗力は大きくなり斜面に置けば重さより小さくなる。<strong class="hit">垂直抗力は他の力とのつり合いや運動方程式から求める量である</strong>。</p>
<p>糸が物体を引く力を<strong>張力</strong>と呼び記号 \(T\) で表す。質量を無視できる軽い糸の張力は糸のどの点でも同じ大きさである。滑らかな滑車を通しても大きさは変わらず向きだけが変わる。</p>
<p>ばねを伸ばしたり縮めたりするとばねは元に戻ろうとして物体に力を及ぼす。これを<strong>弾性力</strong>と呼ぶ。弾性力の大きさ \(F\) は自然の長さからの伸びや縮み \(x\) に比例する。</p>
<p>\[ F=kx \]</p>
<p>この関係を<strong>フックの法則</strong>と呼ぶ。比例定数 \(k\) を<strong>ばね定数</strong>と呼び単位は N/m である。\(k\) が大きいほど伸ばしにくい硬いばねである。フックの法則は伸びが小さい範囲で成り立つ。ばねの長さそのものではなく自然の長さからの変化量を \(x\) に代入する。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="ばね定数50 N/mのばねの弾性力と伸びの関係">
  <g stroke="var(--ink)" stroke-width="1.2">
    <line x1="70" y1="220" x2="500" y2="220"/><line x1="70" y1="220" x2="70" y2="40"/>
  </g>
  <g stroke="var(--line)" stroke-dasharray="3 3">
    <line x1="70" y1="188" x2="480" y2="188"/><line x1="70" y1="156" x2="480" y2="156"/><line x1="70" y1="124" x2="480" y2="124"/><line x1="70" y1="92" x2="480" y2="92"/><line x1="70" y1="60" x2="480" y2="60"/>
  </g>
  <line x1="70" y1="220" x2="470" y2="60" stroke="var(--warm)" stroke-width="2.5"/>
  <polyline points="170,180 370,180 370,100" fill="none" stroke="var(--accent)" stroke-width="1.8"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="70" y="236">0</text><text x="170" y="236">0.05</text><text x="270" y="236">0.10</text><text x="370" y="236">0.15</text><text x="470" y="236">0.20</text>
    <text x="470" y="256">伸び x 単位 m</text>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="62" y="224">0</text><text x="62" y="192">2</text><text x="62" y="160">4</text><text x="62" y="128">6</text><text x="62" y="96">8</text><text x="62" y="64">10</text>
  </g>
  <text x="76" y="34" font-size="12" fill="var(--muted)">弾性力 F 単位 N</text>
  <g font-size="12.5" fill="var(--accent)">
    <text x="245" y="198">0.10 m</text><text x="378" y="145">5.0 N</text>
    <text x="150" y="110">傾き k＝5.0÷0.10＝50 N/m</text>
  </g>
  <g stroke="var(--ink)" stroke-width="1.5" fill="none">
    <line x1="560" y1="40" x2="680" y2="40" stroke-width="3"/>
    <polyline points="620,40 620,55 605,62 635,74 605,86 635,98 605,110 635,122 620,129 620,140"/>
  </g>
  <rect x="595" y="140" width="50" height="36" fill="var(--cool)"/>
  <line x1="620" y1="178" x2="620" y2="225" stroke="var(--warm)" stroke-width="2.5" marker-end="url(#ah02g02a)"/>
  <defs><marker id="ah02g02a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
  <marker id="ah02g02b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker></defs>
  <line x1="642" y1="139" x2="642" y2="92" stroke="var(--cool)" stroke-width="2.5" marker-end="url(#ah02g02b)"/>
  <g font-size="12" fill="var(--ink)">
    <text x="650" y="114">kx</text><text x="630" y="246">mg</text>
  </g>
</svg>
<figcaption>ばね定数 50 N/m のばねの弾性力と伸びのグラフである。原点を通る直線で傾きがばね定数である。右はおもりをつるして静止させた状態で弾性力 kx と重力 mg がつり合う。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 2</div>
<p>ばねに質量 0.30 kg のおもりをつるすと 0.060 m 伸びて静止した。ばね定数を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 おもりに働く力は重力 \(mg\) と弾性力 \(kx\) の2つである。<br>手順2 静止しているのでつり合いの式は \(kx=mg\) である。<br>手順3 \(k=0.30\times9.8\div0.060=49\,\mathrm{N/m}\) である。<br>答え 49 N/m である。</div></details></div>

<h2 id="s4">力の合成と分解とつり合い</h2>
<p>1つの物体に複数の力が働くとき同じ働きをする1つの力に置き換えられる。これを<strong>力の合成</strong>と呼び置き換えた力を<strong>合力</strong>と呼ぶ。2力の合力は2つの力の矢印を2辺とする平行四辺形の対角線である。この規則を平行四辺形の法則と呼ぶ。</p>
<p>逆に1つの力を2つの方向の力に分けることを<strong>力の分解</strong>と呼ぶ。互いに垂直な x 軸と y 軸の方向に分解した成分を使うと計算が足し算になる。大きさ \(F\) の力が x 軸と角 \(\theta\) をなすとき成分は次のとおりである。</p>
<p>\[ F_x=F\cos\theta \qquad F_y=F\sin\theta \]</p>
<p>静止している物体に働く力の合力は0である。これを<strong>力のつり合い</strong>と呼ぶ。平面内の力のつり合いの条件は成分ごとに書く。</p>
<p>\[ \sum F_x=0 \qquad \sum F_y=0 \]</p>
<p><strong class="hit">軸の取り方は自由で計算が楽になる向きに取る</strong>。斜面上の物体では斜面に平行な方向と垂直な方向に軸を取ると未知の力が1つの軸に1つずつになる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="滑らかな斜面上で糸に引かれて静止する物体に働く力">
  <defs>
    <marker id="ah02g02c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah02g02d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
    <marker id="ah02g02e" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--sub)"/></marker>
  </defs>
  <polygon points="60,20.6 60,240 440,240" fill="var(--line)" opacity=".5"/>
  <line x1="60" y1="20.6" x2="440" y2="240" stroke="var(--ink)" stroke-width="1.5"/>
  <path d="M390 240 A50 50 0 0 1 396.7 215" fill="none" stroke="var(--ink)"/>
  <text x="365" y="232" font-size="13" fill="var(--ink)">θ</text>
  <rect x="214.2" y="81.5" width="60" height="40" fill="var(--sub)" opacity=".35" transform="rotate(30 244.2 101.5)"/>
  <g stroke-width="2.5">
    <line x1="244.2" y1="101.5" x2="244.2" y2="199" stroke="var(--warm)" marker-end="url(#ah02g02c)"/>
    <line x1="244.2" y1="101.5" x2="287.5" y2="29" stroke="var(--cool)" marker-end="url(#ah02g02d)"/>
    <line x1="244.2" y1="101.5" x2="203" y2="77.7" stroke="var(--cool)" marker-end="url(#ah02g02d)"/>
  </g>
  <g stroke="var(--sub)" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#ah02g02e)">
    <line x1="244.2" y1="101.5" x2="286" y2="125.6"/>
    <line x1="244.2" y1="101.5" x2="202.1" y2="174.4"/>
  </g>
  <g stroke="var(--line)" stroke-dasharray="2 3"><line x1="287.5" y1="126.5" x2="244.2" y2="201.5"/><line x1="200.9" y1="176.5" x2="244.2" y2="201.5"/></g>
  <g font-size="12.5">
    <text x="250" y="215" fill="var(--warm)">mg</text>
    <text x="294" y="34" fill="var(--cool)">N</text>
    <text x="168" y="74" fill="var(--cool)">T</text>
    <text x="294" y="134" fill="var(--sub)">mg sinθ</text>
    <text x="120" y="182" fill="var(--sub)">mg cosθ</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="480" y="80">斜面に平行な方向</text>
    <text x="500" y="102">T − mg sinθ ＝ 0</text>
    <text x="480" y="150">斜面に垂直な方向</text>
    <text x="500" y="172">N − mg cosθ ＝ 0</text>
  </g>
</svg>
<figcaption>傾きの角 θ＝30° の滑らかな斜面上で斜面に平行な糸に引かれて静止する物体である。重力 mg を斜面に平行な成分 mg sinθ と垂直な成分 mg cosθ に分解した。破線が分解した成分である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 3</div>
<p>傾きの角 30° の滑らかな斜面上で質量 2.0 kg の物体が斜面に平行な糸に引かれて静止している。張力 \(T\) と垂直抗力 \(N\) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 物体に働く力は重力 \(mg\)・垂直抗力 \(N\)・張力 \(T\) の3つである。<br>手順2 斜面に平行な方向のつり合いは \(T=mg\sin30^\circ=2.0\times9.8\times0.50=9.8\,\mathrm{N}\) である。<br>手順3 斜面に垂直な方向のつり合いは \(N=mg\cos30^\circ=2.0\times9.8\times0.866\approx17\,\mathrm{N}\) である。<br>答え \(T=9.8\,\mathrm{N}\) で \(N\approx17\,\mathrm{N}\) である。垂直抗力は重さ 19.6 N より小さい。</div></details></div>

<div class="ex"><div class="ex-h">例題 4</div>
<p>重さ 10 N のおもりを2本の糸で天井からつるす。糸1は水平と 30° をなし糸2は水平と 60° をなして静止している。それぞれの張力 \(T_1\) と \(T_2\) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 水平方向のつり合いは \(T_1\cos30^\circ=T_2\cos60^\circ\) で \(T_2=\sqrt{3}\,T_1\) である。<br>手順2 鉛直方向のつり合いは \(T_1\sin30^\circ+T_2\sin60^\circ=10\) である。<br>手順3 代入すると \(\frac{1}{2}T_1+\sqrt{3}T_1\times\frac{\sqrt{3}}{2}=2T_1=10\) で \(T_1=5.0\,\mathrm{N}\) である。<br>答え \(T_1=5.0\,\mathrm{N}\) で \(T_2=5\sqrt{3}\approx8.7\,\mathrm{N}\) である。鉛直に近い糸2のほうが張力が大きい。</div></details></div>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">つり合いの式は部門別の収支をそれぞれ0に締める作業である</p>
<p>x 方向と y 方向は別の部門である。全体の合計ではなく部門ごとに0にする。</p>
</aside>

<h2 id="s5">作用反作用とつり合いの区別</h2>
<p>物体 A が物体 B に力を及ぼすと B も A に力を及ぼす。2つの力は同じ作用線上にあり大きさが等しく向きが反対である。これを<strong>作用反作用の法則</strong>と呼ぶ。ニュートンの運動の第三法則である。物体が静止していても動いていても質量が異なっても成り立つ。</p>
<p>作用反作用の2力とつり合いの2力はどちらも大きさが等しく向きが反対である。そのため取り違えやすい。区別の基準は<strong class="hit">2力が働く物体が同じか異なるか</strong>の1点である。</p>
<div class="tb-vs">
<div><h5>つり合いの2力</h5><ul>
<li>1つの物体に働く2力</li>
<li>合力が0になり物体の運動を考えるときに足し合わせる</li>
<li>物体が加速していれば成り立たない</li>
</ul></div>
<div><h5>作用反作用の2力</h5><ul>
<li>2つの物体がそれぞれ相手に及ぼす2力</li>
<li>働く物体が異なるので足し合わせない</li>
<li>物体が加速していても常に成り立つ</li>
</ul></div>
</div>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="机の上の本に働く力のつり合いと作用反作用の組">
  <defs>
    <marker id="ah02g02f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah02g02g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
  </defs>
  <text x="20" y="22" font-size="13" fill="var(--muted)">本に働く力 つり合い</text>
  <rect x="100" y="105" width="100" height="40" fill="var(--sub)" opacity=".4"/><text x="150" y="130" font-size="13" text-anchor="middle" fill="var(--ink)">本</text>
  <line x1="150" y1="103" x2="150" y2="45" stroke="var(--cool)" stroke-width="2.5" marker-end="url(#ah02g02g)"/>
  <line x1="150" y1="147" x2="150" y2="205" stroke="var(--warm)" stroke-width="2.5" marker-end="url(#ah02g02f)"/>
  <g font-size="12.5">
    <text x="160" y="62" fill="var(--cool)">N 机が本を押す力</text>
    <text x="160" y="200" fill="var(--warm)">W 地球が本を引く力</text>
  </g>
  <line x1="300" y1="30" x2="300" y2="240" stroke="var(--line)" stroke-dasharray="4 4"/>
  <text x="320" y="22" font-size="13" fill="var(--muted)">作用反作用の組 2つの物体に分かれて働く</text>
  <rect x="350" y="70" width="90" height="30" fill="var(--sub)" opacity=".4"/><text x="395" y="90" font-size="12.5" text-anchor="middle">本</text>
  <rect x="330" y="150" width="130" height="22" fill="var(--sub)" opacity=".25"/><text x="395" y="166" font-size="12.5" text-anchor="middle">机</text>
  <line x1="395" y1="68" x2="395" y2="38" stroke="var(--cool)" stroke-width="2.5" marker-end="url(#ah02g02g)"/>
  <line x1="395" y1="174" x2="395" y2="210" stroke="var(--cool)" stroke-width="2.5" marker-end="url(#ah02g02g)"/>
  <g font-size="12" fill="var(--cool)"><text x="402" y="50">机→本 N</text><text x="402" y="204">本→机 N</text></g>
  <rect x="560" y="70" width="90" height="30" fill="var(--sub)" opacity=".4"/><text x="605" y="90" font-size="12.5" text-anchor="middle">本</text>
  <path d="M520 240 Q605 175 690 240" fill="var(--cool)" opacity=".25"/><text x="605" y="232" font-size="12.5" text-anchor="middle">地球</text>
  <line x1="605" y1="102" x2="605" y2="140" stroke="var(--warm)" stroke-width="2.5" marker-end="url(#ah02g02f)"/>
  <line x1="605" y1="205" x2="605" y2="160" stroke="var(--warm)" stroke-width="2.5" marker-end="url(#ah02g02f)"/>
  <g font-size="12" fill="var(--warm)"><text x="612" y="128">地球→本 W</text><text x="612" y="180">本→地球 W</text></g>
</svg>
<figcaption>左は本に働く2力で同じ物体に働くのでつり合いの関係である。右は作用反作用の組で机と本の組と地球と本の組の2つがある。どちらの組も2力が別々の物体に働く。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 5</div>
<p>天井から糸でつるしたおもりが静止している。おもりに働く力とそれぞれの反作用を挙げよ。そのうえで重力とつり合いの関係にある力と重力と作用反作用の関係にある力を答えよ。</p>
<details open><summary>解き方</summary><div>手順1 おもりに働く力は重力と糸の張力の2つである。張力は重力とつり合いの関係である。<br>手順2 重力は地球がおもりを引く力でその反作用はおもりが地球を引く力である。<br>手順3 張力は糸がおもりを引く力でその反作用はおもりが糸を引く力である。この力も重力と同じ大きさである。<br>答え 張力はつり合いの関係である。おもりが地球を引く力は重力と作用反作用の関係である。おもりが糸を引く力は張力の反作用で重力とは直接の関係をもたない。</div></details></div>

<p>典型的な誤りは「重力と垂直抗力は作用反作用である」とする記述である。2力はどちらも本に働くのでつり合いの関係である。もう1つの誤りは質量の大きい物体のほうが大きな力を及ぼすとする考えである。トラックと乗用車が衝突しても互いに及ぼす力の大きさは等しい。</p>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">作用と反作用には片思いが存在しない</p>
<p>A が B を押せば B は同じ大きさで A を押し返す。一方だけが及ぼす力は存在しない。</p>
</aside>

<h2 id="s6">摩擦力</h2>
<p>粗い面の上の物体を面に平行に押すと面から押す向きと反対の力が働く。これを<strong>摩擦力</strong>と呼ぶ。物体が静止しているときの摩擦力を<strong>静止摩擦力</strong>と呼び滑っているときの摩擦力を<strong>動摩擦力</strong>と呼ぶ。</p>
<p>静止摩擦力の大きさは一定ではない。物体が静止している間は押す力とつり合う大きさになる。押す力を大きくすると静止摩擦力も大きくなるが上限がある。上限の値を<strong>最大静止摩擦力</strong>と呼び垂直抗力 \(N\) に比例する。</p>
<p>\[ F_0=\mu_0 N \]</p>
<p>\(\mu_0\) を<strong>静止摩擦係数</strong>と呼ぶ。押す力が \(F_0\) を超えると物体は滑り出す。滑っている物体に働く動摩擦力の大きさは速さによらず垂直抗力に比例する。</p>
<p>\[ F'=\mu' N \]</p>
<p>\(\mu'\) を<strong>動摩擦係数</strong>と呼ぶ。同じ面では一般に \(\mu'<\mu_0\) である。摩擦係数は単位をもたない。<strong class="hit">静止摩擦力に \(\mu_0N\) を使えるのは滑り出す直前だけである</strong>。それ以外の静止状態ではつり合いの式から静止摩擦力を求める。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="押す力と摩擦力の大きさの関係">
  <g stroke="var(--ink)" stroke-width="1.2">
    <line x1="70" y1="220" x2="600" y2="220"/><line x1="70" y1="220" x2="70" y2="40"/>
  </g>
  <g stroke="var(--line)" stroke-dasharray="3 3">
    <line x1="70" y1="180" x2="580" y2="180"/><line x1="70" y1="140" x2="580" y2="140"/><line x1="70" y1="100" x2="580" y2="100"/><line x1="70" y1="60" x2="580" y2="60"/>
  </g>
  <rect x="70" y="40" width="300" height="180" fill="var(--cool)" opacity=".08"/>
  <polyline points="70,220 370,100" fill="none" stroke="var(--warm)" stroke-width="2.5"/>
  <line x1="370" y1="100" x2="370" y2="140" stroke="var(--warm)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="370" y1="140" x2="570" y2="140" stroke="var(--warm)" stroke-width="2.5"/>
  <circle cx="370" cy="100" r="4" fill="var(--accent)"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="70" y="236">0</text><text x="170" y="236">2</text><text x="270" y="236">4</text><text x="370" y="236">6</text><text x="470" y="236">8</text><text x="570" y="236">10</text>
    <text x="560" y="256">押す力 単位 N</text>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="62" y="224">0</text><text x="62" y="184">2</text><text x="62" y="144">4</text><text x="62" y="104">6</text><text x="62" y="64">8</text>
  </g>
  <text x="76" y="34" font-size="12" fill="var(--muted)">摩擦力 単位 N</text>
  <g font-size="12.5">
    <text x="150" y="70" fill="var(--cool)">静止している 摩擦力＝押す力</text>
    <text x="440" y="70" fill="var(--sub)">滑っている</text>
    <text x="380" y="94" fill="var(--accent)">最大静止摩擦力 μ₀N＝6 N</text>
    <text x="430" y="132" fill="var(--warm)">動摩擦力 μ′N＝4 N</text>
  </g>
</svg>
<figcaption>垂直抗力 10 N・静止摩擦係数 0.60・動摩擦係数 0.40 の場合である。押す力が 6 N までは静止摩擦力が押す力と等しく傾き1の直線になる。6 N を超えると滑り出し摩擦力は一定の 4 N になる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 6</div>
<p>粗い水平面上に質量 2.0 kg の物体がある。静止摩擦係数は 0.50 で動摩擦係数は 0.30 である。水平に 6.0 N で押したときの摩擦力と滑っているときの摩擦力を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 垂直抗力は \(N=mg=2.0\times9.8=19.6\,\mathrm{N}\) である。<br>手順2 最大静止摩擦力は \(0.50\times19.6=9.8\,\mathrm{N}\) で 6.0 N はこれより小さいので物体は静止したままである。<br>手順3 静止摩擦力は押す力とつり合い 6.0 N である。<br>手順4 滑っているときの動摩擦力は \(0.30\times19.6\approx5.9\,\mathrm{N}\) である。<br>答え 押したときは 6.0 N で滑っているときは約 5.9 N である。</div></details></div>

<p>斜面の傾きを少しずつ大きくして物体が滑り出す角を \(\theta_0\) とすると静止摩擦係数を測定できる。滑り出す直前は斜面に平行な方向で \(mg\sin\theta_0=\mu_0N\) で垂直な方向で \(N=mg\cos\theta_0\) である。2式から次の関係が得られる。</p>
<p>\[ \mu_0=\tan\theta_0 \]</p>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">静止摩擦力は価格の硬直性である</p>
<p>需要が少し変わっても価格は動かない。閾値を超えた瞬間に動き出し動いた後の抵抗は閾値より小さい。</p>
</aside>

<h2 id="s7">圧力と水圧と浮力</h2>
<p>面を垂直に押す力の大きさを面積で割った量を<strong>圧力</strong>と呼ぶ。面積 \(S\) の面に垂直に大きさ \(F\) の力が働くとき圧力 \(p\) は次の式で表される。</p>
<p>\[ p=\frac{F}{S} \]</p>
<p>単位は \(\mathrm{N/m^2}\) で<strong>パスカル</strong>と呼び記号は Pa である。地表の大気の圧力は約 \(\mathrm{1.0\times10^5\,Pa}\) でこれを1気圧と呼ぶ。</p>
<p>水中の圧力を<strong>水圧</strong>と呼ぶ。水面から深さ \(h\) の点の水圧は真上にある水柱の重さで求められる。底面積 \(S\)・高さ \(h\) の水柱の質量は \(\rho Sh\) で重さは \(\rho Shg\) である。これを面積 \(S\) で割り水面を押す大気圧 \(p_0\) を加える。</p>
<p>\[ p=p_0+\rho gh \]</p>
<p>\(\rho\) は水の密度で \(\mathrm{1.0\times10^3\,kg/m^3}\) である。深さ 10 m ごとに水圧は約 \(\mathrm{9.8\times10^4\,Pa}\) 増え1気圧分に相当する。水圧は面の向きによらず同じ深さなら同じ大きさで面に垂直に働く。</p>
<p>水中の物体は周囲から水圧を受ける。<strong class="hit">深いほど水圧が大きいので下面を押し上げる力が上面を押し下げる力より大きい</strong>。この差が<strong>浮力</strong>である。側面の力は左右で打ち消し合う。上面の深さ \(h_1\)・下面の深さ \(h_2\)・面積 \(S\) の直方体で計算すると次のとおりである。</p>
<p>\[ F=(p_2-p_1)S=\rho g(h_2-h_1)S=\rho Vg \]</p>
<p>\(V\) は水中の部分の体積である。浮力の大きさは物体が押しのけた流体の重さに等しい。これを<strong>アルキメデスの原理</strong>と呼ぶ。浮力は物体の材質や質量によらず押しのけた体積と流体の密度だけで定まる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="水中の直方体の上面と下面に働く水圧の力の差が浮力になる">
  <defs>
    <marker id="ah02g02h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
    <marker id="ah02g02i" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  </defs>
  <rect x="40" y="50" width="380" height="200" fill="var(--cool)" opacity=".15"/>
  <line x1="40" y1="50" x2="420" y2="50" stroke="var(--cool)" stroke-width="2"/>
  <text x="46" y="42" font-size="12" fill="var(--sub)">水面</text>
  <rect x="180" y="110" width="100" height="80" fill="var(--warm)" opacity=".5"/>
  <g stroke="var(--cool)" stroke-width="2" marker-end="url(#ah02g02h)">
    <line x1="200" y1="88" x2="200" y2="107"/><line x1="230" y1="88" x2="230" y2="107"/><line x1="260" y1="88" x2="260" y2="107"/>
    <line x1="200" y1="240" x2="200" y2="193"/><line x1="230" y1="240" x2="230" y2="193"/><line x1="260" y1="240" x2="260" y2="193"/>
    <line x1="146" y1="150" x2="177" y2="150"/><line x1="314" y1="150" x2="283" y2="150"/>
  </g>
  <g stroke="var(--sub)" stroke-width="1">
    <line x1="80" y1="50" x2="80" y2="110"/><line x1="110" y1="50" x2="110" y2="190"/>
    <line x1="76" y1="110" x2="180" y2="110" stroke-dasharray="3 3"/><line x1="106" y1="190" x2="180" y2="190" stroke-dasharray="3 3"/>
  </g>
  <g font-size="12" fill="var(--sub)"><text x="52" y="84">h₁</text><text x="114" y="176">h₂</text></g>
  <g font-size="12.5" fill="var(--ink)">
    <text x="290" y="100">上面 p₁S 下向き</text>
    <text x="290" y="232">下面 p₂S 上向き</text>
    <text x="322" y="154">側面は打ち消す</text>
  </g>
  <line x1="560" y1="200" x2="560" y2="90" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah02g02i)"/>
  <g font-size="13" fill="var(--ink)">
    <text x="580" y="130">浮力</text>
    <text x="580" y="152">F＝p₂S − p₁S</text>
    <text x="580" y="174">　＝ρVg</text>
  </g>
</svg>
<figcaption>水中の直方体の上面と下面に働く水圧の力を矢印の長さで比べた図である。下面は深いので水圧が大きく上向きの力が上面の下向きの力を上回る。差が浮力で大きさは押しのけた水の重さ ρVg に等しい。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 7</div>
<p>体積 \(2.0\times10^{-4}\,\mathrm{m^3}\)・質量 0.50 kg の金属球をばねばかりにつるし全体を水中に入れて静止させた。ばねばかりの値は何 N か。水の密度は \(\mathrm{1.0\times10^3\,kg/m^3}\) とする。</p>
<details open><summary>解き方</summary><div>手順1 球に働く力は重力・浮力・ばねばかりの張力の3つである。<br>手順2 重力は \(0.50\times9.8=4.9\,\mathrm{N}\) で浮力は \(1.0\times10^3\times2.0\times10^{-4}\times9.8=1.96\,\mathrm{N}\) である。<br>手順3 鉛直方向のつり合いは \(T+1.96=4.9\) で \(T\approx2.9\,\mathrm{N}\) である。<br>答え 約 2.9 N である。ばねばかりの値は浮力の分だけ小さくなる。</div></details></div>

<h2 id="s8">現実世界の力 鉄の船が浮く理由</h2>
<p>鉄の密度は水の約8倍で鉄の塊は水に沈む。それでも鉄の船が浮くのは船体が内部に空間をもち大きな体積の水を押しのけるからである。船の重さと押しのけた水の重さが等しくなる深さまで沈んで静止する。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>船の大きさを表す排水量は船が押しのける水の質量である。アルキメデスの原理により排水量は船全体の質量に等しい。荷物を積むと船は深く沈み押しのける水が増える。</p>
</aside>

<h2 id="s9">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 重さと質量</div>
<p class="qz-q">地球上で質量 60 kg の物体を月面に運んだ。月面での質量と重さの組み合わせを1つ選べ。月面の重力加速度は 1.6 m/s² とする。</p>
<ol><li>10 kg と 16 N</li><li>10 kg と 96 N</li><li>60 kg と 96 N</li><li>60 kg と 588 N</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。質量は場所によらず 60 kg で重さは \(60\times1.6=96\,\mathrm{N}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ フックの法則</div>
<p class="qz-q">ばねに質量 0.20 kg のおもりをつるすと 0.049 m 伸びて静止した。ばね定数を1つ選べ。</p>
<ol><li>4.0 N/m</li><li>9.8 N/m</li><li>40 N/m</li><li>98 N/m</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。つり合いの式 \(kx=mg\) から \(k=0.20\times9.8\div0.049=40\,\mathrm{N/m}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 斜面上のつり合い</div>
<p class="qz-q">傾きの角 30° の滑らかな斜面上で質量 2.0 kg の物体を斜面に平行な糸で支えて静止させた。糸の張力を1つ選べ。</p>
<ol><li>9.8 N</li><li>17 N</li><li>19.6 N</li><li>39 N</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。斜面に平行な方向のつり合いで \(T=mg\sin30^\circ=2.0\times9.8\times0.50=9.8\,\mathrm{N}\) である。2 は垂直抗力の値である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 作用反作用</div>
<p class="qz-q">水平な床に置かれて静止している箱について正しい記述を1つ選べ。</p>
<ol><li>箱に働く重力と床が箱を押す力は作用反作用の関係である</li><li>箱に働く重力と床が箱を押す力はつり合いの関係である</li><li>箱が床を押す力と床が箱を押す力はつり合いの関係である</li><li>箱が床を押す力は箱に働く重力そのものである</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。重力と垂直抗力はどちらも箱に働くのでつり合いの関係である。3 の2力は箱と床に分かれて働くので作用反作用の関係である。4 の箱が床を押す力は床に働く接触力で地球が箱を引く重力とは働く物体も相手も異なる。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 静止摩擦力</div>
<p class="qz-q">粗い水平面上に質量 5.0 kg の物体が静止している。静止摩擦係数は 0.40 である。水平に 10 N の力で押したが物体は動かなかった。このとき物体に働く摩擦力の大きさを1つ選べ。</p>
<ol><li>0 N</li><li>10 N</li><li>19.6 N</li><li>49 N</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。最大静止摩擦力は \(0.40\times5.0\times9.8=19.6\,\mathrm{N}\) で押す力 10 N より大きいので物体は静止する。静止摩擦力は押す力とつり合い 10 N である。3 は滑り出す直前だけに使える値である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 滑り出す角</div>
<p class="qz-q">板の上に物体を置き板の傾きを少しずつ大きくすると傾きの角が 30° を超えたところで物体が滑り出した。静止摩擦係数に最も近い値を1つ選べ。</p>
<ol><li>0.50</li><li>0.58</li><li>0.87</li><li>1.7</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(\mu_0=\tan30^\circ=1/\sqrt{3}\approx0.58\) である。1 は \(\sin30^\circ\) で 3 は \(\cos30^\circ\) で 4 は \(\tan60^\circ\) である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 水圧</div>
<p class="qz-q">水面から深さ 10 m の点の圧力に最も近い値を1つ選べ。大気圧は \(\mathrm{1.0\times10^5\,Pa}\) で水の密度は \(\mathrm{1.0\times10^3\,kg/m^3}\) とする。</p>
<ol><li>\(\mathrm{9.8\times10^4\,Pa}\)</li><li>\(\mathrm{1.0\times10^5\,Pa}\)</li><li>\(\mathrm{2.0\times10^5\,Pa}\)</li><li>\(\mathrm{9.8\times10^5\,Pa}\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\(\rho gh=1.0\times10^3\times9.8\times10=9.8\times10^4\,\mathrm{Pa}\) に大気圧を加えて \(1.98\times10^5\approx2.0\times10^5\,\mathrm{Pa}\) である。1 は大気圧を加え忘れた値である。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 浮力</div>
<p class="qz-q">体積 \(2.0\times10^{-4}\,\mathrm{m^3}\)・質量 0.50 kg の物体をばねばかりでつるし全体を水中に入れて静止させた。ばねばかりの値に最も近いものを1つ選べ。</p>
<ol><li>2.0 N</li><li>2.9 N</li><li>4.9 N</li><li>6.9 N</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。重力 4.9 N から浮力 \(1.0\times10^3\times2.0\times10^{-4}\times9.8\approx1.96\,\mathrm{N}\) を引いて約 2.9 N である。</div></details></div>

<h2 id="s10">この章の要点</h2>
<div class="tb-key"><b>要点</b>
物体に働く力は重力などの遠隔力と接触している相手から受ける接触力ですべてである。<br>
重さ \(W=mg\) は場所で変わり質量は変わらない。弾性力は \(F=kx\) で \(x\) は自然の長さからの変化量である。<br>
つり合いの条件は成分ごとに \(\sum F_x=0\) と \(\sum F_y=0\) である。斜面では斜面に平行と垂直に分解する。<br>
つり合いは1つの物体に働く2力で作用反作用は2つの物体の間の2力である。<br>
静止摩擦力はつり合いから求め \(\mu_0N\) は滑り出す直前の上限である。動摩擦力は \(\mu'N\) である。<br>
水圧は \(p=p_0+\rho gh\) で浮力は押しのけた流体の重さ \(\rho Vg\) である。</div>

<h2 id="s11">残っている問い</h2>
<ul>
<li class="tb-vnote">摩擦力が垂直抗力に比例し接触面積によらないという法則は経験則である。極めて滑らかな面や柔らかい物体では成り立たない。動摩擦力が速さによらないことも近似である。</li>
<li class="tb-vnote">重力には地球の自転による遠心力の影響が含まれる。厳密には万有引力と重力は一致しない。万有引力は第11章で扱う。</li>
<li class="tb-vnote">アルキメデスが王冠の純度を浴槽で見抜いたという逸話はウィトルウィウスの著作による伝承で史実かどうかは確定していない。本文では原理だけを扱った。</li>
<li class="tb-vnote">月面の重力加速度 1.6 m/s² は表面の平均的な値を2桁に丸めた値である。</li>
</ul>

<h2 id="s12">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Hooke's law — Wikipedia — https://en.wikipedia.org/wiki/Hooke%27s_law</li>
<li>Friction — Wikipedia — https://en.wikipedia.org/wiki/Friction</li>
<li>Newton's laws of motion — Wikipedia — https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion</li>
<li>Archimedes' principle — Wikipedia — https://en.wikipedia.org/wiki/Archimedes%27_principle</li>
<li>Hydrostatics — Wikipedia — https://en.wikipedia.org/wiki/Hydrostatics</li>
<li>Gravity of the Moon — Wikipedia — https://en.wikipedia.org/wiki/Gravitation_of_the_Moon</li>
<li>Displacement (ship) — Wikipedia — https://en.wikipedia.org/wiki/Displacement_(ship)</li>
</ol>
