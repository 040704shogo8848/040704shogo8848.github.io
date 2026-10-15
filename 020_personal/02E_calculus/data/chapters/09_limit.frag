<!--meta
{"chapter": 9, "part": "数学Ⅲ", "title": "極限", "thesis": "極限は「限りなく近づく先の値」を定める操作である。不定形は式を変形してから値を決める。r の n 乗の振る舞い・sin x / x → 1・e の定義の3つが数学Ⅲの微分の出発点になる。", "verify": {"date": "2026-10-15", "checked": 49, "match": 44, "fixed": 3, "unconfirmed": 2}}
-->
<p>第8章では数列の一般項と和を求めた。この章では n を限りなく大きくしたときに数列の値がどこへ向かうかを調べる。続いて同じ考え方を関数に広げ x を限りなく a に近づけたときの値を調べる。第5章で導関数を定義したときに使った \(\lim_{h\to 0}\) はこの章の関数の極限である。第5章では多項式だけを扱ったので極限の計算は単純であった。三角関数・指数関数・対数関数を微分するには \(\lim_{x\to 0}\frac{\sin\;x}{x}=1\) と e の定義が必要になる。この章はその2つを導くことを目標にする。</p>
<p>数学Ⅲは大学入学共通テストの出題範囲に含まれない。理系の個別試験と経済学部の数理系科目で使う。数列の極限と無限等比級数は数学Ⅲの最初の単元で第8章の公式をそのまま使う。</p>

<h2 id="s1">数列の極限 収束と発散</h2>
<p>数列 \(\{a_n\}\) で n を限りなく大きくすると \(a_n\) が一定の値 α に限りなく近づくとき数列は α に<strong>収束</strong>すると言う。α を<strong>極限値</strong>と呼び次のように書く。</p>
\[ \lim_{n\to\infty}a_n=\alpha \qquad \text{または}\qquad a_n\to\alpha\ (n\to\infty) \]
<p>収束しない数列は<strong>発散</strong>すると言う。発散は3通りに分かれる。</p>
<div class="tb-tw"><table>
<thead><tr><th>振る舞い</th><th>例</th><th>書き方</th></tr></thead>
<tbody>
<tr><td>収束</td><td>\(\frac{1}{n}\) は 1・0.5・0.33・… と 0 に近づく</td><td>\(\lim\frac{1}{n}=0\)</td></tr>
<tr><td>正の無限大に発散</td><td>\(n^2\) は限りなく大きくなる</td><td>\(\lim\;n^2=\infty\)</td></tr>
<tr><td>負の無限大に発散</td><td>\(-2n\) は負で絶対値が限りなく大きくなる</td><td>\(\lim(-2n)=-\infty\)</td></tr>
<tr><td>振動</td><td>\((-1)^n\) は −1 と 1 を交互にとる</td><td>極限はない</td></tr>
</tbody></table></div>
<p>∞ は数ではなく「限りなく大きくなる」状態を表す記号である。したがって \(\infty-\infty\) や \(\frac{\infty}{\infty}\) を 0 や 1 と計算することはできない。このような形を<strong>不定形</strong>と呼ぶ。</p>
<h3>極限の性質と不定形の解消</h3>
<p>\(\lim\;a_n=\alpha\) と \(\lim\;b_n=\beta\) がともに収束するとき和・差・定数倍・積・商の極限はそれぞれ \(\alpha+\beta\) ・ \(\alpha-\beta\) ・ \(k\alpha\) ・ \(\alpha\beta\) ・ \(\frac{\alpha}{\beta}\)（β≠0）になる。不定形の場合はこの性質をそのまま使えないので先に式を変形する。</p>
<div class="ex"><div class="ex-h">例題 1</div>
<p>\(\lim_{n\to\infty}\frac{3n^2+n}{n^2-2}\) を求めよ。</p>
<details open><summary>解き方</summary><div>分母と分子は ∞ に発散するので \(\frac{\infty}{\infty}\) の不定形である。<br>分母の最高次の \(n^2\) で分母と分子を割る。\(\frac{3+\frac{1}{n}}{1-\frac{2}{n^2}}\)<br>\(\frac{1}{n}\to 0\) ・ \(\frac{2}{n^2}\to 0\) なので極限は \(\frac{3}{1}\)<br>答え 3</div></details></div>
<div class="ex"><div class="ex-h">例題 2</div>
<p>\(\lim_{n\to\infty}\left(\sqrt{n^2+n}-n\right)\) を求めよ。</p>
<details open><summary>解き方</summary><div>\(\infty-\infty\) の不定形である。分子の有理化を行う。<br>\(\frac{(\sqrt{n^2+n}-n)(\sqrt{n^2+n}+n)}{\sqrt{n^2+n}+n}=\frac{n}{\sqrt{n^2+n}+n}\)<br>分母と分子を n で割る。\(\frac{1}{\sqrt{1+\frac{1}{n}}+1}\to\frac{1}{1+1}\)<br>答え \(\frac{1}{2}\)</div></details></div>
<p><strong>典型的な誤り</strong>は例題2を「どちらも ∞ なので差は 0」とすることである。n＝100 で計算すると \(\sqrt{10100}-100=0.498\cdots\) で 0 ではない。</p>
<h3>はさみうちの原理</h3>
<p>すべての n で \(a_n\le c_n\le b_n\) が成り立ち \(\lim\;a_n=\lim\;b_n=\alpha\) ならば \(\lim\;c_n=\alpha\) である。これを<strong>はさみうちの原理</strong>と呼ぶ。\(c_n\) を直接計算できないとき両側から収束する数列で挟む。たとえば \(-1\le\;\sin\;n\le 1\) から \(-\frac{1}{n}\le\frac{\sin\;n}{n}\le\frac{1}{n}\) で両端が 0 に収束するので \(\lim\frac{\sin\;n}{n}=0\) である。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">∞−∞ は売上と費用がともに膨らむ事業の利益である</p>
<p>売上と費用がどちらも限りなく増えても利益は0とは限らない。差は両者の増え方の比較で定まる。</p>
</aside>

<h2 id="s2">rⁿ の極限</h2>
<p>等比数列 \(\{r^n\}\) の極限は r の値で4通りに分かれる。数学Ⅲの数列の極限の多くはこの結果に帰着する。</p>
<div class="tb-tw"><table>
<thead><tr><th>r の範囲</th><th>\(\lim\;r^n\)</th></tr></thead>
<tbody>
<tr><td>\(r>1\)</td><td>\(\infty\) に発散</td></tr>
<tr><td>\(r=1\)</td><td>1 に収束</td></tr>
<tr><td>\(-1<r<1\)</td><td>0 に収束</td></tr>
<tr><td>\(r\le -1\)</td><td>振動して極限はない</td></tr>
</tbody></table></div>
<figure class="tb-fig">
<svg viewBox="0 0 720 262" role="img" aria-label="rのn乗の4つの振る舞い">
<line x1="50" y1="115" x2="185" y2="115" stroke="var(--ink)" stroke-width="1"/>
<line x1="50" y1="30" x2="50" y2="200" stroke="var(--ink)" stroke-width="1"/>
<line x1="65" y1="112" x2="65" y2="118" stroke="var(--ink)"/>
<text x="65" y="132" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<line x1="170" y1="112" x2="170" y2="118" stroke="var(--ink)"/>
<text x="170" y="132" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<line x1="47" y1="190.6" x2="53" y2="190.6" stroke="var(--ink)"/>
<text x="44" y="194.6" font-size="12" text-anchor="end" fill="var(--sub)">−4</text>
<line x1="47" y1="115" x2="53" y2="115" stroke="var(--ink)"/>
<text x="44" y="119" font-size="12" text-anchor="end" fill="var(--sub)">0</text>
<line x1="47" y1="39.4" x2="53" y2="39.4" stroke="var(--ink)"/>
<text x="44" y="43.4" font-size="12" text-anchor="end" fill="var(--sub)">4</text>
<text x="189" y="119" font-size="13" font-style="italic" fill="var(--ink)"></text>
<text x="55" y="32" font-size="13" font-style="italic" fill="var(--ink)"></text>
<line x1="65" y1="115" x2="65" y2="92.3" stroke="var(--line)" stroke-width="2"/>
<circle cx="65" cy="92.3" r="3.5" fill="var(--warm)"/>
<line x1="80" y1="115" x2="80" y2="87.8" stroke="var(--line)" stroke-width="2"/>
<circle cx="80" cy="87.8" r="3.5" fill="var(--warm)"/>
<line x1="95" y1="115" x2="95" y2="82.4" stroke="var(--line)" stroke-width="2"/>
<circle cx="95" cy="82.4" r="3.5" fill="var(--warm)"/>
<line x1="110" y1="115" x2="110" y2="75.8" stroke="var(--line)" stroke-width="2"/>
<circle cx="110" cy="75.8" r="3.5" fill="var(--warm)"/>
<line x1="125" y1="115" x2="125" y2="68" stroke="var(--line)" stroke-width="2"/>
<circle cx="125" cy="68" r="3.5" fill="var(--warm)"/>
<line x1="140" y1="115" x2="140" y2="58.6" stroke="var(--line)" stroke-width="2"/>
<circle cx="140" cy="58.6" r="3.5" fill="var(--warm)"/>
<line x1="155" y1="115" x2="155" y2="47.3" stroke="var(--line)" stroke-width="2"/>
<circle cx="155" cy="47.3" r="3.5" fill="var(--warm)"/>
<line x1="170" y1="115" x2="170" y2="33.8" stroke="var(--line)" stroke-width="2"/>
<circle cx="170" cy="33.8" r="3.5" fill="var(--warm)"/>
<text x="115" y="228" font-size="13" text-anchor="middle" fill="var(--ink)" font-weight="600">r＝1.2 発散</text>
<line x1="227" y1="115" x2="362" y2="115" stroke="var(--ink)" stroke-width="1"/>
<line x1="227" y1="30" x2="227" y2="200" stroke="var(--ink)" stroke-width="1"/>
<line x1="242" y1="112" x2="242" y2="118" stroke="var(--ink)"/>
<text x="242" y="132" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<line x1="347" y1="112" x2="347" y2="118" stroke="var(--ink)"/>
<text x="347" y="132" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<line x1="224" y1="200" x2="230" y2="200" stroke="var(--ink)"/>
<text x="221" y="204" font-size="12" text-anchor="end" fill="var(--sub)">−1</text>
<line x1="224" y1="115" x2="230" y2="115" stroke="var(--ink)"/>
<text x="221" y="119" font-size="12" text-anchor="end" fill="var(--sub)">0</text>
<line x1="224" y1="30" x2="230" y2="30" stroke="var(--ink)"/>
<text x="221" y="34" font-size="12" text-anchor="end" fill="var(--sub)">1</text>
<text x="366" y="119" font-size="13" font-style="italic" fill="var(--ink)"></text>
<text x="232" y="32" font-size="13" font-style="italic" fill="var(--ink)"></text>
<line x1="242" y1="115" x2="242" y2="55.5" stroke="var(--line)" stroke-width="2"/>
<circle cx="242" cy="55.5" r="3.5" fill="var(--cool)"/>
<line x1="257" y1="115" x2="257" y2="73.3" stroke="var(--line)" stroke-width="2"/>
<circle cx="257" cy="73.3" r="3.5" fill="var(--cool)"/>
<line x1="272" y1="115" x2="272" y2="85.8" stroke="var(--line)" stroke-width="2"/>
<circle cx="272" cy="85.8" r="3.5" fill="var(--cool)"/>
<line x1="287" y1="115" x2="287" y2="94.6" stroke="var(--line)" stroke-width="2"/>
<circle cx="287" cy="94.6" r="3.5" fill="var(--cool)"/>
<line x1="302" y1="115" x2="302" y2="100.7" stroke="var(--line)" stroke-width="2"/>
<circle cx="302" cy="100.7" r="3.5" fill="var(--cool)"/>
<line x1="317" y1="115" x2="317" y2="105" stroke="var(--line)" stroke-width="2"/>
<circle cx="317" cy="105" r="3.5" fill="var(--cool)"/>
<line x1="332" y1="115" x2="332" y2="108" stroke="var(--line)" stroke-width="2"/>
<circle cx="332" cy="108" r="3.5" fill="var(--cool)"/>
<line x1="347" y1="115" x2="347" y2="110.1" stroke="var(--line)" stroke-width="2"/>
<circle cx="347" cy="110.1" r="3.5" fill="var(--cool)"/>
<text x="292" y="228" font-size="13" text-anchor="middle" fill="var(--ink)" font-weight="600">r＝0.7 収束</text>
<line x1="404" y1="115" x2="539" y2="115" stroke="var(--ink)" stroke-width="1"/>
<line x1="404" y1="30" x2="404" y2="200" stroke="var(--ink)" stroke-width="1"/>
<line x1="419" y1="112" x2="419" y2="118" stroke="var(--ink)"/>
<text x="419" y="132" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<line x1="524" y1="112" x2="524" y2="118" stroke="var(--ink)"/>
<text x="524" y="132" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<line x1="401" y1="200" x2="407" y2="200" stroke="var(--ink)"/>
<text x="398" y="204" font-size="12" text-anchor="end" fill="var(--sub)">−1</text>
<line x1="401" y1="115" x2="407" y2="115" stroke="var(--ink)"/>
<text x="398" y="119" font-size="12" text-anchor="end" fill="var(--sub)">0</text>
<line x1="401" y1="30" x2="407" y2="30" stroke="var(--ink)"/>
<text x="398" y="34" font-size="12" text-anchor="end" fill="var(--sub)">1</text>
<text x="543" y="119" font-size="13" font-style="italic" fill="var(--ink)"></text>
<text x="409" y="32" font-size="13" font-style="italic" fill="var(--ink)"></text>
<line x1="419" y1="115" x2="419" y2="174.5" stroke="var(--line)" stroke-width="2"/>
<circle cx="419" cy="174.5" r="3.5" fill="var(--cool)"/>
<line x1="434" y1="115" x2="434" y2="73.3" stroke="var(--line)" stroke-width="2"/>
<circle cx="434" cy="73.3" r="3.5" fill="var(--cool)"/>
<line x1="449" y1="115" x2="449" y2="144.2" stroke="var(--line)" stroke-width="2"/>
<circle cx="449" cy="144.2" r="3.5" fill="var(--cool)"/>
<line x1="464" y1="115" x2="464" y2="94.6" stroke="var(--line)" stroke-width="2"/>
<circle cx="464" cy="94.6" r="3.5" fill="var(--cool)"/>
<line x1="479" y1="115" x2="479" y2="129.3" stroke="var(--line)" stroke-width="2"/>
<circle cx="479" cy="129.3" r="3.5" fill="var(--cool)"/>
<line x1="494" y1="115" x2="494" y2="105" stroke="var(--line)" stroke-width="2"/>
<circle cx="494" cy="105" r="3.5" fill="var(--cool)"/>
<line x1="509" y1="115" x2="509" y2="122" stroke="var(--line)" stroke-width="2"/>
<circle cx="509" cy="122" r="3.5" fill="var(--cool)"/>
<line x1="524" y1="115" x2="524" y2="110.1" stroke="var(--line)" stroke-width="2"/>
<circle cx="524" cy="110.1" r="3.5" fill="var(--cool)"/>
<text x="469" y="228" font-size="13" text-anchor="middle" fill="var(--ink)" font-weight="600">r＝−0.7 収束</text>
<line x1="581" y1="115" x2="716" y2="115" stroke="var(--ink)" stroke-width="1"/>
<line x1="581" y1="30" x2="581" y2="200" stroke="var(--ink)" stroke-width="1"/>
<line x1="596" y1="112" x2="596" y2="118" stroke="var(--ink)"/>
<text x="596" y="132" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<line x1="701" y1="112" x2="701" y2="118" stroke="var(--ink)"/>
<text x="701" y="132" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<line x1="578" y1="190.6" x2="584" y2="190.6" stroke="var(--ink)"/>
<text x="575" y="194.6" font-size="12" text-anchor="end" fill="var(--sub)">−4</text>
<line x1="578" y1="115" x2="584" y2="115" stroke="var(--ink)"/>
<text x="575" y="119" font-size="12" text-anchor="end" fill="var(--sub)">0</text>
<line x1="578" y1="39.4" x2="584" y2="39.4" stroke="var(--ink)"/>
<text x="575" y="43.4" font-size="12" text-anchor="end" fill="var(--sub)">4</text>
<text x="720" y="119" font-size="13" font-style="italic" fill="var(--ink)"></text>
<text x="586" y="32" font-size="13" font-style="italic" fill="var(--ink)"></text>
<line x1="596" y1="115" x2="596" y2="137.7" stroke="var(--line)" stroke-width="2"/>
<circle cx="596" cy="137.7" r="3.5" fill="var(--warm)"/>
<line x1="611" y1="115" x2="611" y2="87.8" stroke="var(--line)" stroke-width="2"/>
<circle cx="611" cy="87.8" r="3.5" fill="var(--warm)"/>
<line x1="626" y1="115" x2="626" y2="147.6" stroke="var(--line)" stroke-width="2"/>
<circle cx="626" cy="147.6" r="3.5" fill="var(--warm)"/>
<line x1="641" y1="115" x2="641" y2="75.8" stroke="var(--line)" stroke-width="2"/>
<circle cx="641" cy="75.8" r="3.5" fill="var(--warm)"/>
<line x1="656" y1="115" x2="656" y2="162" stroke="var(--line)" stroke-width="2"/>
<circle cx="656" cy="162" r="3.5" fill="var(--warm)"/>
<line x1="671" y1="115" x2="671" y2="58.6" stroke="var(--line)" stroke-width="2"/>
<circle cx="671" cy="58.6" r="3.5" fill="var(--warm)"/>
<line x1="686" y1="115" x2="686" y2="182.7" stroke="var(--line)" stroke-width="2"/>
<circle cx="686" cy="182.7" r="3.5" fill="var(--warm)"/>
<line x1="701" y1="115" x2="701" y2="33.8" stroke="var(--line)" stroke-width="2"/>
<circle cx="701" cy="33.8" r="3.5" fill="var(--warm)"/>
<text x="646" y="228" font-size="13" text-anchor="middle" fill="var(--ink)" font-weight="600">r＝−1.2 振動</text>
<text x="360" y="252" font-size="12" text-anchor="middle" fill="var(--sub)" >横軸は n＝1 から 8 ・ 縦軸の目盛りは左右2枚と中央2枚で異なる</text>
</svg>
<figcaption>点は n＝1 から 8 までの rⁿ の値である。|r|＞1 では絶対値が増え続ける。|r|＜1 では 0 に近づく。r が負のときは符号が交互に変わる。</figcaption>
</figure>
<p>\(r>1\) の場合の理由を示す。\(r=1+h\)（h＞0）とおくと二項定理から \((1+h)^n\ge 1+nh\) である。右辺は n とともに ∞ に発散するので \(r^n\to\infty\) である。\(0<r<1\) の場合は \(\frac{1}{r}>1\) なので \(\left(\frac{1}{r}\right)^n\to\infty\) となりその逆数の \(r^n\) は 0 に収束する。\(-1<r<0\) の場合は \(|r^n|=|r|^n\to 0\) から 0 に収束する。</p>
<div class="ex"><div class="ex-h">例題 3</div>
<p>\(\lim_{n\to\infty}\frac{3^n-2^n}{3^n+2^n}\) を求めよ。</p>
<details open><summary>解き方</summary><div>底の最も大きい \(3^n\) で分母と分子を割る。<br>\(\frac{1-\left(\frac{2}{3}\right)^n}{1+\left(\frac{2}{3}\right)^n}\) で \(\left(\frac{2}{3}\right)^n\to 0\)<br>答え 1</div></details></div>
<div class="ex"><div class="ex-h">例題 4</div>
<p>\(\lim_{n\to\infty}\frac{r^n}{1+r^n}\) を r の値で場合分けして求めよ。ただし \(r\neq -1\) とする。</p>
<details open><summary>解き方</summary><div>\(|r|<1\) のとき \(r^n\to 0\) なので極限は 0<br>\(r=1\) のとき \(\frac{1}{2}\)<br>\(|r|>1\) のとき分母と分子を \(r^n\) で割り \(\frac{1}{\left(\frac{1}{r}\right)^n+1}\to 1\)<br>答え \(|r|<1\) で 0 ・ \(r=1\) で \(\frac{1}{2}\) ・ \(|r|>1\) で 1</div></details></div>
<p><strong>典型的な誤り</strong>は \(r=-1\) を「1 と同じく収束する」とすることである。\((-1)^n\) は −1 と 1 を交互にとるので振動する。もう1つは場合分けで \(r=1\) を落とすことである。境界の値は不等式の範囲に含まれないので個別に計算する。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">打率3割の打者の n 打席連続安打の確率は 0.3<sup>n</sup> で 0 に近づく</p>
<p>各打席を独立とみなすと 10打席連続で約 0.0006％ になる。公比が1未満の等比数列の典型である。</p>
</aside>

<h2 id="s3">無限級数と無限等比級数</h2>
<p>数列 \(\{a_n\}\) の項を限りなく足した式 \(a_1+a_2+a_3+\cdots\) を<strong>無限級数</strong>と呼び \(\sum_{n=1}^{\infty}a_n\) と書く。無限個の足し算は直接は実行できない。そこで第 n 項までの<strong>部分和</strong> \(S_n=\sum_{k=1}^{n}a_k\) をつくり \(\{S_n\}\) の極限で和を定める。\(\lim\;S_n=S\) なら級数は S に収束し S を級数の<strong>和</strong>と呼ぶ。</p>
<h3>無限等比級数の収束条件</h3>
<p>初項 a ・公比 r の無限等比級数 \(a+ar+ar^2+\cdots\) を考える。a＝0 なら和は 0 である。a≠0 で \(r\neq 1\) なら第8章の公式から部分和は \(S_n=\frac{a(1-r^n)}{1-r}\) である。\(-1<r<1\) なら \(r^n\to 0\) で \(S_n\to\frac{a}{1-r}\) となる。\(r\ge 1\) または \(r\le -1\) なら \(S_n\) は発散する。r＝1 なら \(S_n=na\) で発散する。</p>
<div class="tb-key"><b>無限等比級数</b>
a＝0 または \(-1<r<1\) のとき収束する。<br>
\(-1<r<1\) のとき和は \(\frac{a}{1-r}\) である。</div>
<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="½＋¼＋⅛＋… が1になることを正方形で示す">
<rect x="60" y="20" width="110" height="220" fill="var(--warm)" opacity="0.75" stroke="#fff" stroke-width="1.5"/>
<text x="115" y="135" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">½</text>
<rect x="170" y="20" width="110" height="110" fill="var(--cool)" opacity="0.75" stroke="#fff" stroke-width="1.5"/>
<text x="225" y="80" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">¼</text>
<rect x="170" y="130" width="55" height="110" fill="var(--accent)" opacity="0.75" stroke="#fff" stroke-width="1.5"/>
<text x="197.5" y="190" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">⅛</text>
<rect x="225" y="130" width="55" height="55" fill="var(--muted)" opacity="0.75" stroke="#fff" stroke-width="1.5"/>
<text x="252.5" y="162.5" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">1/16</text>
<rect x="225" y="185" width="27.5" height="55" fill="var(--warm)" opacity="0.75" stroke="#fff" stroke-width="1.5"/>
<rect x="252.5" y="185" width="27.5" height="27.5" fill="var(--cool)" opacity="0.75" stroke="#fff" stroke-width="1.5"/>
<rect x="252.5" y="212.5" width="13.8" height="27.5" fill="var(--accent)" opacity="0.75" stroke="#fff" stroke-width="1.5"/>
<rect x="266.2" y="212.5" width="13.8" height="13.8" fill="var(--muted)" opacity="0.75" stroke="#fff" stroke-width="1.5"/>
<rect x="60" y="20" width="220" height="220" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
<text x="330" y="50" font-size="13" text-anchor="start" fill="var(--muted)" >面積1の正方形を半分ずつ塗る</text>
<text x="330" y="85" font-size="15" text-anchor="start" fill="var(--ink)" >½＋¼＋⅛＋1/16＋…</text>
<text x="330" y="115" font-size="13" text-anchor="start" fill="var(--sub)" >塗り残しは n 回目で (½)ⁿ</text>
<text x="330" y="145" font-size="14" text-anchor="start" fill="var(--accent)" font-weight="600">塗り残しは 0 に近づくので和は 1</text>
<text x="330" y="185" font-size="13" text-anchor="start" fill="var(--ink)" >公式 a÷(1−r) に a＝½ と r＝½ を入れても 1</text>
</svg>
<figcaption>面積1の正方形を半分・残りの半分と塗っていく。塗った面積の合計は ½＋¼＋⅛＋… で塗り残しは毎回半分になるので和は1である。</figcaption>
</figure>
<div class="ex"><div class="ex-h">例題 5</div>
<p>循環小数 \(0.\dot{2}\dot{7}=0.272727\cdots\) を分数で表せ。</p>
<details open><summary>解き方</summary><div>\(0.27+0.0027+0.000027+\cdots\) は初項 0.27 ・公比 0.01 の無限等比級数<br>\(|0.01|<1\) なので収束し和は \(\frac{0.27}{1-0.01}=\frac{27}{99}\)<br>答え \(\frac{3}{11}\)</div></details></div>
<p>同じ計算で \(0.999\cdots=\frac{0.9}{1-0.1}=1\) である。0.999… は 1 より小さい数ではなく 1 そのものを表す。</p>
<div class="ex"><div class="ex-h">例題 6</div>
<p>無限等比級数 \(1+(x-2)+(x-2)^2+\cdots\) が収束する x の範囲と和を求めよ。</p>
<details open><summary>解き方</summary><div>初項は 1 で 0 ではないので公比の条件だけを調べる。<br>公比 \(x-2\) について \(-1<x-2<1\) で \(1<x<3\)<br>和は \(\frac{1}{1-(x-2)}=\frac{1}{3-x}\)<br>答え \(1<x<3\) ・ 和 \(\frac{1}{3-x}\)</div></details></div>
<p>無限級数は等比型に限らない。第8章の部分分数分解を使うと部分和が求まる級数がある。</p>
<div class="ex"><div class="ex-h">例題 7</div>
<p>\(\sum_{n=1}^{\infty}\frac{1}{n(n+2)}\) の和を求めよ。</p>
<details open><summary>解き方</summary><div>\(\frac{1}{n(n+2)}=\frac{1}{2}\left(\frac{1}{n}-\frac{1}{n+2}\right)\)<br>部分和は1つおきに打ち消し合い \(S_n=\frac{1}{2}\left(1+\frac{1}{2}-\frac{1}{n+1}-\frac{1}{n+2}\right)\)<br>n → ∞ で \(\frac{1}{2}\cdot\frac{3}{2}\)<br>答え \(\frac{3}{4}\)</div></details></div>
<p>部分和を作らずに無限個の項を並べて消すのは誤りである。必ず有限の部分和を式にしてから極限をとる。</p>
<h3>収束の必要条件</h3>
<p>\(\sum a_n\) が収束するなら \(a_n=S_n-S_{n-1}\to S-S=0\) である。対偶をとると \(a_n\) が 0 に収束しない級数は発散する。逆は成り立たない。調和級数 \(1+\frac{1}{2}+\frac{1}{3}+\cdots\) は項が 0 に近づくが発散する。\(\frac{1}{3}+\frac{1}{4}>\frac{1}{2}\) ・ \(\frac{1}{5}+\dots+\frac{1}{8}>\frac{1}{2}\) と区切ると \(\frac{1}{2}\) より大きい塊が限りなく続くからである。</p>
<p><strong>典型的な誤り</strong>は収束条件を \(-1\le r\le 1\) と端を含めることである。r＝1 では和が na で r＝−1 では部分和が振動する。もう1つは初項に文字を含むとき a＝0 の場合を落とすことである。</p>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">政府支出の乗数効果は無限等比級数である</p>
<p>限界消費性向 c なら支出1が 1＋c＋c²＋… の所得を生む。c＝0.8 なら和は 1÷(1−0.8)＝5 倍である。</p>
</aside>

<h2 id="s4">関数の極限と片側極限</h2>
<h3>準備 分数関数・無理関数・合成関数・逆関数</h3>
<p>学習指導要領は数学Ⅲの極限の単元で関数の極限の前に4種の関数を扱う。極限と微分の計算に必要な範囲を確認する。</p>
<p><strong>分数関数</strong> \(y=\frac{k}{x-p}+q\)（k≠0）のグラフは \(y=\frac{k}{x}\) を x 軸方向に p ・ y 軸方向に q だけ平行移動した双曲線である。直線 x＝p と y＝q が<strong>漸近線</strong>になる。x → p で値は ±∞ に発散し x → ±∞ で値は q に近づく。漸近線は極限で定まる直線である。</p>
<p><strong>無理関数</strong> \(y=\sqrt{ax+b}\) の定義域は根号の中が0以上の範囲である。グラフは放物線 \(x=\frac{y^2-b}{a}\) の \(y\ge 0\) の部分になる。</p>
<p>関数 \(f(x)\) の値を関数 \(g\) に入れた \(g(f(x))\) を<strong>合成関数</strong>と呼び \((g\circ f)(x)\) と書く。一般に \(g\circ f\) と \(f\circ g\) は一致しない。\(f(x)=x+1\) ・ \(g(x)=x^2\) なら \(g(f(x))=(x+1)^2\) で \(f(g(x))=x^2+1\) である。</p>
<p>\(y=f(x)\) で x と y が1対1に対応するとき x について解いて x と y を入れ替えた関数を<strong>逆関数</strong>と呼び \(f^{-1}(x)\) と書く。逆関数のグラフはもとのグラフと直線 y＝x に関して対称である。\(y=e^x\) の逆関数は \(y=\log\;x\) である。第10章では合成関数と逆関数を微分する。</p>
<div class="ex"><div class="ex-h">例題 8</div>
<p>\(f(x)=\frac{2x+1}{x-1}\) の漸近線と逆関数を求めよ。</p>
<details open><summary>解き方</summary><div>\(\frac{2x+1}{x-1}=\frac{2(x-1)+3}{x-1}=\frac{3}{x-1}+2\)<br>漸近線は x＝1 と y＝2<br>\(y=\frac{2x+1}{x-1}\) を x について解く。\(y(x-1)=2x+1\) から \(x(y-2)=y+1\) で \(x=\frac{y+1}{y-2}\)<br>x と y を入れ替えて答え \(f^{-1}(x)=\frac{x+1}{x-2}\)<br>逆関数の漸近線は x＝2 と y＝1 でもとの漸近線を入れ替えた直線になる。</div></details></div>
<p>関数 \(f(x)\) で x が a と異なる値をとりながら a に限りなく近づくとき \(f(x)\) が一定の値 α に限りなく近づくなら次のように書く。</p>
\[ \lim_{x\to a}f(x)=\alpha \]
<p>ここで x は a に一致しない。したがって \(f(a)\) が定義されていなくても極限は存在しうる。導関数の定義 \(\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}\) では h＝0 を代入できないがこの極限は存在する。多項式や分母が0にならない分数式は x＝a を代入した値が極限値になる。</p>
<div class="ex"><div class="ex-h">例題 9</div>
<p>\(\lim_{x\to 1}\frac{x^2+ax+b}{x-1}=3\) となる定数 a ・ b を求めよ。</p>
<details open><summary>解き方</summary><div>分母は 0 に近づく。極限が有限の値をもつには分子も 0 に近づく必要がある。<br>分子に x＝1 を代入して \(1+a+b=0\) で \(b=-1-a\)<br>分子は \(x^2+ax-1-a=(x-1)(x+1+a)\) と因数分解できる<br>約分して \(\lim_{x\to 1}(x+1+a)=2+a=3\)<br>答え \(a=1\) ・ \(b=-2\)</div></details></div>
<p>例題9の「分母 → 0 なら分子 → 0」は極限が有限であるための<strong>必要条件</strong>である。これで得た条件を使って実際に極限値を計算し与えられた値と一致するか確かめる。</p>
<h3>x → ∞ と x → −∞</h3>
<p>x を限りなく大きくする場合も数列と同じ方法で計算する。x → −∞ では \(x=-t\) とおき t → ∞ に直すと符号の誤りを防げる。</p>
<div class="ex"><div class="ex-h">例題 10</div>
<p>\(\lim_{x\to-\infty}\left(\sqrt{x^2+2x}+x\right)\) を求めよ。</p>
<details open><summary>解き方</summary><div>\(x=-t\) とおくと t → ∞ で式は \(\sqrt{t^2-2t}-t\)<br>有理化して \(\frac{-2t}{\sqrt{t^2-2t}+t}=\frac{-2}{\sqrt{1-\frac{2}{t}}+1}\to\frac{-2}{2}\)<br>答え −1</div></details></div>
<p><strong>典型的な誤り</strong>は x のまま \(\sqrt{x^2}=x\) と変形することである。x＜0 では \(\sqrt{x^2}=|x|=-x\) である。この誤りをすると分母が 0 に近づき極限値 −1 が得られない。</p>
<h3>片側極限</h3>
<p>x が a より大きい側から a に近づくときの極限を<strong>右側極限</strong>と呼び \(\lim_{x\to a+0}f(x)\) と書く。小さい側からの極限を<strong>左側極限</strong>と呼び \(\lim_{x\to a-0}f(x)\) と書く。a＝0 のときは \(x\to +0\) ・ \(x\to -0\) と書く。<strong class="hit">\(\lim_{x\to a}f(x)\) が存在するのは右側極限と左側極限が存在して一致するときだけである</strong>。</p>
<p>例として \(f(x)=\frac{|x|}{x}\) を考える。x＞0 なら値は 1 で x＜0 なら値は −1 である。右側極限は 1 ・左側極限は −1 で一致しないので \(\lim_{x\to 0}\frac{|x|}{x}\) は存在しない。\(\frac{1}{x}\) では \(\lim_{x\to+0}\frac{1}{x}=\infty\) ・ \(\lim_{x\to-0}\frac{1}{x}=-\infty\) である。</p>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">極限は2人の言い分が一致したときだけ確定する</p>
<p>右から近づいた値と左から近づいた値が同じなら極限が存在する。食い違えば極限はない。</p>
</aside>

<h2 id="s5">三角関数の極限 sin x / x → 1</h2>
<p>三角関数を微分するには次の極限が必要になる。x の単位は弧度法のラジアンである。</p>
\[ \lim_{x\to 0}\frac{\sin\;x}{x}=1 \]
<p>x＝0 を代入すると \(\frac{0}{0}\) の不定形になる。そこで単位円の面積の比較から導く。\(0<x<\frac{\pi}{2}\) とし原点 O ・ A(1, 0) ・単位円上で角 x の点 B ・ A での接線と OB の延長との交点 T をとる。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 275" role="img" aria-label="単位円で面積を比べて sin x ＜ x ＜ tan x を示す">
<path d="M90,250 L300,250 A210,210 0 0 0 263.3,131.4 Z" fill="var(--cool)" opacity="0.25"/>
<polygon points="90,250 300,250 300,106.3" fill="none" stroke="var(--warm)" stroke-width="2"/>
<polygon points="90,250 300,250 263.3,131.4" fill="var(--accent)" opacity="0.35" stroke="var(--accent)" stroke-width="1.5"/>
<polyline fill="none" stroke="var(--muted)" stroke-width="1.2" points="300,250 299.9,244.5 299.7,239 299.4,233.5 298.8,228 298.2,222.6 297.4,217.1 296.5,211.7 295.4,206.3 294.2,201 292.8,195.6 291.4,190.4 289.7,185.1 288,179.9 286.1,174.7 284,169.6 281.8,164.6 279.5,159.6 277.1,154.7 274.6,149.8 271.9,145 269.1,140.3 266.1,135.6 263.1,131.1 259.9,126.6 256.6,122.2 253.2,117.8 249.7,113.6 246.1,109.5 242.3,105.4 238.5,101.5 234.6,97.7 230.5,93.9 226.4,90.3 222.2,86.8 217.8,83.4 213.4,80.1 208.9,76.9 204.4,73.9 199.7,70.9 195,68.1 190.2,65.4 185.3,62.9 180.4,60.5 175.4,58.2 170.4,56 165.3,53.9 160.1,52 154.9,50.3 149.6,48.6 144.4,47.2 139,45.8 133.7,44.6 128.3,43.5 122.9,42.6 117.4,41.8 112,41.2 106.5,40.6 101,40.3 95.5,40.1 90,40"/>
<line x1="90" y1="250" x2="300" y2="106.3" stroke="var(--ink)" stroke-width="1.2"/>
<line x1="263.3" y1="131.4" x2="263.3" y2="250" stroke="var(--sub)" stroke-dasharray="3 3"/>
<text x="76" y="266" font-size="13" text-anchor="start" fill="var(--ink)" >O</text>
<text x="306" y="266" font-size="13" text-anchor="start" fill="var(--ink)" >A(1, 0)</text>
<text x="229.3" y="125.4" font-size="13" text-anchor="start" fill="var(--ink)" >B</text>
<text x="306" y="110.3" font-size="13" text-anchor="start" fill="var(--ink)" >T(1, tan x)</text>
<text x="134" y="240" font-size="13" text-anchor="start" fill="var(--ink)" font-style="italic">x</text>
<text x="267.3" y="220.7" font-size="12" text-anchor="start" fill="var(--sub)" >sin x</text>
<text x="400" y="60" font-size="13" text-anchor="start" fill="var(--muted)" >面積を小さい順に並べる</text>
<text x="400" y="95" font-size="14" text-anchor="start" fill="var(--accent)" >三角形OAB ＝ ½ sin x</text>
<text x="400" y="125" font-size="14" text-anchor="start" fill="var(--cool)" >扇形OAB ＝ ½ x</text>
<text x="400" y="155" font-size="14" text-anchor="start" fill="var(--warm)" >三角形OAT ＝ ½ tan x</text>
<text x="400" y="195" font-size="15" text-anchor="start" fill="var(--ink)" font-weight="700">sin x ＜ x ＜ tan x</text>
<text x="400" y="225" font-size="12" text-anchor="start" fill="var(--sub)" >図は x＝0.6 ラジアン</text>
</svg>
<figcaption>三角形OABは扇形OABに含まれ扇形OABは三角形OATに含まれる。面積は ½sin x ・ ½x ・ ½tan x の順に大きい。扇形の面積が ½r²x になるのは x をラジアンで測るときである。</figcaption>
</figure>
<p>面積の大小 \(\frac{1}{2}\;\sin\;x<\frac{1}{2}x<\frac{1}{2}\;\tan\;x\) を2倍し各辺を正の数 \(\sin\;x\) で割って逆数をとると次の式になる。</p>
\[ 1<\frac{x}{\sin\;x}<\frac{1}{\cos\;x}\quad\Longrightarrow\quad \cos\;x<\frac{\sin\;x}{x}<1 \]
<p>\(x\to+0\) で \(\cos\;x\to 1\) なのではさみうちの原理から \(\frac{\sin\;x}{x}\to 1\) である。x＜0 の場合は \(\frac{\sin(-x)}{-x}=\frac{\sin\;x}{x}\) なので同じ値になる。左右の片側極限が一致するので極限は 1 である。</p>
<div class="ex"><div class="ex-h">例題 11</div>
<p>(1) \(\lim_{x\to 0}\frac{\sin\;3x}{x}\) ・ (2) \(\lim_{x\to 0}\frac{1-\cos\;x}{x^2}\) を求めよ。</p>
<details open><summary>解き方</summary><div>(1) \(\frac{\sin\;3x}{x}=3\cdot\frac{\sin\;3x}{3x}\) で \(3x=\theta\) とおくと θ → 0<br>答え 3<br>(2) 分母と分子に \(1+\cos\;x\) を掛ける。\(\frac{1-\cos^2\;x}{x^2(1+\cos\;x)}=\left(\frac{\sin\;x}{x}\right)^2\cdot\frac{1}{1+\cos\;x}\)<br>\(\to 1^2\cdot\frac{1}{2}\)<br>答え \(\frac{1}{2}\)</div></details></div>
<p><strong>典型的な誤り</strong>は \(\frac{\sin\;3x}{x}\) を 1 とすることである。公式は sin の中と分母が同じ式のときに使う。もう1つは度数法で考えることである。x を度で測ると極限は \(\frac{\pi}{180}\) になり 1 にならない。</p>

<h2 id="s6">e の定義</h2>
<p>次の数列を考える。n＝1 で 2 ・ n＝2 で 2.25 ・ n＝5 で約 2.488 と増えていく。</p>
\[ a_n=\left(1+\frac{1}{n}\right)^n \]
<p>この数列は単調に増加しかつ 3 を超えないことが示せる。上に有界な単調増加数列は収束するという実数の性質により極限が存在する。この極限を <strong>e</strong> と定める。e は無理数で \(e=2.71828\cdots\) である。</p>
\[ e=\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n=\lim_{h\to 0}(1+h)^{\frac{1}{h}} \]
<p>右の形は \(h=\frac{1}{n}\) とおきかえて n を実数に広げたものである。h → −0 の場合も同じ値 e に収束する。第10章で対数関数を微分するときはこの右の形を使う。e を底とする対数 \(\log_e\;x\) を<strong>自然対数</strong>と呼び数学Ⅲでは底を省いて \(\log\;x\) と書く。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="(1＋1/n)のn乗がeに近づく様子">
<line x1="89.7" y1="15" x2="89.7" y2="235" stroke="var(--line)" stroke-width="0.7"/>
<line x1="168.3" y1="15" x2="168.3" y2="235" stroke="var(--line)" stroke-width="0.7"/>
<line x1="266.7" y1="15" x2="266.7" y2="235" stroke="var(--line)" stroke-width="0.7"/>
<line x1="365" y1="15" x2="365" y2="235" stroke="var(--line)" stroke-width="0.7"/>
<line x1="463.3" y1="15" x2="463.3" y2="235" stroke="var(--line)" stroke-width="0.7"/>
<line x1="561.7" y1="15" x2="561.7" y2="235" stroke="var(--line)" stroke-width="0.7"/>
<line x1="660" y1="15" x2="660" y2="235" stroke="var(--line)" stroke-width="0.7"/>
<line x1="70" y1="210.6" x2="660" y2="210.6" stroke="var(--line)" stroke-width="0.7"/>
<line x1="70" y1="149.4" x2="660" y2="149.4" stroke="var(--line)" stroke-width="0.7"/>
<line x1="70" y1="88.3" x2="660" y2="88.3" stroke="var(--line)" stroke-width="0.7"/>
<line x1="70" y1="27.2" x2="660" y2="27.2" stroke="var(--line)" stroke-width="0.7"/>
<line x1="70" y1="235" x2="660" y2="235" stroke="var(--ink)" stroke-width="1"/>
<line x1="70" y1="15" x2="70" y2="235" stroke="var(--ink)" stroke-width="1"/>
<line x1="89.7" y1="232" x2="89.7" y2="238" stroke="var(--ink)"/>
<text x="89.7" y="252" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<line x1="168.3" y1="232" x2="168.3" y2="238" stroke="var(--ink)"/>
<text x="168.3" y="252" font-size="12" text-anchor="middle" fill="var(--sub)">5</text>
<line x1="266.7" y1="232" x2="266.7" y2="238" stroke="var(--ink)"/>
<text x="266.7" y="252" font-size="12" text-anchor="middle" fill="var(--sub)">10</text>
<line x1="365" y1="232" x2="365" y2="238" stroke="var(--ink)"/>
<text x="365" y="252" font-size="12" text-anchor="middle" fill="var(--sub)">15</text>
<line x1="463.3" y1="232" x2="463.3" y2="238" stroke="var(--ink)"/>
<text x="463.3" y="252" font-size="12" text-anchor="middle" fill="var(--sub)">20</text>
<line x1="561.7" y1="232" x2="561.7" y2="238" stroke="var(--ink)"/>
<text x="561.7" y="252" font-size="12" text-anchor="middle" fill="var(--sub)">25</text>
<line x1="660" y1="232" x2="660" y2="238" stroke="var(--ink)"/>
<text x="660" y="252" font-size="12" text-anchor="middle" fill="var(--sub)">30</text>
<line x1="67" y1="210.6" x2="73" y2="210.6" stroke="var(--ink)"/>
<text x="64" y="214.6" font-size="12" text-anchor="end" fill="var(--sub)">2.0</text>
<line x1="67" y1="149.4" x2="73" y2="149.4" stroke="var(--ink)"/>
<text x="64" y="153.4" font-size="12" text-anchor="end" fill="var(--sub)">2.25</text>
<line x1="67" y1="88.3" x2="73" y2="88.3" stroke="var(--ink)"/>
<text x="64" y="92.3" font-size="12" text-anchor="end" fill="var(--sub)">2.5</text>
<line x1="67" y1="27.2" x2="73" y2="27.2" stroke="var(--ink)"/>
<text x="64" y="31.2" font-size="12" text-anchor="end" fill="var(--sub)">2.75</text>
<text x="664" y="239" font-size="13" font-style="italic" fill="var(--ink)">n</text>
<text x="75" y="17" font-size="13" font-style="italic" fill="var(--ink)"></text>
<line x1="70" y1="35" x2="660" y2="35" stroke="var(--accent)" stroke-dasharray="6 4" stroke-width="1.5"/>
<text x="655" y="29" font-size="13" text-anchor="end" fill="var(--accent)" >e＝2.71828…</text>
<circle cx="89.7" cy="210.6" r="3.5" fill="var(--warm)"/>
<circle cx="109.3" cy="149.4" r="3.5" fill="var(--warm)"/>
<circle cx="129" cy="120" r="3.5" fill="var(--warm)"/>
<circle cx="148.7" cy="102.7" r="3.5" fill="var(--warm)"/>
<circle cx="168.3" cy="91.2" r="3.5" fill="var(--warm)"/>
<circle cx="188" cy="83" r="3.5" fill="var(--warm)"/>
<circle cx="207.7" cy="77" r="3.5" fill="var(--warm)"/>
<circle cx="227.3" cy="72.3" r="3.5" fill="var(--warm)"/>
<circle cx="247" cy="68.5" r="3.5" fill="var(--warm)"/>
<circle cx="266.7" cy="65.4" r="3.5" fill="var(--warm)"/>
<circle cx="286.3" cy="62.9" r="3.5" fill="var(--warm)"/>
<circle cx="306" cy="60.7" r="3.5" fill="var(--warm)"/>
<circle cx="325.7" cy="58.9" r="3.5" fill="var(--warm)"/>
<circle cx="345.3" cy="57.3" r="3.5" fill="var(--warm)"/>
<circle cx="365" cy="55.9" r="3.5" fill="var(--warm)"/>
<circle cx="384.7" cy="54.6" r="3.5" fill="var(--warm)"/>
<circle cx="404.3" cy="53.5" r="3.5" fill="var(--warm)"/>
<circle cx="424" cy="52.5" r="3.5" fill="var(--warm)"/>
<circle cx="443.7" cy="51.7" r="3.5" fill="var(--warm)"/>
<circle cx="463.3" cy="50.9" r="3.5" fill="var(--warm)"/>
<circle cx="483" cy="50.1" r="3.5" fill="var(--warm)"/>
<circle cx="502.7" cy="49.5" r="3.5" fill="var(--warm)"/>
<circle cx="522.3" cy="48.9" r="3.5" fill="var(--warm)"/>
<circle cx="542" cy="48.3" r="3.5" fill="var(--warm)"/>
<circle cx="561.7" cy="47.8" r="3.5" fill="var(--warm)"/>
<circle cx="581.3" cy="47.3" r="3.5" fill="var(--warm)"/>
<circle cx="601" cy="46.9" r="3.5" fill="var(--warm)"/>
<circle cx="620.7" cy="46.5" r="3.5" fill="var(--warm)"/>
<circle cx="640.3" cy="46.1" r="3.5" fill="var(--warm)"/>
<circle cx="660" cy="45.7" r="3.5" fill="var(--warm)"/>
<text x="95.7" y="226.6" font-size="12" text-anchor="start" fill="var(--sub)" >2</text>
<text x="115.3" y="165.4" font-size="12" text-anchor="start" fill="var(--sub)" >2.25</text>
<text x="174.3" y="107.2" font-size="12" text-anchor="start" fill="var(--sub)" >2.488</text>
<text x="666" y="61.7" font-size="12" text-anchor="start" fill="var(--sub)" >2.674</text>
</svg>
<figcaption>n＝1 から30までの (1＋1/n)ⁿ の値。増加は続くが増え方は小さくなり破線の e＝2.718… を超えない。n＝30 でも約2.674で収束は遅い。</figcaption>
</figure>
<div class="ex"><div class="ex-h">例題 12</div>
<p>(1) \(\lim_{n\to\infty}\left(1+\frac{2}{n}\right)^n\) ・ (2) \(\lim_{n\to\infty}\left(1-\frac{1}{n}\right)^n\) を求めよ。</p>
<details open><summary>解き方</summary><div>(1) \(\frac{2}{n}=h\) とおくと n → ∞ で h → +0 ・ \(n=\frac{2}{h}\)<br>\(\left\{(1+h)^{\frac{1}{h}}\right\}^2\to e^2\)<br>答え \(e^2\)<br>(2) \(-\frac{1}{n}=h\) とおくと h → −0 ・ \(n=-\frac{1}{h}\)<br>\(\left\{(1+h)^{\frac{1}{h}}\right\}^{-1}\to e^{-1}\)<br>答え \(\frac{1}{e}\)</div></details></div>
<p><strong>典型的な誤り</strong>は「\(1+\frac{1}{n}\to 1\) なので \(1^n=1\)」とすることである。底が 1 に近づき指数が ∞ に発散する \(1^\infty\) 型も不定形である。</p>

<h2 id="s7">関数の連続性と中間値の定理</h2>
<p>関数 \(f(x)\) が x＝a で<strong>連続</strong>であるとは次の3条件がそろうことである。</p>
<div class="tb-key"><b>連続の条件</b>
\(f(a)\) が定義されている。<br>
\(\lim_{x\to a}f(x)\) が存在する。<br>
両者が等しい。\(\lim_{x\to a}f(x)=f(a)\)</div>
<p>区間のすべての点で連続な関数をその区間で連続な関数と呼ぶ。多項式・分数関数・三角関数・指数関数・対数関数は定義域で連続である。連続な関数の和・差・積・商（分母≠0）も連続である。グラフで言えば連続とは途切れずにつながっていることを表す。</p>
<p>不連続の例はガウス記号 \([x]\)（x を超えない最大の整数）である。x＝1 では \([1]=1\) で右側極限は 1 ・左側極限は 0 なので極限が存在せず不連続である。</p>
<h3>中間値の定理</h3>
<p>学習指導要領解説は関数の連続性を扱うと定めるが中間値の定理の名称は挙げていない。この章では補足として扱う。関数 \(f(x)\) が閉区間 \([a,b]\) で連続で \(f(a)\neq f(b)\) とする。\(f(a)\) と \(f(b)\) の間の任意の値 k について \(f(c)=k\) を満たす c が \(a<c<b\) に少なくとも1つ存在する。これを<strong>中間値の定理</strong>と呼ぶ。とくに \(f(a)\) と \(f(b)\) が異符号なら方程式 \(f(x)=0\) は \(a<x<b\) に少なくとも1つの実数解をもつ。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 265" role="img" aria-label="中間値の定理 連続な場合と不連続な場合">
<line x1="50" y1="177.5" x2="330" y2="177.5" stroke="var(--ink)" stroke-width="1"/>
<line x1="50" y1="20" x2="50" y2="230" stroke="var(--ink)" stroke-width="1"/>
<line x1="90" y1="174.5" x2="90" y2="180.5" stroke="var(--ink)"/>
<text x="90" y="194.5" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<line x1="290" y1="174.5" x2="290" y2="180.5" stroke="var(--ink)"/>
<text x="290" y="194.5" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<line x1="47" y1="203.8" x2="53" y2="203.8" stroke="var(--ink)"/>
<text x="44" y="207.8" font-size="12" text-anchor="end" fill="var(--sub)">−1</text>
<line x1="47" y1="46.2" x2="53" y2="46.2" stroke="var(--ink)"/>
<text x="44" y="50.2" font-size="12" text-anchor="end" fill="var(--sub)">5</text>
<text x="334" y="181.5" font-size="13" font-style="italic" fill="var(--ink)">x</text>
<text x="55" y="22" font-size="13" font-style="italic" fill="var(--ink)">y</text>
<polyline fill="none" points="50,211.3 52,211.1 54,210.8 56,210.5 58,210.2 60,209.9 62,209.6 64,209.3 66,209 68,208.6 70,208.2 72,207.9 74,207.5 76,207 78,206.6 80,206.2 82,205.7 84,205.3 86,204.8 88,204.3 90,203.8 92,203.2 94,202.7 96,202.1 98,201.5 100,200.9 102,200.3 104,199.7 106,199 108,198.4 110,197.7 112,197 114,196.3 116,195.5 118,194.8 120,194 122,193.2 124,192.4 126,191.6 128,190.8 130,189.9 132,189 134,188.1 136,187.2 138,186.3 140,185.3 142,184.3 144,183.3 146,182.3 148,181.3 150,180.2 152,179.1 154,178 156,176.9 158,175.8 160,174.6 162,173.4 164,172.2 166,171 168,169.7 170,168.5 172,167.2 174,165.9 176,164.5 178,163.2 180,161.8 182,160.4 184,159 186,157.5 188,156 190,154.5 192,153 194,151.5 196,149.9 198,148.3 200,146.7 202,145 204,143.4 206,141.7 208,140 210,138.2 212,136.5 214,134.7 216,132.9 218,131 220,129.1 222,127.2 224,125.3 226,123.4 228,121.4 230,119.4 232,117.4 234,115.3 236,113.2 238,111.1 240,109 242,106.8 244,104.7 246,102.4 248,100.2 250,97.9 252,95.6 254,93.3 256,90.9 258,88.5 260,86.1 262,83.7 264,81.2 266,78.7 268,76.1 270,73.6 272,71 274,68.4 276,65.7 278,63 280,60.3 282,57.5 284,54.8 286,52 288,49.1 290,46.2 292,43.3 294,40.4 296,37.4 298,34.4 300,31.4 302,28.4 304,25.3 306,22.1" stroke="var(--cool)" stroke-width="2.2"/>
<circle cx="154.9" cy="177.5" r="5" fill="var(--accent)"/>
<text x="162" y="195" font-size="12" text-anchor="start" fill="var(--accent)" >c≒1.32</text>
<circle cx="90" cy="203.8" r="4" fill="var(--ink)"/>
<circle cx="290" cy="46.2" r="4" fill="var(--ink)"/>
<text x="190" y="252" font-size="13" text-anchor="middle" fill="var(--ink)" >連続 y＝x³−x−1 は必ず 0 を通る</text>
<line x1="420" y1="177.5" x2="700" y2="177.5" stroke="var(--ink)" stroke-width="1"/>
<line x1="420" y1="20" x2="420" y2="230" stroke="var(--ink)" stroke-width="1"/>
<line x1="460" y1="174.5" x2="460" y2="180.5" stroke="var(--ink)"/>
<text x="460" y="194.5" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<line x1="560" y1="174.5" x2="560" y2="180.5" stroke="var(--ink)"/>
<text x="560" y="194.5" font-size="12" text-anchor="middle" fill="var(--sub)">1.5</text>
<line x1="660" y1="174.5" x2="660" y2="180.5" stroke="var(--ink)"/>
<text x="660" y="194.5" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<line x1="417" y1="203.8" x2="423" y2="203.8" stroke="var(--ink)"/>
<text x="414" y="207.8" font-size="12" text-anchor="end" fill="var(--sub)">−1</text>
<line x1="417" y1="98.8" x2="423" y2="98.8" stroke="var(--ink)"/>
<text x="414" y="102.8" font-size="12" text-anchor="end" fill="var(--sub)">3</text>
<text x="704" y="181.5" font-size="13" font-style="italic" fill="var(--ink)">x</text>
<text x="425" y="22" font-size="13" font-style="italic" fill="var(--ink)">y</text>
<polyline fill="none" points="420,214.2 422.3,213.6 424.7,213 427,212.4 429.3,211.8 431.7,211.2 434,210.6 436.3,210 438.7,209.4 441,208.7 443.3,208.1 445.7,207.5 448,206.9 450.3,206.3 452.7,205.7 455,205.1 457.3,204.5 459.7,203.8 462,203.2 464.3,202.6 466.7,202 469,201.4 471.3,200.8 473.7,200.2 476,199.6 478.3,198.9 480.7,198.3 483,197.7 485.3,197.1 487.7,196.5 490,195.9 492.3,195.3 494.7,194.7 497,194 499.3,193.4 501.7,192.8 504,192.2 506.3,191.6 508.7,191 511,190.4 513.3,189.8 515.7,189.1 518,188.5 520.3,187.9 522.7,187.3 525,186.7 527.3,186.1 529.7,185.5 532,184.9 534.3,184.2 536.6,183.6 539,183 541.3,182.4 543.6,181.8 546,181.2 548.3,180.6 550.6,180 553,179.3 555.3,178.7 557.6,178.1 560,177.5" stroke="var(--warm)" stroke-width="2.2"/>
<polyline fill="none" points="560,125 562.3,124.4 564.7,123.8 567,123.2 569.3,122.5 571.7,121.9 574,121.3 576.3,120.7 578.7,120.1 581,119.5 583.3,118.9 585.7,118.3 588,117.6 590.3,117 592.7,116.4 595,115.8 597.3,115.2 599.7,114.6 602,114 604.3,113.4 606.7,112.8 609,112.1 611.3,111.5 613.7,110.9 616,110.3 618.3,109.7 620.7,109.1 623,108.5 625.3,107.8 627.7,107.2 630,106.6 632.3,106 634.7,105.4 637,104.8 639.3,104.2 641.7,103.6 644,103 646.3,102.3 648.7,101.7 651,101.1 653.3,100.5 655.7,99.9 658,99.3 660.3,98.7 662.7,98 665,97.4 667.3,96.8 669.7,96.2 672,95.6 674.3,95 676.7,94.4 679,93.8 681.3,93.1 683.7,92.5 686,91.9 688.3,91.3 690.7,90.7 693,90.1 695.3,89.5 697.7,88.9 700,88.2" stroke="var(--warm)" stroke-width="2.2"/>
<circle cx="560" cy="177.5" r="4" fill="var(--card)" stroke="var(--warm)" stroke-width="2"/>
<circle cx="560" cy="125" r="4" fill="var(--warm)"/>
<text x="560" y="252" font-size="13" text-anchor="middle" fill="var(--ink)" >不連続なら 0 を飛び越えうる</text>
</svg>
<figcaption>左は連続な y＝x³−x−1 で f(1)＝−1 ・ f(2)＝5 の間で x 軸と交わる。右は x＝1.5 で不連続な関数である。左から近づくと値は 0 に近づくが 0 にはならず x＝1.5 で値が 2 に跳ぶ。f(1)＝−1 ・ f(2)＝3 でも値 0 をとらない。</figcaption>
</figure>
<div class="ex"><div class="ex-h">例題 13</div>
<p>方程式 \(\cos\;x=x\) は \(0<x<\frac{\pi}{2}\) に少なくとも1つの実数解をもつことを示せ。</p>
<details open><summary>解き方</summary><div>\(g(x)=x-\cos\;x\) とおく。g は連続関数の差なので \(\left[0,\frac{\pi}{2}\right]\) で連続である。<br>\(g(0)=-1<0\) ・ \(g\left(\frac{\pi}{2}\right)=\frac{\pi}{2}>0\)<br>中間値の定理より \(g(c)=0\) となる c が \(0<c<\frac{\pi}{2}\) に存在する。</div></details></div>
<p><strong>典型的な誤り</strong>は2つある。中間値の定理は解の存在を示すが解の個数は示さない。解がただ1つであることを言うには第11章の増減を使う。また区間で連続であることを確かめずに定理を使うのも誤りである。右の図のように不連続なら値を飛び越えうる。</p>

<h2 id="s8">現実世界の極限 連続複利</h2>
<p>e は利息の計算から見つかった数である。年利100％で1年預けると元本1は2になる。半年ごとに50％ずつ複利で付けると \(1.5^2=2.25\) になる。年 n 回に分けて複利で付けると \(\left(1+\frac{1}{n}\right)^n\) になる。</p>
<div class="tb-tw"><table>
<thead><tr><th>利息を付ける回数</th><th>1年後の元利合計</th></tr></thead>
<tbody>
<tr><td>年1回</td><td>2</td></tr>
<tr><td>半年ごと 年2回</td><td>2.25</td></tr>
<tr><td>四半期ごと 年4回</td><td>2.4414</td></tr>
<tr><td>毎月 年12回</td><td>2.6130</td></tr>
<tr><td>毎日 年365回</td><td>2.7146</td></tr>
<tr><td>限りなく細かく</td><td>e＝2.71828…</td></tr>
</tbody></table></div>
<p>回数を増やしても元利合計は限りなく増えるのではなく e で頭打ちになる。年利 r で連続的に複利を付けると t 年後の元利合計は \(e^{rt}\) 倍になる。金融工学の割引計算はこの連続複利で書くことが多い。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>この問題を1683年に研究したのはヤコブ・ベルヌーイで極限が 2 と 3 の間にあることを示した。文字 e を使ったのはオイラーで1731年のゴールドバッハ宛の書簡に記録がある。</p>
</aside>

<h2 id="s9">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 分数式の極限</div>
<p class="qz-q">\(\lim_{n\to\infty}\frac{2n^2-3n}{5n^2+1}\) の値として正しいものを1つ選べ。</p>
<ol><li>0</li><li>\(\frac{2}{5}\)</li><li>\(-3\)</li><li>∞</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。分母と分子を \(n^2\) で割ると \(\frac{2-\frac{3}{n}}{5+\frac{1}{n^2}}\to\frac{2}{5}\)。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ ∞−∞ の不定形</div>
<p class="qz-q">\(\lim_{n\to\infty}\left(\sqrt{n^2+4n}-n\right)\) の値を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは 2 である。有理化して \(\frac{4n}{\sqrt{n^2+4n}+n}=\frac{4}{\sqrt{1+\frac{4}{n}}+1}\to\frac{4}{2}=2\)。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ rⁿ の極限</div>
<p class="qz-q">\(\lim_{n\to\infty}\frac{2^{n+1}+3^n}{3^{n+1}-2^n}\) の値として正しいものを1つ選べ。</p>
<ol><li>\(\frac{1}{3}\)</li><li>\(\frac{2}{3}\)</li><li>1</li><li>3</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。分母と分子を \(3^n\) で割ると \(\frac{2\left(\frac{2}{3}\right)^n+1}{3-\left(\frac{2}{3}\right)^n}\to\frac{1}{3}\)。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 無限等比級数の収束条件</div>
<p class="qz-q">無限級数 \(x+x(1-x)+x(1-x)^2+\cdots\) が収束する x の範囲として正しいものを1つ選べ。</p>
<ol><li>\(0<x<2\)</li><li>\(0\le x<2\)</li><li>\(0\le x\le 2\)</li><li>\(-1<x<1\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。初項 x ・公比 \(1-x\) である。x＝0 なら全項 0 で収束する。x≠0 なら \(-1<1-x<1\) から \(0<x<2\)。合わせて \(0\le x<2\)。1 は x＝0 の場合を落としている。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 循環小数</div>
<p class="qz-q">循環小数 \(0.3\dot{6}=0.3666\cdots\) を既約分数で表せ。</p>
<details><summary>解答と解説</summary><div>答えは \(\frac{11}{30}\) である。\(0.3+(0.06+0.006+\cdots)=\frac{3}{10}+\frac{0.06}{1-0.1}=\frac{3}{10}+\frac{1}{15}=\frac{11}{30}\)。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 三角関数の極限</div>
<p class="qz-q">\(\lim_{x\to 0}\frac{\sin\;5x}{\sin\;2x}\) の値を求めよ。</p>
<details><summary>解答と解説</summary><div>答えは \(\frac{5}{2}\) である。\(\frac{\sin\;5x}{5x}\cdot\frac{2x}{\sin\;2x}\cdot\frac{5}{2}\to 1\cdot 1\cdot\frac{5}{2}\)。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 極限値から係数を決める</div>
<p class="qz-q">\(\lim_{x\to 1}\frac{x^2+ax+b}{x-1}=5\) となる定数 a ・ b の組として正しいものを1つ選べ。</p>
<ol><li>a＝3 ・ b＝−4</li><li>a＝4 ・ b＝−5</li><li>a＝−3 ・ b＝2</li><li>a＝5 ・ b＝−6</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。分子 → 0 から \(b=-1-a\)。分子は \((x-1)(x+1+a)\) で極限は \(2+a=5\) から a＝3 ・ b＝−4。検算 \(\frac{x^2+3x-4}{x-1}=x+4\to 5\)。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 連続性と中間値の定理</div>
<p class="qz-q">次の記述のうち正しいものを1つ選べ。</p>
<ol><li>\(f(1)<0\) ・ \(f(2)>0\) ならどんな関数でも \(1<x<2\) に \(f(x)=0\) の解がある</li><li>\([1,2]\) で連続で \(f(1)<0\) ・ \(f(2)>0\) なら \(1<x<2\) に \(f(x)=0\) の解がちょうど1つある</li><li>\([1,2]\) で連続で \(f(1)<0\) ・ \(f(2)>0\) なら \(1<x<2\) に \(f(x)=0\) の解が少なくとも1つある</li><li>\(\lim_{x\to a}f(x)\) が存在すれば f は x＝a で連続である</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。1 は連続の仮定がない。2 は解の個数までは言えない。4 は極限値と \(f(a)\) が等しいことまで要る。たとえば \(f(a)\) だけ別の値に定めた関数は極限が存在しても不連続である。</div></details></div>

<h2 id="s10">この章の要点</h2>
<div class="tb-key"><b>要点</b>
∞/∞ は最高次で割り ∞−∞ は有理化する。∞ は数ではない。<br>
\(\lim\;r^n\) は r＞1 で ∞ ・ r＝1 で 1 ・ |r|＜1 で 0 ・ r≦−1 で振動。<br>
無限等比級数は a＝0 または |r|＜1 で収束し和は \(\frac{a}{1-r}\)。<br>
極限が存在するのは右側極限と左側極限が一致するとき。<br>
\(\lim_{x\to 0}\frac{\sin\;x}{x}=1\) は面積の比較とはさみうちで導く。x はラジアン。<br>
\(e=\lim\left(1+\frac{1}{n}\right)^n=\lim_{h\to 0}(1+h)^{\frac{1}{h}}=2.718\cdots\)。<br>
連続関数が異符号の値をとれば間に解がある。中間値の定理は存在だけを示す。</div>

<h2 id="s11">残っている問い</h2>
<ul>
<li class="tb-vnote">高校では「限りなく近づく」という言葉で極限を定義する。大学ではこれを ε-δ 論法で厳密に定める。高校の定義は直感的な説明である。</li>
<li class="tb-vnote">\(\left(1+\frac{1}{n}\right)^n\) が収束することの証明は「上に有界な単調数列は収束する」という実数の連続性に依存する。高校ではこの性質を証明せずに用いる。</li>
<li class="tb-vnote">sin x / x の証明で扇形の面積 ½x を使う。扇形の面積は弧の長さから導かれ弧の長さの定義には極限が含まれるので循環論法だという指摘がある。厳密には大学で三角関数を級数で定義し直す。</li>
<li class="tb-vnote">ベルヌーイの研究年は1683年とする資料が多いが刊行を1685年とする資料もあり確定できなかった。</li>
<li class="tb-vnote">数学Ⅲの解説は関数の値の極限に関連して関数の連続性を扱うと定める。中間値の定理の名称は解説に見当たらない。教科書で本文と発展のどちらに置くかは確認できなかった。</li>
</ul>

<h2 id="s12">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>国立大学協会掲載 令和9年度大学入学共通テスト出題教科・科目の出題方法等 — https://www.janu.jp/cms/wp-content/uploads/2026/06/r9syutsudai.pdf</li>
<li>e (mathematical constant) — Wikipedia — https://en.wikipedia.org/wiki/E_(mathematical_constant)</li>
<li>Limit of a sequence — Wikipedia — https://en.wikipedia.org/wiki/Limit_of_a_sequence</li>
<li>Geometric series — Wikipedia — https://en.wikipedia.org/wiki/Geometric_series</li>
<li>Intermediate value theorem — Wikipedia — https://en.wikipedia.org/wiki/Intermediate_value_theorem</li>
<li>Fiscal multiplier — Wikipedia — https://en.wikipedia.org/wiki/Fiscal_multiplier</li>
<li>Harmonic series (mathematics) — Wikipedia — https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)</li>
</ol>
