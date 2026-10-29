<!--meta
{"chapter": 5, "part": "数学C", "title": "複素数平面", "thesis": "複素数 a+bi を平面上の点 (a, b) として描くと計算が図形の操作になる。足し算は平行移動であり掛け算は回転と拡大である。この対応から ド・モアブルの定理と1の n 乗根と図形の問題が1つの見方で解ける。", "verify": {"date": "2026-10-15", "checked": 42, "match": 40, "fixed": 2, "unconfirmed": 0}}
-->
<p>第1章から第4章ではベクトルを矢印として扱い成分で計算した。この章では数学Ⅱで学んだ複素数を平面上の点として描く。複素数 \(a+bi\) を点 \((a,b)\) に対応させると複素数の和は第1章のベクトルの和と同じ平行四辺形になる。ベクトルにない新しい操作が積である。複素数の積は点を回転させて拡大する操作になる。</p>
<p>共通テストの「数学Ⅱ・数学B・数学C」では数列・統計的な推測・ベクトル・平面上の曲線と複素数平面の4題から3題を選ぶ。複素数平面の題で問われる論点は主に5つである。絶対値と共役の計算・極形式・積と商の図形的意味・ド・モアブルの定理と累乗根・回転を使った図形の問題である。この章はこの順に積み上げる。</p>

<h2 id="s1">複素数の復習</h2>
<p>2乗すると \(-1\) になる数を<strong>虚数単位</strong>と呼び \(i\) で表す。\(i^2=-1\) である。実数 \(a, b\) を使って \(a+bi\) の形で表される数を<strong>複素数</strong>と呼ぶ。\(a\) を実部・\(b\) を虚部と呼ぶ。\(b=0\) なら実数であり \(b\neq 0\) の複素数を虚数と呼ぶ。\(a=0\) かつ \(b\neq 0\) の数 \(bi\) を純虚数と呼ぶ。</p>
<p>2つの複素数が等しいのは実部どうしと虚部どうしがそれぞれ等しいときに限る。</p>
\[ a+bi=c+di \iff a=c \text{ かつ } b=d \]
<p>四則計算は \(i\) を文字として扱い \(i^2\) が現れたら \(-1\) に置き換える。割り算は分母の<strong>共役複素数</strong>を分母と分子に掛けて分母を実数にする。\(a+bi\) の共役複素数は \(a-bi\) である。理由は次の積が実数になるからである。</p>
\[ (a+bi)(a-bi)=a^2-(bi)^2=a^2+b^2 \]

<div class="ex"><div class="ex-h">例題 1</div>
<p>\((2+3i)(1-2i)\) と \(\dfrac{3+i}{1-i}\) を \(a+bi\) の形で表せ。</p>
<details open><summary>解き方</summary><div>積を展開する。\(2-4i+3i-6i^2\) である。<br>\(i^2=-1\) を代入して \(2+6-i=8-i\) を得る。<br>商は分母と分子に \(1+i\) を掛ける。分母は \(1^2+1^2=2\) である。<br>分子は \((3+i)(1+i)=3+3i+i+i^2=2+4i\) である。<br>答えは \(8-i\) と \(\dfrac{2+4i}{2}=1+2i\) である。</div></details></div>

<p>典型的な誤りは負の数の平方根の積である。\(\sqrt{-2}\,\sqrt{-3}\) は \(\sqrt{6}\) ではない。\(\sqrt{-2}=\sqrt{2}\,i\) と書き直してから掛けると \(\sqrt{2}\,i\cdot\sqrt{3}\,i=\sqrt{6}\,i^2=-\sqrt{6}\) になる。\(\sqrt{a}\sqrt{b}=\sqrt{ab}\) は \(a, b\) が負でないときだけ成り立つ規則である。</p>

<p>複素数を使うと実数係数の2次方程式 \(ax^2+bx+c=0\) はいつも解をもつ。判別式 \(D=b^2-4ac\) が負のとき解は \(\dfrac{-b\pm\sqrt{-D}\,i}{2a}\) で互いに共役な2つの虚数になる。実数係数の方程式では \(\alpha\) が解なら \(\bar{\alpha}\) も解である。方程式の両辺の共役をとっても係数は実数なので変わらないからである。この性質は3次以上の実数係数の方程式でも成り立つ。</p>

<h2 id="s2">複素数平面と絶対値と共役</h2>
<p>複素数 \(z=a+bi\) を座標平面の点 \((a,b)\) に対応させる。この平面を<strong>複素数平面</strong>と呼ぶ。横軸を実軸・縦軸を虚軸と呼ぶ。実数は実軸上の点であり純虚数は原点を除く虚軸上の点である。</p>
<p>原点 O から点 \(z\) までの距離を \(z\) の<strong>絶対値</strong>と呼び \(|z|\) で表す。三平方の定理から次の式が成り立つ。</p>
\[ |z|=|a+bi|=\sqrt{a^2+b^2} \]
<p>共役複素数 \(\bar{z}=a-bi\) は点 \(z\) を実軸に関して対称に移した点である。\(-z\) は原点に関して対称な点である。第1節の計算 \((a+bi)(a-bi)=a^2+b^2\) は次の形で使う。</p>
\[ z\bar{z}=|z|^2 \]

<figure class="tb-fig">
<svg viewBox="0 0 720 320" role="img" aria-label="複素数平面上の z と共役複素数とマイナス z">
  <defs><marker id="ah05a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker></defs>
  <g stroke="var(--line)" stroke-width="1">
    <line x1="130" y1="40" x2="130" y2="280"/><line x1="170" y1="40" x2="170" y2="280"/><line x1="210" y1="40" x2="210" y2="280"/><line x1="250" y1="40" x2="250" y2="280"/><line x1="290" y1="40" x2="290" y2="280"/>
    <line x1="370" y1="40" x2="370" y2="280"/><line x1="410" y1="40" x2="410" y2="280"/><line x1="450" y1="40" x2="450" y2="280"/><line x1="490" y1="40" x2="490" y2="280"/><line x1="530" y1="40" x2="530" y2="280"/>
    <line x1="110" y1="40" x2="550" y2="40"/><line x1="110" y1="80" x2="550" y2="80"/><line x1="110" y1="120" x2="550" y2="120"/><line x1="110" y1="200" x2="550" y2="200"/><line x1="110" y1="240" x2="550" y2="240"/><line x1="110" y1="280" x2="550" y2="280"/>
  </g>
  <line x1="100" y1="160" x2="560" y2="160" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="330" y1="300" x2="330" y2="22" stroke="var(--ink)" stroke-width="1.5"/>
  <text x="566" y="165" font-size="13" fill="var(--ink)">実軸</text>
  <text x="338" y="22" font-size="13" fill="var(--ink)">虚軸</text>
  <g font-size="12" fill="var(--muted)" text-anchor="middle">
    <text x="370" y="176">1</text><text x="410" y="176">2</text><text x="450" y="176">3</text><text x="250" y="176">−2</text><text x="210" y="176">−3</text>
  </g>
  <g font-size="12" fill="var(--muted)" text-anchor="end">
    <text x="324" y="124">i</text><text x="324" y="84">2i</text><text x="324" y="244">−2i</text><text x="322" y="176">O</text>
  </g>
  <g stroke="var(--sub)" stroke-dasharray="4 4" fill="none">
    <line x1="450" y1="80" x2="450" y2="240"/><line x1="330" y1="80" x2="450" y2="80"/>
    <line x1="210" y1="240" x2="450" y2="80"/>
  </g>
  <line x1="330" y1="160" x2="447" y2="82" stroke="var(--warm)" stroke-width="2.5" marker-end="url(#ah05a)"/>
  <circle cx="450" cy="80" r="5" fill="var(--warm)"/>
  <circle cx="450" cy="240" r="5" fill="var(--cool)"/>
  <circle cx="210" cy="240" r="5" fill="var(--accent)"/>
  <g font-size="13" font-weight="600">
    <text x="460" y="74" fill="var(--warm)">z = 3 + 2i</text>
    <text x="460" y="258" fill="var(--cool)">共役 3 − 2i</text>
    <text x="140" y="262" fill="var(--accent)">−z = −3 − 2i</text>
  </g>
  <text x="388" y="104" font-size="13" fill="var(--warm)" text-anchor="end">|z| = √13</text>
  <g font-size="12.5" fill="var(--sub)">
    <text x="580" y="90">共役は実軸で折り返す</text>
    <text x="580" y="110">−z は原点で反転する</text>
    <text x="580" y="130">|z| は原点からの距離</text>
  </g>
</svg>
<figcaption>点 z＝3＋2i の共役複素数は実軸に関して対称な点 3−2i である。−z は原点に関して対称な点である。原点から z までの距離が絶対値で √(9＋4)＝√13 である。</figcaption>
</figure>

<p>和と差は成分ごとの計算なので第1章のベクトルの和と差と一致する。\(z+w\) は O と \(z\) と \(w\) を3頂点とする平行四辺形の第4の頂点である。<strong class="hit">2点 \(z, w\) の距離は \(|z-w|\) である</strong>。この1行が円や垂直二等分線の方程式の出発点になる。</p>
<p>共役複素数には次の性質がある。証明は \(z=a+bi\) と \(w=c+di\) を代入して両辺を比べればよい。</p>
\[ \overline{z+w}=\bar{z}+\bar{w},\qquad \overline{zw}=\bar{z}\,\bar{w},\qquad \overline{\left(\frac{z}{w}\right)}=\frac{\bar{z}}{\bar{w}} \]
<p>実数と純虚数の判定にも共役を使う。\(z\) が実数であることと \(\bar{z}=z\) は同値である。\(z\) が純虚数であることと \(\bar{z}=-z\) かつ \(z\neq 0\) は同値である。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>2点 \(\alpha=1+2i\) と \(\beta=4-2i\) の距離を求めよ。また \(|z|=1\) のとき \(\dfrac{1}{z}=\bar{z}\) であることを示せ。</p>
<details open><summary>解き方</summary><div>\(\beta-\alpha=3-4i\) である。<br>距離は \(|3-4i|=\sqrt{9+16}=5\) である。<br>後半は \(z\bar{z}=|z|^2=1\) から始める。<br>両辺を \(z\) で割ると \(\bar{z}=\dfrac{1}{z}\) を得る。</div></details></div>

<p>和の絶対値については<strong>三角不等式</strong> \(|z+w|\leqq|z|+|w|\) が成り立つ。O と \(z\) と \(z+w\) を頂点とする三角形の2辺の和が他の1辺以上であることを式にしたものである。等号は \(z\) と \(w\) が原点から同じ向きにあるときに成り立つ。</p>
<div class="ex"><div class="ex-h">例題 3</div>
<p>\(z\neq 0\) とする。\(z+\dfrac{1}{z}\) が実数になるための条件を求めよ。</p>
<details open><summary>解き方</summary><div>実数であることは共役と等しいことと同値である。\(\bar{z}+\dfrac{1}{\bar{z}}=z+\dfrac{1}{z}\) を変形する。<br>移項して \((z-\bar{z})-\dfrac{z-\bar{z}}{z\bar{z}}=0\) である。<br>\(z\bar{z}=|z|^2\) を使い \((z-\bar{z})\left(1-\dfrac{1}{|z|^2}\right)=0\) と因数分解する。<br>\(z=\bar{z}\) または \(|z|=1\) である。<br>答えは z が0でない実数であるか z が原点を中心とする半径1の円周上にあることである。</div></details></div>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">共役複素数は打席を左右で入れ替えた打者である</p>
<p>実軸がホームから二塁への線なら共役は同じ打球を左右反転させた位置である。飛距離に相当する絶対値は変わらない。</p>
</aside>

<h2 id="s3">極形式</h2>
<p>点 \(z\) の位置は直交座標 \((a,b)\) だけでなく原点からの距離 \(r\) と実軸の正の向きから測った角 \(\theta\) でも決まる。\(r=|z|\) であり \(\theta\) を \(z\) の<strong>偏角</strong>と呼び \(\arg z\) で表す。三角比の定義から \(a=r\cos\theta\) と \(b=r\sin\theta\) が成り立つ。代入すると次の形になる。これを<strong>極形式</strong>と呼ぶ。</p>
\[ z=r(\cos\theta+i\sin\theta)\qquad (r>0) \]
<p>偏角は \(2\pi\) の整数倍だけ異なる値を同じ向きとみなす。範囲を指定されない限り \(0\leqq\theta<2\pi\) か \(-\pi<\theta\leqq\pi\) の1つを答える。\(z=0\) の偏角は定めない。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="z が 1 足す ルート3 i のときの絶対値 2 と偏角 60 度">
  <defs><marker id="ah05b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker></defs>
  <line x1="200" y1="250" x2="500" y2="250" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="260" y1="280" x2="260" y2="40" stroke="var(--ink)" stroke-width="1.5"/>
  <text x="506" y="255" font-size="13">実軸</text><text x="268" y="40" font-size="13">虚軸</text>
  <g font-size="12" fill="var(--muted)" text-anchor="middle"><text x="350" y="268">1</text><text x="440" y="268">2</text><text x="252" y="268">O</text></g>
  <g font-size="12" fill="var(--muted)" text-anchor="end"><text x="254" y="164">i</text><text x="254" y="74">2i</text></g>
  <g stroke="var(--line)"><line x1="255" y1="160" x2="265" y2="160"/><line x1="255" y1="70" x2="265" y2="70"/><line x1="350" y1="245" x2="350" y2="255"/><line x1="440" y1="245" x2="440" y2="255"/></g>
  <path d="M440 250 A180 180 0 0 0 350 94.1" fill="none" stroke="var(--line)" stroke-dasharray="3 4"/>
  <g stroke="var(--sub)" stroke-dasharray="4 4"><line x1="350" y1="94.1" x2="350" y2="250"/><line x1="260" y1="94.1" x2="350" y2="94.1"/></g>
  <line x1="260" y1="250" x2="348.5" y2="96.7" stroke="var(--warm)" stroke-width="2.5" marker-end="url(#ah05b)"/>
  <circle cx="350" cy="94.1" r="5" fill="var(--warm)"/>
  <path d="M300 250 A40 40 0 0 0 280 215.4" fill="none" stroke="var(--cool)" stroke-width="2"/>
  <text x="290" y="242" font-size="13" fill="var(--cool)">θ = 60°</text>
  <text x="280" y="160" font-size="13" fill="var(--warm)">r = 2</text>
  <text x="243" y="99" font-size="12" fill="var(--muted)" text-anchor="end">√3</text>
  <text x="360" y="88" font-size="13" font-weight="600" fill="var(--warm)">z = 1 + √3 i</text>
  <g font-size="13" fill="var(--ink)">
    <text x="520" y="110">直交形式 z = 1 + √3 i</text>
    <text x="520" y="140">r = √(1 + 3) = 2</text>
    <text x="520" y="170">cos θ = 1/2  sin θ = √3/2</text>
    <text x="520" y="200">極形式 2(cos 60° + i sin 60°)</text>
  </g>
</svg>
<figcaption>z＝1＋√3i は原点から距離2で実軸から60°回った位置にある。点線は半径2の円弧である。直交形式の成分 1 と √3 はそれぞれ 2cos60° と 2sin60° に等しい。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 4</div>
<p>\(-1+i\) と \(-2\sqrt{3}-2i\) を極形式で表せ。偏角は \(0\leqq\theta<2\pi\) とする。</p>
<details open><summary>解き方</summary><div>\(|-1+i|=\sqrt{2}\) である。<br>\(\cos\theta=-\dfrac{1}{\sqrt{2}}\) かつ \(\sin\theta=\dfrac{1}{\sqrt{2}}\) から \(\theta=\dfrac{3}{4}\pi\) である。<br>答えは \(\sqrt{2}\left(\cos\dfrac{3}{4}\pi+i\sin\dfrac{3}{4}\pi\right)\) である。<br>\(|-2\sqrt{3}-2i|=\sqrt{12+4}=4\) である。<br>\(\cos\theta=-\dfrac{\sqrt{3}}{2}\) かつ \(\sin\theta=-\dfrac{1}{2}\) から \(\theta=\dfrac{7}{6}\pi\) である。<br>答えは \(4\left(\cos\dfrac{7}{6}\pi+i\sin\dfrac{7}{6}\pi\right)\) である。</div></details></div>

<p>典型的な誤りは2つある。1つ目は \(\tan\theta=\dfrac{b}{a}\) だけで偏角を決めることである。\(-1+i\) と \(1-i\) はどちらも \(\tan\theta=-1\) であるが偏角は \(\dfrac{3}{4}\pi\) と \(\dfrac{7}{4}\pi\) で異なる。点がどの象限にあるかを必ず確認する。2つ目は \(-2(\cos\theta+i\sin\theta)\) を極形式とみなすことである。\(r\) は正でなければならない。\(-1=\cos\pi+i\sin\pi\) を使い \(2(\cos(\theta+\pi)+i\sin(\theta+\pi))\) と直す。</p>

<h2 id="s4">積と商の図形的意味</h2>
<p>2つの複素数を極形式で \(z_1=r_1(\cos\theta_1+i\sin\theta_1)\) と \(z_2=r_2(\cos\theta_2+i\sin\theta_2)\) とする。積を展開して実部と虚部をまとめる。</p>
\[ z_1z_2=r_1r_2\{(\cos\theta_1\cos\theta_2-\sin\theta_1\sin\theta_2)+i(\sin\theta_1\cos\theta_2+\cos\theta_1\sin\theta_2)\} \]
<p>かっこの中は数学Ⅱの加法定理そのものである。したがって次の式が成り立つ。</p>
\[ z_1z_2=r_1r_2\{\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)\} \]
<p><strong class="hit">積の絶対値は絶対値の積になり積の偏角は偏角の和になる</strong>。式で書くと \(|z_1z_2|=|z_1||z_2|\) と \(\arg(z_1z_2)=\arg z_1+\arg z_2\) である。同じ計算で商は絶対値の商と偏角の差になる。</p>
\[ \frac{z_1}{z_2}=\frac{r_1}{r_2}\{\cos(\theta_1-\theta_2)+i\sin(\theta_1-\theta_2)\} \]
<p>図形で言い換える。点 \(z\) に \(w=r(\cos\theta+i\sin\theta)\) を掛けると点 \(wz\) は <strong>z を原点のまわりに \(\theta\) だけ回転し原点からの距離を \(r\) 倍した点</strong>になる。特に \(i=\cos\dfrac{\pi}{2}+i\sin\dfrac{\pi}{2}\) を掛けると \(90^\circ\) の回転になる。\(i\) を2回掛けると \(180^\circ\) 回って \(-1\) 倍になる。\(i^2=-1\) はこの図形的な事実を式で表したものである。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="z に i を掛けると90度回転し 1 足す i を掛けると45度回転して ルート2 倍になる">
  <defs>
    <marker id="ah05c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah05d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
    <marker id="ah05e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  </defs>
  <g stroke="var(--line)"><line x1="220" y1="50" x2="220" y2="270"/><line x1="290" y1="50" x2="290" y2="270"/><line x1="430" y1="50" x2="430" y2="270"/><line x1="500" y1="50" x2="500" y2="270"/>
    <line x1="200" y1="50" x2="540" y2="50"/><line x1="200" y1="120" x2="540" y2="120"/><line x1="200" y1="190" x2="540" y2="190"/></g>
  <line x1="190" y1="260" x2="550" y2="260" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="360" y1="282" x2="360" y2="30" stroke="var(--ink)" stroke-width="1.5"/>
  <g font-size="12" fill="var(--muted)" text-anchor="middle"><text x="430" y="276">1</text><text x="500" y="276">2</text><text x="290" y="276">−1</text><text x="352" y="276">O</text></g>
  <g font-size="12" fill="var(--muted)" text-anchor="end"><text x="354" y="194">i</text><text x="354" y="124">2i</text><text x="354" y="54">3i</text></g>
  <line x1="360" y1="260" x2="497.3" y2="191.3" stroke="var(--warm)" stroke-width="2.5" marker-end="url(#ah05c)"/>
  <line x1="360" y1="260" x2="291.3" y2="122.7" stroke="var(--cool)" stroke-width="2.5" marker-end="url(#ah05d)"/>
  <line x1="360" y1="260" x2="429.1" y2="52.8" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ah05e)"/>
  <path d="M395.8 242.1 A40 40 0 0 0 372.6 222.1" fill="none" stroke="var(--accent)" stroke-width="1.8"/>
  <path d="M411.9 234.1 A58 58 0 0 0 334.1 208.1" fill="none" stroke="var(--cool)" stroke-width="1.8" stroke-dasharray="4 3"/>
  <text x="400" y="226" font-size="12.5" fill="var(--accent)">45°</text>
  <text x="306" y="214" font-size="12.5" fill="var(--cool)">90°</text>
  <g font-size="13" font-weight="600">
    <text x="490" y="210" fill="var(--warm)">z = 2 + i</text>
    <text x="196" y="114" fill="var(--cool)">iz = −1 + 2i</text>
    <text x="438" y="48" fill="var(--accent)">(1 + i)z = 1 + 3i</text>
  </g>
  <g font-size="12.5" fill="var(--sub)">
    <text x="560" y="110">i を掛ける</text><text x="560" y="128">90° 回転 長さ 1 倍</text>
    <text x="560" y="160">1 + i を掛ける</text><text x="560" y="178">45° 回転 長さ √2 倍</text>
    <text x="560" y="210">|z| = √5</text><text x="560" y="228">|(1 + i)z| = √10</text>
  </g>
</svg>
<figcaption>z＝2＋i に i を掛けると −1＋2i になり原点のまわりに90°回る。1＋i を掛けると 1＋3i になる。1＋i の絶対値は √2 で偏角は45°なので z を45°回して √2 倍に伸ばした位置に移る。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 5</div>
<p>点 \(z=2+i\) を原点のまわりに \(\dfrac{\pi}{3}\) だけ回転した点を求めよ。</p>
<details open><summary>解き方</summary><div>回転は \(\cos\dfrac{\pi}{3}+i\sin\dfrac{\pi}{3}=\dfrac{1}{2}+\dfrac{\sqrt{3}}{2}i\) を掛ける操作である。<br>\((2+i)\left(\dfrac{1}{2}+\dfrac{\sqrt{3}}{2}i\right)=1+\sqrt{3}\,i+\dfrac{1}{2}i+\dfrac{\sqrt{3}}{2}i^2\) である。<br>実部は \(1-\dfrac{\sqrt{3}}{2}\) で虚部は \(\sqrt{3}+\dfrac{1}{2}\) である。<br>答えは \(\left(1-\dfrac{\sqrt{3}}{2}\right)+\left(\sqrt{3}+\dfrac{1}{2}\right)i\) である。</div></details></div>

<p>商の公式は割り算を回転の巻き戻しとして読む。\(\dfrac{z_1}{z_2}\) は \(z_1\) を \(\arg z_2\) だけ逆向きに回して \(\dfrac{1}{|z_2|}\) 倍した点である。極形式と直交形式の両方で同じ商を計算すると三角関数の値が求まる。</p>
<div class="ex"><div class="ex-h">例題 6</div>
<p>\(\dfrac{1+\sqrt{3}\,i}{1+i}\) を2通りに計算して \(\cos\dfrac{\pi}{12}\) の値を求めよ。</p>
<details open><summary>解き方</summary><div>極形式では分子は \(2\left(\cos\dfrac{\pi}{3}+i\sin\dfrac{\pi}{3}\right)\) で分母は \(\sqrt{2}\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)\) である。<br>商は \(\sqrt{2}\left(\cos\dfrac{\pi}{12}+i\sin\dfrac{\pi}{12}\right)\) である。\(\dfrac{\pi}{3}-\dfrac{\pi}{4}=\dfrac{\pi}{12}\) だからである。<br>直交形式では分母と分子に \(1-i\) を掛ける。分子は \((1+\sqrt{3}\,i)(1-i)=(1+\sqrt{3})+(\sqrt{3}-1)i\) で分母は2である。<br>実部を比べて \(\sqrt{2}\cos\dfrac{\pi}{12}=\dfrac{1+\sqrt{3}}{2}\) である。<br>答えは \(\cos\dfrac{\pi}{12}=\dfrac{1+\sqrt{3}}{2\sqrt{2}}=\dfrac{\sqrt{6}+\sqrt{2}}{4}\) である。</div></details></div>

<p>典型的な誤りは商の偏角を足してしまうことである。積は偏角の和で商は偏角の差である。また原点以外の点を中心とする回転に w を掛けるだけで済ませる誤りも多い。w を掛ける操作の中心は必ず原点である。中心が別の点の場合は第7節で扱う。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">偏角は対数リターンと同じで掛け算が足し算に変わる</p>
<p>2期の成長率は倍率を掛けるが対数では足し算になる。複素数の積も絶対値は掛け算で偏角は足し算である。</p>
</aside>

<h2 id="s5">ド・モアブルの定理</h2>
<p>第4節の積の公式で \(z_1=z_2=\cos\theta+i\sin\theta\) とすると偏角が \(2\theta\) になる。もう1回掛けると \(3\theta\) になる。これを繰り返すと次の定理を得る。</p>
\[ (\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta \]
<p>これを<strong>ド・モアブルの定理</strong>と呼ぶ。自然数 \(n\) について数学的帰納法で示せる。\(n\) のときに成り立つと仮定して両辺に \(\cos\theta+i\sin\theta\) を掛けると積の公式から \(n+1\) のときも成り立つ。\(n=0\) と負の整数でも成り立つ。\(\dfrac{1}{\cos\theta+i\sin\theta}=\cos(-\theta)+i\sin(-\theta)\) だからである。</p>
<p>絶対値が1でない場合は \(\{r(\cos\theta+i\sin\theta)\}^n=r^n(\cos n\theta+i\sin n\theta)\) となる。<strong class="hit">n 乗は長さを n 乗し角を n 倍する操作である</strong>。</p>

<div class="ex"><div class="ex-h">例題 7</div>
<p>\((1+i)^{10}\) を計算せよ。</p>
<details open><summary>解き方</summary><div>極形式にする。\(1+i=\sqrt{2}\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)\) である。<br>定理から \((1+i)^{10}=(\sqrt{2})^{10}\left(\cos\dfrac{10\pi}{4}+i\sin\dfrac{10\pi}{4}\right)\) である。<br>\((\sqrt{2})^{10}=2^5=32\) である。<br>\(\dfrac{10\pi}{4}=2\pi+\dfrac{\pi}{2}\) なので角は \(\dfrac{\pi}{2}\) と同じ向きである。<br>答えは \(32(0+1\cdot i)=32i\) である。</div></details></div>

<p>この定理から三角関数の公式も導ける。\(n=2\) とすると左辺は \(\cos^2\theta-\sin^2\theta+2i\sin\theta\cos\theta\) である。右辺の実部と虚部と比べると \(\cos 2\theta=\cos^2\theta-\sin^2\theta\) と \(\sin 2\theta=2\sin\theta\cos\theta\) を得る。数学Ⅱの2倍角の公式である。</p>
<p>典型的な誤りは極形式にせずに展開を始めることである。10乗を二項定理で展開すると11項になり計算の誤りが増える。また \(r\) を n 乗し忘れる誤りも多い。</p>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">ド・モアブルの定理は複利の公式に角度を付けたものである</p>
<p>元本 \(r\) 倍を n 期続けると \(r^n\) 倍になる。複素数ではそれに加えて向きが毎期 \(\theta\) ずつ進む。</p>
</aside>

<h2 id="s6">1の n 乗根</h2>
<p>方程式 \(z^n=1\) の解を<strong>1の n 乗根</strong>と呼ぶ。解を \(z=r(\cos\theta+i\sin\theta)\) と置く。ド・モアブルの定理から \(r^n(\cos n\theta+i\sin n\theta)=1\) である。右辺の \(1\) は \(\cos 0+i\sin 0\) である。絶対値と偏角を比べる。</p>
\[ r^n=1,\qquad n\theta=2k\pi\quad(k\text{ は整数}) \]
<p>\(r>0\) なので \(r=1\) である。偏角は \(\theta=\dfrac{2k\pi}{n}\) となる。\(k=0,1,\ldots,n-1\) で異なる n 個の解が得られ \(k=n\) で \(k=0\) の解に戻る。<strong class="hit">1の n 乗根は単位円に内接する正 n 角形の頂点で1点は1である</strong>。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="1の6乗根は単位円に内接する正六角形の頂点">
  <circle cx="250" cy="150" r="120" fill="none" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="100" y1="150" x2="400" y2="150" stroke="var(--ink)" stroke-width="1.2"/>
  <line x1="250" y1="290" x2="250" y2="12" stroke="var(--ink)" stroke-width="1.2"/>
  <polygon points="370,150 310,46.08 190,46.08 130,150 190,253.92 310,253.92" fill="var(--warm)" fill-opacity="0.08" stroke="var(--warm)" stroke-width="2"/>
  <g stroke="var(--sub)" stroke-dasharray="3 3"><line x1="250" y1="150" x2="310" y2="46.08"/><line x1="250" y1="150" x2="190" y2="46.08"/></g>
  <path d="M290 150 A40 40 0 0 0 270 115.36" fill="none" stroke="var(--cool)" stroke-width="2"/>
  <text x="292" y="134" font-size="12.5" fill="var(--cool)">60°</text>
  <g fill="var(--warm)"><circle cx="370" cy="150" r="5"/><circle cx="310" cy="46.08" r="5"/><circle cx="190" cy="46.08" r="5"/><circle cx="130" cy="150" r="5"/><circle cx="190" cy="253.92" r="5"/><circle cx="310" cy="253.92" r="5"/></g>
  <g font-size="13" font-weight="600" fill="var(--ink)">
    <text x="378" y="142">1</text>
    <text x="318" y="38">1/2 + (√3/2)i</text>
    <text x="102" y="38">−1/2 + (√3/2)i</text>
    <text x="96" y="142">−1</text>
    <text x="96" y="276">−1/2 − (√3/2)i</text>
    <text x="318" y="276">1/2 − (√3/2)i</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="470" y="90">z⁶ = 1 の解は6個</text>
    <text x="470" y="120">絶対値はすべて 1</text>
    <text x="470" y="150">偏角は 0° から 60° ずつ</text>
    <text x="470" y="180">6個の和は 0</text>
    <text x="470" y="210">1つおきの3点が z³ = 1 の解</text>
  </g>
</svg>
<figcaption>z⁶＝1 の6個の解は半径1の円周を6等分する点である。偏角は 0°・60°・120°・180°・240°・300° である。1つおきに選んだ 1 と −1/2±(√3/2)i の3点は z³＝1 の解で正三角形をなす。</figcaption>
</figure>

<p>n＝3 の場合を詳しく見る。\(z^3-1=(z-1)(z^2+z+1)=0\) なので虚数解は \(z^2+z+1=0\) の2解である。その1つを \(\omega\) と置くと次の関係が成り立つ。</p>
\[ \omega^3=1,\qquad \omega^2+\omega+1=0,\qquad \bar{\omega}=\omega^2 \]
<p>\(\omega^{100}\) のような高い累乗は指数を3で割った余りで計算する。100 を3で割った余りは1なので \(\omega^{100}=\omega\) である。</p>

<div class="ex"><div class="ex-h">例題 8</div>
<p>方程式 \(z^4=-4\) を解け。</p>
<details open><summary>解き方</summary><div>\(z=r(\cos\theta+i\sin\theta)\) と置く。<br>右辺は \(-4=4(\cos\pi+i\sin\pi)\) である。<br>絶対値から \(r^4=4\) で \(r=\sqrt{2}\) である。<br>偏角から \(4\theta=\pi+2k\pi\) で \(\theta=\dfrac{\pi}{4}+\dfrac{k\pi}{2}\) である。<br>\(k=0,1,2,3\) で偏角は \(\dfrac{\pi}{4}\)・\(\dfrac{3\pi}{4}\)・\(\dfrac{5\pi}{4}\)・\(\dfrac{7\pi}{4}\) である。<br>答えは \(z=1+i,\ -1+i,\ -1-i,\ 1-i\) である。</div></details></div>

<p>典型的な誤りは \(k\) の範囲を誤って解の個数が n 個にならないことである。また \(n\theta=2k\pi\) の \(2k\pi\) を書き忘れて解が1つしか求まらない誤りも多い。n 次方程式は複素数の範囲で重複も含めて n 個の解をもつ。この事実を検算に使う。</p>

<aside class="an an-lv"><b>男女で言えば</b>
<p class="an-h">1の n 乗根は円卓に等間隔で座る n 人である</p>
<p>全員が中心から同じ距離で隣との角度も等しい。全員の位置ベクトルの和が 0 になるので重心は中心である。</p>
</aside>

<h2 id="s7">複素数と図形</h2>
<p>積が回転を表すことを使うと平面図形の問題を計算で解ける。共通テストで最もよく使う道具は次の3つである。</p>
<p>1つ目は<strong>点のまわりの回転</strong>である。点 \(\beta\) を点 \(\alpha\) のまわりに \(\theta\) だけ回転した点を \(\gamma\) とする。まず全体を \(-\alpha\) だけ平行移動して \(\alpha\) を原点に移す。そこで回転してから \(\alpha\) だけ戻す。</p>
\[ \gamma-\alpha=(\cos\theta+i\sin\theta)(\beta-\alpha) \]
<p>2つ目は<strong>角の大きさ</strong>である。3点 \(A(\alpha)\)・\(B(\beta)\)・\(C(\gamma)\) について \(\dfrac{\gamma-\alpha}{\beta-\alpha}\) の偏角は半直線 AB から半直線 AC へ測った回転角である。絶対値は \(\dfrac{AC}{AB}\) である。この値が実数なら3点は一直線上にある。純虚数なら \(AB\perp AC\) である。</p>
<p>3つ目は<strong>三角形の形状</strong>である。\(\dfrac{\gamma-\alpha}{\beta-\alpha}=\cos\dfrac{\pi}{3}\pm i\sin\dfrac{\pi}{3}\) なら AB＝AC で挟む角が \(60^\circ\) なので三角形 ABC は正三角形である。\(\dfrac{\gamma-\alpha}{\beta-\alpha}=\pm i\) なら AB＝AC で直角をはさむので直角二等辺三角形である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 280" role="img" aria-label="点 B を点 A のまわりに角 θ 回転して点 C を得る手順">
  <defs><marker id="ah05f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--sub)"/></marker></defs>
  <g font-size="13" fill="var(--muted)"><text x="20" y="24">1 A を原点へ移す</text><text x="260" y="24">2 原点のまわりに回転</text><text x="500" y="24">3 A だけ戻す</text></g>
  <g stroke="var(--line)"><line x1="236" y1="40" x2="236" y2="260"/><line x1="476" y1="40" x2="476" y2="260"/></g>
  <g stroke="var(--ink)" stroke-width="1.2"><line x1="20" y1="220" x2="220" y2="220"/><line x1="60" y1="260" x2="60" y2="50"/>
    <line x1="260" y1="220" x2="460" y2="220"/><line x1="300" y1="260" x2="300" y2="50"/>
    <line x1="500" y1="220" x2="700" y2="220"/><line x1="540" y1="260" x2="540" y2="50"/></g>
  <circle cx="110" cy="190" r="5" fill="var(--ink)"/><text x="98" y="206" font-size="13">A</text>
  <circle cx="190" cy="160" r="5" fill="var(--warm)"/><text x="196" y="156" font-size="13" fill="var(--warm)">B</text>
  <line x1="106" y1="192.5" x2="66" y2="216.5" stroke="var(--sub)" stroke-width="1.5" marker-end="url(#ah05f)"/>
  <line x1="186" y1="162.5" x2="144" y2="187.5" stroke="var(--sub)" stroke-width="1.5" marker-end="url(#ah05f)"/>
  <circle cx="140" cy="190" r="5" fill="var(--warm)" fill-opacity="0.5"/><text x="150" y="210" font-size="12" fill="var(--sub)">β − α</text>
  <circle cx="380" cy="190" r="5" fill="var(--warm)"/><text x="386" y="186" font-size="12.5" fill="var(--warm)">β − α</text>
  <circle cx="335.4" cy="142.2" r="5" fill="var(--cool)"/><text x="344" y="138" font-size="12.5" fill="var(--cool)">γ − α</text>
  <path d="M380 190 A85.4 85.4 0 0 0 335.4 142.2" fill="none" stroke="var(--cool)" stroke-dasharray="4 3" stroke-width="1.5"/>
  <line x1="300" y1="220" x2="380" y2="190" stroke="var(--warm)"/><line x1="300" y1="220" x2="335.4" y2="142.2" stroke="var(--cool)"/>
  <text x="344" y="196" font-size="12.5" fill="var(--sub)">θ</text>
  <circle cx="590" cy="190" r="5" fill="var(--ink)"/><text x="578" y="206" font-size="13">A</text>
  <circle cx="670" cy="160" r="5" fill="var(--warm)"/><text x="676" y="156" font-size="13" fill="var(--warm)">B</text>
  <circle cx="625.4" cy="112.2" r="5" fill="var(--cool)"/><text x="633" y="108" font-size="13" fill="var(--cool)">C</text>
  <line x1="590" y1="190" x2="670" y2="160" stroke="var(--warm)"/><line x1="590" y1="190" x2="625.4" y2="112.2" stroke="var(--cool)"/>
</svg>
<figcaption>原点以外の点を中心とする回転は3段階に分けて計算する。図は θ＝45°の場合である。A を原点に移すと B は β−α に移る。それに cosθ＋i sinθ を掛けて回し最後に α を足すと C の位置 γ が得られる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 9</div>
<p>2点 \(A(1+i)\) と \(B(3+2i)\) がある。三角形 ABC が正三角形で頂点 A・B・C がこの順に反時計回りに並ぶとき点 C を求めよ。</p>
<details open><summary>解き方</summary><div>C は B を A のまわりに \(\dfrac{\pi}{3}\) 回転した点である。<br>\(\beta-\alpha=2+i\) である。<br>\((2+i)\left(\dfrac{1}{2}+\dfrac{\sqrt{3}}{2}i\right)=\left(1-\dfrac{\sqrt{3}}{2}\right)+\left(\sqrt{3}+\dfrac{1}{2}\right)i\) は例題5で求めた。<br>これに \(\alpha=1+i\) を足す。<br>答えは \(\gamma=\left(2-\dfrac{\sqrt{3}}{2}\right)+\left(\dfrac{3}{2}+\sqrt{3}\right)i\) である。</div></details></div>

<div class="ex"><div class="ex-h">例題 10</div>
<p>3点 \(O(0)\)・\(A(2+i)\)・\(B(-1+2i)\) を頂点とする三角形はどのような形か。</p>
<details open><summary>解き方</summary><div>\(\dfrac{-1+2i}{2+i}\) を計算する。分母と分子に \(2-i\) を掛ける。<br>分子は \((-1+2i)(2-i)=-2+i+4i-2i^2=5i\) で分母は5である。<br>商は \(i=\cos\dfrac{\pi}{2}+i\sin\dfrac{\pi}{2}\) である。<br>OA＝OB で ∠AOB＝90° なので三角形 OAB は O を直角の頂点とする直角二等辺三角形である。</div></details></div>

<p>方程式で図形を表す方法もある。\(|z-\alpha|=r\) は中心 \(\alpha\) で半径 \(r\) の円である。\(|z-\alpha|=|z-\beta|\) は2点 \(\alpha, \beta\) から等距離の点の集合なので線分の垂直二等分線である。</p>
<div class="ex"><div class="ex-h">例題 11</div>
<p>次の条件を満たす点 z 全体はどのような図形か。<br>(1) \(|z-2|=|z+2i|\) ／ (2) \(|z|=2|z-3|\)</p>
<details open><summary>解き方</summary><div>(1) は2点 2 と \(-2i\) から等距離の点の集合なので2点を結ぶ線分の垂直二等分線である。<br>\(z=x+yi\) と置いて確かめる。\((x-2)^2+y^2=x^2+(y+2)^2\) を展開すると \(-4x=4y\) で直線 \(y=-x\) である。<br>(2) は両辺を2乗して \(x^2+y^2=4\{(x-3)^2+y^2\}\) である。<br>整理すると \(3x^2-24x+3y^2+36=0\) で \(x^2-8x+y^2+12=0\) である。<br>平方完成して \((x-4)^2+y^2=4\) である。中心 4 で半径2の円である。<br>検算する。z＝2 は \(|2|=2\) と \(2|2-3|=2\) で条件を満たす。z＝6 も \(6=2\times 3\) で満たす。</div></details></div>

<p>(2) のように2点からの距離の比が1でない一定値になる点の集合は円になる。この円をアポロニウスの円と呼ぶ。比が1のときだけ円ではなく垂直二等分線になる。</p>
<p>典型的な誤りは角の向きの取り違えである。\(\arg\dfrac{\gamma-\alpha}{\beta-\alpha}\) は AB から AC へ反時計回りに測った角である。分母と分子を逆にすると符号が反転する。正三角形の問題では C が直線 AB のどちら側にあるかで \(\pm\) の一方を選ぶ。</p>

<h2 id="s8">現実世界の複素数平面 交流回路</h2>
<p>複素数を平面上の点として描く考え方はノルウェー出身の測量技師ヴェッセルの論文と1806年のアルガンの著作に現れる。ヴェッセルの論文は1797年にデンマーク王立科学アカデミーで発表され1799年に同アカデミーの紀要に掲載された。ガウスもこの表示を用いて普及させた。ド・モアブルは17世紀末から18世紀前半に活動したフランス出身の数学者でロンドンで研究した。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>家庭のコンセントの電圧は一定の周期で向きを変える交流である。電気工学では電圧と電流を複素数平面上の回転する矢印で表す。コイルやコンデンサーは電流の位相を \(90^\circ\) ずらす。この操作は \(i\) を掛ける回転として計算できる。電気工学では電流の記号 i と区別して虚数単位を j と書く。</p>
</aside>

<h2 id="s9">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 絶対値</div>
<p class="qz-q">\(|(3+4i)(1-i)|\) の値として正しいものを1つ選べ。</p>
<ol><li>\(5\)</li><li>\(7\)</li><li>\(5\sqrt{2}\)</li><li>\(10\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。積の絶対値は絶対値の積である。\(|3+4i|=5\) と \(|1-i|=\sqrt{2}\) から \(5\sqrt{2}\) である。展開すると \(7+i\) で \(\sqrt{49+1}=\sqrt{50}=5\sqrt{2}\) と一致する。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ ド・モアブルの定理</div>
<p class="qz-q">\((1+\sqrt{3}\,i)^6\) の値を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 64 である。\(1+\sqrt{3}\,i=2\left(\cos\dfrac{\pi}{3}+i\sin\dfrac{\pi}{3}\right)\) である。6乗すると \(2^6(\cos 2\pi+i\sin 2\pi)=64\) である。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 原点のまわりの回転</div>
<p class="qz-q">点 \(4+2i\) を原点のまわりに \(\dfrac{\pi}{2}\) だけ回転した点として正しいものを1つ選べ。</p>
<ol><li>\(2+4i\)</li><li>\(-2+4i\)</li><li>\(2-4i\)</li><li>\(-4-2i\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(\dfrac{\pi}{2}\) の回転は \(i\) を掛ける操作である。\(i(4+2i)=4i+2i^2=-2+4i\) である。1 は実軸と虚軸の入れ替えで回転ではない。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 点のまわりの回転</div>
<p class="qz-q">点 \(B(3+i)\) を点 \(A(1+i)\) のまわりに \(\dfrac{\pi}{3}\) だけ回転した点 C を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \(2+(1+\sqrt{3})i\) である。\(\beta-\alpha=2\) である。\(2\left(\dfrac{1}{2}+\dfrac{\sqrt{3}}{2}i\right)=1+\sqrt{3}\,i\) に \(\alpha=1+i\) を足す。検算として \(|\gamma-\alpha|=|1+\sqrt{3}\,i|=2=AB\) を確かめる。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 1の3乗根</div>
<p class="qz-q">\(\omega\) を \(z^3=1\) の虚数解の1つとする。\(\omega^{100}+\omega^{50}+1\) の値を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 0 である。\(\omega^3=1\) なので指数を3で割った余りで考える。100 の余りは1で 50 の余りは2である。与式は \(\omega+\omega^2+1=0\) である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 三角形の形状</div>
<p class="qz-q">3点 \(A(\alpha)\)・\(B(\beta)\)・\(C(\gamma)\) が \(\gamma-\alpha=(1+\sqrt{3}\,i)(\beta-\alpha)\) を満たす。三角形 ABC について正しいものを1つ選べ。</p>
<ol><li>正三角形である</li><li>∠A＝60° で AC＝2AB である</li><li>∠A＝30° で AC＝2AB である</li><li>∠A＝90° の直角三角形で AB＝AC である</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(1+\sqrt{3}\,i=2\left(\cos\dfrac{\pi}{3}+i\sin\dfrac{\pi}{3}\right)\) なので AC は AB を60°回して2倍した長さである。AC＝2AB で ∠A＝60° になる。このとき余弦定理から BC²＝AB²＋4AB²−2·AB·2AB·½＝3AB² で BC²＋AB²＝AC² が成り立つ。三角形は ∠B＝90° の直角三角形である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 方程式の解</div>
<p class="qz-q">方程式 \(z^3=8i\) の解のうち実部が正のものを1つ求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \(\sqrt{3}+i\) である。\(8i=8\left(\cos\dfrac{\pi}{2}+i\sin\dfrac{\pi}{2}\right)\) なので \(r=2\) で \(3\theta=\dfrac{\pi}{2}+2k\pi\) である。\(\theta=\dfrac{\pi}{6}\)・\(\dfrac{5\pi}{6}\)・\(\dfrac{3\pi}{2}\) のうち実部が正になるのは \(\dfrac{\pi}{6}\) だけである。\(2\left(\dfrac{\sqrt{3}}{2}+\dfrac{1}{2}i\right)=\sqrt{3}+i\) である。検算すると \((\sqrt{3}+i)^2=2+2\sqrt{3}\,i\) でもう1回掛けると \(2\sqrt{3}+2i+6i+2\sqrt{3}\,i^2=8i\) である。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ アポロニウスの円</div>
<p class="qz-q">\(|z+1|=2|z-2|\) を満たす点 z 全体は円である。中心と半径の組として正しいものを1つ選べ。</p>
<ol><li>中心 2 半径 1</li><li>中心 3 半径 2</li><li>中心 −3 半径 2</li><li>中心 3 半径 4</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(z=x+yi\) とおき両辺を2乗すると \((x+1)^2+y^2=4\{(x-2)^2+y^2\}\) である。整理すると \(3x^2-18x+3y^2+15=0\) で \((x-3)^2+y^2=4\) である。検算すると z＝1 で \(|2|=2\) と \(2|-1|=2\) が等しく z＝5 で \(6=2\times 3\) が成り立つ。2点 1 と 5 は円の直径の両端である。</div></details></div>

<h2 id="s10">この章の要点</h2>
<div class="tb-key"><b>要点</b>
複素数 a＋bi は平面の点 (a, b) で表す。|z|＝√(a²＋b²) で z z̄＝|z|² である。<br>
2点 z と w の距離は |z−w| である。<br>
極形式 r(cosθ＋i sinθ) では r は正で偏角は象限を確認して決める。<br>
積は絶対値の積と偏角の和である。w を掛けると原点のまわりに arg w 回転して |w| 倍になる。<br>
ド・モアブルの定理 (cosθ＋i sinθ)ⁿ＝cos nθ＋i sin nθ は積の公式の繰り返しである。<br>
1の n 乗根は単位円に内接する正 n 角形の頂点である。<br>
点 α のまわりの回転は γ−α＝(cosθ＋i sinθ)(β−α) で計算する。</div>

<h2 id="s11">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>偏角は一つの値か、それとも \(2\pi\) の整数倍だけ異なる値の集まりか。</strong> 本文は \(2\pi\) の整数倍だけ異なる値を同じ向きとみなし、範囲を指定して1つを答える約束を置いた。一方で1の n 乗根では \(n\theta=2k\pi\) と整数倍の違いを残したことで n 個の解が得られた。</li>
<li class="tb-vnote"><strong>複素数平面を考え出したのは誰とみるべきか。</strong> 本文はヴェッセルの論文が1797年に発表され、アルガンの著作が1806年に出て、ガウスがこの表示を普及させたと記した。最初に発表した人と広めた人のどちらを重く見るかで答えが変わる。</li>
</ul>

<h2 id="s12">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 数学編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>大学入試センター 大学入学共通テスト — https://www.dnc.ac.jp/kyotsu/</li>
<li>Complex plane — Wikipedia — https://en.wikipedia.org/wiki/Complex_plane</li>
<li>De Moivre's formula — Wikipedia — https://en.wikipedia.org/wiki/De_Moivre%27s_formula</li>
<li>Root of unity — Wikipedia — https://en.wikipedia.org/wiki/Root_of_unity</li>
<li>Abraham de Moivre — Wikipedia — https://en.wikipedia.org/wiki/Abraham_de_Moivre</li>
<li>Phasor — Wikipedia — https://en.wikipedia.org/wiki/Phasor</li>
</ol>
