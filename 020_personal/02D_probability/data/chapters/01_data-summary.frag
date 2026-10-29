<!--meta
{"chapter": 1, "part": "数学Ⅰ", "title": "データの整理と代表値", "thesis": "集めた数値はまず度数分布表とヒストグラムで形を見る。次に平均値・中央値・最頻値の3つの代表値で1つの数に要約する。分布の形と外れ値の有無によって適切な代表値は異なる。", "verify": {"date": "2026-10-15", "checked": 24, "match": 24, "fixed": 0, "unconfirmed": 0}}
-->
<p>序章では統計が記述統計と推測統計に分かれることを確認した。第1章から第3章は記述統計である。この章ではその最初の段階を扱う。集めた数値を表とグラフに整理して分布の形をつかみ1つの数で代表させる。</p>
<p>度数分布表・ヒストグラム・代表値は中学校の内容であるが数学Ⅰのデータの分析はすべてこの上に積み上がる。共通テストではヒストグラムや度数分布表から平均値や中央値が含まれる階級を特定する問題と外れ値があるときの代表値の性質を問う問題が多い。この章は定義と計算と使い分けの順に進む。</p>

<h2 id="s1">変量とデータ</h2>
<p>調査や実験で得た数値や記録の集まりを<strong>データ</strong>と呼ぶ。データを構成する1人1人や1個1個の記録の項目を<strong>変量</strong>と呼ぶ。20人の通学時間を調べれば通学時間が変量である。データに含まれる値の個数を<strong>データの大きさ</strong>と呼びふつう \( n \) で表す。</p>
<p>変量を \( x \) とし \( n \) 個の値を \( x_1,x_2,\ldots,x_n \) と書く。添え字は何番目の値かを示す番号であり値の大小とは関係ない。</p>
<p>変量には2種類ある。身長や得点のように数値で測る変量を<strong>量的変量</strong>と呼ぶ。血液型や好きな球団のようにいくつかの分類のどれに入るかを記録する変量を<strong>質的変量</strong>と呼ぶ。平均値は量的変量にだけ計算できる。質的変量を番号で記録しても番号の平均には意味がない。</p>
<div class="ex"><div class="ex-h">例題 1</div>
<p>次の変量を量的変量と質的変量に分けよ。(a) 1か月の読書冊数 (b) 出身の都道府県 (c) 50m走の記録 (d) 支持する政党</p>
<details open><summary>解き方</summary><div>手順1 数値で測り大小や差に意味があるかを確かめる。<br>手順2 (a) と (c) は数値で測る。(b) と (d) は分類のどれに入るかを記録する。<br>答え 量的変量は (a)(c) ／ 質的変量は (b)(d)</div></details></div>

<h2 id="s2">度数分布表とヒストグラム</h2>
<p>ある高校の生徒20人に通学時間を聞き小さい順に並べると次のようになった。単位は分である。</p>
<div class="fx">8 12 15 18 20 22 24 25 27 28 30 32 33 35 38 40 45 50 55 78<small>このデータを本章と第2章で繰り返し使う。合計は635である。</small></div>
<p>値を1つずつ眺めても全体の形は判別しにくい。そこで値の範囲をいくつかの区間に分けて各区間に入る個数を数える。この区間を<strong>階級</strong>と呼び区間の幅を<strong>階級の幅</strong>と呼ぶ。各階級に入る値の個数を<strong>度数</strong>と呼ぶ。階級の中央の値を<strong>階級値</strong>と呼ぶ。階級ごとに度数を並べた表が<strong>度数分布表</strong>である。</p>
<div class="tb-tw"><table>
<thead><tr><th>階級 分</th><th>階級値</th><th>度数</th><th>相対度数</th><th>累積度数</th><th>累積相対度数</th></tr></thead>
<tbody>
<tr><td>0以上10未満</td><td>5</td><td>1</td><td>0.05</td><td>1</td><td>0.05</td></tr>
<tr><td>10〜20</td><td>15</td><td>3</td><td>0.15</td><td>4</td><td>0.20</td></tr>
<tr><td>20〜30</td><td>25</td><td>6</td><td>0.30</td><td>10</td><td>0.50</td></tr>
<tr><td>30〜40</td><td>35</td><td>5</td><td>0.25</td><td>15</td><td>0.75</td></tr>
<tr><td>40〜50</td><td>45</td><td>2</td><td>0.10</td><td>17</td><td>0.85</td></tr>
<tr><td>50〜60</td><td>55</td><td>2</td><td>0.10</td><td>19</td><td>0.95</td></tr>
<tr><td>60〜70</td><td>65</td><td>0</td><td>0.00</td><td>19</td><td>0.95</td></tr>
<tr><td>70〜80</td><td>75</td><td>1</td><td>0.05</td><td>20</td><td>1.00</td></tr>
<tr><td>計</td><td></td><td>20</td><td>1.00</td><td></td><td></td></tr>
</tbody></table></div>
<p>表の階級はすべて「以上・未満」で区切る。20分ちょうどの生徒は20〜30の階級に入り10〜20には入らない。<strong class="hit">境界の値がどちらの階級に入るかは度数を数える前に必ず確かめる</strong>。境界の値の扱いを読み違えると度数が1つずれる。</p>
<p>度数分布表を柱状のグラフにしたものが<strong>ヒストグラム</strong>である。横軸に階級をとり各階級の上に度数に比例する高さの長方形を隙間なく並べる。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="通学時間20人のヒストグラムと3つの代表値">
<line x1="70" y1="250" x2="630" y2="250" stroke="var(--ink)"/>
<line x1="70" y1="250" x2="70" y2="50" stroke="var(--ink)"/>
<line x1="66" y1="250.0" x2="630" y2="250.0" stroke="var(--line)" stroke-width="0"/>
<text x="62" y="254.0" font-size="12" text-anchor="end" fill="var(--sub)">0</text>
<line x1="66" y1="221.4" x2="630" y2="221.4" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="225.4" font-size="12" text-anchor="end" fill="var(--sub)">1</text>
<line x1="66" y1="192.9" x2="630" y2="192.9" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="196.9" font-size="12" text-anchor="end" fill="var(--sub)">2</text>
<line x1="66" y1="164.3" x2="630" y2="164.3" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="168.3" font-size="12" text-anchor="end" fill="var(--sub)">3</text>
<line x1="66" y1="135.7" x2="630" y2="135.7" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="139.7" font-size="12" text-anchor="end" fill="var(--sub)">4</text>
<line x1="66" y1="107.1" x2="630" y2="107.1" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="111.1" font-size="12" text-anchor="end" fill="var(--sub)">5</text>
<line x1="66" y1="78.6" x2="630" y2="78.6" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="82.6" font-size="12" text-anchor="end" fill="var(--sub)">6</text>
<line x1="66" y1="50.0" x2="630" y2="50.0" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="54.0" font-size="12" text-anchor="end" fill="var(--sub)">7</text>
<text x="70.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">0</text>
<text x="140.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">10</text>
<text x="210.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">20</text>
<text x="280.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">30</text>
<text x="350.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">40</text>
<text x="420.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">50</text>
<text x="490.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">60</text>
<text x="560.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">70</text>
<text x="630.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">80</text>
<text x="40" y="36" font-size="12" text-anchor="start" fill="var(--sub)">人数</text>
<text x="630" y="286" font-size="12" text-anchor="end" fill="var(--sub)">通学時間 分</text>
<rect x="70.0" y="221.4" width="70.0" height="28.6" fill="var(--cool)" fill-opacity=".55" stroke="var(--cool)"/>
<text x="105.0" y="237.4" font-size="12.5" text-anchor="middle" fill="#fff" font-weight="700">1</text>
<rect x="140.0" y="164.3" width="70.0" height="85.7" fill="var(--cool)" fill-opacity=".55" stroke="var(--cool)"/>
<text x="175.0" y="180.3" font-size="12.5" text-anchor="middle" fill="#fff" font-weight="700">3</text>
<rect x="210.0" y="78.6" width="70.0" height="171.4" fill="var(--cool)" fill-opacity=".55" stroke="var(--cool)"/>
<text x="227.5" y="94.6" font-size="12.5" text-anchor="middle" fill="#fff" font-weight="700">6</text>
<rect x="280.0" y="107.1" width="70.0" height="142.9" fill="var(--cool)" fill-opacity=".55" stroke="var(--cool)"/>
<text x="325.5" y="123.1" font-size="12.5" text-anchor="middle" fill="#fff" font-weight="700">5</text>
<rect x="350.0" y="192.9" width="70.0" height="57.1" fill="var(--cool)" fill-opacity=".55" stroke="var(--cool)"/>
<text x="385.0" y="208.9" font-size="12.5" text-anchor="middle" fill="#fff" font-weight="700">2</text>
<rect x="420.0" y="192.9" width="70.0" height="57.1" fill="var(--cool)" fill-opacity=".55" stroke="var(--cool)"/>
<text x="455.0" y="208.9" font-size="12.5" text-anchor="middle" fill="#fff" font-weight="700">2</text>
<rect x="560.0" y="221.4" width="70.0" height="28.6" fill="var(--cool)" fill-opacity=".55" stroke="var(--cool)"/>
<text x="595.0" y="237.4" font-size="12.5" text-anchor="middle" fill="#fff" font-weight="700">1</text>
<line x1="245.0" y1="250" x2="245.0" y2="48" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 3"/>
<text x="385.0" y="70" font-size="13" fill="var(--accent)" font-weight="600">最頻値 25</text>
<line x1="273.0" y1="250" x2="273.0" y2="48" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 3"/>
<text x="385.0" y="86" font-size="13" fill="var(--ink)" font-weight="600">中央値 29</text>
<line x1="292.2" y1="250" x2="292.2" y2="48" stroke="var(--warm)" stroke-width="2" stroke-dasharray="none"/>
<text x="385.0" y="102" font-size="13" fill="var(--warm)" font-weight="600">平均値 31.75</text>
</svg>
<figcaption>通学時間20人のヒストグラムである。階級の幅は10分で長方形の中の数は度数である。縦線は第3節と第4節で求める3つの代表値の位置を示す。70分台の1人が右に離れている。</figcaption>
</figure>
<h3>相対度数と累積度数</h3>
<p>度数をデータの大きさで割った値を<strong>相対度数</strong>と呼ぶ。式で書くと次のとおりである。</p>
\[ (\text{相対度数})=\frac{(\text{その階級の度数})}{(\text{データの大きさ})} \]
<p>相対度数の合計は必ず1になる。大きさの異なる2つのデータを比べるときは度数ではなく相対度数で比べる。40人のクラスで度数8と200人の学年で度数8では割合が5倍異なるからである。</p>
<p>最初の階級からその階級までの度数を足し合わせた値を<strong>累積度数</strong>と呼ぶ。累積度数をデータの大きさで割った値が<strong>累積相対度数</strong>である。累積度数は「この値未満の人は何人か」を示す。<strong class="hit">累積相対度数が0.5を超える最初の階級に中央値が含まれる</strong>。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="累積相対度数の折れ線">
<line x1="70" y1="250" x2="630" y2="250" stroke="var(--ink)"/>
<line x1="70" y1="250" x2="70" y2="50" stroke="var(--ink)"/>
<line x1="66" y1="250.0" x2="630" y2="250.0" stroke="var(--line)" stroke-width="0"/>
<line x1="66" y1="50.0" x2="630" y2="50.0" stroke="var(--line)" stroke-width="0.8"/>
<text x="70.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">0</text>
<text x="140.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">10</text>
<text x="210.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">20</text>
<text x="280.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">30</text>
<text x="350.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">40</text>
<text x="420.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">50</text>
<text x="490.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">60</text>
<text x="560.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">70</text>
<text x="630.0" y="268" font-size="12" text-anchor="middle" fill="var(--sub)">80</text>
<text x="40" y="36" font-size="12" text-anchor="start" fill="var(--sub)">累積相対度数</text>
<text x="630" y="286" font-size="12" text-anchor="end" fill="var(--sub)">通学時間 分</text>
<line x1="70" y1="250.0" x2="630" y2="250.0" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="254.0" font-size="12" text-anchor="end" fill="var(--sub)">0</text>
<line x1="70" y1="200.0" x2="630" y2="200.0" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="204.0" font-size="12" text-anchor="end" fill="var(--sub)">0.25</text>
<line x1="70" y1="150.0" x2="630" y2="150.0" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="154.0" font-size="12" text-anchor="end" fill="var(--sub)">0.5</text>
<line x1="70" y1="100.0" x2="630" y2="100.0" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="104.0" font-size="12" text-anchor="end" fill="var(--sub)">0.75</text>
<line x1="70" y1="50.0" x2="630" y2="50.0" stroke="var(--line)" stroke-width="0.8"/>
<text x="62" y="54.0" font-size="12" text-anchor="end" fill="var(--sub)">1</text>
<polyline points="70.0,250.0 140.0,240.0 210.0,210.0 280.0,150.0 350.0,100.0 420.0,80.0 490.0,60.0 560.0,60.0 630.0,50.0" fill="none" stroke="var(--warm)" stroke-width="2.2"/>
<circle cx="70.0" cy="250.0" r="3.5" fill="var(--warm)"/>
<circle cx="140.0" cy="240.0" r="3.5" fill="var(--warm)"/>
<circle cx="210.0" cy="210.0" r="3.5" fill="var(--warm)"/>
<circle cx="280.0" cy="150.0" r="3.5" fill="var(--warm)"/>
<circle cx="350.0" cy="100.0" r="3.5" fill="var(--warm)"/>
<circle cx="420.0" cy="80.0" r="3.5" fill="var(--warm)"/>
<circle cx="490.0" cy="60.0" r="3.5" fill="var(--warm)"/>
<circle cx="560.0" cy="60.0" r="3.5" fill="var(--warm)"/>
<circle cx="630.0" cy="50.0" r="3.5" fill="var(--warm)"/>
<line x1="70" y1="150.0" x2="280.0" y2="150.0" stroke="var(--accent)" stroke-dasharray="4 3"/>
<line x1="280.0" y1="150.0" x2="280.0" y2="250" stroke="var(--accent)" stroke-dasharray="4 3"/>
<text x="288.0" y="180.0" font-size="12.5" fill="var(--accent)">30分未満が半数の10人</text>
</svg>
<figcaption>累積相対度数を各階級の右端の値の上に打ち折れ線で結んだ。30分未満の累積相対度数がちょうど0.5である。60〜70の階級は度数0なので折れ線が水平になる。累積の折れ線は右へ進んで下がることがない。</figcaption>
</figure>

<aside class="an an-lv"><b>男女で言えば</b>
<p class="an-h">告白の成功は回数ではなく成功率で比べる。これが相対度数である</p>
<p>5回中3回の成功と20回中4回の成功では回数は後者が多いが割合は0.6と0.2である。</p>
</aside>

<aside class="an an-biz"><b>スタートアップで言えば</b>
<p class="an-h">累積ユーザー数のグラフが下がらないのは累積度数の性質である</p>
<p>各階級の度数は0以上なので足し続けた値は増えるか横ばいである。成長を示すには各月の新規数つまり度数を示す。</p>
</aside>

<div class="ex"><div class="ex-h">例題 2</div>
<p>上の度数分布表で次の値を求めよ。(1) 30分以上40分未満の階級の相対度数 (2) 40分未満の生徒の割合 (3) 中央値が含まれる階級</p>
<details open><summary>解き方</summary><div>手順1 (1) 度数5をデータの大きさ20で割る。\( 5\div20=0.25 \)<br>手順2 (2) 40分未満の累積度数は \( 1+3+6+5=15 \) である。\( 15\div20=0.75 \)<br>手順3 (3) 小さい方から10番目と11番目の平均が中央値である。累積度数は20〜30で10になり30〜40で15になる。10番目の値28は20〜30に入り11番目の値30は30〜40に入る。<br>答え (1) 0.25 (2) 0.75 (3) 中央値29は20〜30に入る28と30〜40に入る30の平均であり階級の境界の30より小さいので20〜30に含まれる</div></details></div>
<p>例題2の(3)のように累積相対度数がちょうど0.5になる階級の境界では中央値をつくる2つの値が別々の階級に入る。度数分布表だけでは中央値の階級を特定できないので元の値で判断する。</p>
<h3>ヒストグラムの典型的な誤り</h3>
<ul>
<li>階級の幅が異なる表をそのまま高さで描くと幅の広い階級が過大に見える。ヒストグラムは面積が度数に比例する図である。幅が2倍の階級は高さを半分にして描く</li>
<li>度数の多い階級を最頻値そのものと答える誤り。最頻値は値であり度数ではない。階級値で答える</li>
<li>階級の幅を変えるとヒストグラムの形は変わる。同じデータでも幅の取り方で山の数が違って見えることがある</li>
</ul>

<h2 id="s3">平均値</h2>
<p>変量 \( x \) の \( n \) 個の値の合計を \( n \) で割った値を<strong>平均値</strong>と呼び \( \bar{x} \) で表す。読み方はエックスバーである。</p>
\[ \bar{x}=\frac{x_1+x_2+\cdots+x_n}{n}=\frac{1}{n}\sum_{k=1}^{n}x_k \]
<p>記号 \( \sum \) はシグマと読み \( k=1 \) から \( k=n \) までの \( x_k \) の和を表す。数学Bの数列で正式に学ぶ記号であるが統計の式を短く書くために先に使う。</p>
<p>通学時間のデータでは合計が635なので平均値は次のとおりである。</p>
\[ \bar{x}=\frac{635}{20}=31.75 \]
<p>平均値には重要な性質が1つある。各値から平均値を引いた差を<strong>偏差</strong>と呼ぶ。<strong class="hit">偏差の合計は必ず0になる</strong>。理由は次の計算で示せる。</p>
\[ \sum_{k=1}^{n}(x_k-\bar{x})=\sum_{k=1}^{n}x_k-n\bar{x}=n\bar{x}-n\bar{x}=0 \]
<p>平均値は値を数直線上の重りと見たときにつり合う支点の位置である。平均より大きい値の偏差の合計と小さい値の偏差の合計が打ち消し合う。偏差は第2章で分散を定義する出発点になる。</p>
<h3>仮平均を使う計算</h3>
<p>値が大きいときは適当な基準の値 \( a \) を決め各値との差 \( u_k=x_k-a \) の平均を求めると計算が軽くなる。この \( a \) を<strong>仮平均</strong>と呼ぶ。\( x_k=a+u_k \) なので両辺の平均をとると次の式が成り立つ。</p>
\[ \bar{x}=a+\bar{u} \]
<div class="ex"><div class="ex-h">例題 3</div>
<p>5人の身長は 172 168 175 181 169 である。単位は cm である。仮平均を170として平均値を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 各値から170を引く。2 −2 5 11 −1 となる。<br>手順2 差の合計は \( 2-2+5+11-1=15 \) で差の平均は \( 15\div5=3 \) である。<br>手順3 \( \bar{x}=170+3=173 \)<br>答え 173 cm</div></details></div>
<h3>度数分布表から求める平均値</h3>
<p>個々の値が分からず度数分布表だけが与えられることがある。このときは<strong>各階級の値がすべて階級値に等しい</strong>とみなして平均値を計算する。階級値を \( x_1,\ldots,x_m \) とし度数を \( f_1,\ldots,f_m \) とすると次の式になる。</p>
\[ \bar{x}=\frac{x_1f_1+x_2f_2+\cdots+x_mf_m}{n}\qquad n=f_1+f_2+\cdots+f_m \]
<div class="ex"><div class="ex-h">例題 4</div>
<p>通学時間の度数分布表から平均値を求め元のデータの平均値31.75と比べよ。</p>
<details open><summary>解き方</summary><div>手順1 階級値と度数の積を足す。\( 5\cdot1+15\cdot3+25\cdot6+35\cdot5+45\cdot2+55\cdot2+65\cdot0+75\cdot1 \)<br>手順2 \( =5+45+150+175+90+110+0+75=650 \)<br>手順3 \( 650\div20=32.5 \)<br>答え 32.5分。元のデータより0.75分大きい。階級の中で値が中央に均等に散らばっていないためで度数分布表から求めた平均値は近似値である</div></details></div>
<p>典型的な誤りは階級値ではなく階級の下端の値を掛けることと度数の合計ではなく階級の個数で割ることである。前者では平均値が階級の幅の半分だけ小さくなる。</p>

<h2 id="s4">中央値と最頻値</h2>
<p>値を小さい順に並べたとき中央の位置にある値を<strong>中央値</strong>または<strong>メジアン</strong>と呼ぶ。データの大きさ \( n \) が奇数か偶数かで求め方が異なる。</p>
<div class="tb-vs">
<div><h5>n が奇数</h5><ul><li>小さい方から \( \frac{n+1}{2} \) 番目の値</li><li>例 7個なら4番目</li></ul></div>
<div><h5>n が偶数</h5><ul><li>\( \frac{n}{2} \) 番目と \( \frac{n}{2}+1 \) 番目の値の平均</li><li>例 20個なら10番目と11番目の平均</li></ul></div>
</div>
<p>通学時間のデータは20個なので10番目の28と11番目の30の平均をとり中央値は29である。中央値はちょうど半数の値がそれ以下で半数の値がそれ以上になる位置を示す。</p>
<p>データで最も多く現れる値を<strong>最頻値</strong>または<strong>モード</strong>と呼ぶ。通学時間のデータは20個の値がすべて異なり値そのものの最頻値は定まらない。このように連続的な量では度数分布表で度数が最大の階級の<strong>階級値</strong>を最頻値とする。通学時間では20〜30の階級の度数6が最大なので最頻値は25分である。</p>
<p class="hit">最頻値は階級の取り方で変わる。中央値は値の並び順だけで決まり大きい値がどれほど大きくても変わらない。</p>
<div class="ex"><div class="ex-h">例題 5</div>
<p>次の2つのデータの中央値を求めよ。また (b) の最頻値を求めよ。(a) 9 3 7 12 5 (b) 4 8 6 8 2 10</p>
<details open><summary>解き方</summary><div>手順1 (a) を並べ替える。3 5 7 9 12。5個なので3番目の7が中央値である。<br>手順2 (b) を並べ替える。2 4 6 8 8 10。6個なので3番目と4番目の平均で \( (6+8)\div2=7 \) である。<br>手順3 (b) では8が2回現れ他は1回なので最頻値は8である。<br>答え (a) 7 (b) 中央値7 最頻値8</div></details></div>
<p>典型的な誤りは並べ替えずに中央の位置の値を答えることである。(a) と (b) は並べ替えずに読んでも同じ答えになるがそれは偶然である。同じ値を 9 3 12 7 5 の順に記録すると3番目は12となり誤る。必ず並べ替えてから数える。</p>

<h2 id="s5">外れ値と代表値の選び方</h2>
<p>平均値・中央値・最頻値をまとめて<strong>代表値</strong>と呼ぶ。3つはデータの中心を異なる基準で示す。どれが適切かは分布の形で決まる。</p>
<p>他の値から極端に離れた値を<strong>外れ値</strong>と呼ぶ。外れ値かどうかを判定する基準は第2章で四分位数を使って定める。ここでは外れ値が代表値に与える影響を確かめる。</p>
<div class="ex"><div class="ex-h">例題 6</div>
<p>通学時間のデータから78分の値を除いた19人の平均値と中央値を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 合計は \( 635-78=557 \) で平均値は \( 557\div19=29.31\cdots \) である。<br>手順2 19個なので10番目が中央値である。小さい方から10番目は28である。<br>答え 平均値は約29.3分で31.75から約2.4分小さくなる。中央値は28分で29から1分小さくなるだけである</div></details></div>
<p>平均値は全部の値の合計から計算するので1つの大きな値に強く引っ張られる。中央値は順位しか使わないので外れ値の大きさには左右されない。この性質を<strong>外れ値に対して頑健である</strong>という。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 285" role="img" aria-label="分布の形と平均値と中央値と最頻値の位置">
<text x="120" y="24" font-size="13" text-anchor="middle" font-weight="600" fill="var(--ink)">左右対称</text>
<line x1="20" y1="200" x2="218" y2="200" stroke="var(--ink)"/>
<rect x="20" y="185.6" width="22" height="14.4" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="31.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<rect x="42" y="171.1" width="22" height="28.9" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="53.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<rect x="64" y="142.2" width="22" height="57.8" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="75.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">3</text>
<rect x="86" y="113.3" width="22" height="86.7" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="97.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<rect x="108" y="70.0" width="22" height="130.0" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="119.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">5</text>
<rect x="130" y="113.3" width="22" height="86.7" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="141.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">6</text>
<rect x="152" y="142.2" width="22" height="57.8" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="163.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">7</text>
<rect x="174" y="171.1" width="22" height="28.9" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="185.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<rect x="196" y="185.6" width="22" height="14.4" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="207.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">9</text>
<line x1="119.0" y1="200" x2="119.0" y2="64" stroke="var(--accent)" stroke-width="2"/>
<text x="20" y="238" font-size="12" fill="var(--accent)">最頻値 5</text>
<line x1="119.0" y1="200" x2="119.0" y2="64" stroke="var(--ink)" stroke-width="2"/>
<text x="20" y="255" font-size="12" fill="var(--ink)">中央値 5</text>
<line x1="119.0" y1="200" x2="119.0" y2="64" stroke="var(--warm)" stroke-width="2"/>
<text x="20" y="272" font-size="12" fill="var(--warm)">平均値 5</text>
<text x="355" y="24" font-size="13" text-anchor="middle" font-weight="600" fill="var(--ink)">右に裾が長い</text>
<line x1="255" y1="200" x2="453" y2="200" stroke="var(--ink)"/>
<rect x="255" y="142.2" width="22" height="57.8" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="266.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<rect x="277" y="70.0" width="22" height="130.0" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="288.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<rect x="299" y="98.9" width="22" height="101.1" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="310.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">3</text>
<rect x="321" y="127.8" width="22" height="72.2" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="332.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<rect x="343" y="142.2" width="22" height="57.8" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="354.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">5</text>
<rect x="365" y="156.7" width="22" height="43.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="376.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">6</text>
<rect x="387" y="185.6" width="22" height="14.4" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="398.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">7</text>
<rect x="409" y="185.6" width="22" height="14.4" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="420.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<rect x="431" y="185.6" width="22" height="14.4" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="442.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">9</text>
<line x1="288.0" y1="200" x2="288.0" y2="64" stroke="var(--accent)" stroke-width="2"/>
<text x="255" y="238" font-size="12" fill="var(--accent)">最頻値 2</text>
<line x1="310.0" y1="200" x2="310.0" y2="64" stroke="var(--ink)" stroke-width="2"/>
<text x="255" y="255" font-size="12" fill="var(--ink)">中央値 3</text>
<line x1="322.6" y1="200" x2="322.6" y2="64" stroke="var(--warm)" stroke-width="2"/>
<text x="255" y="272" font-size="12" fill="var(--warm)">平均値 3.57</text>
<text x="590" y="24" font-size="13" text-anchor="middle" font-weight="600" fill="var(--ink)">左に裾が長い</text>
<line x1="490" y1="200" x2="688" y2="200" stroke="var(--ink)"/>
<rect x="490" y="185.6" width="22" height="14.4" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="501.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">1</text>
<rect x="512" y="185.6" width="22" height="14.4" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="523.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">2</text>
<rect x="534" y="185.6" width="22" height="14.4" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="545.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">3</text>
<rect x="556" y="156.7" width="22" height="43.3" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="567.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">4</text>
<rect x="578" y="142.2" width="22" height="57.8" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="589.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">5</text>
<rect x="600" y="127.8" width="22" height="72.2" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="611.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">6</text>
<rect x="622" y="98.9" width="22" height="101.1" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="633.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">7</text>
<rect x="644" y="70.0" width="22" height="130.0" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="655.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">8</text>
<rect x="666" y="142.2" width="22" height="57.8" fill="var(--cool)" fill-opacity=".5" stroke="var(--cool)"/>
<text x="677.0" y="216" font-size="12" text-anchor="middle" fill="var(--sub)">9</text>
<line x1="655.0" y1="200" x2="655.0" y2="64" stroke="var(--accent)" stroke-width="2"/>
<text x="490" y="238" font-size="12" fill="var(--accent)">最頻値 8</text>
<line x1="633.0" y1="200" x2="633.0" y2="64" stroke="var(--ink)" stroke-width="2"/>
<text x="490" y="255" font-size="12" fill="var(--ink)">中央値 7</text>
<line x1="620.4" y1="200" x2="620.4" y2="64" stroke="var(--warm)" stroke-width="2"/>
<text x="490" y="272" font-size="12" fill="var(--warm)">平均値 6.43</text>
</svg>
<figcaption>どれも35個のデータである。左右対称の分布では3つの代表値が一致する。右に裾が長い分布では最頻値2・中央値3・平均値3.57の順に右へ並ぶ。左に裾が長い分布では順序が逆になる。平均値は裾の側へ最も大きくずれる。</figcaption>
</figure>
<p>図から次の使い分けが導かれる。</p>
<div class="tb-tw"><table>
<thead><tr><th>分布の状況</th><th>適する代表値</th><th>理由</th></tr></thead>
<tbody>
<tr><td>左右対称で外れ値がない</td><td>平均値</td><td>3つが一致し平均値は全部の値の情報を使う</td></tr>
<tr><td>片側に裾が長い ／ 外れ値がある</td><td>中央値</td><td>平均値が裾の側へずれ典型的な値を示さない</td></tr>
<tr><td>質的変量 ／ 最も多い選択肢を知りたい</td><td>最頻値</td><td>平均値と中央値が計算できないか意味をもたない</td></tr>
</tbody></table></div>
<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">球団の平均年俸は大型契約の1人で跳ね上がるが中央値は動かない</p>
<p>年俸の分布は右に裾が長い。典型的な選手の年俸を知りたいなら中央値を見る。</p>
</aside>
<h3>2つの集団を合わせた平均値</h3>
<p>人数の異なる2つの集団の平均値を合わせるときは平均値どうしを単純に平均してはならない。各集団の合計を復元してから全体の人数で割る。</p>
\[ \bar{x}=\frac{n_A\bar{x}_A+n_B\bar{x}_B}{n_A+n_B} \]
<p>人数の多い集団の平均値に近い値になる。単純平均と一致するのは2つの集団の人数が等しい場合だけである。</p>
<div class="ex"><div class="ex-h">例題 7</div>
<p>男子15人の通学時間の平均値は34分で女子25人の平均値は26分である。40人全体の平均値を求めよ。また全体の中央値はこの情報から求められるか。</p>
<details open><summary>解き方</summary><div>手順1 男子の合計は \( 15\times34=510 \) で女子の合計は \( 25\times26=650 \) である。<br>手順2 全体の平均値は \( (510+650)\div40=1160\div40=29 \) である。単純平均の30とは一致しない。<br>手順3 中央値は40人を並べた20番目と21番目の値で決まる。男子と女子の値がどう入り混じるかは平均値からは分からない。<br>答え 平均値は29分。中央値は求められない</div></details></div>
<p>例題7が示すとおり平均値は合計を通じて集団を合わせられるが中央値は合わせられない。2つの集団の中央値がともに分かっていても全体の中央値は個々の値を並べ直さない限り求まらない。合計という足し算できる量を経由するかどうかが2つの代表値の性質を分ける。</p>
<h3>代表値の典型的な誤り</h3>
<ul>
<li>平均値を「ちょうど半数がそれ以下になる値」と説明する誤り。その性質をもつのは中央値である。右に裾が長い分布では平均値以下の値が半数を大きく超える</li>
<li>外れ値を除くと中央値はまったく変わらないと考える誤り。値の個数が1つ減るので中央の位置がずれ中央値も変わりうる。変化が小さいのであって0とは限らない</li>
<li>度数分布表の最頻値を度数で答える誤り。答えるのは度数が最大の階級の階級値である</li>
<li>平均値・中央値・最頻値のどれか1つだけで分布を判断する誤り。代表値はヒストグラムや第2章の箱ひげ図と照らし合わせて矛盾がないかを確かめる</li>
</ul>

<h2 id="s6">現実世界の代表値 貯蓄の平均値と中央値</h2>
<p>総務省統計局の家計調査は二人以上の世帯の貯蓄現在高を毎年公表している。2024年の結果は次のとおりである。</p>
<div class="tb-kpi">
<div><b>1,984<small>万円</small></b><i>貯蓄現在高の平均値</i><em>貯蓄0の世帯を含む</em></div>
<div><b>1,189<small>万円</small></b><i>貯蓄保有世帯の中央値</i><em>貯蓄0の世帯を除く</em></div>
<div><b>67.0<small>%</small></b><i>平均値を下回る世帯の割合</i><em>約3分の2</em></div>
</div>
<p>平均値が中央値より約800万円大きい。貯蓄の分布は少ない階級に多くの世帯が集まり多額の貯蓄をもつ少数の世帯が右に長い裾をつくる。平均値はその裾に引っ張られる。<strong class="hit">平均値を下回る世帯が半数ではなく3分の2を占めるのは右に裾が長い分布の特徴である</strong>。左右対称の分布なら平均値を下回る割合は半数に近くなる。</p>
<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">平均貯蓄額は平均的な世帯の貯蓄額ではない</p>
<p>典型的な世帯を示すのは中央値である。報道の数値がどちらの代表値かを確かめる。</p>
</aside>
<p>統計局の公表資料も平均値と中央値を並べて示し貯蓄の少ない階級に偏った分布であると説明している。2つの中央値のうち貯蓄0の世帯を含めた値は参考値として1,099万円と示されている。どの世帯を集計に含めるかで中央値も変わる。</p>

<h2 id="s7">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 平均値</div>
<p class="qz-q">5個の値 7 9 12 15 22 の平均値を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は 13 である。合計は \( 7+9+12+15+22=65 \) で \( 65\div5=13 \) である。偏差は −6 −4 −1 2 9 で合計が0になることでも検算できる。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 中央値</div>
<p class="qz-q">8個の値 3 8 4 10 6 15 9 12 の中央値を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は 8.5 である。並べ替えると 3 4 6 8 9 10 12 15 である。8個なので4番目の8と5番目の9の平均をとり \( (8+9)\div2=8.5 \) である。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 累積相対度数</div>
<p class="qz-q">20人の得点を5つの階級に分けた度数分布表で度数は低い階級から順に 2 5 8 4 1 である。3番目の階級までの累積相対度数を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は 0.75 である。累積度数は \( 2+5+8=15 \) でデータの大きさ20で割ると0.75である。3番目の階級の相対度数0.4と取り違えない。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 度数分布表からの平均値</div>
<p class="qz-q">階級値が 15 25 35 45 で度数がそれぞれ 3 6 8 3 の度数分布表がある。この表から求めた平均値を選べ。</p>
<ol><li>29.5</li><li>30.0</li><li>30.5</li><li>31.0</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\( 15\cdot3+25\cdot6+35\cdot8+45\cdot3=45+150+280+135=610 \) で度数の合計20で割ると30.5である。階級値の単純平均30を選ぶ誤りが多い。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 値の追加</div>
<p class="qz-q">10人の得点の平均値は60点であった。11人目の得点82点を加えた11人の平均値を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は 62 点である。10人の合計は600点で82点を加えると682点になる。\( 682\div11=62 \) である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 2つの集団の平均値</div>
<p class="qz-q">A組20人の平均値は55点でB組30人の平均値は65点である。2組を合わせた50人の平均値を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は 61 点である。合計は \( 20\cdot55+30\cdot65=1100+1950=3050 \) で \( 3050\div50=61 \) である。単純平均の60点は人数の差を無視した誤りである。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 分布の形と代表値</div>
<p class="qz-q">ある町の世帯の年収のヒストグラムは山が左寄りにあり右に長い裾をもつ。代表値の大小関係として最も適当なものを1つ選べ。</p>
<ol><li>平均値 ＜ 中央値 ＜ 最頻値</li><li>最頻値 ＜ 中央値 ＜ 平均値</li><li>中央値 ＜ 最頻値 ＜ 平均値</li><li>3つはつねに等しい</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。山の位置に最頻値がある。右の裾の大きな値は平均値を最も大きく右へ引っ張る。中央値は順位で決まるので両者の間に入る。ただし代表値の大小は分布によって例外があり図や数値で確かめる。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 外れ値の影響</div>
<p class="qz-q">7個の値 4 5 5 6 7 8 100 から100を除いた。平均値と中央値の変化として正しいものを1つ選べ。</p>
<ol><li>平均値は約13.5小さくなり中央値は0.5小さくなる</li><li>平均値は約13.5小さくなり中央値は変わらない</li><li>平均値も中央値も約13.5小さくなる</li><li>平均値は変わらず中央値は0.5小さくなる</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。除く前の平均値は \( 135\div7\approx19.29 \) で除いた後は \( 35\div6\approx5.83 \) なので約13.5小さくなる。中央値は7個の4番目の6から6個の3番目と4番目の平均 \( (5+6)\div2=5.5 \) に変わり0.5小さくなる。中央値は外れ値の大きさの影響を受けないが個数が1つ減ることで位置がずれる。</div></details></div>

<h2 id="s8">この章の要点</h2>
<div class="tb-key"><b>要点</b>
度数分布表は階級ごとの度数を示しヒストグラムは面積で度数を表す。<br>
相対度数＝度数÷データの大きさ。大きさの異なるデータは相対度数で比べる。<br>
平均値は合計÷個数で偏差の合計はつねに0である。仮平均を使うと計算が軽くなる。<br>
度数分布表から平均値を求めるときは各階級の値を階級値とみなす。<br>
中央値は並べ替えて中央の値をとり偶数個なら中央の2つの平均とする。<br>
右に裾が長い分布では平均値が中央値より大きくなり典型的な値は中央値が示す。</div>

<h2 id="s9">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>右に裾が長い分布で集団の典型的な値を示すには、平均値と中央値のどちらを用いるべきか。</strong> 本文は、平均値は裾の側へ最も大きくずれ、中央値は大きい値がどれほど大きくても変わらないとした。合計を反映させたいか、順位の中央を示したいかで選ぶ代表値が異なる。</li>
<li class="tb-vnote"><strong>階級の取り方で変わる最頻値を、分布の特徴を示す値とみなしてよいか。</strong> 本文は値がすべて異なる量では度数最大の階級の階級値を最頻値とし、最頻値は階級の取り方で変わるとした。質的変量では最頻値だけが意味をもつという面もあり、変量の種類で評価が異なる。</li>
</ul>

<h2 id="s10">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 — https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_03.pdf</li>
<li>文部科学省 高等学校学習指導要領解説 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>総務省統計局 家計調査報告 貯蓄・負債編 2024年平均結果の概要 二人以上の世帯 — https://www.stat.go.jp/data/sav/sokuhou/nen/pdf/2024_yoyaku.pdf</li>
<li>総務省統計局 なるほど統計学園 中心的な傾向を捉える — https://www.stat.go.jp/naruhodo/5_tokucho/chushin.html</li>
<li>大学入試センター 令和7年度 問題評価・分析委員会報告書 本試験 — https://www.dnc.ac.jp/kyotsu/hyouka/r7_hyouka/r7_hyoukahoukokusyo_honshiken.html</li>
</ol>
