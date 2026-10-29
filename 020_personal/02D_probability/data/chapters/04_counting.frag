<!--meta
{"chapter": 4, "part": "数学A", "title": "集合と場合の数・順列", "thesis": "場合の数はもれなく重複なく数える技術である。集合で数える対象を区切り和の法則と積の法則で数を組み立てる。順列・円順列・重複順列の公式はどれも積の法則から導ける。", "verify": {"date": "2026-10-15", "checked": 43, "match": 43, "fixed": 0, "unconfirmed": 0}}
-->
<p>第1章から第3章では手元にあるデータを整理して要約する方法を扱った。この章から数学Aの「場合の数と確率」に入る。確率は第6章で「起こり得る場合の数」に対する「その事象が起こる場合の数」の比として定義する。分母と分子を正確に数えられなければ確率は求まらない。そこでまず数え方を固める。</p>
<p>共通テスト「数学Ⅰ・数学A」で数学Aの出題範囲は図形の性質と場合の数と確率である。場合の数の小問では集合の要素の個数・積の法則・順列と円順列・隣り合う条件の処理が繰り返し問われる。この章はこの順に積み上げる。</p>

<h2 id="s1">集合と要素</h2>
<p>範囲がはっきり定まったものの集まりを<strong>集合</strong>と呼ぶ。集合をつくる1つ1つのものを<strong>要素</strong>と呼ぶ。\(a\) が集合 \(A\) の要素であることを \(a\in A\) と書き \(a\) は \(A\) に属すると読む。属さないときは \(a\notin A\) と書く。集合の基本は数学Ⅰの「集合と命題」で学ぶ内容である。数学Aではそれを数える道具として使う。</p>
<p>集合の表し方は2通りある。要素を書き並べる方法では \(A=\{2,4,6,8,10\}\) と書く。要素の条件を書く方法では \(A=\{x\mid x \text{ は 10 以下の正の偶数}\}\) と書く。2つは同じ集合を表す。</p>
<p>集合 \(A\) の要素がすべて集合 \(B\) の要素であるとき \(A\) を \(B\) の<strong>部分集合</strong>と呼び \(A\subset B\) と書く。要素を1つももたない集合を<strong>空集合</strong>と呼び \(\varnothing\) で表す。考える対象全体の集合を<strong>全体集合</strong>と呼び \(U\) で表す。</p>
<div class="tb-tw"><table>
<thead><tr><th>名称</th><th>記号</th><th>意味</th></tr></thead>
<tbody>
<tr><td>共通部分</td><td>\(A\cap B\)</td><td>\(A\) と \(B\) の両方に属する要素の集合</td></tr>
<tr><td>和集合</td><td>\(A\cup B\)</td><td>\(A\) と \(B\) の少なくとも一方に属する要素の集合</td></tr>
<tr><td>補集合</td><td>\(\overline{A}\)</td><td>\(U\) の要素のうち \(A\) に属さない要素の集合</td></tr>
</tbody></table></div>
<p>補集合は全体集合を決めて初めて定まる。\(A=\{2,4,6\}\) の補集合は \(U=\{1,2,\dots,6\}\) なら \(\{1,3,5\}\) であり \(U=\{1,2,\dots,10\}\) なら \(\{1,3,5,7,8,9,10\}\) である。問題文で全体集合を確かめずに補集合を書くと誤る。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>\(U=\{1,2,\dots,10\}\) とする。\(A\) を偶数の集合とし \(B\) を3の倍数の集合とする。\(A\cap B\) と \(A\cup B\) と \(\overline{A}\cap B\) を要素を書き並べて表せ。</p>
<details open><summary>解き方</summary><div>手順1 \(A=\{2,4,6,8,10\}\) で \(B=\{3,6,9\}\) である。<br>手順2 両方に属するのは 6 だけなので \(A\cap B=\{6\}\) である。<br>手順3 少なくとも一方に属する要素を重複なく並べて \(A\cup B=\{2,3,4,6,8,9,10\}\) である。<br>手順4 \(\overline{A}=\{1,3,5,7,9\}\) で \(B\) と共通する要素は 3 と 9 である。答え \(\overline{A}\cap B=\{3,9\}\)</div></details></div>

<h3>ド・モルガンの法則</h3>
<p>補集合と共通部分と和集合の間には次の関係がある。これを<strong>ド・モルガンの法則</strong>と呼ぶ。</p>
\[ \overline{A\cup B}=\overline{A}\cap\overline{B} \qquad \overline{A\cap B}=\overline{A}\cup\overline{B} \]
<p>理由は言葉に直すと明らかである。「\(A\) または \(B\) に属する」の否定は「\(A\) に属さずかつ \(B\) にも属さない」である。「\(A\) と \(B\) の両方に属する」の否定は「\(A\) と \(B\) の少なくとも一方に属さない」である。<strong class="hit">補集合をとると「または」と「かつ」が入れ替わる</strong>。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="ド・モルガンの法則を2つのベン図で示す">
  <defs>
    <mask id="m04a"><rect x="0" y="0" width="720" height="270" fill="white"/><circle cx="135" cy="140" r="70" fill="black"/><circle cx="225" cy="140" r="70" fill="black"/></mask>
    <mask id="m04b"><rect x="0" y="0" width="720" height="270" fill="white"/><circle cx="495" cy="140" r="70" fill="black"/></mask>
    <mask id="m04c"><rect x="0" y="0" width="720" height="270" fill="white"/><circle cx="585" cy="140" r="70" fill="black"/></mask>
  </defs>
  <text x="30" y="24" font-size="13" fill="var(--muted)">A∪B の補集合</text>
  <text x="390" y="24" font-size="13" fill="var(--muted)">A の補集合と B の補集合を重ねる</text>
  <rect x="30" y="40" width="300" height="200" fill="var(--accent)" fill-opacity="0.35" mask="url(#m04a)"/>
  <rect x="30" y="40" width="300" height="200" fill="none" stroke="var(--ink)"/>
  <circle cx="135" cy="140" r="70" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <circle cx="225" cy="140" r="70" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <rect x="390" y="40" width="300" height="200" fill="var(--cool)" fill-opacity="0.22" mask="url(#m04b)"/>
  <rect x="390" y="40" width="300" height="200" fill="var(--warm)" fill-opacity="0.22" mask="url(#m04c)"/>
  <rect x="390" y="40" width="300" height="200" fill="none" stroke="var(--ink)"/>
  <circle cx="495" cy="140" r="70" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <circle cx="585" cy="140" r="70" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
  <g font-size="14" font-weight="600" fill="var(--ink)" text-anchor="middle">
    <text x="110" y="145">A</text><text x="250" y="145">B</text>
    <text x="470" y="145">A</text><text x="610" y="145">B</text>
    <text x="48" y="60">U</text><text x="408" y="60">U</text>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="180" y="262">濃い部分が A∪B の外側</text>
    <text x="540" y="262">2色が重なる外側だけが両方の補集合</text>
  </g>
</svg>
<figcaption>左は \(A\cup B\) の補集合である。右は \(A\) の外側を青で \(B\) の外側を橙で塗った図で2色が重なるのは両方の円の外側だけである。左右の網掛けが一致することが \(\overline{A\cup B}=\overline{A}\cap\overline{B}\) を示す。</figcaption>
</figure>

<h2 id="s2">集合の要素の個数</h2>
<p>有限集合 \(A\) の要素の個数を \(n(A)\) で表す。2つの集合の和集合の要素の個数は次の式で求める。</p>
\[ n(A\cup B)=n(A)+n(B)-n(A\cap B) \]
<p>理由は重複の処理にある。\(n(A)+n(B)\) は \(A\) の要素と \(B\) の要素を別々に数えて足したものである。共通部分 \(A\cap B\) の要素は \(A\) の側でも \(B\) の側でも数えられ2回計上されている。<strong class="hit">2回数えた分を1回引けば各要素をちょうど1回ずつ数えたことになる</strong>。特に \(A\cap B=\varnothing\) のときは \(n(A\cup B)=n(A)+n(B)\) である。</p>
<p>補集合の要素の個数は全体から引いて求める。</p>
\[ n(\overline{A})=n(U)-n(A) \]
<p>3つの集合では同じ考えを繰り返す。各集合を足し・2つずつの共通部分を引き・3つの共通部分を足し戻す。</p>
\[ n(A\cup B\cup C)=n(A)+n(B)+n(C)-n(A\cap B)-n(B\cap C)-n(C\cap A)+n(A\cap B\cap C) \]
<p>3つ全部に属する要素は最初に3回足され次に3回引かれて0回になる。最後の項はその1回分を戻すために置く。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>1 から 100 までの整数のうち 2・3・5 の少なくとも1つで割り切れる数の個数を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 2・3・5 の倍数の集合を \(A\)・\(B\)・\(C\) とする。\(n(A)=50\) で \(n(B)=33\) で \(n(C)=20\) である。<br>手順2 2つずつの共通部分は6の倍数16個・15の倍数6個・10の倍数10個である。<br>手順3 3つの共通部分は30の倍数で 30・60・90 の3個である。<br>手順4 \(50+33+20-16-6-10+3\) を計算する。<br>答え 74個</div></details></div>
<figure class="tb-fig">
<svg viewBox="0 0 720 280" role="img" aria-label="1から100までの整数で2の倍数と3の倍数の個数を示すベン図">
  <rect x="30" y="30" width="410" height="235" fill="none" stroke="var(--ink)"/>
  <circle cx="175" cy="162" r="85" fill="var(--cool)" fill-opacity="0.18" stroke="var(--cool)" stroke-width="2"/>
  <circle cx="285" cy="162" r="85" fill="var(--warm)" fill-opacity="0.18" stroke="var(--warm)" stroke-width="2"/>
  <g font-size="13" fill="var(--sub)">
    <text x="42" y="50">U 1から100の整数 100個</text>
    <text x="115" y="70">A 2の倍数</text>
    <text x="285" y="70">B 3の倍数</text>
  </g>
  <g font-size="20" font-weight="700" text-anchor="middle" fill="var(--ink)">
    <text x="130" y="168">34</text><text x="230" y="168">16</text><text x="330" y="168">17</text><text x="400" y="255">33</text>
  </g>
  <g font-size="12" text-anchor="middle" fill="var(--sub)">
    <text x="130" y="186">A だけ</text><text x="230" y="186">6の倍数</text><text x="330" y="186">B だけ</text><text x="395" y="232">どちらでもない</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="470" y="70">n(A) ＝ 50</text>
    <text x="470" y="96">n(B) ＝ 33</text>
    <text x="470" y="122">n(A∩B) ＝ 16</text>
    <text x="470" y="160" font-weight="700">n(A∪B) ＝ 50＋33−16 ＝ 67</text>
    <text x="470" y="198">どちらでもない数</text>
    <text x="470" y="222">100−67 ＝ 33</text>
  </g>
</svg>
<figcaption>4つの領域の数 34・16・17・33 の合計は 100 である。\(n(A)=34+16\) で \(n(B)=16+17\) である。6の倍数の 16 個は \(n(A)+n(B)\) の中で2回数えられている。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 3</div>
<p>1 から 100 までの整数のうち 2 でも 3 でも割り切れない数の個数を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 2の倍数の集合を \(A\) とし3の倍数の集合を \(B\) とする。\(n(A)=50\) で \(n(B)=33\) である。100÷3 の商の整数部分が 33 である。<br>手順2 \(A\cap B\) は6の倍数の集合で \(n(A\cap B)=16\) である。<br>手順3 \(n(A\cup B)=50+33-16=67\) である。<br>手順4 求める数は \(\overline{A}\cap\overline{B}\) の要素である。ド・モルガンの法則で \(\overline{A}\cap\overline{B}=\overline{A\cup B}\) である。<br>答え \(100-67=33\) 個</div></details></div>

<p>典型的な誤りは2つある。1つ目は「2の倍数かつ3の倍数」を数えるときに2と3の積ではなく最小公倍数で割ることを忘れる誤りである。4の倍数と6の倍数の共通部分は24の倍数ではなく12の倍数である。2つ目は「2でも3でも割り切れない」を \(\overline{A\cap B}\) と取り違える誤りである。こちらは6で割り切れない数で 84 個になる。</p>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">共通部分を引く操作は連結決算の内部取引の消去である</p>
<p>親会社と子会社の売上を単純に足すとグループ内の取引が2回計上される。\(-n(A\cap B)\) はその重複を1回分消す操作に対応する。</p>
</aside>

<h2 id="s3">和の法則と積の法則・樹形図</h2>
<p>場合の数を求める基本の原則は2つである。</p>
<p><strong>和の法則</strong> 2つの事柄 \(A\) と \(B\) が同時には起こらないとする。\(A\) の起こり方が \(m\) 通りで \(B\) の起こり方が \(n\) 通りなら \(A\) または \(B\) の起こり方は \(m+n\) 通りである。これは前節の \(A\cap B=\varnothing\) のときの \(n(A\cup B)=n(A)+n(B)\) と同じ内容である。</p>
<p><strong>積の法則</strong> 事柄 \(A\) の起こり方が \(m\) 通りあるとする。そのどの場合についても事柄 \(B\) の起こり方が \(n\) 通りあるとする。\(A\) と \(B\) がともに起こる場合は \(mn\) 通りである。\(A\) の結果ごとに枝が \(n\) 本ずつ伸びる図を描くと枝の先端が \(m\) 組の \(n\) 本で合計 \(mn\) 本になる。</p>
<p>この枝分かれの図を<strong>樹形図</strong>と呼ぶ。樹形図は起こり得る場合を1つ残らず書き出す方法で数が小さいときは最も確実である。数が大きいときは樹形図の形から積の法則を見いだして掛け算に置き換える。</p>
<p>学習指導要領解説はもれなく重複なく数えるための考え方を「数え上げの原則」として整理している。何かに着目して場合を分類する・数えやすい別のものと1対1に対応させる・規則に従って順に並べる の3つである。和の法則は分類に対応し積の法則は段階を追って順に決める数え方に対応する。どちらを使うかは事柄が「または」で結ばれるか「続けて」起こるかで判断する。樹形図を書くときはアルファベット順や数の小さい順のように規則を決めて枝を並べる。規則がないと書き漏らしと重複が起こる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="A B C の3文字を並べる樹形図">
  <g stroke="var(--line)" stroke-width="1.6" fill="none">
    <line x1="70" y1="155" x2="190" y2="65"/><line x1="70" y1="155" x2="190" y2="155"/><line x1="70" y1="155" x2="190" y2="245"/>
    <line x1="210" y1="65" x2="330" y2="45"/><line x1="210" y1="65" x2="330" y2="85"/>
    <line x1="210" y1="155" x2="330" y2="135"/><line x1="210" y1="155" x2="330" y2="175"/>
    <line x1="210" y1="245" x2="330" y2="225"/><line x1="210" y1="245" x2="330" y2="265"/>
    <line x1="350" y1="45" x2="470" y2="45"/><line x1="350" y1="85" x2="470" y2="85"/>
    <line x1="350" y1="135" x2="470" y2="135"/><line x1="350" y1="175" x2="470" y2="175"/>
    <line x1="350" y1="225" x2="470" y2="225"/><line x1="350" y1="265" x2="470" y2="265"/>
  </g>
  <circle cx="62" cy="155" r="6" fill="var(--ink)"/>
  <g font-size="15" font-weight="700" text-anchor="middle" fill="var(--cool)">
    <text x="200" y="70">A</text><text x="200" y="160">B</text><text x="200" y="250">C</text>
  </g>
  <g font-size="15" font-weight="700" text-anchor="middle" fill="var(--warm)">
    <text x="340" y="50">B</text><text x="340" y="90">C</text><text x="340" y="140">A</text><text x="340" y="180">C</text><text x="340" y="230">A</text><text x="340" y="270">B</text>
  </g>
  <g font-size="15" font-weight="700" text-anchor="middle" fill="var(--accent)">
    <text x="480" y="50">C</text><text x="480" y="90">B</text><text x="480" y="140">C</text><text x="480" y="180">A</text><text x="480" y="230">B</text><text x="480" y="270">A</text>
  </g>
  <g font-size="14" fill="var(--ink)">
    <text x="530" y="50">ABC</text><text x="530" y="90">ACB</text><text x="530" y="140">BAC</text><text x="530" y="180">BCA</text><text x="530" y="230">CAB</text><text x="530" y="270">CBA</text>
  </g>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="200" y="22">1番目 3通り</text><text x="340" y="22">2番目 2通り</text><text x="480" y="22">3番目 1通り</text>
  </g>
  <text x="600" y="160" font-size="14" fill="var(--ink)">3×2×1 ＝ 6</text>
</svg>
<figcaption>1番目の3通りのどれに対しても2番目は残りの2通りである。3番目は残った1文字に限られる。枝の先端の数 6 は積の法則の \(3\times2\times1\) に一致する。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 4</div>
<p>大小2個のさいころを投げる。(1) 目の和が5の倍数になる場合の数を求めよ。(2) 目の積が奇数になる場合の数を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 和が5の倍数になるのは和が5か10のときで2つは同時に起こらない。<br>手順2 和が5は (1,4)(2,3)(3,2)(4,1) の4通りである。和が10は (4,6)(5,5)(6,4) の3通りである。<br>手順3 和の法則で (1) は \(4+3=7\) 通りである。<br>手順4 積が奇数になるのは2つの目がともに奇数のときである。大の目が 1・3・5 の3通りのそれぞれに小の目が3通りある。<br>答え (1) 7通り (2) 積の法則で \(3\times3=9\) 通り</div></details></div>

<div class="ex"><div class="ex-h">例題 5</div>
<p>72 の正の約数の個数とその総和を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 素因数分解すると \(72=2^3\cdot3^2\) である。<br>手順2 約数は \(2^a\cdot3^b\) の形で \(a\) は 0 から 3 の4通り・\(b\) は 0 から 2 の3通りである。<br>手順3 \(a\) と \(b\) の選び方の組が約数と1対1に対応するので個数は \(4\times3=12\) 個である。<br>手順4 総和は \((1+2+4+8)(1+3+9)\) を展開した12項の和に等しい。展開した各項が約数1つに対応するからである。<br>答え 12個 ・ 総和 \(15\times13=195\)</div></details></div>

<aside class="an an-biz"><b>スタートアップで言えば</b>
<p class="an-h">商品の品目数は積の法則で増える</p>
<p>Tシャツの色が5種類でサイズが4種類なら在庫を管理する品目は \(5\times4=20\) である。色を1つ足すと品目は4つ増える。</p>
</aside>

<h2 id="s4">順列と階乗</h2>
<p>異なる \(n\) 個のものから \(r\) 個を取り出して1列に並べたものを<strong>順列</strong>と呼ぶ。その総数を \({}_{n}\mathrm{P}_{r}\) で表す。</p>
<p>1番目に置くものは \(n\) 通りある。2番目は1番目に使ったもの以外の \(n-1\) 通りである。同じように \(r\) 番目は \(n-r+1\) 通りである。積の法則で次の式が得られる。</p>
\[ {}_{n}\mathrm{P}_{r}=n(n-1)(n-2)\cdots(n-r+1) \]
<p>右辺は \(n\) から1ずつ小さくなる \(r\) 個の数の積である。\(r=n\) のときは \(n\) 個全部を並べる場合で 1 から \(n\) までの積になる。これを \(n\) の<strong>階乗</strong>と呼び \(n!\) で表す。</p>
\[ {}_{n}\mathrm{P}_{n}=n!=n(n-1)\cdots2\cdot1 \qquad {}_{n}\mathrm{P}_{r}=\frac{n!}{(n-r)!} \]
<p>右の式は \(n!\) を \((n-r)!\) で割って \(n-r\) 以下の因数を消したものである。この式が \(r=n\) でも成り立つように \(0!=1\) と定める。同じ理由で \({}_{n}\mathrm{P}_{0}=1\) と定める。何も並べない並べ方は1通りと数えるからである。</p>

<div class="ex"><div class="ex-h">例題 6</div>
<p>7人の中から委員長・副委員長・書記を1人ずつ選ぶ。兼任はしない。選び方は何通りか。</p>
<details open><summary>解き方</summary><div>手順1 役職に区別があるので選んだ3人を役職の順に並べる順列である。<br>手順2 \({}_{7}\mathrm{P}_{3}=7\times6\times5\) である。<br>答え 210通り</div></details></div>

<div class="ex"><div class="ex-h">例題 7</div>
<p>0・1・2・3・4・5 の6個の数字から異なる4個を使って4桁の整数をつくる。(1) 全部で何個できるか。(2) そのうち偶数は何個か。</p>
<details open><summary>解き方</summary><div>手順1 千の位に 0 は置けない。千の位は 0 以外の5通りである。<br>手順2 残りの3つの位には千の位で使わなかった5個から3個を並べる。\({}_{5}\mathrm{P}_{3}=60\) 通りである。(1) は \(5\times60=300\) 個である。<br>手順3 偶数は一の位が 0・2・4 のどれかである。一の位が 0 のとき残り5個から3個を並べて \({}_{5}\mathrm{P}_{3}=60\) 個である。<br>手順4 一の位が 2 のとき千の位は 0 と 2 を除く4通りで百と十の位は残り4個から2個を並べて \({}_{4}\mathrm{P}_{2}=12\) 通りである。\(4\times12=48\) 個である。一の位が 4 のときも 48 個である。<br>答え (1) 300個 (2) \(60+48+48=156\) 個</div></details></div>
<p>例題7の要点は<strong class="hit">制限の強い位置から先に決める</strong>ことである。一の位と千の位に条件があるのでこの2つを先に決めて残りの位を順列で数える。一の位が 0 かどうかで千の位の選択肢が変わるので場合を分ける。場合分けを省いて \(3\times4\times4\times3\) のように一律に掛けると誤る。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">打順は9人の順列である</p>
<p>先発9人が決まっていても打順の組み方は \(9!=362{,}880\) 通りある。1番から順に残りの人数を掛けていく計算はこの節の導出そのものである。</p>
</aside>

<h2 id="s5">円順列と重複順列</h2>
<h3>円順列</h3>
<p>異なるものを円形に並べたものを<strong>円順列</strong>と呼ぶ。円形の並びでは回転して重なる並べ方を同じものとみなす。異なる \(n\) 個の円順列の総数は次のとおりである。</p>
\[ \frac{n!}{n}=(n-1)! \]
<p>理由を示す。円順列を1つ選び特定の席から時計回りに読んで1列に直すと読み始めの席の選び方で \(n\) 通りの異なる1列が得られる。つまり1列の並び \(n!\) 通りは円順列1つあたり \(n\) 通りずつ重複している。\(n!\) を \(n\) で割れば円順列の数になる。<strong class="hit">1人の位置を固定して残り \(n-1\) 人を並べる</strong>と考えても同じ式になる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="4人の円順列で回転した4つの配置が同じであることを示す">
  <g fill="none" stroke="var(--line)" stroke-width="1.5">
    <circle cx="100" cy="115" r="55"/><circle cx="270" cy="115" r="55"/><circle cx="440" cy="115" r="55"/><circle cx="610" cy="115" r="55"/>
  </g>
  <g font-size="15" font-weight="700" text-anchor="middle" fill="#fff">
    <circle cx="100" cy="60" r="15" fill="var(--warm)"/><text x="100" y="65">A</text>
    <circle cx="155" cy="115" r="15" fill="var(--cool)"/><text x="155" y="120">B</text>
    <circle cx="100" cy="170" r="15" fill="var(--accent)"/><text x="100" y="175">C</text>
    <circle cx="45" cy="115" r="15" fill="var(--sub)"/><text x="45" y="120">D</text>

    <circle cx="270" cy="60" r="15" fill="var(--sub)"/><text x="270" y="65">D</text>
    <circle cx="325" cy="115" r="15" fill="var(--warm)"/><text x="325" y="120">A</text>
    <circle cx="270" cy="170" r="15" fill="var(--cool)"/><text x="270" y="175">B</text>
    <circle cx="215" cy="115" r="15" fill="var(--accent)"/><text x="215" y="120">C</text>

    <circle cx="440" cy="60" r="15" fill="var(--accent)"/><text x="440" y="65">C</text>
    <circle cx="495" cy="115" r="15" fill="var(--sub)"/><text x="495" y="120">D</text>
    <circle cx="440" cy="170" r="15" fill="var(--warm)"/><text x="440" y="175">A</text>
    <circle cx="385" cy="115" r="15" fill="var(--cool)"/><text x="385" y="120">B</text>

    <circle cx="610" cy="60" r="15" fill="var(--cool)"/><text x="610" y="65">B</text>
    <circle cx="665" cy="115" r="15" fill="var(--accent)"/><text x="665" y="120">C</text>
    <circle cx="610" cy="170" r="15" fill="var(--sub)"/><text x="610" y="175">D</text>
    <circle cx="555" cy="115" r="15" fill="var(--warm)"/><text x="555" y="120">A</text>
  </g>
  <g font-size="13" text-anchor="middle" fill="var(--ink)">
    <text x="100" y="215">ABCD</text><text x="270" y="215">DABC</text><text x="440" y="215">CDAB</text><text x="610" y="215">BCDA</text>
  </g>
  <text x="360" y="242" font-size="12" text-anchor="middle" fill="var(--sub)">上の席から時計回りに読んだ1列の並び 4通りが1つの円順列にあたる</text>
</svg>
<figcaption>4つの円はどれも A の時計回りの隣が B でその隣が C である。回転すれば重なるので円順列としては同じ1通りである。1列の並び \(4!=24\) 通りを4で割って円順列は \(3!=6\) 通りになる。</figcaption>
</figure>

<p>首飾りのように裏返しても同じとみなす並びを<strong>じゅず順列</strong>と呼ぶ。円順列のうち裏返して重なる2つを1つと数えるので \(\dfrac{(n-1)!}{2}\) 通りになる。円卓の席は裏返せないので円順列であり裏返しで割らない。</p>

<div class="ex"><div class="ex-h">例題 8</div>
<p>6人が円形のテーブルに着く。(1) 座り方は何通りか。(2) 特定の2人 A と B が隣り合う座り方は何通りか。</p>
<details open><summary>解き方</summary><div>手順1 (1) は6人の円順列で \((6-1)!=120\) 通りである。<br>手順2 (2) では A と B を1組にまとめて1人とみなす。5人の円順列で \(4!=24\) 通りである。<br>手順3 組の中の A と B の並びが AB と BA の2通りある。<br>答え (1) 120通り (2) \(24\times2=48\) 通り</div></details></div>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">円卓の席次で意味をもつのは誰の隣かだけである</p>
<p>全員が1席ずつずれても隣どうしの関係は変わらない。円順列で \(n\) で割るのは関係が同じ並びを1つに数えるためである。</p>
</aside>

<h3>重複順列</h3>
<p>異なる \(n\) 種類のものから同じものを繰り返し使うことを許して \(r\) 個を1列に並べたものを<strong>重複順列</strong>と呼ぶ。各位置に \(n\) 通りずつ選べるので積の法則で総数は \(n^r\) である。</p>
<div class="ex"><div class="ex-h">例題 9</div>
<p>5人を2つの部屋 A と B に分ける。(1) 1人も入らない部屋があってもよいとき分け方は何通りか。(2) どちらの部屋にも1人以上入るとき分け方は何通りか。</p>
<details open><summary>解き方</summary><div>手順1 各人が A か B の2通りを選ぶので \(2^5=32\) 通りである。<br>手順2 このうち全員が A の1通りと全員が B の1通りは空の部屋を含む。<br>答え (1) 32通り (2) \(32-2=30\) 通り</div></details></div>
<p>重複順列の底と指数を逆にする誤りが多い。「5人がそれぞれ2部屋から選ぶ」ので選ぶ側の人数が指数で選択肢の数が底である。\(5^2\) と書くと「2人がそれぞれ5通りから選ぶ」問題になる。</p>

<h2 id="s6">隣り合う並べ方と隣り合わない並べ方</h2>
<p>条件付きの並べ方で頻出なのは「隣り合う」と「隣り合わない」である。処理の仕方が異なるので区別する。</p>
<p><strong>隣り合う</strong>ものは1つのまとまりとみなして並べる。次にまとまりの中の並べ方を掛ける。</p>
<p><strong>隣り合わない</strong>ものは後から入れる。先に他のものを並べ・その間と両端の位置から選んで入れる。こうすると入れたもの同士の間には必ず他のものが1つ以上あるので隣り合わない。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="隣り合う場合のまとめ方と隣り合わない場合の間に入れる方法">
  <text x="20" y="26" font-size="13" fill="var(--muted)">隣り合う 子ども3人を1つにまとめる</text>
  <g font-size="14" font-weight="700" text-anchor="middle">
    <rect x="30" y="42" width="56" height="40" rx="6" fill="var(--cool)"/><text x="58" y="68" fill="#fff">大人</text>
    <rect x="96" y="42" width="56" height="40" rx="6" fill="var(--cool)"/><text x="124" y="68" fill="#fff">大人</text>
    <rect x="162" y="38" width="190" height="48" rx="8" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <rect x="170" y="42" width="56" height="40" rx="6" fill="var(--warm)"/><text x="198" y="68" fill="#fff">子</text>
    <rect x="232" y="42" width="56" height="40" rx="6" fill="var(--warm)"/><text x="260" y="68" fill="#fff">子</text>
    <rect x="294" y="42" width="56" height="40" rx="6" fill="var(--warm)"/><text x="322" y="68" fill="#fff">子</text>
    <rect x="362" y="42" width="56" height="40" rx="6" fill="var(--cool)"/><text x="390" y="68" fill="#fff">大人</text>
    <rect x="428" y="42" width="56" height="40" rx="6" fill="var(--cool)"/><text x="456" y="68" fill="#fff">大人</text>
  </g>
  <text x="510" y="58" font-size="13" fill="var(--ink)">5つのものの並び 5!</text>
  <text x="510" y="80" font-size="13" fill="var(--ink)">まとまりの中 3!</text>
  <line x1="20" y1="118" x2="700" y2="118" stroke="var(--line)" stroke-dasharray="4 4"/>
  <text x="20" y="146" font-size="13" fill="var(--muted)">隣り合わない 先に大人4人を並べて間と両端の5か所から選ぶ</text>
  <g font-size="14" font-weight="700" text-anchor="middle">
    <rect x="80" y="166" width="56" height="40" rx="6" fill="var(--cool)"/><text x="108" y="192" fill="#fff">大人</text>
    <rect x="196" y="166" width="56" height="40" rx="6" fill="var(--cool)"/><text x="224" y="192" fill="#fff">大人</text>
    <rect x="312" y="166" width="56" height="40" rx="6" fill="var(--cool)"/><text x="340" y="192" fill="#fff">大人</text>
    <rect x="428" y="166" width="56" height="40" rx="6" fill="var(--cool)"/><text x="456" y="192" fill="#fff">大人</text>
  </g>
  <g fill="var(--warm)">
    <path d="M40 210 L50 180 L60 210 Z"/><path d="M156 210 L166 180 L176 210 Z"/><path d="M272 210 L282 180 L292 210 Z"/><path d="M388 210 L398 180 L408 210 Z"/><path d="M504 210 L514 180 L524 210 Z"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="var(--sub)">
    <text x="50" y="230">1</text><text x="166" y="230">2</text><text x="282" y="230">3</text><text x="398" y="230">4</text><text x="514" y="230">5</text>
  </g>
  <text x="560" y="182" font-size="13" fill="var(--ink)">大人の並び 4!</text>
  <text x="560" y="204" font-size="13" fill="var(--ink)">子どもの入れ方</text>
  <text x="560" y="224" font-size="13" fill="var(--ink)">5か所から3か所 順列</text>
</svg>
<figcaption>上は子ども3人を囲んで1つのまとまりとみなす方法である。下は大人4人を並べてできる5か所の位置に子どもを1人ずつ入れる方法である。同じ位置に2人入れないので子どもどうしは隣り合わない。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 10</div>
<p>大人4人と子ども3人の合計7人が1列に並ぶ。(1) 子ども3人が続いて並ぶ並び方は何通りか。(2) 子どもどうしがどの2人も隣り合わない並び方は何通りか。</p>
<details open><summary>解き方</summary><div>手順1 (1) 子ども3人を1つのまとまりとみなすと大人4人とまとまり1つの合計5つの並びで \(5!=120\) 通りである。<br>手順2 まとまりの中で子ども3人の並び方が \(3!=6\) 通りある。(1) は \(120\times6=720\) 通りである。<br>手順3 (2) 先に大人4人を並べて \(4!=24\) 通りである。間と両端の5か所から3か所を選んで子ども3人を1人ずつ入れる並べ方は \({}_{5}\mathrm{P}_{3}=60\) 通りである。<br>答え (1) 720通り (2) \(24\times60=1440\) 通り</div></details></div>
<p>(2) を「全体から (1) を引く」で求めると \(5040-720=4320\) 通りとなり誤りである。全体から (1) を引いた残りには子ども2人だけが隣り合う並びが含まれる。<strong class="hit">「3人が続いて並ぶ」の否定は「どの2人も隣り合わない」ではない</strong>。対象が2人なら2つは一致するので全体から引く方法でも正しい。3人以上では一致しない。</p>

<h2 id="s7">現実世界の場合の数 パスワードの強さ</h2>
<p>パスワードの強さは重複順列の総数で測れる。数字4桁の暗証番号は \(10^4=10{,}000\) 通りである。英大文字と英小文字と数字の62種類から8文字を選ぶと \(62^8\) 通りで約 \(2.18\times10^{14}\) 通りになる。ただし人が選ぶ文字列は辞書に載った語に偏るので、実際の強さは総数より小さい。</p>
<aside class="an an-rw"><b>現実世界</b>
<p class="an-h">文字の種類を増やすより桁数を増やすほうが総数は大きく増える</p>
<p>総数 \(n^r\) は指数 \(r\) が1増えるごとに \(n\) 倍になる。62種類で8文字から9文字にすると総数は62倍になる。</p>
</aside>

<h2 id="s8">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 要素の個数</div>
<p class="qz-q">1 から 200 までの整数のうち 4 の倍数または 6 の倍数であるものの個数として正しいものを1つ選べ。</p>
<ol><li>83</li><li>67</li><li>75</li><li>58</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。4の倍数は 50 個で6の倍数は 33 個である。両方に属するのは4と6の最小公倍数12の倍数で 16 個である。\(50+33-16=67\) である。1 は共通部分を引き忘れた値である。3 は24の倍数8個を引いた値である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ ド・モルガンの法則</div>
<p class="qz-q">全体集合 \(U\) の部分集合 \(A\) と \(B\) について \(\overline{A\cap B}\) と常に等しいものを1つ選べ。</p>
<ol><li>\(\overline{A}\cap\overline{B}\)</li><li>\(\overline{A}\cup\overline{B}\)</li><li>\(A\cup B\)</li><li>\(\overline{A}\cap B\)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。「両方に属する」の否定は「少なくとも一方に属さない」である。補集合をとると共通部分は和集合に入れ替わる。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 約数の個数</div>
<p class="qz-q">360 の正の約数の個数を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は 24 個である。\(360=2^3\cdot3^2\cdot5\) である。指数の選び方は 2 について4通り・3 について3通り・5 について2通りで \(4\times3\times2=24\) である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 順列</div>
<p class="qz-q">1・2・3・4・5 の5個の数字から異なる3個を並べて3桁の整数をつくる。300 以上の整数は何個できるか。</p>
<ol><li>24</li><li>36</li><li>48</li><li>60</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。百の位は 3・4・5 の3通りである。十の位と一の位は残り4個から2個を並べて \({}_{4}\mathrm{P}_{2}=12\) 通りである。\(3\times12=36\) 個である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 円順列</div>
<p class="qz-q">大人2人と子ども4人の合計6人が円形のテーブルに着く。大人2人が向かい合う座り方は何通りか。</p>
<details><summary>解答と解説</summary><div>正解は 24 通りである。大人の1人の席を固定すると回転で重なる並びの重複がなくなる。もう1人の大人の席は向かいの1通りに定まる。残り4席に子ども4人を並べて \(4!=24\) 通りである。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 重複順列</div>
<p class="qz-q">4人がそれぞれ A・B・C の3つの部屋のどれか1つに入る。空の部屋があってもよいとき入り方は何通りか。</p>
<ol><li>12</li><li>64</li><li>81</li><li>24</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。4人がそれぞれ3通りから選ぶので \(3^4=81\) 通りである。2 の 64 は底と指数を逆にした \(4^3\) である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 隣り合わない</div>
<p class="qz-q">大人3人と子ども2人が1列に並ぶ。子ども2人が隣り合わない並び方は何通りか。</p>
<details><summary>解答と解説</summary><div>正解は 72 通りである。大人3人を並べて \(3!=6\) 通りである。間と両端の4か所から2か所を選んで子どもを並べて \({}_{4}\mathrm{P}_{2}=12\) 通りである。\(6\times12=72\) である。対象が2人なので全体 \(5!=120\) から隣り合う \(4!\times2=48\) を引いても 72 になる。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
補集合は全体集合を決めて定まる。補集合をとると「または」と「かつ」が入れ替わる。<br>
\(n(A\cup B)=n(A)+n(B)-n(A\cap B)\) は2回数えた共通部分を1回引く式である。<br>
同時に起こらない事柄は足し・続けて起こる事柄は掛ける。<br>
\({}_{n}\mathrm{P}_{r}=n(n-1)\cdots(n-r+1)=\dfrac{n!}{(n-r)!}\) で \(0!=1\) と定める。<br>
円順列は \((n-1)!\) で重複順列は \(n^r\) である。<br>
隣り合うものはまとめて並べ・隣り合わないものは後から間と両端に入れる。</div>

<h2 id="s10">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>パスワードの強さを、並びの総数で測ってよいか。</strong> 総数による評価は、どの並びも等しく選ばれるとみなした場合の値である。本文が述べたように人が選ぶ文字列は辞書に載った語に偏り、何を前提とするかで強さの評価が異なる。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 数学編 理数編 — https://www.mext.go.jp/content/20260115-mxt_kyoiku02-100002620_04.pdf</li>
<li>文部科学省 高等学校学習指導要領 平成30年告示 — https://www.mext.go.jp/a_menu/shotou/new-cs/1384661.htm</li>
<li>大学入試センター 大学入学共通テスト — https://www.dnc.ac.jp/kyotsu/</li>
<li>De Morgan's laws — Wikipedia — https://en.wikipedia.org/wiki/De_Morgan%27s_laws</li>
<li>Inclusion–exclusion principle — Wikipedia — https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle</li>
<li>Permutation — Wikipedia — https://en.wikipedia.org/wiki/Permutation</li>
</ol>
