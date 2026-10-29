<!--meta
{"chapter": 5, "part": "物理基礎", "title": "熱", "thesis": "温度は物質をつくる粒子の熱運動の激しさを表す量であり熱は温度差によって移動するエネルギーである。熱と仕事はどちらも内部エネルギーを変える手段で熱力学第1法則がその収支を表す。熱を仕事に変える変化には必ず低温へ捨てる熱が伴い熱効率は1未満にとどまる。", "verify": {"date": "2026-10-15", "checked": 42, "match": 36, "fixed": 4, "unconfirmed": 2}}
-->
<p>第4章の最後で動摩擦力が負の仕事をすると力学的エネルギーが減り減った分が熱に変わることを確認した。この章ではその熱をエネルギーとして定量的に扱う。温度とは何か・熱と温度はどう異なるか・熱と仕事の間でエネルギーがどう出入りするかを順に積み上げる。</p>
<p>共通テスト物理基礎でこの範囲から問われる論点は5つである。絶対温度の換算・熱容量と比熱を使った熱量の計算・混合による熱量の保存・潜熱を含む状態変化の熱量・熱力学第1法則と熱効率である。計算はどれも \( Q=mc\Delta T \) と「放出した熱量＝受け取った熱量」の2つで組み立てられる。</p>

<h2 id="s1">熱運動と温度</h2>
<p>物質は原子や分子という粒子からなり粒子は絶えず不規則に運動している。この運動を<strong>熱運動</strong>と呼ぶ。1827年に植物学者ブラウンは水に浮かべた花粉から出た微粒子が不規則に動き続けることを顕微鏡で観察した。これをブラウン運動と呼ぶ。微粒子が動くのは周囲の水分子が熱運動して不規則に衝突するからである。</p>
<p><strong class="hit">温度は粒子の熱運動の激しさを表す量である</strong>。温度が高いほど粒子の熱運動は激しい。高温の物体と低温の物体を接触させると激しく運動する粒子が衝突を通じてエネルギーを渡す。やがて両者の温度が等しくなり変化が止む。この状態を<strong>熱平衡</strong>と呼ぶ。温度差によって移動するエネルギーを<strong>熱</strong>と呼び移動した熱の量を<strong>熱量</strong>と呼ぶ。熱量の単位は仕事と同じ \( \mathrm{J} \) である。</p>
<p>温度と熱は異なる量である。温度は物体の状態を表す量で熱は移動するエネルギーの量である。「物体が熱をもつ」とは言わず物体がもつエネルギーは内部エネルギーと呼ぶ。内部エネルギーは第5節で扱う。</p>

<h3>絶対温度</h3>
<p>日常で使うセルシウス温度 \( t \) は1気圧で水が凍る温度を 0 ℃ で沸騰する温度を 100 ℃ とする目盛りである。温度を下げていくと熱運動は穏やかになり約 −273 ℃ で熱運動が最も穏やかな状態に達する。これより低い温度は存在しない。この温度を<strong>絶対零度</strong>と呼ぶ。量子力学では、絶対零度でも粒子は零点振動と呼ばれる運動を残す。</p>
<p>絶対零度を原点とし目盛りの間隔をセルシウス温度と同じにした温度を<strong>絶対温度</strong> \( T \) と呼ぶ。単位は<strong>ケルビン</strong> \( \mathrm{K} \) である。</p>
\[ T=t+273 \]
<p>より正確には \( T=t+273.15 \) であるが共通テストでは 273 を使う。目盛りの間隔が同じなので温度差は 1 ℃ と 1 K が等しい。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="セルシウス温度と絶対温度の目盛りの対応">
<defs></defs>
<line x1="220" y1="50" x2="220" y2="230" stroke="var(--ink)" stroke-width="2"/>
<text x="220" y="30" font-size="13" text-anchor="middle" fill="var(--muted)">セルシウス温度 t 〔℃〕</text>
<line x1="480" y1="50" x2="480" y2="230" stroke="var(--ink)" stroke-width="2"/>
<text x="480" y="30" font-size="13" text-anchor="middle" fill="var(--muted)">絶対温度 T 〔K〕</text>
<line x1="212" y1="230" x2="488" y2="230" stroke="var(--line)" stroke-dasharray="4 4"/>
<text x="204" y="234" font-size="13" text-anchor="end" fill="var(--cool)" font-weight="600">−273</text>
<text x="496" y="234" font-size="13" text-anchor="start" fill="var(--warm)" font-weight="600">0</text>
<text x="350" y="224" font-size="12" text-anchor="middle" fill="var(--sub)">絶対零度 これより低い温度はない</text>
<line x1="212" y1="105" x2="488" y2="105" stroke="var(--line)" stroke-dasharray="4 4"/>
<text x="204" y="109" font-size="13" text-anchor="end" fill="var(--cool)" font-weight="600">0</text>
<text x="496" y="109" font-size="13" text-anchor="start" fill="var(--warm)" font-weight="600">273</text>
<text x="350" y="99" font-size="12" text-anchor="middle" fill="var(--sub)">水が凍る</text>
<line x1="212" y1="59.2" x2="488" y2="59.2" stroke="var(--line)" stroke-dasharray="4 4"/>
<text x="204" y="63.2" font-size="13" text-anchor="end" fill="var(--cool)" font-weight="600">100</text>
<text x="496" y="63.2" font-size="13" text-anchor="start" fill="var(--warm)" font-weight="600">373</text>
<text x="350" y="53.2" font-size="12" text-anchor="middle" fill="var(--sub)">水が沸騰する 1気圧</text>
<text x="620" y="120" font-size="12.5" text-anchor="middle" fill="var(--ink)">目盛りの間隔は同じ</text>
<text x="620" y="140" font-size="13" text-anchor="middle" fill="var(--ink)" font-weight="600">T＝t＋273</text>
<text x="620" y="160" font-size="12.5" text-anchor="middle" fill="var(--ink)">温度差 1 ℃＝1 K</text>
</svg>
<figcaption>左がセルシウス温度で右が絶対温度である。2つの目盛りは原点だけが異なり間隔は同じである。そのため温度の値の換算には 273 を足すが温度差は換算しない。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 1</div>
<p>(1) 27 ℃ は何 K か。(2) 100 K は何 ℃ か。(3) 水の温度が 20 ℃ から 50 ℃ に上がった。温度の上昇は何 K か。</p>
<details open><summary>解き方</summary><div>(1) \( 27+273=300\ \mathrm{K} \) である。<br>(2) \( 100-273=-173 \) ℃ である。<br>(3) 温度差は目盛りの間隔が同じなので \( 50-20=30\ \mathrm{K} \) である。323 K と 293 K の差をとっても 30 K で一致する。</div></details></div>


<h2 id="s2">熱容量と比熱</h2>
<p>同じ熱量を加えても温度の上がり方は物体によって異なる。物体の温度を 1 K 上げるのに必要な熱量を<strong>熱容量</strong> \( C \) と呼ぶ。単位は \( \mathrm{J/K} \) である。物質 1 g の温度を 1 K 上げるのに必要な熱量を<strong>比熱</strong> \( c \) と呼ぶ。単位は \( \mathrm{J/(g\cdot K)} \) である。比熱は物質ごとに定まる値で熱容量は物体ごとに定まる値である。</p>
<p>質量 \( m \) の物体の温度を \( \Delta T \) だけ上げるのに必要な熱量は次の式である。</p>
\[ Q=mc\Delta T=C\Delta T,\qquad C=mc \]
<p>根拠は比例関係にある。1 g を 1 K 上げる熱量が \( c \) なので \( m \) グラムなら \( m \) 倍で \( \Delta T \) ケルビンなら \( \Delta T \) 倍になる。</p>
<div class="tb-tw"><table>
<thead><tr><th>物質</th><th>比熱 J/(g·K) 約25 ℃</th><th>同じ熱量を加えたときの温度上昇 水を1とする</th></tr></thead>
<tbody>
<tr><td>水</td><td>4.18</td><td>1</td></tr>
<tr><td>エタノール</td><td>2.44</td><td>約1.7</td></tr>
<tr><td>アルミニウム</td><td>0.897</td><td>約4.7</td></tr>
<tr><td>鉄</td><td>0.449</td><td>約9.3</td></tr>
<tr><td>銅</td><td>0.385</td><td>約10.9</td></tr>
</tbody></table></div>
<p>水の比熱は身近な物質の中で大きい。共通テストでは \( 4.2\ \mathrm{J/(g\cdot K)} \) が与えられることが多い。海に面した地域で昼夜の気温差が小さい理由の1つは海水の熱容量が大きく温度が変わりにくいからである。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>(1) 質量 500 g の水を 20 ℃ から 80 ℃ まで加熱するのに必要な熱量を求めよ。水の比熱は \( 4.2\ \mathrm{J/(g\cdot K)} \) とする。(2) 消費電力 1000 W のヒーターで質量 1.0 kg の水を 2.0 分間加熱した。発生した熱が全部水に移るとき水の温度上昇を求めよ。</p>
<details open><summary>解き方</summary><div>(1) \( Q=500\times4.2\times(80-20)=126000\ \mathrm{J} \) で \( 1.26\times10^5\ \mathrm{J} \) である。<br>(2) ヒーターの発熱量は仕事率と時間の積で \( 1000\times120=1.2\times10^5\ \mathrm{J} \) である。<br>\( 1.2\times10^5=1000\times4.2\times\Delta T \) から \( \Delta T\approx28.6\ \mathrm{K} \) で約 29 K である。</div></details></div>

<p>典型的な誤りは2つある。1つ目は質量を kg のまま比熱 \( \mathrm{J/(g\cdot K)} \) に掛ける誤りである。単位をそろえる。2つ目は熱容量と比熱を混同する誤りである。鉄の釘と鉄の鍋は比熱が同じで熱容量は鍋のほうが大きい。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">熱容量は時価総額で温度は株価である</p>
<p>同じ金額の買い注文でも時価総額の大きい銘柄ほど株価は動きにくい。同じ熱量でも熱容量の大きい物体ほど温度は上がりにくい。</p>
</aside>

<h2 id="s3">熱量の保存</h2>
<p>高温の物体と低温の物体を接触させ外部との熱のやり取りがないとする。熱は高温側から低温側へ移動し熱平衡に達すると止まる。エネルギーはこの過程で生じも消えもしないので次の関係が成り立つ。</p>
\[ \text{高温の物体が放出した熱量}=\text{低温の物体が受け取った熱量} \]
<p>これを<strong>熱量の保存</strong>と呼ぶ。<strong class="hit">式を立てるときは両辺とも「高い温度−低い温度」で温度差を正の値にする</strong>。こうすると符号の誤りを防げる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 275" role="img" aria-label="熱量の保存 2つの長方形の面積が等しい">
<defs></defs>
<line x1="60" y1="222" x2="680" y2="222" stroke="var(--line)" stroke-dasharray="3 4"/>
<text x="52" y="226" font-size="12" text-anchor="end" fill="var(--sub)">20 ℃</text>
<line x1="60" y1="180" x2="680" y2="180" stroke="var(--line)" stroke-dasharray="3 4"/>
<text x="52" y="184" font-size="12" text-anchor="end" fill="var(--sub)">35 ℃</text>
<line x1="60" y1="54" x2="680" y2="54" stroke="var(--line)" stroke-dasharray="3 4"/>
<text x="52" y="58" font-size="12" text-anchor="end" fill="var(--sub)">80 ℃</text>
<rect x="120" y="54" width="120" height="126" fill="var(--warm)" opacity="0.75"/>
<text x="180" y="46" font-size="12.5" text-anchor="middle" fill="var(--warm)" font-weight="600">高温の水 100 g</text>
<text x="180" y="121" font-size="12.5" text-anchor="middle" fill="#fff" font-weight="600">45 K 下がる</text>
<rect x="330" y="180" width="360" height="42" fill="var(--cool)" opacity="0.75"/>
<text x="510" y="240" font-size="12.5" text-anchor="middle" fill="var(--cool)" font-weight="600">低温の水 300 g が 15 K 上がる</text>
<text x="510" y="150" font-size="13" text-anchor="middle" fill="var(--ink)" font-weight="600">放出した熱量＝受け取った熱量＝18900 J</text>
<text x="510" y="168" font-size="12" text-anchor="middle" fill="var(--sub)">横幅は質量で高さは温度変化 面積が熱量に比例</text>
</svg>
<figcaption>80 ℃ の水 100 g と 20 ℃ の水 300 g を混ぜると 35 ℃ になる。横幅を質量に・高さを温度変化に比例させると長方形の面積が熱量に比例する。2つの長方形の面積は等しい。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 3</div>
<p>80 ℃ の水 100 g と 20 ℃ の水 300 g を混ぜた。外部との熱のやり取りはないとして熱平衡後の温度を求めよ。</p>
<details open><summary>解き方</summary><div>求める温度を \( t \) とする。高温の水が放出した熱量は \( 100\times4.2\times(80-t) \) である。<br>低温の水が受け取った熱量は \( 300\times4.2\times(t-20) \) である。<br>両者を等しいとおき 4.2 で割ると \( 100(80-t)=300(t-20) \) である。<br>\( 8000-100t=300t-6000 \) から \( 400t=14000 \) で \( t=35 \) ℃ である。</div></details></div>

<div class="ex"><div class="ex-h">例題 4</div>
<p>100 ℃ に熱した質量 200 g の鉄球を 20 ℃ の水 400 g に入れた。鉄の比熱を \( 0.45\ \mathrm{J/(g\cdot K)} \)・水の比熱を \( 4.2\ \mathrm{J/(g\cdot K)} \) とし容器の熱容量と外部への熱の移動は無視する。熱平衡後の温度を求めよ。</p>
<details open><summary>解き方</summary><div>鉄が放出した熱量は \( 200\times0.45\times(100-t)=90(100-t) \) である。<br>水が受け取った熱量は \( 400\times4.2\times(t-20)=1680(t-20) \) である。<br>\( 9000-90t=1680t-33600 \) から \( 1770t=42600 \) で \( t\approx24.1 \) ℃ である。<br>鉄の温度は 76 K 近く下がるが水は約 4 K しか上がらない。水の熱容量 1680 J/K が鉄の 90 J/K の約19倍だからである。</div></details></div>

<p>容器や温度計の熱容量が与えられた場合は容器も受け取る側に加える。容器の熱容量を \( C \) とすると受け取る熱量は \( (m_\text{水}c_\text{水}+C)\Delta T \) である。この方法で未知の金属の比熱を測る実験を熱量計の実験と呼ぶ。</p>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">熱量の保存は仕訳である。借方と貸方は必ず一致する</p>
<p>高温側の熱の減少と低温側の熱の増加は1件の取引の両面である。外部との出入りがなければ合計は0である。</p>
</aside>

<h2 id="s4">物質の三態と潜熱</h2>
<p>物質は温度と圧力に応じて固体・液体・気体の3つの状態をとる。これを<strong>物質の三態</strong>と呼ぶ。固体では粒子が決まった位置の周りで振動し液体では粒子が互いに位置を変えながら引き合い気体では粒子が自由に飛び回る。固体が液体になる変化を融解・液体が気体になる変化を蒸発と呼び液体の内部からも気体が生じる現象を沸騰と呼ぶ。</p>
<p>氷を一定の割合で加熱すると温度は上がり続けるのではなく 0 ℃ と 100 ℃ で一定になる区間がある。この区間で加えた熱は温度を上げるのではなく粒子どうしの結びつきを断ち切る仕事に使われる。状態変化のために使われる熱を<strong>潜熱</strong>と呼ぶ。1 g の固体を融解させる熱量を<strong>融解熱</strong>・1 g の液体を蒸発させる熱量を<strong>蒸発熱</strong>と呼ぶ。水の融解熱は約 334 J/g で蒸発熱は 100 ℃ で約 2257 J/g である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="氷100 gを一定の割合で加熱したときの温度変化">
<defs><marker id="ah05a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>
<line x1="80" y1="230" x2="618" y2="230" stroke="var(--ink)" stroke-width="1.3" marker-end="url(#ah05a)"/>
<line x1="80" y1="230" x2="80" y2="22" stroke="var(--ink)" stroke-width="1.3" marker-end="url(#ah05a)"/>
<line x1="80" y1="230" x2="80" y2="235" stroke="var(--ink)"/>
<text x="80" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">0</text>
<line x1="161.2" y1="230" x2="161.2" y2="235" stroke="var(--ink)"/>
<text x="161.2" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">50</text>
<line x1="242.5" y1="230" x2="242.5" y2="235" stroke="var(--ink)"/>
<text x="242.5" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">100</text>
<line x1="323.8" y1="230" x2="323.8" y2="235" stroke="var(--ink)"/>
<text x="323.8" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">150</text>
<line x1="405" y1="230" x2="405" y2="235" stroke="var(--ink)"/>
<text x="405" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">200</text>
<line x1="486.2" y1="230" x2="486.2" y2="235" stroke="var(--ink)"/>
<text x="486.2" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">250</text>
<line x1="567.5" y1="230" x2="567.5" y2="235" stroke="var(--ink)"/>
<text x="567.5" y="249" font-size="12" text-anchor="middle" fill="var(--sub)">300</text>
<line x1="75" y1="217.3" x2="80" y2="217.3" stroke="var(--ink)"/>
<line x1="80" y1="217.3" x2="600" y2="217.3" stroke="var(--line)" stroke-dasharray="2 4"/>
<text x="72" y="221.3" font-size="12" text-anchor="end" fill="var(--sub)">-20</text>
<line x1="75" y1="192" x2="80" y2="192" stroke="var(--ink)"/>
<line x1="80" y1="192" x2="600" y2="192" stroke="var(--line)" stroke-dasharray="2 4"/>
<text x="72" y="196" font-size="12" text-anchor="end" fill="var(--sub)">0</text>
<line x1="75" y1="128.7" x2="80" y2="128.7" stroke="var(--ink)"/>
<line x1="80" y1="128.7" x2="600" y2="128.7" stroke="var(--line)" stroke-dasharray="2 4"/>
<text x="72" y="132.7" font-size="12" text-anchor="end" fill="var(--sub)">50</text>
<line x1="75" y1="65.3" x2="80" y2="65.3" stroke="var(--ink)"/>
<line x1="80" y1="65.3" x2="600" y2="65.3" stroke="var(--line)" stroke-dasharray="2 4"/>
<text x="72" y="69.3" font-size="12" text-anchor="end" fill="var(--sub)">100</text>
<text x="620" y="234" font-size="12" text-anchor="start" fill="var(--muted)">加えた熱量 〔kJ〕</text>
<text x="86" y="28" font-size="12" text-anchor="start" fill="var(--muted)">温度 〔℃〕</text>
<polyline points="80,217.3 86.8,192 141.1,192 209.3,65.3 576.1,65.3 579.4,52.7" fill="none" stroke="var(--warm)" stroke-width="2.8"/>
<text x="126" y="207" font-size="12" text-anchor="middle" fill="var(--ink)">融解 33.4 kJ</text>
<text x="93" y="225" font-size="12" text-anchor="start" fill="var(--ink)">氷の温度上昇 4.2 kJ</text>
<text x="189.2" y="132.7" font-size="12" text-anchor="start" fill="var(--ink)">水の温度上昇 42.0 kJ</text>
<text x="392.7" y="55.3" font-size="12" text-anchor="middle" fill="var(--ink)">沸騰 225.7 kJ</text>
<text x="575.4" y="44.7" font-size="12" text-anchor="end" fill="var(--sub)">水蒸気</text>
</svg>
<figcaption>−20 ℃ の氷 100 g を1気圧で一定の割合で加熱した場合の計算値である。横軸は加えた熱量で加熱時間に比例する。氷の比熱は 2.1・水の比熱は 4.2・水蒸気の比熱は 2.0 J/(g·K) とした。沸騰に要する熱量は水を 0 ℃ から 100 ℃ まで上げる熱量の5倍を超える。</figcaption>
</figure>

<p>状態変化の熱量は温度変化を伴わないので \( Q=mc\Delta T \) では計算できない。融解熱を \( L \) とすると \( Q=mL \) である。逆向きの変化では同じ量の熱を放出する。水蒸気が水になる凝縮では蒸発熱と同じ熱量を放出する。100 ℃ の水蒸気によるやけどが 100 ℃ の湯より重くなりやすいのはこの放出熱のためである。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>0 ℃ の氷 50 g を全部とかして 20 ℃ の水にするのに必要な熱量を求めよ。氷の融解熱を 334 J/g・水の比熱を \( 4.2\ \mathrm{J/(g\cdot K)} \) とする。</p>
<details open><summary>解き方</summary><div>融解に要する熱量は \( 50\times334=16700\ \mathrm{J} \) である。<br>0 ℃ の水を 20 ℃ にする熱量は \( 50\times4.2\times20=4200\ \mathrm{J} \) である。<br>合計は \( 16700+4200=20900\ \mathrm{J} \) で約 \( 2.1\times10^4\ \mathrm{J} \) である。</div></details></div>

<p>典型的な誤りは融解の区間を飛ばして \( 50\times4.2\times20 \) だけを計算する誤りである。グラフの水平な区間ごとに熱量を分けて足す。</p>

<aside class="an an-biz"><b>スタートアップで言えば</b>
<p class="an-h">潜熱は売上が横ばいのピボット期間の投資である</p>
<p>資金を投じても売上という温度は動かず事業の構造の組み替えに使われる。組み替えが終わって初めて温度が再び上がる。</p>
</aside>

<h2 id="s5">内部エネルギーと熱力学第1法則</h2>
<p>物体をつくる粒子は熱運動による運動エネルギーと粒子間の力による位置エネルギーをもつ。物体全体についてこれらを合計したものを<strong>内部エネルギー</strong> \( U \) と呼ぶ。温度が高いほど熱運動の運動エネルギーが大きいので内部エネルギーは大きい。潜熱を受け取って融解するときは温度が一定でも粒子間の位置エネルギーが増え内部エネルギーは増える。</p>
<p>内部エネルギーを変える手段は2つある。熱を与える方法と仕事をする方法である。1840年代にジュールはおもりの落下で水中の羽根車を回転させて水の温度を上げる実験を行った。仕事だけで水の温度が上がり一定の仕事が一定の熱量に相当することを示した。熱量の単位にカロリーを使っていた時代には 1 cal が約 4.19 J に相当する値として扱われた。これを熱の仕事当量と呼ぶ。</p>
<p>物体が外から受け取った熱を \( Q \)・外からされた仕事を \( W \) とすると内部エネルギーの変化 \( \Delta U \) は次の式で表す。</p>
\[ \Delta U=Q+W \]
<p>これを<strong>熱力学第1法則</strong>と呼ぶ。熱と仕事を含めたエネルギー保存則である。<strong class="hit">符号は物体に入る向きを正とする</strong>。熱を放出したら \( Q\lt0 \) で物体が外へ仕事をしたら \( W\lt0 \) である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="ピストンの中の気体に熱を与え気体が膨張する">
<defs><marker id="ah05b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>
<path d="M120 60 L120 220 L400 220 L400 60" fill="none" stroke="var(--ink)" stroke-width="3"/>
<rect x="124" y="120" width="272" height="96" fill="var(--warm)" opacity="0.22"/>
<rect x="124" y="100" width="272" height="18" fill="var(--sub)"/>
<rect x="250" y="40" width="20" height="60" fill="var(--sub)"/>
<circle cx="160" cy="150" r="5" fill="var(--warm)"/>
<circle cx="220" cy="190" r="5" fill="var(--warm)"/>
<circle cx="300" cy="145" r="5" fill="var(--warm)"/>
<circle cx="350" cy="195" r="5" fill="var(--warm)"/>
<circle cx="190" cy="175" r="5" fill="var(--warm)"/>
<circle cx="330" cy="170" r="5" fill="var(--warm)"/>
<text x="260" y="210" font-size="12.5" text-anchor="middle" fill="var(--ink)" font-weight="600">気体 内部エネルギー U</text>
<line x1="260" y1="240" x2="260" y2="226" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah05b)"/>
<text x="260" y="258" font-size="12.5" text-anchor="middle" fill="var(--accent)" font-weight="600">熱 Q を与える</text>
<line x1="300" y1="90" x2="300" y2="40" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah05b)"/>
<text x="310" y="58" font-size="12.5" text-anchor="start" fill="var(--cool)" font-weight="600">気体が外へ仕事をする</text>
<text x="440" y="100" font-size="15" text-anchor="start" fill="var(--ink)" font-weight="700">ΔU＝Q＋W</text>
<text x="440" y="126" font-size="12.5" text-anchor="start" fill="var(--sub)">W は気体が外から</text>
<text x="440" y="144" font-size="12.5" text-anchor="start" fill="var(--sub)">された仕事</text>
<text x="440" y="172" font-size="12.5" text-anchor="start" fill="var(--sub)">膨張するときは W＜0</text>
<text x="440" y="190" font-size="12.5" text-anchor="start" fill="var(--sub)">圧縮されるときは W＞0</text>
</svg>
<figcaption>シリンダー内の気体に熱 \(Q\) を与えると気体は温度が上がるとともに膨張してピストンを押し上げる。外へした仕事の分だけ外からされた仕事 \(W\) は負になる。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 6</div>
<p>(1) シリンダー内の気体に 500 J の熱を与えると気体は膨張して外へ 200 J の仕事をした。気体の内部エネルギーの変化を求めよ。(2) 外部と熱のやり取りがない状態で気体を圧縮し 50 J の仕事をした。気体の内部エネルギーの変化と温度の変化の向きを答えよ。</p>
<details open><summary>解き方</summary><div>(1) \( Q=+500\ \mathrm{J} \) で外へ仕事をしたので \( W=-200\ \mathrm{J} \) である。<br>\( \Delta U=500+(-200)=+300\ \mathrm{J} \) で内部エネルギーは 300 J 増える。<br>(2) \( Q=0 \) で \( W=+50\ \mathrm{J} \) なので \( \Delta U=+50\ \mathrm{J} \) である。内部エネルギーが増え温度は上がる。自転車の空気入れの筒が熱くなる現象がこれである。</div></details></div>

<p>典型的な誤りは \( W \) を「気体がした仕事」と読み替えて \( \Delta U=Q+W \) に代入する誤りである。教科書によっては気体がした仕事 \( W' \) を使い \( Q=\Delta U+W' \) と書く。どちらの式も同じ内容で \( W'=-W \) である。問題文がどちらの仕事を指すかを確認する。</p>

<h2 id="s6">不可逆変化と熱機関</h2>
<p>熱いコーヒーを放置すると冷めて室温になる。室温のコーヒーが周囲から熱を集めて自然に熱くなることはない。高温から低温へ熱が移る変化は一方向にしか自然に進まない。外から何の変化も加えずには元に戻らない変化を<strong>不可逆変化</strong>と呼ぶ。熱の移動・摩擦による発熱・異なる液体の混合・気体の拡散はどれも不可逆変化である。</p>
<p>摩擦で運動エネルギーはすべて熱に変わる。しかし逆向きに熱を受け取ってそのすべてを仕事に変え続ける装置はつくれない。<strong class="hit">熱は自然には低温の物体から高温の物体へ移らない</strong>。これを熱力学第2法則と呼び不可逆変化の向きを定める法則である。学習指導要領では熱力学第2法則と熱機関の熱効率は物理で扱う内容であり物理基礎では熱現象の不可逆性に触れる。この節の残りは物理の先取りである。</p>
<h3>熱機関と熱効率</h3>
<p>熱を受け取って仕事をくり返し行う装置を<strong>熱機関</strong>と呼ぶ。ガソリンエンジン・蒸気タービン・ジェットエンジンが例である。熱機関は高温の熱源から熱量 \( Q_1 \) を受け取り外へ仕事 \( W \) をして残りの熱量 \( Q_2 \) を低温の熱源へ放出する。1サイクルで元の状態に戻るので内部エネルギーの変化は0で \( W=Q_1-Q_2 \) である。受け取った熱量のうち仕事に変わった割合を<strong>熱効率</strong> \( e \) と呼ぶ。</p>
\[ e=\frac{W}{Q_1}=\frac{Q_1-Q_2}{Q_1} \]
<p>熱力学第2法則により \( Q_2 \) を0にすることはできない。したがって熱効率は必ず1未満である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 285" role="img" aria-label="熱機関は高温から受け取った熱の一部だけを仕事に変える">
<defs></defs>
<rect x="40" y="40" width="160" height="50" fill="var(--warm)"/>
<text x="120" y="70" font-size="13" text-anchor="middle" fill="#fff" font-weight="600">高温の熱源</text>
<rect x="40" y="200" width="160" height="50" fill="var(--cool)"/>
<text x="120" y="230" font-size="13" text-anchor="middle" fill="#fff" font-weight="600">低温の熱源</text>
<rect x="60" y="90" width="120" height="44" fill="var(--warm)" opacity="0.35"/>
<rect x="60" y="176" width="84" height="24" fill="var(--cool)" opacity="0.35"/>
<path d="M180 137 L380 137 L380 129 L410 155 L380 181 L380 173 L180 173 Z" fill="var(--accent)" opacity="0.6"/>
<rect x="60" y="134" width="120" height="42" fill="var(--dim)" stroke="var(--ink)"/>
<text x="120" y="160" font-size="13" text-anchor="middle" fill="var(--ink)" font-weight="600">熱機関</text>
<text x="220" y="115" font-size="12.5" text-anchor="start" fill="var(--warm)" font-weight="600">Q₁＝2000 J を受け取る</text>
<text x="420" y="160" font-size="12.5" text-anchor="start" fill="var(--accent)" font-weight="600">W＝600 J の仕事</text>
<text x="152" y="193" font-size="12.5" text-anchor="start" fill="var(--cool)" font-weight="600">Q₂＝1400 J を放出する</text>
<text x="570" y="60" font-size="13" text-anchor="start" fill="var(--ink)" font-weight="600">熱効率</text>
<text x="570" y="84" font-size="13" text-anchor="start" fill="var(--ink)">e＝W／Q₁</text>
<text x="570" y="108" font-size="13" text-anchor="start" fill="var(--ink)">＝600／2000＝0.30</text>
<text x="570" y="132" font-size="12" text-anchor="start" fill="var(--sub)">帯の幅は熱量に比例</text>
</svg>
<figcaption>高温の熱源から 2000 J を受け取り 600 J の仕事をして 1400 J を低温の熱源へ放出する熱機関である。帯の幅は熱量に比例させた。熱効率は 0.30 である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 7</div>
<p>熱機関が1サイクルで高温の熱源から 2000 J の熱を受け取り低温の熱源へ 1400 J の熱を放出した。この熱機関がした仕事と熱効率を求めよ。</p>
<details open><summary>解き方</summary><div>仕事は \( W=Q_1-Q_2=2000-1400=600\ \mathrm{J} \) である。<br>熱効率は \( e=600\div2000=0.30 \) で 30% である。</div></details></div>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">混ざった湯と水は口にした言葉と同じで自然には分かれない</p>
<p>混合も熱の移動も逆向きには自然に進まない。元に戻すには外から仕事を加える別の手間が要る。</p>
</aside>

<h2 id="s7">エネルギーの変換と保存</h2>
<p>エネルギーには力学的エネルギー・熱・電気エネルギー・光のエネルギー・化学エネルギー・核エネルギーなどの形態がある。形態は互いに変換でき変換の前後で総量は変わらない。これを<strong>エネルギー保存則</strong>と呼ぶ。第4章の力学的エネルギー保存則はこのうち力学的エネルギーだけを扱った特別な場合である。</p>
<p>火力発電所は燃料の化学エネルギーを熱に変え熱で水蒸気をつくりタービンを回転させて電気エネルギーを得る。熱機関を含むので熱効率は1未満である。ガスタービンの排熱で蒸気タービンも駆動するコンバインドサイクル発電では燃料の低位発熱量を基準とした発電効率が約 60% に達する設備もある。エネルギーの総量は保存されるが変換のたびに一部が利用しにくい低温の熱になる。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>東京電力は2016年1月の発表で川崎火力発電所2号系列第2軸の発電効率を約61%とした。燃焼温度 1600 ℃ 級のガスタービンを使う設備で同社の計画発表はこの値を低位発熱量基準とする。同社は別の発表で低位発熱量基準の59%が高位発熱量基準では53%になると注記している。</p>
</aside>

<h2 id="s8">確認問題</h2>
<p>水の比熱は \( 4.2\ \mathrm{J/(g\cdot K)} \)・氷の融解熱は 334 J/g とし外部との熱のやり取りは問題文にない限り無視する。</p>
<div class="qz"><div class="qz-h">問1 ・ 絶対温度</div>
<p class="qz-q">温度が 27 ℃ から 77 ℃ に上がった。このときの絶対温度の値と温度上昇の組み合わせとして正しいものを1つ選べ。</p>
<ol><li>350 K になり 50 K 上がった</li><li>350 K になり 323 K 上がった</li><li>77 K になり 50 K 上がった</li><li>323 K になり 50 K 上がった</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。\( 77+273=350\ \mathrm{K} \) である。温度差は目盛りの間隔が同じなので換算せず \( 77-27=50\ \mathrm{K} \) である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 熱容量</div>
<p class="qz-q">質量 200 g の鉄球の温度を 20 K 上げるのに必要な熱量は何 J か。鉄の比熱を \( 0.45\ \mathrm{J/(g\cdot K)} \) とする。</p>
<details><summary>解答と解説</summary><div>正解は 1800 J である。熱容量は \( 200\times0.45=90\ \mathrm{J/K} \) で熱量は \( 90\times20=1800\ \mathrm{J} \) である。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 混合</div>
<p class="qz-q">60 ℃ の水 200 g と 30 ℃ の水 100 g を混ぜた。熱平衡後の温度として正しいものを1つ選べ。</p>
<ol><li>40 ℃</li><li>45 ℃</li><li>50 ℃</li><li>55 ℃</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\( 200(60-t)=100(t-30) \) から \( 12000-200t=100t-3000 \) で \( 300t=15000 \) となり \( t=50 \) ℃ である。質量が2倍の高温の水に近い温度になる。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 比熱の測定</div>
<p class="qz-q">100 ℃ に熱した質量 100 g の金属球を 20 ℃ の水 200 g に入れると全体が 24 ℃ になった。容器の熱容量は無視する。金属の比熱として最も近いものを1つ選べ。</p>
<ol><li>0.11 J/(g·K)</li><li>0.24 J/(g·K)</li><li>0.44 J/(g·K)</li><li>0.88 J/(g·K)</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。水が受け取った熱量は \( 200\times4.2\times4=3360\ \mathrm{J} \) である。金属が放出した熱量は \( 100\times c\times76 \) である。\( 7600c=3360 \) から \( c\approx0.44 \) である。この値は鉄の比熱に近い。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 潜熱を含む混合</div>
<p class="qz-q">40 ℃ の水 100 g に 0 ℃ の氷 10 g を入れた。氷がすべてとけた後の熱平衡の温度は何 ℃ か。整数で答えよ。</p>
<details><summary>解答と解説</summary><div>正解は 29 ℃ である。氷が受け取る熱量は融解の \( 10\times334=3340\ \mathrm{J} \) ととけた水を \( t \) まで上げる \( 10\times4.2\times t \) の和である。湯が放出する熱量は \( 100\times4.2\times(40-t) \) である。\( 42t+3340=16800-420t \) から \( 462t=13460 \) で \( t\approx29.1 \) ℃ である。融解熱を入れ忘れると \( t\approx36.4 \) ℃ になる。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 熱力学第1法則</div>
<p class="qz-q">気体に 300 J の熱を与えると気体は膨張して外へ 120 J の仕事をした。気体の内部エネルギーの変化として正しいものを1つ選べ。</p>
<ol><li>420 J 増加</li><li>180 J 増加</li><li>180 J 減少</li><li>420 J 減少</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( Q=+300\ \mathrm{J} \) で外からされた仕事は \( W=-120\ \mathrm{J} \) である。\( \Delta U=300-120=+180\ \mathrm{J} \) である。1 は仕事の符号を誤った値である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 熱効率</div>
<p class="qz-q">熱効率 0.25 の熱機関が1サイクルで高温の熱源から 4000 J の熱を受け取る。低温の熱源へ放出する熱量は何 J か。</p>
<details><summary>解答と解説</summary><div>正解は 3000 J である。仕事は \( W=0.25\times4000=1000\ \mathrm{J} \) である。放出する熱量は \( Q_2=Q_1-W=4000-1000=3000\ \mathrm{J} \) である。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 不可逆変化</div>
<p class="qz-q">熱と仕事に関する記述として正しいものを1つ選べ。</p>
<ol><li>熱機関の熱効率は工夫すれば1にできる</li><li>熱は外から仕事をしなくても低温の物体から高温の物体へ移る</li><li>動摩擦力によって運動エネルギーが熱に変わる変化は不可逆変化である</li><li>温度が高い物体ほど多くの熱をもっている</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。摩擦による発熱は逆向きに自然には進まない。1 は熱力学第2法則に反し 2 も同じ法則に反する。4 は温度と熱を混同している。物体がもつのは内部エネルギーで熱は移動するエネルギーである。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
温度は熱運動の激しさで絶対温度は \( T=t+273 \) である。温度差は 1 ℃＝1 K である。<br>
熱量は \( Q=mc\Delta T=C\Delta T \) で熱容量は \( C=mc \) である。<br>
混合では放出した熱量と受け取った熱量が等しい。温度差は正の値で式を立てる。<br>
状態変化では温度が一定のまま潜熱が出入りし \( Q=mL \) で計算する。<br>
熱力学第1法則は \( \Delta U=Q+W \) で物体に入る向きを正とする。<br>
熱機関の熱効率は \( e=W/Q_1=(Q_1-Q_2)/Q_1 \) で必ず1未満である。</div>

<h2 id="s10">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>熱力学第1法則の仕事は、物体がされた仕事と物体がした仕事のどちらで表すべきか。</strong> 本章は外からされた仕事 \( W \) を使い \( \Delta U=Q+W \) と書いた。気体がした仕事 \( W' \) を使い \( Q=\Delta U+W' \) と書く教科書もあり、どちらの式も同じ内容で正の向きの定め方だけが異なる。</li>
<li class="tb-vnote"><strong>発電効率は、燃料の低位発熱量と高位発熱量のどちらを基準に示すべきか。</strong> 本文の約61%は低位発熱量を基準とした値である。同じ電力会社は低位発熱量基準の59%が高位発熱量基準では53%になると注記しており、基準の選び方で同じ設備の数値が異なる。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>大学入試センター 試験問題等 — https://www.dnc.ac.jp/kyotsu/kakomondai/</li>
<li>Absolute zero — Wikipedia — https://en.wikipedia.org/wiki/Absolute_zero</li>
<li>Specific heat capacity — Wikipedia — https://en.wikipedia.org/wiki/Specific_heat_capacity</li>
<li>Enthalpy of fusion — Wikipedia — https://en.wikipedia.org/wiki/Enthalpy_of_fusion</li>
<li>Enthalpy of vaporization — Wikipedia — https://en.wikipedia.org/wiki/Enthalpy_of_vaporization</li>
<li>Mechanical equivalent of heat — Wikipedia — https://en.wikipedia.org/wiki/Mechanical_equivalent_of_heat</li>
<li>Brownian motion — Wikipedia — https://en.wikipedia.org/wiki/Brownian_motion</li>
<li>東京電力 川崎火力発電所2号系列第2軸の営業運転開始について 2016年 — https://www.tepco.co.jp/cc/press/2016/1266497_7738.html</li>
<li>東京電力 プレスリリース 2008年7月29日 富津火力発電所4号系列 — https://www.tepco.co.jp/cc/press/08072901-j.html</li>
<li>東京電力 プレスリリース 2009年9月3日 川崎火力発電所2号系列2軸・3軸の計画 — https://www.tepco.co.jp/cc/press/09090302-j.html</li>
<li>わかりやすい高校物理の部屋 熱力学第1法則 — https://wakariyasui.sakura.ne.jp/p/therm/kitai/neturikiiti.html</li>
<li>東海学院大学 入学前教育 物理基礎 第6回 — https://tokaigakuin-u.ac.jp/juken/sougoufukushi/物理基礎_第6回.pdf</li>
<li>Table of specific heat capacities — Wikipedia — https://en.wikipedia.org/wiki/Table_of_specific_heat_capacities</li>
</ol>
