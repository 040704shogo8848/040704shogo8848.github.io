<!--meta
{"chapter": 10, "verify": {"date":"2026-10-15","checked":23,"match":21,"fixed":1,"unconfirmed":1}, "part": "物理", "title": "運動量と力積", "thesis": "運動方程式を時間で積み上げると運動量の変化は力積に等しいという関係が得られる。物体どうしが及ぼし合う力は作用反作用で打ち消し合うので外力がなければ全体の運動量は保存する。衝突の後の速度は運動量保存則と反発係数の2式で決まる。"}
-->
<p>第3章では運動方程式 \( ma=F \) を使い「ある瞬間に働く力が加速度を決める」という見方で運動を扱った。第4章では力を距離について積み上げて仕事と運動エネルギーの関係を導いた。この章では力を<strong>時間</strong>について積み上げる。その結果として得られる量が運動量と力積である。衝突のように力が短時間に大きく変化して個々の瞬間の力を特定できない場面でも運動量を使えば前後の速度を計算できる。</p>
<p>共通テストの「物理」でこの範囲から問われる論点は5つである。運動量と力積の関係・F−tグラフの面積・運動量保存則が使える条件・反発係数を使った衝突後の速度・衝突や分裂での運動エネルギーの増減である。平面での衝突は成分に分けて同じ手順で解く。この章はこの順に積み上げる。</p>

<h2 id="s1">運動量と力積の関係</h2>
<p>質量 \( m \) の物体が速度 \( \vec{v} \) で運動しているとき次の量を<strong>運動量</strong>と呼ぶ。</p>
\[ \vec{p}=m\vec{v} \]
<p>運動量は速度に質量を掛けたベクトルで向きは速度と同じである。単位は \( \mathrm{kg\cdot m/s} \) である。同じ速さでも質量が大きいほど運動量は大きい。時速 40 km のトラックと自転車では止めるときの難しさが異なる。その差を表す量が運動量である。</p>
<p>次に一定の力 \( \vec{F} \) が時間 \( \Delta t \) の間だけ働く場面を考える。力と時間の積を<strong>力積</strong>と呼ぶ。</p>
\[ \vec{I}=\vec{F}\,\Delta t \]
<p>力積の単位は \( \mathrm{N\cdot s} \) である。\( 1\,\mathrm{N}=1\,\mathrm{kg\cdot m/s^2} \) なので \( \mathrm{N\cdot s}=\mathrm{kg\cdot m/s} \) となり運動量と同じ単位になる。</p>
<h3>運動方程式からの導出</h3>
<p>運動量と力積が同じ単位をもつのは偶然ではない。力が一定のとき加速度も一定である。時間 \( \Delta t \) の間に速度が \( \vec{v} \) から \( \vec{v}\,' \) へ変化したとすると加速度は \( \vec{a}=(\vec{v}\,'-\vec{v})/\Delta t \) である。これを運動方程式 \( m\vec{a}=\vec{F} \) に代入して両辺に \( \Delta t \) を掛ける。</p>
\[ m\vec{v}\,'-m\vec{v}=\vec{F}\,\Delta t \]
<p><strong class="hit">運動量の変化は受けた力積に等しい</strong>。これが運動量と力積の関係である。運動方程式を時間で積み上げた式なので新しい法則ではない。力が時間とともに変化する場合も時間を細かく区切って各区間で同じ式を立て足し合わせれば同じ結論になる。</p>
<p>この式はベクトルの式である。一直線上の運動では正の向きを1つ定めて速度と力に符号を付ける。正の向きの決め方は自由であるが1つの問題の中では変えない。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>質量 0.15 kg のボールが速さ 40 m/s で水平に飛んできた。バットで打ち返すとボールは逆向きに速さ 50 m/s で飛んだ。ボールが受けた力積の大きさを求めよ。接触時間が \( 1.0\times10^{-3} \) s のときバットがボールに及ぼした平均の力の大きさも求めよ。</p>
<details open><summary>解き方</summary><div>手順1 打ち返した後の向きを正とする。打つ前の速度は −40 m/s で打った後は +50 m/s である。<br>手順2 力積＝運動量の変化＝ 0.15 × {50 − (−40)} ＝ 0.15 × 90 ＝ 13.5 N·s である。<br>手順3 平均の力＝力積 ÷ 時間＝ 13.5 ÷ (1.0×10<sup>−3</sup>) ＝ 1.35×10<sup>4</sup> N である。<br>答え 力積 13.5 N·s ／ 平均の力 1.35×10<sup>4</sup> N</div></details></div>

<p>典型的な誤りは速さの差 50 − 40 ＝ 10 を使い 1.5 N·s と答えることである。向きが逆になる場合は速度の符号が変わるので変化量は速さの和になる。もう1つの誤りは力積の向きを考えないことである。ボールが受けた力積の向きは打ち返した後の向きと同じである。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">捕球でグラブを引くのは力積の分割払いである</p>
<p>止めるのに必要な力積は球速で決まる。グラブを引いて時間を延ばすと同じ総額を小さな力で支払える。</p>
</aside>

<h2 id="s2">F−tグラフの面積と平均の力</h2>
<p>現実の衝突では力は一定ではない。ボールがバットに触れた瞬間から力は急に増え最大値に達してから0に戻る。この変化を横軸に時間・縦軸に力をとって描いたものが<strong>F−tグラフ</strong>である。</p>
<p>時間を幅 \( \Delta t_i \) の細い区間に分けると各区間では力を一定とみなせる。各区間の力積 \( F_i\Delta t_i \) は細い長方形の面積に等しい。それらを合計すると<strong class="hit">F−tグラフと時間軸で囲まれた面積が力積になる</strong>。v−tグラフの面積が変位を表したのと同じ構造である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 280" role="img" aria-label="力が時間とともに山形に変化するF−tグラフと面積が等しい長方形">
  <g stroke="var(--ink)" stroke-width="1.5"><line x1="80" y1="230" x2="650" y2="230"/><line x1="80" y1="230" x2="80" y2="24"/></g>
  <g stroke="var(--line)" stroke-width="1"><line x1="80" y1="180" x2="640" y2="180"/><line x1="80" y1="130" x2="640" y2="130"/><line x1="80" y1="80" x2="640" y2="80"/><line x1="80" y1="30" x2="640" y2="30"/></g>
  <g font-size="12" fill="var(--sub)" text-anchor="end"><text x="72" y="234">0</text><text x="72" y="184">500</text><text x="72" y="134">1000</text><text x="72" y="84">1500</text><text x="72" y="34">2000</text></g>
  <g font-size="12" fill="var(--sub)" text-anchor="middle"><text x="80" y="248">0</text><text x="192" y="248">2</text><text x="304" y="248">4</text><text x="416" y="248">6</text><text x="528" y="248">8</text><text x="640" y="248">10</text></g>
  <text x="660" y="248" font-size="12" fill="var(--muted)">時間 ms</text>
  <text x="86" y="18" font-size="12" fill="var(--muted)">力 N</text>
  <polygon points="136.0,230.0 147.2,218.2 158.4,206.5 169.6,195.0 180.8,183.6 192.0,172.6 203.2,161.9 214.4,151.6 225.6,141.8 236.8,132.6 248.0,123.9 259.2,115.9 270.4,108.6 281.6,102.1 292.8,96.3 304.0,91.4 315.2,87.3 326.4,84.1 337.6,81.8 348.8,80.5 360.0,80.0 371.2,80.5 382.4,81.8 393.6,84.1 404.8,87.3 416.0,91.4 427.2,96.3 438.4,102.1 449.6,108.6 460.8,115.9 472.0,123.9 483.2,132.6 494.4,141.8 505.6,151.6 516.8,161.9 528.0,172.6 539.2,183.6 550.4,195.0 561.6,206.5 572.8,218.2 584.0,230.0" fill="var(--warm)" fill-opacity="0.25" stroke="var(--warm)" stroke-width="2.2"/>
  <rect x="136" y="134.5" width="448" height="95.5" fill="none" stroke="var(--cool)" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="360" y="72" font-size="12.5" text-anchor="middle" fill="var(--warm)">最大 1500 N</text>
  <text x="596" y="138" font-size="12.5" fill="var(--cool)">平均 955 N</text>
  <text x="360" y="200" font-size="13" text-anchor="middle" font-weight="600" fill="var(--ink)">面積＝力積 約 7.6 N·s</text>
</svg>
<figcaption>接触時間8 msの間に力が最大1500 Nまで増えて0に戻る例である。曲線の下の面積が力積で約7.6 N·sである。同じ8 msで面積が等しい長方形の高さが平均の力で約955 Nになる。</figcaption>
</figure>

<p>同じ力積を同じ時間で与える一定の力を<strong>平均の力</strong>と呼ぶ。平均の力は力積を接触時間で割って求める。</p>
\[ \bar{F}=\frac{I}{\Delta t} \]
<p>運動量の変化が同じであれば接触時間を長くするほど平均の力は小さくなる。自動車のエアバッグ・体操競技のマット・卵を受け止めるときに手を引く動作はどれもこの関係を使う。止めるために必要な力積は変えられないので時間を延ばして力を小さくする。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>なめらかな水平面上で静止している質量 2.0 kg の物体に水平方向の力を加えた。力の大きさは 0 s から 0.20 s までに 0 N から 30 N まで一様に増え 0.20 s から 0.40 s までに 0 N まで一様に減った。0.40 s 後の物体の速さを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 F−tグラフは底辺 0.40 s・高さ 30 N の三角形である。<br>手順2 力積＝面積＝ ½ × 0.40 × 30 ＝ 6.0 N·s である。<br>手順3 初めは静止しているので 2.0 × v ＝ 6.0 から v ＝ 3.0 m/s である。<br>答え 3.0 m/s</div></details></div>

<p>典型的な誤りは最大の力 30 N に全時間 0.40 s を掛けて 12 N·s とすることである。力が変化する場合は必ず面積で求める。</p>

<h2 id="s3">運動量保存則と使える条件</h2>
<p>2つの物体AとBが衝突する場面を考える。衝突している短い時間 \( \Delta t \) の間にBはAに力 \( \vec{F} \) を及ぼす。作用反作用の法則によりAはBに力 \( -\vec{F} \) を及ぼす。2つの力は同じ時間だけ働くので各物体が受ける力積は次のとおりである。</p>
\[ m_A\vec{v}_A{}'-m_A\vec{v}_A=\vec{F}\,\Delta t \qquad m_B\vec{v}_B{}'-m_B\vec{v}_B=-\vec{F}\,\Delta t \]
<p>2式を足すと右辺が打ち消し合う。</p>
\[ m_A\vec{v}_A+m_B\vec{v}_B=m_A\vec{v}_A{}'+m_B\vec{v}_B{}' \]
<p><strong class="hit">物体どうしが及ぼし合う力だけが働く場合は運動量の和が変化しない</strong>。これを<strong>運動量保存則</strong>と呼ぶ。着目する物体の集まりを物体系と呼び系の内部で及ぼし合う力を内力・系の外から働く力を外力と呼ぶ。内力は必ず作用反作用の組で現れ力積の和は0になる。運動量の和を変えるのは外力の力積だけである。</p>
<h3>使える条件は3つの場合に整理できる</h3>
<div class="tb-tw"><table>
<thead><tr><th>場合</th><th>理由</th><th>例</th></tr></thead>
<tbody>
<tr><td>外力が働かない</td><td>外力の力積が0である</td><td>宇宙空間での物体の分裂</td></tr>
<tr><td>外力の和が0である</td><td>重力と垂直抗力がつり合っている</td><td>なめらかな水平面上の台車の衝突</td></tr>
<tr><td>外力の力積が内力の力積に比べて小さい</td><td>衝突時間が短く重力の力積 \( mg\Delta t \) が無視できる</td><td>空中での瞬間的な衝突・爆発</td></tr>
</tbody></table></div>
<p>さらに<strong>ある方向だけ</strong>外力が働かない場合はその方向の成分だけ運動量が保存する。たとえばなめらかな床の上で斜めに飛び込む人が台車に乗る場面では鉛直方向に床からの力が働くが水平方向には外力がない。この場合は水平成分だけで保存則を立てる。</p>
<p>運動量保存則は力学的エネルギーの保存とは別の法則である。衝突で熱や音が発生しても運動量の和は保存する。逆に摩擦のある床の上を物体がすべる場面では摩擦力が外力になり運動量は保存しない。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>質量 50 kg の人が静かな水面に浮かぶ質量 150 kg の静止したボートの上に立っている。人がボートに対してではなく水面に対して東向きに 3.0 m/s の速度で飛び出した。飛び出した直後のボートの速度を求めよ。水の抵抗は無視する。</p>
<details open><summary>解き方</summary><div>手順1 水平方向には外力が働かないので水平方向の運動量が保存する。東向きを正とする。<br>手順2 初めは全体が静止しているので運動量の和は0である。<br>手順3 0 ＝ 50 × 3.0 ＋ 150 × V から V ＝ −1.0 m/s である。<br>答え 西向きに 1.0 m/s</div></details></div>

<p>典型的な誤りは2つある。1つは負の符号を見落として向きを答えないことである。もう1つは速度の基準を混同することである。保存則に代入する速度は必ず地面や水面に対する速度である。問題が「ボートに対して」と書いていれば相対速度を地面基準に直してから代入する。</p>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">運動量保存則は連結決算の内部取引消去である</p>
<p>グループ会社間の売上と仕入は連結で相殺される。内力の力積も同じで系全体の運動量を変えるのは外部との取引にあたる外力だけである。</p>
</aside>

<h3>重心の速度</h3>
<p>系の運動量の和を全質量で割った量は重心の速度になる。</p>
\[ \vec{v}_G=\frac{m_A\vec{v}_A+m_B\vec{v}_B}{m_A+m_B} \]
<p>運動量が保存する場合は重心の速度が一定である。例題3では重心は静止したままである。人とボートは重心をはさんで逆向きに動く。</p>

<h2 id="s4">衝突と反発係数</h2>
<p>運動量保存則だけでは衝突後の2つの速度を決められない。未知数が2つで式が1つだからである。もう1つの式を与えるのが<strong>反発係数</strong>である。はね返り係数とも呼ぶ。</p>
<p>一直線上で2物体が衝突するとき衝突前の速度を \( v_A,\ v_B \) とし衝突後の速度を \( v_A{}',\ v_B{}' \) とする。反発係数 \( e \) を次の式で定める。</p>
\[ e=-\frac{v_A{}'-v_B{}'}{v_A-v_B} \]
<p>分母の \( v_A-v_B \) は衝突前にAがBに近づく速さである。分子の \( -(v_A{}'-v_B{}') \) は衝突後にBがAから遠ざかる速さである。<strong class="hit">反発係数は近づく速さに対する遠ざかる速さの比である</strong>。値は物体の材質と形で定まり \( 0\leqq e\leqq 1 \) の範囲にある。</p>
<p>床や壁のように動かない物体に衝突する場合は \( v_B=v_B{}'=0 \) なので次の式になる。</p>
\[ e=-\frac{v'}{v}=\frac{|v'|}{|v|} \]
<p>高さ \( h \) から自由落下させたボールが床ではね返り高さ \( h' \) まで上がった場合を考える。衝突直前の速さは \( \sqrt{2gh} \) で直後の速さは \( \sqrt{2gh'} \) である。したがって \( e=\sqrt{h'/h} \) となり \( h'=e^2h \) である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="一直線上の2球の衝突前後の速度">
  <defs><marker id="ah10a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker></defs>
  <text x="20" y="30" font-size="13" fill="var(--muted)">衝突前</text>
  <text x="20" y="160" font-size="13" fill="var(--muted)">衝突後</text>
  <g stroke="var(--line)" stroke-width="1.5"><line x1="40" y1="100" x2="690" y2="100"/><line x1="40" y1="230" x2="690" y2="230"/></g>
  <circle cx="200" cy="76" r="24" fill="var(--warm)"/><text x="200" y="81" font-size="13" fill="#fff" text-anchor="middle" font-weight="600">A</text>
  <circle cx="380" cy="82" r="18" fill="var(--cool)"/><text x="380" y="87" font-size="13" fill="#fff" text-anchor="middle" font-weight="600">B</text>
  <line x1="228" y1="76" x2="348" y2="76" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ah10a)"/>
  <text x="288" y="62" font-size="12.5" text-anchor="middle" fill="var(--ink)">3.0 m/s</text>
  <text x="200" y="40" font-size="12.5" text-anchor="middle" fill="var(--sub)">2.0 kg</text>
  <text x="380" y="52" font-size="12.5" text-anchor="middle" fill="var(--sub)">1.0 kg 静止</text>
  <circle cx="300" cy="206" r="24" fill="var(--warm)"/><text x="300" y="211" font-size="13" fill="#fff" text-anchor="middle" font-weight="600">A</text>
  <circle cx="470" cy="212" r="18" fill="var(--cool)"/><text x="470" y="217" font-size="13" fill="#fff" text-anchor="middle" font-weight="600">B</text>
  <line x1="328" y1="206" x2="388" y2="206" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ah10a)"/>
  <line x1="492" y1="212" x2="612" y2="212" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ah10a)"/>
  <text x="358" y="190" font-size="12.5" text-anchor="middle" fill="var(--ink)">1.5 m/s</text>
  <text x="552" y="196" font-size="12.5" text-anchor="middle" fill="var(--ink)">3.0 m/s</text>
  <text x="560" y="140" font-size="12.5" text-anchor="middle" fill="var(--sub)">e＝0.50 のとき</text>
</svg>
<figcaption>矢印の長さは速さに比例する。衝突前の運動量の和は 2.0×3.0＝6.0 kg·m/s で衝突後も 2.0×1.5＋1.0×3.0＝6.0 kg·m/s である。近づく速さ 3.0 m/s に対し遠ざかる速さは 1.5 m/s で比は0.50である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 4</div>
<p>なめらかな水平面上で速度 3.0 m/s で進む質量 2.0 kg の小球Aが静止している質量 1.0 kg の小球Bに正面衝突した。反発係数を 0.50 として衝突後のAとBの速度を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 Aの進む向きを正とする。運動量保存則より 2.0 × 3.0 ＝ 2.0 v<sub>A</sub>′ ＋ 1.0 v<sub>B</sub>′ である。<br>手順2 反発係数の式より v<sub>B</sub>′ − v<sub>A</sub>′ ＝ 0.50 × (3.0 − 0) ＝ 1.5 である。<br>手順3 2式から v<sub>B</sub>′ を消去すると 6.0 ＝ 3.0 v<sub>A</sub>′ ＋ 1.5 となり v<sub>A</sub>′ ＝ 1.5 m/s である。<br>手順4 v<sub>B</sub>′ ＝ 1.5 ＋ 1.5 ＝ 3.0 m/s である。<br>答え A は正の向きに 1.5 m/s ／ B は正の向きに 3.0 m/s</div></details></div>

<p>典型的な誤りは反発係数の式の符号である。分母と分子の引き算の順序をそろえて先頭に負の符号を付ける。迷ったら「遠ざかる速さ＝ e ×近づく速さ」と言葉で立てると符号を誤らない。</p>

<h2 id="s5">弾性衝突と非弾性衝突でのエネルギー</h2>
<p>反発係数の値で衝突を3つに分類する。</p>
<div class="tb-tw"><table>
<thead><tr><th>分類</th><th>反発係数</th><th>運動エネルギーの和</th></tr></thead>
<tbody>
<tr><td>弾性衝突 ／ 完全弾性衝突</td><td>\( e=1 \)</td><td>保存する</td></tr>
<tr><td>非弾性衝突</td><td>\( 0\lt e\lt 1 \)</td><td>減少する</td></tr>
<tr><td>完全非弾性衝突</td><td>\( e=0 \)</td><td>減少量が最大になる。2物体は一体となって動く</td></tr>
</tbody></table></div>
<p>例題4の運動エネルギーを確かめる。衝突前は \( \frac{1}{2}\times2.0\times3.0^2=9.0 \) J である。衝突後は \( \frac{1}{2}\times2.0\times1.5^2+\frac{1}{2}\times1.0\times3.0^2=2.25+4.5=6.75 \) J である。2.25 J が減少した。減少分は物体の変形・熱・音のエネルギーになる。<strong class="hit">運動量は保存するが運動エネルギーは \( e=1 \) のときしか保存しない</strong>。2つの保存則を混同しないことがこの単元の要点である。</p>
<p>運動エネルギーの減少量は一般に次の式で表せる。導出は2式から衝突後の速度を求めて代入すれば得られる。</p>
\[ \Delta K=\frac{1}{2}\cdot\frac{m_Am_B}{m_A+m_B}\,(1-e^2)\,(v_A-v_B)^2 \]
<p>例題4に当てはめると \( \frac{1}{2}\times\frac{2}{3}\times0.75\times9.0=2.25 \) J で一致する。\( e=1 \) なら減少量は0である。\( e=0 \) なら減少量が最大になる。</p>
<h3>質量の等しい2物体の弾性衝突</h3>
<p>質量の等しい2物体が \( e=1 \) で正面衝突すると速度が入れ替わる。静止した球に同じ質量の球が当たると当てた球は静止し当てられた球が同じ速度で進む。運動量保存則 \( v_A+v_B=v_A{}'+v_B{}' \) と反発係数の式 \( v_A{}'-v_B{}'=-(v_A-v_B) \) を連立すると \( v_A{}'=v_B \) と \( v_B{}'=v_A \) が得られる。</p>

<h3>分裂と合体</h3>
<p>静止していた物体が内力で2つに分裂する場合は運動量の和が0のまま保存する。分裂後は \( m_1v_1+m_2v_2=0 \) なので2つの破片は逆向きに飛ぶ。速さの比は質量の逆比 \( v_1:v_2=m_2:m_1 \) である。運動エネルギー \( K=\frac{p^2}{2m} \) で運動量の大きさが等しいので<strong>運動エネルギーの比も質量の逆比</strong>になる。分裂では火薬やばねの位置エネルギーが運動エネルギーに変わるので運動エネルギーの和は増える。</p>
<p>2つの物体が衝突して一体になる合体は完全非弾性衝突である。一体となった後の速度は運動量保存則だけで決まる。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>質量 0.010 kg の弾丸が速さ 400 m/s で水平に飛び なめらかな水平面上で静止している質量 1.99 kg の木片に打ち込まれて一体となった。一体となった後の速さと失われた運動エネルギーを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 運動量保存則より 0.010 × 400 ＝ (0.010 ＋ 1.99) V で V ＝ 4.0 ÷ 2.00 ＝ 2.0 m/s である。<br>手順2 衝突前の運動エネルギーは ½ × 0.010 × 400<sup>2</sup> ＝ 800 J である。<br>手順3 衝突後は ½ × 2.00 × 2.0<sup>2</sup> ＝ 4.0 J である。<br>答え 2.0 m/s ／ 失われたのは 796 J</div></details></div>

<p>弾丸の運動エネルギーの99％以上が熱と変形に変わる。運動量保存則から速度を求めた後で力学的エネルギー保存則を使って木片の上がる高さを求める問題が頻出である。衝突の瞬間には力学的エネルギー保存則を使わず衝突後の振り子の運動にだけ使う。この区別が典型的な誤りの分かれ目である。</p>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">完全非弾性衝突は交際の開始である</p>
<p>2人は以後同じ速度で進み運動量の和は保存する。失われるのは個人の運動エネルギーの一部である。</p>
</aside>

<h2 id="s6">平面での衝突</h2>
<p>運動量はベクトルなので平面内の衝突でも運動量保存則はそのまま成り立つ。計算では x 成分と y 成分に分けて2本の式を立てる。</p>
\[ m_Av_{Ax}+m_Bv_{Bx}=m_Av_{Ax}{}'+m_Bv_{Bx}{}' \qquad m_Av_{Ay}+m_Bv_{By}=m_Av_{Ay}{}'+m_Bv_{By}{}' \]
<p>図で考える場合は衝突前の運動量の和のベクトルと衝突後の各運動量のベクトルの和が一致するように矢印をつなぐ。衝突後の2つのベクトルと衝突前のベクトルが三角形をつくる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="平面での衝突と運動量のベクトルの三角形">
  <defs>
    <marker id="ah10b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah10c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
    <marker id="ah10d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker>
  </defs>
  <text x="20" y="24" font-size="13" fill="var(--muted)">衝突の様子</text>
  <text x="400" y="24" font-size="13" fill="var(--muted)">運動量のベクトルの三角形</text>
  <line x1="40" y1="140" x2="168" y2="140" stroke="var(--ink)" stroke-width="2.2" marker-end="url(#ah10d)"/>
  <text x="90" y="128" font-size="12.5" text-anchor="middle">A 4.0 m/s</text>
  <circle cx="190" cy="140" r="14" fill="var(--cool)" fill-opacity="0.85"/><text x="190" y="170" font-size="12.5" text-anchor="middle">B 静止</text>
  <line x1="190" y1="140" x2="230" y2="70.7" stroke="var(--warm)" stroke-width="2.2" marker-end="url(#ah10b)"/>
  <text x="240" y="66" font-size="12.5" fill="var(--warm)">A 2.0 m/s 60°</text>
  <line x1="190" y1="140" x2="310" y2="209.3" stroke="var(--cool)" stroke-width="2.2" marker-end="url(#ah10c)"/>
  <text x="250" y="232" font-size="12.5" fill="var(--cool)">B 3.5 m/s 30°</text>
  <line x1="190" y1="140" x2="330" y2="140" stroke="var(--line)" stroke-dasharray="4 4"/>
  <line x1="430" y1="200" x2="670" y2="200" stroke="var(--ink)" stroke-width="2.4" marker-end="url(#ah10d)"/>
  <line x1="430" y1="200" x2="490" y2="96.1" stroke="var(--warm)" stroke-width="2.4" marker-end="url(#ah10b)"/>
  <line x1="490" y1="96.1" x2="670" y2="200" stroke="var(--cool)" stroke-width="2.4" marker-end="url(#ah10c)"/>
  <text x="550" y="222" font-size="12.5" text-anchor="middle">衝突前の和 4.0</text>
  <text x="440" y="140" font-size="12.5" text-anchor="end" fill="var(--warm)">A後 2.0</text>
  <text x="600" y="136" font-size="12.5" fill="var(--cool)">B後 3.5</text>
  <text x="491" y="140" font-size="12" text-anchor="middle" fill="var(--sub)">直角</text>
  <path d="M 502.1 103.1 L 495.1 115.2 L 483 108.2" fill="none" stroke="var(--sub)"/>
</svg>
<figcaption>質量1.0 kgの等しい2球の弾性衝突である。Aは60°の向きへ2.0 m/sで進みBは反対側30°の向きへ約3.5 m/sで進む。右の三角形は衝突前の運動量が衝突後の2つの運動量の和に等しいことを示す。質量の等しい弾性衝突では2つの速度のなす角が直角になる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 6</div>
<p>なめらかな水平面上で x 軸の正の向きに 4.0 m/s で進む質量 1.0 kg の球Aが静止している質量 1.0 kg の球Bに衝突した。衝突後Aは x 軸から 60° の向きに 2.0 m/s で進んだ。衝突後のBの速度の x 成分と y 成分を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 衝突後のAの成分は x 成分 2.0 cos 60° ＝ 1.0 m/s・y 成分 2.0 sin 60° ＝ 1.73 m/s である。<br>手順2 x 成分の保存則 1.0 × 4.0 ＝ 1.0 × 1.0 ＋ 1.0 × v<sub>Bx</sub>′ から v<sub>Bx</sub>′ ＝ 3.0 m/s である。<br>手順3 y 成分の保存則 0 ＝ 1.0 × 1.73 ＋ 1.0 × v<sub>By</sub>′ から v<sub>By</sub>′ ＝ −1.73 m/s である。<br>手順4 速さは √(3.0<sup>2</sup> ＋ 1.73<sup>2</sup>) ＝ √12 ≒ 3.5 m/s で x 軸から −30° の向きである。<br>答え x 成分 3.0 m/s ／ y 成分 −1.7 m/s</div></details></div>

<p>運動エネルギーを確かめると衝突前は 8.0 J で衝突後は 2.0 ＋ 6.0 ＝ 8.0 J である。この衝突は弾性衝突である。</p>
<h3>なめらかな面への斜めの衝突</h3>
<p>ボールがなめらかな床に斜めに当たる場合は床に平行な方向には力が働かない。<strong class="hit">床に平行な成分は変化せず垂直な成分だけが向きを変えて e 倍になる</strong>。入射角 \( \theta \) で速さ \( v \) のボールがはね返ると平行成分は \( v\sin\theta \) のままで垂直成分は \( ev\cos\theta \) になる。\( e\lt 1 \) なら反射後は床に対して寝た向きに進む。</p>
<p>典型的な誤りは速さ全体に e を掛けることである。e が掛かるのは面に垂直な成分だけである。</p>

<h2 id="s7">現実世界の運動量</h2>
<p>運動量の考え方は工学と競技規則の両方で数値として使われる。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>日本野球機構は試合球の反発係数を検査している。2015年からは反発係数の目標値を0.4134とした。それ以前は平均値が0.4034から0.4234の範囲に入ることを基準とした。2013年には基準を満たすよう球を調整した事実を公表せずに変更して問題になった。反発係数は球を板に当てたときの衝突前後の速さの比として求める。</p>
<p>ロケットは燃焼ガスを後方へ高速で噴射し その反作用で前に進む。宇宙空間には押し返す空気がない。ロケットと噴射ガスを合わせた系の運動量が保存することだけで加速が説明できる。</p>
</aside>

<h2 id="s8">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 力積の計算</div>
<p class="qz-q">質量 0.50 kg の物体が東向きに 6.0 m/s で進んでいる。ある力積を受けて西向きに 2.0 m/s で進むようになった。受けた力積として正しいものを1つ選べ。</p>
<ol><li>東向きに 2.0 N·s</li><li>西向きに 2.0 N·s</li><li>西向きに 4.0 N·s</li><li>東向きに 4.0 N·s</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。東向きを正とすると運動量の変化は 0.50 × (−2.0 − 6.0) ＝ −4.0 N·s である。負なので向きは西向きである。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ F−tグラフ</div>
<p class="qz-q">静止している質量 4.0 kg の物体に一直線上で力を加えた。0 s から 2.0 s までは 6.0 N の一定の力を加え 2.0 s から 4.0 s までは逆向きに 2.0 N の一定の力を加えた。4.0 s 後の物体の速さ [m/s] を求めよ。摩擦は無視する。</p>
<details><summary>解答と解説</summary><div>答えは 2.0 m/s である。力積の和は 6.0 × 2.0 − 2.0 × 2.0 ＝ 8.0 N·s である。4.0 × v ＝ 8.0 から v ＝ 2.0 m/s である。F−tグラフで時間軸より下の面積は負の力積として差し引く。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 運動量保存則の条件</div>
<p class="qz-q">運動量の和が保存しないものを1つ選べ。物体系は各選択肢に現れる物体すべてとする。</p>
<ol><li>なめらかな水平面上で衝突する2台の台車</li><li>空中で爆発して2つに分かれる花火玉の直前と直後</li><li>粗い水平面上をすべって減速する1個の木片</li><li>宇宙空間でばねを押し縮めてから離れる2つの物体</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。粗い面では動摩擦力が外力として働き続け木片の運動量を減らす。2 は重力が働くが爆発の時間は短く重力の力積は無視できる。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 反発係数と衝突後の速度</div>
<p class="qz-q">なめらかな水平面上で右向きに 4.0 m/s で進む質量 1.0 kg の球Aが右向きに 1.0 m/s で進む質量 2.0 kg の球Bに追突した。反発係数を 0.50 とする。衝突後のBの速さ [m/s] を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 2.5 m/s である。右向きを正とする。運動量保存則 1.0×4.0 ＋ 2.0×1.0 ＝ 6.0 ＝ v<sub>A</sub>′ ＋ 2.0 v<sub>B</sub>′ である。反発係数より v<sub>B</sub>′ − v<sub>A</sub>′ ＝ 0.50 × (4.0 − 1.0) ＝ 1.5 である。代入すると 6.0 ＝ (v<sub>B</sub>′ − 1.5) ＋ 2.0 v<sub>B</sub>′ で v<sub>B</sub>′ ＝ 2.5 m/s である。v<sub>A</sub>′ ＝ 1.0 m/s で A も右向きに進む。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 床でのはね返り</div>
<p class="qz-q">高さ 1.6 m から静かに放したボールがなめらかな床ではね返り 0.90 m の高さまで上がった。床とボールの反発係数として正しいものを1つ選べ。</p>
<ol><li>0.56</li><li>0.75</li><li>0.80</li><li>0.94</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。e ＝ √(h′/h) ＝ √(0.90/1.6) ＝ √0.5625 ＝ 0.75 である。高さの比 0.5625 をそのまま答える誤りが 1 である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 分裂の運動エネルギー</div>
<p class="qz-q">なめらかな水平面上で静止していた物体が内部のばねによって質量 1.0 kg の部分と質量 3.0 kg の部分に分裂した。分裂で解放されたエネルギーは 24 J でそのすべてが運動エネルギーになった。質量 1.0 kg の部分の運動エネルギー [J] を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 18 J である。運動量の大きさが等しいので運動エネルギーは質量に反比例し 1.0 kg 側と 3.0 kg 側の比は 3:1 である。24 × 3/4 ＝ 18 J である。検算すると 1.0 kg 側の速さは 6.0 m/s で 3.0 kg 側は 2.0 m/s となり運動量はどちらも 6.0 kg·m/s で等しい。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 斜めの衝突</div>
<p class="qz-q">なめらかな床に速さ 10 m/s のボールが床と 30° の角をなして斜めに当たった。反発係数が 0.60 のときはね返った直後の速度の床に平行な成分と垂直な成分の組み合わせとして正しいものを1つ選べ。</p>
<ol><li>平行 8.7 m/s ・ 垂直 3.0 m/s</li><li>平行 5.2 m/s ・ 垂直 3.0 m/s</li><li>平行 8.7 m/s ・ 垂直 5.0 m/s</li><li>平行 5.0 m/s ・ 垂直 5.2 m/s</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。床と 30° なので平行成分は 10 cos 30° ≒ 8.7 m/s で垂直成分は 10 sin 30° ＝ 5.0 m/s である。床はなめらかなので平行成分は変化しない。垂直成分だけが 0.60 倍になり 3.0 m/s になる。2 は平行成分にも e を掛けた誤りである。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
運動量 \( \vec{p}=m\vec{v} \) ／ 力積 \( \vec{F}\Delta t \)。運動量の変化は受けた力積に等しい。<br>
力が変化する場合の力積はF−tグラフの面積である。平均の力は力積を時間で割る。<br>
内力の力積は打ち消し合うので外力の力積が0なら運動量の和は保存する。成分ごとにも成り立つ。<br>
反発係数は遠ざかる速さを近づく速さで割った値で 0 ≦ e ≦ 1 である。床では h′＝e²h となる。<br>
運動エネルギーが保存するのは e＝1 のときだけである。分裂では運動エネルギーが質量の逆比に分かれる。<br>
斜めの衝突は成分に分ける。なめらかな面では平行成分は不変で垂直成分だけが e 倍になる。</div>

<h2 id="s10">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>反発係数を、物体の材質と形で定まる定数とみなしてよいか。</strong> 本文は反発係数の値を物体の材質と形で定まるとして衝突後の速度を求めた。一方で日本野球機構は試合球の反発係数を検査して目標値を定めており、同じ規格の球でも値に差が生じることを前提としている。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>大学入試センター 令和7年度以降の試験の出題教科・科目 — https://www.dnc.ac.jp/kyotsu/shiken_jouhou/r7/</li>
<li>日本野球機構 試合球の反発係数に関するお知らせ 2015年2月3日 — https://npb.jp/npb/20150203release.html</li>
<li>Momentum — Wikipedia — https://en.wikipedia.org/wiki/Momentum</li>
<li>Coefficient of restitution — Wikipedia — https://en.wikipedia.org/wiki/Coefficient_of_restitution</li>
<li>Elastic collision — Wikipedia — https://en.wikipedia.org/wiki/Elastic_collision</li>
<li>Tsiolkovsky rocket equation — Wikipedia — https://en.wikipedia.org/wiki/Tsiolkovsky_rocket_equation</li>
<li>J-CAST ニュース こっそり「飛ぶボール」に変更 日本野球機構ダンマリの「なぜ」 2013年6月12日 — https://www.j-cast.com/2013/06/12177139.html</li>
</ol>
