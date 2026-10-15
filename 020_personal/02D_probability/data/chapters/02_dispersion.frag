<!--meta
{"chapter": 2, "part": "数学Ⅰ", "title": "散らばりと箱ひげ図・分散と標準偏差", "thesis": "代表値が同じでも値の散らばりが異なるデータがある。順位に基づく散らばりの尺度が四分位範囲と箱ひげ図で平均からの距離に基づく尺度が分散と標準偏差である。変量を y=ax+b と変換すると平均値は同じ式で変わり標準偏差は |a| 倍になる。", "verify": {"date": "2026-10-15", "checked": 26, "match": 22, "fixed": 4, "unconfirmed": 0}}
-->
<p>第1章ではデータの中心を1つの数で表す代表値を学んだ。しかし代表値だけではデータの性質は定まらない。平均点がともに60点の2クラスでも全員が55〜65点のクラスと20点から100点まで広がるクラスでは状況が異なる。この章では値の散らばりを数で表す。</p>
<p>散らばりの尺度は2系統ある。1つは値を並べた順位に基づく範囲・四分位数・四分位範囲であり箱ひげ図で図示する。もう1つは平均値からの距離に基づく分散と標準偏差である。共通テストでは箱ひげ図とヒストグラムの対応・外れ値の判定・分散の計算・変量の変換が繰り返し問われる。</p>

<h2 id="s1">範囲と四分位数</h2>
<p>データの最大値から最小値を引いた値を<strong>範囲</strong>と呼ぶ。最も単純な散らばりの尺度であるが両端の2つの値だけで決まる。外れ値が1つあれば範囲は大きく変わる。</p>
<p>外れ値の影響を受けにくい尺度をつくるには中央付近の値を使う。値を小さい順に並べて4等分する位置の値を<strong>四分位数</strong>と呼ぶ。小さい方から<strong>第1四分位数 \( Q_1 \)</strong>・<strong>第2四分位数 \( Q_2 \)</strong>・<strong>第3四分位数 \( Q_3 \)</strong> である。第2四分位数は中央値に等しい。</p>
<p>高校の教科書では四分位数を次の手順で求める。</p>
<div class="fx">① 値を小さい順に並べ中央値 \( Q_2 \) を求める ② 中央値を境に下位のグループと上位のグループに分ける ③ 下位のグループの中央値が \( Q_1 \) で上位のグループの中央値が \( Q_3 \)<small>データの個数が奇数のときは中央値そのものをどちらのグループにも入れない</small></div>
<p><strong class="hit">奇数個のとき中央値を除いてから半分に分ける</strong>点が最も誤りやすい。四分位数の求め方には複数の流儀があり表計算ソフトの関数は別の方法で計算する。共通テストでは教科書の方法で求めるか問題文に示された方法に従う。</p>
<div class="ex"><div class="ex-h">例題 1</div>
<p>11個のデータ 3 5 6 8 9 11 12 14 15 18 30 の四分位数を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 11個なので6番目の11が中央値で \( Q_2=11 \) である。<br>手順2 11を除き下位の5個 3 5 6 8 9 と上位の5個 12 14 15 18 30 に分ける。<br>手順3 下位の中央値は6で上位の中央値は15である。<br>答え \( Q_1=6 \) ／ \( Q_2=11 \) ／ \( Q_3=15 \)</div></details></div>
<div class="ex"><div class="ex-h">例題 2</div>
<p>10個のデータ 2 4 5 7 8 10 11 13 16 20 の四分位数を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 10個なので5番目と6番目の平均 \( (8+10)\div2=9 \) が \( Q_2 \) である。<br>手順2 下位の5個 2 4 5 7 8 と上位の5個 10 11 13 16 20 に分ける。偶数個なので除く値はない。<br>手順3 \( Q_1=5 \) ／ \( Q_3=13 \)<br>答え \( Q_1=5 \) ／ \( Q_2=9 \) ／ \( Q_3=13 \)</div></details></div>
<h3>四分位範囲</h3>
<p>\( Q_3-Q_1 \) を<strong>四分位範囲</strong>と呼ぶ。四分位範囲を2で割った値を<strong>四分位偏差</strong>と呼ぶ。四分位範囲は中央に並ぶ約半数の値が収まる区間の幅である。両端の4分の1ずつを使わないので外れ値の影響を受けにくい。例題1では範囲が \( 30-3=27 \) で四分位範囲は \( 15-6=9 \) である。30という離れた値1つが範囲を大きくしているが四分位範囲には影響していない。</p>

<h2 id="s2">箱ひげ図と外れ値</h2>
<p>最小値・\( Q_1 \)・\( Q_2 \)・\( Q_3 \)・最大値の5つの数を<strong>5数要約</strong>と呼ぶ。5数要約を1本の数直線の上に図示したものが<strong>箱ひげ図</strong>である。\( Q_1 \) から \( Q_3 \) までを箱で表し箱の中に中央値の線を引く。箱の両端から最小値と最大値までひげを伸ばす。平均値を記号で書き加えることもある。</p>
<p>外れ値の判定には四分位範囲を使う。学習指導要領解説は次の範囲にある値を通常は外れ値とすると説明している。</p>
\[ x\le Q_1-1.5\times(Q_3-Q_1)\quad\text{または}\quad x\ge Q_3+1.5\times(Q_3-Q_1) \]
<p>この基準を満たす値を外れ値とする。外れ値を区別する箱ひげ図ではひげを外れ値を除いた最小値と最大値まで伸ばし外れ値は点で別に示す。<strong class="hit">断りのない箱ひげ図ではひげは最小値と最大値まで伸びる</strong>。解説は平均値から標準偏差の2倍か3倍以上離れた値を外れ値とする場合があることにも触れている。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="11個のデータの箱ひげ図と外れ値の基準">
<circle cx="108.1" cy="50" r="5" fill="var(--cool)"/>
<circle cx="146.9" cy="50" r="5" fill="var(--cool)"/>
<circle cx="166.2" cy="50" r="5" fill="var(--cool)"/>
<circle cx="205.0" cy="50" r="5" fill="var(--cool)"/>
<circle cx="224.4" cy="50" r="5" fill="var(--cool)"/>
<circle cx="263.1" cy="50" r="5" fill="var(--cool)"/>
<circle cx="282.5" cy="50" r="5" fill="var(--cool)"/>
<circle cx="321.2" cy="50" r="5" fill="var(--cool)"/>
<circle cx="340.6" cy="50" r="5" fill="var(--cool)"/>
<circle cx="398.8" cy="50" r="5" fill="var(--cool)"/>
<circle cx="631.2" cy="50" r="5" fill="var(--cool)"/>
<text x="50" y="28" font-size="12.5" fill="var(--muted)">データ 3 5 6 8 9 11 12 14 15 18 30</text>
<rect x="166.2" y="98" width="174.4" height="44" fill="var(--cool)" fill-opacity=".18" stroke="var(--cool)" stroke-width="1.8"/>
<line x1="263.1" y1="98" x2="263.1" y2="142" stroke="var(--cool)" stroke-width="2.5"/>
<line x1="108.1" y1="120" x2="166.2" y2="120" stroke="var(--cool)" stroke-width="1.8"/>
<line x1="340.6" y1="120" x2="398.8" y2="120" stroke="var(--cool)" stroke-width="1.8"/>
<line x1="108.1" y1="110" x2="108.1" y2="130" stroke="var(--cool)" stroke-width="1.8"/>
<line x1="398.8" y1="110" x2="398.8" y2="130" stroke="var(--cool)" stroke-width="1.8"/>
<circle cx="631.2" cy="120" r="5.5" fill="none" stroke="var(--warm)" stroke-width="2"/>
<line x1="602.2" y1="78" x2="602.2" y2="160" stroke="var(--warm)" stroke-dasharray="5 4"/>
<text x="596.2" y="74" font-size="12" text-anchor="end" fill="var(--warm)">外れ値の基準 28.5</text>
<text x="631.2" y="160" font-size="12" text-anchor="middle" fill="var(--warm)">外れ値</text>
<text x="108.1" y="160" font-size="12" text-anchor="middle" fill="var(--ink)">最小値 3</text>
<text x="166.2" y="160" font-size="12" text-anchor="middle" fill="var(--ink)">Q1 6</text>
<text x="263.1" y="160" font-size="12" text-anchor="middle" fill="var(--ink)">Q2 11</text>
<text x="340.6" y="160" font-size="12" text-anchor="middle" fill="var(--ink)">Q3 15</text>
<text x="398.8" y="160" font-size="12" text-anchor="middle" fill="var(--ink)">最大値 18</text>
<line x1="166.2" y1="172" x2="340.6" y2="172" stroke="var(--accent)" stroke-width="1.5"/>
<text x="253.4" y="188" font-size="12" text-anchor="middle" fill="var(--accent)">四分位範囲 9</text>
<line x1="50" y1="215" x2="670" y2="215" stroke="var(--ink)"/>
<line x1="50.0" y1="215" x2="50.0" y2="220" stroke="var(--ink)"/>
<text x="50.0" y="235" font-size="12" text-anchor="middle" fill="var(--sub)">0</text>
<line x1="127.5" y1="215" x2="127.5" y2="220" stroke="var(--ink)"/>
<text x="127.5" y="235" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<line x1="205.0" y1="215" x2="205.0" y2="220" stroke="var(--ink)"/>
<text x="205.0" y="235" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<line x1="282.5" y1="215" x2="282.5" y2="220" stroke="var(--ink)"/>
<text x="282.5" y="235" font-size="12" text-anchor="middle" fill="var(--sub)">12</text>
<line x1="360.0" y1="215" x2="360.0" y2="220" stroke="var(--ink)"/>
<text x="360.0" y="235" font-size="12" text-anchor="middle" fill="var(--sub)">16</text>
<line x1="437.5" y1="215" x2="437.5" y2="220" stroke="var(--ink)"/>
<text x="437.5" y="235" font-size="12" text-anchor="middle" fill="var(--sub)">20</text>
<line x1="515.0" y1="215" x2="515.0" y2="220" stroke="var(--ink)"/>
<text x="515.0" y="235" font-size="12" text-anchor="middle" fill="var(--sub)">24</text>
<line x1="592.5" y1="215" x2="592.5" y2="220" stroke="var(--ink)"/>
<text x="592.5" y="235" font-size="12" text-anchor="middle" fill="var(--sub)">28</text>
<line x1="670.0" y1="215" x2="670.0" y2="220" stroke="var(--ink)"/>
<text x="670.0" y="235" font-size="12" text-anchor="middle" fill="var(--sub)">32</text>
</svg>
<figcaption>例題1のデータの箱ひげ図である。四分位範囲は9なので上側の基準は 15＋1.5×9＝28.5 である。30は28.5以上なので外れ値として丸で示しひげは18で止める。下側の基準は 6−13.5＝−7.5 で該当する値はない。</figcaption>
</figure>
<div class="ex"><div class="ex-h">例題 3</div>
<p>例題2のデータに外れ値はあるか。外れ値の基準で判定せよ。</p>
<details open><summary>解き方</summary><div>手順1 四分位範囲は \( 13-5=8 \) である。<br>手順2 下側の基準は \( 5-1.5\times8=-7 \) で上側の基準は \( 13+1.5\times8=25 \) である。<br>手順3 最小値2は−7より大きく最大値20は25より小さい。<br>答え 外れ値はない</div></details></div>
<h3>箱ひげ図から分かることと分からないこと</h3>
<p>箱ひげ図の5つの区切りはデータを個数で約4分の1ずつに分ける。データが40個のとき \( Q_1 \) は10番目と11番目の平均である。したがって<strong class="hit">\( Q_1 \) 以下の値は少なくとも10個あり \( Q_3 \) 以上の値も少なくとも10個ある</strong>。共通テストの正誤問題はこの種の個数の主張を判定させる。</p>
<p>一方で箱ひげ図からは分からない情報もある。箱の中で値がどう分布しているか・山がいくつあるか・平均値がいくつかは5数要約からは特定できない。<strong>箱が長い区間ほど値が多いのではない</strong>。どの区間にも約4分の1ずつの値が入り箱やひげが長いのはその4分の1の値が広い範囲に散らばっていることを示す。</p>
<aside class="an an-biz"><b>スタートアップで言えば</b>
<p class="an-h">箱ひげ図のひげの長さは社数ではなくばらつきの大きさである</p>
<p>上位4分の1の調達額のひげが長いのは大型調達の数社が遠くまで離れているからで社数が多いからではない。</p>
</aside>

<h2 id="s3">箱ひげ図とヒストグラムの対応</h2>
<p>同じデータをヒストグラムと箱ひげ図の両方で描くと形の対応が分かる。ヒストグラムで値が密集する部分は箱ひげ図では短い区間になる。値がまばらな裾は長いひげになる。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="ヒストグラムと箱ひげ図の対応">
<text x="120" y="24" font-size="13" text-anchor="middle" font-weight="600" fill="var(--ink)">左右対称</text>
<line x1="20" y1="170" x2="218" y2="170" stroke="var(--ink)"/>
<rect x="20" y="156.7" width="22" height="13.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="42" y="143.3" width="22" height="26.7" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="64" y="116.7" width="22" height="53.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="86" y="90.0" width="22" height="80.0" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="108" y="50.0" width="22" height="120.0" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="130" y="90.0" width="22" height="80.0" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="152" y="116.7" width="22" height="53.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="174" y="143.3" width="22" height="26.7" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="196" y="156.7" width="22" height="13.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="97.0" y="201" width="44.0" height="28" fill="var(--warm)" fill-opacity=".2" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="119.0" y1="201" x2="119.0" y2="229" stroke="var(--warm)" stroke-width="2.4"/>
<line x1="31.0" y1="215" x2="97.0" y2="215" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="141.0" y1="215" x2="207.0" y2="215" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="31.0" y1="207" x2="31.0" y2="223" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="207.0" y1="207" x2="207.0" y2="223" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="20" y1="245" x2="218" y2="245" stroke="var(--ink)"/>
<text x="31.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<text x="53.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<text x="75.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">3</text>
<text x="97.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<text x="119.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">5</text>
<text x="141.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">6</text>
<text x="163.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">7</text>
<text x="185.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<text x="207.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">9</text>
<text x="120" y="288" font-size="12" text-anchor="middle" fill="var(--sub)">Q1 4 中央値 5 Q3 6</text>
<text x="355" y="24" font-size="13" text-anchor="middle" font-weight="600" fill="var(--ink)">右に裾が長い</text>
<line x1="255" y1="170" x2="453" y2="170" stroke="var(--ink)"/>
<rect x="255" y="116.7" width="22" height="53.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="277" y="50.0" width="22" height="120.0" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="299" y="76.7" width="22" height="93.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="321" y="103.3" width="22" height="66.7" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="343" y="116.7" width="22" height="53.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="365" y="130.0" width="22" height="40.0" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="387" y="156.7" width="22" height="13.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="409" y="156.7" width="22" height="13.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="431" y="156.7" width="22" height="13.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="288.0" y="201" width="66.0" height="28" fill="var(--warm)" fill-opacity=".2" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="310.0" y1="201" x2="310.0" y2="229" stroke="var(--warm)" stroke-width="2.4"/>
<line x1="266.0" y1="215" x2="288.0" y2="215" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="354.0" y1="215" x2="442.0" y2="215" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="266.0" y1="207" x2="266.0" y2="223" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="442.0" y1="207" x2="442.0" y2="223" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="255" y1="245" x2="453" y2="245" stroke="var(--ink)"/>
<text x="266.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<text x="288.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<text x="310.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">3</text>
<text x="332.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<text x="354.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">5</text>
<text x="376.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">6</text>
<text x="398.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">7</text>
<text x="420.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<text x="442.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">9</text>
<text x="355" y="288" font-size="12" text-anchor="middle" fill="var(--sub)">Q1 2 中央値 3 Q3 5</text>
<text x="590" y="24" font-size="13" text-anchor="middle" font-weight="600" fill="var(--ink)">左に裾が長い</text>
<line x1="490" y1="170" x2="688" y2="170" stroke="var(--ink)"/>
<rect x="490" y="156.7" width="22" height="13.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="512" y="156.7" width="22" height="13.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="534" y="156.7" width="22" height="13.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="556" y="130.0" width="22" height="40.0" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="578" y="116.7" width="22" height="53.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="600" y="103.3" width="22" height="66.7" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="622" y="76.7" width="22" height="93.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="644" y="50.0" width="22" height="120.0" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="666" y="116.7" width="22" height="53.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<rect x="589.0" y="201" width="66.0" height="28" fill="var(--warm)" fill-opacity=".2" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="633.0" y1="201" x2="633.0" y2="229" stroke="var(--warm)" stroke-width="2.4"/>
<line x1="501.0" y1="215" x2="589.0" y2="215" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="655.0" y1="215" x2="677.0" y2="215" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="501.0" y1="207" x2="501.0" y2="223" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="677.0" y1="207" x2="677.0" y2="223" stroke="var(--warm)" stroke-width="1.6"/>
<line x1="490" y1="245" x2="688" y2="245" stroke="var(--ink)"/>
<text x="501.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<text x="523.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<text x="545.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">3</text>
<text x="567.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<text x="589.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">5</text>
<text x="611.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">6</text>
<text x="633.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">7</text>
<text x="655.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<text x="677.0" y="262" font-size="12" text-anchor="middle" fill="var(--sub)">9</text>
<text x="590" y="288" font-size="12" text-anchor="middle" fill="var(--sub)">Q1 5 中央値 7 Q3 8</text>
</svg>
<figcaption>第1章の図3と同じ3つのデータである。左右対称の分布では中央値が箱の中央にありひげの長さも等しい。右に裾が長い分布では中央値が箱の左寄りにあり右のひげが長い。左に裾が長い分布はその逆である。</figcaption>
</figure>
<p>対応を判定する手順は次のとおりである。共通テストでは複数のヒストグラムと箱ひげ図の組み合わせを選ばせる形で出題されてきた。</p>
<ol>
<li>最小値と最大値が含まれる階級を照合する</li>
<li>累積度数から \( Q_1 \)・中央値・\( Q_3 \) が含まれる階級を求めて照合する</li>
<li>箱の中の中央値の位置と左右のひげの長さから裾の向きを照合する</li>
</ol>
<div class="ex"><div class="ex-h">例題 4</div>
<p>35人のデータで度数分布は値1から9まで順に 4 9 7 5 4 3 1 1 1 人である。\( Q_1 \)・中央値・\( Q_3 \) を求め分布の裾の向きを答えよ。</p>
<details open><summary>解き方</summary><div>手順1 累積度数を書き出す。値1から順に 4 13 20 25 29 32 33 34 35 である。<br>手順2 35個なので中央値は18番目である。累積度数が13から20に増える値3に18番目が入る。中央値は3である。<br>手順3 中央値を除いた下位17個の中央値は全体の9番目である。累積度数が4から13に増える値2に入るので \( Q_1=2 \) である。<br>手順4 上位17個は19番目から35番目でその中央値は全体の27番目である。累積度数が25から29に増える値5に入るので \( Q_3=5 \) である。<br>答え \( Q_1=2 \) ／ 中央値3 ／ \( Q_3=5 \)。中央値が箱の左寄りにあり最大値9までの右のひげが長いので右に裾が長い</div></details></div>
<p>典型的な誤りは上位グループの中央値を上位グループの中で9番目と数えたまま全体の9番目の値を答えることである。上位グループの番号は全体の番号に直してから累積度数と照合する。度数と累積度数を表に書き出してから位置を数えると確実である。</p>

<h2 id="s4">偏差と分散と標準偏差</h2>
<p>四分位範囲は順位だけを使う尺度である。すべての値の情報を使う尺度をつくるには平均値からの離れ方を測る。第1章で定義した偏差 \( x_k-\bar{x} \) が出発点である。</p>
<p>偏差の平均を散らばりの尺度にしたいがそれはできない。<strong>偏差の合計はつねに0</strong>だからである。正と負の偏差が打ち消し合う。そこで偏差を2乗して符号をそろえてから平均する。これを<strong>分散</strong>と呼び \( s^2 \) で表す。</p>
\[ s^2=\frac{1}{n}\left\{(x_1-\bar{x})^2+(x_2-\bar{x})^2+\cdots+(x_n-\bar{x})^2\right\}=\frac{1}{n}\sum_{k=1}^{n}(x_k-\bar{x})^2 \]
<p>符号をそろえる方法には偏差の絶対値の平均もある。これを平均偏差と呼ぶが高校ではほとんど使わない。絶対値は場合分けが要り式の変形に向かないからである。2乗は展開や平方完成ができるので次節の公式や第3章の相関係数へ式の形のまま進める。2乗には平均値から遠い値ほど重く数えるという性質もある。偏差が2倍の値は分散への寄与が4倍になる。</p>
<p>分散は偏差を2乗しているので単位も2乗になる。得点の分散の単位は点の2乗であり元のデータと比べにくい。そこで分散の正の平方根をとる。これを<strong>標準偏差</strong>と呼び \( s \) で表す。</p>
\[ s=\sqrt{s^2} \]
<p><strong class="hit">標準偏差は元のデータと同じ単位で平均値からの典型的な離れ具合を表す</strong>。すべての値が等しいときに限り分散も標準偏差も0になる。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="偏差と偏差の2乗を図で比べる">
<line x1="60" y1="260" x2="660" y2="260" stroke="var(--ink)"/>
<line x1="60.0" y1="260" x2="60.0" y2="265" stroke="var(--ink)"/>
<text x="60.0" y="280" font-size="12" text-anchor="middle" fill="var(--sub)">0</text>
<line x1="135.0" y1="260" x2="135.0" y2="265" stroke="var(--ink)"/>
<text x="135.0" y="280" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<line x1="210.0" y1="260" x2="210.0" y2="265" stroke="var(--ink)"/>
<text x="210.0" y="280" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<line x1="285.0" y1="260" x2="285.0" y2="265" stroke="var(--ink)"/>
<text x="285.0" y="280" font-size="12" text-anchor="middle" fill="var(--sub)">6</text>
<line x1="360.0" y1="260" x2="360.0" y2="265" stroke="var(--ink)"/>
<text x="360.0" y="280" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<line x1="435.0" y1="260" x2="435.0" y2="265" stroke="var(--ink)"/>
<text x="435.0" y="280" font-size="12" text-anchor="middle" fill="var(--sub)">10</text>
<line x1="510.0" y1="260" x2="510.0" y2="265" stroke="var(--ink)"/>
<text x="510.0" y="280" font-size="12" text-anchor="middle" fill="var(--sub)">12</text>
<line x1="585.0" y1="260" x2="585.0" y2="265" stroke="var(--ink)"/>
<text x="585.0" y="280" font-size="12" text-anchor="middle" fill="var(--sub)">14</text>
<line x1="660.0" y1="260" x2="660.0" y2="265" stroke="var(--ink)"/>
<text x="660.0" y="280" font-size="12" text-anchor="middle" fill="var(--sub)">16</text>
<line x1="360.0" y1="20" x2="360.0" y2="260" stroke="var(--accent)" stroke-width="2"/>
<text x="366.0" y="34" font-size="12.5" fill="var(--accent)">平均値 8</text>
<line x1="360.0" y1="60" x2="210.0" y2="60" stroke="var(--cool)" stroke-width="3"/>
<circle cx="210.0" cy="60" r="5" fill="var(--cool)"/>
<text x="200.0" y="64" font-size="12.5" text-anchor="end" fill="var(--ink)">x=4 偏差 -4 2乗 16</text>
<line x1="360.0" y1="102" x2="285.0" y2="102" stroke="var(--cool)" stroke-width="3"/>
<circle cx="285.0" cy="102" r="5" fill="var(--cool)"/>
<text x="275.0" y="106" font-size="12.5" text-anchor="end" fill="var(--ink)">x=6 偏差 -2 2乗 4</text>
<line x1="360.0" y1="144" x2="322.5" y2="144" stroke="var(--cool)" stroke-width="3"/>
<circle cx="322.5" cy="144" r="5" fill="var(--cool)"/>
<text x="312.5" y="148" font-size="12.5" text-anchor="end" fill="var(--ink)">x=7 偏差 -1 2乗 1</text>
<line x1="360.0" y1="186" x2="397.5" y2="186" stroke="var(--warm)" stroke-width="3"/>
<circle cx="397.5" cy="186" r="5" fill="var(--warm)"/>
<text x="368.0" y="177" font-size="12.5" text-anchor="start" fill="var(--ink)">x=9 偏差 +1 2乗 1</text>
<line x1="360.0" y1="228" x2="585.0" y2="228" stroke="var(--warm)" stroke-width="3"/>
<circle cx="585.0" cy="228" r="5" fill="var(--warm)"/>
<text x="368.0" y="219" font-size="12.5" text-anchor="start" fill="var(--ink)">x=14 偏差 +6 2乗 36</text>
<text x="700" y="40" font-size="12.5" text-anchor="end" fill="var(--sub)">偏差の和 0 ／ 2乗の和 58 ／ 分散 58÷5=11.6</text>
</svg>
<figcaption>5個の値 4 6 7 9 14 の偏差を平均値8からの線分で示した。左向きの偏差の合計 −7 と右向きの偏差の合計 7 が打ち消し合う。2乗すると14の偏差6が36となり全体の58のうち6割以上を占める。分散は平均から遠い値の影響を強く受ける。</figcaption>
</figure>
<div class="ex"><div class="ex-h">例題 5</div>
<p>5個の値 4 6 7 9 14 の分散と標準偏差を求めよ。標準偏差は小数第2位まで求めよ。</p>
<details open><summary>解き方</summary><div>手順1 平均値は \( (4+6+7+9+14)\div5=40\div5=8 \) である。<br>手順2 偏差は −4 −2 −1 1 6 で合計が0になることを確かめる。<br>手順3 偏差の2乗は 16 4 1 1 36 で合計は58である。分散は \( 58\div5=11.6 \)<br>手順4 標準偏差は \( \sqrt{11.6}=3.405\cdots \)<br>答え 分散11.6 ／ 標準偏差約3.41</div></details></div>
<p>数学Ⅰの分散は偏差の2乗の合計を \( n \) で割る。表計算ソフトの一部の関数や大学の統計学では \( n-1 \) で割った値を使う場面がある。これは標本から母集団の分散を推定するための修正であり数学Ⅰの範囲では使わない。</p>
<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">標準偏差はボラティリティである</p>
<p>平均リターンが同じ2つの銘柄でも日々の値動きの標準偏差が大きい方がリスクが高いと評価される。</p>
</aside>
<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">平均が同じでも分散が小さい相手は予定が立てやすい</p>
<p>毎回70点のデートと40点と100点が交互のデートは平均がともに70点だが標準偏差は0と30である。</p>
</aside>

<h2 id="s5">分散の公式 2乗の平均から平均の2乗を引く</h2>
<p>平均値が整数でないと偏差が小数になり2乗の計算が重くなる。そこで偏差を使わずに分散を求める公式を導く。偏差の2乗を展開する。</p>
\[ s^2=\frac{1}{n}\sum_{k=1}^{n}\left(x_k^2-2\bar{x}x_k+\bar{x}^2\right) \]
\[ =\frac{1}{n}\sum_{k=1}^{n}x_k^2-2\bar{x}\cdot\frac{1}{n}\sum_{k=1}^{n}x_k+\bar{x}^2 \]
\[ =\overline{x^2}-2\bar{x}\cdot\bar{x}+\bar{x}^2=\overline{x^2}-\left(\bar{x}\right)^2 \]
<p>ここで \( \overline{x^2} \) は各値を2乗した値の平均である。式の意味は次のとおりである。</p>
<div class="fx">(分散)＝(2乗の平均)−(平均の2乗)<small>数学Bでは確率変数について同じ形の式 \( V(X)=E(X^2)-\{E(X)\}^2 \) を学ぶ。第8章で扱う。</small></div>
<div class="ex"><div class="ex-h">例題 6</div>
<p>例題5の分散を公式で求めよ。</p>
<details open><summary>解き方</summary><div>手順1 2乗は 16 36 49 81 196 で合計は378である。\( \overline{x^2}=378\div5=75.6 \)<br>手順2 \( (\bar{x})^2=8^2=64 \)<br>手順3 \( s^2=75.6-64=11.6 \)<br>答え 11.6。例題5と一致する</div></details></div>
<p>典型的な誤りは2つある。1つは2乗の平均と平均の2乗を逆に引くことである。この誤りは答えが負になるので気づける。<strong>分散は偏差の2乗の平均なので負にならない</strong>。公式の右辺が負になれば計算を誤っている。もう1つは \( \overline{x^2} \) と \( (\bar{x})^2 \) を同じ値と考えることである。両者の差がちょうど分散であり値がすべて等しいときに限り一致する。</p>
<p>公式は逆向きにも使える。平均値と分散が分かれば2乗の平均 \( \overline{x^2}=s^2+(\bar{x})^2 \) が求まる。共通テストではデータを追加したり2つのグループを合わせたりしたときの分散を求める問題でこの逆向きの使い方が必要になる。</p>
<div class="ex"><div class="ex-h">例題 7</div>
<p>Aグループ10人の得点は平均値6・分散4である。Bグループ10人の得点は平均値10・分散8である。20人全体の平均値と分散を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 全体の平均値は \( (10\cdot6+10\cdot10)\div20=8 \) である。<br>手順2 Aの2乗の平均は \( 4+6^2=40 \) でBの2乗の平均は \( 8+10^2=108 \) である。<br>手順3 全体の2乗の平均は \( (10\cdot40+10\cdot108)\div20=74 \) である。<br>手順4 全体の分散は \( 74-8^2=10 \) である。<br>答え 平均値8 ／ 分散10。2つの分散の平均6より大きいのはグループ間の平均の差が散らばりに加わるためである</div></details></div>

<h2 id="s6">変量の変換と平均値・分散・標準偏差</h2>
<p>摂氏の気温を華氏に直す・得点に一律に加点する・円をドルに換算するといった操作は変量 \( x \) から新しい変量 \( y=ax+b \) をつくる変換である。\( a \) と \( b \) は定数である。この変換で平均値と分散と標準偏差がどう変わるかを導く。</p>
<p>平均値はそのまま同じ変換を受ける。</p>
\[ \bar{y}=\frac{1}{n}\sum_{k=1}^{n}(ax_k+b)=a\cdot\frac{1}{n}\sum_{k=1}^{n}x_k+b=a\bar{x}+b \]
<p>偏差は \( y_k-\bar{y}=(ax_k+b)-(a\bar{x}+b)=a(x_k-\bar{x}) \) となり \( b \) が消える。偏差が \( a \) 倍になるので2乗した分散は \( a^2 \) 倍になる。</p>
\[ s_y^2=a^2s_x^2\qquad s_y=|a|\,s_x \]
<p class="hit">全体に同じ数を足しても散らばりは変わらない。全体を a 倍すると標準偏差は |a| 倍で分散は a² 倍になる。</p>
<p>標準偏差に絶対値が付くのは標準偏差が負にならないからである。\( a=-2 \) なら値の大小が反転するが散らばりの大きさは2倍である。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 220" role="img" aria-label="変量の変換で平均値と散らばりが変わる様子">
<text x="20" y="62" font-size="13" fill="var(--cool)" font-weight="600">x</text>
<text x="20" y="152" font-size="13" fill="var(--warm)" font-weight="600">y=2x+10</text>
<circle cx="122.0" cy="58" r="5.5" fill="var(--cool)"/>
<circle cx="153.0" cy="58" r="5.5" fill="var(--cool)"/>
<circle cx="168.5" cy="58" r="5.5" fill="var(--cool)"/>
<circle cx="199.5" cy="58" r="5.5" fill="var(--cool)"/>
<circle cx="277.0" cy="58" r="5.5" fill="var(--cool)"/>
<circle cx="339.0" cy="148" r="5.5" fill="var(--warm)"/>
<circle cx="401.0" cy="148" r="5.5" fill="var(--warm)"/>
<circle cx="432.0" cy="148" r="5.5" fill="var(--warm)"/>
<circle cx="494.0" cy="148" r="5.5" fill="var(--warm)"/>
<circle cx="649.0" cy="148" r="5.5" fill="var(--warm)"/>
<line x1="122.0" y1="64" x2="339.0" y2="142" stroke="var(--line)"/>
<line x1="153.0" y1="64" x2="401.0" y2="142" stroke="var(--line)"/>
<line x1="168.5" y1="64" x2="432.0" y2="142" stroke="var(--line)"/>
<line x1="199.5" y1="64" x2="494.0" y2="142" stroke="var(--line)"/>
<line x1="277.0" y1="64" x2="649.0" y2="142" stroke="var(--line)"/>
<line x1="184.0" y1="40" x2="184.0" y2="76" stroke="var(--accent)" stroke-width="2"/>
<line x1="463.0" y1="130" x2="463.0" y2="166" stroke="var(--accent)" stroke-width="2"/>
<text x="289.0" y="40" font-size="12.5" fill="var(--ink)">平均値 8 標準偏差 3.41</text>
<text x="680.0" y="176" font-size="12.5" text-anchor="end" fill="var(--ink)">平均値 26 標準偏差 6.81</text>
<line x1="60" y1="192" x2="680" y2="192" stroke="var(--ink)"/>
<line x1="60.0" y1="192" x2="60.0" y2="197" stroke="var(--ink)"/>
<text x="60.0" y="212" font-size="12" text-anchor="middle" fill="var(--sub)">0</text>
<line x1="137.5" y1="192" x2="137.5" y2="197" stroke="var(--ink)"/>
<text x="137.5" y="212" font-size="12" text-anchor="middle" fill="var(--sub)">5</text>
<line x1="215.0" y1="192" x2="215.0" y2="197" stroke="var(--ink)"/>
<text x="215.0" y="212" font-size="12" text-anchor="middle" fill="var(--sub)">10</text>
<line x1="292.5" y1="192" x2="292.5" y2="197" stroke="var(--ink)"/>
<text x="292.5" y="212" font-size="12" text-anchor="middle" fill="var(--sub)">15</text>
<line x1="370.0" y1="192" x2="370.0" y2="197" stroke="var(--ink)"/>
<text x="370.0" y="212" font-size="12" text-anchor="middle" fill="var(--sub)">20</text>
<line x1="447.5" y1="192" x2="447.5" y2="197" stroke="var(--ink)"/>
<text x="447.5" y="212" font-size="12" text-anchor="middle" fill="var(--sub)">25</text>
<line x1="525.0" y1="192" x2="525.0" y2="197" stroke="var(--ink)"/>
<text x="525.0" y="212" font-size="12" text-anchor="middle" fill="var(--sub)">30</text>
<line x1="602.5" y1="192" x2="602.5" y2="197" stroke="var(--ink)"/>
<text x="602.5" y="212" font-size="12" text-anchor="middle" fill="var(--sub)">35</text>
<line x1="680.0" y1="192" x2="680.0" y2="197" stroke="var(--ink)"/>
<text x="680.0" y="212" font-size="12" text-anchor="middle" fill="var(--sub)">40</text>
</svg>
<figcaption>上段は例題5の5個の値で下段は y＝2x＋10 で変換した値である。平均値は 2×8＋10＝26 になる。値の間隔がすべて2倍に広がるので標準偏差も2倍の約6.81になる。10を足す操作は全体を右へ平行移動するだけで散らばりを変えない。</figcaption>
</figure>
<div class="ex"><div class="ex-h">例題 8</div>
<p>ある都市の1か月の日ごとの最高気温は摂氏で平均値 20.0 ℃・標準偏差 3.0 ℃ であった。華氏 \( F=1.8C+32 \) に換算したときの平均値と標準偏差と分散を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 平均値は \( 1.8\times20.0+32=68.0 \) である。<br>手順2 標準偏差は \( 1.8\times3.0=5.4 \) である。32を足す部分は影響しない。<br>手順3 分散は \( 5.4^2=29.16 \) である。摂氏での分散9の \( 1.8^2=3.24 \) 倍と一致する。<br>答え 平均値68.0 ℉ ／ 標準偏差5.4 ℉ ／ 分散29.16</div></details></div>
<h3>標準化と偏差値</h3>
<p>変換の特別な場合として各値から平均値を引き標準偏差で割る変換がある。</p>
\[ z=\frac{x-\bar{x}}{s} \]
<p>これは \( a=\frac{1}{s} \) と \( b=-\frac{\bar{x}}{s} \) の1次式なので \( z \) の平均値は0で標準偏差は1になる。この操作を<strong>標準化</strong>と呼ぶ。平均値と散らばりが異なるデータの値どうしを比べるときに使う。大学入試の模擬試験で使われる偏差値は \( 50+10z \) で計算する値であり平均値が50で標準偏差が10になるように変換したものである。</p>
<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">全員の年俸を一律1000万円上げても年俸格差の標準偏差は変わらない</p>
<p>一律の加算は平均を動かすだけである。全員を2倍にすると標準偏差も2倍になり格差が開く。</p>
</aside>

<h2 id="s7">現実世界の散らばり 箱ひげ図の普及</h2>
<p>箱ひげ図はアメリカの統計学者ジョン・テューキーが1977年の著書で広めた。テューキーは紙と鉛筆で手早く描ける図を重視した。箱ひげ図はデータの形を5つの数で示す。複数のグループを横に並べて比べやすい点が特に評価された。</p>
<aside class="an an-rw"><b>現実世界</b>
<p class="an-h">天気予報の平年並は30年分の値を並べた11番目から20番目である</p>
<p>気象庁は1991年から2020年の30年の値を小さい順に並べ10年ずつ低い・平年並・高いに分ける。四分位数と同じく順位で区切る尺度である。</p>
</aside>
<p>標準偏差は品質管理でも中心的な尺度である。工場で製品の寸法を管理するとき平均値が目標に一致していても標準偏差が大きければ規格を外れる製品が増える。平均値を合わせる調整と標準偏差を小さくする改善は別の作業である。前者は変量の変換の \( b \) にあたり後者は散らばりそのものを変える。</p>

<h2 id="s8">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 四分位数</div>
<p class="qz-q">9個のデータ 2 4 5 7 8 10 13 15 20 の第1四分位数と第3四分位数と四分位範囲を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は \( Q_1=4.5 \)・\( Q_3=14 \)・四分位範囲9.5 である。中央値は5番目の8である。8を除き下位4個 2 4 5 7 の中央値は \( (4+5)\div2=4.5 \) で上位4個 10 13 15 20 の中央値は \( (13+15)\div2=14 \) である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 外れ値</div>
<p class="qz-q">あるデータの第1四分位数は20で第3四分位数は30である。外れ値の基準で外れ値となる値を1つ選べ。</p>
<ol><li>5</li><li>6</li><li>40</li><li>44</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。四分位範囲は10で下側の基準は \( 20-1.5\times10=5 \) で上側の基準は \( 30+1.5\times10=45 \) である。外れ値は5以下または45以上の値である。基準は「以下」と「以上」なので5ちょうどは外れ値に含まれる。6 と 40 と 44 は5より大きく45より小さい。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 分散</div>
<p class="qz-q">5個の値 2 4 6 8 10 の分散と標準偏差を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は 分散8・標準偏差 \( 2\sqrt{2}\approx2.83 \) である。平均値は6で偏差の2乗は 16 4 0 4 16 で合計40である。\( 40\div5=8 \) である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 分散の公式</div>
<p class="qz-q">変量 \( x \) のデータの平均値は5で \( x^2 \) の平均値は29である。\( x \) の標準偏差を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は 2 である。分散は \( 29-5^2=4 \) で標準偏差は \( \sqrt4=2 \) である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 変量の変換</div>
<p class="qz-q">変量 \( x \) の平均値は4で標準偏差は2である。\( y=-3x+2 \) の平均値と標準偏差と分散の組として正しいものを1つ選べ。</p>
<ol><li>平均値 −10 標準偏差 −6 分散 36</li><li>平均値 −10 標準偏差 6 分散 36</li><li>平均値 14 標準偏差 6 分散 18</li><li>平均値 −10 標準偏差 4 分散 16</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。平均値は \( -3\times4+2=-10 \) である。標準偏差は \( |-3|\times2=6 \) で分散は \( 6^2=36 \) である。標準偏差は負にならないので 1 は誤りである。2を足す部分は散らばりに影響しない。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 箱ひげ図の読み取り</div>
<p class="qz-q">40人の得点の箱ひげ図で第1四分位数は45点で第3四分位数は70点である。必ず正しいといえるものを1つ選べ。</p>
<ol><li>45点以上70点以下の生徒はちょうど20人である</li><li>70点以上の生徒は少なくとも10人いる</li><li>平均値は57.5点である</li><li>45点から70点の区間は他の区間より人数が多い</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。40人では \( Q_3 \) は上位20人の中央値であり小さい方から30番目と31番目の平均である。31番目から40番目の10人の得点はどれも31番目以上でありその値は \( Q_3 \) 以上である。したがって70点以上の生徒は少なくとも10人いる。1 は同じ値の生徒がいると20人にならない場合がある。3 は箱ひげ図から平均値は特定できない。4 は箱の区間にも各ひげの区間にも約10人ずつ入るので誤りである。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 値の追加と分散</div>
<p class="qz-q">4個の値の平均値は10で分散は5である。ここに値10を1個加えた5個の値の分散を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は 4 である。平均値は10のまま変わらない。4個の偏差の2乗の合計は \( 5\times4=20 \) で追加した値の偏差は0である。5個の分散は \( 20\div5=4 \) である。平均値に等しい値を加えると分散は小さくなる。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 標準化と偏差値</div>
<p class="qz-q">ある試験の平均点は60点で標準偏差は12点である。78点の受験者の偏差値を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は 65 である。\( z=(78-60)\div12=1.5 \) で偏差値は \( 50+10\times1.5=65 \) である。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
四分位数は中央値で上下に分けた各半分の中央値である。奇数個なら中央値を除いて分ける。<br>
四分位範囲＝Q₃−Q₁。外れ値の基準は Q₁−1.5×四分位範囲 以下 または Q₃＋1.5×四分位範囲 以上。<br>
箱ひげ図の各区間には約4分の1ずつの値が入る。区間の長さは個数ではなく散らばりを示す。<br>
分散は偏差の2乗の平均で標準偏差はその正の平方根である。<br>
分散＝(2乗の平均)−(平均の2乗)。<br>
y＝ax＋b なら 平均は ax̄＋b ／ 分散は a² 倍 ／ 標準偏差は |a| 倍。</div>

<h2 id="s10">残っている問い</h2>
<ul>
<li class="tb-vnote">四分位数の求め方には複数の流儀がある。本文は高校の教科書で一般的な方法を示した。共通テストが求め方を問題文で明示する場合の書式は年度ごとに確認できておらず統一された約束の文書は見つけられなかった。</li>
<li class="tb-vnote">外れ値の基準の1.5倍という係数はテューキーの提案に由来する慣習であり数学的に導かれる値ではない。学習指導要領の本文は外れ値を用語として示すだけで基準の式は解説が通常の例として示している。</li>
<li class="tb-vnote">分散を n で割るか n−1 で割るかは目的による。n−1 で割る理由は数学Bの推定と大学の統計学で扱う。</li>
<li class="tb-vnote">箱ひげ図に似た図がテューキー以前にも存在したとする研究があり考案の時期は確定できなかった。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 — https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_03.pdf</li>
<li>文部科学省 高等学校学習指導要領解説 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>総務省統計局 なるほど統計学園 データの散らばりを見る — https://www.stat.go.jp/naruhodo/10_tokucho/chirabari.html</li>
<li>John Tukey — Wikipedia — https://en.wikipedia.org/wiki/John_Tukey</li>
<li>Box plot — Wikipedia — https://en.wikipedia.org/wiki/Box_plot</li>
<li>気象庁 3つの階級について — https://www.jma.go.jp/jma/kishou/know/kisetsu_riyou/class/index.html</li>
</ol>
