<!--meta
{"chapter": 1, "verify": {"date":"2026-10-15","checked":35,"match":33,"fixed":2,"unconfirmed":0}, "part": "物理基礎", "title": "速度と加速度", "thesis": "運動は位置と速度と加速度の3つの量で記述する。x−tグラフの傾きが速度でv−tグラフの傾きが加速度である。v−tグラフの面積が変位である。等加速度直線運動の3公式はこの面積から導ける。"}
-->
<p>序章では単位と次元と有効数字を準備した。この章から力学に入る。力学の最初の仕事は運動を数量で記述することである。物体がどこにあり・どれだけの速さでどちらへ動き・その速さがどう変わるかを位置と速度と加速度の3つの量で表す。力が運動をどう変えるかは第3章で扱う。この章は力を考えずに運動の記述だけを積み上げる。</p>
<p>共通テストでこの範囲から問われるのは主に4種類である。x−tグラフとv−tグラフの読み取り・相対速度・等加速度直線運動の公式を使う計算・自由落下と鉛直投げ上げである。グラフの傾きと面積の意味を確定させれば4種類すべてを同じ考え方で解ける。</p>

<h2 id="s1">変位と速度と速さ</h2>
<p>直線上の運動を扱うときは直線に沿って座標軸を置く。原点と正の向きを決めると物体の位置は1つの数 \(x\) で表せる。位置が \(x_1\) から \(x_2\) へ変わったとき位置の変化 \(\Delta x=x_2-x_1\) を<strong>変位</strong>と呼ぶ。変位は向きをもつ量で正の向きへ動けば正・負の向きへ動けば負になる。</p>
<p>変位と道のりは異なる量である。東へ 30 m 歩いて西へ 10 m 戻ると道のりは 40 m で変位は東向きに 20 m である。<strong class="hit">変位は出発点と到着点だけで定まり途中の経路によらない</strong>。</p>
<p>時間 \(\Delta t\) の間の変位が \(\Delta x\) のとき次の量を<strong>平均の速度</strong>と呼ぶ。</p>
<p>\[ \bar{v}=\frac{\Delta x}{\Delta t} \]</p>
<p>速度は向きをもつ量で単位は \(\mathrm{m/s}\) である。速度の大きさを<strong>速さ</strong>と呼ぶ。日常語の速さは道のりを時間で割った値を指すことが多い。物理では向きを含む速度と大きさだけの速さを区別する。</p>
<p>\(\Delta t\) を限りなく小さくしたときの平均の速度を<strong>瞬間の速度</strong>と呼ぶ。自動車の速度計が示す値は瞬間の速さである。単に速度と書けば瞬間の速度を指す。数学ではこの操作を極限と呼び、厳密な定義には微分を用いる。</p>
<p>大きさと向きをもつ量を<strong>ベクトル</strong>と呼び大きさだけの量を<strong>スカラー</strong>と呼ぶ。変位と速度はベクトルで道のりと速さはスカラーである。物理基礎の運動は直線上に限るので向きは正負の符号で表せる。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>東を正の向きとする。人が東へ 30 m 歩き続けて西へ 10 m 戻った。全体で 20 s かかった。平均の速度と平均の速さを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 変位は \(+30-10=+20\,\mathrm{m}\) である。<br>手順2 平均の速度は \(20\div20=+1.0\,\mathrm{m/s}\) で東向きに 1.0 m/s である。<br>手順3 道のりは \(30+10=40\,\mathrm{m}\) で平均の速さは \(40\div20=2.0\,\mathrm{m/s}\) である。<br>答え 平均の速度は東向き 1.0 m/s で平均の速さは 2.0 m/s である。2つの値が異なるのは途中で向きを変えたからである。</div></details></div>

<p>単位の換算は全章で使う。\(\mathrm{1\,km/h}=1000\,\mathrm{m}\div3600\,\mathrm{s}\) なので km/h の値を 3.6 で割ると m/s の値になる。時速 72 km は秒速 20 m である。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">時速160 km の直球の到達時間は割り算1回で約0.41秒と見積もれる</p>
<p>160 km/h は 44.4 m/s で投手板から本塁までは 18.44 m である。</p>
<p class="an-x">0.41秒は等速を仮定した見積もりで測定値ではない。実際の球は投手板より前で手から離れ、空気抵抗で減速する。</p>
</aside>

<h2 id="s2">x−tグラフとv−tグラフ</h2>
<p>横軸に時刻 \(t\)・縦軸に位置 \(x\) をとったグラフを<strong>x−tグラフ</strong>と呼ぶ。横軸に時刻・縦軸に速度 \(v\) をとったグラフを<strong>v−tグラフ</strong>と呼ぶ。2つのグラフには次の対応がある。</p>
<div class="tb-vs">
<div><h5>x−tグラフ</h5><ul>
<li><strong>傾きが速度</strong>である。2点を結ぶ直線の傾きが平均の速度で接線の傾きが瞬間の速度である</li>
<li>右上がりなら正の向きへ動き右下がりなら負の向きへ動く</li>
<li>水平な部分は静止を表す</li>
</ul></div>
<div><h5>v−tグラフ</h5><ul>
<li><strong>傾きが加速度</strong>である。第4節で定義する</li>
<li><strong>横軸との間の面積が変位</strong>である。横軸より下の面積は負の変位である</li>
<li>横軸と交わる時刻に運動の向きが変わる</li>
</ul></div>
</div>
<p>傾きが速度になる理由は定義そのものである。傾きは縦の変化を横の変化で割った値で \(\Delta x/\Delta t\) は速度の定義である。面積が変位になる理由は次のとおりである。速度 \(v\) で時間 \(\Delta t\) 進むと変位は \(v\Delta t\) でこれは縦 \(v\)・横 \(\Delta t\) の長方形の面積である。速度が変わる場合も時間を細かく分けて長方形を並べれば同じ結論になる。<strong class="hit">速度を時間で積み上げた量が変位である</strong>。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="等速直線運動のx−tグラフとv−tグラフ">
  <g stroke="var(--ink)" stroke-width="1.2">
    <line x1="60" y1="220" x2="340" y2="220"/><line x1="60" y1="220" x2="60" y2="40"/>
    <line x1="420" y1="220" x2="700" y2="220"/><line x1="420" y1="220" x2="420" y2="40"/>
  </g>
  <g stroke="var(--line)" stroke-dasharray="3 3">
    <line x1="60" y1="188" x2="320" y2="188"/><line x1="60" y1="156" x2="320" y2="156"/><line x1="60" y1="124" x2="320" y2="124"/><line x1="60" y1="92" x2="320" y2="92"/><line x1="60" y1="60" x2="320" y2="60"/>
    <line x1="420" y1="180" x2="680" y2="180"/><line x1="420" y1="140" x2="680" y2="140"/><line x1="420" y1="100" x2="680" y2="100"/><line x1="420" y1="60" x2="680" y2="60"/>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="60" y="236">0</text><text x="112" y="236">1</text><text x="164" y="236">2</text><text x="216" y="236">3</text><text x="268" y="236">4</text><text x="320" y="236">5</text>
    <text x="420" y="236">0</text><text x="472" y="236">1</text><text x="524" y="236">2</text><text x="576" y="236">3</text><text x="628" y="236">4</text><text x="680" y="236">5</text>
    <text x="340" y="256">t 単位 s</text><text x="690" y="256">t 単位 s</text>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="52" y="192">2</text><text x="52" y="160">4</text><text x="52" y="128">6</text><text x="52" y="96">8</text><text x="52" y="64">10</text>
    <text x="412" y="184">1</text><text x="412" y="144">2</text><text x="412" y="104">3</text><text x="412" y="64">4</text>
  </g>
  <text x="66" y="34" font-size="12" fill="var(--muted)">x 単位 m</text>
  <text x="426" y="34" font-size="12" fill="var(--muted)">v 単位 m/s</text>
  <rect x="420" y="140" width="156" height="80" fill="var(--cool)" opacity=".3"/>
  <line x1="60" y1="220" x2="320" y2="60" stroke="var(--warm)" stroke-width="2.5"/>
  <line x1="420" y1="140" x2="680" y2="140" stroke="var(--warm)" stroke-width="2.5"/>
  <g stroke="var(--accent)" stroke-width="1.8" fill="none">
    <polyline points="112,188 216,188 216,124"/>
  </g>
  <g font-size="12.5" fill="var(--accent)">
    <text x="150" y="204">2 s</text><text x="222" y="160">4 m</text>
    <text x="232" y="122">傾き 4÷2＝2 m/s</text>
  </g>
  <text x="498" y="186" font-size="13" text-anchor="middle" fill="var(--ink)">面積 2×3＝6 m</text>
  <text x="200" y="20" font-size="13" text-anchor="middle" fill="var(--ink)">x−tグラフ</text>
  <text x="560" y="20" font-size="13" text-anchor="middle" fill="var(--ink)">v−tグラフ</text>
</svg>
<figcaption>速度 2 m/s の等速直線運動である。左のx−tグラフの傾き 2 m/s が右のv−tグラフの高さになる。右の0〜3 s の面積 6 m は左のグラフで t＝3 s の位置 6 m と一致する。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 2</div>
<p>物体が初めの 3.0 s は速度 +4.0 m/s で進み次の 2.0 s は速度 −3.0 m/s で進んだ。5.0 s 間の変位と道のりを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 v−tグラフで初めの面積は \(4.0\times3.0=+12\,\mathrm{m}\) である。<br>手順2 次の面積は横軸より下で \(-3.0\times2.0=-6.0\,\mathrm{m}\) である。<br>手順3 変位は面積の符号つきの和で \(12-6.0=+6.0\,\mathrm{m}\) である。<br>答え 変位は正の向きに 6.0 m で道のりは \(12+6.0=18\,\mathrm{m}\) である。</div></details></div>

<p>典型的な誤りは2つある。1つ目はx−tグラフの縦軸の高さを速度と読むことである。速度はグラフの高さではなく傾きである。2つ目はv−tグラフで横軸より下の面積を正の値として足すことである。変位を求めるときは符号をつけて足し道のりを求めるときは大きさを足す。</p>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">v−tグラフの面積はフローを積み上げたストックである</p>
<p>速度は毎秒の増加分で変位はその累計である。月次の損益を積み上げると純資産の増減になるのと同じ構造である。</p>
</aside>

<h2 id="s3">合成速度と相対速度</h2>
<p>流れのある川を進む船の速度は2つの速度の和になる。静水での船の速度が \(v_1\) で川の流れの速度が \(v_2\) なら岸から見た船の速度は \(v_1+v_2\) である。これを<strong>合成速度</strong>と呼ぶ。直線上では向きを符号で表して足し算するだけでよい。</p>
<p>運動している観測者から見た相手の速度を<strong>相対速度</strong>と呼ぶ。地面に対する A の速度を \(v_A\)・B の速度を \(v_B\) とすると A から見た B の相対速度は次の式で表される。</p>
<p>\[ v_{AB}=v_B-v_A \]</p>
<p>理由は位置で考えると分かる。A から見た B の位置は \(x_B-x_A\) である。この量が単位時間あたりに変わる量が \(v_B-v_A\) である。<strong class="hit">「A から見た B」は B の速度から A の速度を引く</strong>。順序を逆にすると符号が逆になる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 230" role="img" aria-label="地面から見た速度とAから見た相対速度">
  <defs><marker id="ah02g01a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker></defs>
  <text x="20" y="24" font-size="13" fill="var(--muted)">地面から見る</text>
  <line x1="20" y1="90" x2="700" y2="90" stroke="var(--line)" stroke-width="2"/>
  <rect x="120" y="58" width="60" height="28" rx="5" fill="var(--warm)"/><text x="150" y="77" font-size="13" fill="#fff" text-anchor="middle">A</text>
  <rect x="420" y="58" width="60" height="28" rx="5" fill="var(--cool)"/><text x="450" y="77" font-size="13" fill="#fff" text-anchor="middle">B</text>
  <g stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ah02g01a)">
    <line x1="182" y1="72" x2="262" y2="72"/><line x1="482" y1="72" x2="542" y2="72"/>
  </g>
  <g font-size="12.5" fill="var(--ink)">
    <text x="190" y="52">20 m/s</text><text x="488" y="52">15 m/s</text>
  </g>
  <text x="20" y="134" font-size="13" fill="var(--muted)">A から見る</text>
  <line x1="20" y1="200" x2="700" y2="200" stroke="var(--line)" stroke-width="2"/>
  <rect x="120" y="168" width="60" height="28" rx="5" fill="var(--warm)"/><text x="150" y="187" font-size="13" fill="#fff" text-anchor="middle">A</text>
  <rect x="420" y="168" width="60" height="28" rx="5" fill="var(--cool)"/><text x="450" y="187" font-size="13" fill="#fff" text-anchor="middle">B</text>
  <line x1="418" y1="182" x2="398" y2="182" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ah02g01a)"/>
  <g font-size="12.5" fill="var(--ink)">
    <text x="120" y="160">静止して見える</text><text x="330" y="160">15−20＝−5 m/s</text>
  </g>
  <text x="510" y="187" font-size="12.5" fill="var(--sub)">B は後ろ向きに 5 m/s で近づく</text>
</svg>
<figcaption>右向きを正とする。地面から見ると A は 20 m/s で B は 15 m/s である。A から見ると A は静止し B は −5 m/s で動いて見える。矢印の長さは速さに比例させた。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 3</div>
<p>東向きに 25 m/s で走る列車 A と西向きに 15 m/s で走る列車 B がすれ違う。A の乗客から見た B の速度を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 東を正とすると \(v_A=+25\,\mathrm{m/s}\) で \(v_B=-15\,\mathrm{m/s}\) である。<br>手順2 \(v_{AB}=v_B-v_A=-15-25=-40\,\mathrm{m/s}\) である。<br>答え 西向きに 40 m/s である。向かい合って走ると相対速度の大きさは速さの和になる。</div></details></div>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">同じ速さで並んで歩く二人の相対速度は0である</p>
<p>地面から見て速くても互いには静止して見える。距離が縮むかどうかは速度の差だけで定まる。</p>
</aside>

<h2 id="s4">加速度</h2>
<p>速度が時間とともに変わる運動では速度の変わり方を表す量が要る。時間 \(\Delta t\) の間に速度が \(\Delta v\) 変わったとき次の量を<strong>平均の加速度</strong>と呼ぶ。</p>
<p>\[ \bar{a}=\frac{\Delta v}{\Delta t} \]</p>
<p>単位は速度の単位 m/s を時間の単位 s で割った \(\mathrm{m/s^2}\) である。\(\Delta t\) を限りなく小さくした値が瞬間の加速度である。加速度もベクトルで直線上では正負の符号で向きを表す。v−tグラフの傾きが加速度である。</p>
<p>加速度の符号は速度の符号と独立である。<strong class="hit">速度と加速度が同じ向きなら速さは増え反対向きなら速さは減る</strong>。正の向きに進みながらブレーキをかける自動車は \(v>0\) で \(a<0\) である。加速度が負であることは後ろ向きに進むことを意味しない。</p>
<div class="tb-tw"><table>
<thead><tr><th>速度の符号</th><th>加速度の符号</th><th>運動の様子</th></tr></thead>
<tbody>
<tr><td>正</td><td>正</td><td>正の向きに進み速さが増す</td></tr>
<tr><td>正</td><td>負</td><td>正の向きに進み速さが減る</td></tr>
<tr><td>負</td><td>負</td><td>負の向きに進み速さが増す</td></tr>
<tr><td>負</td><td>正</td><td>負の向きに進み速さが減る</td></tr>
</tbody></table></div>

<div class="ex"><div class="ex-h">例題 4</div>
<p>直線上を正の向きに 25 m/s で走る自動車がブレーキをかけ一定の割合で減速して 5.0 s 後に止まった。加速度を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 速度の変化は \(\Delta v=0-25=-25\,\mathrm{m/s}\) である。<br>手順2 \(a=\Delta v/\Delta t=-25\div5.0=-5.0\,\mathrm{m/s^2}\) である。<br>答え 負の向きに \(\mathrm{5.0\,m/s^2}\) である。自動車は正の向きに進み続けながら減速する。</div></details></div>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">加速度が負でも売上は増え続けることがある</p>
<p>売上の増加幅が縮む状態が \(v>0\) かつ \(a<0\) である。減速は減収ではない。</p>
</aside>

<h2 id="s5">等加速度直線運動の3公式</h2>
<p>加速度が一定の直線運動を<strong>等加速度直線運動</strong>と呼ぶ。時刻 0 の速度を \(v_0\)・加速度を \(a\) とし時刻 0 に原点を出発するとする。この運動は次の3つの式で表される。</p>
<p>\[ v=v_0+at \]</p>
<p>\[ x=v_0t+\frac{1}{2}at^2 \]</p>
<p>\[ v^2-v_0^2=2ax \]</p>
<p>1つ目の式は加速度の定義から得られる。加速度が一定なので \(a=(v-v_0)/t\) で両辺に \(t\) を掛ければよい。v−tグラフは傾き \(a\)・切片 \(v_0\) の直線である。</p>
<p>2つ目の式は v−tグラフの面積から得られる。0 から \(t\) までの面積は台形で長方形と三角形に分けられる。長方形は縦 \(v_0\)・横 \(t\) で面積 \(v_0t\) である。三角形は底辺 \(t\)・高さ \(at\) で面積 \(\frac{1}{2}at^2\) である。2つの和が変位 \(x\) である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 280" role="img" aria-label="等加速度直線運動のv−tグラフの面積を長方形と三角形に分ける図">
  <rect x="80" y="180" width="400" height="60" fill="var(--cool)" opacity=".3"/>
  <polygon points="80,180 480,180 480,60" fill="var(--warm)" opacity=".3"/>
  <g stroke="var(--ink)" stroke-width="1.2">
    <line x1="80" y1="240" x2="620" y2="240"/><line x1="80" y1="240" x2="80" y2="30"/>
  </g>
  <g stroke="var(--line)" stroke-dasharray="3 3">
    <line x1="80" y1="180" x2="600" y2="180"/><line x1="80" y1="120" x2="600" y2="120"/><line x1="80" y1="60" x2="600" y2="60"/>
    <line x1="480" y1="60" x2="480" y2="240"/>
  </g>
  <line x1="80" y1="180" x2="580" y2="30" stroke="var(--warm)" stroke-width="2.5"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="80" y="256">0</text><text x="180" y="256">1</text><text x="280" y="256">2</text><text x="380" y="256">3</text><text x="480" y="256">4</text><text x="580" y="256">5</text>
    <text x="620" y="274">t 単位 s</text>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="72" y="244">0</text><text x="72" y="184">4</text><text x="72" y="124">8</text><text x="72" y="64">12</text>
  </g>
  <text x="86" y="24" font-size="12" fill="var(--muted)">v 単位 m/s</text>
  <g font-size="13" fill="var(--ink)" text-anchor="middle">
    <text x="280" y="215">長方形 v₀t＝4×4＝16 m</text>
    <text x="340" y="168" font-size="12">三角形 ½at²＝½×2×4²＝16 m</text>
  </g>
  <g font-size="12.5" fill="var(--accent)">
    <text x="490" y="84">v＝v₀＋at＝12 m/s</text>
    <text x="500" y="190">v₀＝4 m/s</text>
    <text x="250" y="100">傾き a＝2 m/s²</text>
  </g>
</svg>
<figcaption>初速度 4 m/s で加速度 2 m/s² の運動である。0〜4 s の面積は長方形 16 m と三角形 16 m の和で 32 m である。2つ目の公式で計算した \(4\times4+\frac{1}{2}\times2\times4^2=32\) m と一致する。</figcaption>
</figure>

<p>3つ目の式は1つ目と2つ目から時間 \(t\) を消去して得られる。1つ目から \(t=(v-v_0)/a\) で2つ目に代入して整理すると \(v^2-v_0^2=2ax\) になる。<strong class="hit">時間が問題文に現れず速度と距離だけが与えられたら3つ目の式を使う</strong>。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>時速 72 km で走る自動車が一定の加速度 \(\mathrm{-5.0\,m/s^2}\) で減速して止まった。止まるまでに進んだ距離と時間を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 単位をそろえる。\(72\div3.6=20\,\mathrm{m/s}\) である。<br>手順2 時間が未知なので3つ目の式を使う。\(0^2-20^2=2\times(-5.0)\times x\) より \(x=400\div10=40\,\mathrm{m}\) である。<br>手順3 時間は1つ目の式から \(0=20-5.0t\) で \(t=4.0\,\mathrm{s}\) である。<br>答え 40 m 進み 4.0 s で止まる。速さが2倍になると停止距離は \(v_0^2\) に比例して4倍になる。</div></details></div>

<h3>記録タイマーのデータから加速度を求める</h3>
<p>学習指導要領は斜面を下る台車などの運動を記録して速度と時間の関係を見いだす実験を挙げている。記録タイマーは一定の時間間隔で紙テープに打点する装置である。打点を0.1 s ごとに区切り各区間の長さを測ると区間ごとの平均の速度が得られる。</p>
<div class="tb-tw"><table>
<thead><tr><th>区間</th><th>長さ</th><th>平均の速度</th><th>区間の中央の時刻</th></tr></thead>
<tbody>
<tr><td>1</td><td>2.0 cm</td><td>0.20 m/s</td><td>0.05 s</td></tr>
<tr><td>2</td><td>2.4 cm</td><td>0.24 m/s</td><td>0.15 s</td></tr>
<tr><td>3</td><td>2.8 cm</td><td>0.28 m/s</td><td>0.25 s</td></tr>
<tr><td>4</td><td>3.2 cm</td><td>0.32 m/s</td><td>0.35 s</td></tr>
<tr><td>5</td><td>3.6 cm</td><td>0.36 m/s</td><td>0.45 s</td></tr>
</tbody></table></div>
<p>等加速度直線運動では区間の平均の速度は区間の中央の時刻の瞬間の速度に等しい。v−tグラフが直線なので台形の高さの平均が中央の高さに一致するからである。そこで平均の速度を区間の中央の時刻に対して点を打つ。</p>

<div class="ex"><div class="ex-h">例題 6</div>
<p>上の表のデータから台車の加速度を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 区間の長さは 0.1 s ごとに 0.4 cm ずつ増えている。<br>手順2 平均の速度は 0.1 s ごとに 0.04 m/s ずつ増えている。<br>手順3 \(a=0.04\div0.1=0.40\,\mathrm{m/s^2}\) である。<br>答え \(\mathrm{0.40\,m/s^2}\) である。隣り合う区間の長さの差 \(\Delta x\) と時間間隔 \(T\) から \(a=\Delta x/T^2=0.004\div0.01=0.40\) とも計算できる。</div></details></div>

<p>典型的な誤りは km/h のまま公式に代入することである。公式に代入する前に m と s と m/s と m/s² に必ずそろえる。もう1つは減速の運動で加速度に正の値を代入することである。座標の正の向きを先に決めて符号を確定させる。</p>

<h2 id="s6">自由落下と鉛直投げ上げ</h2>
<p>空気抵抗が無視できるとき地上付近で落下する物体は質量によらず同じ加速度で落下する。この加速度を<strong>重力加速度</strong>と呼び大きさを \(g\) で表す。値は \(\mathrm{9.8\,m/s^2}\) で向きは鉛直下向きである。ガリレイは斜面の実験で落下距離が時間の2乗に比例することを示した。9.8 m/s² は地表付近の代表値で、実際の値は緯度と高度によって異なる。</p>
<p>静止状態から落下させる運動を<strong>自由落下</strong>と呼ぶ。鉛直下向きを正とすると初速度0で加速度 \(g\) の等加速度直線運動である。</p>
<p>\[ v=gt \qquad y=\frac{1}{2}gt^2 \qquad v^2=2gy \]</p>
<p>鉛直上向きに初速度 \(v_0\) で投げ上げる運動を<strong>鉛直投げ上げ</strong>と呼ぶ。鉛直上向きを正とすると加速度は \(-g\) である。</p>
<p>\[ v=v_0-gt \qquad y=v_0t-\frac{1}{2}gt^2 \qquad v^2-v_0^2=-2gy \]</p>
<p>最高点では速度が0になる。\(0=v_0-gt\) から最高点に達する時刻は \(t=v_0/g\) で高さは \(v_0^2/2g\) である。<strong class="hit">最高点で速度は0になるが加速度は0にならず下向きに \(g\) のままである</strong>。上昇と下降は対称で投げた点に戻る時刻は \(2v_0/g\) でそのときの速度は \(-v_0\) である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 280" role="img" aria-label="初速度19.6 m/sで投げ上げた物体のy−tグラフとv−tグラフ">
  <g stroke="var(--ink)" stroke-width="1.2">
    <line x1="60" y1="230" x2="330" y2="230"/><line x1="60" y1="230" x2="60" y2="50"/>
    <line x1="420" y1="140" x2="690" y2="140"/><line x1="420" y1="232" x2="420" y2="48"/>
  </g>
  <g stroke="var(--line)" stroke-dasharray="3 3">
    <line x1="60" y1="190" x2="310" y2="190"/><line x1="60" y1="150" x2="310" y2="150"/><line x1="60" y1="110" x2="310" y2="110"/><line x1="60" y1="70" x2="310" y2="70"/>
    <line x1="420" y1="60" x2="670" y2="60"/><line x1="420" y1="100" x2="670" y2="100"/><line x1="420" y1="180" x2="670" y2="180"/><line x1="420" y1="220" x2="670" y2="220"/>
  </g>
  <polygon points="420,61.6 540,140 420,140" fill="var(--cool)" opacity=".3"/>
  <polygon points="540,140 660,218.4 660,140" fill="var(--warm)" opacity=".3"/>
  <polyline fill="none" stroke="var(--warm)" stroke-width="2.5" points="60.0,230.0 66.0,214.7 72.0,200.2 78.0,186.5 84.0,173.6 90.0,161.4 96.0,150.0 102.0,139.4 108.0,129.6 114.0,120.6 120.0,112.4 126.0,105.0 132.0,98.3 138.0,92.4 144.0,87.3 150.0,83.0 156.0,79.5 162.0,76.7 168.0,74.8 174.0,73.6 180.0,73.2 186.0,73.6 192.0,74.8 198.0,76.7 204.0,79.5 210.0,83.0 216.0,87.3 222.0,92.4 228.0,98.3 234.0,105.0 240.0,112.4 246.0,120.6 252.0,129.6 258.0,139.4 264.0,150.0 270.0,161.4 276.0,173.6 282.0,186.5 288.0,200.2 294.0,214.7 300.0,230.0"/>
  <line x1="420" y1="61.6" x2="660" y2="218.4" stroke="var(--warm)" stroke-width="2.5"/>
  <circle cx="180" cy="73.2" r="4" fill="var(--accent)"/><circle cx="540" cy="140" r="4" fill="var(--accent)"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="60" y="246">0</text><text x="120" y="246">1</text><text x="180" y="246">2</text><text x="240" y="246">3</text><text x="300" y="246">4</text>
    <text x="300" y="266">t 単位 s</text>
    <text x="480" y="156">1</text><text x="600" y="156">3</text><text x="660" y="156">4</text>
    <text x="660" y="266">t 単位 s</text>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="52" y="194">5</text><text x="52" y="154">10</text><text x="52" y="114">15</text><text x="52" y="74">20</text>
    <text x="412" y="64">20</text><text x="412" y="104">10</text><text x="412" y="144">0</text><text x="412" y="184">−10</text><text x="412" y="224">−20</text>
  </g>
  <text x="66" y="40" font-size="12" fill="var(--muted)">y 単位 m</text>
  <text x="426" y="40" font-size="12" fill="var(--muted)">v 単位 m/s</text>
  <g font-size="12.5" fill="var(--accent)">
    <text x="190" y="64">最高点 19.6 m</text>
    <text x="548" y="128">t＝2 s で v＝0</text>
  </g>
  <g font-size="12.5" fill="var(--ink)">
    <text x="424" y="132">上昇 ＋19.6 m</text><text x="540" y="244">下降 −19.6 m</text>
  </g>
  <text x="190" y="20" font-size="13" text-anchor="middle" fill="var(--ink)">y−tグラフ</text>
  <text x="560" y="20" font-size="13" text-anchor="middle" fill="var(--ink)">v−tグラフ</text>
</svg>
<figcaption>初速度 19.6 m/s で鉛直に投げ上げた運動である。左の放物線は \(y=19.6t-4.9t^2\) を0.1 s ごとに計算した。右の直線の傾きは −9.8 m/s² で一定である。右の上下2つの三角形の面積は等しく t＝4 s で投げた点に戻る。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 7</div>
<p>小球を鉛直上向きに 19.6 m/s で投げ上げた。最高点の高さと投げた点に戻る時刻と戻ったときの速度を求めよ。\(g=\mathrm{9.8\,m/s^2}\) とする。</p>
<details open><summary>解き方</summary><div>手順1 最高点では \(v=0\) で \(0^2-19.6^2=-2\times9.8\times y\) より \(y=19.6\,\mathrm{m}\) である。<br>手順2 戻る時刻は \(y=0\) とおいて \(0=19.6t-4.9t^2=t(19.6-4.9t)\) より \(t=4.0\,\mathrm{s}\) である。<br>手順3 速度は \(v=19.6-9.8\times4.0=-19.6\,\mathrm{m/s}\) である。<br>答え 最高点は 19.6 m で 4.0 s 後に下向き 19.6 m/s で戻る。投げた速さと同じ速さで戻る。</div></details></div>

<p>落下の問題で多い誤りは2つある。1つ目は正の向きを途中で取り替えることである。投げ上げの問題では上向きを正と決めたら下降中も上向きを正のまま使う。下降中の速度と変位が負になるだけで式は1つで済む。2つ目は高さ \(h\) の点から投げ上げた物体が地面に達する時刻を求めるときに \(y=0\) とおくことである。地面の位置は \(y=-h\) である。</p>
<p>水平に投げた物体の運動を<strong>水平投射</strong>と呼ぶ。水平方向には力が働かないので等速直線運動をし鉛直方向には自由落下と同じ運動をする。2つの方向に分けて考えればこの章の式がそのまま使える。物理基礎で水平投射は定性的に触れる範囲である。平面内の運動として計算する扱いは科目「物理」の内容で第9章で行う。空気抵抗がある場合の落下は第3章で定性的に扱う。</p>

<h2 id="s7">現実世界の速度と加速度</h2>
<p>陸上100 m の世界記録は2009年にウサイン・ボルトが出した 9.58 s である。平均の速さは \(100\div9.58\approx10.4\,\mathrm{m/s}\) で時速に直すと約 38 km である。スタート直後は加速度が大きく後半は速さが一定に近づく。区間ごとの通過時刻からv−tグラフを描くとこの章の傾きと面積の考え方で走りを分析できる。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>自動車の停止距離は空走距離と制動距離の和である。空走距離は速さに比例し制動距離は速さの2乗に比例する。速さが2倍で制動距離が4倍になるのは例題5の \(v^2-v_0^2=2ax\) の帰結である。</p>
</aside>

<h2 id="s8">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ x−tグラフ</div>
<p class="qz-q">直線上を運動する物体のx−tグラフが原点を通る直線で t＝4.0 s のとき x＝12 m である。物体の速度を1つ選べ。</p>
<ol><li>0.33 m/s</li><li>3.0 m/s</li><li>12 m/s</li><li>48 m/s</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。x−tグラフの傾きが速度で \(12\div4.0=3.0\,\mathrm{m/s}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ v−tグラフの面積</div>
<p class="qz-q">静止していた物体が一定の加速度で 4.0 s 間に 6.0 m/s まで加速しその後 2.0 s 間 6.0 m/s で進んだ。6.0 s 間の変位を1つ選べ。</p>
<ol><li>12 m</li><li>18 m</li><li>24 m</li><li>36 m</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。v−tグラフの面積は三角形 \(\frac{1}{2}\times4.0\times6.0=12\,\mathrm{m}\) と長方形 \(6.0\times2.0=12\,\mathrm{m}\) の和で 24 m である。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 相対速度</div>
<p class="qz-q">東向きに 20 m/s で進む自動車 A と西向きに 10 m/s で進む自動車 B がある。A から見た B の速度を1つ選べ。</p>
<ol><li>東向き 10 m/s</li><li>西向き 10 m/s</li><li>東向き 30 m/s</li><li>西向き 30 m/s</li></ol>
<details><summary>解答と解説</summary><div>正解は 4 である。東を正とすると \(v_B-v_A=-10-20=-30\,\mathrm{m/s}\) で西向き 30 m/s である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 停止距離</div>
<p class="qz-q">20 m/s で走る自動車が一定の加速度で減速し 5.0 s で止まった。止まるまでに進んだ距離を1つ選べ。</p>
<ol><li>25 m</li><li>50 m</li><li>100 m</li><li>200 m</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。加速度は \(-20\div5.0=-4.0\,\mathrm{m/s^2}\) である。距離は \(20^2\div(2\times4.0)=50\,\mathrm{m}\) である。v−tグラフの三角形の面積 \(\frac{1}{2}\times5.0\times20=50\,\mathrm{m}\) でも同じ値になる。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 自由落下</div>
<p class="qz-q">静かに放した小球が 2.0 s 間に落下する距離を1つ選べ。空気抵抗は無視し \(g=\mathrm{9.8\,m/s^2}\) とする。</p>
<ol><li>4.9 m</li><li>9.8 m</li><li>19.6 m</li><li>39.2 m</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\(\frac{1}{2}\times9.8\times2.0^2=19.6\,\mathrm{m}\) である。2 は \(gt\) を距離と取り違えた値で 4 は \(\frac{1}{2}\) を掛け忘れた値である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 鉛直投げ上げ</div>
<p class="qz-q">小球を鉛直上向きに 14.7 m/s で投げ上げた。投げた点に戻るまでの時間を1つ選べ。\(g=\mathrm{9.8\,m/s^2}\) とする。</p>
<ol><li>1.5 s</li><li>3.0 s</li><li>4.5 s</li><li>6.0 s</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。最高点までの時間は \(14.7\div9.8=1.5\,\mathrm{s}\) で上昇と下降は対称なので戻るまでは 3.0 s である。最高点の高さは \(14.7^2\div(2\times9.8)\approx11\,\mathrm{m}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 最高点の加速度</div>
<p class="qz-q">鉛直に投げ上げた小球が最高点にあるときの記述として正しいものを1つ選べ。</p>
<ol><li>速度も加速度も0である</li><li>速度は0で加速度は鉛直下向きに \(g\) である</li><li>速度は下向きで加速度は0である</li><li>速度は0で加速度は鉛直上向きに \(g\) である</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。v−tグラフは傾き \(-g\) の1本の直線で最高点でも傾きは変わらない。加速度が0なら小球は最高点に静止し続けることになる。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
変位は向きをもつ位置の変化で道のりとは異なる。速度は変位を時間で割った量である。<br>
x−tグラフの傾きが速度でv−tグラフの傾きが加速度である。v−tグラフの面積が変位である。<br>
A から見た B の相対速度は \(v_B-v_A\) である。<br>
速度と加速度が反対向きなら速さは減る。加速度の符号は運動の向きではない。<br>
\(v=v_0+at\) ／ \(x=v_0t+\frac{1}{2}at^2\) ／ \(v^2-v_0^2=2ax\) 。2つ目はv−tグラフの台形の面積で3つ目は時間を消去した式である。<br>
落下運動は加速度 \(g=\mathrm{9.8\,m/s^2}\) の等加速度直線運動である。最高点でも加速度は下向きに \(g\) である。</div>

<h2 id="s10">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>時速160 km の直球の到達時間を、等速の仮定で見積もってよいか。</strong> 本文の0.41秒は投手板から本塁までの 18.44 m を初速度で割った値である。手から離れる位置が前にあることは時間を短くし、空気抵抗による減速は時間を長くするので、評価は2つの効果の大きさの比較による。</li>
<li class="tb-vnote"><strong>重力加速度を 9.8 m/s² の一定値とみなす近似は、どこまで許されるか。</strong> 実際の値は緯度と高度によって異なる。この違いの大きさと、答えに求める有効数字の桁数との比較が判断の手がかりになる。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Equations of motion — Wikipedia — https://en.wikipedia.org/wiki/Equations_of_motion</li>
<li>Relative velocity — Wikipedia — https://en.wikipedia.org/wiki/Relative_velocity</li>
<li>Standard gravity — Wikipedia — https://en.wikipedia.org/wiki/Standard_gravity</li>
<li>Two New Sciences — Wikipedia — https://en.wikipedia.org/wiki/Two_New_Sciences</li>
<li>Men's 100 metres world record progression — Wikipedia — https://en.wikipedia.org/wiki/Men%27s_100_metres_world_record_progression</li>
<li>Pitcher's mound — Wikipedia — https://en.wikipedia.org/wiki/Pitcher%27s_mound</li>
<li>Braking distance — Wikipedia — https://en.wikipedia.org/wiki/Braking_distance</li>
</ol>
