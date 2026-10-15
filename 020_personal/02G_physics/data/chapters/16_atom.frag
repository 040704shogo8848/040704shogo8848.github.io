<!--meta
{"chapter": 16, "part": "物理", "title": "電子と光・原子と原子核", "thesis": "光は粒子のようにエネルギー hν の塊で振る舞い電子は波のように干渉する。原子の中の電子は飛び飛びのエネルギーしかとれずその差が光のスペクトルとして現れる。原子核の質量の欠けた分が結合エネルギーであり核分裂と核融合はその差を取り出す反応である。", "final": true, "verify": {"date": "2026-10-15", "checked": 59, "match": 57, "fixed": 2, "unconfirmed": 0}}
-->
<p>第14章と第15章では電場と磁場の中で電荷が受ける力を扱った。この章ではその道具を使って電子そのものの電荷と質量を測り光と電子が粒子と波の両方の性質をもつことを示す。続いて原子の構造を光のスペクトルから組み立て原子核の質量とエネルギーの関係から核反応を扱う。最後に素粒子に触れる。</p>
<p>共通テストの物理でこの範囲から出るのは主に5種類である。光電効果のグラフと式・ド・ブロイ波長・ボーア模型のエネルギー準位と放出される光の波長・半減期・質量欠損と結合エネルギーである。計算に必要な道具は \(E=h\nu\) と \(\lambda=\dfrac{h}{p}\) と \(E=mc^2\) の3つが中心である。</p>

<h2 id="s1">電子の比電荷と電気素量</h2>
<p>19世紀の末に真空に近い管の両端に高電圧をかけると陰極から何かが飛び出すことが知られていた。これを陰極線と呼ぶ。1897年に J.J.トムソンは陰極線が電場と磁場で曲げられることを使って陰極線は負の電荷をもつ粒子の流れであることを示した。この粒子が<strong>電子</strong>である。</p>
<p>トムソンが測ったのは電荷と質量の比 \(\dfrac{e}{m}\) である。これを<strong>比電荷</strong>と呼ぶ。第15章の円運動の式 \(r=\dfrac{mv}{eB}\) を使うと速さと半径と磁束密度から \(\dfrac{e}{m}=\dfrac{v}{rB}\) が得られる。速さは電場と磁場の力がつり合う条件 \(eE=evB\) から \(v=\dfrac{E}{B}\) として測れる。電子の比電荷は約 \(1.76\times 10^{11}\ \mathrm{C/kg}\) である。</p>
<h3>ミリカンの油滴実験</h3>
<p>比電荷だけでは電荷と質量を分けて決められない。ミリカンは霧吹きでつくった微小な油滴を上下の極板の間の電場の中に浮かせた。重力 \(mg\) と静電気力 \(qE\) がつり合うと油滴は静止する。油滴の質量は電場がないときの落下の速さから求める。多数の油滴の電荷を測るとどれもある値の整数倍になった。その最小単位が<strong>電気素量</strong>である。</p>
\[ e=1.602176634\times 10^{-19}\ \mathrm{C} \]
<p>2019年からこの値は定義値である。計算では \(1.6\times 10^{-19}\ \mathrm{C}\) を使う。比電荷と合わせると電子の質量 \(9.1\times 10^{-31}\ \mathrm{kg}\) が求まる。水素原子の質量の約 1840 分の1である。</p>
<div class="ex"><div class="ex-h">例題 1</div>
<p>質量 \(4.9\times 10^{-15}\ \mathrm{kg}\) の油滴が強さ \(1.0\times 10^{5}\ \mathrm{N/C}\) の上向きの電場の中で静止した。油滴の電荷は電気素量の何倍か。重力加速度を \(9.8\ \mathrm{m/s^2}\) とする。</p>
<details open><summary>解き方</summary><div>つり合いの式は \(qE=mg\) である。<br>\(q=\dfrac{4.9\times 10^{-15}\times 9.8}{1.0\times 10^{5}}=4.8\times 10^{-19}\ \mathrm{C}\) である。<br>\(\dfrac{4.8\times 10^{-19}}{1.6\times 10^{-19}}=3\) である。<br>答え電気素量の3倍である。電場が上向きで力も上向きなので電荷は正である。</div></details></div>

<h2 id="s2">光電効果と光子</h2>
<p>金属に光を当てると電子が飛び出すことがある。これを<strong>光電効果</strong>と呼び飛び出す電子を光電子と呼ぶ。実験から次の4つの事実が知られていた。</p>
<ol>
<li>ある振動数 \(\nu_0\) より小さい振動数の光ではどれだけ強い光でも光電子は出ない。\(\nu_0\) を限界振動数と呼ぶ</li>
<li>光電子の最大運動エネルギーは光の振動数で決まり光の強さによらない</li>
<li>光を強くすると光電子の数が増える</li>
<li>光を当てるとただちに光電子が出る</li>
</ol>
<p>光を波と考えると強い光ほど振幅が大きくエネルギーが大きいので 1と2が説明できない。弱い光では電子がエネルギーをためるまで時間がかかるはずなので 4も説明できない。1905年にアインシュタインは光は振動数 \(\nu\) に比例するエネルギーの塊として振る舞うと考えた。この塊を<strong>光子</strong>または光量子と呼ぶ。</p>
\[ E=h\nu=\frac{hc}{\lambda}\qquad h=6.62607015\times 10^{-34}\ \mathrm{J\cdot s} \]
<p>\(h\) を<strong>プランク定数</strong>と呼ぶ。<strong class="hit">1個の光子は1個の電子にエネルギーを渡す</strong>。電子が金属から出るには最小のエネルギー \(W\) が要る。これを仕事関数と呼ぶ。光子のエネルギーから仕事関数を引いた残りが光電子の運動エネルギーの最大値である。</p>
\[ K_{\max}=h\nu-W\qquad h\nu_0=W \]
<p>光の強さは光子の数にあたる。数を増やしても1個あたりのエネルギーは変わらないので 4つの事実がすべて説明できる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="光電子の最大運動エネルギーと光の振動数の関係">
  <line x1="90" y1="150" x2="670" y2="150" stroke="var(--ink)"/><line x1="90" y1="30" x2="90" y2="270" stroke="var(--ink)"/>
  <line x1="280.0" y1="150" x2="280.0" y2="155" stroke="var(--ink)"/><text x="280.0" y="142.0" font-size="12" fill="var(--muted)" text-anchor="middle">5</text><line x1="470.0" y1="150" x2="470.0" y2="155" stroke="var(--ink)"/><text x="470.0" y="142.0" font-size="12" fill="var(--muted)" text-anchor="middle">10</text><line x1="660.0" y1="150" x2="660.0" y2="155" stroke="var(--ink)"/><text x="660.0" y="168" font-size="12" fill="var(--muted)" text-anchor="middle">15</text><text x="82" y="110.0" font-size="12" fill="var(--muted)" text-anchor="end">2</text><text x="82" y="66.0" font-size="12" fill="var(--muted)" text-anchor="end">4</text>
  <line x1="273.8" y1="150.0" x2="660.0" y2="57.5" stroke="var(--warm)" stroke-width="2.6"/><line x1="90.0" y1="194.0" x2="273.8" y2="150.0" stroke="var(--warm)" stroke-width="1.6" stroke-dasharray="5 4"/><text x="273.8" y="168.0" font-size="12" fill="var(--warm)" text-anchor="middle">ν₀ = 4.8</text><text x="84.0" y="198.0" font-size="12" fill="var(--warm)" text-anchor="end">−2.0</text><text x="666.0" y="61.5" font-size="13" fill="var(--warm)">金属A</text>
  <line x1="457.5" y1="150.0" x2="660.0" y2="101.5" stroke="var(--cool)" stroke-width="2.6"/><line x1="90.0" y1="238.0" x2="457.5" y2="150.0" stroke="var(--cool)" stroke-width="1.6" stroke-dasharray="5 4"/><text x="457.5" y="168.0" font-size="12" fill="var(--cool)" text-anchor="middle">ν₀ = 9.7</text><text x="84.0" y="242.0" font-size="12" fill="var(--cool)" text-anchor="end">−4.0</text><text x="666.0" y="105.5" font-size="13" fill="var(--cool)">金属B</text>
  <text x="98" y="26" font-size="12" fill="var(--sub)">最大運動エネルギー eV</text>
  <text x="560" y="176" font-size="12" fill="var(--sub)">振動数 10¹⁴ Hz</text>
  <text x="430" y="250" font-size="12" fill="var(--sub)">2本の傾きはどちらもプランク定数 h</text>
  <text x="430" y="268" font-size="12" fill="var(--sub)">縦軸との交点は −W</text>
</svg>
<figcaption>光電子の最大運動エネルギーは振動数の1次関数である。傾きはどの金属でもプランク定数 h で横軸との交点が限界振動数 ν₀ である。破線を延ばした縦軸との交点は −W である。金属Aは W = 2.0 eV で金属Bは W = 4.0 eV として計算した。</figcaption>
</figure>

<p>光電子の最大運動エネルギーは光電子を押し戻す逆向きの電圧で測る。光電流が 0 になる電圧 \(V_0\) を阻止電圧と呼び \(eV_0=K_{\max}\) である。エネルギーの単位には電子ボルト eV を使うと計算が楽になる。\(hc\fallingdotseq 1240\ \mathrm{eV\cdot nm}\) を使うと波長 nm の光子のエネルギーは \(\dfrac{1240}{\lambda}\) eV である。</p>
<div class="ex"><div class="ex-h">例題 2</div>
<p>仕事関数 2.0 eV の金属に波長 400 nm の光を当てる。光電子の最大運動エネルギーと阻止電圧を求めよ。</p>
<details open><summary>解き方</summary><div>光子のエネルギーは \(\dfrac{1240}{400}=3.1\ \mathrm{eV}\) である。<br>\(K_{\max}=3.1-2.0=1.1\ \mathrm{eV}\) である。<br>\(eV_0=K_{\max}\) より \(V_0=1.1\ \mathrm{V}\) である。<br>答え 1.1 eV で 1.1 V である。</div></details></div>
<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">光電効果は1球ごとの打球速度で決まる本塁打である</p>
<p>柵を越えるかは1球の打球速度すなわち振動数で決まり打席数すなわち光の強さには左右されない。打席数が増えて変わるのは本塁打の本数である。</p>
</aside>

<h2 id="s3">X線</h2>
<p>1895年にレントゲンは高電圧で加速した電子が金属に当たると透過力の強い放射が出ることを発見した。これを<strong>X線</strong>と呼ぶ。X線は波長が約 \(10^{-11}\) m から \(10^{-8}\) m の電磁波である。X線管から出るX線には波長が連続的に分布する連続X線と陽極の金属に固有の波長をもつ特性X線がある。</p>
<p>連続X線には最短の波長がある。電圧 \(V\) で加速した電子の運動エネルギー \(eV\) がすべて1個の光子になったときに最短波長になるからである。</p>
\[ \lambda_{\min}=\frac{hc}{eV} \]
<div class="ex"><div class="ex-h">例題 3</div>
<p>30 kV で加速した電子から出る連続X線の最短波長を求めよ。</p>
<details open><summary>解き方</summary><div>\(\lambda_{\min}=\dfrac{6.63\times 10^{-34}\times 3.0\times 10^{8}}{1.6\times 10^{-19}\times 3.0\times 10^{4}}\) である。<br>\(=\dfrac{1.99\times 10^{-25}}{4.8\times 10^{-15}}\fallingdotseq 4.1\times 10^{-11}\ \mathrm{m}\) である。<br>答え約 4.1×10<sup>−11</sup> m である。電圧を2倍にすると最短波長は半分になる。</div></details></div>
<p>X線の波長は結晶の原子の間隔と同じ程度である。間隔 \(d\) で並ぶ原子の面で反射したX線は隣の面との経路差 \(2d\sin\theta\) が波長の整数倍のとき強め合う。これを<strong>ブラッグの条件</strong> \(2d\sin\theta=n\lambda\) と呼ぶ。第13章の回折格子と同じ考え方で結晶構造の解析に使われる。</p>
<p>1923年にコンプトンは物質で散乱されたX線の波長が元の波長より長くなることを示した。X線の光子が電子と弾性衝突し運動量とエネルギーの一部を電子に渡すと考えると説明できる。<strong class="hit">光子は運動量 \(p=\dfrac{h}{\lambda}\) をもつ</strong>。これを<strong>コンプトン効果</strong>と呼ぶ。</p>

<h2 id="s4">粒子の波動性</h2>
<p>光が粒子の性質をもつなら粒子も波の性質をもつのではないか。1924年にド・ブロイはこう考え光子の \(p=\dfrac{h}{\lambda}\) を逆向きに読んで運動量 \(p=mv\) の粒子に次の波長の波が伴うとした。この波を<strong>物質波</strong>またはド・ブロイ波と呼ぶ。</p>
\[ \lambda=\frac{h}{mv}=\frac{h}{p} \]
<p>電圧 \(V\) で加速した電子では \(\dfrac{1}{2}mv^2=eV\) より \(p=\sqrt{2meV}\) なので \(\lambda=\dfrac{h}{\sqrt{2meV}}\) である。</p>
<div class="ex"><div class="ex-h">例題 4</div>
<p>静止した電子を 150 V で加速した。ド・ブロイ波長を求めよ。\(h=6.6\times 10^{-34}\ \mathrm{J\cdot s}\) とする。</p>
<details open><summary>解き方</summary><div>\(2meV=2\times 9.1\times 10^{-31}\times 1.6\times 10^{-19}\times 150=4.37\times 10^{-47}\) である。<br>\(p=\sqrt{4.37\times 10^{-47}}\fallingdotseq 6.6\times 10^{-24}\ \mathrm{kg\cdot m/s}\) である。<br>\(\lambda=\dfrac{6.6\times 10^{-34}}{6.6\times 10^{-24}}=1.0\times 10^{-10}\ \mathrm{m}\) である。<br>答え約 1.0×10<sup>−10</sup> m である。原子の間隔と同じ程度である。</div></details></div>
<p>この波長は結晶の原子の間隔と同じ程度なので電子線を結晶に当てると回折が起こるはずである。1927年にデビソンとガーマーがニッケルの結晶で電子線の回折を観測し物質波が確かめられた。翌1928年には菊池正士が雲母の薄膜で電子線の回折像を撮影した。電子顕微鏡は光より波長の短い電子線を使って光の顕微鏡では分けられない細かい構造を観察する装置である。</p>
<p>典型的な誤りは2つある。1つ目は野球のボールのような日常の物体の物質波を観測できると考える誤りである。質量が大きく \(\lambda\) が極めて小さいので回折は観測できない。2つ目は粒子が波の形に揺れながら進むと考える誤りである。波の性質は粒子がどこに見いだされるかの確率の分布として現れる。</p>

<h2 id="s5">原子の構造とエネルギー準位</h2>
<p>1909年からラザフォードの指導でガイガーとマースデンは金の薄い箔に α 粒子を当てた。ほとんどは直進したがごく一部が大きな角度ではね返された。1911年にラザフォードは原子の正電荷と質量の大部分が中心の極めて小さい<strong>原子核</strong>に集中していると結論した。原子核の大きさは \(10^{-15}\) m から \(10^{-14}\) m で原子の大きさ \(10^{-10}\) m の約1万分の1から10万分の1である。</p>
<p>しかし電子が原子核のまわりを回る模型には問題があった。電磁気学によれば加速度運動をする電荷は電磁波を出してエネルギーを失い原子核に落下するはずである。また水素原子の出す光は連続スペクトルではなく特定の波長の輝線だけである。バルマーは1885年に可視光の輝線の波長の規則性を見いだした。</p>
<h3>ボーアの仮説</h3>
<p>1913年にボーアは2つの仮説を置いた。</p>
<ul>
<li><strong>量子条件</strong> 電子は \(mvr=n\dfrac{h}{2\pi}\) を満たす軌道だけを回りそこでは光を出さない。\(n=1,2,3,\dots\) を量子数と呼ぶ。電子の物質波の波長の整数倍が円周に等しい条件 \(2\pi r=n\lambda\) と同じである</li>
<li><strong>振動数条件</strong> 電子がエネルギー \(E_n\) の状態から \(E_m\) の状態へ移るとき差のエネルギーをもつ光子を1個出す。\(h\nu=E_n-E_m\) である</li>
</ul>
<p>量子条件と第14章のクーロン力を向心力とする円運動の式を組み合わせると水素原子の電子がとれるエネルギーが求まる。</p>
\[ E_n=-\frac{13.6}{n^2}\ \mathrm{eV}\qquad r_n=n^2\times 5.3\times 10^{-11}\ \mathrm{m} \]
<p>電子のエネルギーは飛び飛びの値しかとれない。この値を<strong>エネルギー準位</strong>と呼ぶ。\(n=1\) の最も低い状態を基底状態と呼びそれより高い状態を励起状態と呼ぶ。13.6 eV は水素原子から電子を引き離すのに要するエネルギーである。負の符号は電子と原子核が無限に離れた状態を 0 としたことによる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 330" role="img" aria-label="水素原子のエネルギー準位と3つのスペクトル系列">
  <defs><marker id="ah16a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker><marker id="ah16b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker><marker id="ah16c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#A8A29A"/></marker></defs>
  <line x1="120" y1="302.0" x2="600" y2="302.0" stroke="var(--ink)" stroke-width="1.8"/><line x1="120" y1="98.0" x2="600" y2="98.0" stroke="var(--ink)" stroke-width="1.8"/><line x1="120" y1="60.2" x2="600" y2="60.2" stroke="var(--ink)" stroke-width="1.8"/><line x1="120" y1="47.0" x2="600" y2="47.0" stroke="var(--ink)" stroke-width="1.8"/><line x1="120" y1="40.9" x2="600" y2="40.9" stroke="var(--ink)" stroke-width="1"/><line x1="120" y1="37.6" x2="600" y2="37.6" stroke="var(--ink)" stroke-width="1"/><line x1="120" y1="30" x2="600" y2="30" stroke="var(--sub)" stroke-dasharray="4 3"/><text x="112" y="306.0" font-size="12" text-anchor="end">n = 1</text><text x="608" y="306.0" font-size="12" fill="var(--sub)">-13.60 eV</text><text x="112" y="102.0" font-size="12" text-anchor="end">n = 2</text><text x="608" y="102.0" font-size="12" fill="var(--sub)">-3.40 eV</text><text x="112" y="64.2" font-size="12" text-anchor="end">n = 3</text><text x="608" y="64.2" font-size="12" fill="var(--sub)">-1.51 eV</text><text x="112" y="26" font-size="12" text-anchor="end">n = ∞</text><text x="608" y="34" font-size="12" fill="var(--sub)">0 eV</text><line x1="170" y1="98.0" x2="170" y2="300.0" stroke="var(--accent)" stroke-width="2" marker-end="url(#ah16a)"/><line x1="192" y1="60.2" x2="192" y2="300.0" stroke="var(--accent)" stroke-width="2" marker-end="url(#ah16a)"/><line x1="214" y1="47.0" x2="214" y2="300.0" stroke="var(--accent)" stroke-width="2" marker-end="url(#ah16a)"/><line x1="330" y1="60.2" x2="330" y2="96.0" stroke="var(--warm)" stroke-width="2" marker-end="url(#ah16b)"/><line x1="352" y1="47.0" x2="352" y2="96.0" stroke="var(--warm)" stroke-width="2" marker-end="url(#ah16b)"/><line x1="374" y1="40.9" x2="374" y2="96.0" stroke="var(--warm)" stroke-width="2" marker-end="url(#ah16b)"/><line x1="490" y1="47.0" x2="490" y2="58.2" stroke="#A8A29A" stroke-width="2" marker-end="url(#ah16c)"/><line x1="512" y1="40.9" x2="512" y2="58.2" stroke="#A8A29A" stroke-width="2" marker-end="url(#ah16c)"/>
  <g font-size="13"><text x="250" y="200" fill="var(--accent)">ライマン系列</text><text x="250" y="218" fill="var(--accent)">紫外線</text>
  <text x="410" y="132" fill="var(--warm)">バルマー系列</text><text x="410" y="150" fill="var(--warm)">可視光を含む</text>
  <text x="440" y="84" fill="var(--sub)">パッシェン系列 赤外線</text></g>
</svg>
<figcaption>水素原子のエネルギー準位を縦軸の目盛どおりに描いた。n = 1 への遷移は大きなエネルギー差で紫外線になる。n = 2 への遷移の一部が可視光の輝線になる。n が大きくなると準位の間隔は狭まり 0 eV に近づく。</figcaption>
</figure>

<p>原子に外から光を当てると準位の差にちょうど等しいエネルギーの光子だけが受け取られ電子が上の準位へ移る。白色光を気体に通すとその波長の位置が暗い線になる。太陽光のスペクトルの暗線はこの現象で太陽の外層の元素を特定する手がかりになる。</p>
<div class="ex"><div class="ex-h">例題 5</div>
<p>水素原子の電子が \(n=3\) から \(n=2\) へ移るときに出す光の波長を求めよ。</p>
<details open><summary>解き方</summary><div>\(h\nu=13.6\left(\dfrac{1}{2^2}-\dfrac{1}{3^2}\right)=13.6\times\dfrac{5}{36}\fallingdotseq 1.89\ \mathrm{eV}\) である。<br>\(\lambda=\dfrac{1240}{1.89}\fallingdotseq 656\ \mathrm{nm}\) である。<br>答え約 656 nm の赤い光である。バルマー系列の最も長い波長の輝線である。</div></details></div>
<p>同じ式は波長の逆数で書くこともできる。\(\dfrac{1}{\lambda}=R\left(\dfrac{1}{m^2}-\dfrac{1}{n^2}\right)\) で \(R\fallingdotseq 1.10\times 10^{7}\ \mathrm{/m}\) をリュードベリ定数と呼ぶ。</p>
<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">エネルギー準位は坂ではなく階段である</p>
<p>電子の関係は段の上か下のどちらかで段と段の中間の状態はない。段を移るときは差の分だけを光で受け渡す。</p>
</aside>

<h2 id="s6">原子核と放射線</h2>
<p>原子核は陽子と中性子からなる。陽子と中性子をまとめて<strong>核子</strong>と呼ぶ。陽子の数を原子番号 \(Z\) と呼び核子の数を質量数 \(A\) と呼ぶ。中性子の数は \(A-Z\) である。原子番号が同じで質量数が異なる原子を互いに<strong>同位体</strong>と呼ぶ。中性子は1932年にチャドウィックが発見した。</p>
<h3>質量欠損と結合エネルギー</h3>
<p>アインシュタインの特殊相対性理論によれば質量とエネルギーは等価で質量 \(m\) は \(E=mc^2\) のエネルギーにあたる。原子核の質量を測ると<strong class="hit">ばらばらの核子の質量の和より小さい</strong>。この差 \(\Delta m\) を<strong>質量欠損</strong>と呼ぶ。核子が結合するときに \(\Delta mc^2\) のエネルギーが放出された結果である。逆に原子核をばらばらにするには同じだけのエネルギーが要る。これを<strong>結合エネルギー</strong>と呼ぶ。</p>
<p>原子核の計算では統一原子質量単位 u を使う。\(1\ \mathrm{u}=1.66\times 10^{-27}\ \mathrm{kg}\) でありこれは \(931.5\ \mathrm{MeV}\) のエネルギーにあたる。</p>
<div class="ex"><div class="ex-h">例題 6</div>
<p>陽子の質量を 1.00728 u 中性子の質量を 1.00866 u ヘリウム4の原子核の質量を 4.00151 u とする。ヘリウム4の原子核の結合エネルギーと核子1個あたりの結合エネルギーを求めよ。</p>
<details open><summary>解き方</summary><div>核子の質量の和は \(2\times 1.00728+2\times 1.00866=4.03188\ \mathrm{u}\) である。<br>\(\Delta m=4.03188-4.00151=0.03037\ \mathrm{u}\) である。<br>\(0.03037\times 931.5\fallingdotseq 28.3\ \mathrm{MeV}\) である。<br>答え約 28.3 MeV で核子1個あたり約 7.07 MeV である。</div></details></div>

<figure class="tb-fig">
<svg viewBox="0 0 720 310" role="img" aria-label="核子1個あたりの結合エネルギーと質量数">
  <line x1="80" y1="270" x2="690" y2="270" stroke="var(--ink)"/><line x1="80" y1="270" x2="80" y2="20" stroke="var(--ink)"/>
  <g stroke="var(--line)" stroke-dasharray="3 3"><line x1="80" y1="218.0" x2="690" y2="218.0"/><line x1="80" y1="166.0" x2="690" y2="166.0"/><line x1="80" y1="114.0" x2="690" y2="114.0"/><line x1="80" y1="62.0" x2="690" y2="62.0"/></g>
  <g font-size="12" fill="var(--muted)" text-anchor="end"><text x="72" y="274.0">0</text><text x="72" y="222.0">2</text><text x="72" y="170.0">4</text><text x="72" y="118.0">6</text><text x="72" y="66.0">8</text></g>
  <g font-size="12" fill="var(--muted)" text-anchor="middle"><text x="80.0" y="288">0</text><text x="205.0" y="288">50</text><text x="330.0" y="288">100</text><text x="455.0" y="288">150</text><text x="580.0" y="288">200</text><text x="705.0" y="288">250</text></g>
  <polyline points="85.0,241.1 95.0,131.4 97.5,124.2 102.5,102.0 110.0,70.3 115.0,75.6 120.0,62.6 130.0,61.2 150.0,50.4 180.0,47.7 220.0,41.5 235.0,41.3 290.0,43.4 380.0,48.9 425.0,51.8 600.0,65.4 667.5,72.6 675.0,73.2" fill="none" stroke="var(--line)" stroke-width="1.5"/>
  <circle cx="85.0" cy="241.1" r="3.5" fill="var(--cool)"/><circle cx="90.0" cy="86.1" r="3.5" fill="var(--cool)"/><circle cx="95.0" cy="131.4" r="3.5" fill="var(--cool)"/><circle cx="97.5" cy="124.2" r="3.5" fill="var(--cool)"/><circle cx="102.5" cy="102.0" r="3.5" fill="var(--cool)"/><circle cx="110.0" cy="70.3" r="3.5" fill="var(--cool)"/><circle cx="115.0" cy="75.6" r="3.5" fill="var(--cool)"/><circle cx="120.0" cy="62.6" r="3.5" fill="var(--cool)"/><circle cx="130.0" cy="61.2" r="3.5" fill="var(--cool)"/><circle cx="150.0" cy="50.4" r="3.5" fill="var(--cool)"/><circle cx="180.0" cy="47.7" r="3.5" fill="var(--cool)"/><circle cx="220.0" cy="41.5" r="3.5" fill="var(--cool)"/><circle cx="235.0" cy="41.3" r="3.5" fill="var(--cool)"/><circle cx="290.0" cy="43.4" r="3.5" fill="var(--cool)"/><circle cx="380.0" cy="48.9" r="3.5" fill="var(--cool)"/><circle cx="425.0" cy="51.8" r="3.5" fill="var(--cool)"/><circle cx="600.0" cy="65.4" r="3.5" fill="var(--cool)"/><circle cx="667.5" cy="72.6" r="3.5" fill="var(--cool)"/><circle cx="675.0" cy="73.2" r="3.5" fill="var(--cool)"/><text x="95.0" y="245.1" font-size="12" fill="var(--ink)">²H</text><text x="84.0" y="76.1" font-size="12" fill="var(--ink)">⁴He</text><text x="118.0" y="88.3" font-size="12" fill="var(--ink)">¹²C</text><text x="214.0" y="29.5" font-size="12" fill="var(--ink)">⁵⁶Fe</text><text x="657.5" y="60.6" font-size="12" fill="var(--ink)">²³⁵U</text>
  <defs><marker id="ah16d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker><marker id="ah16e" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker></defs>
  <path d="M667.5 94.7 Q 505.0 88.0 380.0 71.0" fill="none" stroke="var(--warm)" stroke-width="2" marker-end="url(#ah16d)"/>
  <text x="455.0" y="118.0" font-size="13" fill="var(--warm)">核分裂</text>
  <path d="M104.0 192.0 Q 130.0 140.0 100.0 90.6" fill="none" stroke="var(--accent)" stroke-width="2" marker-end="url(#ah16e)"/>
  <text x="115.0" y="176.4" font-size="13" fill="var(--accent)">核融合</text>
  <text x="600" y="306" font-size="12" fill="var(--sub)">質量数 A</text>
  <text x="88" y="16" font-size="12" fill="var(--sub)">核子1個あたりの結合エネルギー MeV</text>
</svg>
<figcaption>核子1個あたりの結合エネルギーの概数である。鉄56 とニッケル62 の付近で最大の約 8.8 MeV になる。重い原子核が分かれても軽い原子核が合体しても 1個あたりの結合エネルギーが大きい側へ移るのでエネルギーが放出される。</figcaption>
</figure>

<h3>放射性崩壊と半減期</h3>
<p>不安定な原子核は放射線を出して別の原子核に変わる。これを<strong>放射性崩壊</strong>と呼ぶ。1896年にベクレルがウランの放射線を発見した。主な放射線は3種類である。</p>
<div class="tb-tw"><table>
<thead><tr><th>崩壊</th><th>放射線</th><th>原子核の変化</th><th>透過力</th></tr></thead>
<tbody>
<tr><td>α 崩壊</td><td>ヘリウム4 の原子核</td><td>A が 4 減り Z が 2 減る</td><td>紙1枚で止まる</td></tr>
<tr><td>β 崩壊</td><td>電子</td><td>A は変わらず Z が 1 増える</td><td>数 mm のアルミニウム板で止まる</td></tr>
<tr><td>γ 線の放出</td><td>電磁波</td><td>A も Z も変わらない</td><td>鉛やコンクリートの厚い層が要る</td></tr>
</tbody></table></div>
<p>β 崩壊では原子核の中の中性子1個が陽子に変わり電子と反ニュートリノが出る。個々の原子核がいつ崩壊するかは予測できないが多数の原子核のうち一定時間に崩壊する割合は一定である。そのため残る原子核の数は一定時間ごとに半分になる。この時間 \(T\) を<strong>半減期</strong>と呼ぶ。</p>
\[ N=N_0\left(\frac{1}{2}\right)^{\frac{t}{T}} \]

<figure class="tb-fig">
<svg viewBox="0 0 720 290" role="img" aria-label="半減期ごとに半分になる放射性原子核の数">
  <line x1="80" y1="250" x2="660" y2="250" stroke="var(--ink)"/><line x1="80" y1="250" x2="80" y2="30" stroke="var(--ink)"/>
  <line x1="220.0" y1="250" x2="220.0" y2="150.0" stroke="var(--line)" stroke-dasharray="3 3"/><line x1="80" y1="150.0" x2="220.0" y2="150.0" stroke="var(--line)" stroke-dasharray="3 3"/><circle cx="220.0" cy="150.0" r="4" fill="var(--warm)"/><line x1="360.0" y1="250" x2="360.0" y2="200.0" stroke="var(--line)" stroke-dasharray="3 3"/><line x1="80" y1="200.0" x2="360.0" y2="200.0" stroke="var(--line)" stroke-dasharray="3 3"/><circle cx="360.0" cy="200.0" r="4" fill="var(--warm)"/><line x1="500.0" y1="250" x2="500.0" y2="225.0" stroke="var(--line)" stroke-dasharray="3 3"/><line x1="80" y1="225.0" x2="500.0" y2="225.0" stroke="var(--line)" stroke-dasharray="3 3"/><circle cx="500.0" cy="225.0" r="4" fill="var(--warm)"/>
  <polyline points="80.0,50.0 82.8,52.8 85.6,55.5 88.4,58.1 91.2,60.8 94.0,63.4 96.8,66.0 99.6,68.5 102.4,71.0 105.2,73.5 108.0,75.9 110.8,78.3 113.6,80.7 116.4,83.0 119.2,85.3 122.0,87.5 124.8,89.8 127.6,92.0 130.4,94.2 133.2,96.3 136.0,98.4 138.8,100.5 141.6,102.6 144.4,104.6 147.2,106.6 150.0,108.6 152.8,110.5 155.6,112.4 158.4,114.3 161.2,116.2 164.0,118.0 166.8,119.9 169.6,121.7 172.4,123.4 175.2,125.2 178.0,126.9 180.8,128.6 183.6,130.3 186.4,131.9 189.2,133.5 192.0,135.1 194.8,136.7 197.6,138.3 200.4,139.8 203.2,141.3 206.0,142.8 208.8,144.3 211.6,145.8 214.4,147.2 217.2,148.6 220.0,150.0 222.8,151.4 225.6,152.7 228.4,154.1 231.2,155.4 234.0,156.7 236.8,158.0 239.6,159.2 242.4,160.5 245.2,161.7 248.0,162.9 250.8,164.1 253.6,165.3 256.4,166.5 259.2,167.6 262.0,168.8 264.8,169.9 267.6,171.0 270.4,172.1 273.2,173.2 276.0,174.2 278.8,175.3 281.6,176.3 284.4,177.3 287.2,178.3 290.0,179.3 292.8,180.3 295.6,181.2 298.4,182.2 301.2,183.1 304.0,184.0 306.8,184.9 309.6,185.8 312.4,186.7 315.2,187.6 318.0,188.4 320.8,189.3 323.6,190.1 326.4,191.0 329.2,191.8 332.0,192.6 334.8,193.4 337.6,194.1 340.4,194.9 343.2,195.7 346.0,196.4 348.8,197.1 351.6,197.9 354.4,198.6 357.2,199.3 360.0,200.0 362.8,200.7 365.6,201.4 368.4,202.0 371.2,202.7 374.0,203.3 376.8,204.0 379.6,204.6 382.4,205.2 385.2,205.9 388.0,206.5 390.8,207.1 393.6,207.7 396.4,208.2 399.2,208.8 402.0,209.4 404.8,209.9 407.6,210.5 410.4,211.0 413.2,211.6 416.0,212.1 418.8,212.6 421.6,213.1 424.4,213.7 427.2,214.2 430.0,214.6 432.8,215.1 435.6,215.6 438.4,216.1 441.2,216.6 444.0,217.0 446.8,217.5 449.6,217.9 452.4,218.4 455.2,218.8 458.0,219.2 460.8,219.6 463.6,220.1 466.4,220.5 469.2,220.9 472.0,221.3 474.8,221.7 477.6,222.1 480.4,222.5 483.2,222.8 486.0,223.2 488.8,223.6 491.6,223.9 494.4,224.3 497.2,224.7 500.0,225.0 502.8,225.3 505.6,225.7 508.4,226.0 511.2,226.3 514.0,226.7 516.8,227.0 519.6,227.3 522.4,227.6 525.2,227.9 528.0,228.2 530.8,228.5 533.6,228.8 536.4,229.1 539.2,229.4 542.0,229.7 544.8,230.0 547.6,230.2 550.4,230.5 553.2,230.8 556.0,231.1 558.8,231.3 561.6,231.6 564.4,231.8 567.2,232.1 570.0,232.3 572.8,232.6 575.6,232.8 578.4,233.0 581.2,233.3 584.0,233.5 586.8,233.7 589.6,234.0 592.4,234.2 595.2,234.4 598.0,234.6 600.8,234.8 603.6,235.0 606.4,235.2 609.2,235.4 612.0,235.6 614.8,235.8 617.6,236.0 620.4,236.2 623.2,236.4 626.0,236.6 628.8,236.8 631.6,237.0 634.4,237.1 637.2,237.3 640.0,237.5" fill="none" stroke="var(--cool)" stroke-width="2.4"/>
  <g font-size="12" fill="var(--muted)" text-anchor="middle"><text x="80.0" y="268">0</text><text x="220.0" y="268">T</text><text x="360.0" y="268">2T</text><text x="500.0" y="268">3T</text><text x="640.0" y="268">4T</text></g>
  <g font-size="12" fill="var(--muted)" text-anchor="end"><text x="72" y="54">1</text><text x="72" y="154">1/2</text><text x="72" y="204">1/4</text><text x="72" y="229">1/8</text></g>
  <text x="380" y="80" font-size="13" fill="var(--cool)">N = N₀ (1/2)^(t/T)</text>
  <text x="380" y="100" font-size="12" fill="var(--sub)">T は半減期</text>
  <text x="600" y="284" font-size="12" fill="var(--sub)">経過時間 t</text>
  <text x="88" y="24" font-size="12" fill="var(--sub)">残っている原子核の割合 N/N₀</text>
</svg>
<figcaption>半減期 T ごとに残る原子核の数は半分になる。2T で4分の1 ／ 3T で8分の1 である。曲線は一定の割合で減る指数関数で直線ではない。</figcaption>
</figure>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">半減期は複利の逆回転である</p>
<p>毎期一定の割合で増える元本と同じ式で毎期一定の割合で減る。元本が半分になる期間が半減期にあたる。</p>
</aside>
<p>放射能の強さは 1 秒間に崩壊する原子核の数で表し単位はベクレル Bq である。人体が受ける放射線の影響の程度はシーベルト Sv で表す。</p>
<h3>核分裂と核融合</h3>
<p>1938年にハーンとシュトラスマンはウランに中性子を当てるとバリウムが生じることを見いだした。翌年マイトナーとフリッシュはウランの原子核が2つに分かれる<strong>核分裂</strong>と解釈した。ウラン235 の1回の核分裂で約 200 MeV のエネルギーが放出され 2個か3個の中性子が出る。その中性子が次の核分裂を起こす連鎖反応を制御して熱を取り出すのが原子炉である。</p>
<p>軽い原子核どうしが合体する反応を<strong>核融合</strong>と呼ぶ。重水素と三重水素の反応では次のとおり 17.6 MeV が放出される。太陽は中心部で水素をヘリウムに変える核融合でエネルギーを生み出している。</p>
\[ {}^{2}_{1}\mathrm{H}+{}^{3}_{1}\mathrm{H}\to{}^{4}_{2}\mathrm{He}+{}^{1}_{0}\mathrm{n} \]
<p>核反応の前後では質量数の和と原子番号の和がどちらも保存される。反応式を完成させる問題はこの2つの保存だけで解ける。</p>

<h2 id="s7">素粒子</h2>
<p>陽子と中性子はさらに小さい粒子からなる。これを<strong>クォーク</strong>と呼ぶ。陽子はアップクォーク2個とダウンクォーク1個からなり中性子はアップクォーク1個とダウンクォーク2個からなる。アップクォークの電荷は \(+\dfrac{2}{3}e\) でダウンクォークは \(-\dfrac{1}{3}e\) である。陽子の電荷は \(\dfrac{2}{3}+\dfrac{2}{3}-\dfrac{1}{3}=1\) で \(+e\) になる。</p>
<p>電子やニュートリノのようにクォークを含まない粒子を<strong>レプトン</strong>と呼ぶ。現在知られているクォークは6種類でレプトンも6種類である。物質を構成するこれらの粒子が素粒子である。1973年に小林誠と益川敏英はクォークが6種類以上あれば説明できる現象を示し 2008年にノーベル物理学賞を受けた。</p>
<p>自然界の基本的な力は4つである。重力・電磁気力・原子核の中で核子を結びつける強い力・β 崩壊を起こす弱い力である。素粒子どうしの力は力を媒介する粒子のやり取りで説明される。1935年に湯川秀樹は核子の間の力を媒介する中間子を予言し 1949年に日本人で初めてノーベル賞を受けた。</p>
<p>素粒子の多くは加速器で粒子を光速に近い速さまで加速して衝突させる実験で見いだされた。光速に近い粒子では静止した観測者から見て時間の進みが遅くなる。上空で生じる寿命の短いミュー粒子が地上まで届くのはこの効果による。これらは相対性理論の内容で高校では定性的に触れるにとどめる。</p>

<h2 id="s8">現実世界の放射性炭素年代測定</h2>
<p>半減期の式は考古学の年代測定に使われる。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>大気中の炭素14 は宇宙線がつくる中性子と窒素の反応で生じ続け炭素12 との比は一定の範囲に保たれている。生物は生きている間この比で炭素を取り込み死ぬと取り込みが止まる。炭素14 の半減期は約 5730 年なので比が元の4分の1なら死後約 11460 年である。1949年にリビーが開発し 1960年にノーベル化学賞を受けた。</p>
</aside>

<h2 id="s9">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 光電効果</div>
<p class="qz-q">仕事関数 2.0 eV の金属に波長 400 nm の光を当てる。阻止電圧は約何 V か。\(hc=1240\ \mathrm{eV\cdot nm}\) とする。</p>
<ol><li>0.9</li><li>1.1</li><li>2.0</li><li>3.1</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。光子のエネルギーは 3.1 eV で最大運動エネルギーは \(3.1-2.0=1.1\ \mathrm{eV}\) である。\(eV_0=K_{\max}\) より 1.1 V である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 限界波長</div>
<p class="qz-q">仕事関数 2.5 eV の金属で光電効果が起こる光の最も長い波長は約何 nm か。\(hc=1240\ \mathrm{eV\cdot nm}\) とする。</p>
<ol><li>310</li><li>400</li><li>496</li><li>620</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\(\dfrac{hc}{\lambda_0}=W\) より \(\lambda_0=\dfrac{1240}{2.5}=496\ \mathrm{nm}\) である。これより長い波長の光では光子1個のエネルギーが仕事関数に届かない。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 光の強さ</div>
<p class="qz-q">光電効果が起きている金属に当てる光の振動数を変えずに強さを2倍にした。正しい記述を1つ選べ。</p>
<ol><li>光電子の最大運動エネルギーが2倍になる</li><li>光電子の数が増え最大運動エネルギーは変わらない</li><li>限界振動数が半分になる</li><li>阻止電圧が2倍になる</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。強さは光子の数にあたる。光子1個のエネルギー \(h\nu\) は変わらないので最大運動エネルギーも阻止電圧も変わらない。限界振動数は金属の仕事関数で決まる。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ ド・ブロイ波長</div>
<p class="qz-q">150 V で加速した電子のド・ブロイ波長は \(1.0\times 10^{-10}\ \mathrm{m}\) である。600 V で加速した場合の波長は何 m か。</p>
<ol><li>\(2.5\times 10^{-11}\)</li><li>\(5.0\times 10^{-11}\)</li><li>\(2.0\times 10^{-10}\)</li><li>\(4.0\times 10^{-10}\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(\lambda=\dfrac{h}{\sqrt{2meV}}\) は \(\sqrt{V}\) に反比例する。電圧が4倍なので波長は2分の1である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 水素原子のスペクトル</div>
<p class="qz-q">水素原子の電子が \(n=4\) から \(n=2\) へ移るときに出す光の波長は約何 nm か。\(E_n=-\dfrac{13.6}{n^2}\ \mathrm{eV}\) と \(hc=1240\ \mathrm{eV\cdot nm}\) を使う。</p>
<ol><li>410</li><li>434</li><li>486</li><li>656</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\(13.6\left(\dfrac{1}{4}-\dfrac{1}{16}\right)=13.6\times\dfrac{3}{16}=2.55\ \mathrm{eV}\) で \(\dfrac{1240}{2.55}\fallingdotseq 486\ \mathrm{nm}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 半減期</div>
<p class="qz-q">半減期 8.0 日の放射性ヨウ素がある。24 日後に残っている原子核の割合は何 % か。</p>
<ol><li>3.1</li><li>12.5</li><li>25</li><li>33</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。24 日は半減期の3倍なので \(\left(\dfrac{1}{2}\right)^3=\dfrac{1}{8}=12.5\ \%\) である。33 % は 1 を半減期の回数 3 で割った誤りの値である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 崩壊系列</div>
<p class="qz-q">ウラン238 \({}^{238}_{92}\mathrm{U}\) は α 崩壊と β 崩壊を繰り返して鉛206 \({}^{206}_{82}\mathrm{Pb}\) になる。α 崩壊と β 崩壊の回数の組み合わせとして正しいものを1つ選べ。</p>
<ol><li>α 6回 ／ β 8回</li><li>α 8回 ／ β 6回</li><li>α 8回 ／ β 10回</li><li>α 10回 ／ β 2回</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。質量数は α 崩壊だけで減るので \(\dfrac{238-206}{4}=8\) 回である。α 崩壊8回で原子番号は 16 減って 76 になる。β 崩壊1回で原子番号は 1 増えるので 82 との差 6 から β 崩壊は6回である。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 核融合のエネルギー</div>
<p class="qz-q">重水素と三重水素の核融合で反応の前後の質量の差は 0.0189 u である。放出されるエネルギーは約何 MeV か。1 u は 931.5 MeV にあたる。</p>
<ol><li>1.76</li><li>17.6</li><li>176</li><li>1760</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(0.0189\times 931.5\fallingdotseq 17.6\ \mathrm{MeV}\) である。</div></details></div>

<h2 id="s10">この章の要点</h2>
<div class="tb-key"><b>要点</b>
電子の比電荷は e/m ≒ 1.76×10¹¹ C/kg で電気素量は e ≒ 1.6×10⁻¹⁹ C である。<br>
光子のエネルギーは E = hν = hc/λ である。光電効果は K = hν − W で光の強さは光子の数を変える。<br>
連続X線の最短波長は hc/eV である。光子は運動量 h/λ をもちコンプトン効果を起こす。<br>
物質波の波長は λ = h/mv である。電子線は結晶で回折する。<br>
水素原子のエネルギー準位は Eₙ = −13.6/n² eV で遷移で hν = Eₙ − Eₘ の光を出す。<br>
質量欠損 Δm に対応する Δmc² が結合エネルギーである。1 u は 931.5 MeV にあたる。<br>
残る原子核は N = N₀(1/2)^(t/T) で減る。核反応では質量数と原子番号の和が保存される。</div>

<h2 id="s11">この本全体の要点</h2>
<p>序章と16の章で扱った物理は少数の原理の組み合わせである。最後に骨組みだけを並べる。</p>
<div class="tb-key"><b>物理の骨組み</b>
運動第1章〜第3章と第9章〜第11章 ／ 力が加速度を決める ma = F が出発点で運動量保存と円運動と単振動と万有引力のもとでの運動はその帰結である。<br>
エネルギー第4章と第5章と第12章 ／ 仕事がエネルギーを移し熱力学第1法則がその収支を記録する。気体の圧力と温度は分子の運動で説明できる。<br>
波第6章と第13章 ／ 振動が時間遅れで伝わる現象で干渉は経路差で決まる。音も光も同じ規則に従う。<br>
電気と磁気第7章と第8章と第14章と第15章 ／ 電荷が場をつくり場が電荷に力を及ぼす。磁束の変化が起電力を生み電場と磁場の振動が電磁波として伝わる。<br>
原子第16章 ／ 光と電子は粒子と波の両方の性質をもち原子と原子核のエネルギーは飛び飛びである。E = mc² が核エネルギーの源である。<br>
解法の型 ／ 何が保存されるかを最初に確認する。運動量 ／ エネルギー ／ 電気量 ／ 振動数 ／ 質量数と原子番号の保存が多くの問題を解く。</div>

<h2 id="s12">残っている問い</h2>
<ul>
<li class="tb-vnote">ボーア模型は水素原子のエネルギー準位を正しく与えるが電子が円軌道を回るという描像は量子力学では成り立たない。電子の位置は確率の分布で表される。高校ではこの点に立ち入らない。</li>
<li class="tb-vnote">核子1個あたりの結合エネルギーの図の値は文献の概数を有効数字3〜4桁で用いた。²H ／ ⁴He ／ ¹²C ／ ⁵⁶Fe ／ ⁶²Ni ／ ²³⁵U ／ ²³⁸U の7点は出典の結合エネルギーと照合して一致した。残りの点は照合していない。どの原子核が最大かは鉄56 とニッケル62 で差がわずかで本文では両方を挙げた。</li>
<li class="tb-vnote">炭素14 の半減期は 5730 年が広く使われるが新しい評価では 5700 年とする値もある。年代測定の実務では大気中の炭素14 の比の変動を補正する。</li>
<li class="tb-vnote">ミリカンの実験の発表年は1910年と1913年の論文があり実験の開始は1909年とされる。この章では年を特定しなかった。</li>
<li class="tb-vnote">素粒子の内容は学習指導要領で「存在について知る」水準であり共通テストでの出題範囲と頻度は確認していない。</li>
</ul>

<h2 id="s13">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>CODATA Value: Planck constant — NIST — https://physics.nist.gov/cgi-bin/cuu/Value?h</li>
<li>CODATA Value: elementary charge — NIST — https://physics.nist.gov/cgi-bin/cuu/Value?e</li>
<li>Photoelectric effect — Wikipedia — https://en.wikipedia.org/wiki/Photoelectric_effect</li>
<li>Oil drop experiment — Wikipedia — https://en.wikipedia.org/wiki/Oil_drop_experiment</li>
<li>Davisson–Germer experiment — Wikipedia — https://en.wikipedia.org/wiki/Davisson%E2%80%93Germer_experiment</li>
<li>Bohr model — Wikipedia — https://en.wikipedia.org/wiki/Bohr_model</li>
<li>Nuclear binding energy — Wikipedia — https://en.wikipedia.org/wiki/Nuclear_binding_energy</li>
<li>Helium-4 — Wikipedia — https://en.wikipedia.org/wiki/Helium-4</li>
<li>Carbon-12 — Wikipedia — https://en.wikipedia.org/wiki/Carbon-12</li>
<li>Uranium-235 — Wikipedia — https://en.wikipedia.org/wiki/Uranium-235</li>
<li>Radiocarbon dating — Wikipedia — https://en.wikipedia.org/wiki/Radiocarbon_dating</li>
<li>The Nobel Prize in Physics 2008 — https://www.nobelprize.org/prizes/physics/2008/summary/</li>
<li>The Nobel Prize in Physics 1949 — https://www.nobelprize.org/prizes/physics/1949/summary/</li>
</ol>
