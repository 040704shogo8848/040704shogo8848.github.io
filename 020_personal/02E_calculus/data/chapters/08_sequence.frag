<!--meta
{"chapter": 8, "part": "数学B", "title": "数列と数学的帰納法", "thesis": "数列は自然数 n を入力として値を返す関数である。等差は足し算の繰り返しで等比は掛け算の繰り返しである。和の公式も漸化式の解法も同じ数列を2通りに並べて差をとる操作から導ける。", "verify": {"date": "2026-10-15", "checked": 48, "match": 43, "fixed": 2, "unconfirmed": 3}}
-->
<p>第1章の1次関数は x が1増えるたびに y が一定量だけ増える関数であった。第2章の指数関数は x が1増えるたびに y が一定の倍率で増える関数であった。この章ではこの2つを自然数 \(n=1,2,3,\dots\) だけで考える。それが等差数列と等比数列である。続いて和を Σ 記号で表し和の公式を導く。最後に前の項から次の項を決める漸化式と自然数すべてについての命題を証明する数学的帰納法を扱う。</p>
<p>共通テスト「数学Ⅱ・数学B・数学C」では数列・統計的な推測・ベクトル・平面上の曲線と複素数平面の4項目から3項目を選んで解答する。この章は一般項・和・漸化式の順に積み上げる。第9章で扱う数列の極限はこの章で求めた一般項を基に考える。</p>

<h2 id="s1">数列と等差数列</h2>
<p>数を1列に並べたものを<strong>数列</strong>と呼ぶ。並んだ各数を<strong>項</strong>と呼び最初から順に第1項・第2項・第3項と数える。第1項を<strong>初項</strong>と呼ぶ。第 n 項を n の式で表したものを<strong>一般項</strong>と呼び \(a_n\) と書く。項の個数が有限なら最後の項を<strong>末項</strong>と呼び項の個数を<strong>項数</strong>と呼ぶ。</p>
<p>一般項が分かれば任意の項を計算できる。数列は自然数 n を入力として値 \(a_n\) を返す関数である。関数 \(f(x)\) の x を自然数に限ったものと考えてよい。</p>
<h3>等差数列の一般項</h3>
<p>各項に一定の数 d を足すと次の項になる数列を<strong>等差数列</strong>と呼ぶ。d を<strong>公差</strong>と呼ぶ。初項 a から第 n 項までに d を足す回数は n 回ではなく \(n-1\) 回である。第1項から第2項へ1回・第3項へ2回と数えるとこの回数が確かめられる。したがって一般項は次の式になる。</p>
\[ a_n=a+(n-1)d \]
<p>3つの数 a・b・c がこの順に等差数列になる条件は \(b-a=c-b\) である。整理すると \(2b=a+c\) となる。b を<strong>等差中項</strong>と呼ぶ。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>第3項が 11 で第10項が 32 の等差数列の一般項を求めよ。</p>
<details open><summary>解き方</summary><div>初項を a・公差を d とする。<br>第3項から \(a+2d=11\) ・ 第10項から \(a+9d=32\)<br>辺々引くと \(7d=21\) で \(d=3\) ・ 代入して \(a=5\)<br>答え \(a_n=5+(n-1)\cdot 3=3n+2\)<br>検算 \(a_3=11\) ・ \(a_{10}=32\) で一致する。</div></details></div>

<h3>等差数列の和</h3>
<p>1 から 5 までの和を考える。同じ和を逆順に並べて上下に足すと各列は 1＋5＝2＋4＝3＋3＝6 でそろう。6 が5列あるので合計は 30 で求める和はその半分の 15 である。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="1から5までの和を逆順に並べて長方形にする">
<rect x="50" y="210" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="50" y="180" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<rect x="50" y="150" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<rect x="50" y="120" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<rect x="50" y="90" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<rect x="50" y="60" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<text x="64" y="258" font-size="12" text-anchor="middle" fill="var(--sub)" >1</text>
<rect x="80" y="210" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="80" y="180" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="80" y="150" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<rect x="80" y="120" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<rect x="80" y="90" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<rect x="80" y="60" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<text x="94" y="258" font-size="12" text-anchor="middle" fill="var(--sub)" >2</text>
<rect x="110" y="210" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="110" y="180" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="110" y="150" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="110" y="120" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<rect x="110" y="90" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<rect x="110" y="60" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<text x="124" y="258" font-size="12" text-anchor="middle" fill="var(--sub)" >3</text>
<rect x="140" y="210" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="140" y="180" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="140" y="150" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="140" y="120" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="140" y="90" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<rect x="140" y="60" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<text x="154" y="258" font-size="12" text-anchor="middle" fill="var(--sub)" >4</text>
<rect x="170" y="210" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="170" y="180" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="170" y="150" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="170" y="120" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="170" y="90" width="28" height="28" fill="var(--warm)" opacity="0.85"/>
<rect x="170" y="60" width="28" height="28" fill="var(--cool)" opacity="0.85"/>
<text x="184" y="258" font-size="12" text-anchor="middle" fill="var(--sub)" >5</text>
<text x="125" y="22" font-size="13" text-anchor="middle" fill="var(--muted)" >横5列 縦6段</text>
<rect x="260" y="60" width="14" height="14" fill="var(--warm)"/>
<text x="282" y="72" font-size="13" text-anchor="start" fill="var(--ink)" >下から 1 2 3 4 5 個</text>
<rect x="260" y="90" width="14" height="14" fill="var(--cool)"/>
<text x="282" y="102" font-size="13" text-anchor="start" fill="var(--ink)" >上から 5 4 3 2 1 個 逆順に並べた同じ和</text>
<text x="260" y="140" font-size="13" text-anchor="start" fill="var(--ink)" >どの列も 1＋5＝2＋4＝…＝6 個で高さがそろう</text>
<text x="260" y="170" font-size="13" text-anchor="start" fill="var(--ink)" >長方形の個数は 5×6＝30 個</text>
<text x="260" y="200" font-size="14" text-anchor="start" fill="var(--accent)" font-weight="600">求める和はその半分で 15 個</text>
<text x="260" y="232" font-size="13" text-anchor="start" fill="var(--sub)" >一般に 和＝項数×（初項＋末項）÷2</text>
</svg>
<figcaption>暖色の列は 1・2・3・4・5 個で寒色の列は同じ和を逆順に積んだもの。どの列も高さが6になり全体は 5×6 の長方形になる。</figcaption>
</figure>
<p>一般の等差数列でも同じ操作が成り立つ。初項 a から末項 l までの和 \(S_n\) を正順と逆順に書いて足すと各組の和はどれも \(a+l\) になる。組は n 個あるので \(2S_n=n(a+l)\) である。</p>
\[ S_n=\frac{n(a+l)}{2}=\frac{n\{2a+(n-1)d\}}{2} \]
<p>右の式は \(l=a+(n-1)d\) を代入したものである。末項が分かれば左の式・公差が分かれば右の式を使う。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>2桁の自然数のうち 3 で割ると 1 余る数の和を求めよ。</p>
<details open><summary>解き方</summary><div>該当する数は 10・13・16・…・97 で初項 10 ・公差 3 の等差数列である。<br>項数は \(10+3(n-1)=97\) から \(n=30\)<br>和は \(\frac{30(10+97)}{2}=15\times 107=1605\)<br>答え 1605</div></details></div>

<h3>和の最大値</h3>
<p>公差が負の等差数列では項が正から負へ変わる。正の項をすべて足し終えた時点で和が最大になる。和の式を n の2次関数とみて最大値を求めてもよいが n は自然数に限られるので項の符号を調べるほうが確実である。</p>
<div class="ex"><div class="ex-h">例題 3</div>
<p>初項 50 ・公差 −3 の等差数列の初項から第 n 項までの和 \(S_n\) の最大値を求めよ。</p>
<details open><summary>解き方</summary><div>一般項は \(a_n=50-3(n-1)=53-3n\)<br>\(a_n>0\) を解くと \(n<17.66\cdots\) で \(a_{17}=2\) ・ \(a_{18}=-1\)<br>第17項までは正で第18項から負なので \(S_{17}\) が最大<br>\(S_{17}=\frac{17(50+2)}{2}=442\)<br>答え n＝17 のとき最大値 442</div></details></div>
<p><strong>典型的な誤り</strong>は項数の数え違いである。10 から 97 までを \((97-10)\div 3=29\) 項と数えるのは誤りで両端を含めると 30 項である。植木算と同じく間の個数に1を足す。</p>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">定額法の減価償却は等差数列である</p>
<p>毎期同じ額を引くので帳簿価額は公差が負の等差数列になる。定率法は毎期同じ割合を掛けるので等比数列になる。</p>
</aside>

<h2 id="s2">等比数列とその和</h2>
<p>各項に一定の数 r を掛けると次の項になる数列を<strong>等比数列</strong>と呼ぶ。r を<strong>公比</strong>と呼ぶ。初項 a から第 n 項までに r を掛ける回数は \(n-1\) 回なので一般項は次の式になる。</p>
\[ a_n=ar^{n-1} \]
<p>0 でない3つの数 a・b・c がこの順に等比数列になる条件は \(\frac{b}{a}=\frac{c}{b}\) で整理すると \(b^2=ac\) である。b を<strong>等比中項</strong>と呼ぶ。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 275" role="img" aria-label="初項100の等差数列と等比数列の増え方の比較">
<line x1="70" y1="20" x2="70" y2="250" stroke="var(--line)" stroke-width="0.7"/>
<line x1="165" y1="20" x2="165" y2="250" stroke="var(--line)" stroke-width="0.7"/>
<line x1="260" y1="20" x2="260" y2="250" stroke="var(--line)" stroke-width="0.7"/>
<line x1="355" y1="20" x2="355" y2="250" stroke="var(--line)" stroke-width="0.7"/>
<line x1="450" y1="20" x2="450" y2="250" stroke="var(--line)" stroke-width="0.7"/>
<line x1="545" y1="20" x2="545" y2="250" stroke="var(--line)" stroke-width="0.7"/>
<line x1="640" y1="20" x2="640" y2="250" stroke="var(--line)" stroke-width="0.7"/>
<line x1="70" y1="250" x2="640" y2="250" stroke="var(--line)" stroke-width="0.7"/>
<line x1="70" y1="173.3" x2="640" y2="173.3" stroke="var(--line)" stroke-width="0.7"/>
<line x1="70" y1="96.7" x2="640" y2="96.7" stroke="var(--line)" stroke-width="0.7"/>
<line x1="70" y1="20" x2="640" y2="20" stroke="var(--line)" stroke-width="0.7"/>
<line x1="70" y1="250" x2="640" y2="250" stroke="var(--ink)" stroke-width="1"/>
<line x1="70" y1="20" x2="70" y2="250" stroke="var(--ink)" stroke-width="1"/>
<line x1="70" y1="247" x2="70" y2="253" stroke="var(--ink)"/>
<text x="70" y="267" font-size="12" text-anchor="middle" fill="var(--sub)">0</text>
<line x1="165" y1="247" x2="165" y2="253" stroke="var(--ink)"/>
<text x="165" y="267" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<line x1="260" y1="247" x2="260" y2="253" stroke="var(--ink)"/>
<text x="260" y="267" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<line x1="355" y1="247" x2="355" y2="253" stroke="var(--ink)"/>
<text x="355" y="267" font-size="12" text-anchor="middle" fill="var(--sub)">6</text>
<line x1="450" y1="247" x2="450" y2="253" stroke="var(--ink)"/>
<text x="450" y="267" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<line x1="545" y1="247" x2="545" y2="253" stroke="var(--ink)"/>
<text x="545" y="267" font-size="12" text-anchor="middle" fill="var(--sub)">10</text>
<line x1="640" y1="247" x2="640" y2="253" stroke="var(--ink)"/>
<text x="640" y="267" font-size="12" text-anchor="middle" fill="var(--sub)">12</text>
<line x1="67" y1="250" x2="73" y2="250" stroke="var(--ink)"/>
<text x="64" y="254" font-size="12" text-anchor="end" fill="var(--sub)">0</text>
<line x1="67" y1="173.3" x2="73" y2="173.3" stroke="var(--ink)"/>
<text x="64" y="177.3" font-size="12" text-anchor="end" fill="var(--sub)">300</text>
<line x1="67" y1="96.7" x2="73" y2="96.7" stroke="var(--ink)"/>
<text x="64" y="100.7" font-size="12" text-anchor="end" fill="var(--sub)">600</text>
<line x1="67" y1="20" x2="73" y2="20" stroke="var(--ink)"/>
<text x="64" y="24" font-size="12" text-anchor="end" fill="var(--sub)">900</text>
<text x="644" y="254" font-size="13" font-style="italic" fill="var(--ink)">n</text>
<text x="75" y="22" font-size="13" font-style="italic" fill="var(--ink)"></text>
<polyline fill="none" stroke="var(--cool)" stroke-width="2" points="70,224.4 117.5,219.3 165,214.2 212.5,209.1 260,204 307.5,198.9 355,193.8 402.5,188.7 450,183.6 497.5,178.4 545,173.3 592.5,168.2 640,163.1"/>
<polyline fill="none" stroke="var(--warm)" stroke-width="2" points="70,224.4 117.5,219.3 165,213.2 212.5,205.8 260,197 307.5,186.4 355,173.7 402.5,158.4 450,140.1 497.5,118.1 545,91.8 592.5,60.1 640,22.1"/>
<circle cx="70" cy="224.4" r="3.5" fill="var(--cool)"/>
<circle cx="117.5" cy="219.3" r="3.5" fill="var(--cool)"/>
<circle cx="165" cy="214.2" r="3.5" fill="var(--cool)"/>
<circle cx="212.5" cy="209.1" r="3.5" fill="var(--cool)"/>
<circle cx="260" cy="204" r="3.5" fill="var(--cool)"/>
<circle cx="307.5" cy="198.9" r="3.5" fill="var(--cool)"/>
<circle cx="355" cy="193.8" r="3.5" fill="var(--cool)"/>
<circle cx="402.5" cy="188.7" r="3.5" fill="var(--cool)"/>
<circle cx="450" cy="183.6" r="3.5" fill="var(--cool)"/>
<circle cx="497.5" cy="178.4" r="3.5" fill="var(--cool)"/>
<circle cx="545" cy="173.3" r="3.5" fill="var(--cool)"/>
<circle cx="592.5" cy="168.2" r="3.5" fill="var(--cool)"/>
<circle cx="640" cy="163.1" r="3.5" fill="var(--cool)"/>
<circle cx="70" cy="224.4" r="3.5" fill="var(--warm)"/>
<circle cx="117.5" cy="219.3" r="3.5" fill="var(--warm)"/>
<circle cx="165" cy="213.2" r="3.5" fill="var(--warm)"/>
<circle cx="212.5" cy="205.8" r="3.5" fill="var(--warm)"/>
<circle cx="260" cy="197" r="3.5" fill="var(--warm)"/>
<circle cx="307.5" cy="186.4" r="3.5" fill="var(--warm)"/>
<circle cx="355" cy="173.7" r="3.5" fill="var(--warm)"/>
<circle cx="402.5" cy="158.4" r="3.5" fill="var(--warm)"/>
<circle cx="450" cy="140.1" r="3.5" fill="var(--warm)"/>
<circle cx="497.5" cy="118.1" r="3.5" fill="var(--warm)"/>
<circle cx="545" cy="91.8" r="3.5" fill="var(--warm)"/>
<circle cx="592.5" cy="60.1" r="3.5" fill="var(--warm)"/>
<circle cx="640" cy="22.1" r="3.5" fill="var(--warm)"/>
<text x="646" y="26.1" font-size="13" text-anchor="start" fill="var(--warm)" >等比 約892</text>
<text x="646" y="167.1" font-size="13" text-anchor="start" fill="var(--cool)" >等差 340</text>
<text x="90" y="40" font-size="13" text-anchor="start" fill="var(--cool)" >等差 毎回 ＋20</text>
<text x="90" y="58" font-size="13" text-anchor="start" fill="var(--warm)" >等比 毎回 ×1.2</text>
</svg>
<figcaption>100から毎回20足す 100＋20n と毎回1.2倍する 100×1.2ⁿ を n＝0 から12まで比べた。n＝1 ではどちらも120で n＝2 以降は等比が上回る。n＝12 では約892と340で約2.6倍になる。</figcaption>
</figure>
<h3>等比数列の和の公式の導出</h3>
<p>和 \(S_n=a+ar+ar^2+\dots+ar^{n-1}\) の両辺に r を掛けると \(rS_n=ar+ar^2+\dots+ar^{n}\) となる。2つの式は右辺の大部分が一致する。上から下を引くと \(ar\) から \(ar^{n-1}\) までが消えて両端だけが残る。</p>
\[ S_n-rS_n=a-ar^n \quad\Longrightarrow\quad (1-r)S_n=a(1-r^n) \]
<p>\(r\neq 1\) なら両辺を \(1-r\) で割れる。\(r=1\) なら全項が a なので和は \(na\) である。</p>
\[ S_n=\frac{a(1-r^n)}{1-r}=\frac{a(r^n-1)}{r-1}\quad (r\neq 1) ,\qquad S_n=na\quad (r=1) \]
<p>2つの形は分母と分子の両方に −1 を掛けたもので値は等しい。\(r>1\) なら右の形を使うと符号の誤りが減る。</p>

<div class="ex"><div class="ex-h">例題 4</div>
<p>初項 3 ・公比 2 の等比数列の初項から第 8 項までの和を求めよ。また和が初めて 1000 を超えるのは第何項までの和か。</p>
<details open><summary>解き方</summary><div>\(S_8=\frac{3(2^8-1)}{2-1}=3\times 255=765\)<br>\(S_n=3(2^n-1)>1000\) を解く。\(2^n-1>333.3\cdots\) なので \(2^n>334.3\cdots\)<br>\(2^8=256\) ・ \(2^9=512\) より最小の n は 9<br>答え 765 ・ 第9項まで</div></details></div>

<h3>等差×等比の和</h3>
<p>\(\sum_{k=1}^{n}k\cdot 2^{k-1}\) のように等差数列と等比数列の積の和も同じ操作で求まる。和を S とし公比の 2 を掛けた 2S を1項ずらして並べて引くと等比数列の和が残る。</p>
<div class="ex"><div class="ex-h">例題 5</div>
<p>\(S=1\cdot 1+2\cdot 2+3\cdot 2^2+\dots+n\cdot 2^{n-1}\) を求めよ。</p>
<details open><summary>解き方</summary><div>\(2S=1\cdot 2+2\cdot 2^2+\dots+(n-1)2^{n-1}+n\cdot 2^n\)<br>\(S-2S=1+2+2^2+\dots+2^{n-1}-n\cdot 2^n\)<br>\(-S=(2^n-1)-n\cdot 2^n\)<br>答え \(S=(n-1)2^n+1\)<br>検算 n＝3 で \(1+4+12=17\) ・ 式は \(2\cdot 8+1=17\)</div></details></div>
<p>引き算の右辺で最後の項 \(n\cdot 2^n\) の符号を誤りやすい。2S の側にだけある項は引かれて負になる。</p>
<p><strong>典型的な誤り</strong>は2つある。1つは一般項の指数を n とする誤りで \(a_n=ar^{n-1}\) の \(n-1\) を確認する。もう1つは公比が文字のときに \(r=1\) の場合分けを忘れる誤りである。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">単利は等差数列で複利は等比数列である</p>
<p>元本100万円・年5％の単利は毎年5万円ずつ増える。複利は毎年1.05倍になり10年後に約162.9万円である。</p>
</aside>

<h2 id="s3">Σ記号と和の公式</h2>
<p>数列の和 \(a_1+a_2+\dots+a_n\) を次のように書く。Σ はギリシャ文字のシグマで和を表す。下の \(k=1\) から上の n まで k を1ずつ変えて \(a_k\) を足す意味である。</p>
\[ \sum_{k=1}^{n}a_k=a_1+a_2+\dots+a_n \]
<p>Σ には次の性質がある。足す順序の入れ替えと分配法則により和と定数倍は Σ の外に出せる。</p>
\[ \sum_{k=1}^{n}(pa_k+qb_k)=p\sum_{k=1}^{n}a_k+q\sum_{k=1}^{n}b_k \]
<p>一方で積は外に出せない。\(\sum a_kb_k\) は \(\left(\sum a_k\right)\left(\sum b_k\right)\) と一般に一致しない。n＝2 で \(a_1b_1+a_2b_2\) と \((a_1+a_2)(b_1+b_2)\) を比べると後者には \(a_1b_2+a_2b_1\) が余分に含まれる。</p>
<h3>基本の4公式</h3>
<div class="tb-tw"><table>
<thead><tr><th>和</th><th>結果</th><th>根拠</th></tr></thead>
<tbody>
<tr><td>\(\sum_{k=1}^{n}c\)</td><td>\(cn\)</td><td>c を n 回足す</td></tr>
<tr><td>\(\sum_{k=1}^{n}k\)</td><td>\(\frac{1}{2}n(n+1)\)</td><td>等差数列の和</td></tr>
<tr><td>\(\sum_{k=1}^{n}k^2\)</td><td>\(\frac{1}{6}n(n+1)(2n+1)\)</td><td>\((k+1)^3-k^3\) の和</td></tr>
<tr><td>\(\sum_{k=1}^{n}k^3\)</td><td>\(\left\{\frac{1}{2}n(n+1)\right\}^2\)</td><td>\((k+1)^4-k^4\) の和</td></tr>
</tbody></table></div>
<p>\(\sum k^2\) の導出を示す。恒等式 \((k+1)^3-k^3=3k^2+3k+1\) を k＝1 から n まで足す。左辺は \(2^3-1^3\) と \(3^3-2^3\) のように隣どうしが打ち消し合い \((n+1)^3-1\) だけが残る。</p>
\[ (n+1)^3-1=3\sum_{k=1}^{n}k^2+3\cdot\frac{n(n+1)}{2}+n \]
<p>これを \(\sum k^2\) について解く。\((n+1)^3-1-n=(n+1)\{(n+1)^2-1\}=n(n+1)(n+2)\) を使うと次の式になる。</p>
\[ 3\sum_{k=1}^{n}k^2=n(n+1)(n+2)-\frac{3n(n+1)}{2}=\frac{n(n+1)(2n+1)}{2} \]
<p>両辺を3で割れば公式が得られる。\(\sum k^3\) も同じ方法で \((k+1)^4-k^4=4k^3+6k^2+4k+1\) を足して導ける。結果は \(\sum k\) の2乗に等しい。n＝3 なら \(1+8+27=36=6^2\) で確かめられる。</p>
<p>隣どうしが打ち消し合う和は分数でも使える。\(\frac{1}{k(k+1)}=\frac{1}{k}-\frac{1}{k+1}\) と分解すると次のように両端だけが残る。この分解を<strong>部分分数分解</strong>と呼ぶ。</p>
\[ \sum_{k=1}^{n}\frac{1}{k(k+1)}=\left(1-\frac{1}{2}\right)+\left(\frac{1}{2}-\frac{1}{3}\right)+\dots+\left(\frac{1}{n}-\frac{1}{n+1}\right)=1-\frac{1}{n+1}=\frac{n}{n+1} \]

<div class="ex"><div class="ex-h">例題 6</div>
<p>\(\sum_{k=1}^{n}(2k-1)^2\) を求めよ。</p>
<details open><summary>解き方</summary><div>展開して \((2k-1)^2=4k^2-4k+1\)<br>和の性質で \(4\sum k^2-4\sum k+\sum 1\)<br>\(=4\cdot\frac{n(n+1)(2n+1)}{6}-4\cdot\frac{n(n+1)}{2}+n\)<br>\(=\frac{n}{3}\{2(n+1)(2n+1)-6(n+1)+3\}=\frac{n}{3}(4n^2-1)\)<br>答え \(\frac{1}{3}n(2n-1)(2n+1)\)<br>検算 n＝2 で \(1+9=10\) ・ 式は \(\frac{1}{3}\cdot 2\cdot 3\cdot 5=10\) で一致する。</div></details></div>

<p><strong>典型的な誤り</strong>は \(\sum_{k=1}^{n}5\) を 5 とする誤りである。5 を n 回足すので \(5n\) になる。もう1つは上端が \(n-1\) の和に \(\frac{1}{2}n(n+1)\) をそのまま使う誤りである。n を \(n-1\) に置き換えて \(\frac{1}{2}(n-1)n\) とする。</p>

<h2 id="s4">階差数列と和から一般項を求める方法</h2>
<p>数列 \(\{a_n\}\) の隣り合う項の差 \(b_n=a_{n+1}-a_n\) を並べた数列を<strong>階差数列</strong>と呼ぶ。一般項が直接分からなくても階差に規則があれば一般項を求められる。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 245" role="img" aria-label="数列 2 5 10 17 26 37 とその階差数列 3 5 7 9 11">
<text x="20" y="60" font-size="13" text-anchor="start" fill="var(--muted)" >数列 aₙ</text>
<text x="20" y="150" font-size="13" text-anchor="start" fill="var(--muted)" >階差 bₙ</text>
<circle cx="120" cy="55" r="20" fill="var(--warm)"/>
<text x="120" y="60" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">2</text>
<text x="120" y="26" font-size="12" text-anchor="middle" fill="var(--sub)" >a₁</text>
<circle cx="220" cy="55" r="20" fill="var(--warm)"/>
<text x="220" y="60" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">5</text>
<text x="220" y="26" font-size="12" text-anchor="middle" fill="var(--sub)" >a₂</text>
<circle cx="320" cy="55" r="20" fill="var(--warm)"/>
<text x="320" y="60" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">10</text>
<text x="320" y="26" font-size="12" text-anchor="middle" fill="var(--sub)" >a₃</text>
<circle cx="420" cy="55" r="20" fill="var(--warm)"/>
<text x="420" y="60" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">17</text>
<text x="420" y="26" font-size="12" text-anchor="middle" fill="var(--sub)" >a₄</text>
<circle cx="520" cy="55" r="20" fill="var(--warm)"/>
<text x="520" y="60" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">26</text>
<text x="520" y="26" font-size="12" text-anchor="middle" fill="var(--sub)" >a₅</text>
<circle cx="620" cy="55" r="20" fill="var(--warm)"/>
<text x="620" y="60" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">37</text>
<text x="620" y="26" font-size="12" text-anchor="middle" fill="var(--sub)" >a₆</text>
<line x1="132" y1="76" x2="166" y2="128" stroke="var(--line)" stroke-width="1.5"/>
<line x1="208" y1="76" x2="174" y2="128" stroke="var(--line)" stroke-width="1.5"/>
<rect x="150" y="133" width="40" height="28" rx="4" fill="var(--cool)"/>
<text x="170" y="152" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">3</text>
<line x1="232" y1="76" x2="266" y2="128" stroke="var(--line)" stroke-width="1.5"/>
<line x1="308" y1="76" x2="274" y2="128" stroke="var(--line)" stroke-width="1.5"/>
<rect x="250" y="133" width="40" height="28" rx="4" fill="var(--cool)"/>
<text x="270" y="152" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">5</text>
<line x1="332" y1="76" x2="366" y2="128" stroke="var(--line)" stroke-width="1.5"/>
<line x1="408" y1="76" x2="374" y2="128" stroke="var(--line)" stroke-width="1.5"/>
<rect x="350" y="133" width="40" height="28" rx="4" fill="var(--cool)"/>
<text x="370" y="152" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">7</text>
<line x1="432" y1="76" x2="466" y2="128" stroke="var(--line)" stroke-width="1.5"/>
<line x1="508" y1="76" x2="474" y2="128" stroke="var(--line)" stroke-width="1.5"/>
<rect x="450" y="133" width="40" height="28" rx="4" fill="var(--cool)"/>
<text x="470" y="152" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">9</text>
<line x1="532" y1="76" x2="566" y2="128" stroke="var(--line)" stroke-width="1.5"/>
<line x1="608" y1="76" x2="574" y2="128" stroke="var(--line)" stroke-width="1.5"/>
<rect x="550" y="133" width="40" height="28" rx="4" fill="var(--cool)"/>
<text x="570" y="152" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">11</text>
<text x="120" y="200" font-size="14" text-anchor="start" fill="var(--ink)" >a₄＝a₁＋(b₁＋b₂＋b₃)＝2＋(3＋5＋7)＝17</text>
<text x="120" y="226" font-size="13" text-anchor="start" fill="var(--sub)" >第n項は初項に階差を n−1 個だけ足した値である</text>
</svg>
<figcaption>上段の数列 2・5・10・17・26・37 は規則が一見して分からない。下段の差は 3・5・7・9・11 で公差2の等差数列である。</figcaption>
</figure>
<p>\(a_2=a_1+b_1\) ・ \(a_3=a_1+b_1+b_2\) と続くので第 n 項は初項に階差を \(n-1\) 個足した値になる。</p>
\[ a_n=a_1+\sum_{k=1}^{n-1}b_k\qquad (n\ge 2) \]
<p>この式は \(n\ge 2\) でしか使えない。n＝1 では足す個数が0個になり Σ の上端が0になるからである。得た式が n＝1 でも成り立つかを最後に確かめる。</p>

<div class="ex"><div class="ex-h">例題 7</div>
<p>数列 2・5・10・17・26・… の一般項を求めよ。</p>
<details open><summary>解き方</summary><div>階差数列は 3・5・7・9・… で \(b_k=2k+1\)<br>\(n\ge 2\) のとき \(a_n=2+\sum_{k=1}^{n-1}(2k+1)=2+2\cdot\frac{(n-1)n}{2}+(n-1)\)<br>\(=2+n^2-n+n-1=n^2+1\)<br>n＝1 のとき \(1^2+1=2\) で初項と一致する<br>答え \(a_n=n^2+1\)</div></details></div>

<h3>和 S<sub>n</sub> から一般項を求める</h3>
<p>初項から第 n 項までの和 \(S_n\) が分かっているとき \(S_n\) と \(S_{n-1}\) の差は第 n 項だけである。</p>
\[ a_1=S_1,\qquad a_n=S_n-S_{n-1}\quad (n\ge 2) \]
<p>ここでも \(n\ge 2\) の制限がある。\(S_0\) は定義されていないからである。</p>

<div class="ex"><div class="ex-h">例題 8</div>
<p>\(S_n=n^2+2n+3\) のとき一般項 \(a_n\) を求めよ。</p>
<details open><summary>解き方</summary><div>\(a_1=S_1=6\)<br>\(n\ge 2\) のとき \(a_n=(n^2+2n+3)-\{(n-1)^2+2(n-1)+3\}=2n+1\)<br>n＝1 を代入すると 3 で \(a_1=6\) と一致しない<br>答え \(a_1=6\) ・ \(n\ge 2\) のとき \(a_n=2n+1\)</div></details></div>

<p><strong>典型的な誤り</strong>は n＝1 の確認を省いて \(a_n=2n+1\) と1本の式で答えることである。\(S_n\) に定数項があると n＝1 だけが式から外れる。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">通算本塁打が数列で1試合ごとの本塁打が階差数列である</p>
<p>通算記録は初戦の値に毎試合の増分を足したもの。\(a_n=a_1+\sum b_k\) はこの計算そのものである。</p>
</aside>

<h2 id="s5">漸化式</h2>
<p>初項と「前の項から次の項を決める規則」で数列を定める式を<strong>漸化式</strong>と呼ぶ。漸化式が与えられれば項を1つずつ順に計算できる。試験では一般項を求めることが問われる。基本の型は次の4つである。</p>
<div class="tb-tw"><table>
<thead><tr><th>型</th><th>漸化式</th><th>一般項の求め方</th></tr></thead>
<tbody>
<tr><td>等差型</td><td>\(a_{n+1}=a_n+d\)</td><td>公差 d の等差数列</td></tr>
<tr><td>等比型</td><td>\(a_{n+1}=ra_n\)</td><td>公比 r の等比数列</td></tr>
<tr><td>階差型</td><td>\(a_{n+1}=a_n+f(n)\)</td><td>階差が \(f(n)\) なので第4節の式</td></tr>
<tr><td>1次型</td><td>\(a_{n+1}=pa_n+q\)</td><td>\(\alpha=p\alpha+q\) の解 α を引いて等比型にする</td></tr>
</tbody></table></div>
<h3>a<sub>n+1</sub>＝pa<sub>n</sub>＋q 型の解き方と理由</h3>
<p>p≠1 とする。数 α が \(\alpha=p\alpha+q\) を満たすとする。漸化式からこの式を辺々引くと q が消える。</p>
\[ a_{n+1}-\alpha=p(a_n-\alpha) \]
<p>この式は数列 \(\{a_n-\alpha\}\) が公比 p の等比数列であることを示す。したがって \(a_n-\alpha=(a_1-\alpha)p^{n-1}\) で一般項が求まる。α は数列の項ではない。式を等比型に変えるために用いる補助の数である。\(\alpha=p\alpha+q\) から \(\alpha=\frac{q}{1-p}\) である。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 275" role="img" aria-label="漸化式 aₙ₊₁＝½aₙ＋3 の値が6に近づく様子">
<line x1="60" y1="255" x2="300" y2="255" stroke="var(--ink)" stroke-width="1"/>
<line x1="60" y1="15" x2="60" y2="255" stroke="var(--ink)" stroke-width="1"/>
<line x1="120" y1="252" x2="120" y2="258" stroke="var(--ink)"/>
<text x="120" y="272" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<line x1="180" y1="252" x2="180" y2="258" stroke="var(--ink)"/>
<text x="180" y="272" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<line x1="240" y1="252" x2="240" y2="258" stroke="var(--ink)"/>
<text x="240" y="272" font-size="12" text-anchor="middle" fill="var(--sub)">6</text>
<line x1="300" y1="252" x2="300" y2="258" stroke="var(--ink)"/>
<text x="300" y="272" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<line x1="57" y1="195" x2="63" y2="195" stroke="var(--ink)"/>
<text x="54" y="199" font-size="12" text-anchor="end" fill="var(--sub)">2</text>
<line x1="57" y1="135" x2="63" y2="135" stroke="var(--ink)"/>
<text x="54" y="139" font-size="12" text-anchor="end" fill="var(--sub)">4</text>
<line x1="57" y1="75" x2="63" y2="75" stroke="var(--ink)"/>
<text x="54" y="79" font-size="12" text-anchor="end" fill="var(--sub)">6</text>
<line x1="57" y1="15" x2="63" y2="15" stroke="var(--ink)"/>
<text x="54" y="19" font-size="12" text-anchor="end" fill="var(--sub)">8</text>
<text x="304" y="259" font-size="13" font-style="italic" fill="var(--ink)">aₙ</text>
<text x="65" y="17" font-size="13" font-style="italic" fill="var(--ink)">aₙ₊₁</text>
<polyline fill="none" points="60,255 180,135 300,15" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
<polyline fill="none" points="60,165 180,105 300,45" stroke="var(--cool)" stroke-width="2"/>
<polyline fill="none" stroke="var(--warm)" stroke-width="1.8" points="60,255 60,165 150,165 150,120 195,120 195,97.5 217.5,97.5 217.5,86.2 228.8,86.2 228.8,80.6 234.4,80.6 234.4,77.8 237.2,77.8"/>
<circle cx="240" cy="75" r="4.5" fill="var(--accent)"/>
<text x="300" y="105" font-size="13" text-anchor="end" fill="var(--cool)" >y＝½x＋3</text>
<text x="288" y="21" font-size="13" text-anchor="end" fill="var(--muted)" >y＝x</text>
<text x="232" y="67" font-size="12" text-anchor="end" fill="var(--accent)" >(6, 6)</text>
<text x="380" y="40" font-size="13" text-anchor="start" fill="var(--muted)" >a₁＝0 から漸化式を繰り返す</text>
<text x="380" y="68" font-size="13" text-anchor="start" fill="var(--ink)" >a₁</text>
<text x="440" y="68" font-size="13" text-anchor="start" fill="var(--warm)" >0</text>
<text x="540" y="68" font-size="13" text-anchor="start" fill="var(--sub)" >6との差 6</text>
<text x="380" y="92" font-size="13" text-anchor="start" fill="var(--ink)" >a₂</text>
<text x="440" y="92" font-size="13" text-anchor="start" fill="var(--warm)" >3</text>
<text x="540" y="92" font-size="13" text-anchor="start" fill="var(--sub)" >6との差 3</text>
<text x="380" y="116" font-size="13" text-anchor="start" fill="var(--ink)" >a₃</text>
<text x="440" y="116" font-size="13" text-anchor="start" fill="var(--warm)" >4.5</text>
<text x="540" y="116" font-size="13" text-anchor="start" fill="var(--sub)" >6との差 1.5</text>
<text x="380" y="140" font-size="13" text-anchor="start" fill="var(--ink)" >a₄</text>
<text x="440" y="140" font-size="13" text-anchor="start" fill="var(--warm)" >5.25</text>
<text x="540" y="140" font-size="13" text-anchor="start" fill="var(--sub)" >6との差 0.75</text>
<text x="380" y="164" font-size="13" text-anchor="start" fill="var(--ink)" >a₅</text>
<text x="440" y="164" font-size="13" text-anchor="start" fill="var(--warm)" >5.625</text>
<text x="540" y="164" font-size="13" text-anchor="start" fill="var(--sub)" >6との差 0.375</text>
<text x="380" y="188" font-size="13" text-anchor="start" fill="var(--ink)" >a₆</text>
<text x="440" y="188" font-size="13" text-anchor="start" fill="var(--warm)" >5.8125</text>
<text x="540" y="188" font-size="13" text-anchor="start" fill="var(--sub)" >6との差 0.1875</text>
<text x="380" y="212" font-size="13" text-anchor="start" fill="var(--ink)" >a₇</text>
<text x="440" y="212" font-size="13" text-anchor="start" fill="var(--warm)" >5.90625</text>
<text x="540" y="212" font-size="13" text-anchor="start" fill="var(--sub)" >6との差 0.09375</text>
<text x="380" y="250" font-size="13" text-anchor="start" fill="var(--accent)" >差は毎回 ½ 倍になり 0 に近づく</text>
</svg>
<figcaption>直線 y＝½x＋3 で次の項を求め直線 y＝x で横軸に戻す操作を繰り返すと階段状の線になる。2本の直線の交点 (6, 6) の x 座標が α である。6との差は毎回半分になる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 9</div>
<p>\(a_1=0\) ・ \(a_{n+1}=\frac{1}{2}a_n+3\) で定まる数列の一般項を求めよ。</p>
<details open><summary>解き方</summary><div>\(\alpha=\frac{1}{2}\alpha+3\) を解いて \(\alpha=6\)<br>漸化式から引くと \(a_{n+1}-6=\frac{1}{2}(a_n-6)\)<br>\(\{a_n-6\}\) は初項 \(0-6=-6\) ・公比 \(\frac{1}{2}\) の等比数列<br>答え \(a_n=6-6\left(\frac{1}{2}\right)^{n-1}\)<br>検算 \(a_2=6-3=3\) ・ \(a_3=6-\frac{3}{2}=4.5\) で漸化式の値と一致する。</div></details></div>

<div class="ex"><div class="ex-h">例題 10</div>
<p>\(a_1=1\) ・ \(a_{n+1}=3a_n+2\) で定まる数列の一般項を求めよ。</p>
<details open><summary>解き方</summary><div>\(\alpha=3\alpha+2\) から \(\alpha=-1\)<br>\(a_{n+1}+1=3(a_n+1)\) で \(\{a_n+1\}\) は初項2 ・公比3の等比数列<br>答え \(a_n=2\cdot 3^{n-1}-1\)<br>検算 \(a_2=3\cdot 1+2=5\) ・ 式は \(2\cdot 3-1=5\)</div></details></div>

<div class="ex"><div class="ex-h">例題 11</div>
<p>\(a_1=1\) ・ \(a_{n+1}=a_n+2^n\) で定まる数列の一般項を求めよ。</p>
<details open><summary>解き方</summary><div>階差数列が \(b_n=2^n\) の階差型である<br>\(n\ge 2\) のとき \(a_n=1+\sum_{k=1}^{n-1}2^k=1+\frac{2(2^{n-1}-1)}{2-1}=2^n-1\)<br>n＝1 のとき \(2^1-1=1\) で初項と一致する<br>答え \(a_n=2^n-1\)</div></details></div>
<p>階差型では Σ の上端が \(n-1\) になる。等比数列の和の公式に入れるときの項数も \(n-1\) である。</p>
<p><strong>典型的な誤り</strong>は \(a_n-\alpha=(a_1-\alpha)p^{n}\) と指数を n にする誤りである。初項が \(a_1-\alpha\) なので指数は \(n-1\) になる。n＝1 を代入して \(a_1\) に戻るかで確かめられる。</p>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">α は資本ストックの定常状態である</p>
<p>毎期 δ の割合が減耗し I だけ投資すると \(K_{n+1}=(1-\delta)K_n+I\) で \(K_n\) は \(I/\delta\) に近づく。</p>
</aside>

<h2 id="s6">数学的帰納法</h2>
<p>自然数 n についての命題 \(P(n)\) がすべての自然数で成り立つことを示す方法の1つが<strong>数学的帰納法</strong>である。次の2つを示す。</p>
<div class="tb-vs">
<div><h5>Ⅰ 出発点</h5><ul><li>n＝1 のとき \(P(1)\) が成り立つことを示す</li></ul></div>
<div><h5>Ⅱ 引き継ぎ</h5><ul><li>n＝k のとき成り立つと仮定する</li><li>その仮定を使って n＝k＋1 のときも成り立つことを示す</li></ul></div>
</div>
<p>この2つで十分な理由は次のとおりである。Ⅰから \(P(1)\) が成り立つ。Ⅱで k＝1 とすると \(P(2)\) が成り立つ。続いて k＝2 とすると \(P(3)\) が成り立つ。この連鎖はどの自然数にも有限回で到達する。Ⅱで示すのは \(P(k)\) そのものではなく「\(P(k)\) ならば \(P(k+1)\)」という含意である。</p>

<div class="ex"><div class="ex-h">例題 12</div>
<p>すべての自然数 n について \(\sum_{k=1}^{n}k^2=\frac{1}{6}n(n+1)(2n+1)\) が成り立つことを数学的帰納法で証明せよ。</p>
<details open><summary>解き方</summary><div>Ⅰ n＝1 のとき 左辺は 1 ・ 右辺は \(\frac{1}{6}\cdot 1\cdot 2\cdot 3=1\) で成り立つ。<br>Ⅱ n＝k で成り立つと仮定する。n＝k＋1 の左辺は仮定を使って<br>\(\frac{1}{6}k(k+1)(2k+1)+(k+1)^2=\frac{1}{6}(k+1)\{k(2k+1)+6(k+1)\}\)<br>\(=\frac{1}{6}(k+1)(2k^2+7k+6)=\frac{1}{6}(k+1)(k+2)(2k+3)\)<br>これは右辺の n に k＋1 を代入した式 \(\frac{1}{6}(k+1)\{(k+1)+1\}\{2(k+1)+1\}\) と一致する。<br>Ⅰ・Ⅱよりすべての自然数 n で成り立つ。</div></details></div>

<div class="ex"><div class="ex-h">例題 13</div>
<p>n が4以上の自然数のとき \(2^n>3n\) を証明せよ。</p>
<details open><summary>解き方</summary><div>Ⅰ n＝4 のとき \(2^4=16>12\) で成り立つ。<br>Ⅱ k≧4 で \(2^k>3k\) と仮定する。\(2^{k+1}=2\cdot 2^k>6k\)<br>\(6k-3(k+1)=3k-3>0\) なので \(6k>3(k+1)\)<br>よって \(2^{k+1}>3(k+1)\) で n＝k＋1 でも成り立つ。<br>Ⅰ・Ⅱより4以上のすべての自然数で成り立つ。</div></details></div>

<p>数学的帰納法は漸化式と組み合わせて使うことが多い。漸化式で \(a_1\) から \(a_4\) 程度まで計算して一般項を推測する。推測した式がすべての n で正しいことを帰納法で証明する。Ⅱでは漸化式 \(a_{k+1}=\cdots\) に仮定の \(a_k\) の式を代入して \(a_{k+1}\) の式を導く。推測だけでは証明にならないので帰納法の段階が必要になる。</p>
<p>出発点は n＝1 に限らない。例題13のように命題が成り立つ最小の n から始める。n＝3 では \(8>9\) が成り立たないので出発点を誤ると証明にならない。</p>
<p><strong>典型的な誤り</strong>は3つある。Ⅰを省くこと・Ⅱで示すべき n＝k＋1 の式を最初から仮定に使うこと・Ⅱの式変形で仮定を一度も使わないことである。仮定を使わずに n＝k＋1 が示せたならそもそも帰納法は不要である。</p>


<h2 id="s7">現実世界の数列 複利と積立</h2>
<p>金融の計算は等比数列とその和で書ける。元本 P を年利 r の複利で n 年預けると残高は \(P(1+r)^n\) である。これは公比 \(1+r\) の等比数列の項である。</p>
<p>毎年末に A 円ずつ積み立てる場合を考える。1年目末の A 円は残り \(n-1\) 年の利息がついて \(A(1+r)^{n-1}\) になる。最後の A 円は利息がつかない。n 年目末の合計は公比 \(1+r\) の等比数列の和である。</p>
\[ A+A(1+r)+\dots+A(1+r)^{n-1}=\frac{A\{(1+r)^n-1\}}{r} \]
<div class="ex"><div class="ex-h">例題 14</div>
<p>毎年末に10万円を年利3％の複利で10年間積み立てる。10年目末の残高を求めよ。\(1.03^{10}=1.3439\) とする。</p>
<details open><summary>解き方</summary><div>\(\frac{10\times(1.3439-1)}{0.03}=\frac{3.439}{0.03}=114.63\cdots\)<br>答え 約114.6万円 ・ 積立額100万円に対して利息は約14.6万円</div></details></div>
<p>住宅ローンの元利均等返済も同じ式で決まる。借入額 L を n 回で返す毎回の返済額 x は「借入額を n 回後まで複利で増やした値」と「返済額を積み立てた値」が等しいという条件 \(L(1+r)^n=\frac{x\{(1+r)^n-1\}}{r}\) から求まる。</p>
<div class="ex"><div class="ex-h">例題 15</div>
<p>300万円を年利2％で借り毎年末に同じ額 x 万円を返して5回で完済する。x を求めよ。\(1.02^5=1.1041\) とする。</p>
<details open><summary>解き方</summary><div>借入額を5年後まで増やした値は \(300\times 1.1041=331.23\)<br>返済額を5年後まで積み立てた値は \(\frac{x(1.1041-1)}{0.02}=5.205x\)<br>両者が等しいので \(x=\frac{331.23}{5.205}=63.6\cdots\)<br>答え 約63.6万円 ・ 返済総額は約318万円で利息は約18万円</div></details></div>
<aside class="an an-rw"><b>現実世界</b>
<p>「72の法則」は残高が2倍になる年数を 72÷年利（％）で概算する方法である。\((1+r)^n=2\) の両辺の自然対数をとると \(n=\frac{\log\;2}{\log(1+r)}\) で r が小さいとき約 \(\frac{0.693}{r}\) になる。年利6％なら12年である。</p>
</aside>

<h2 id="s8">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 等差数列の一般項</div>
<p class="qz-q">第5項が 17 で第12項が 38 の等差数列がある。第20項として正しいものを1つ選べ。</p>
<ol><li>59</li><li>62</li><li>65</li><li>68</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(a+4d=17\) と \(a+11d=38\) から \(7d=21\) で \(d=3\) ・ \(a=5\)。\(a_{20}=5+19\times 3=62\)。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 等差数列の和</div>
<p class="qz-q">初項 3 ・公差 4 の等差数列の初項から第20項までの和を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 820 である。末項は \(3+19\times 4=79\) で和は \(\frac{20(3+79)}{2}=10\times 82=820\)。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 等比数列の和</div>
<p class="qz-q">初項 2 ・公比 3 の等比数列の初項から第6項までの和として正しいものを1つ選べ。</p>
<ol><li>242</li><li>486</li><li>728</li><li>1456</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\(\frac{2(3^6-1)}{3-1}=3^6-1=728\)。1 は第5項までの和 \(3^5-1\) で項数の数え違いである。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ Σの計算</div>
<p class="qz-q">\(\sum_{k=1}^{10}k(k+1)\) の値を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 440 である。\(\sum k^2+\sum k=\frac{10\cdot 11\cdot 21}{6}+\frac{10\cdot 11}{2}=385+55=440\)。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 階差数列</div>
<p class="qz-q">数列 1・2・5・10・17・… の第10項を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 82 である。階差は 1・3・5・7・… で \(b_k=2k-1\)。\(n\ge 2\) で \(a_n=1+\sum_{k=1}^{n-1}(2k-1)=1+(n-1)^2\) となり n＝1 でも成り立つ。\(a_{10}=1+81=82\)。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 漸化式</div>
<p class="qz-q">\(a_1=2\) ・ \(a_{n+1}=2a_n-3\) で定まる数列の第5項を一般項から求めよ。</p>
<details><summary>解答と解説</summary><div>答えは −13 である。\(\alpha=2\alpha-3\) から \(\alpha=3\)。\(a_n-3=(2-3)\cdot 2^{n-1}\) で \(a_n=3-2^{n-1}\)。\(a_5=3-16=-13\)。順に計算しても 2・1・−1・−5・−13 で一致する。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 和から一般項</div>
<p class="qz-q">\(S_n=n^2+3n+1\) で与えられる数列について正しい記述を1つ選べ。</p>
<ol><li>すべての n で \(a_n=2n+2\) である</li><li>\(a_1=5\) で \(n\ge 2\) のとき \(a_n=2n+2\) である</li><li>\(a_1=4\) で \(n\ge 2\) のとき \(a_n=2n+2\) である</li><li>すべての n で \(a_n=2n+4\) である</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(a_1=S_1=5\)。\(n\ge 2\) で \(a_n=S_n-S_{n-1}=2n+2\)。この式に n＝1 を入れると 4 で \(a_1=5\) と一致しないので1本の式にはまとまらない。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 数学的帰納法の構造</div>
<p class="qz-q">命題 \(P(n)\) がすべての自然数で成り立つことを数学的帰納法で示すとき Ⅱ で示すべき内容として正しいものを1つ選べ。</p>
<ol><li>\(P(k)\) が成り立つこと</li><li>\(P(k+1)\) が成り立つと仮定すれば \(P(k)\) が成り立つこと</li><li>\(P(k)\) が成り立つと仮定すれば \(P(k+1)\) が成り立つこと</li><li>\(P(k)\) と \(P(k+1)\) がともに成り立つこと</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。Ⅱは含意「\(P(k)\) ならば \(P(k+1)\)」を示す段階である。1 と 4 は示すべき結論を前提にしている。2 は向きが逆で n＝1 から先へ連鎖しない。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
等差 \(a_n=a+(n-1)d\) ・ 和 \(S_n=\frac{n(a+l)}{2}\)。逆順に並べて足して導く。<br>
等比 \(a_n=ar^{n-1}\) ・ 和 \(S_n=\frac{a(1-r^n)}{1-r}\)（r≠1）。\(S_n-rS_n\) で導く。r＝1 は na。<br>
\(\sum k=\frac{1}{2}n(n+1)\) ・ \(\sum k^2=\frac{1}{6}n(n+1)(2n+1)\) ・ \(\sum k^3=\left\{\frac{1}{2}n(n+1)\right\}^2\)。<br>
階差 \(a_n=a_1+\sum_{k=1}^{n-1}b_k\) と和 \(a_n=S_n-S_{n-1}\) はどちらも \(n\ge 2\) で n＝1 を別に確かめる。<br>
\(a_{n+1}=pa_n+q\) は \(\alpha=p\alpha+q\) の α を引いて \(\{a_n-\alpha\}\) を等比数列にする。<br>
数学的帰納法は出発点と「k ならば k＋1」の2段で全自然数を示す。</div>

<h2 id="s10">残っている問い</h2>
<ul>
<li class="tb-vnote">ガウスが少年時代に1から100までの和を逆順の組で求めたという逸話は広く知られている。ただし一次資料での裏づけは乏しく本文では人物名を挙げなかった。</li>
<li class="tb-vnote">72の法則は \(\log(1+r)\approx r\) という近似に基づく。年利が大きくなると誤差が増える。72 を使う理由は約数が多く暗算しやすいからとされるが定数の由来を確定する出典は確認できなかった。</li>
<li class="tb-vnote">数学Bの解説は「簡単な漸化式」を一次の形の隣接二項間の漸化式と定める。隣接3項間の漸化式 \(a_{n+2}=pa_{n+1}+qa_n\) は理数数学Ⅱの解説で発展・拡充させる内容に挙がる。この章では扱っていない。</li>
<li class="tb-vnote">減価償却の定率法は実務では保証額や改定償却率の規定があり純粋な等比数列ではない。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>国立大学協会掲載 令和9年度大学入学者選抜に係る大学入学共通テスト出題教科・科目の出題方法等 — https://www.janu.jp/cms/wp-content/uploads/2026/06/r9syutsudai.pdf</li>
<li>Arithmetic progression — Wikipedia — https://en.wikipedia.org/wiki/Arithmetic_progression</li>
<li>Geometric series — Wikipedia — https://en.wikipedia.org/wiki/Geometric_series</li>
<li>Mathematical induction — Wikipedia — https://en.wikipedia.org/wiki/Mathematical_induction</li>
<li>Rule of 72 — Wikipedia — https://en.wikipedia.org/wiki/Rule_of_72</li>
<li>Solow–Swan model — Wikipedia — https://en.wikipedia.org/wiki/Solow%E2%80%93Swan_model</li>
</ol>
