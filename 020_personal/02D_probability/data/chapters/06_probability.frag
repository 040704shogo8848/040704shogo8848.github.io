<!--meta
{"chapter": 6, "part": "数学A", "title": "確率と独立な試行", "thesis": "確率は同様に確からしい根元事象を数えた比である。和事象と余事象の公式は第4章の集合の要素の個数の公式をそのまま確率に移したものである。独立な試行では確率を掛け・反復試行ではさらに並び順の数 nCr を掛ける。", "verify": {"date": "2026-10-15", "checked": 46, "match": 43, "fixed": 2, "unconfirmed": 1}}
-->
<p>第4章と第5章で場合の数を正確に数える方法を積み上げた。この章ではその数え方を使って確率を定義する。確率の基本法則は集合の要素の個数の公式を全体の個数で割ったものである。数え方を確率の言葉に移すことがこの章の中心である。</p>
<p>共通テストの確率の大問では余事象を使う「少なくとも」の計算・独立な試行の積・反復試行の公式 \({}_{n}\mathrm{C}_{r}p^r(1-p)^{n-r}\) が繰り返し問われる。続く第7章の条件付き確率もこの章の積事象の考えを土台とする。</p>

<h2 id="s1">試行と事象・確率の定義</h2>
<p>同じ条件のもとで繰り返すことができ結果が偶然によって定まる実験や観測を<strong>試行</strong>と呼ぶ。試行の結果として起こる事柄を<strong>事象</strong>と呼ぶ。さいころを1回投げることは試行であり「偶数の目が出る」は事象である。</p>
<p>試行の結果全体の集合を<strong>全事象</strong>と呼び \(U\) で表す。事象は \(U\) の部分集合として表せる。さいころ1回なら \(U=\{1,2,3,4,5,6\}\) で偶数の目が出る事象は \(A=\{2,4,6\}\) である。\(U\) のただ1つの要素からなる事象を<strong>根元事象</strong>と呼ぶ。要素をもたない事象を<strong>空事象</strong>と呼び \(\varnothing\) で表す。</p>
<p>どの根元事象が起こることも同じ程度に期待できるときそれらの根元事象は<strong>同様に確からしい</strong>という。このとき事象 \(A\) の確率を次のように定める。</p>
\[ P(A)=\frac{n(A)}{n(U)}=\frac{\text{事象 }A\text{ の起こる場合の数}}{\text{起こり得るすべての場合の数}} \]
<p>定義から \(0\le P(A)\le1\) で \(P(\varnothing)=0\) と \(P(U)=1\) が成り立つ。</p>
<p>学習指導要領解説は確率の捉え方として2つを扱うと定めている。上の定義は<strong>論理的な確率</strong>である。もう1つは試行を多数回繰り返したときの相対度数が近づく値として確率を捉える<strong>頻度確率</strong>である。さいころを何千回も投げると1の目の相対度数は \(\dfrac{1}{6}\) に近い値で安定する。中学校1年で学んだこの見方と2年で学んだ同様に確からしい見方は同じ値に行き着く。</p>
<p>試行の回数を増やすと相対度数が一定の値に近づく性質を<strong>大数の法則</strong>と呼ぶ。頻度確率はこの法則を根拠とする。ただし少ない回数では相対度数は確率から大きくずれる。さいころを6回投げて1の目がちょうど1回出るとは限らない。確率は多数回の傾向を表す数であり次の1回の結果を定める数ではない。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 360" role="img" aria-label="大小2個のさいころの目の和を36マスの表で示し和が7のマスを強調する">
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="335" y="22">小のさいころ</text>
  </g>
  <text x="90" y="200" font-size="12" fill="var(--sub)" text-anchor="middle">大のさいころ</text>
  <g font-size="14" font-weight="700" text-anchor="middle" fill="var(--ink)">
    <text x="210" y="50">1</text><text x="260" y="50">2</text><text x="310" y="50">3</text><text x="360" y="50">4</text><text x="410" y="50">5</text><text x="460" y="50">6</text>
    <text x="160" y="90">1</text><text x="160" y="140">2</text><text x="160" y="190">3</text><text x="160" y="240">4</text><text x="160" y="290">5</text><text x="160" y="340">6</text>
  </g>
  <g fill="var(--accent)" fill-opacity="0.28">
    <rect x="435" y="60" width="50" height="50"/><rect x="385" y="110" width="50" height="50"/><rect x="335" y="160" width="50" height="50"/><rect x="285" y="210" width="50" height="50"/><rect x="235" y="260" width="50" height="50"/><rect x="185" y="310" width="50" height="50"/>
  </g>
  <g stroke="var(--line)" fill="none">
    <rect x="185" y="60" width="300" height="300"/>
    <line x1="235" y1="60" x2="235" y2="360"/><line x1="285" y1="60" x2="285" y2="360"/><line x1="335" y1="60" x2="335" y2="360"/><line x1="385" y1="60" x2="385" y2="360"/><line x1="435" y1="60" x2="435" y2="360"/>
    <line x1="185" y1="110" x2="485" y2="110"/><line x1="185" y1="160" x2="485" y2="160"/><line x1="185" y1="210" x2="485" y2="210"/><line x1="185" y1="260" x2="485" y2="260"/><line x1="185" y1="310" x2="485" y2="310"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="var(--ink)">
    <text x="210" y="90">2</text><text x="260" y="90">3</text><text x="310" y="90">4</text><text x="360" y="90">5</text><text x="410" y="90">6</text><text x="460" y="90">7</text>
    <text x="210" y="140">3</text><text x="260" y="140">4</text><text x="310" y="140">5</text><text x="360" y="140">6</text><text x="410" y="140">7</text><text x="460" y="140">8</text>
    <text x="210" y="190">4</text><text x="260" y="190">5</text><text x="310" y="190">6</text><text x="360" y="190">7</text><text x="410" y="190">8</text><text x="460" y="190">9</text>
    <text x="210" y="240">5</text><text x="260" y="240">6</text><text x="310" y="240">7</text><text x="360" y="240">8</text><text x="410" y="240">9</text><text x="460" y="240">10</text>
    <text x="210" y="290">6</text><text x="260" y="290">7</text><text x="310" y="290">8</text><text x="360" y="290">9</text><text x="410" y="290">10</text><text x="460" y="290">11</text>
    <text x="210" y="340">7</text><text x="260" y="340">8</text><text x="310" y="340">9</text><text x="360" y="340">10</text><text x="410" y="340">11</text><text x="460" y="340">12</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="520" y="120">36マスが</text><text x="520" y="142">同様に確からしい</text>
    <text x="520" y="190">和が7のマス 6個</text>
    <text x="520" y="230" font-weight="700">確率 6/36 ＝ 1/6</text>
  </g>
</svg>
<figcaption>大小のさいころの目の組 \((a,b)\) は \(6\times6=36\) 通りでどれも同様に確からしい。マスの数字は目の和である。和が7の6マスは右上から左下への対角線上に並ぶ。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 1</div>
<p>大小2個のさいころを投げる。(1) 目の和が7になる確率 (2) 目の和が10以上になる確率を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 目の出方は36通りで同様に確からしい。<br>手順2 (1) 和が7のマスは6個なので \(\dfrac{6}{36}=\dfrac{1}{6}\) である。<br>手順3 (2) 和が10は3個・11は2個・12は1個で合計6個である。<br>答え (1) \(\dfrac{1}{6}\) (2) \(\dfrac{6}{36}=\dfrac{1}{6}\)</div></details></div>

<h2 id="s2">同様に確からしくなるように数える</h2>
<p>確率の計算で最も多い誤りは<strong class="hit">同様に確からしくない場合を数えて分母にする</strong>ことである。2枚の硬貨を投げて表が1枚だけ出る確率を考える。結果を「表0枚・表1枚・表2枚」の3通りとみて \(\dfrac{1}{3}\) とするのは誤りである。この3つは起こりやすさが等しくない。</p>
<p>2枚の硬貨を A と B に区別すると結果は (表,表)(表,裏)(裏,表)(裏,裏) の4通りでこれは同様に確からしい。表が1枚だけの事象は (表,裏) と (裏,表) の2通りを含むので確率は \(\dfrac{2}{4}=\dfrac{1}{2}\) である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="2枚の硬貨を区別すると表の枚数の確率は4分の1と2分の1と4分の1になる">
  <text x="30" y="26" font-size="13" fill="var(--muted)">区別した4通り 各 1/4</text>
  <g font-size="14" font-weight="700" text-anchor="middle" fill="#fff">
    <circle cx="60" cy="70" r="18" fill="var(--warm)"/><text x="60" y="75">表</text><circle cx="105" cy="70" r="18" fill="var(--warm)"/><text x="105" y="75">表</text>
    <circle cx="60" cy="125" r="18" fill="var(--warm)"/><text x="60" y="130">表</text><circle cx="105" cy="125" r="18" fill="var(--cool)"/><text x="105" y="130">裏</text>
    <circle cx="60" cy="170" r="18" fill="var(--cool)"/><text x="60" y="175">裏</text><circle cx="105" cy="170" r="18" fill="var(--warm)"/><text x="105" y="175">表</text>
    <circle cx="60" cy="225" r="18" fill="var(--cool)"/><text x="60" y="230">裏</text><circle cx="105" cy="225" r="18" fill="var(--cool)"/><text x="105" y="230">裏</text>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="middle"><text x="60" y="46">A</text><text x="105" y="46">B</text></g>
  <g stroke="var(--line)" stroke-width="1.4" fill="none">
    <line x1="135" y1="70" x2="230" y2="70"/><line x1="135" y1="125" x2="230" y2="147"/><line x1="135" y1="170" x2="230" y2="147"/><line x1="135" y1="225" x2="230" y2="225"/>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="240" y="75">表2枚</text><text x="240" y="152">表1枚</text><text x="240" y="230">表0枚</text>
  </g>
  <line x1="320" y1="40" x2="700" y2="40" stroke="var(--line)"/>
  <text x="330" y="30" font-size="12" fill="var(--sub)">正しい確率</text>
  <text x="560" y="30" font-size="12" fill="var(--sub)">誤った見方 各 1/3</text>
  <g fill="var(--accent)">
    <rect x="330" y="58" width="100" height="24"/><rect x="330" y="135" width="200" height="24"/><rect x="330" y="213" width="100" height="24"/>
  </g>
  <g fill="none" stroke="var(--muted)" stroke-dasharray="4 3" stroke-width="1.5">
    <rect x="330" y="58" width="133" height="24"/><rect x="330" y="135" width="133" height="24"/><rect x="330" y="213" width="133" height="24"/>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="545" y="75">1/4</text><text x="545" y="152">2/4 ＝ 1/2</text><text x="545" y="230">1/4</text>
  </g>
  <line x1="330" y1="45" x2="330" y2="245" stroke="var(--ink)"/>
</svg>
<figcaption>横棒の長さは確率である。塗った棒が正しい確率で破線の枠は表の枚数3通りを等しいとみた誤りの \(\dfrac{1}{3}\) である。棒の長さは \(\dfrac{1}{4}\) を100とする比で描いた。</figcaption>
</figure>

<p>同じ注意は区別のつかないものを取り出す場面でも必要である。赤玉3個と白玉2個が入った袋から2個を同時に取り出す。このとき色の組合せ「赤赤・赤白・白白」の3通りは同様に確からしくない。<strong class="hit">同じ色の玉にも番号をつけて区別して数える</strong>。取り出し方は \({}_{5}\mathrm{C}_{2}=10\) 通りで同様に確からしい。</p>
<p>さいころ2個を同時に投げる場合も同じである。見た目が同じさいころでも大と小に区別して36通りで数える。目の組を区別せずに (1,2) と (2,1) を1通りとみると21通りになるが その21通りは同様に確からしくない。ぞろ目の (1,1) は36通りのうち1通りで (1,2) の組は2通りにあたるからである。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>赤玉3個と白玉2個が入った袋から2個を同時に取り出す。2個とも赤玉である確率と赤玉と白玉が1個ずつである確率を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 5個の玉に番号をつけて区別する。取り出し方は \({}_{5}\mathrm{C}_{2}=10\) 通りである。<br>手順2 2個とも赤は赤3個から2個を選ぶ \({}_{3}\mathrm{C}_{2}=3\) 通りである。<br>手順3 1個ずつは赤から1個・白から1個で \(3\times2=6\) 通りである。<br>答え 2個とも赤 \(\dfrac{3}{10}\) ・ 1個ずつ \(\dfrac{6}{10}=\dfrac{3}{5}\)</div></details></div>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">結果が2通りあるから確率が2分の1になるわけではない</p>
<p>告白の結果は成功と失敗の2通りでもその2つが同様に確からしいとは限らない。分母にできるのは起こりやすさの等しい結果だけである。</p>
</aside>

<h2 id="s3">積事象と和事象・加法定理</h2>
<p>2つの事象 \(A\) と \(B\) について \(A\) と \(B\) がともに起こる事象を<strong>積事象</strong>と呼び \(A\cap B\) で表す。\(A\) または \(B\) が起こる事象を<strong>和事象</strong>と呼び \(A\cup B\) で表す。集合の共通部分と和集合をそのまま事象に用いたものである。</p>
<p>\(A\) と \(B\) が同時に起こらないときに \(A\) と \(B\) は互いに<strong>排反</strong>であるという。式で書くと \(A\cap B=\varnothing\) である。排反な事象については次の<strong>確率の加法定理</strong>が成り立つ。</p>
\[ A\cap B=\varnothing \text{ のとき } P(A\cup B)=P(A)+P(B) \]
<p>排反でないときは第4章の要素の個数の公式を \(n(U)\) で割って次の式を得る。</p>
\[ P(A\cup B)=P(A)+P(B)-P(A\cap B) \]
<p>理由は第4章と同じである。\(P(A)+P(B)\) では \(A\cap B\) の確率が2回加えられているので1回分を引く。</p>
<p>排反と次節で扱う独立は異なる概念である。排反は1回の試行の中で2つの事象が同時に起こらないことをいう。独立は2つの試行の結果が互いに影響しないことをいう。1回の試行で「偶数の目」と「奇数の目」は排反である。偶数が出たと分かれば奇数は出ていないので2つの事象は強く影響し合っている。<strong class="hit">排反なら確率を足し 独立なら確率を掛ける</strong>と区別して整理する。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>1 から 20 までの番号のカードから1枚を引く。番号が2の倍数または3の倍数である確率を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 2の倍数の事象を \(A\) とし3の倍数の事象を \(B\) とする。\(P(A)=\dfrac{10}{20}\) で \(P(B)=\dfrac{6}{20}\) である。<br>手順2 \(A\cap B\) は6の倍数で 6・12・18 の3枚なので \(P(A\cap B)=\dfrac{3}{20}\) である。<br>手順3 \(A\) と \(B\) は排反でないので重なりを引く。<br>答え \(\dfrac{10+6-3}{20}=\dfrac{13}{20}\)</div></details></div>

<div class="ex"><div class="ex-h">例題 4</div>
<p>赤玉4個と白玉3個が入った袋から3個を同時に取り出す。3個が同じ色である確率を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 取り出し方は \({}_{7}\mathrm{C}_{3}=35\) 通りである。<br>手順2 3個とも赤は \({}_{4}\mathrm{C}_{3}=4\) 通りで3個とも白は \({}_{3}\mathrm{C}_{3}=1\) 通りである。<br>手順3 「3個とも赤」と「3個とも白」は同時に起こらないので排反である。加法定理で足す。<br>答え \(\dfrac{4}{35}+\dfrac{1}{35}=\dfrac{5}{35}=\dfrac{1}{7}\)</div></details></div>

<h2 id="s4">余事象の確率</h2>
<p>事象 \(A\) に対して「\(A\) が起こらない」という事象を \(A\) の<strong>余事象</strong>と呼び \(\overline{A}\) で表す。\(A\) と \(\overline{A}\) は排反で和事象は全事象 \(U\) である。加法定理から \(P(A)+P(\overline{A})=P(U)=1\) となり次の式が成り立つ。</p>
\[ P(\overline{A})=1-P(A) \]
<p>余事象は「少なくとも1つ」を含む問題で使う。「少なくとも1回は6の目が出る」を直接数えると「1回だけ」「2回だけ」などに場合を分ける。余事象は「1回も6の目が出ない」の1つで済む。<strong class="hit">場合が多い側を数えずに少ない側を数えて1から引く</strong>。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>3枚の硬貨を同時に投げる。少なくとも1枚は表が出る確率を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 3枚を区別すると結果は \(2^3=8\) 通りで同様に確からしい。<br>手順2 余事象は「3枚とも裏」で1通りなので確率は \(\dfrac{1}{8}\) である。<br>答え \(1-\dfrac{1}{8}=\dfrac{7}{8}\)</div></details></div>

<div class="ex"><div class="ex-h">例題 6</div>
<p>1 から 100 までの番号のカードから1枚を引く。番号が3の倍数でも5の倍数でもない確率を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 3の倍数を \(A\) とし5の倍数を \(B\) とする。求める事象は \(\overline{A}\cap\overline{B}=\overline{A\cup B}\) である。<br>手順2 \(n(A)=33\) で \(n(B)=20\) で \(n(A\cap B)=6\) である。15の倍数が6個ある。<br>手順3 \(P(A\cup B)=\dfrac{33+20-6}{100}=\dfrac{47}{100}\) である。<br>答え \(1-\dfrac{47}{100}=\dfrac{53}{100}\)</div></details></div>

<div class="ex"><div class="ex-h">例題 7</div>
<p>1個のさいころを \(n\) 回投げる。少なくとも1回6の目が出る確率が 0.9 以上になる最小の \(n\) を求めよ。\(\left(\dfrac{5}{6}\right)^{12}\approx0.112\) と \(\left(\dfrac{5}{6}\right)^{13}\approx0.093\) を用いてよい。</p>
<details open><summary>解き方</summary><div>手順1 余事象は \(n\) 回とも6以外で確率は \(\left(\dfrac{5}{6}\right)^n\) である。<br>手順2 条件は \(1-\left(\dfrac{5}{6}\right)^n\ge0.9\) つまり \(\left(\dfrac{5}{6}\right)^n\le0.1\) である。<br>手順3 \(\left(\dfrac{5}{6}\right)^n\) は \(n\) が増えると小さくなる。\(n=12\) では 0.112 で 0.1 を超え \(n=13\) では 0.093 で 0.1 以下になる。<br>答え 13</div></details></div>
<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">少なくとも1安打の確率は4打席連続凡退を1から引いて求める</p>
<p>各打席の安打の確率を0.3とみると 4打席すべて凡退は \(0.7^4=0.2401\) で少なくとも1安打は約0.76である。</p>
<p class="an-x">打席ごとの結果が互いに影響しないとみなす計算である。この仮定が次節の独立である。</p>
</aside>

<h2 id="s5">独立な試行の確率</h2>
<p>2つの試行の結果が互いに影響を及ぼさないときその2つの試行は<strong>独立</strong>であるという。さいころを投げる試行と硬貨を投げる試行は独立である。1回目にさいころを投げる試行と2回目に投げる試行も独立である。</p>
<p>独立な試行 S と T を行うとき S で事象 \(A\) が起こり T で事象 \(B\) が起こる事象を \(C\) とする。\(C\) の確率は次のとおりである。</p>
\[ P(C)=P(A)\,P(B) \]
<p>理由は積の法則にある。S の結果が \(m\) 通りで同様に確からしくそのうち \(A\) が \(a\) 通りとする。T の結果が \(n\) 通りで \(B\) が \(b\) 通りとする。2つの試行を合わせた結果は \(mn\) 通りで同様に確からしく \(C\) が起こるのは \(ab\) 通りである。したがって \(P(C)=\dfrac{ab}{mn}=\dfrac{a}{m}\cdot\dfrac{b}{n}\) となる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="独立な試行の確率が面積の積になることを正方形で示す">
  <rect x="120" y="40" width="360" height="240" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <rect x="120" y="40" width="120" height="240" fill="var(--cool)" fill-opacity="0.18"/>
  <rect x="120" y="40" width="360" height="120" fill="var(--warm)" fill-opacity="0.15"/>
  <rect x="120" y="40" width="120" height="120" fill="var(--accent)" fill-opacity="0.35"/>
  <g stroke="var(--line)">
    <line x1="160" y1="40" x2="160" y2="280"/><line x1="200" y1="40" x2="200" y2="280"/><line x1="240" y1="40" x2="240" y2="280"/><line x1="280" y1="40" x2="280" y2="280"/><line x1="320" y1="40" x2="320" y2="280"/><line x1="360" y1="40" x2="360" y2="280"/><line x1="400" y1="40" x2="400" y2="280"/><line x1="440" y1="40" x2="440" y2="280"/>
    <line x1="120" y1="160" x2="480" y2="160"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="var(--sub)">
    <text x="140" y="298">1</text><text x="180" y="298">2</text><text x="220" y="298">3</text><text x="260" y="298">4</text><text x="300" y="298">5</text><text x="340" y="298">6</text><text x="380" y="298">7</text><text x="420" y="298">8</text><text x="460" y="298">9</text>
  </g>
  <g font-size="13" fill="var(--sub)" text-anchor="end">
    <text x="110" y="104">表</text><text x="110" y="224">裏</text>
  </g>
  <text x="180" y="30" font-size="12" text-anchor="middle" fill="var(--cool)">A 1から3</text>
  <text x="180" y="105" font-size="14" font-weight="700" text-anchor="middle" fill="var(--ink)">A かつ B</text>
  <g font-size="13" fill="var(--ink)">
    <text x="505" y="80">横 カード9枚から1枚</text>
    <text x="505" y="102">P(A) ＝ 3/9 ＝ 1/3</text>
    <text x="505" y="142">縦 硬貨1枚</text>
    <text x="505" y="164">P(B) ＝ 1/2</text>
    <text x="505" y="214" font-weight="700">濃い長方形の面積</text>
    <text x="505" y="236" font-weight="700">1/3 × 1/2 ＝ 1/6</text>
  </g>
</svg>
<figcaption>横軸はカード9枚から1枚を引く試行で縦軸は硬貨を投げる試行である。2つの試行を合わせた18通りが同じ大きさの長方形に対応する。独立なので \(A\) の幅と \(B\) の高さの積が \(A\) かつ \(B\) の面積になる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 8</div>
<p>A がある的に当てる確率は 0.7 で B が当てる確率は 0.6 である。2人が1回ずつ独立に撃つ。(1) 2人とも当てる確率 (2) 少なくとも1人が当てる確率 (3) ちょうど1人が当てる確率を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 (1) 独立なので \(0.7\times0.6=0.42\) である。<br>手順2 (2) 余事象は2人とも外すことで確率は \(0.3\times0.4=0.12\) である。\(1-0.12=0.88\) である。<br>手順3 (3) A だけ当てる確率は \(0.7\times0.4=0.28\) で B だけ当てる確率は \(0.3\times0.6=0.18\) である。2つは排反なので足す。<br>答え (1) 0.42 (2) 0.88 (3) 0.46</div></details></div>
<p>3つ以上の独立な試行でも同じように確率を掛ける。3人がそれぞれ確率 0.7・0.6・0.5 で的に当てるとき 3人とも当てる確率は \(0.7\times0.6\times0.5=0.21\) である。少なくとも1人が当てる確率は \(1-0.3\times0.4\times0.5=1-0.06=0.94\) である。</p>
<p>(2) を \(0.7+0.6=1.3\) とする誤りは加法定理を排反でない事象に使った誤りである。確率が1を超えたら計算を見直す。また<strong class="hit">取り出した玉を袋に戻さない試行は独立ではない</strong>。1回目の結果で2回目の袋の中身が変わるからである。この場合は第7章の乗法定理を使う。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">確率を掛けてよいのは独立のときだけである</p>
<p>倒産確率1%の2社が独立なら同時倒産は0.01%である。同じ景気に連動する2社では積で求めた値より同時倒産の確率が高くなる。</p>
</aside>

<h2 id="s6">反復試行の確率</h2>
<p>同じ条件のもとで同じ試行を繰り返す。各回の試行が独立であるときこれを<strong>反復試行</strong>と呼ぶ。1回の試行で事象 \(A\) が起こる確率を \(p\) とする。この試行を \(n\) 回繰り返して \(A\) がちょうど \(r\) 回起こる確率は次のとおりである。</p>
\[ {}_{n}\mathrm{C}_{r}\,p^r(1-p)^{n-r} \]
<p>導出は2段階である。たとえば \(n=5\) で \(r=2\) とし \(A\) が起こることを ○ 起こらないことを × で表す。</p>
<ul>
<li>○○××× のように並びを1つ固定する。各回は独立なのでこの並びの確率は \(p\cdot p\cdot(1-p)(1-p)(1-p)=p^2(1-p)^3\) である。どの並びでも ○ が2個で × が3個なら確率は同じ値になる。</li>
<li>○ 2個と × 3個の並びは5回のうち ○ の回を2つ選ぶ方法の数 \({}_{5}\mathrm{C}_{2}=10\) 通りある。これらは互いに排反である。</li>
</ul>
<p>加法定理で同じ値を10個足して \({}_{5}\mathrm{C}_{2}p^2(1-p)^3\) となる。<strong class="hit">1つの並びの確率に並びの数を掛ける</strong>のが反復試行の公式である。並びの数は第5章の同じものを含む順列である。</p>
<p>反復試行の公式を使えるのは各回の確率 \(p\) が変わらない場合に限られる。袋から玉を1個取り出して色を記録し袋に戻してから次を取り出す試行は反復試行である。戻さずに取り出す場合は2回目以降の確率が変わるので反復試行ではない。戻さない場合の確率はこの章の第2節のように組合せの比で求めるか第7章の乗法定理で求める。問題文の「戻す」「戻さない」は必ず確かめる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 290" role="img" aria-label="確率3分の1の試行を5回行ったときの成功回数の確率の棒グラフ">
  <g stroke="var(--line)" stroke-dasharray="3 3">
    <line x1="80" y1="185.7" x2="660" y2="185.7"/><line x1="80" y1="131.4" x2="660" y2="131.4"/><line x1="80" y1="77.1" x2="660" y2="77.1"/>
  </g>
  <line x1="80" y1="240" x2="660" y2="240" stroke="var(--ink)"/>
  <line x1="80" y1="40" x2="80" y2="240" stroke="var(--ink)"/>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="72" y="244">0</text><text x="72" y="190">0.1</text><text x="72" y="135">0.2</text><text x="72" y="81">0.3</text>
  </g>
  <g fill="var(--cool)">
    <rect x="100" y="168.5" width="60" height="71.5"/>
    <rect x="200" y="61.3" width="60" height="178.7"/>
    <rect x="300" y="61.3" width="60" height="178.7"/>
    <rect x="400" y="150.6" width="60" height="89.4"/>
    <rect x="500" y="217.6" width="60" height="22.4"/>
    <rect x="600" y="237.8" width="60" height="2.2"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="var(--ink)">
    <text x="130" y="162">32/243</text><text x="230" y="55">80/243</text><text x="330" y="55">80/243</text><text x="430" y="144">40/243</text><text x="530" y="211">10/243</text><text x="630" y="231">1/243</text>
  </g>
  <g font-size="13" text-anchor="middle" fill="var(--sub)">
    <text x="130" y="260">0回</text><text x="230" y="260">1回</text><text x="330" y="260">2回</text><text x="430" y="260">3回</text><text x="530" y="260">4回</text><text x="630" y="260">5回</text>
  </g>
  <text x="370" y="284" font-size="12" text-anchor="middle" fill="var(--sub)">さいころを5回投げて1か2の目が出る回数</text>
</svg>
<figcaption>\(p=\dfrac{1}{3}\) で \(n=5\) のときの \({}_{5}\mathrm{C}_{r}\left(\dfrac{1}{3}\right)^r\left(\dfrac{2}{3}\right)^{5-r}\) を棒の高さで示した。分子は 32・80・80・40・10・1 で合計は 243 になり確率の和は1である。第8章ではこの分布を二項分布として扱う。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 9</div>
<p>1個のさいころを5回投げる。1の目がちょうど2回出る確率を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 1回で1の目が出る確率は \(p=\dfrac{1}{6}\) である。<br>手順2 公式で \({}_{5}\mathrm{C}_{2}\left(\dfrac{1}{6}\right)^2\left(\dfrac{5}{6}\right)^3=10\cdot\dfrac{1}{36}\cdot\dfrac{125}{216}\) である。<br>手順3 \(\dfrac{1250}{7776}\) を約分する。<br>答え \(\dfrac{625}{3888}\) で約 0.161</div></details></div>

<div class="ex"><div class="ex-h">例題 10</div>
<p>A と B が試合を繰り返し 先に3勝したほうを優勝とする。1試合で A が勝つ確率は \(\dfrac{2}{3}\) で引き分けはない。A がちょうど4試合目で優勝する確率を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 4試合目で優勝するには3試合目までに A が2勝1敗で 4試合目に A が勝つ。<br>手順2 3試合で2勝1敗の確率は \({}_{3}\mathrm{C}_{2}\left(\dfrac{2}{3}\right)^2\dfrac{1}{3}=\dfrac{4}{9}\) である。<br>手順3 4試合目の勝ちを掛けて \(\dfrac{4}{9}\times\dfrac{2}{3}\) である。<br>答え \(\dfrac{8}{27}\)</div></details></div>
<p>この問題を「4試合で3勝1敗」として \({}_{4}\mathrm{C}_{3}\left(\dfrac{2}{3}\right)^3\dfrac{1}{3}=\dfrac{32}{81}\) とするのは誤りである。この中には最初の3試合で3連勝し4試合目を行わない並びが含まれる。<strong class="hit">最後の試合は勝ちに固定してそれより前の試合だけに反復試行の公式を使う</strong>。</p>

<div class="ex"><div class="ex-h">例題 11</div>
<p>数直線上の原点に点 P がある。硬貨を投げて表なら P を正の向きに1だけ動かし 裏なら負の向きに1だけ動かす。硬貨を6回投げた後に P が座標2にある確率を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 表の回数を \(x\) とすると裏は \(6-x\) 回で座標は \(x-(6-x)=2x-6\) である。<br>手順2 \(2x-6=2\) より \(x=4\) である。表4回と裏2回の場合に限られる。<br>手順3 反復試行の公式で \({}_{6}\mathrm{C}_{4}\left(\dfrac{1}{2}\right)^4\left(\dfrac{1}{2}\right)^2=\dfrac{15}{64}\) である。<br>答え \(\dfrac{15}{64}\)</div></details></div>
<p>移動の問題は動きを回数の式に直してから反復試行の公式を使う。\(2x-6\) は偶数なので6回後に奇数の座標にある確率は0である。座標の偶奇から先に可能な場合を絞ると計算を省ける。</p>

<h2 id="s7">現実世界の確率 賭けの分配問題</h2>
<p>確率論の出発点の1つは賭けの途中で勝負を打ち切ったとき賭け金をどう分けるかという分配問題である。ルカ・パチョーリは1494年の著作でこの問題を扱った。1654年ごろにシュヴァリエ・ド・メレがパスカルにこの問題を示した。パスカルとフェルマーの往復書簡で解決への道が開かれた。フェルマーは残りの試合のすべての勝ち負けの並びを数えて各人の勝つ確率に比例して分ける方法を示した。パスカルは1試合ずつさかのぼる別の方法で同じ結論を得た。並びを数えるフェルマーの方法は第6節の反復試行と同じ考え方である。</p>
<aside class="an an-rw"><b>現実世界</b>
<p class="an-h">ド・メレの名で知られるさいころの問題は余事象で一行で解ける</p>
<p>1個を4回投げて6が少なくとも1回出る確率は \(1-\left(\dfrac{5}{6}\right)^4\approx0.518\) である。2個を24回投げて6のぞろ目が少なくとも1回出る確率は \(1-\left(\dfrac{35}{36}\right)^{24}\approx0.491\) で2分の1を下回る。</p>
</aside>

<h2 id="s8">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 余事象</div>
<p class="qz-q">大小2個のさいころを投げる。目の積が偶数になる確率として正しいものを1つ選べ。</p>
<ol><li>\(\dfrac{1}{2}\)</li><li>\(\dfrac{3}{4}\)</li><li>\(\dfrac{2}{3}\)</li><li>\(\dfrac{1}{4}\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。余事象は積が奇数つまり2つとも奇数の目で確率は \(\dfrac{3}{6}\cdot\dfrac{3}{6}=\dfrac{1}{4}\) である。\(1-\dfrac{1}{4}=\dfrac{3}{4}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 組合せと確率</div>
<p class="qz-q">赤玉5個と白玉3個が入った袋から2個を同時に取り出す。2個の色が異なる確率を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は \(\dfrac{15}{28}\) である。取り出し方は \({}_{8}\mathrm{C}_{2}=28\) 通りで赤1個と白1個は \(5\times3=15\) 通りである。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 少なくとも</div>
<p class="qz-q">3個のさいころを同時に投げる。少なくとも1個は6の目が出る確率を求めよ。</p>
<ol><li>\(\dfrac{1}{2}\)</li><li>\(\dfrac{91}{216}\)</li><li>\(\dfrac{125}{216}\)</li><li>\(\dfrac{75}{216}\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。余事象は3個とも6以外で \(\left(\dfrac{5}{6}\right)^3=\dfrac{125}{216}\) である。\(1-\dfrac{125}{216}=\dfrac{91}{216}\) である。4 は6がちょうど1個出る確率 \({}_{3}\mathrm{C}_{1}\cdot\dfrac{1}{6}\cdot\dfrac{25}{36}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 反復試行</div>
<p class="qz-q">1枚の硬貨を6回投げる。表がちょうど4回出る確率を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は \(\dfrac{15}{64}\) である。\({}_{6}\mathrm{C}_{4}\left(\dfrac{1}{2}\right)^4\left(\dfrac{1}{2}\right)^2=\dfrac{15}{64}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 優勝の確率</div>
<p class="qz-q">A と B が試合を繰り返し先に2勝したほうを優勝とする。1試合で A が勝つ確率は 0.6 で引き分けはない。A が優勝する確率を求めよ。</p>
<ol><li>0.36</li><li>0.6</li><li>0.648</li><li>0.784</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。2試合で優勝する確率は \(0.6^2=0.36\) である。3試合目で優勝するのは最初の2試合が1勝1敗で3試合目に勝つ場合で \({}_{2}\mathrm{C}_{1}\times0.6\times0.4\times0.6=0.288\) である。2つは排反で \(0.36+0.288=0.648\) である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 同様に確からしい</div>
<p class="qz-q">2枚の硬貨を同時に投げる。表と裏が1枚ずつ出る確率について正しい記述を1つ選べ。</p>
<ol><li>表の枚数は0枚・1枚・2枚の3通りなので \(\dfrac{1}{3}\) である</li><li>2枚を区別すると4通りのうち2通りなので \(\dfrac{1}{2}\) である</li><li>硬貨は区別できないので \(\dfrac{1}{4}\) である</li><li>出る面は表か裏の2通りなので \(\dfrac{1}{2}\) と \(\dfrac{1}{2}\) を足して1である</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。見た目で区別できなくても2枚は別の物体である。区別して数えた4通りが同様に確からしい。1 は起こりやすさの異なる3通りを分母にした誤りである。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 独立な試行</div>
<p class="qz-q">A が合格する確率は 0.8 で B が合格する確率は 0.5 である。2人の合否は独立とする。ちょうど1人が合格する確率を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は 0.5 である。A だけ合格は \(0.8\times0.5=0.4\) で B だけ合格は \(0.2\times0.5=0.1\) である。排反なので足して 0.5 である。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
\(P(A)=\dfrac{n(A)}{n(U)}\) は根元事象が同様に確からしいときだけ使える。区別できないものも区別して数える。<br>
排反なら \(P(A\cup B)=P(A)+P(B)\) である。一般には \(P(A\cap B)\) を引く。<br>
\(P(\overline{A})=1-P(A)\) は「少なくとも」の計算で使う。<br>
独立な試行では \(P(C)=P(A)P(B)\) である。戻さない取り出しは独立ではない。<br>
反復試行で \(r\) 回起こる確率は \({}_{n}\mathrm{C}_{r}p^r(1-p)^{n-r}\) で 1つの並びの確率に並びの数を掛けたものである。<br>
優勝決定の問題は最後の試合を固定してから反復試行の公式を使う。</div>

<h2 id="s10">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>さいころの目の確率 \(\dfrac{1}{6}\) は、形の対称性から定まる値か、それとも多数回投げた結果から定まる値か。</strong> 本文は論理的な確率と頻度確率の2つの捉え方を示し、さいころでは両者が同じ値に行き着くとした。一方で本文の告白の例のように、結果が2通りでも同様に確からしいとは限らず、対称性を前提にできない場面がある。</li>
<li class="tb-vnote"><strong>打席ごとの結果を独立とみなす計算は、実際の打撃にどこまで当てはまるか。</strong> 本文は各打席の安打の確率を0.3とし、打席ごとの結果が互いに影響しないとみなして少なくとも1安打の確率を約0.76と求めた。この仮定からのずれをどこまで許すかで、計算の値の評価が異なる。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 数学編 理数編 — https://www.mext.go.jp/content/20260115-mxt_kyoiku02-100002620_04.pdf</li>
<li>Problem of points — Wikipedia — https://en.wikipedia.org/wiki/Problem_of_points</li>
<li>de Méré's Problem — Wolfram MathWorld — https://mathworld.wolfram.com/deMeresProblem.html</li>
<li>Antoine Gombaud — Wikipedia — https://en.wikipedia.org/wiki/Antoine_Gombaud</li>
<li>Binomial distribution — Wikipedia — https://en.wikipedia.org/wiki/Binomial_distribution</li>
<li>Independence (probability theory) — Wikipedia — https://en.wikipedia.org/wiki/Independence_(probability_theory)</li>
</ol>
