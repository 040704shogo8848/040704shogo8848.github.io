<!--meta
{"chapter": 7, "part": "物理基礎", "title": "電流と電気抵抗", "thesis": "電流は導線の断面を1秒間に通過する電気量である。金属の中では自由電子がゆっくり移動して電流を運び陽イオンとの衝突が電気抵抗を生む。電圧と電流と抵抗の関係はオームの法則1本にまとまり電力とジュール熱もそこから導かれる。", "verify": {"date": "2026-10-15", "checked": 52, "match": 50, "fixed": 2, "unconfirmed": 0}}
-->
<p>第4章では仕事とエネルギーを扱い第5章では熱を扱った。この章ではエネルギーを運ぶもう1つの手段である電気を扱う。乾電池から豆電球へ届くエネルギーも発電所から家庭へ届くエネルギーも導線の中を動く電荷が運ぶ。電荷が何であり導線の中でどう動くかを押さえるとオームの法則・合成抵抗・電力が1本の筋でつながる。</p>
<p>共通テスト物理基礎の電気分野で問われる論点は主に5つである。電流と電気量の関係・オームの法則・抵抗率と導線の形の関係・直列と並列の合成抵抗・電力とジュール熱である。どれも短い計算で解けるが単位の換算と回路の読み取りで失点しやすい。この章は静電気から始めてこの5点を順に積み上げる。</p>

<h2 id="s1">静電気と電荷</h2>
<p>下じきを髪の毛でこすると髪の毛が下じきに引き寄せられる。異なる2つの物体を互いにこすると一方の物体の電子がもう一方へ移り両方が電気を帯びる。物体が電気を帯びることを<strong>帯電</strong>と呼び帯電した物体がもつ電気を<strong>電荷</strong>と呼ぶ。摩擦で生じる電気を<strong>静電気</strong>または摩擦電気と呼ぶ。</p>
<p>電荷には正と負の2種類がある。<strong class="hit">同じ符号の電荷どうしは反発し異なる符号の電荷どうしは引き合う</strong>。この力を静電気力またはクーロン力と呼ぶ。力の大きさは電荷が大きいほど大きく距離が離れるほど小さい。距離との関係を式で扱うのは物理の第14章である。</p>
<p>電荷の量を<strong>電気量</strong>と呼ぶ。単位はクーロンで記号は C である。物質は原子からなり原子は正の電荷をもつ原子核と負の電荷をもつ電子からなる。電子1個がもつ電気量の大きさを<strong>電気素量</strong>と呼び記号 \(e\) で表す。</p>
\[ e = 1.6\times10^{-19}\ \mathrm{C} \]
<p>電子の電気量は \(-e\) で陽子の電気量は \(+e\) である。物体の電気量は必ず \(e\) の整数倍になる。互いにこする前の物体は陽子と電子の数が等しく電気量の合計が0である。互いにこすると電子が移るだけで新しく電荷が生まれることも消えることもない。したがって2つの物体の電気量の合計は互いにこすった後も0のままである。これを<strong>電気量保存の法則</strong>と呼ぶ。</p>
<p>ガラス棒を絹の布でこするとガラス棒は正に帯電し絹は負に帯電する。ガラス棒から絹へ電子が移ったからである。<strong class="hit">正に帯電した物体は陽子が増えたのではなく電子が減った物体である</strong>。陽子は原子核の中にあり摩擦では移動しない。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>帯電していない2つの物体AとBを互いにこするとAの電気量が \(+3.2\times10^{-9}\ \mathrm{C}\) になった。Bの電気量と移動した電子の個数を求めよ。電気素量を \(1.6\times10^{-19}\ \mathrm{C}\) とする。</p>
<details open><summary>解き方</summary><div>手順1 電気量保存の法則から合計は0のままである。Bの電気量は \(-3.2\times10^{-9}\ \mathrm{C}\) である。<br>
手順2 Aは正に帯電したので電子を失った。失った電子の個数は電気量を電気素量で割って求める。<br>
手順3 \(\dfrac{3.2\times10^{-9}}{1.6\times10^{-19}} = 2.0\times10^{10}\) 個<br>
答え Bは \(-3.2\times10^{-9}\ \mathrm{C}\) で AからBへ電子が \(2.0\times10^{10}\) 個移動した。</div></details></div>

<h2 id="s2">導体と不導体</h2>
<p>電気を通しやすい物質を<strong>導体</strong>と呼び通しにくい物質を<strong>不導体</strong>または絶縁体と呼ぶ。金属は導体でありガラス・ゴム・プラスチック・乾いた空気は不導体である。両者の中間の性質をもつケイ素やゲルマニウムを<strong>半導体</strong>と呼ぶ。</p>
<p>金属が電気を通す理由は原子の並び方にある。金属の原子は最も外側の電子を手放して陽イオンになり規則正しく並ぶ。手放された電子は特定の原子に属さず陽イオンの間を自由に動き回る。これを<strong>自由電子</strong>と呼ぶ。<strong class="hit">導体と不導体の違いは自由に動ける電荷をもつかどうかである</strong>。不導体では電子が原子や分子に強く束縛されていて移動できない。</p>

<h3>静電誘導と誘電分極</h3>
<p>帯電していない金属球に正に帯電した棒を近づける。金属の自由電子は棒の正電荷に引かれて棒に近い側へ移動する。棒に近い側は負に帯電し遠い側は電子が不足して正に帯電する。この現象を<strong>静電誘導</strong>と呼ぶ。近い側の負電荷が棒に引かれる力は遠い側の正電荷が反発される力より大きい。距離が近いほど静電気力は大きいからである。そのため帯電していない金属も帯電した棒に引き寄せられる。</p>
<p>不導体では電子が分子の外へ移動できない。それでも各分子の中で電子の分布が棒の側へわずかに偏る。不導体の表面にも正負の電荷が現れる。この現象を<strong>誘電分極</strong>と呼ぶ。下じきに紙片が引き寄せられるのは紙が誘電分極を起こすからである。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="正に帯電した棒を近づけると金属球の近い側に負電荷が集まり遠い側が正になる">
  <text x="20" y="24" font-size="13" fill="var(--muted)">導体 静電誘導</text>
  <text x="390" y="24" font-size="13" fill="var(--muted)">不導体 誘電分極</text>
  <rect x="30" y="105" width="90" height="30" rx="6" fill="var(--warm)"/>
  <g font-size="14" font-weight="700" fill="#fff" text-anchor="middle"><text x="50" y="125">+</text><text x="75" y="125">+</text><text x="100" y="125">+</text></g>
  <text x="75" y="160" font-size="12" text-anchor="middle" fill="var(--sub)">正に帯電した棒</text>
  <circle cx="240" cy="120" r="70" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <g font-size="16" font-weight="700" fill="var(--cool)" text-anchor="middle">
    <text x="186" y="95">−</text><text x="178" y="125">−</text><text x="186" y="155">−</text>
  </g>
  <g font-size="16" font-weight="700" fill="var(--warm)" text-anchor="middle">
    <text x="294" y="95">+</text><text x="302" y="125">+</text><text x="294" y="155">+</text>
  </g>
  <text x="240" y="215" font-size="12" text-anchor="middle" fill="var(--sub)">自由電子が球の左側へ移動する</text>
  <line x1="372" y1="36" x2="372" y2="230" stroke="var(--line)" stroke-dasharray="4 4"/>
  <rect x="400" y="105" width="90" height="30" rx="6" fill="var(--warm)"/>
  <g font-size="14" font-weight="700" fill="#fff" text-anchor="middle"><text x="420" y="125">+</text><text x="445" y="125">+</text><text x="470" y="125">+</text></g>
  <rect x="530" y="60" width="160" height="120" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <g font-size="13" font-weight="700" text-anchor="middle">
    <g transform="translate(560,85)"><ellipse rx="18" ry="11" fill="none" stroke="var(--muted)"/><text x="-8" y="5" fill="var(--cool)">−</text><text x="8" y="5" fill="var(--warm)">+</text></g>
    <g transform="translate(610,85)"><ellipse rx="18" ry="11" fill="none" stroke="var(--muted)"/><text x="-8" y="5" fill="var(--cool)">−</text><text x="8" y="5" fill="var(--warm)">+</text></g>
    <g transform="translate(660,85)"><ellipse rx="18" ry="11" fill="none" stroke="var(--muted)"/><text x="-8" y="5" fill="var(--cool)">−</text><text x="8" y="5" fill="var(--warm)">+</text></g>
    <g transform="translate(560,120)"><ellipse rx="18" ry="11" fill="none" stroke="var(--muted)"/><text x="-8" y="5" fill="var(--cool)">−</text><text x="8" y="5" fill="var(--warm)">+</text></g>
    <g transform="translate(610,120)"><ellipse rx="18" ry="11" fill="none" stroke="var(--muted)"/><text x="-8" y="5" fill="var(--cool)">−</text><text x="8" y="5" fill="var(--warm)">+</text></g>
    <g transform="translate(660,120)"><ellipse rx="18" ry="11" fill="none" stroke="var(--muted)"/><text x="-8" y="5" fill="var(--cool)">−</text><text x="8" y="5" fill="var(--warm)">+</text></g>
    <g transform="translate(560,155)"><ellipse rx="18" ry="11" fill="none" stroke="var(--muted)"/><text x="-8" y="5" fill="var(--cool)">−</text><text x="8" y="5" fill="var(--warm)">+</text></g>
    <g transform="translate(610,155)"><ellipse rx="18" ry="11" fill="none" stroke="var(--muted)"/><text x="-8" y="5" fill="var(--cool)">−</text><text x="8" y="5" fill="var(--warm)">+</text></g>
    <g transform="translate(660,155)"><ellipse rx="18" ry="11" fill="none" stroke="var(--muted)"/><text x="-8" y="5" fill="var(--cool)">−</text><text x="8" y="5" fill="var(--warm)">+</text></g>
  </g>
  <text x="610" y="215" font-size="12" text-anchor="middle" fill="var(--sub)">分子の中で電子の分布が偏る</text>
</svg>
<figcaption>左は金属球の静電誘導である。自由電子が棒の側へ移動し球の左右に符号の異なる電荷が現れる。右は不導体の誘電分極である。電子は分子の外へ出られず各分子の中で負の側が棒に向く。どちらの場合も近い側の引力が遠い側の反発より大きく物体は棒に引き寄せられる。</figcaption>
</figure>

<aside class="an an-rw"><b>現実世界</b>
<p class="an-h">コピー機は静電気で粉を紙に付ける装置である</p>
<p>感光体の帯電した部分だけにトナーの粉が付き紙へ写る。この方式は1938年にチェスター・カールソンが最初の複写に成功したゼログラフィーである。</p>
</aside>

<h2 id="s3">電流の定義と自由電子の動き</h2>
<p>電荷の流れを<strong>電流</strong>と呼ぶ。電流の大きさは導線の断面を1秒間に通過する電気量で定める。時間 \(t\) の間に電気量 \(q\) が通過するとき電流の大きさ \(I\) は次の式で表す。</p>
\[ I = \frac{q}{t} \]
<p>単位はアンペアで記号は A である。1 A は1秒間に 1 C の電気量が通過する電流である。式を変形すると \(q = It\) となり電気量は電流と時間の積で求まる。電池の容量を表す mAh は電流と時間の積であり電気量の単位である。</p>
<p>電流の向きは正の電荷が移動する向きと定める。この約束は1897年に電子が発見されるより前に決まった。<strong class="hit">金属の中で実際に移動するのは負の電荷をもつ自由電子であり電子は電流と逆向きに移動する</strong>。電池の外側の回路では電流は正極から負極へ流れ自由電子は負極から正極へ移動する。</p>

<h3>電流を自由電子の速さで表す</h3>
<p>断面積 \(S\) の導線の中を自由電子が平均の速さ \(v\) で移動している。導線の体積 \(1\ \mathrm{m^3}\) あたりの自由電子の数を \(n\) とする。時間 \(t\) の間に断面を通過する自由電子は断面から電子が来る側へ長さ \(vt\) の円柱の中にあった電子である。この円柱の体積は \(Svt\) で電子の数は \(nSvt\) である。通過する電気量の大きさは \(enSvt\) である。これを時間 \(t\) で割ると電流になる。</p>
\[ I = \frac{enSvt}{t} = envS \]

<figure class="tb-fig">
<svg viewBox="0 0 720 240" role="img" aria-label="導線の中で自由電子が電流と逆向きに移動し時間tの間に長さvtの部分の電子が断面を通過する">
  <defs><marker id="ah07a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
  <marker id="ah07b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker></defs>
  <rect x="60" y="70" width="600" height="100" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <ellipse cx="460" cy="120" rx="18" ry="50" fill="var(--accent)" fill-opacity="0.25" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="460" y="62" font-size="13" text-anchor="middle" fill="var(--accent)">断面 面積S</text>
  <rect x="460" y="70" width="160" height="100" fill="var(--cool)" fill-opacity="0.10"/>
  <g fill="var(--cool)">
    <circle cx="110" cy="95" r="6"/><circle cx="170" cy="140" r="6"/><circle cx="230" cy="105" r="6"/><circle cx="290" cy="150" r="6"/>
    <circle cx="350" cy="90" r="6"/><circle cx="400" cy="135" r="6"/><circle cx="500" cy="100" r="6"/><circle cx="540" cy="145" r="6"/>
    <circle cx="580" cy="92" r="6"/><circle cx="610" cy="130" r="6"/>
  </g>
  <line x1="600" y1="200" x2="470" y2="200" stroke="var(--cool)" stroke-width="2" marker-end="url(#ah07b)"/>
  <text x="535" y="222" font-size="12.5" text-anchor="middle" fill="var(--cool)">電子の移動 速さv</text>
  <line x1="120" y1="200" x2="300" y2="200" stroke="var(--warm)" stroke-width="2.5" marker-end="url(#ah07a)"/>
  <text x="210" y="222" font-size="12.5" text-anchor="middle" fill="var(--warm)">電流Iの向き</text>
  <line x1="460" y1="40" x2="620" y2="40" stroke="var(--sub)"/>
  <line x1="460" y1="34" x2="460" y2="46" stroke="var(--sub)"/><line x1="620" y1="34" x2="620" y2="46" stroke="var(--sub)"/>
  <text x="540" y="30" font-size="12.5" text-anchor="middle" fill="var(--sub)">長さ vt</text>
</svg>
<figcaption>電子は電流と逆の左向きに速さvで移動する。時間tの間に断面を通過するのは断面の右側で長さvtの範囲にあった電子である。その数はnSvtで電流はenvSになる。</figcaption>
</figure>

<p>銅線の自由電子の数密度は約 \(8.5\times10^{28}\ \mathrm{/m^3}\) である。断面積 \(1\ \mathrm{mm^2}\) の銅線に 1 A を流したときの速さを求めると次のとおりである。</p>
\[ v = \frac{I}{enS} = \frac{1}{1.6\times10^{-19}\times8.5\times10^{28}\times1.0\times10^{-6}} \approx 7.4\times10^{-5}\ \mathrm{m/s} \]
<p>1秒間に約 0.07 mm しか進まない。それでもスイッチを入れると電灯はすぐに点く。導線の中には最初から自由電子が満ちていて回路全体の電子が一斉に動き出すからである。電子1個が電池から電灯まで移動するわけではない。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">電気量は総得点で電流は1イニングあたりの得点ペースである</p>
<p>q は累計で I は単位時間あたりの量である。9イニングで18点ならペースは1イニングあたり2点で I＝q/t と同じ割り算である。</p>
</aside>

<div class="ex"><div class="ex-h">例題 2</div>
<p>導線に 0.80 A の電流が 20 s 流れた。断面を通過した電気量と自由電子の個数を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \(q = It = 0.80\times20 = 16\ \mathrm{C}\)<br>
手順2 電子の個数は \(\dfrac{16}{1.6\times10^{-19}} = 1.0\times10^{20}\) 個<br>
答え 電気量 16 C ・ 電子 \(1.0\times10^{20}\) 個</div></details></div>

<h2 id="s4">電圧とオームの法則</h2>
<p>電流を流そうとするはたらきを<strong>電圧</strong>と呼ぶ。電圧は2点の間の電位の差であり<strong>電位差</strong>とも呼ぶ。単位はボルトで記号は V である。<strong class="hit">1 V は 1 C の電荷が2点の間を移動するときに電場から 1 J の仕事を受ける電位差である</strong>。式で書くと \(1\ \mathrm{V} = 1\ \mathrm{J/C}\) である。乾電池の 1.5 V は電池が 1 C の電荷を負極から正極へ移すたびに 1.5 J のエネルギーを与える性能を表す。</p>
<p>電位は第4章の位置エネルギーと同じ構造をもつ。重力のもとで物体が高い所から低い所へ移ると位置エネルギーが運動エネルギーなどに変わる。電荷が電位の高い所から低い所へ移ると電気的な位置エネルギーが別の形のエネルギーに変わる。電池は電荷を低い電位から高い電位へ持ち上げる装置である。</p>

<h3>オームの法則</h3>
<p>金属の導線の両端に加える電圧 \(V\) と流れる電流 \(I\) は比例する。この比例関係を<strong>オームの法則</strong>と呼ぶ。1827年にドイツのゲオルク・オームが発表した。</p>
\[ V = RI \]
<p>比例定数 \(R\) を<strong>電気抵抗</strong>または抵抗と呼ぶ。単位はオームで記号は Ω である。1 Ω は 1 V の電圧で 1 A の電流が流れる抵抗である。</p>
<p>抵抗が生じる理由は自由電子の運動にある。電圧を加えると導線の中に電場が生じ自由電子は電場から力を受けて加速する。加速した電子は熱運動する陽イオンと衝突して進む速さを失う。加速と衝突を繰り返す結果として電子の平均の速さは一定になる。電場が強いほど平均の速さは大きく平均の速さは電圧に比例する。\(I = envS\) により電流も電圧に比例する。これがオームの法則の理由である。この衝突の説明は古典的な模型であり、量子力学では抵抗は陽イオンの熱振動と不純物による結晶の乱れから生じると説明する。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="抵抗10オームと20オームの電圧と電流のグラフ">
  <g stroke="var(--line)" stroke-width="1">
    <line x1="80" y1="40" x2="640" y2="40"/><line x1="80" y1="95" x2="640" y2="95"/><line x1="80" y1="150" x2="640" y2="150"/><line x1="80" y1="205" x2="640" y2="205"/>
    <line x1="192" y1="40" x2="192" y2="260"/><line x1="304" y1="40" x2="304" y2="260"/><line x1="416" y1="40" x2="416" y2="260"/><line x1="528" y1="40" x2="528" y2="260"/><line x1="640" y1="40" x2="640" y2="260"/>
  </g>
  <line x1="80" y1="260" x2="660" y2="260" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="80" y1="260" x2="80" y2="30" stroke="var(--ink)" stroke-width="1.5"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="80" y="278">0</text><text x="192" y="278">2</text><text x="304" y="278">4</text><text x="416" y="278">6</text><text x="528" y="278">8</text><text x="640" y="278">10</text>
  </g>
  <text x="680" y="264" font-size="12.5" fill="var(--ink)">V</text>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="72" y="264">0</text><text x="72" y="209">0.25</text><text x="72" y="154">0.50</text><text x="72" y="99">0.75</text><text x="72" y="44">1.00</text>
  </g>
  <text x="80" y="22" font-size="12.5" text-anchor="middle" fill="var(--ink)">I 単位 A</text>
  <line x1="80" y1="260" x2="640" y2="40" stroke="var(--warm)" stroke-width="2.5"/>
  <line x1="80" y1="260" x2="640" y2="150" stroke="var(--cool)" stroke-width="2.5"/>
  <circle cx="416" cy="128" r="4.5" fill="var(--warm)"/>
  <circle cx="416" cy="194" r="4.5" fill="var(--cool)"/>
  <text x="250" y="150" font-size="13" fill="var(--warm)">R＝10 Ω</text>
  <text x="560" y="200" font-size="13" fill="var(--cool)">R＝20 Ω</text>
  <text x="406" y="116" font-size="12" text-anchor="end" fill="var(--warm)">6 V で 0.60 A</text>
  <text x="426" y="213" font-size="12" fill="var(--cool)">6 V で 0.30 A</text>
</svg>
<figcaption>横軸は電圧で縦軸は電流である。オームの法則に従う抵抗のグラフは原点を通る直線になる。傾きは 1/R で抵抗が大きいほど直線は寝る。6 V を加えると 10 Ω には 0.60 A が流れ 20 Ω には 0.30 A が流れる。</figcaption>
</figure>

<p>典型的な誤りが2つある。1つは I-V グラフの傾きを抵抗と読み違えることである。縦軸が電流のとき傾きは \(1/R\) であり傾きが大きいほど抵抗は小さい。もう1つは電球のフィラメントにもオームの法則が常に成り立つと考えることである。フィラメントは電流が増えると温度が上がり抵抗が大きくなる。I-V グラフは直線にならず電圧が大きいほど傾きが小さい曲線になる。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>ある抵抗に 3.0 V を加えると 0.15 A の電流が流れた。抵抗値を求めよ。また同じ抵抗に 12 V を加えたときの電流を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \(R = \dfrac{V}{I} = \dfrac{3.0}{0.15} = 20\ \Omega\)<br>
手順2 \(I = \dfrac{V}{R} = \dfrac{12}{20} = 0.60\ \mathrm{A}\)<br>
答え 抵抗は 20 Ω で電流は 0.60 A</div></details></div>

<h2 id="s5">抵抗率と導線の形</h2>
<p>同じ材料の導線では抵抗は長さ \(L\) に比例し断面積 \(S\) に反比例する。</p>
\[ R = \rho\frac{L}{S} \]
<p>比例定数 \(\rho\) を<strong>抵抗率</strong>と呼ぶ。単位は \(\Omega\cdot\mathrm{m}\) である。抵抗率は材料と温度で定まり導線の形には依存しない。</p>
<p>式の理由は2つの考え方で説明できる。長さを2倍にすると同じ抵抗を2個直列につないだことになる。次の節で示すとおり直列の抵抗は足し算になるので抵抗は2倍になる。断面積を2倍にすると同じ導線を2本並べたことになる。電流の通り道が2本に増え同じ電圧で2倍の電流が流れるので抵抗は半分になる。</p>
<div class="tb-tw"><table>
<thead><tr><th>物質</th><th>抵抗率 単位 Ω·m ・ 20 ℃付近</th><th>用途</th></tr></thead>
<tbody>
<tr><td>銀</td><td>1.6×10<sup>−8</sup></td><td>接点</td></tr>
<tr><td>銅</td><td>1.7×10<sup>−8</sup></td><td>配線 ／ 電線</td></tr>
<tr><td>アルミニウム</td><td>2.7×10<sup>−8</sup></td><td>送電線</td></tr>
<tr><td>鉄</td><td>1.0×10<sup>−7</sup></td><td>構造材</td></tr>
<tr><td>ニクロム</td><td>1.1×10<sup>−6</sup></td><td>電熱線</td></tr>
<tr><td>ガラス</td><td>10<sup>10</sup>〜10<sup>14</sup></td><td>絶縁</td></tr>
</tbody></table></div>
<p>導体の抵抗率は温度が上がると大きくなる。陽イオンの熱運動が激しくなり自由電子が衝突する回数が増えるからである。温度 \(t\) ℃での抵抗率は近似的に \(\rho = \rho_0(1+\alpha t)\) と表す。\(\rho_0\) は 0 ℃での抵抗率で \(\alpha\) を抵抗率の温度係数と呼ぶ。半導体は逆に温度が上がると抵抗率が小さくなる。熱によって動ける電子が増えるからである。</p>

<div class="ex"><div class="ex-h">例題 4</div>
<p>抵抗 12 Ω の導線を一様に引き伸ばして長さを2倍にした。体積は変わらないものとして抵抗を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 体積 \(LS\) が一定なので長さが2倍になると断面積は \(\tfrac{1}{2}\) 倍になる。<br>
手順2 \(R = \rho\dfrac{L}{S}\) で分子が2倍で分母が \(\tfrac{1}{2}\) 倍なので抵抗は \(2\times2 = 4\) 倍になる。<br>
答え \(12\times4 = 48\ \Omega\)</div></details></div>
<p>この例題で長さだけを見て2倍の 24 Ω と答える誤りが多い。引き伸ばす問題では断面積も変わる点を必ず確かめる。</p>

<h2 id="s6">直列と並列の合成抵抗</h2>
<p>複数の抵抗を1個の抵抗に置き換えたものを<strong>合成抵抗</strong>と呼ぶ。つなぎ方は直列と並列の2種類である。</p>
<div class="tb-vs">
<div><h5>直列接続</h5><ul>
<li>各抵抗を流れる電流は等しい</li>
<li>全体の電圧は各抵抗の電圧の和である</li>
<li>\(R = R_1 + R_2\)</li>
<li>合成抵抗はどの抵抗より大きい</li>
</ul></div>
<div><h5>並列接続</h5><ul>
<li>各抵抗に加わる電圧は等しい</li>
<li>全体の電流は各抵抗の電流の和である</li>
<li>\(\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2}\)</li>
<li>合成抵抗はどの抵抗より小さい</li>
</ul></div>
</div>
<p><strong>直列の式の導出</strong> 直列では回路が1本道なので電荷はどこにもたまらず同じ電流 \(I\) が流れる。各抵抗の電圧は \(R_1I\) と \(R_2I\) である。電荷が回路を進むとき失うエネルギーの合計は電池が与えたエネルギーに等しいので全体の電圧は和になる。\(V = R_1I + R_2I = (R_1+R_2)I\) から \(R = R_1 + R_2\) が導かれる。</p>
<p><strong>並列の式の導出</strong> 並列では両方の抵抗の両端が同じ2点につながるので電圧 \(V\) が等しい。各抵抗の電流は \(V/R_1\) と \(V/R_2\) である。分かれ道で電荷は消えないので全体の電流はその和になる。\(I = \dfrac{V}{R_1} + \dfrac{V}{R_2}\) を \(I = \dfrac{V}{R}\) と比べると並列の式が得られる。2個の並列に限れば \(R = \dfrac{R_1R_2}{R_1+R_2}\) と書ける。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="直列回路と並列回路">
  <text x="20" y="24" font-size="13" fill="var(--muted)">直列 電流が共通</text>
  <text x="390" y="24" font-size="13" fill="var(--muted)">並列 電圧が共通</text>
  <g fill="none" stroke="var(--ink)" stroke-width="1.8">
    <path d="M60 70 H110 M190 70 H230 M310 70 H340 V200 H200 M180 200 H60 V70"/>
    <rect x="110" y="58" width="80" height="24" fill="var(--warm)" fill-opacity="0.2"/>
    <rect x="230" y="58" width="80" height="24" fill="var(--warm)" fill-opacity="0.2"/>
    <line x1="180" y1="186" x2="180" y2="214"/><line x1="200" y1="192" x2="200" y2="208" stroke-width="3.5"/>
  </g>
  <g font-size="13" text-anchor="middle">
    <text x="150" y="75">R₁</text><text x="270" y="75">R₂</text>
    <text x="150" y="105" fill="var(--warm)">R₁I</text><text x="270" y="105" fill="var(--warm)">R₂I</text>
    <text x="190" y="236" fill="var(--sub)">電池 V</text>
    <text x="200" y="140" fill="var(--sub)">V ＝ R₁I ＋ R₂I</text>
  </g>
  <line x1="372" y1="36" x2="372" y2="240" stroke="var(--line)" stroke-dasharray="4 4"/>
  <g fill="none" stroke="var(--ink)" stroke-width="1.8">
    <path d="M430 70 V200 H550 M570 200 H690 V70"/>
    <path d="M430 70 H520 M600 70 H690"/>
    <path d="M430 130 H520 M600 130 H690"/>
    <rect x="520" y="58" width="80" height="24" fill="var(--cool)" fill-opacity="0.2"/>
    <rect x="520" y="118" width="80" height="24" fill="var(--cool)" fill-opacity="0.2"/>
    <line x1="550" y1="186" x2="550" y2="214"/><line x1="570" y1="192" x2="570" y2="208" stroke-width="3.5"/>
  </g>
  <g font-size="13" text-anchor="middle">
    <text x="560" y="75">R₁</text><text x="560" y="135">R₂</text>
    <text x="560" y="100" fill="var(--cool)">I₁ ＝ V/R₁</text><text x="560" y="164" fill="var(--cool)">I₂ ＝ V/R₂</text>
    <text x="560" y="236" fill="var(--sub)">電池 V ・ I ＝ I₁ ＋ I₂</text>
  </g>
</svg>
<figcaption>左の直列では同じ電流Iが2つの抵抗を順に流れ電圧が分かれる。右の並列では2つの抵抗に同じ電圧Vが加わり電流が分かれる。電池の記号は長い線が正極である。</figcaption>
</figure>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">並列の合成抵抗は窓口を増やした銀行の待ち時間である</p>
<p>窓口を1つ足すと処理が遅い窓口でも全体の流れは増える。並列の抵抗を足すと合成抵抗は必ず下がる。</p>
</aside>

<div class="ex"><div class="ex-h">例題 5</div>
<p>3.0 Ω と 6.0 Ω を並列につなぎ さらに 4.0 Ω を直列につないだ。全体に 12 V を加えたときの全体の電流と 6.0 Ω を流れる電流を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 並列部分 \(\dfrac{3.0\times6.0}{3.0+6.0} = 2.0\ \Omega\)<br>
手順2 全体 \(2.0 + 4.0 = 6.0\ \Omega\) ・ 全体の電流 \(\dfrac{12}{6.0} = 2.0\ \mathrm{A}\)<br>
手順3 並列部分の電圧 \(2.0\times2.0 = 4.0\ \mathrm{V}\) ・ 6.0 Ω の電流 \(\dfrac{4.0}{6.0} \approx 0.67\ \mathrm{A}\)<br>
答え 全体 2.0 A ・ 6.0 Ω に約 0.67 A</div></details></div>

<h3>電流計と電圧計のつなぎ方</h3>
<p>電流計は測りたい部分に直列につなぐ。電流計自身の抵抗は小さく作ってあり回路の電流を変えにくい。電圧計は測りたい部分に並列につなぐ。電圧計の抵抗は大きく作ってあり電圧計へ流れる電流が小さい。電流計を並列につなぐと小さな抵抗に大電流が流れ計器が破損する。共通テストでは回路図からつなぎ方の正誤を判定させる問題が出題される。</p>

<h2 id="s7">電力と電力量・ジュール熱</h2>
<p>抵抗に電流が流れると電気のエネルギーが熱に変わる。この熱を<strong>ジュール熱</strong>と呼ぶ。1840年代にイギリスのジェームズ・プレスコット・ジュールが発熱量と電流の関係を実験で示した。</p>
<p>電圧 \(V\) の2点の間を電気量 \(q\) が移動すると電場がする仕事は \(qV\) である。時間 \(t\) の間に \(q = It\) が移動するので抵抗が受け取るエネルギーは次のとおりである。</p>
\[ W = qV = IVt \]
<p>この \(W\) を<strong>電力量</strong>と呼び単位は J である。1秒あたりの電力量を<strong>電力</strong>と呼び単位はワットで記号は W である。</p>
\[ P = IV = RI^2 = \frac{V^2}{R} \]
<p>3つの形はオームの法則 \(V = RI\) を代入して得る。<strong class="hit">直列では電流が共通なので \(RI^2\) を使い並列では電圧が共通なので \(V^2/R\) を使う</strong>。直列では抵抗が大きいほど発熱が大きく並列では抵抗が小さいほど発熱が大きい。向きが逆になる点が頻出の引っかけである。</p>
<p>抵抗で発生するジュール熱 \(Q\) は電力量に等しい。</p>
\[ Q = IVt = RI^2t = \frac{V^2}{R}t \]
<p>家庭の電気料金では電力量の単位にキロワット時 kWh を使う。1 kW の電力を1時間使ったときの電力量である。</p>
\[ 1\ \mathrm{kWh} = 1000\ \mathrm{W}\times3600\ \mathrm{s} = 3.6\times10^{6}\ \mathrm{J} \]

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">電力は月次のペースで電力量は期間の合計である</p>
<p>W は1秒あたりのフローで kWh は期間に積み上げた量である。請求書が kWh で書かれるのは期間の合計を請求するからである。</p>
</aside>

<div class="ex"><div class="ex-h">例題 6</div>
<p>100 V で 500 W の電気ケトルがある。抵抗値と流れる電流を求めよ。このケトルで 1.0 kg の水を3分間加熱した。発生した熱がすべて水に移るとして水の温度上昇を求めよ。水の比熱を 4.2 J/(g·K) とする。</p>
<details open><summary>解き方</summary><div>手順1 \(I = \dfrac{P}{V} = \dfrac{500}{100} = 5.0\ \mathrm{A}\) ・ \(R = \dfrac{V}{I} = 20\ \Omega\)<br>
手順2 ジュール熱 \(Q = Pt = 500\times180 = 9.0\times10^{4}\ \mathrm{J}\)<br>
手順3 第5章の \(Q = mc\Delta T\) から \(\Delta T = \dfrac{9.0\times10^{4}}{1000\times4.2} \approx 21\ \mathrm{K}\)<br>
答え 20 Ω ・ 5.0 A ・ 約 21 K 上昇</div></details></div>

<div class="ex"><div class="ex-h">例題 7</div>
<p>100 V 用 100 W の電球Aと 100 V 用 50 W の電球Bを直列につなぎ 100 V を加えた。明るいのはどちらか。抵抗は一定とする。</p>
<details open><summary>解き方</summary><div>手順1 \(R = V^2/P\) から A は 100 Ω で B は 200 Ω である。<br>
手順2 直列なので電流は共通である。消費電力 \(RI^2\) は抵抗が大きいほど大きい。<br>
答え B が明るい。定格の電力が小さい電球のほうが直列では明るく光る。</div></details></div>

<h2 id="s8">現実世界の電気抵抗 超伝導</h2>
<p>金属を冷やすと陽イオンの熱運動が弱まり抵抗率は下がる。ある種の物質ではある温度より下で抵抗が0になる。この現象を<strong>超伝導</strong>と呼ぶ。1911年にオランダのヘイケ・カメルリング・オネスが液体ヘリウムで冷やした水銀で約 4 K において発見した。</p>
<p>抵抗が0ならジュール熱 \(RI^2\) も0であり大電流を流し続けても発熱しない。この性質は医療用のMRIの強い磁石やJR東海が建設中の超電導リニアの磁石に使われる。電線を超伝導にすれば送電損失は0になるが冷却に費用がかかる。送電の損失と電圧の関係は第8章で扱う。</p>
<aside class="an an-rw"><b>現実世界</b>
<p class="an-h">送電線に銅より抵抗率の大きいアルミニウムを使う理由は重さである</p>
<p>アルミニウムの密度は銅の約3分の1である。同じ抵抗にするための質量は銅の約半分で済み鉄塔の負担が減る。</p>
</aside>

<h2 id="s9">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 電流と電子の個数</div>
<p class="qz-q">導線に 0.32 A の電流が 10 s 流れた。導線の断面を通過した自由電子の個数として最も適当なものを1つ選べ。電気素量を 1.6×10<sup>−19</sup> C とする。</p>
<ol><li>2.0×10<sup>18</sup> 個</li><li>2.0×10<sup>19</sup> 個</li><li>5.1×10<sup>−19</sup> 個</li><li>3.2×10<sup>19</sup> 個</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(q = It = 0.32\times10 = 3.2\ \mathrm{C}\) である。個数は \(3.2 \div (1.6\times10^{-19}) = 2.0\times10^{19}\) 個である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 帯電と電流の向き</div>
<p class="qz-q">次の記述のうち正しいものを1つ選べ。</p>
<ol><li>ガラス棒が正に帯電するのは布からガラス棒へ陽子が移るからである</li><li>金属の導線では自由電子が電流と同じ向きに移動する</li><li>不導体に帯電体を近づけると分子の中で電子の分布が偏り表面に電荷が現れる</li><li>互いにこすった2物体の電気量の合計は摩擦の強さに応じて増える</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。誘電分極の説明である。1 は陽子ではなく電子がガラス棒から布へ移る。2 は電子が電流と逆向きに移動する。4 は電気量保存の法則により合計は0のままである。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 抵抗率</div>
<p class="qz-q">同じ材料で長さが2倍で断面の直径が2倍の導線がある。もとの導線と比べて抵抗は何倍か。</p>
<ol><li>4倍</li><li>2倍</li><li>1倍</li><li>1/2倍</li></ol>
<details><summary>解答と解説</summary><div>正解は 4 である。直径が2倍なら断面積は4倍である。\(R = \rho L/S\) で長さ2倍と断面積4倍から \(2/4 = 1/2\) 倍になる。直径と断面積を混同して1倍とする誤りが多い。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 合成抵抗</div>
<p class="qz-q">6.0 Ω と 12 Ω の並列部分に 4.0 Ω を直列につないだ回路に 16 V を加えた。12 Ω を流れる電流は何 A か。</p>
<ol><li>0.50 A</li><li>0.67 A</li><li>1.0 A</li><li>2.0 A</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。並列部分は \(\dfrac{6.0\times12}{6.0+12} = 4.0\ \Omega\) で全体は 8.0 Ω である。全体の電流は \(16/8.0 = 2.0\ \mathrm{A}\) で並列部分の電圧は \(4.0\times2.0 = 8.0\ \mathrm{V}\) である。12 Ω の電流は \(8.0/12 \approx 0.67\ \mathrm{A}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 電力</div>
<p class="qz-q">100 V で 1000 W の電熱器を 80 V で使ったときの消費電力は何 W か。抵抗は一定とする。</p>
<ol><li>640 W</li><li>800 W</li><li>900 W</li><li>1250 W</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。\(R = V^2/P = 100^2/1000 = 10\ \Omega\) である。80 V では \(P = 80^2/10 = 640\ \mathrm{W}\) である。電力は電圧の2乗に比例するので \(1000\times0.8^2\) としても求まる。電圧に比例させて 800 W とする誤りが多い。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ ジュール熱</div>
<p class="qz-q">抵抗 10 Ω の電熱線に 2.0 A の電流を 105 s 流し 500 g の水を加熱した。発生した熱がすべて水に移るとき水の温度上昇は何 K か。水の比熱を 4.2 J/(g·K) とする。</p>
<ol><li>2.0 K</li><li>5.0 K</li><li>10 K</li><li>20 K</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。\(Q = RI^2t = 10\times2.0^2\times105 = 4200\ \mathrm{J}\) である。\(\Delta T = 4200/(500\times4.2) = 2.0\ \mathrm{K}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 電力量と料金</div>
<p class="qz-q">1200 W のドライヤーを1日15分ずつ30日使った。電力量料金を 1 kWh あたり30円とすると30日分の料金はいくらか。</p>
<ol><li>90円</li><li>180円</li><li>270円</li><li>540円</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。電力量は \(1.2\ \mathrm{kW}\times0.25\ \mathrm{h}\times30 = 9.0\ \mathrm{kWh}\) である。料金は \(9.0\times30 = 270\) 円である。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 直列の発熱</div>
<p class="qz-q">抵抗値が R と 2R の2つの抵抗を直列につないで電圧を加えた。R での発熱量を Q とすると 2R での発熱量はいくらか。</p>
<ol><li>Q/2</li><li>Q</li><li>2Q</li><li>4Q</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。直列なので電流は共通であり発熱量 \(RI^2t\) は抵抗に比例する。並列につないだ場合は電圧が共通なので発熱量は抵抗に反比例し Q/2 になる。</div></details></div>

<h2 id="s10">この章の要点</h2>
<div class="tb-key"><b>要点</b>
電気量は電気素量 e＝1.6×10⁻¹⁹ C の整数倍で摩擦の前後で合計は保存される。<br>
電流は I＝q/t ＝ envS で電流の向きは自由電子の移動と逆である。<br>
1 V は 1 C あたり 1 J の電位差でオームの法則は V＝RI である。<br>
抵抗は R＝ρL/S で長さに比例し断面積に反比例する。導体の抵抗率は温度とともに増える。<br>
直列は R＝R₁＋R₂ で電流が共通。並列は 1/R＝1/R₁＋1/R₂ で電圧が共通。<br>
電力は P＝IV＝RI²＝V²/R でジュール熱は Q＝Pt。1 kWh＝3.6×10⁶ J である。</div>

<h2 id="s11">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>電子が陽イオンと衝突するという模型は、抵抗の説明として正しいといえるか。</strong> 本文の模型は、温度が上がると導体の抵抗率が大きくなる向きを説明できる。一方で量子力学は抵抗の原因を結晶の乱れに求めており、模型に何を説明させるかで評価が異なる。</li>
<li class="tb-vnote"><strong>電流の向きを、電子が移動する向きに合わせて定め直すべきか。</strong> 本文の約束は1897年に電子が発見されるより前に決まり、金属の中では電子は電流と逆向きに移動する。実際の粒子の動きに定義を合わせるか、既に共有された約束を保つかで見方が分かれる。</li>
</ul>

<h2 id="s12">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>大学入試センター 令和7年度以降の試験の問題作成の方向性 — https://www.dnc.ac.jp/kyotsu/kako_shiken_jouhou/r7ikou.html</li>
<li>Elementary charge — Wikipedia — https://en.wikipedia.org/wiki/Elementary_charge</li>
<li>Drift velocity — Wikipedia — https://en.wikipedia.org/wiki/Drift_velocity</li>
<li>Electrical resistivity and conductivity — Wikipedia — https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity</li>
<li>Ohm's law — Wikipedia — https://en.wikipedia.org/wiki/Ohm%27s_law</li>
<li>Joule heating — Wikipedia — https://en.wikipedia.org/wiki/Joule_heating</li>
<li>Superconductivity — Wikipedia — https://en.wikipedia.org/wiki/Superconductivity</li>
<li>Xerography — Wikipedia — https://en.wikipedia.org/wiki/Xerography</li>
</ol>
