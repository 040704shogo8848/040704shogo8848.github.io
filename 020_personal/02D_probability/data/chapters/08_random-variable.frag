<!--meta
{"chapter": 8, "part": "数学B", "title": "確率変数と二項分布", "thesis": "試行の結果に数値を対応させたものが確率変数である。確率変数の中心を期待値で測り散らばりを分散と標準偏差で測る。同じ試行を n 回くり返したときの成功回数は二項分布 B(n, p) に従い期待値は np で分散は np(1−p) である。", "verify": {"date": "2026-10-15", "checked": 32, "match": 30, "fixed": 2, "unconfirmed": 0}}
-->
<p>第6章と第7章では1つの事象の確率と1回の試行の期待値を計算した。この章からは数学Bの「統計的な推測」に入る。試行の結果を数値で表した量を<strong>確率変数</strong>と呼び確率変数がとる値と確率の対応を1つの表やグラフにまとめる。第1章と第2章でデータに対して計算した平均と分散を今度は確率分布に対して計算する。</p>
<p>共通テストの数学Ⅱ・B・Cで「統計的な推測」は選択問題の1つである。この範囲から確率分布の期待値と分散・aX+b の変換・二項分布の期待値と分散が毎年の計算の出発点になる。第9章の正規分布と第10章の推定と第11章の検定はすべてこの章の公式の上に立つ。最初の節では数列の単元で学ぶ Σ 記号を必要な分だけ扱う。</p>

<h2 id="s1">Σ記号の読み方</h2>
<p>確率分布の期待値は「値×確率」を全部足した和である。項の数が多いと書き切れないので和を記号 Σ で表す。Σ はギリシャ文字のシグマの大文字で英語の sum の頭文字 S に当たる。</p>
\[ \sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \cdots + a_n \]
<p>下の \(k=1\) は「k を1から始める」を表し上の \(n\) は「n で終える」を表す。k に 1・2・3・… と順に代入した項をすべて足す。k は足し終えると残らない文字なので i や j に替えても値は同じである。</p>
<p>Σ には次の3つの性質がある。どれも足し算の順序を入れ替えてよいことと分配法則から直接に導かれる。</p>
\[ \sum_{k=1}^{n}(a_k+b_k)=\sum_{k=1}^{n}a_k+\sum_{k=1}^{n}b_k ,\qquad \sum_{k=1}^{n}c\,a_k=c\sum_{k=1}^{n}a_k ,\qquad \sum_{k=1}^{n}c=nc \]
<p>計算で使う和の公式は次の2つである。1つ目は1から n までの和を逆順に並べた和と足すと \(n+1\) が n 個並ぶことから得られる。2つ目の導出は数列の単元で扱う。</p>
\[ \sum_{k=1}^{n}k=\frac{n(n+1)}{2} ,\qquad \sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}{6} \]

<div class="ex"><div class="ex-h">例題 1</div>
<p>\( \displaystyle\sum_{k=1}^{5}(2k+1) \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 性質で分ける。\( 2\sum k+\sum 1 \) になる。<br>手順2 \( \sum_{k=1}^{5}k=\frac{5\cdot 6}{2}=15 \) で \( \sum_{k=1}^{5}1=5 \) である。<br>手順3 \( 2\times 15+5=35 \)。検算として 3+5+7+9+11=35 で一致する。答え 35</div></details></div>

<p><strong>典型的な誤り</strong>は \( \sum_{k=1}^{5}1 \) を1とする誤りである。1を5回足すので5である。定数の和は「定数×項の数」になる。</p>

<h2 id="s2">確率変数と確率分布</h2>
<p>試行の結果によって値が定まり各値をとる確率が定まる変数を<strong>確率変数</strong>と呼ぶ。確率変数は大文字の X や Y で表す。X がとる値を \(x_1, x_2, \ldots, x_n\) としそれぞれの値をとる確率を \(p_1, p_2, \ldots, p_n\) とする。この値と確率の対応を X の<strong>確率分布</strong>または単に分布と呼ぶ。X が値 a をとる確率を \(P(X=a)\) と書く。</p>
<p>確率分布には次の2つの条件がある。各確率は0以上1以下であり確率の合計は1である。X がとる値は互いに排反な事象を表し全部合わせると全事象になるからである。</p>
\[ p_k \ge 0 ,\qquad \sum_{k=1}^{n}p_k=p_1+p_2+\cdots+p_n=1 \]
<p>硬貨を3枚投げて表の枚数を X とする。X のとる値は 0・1・2・3 である。表が r 枚の出方は \({}_3\mathrm{C}_r\) 通りで全体は \(2^3=8\) 通りなので確率分布は次の表になる。</p>
<div class="tb-tw"><table>
<thead><tr><th>X</th><th>0</th><th>1</th><th>2</th><th>3</th><th>計</th></tr></thead>
<tbody><tr><td>P</td><td>1/8</td><td>3/8</td><td>3/8</td><td>1/8</td><td>1</td></tr></tbody></table></div>
<figure class="tb-fig">
<svg viewBox="0 0 720 290" role="img" aria-label="硬貨を3枚投げたときの表の枚数の確率分布">
<line x1="90" y1="230" x2="90" y2="40" stroke="var(--ink)" stroke-width="1"/>
<text x="84" y="234" font-size="12" text-anchor="end" fill="var(--sub)">0.0</text>
<line x1="90" y1="187.8" x2="680" y2="187.8" stroke="var(--line)" stroke-dasharray="3 3"/>
<text x="84" y="191.8" font-size="12" text-anchor="end" fill="var(--sub)">0.1</text>
<line x1="90" y1="145.6" x2="680" y2="145.6" stroke="var(--line)" stroke-dasharray="3 3"/>
<text x="84" y="149.6" font-size="12" text-anchor="end" fill="var(--sub)">0.2</text>
<line x1="90" y1="103.3" x2="680" y2="103.3" stroke="var(--line)" stroke-dasharray="3 3"/>
<text x="84" y="107.3" font-size="12" text-anchor="end" fill="var(--sub)">0.3</text>
<line x1="90" y1="61.1" x2="680" y2="61.1" stroke="var(--line)" stroke-dasharray="3 3"/>
<text x="84" y="65.1" font-size="12" text-anchor="end" fill="var(--sub)">0.4</text>
<line x1="90" y1="230" x2="680" y2="230" stroke="var(--ink)" stroke-width="1"/>
<line x1="174.3" y1="230" x2="174.3" y2="235" stroke="var(--ink)"/>
<text x="174.3" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">0</text>
<line x1="314.8" y1="230" x2="314.8" y2="235" stroke="var(--ink)"/>
<text x="314.8" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<line x1="455.2" y1="230" x2="455.2" y2="235" stroke="var(--ink)"/>
<text x="455.2" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<line x1="595.7" y1="230" x2="595.7" y2="235" stroke="var(--ink)"/>
<text x="595.7" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">3</text>
<rect x="139.3" y="177.2" width="70" height="52.8" fill="var(--cool)" opacity="0.85"/>
<text x="174.3" y="169.2" font-size="13" text-anchor="middle" fill="var(--ink)">1/8</text>
<rect x="279.8" y="71.7" width="70" height="158.3" fill="var(--cool)" opacity="0.85"/>
<text x="314.8" y="63.7" font-size="13" text-anchor="middle" fill="var(--ink)">3/8</text>
<rect x="420.2" y="71.7" width="70" height="158.3" fill="var(--cool)" opacity="0.85"/>
<text x="455.2" y="63.7" font-size="13" text-anchor="middle" fill="var(--ink)">3/8</text>
<rect x="560.7" y="177.2" width="70" height="52.8" fill="var(--cool)" opacity="0.85"/>
<text x="595.7" y="169.2" font-size="13" text-anchor="middle" fill="var(--ink)">1/8</text>
<polygon points="385,254 372,274 398,274" fill="var(--warm)"/>
<text x="407" y="270" font-size="13" fill="var(--warm)">期待値 1.5 で釣り合う</text>
<text x="680" y="249" font-size="12" text-anchor="end" fill="var(--muted)">表の枚数 X</text>
<text x="90" y="28" font-size="12" fill="var(--muted)">確率</text>
</svg>
<figcaption>表の枚数 X の確率分布を棒の高さで示した。棒を重りと見ると X＝1.5 の位置で左右が釣り合う。この釣り合いの位置が次の節で定義する期待値である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 2</div>
<p>赤玉3個と白玉2個が入った袋から同時に2個取り出す。取り出した赤玉の個数を X とするとき X の確率分布を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 取り出し方の総数は \({}_5\mathrm{C}_2=10\) 通りである。<br>手順2 X＝0 は白2個で \({}_2\mathrm{C}_2=1\) 通り。X＝1 は赤1個と白1個で \(3\times 2=6\) 通り。X＝2 は赤2個で \({}_3\mathrm{C}_2=3\) 通り。<br>手順3 確率は順に 1/10・6/10・3/10 である。合計が1になることを確かめる。答え P(X＝0)＝1/10・P(X＝1)＝3/5・P(X＝2)＝3/10</div></details></div>

<p><strong>典型的な誤り</strong>は確率の合計を確かめずに次の計算へ進む誤りである。合計が1にならない分布は数え漏れか重複がある。共通テストでは分布表の空欄を「合計が1」の条件から求める設問が多い。</p>

<h2 id="s3">期待値と分散と標準偏差</h2>
<h3>期待値</h3>
<p>確率変数 X の<strong>期待値</strong>または<strong>平均</strong>を次の式で定義し \(E(X)\) または m で表す。</p>
\[ E(X)=\sum_{k=1}^{n}x_k p_k=x_1p_1+x_2p_2+\cdots+x_np_n \]
<p>この式の根拠は第1章の度数分布表の平均である。度数分布表の平均は「階級値×相対度数」の和であった。試行を多数回くり返すと各値の相対度数は確率に近づく。相対度数を確率で置き換えたものが期待値である。図1の釣り合いの位置は \(0\cdot\frac18+1\cdot\frac38+2\cdot\frac38+3\cdot\frac18=\frac{12}{8}=1.5\) で求まる。</p>

<h3>分散と標準偏差</h3>
<p>期待値が同じでも値の散らばり方は分布ごとに異なる。図2の A と B はどちらも期待値が3である。B のほうが3から遠い値をとる。この散らばりを測るために期待値 m からの偏差 \(X-m\) の2乗の期待値を考える。これを<strong>分散</strong>と呼び \(V(X)\) で表す。分散の正の平方根を<strong>標準偏差</strong>と呼び \(\sigma(X)\) で表す。</p>
\[ V(X)=\sum_{k=1}^{n}(x_k-m)^2p_k ,\qquad \sigma(X)=\sqrt{V(X)} \]
<p>偏差をそのまま平均すると正と負が打ち消し合って必ず0になる。2乗すると符号が消えるので散らばりの大きさが残る。ただし2乗すると単位も2乗になる。X が円なら分散の単位は円の2乗である。平方根をとって元の単位に戻したものが標準偏差である。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 280" role="img" aria-label="期待値が同じで分散が異なる2つの確率分布">
<text x="60" y="30" font-size="13" fill="var(--ink)" font-weight="600">A 2・3・4 の値をとる</text>
<line x1="60" y1="220" x2="360" y2="220" stroke="var(--ink)" stroke-width="1"/>
<line x1="98.9" y1="220" x2="98.9" y2="225" stroke="var(--ink)"/>
<text x="98.9" y="239" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<line x1="154.4" y1="220" x2="154.4" y2="225" stroke="var(--ink)"/>
<text x="154.4" y="239" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<line x1="210" y1="220" x2="210" y2="225" stroke="var(--ink)"/>
<text x="210" y="239" font-size="12" text-anchor="middle" fill="var(--sub)">3</text>
<line x1="265.6" y1="220" x2="265.6" y2="225" stroke="var(--ink)"/>
<text x="265.6" y="239" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<line x1="321.1" y1="220" x2="321.1" y2="225" stroke="var(--ink)"/>
<text x="321.1" y="239" font-size="12" text-anchor="middle" fill="var(--sub)">5</text>
<rect x="131.4" y="149.2" width="46" height="70.8" fill="var(--cool)" opacity="0.85"/>
<rect x="187" y="78.3" width="46" height="141.7" fill="var(--cool)" opacity="0.85"/>
<rect x="242.6" y="149.2" width="46" height="70.8" fill="var(--cool)" opacity="0.85"/>
<text x="154.4" y="142.2" font-size="12" text-anchor="middle" fill="var(--ink)">1/4</text>
<text x="210" y="71.3" font-size="12" text-anchor="middle" fill="var(--ink)">1/2</text>
<text x="265.6" y="142.2" font-size="12" text-anchor="middle" fill="var(--ink)">1/4</text>
<line x1="210" y1="78.3" x2="210" y2="220" stroke="var(--accent)" stroke-dasharray="4 3"/>
<text x="210" y="262" font-size="13" text-anchor="middle" fill="var(--sub)">期待値 3 ・ 分散 0.5</text>
<text x="400" y="30" font-size="13" fill="var(--ink)" font-weight="600">B 1・3・5 の値をとる</text>
<line x1="400" y1="220" x2="700" y2="220" stroke="var(--ink)" stroke-width="1"/>
<line x1="438.9" y1="220" x2="438.9" y2="225" stroke="var(--ink)"/>
<text x="438.9" y="239" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<line x1="494.4" y1="220" x2="494.4" y2="225" stroke="var(--ink)"/>
<text x="494.4" y="239" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<line x1="550" y1="220" x2="550" y2="225" stroke="var(--ink)"/>
<text x="550" y="239" font-size="12" text-anchor="middle" fill="var(--sub)">3</text>
<line x1="605.6" y1="220" x2="605.6" y2="225" stroke="var(--ink)"/>
<text x="605.6" y="239" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<line x1="661.1" y1="220" x2="661.1" y2="225" stroke="var(--ink)"/>
<text x="661.1" y="239" font-size="12" text-anchor="middle" fill="var(--sub)">5</text>
<rect x="415.9" y="149.2" width="46" height="70.8" fill="var(--warm)" opacity="0.85"/>
<rect x="527" y="78.3" width="46" height="141.7" fill="var(--warm)" opacity="0.85"/>
<rect x="638.1" y="149.2" width="46" height="70.8" fill="var(--warm)" opacity="0.85"/>
<text x="438.9" y="142.2" font-size="12" text-anchor="middle" fill="var(--ink)">1/4</text>
<text x="550" y="71.3" font-size="12" text-anchor="middle" fill="var(--ink)">1/2</text>
<text x="661.1" y="142.2" font-size="12" text-anchor="middle" fill="var(--ink)">1/4</text>
<line x1="550" y1="78.3" x2="550" y2="220" stroke="var(--accent)" stroke-dasharray="4 3"/>
<text x="550" y="262" font-size="13" text-anchor="middle" fill="var(--sub)">期待値 3 ・ 分散 2</text>
</svg>
<figcaption>A と B は期待値がどちらも3である。A の分散は (2−3)²×1/4＋(4−3)²×1/4＝0.5 で B の分散は (1−3)²×1/4＋(5−3)²×1/4＝2 である。B の値は3から2離れるので分散は A の4倍になる。</figcaption>
</figure>
<p>分散の計算には次の公式を使うことが多い。</p>
\[ V(X)=E(X^2)-\{E(X)\}^2 \]
<p>導き方は定義の2乗を展開して Σ の性質を使うだけである。\(\sum(x_k-m)^2p_k=\sum x_k^2p_k-2m\sum x_kp_k+m^2\sum p_k\) と分ける。第2項の \(\sum x_kp_k\) は m で第3項の \(\sum p_k\) は1なので \(E(X^2)-2m^2+m^2=E(X^2)-m^2\) になる。第2章でデータの分散を「2乗の平均−平均の2乗」で求めた公式と同じ形である。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>例題2の X について期待値と分散と標準偏差を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \(E(X)=0\cdot\frac{1}{10}+1\cdot\frac{6}{10}+2\cdot\frac{3}{10}=\frac{12}{10}=1.2\)<br>手順2 \(E(X^2)=0^2\cdot\frac{1}{10}+1^2\cdot\frac{6}{10}+2^2\cdot\frac{3}{10}=\frac{18}{10}=1.8\)<br>手順3 \(V(X)=1.8-1.2^2=1.8-1.44=0.36\)<br>手順4 \(\sigma(X)=\sqrt{0.36}=0.6\)。答え 期待値 1.2・分散 0.36・標準偏差 0.6</div></details></div>

<p><strong>典型的な誤り</strong>は2つある。1つ目は \(E(X^2)\) を \(\{E(X)\}^2\) と同じものとして分散を0にする誤りである。\(E(X^2)\) は値を先に2乗してから確率を掛けて足す。2つ目は分散と標準偏差の取り違えである。設問がどちらを問うかを最後に確かめる。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">期待値はリターンで標準偏差はリスクである</p>
<p>運用の世界では収益率の期待値をリターンと呼び標準偏差をリスクと呼ぶ。図2の A と B はリターンが同じでリスクが2倍異なる2つの商品である。</p>
</aside>

<h2 id="s4">aX＋b の期待値と分散</h2>
<p>確率変数 X に定数 a を掛けて定数 b を足した \(Y=aX+b\) も確率変数である。X が \(x_k\) をとるとき Y は \(ax_k+b\) をとりその確率は \(p_k\) のままである。このとき次の公式が成り立つ。</p>
\[ E(aX+b)=aE(X)+b ,\qquad V(aX+b)=a^2V(X) ,\qquad \sigma(aX+b)=|a|\,\sigma(X) \]
<p>期待値の式は Σ の性質から得られる。\(\sum(ax_k+b)p_k=a\sum x_kp_k+b\sum p_k=aE(X)+b\) である。</p>
<p>分散の式は偏差を見ると根拠がわかる。Y の期待値は \(am+b\) なので Y の偏差は \((ax_k+b)-(am+b)=a(x_k-m)\) である。<strong class="hit">b は全員を同じだけ平行移動させるだけで偏差を変えない。a は偏差を a 倍にするので2乗した分散は a² 倍になる</strong>。標準偏差は平方根をとるので \(|a|\) 倍になる。a が負でも散らばりは負にならないので絶対値が付く。</p>

<div class="ex"><div class="ex-h">例題 4</div>
<p>例題2のゲームで赤玉1個につき100円もらえ参加すると無条件で50円もらえるとする。受け取る金額 Y＝100X＋50 の期待値と標準偏差を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 例題3より E(X)＝1.2・σ(X)＝0.6 である。<br>手順2 \(E(Y)=100\times 1.2+50=170\) 円<br>手順3 \(\sigma(Y)=|100|\times 0.6=60\) 円。分散は \(100^2\times 0.36=3600\) である。答え 期待値 170円・標準偏差 60円</div></details></div>

<p><strong>典型的な誤り</strong>は \(V(aX+b)=aV(X)+b\) とする誤りである。分散には b が残らず a は2乗で掛かる。もう1つは \(V(-2X)=-4V(X)\) とする誤りで正しくは \(4V(X)\) である。</p>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">固定の受取額 b はリスクを増やさない</p>
<p>販売数量 X に単価 a を掛け固定収入 b を足しても収入の振れ幅は |a| 倍にしかならない。b は全期間に同額が加わるだけなので標準偏差に影響しない。</p>
</aside>

<h2 id="s5">確率変数の和と積</h2>
<h3>和の期待値</h3>
<p>2つの確率変数 X と Y について X＝a かつ Y＝b となる確率の対応をまとめたものを X と Y の<strong>同時分布</strong>と呼ぶ。同時分布から次の性質が成り立つ。</p>
\[ E(X+Y)=E(X)+E(Y) ,\qquad E(aX+bY)=aE(X)+bE(Y) \]
<p>これは X と Y がどのような関係にあっても成り立つ。同時分布の表で \(x_i+y_j\) に確率を掛けて全部足すと x の部分と y の部分に分かれ x の部分は E(X) に y の部分は E(Y) になるからである。3つ以上の和でも同様である。</p>

<h3>独立な確率変数</h3>
<p>X のとる任意の値 a と Y のとる任意の値 b について次の式が成り立つとき X と Y は<strong>独立</strong>であるという。</p>
\[ P(X=a,\ Y=b)=P(X=a)\,P(Y=b) \]
<p>第6章の独立な試行の結果から定まる確率変数は独立である。たとえば2個のさいころの目 X と Y は独立である。X と Y が独立なら次の2つが成り立つ。</p>
\[ E(XY)=E(X)E(Y) ,\qquad V(X+Y)=V(X)+V(Y) \]
<p>積の式は独立の定義から同時確率が \(P(X=a)P(Y=b)\) に分かれ和が \(\sum aP(X=a)\times\sum bP(Y=b)\) に分かれることから得られる。分散の式は展開すると根拠がわかる。</p>
\[ V(X+Y)=V(X)+V(Y)+2\{E(XY)-E(X)E(Y)\} \]
<p><strong class="hit">独立なら波かっこの中が0になるので分散がそのまま足し算になる</strong>。独立でないと波かっこの中は一般に0ではない。片方が大きいときにもう片方も大きくなりやすい組では和の散らばりが V(X)＋V(Y) より大きくなる。波かっこの中の E(XY)−E(X)E(Y) は大学の統計学で共分散と呼ばれ、第3章のデータの共分散と同じ構造である。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>2個のさいころを投げて出る目を X と Y とする。和 X＋Y の期待値と分散および積 XY の期待値を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 1個のさいころの目 X は \(E(X)=\frac{1+2+\cdots+6}{6}=\frac{21}{6}=\frac72\)<br>手順2 \(E(X^2)=\frac{1+4+9+16+25+36}{6}=\frac{91}{6}\) なので \(V(X)=\frac{91}{6}-\frac{49}{4}=\frac{182-147}{12}=\frac{35}{12}\)<br>手順3 和の期待値は \(\frac72+\frac72=7\)。X と Y は独立なので和の分散は \(\frac{35}{12}\times 2=\frac{35}{6}\)<br>手順4 積の期待値は \(\frac72\times\frac72=\frac{49}{4}\)。答え E(X＋Y)＝7・V(X＋Y)＝35/6・E(XY)＝49/4</div></details></div>

<div class="ex"><div class="ex-h">例題 6</div>
<p>独立な確率変数 X と Y が V(X)＝4・V(Y)＝9 を満たす。V(X−Y) と V(3X＋2Y) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 X−Y は X＋(−1)Y と見る。\(V(-Y)=(-1)^2V(Y)=9\) である。<br>手順2 独立なので \(V(X-Y)=4+9=13\)<br>手順3 \(V(3X+2Y)=3^2\times 4+2^2\times 9=36+36=72\)。答え 13 と 72</div></details></div>

<p><strong>典型的な誤り</strong>は \(V(X-Y)=V(X)-V(Y)\) とする誤りである。引いても散らばりは減らない。もう1つは独立でない2つの確率変数の分散を足し算する誤りである。たとえば X と 2X は独立ではないので \(V(X+X)\) は \(2V(X)\) ではなく \(V(2X)=4V(X)\) である。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">分散投資の効果は V(X＋Y)＝V(X)＋V(Y) から生じる</p>
<p>分散が V の独立な2資産に半分ずつ投資すると分散は (V＋V)÷4＝V/2 になる。期待値は変わらずリスクだけが下がる。</p>
<p class="an-x">現実の株価どうしは独立ではないので分散は半分まで下がらない。</p>
</aside>

<h2 id="s6">二項分布</h2>
<p>1回の試行で事象 A が起こる確率を p とする。この試行を n 回くり返す反復試行で A が起こる回数を X とする。第6章の反復試行の確率から X の確率分布は次の式で表される。ここで \(q=1-p\) である。</p>
\[ P(X=r)={}_n\mathrm{C}_r\,p^r q^{\,n-r}\qquad (r=0,1,2,\ldots,n) \]
<p>この確率分布を<strong>二項分布</strong>と呼び \(B(n,p)\) で表す。B は binomial の頭文字である。確率の合計が1になることは二項定理 \((p+q)^n=\sum{}_n\mathrm{C}_r p^r q^{n-r}\) で \(p+q=1\) とおけば確かめられる。第5章の二項定理の各項がそのまま確率になっている。</p>
<p>二項分布の期待値と分散は次の式で表される。</p>
\[ E(X)=np ,\qquad V(X)=npq=np(1-p) ,\qquad \sigma(X)=\sqrt{npq} \]
<p>導き方は X を n 個の確率変数の和に分けるのが最も短い。k 回目に A が起これば1で起こらなければ0をとる確率変数を \(X_k\) とする。\(X=X_1+X_2+\cdots+X_n\) である。</p>
<ul>
<li>\(E(X_k)=1\cdot p+0\cdot q=p\) である。和の期待値は和なので \(E(X)=np\)</li>
<li>\(E(X_k^2)=1^2\cdot p+0^2\cdot q=p\) なので \(V(X_k)=p-p^2=pq\) である</li>
<li>各回の試行は独立なので分散も足し算になり \(V(X)=npq\)</li>
</ul>
<figure class="tb-fig">
<svg viewBox="0 0 720 285" role="img" aria-label="二項分布 B(10, 0.2) と B(10, 0.5) の比較">
<line x1="70" y1="230" x2="70" y2="40" stroke="var(--ink)" stroke-width="1"/>
<text x="64" y="234" font-size="12" text-anchor="end" fill="var(--sub)">0.0</text>
<line x1="70" y1="170.6" x2="690" y2="170.6" stroke="var(--line)" stroke-dasharray="3 3"/>
<text x="64" y="174.6" font-size="12" text-anchor="end" fill="var(--sub)">0.1</text>
<line x1="70" y1="111.2" x2="690" y2="111.2" stroke="var(--line)" stroke-dasharray="3 3"/>
<text x="64" y="115.2" font-size="12" text-anchor="end" fill="var(--sub)">0.2</text>
<line x1="70" y1="51.9" x2="690" y2="51.9" stroke="var(--line)" stroke-dasharray="3 3"/>
<text x="64" y="55.9" font-size="12" text-anchor="end" fill="var(--sub)">0.3</text>
<line x1="70" y1="230" x2="690" y2="230" stroke="var(--ink)" stroke-width="1"/>
<line x1="108.1" y1="230" x2="108.1" y2="235" stroke="var(--ink)"/>
<text x="108.1" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">0</text>
<line x1="162.5" y1="230" x2="162.5" y2="235" stroke="var(--ink)"/>
<text x="162.5" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<line x1="216.8" y1="230" x2="216.8" y2="235" stroke="var(--ink)"/>
<text x="216.8" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<line x1="271.2" y1="230" x2="271.2" y2="235" stroke="var(--ink)"/>
<text x="271.2" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">3</text>
<line x1="325.6" y1="230" x2="325.6" y2="235" stroke="var(--ink)"/>
<text x="325.6" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<line x1="380" y1="230" x2="380" y2="235" stroke="var(--ink)"/>
<text x="380" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">5</text>
<line x1="434.4" y1="230" x2="434.4" y2="235" stroke="var(--ink)"/>
<text x="434.4" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">6</text>
<line x1="488.8" y1="230" x2="488.8" y2="235" stroke="var(--ink)"/>
<text x="488.8" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">7</text>
<line x1="543.2" y1="230" x2="543.2" y2="235" stroke="var(--ink)"/>
<text x="543.2" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<line x1="597.5" y1="230" x2="597.5" y2="235" stroke="var(--ink)"/>
<text x="597.5" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">9</text>
<line x1="651.9" y1="230" x2="651.9" y2="235" stroke="var(--ink)"/>
<text x="651.9" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">10</text>
<rect x="87.1" y="166.2" width="20" height="63.8" fill="var(--warm)" opacity="0.85"/>
<rect x="109.1" y="229.4" width="20" height="0.6" fill="var(--cool)" opacity="0.85"/>
<rect x="141.5" y="70.6" width="20" height="159.4" fill="var(--warm)" opacity="0.85"/>
<rect x="163.5" y="224.2" width="20" height="5.8" fill="var(--cool)" opacity="0.85"/>
<rect x="195.8" y="50.7" width="20" height="179.3" fill="var(--warm)" opacity="0.85"/>
<rect x="217.8" y="203.9" width="20" height="26.1" fill="var(--cool)" opacity="0.85"/>
<rect x="250.2" y="110.5" width="20" height="119.5" fill="var(--warm)" opacity="0.85"/>
<rect x="272.2" y="160.4" width="20" height="69.6" fill="var(--cool)" opacity="0.85"/>
<rect x="304.6" y="177.7" width="20" height="52.3" fill="var(--warm)" opacity="0.85"/>
<rect x="326.6" y="108.2" width="20" height="121.8" fill="var(--cool)" opacity="0.85"/>
<rect x="359" y="214.3" width="20" height="15.7" fill="var(--warm)" opacity="0.85"/>
<rect x="381" y="83.9" width="20" height="146.1" fill="var(--cool)" opacity="0.85"/>
<rect x="413.4" y="226.7" width="20" height="3.3" fill="var(--warm)" opacity="0.85"/>
<rect x="435.4" y="108.2" width="20" height="121.8" fill="var(--cool)" opacity="0.85"/>
<rect x="467.8" y="229.5" width="20" height="0.5" fill="var(--warm)" opacity="0.85"/>
<rect x="489.8" y="160.4" width="20" height="69.6" fill="var(--cool)" opacity="0.85"/>
<rect x="522.2" y="230" width="20" height="0" fill="var(--warm)" opacity="0.85"/>
<rect x="544.2" y="203.9" width="20" height="26.1" fill="var(--cool)" opacity="0.85"/>
<rect x="576.5" y="230" width="20" height="0" fill="var(--warm)" opacity="0.85"/>
<rect x="598.5" y="224.2" width="20" height="5.8" fill="var(--cool)" opacity="0.85"/>
<rect x="630.9" y="230" width="20" height="0" fill="var(--warm)" opacity="0.85"/>
<rect x="652.9" y="229.4" width="20" height="0.6" fill="var(--cool)" opacity="0.85"/>
<line x1="216.8" y1="40" x2="216.8" y2="230" stroke="var(--warm)" stroke-dasharray="4 3"/>
<line x1="380" y1="40" x2="380" y2="230" stroke="var(--cool)" stroke-dasharray="4 3"/>
<rect x="440" y="44" width="14" height="14" fill="var(--warm)"/><text x="460" y="56" font-size="13" fill="var(--ink)">B(10, 0.2) 期待値2 分散1.6</text>
<rect x="440" y="66" width="14" height="14" fill="var(--cool)"/><text x="460" y="78" font-size="13" fill="var(--ink)">B(10, 0.5) 期待値5 分散2.5</text>
<text x="690" y="268" font-size="12" text-anchor="end" fill="var(--muted)">成功の回数 X</text>
</svg>
<figcaption>n＝10 の二項分布を2つ並べた。p＝0.5 の分布は期待値5を中心に左右対称である。p＝0.2 の分布は期待値2の近くに集まり右に長く伸びる。分散は np(1−p) で p＝0.5 のとき最大になる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 7</div>
<p>1個のさいころを4回投げて3の倍数の目が出る回数を X とする。P(X＝2) と X の期待値と分散を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 3の倍数の目は3と6で確率は 1/3 である。X は B(4, 1/3) に従う。<br>手順2 \(P(X=2)={}_4\mathrm{C}_2\left(\frac13\right)^2\left(\frac23\right)^2=6\times\frac19\times\frac49=\frac{24}{81}=\frac{8}{27}\)<br>手順3 \(E(X)=4\times\frac13=\frac43\)・\(V(X)=4\times\frac13\times\frac23=\frac89\)。答え 8/27・4/3・8/9</div></details></div>

<div class="ex"><div class="ex-h">例題 8</div>
<p>二項分布 B(n, p) に従う X の期待値が 12 で分散が 9 である。n と p を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 np＝12 と np(1−p)＝9 を連立する。<br>手順2 2式目を1式目で割ると 1−p＝9/12＝3/4 で p＝1/4 である。<br>手順3 n＝12÷(1/4)＝48。答え n＝48・p＝1/4</div></details></div>

<p><strong>典型的な誤り</strong>は二項分布でない場面に np を使う誤りである。二項分布の条件は「同じ確率の独立な試行を決まった回数くり返す」ことである。例題2のように袋から玉を戻さずに取り出す場合は各回の確率が変わるので二項分布ではない。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">打率3割の打者の4打数は B(4, 0.3) である</p>
<p>各打席が独立なら安打数の期待値は 1.2本である。4打数無安打の確率は 0.7⁴＝0.2401 で約4試合に1試合ある。</p>
<p class="an-x">実際の打席は相手投手や球場で確率が変わるので独立で同じ確率という仮定は近似である。</p>
</aside>

<h2 id="s7">現実世界の確率変数</h2>
<p>二項分布の考え方は品質管理と保険と臨床試験の計算の出発点である。不良品率 p の工程から n 個を検査したときの不良品の個数は B(n, p) で表される。不良品率2%の工程から50個を抜き取ると不良品の個数 X は B(50, 0.02) に従い期待値は1個である。1個も含まれない確率は 0.98<sup>50</sup>≒0.364 で2個以上含まれる確率は約0.264 である。期待値が1個でも3回に1回以上は不良品を1個も検出できない。抜き取る個数を決めるときはこの確率を計算して検査の見逃しを評価する。保険会社は1件あたりの支払額を確率変数とみて期待値に経費を加えて保険料を定める。加入者が多いほど1人あたりの支払額の平均の散らばりが小さくなる。この性質は第10章の大数の法則で扱う。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>反復試行の成功回数を体系的に扱った最初の書物の1つはヤコブ・ベルヌーイの『推測術』である。ベルヌーイの没後の1713年に刊行され試行回数を増やすと相対度数が確率に近づく定理を含む。1回の試行で成功か失敗の2通りをとる試行は現在でもベルヌーイ試行と呼ばれる。</p>
</aside>

<h2 id="s8">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ Σ の計算</div>
<p class="qz-q">\( \displaystyle\sum_{k=1}^{10}(3k-2) \) の値として正しいものを1つ選べ。</p>
<ol><li>135</li><li>145</li><li>155</li><li>165</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(3\sum k-\sum 2=3\times 55-2\times 10=165-20=145\)。定数2の和を2とすると 163 になり選択肢にない。4 は −2 の和を引き忘れた値である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 分布表の空欄と期待値</div>
<p class="qz-q">確率変数 X の確率分布が次のとおりである。X の期待値を小数で答えよ。</p>
<div class="tb-tw"><table><thead><tr><th>X</th><th>0</th><th>1</th><th>2</th><th>3</th></tr></thead><tbody><tr><td>P</td><td>0.1</td><td>0.3</td><td>a</td><td>0.2</td></tr></tbody></table></div>
<details><summary>解答と解説</summary><div>正解は 1.7 である。合計が1なので a＝1−0.1−0.3−0.2＝0.4 である。E(X)＝0×0.1＋1×0.3＋2×0.4＋3×0.2＝0.3＋0.8＋0.6＝1.7</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 分散と標準偏差</div>
<p class="qz-q">問2の X の標準偏差を小数で答えよ。</p>
<details><summary>解答と解説</summary><div>正解は 0.9 である。E(X²)＝0×0.1＋1×0.3＋4×0.4＋9×0.2＝0.3＋1.6＋1.8＝3.7 である。V(X)＝3.7−1.7²＝3.7−2.89＝0.81 で σ(X)＝0.9 となる。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ aX＋b の変換</div>
<p class="qz-q">E(X)＝5・σ(X)＝2 の確率変数 X に対し Y＝−3X＋4 とする。Y の期待値と標準偏差の組として正しいものを1つ選べ。</p>
<ol><li>期待値 −11・標準偏差 6</li><li>期待値 −11・標準偏差 −6</li><li>期待値 −11・標準偏差 36</li><li>期待値 −15・標準偏差 6</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。E(Y)＝−3×5＋4＝−11 である。σ(Y)＝|−3|×2＝6 である。2 は絶対値を付け忘れた値で標準偏差が負になることはない。3 の36は分散である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 独立な確率変数の分散</div>
<p class="qz-q">独立な確率変数 X と Y が V(X)＝4・V(Y)＝9 を満たす。2X−Y の標準偏差として正しいものを1つ選べ。</p>
<ol><li>√7</li><li>1</li><li>√17</li><li>5</li></ol>
<details><summary>解答と解説</summary><div>正解は 4 である。V(2X−Y)＝2²×4＋(−1)²×9＝16＋9＝25 で標準偏差は5である。1 は 4×4−9 の誤り。3 は 2×4＋9 で係数を2乗し忘れた値である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 二項分布の n と p</div>
<p class="qz-q">二項分布 B(n, p) に従う X の期待値が 20 で標準偏差が 4 である。n を答えよ。</p>
<details><summary>解答と解説</summary><div>正解は 100 である。分散は 4²＝16 である。np＝20 と np(1−p)＝16 から 1−p＝0.8 で p＝0.2 である。n＝20÷0.2＝100</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 常に成り立つ式</div>
<p class="qz-q">任意の確率変数 X と Y について常に成り立つものを1つ選べ。</p>
<ol><li>E(XY)＝E(X)E(Y)</li><li>E(X＋Y)＝E(X)＋E(Y)</li><li>V(X＋Y)＝V(X)＋V(Y)</li><li>V(X−Y)＝V(X)−V(Y)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。和の期待値の式は独立かどうかに関係なく成り立つ。1 と 3 は X と Y が独立のときに成り立つ。4 は独立でも成り立たず正しくは V(X)＋V(Y) である。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
確率分布は値と確率の対応で確率の合計は1である。<br>
期待値 E(X)＝Σ x<sub>k</sub>p<sub>k</sub> は分布の釣り合いの位置である。<br>
分散 V(X)＝E(X²)−{E(X)}² で標準偏差はその正の平方根である。<br>
E(aX＋b)＝aE(X)＋b・V(aX＋b)＝a²V(X)・σ(aX＋b)＝|a|σ(X)。<br>
和の期待値は常に和である。積の期待値と和の分散が分かれるのは独立なときだけである。<br>
二項分布 B(n, p) は E＝np・V＝np(1−p) で n 個のベルヌーイ試行の和として導ける。</div>

<h2 id="s10">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>1回しか行わない試行でも、期待値で判断してよいか。</strong> 本文は期待値を、相対度数を確率で置き換えた値として導き、多数回くり返したときの平均と結びつけた。一方で図2の A と B のように期待値が同じでも散らばりは異なり、1回の結果をどれほど重く見るかで判断が異なる。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 数学編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>大学入試センター 過去3年分の試験問題 — https://www.dnc.ac.jp/kyotsu/kakomondai/</li>
<li>Binomial distribution — Wikipedia — https://en.wikipedia.org/wiki/Binomial_distribution</li>
<li>Variance — Wikipedia — https://en.wikipedia.org/wiki/Variance</li>
<li>Ars Conjectandi — Wikipedia — https://en.wikipedia.org/wiki/Ars_Conjectandi</li>
<li>Law of large numbers — Wikipedia — https://en.wikipedia.org/wiki/Law_of_large_numbers</li>
</ol>
