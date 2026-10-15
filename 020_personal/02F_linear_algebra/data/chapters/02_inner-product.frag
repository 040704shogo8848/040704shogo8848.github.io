<!--meta
{"chapter": 2, "part": "数学C", "title": "内積", "thesis": "内積は2本のベクトルから1つの実数を作る演算で一方の大きさともう一方の影の長さの積である。余弦定理から成分の式が導かれ角・垂直・長さ・面積・正射影がすべて内積で計算できる。", "verify": {"date": "2026-10-15", "checked": 38, "match": 35, "fixed": 3, "unconfirmed": 0}}
-->
<p>第1章では和と差と実数倍の3つの演算を定義した。これらはどれもベクトルからベクトルを作る演算であり長さや角を直接は扱わない。この章で導入する<strong>内積</strong>は2本のベクトルから1つの実数を作る演算である。内積を使うと長さと角を計算で求められるようになる。</p>
<p>共通テストのベクトルの大問では内積の計算が中心になる。問われる形は4つに分かれる。なす角を求める・垂直条件から未知数を求める・ \( |\vec{a}+t\vec{b}| \) を2乗して展開する・三角形の面積を求めるの4つである。この章はこの順に積み上げ最後に正射影を加える。正射影は序章で触れた回帰分析の幾何学的な意味そのものである。</p>

<h2 id="s1">内積の定義となす角</h2>
<p>\( \vec{0} \) でない2つのベクトル \( \vec{a} \) と \( \vec{b} \) の始点をそろえて \( \vec{a}=\overrightarrow{OA} \) と \( \vec{b}=\overrightarrow{OB} \) とする。\( \angle AOB=\theta \) を \( \vec{a} \) と \( \vec{b} \) の<strong>なす角</strong>と呼ぶ。\( \theta \) の範囲は \( 0^\circ\le\theta\le180^\circ \) である。この時次の実数を \( \vec{a} \) と \( \vec{b} \) の<strong>内積</strong>と呼び \( \vec{a}\cdot\vec{b} \) で表す。</p>
\[ \vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\theta \]
<p>\( \vec{a} \) か \( \vec{b} \) が \( \vec{0} \) の時は \( \vec{a}\cdot\vec{b}=0 \) と定める。内積の値はベクトルではなく実数である。中黒の記号「・」を省略したり × に書き換えたりしてはならない。</p>
<p>図形の意味を確かめる。B から直線OAに垂線を下ろし足をHとする。\( |\vec{b}|\cos\theta \) は線分OHの長さに符号をつけた量である。\( \theta \) が鋭角なら正で鈍角なら負になる。<strong class="hit">内積は \( \vec{a} \) の大きさと \( \vec{b} \) が \( \vec{a} \) の方向に落とす影の長さの積である</strong>。符号は \( \cos\theta \) の符号で定まる。</p>
<p>この定義を選ぶ理由は物理の仕事にある。力の方向と移動の方向が同じなら力の大きさと距離の積が仕事になる。方向がずれると力のうち移動方向の成分だけが仕事に寄与する。2本の矢印が「同じ方向にどれだけそろっているか」を1つの数で測る道具が内積である。</p>
<p>\( -1\le\cos\theta\le1 \) なので内積の値には範囲がある。</p>
\[ -|\vec{a}||\vec{b}|\le\vec{a}\cdot\vec{b}\le|\vec{a}||\vec{b}| \]
<p>右の等号は2本が同じ向きの時に成り立ち左の等号は反対向きの時に成り立つ。この不等式をコーシー・シュワルツの不等式と呼ぶ。成分で書くと \( (a_1b_1+a_2b_2)^2\le(a_1^{\,2}+a_2^{\,2})(b_1^{\,2}+b_2^{\,2}) \) であり数学Ⅱの不等式の証明で扱う形と一致する。</p>
<div class="tb-tw"><table>
<thead><tr><th>なす角 \( \theta \)</th><th>\( \cos\theta \)</th><th>内積の符号</th><th>影の向き</th></tr></thead>
<tbody>
<tr><td>\( 0^\circ\le\theta<90^\circ \)</td><td>正</td><td>正</td><td>\( \vec{a} \) と同じ向き</td></tr>
<tr><td>\( \theta=90^\circ \)</td><td>0</td><td>0</td><td>影は1点</td></tr>
<tr><td>\( 90^\circ<\theta\le180^\circ \)</td><td>負</td><td>負</td><td>\( \vec{a} \) と反対の向き</td></tr>
</tbody></table></div>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="内積は a の大きさと b の影の長さの積である">
  <defs><marker id="ah02a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  <marker id="ah02b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker></defs>
  <text x="30" y="30" font-size="13" fill="var(--muted)">θ が鋭角 内積は正</text>
  <line x1="215.7" y1="82.1" x2="215.7" y2="220" stroke="var(--sub)" stroke-dasharray="4 4"/>
  <polyline points="205.7,220 205.7,210 215.7,210" fill="none" stroke="var(--sub)"/>
  <line x1="100" y1="220" x2="215.7" y2="220" stroke="var(--warm)" stroke-width="7" stroke-opacity="0.45"/>
  <line x1="100" y1="220" x2="400" y2="220" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah02a)"/>
  <line x1="100" y1="220" x2="215.7" y2="82.1" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah02b)"/>
  <path d="M140 220 A40 40 0 0 0 125.7 189.4" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <g font-size="13">
    <text x="146" y="206" fill="var(--ink)">θ</text>
    <text x="370" y="244" fill="var(--accent)" font-weight="600">a</text>
    <text x="140" y="130" fill="var(--cool)" font-weight="600">b</text>
    <text x="88" y="240" fill="var(--sub)">O</text>
    <text x="222" y="240" fill="var(--sub)">H</text>
    <text x="110" y="262" fill="var(--warm)">影 |b|cosθ ＞ 0</text>
  </g>
  <line x1="430" y1="20" x2="430" y2="260" stroke="var(--line)" stroke-dasharray="4 4"/>
  <text x="450" y="30" font-size="13" fill="var(--muted)">θ が鈍角 内積は負</text>
  <line x1="484.3" y1="82.1" x2="484.3" y2="220" stroke="var(--sub)" stroke-dasharray="4 4"/>
  <line x1="484.3" y1="220" x2="600" y2="220" stroke="var(--warm)" stroke-width="7" stroke-opacity="0.45"/>
  <line x1="470" y1="220" x2="600" y2="220" stroke="var(--line)" stroke-dasharray="3 3"/>
  <line x1="600" y1="220" x2="700" y2="220" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah02a)"/>
  <line x1="600" y1="220" x2="484.3" y2="82.1" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah02b)"/>
  <path d="M630 220 A30 30 0 0 0 580.7 197.0" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <g font-size="13">
    <text x="606" y="196" fill="var(--ink)">θ</text>
    <text x="676" y="244" fill="var(--accent)" font-weight="600">a</text>
    <text x="542" y="130" fill="var(--cool)" font-weight="600">b</text>
    <text x="596" y="240" fill="var(--sub)">O</text>
    <text x="474" y="240" fill="var(--sub)">H</text>
    <text x="490" y="262" fill="var(--warm)">影は a と逆向き</text>
  </g>
</svg>
<figcaption>左は θ ＝ 50° で影OHが a と同じ向きにでき内積は正である。右は θ ＝ 130° で影が a と反対側にでき内積は負である。どちらも内積は |a| と符号つきの影の長さの積である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 1</div>
<p>\( |\vec{a}|=2 \) ・ \( |\vec{b}|=3 \) で \( \vec{a} \) と \( \vec{b} \) のなす角が \( 120^\circ \) の時 \( \vec{a}\cdot\vec{b} \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( \cos120^\circ=-\dfrac{1}{2} \)。<br>手順2 \( \vec{a}\cdot\vec{b}=2\times3\times\left(-\dfrac{1}{2}\right)=-3 \)。<br>答え \( -3 \)</div></details></div>

<div class="ex"><div class="ex-h">例題 2</div>
<p>1辺の長さが2の正三角形ABCで \( \overrightarrow{AB}\cdot\overrightarrow{AC} \) と \( \overrightarrow{AB}\cdot\overrightarrow{BC} \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( \overrightarrow{AB} \) と \( \overrightarrow{AC} \) は始点がAでそろっておりなす角は \( 60^\circ \)。内積は \( 2\times2\times\dfrac{1}{2}=2 \)。<br>手順2 \( \overrightarrow{AB} \) と \( \overrightarrow{BC} \) は始点がそろっていない。\( \overrightarrow{AB} \) を平行移動して始点をBに置くと \( \overrightarrow{AB} \) の延長と \( \overrightarrow{BC} \) の間の外角になる。なす角は \( 180^\circ-60^\circ=120^\circ \)。<br>手順3 内積は \( 2\times2\times\left(-\dfrac{1}{2}\right)=-2 \)。<br>答え 2 ・ \( -2 \)</div></details></div>

<p>例題2の後半は最も多い誤りである。三角形の内角60°をそのまま使うと答えは2になり符号が反対になる。<strong>なす角は始点をそろえてから測る</strong>。終点と始点がつながった2本の矢印のなす角は内角ではなく外角である。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">風の影響は風速ではなく打球方向の成分で定まる</p>
<p>センター方向の打球にとって秒速5 mの風の打球方向の成分は秒速 5 m×cosθ である。真横の風は飛距離を伸ばさず真正面の風は全量で押し戻す。</p>
</aside>

<h2 id="s2">成分による内積とその導出</h2>
<p>成分で表されたベクトルの内積は次の式で計算できる。\( \vec{a}=(a_1,a_2) \) と \( \vec{b}=(b_1,b_2) \) とする。</p>
\[ \vec{a}\cdot\vec{b}=a_1b_1+a_2b_2 \]
<p>この式は定義から導ける。始点を原点にそろえて \( A(a_1,a_2) \) と \( B(b_1,b_2) \) とし三角形OABに余弦定理を使う。辺ABの長さは \( |\vec{b}-\vec{a}| \) である。</p>
\[ |\vec{b}-\vec{a}|^2=|\vec{a}|^2+|\vec{b}|^2-2|\vec{a}||\vec{b}|\cos\theta \]
<p>右辺の最後の項に内積が現れる。移項すると \( 2\,\vec{a}\cdot\vec{b}=|\vec{a}|^2+|\vec{b}|^2-|\vec{b}-\vec{a}|^2 \) である。ここに成分を代入する。</p>
\[ 2\,\vec{a}\cdot\vec{b}=(a_1^{\,2}+a_2^{\,2})+(b_1^{\,2}+b_2^{\,2})-\{(b_1-a_1)^2+(b_2-a_2)^2\}=2a_1b_1+2a_2b_2 \]
<p>両辺を2で割ると成分の式が得られる。<strong class="hit">成分の内積の式は余弦定理を座標で書き直したものである</strong>。\( \theta \) が0°や180°で三角形がつぶれる場合も直接の計算で同じ式が成り立つ。</p>
<p>2つの式は使い分ける。長さと角が与えられた問題では定義の式を使い成分が与えられた問題では成分の式を使う。両方が分かればなす角が求まる。なす角は \( 0^\circ \) から \( 180^\circ \) の範囲にとるので \( \cos\theta \) の値から角がただ1つに定まる。sin と異なり鋭角と鈍角の2通りを考える場面はない。</p>
<p>成分の式は成分が3つ以上でも同じ形で広がる。第4章の空間ベクトルでは \( a_1b_1+a_2b_2+a_3b_3 \) となり序章のコサイン類似度では数百個の積の和になる。図を描けない次元でも成分の積の和を計算すれば角が定まる。平面で内積を成分の式に直しておく利点はここにある。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="三角形OABの3辺が a と b と b − a になる">
  <defs><marker id="ah02c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  <marker id="ah02d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
  <marker id="ah02e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker></defs>
  <line x1="100" y1="230" x2="360" y2="190" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah02c)"/>
  <line x1="100" y1="230" x2="200" y2="60" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah02d)"/>
  <line x1="360" y1="190" x2="200" y2="60" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah02e)"/>
  <path d="M145 223.1 A45 45 0 0 0 122.8 191.2" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <g font-size="13">
    <text x="146" y="208">θ</text>
    <text x="84" y="248" fill="var(--sub)">O</text>
    <text x="366" y="206" fill="var(--sub)">A(a₁, a₂)</text>
    <text x="150" y="52" fill="var(--sub)">B(b₁, b₂)</text>
    <text x="230" y="232" fill="var(--accent)" font-weight="600">a</text>
    <text x="120" y="140" fill="var(--cool)" font-weight="600">b</text>
    <text x="290" y="114" fill="var(--warm)" font-weight="600">b − a</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="440" y="80" font-weight="600">余弦定理</text>
    <text x="440" y="106">AB² ＝ OA² ＋ OB² − 2·OA·OB·cosθ</text>
    <text x="440" y="146" font-weight="600">ベクトルで書くと</text>
    <text x="440" y="172">|b − a|² ＝ |a|² ＋ |b|² − 2 a·b</text>
    <text x="440" y="212" fill="var(--sub)">成分を代入すると</text>
    <text x="440" y="236" fill="var(--sub)">a·b ＝ a₁b₁ ＋ a₂b₂</text>
  </g>
</svg>
<figcaption>三角形OABの辺OAが a・辺OBが b・辺ABが b − a である。余弦定理の cos の項がちょうど内積の2倍になる。</figcaption>
</figure>

<p>成分の式と定義を組み合わせるとなす角が計算できる。</p>
\[ \cos\theta=\frac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}=\frac{a_1b_1+a_2b_2}{\sqrt{a_1^{\,2}+a_2^{\,2}}\sqrt{b_1^{\,2}+b_2^{\,2}}} \]

<div class="ex"><div class="ex-h">例題 3</div>
<p>\( \vec{a}=(2,1) \) と \( \vec{b}=(1,3) \) のなす角 \( \theta \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( \vec{a}\cdot\vec{b}=2\times1+1\times3=5 \)。<br>手順2 \( |\vec{a}|=\sqrt{5} \) ・ \( |\vec{b}|=\sqrt{10} \)。<br>手順3 \( \cos\theta=\dfrac{5}{\sqrt{5}\sqrt{10}}=\dfrac{5}{5\sqrt{2}}=\dfrac{1}{\sqrt{2}} \)。<br>手順4 \( 0^\circ\le\theta\le180^\circ \) で \( \cos\theta=\dfrac{1}{\sqrt{2}} \) となるのは \( 45^\circ \)。<br>答え \( \theta=45^\circ \)</div></details></div>

<div class="ex"><div class="ex-h">例題 4</div>
<p>単位円上の2点 \( A(\cos\alpha,\sin\alpha) \) と \( B(\cos\beta,\sin\beta) \) を考える。\( \overrightarrow{OA}\cdot\overrightarrow{OB} \) を2通りに計算して \( \cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta \) を示せ。ただし \( 0^\circ\le\alpha-\beta\le180^\circ \) とする。</p>
<details open><summary>解き方</summary><div>手順1 成分で計算すると \( \overrightarrow{OA}\cdot\overrightarrow{OB}=\cos\alpha\cos\beta+\sin\alpha\sin\beta \)。<br>手順2 \( |\overrightarrow{OA}|=|\overrightarrow{OB}|=1 \) でなす角は \( \alpha-\beta \)。定義で計算すると \( 1\times1\times\cos(\alpha-\beta) \)。<br>手順3 2つの値は同じ内積なので等しい。<br>答え \( \cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta \)。数学Ⅱの加法定理を内積で示した。学習指導要領解説もこの扱いを例に挙げている。</div></details></div>

<h2 id="s3">内積の性質と大きさの計算</h2>
<p>内積には次の性質がある。成分の式から直接確かめられる。</p>
\[ \vec{a}\cdot\vec{a}=|\vec{a}|^2,\qquad \vec{a}\cdot\vec{b}=\vec{b}\cdot\vec{a},\qquad (k\vec{a})\cdot\vec{b}=\vec{a}\cdot(k\vec{b})=k(\vec{a}\cdot\vec{b}),\qquad \vec{a}\cdot(\vec{b}+\vec{c})=\vec{a}\cdot\vec{b}+\vec{a}\cdot\vec{c} \]
<p>1つ目は自分自身とのなす角が0°で \( \cos0^\circ=1 \) であることから従う。交換法則と分配法則があるので内積の式は文字式の展開と同じ手順で計算できる。例えば次の式が成り立つ。</p>
\[ |\vec{a}+\vec{b}|^2=(\vec{a}+\vec{b})\cdot(\vec{a}+\vec{b})=|\vec{a}|^2+2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2 \]
<p>これは \( (x+y)^2=x^2+2xy+y^2 \) と同じ形である。<strong class="hit">大きさは直接計算できないので2乗して内積に直してから展開する</strong>。これが共通テストで最も頻繁に使う手順である。</p>
<p>未知数の扱い方にも型がある。\( |\vec{a}| \) ・ \( |\vec{b}| \) ・ \( \vec{a}\cdot\vec{b} \) の3つの値が分かれば \( \vec{a} \) と \( \vec{b} \) で作られるどのベクトルの大きさも内積も計算できる。問題文がどれか1つを直接与えない時は内積 \( \vec{a}\cdot\vec{b} \) を未知数とおき与えられた長さの条件を2乗して方程式を作る。例題5はこの型である。</p>
<p>同じ考え方で \( |\vec{a}+\vec{b}|=|\vec{a}-\vec{b}| \) ならば両辺を2乗して差をとると \( 4\,\vec{a}\cdot\vec{b}=0 \) となり \( \vec{a}\perp\vec{b} \) が分かる。2本の対角線の長さが等しい平行四辺形は長方形であるという性質を内積で示したことになる。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>\( |\vec{a}|=2 \) ・ \( |\vec{b}|=1 \) ・ \( |\vec{a}-\vec{b}|=\sqrt{3} \) の時 \( \vec{a}\cdot\vec{b} \) と \( \vec{a} \) と \( \vec{b} \) のなす角を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( |\vec{a}-\vec{b}|^2=|\vec{a}|^2-2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2 \) に代入する。<br>手順2 \( 3=4-2\,\vec{a}\cdot\vec{b}+1 \) から \( \vec{a}\cdot\vec{b}=1 \)。<br>手順3 \( \cos\theta=\dfrac{1}{2\times1}=\dfrac{1}{2} \) なので \( \theta=60^\circ \)。<br>答え \( \vec{a}\cdot\vec{b}=1 \) ・ \( \theta=60^\circ \)</div></details></div>

<div class="ex"><div class="ex-h">例題 6</div>
<p>\( \vec{a}=(3,1) \) と \( \vec{b}=(1,1) \) とする。実数 \( t \) を動かす時 \( |\vec{a}+t\vec{b}| \) の最小値とその時の \( t \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( |\vec{a}|^2=10 \) ・ \( |\vec{b}|^2=2 \) ・ \( \vec{a}\cdot\vec{b}=3+1=4 \)。<br>手順2 \( |\vec{a}+t\vec{b}|^2=|\vec{b}|^2t^2+2(\vec{a}\cdot\vec{b})t+|\vec{a}|^2=2t^2+8t+10 \)。<br>手順3 平方完成して \( 2(t+2)^2+2 \)。最小値は \( t=-2 \) の時の2である。<br>手順4 大きさは0以上なので2乗が最小の時に大きさも最小である。最小値は \( \sqrt{2} \)。<br>検算 \( \vec{a}-2\vec{b}=(1,-1) \) で大きさは \( \sqrt{2} \)。<br>答え \( t=-2 \) の時 最小値 \( \sqrt{2} \)</div></details></div>

<p>例題6の最小のベクトル \( (1,-1) \) は \( \vec{b}=(1,1) \) と垂直である。点 \( \vec{a}+t\vec{b} \) は \( \vec{b} \) の方向の直線上を動き原点からの距離が最小になるのは垂線の足だからである。この見方は第6節の正射影につながる。</p>
<p>典型的な誤りは3つある。1つ目は \( |\vec{a}+\vec{b}|=|\vec{a}|+|\vec{b}| \) とすることである。2つ目は \( (\vec{a}\cdot\vec{b})^2=|\vec{a}|^2|\vec{b}|^2 \) とすることである。正しくは \( (\vec{a}\cdot\vec{b})^2=|\vec{a}|^2|\vec{b}|^2\cos^2\theta \) で一般には左辺が小さい。3つ目は \( (\vec{a}\cdot\vec{b})\vec{c}=\vec{a}(\vec{b}\cdot\vec{c}) \) とすることである。左辺は \( \vec{c} \) の実数倍で右辺は \( \vec{a} \) の実数倍なので向きが異なる。</p>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">売上高は価格ベクトルと数量ベクトルの内積である</p>
<p>3品目の価格 \( (p_1,p_2,p_3) \) と販売数量 \( (q_1,q_2,q_3) \) の内積 \( p_1q_1+p_2q_2+p_3q_3 \) が売上高である。</p>
</aside>

<h2 id="s4">垂直条件</h2>
<p>\( \vec{0} \) でない2つのベクトルのなす角が90°の時 \( \vec{a} \) と \( \vec{b} \) は<strong>垂直</strong>であるといい \( \vec{a}\perp\vec{b} \) と書く。\( \cos90^\circ=0 \) なので次の<strong>垂直条件</strong>が成り立つ。</p>
\[ \vec{a}\neq\vec{0},\ \vec{b}\neq\vec{0}\ \text{のとき}\quad \vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0\iff a_1b_1+a_2b_2=0 \]
<p>逆向きの矢印も成り立つ理由は \( |\vec{a}| \) と \( |\vec{b}| \) が0でないので内積が0なら \( \cos\theta=0 \) に限られるからである。第1章の平行条件 \( a_1b_2-a_2b_1=0 \) と形が似ているので混同しない。<strong class="hit">垂直は同じ番号の成分どうしの積の和が0で平行は番号を入れ替えた積の差が0である</strong>。</p>
<p>\( \vec{a}=(a_1,a_2) \) に垂直なベクトルの1つは \( (a_2,-a_1) \) である。内積が \( a_1a_2-a_2a_1=0 \) になるからである。成分を入れ替えて片方の符号を変えると垂直なベクトルが作れる。</p>
<p>垂直条件の誤りは2つある。1つは \( \vec{0} \) の扱いである。\( \vec{a}\cdot\vec{b}=0 \) は \( \vec{a} \) か \( \vec{b} \) が \( \vec{0} \) の場合にも成り立つ。問題文に \( \vec{0} \) でないという条件がない時は解の中に \( \vec{0} \) になる値が混じっていないかを確かめる。もう1つは垂直な単位ベクトルを1つしか答えないことである。平面で1本のベクトルに垂直な方向は1つだが向きは2通りある。</p>

<div class="ex"><div class="ex-h">例題 7</div>
<p>(1) \( \vec{a}=(x,2) \) と \( \vec{b}=(3,-1) \) が垂直になる \( x \) を求めよ。(2) \( \vec{c}=(3,4) \) に垂直な単位ベクトルを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( 3x+2\times(-1)=0 \) から \( x=\dfrac{2}{3} \)。<br>手順2 \( \vec{c} \) に垂直なベクトルの1つは \( (4,-3) \)。大きさは5である。<br>手順3 単位ベクトルは向きが2通りあるので \( \pm\dfrac{1}{5}(4,-3) \)。<br>答え (1) \( x=\dfrac{2}{3} \) (2) \( \left(\dfrac{4}{5},-\dfrac{3}{5}\right) \) と \( \left(-\dfrac{4}{5},\dfrac{3}{5}\right) \)</div></details></div>

<div class="ex"><div class="ex-h">例題 8</div>
<p>ひし形の2本の対角線が垂直に交わることを内積で示せ。</p>
<details open><summary>解き方</summary><div>手順1 ひし形OACBで \( \overrightarrow{OA}=\vec{a} \) ・ \( \overrightarrow{OB}=\vec{b} \) とおく。ひし形なので \( |\vec{a}|=|\vec{b}| \)。<br>手順2 対角線は \( \overrightarrow{OC}=\vec{a}+\vec{b} \) と \( \overrightarrow{BA}=\vec{a}-\vec{b} \)。<br>手順3 \( (\vec{a}+\vec{b})\cdot(\vec{a}-\vec{b})=|\vec{a}|^2-|\vec{b}|^2=0 \)。<br>答え 内積が0なので2本の対角線は垂直である。式の変形は \( (x+y)(x-y)=x^2-y^2 \) と同じ形である。</div></details></div>

<p>学習指導要領解説は内積による図形の考察の例として三角形の3本の垂線が1点で交わることも挙げている。三角形ABCの頂点の位置ベクトルを \( \vec{a} \) ・ \( \vec{b} \) ・ \( \vec{c} \) とし Aからの垂線とBからの垂線の交点をH \( (\vec{h}) \) とする。条件は次の2式である。</p>
\[ (\vec{h}-\vec{a})\cdot(\vec{c}-\vec{b})=0,\qquad (\vec{h}-\vec{b})\cdot(\vec{a}-\vec{c})=0 \]
<p>2式を展開して足すと \( \vec{h}\cdot\vec{c} \) の項と \( \vec{a}\cdot\vec{b} \) の項が打ち消し合い \( \vec{h}\cdot\vec{a}-\vec{h}\cdot\vec{b}-\vec{c}\cdot\vec{a}+\vec{c}\cdot\vec{b}=0 \) が残る。左辺は \( (\vec{h}-\vec{c})\cdot(\vec{a}-\vec{b}) \) と因数分解できるので \( (\vec{h}-\vec{c})\cdot(\vec{b}-\vec{a})=0 \) である。これは CH が AB と垂直であることを表す。したがってCからの垂線もHを通る。図を描いて角を追う初等幾何の証明と比べると内積の証明は場合分けが要らない。位置ベクトルは第3章で正式に扱う。</p>

<p>垂直条件は長さや角が与えられた問題でもそのまま使える。成分がなくても内積を展開すれば未知数の方程式になる。</p>

<div class="ex"><div class="ex-h">例題 9</div>
<p>\( |\vec{a}|=2 \) ・ \( |\vec{b}|=3 \) ・ \( \vec{a}\cdot\vec{b}=2 \) とする。\( \vec{a}+t\vec{b} \) が \( \vec{b} \) と垂直になる実数 \( t \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 条件は \( (\vec{a}+t\vec{b})\cdot\vec{b}=0 \)。<br>手順2 展開して \( \vec{a}\cdot\vec{b}+t|\vec{b}|^2=0 \) から \( 2+9t=0 \)。<br>手順3 \( t=-\dfrac{2}{9} \)。<br>答え \( t=-\dfrac{2}{9} \)。この \( t \) で \( |\vec{a}+t\vec{b}| \) が最小になる。例題6と同じ構造である。</div></details></div>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">内積0は嫌いではなく無関心である</p>
<p>内積が正なら同じ方向を向き負なら反対を向く。垂直は好意も反発もなく相手の方向に1歩も進まない関係である。</p>
</aside>

<h2 id="s5">三角形の面積</h2>
<p>三角形OABで \( \overrightarrow{OA}=\vec{a} \) ・ \( \overrightarrow{OB}=\vec{b} \) とし \( \angle AOB=\theta \) とする。数学Ⅰの面積の公式 \( S=\dfrac{1}{2}|\vec{a}||\vec{b}|\sin\theta \) から出発する。\( \sin\theta\ge0 \) なので \( \sin\theta=\sqrt{1-\cos^2\theta} \) と書ける。</p>
\[ S=\frac{1}{2}|\vec{a}||\vec{b}|\sqrt{1-\cos^2\theta}=\frac{1}{2}\sqrt{|\vec{a}|^2|\vec{b}|^2-|\vec{a}|^2|\vec{b}|^2\cos^2\theta}=\frac{1}{2}\sqrt{|\vec{a}|^2|\vec{b}|^2-(\vec{a}\cdot\vec{b})^2} \]
<p>さらに成分 \( \vec{a}=(a_1,a_2) \) ・ \( \vec{b}=(b_1,b_2) \) を代入すると根号の中は \( (a_1^{\,2}+a_2^{\,2})(b_1^{\,2}+b_2^{\,2})-(a_1b_1+a_2b_2)^2=(a_1b_2-a_2b_1)^2 \) となる。したがって</p>
\[ S=\frac{1}{2}|a_1b_2-a_2b_1| \]
<p>である。<strong class="hit">第1章の平行条件の式 \( a_1b_2-a_2b_1 \) の絶対値は2本が作る平行四辺形の面積である</strong>。平行ならつぶれて面積は0になる。2つの条件が同じ式で書ける理由はここにある。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 280" role="img" aria-label="2本のベクトルが作る三角形と平行四辺形の面積">
  <g stroke="var(--line)" stroke-width="1">
    <line x1="100" y1="30" x2="100" y2="250"/><line x1="160" y1="30" x2="160" y2="250"/><line x1="220" y1="30" x2="220" y2="250"/><line x1="280" y1="30" x2="280" y2="250"/><line x1="340" y1="30" x2="340" y2="250"/><line x1="400" y1="30" x2="400" y2="250"/>
    <line x1="100" y1="250" x2="400" y2="250"/><line x1="100" y1="190" x2="400" y2="190"/><line x1="100" y1="130" x2="400" y2="130"/><line x1="100" y1="70" x2="400" y2="70"/>
  </g>
  <polygon points="100,250 280,190 340,70 160,130" fill="var(--cool)" fill-opacity="0.12" stroke="var(--cool)" stroke-dasharray="5 4"/>
  <polygon points="100,250 280,190 160,130" fill="var(--warm)" fill-opacity="0.3" stroke="var(--warm)" stroke-width="2"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle"><text x="160" y="268">1</text><text x="220" y="268">2</text><text x="280" y="268">3</text><text x="340" y="268">4</text><text x="88" y="194">1</text><text x="88" y="134">2</text><text x="88" y="74">3</text><text x="88" y="268">O</text></g>
  <g font-size="13" font-weight="600">
    <text x="286" y="206" fill="var(--ink)">A(3, 1)</text>
    <text x="110" y="122" fill="var(--ink)">B(1, 2)</text>
    <text x="346" y="66" fill="var(--sub)">C(4, 3)</text>
    <text x="180" y="196" fill="var(--warm)">S ＝ 5/2</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="450" y="80">a ＝ (3, 1)　b ＝ (1, 2)</text>
    <text x="450" y="112">a₁b₂ − a₂b₁ ＝ 3·2 − 1·1 ＝ 5</text>
    <text x="450" y="148" fill="var(--cool)">平行四辺形OACB の面積 5</text>
    <text x="450" y="176" fill="var(--warm)">三角形OAB の面積 5/2</text>
    <text x="450" y="216" fill="var(--sub)">内積で検算 |a|²|b|² − (a·b)²</text>
    <text x="450" y="238" fill="var(--sub)">＝ 10·5 − 5² ＝ 25 → √25 ＝ 5</text>
  </g>
</svg>
<figcaption>1目盛りは1。a ＝ (3, 1) と b ＝ (1, 2) が作る平行四辺形の面積は |3·2 − 1·1| ＝ 5 で三角形はその半分の 5/2 である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 10</div>
<p>(1) 3点 \( O(0,0) \) ・ \( A(3,1) \) ・ \( B(1,2) \) を頂点とする三角形の面積を求めよ。(2) \( |\vec{a}|=3 \) ・ \( |\vec{b}|=4 \) ・ \( \vec{a}\cdot\vec{b}=6 \) の時 \( \vec{a} \) と \( \vec{b} \) が作る三角形の面積を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 (1) \( S=\dfrac{1}{2}|3\times2-1\times1|=\dfrac{5}{2} \)。<br>手順2 (2) \( S=\dfrac{1}{2}\sqrt{9\times16-36}=\dfrac{1}{2}\sqrt{108}=\dfrac{1}{2}\times6\sqrt{3}=3\sqrt{3} \)。<br>検算 (2) は \( \cos\theta=\dfrac{6}{12}=\dfrac{1}{2} \) で \( \theta=60^\circ \)。\( \dfrac{1}{2}\times3\times4\times\sin60^\circ=3\sqrt{3} \) と一致する。<br>答え (1) \( \dfrac{5}{2} \) (2) \( 3\sqrt{3} \)</div></details></div>

<p>3頂点のどれも原点でない時は1つの頂点を始点にそろえてから公式を使う。三角形ABCなら \( \overrightarrow{AB} \) と \( \overrightarrow{AC} \) の成分を求めて代入する。始点をそろえずに頂点の座標をそのまま代入するのは誤りである。</p>
<p>2つの面積の公式は与えられた情報で使い分ける。長さと内積が与えられた時は根号の式を使い成分が与えられた時は \( |a_1b_2-a_2b_1| \) の式を使う。根号の式は根号の中が \( |\vec{a}|^2|\vec{b}|^2 \) から \( (\vec{a}\cdot\vec{b})^2 \) を引いた形になる。前半の項は2本が垂直な時の面積の2乗の4倍であり内積の分だけ面積が減ると読み取れる。</p>

<h2 id="s6">正射影</h2>
<p>第1節の影を長さではなくベクトルとして取り出す。\( \vec{a}\neq\vec{0} \) とし \( \vec{b} \) の終点から \( \vec{a} \) の方向の直線に下ろした垂線の足をHとする。\( \overrightarrow{OH} \) を \( \vec{b} \) の \( \vec{a} \) 上への<strong>正射影</strong>と呼ぶ。</p>
<p>\( \overrightarrow{OH} \) は \( \vec{a} \) に平行なので \( \overrightarrow{OH}=k\vec{a} \) と書ける。条件は \( \vec{b}-k\vec{a} \) が \( \vec{a} \) と垂直であることである。</p>
\[ (\vec{b}-k\vec{a})\cdot\vec{a}=0\quad\Longrightarrow\quad k=\frac{\vec{a}\cdot\vec{b}}{|\vec{a}|^2},\qquad \overrightarrow{OH}=\frac{\vec{a}\cdot\vec{b}}{|\vec{a}|^2}\,\vec{a} \]
<p>符号つきの長さは \( \dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}|} \) である。これは \( |\vec{b}|\cos\theta \) と一致し第1節の影の長さと同じものである。残りの \( \vec{b}-\overrightarrow{OH} \) の大きさは点Bから直線OAまでの距離になる。<strong class="hit">正射影は \( \vec{b} \) を \( \vec{a} \) に平行な部分と垂直な部分に分ける操作である</strong>。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 290" role="img" aria-label="b を a に平行な部分と垂直な部分に分ける正射影">
  <defs><marker id="ah02f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  <marker id="ah02g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
  <marker id="ah02h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker></defs>
  <g stroke="var(--line)" stroke-width="1">
    <line x1="100" y1="60" x2="100" y2="270"/><line x1="150" y1="60" x2="150" y2="270"/><line x1="200" y1="60" x2="200" y2="270"/><line x1="250" y1="60" x2="250" y2="270"/><line x1="300" y1="60" x2="300" y2="270"/>
    <line x1="80" y1="260" x2="320" y2="260"/><line x1="80" y1="210" x2="320" y2="210"/><line x1="80" y1="160" x2="320" y2="160"/><line x1="80" y1="110" x2="320" y2="110"/>
  </g>
  <line x1="60" y1="280" x2="340" y2="140" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="100" y1="260" x2="300" y2="160" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah02f)"/>
  <line x1="100" y1="260" x2="150" y2="110" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah02g)"/>
  <line x1="100" y1="260" x2="200" y2="210" stroke="var(--warm)" stroke-width="5" marker-end="url(#ah02h)"/>
  <line x1="200" y1="210" x2="150" y2="110" stroke="var(--sub)" stroke-width="2" stroke-dasharray="5 4"/>
  <polyline points="191.1,214.5 186.6,205.5 195.5,201.1" fill="none" stroke="var(--sub)" stroke-width="1.5"/>
  <g font-size="13" font-weight="600">
    <text x="88" y="278" fill="var(--sub)">O</text>
    <text x="306" y="156" fill="var(--accent)">A a ＝ (4, 2)</text>
    <text x="120" y="100" fill="var(--cool)">B b ＝ (1, 3)</text>
    <text x="204" y="232" fill="var(--warm)">H (2, 1)</text>
    <text x="186" y="150" fill="var(--sub)">(−1, 2)</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="400" y="80">a·b ＝ 4 ＋ 6 ＝ 10　|a|² ＝ 20</text>
    <text x="400" y="110" fill="var(--warm)">OH ＝ (10/20)a ＝ (2, 1)</text>
    <text x="400" y="140" fill="var(--sub)">HB ＝ b − OH ＝ (−1, 2)</text>
    <text x="400" y="170" fill="var(--sub)">HB·a ＝ −4 ＋ 4 ＝ 0 垂直</text>
    <text x="400" y="210">B と直線OAの距離 |HB| ＝ √5</text>
  </g>
</svg>
<figcaption>1目盛りは1。b ＝ (1, 3) を a ＝ (4, 2) の方向に正射影すると OH ＝ (2, 1) になる。残りの HB ＝ (−1, 2) は a と垂直でその長さ √5 がBから直線OAまでの距離である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 11</div>
<p>\( \vec{a}=(4,2) \) ・ \( \vec{b}=(1,3) \) とする。\( \vec{b} \) の \( \vec{a} \) 上への正射影と点 \( B(1,3) \) から直線OAまでの距離を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( \vec{a}\cdot\vec{b}=4+6=10 \) ・ \( |\vec{a}|^2=20 \)。<br>手順2 正射影は \( \dfrac{10}{20}(4,2)=(2,1) \)。<br>手順3 垂直な部分は \( (1,3)-(2,1)=(-1,2) \) で大きさは \( \sqrt{5} \)。<br>検算 \( (-1,2)\cdot(4,2)=0 \) で垂直である。面積で確かめると三角形OABは \( \dfrac{1}{2}|4\times3-2\times1|=5 \)。底辺 \( |\vec{a}|=2\sqrt{5} \) から高さは \( \dfrac{2\times5}{2\sqrt{5}}=\sqrt{5} \) で一致する。<br>答え 正射影 \( (2,1) \) ・ 距離 \( \sqrt{5} \)</div></details></div>

<p>例題6で最小値を与えた \( t \) は \( -\dfrac{\vec{a}\cdot\vec{b}}{|\vec{b}|^2}=-2 \) であった。これは \( \vec{a} \) を \( \vec{b} \) 上へ正射影した時の係数 \( \dfrac{\vec{a}\cdot\vec{b}}{|\vec{b}|^2} \) に負号をつけた値である。直線上で原点に最も近い点を求める問題と正射影を求める問題は同じ問題である。</p>
<p>正射影のベクトルと長さは区別する。ベクトル \( \dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}|^2}\vec{a} \) は向きをもち長さ \( \dfrac{|\vec{a}\cdot\vec{b}|}{|\vec{a}|} \) は0以上の実数である。分母が \( |\vec{a}|^2 \) か \( |\vec{a}| \) かを取り違える誤りが多い。\( \vec{a} \) が単位ベクトルなら分母は1になり正射影は \( (\vec{a}\cdot\vec{b})\vec{a} \) と簡単になる。先に \( \vec{a} \) を単位ベクトルに直してから計算すると分母の誤りを防げる。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">相関係数は偏差ベクトルどうしの cos である</p>
<p>2銘柄の収益率から平均を引いたベクトルを作るとそのなす角の cos が相関係数になる。無相関は垂直で逆相関は鈍角である。</p>
</aside>

<h2 id="s7">現実世界 仕事と回帰と検索</h2>
<p>内積は物理の<strong>仕事</strong>の定義そのものである。物体に力 \( \vec{F} \) を加えて変位 \( \vec{s} \) だけ動かした時の仕事は \( W=\vec{F}\cdot\vec{s}=|\vec{F}||\vec{s}|\cos\theta \) である。進行方向に垂直な力は仕事をしない。荷物を持って水平に歩いても重力は仕事をしないのはこのためである。</p>
<p>統計では2つの変数の偏差を並べたベクトル \( \vec{x}=(x_1-\bar{x},\dots,x_n-\bar{x}) \) と \( \vec{y}=(y_1-\bar{y},\dots,y_n-\bar{y}) \) を考える。相関係数は \( r=\dfrac{\vec{x}\cdot\vec{y}}{|\vec{x}||\vec{y}|} \) でありなす角の cos と同じ式である。\( -1\le r\le1 \) となるのは \( -1\le\cos\theta\le1 \) だからである。</p>
<p>回帰直線 \( y=\beta x \) を原点を通る場合で考える。最小二乗法は残差 \( \vec{y}-\beta\vec{x} \) の大きさを最小にする \( \beta \) を選ぶ。例題6と同じ計算で \( \hat{\beta}=\dfrac{\vec{x}\cdot\vec{y}}{|\vec{x}|^2} \) となる。これは \( \vec{y} \) の \( \vec{x} \) 上への正射影の係数である。説明変数が2つ以上の場合は第6章の行列で同じ計算を行う。</p>
<p>序章で触れた Transformer の注意機構も内積を使う。文中の各語を表すベクトルどうしの内積を計算し値の大きい組を強く関連するとみなす。論文ではこの内積をベクトルの次元の平方根で割ってから使う。成分の数が増えると内積の値が大きくなりすぎるのを抑えるためである。</p>

<aside class="an an-rw"><b>現実世界</b>
<p>文書検索や推薦の仕組みは文書と質問をベクトルで表し内積やコサイン類似度で近い順に並べる。数百次元でも計算は \( a_1b_1+a_2b_2 \) の項を増やしただけである。</p>
</aside>

<h2 id="s8">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 定義による内積</div>
<p class="qz-q">\( |\vec{a}|=3 \) ・ \( |\vec{b}|=4 \) で \( \vec{a} \) と \( \vec{b} \) のなす角が \( 60^\circ \) の時 \( \vec{a}\cdot\vec{b} \) を求めよ。</p>
<ol><li>6</li><li>\( 6\sqrt{3} \)</li><li>12</li><li>\( -6 \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。\( 3\times4\times\cos60^\circ=12\times\dfrac{1}{2}=6 \)。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ なす角</div>
<p class="qz-q">\( \vec{a}=(3,1) \) と \( \vec{b}=(1,2) \) のなす角を求めよ。</p>
<ol><li>\( 30^\circ \)</li><li>\( 45^\circ \)</li><li>\( 60^\circ \)</li><li>\( 135^\circ \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( \vec{a}\cdot\vec{b}=5 \) ・ \( |\vec{a}|=\sqrt{10} \) ・ \( |\vec{b}|=\sqrt{5} \)。\( \cos\theta=\dfrac{5}{\sqrt{50}}=\dfrac{1}{\sqrt{2}} \) なので \( 45^\circ \)。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 垂直条件</div>
<p class="qz-q">\( \vec{a}=(k,3) \) と \( \vec{b}=(2,-4) \) が垂直になる \( k \) の値を求めよ。</p>
<ol><li>\( -6 \)</li><li>\( -\dfrac{3}{2} \)</li><li>\( \dfrac{3}{2} \)</li><li>6</li></ol>
<details><summary>解答と解説</summary><div>正解は 4 である。\( 2k+3\times(-4)=2k-12=0 \) から \( k=6 \)。2 は平行条件 \( -4k-6=0 \) を解いた誤りである。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 大きさの計算</div>
<p class="qz-q">\( |\vec{a}|=1 \) ・ \( |\vec{b}|=2 \) ・ \( \vec{a}\cdot\vec{b}=-1 \) の時 \( |2\vec{a}+\vec{b}| \) を求めよ。</p>
<ol><li>0</li><li>2</li><li>\( 2\sqrt{2} \)</li><li>4</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( |2\vec{a}+\vec{b}|^2=4|\vec{a}|^2+4\,\vec{a}\cdot\vec{b}+|\vec{b}|^2=4-4+4=4 \) なので大きさは2。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 三角形の面積</div>
<p class="qz-q">3点 \( A(1,1) \) ・ \( B(4,2) \) ・ \( C(2,5) \) を頂点とする三角形の面積を求めよ。</p>
<ol><li>\( \dfrac{11}{2} \)</li><li>\( \dfrac{13}{2} \)</li><li>11</li><li>\( \dfrac{9}{2} \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。\( \overrightarrow{AB}=(3,1) \) ・ \( \overrightarrow{AC}=(1,4) \) で \( S=\dfrac{1}{2}|3\times4-1\times1|=\dfrac{11}{2} \)。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 最小値</div>
<p class="qz-q">\( \vec{a}=(1,3) \) ・ \( \vec{b}=(1,-1) \) とする。実数 \( t \) を動かす時 \( |\vec{a}+t\vec{b}| \) の最小値を求めよ。</p>
<ol><li>\( \sqrt{2} \)</li><li>2</li><li>\( 2\sqrt{2} \)</li><li>\( \sqrt{10} \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\( |\vec{b}|^2=2 \) ・ \( \vec{a}\cdot\vec{b}=1-3=-2 \) ・ \( |\vec{a}|^2=10 \)。\( 2t^2-4t+10=2(t-1)^2+8 \) で最小値は \( t=1 \) の時の8。大きさは \( 2\sqrt{2} \)。検算 \( \vec{a}+\vec{b}=(2,2) \)。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 正射影</div>
<p class="qz-q">\( \vec{b}=(3,1) \) の \( \vec{a}=(1,2) \) 上への正射影を求めよ。</p>
<ol><li>\( (1,2) \)</li><li>\( (3,1) \)</li><li>\( \left(\dfrac{1}{2},1\right) \)</li><li>\( (5,10) \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。\( \vec{a}\cdot\vec{b}=3+2=5 \) ・ \( |\vec{a}|^2=5 \) なので \( \dfrac{5}{5}\vec{a}=(1,2) \)。残り \( (2,-1) \) は \( \vec{a} \) と垂直である。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 性質の確認</div>
<p class="qz-q">次の記述のうち常に正しいものを1つ選べ。</p>
<ol><li>\( \vec{a}\cdot\vec{b}=0 \) ならば \( \vec{a}=\vec{0} \) または \( \vec{b}=\vec{0} \)</li><li>\( (\vec{a}\cdot\vec{b})\vec{c}=\vec{a}(\vec{b}\cdot\vec{c}) \)</li><li>\( |\vec{a}+\vec{b}|^2=|\vec{a}|^2+2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2 \)</li><li>\( (\vec{a}\cdot\vec{b})^2=|\vec{a}|^2|\vec{b}|^2 \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。1 は垂直な2本で反例がある。2 は左辺が \( \vec{c} \) の向きで右辺が \( \vec{a} \) の向きである。4 は \( \cos^2\theta=1 \) すなわち平行の時に限る。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
\( \vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\theta \)。なす角は始点をそろえて測る。<br>
成分では \( \vec{a}\cdot\vec{b}=a_1b_1+a_2b_2 \)。余弦定理から導かれる。<br>
\( \vec{a}\perp\vec{b}\iff a_1b_1+a_2b_2=0 \)。平行条件 \( a_1b_2-a_2b_1=0 \) と区別する。<br>
大きさは2乗して \( |\vec{a}+t\vec{b}|^2=|\vec{a}|^2+2t\,\vec{a}\cdot\vec{b}+t^2|\vec{b}|^2 \) と展開する。<br>
\( S=\dfrac{1}{2}\sqrt{|\vec{a}|^2|\vec{b}|^2-(\vec{a}\cdot\vec{b})^2}=\dfrac{1}{2}|a_1b_2-a_2b_1| \)。<br>
正射影は \( \dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}|^2}\vec{a} \) で残りは \( \vec{a} \) と垂直になる。</div>

<h2 id="s10">残っている問い</h2>
<ul>
<li class="tb-vnote">高校の内積はなす角と長さを先に定義しそこから内積を定める。大学の線形代数では逆に内積を公理で定義しそこから長さと角を定める。数列や関数の空間で角を考えられるのはこの順序の逆転による。</li>
<li class="tb-vnote">「正射影」の語と公式は多くの教科書で発展や補足として扱われる。学習指導要領解説の数学Cの記述では正射影の語を確認できなかった。共通テストでは誘導つきで出題されると考えるのが安全である。</li>
<li class="tb-vnote">回帰分析の正射影による説明は説明変数が1つで定数項のない場合に限った。定数項を含む一般の場合は第6章で扱う。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>高等学校学習指導要領 平成30年告示 解説 数学編 理数編 数学C (1)ベクトル — https://www.mext.go.jp/content/20260115-mxt_kyoiku02-100002620_04.pdf</li>
<li>Dot product — Wikipedia — https://en.wikipedia.org/wiki/Dot_product</li>
<li>Law of cosines — Wikipedia — https://en.wikipedia.org/wiki/Law_of_cosines</li>
<li>Vector projection — Wikipedia — https://en.wikipedia.org/wiki/Vector_projection</li>
<li>Pearson correlation coefficient — Wikipedia — https://en.wikipedia.org/wiki/Pearson_correlation_coefficient</li>
<li>Work (physics) — Wikipedia — https://en.wikipedia.org/wiki/Work_(physics)</li>
<li>Cosine similarity — Wikipedia — https://en.wikipedia.org/wiki/Cosine_similarity</li>
</ol>
