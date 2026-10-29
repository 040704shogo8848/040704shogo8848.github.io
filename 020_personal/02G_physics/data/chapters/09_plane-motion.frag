<!--meta
{"chapter": 9, "part": "物理", "title": "平面運動と剛体のつり合い", "thesis": "平面内の運動は互いに直交する2方向の直線運動に分けて扱える。投射された物体は水平方向に等速で鉛直方向に等加速度で運動する。大きさのある物体のつり合いには力の和が0であることに加えて力のモーメントの和が0であることが必要になる。", "verify": {"date": "2026-10-15", "checked": 50, "match": 47, "fixed": 2, "unconfirmed": 1}}
-->
<p>第1章から第3章では物体を大きさのない点とみなし主に一直線上の運動を扱った。この章から科目「物理」に入る。最初の拡張は2つある。1つは運動を平面に広げることでもう1つは物体に大きさを与えることである。平面の運動は速度と加速度をベクトルとして扱えば直線運動の公式を2方向に適用するだけで解ける。大きさのある物体では力がどこに作用するかで回転が生じるので力のモーメントという量を新しく導入する。</p>
<p>共通テスト物理でこの範囲から問われる論点は主に5つである。速度の合成と相対速度・水平投射と斜方投射の時間と距離・力のモーメントの計算・剛体のつり合いの2条件・重心の位置である。投射の問題は第10章の運動量や第11章の円運動の問題の前半にも組み込まれる。</p>

<h2 id="s1">速度と加速度のベクトル</h2>
<p>平面上の物体の位置は原点からその物体へ向かう矢印で表す。これを<strong>位置ベクトル</strong> \(\vec{r}\) と呼ぶ。時間 \(\Delta t\) の間に位置ベクトルが \(\vec{r}_1\) から \(\vec{r}_2\) に変わったとき \(\Delta\vec{r} = \vec{r}_2 - \vec{r}_1\) を<strong>変位</strong>と呼ぶ。第1章の変位は数直線上の差だったが平面では向きをもつベクトルになる。</p>
<p>速度は変位を時間で割ったベクトルである。</p>
\[ \vec{v} = \frac{\Delta\vec{r}}{\Delta t} \]
<p>\(\Delta t\) を十分小さくした速度を瞬間の速度と呼ぶ。<strong class="hit">瞬間の速度の向きは軌道の接線の向きである</strong>。\(\Delta t\) を小さくすると2点を結ぶ弦が接線に近づくからである。加速度も同じ形で定義する。</p>
\[ \vec{a} = \frac{\Delta\vec{v}}{\Delta t} \]
<p>加速度の向きは速度の変化の向きであり速度の向きとは一般に一致しない。速さが一定でも向きが変われば加速度は0ではない。この点は第11章の円運動の出発点になる。</p>

<h3>成分に分けて扱う</h3>
<p>ベクトルは直交する \(x\) 軸と \(y\) 軸の成分に分けられる。速さ \(v\) で \(x\) 軸から角 \(\theta\) の向きに進む物体の速度の成分は次のとおりである。</p>
\[ v_x = v\cos\theta,\qquad v_y = v\sin\theta,\qquad v = \sqrt{v_x^2 + v_y^2} \]
<p><strong class="hit">平面の運動は \(x\) 方向と \(y\) 方向の2つの直線運動に分けて別々に解ける</strong>。運動方程式 \(m\vec{a} = \vec{F}\) は \(ma_x = F_x\) と \(ma_y = F_y\) の2本に分かれ \(x\) 方向の力は \(y\) 方向の運動に影響しないからである。この考え方がこの章の前半の全部を支える。</p>
<p>2つの速度を足し合わせることを<strong>速度の合成</strong>と呼ぶ。流れのある川を進む船の地面に対する速度は水に対する船の速度と水の流れの速度のベクトルの和である。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>幅 40 m の川が 3.0 m/s で流れている。水に対して 4.0 m/s で岸に垂直な向きに船首を向けて進む船がある。地面に対する船の速さと対岸に着くまでの時間と流れの方向に流される距離を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 地面に対する速さ \(\sqrt{4.0^2 + 3.0^2} = 5.0\ \mathrm{m/s}\)<br>
手順2 岸に垂直な成分は 4.0 m/s なので時間は \(40 \div 4.0 = 10\ \mathrm{s}\)<br>
手順3 流れの方向の成分は 3.0 m/s なので流される距離は \(3.0\times10 = 30\ \mathrm{m}\)<br>
答え 5.0 m/s ・ 10 s ・ 30 m</div></details></div>
<p>時間を合成した速さ 5.0 m/s と川幅から求める誤りが多い。対岸までの時間は岸に垂直な成分だけで定まる。</p>

<h2 id="s2">相対運動</h2>
<p>物体Aから見た物体Bの速度を<strong>Aに対するBの相対速度</strong>と呼ぶ。地面に対するAの速度を \(\vec{v}_A\)・Bの速度を \(\vec{v}_B\) とすると次の式で表す。</p>
\[ \vec{v}_{AB} = \vec{v}_B - \vec{v}_A \]
<p>第1章では一直線上の相対速度を数の引き算で求めた。平面ではベクトルの引き算になる。<strong class="hit">観測者の速度を逆向きにして相手の速度に足すと相対速度になる</strong>。観測者が動くと周囲の物体は観測者の速度と逆向きに動いて見えるからである。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="東向き20メートル毎秒の車Aから見た北向き15メートル毎秒の車Bの相対速度">
  <defs>
    <marker id="ah09a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah09b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
    <marker id="ah09c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  </defs>
  <text x="20" y="24" font-size="13" fill="var(--muted)">地面から見た速度</text>
  <text x="390" y="24" font-size="13" fill="var(--muted)">Aから見たBの速度</text>
  <line x1="80" y1="200" x2="240" y2="200" stroke="var(--warm)" stroke-width="2.6" marker-end="url(#ah09a)"/>
  <line x1="80" y1="200" x2="80" y2="80" stroke="var(--cool)" stroke-width="2.6" marker-end="url(#ah09b)"/>
  <text x="160" y="222" font-size="13" text-anchor="middle" fill="var(--warm)">A 東へ 20 m/s</text>
  <text x="92" y="74" font-size="13" fill="var(--cool)">B 北へ 15 m/s</text>
  <circle cx="80" cy="200" r="3.5" fill="var(--ink)"/>
  <line x1="372" y1="36" x2="372" y2="245" stroke="var(--line)" stroke-dasharray="4 4"/>
  <line x1="560" y1="200" x2="560" y2="80" stroke="var(--cool)" stroke-width="2.2" marker-end="url(#ah09b)"/>
  <line x1="560" y1="80" x2="400" y2="80" stroke="var(--warm)" stroke-width="2.2" stroke-dasharray="6 4" marker-end="url(#ah09a)"/>
  <line x1="560" y1="200" x2="400" y2="80" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah09c)"/>
  <circle cx="560" cy="200" r="3.5" fill="var(--ink)"/>
  <text x="572" y="145" font-size="13" fill="var(--cool)">v<tspan font-size="10" dy="3">B</tspan><tspan dy="-3"> 15</tspan></text>
  <text x="480" y="68" font-size="13" text-anchor="middle" fill="var(--warm)">−v<tspan font-size="10" dy="3">A</tspan><tspan dy="-3"> 20</tspan></text>
  <text x="440" y="170" font-size="13" text-anchor="middle" fill="var(--accent)">相対速度 25 m/s</text>
  <text x="560" y="230" font-size="12.5" text-anchor="middle" fill="var(--sub)">北西寄りの向き ・ 3：4：5 の直角三角形</text>
</svg>
<figcaption>左は地面に対する2台の車の速度である。右はBの速度にAの速度を逆向きにして足した図で太い矢印がAから見たBの速度になる。目盛りは 1 m/s を 8 px とした。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 2</div>
<p>車Aが東へ 20 m/s・車Bが北へ 15 m/s で走っている。Aから見たBの速度の大きさと向きを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 東を \(x\) 軸の正・北を \(y\) 軸の正とする。\(\vec{v}_A = (20, 0)\) ・ \(\vec{v}_B = (0, 15)\)<br>
手順2 \(\vec{v}_{AB} = \vec{v}_B - \vec{v}_A = (-20, 15)\)<br>
手順3 大きさ \(\sqrt{20^2+15^2} = 25\ \mathrm{m/s}\)<br>
答え 25 m/s で西向きの成分20と北向きの成分15をもつ北西寄りの向き</div></details></div>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">並んで歩く2人は互いに静止して見える</p>
<p>同じ速度で並ぶと相対速度は0である。相手の歩みが速いか遅いかは自分の速度を引いた残りで決まる。</p>
</aside>

<h2 id="s3">水平投射</h2>
<p>物体を水平に投げ出す運動を<strong>水平投射</strong>と呼ぶ。空気抵抗を無視すると物体にはたらく力は鉛直下向きの重力 \(mg\) だけである。水平方向には力がはたらかないので水平方向は速さ \(v_0\) の等速直線運動である。鉛直方向は初速度0で加速度 \(g\) の運動であり第1章の自由落下と同じである。</p>
<p>投げ出した点を原点とし水平方向に \(x\) 軸・鉛直下向きに \(y\) 軸をとる。時刻 \(t\) の速度と位置は次のとおりである。</p>
\[ v_x = v_0,\quad v_y = gt,\qquad x = v_0t,\quad y = \frac{1}{2}gt^2 \]
<p>2つの式から \(t\) を消すと軌道の式 \(y = \dfrac{g}{2v_0^{\,2}}x^2\) が得られる。<strong class="hit">軌道は放物線であり落下にかかる時間は初速度に関係なく高さだけで定まる</strong>。同じ高さから水平に投げた球と静かに放した球は同時に地面に着く。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 350" role="img" aria-label="水平投射の0.5秒ごとの位置と自由落下と等速運動の比較">
  <line x1="40" y1="314.4" x2="420" y2="314.4" stroke="var(--ink)" stroke-width="1.5"/>
  <polyline fill="none" stroke="var(--accent)" stroke-width="1.6" points="100.0,40.0 107.0,40.2 114.0,40.7 121.0,41.5 128.0,42.7 135.0,44.3 142.0,46.2 149.0,48.4 156.0,51.0 163.0,53.9 170.0,57.2 177.0,60.8 184.0,64.7 191.0,69.0 198.0,73.6 205.0,78.6 212.0,83.9 219.0,89.6 226.0,95.6 233.0,101.9 240.0,108.6 247.0,115.6 254.0,123.0 261.0,130.7 268.0,138.8 275.0,147.2 282.0,155.9 289.0,165.0 296.0,174.5 303.0,184.2 310.0,194.3 317.0,204.8 324.0,215.6 331.0,226.8 338.0,238.3 345.0,250.1 352.0,262.3 359.0,274.8 366.0,287.6 373.0,300.9 380.0,314.4"/>
  <g stroke="var(--line)" stroke-dasharray="3 4">
    <line x1="60" y1="57.15" x2="170" y2="57.15"/><line x1="60" y1="108.6" x2="240" y2="108.6"/><line x1="60" y1="194.35" x2="310" y2="194.35"/>
    <line x1="170" y1="40" x2="170" y2="57.15"/><line x1="240" y1="40" x2="240" y2="108.6"/><line x1="310" y1="40" x2="310" y2="194.35"/><line x1="380" y1="40" x2="380" y2="314.4"/>
  </g>
  <g fill="var(--cool)" fill-opacity="0.45">
    <circle cx="60" cy="40" r="6"/><circle cx="60" cy="57.15" r="6"/><circle cx="60" cy="108.6" r="6"/><circle cx="60" cy="194.35" r="6"/><circle cx="60" cy="308.4" r="6"/>
  </g>
  <g fill="var(--warm)" fill-opacity="0.45">
    <circle cx="170" cy="40" r="6"/><circle cx="240" cy="40" r="6"/><circle cx="310" cy="40" r="6"/><circle cx="380" cy="40" r="6"/>
  </g>
  <g fill="var(--accent)">
    <circle cx="100" cy="40" r="7"/><circle cx="170" cy="57.15" r="7"/><circle cx="240" cy="108.6" r="7"/><circle cx="310" cy="194.35" r="7"/><circle cx="380" cy="308.4" r="7"/>
  </g>
  <g font-size="12" fill="var(--sub)">
    <text x="104" y="28">0 s</text><text x="174" y="28">0.5 s</text><text x="244" y="28">1.0 s</text><text x="314" y="28">1.5 s</text><text x="384" y="28">2.0 s</text>
  </g>
  <g font-size="12.5">
    <text x="450" y="70" fill="var(--warm)">上の列 水平方向だけ見た位置</text>
    <text x="450" y="90" fill="var(--sub)">0.5 s ごとに 5 m ずつ進む等速運動</text>
    <text x="450" y="140" fill="var(--cool)">左の列 鉛直方向だけ見た位置</text>
    <text x="450" y="160" fill="var(--sub)">落下距離 1.2 ／ 4.9 ／ 11.0 ／ 19.6 m</text>
    <text x="450" y="210" fill="var(--accent)">実際の球 2つの運動の合成</text>
    <text x="450" y="230" fill="var(--sub)">初速度 10 m/s ・ 高さ 19.6 m</text>
    <text x="450" y="250" fill="var(--sub)">2.0 s 後に水平距離 20 m で着地</text>
  </g>
</svg>
<figcaption>0.5 s ごとの位置を示した。実際の球の真上の位置は等速で進み真横の位置は自由落下と一致する。目盛りは 1 m を 14 px とし水平と鉛直で同じ縮尺である。</figcaption>
</figure>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">外野フライは横の等速と縦の投げ上げの2本立てである</p>
<p>打球の滞空時間は縦の初速度だけで決まり飛距離は横の速さと滞空時間の積である。空気抵抗を無視した場合の話である。</p>
</aside>

<div class="ex"><div class="ex-h">例題 3</div>
<p>高さ 19.6 m のビルの屋上から小球を水平に 10 m/s で投げた。地面に着くまでの時間・水平に進んだ距離・着地直前の速さを求めよ。重力加速度を 9.8 m/s<sup>2</sup> とする。</p>
<details open><summary>解き方</summary><div>手順1 鉛直方向 \(19.6 = \tfrac{1}{2}\times9.8\times t^2\) から \(t^2 = 4.0\) で \(t = 2.0\ \mathrm{s}\)<br>
手順2 水平方向 \(x = 10\times2.0 = 20\ \mathrm{m}\)<br>
手順3 着地直前 \(v_x = 10\) ・ \(v_y = 9.8\times2.0 = 19.6\) ・ 速さ \(\sqrt{10^2+19.6^2} \approx 22\ \mathrm{m/s}\)<br>
答え 2.0 s ・ 20 m ・ 約 22 m/s</div></details></div>

<h2 id="s4">斜方投射</h2>
<p>水平と角 \(\theta\) をなす向きに初速度 \(v_0\) で投げ上げる運動を<strong>斜方投射</strong>と呼ぶ。初速度を成分に分けると水平成分は \(v_0\cos\theta\)・鉛直成分は \(v_0\sin\theta\) である。水平方向は等速直線運動で鉛直方向は第1章の鉛直投げ上げと同じである。鉛直上向きを \(y\) 軸の正とする。</p>
\[ v_x = v_0\cos\theta,\quad v_y = v_0\sin\theta - gt \]
\[ x = v_0\cos\theta\cdot t,\quad y = v_0\sin\theta\cdot t - \frac{1}{2}gt^2 \]
<p>最高点では鉛直方向の速度が0になる。<strong class="hit">最高点の速度は0ではなく水平成分 \(v_0\cos\theta\) が残る</strong>。最高点で速度を0とおく誤りは頻出である。</p>
<p>3つの量は次のように求める。</p>
<div class="tb-tw"><table>
<thead><tr><th>量</th><th>条件</th><th>結果</th></tr></thead>
<tbody>
<tr><td>最高点までの時間</td><td>\(v_y = 0\)</td><td>\(t_1 = \dfrac{v_0\sin\theta}{g}\)</td></tr>
<tr><td>最高点の高さ</td><td>\(t_1\) を \(y\) に代入</td><td>\(H = \dfrac{v_0^{\,2}\sin^2\theta}{2g}\)</td></tr>
<tr><td>水平到達距離</td><td>滞空時間 \(2t_1\) を \(x\) に代入</td><td>\(R = \dfrac{2v_0^{\,2}\sin\theta\cos\theta}{g} = \dfrac{v_0^{\,2}\sin2\theta}{g}\)</td></tr>
</tbody></table></div>
<p>\(\sin2\theta\) の最大値は \(\theta = 45^\circ\) のときの1である。<strong>初速度の大きさが同じなら45°で投げると水平到達距離が最大になる</strong>。また \(\sin2\theta = \sin(180^\circ - 2\theta)\) なので \(\theta\) と \(90^\circ - \theta\) の2つの角度は同じ距離に届く。30°と60°はその例である。距離は同じでも60°のほうが高く上がり滞空時間が長い。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 340" role="img" aria-label="初速度14メートル毎秒で30度45度60度に投げた軌道">
  <g stroke="var(--line)" stroke-width="1">
    <line x1="60" y1="232.5" x2="660" y2="232.5"/><line x1="60" y1="165" x2="660" y2="165"/><line x1="60" y1="97.5" x2="660" y2="97.5"/>
    <line x1="195" y1="300" x2="195" y2="80"/><line x1="330" y1="300" x2="330" y2="80"/><line x1="465" y1="300" x2="465" y2="80"/><line x1="600" y1="300" x2="600" y2="80"/>
  </g>
  <line x1="60" y1="300" x2="680" y2="300" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="60" y1="300" x2="60" y2="70" stroke="var(--ink)" stroke-width="1.5"/>
  <polyline fill="none" stroke="var(--cool)" stroke-width="2.4" points="60.0,300.0 71.7,293.4 83.4,287.2 95.1,281.3 106.8,275.7 118.5,270.5 130.1,265.6 141.8,261.0 153.5,256.8 165.2,252.9 176.9,249.4 188.6,246.2 200.3,243.3 212.0,240.8 223.7,238.6 235.4,236.7 247.1,235.2 258.8,234.0 270.4,233.2 282.1,232.7 293.8,232.5 305.5,232.7 317.2,233.2 328.9,234.0 340.6,235.2 352.3,236.7 364.0,238.6 375.7,240.8 387.4,243.3 399.0,246.2 410.7,249.4 422.4,252.9 434.1,256.8 445.8,261.0 457.5,265.6 469.2,270.5 480.9,275.7 492.6,281.3 504.3,287.2 516.0,293.4 527.7,300.0"/>
  <polyline fill="none" stroke="var(--accent)" stroke-width="2.6" points="60.0,300.0 73.5,286.8 87.0,274.4 100.5,262.5 114.0,251.4 127.5,240.9 141.0,231.2 154.5,222.0 168.0,213.6 181.5,205.8 195.0,198.8 208.5,192.3 222.0,186.6 235.5,181.5 249.0,177.2 262.5,173.4 276.0,170.4 289.5,168.0 303.0,166.4 316.5,165.3 330.0,165.0 343.5,165.3 357.0,166.4 370.5,168.0 384.0,170.4 397.5,173.4 411.0,177.2 424.5,181.5 438.0,186.6 451.5,192.3 465.0,198.8 478.5,205.8 492.0,213.6 505.5,222.0 519.0,231.1 532.5,240.9 546.0,251.4 559.5,262.5 573.0,274.4 586.5,286.8 600.0,300.0"/>
  <polyline fill="none" stroke="var(--warm)" stroke-width="2.4" points="60.0,300.0 71.7,280.3 83.4,261.5 95.1,243.8 106.8,227.1 118.5,211.4 130.1,196.7 141.8,183.1 153.5,170.4 165.2,158.8 176.9,148.1 188.6,138.5 200.3,129.9 212.0,122.3 223.7,115.7 235.4,110.2 247.1,105.6 258.8,102.1 270.4,99.5 282.1,98.0 293.8,97.5 305.5,98.0 317.2,99.5 328.9,102.1 340.6,105.6 352.3,110.2 364.0,115.7 375.7,122.3 387.4,129.9 399.0,138.5 410.7,148.1 422.4,158.8 434.1,170.4 445.8,183.1 457.5,196.7 469.2,211.4 480.9,227.1 492.6,243.8 504.3,261.5 516.0,280.3 527.7,300.0"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="60" y="318">0</text><text x="195" y="318">5</text><text x="330" y="318">10</text><text x="465" y="318">15</text><text x="600" y="318">20</text>
  </g>
  <text x="690" y="318" font-size="12.5" text-anchor="end" fill="var(--ink)">x 単位 m</text>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="54" y="236">2.5</text><text x="54" y="169">5.0</text><text x="54" y="101">7.5</text>
  </g>
  <text x="60" y="60" font-size="12.5" text-anchor="middle" fill="var(--ink)">y 単位 m</text>
  <rect x="520" y="62" width="160" height="70" fill="var(--paper, #fff)" fill-opacity="0.9"/>
  <line x1="530" y1="76" x2="556" y2="76" stroke="var(--warm)" stroke-width="2.4"/><text x="562" y="80" font-size="12.5" fill="var(--warm)">60° 高さ 7.5 m</text>
  <line x1="530" y1="98" x2="556" y2="98" stroke="var(--accent)" stroke-width="2.6"/><text x="562" y="102" font-size="12.5" fill="var(--accent)">45° 高さ 5.0 m</text>
  <line x1="530" y1="120" x2="556" y2="120" stroke="var(--cool)" stroke-width="2.4"/><text x="562" y="124" font-size="12.5" fill="var(--cool)">30° 高さ 2.5 m</text>
  <circle cx="527.7" cy="300" r="4" fill="var(--warm)"/>
  <circle cx="600" cy="300" r="4" fill="var(--accent)"/>
  <text x="527.7" y="334" font-size="12" text-anchor="middle" fill="var(--warm)">17.3 m</text>
  <text x="612" y="290" font-size="12" fill="var(--accent)">20.0 m</text>
</svg>
<figcaption>初速度 14 m/s・重力加速度 9.8 m/s² で計算した。45°の水平到達距離が 20.0 m で最大になる。30°と60°はどちらも 17.3 m に届き最高点の高さは 2.5 m と 7.5 m である。縦と横は同じ縮尺である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 4</div>
<p>水平と30°の向きに 19.6 m/s で小球を投げ上げた。最高点に達するまでの時間・最高点の高さ・水平到達距離を求めよ。重力加速度を 9.8 m/s<sup>2</sup> とする。</p>
<details open><summary>解き方</summary><div>手順1 初速度の成分 \(v_x = 19.6\cos30^\circ = 9.8\sqrt{3}\) ・ \(v_y = 19.6\sin30^\circ = 9.8\)<br>
手順2 最高点まで \(t_1 = 9.8 \div 9.8 = 1.0\ \mathrm{s}\)<br>
手順3 高さ \(H = 9.8\times1.0 - \tfrac{1}{2}\times9.8\times1.0^2 = 4.9\ \mathrm{m}\)<br>
手順4 滞空時間 2.0 s ・ 距離 \(9.8\sqrt{3}\times2.0 = 19.6\sqrt{3} \approx 34\ \mathrm{m}\)<br>
答え 1.0 s ・ 4.9 m ・ 約 34 m</div></details></div>

<h2 id="s5">剛体と力のモーメント</h2>
<p>力を加えても変形しない物体を<strong>剛体</strong>と呼ぶ。現実の物体はわずかに変形するが変形を無視できる場合に剛体とみなす。剛体に力がはたらくとき力の大きさと向きだけでなく作用する点が問題になる。力が作用する点を<strong>作用点</strong>と呼び作用点を通り力の向きに引いた直線を<strong>作用線</strong>と呼ぶ。剛体では力を作用線上で移動させても効果は変わらない。</p>
<p>ドアを開けるとき蝶番から遠い所を押すほど小さな力で開く。蝶番に向けて押してもドアは回転しない。剛体を回転させるはたらきは力の大きさと回転軸から作用線までの距離の両方で定まる。この量を<strong>力のモーメント</strong>と呼ぶ。</p>
\[ M = Fl \]
<p>\(l\) は回転軸から作用線へ下ろした垂線の長さで<strong>うでの長さ</strong>と呼ぶ。単位は \(\mathrm{N\cdot m}\) である。反時計回りに回転させるモーメントを正・時計回りを負とする約束が多い。</p>
<p>軸から作用点までの距離を \(r\)・その線分と力のなす角を \(\theta\) とすると うでの長さは \(l = r\sin\theta\) である。</p>
\[ M = Fr\sin\theta \]
<p>力を線分に平行な成分 \(F\cos\theta\) と垂直な成分 \(F\sin\theta\) に分けても同じ結果になる。平行な成分は軸を通るので回転に寄与せず垂直な成分だけが距離 \(r\) で回転させる。<strong class="hit">力のモーメントは力の大きさとうでの長さの積であり作用点までの距離との積ではない</strong>。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="力のモーメントのうでの長さと偶力">
  <defs>
    <marker id="ah09d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
  </defs>
  <text x="20" y="24" font-size="13" fill="var(--muted)">力のモーメント</text>
  <text x="390" y="24" font-size="13" fill="var(--muted)">偶力</text>
  <line x1="100" y1="160" x2="230" y2="160" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/>
  <circle cx="100" cy="160" r="6" fill="var(--paper, #fff)" stroke="var(--ink)" stroke-width="2"/>
  <text x="92" y="186" font-size="13" fill="var(--ink)">O</text>
  <text x="222" y="186" font-size="13" fill="var(--ink)">P</text>
  <line x1="180" y1="229.3" x2="255" y2="99.4" stroke="var(--sub)" stroke-dasharray="5 4"/>
  <line x1="220" y1="160" x2="255" y2="99.4" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah09d)"/>
  <text x="262" y="100" font-size="13" fill="var(--warm)">F</text>
  <line x1="100" y1="160" x2="190" y2="212" stroke="var(--accent)" stroke-width="2"/>
  <text x="30" y="215" font-size="12.5" fill="var(--accent)">l ＝ r sinθ</text>
  <text x="160" y="150" font-size="12.5" text-anchor="middle" fill="var(--sub)">r</text>
  <path d="M232 160 A 12 12 0 0 0 226 149.6" fill="none" stroke="var(--sub)"/>
  <text x="240" y="152" font-size="12" fill="var(--sub)">θ</text>
  <text x="200" y="250" font-size="12" text-anchor="middle" fill="var(--sub)">破線は作用線 ・ うでの長さは O から作用線への垂線</text>
  <line x1="372" y1="36" x2="372" y2="245" stroke="var(--line)" stroke-dasharray="4 4"/>
  <line x1="450" y1="140" x2="650" y2="140" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/>
  <line x1="650" y1="140" x2="650" y2="70" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah09d)"/>
  <line x1="450" y1="140" x2="450" y2="210" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah09d)"/>
  <text x="660" y="80" font-size="13" fill="var(--warm)">F</text>
  <text x="430" y="210" font-size="13" fill="var(--warm)">F</text>
  <line x1="450" y1="170" x2="650" y2="170" stroke="var(--accent)" stroke-width="1.5"/>
  <line x1="450" y1="163" x2="450" y2="177" stroke="var(--accent)"/><line x1="650" y1="163" x2="650" y2="177" stroke="var(--accent)"/>
  <text x="550" y="190" font-size="12.5" text-anchor="middle" fill="var(--accent)">d</text>
  <text x="550" y="235" font-size="12.5" text-anchor="middle" fill="var(--sub)">力の和は0 ・ モーメントは Fd で反時計回り</text>
</svg>
<figcaption>左は O を軸とする棒の点 P に力 F が作用する図である。うでの長さ l は O から作用線へ下ろした垂線の長さで r sinθ に等しい。右は大きさが等しく向きが逆で作用線が平行な2力で偶力と呼ぶ。物体は移動せずに回転だけを始める。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 5</div>
<p>長さ 0.25 m のスパナの端に 40 N の力を加えてボルトを回転させる。力の向きがスパナに垂直な場合と スパナと30°をなす場合の力のモーメントを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 垂直な場合 \(M = 40\times0.25 = 10\ \mathrm{N\cdot m}\)<br>
手順2 30°の場合 \(l = 0.25\sin30^\circ = 0.125\ \mathrm{m}\) ・ \(M = 40\times0.125 = 5.0\ \mathrm{N\cdot m}\)<br>
答え 10 N·m と 5.0 N·m</div></details></div>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">力のモーメントは文字どおりのレバレッジである</p>
<p>leverage の語源はてこである。同じ力でもうでの長さが2倍なら回転させるはたらきは2倍になる。</p>
</aside>

<h2 id="s6">剛体のつり合い</h2>
<p>静止している剛体が静止を続ける条件は2つある。</p>
<div class="tb-vs">
<div><h5>並進のつり合い</h5><ul>
<li>剛体にはたらく力のベクトルの和が0</li>
<li>\(\sum F_x = 0\) かつ \(\sum F_y = 0\)</li>
<li>重心が動き出さない条件</li>
</ul></div>
<div><h5>回転のつり合い</h5><ul>
<li>任意の点のまわりの力のモーメントの和が0</li>
<li>\(\sum M = 0\)</li>
<li>回転し始めない条件</li>
</ul></div>
</div>
<p>第2章の質点のつり合いは1つ目の条件だけだった。大きさのある物体では力の和が0でも回転し始める場合がある。次節の偶力がその例である。<strong class="hit">力の和が0のときモーメントの和はどの点のまわりで計算しても同じ値になる</strong>。そこで回転のつり合いの式は計算が最も簡単になる点のまわりで立てる。未知の力の作用点をモーメントの中心に選ぶとその力のうでの長さが0になり式から消える。</p>

<h3>解き方の手順</h3>
<p>手順1 剛体にはたらく力をすべて作用点の位置に描く。重力は重心に描く。手順2 力を成分に分けて並進のつり合いの式を立てる。手順3 未知の力が多く集まる点を選んでモーメントのつり合いの式を立てる。手順4 連立して解く。両端以外にも支点がある棒では、2つの条件だけでは支点の力が1通りに定まらない場合がある。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="長さ4メートルで重さ200ニュートンの一様な棒を両端で支え左端から1メートルに100ニュートンをつるした図">
  <defs>
    <marker id="ah09e" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
    <marker id="ah09f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
  </defs>
  <rect x="120" y="142" width="480" height="16" fill="var(--muted)" fill-opacity="0.5" stroke="var(--ink)"/>
  <path d="M120 158 L106 186 L134 186 Z" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <path d="M600 158 L586 186 L614 186 Z" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="120" y1="142" x2="120" y2="72" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah09e)"/>
  <line x1="600" y1="142" x2="600" y2="92" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah09e)"/>
  <line x1="360" y1="158" x2="360" y2="238" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah09f)"/>
  <line x1="240" y1="158" x2="240" y2="198" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah09f)"/>
  <g font-size="13">
    <text x="130" y="80" fill="var(--cool)">R<tspan font-size="10" dy="3">A</tspan><tspan dy="-3"> ＝ 175 N</tspan></text>
    <text x="470" y="88" fill="var(--cool)">R<tspan font-size="10" dy="3">B</tspan><tspan dy="-3"> ＝ 125 N</tspan></text>
    <text x="370" y="232" fill="var(--warm)">棒の重さ 200 N 重心</text>
    <text x="250" y="200" fill="var(--warm)">100 N</text>
    <text x="108" y="206" fill="var(--ink)">A</text><text x="596" y="206" fill="var(--ink)">B</text>
  </g>
  <g stroke="var(--sub)" stroke-width="1">
    <line x1="120" y1="30" x2="600" y2="30"/><line x1="120" y1="24" x2="120" y2="36"/><line x1="240" y1="24" x2="240" y2="36"/><line x1="360" y1="24" x2="360" y2="36"/><line x1="600" y1="24" x2="600" y2="36"/>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="180" y="20">1 m</text><text x="300" y="20">1 m</text><text x="480" y="20">2 m</text>
  </g>
</svg>
<figcaption>矢印の長さは力の大きさに比例させた。上向きの力の和 175＋125 は下向きの力の和 200＋100 に等しい。A のまわりのモーメントも打ち消し合う。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 6</div>
<p>長さ 4.0 m・重さ 200 N の一様な棒の両端 A と B を支点で支え A から 1.0 m の点に 100 N のおもりをつるした。支点が棒を押す力 \(R_A\) と \(R_B\) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 一様な棒の重心は中点で A から 2.0 m である。<br>
手順2 A のまわりのモーメント \(R_B\times4.0 - 200\times2.0 - 100\times1.0 = 0\) から \(R_B = 125\ \mathrm{N}\)<br>
手順3 力のつり合い \(R_A + R_B = 300\) から \(R_A = 175\ \mathrm{N}\)<br>
答え \(R_A = 175\ \mathrm{N}\) ・ \(R_B = 125\ \mathrm{N}\)</div></details></div>

<div class="ex"><div class="ex-h">例題 7</div>
<p>長さ \(L\)・重さ \(W\) の一様なはしごを なめらかな鉛直の壁に立てかけ床との角を60°にした。床はあらく はしごは静止している。壁がはしごを押す力 \(N\)・床がはしごに及ぼす摩擦力 \(f\) と垂直抗力 \(R\) を求めよ。また静止するための静止摩擦係数の最小値を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 力は4つである。重心にはたらく \(W\)・壁からの水平な \(N\)・床からの鉛直な \(R\)・床からの水平な \(f\) である。<br>
手順2 並進のつり合い 水平 \(f = N\) ・ 鉛直 \(R = W\)<br>
手順3 床との接点のまわりのモーメント。\(R\) と \(f\) は接点を通るので消える。\(W\) のうでの長さは \(\tfrac{L}{2}\cos60^\circ\) で \(N\) のうでの長さは \(L\sin60^\circ\) である。<br>
手順4 \(N\cdot L\sin60^\circ = W\cdot\tfrac{L}{2}\cos60^\circ\) から \(N = \dfrac{W}{2\tan60^\circ} = \dfrac{\sqrt{3}}{6}W \approx 0.29W\)<br>
手順5 静止の条件 \(f \le \mu R\) から \(\mu \ge \dfrac{N}{W} = \dfrac{\sqrt{3}}{6}\)<br>
答え \(N = f = \tfrac{\sqrt{3}}{6}W\) ・ \(R = W\) ・ 最小値 \(\tfrac{\sqrt{3}}{6} \approx 0.29\)</div></details></div>
<p>はしごの角度を小さくすると \(\tan\) が小さくなり必要な摩擦係数は大きくなる。寝かせたはしごほど滑りやすい理由である。</p>

<h2 id="s7">重心と偶力</h2>
<p>剛体の各部分にはたらく重力は平行な多数の力である。これらを1つの力に置き換えたときの作用点を<strong>重心</strong>と呼ぶ。重心で支えると剛体はどの向きにも回転しない。</p>
<p>質量 \(m_1\) と \(m_2\) の2つの小球を軽い棒でつなぎ \(x\) 軸上の \(x_1\) と \(x_2\) に置く。重心の位置 \(x_G\) で支えると考え重心のまわりのモーメントを0とおく。\(m_1g(x_G - x_1) = m_2g(x_2 - x_G)\) を \(x_G\) について解く。</p>
\[ x_G = \frac{m_1x_1 + m_2x_2}{m_1 + m_2} \]
<p><strong class="hit">重心は位置を質量で重み付けした平均である</strong>。重心は重い側に近づき2つの質量の比の逆比に線分を内分する。3個以上の物体や \(y\) 座標についても同じ形の式が成り立つ。一様な棒の重心は中点で一様な長方形の板の重心は対角線の交点である。形を部分に分けて各部分の重心に質量を集めれば複雑な形の重心も同じ式で求まる。</p>

<div class="ex"><div class="ex-h">例題 8</div>
<p>長さ 1.2 m で質量 2.0 kg の一様な棒の左端に 1.0 kg の小球を付けた。重心は左端から何 m の位置か。</p>
<details open><summary>解き方</summary><div>手順1 棒の質量は中点 0.60 m に集める。小球は 0 m にある。<br>
手順2 \(x_G = \dfrac{1.0\times0 + 2.0\times0.60}{1.0+2.0} = 0.40\ \mathrm{m}\)<br>
答え 左端から 0.40 m</div></details></div>

<h3>偶力</h3>
<p>大きさが等しく向きが逆で作用線が平行な2つの力を<strong>偶力</strong>と呼ぶ。偶力の力の和は0なので重心は動かない。それでも剛体は回転し始める。偶力のモーメントは作用線の間の距離を \(d\) として次の式で表す。</p>
\[ M = Fd \]
<p>この値はモーメントの中心の位置によらない。中心を2力の作用線の間のどこに選んでも \(Fa + F(d-a) = Fd\) になるからである。水道の蛇口のハンドルや自動車のハンドルを両手で回転させる操作が偶力の例である。</p>
<p>典型的な誤りは偶力を1つの力に置き換えようとすることである。<strong>偶力は1つの力で置き換えられず打ち消すには逆向きの偶力が必要である</strong>。剛体のつり合いで力の和だけを確かめて回転の条件を見落とす誤りもこの点から生じる。</p>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">偶力は純額が0でも総額が残る両建て取引である</p>
<p>力の合計は0でもうでの長さがある限りモーメント Fd が残る。純額だけを見ると回転を見落とす。</p>
</aside>

<h2 id="s8">現実世界の投射と剛体</h2>
<p>真空中なら45°で打った打球が最も遠くへ飛ぶ。実際の打球には空気抵抗と回転による揚力がはたらく。大リーグの公式データ Statcast は打球速度と打球角度の組み合わせで長打になりやすい打球を barrel と定義する。打球速度 98 マイル毎時のとき barrel となる打球角度は26°から30°である。45°より低い角度で最適になる点は空気抵抗のない放物線の模型の限界を示す。</p>
<p>建設現場のタワークレーンは剛体のつり合いの応用である。荷をつるすジブの反対側に重いカウンターウエイトを置きマストのまわりのモーメントをつり合わせる。荷を遠くへ運ぶほどうでの長さが増えるので運べる質量は小さくなる。クレーンの定格荷重は作業半径ごとに表で定められている。</p>
<aside class="an an-rw"><b>現実世界</b>
<p class="an-h">ガリレオは投射の軌道が放物線になることを論証した</p>
<p>1638年の著書『新科学対話』で水平方向の等速運動と鉛直方向の等加速度運動の合成が放物線になると論じた。</p>
</aside>

<h2 id="s9">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 水平投射</div>
<p class="qz-q">高さ 4.9 m の台から小球を水平に 3.0 m/s で投げた。着地点の台からの水平距離は何 m か。重力加速度を 9.8 m/s<sup>2</sup> とする。</p>
<ol><li>1.5 m</li><li>3.0 m</li><li>4.9 m</li><li>6.0 m</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(4.9 = \tfrac{1}{2}\times9.8\times t^2\) から \(t = 1.0\ \mathrm{s}\) で距離は \(3.0\times1.0 = 3.0\ \mathrm{m}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 斜方投射の最高点</div>
<p class="qz-q">水平と30°の向きに 19.6 m/s で投げ上げた小球の最高点の高さは何 m か。重力加速度を 9.8 m/s<sup>2</sup> とする。</p>
<ol><li>4.9 m</li><li>9.8 m</li><li>14.7 m</li><li>19.6 m</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。鉛直成分は \(19.6\sin30^\circ = 9.8\ \mathrm{m/s}\) である。\(H = 9.8^2/(2\times9.8) = 4.9\ \mathrm{m}\) である。初速度全体を使うと 19.6 m になり誤りである。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 水平到達距離</div>
<p class="qz-q">同じ速さで投げた小球の水平到達距離について正しいものを1つ選べ。空気抵抗は無視する。</p>
<ol><li>60°で投げると30°のときの2倍の距離に届く</li><li>20°で投げた場合と70°で投げた場合の距離は等しい</li><li>最高点では速度が0になる</li><li>滞空時間は投げる角度によらない</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(R = v_0^{\,2}\sin2\theta/g\) で \(\sin40^\circ = \sin140^\circ\) である。1 は30°と60°の距離が等しい。3 は最高点で水平成分が残る。4 は滞空時間 \(2v_0\sin\theta/g\) が角度で変わる。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 相対速度</div>
<p class="qz-q">雨が鉛直に 4.0 m/s で降っている。東へ 3.0 m/s で歩く人から見た雨の速さは何 m/s か。</p>
<ol><li>1.0 m/s</li><li>3.5 m/s</li><li>5.0 m/s</li><li>7.0 m/s</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。人に対する雨の相対速度は雨の速度から人の速度を引いたものである。西向き 3.0 と下向き 4.0 の成分をもち大きさは \(\sqrt{3.0^2+4.0^2} = 5.0\ \mathrm{m/s}\) である。雨は前方の斜め上から降ってくるように見える。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 棒のつり合い</div>
<p class="qz-q">長さ 2.0 m・重さ 60 N の一様な棒の両端を支点で支え左端から 0.50 m の点に 40 N のおもりをつるした。左端の支点が棒を押す力は何 N か。</p>
<ol><li>40 N</li><li>50 N</li><li>60 N</li><li>70 N</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。右端のまわりのモーメントで \(R_L\times2.0 = 60\times1.0 + 40\times1.5 = 120\) から \(R_L = 60\ \mathrm{N}\) である。右端は \(100 - 60 = 40\ \mathrm{N}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 重心</div>
<p class="qz-q">軽い棒の一端に 1.0 kg・そこから 0.80 m 離れた他端に 3.0 kg の小球を付けた。重心は 1.0 kg の小球から何 m の位置か。</p>
<ol><li>0.20 m</li><li>0.40 m</li><li>0.53 m</li><li>0.60 m</li></ol>
<details><summary>解答と解説</summary><div>正解は 4 である。\(x_G = (1.0\times0 + 3.0\times0.80)/4.0 = 0.60\ \mathrm{m}\) である。重い小球に近い側にある。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ つり合いの条件</div>
<p class="qz-q">剛体のつり合いに関する記述として正しいものを1つ選べ。</p>
<ol><li>力のベクトルの和が0なら剛体は回転し始めない</li><li>偶力は1つの力で打ち消せる</li><li>力の和が0のとき力のモーメントの和はどの点のまわりで求めても等しい</li><li>力のモーメントは力の大きさと作用点までの距離の積である</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。1 は偶力が反例である。2 は偶力を打ち消すには逆向きの偶力が必要である。4 は作用点までの距離ではなく作用線までの距離であるうでの長さを使う。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ はしご</div>
<p class="qz-q">一様なはしごを なめらかな鉛直の壁に立てかけ床との角を45°にした。はしごが滑らないための床の静止摩擦係数の最小値はいくらか。</p>
<ol><li>0.25</li><li>0.29</li><li>0.50</li><li>1.0</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。床との接点のまわりで \(N L\sin45^\circ = W\tfrac{L}{2}\cos45^\circ\) から \(N = W/2\) である。摩擦力は \(N\) に等しく垂直抗力は \(W\) なので \(\mu \ge 0.50\) である。2 は60°の場合の値である。</div></details></div>

<h2 id="s10">この章の要点</h2>
<div class="tb-key"><b>要点</b>
速度と加速度はベクトルである。平面の運動は x と y の2つの直線運動に分けて解く。<br>
相対速度は v_AB ＝ v_B − v_A で観測者の速度を逆向きにして足す。<br>
水平投射は水平が等速で鉛直が自由落下。落下時間は高さだけで定まる。<br>
斜方投射は H ＝ v₀²sin²θ/2g と R ＝ v₀²sin2θ/g。45°で R が最大で θ と 90°−θ は同じ距離に届く。<br>
力のモーメントは M ＝ Fl ＝ Fr sinθ。l は軸から作用線への垂線の長さである。<br>
剛体のつり合いは力の和0とモーメントの和0の2条件。モーメントの中心は未知の力の作用点に選ぶ。<br>
重心は x_G ＝ Σmx/Σm。偶力は力の和0でモーメント Fd をもつ。</div>

<h2 id="s11">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>空気抵抗を無視した放物線の模型は、実際の打球の問題にどこまで使えるか。</strong> 本文は真空中なら45°の打球が最も遠くへ飛ぶとし、水平と鉛直の2方向に分けて運動を扱った。一方でStatcastのbarrelは打球速度98マイル毎時のとき26°から30°であり、本文はこれを放物線の模型の限界を示す例とした。</li>
</ul>

<h2 id="s12">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Projectile motion — Wikipedia — https://en.wikipedia.org/wiki/Projectile_motion</li>
<li>Relative velocity — Wikipedia — https://en.wikipedia.org/wiki/Relative_velocity</li>
<li>Torque — Wikipedia — https://en.wikipedia.org/wiki/Torque</li>
<li>Center of mass — Wikipedia — https://en.wikipedia.org/wiki/Center_of_mass</li>
<li>Couple (mechanics) — Wikipedia — https://en.wikipedia.org/wiki/Couple_(mechanics)</li>
<li>MLB Glossary Barrel — https://www.mlb.com/glossary/statcast/barrel</li>
<li>Two New Sciences — Wikipedia — https://en.wikipedia.org/wiki/Two_New_Sciences</li>
</ol>
