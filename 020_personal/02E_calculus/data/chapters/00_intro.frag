<!--meta
{"chapter": 0, "part": "序章", "title": "微分積分の地図", "thesis": "微分は変化の速さを求める操作で積分は変化を積み重ねる操作である。2つは互いに逆の操作である。この本は数学Ⅰの2次関数から数学Ⅲの積分法の応用まで学習指導要領の順序で積み上げる。", "verify": {"date": "2026-10-15", "checked": 34, "match": 31, "fixed": 2, "unconfirmed": 1}}
-->
<p>この本は高校数学の微分と積分を1冊で積み上げる。微分積分は1つの科目にまとまっていない。数学Ⅰ・数学Ⅱ・数学B・数学Ⅲの4科目に分かれて置かれている。どの章がどの科目に属しどの順で学ぶかを最初に示す。</p>
<p>序章で扱う論点は3つである。微分と積分がそれぞれ何を求める操作か・学習指導要領と共通テストでの位置・2つの操作が逆の関係にある理由である。計算の技術は第1章から積み上げる。</p>

<h2 id="s1">微分積分が扱う2つの問い</h2>
<p>微分積分は次の2つの問いに答える数学である。</p>
<div class="tb-vs">
<div><h5>微分の問い</h5><ul>
<li>ある瞬間に量がどれだけの速さで変化しているか</li>
<li>例 時刻2秒の瞬間の車の速度</li>
<li>グラフでは接線の傾き</li>
</ul></div>
<div><h5>積分の問い</h5><ul>
<li>変化を積み重ねると全体でどれだけになるか</li>
<li>例 速度の記録から求める走行距離</li>
<li>グラフでは曲線と軸に囲まれた面積</li>
</ul></div>
</div>
<p>速さが一定なら2つの問いは小学校の算数で答えられる。時速60 km で2時間走れば距離は120 km である。逆に2時間で120 km 進んだなら速さは時速60 km である。<strong class="hit">微分積分が必要になるのは速さが刻々と変わる場合である</strong>。速度が変わり続けると距離は単純な掛け算で求められない。位置が曲線を描いて変わると速さは単純な割り算で求められない。</p>
<p>この困難を解く手順は共通している。変化を細かい区間に分ける。各区間では速さを一定とみなして計算する。区間を限りなく細かくしたときの値を求める。この「限りなく細かくする」操作が第9章で扱う<strong>極限</strong>である。微分も積分も極限の上に成り立っている。</p>

<div class="ex"><div class="ex-h">例題 1</div>
<p>ある車の速度を1秒ごとに記録すると 0秒から1秒は秒速2 m・1秒から2秒は秒速4 m・2秒から3秒は秒速6 m であった。各区間で速度が一定だったとみなすと3秒間に進んだ距離は何 m か。</p>
<details open><summary>解き方</summary><div>手順1 各区間の距離は速度×時間である。<br>手順2 2×1＋4×1＋6×1 を計算する。<br>手順3 合計は 12 である。<br>答え 12 m。速度が区間の途中でも変わる場合は区間を細かくして同じ計算を繰り返す。これが積分の考え方である。</div></details></div>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">積分は損益計算書から貸借対照表の残高を作る操作である</p>
<p>毎期の利益というフローを積み上げると利益剰余金というストックになる。ストックの増え方からフローを戻すのが微分である。</p>
</aside>

<h2 id="s2">学習指導要領での位置と本書の順序</h2>
<p>高校の数学は平成30年告示の学習指導要領に従う。2022年度の入学生から適用されている。数学の科目は数学Ⅰ・数学Ⅱ・数学Ⅲ・数学A・数学B・数学Cの6つである。微分積分に関わる内容は次の4科目に分かれている。</p>
<div class="tb-tw"><table>
<thead><tr><th>科目</th><th>微分積分に関わる内容</th><th>本書の章</th></tr></thead>
<tbody>
<tr><td>数学Ⅰ</td><td>2次関数</td><td>第1章</td></tr>
<tr><td>数学Ⅱ</td><td>指数関数・対数関数 ／ 三角関数 ／ 微分・積分の考え</td><td>第2章〜第7章</td></tr>
<tr><td>数学B</td><td>数列</td><td>第8章</td></tr>
<tr><td>数学Ⅲ</td><td>極限 ／ 微分法 ／ 積分法</td><td>第9章〜第13章</td></tr>
</tbody></table></div>

<figure class="tb-fig">
<svg viewBox="0 0 720 292" role="img" aria-label="学習指導要領の科目とこの本の章の対応">
  <rect x="15" y="40" width="165" height="170" rx="8" fill="var(--dim)" stroke="var(--warm)" stroke-width="1.3"/>
  <text x="97" y="64" font-size="15" fill="var(--warm)" text-anchor="middle" font-weight="600">数学Ⅰ</text>
  <text x="27" y="92" font-size="13" fill="var(--ink)" text-anchor="start">1 関数と2次関数</text>
  <rect x="190" y="40" width="165" height="170" rx="8" fill="var(--dim)" stroke="var(--warm)" stroke-width="1.3"/>
  <text x="272" y="64" font-size="15" fill="var(--warm)" text-anchor="middle" font-weight="600">数学Ⅱ</text>
  <text x="202" y="92" font-size="13" fill="var(--ink)" text-anchor="start">2 指数関数</text>
  <text x="202" y="112" font-size="13" fill="var(--ink)" text-anchor="start">3 対数関数</text>
  <text x="202" y="132" font-size="13" fill="var(--ink)" text-anchor="start">4 三角関数</text>
  <text x="202" y="152" font-size="13" fill="var(--ink)" text-anchor="start">5 微分係数と導関数</text>
  <text x="202" y="172" font-size="13" fill="var(--ink)" text-anchor="start">6 導関数の応用</text>
  <text x="202" y="192" font-size="13" fill="var(--ink)" text-anchor="start">7 積分と面積</text>
  <rect x="365" y="40" width="165" height="170" rx="8" fill="var(--dim)" stroke="var(--warm)" stroke-width="1.3"/>
  <text x="447" y="64" font-size="15" fill="var(--warm)" text-anchor="middle" font-weight="600">数学B</text>
  <text x="377" y="92" font-size="13" fill="var(--ink)" text-anchor="start">8 数列と数学的帰納法</text>
  <rect x="540" y="40" width="165" height="170" rx="8" fill="var(--dim)" stroke="var(--cool)" stroke-width="1.3"/>
  <text x="622" y="64" font-size="15" fill="var(--cool)" text-anchor="middle" font-weight="600">数学Ⅲ</text>
  <text x="552" y="92" font-size="13" fill="var(--ink)" text-anchor="start">9 極限</text>
  <text x="552" y="112" font-size="13" fill="var(--ink)" text-anchor="start">10 微分法</text>
  <text x="552" y="132" font-size="13" fill="var(--ink)" text-anchor="start">11 微分法の応用</text>
  <text x="552" y="152" font-size="13" fill="var(--ink)" text-anchor="start">12 積分法</text>
  <text x="552" y="172" font-size="13" fill="var(--ink)" text-anchor="start">13 積分法の応用</text>
  <path d="M15 228 V238 H530 V228" fill="none" stroke="var(--warm)" stroke-width="1.5"/>
  <text x="272" y="258" font-size="13" fill="var(--warm)" text-anchor="middle">共通テストの範囲 第1章は数学① ／ 第2〜8章は数学②</text>
  <path d="M540 228 V238 H705 V228" fill="none" stroke="var(--cool)" stroke-width="1.5"/>
  <text x="622" y="258" font-size="13" fill="var(--cool)" text-anchor="middle">共通テストの範囲外</text>
  <text x="622" y="278" font-size="12" fill="var(--sub)" text-anchor="middle">個別試験で出題される</text>
  <text x="15" y="24" font-size="13" fill="var(--muted)" text-anchor="start">科目と章の対応 左から右へ学ぶ</text>
</svg>
<figcaption>科目と本書の章の対応である。数学Ⅰから数学Bまでの範囲は共通テストに出題される。数学Ⅲは共通テストの出題範囲に含まれない。</figcaption>
</figure>

<p>順序には理由がある。第1章の2次関数で関数とグラフの言葉を整える。第2章から第4章では指数関数・対数関数・三角関数を学ぶ。これらは後に微分と積分の対象になる関数である。</p>
<p>数学Ⅱの微分と積分は第5章から第7章で扱う。<strong class="hit">数学Ⅱで微分と積分の対象になる関数は整式すなわち多項式の関数に限られる</strong>。\( x^3-3x \) のような関数である。指数関数や三角関数を微分するのは数学Ⅲの第10章である。数学Ⅱではまず計算しやすい関数で考え方を固める。</p>
<p>第8章の数列は数学Bの内容である。数列の極限は第9章の出発点になる。和の記号 \( \sum \) は第12章で面積を細い長方形の和の極限として表す区分求積法に使う。第9章以降の数学Ⅲで極限を厳密に扱い微分と積分をすべての基本的な関数に広げる。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">数学Ⅱの微分は軟式で数学Ⅲの微分は硬式である</p>
<p>ルールは同じで扱う球が異なる。数学Ⅱは多項式だけを扱い数学Ⅲで指数関数と三角関数まで広げる。</p>
</aside>

<h2 id="s3">共通テストでの出題</h2>
<p>大学入学共通テストの数学は2つの試験に分かれる。数学①は「数学Ⅰ・数学A」で数学②は「数学Ⅱ・数学B・数学C」である。どちらも試験時間70分で100点満点である。2025年1月の試験から新しい学習指導要領に対応した。</p>
<div class="tb-kpi">
<div><b>70<small>分</small></b><i>数学②の試験時間</i><em>選択が3問になり10分延長</em></div>
<div><b>52<small>点</small></b><i>数学Ⅱの必答3問の配点</i><em>令和7年度本試験 15＋15＋22</em></div>
<div><b>3<small>問</small></b><i>数学B・Cから選ぶ問題数</i><em>4問から選択 各16点</em></div>
</div>
<p>令和7年度の本試験で数学②の大問は7つあった。構成は次のとおりである。</p>
<div class="tb-tw"><table>
<thead><tr><th>大問</th><th>内容</th><th>配点</th><th>本書の章</th></tr></thead>
<tbody>
<tr><td>第1問 必答</td><td>三角関数</td><td>15</td><td>第4章</td></tr>
<tr><td>第2問 必答</td><td>指数関数・対数関数</td><td>15</td><td>第2章 ／ 第3章</td></tr>
<tr><td>第3問 必答</td><td>微分・積分</td><td>22</td><td>第5章〜第7章</td></tr>
<tr><td>第4問 選択</td><td>数列</td><td>16</td><td>第8章</td></tr>
<tr><td>第5問 選択</td><td>統計的な推測</td><td>16</td><td>本書の範囲外</td></tr>
<tr><td>第6問 選択</td><td>ベクトル</td><td>16</td><td>本書の範囲外</td></tr>
<tr><td>第7問 選択</td><td>複素数平面</td><td>16</td><td>本書の範囲外</td></tr>
</tbody></table></div>
<p>第1章の2次関数は数学①で出題される。令和7年度は第2問〔1〕の15点であった。<strong class="hit">数学Ⅲは共通テストに含まれない</strong>。極限と数学Ⅲの微分法と積分法は理系学部の個別試験で問われる。本書の第9章から第13章は共通テストの得点には直接つながらない。それでも経済学で使う微分と積分の多くは数学Ⅲの内容である。指数関数の微分や積分による面積の計算がその例である。</p>

<h2 id="s4">微分と積分は逆の操作である</h2>
<p>速度と距離の関係で2つの操作を並べる。直線上を進む車の時刻 \( t \) での位置を \( x(t) \) とし速度を \( v(t) \) とする。次の図は速度が最初の3秒は \( v=2t \) で増え3秒以降は秒速6 m で一定の場合である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="速度のグラフの面積は距離で位置のグラフの傾きは速度である">
  <line x1="91.5" y1="40" x2="91.5" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="133.1" y1="40" x2="133.1" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="174.6" y1="40" x2="174.6" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="216.2" y1="40" x2="216.2" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="257.7" y1="40" x2="257.7" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="299.2" y1="40" x2="299.2" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="50" y1="190" x2="320" y2="190" stroke="var(--line)" stroke-width="1"/>
  <line x1="50" y1="140" x2="320" y2="140" stroke="var(--line)" stroke-width="1"/>
  <line x1="50" y1="90" x2="320" y2="90" stroke="var(--line)" stroke-width="1"/>
  <line x1="50" y1="240" x2="328" y2="240" stroke="var(--ink)" stroke-width="1.3"/>
  <line x1="50" y1="240" x2="50" y2="32" stroke="var(--ink)" stroke-width="1.3"/>
  <text x="332" y="244" font-size="14" fill="var(--ink)" font-style="italic">t</text>
  <text x="46" y="28" font-size="14" fill="var(--ink)" font-style="italic" text-anchor="middle">v</text>
  <line x1="91.5" y1="237" x2="91.5" y2="243" stroke="var(--ink)"/>
  <text x="91.5" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">1</text>
  <line x1="133.1" y1="237" x2="133.1" y2="243" stroke="var(--ink)"/>
  <text x="133.1" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">2</text>
  <line x1="174.6" y1="237" x2="174.6" y2="243" stroke="var(--ink)"/>
  <text x="174.6" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">3</text>
  <line x1="216.2" y1="237" x2="216.2" y2="243" stroke="var(--ink)"/>
  <text x="216.2" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">4</text>
  <line x1="257.7" y1="237" x2="257.7" y2="243" stroke="var(--ink)"/>
  <text x="257.7" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">5</text>
  <line x1="299.2" y1="237" x2="299.2" y2="243" stroke="var(--ink)"/>
  <text x="299.2" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">6</text>
  <line x1="47" y1="190" x2="53" y2="190" stroke="var(--ink)"/>
  <text x="43" y="194" font-size="12" fill="var(--sub)" text-anchor="end">2</text>
  <line x1="47" y1="140" x2="53" y2="140" stroke="var(--ink)"/>
  <text x="43" y="144" font-size="12" fill="var(--sub)" text-anchor="end">4</text>
  <line x1="47" y1="90" x2="53" y2="90" stroke="var(--ink)"/>
  <text x="43" y="94" font-size="12" fill="var(--sub)" text-anchor="end">6</text>
  <text x="43" y="256" font-size="12" fill="var(--sub)" text-anchor="end">O</text>
  <polygon fill="var(--warm)" fill-opacity="0.18" stroke="none" points="50,240 50,240 54.2,235 58.3,230 62.5,225 66.6,220 70.8,215 74.9,210 79.1,205 83.2,200 87.4,195 91.5,190 95.7,185 99.8,180 104,175 108.2,170 112.3,165 116.5,160 120.6,155 124.8,150 128.9,145 133.1,140 137.2,135 141.4,130 145.5,125 149.7,120 153.8,115 158,110 162.2,105 166.3,100 170.5,95 174.6,90 178.8,90 182.9,90 187.1,90 191.2,90 195.4,90 199.5,90 203.7,90 207.8,90 212,90 216.2,90 220.3,90 224.5,90 228.6,90 232.8,90 236.9,90 241.1,90 245.2,90 249.4,90 253.5,90 257.7,90 261.8,90 266,90 270.2,90 274.3,90 278.5,90 282.6,90 286.8,90 290.9,90 295.1,90 299.2,90 299.2,240"/>
  <polyline fill="none" stroke="var(--warm)" stroke-width="2.2" points="50,240 54.2,235 58.3,230 62.5,225 66.6,220 70.8,215 74.9,210 79.1,205 83.2,200 87.4,195 91.5,190 95.7,185 99.8,180 104,175 108.2,170 112.3,165 116.5,160 120.6,155 124.8,150 128.9,145 133.1,140 137.2,135 141.4,130 145.5,125 149.7,120 153.8,115 158,110 162.2,105 166.3,100 170.5,95 174.6,90 178.8,90 182.9,90 187.1,90 191.2,90 195.4,90 199.5,90 203.7,90 207.8,90 212,90 216.2,90 220.3,90 224.5,90 228.6,90 232.8,90 236.9,90 241.1,90 245.2,90 249.4,90 253.5,90 257.7,90 261.8,90 266,90 270.2,90 274.3,90 278.5,90 282.6,90 286.8,90 290.9,90 295.1,90 299.2,90"/>
  <circle cx="133.1" cy="140" r="4" fill="var(--warm)"/>
  <text x="99.5" y="215" font-size="13" fill="var(--ink)" text-anchor="start">面積＝進んだ距離 27</text>
  <text x="60" y="44" font-size="13" fill="var(--muted)" text-anchor="start">速度のグラフ</text>
  <line x1="461.5" y1="40" x2="461.5" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="503.1" y1="40" x2="503.1" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="544.6" y1="40" x2="544.6" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="586.2" y1="40" x2="586.2" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="627.7" y1="40" x2="627.7" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="669.2" y1="40" x2="669.2" y2="240" stroke="var(--line)" stroke-width="1"/>
  <line x1="420" y1="173.3" x2="690" y2="173.3" stroke="var(--line)" stroke-width="1"/>
  <line x1="420" y1="106.7" x2="690" y2="106.7" stroke="var(--line)" stroke-width="1"/>
  <line x1="420" y1="60" x2="690" y2="60" stroke="var(--line)" stroke-width="1"/>
  <line x1="420" y1="240" x2="698" y2="240" stroke="var(--ink)" stroke-width="1.3"/>
  <line x1="420" y1="240" x2="420" y2="32" stroke="var(--ink)" stroke-width="1.3"/>
  <text x="702" y="244" font-size="14" fill="var(--ink)" font-style="italic">t</text>
  <text x="416" y="28" font-size="14" fill="var(--ink)" font-style="italic" text-anchor="middle">x</text>
  <line x1="461.5" y1="237" x2="461.5" y2="243" stroke="var(--ink)"/>
  <text x="461.5" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">1</text>
  <line x1="503.1" y1="237" x2="503.1" y2="243" stroke="var(--ink)"/>
  <text x="503.1" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">2</text>
  <line x1="544.6" y1="237" x2="544.6" y2="243" stroke="var(--ink)"/>
  <text x="544.6" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">3</text>
  <line x1="586.2" y1="237" x2="586.2" y2="243" stroke="var(--ink)"/>
  <text x="586.2" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">4</text>
  <line x1="627.7" y1="237" x2="627.7" y2="243" stroke="var(--ink)"/>
  <text x="627.7" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">5</text>
  <line x1="669.2" y1="237" x2="669.2" y2="243" stroke="var(--ink)"/>
  <text x="669.2" y="257" font-size="12" fill="var(--sub)" text-anchor="middle">6</text>
  <line x1="417" y1="173.3" x2="423" y2="173.3" stroke="var(--ink)"/>
  <text x="413" y="177.3" font-size="12" fill="var(--sub)" text-anchor="end">10</text>
  <line x1="417" y1="106.7" x2="423" y2="106.7" stroke="var(--ink)"/>
  <text x="413" y="110.7" font-size="12" fill="var(--sub)" text-anchor="end">20</text>
  <line x1="417" y1="60" x2="423" y2="60" stroke="var(--ink)"/>
  <text x="413" y="64" font-size="12" fill="var(--sub)" text-anchor="end">27</text>
  <text x="413" y="256" font-size="12" fill="var(--sub)" text-anchor="end">O</text>
  <polyline fill="none" stroke="var(--cool)" stroke-width="2.2" points="420,240 422.1,240 424.2,239.9 426.2,239.8 428.3,239.7 430.4,239.6 432.5,239.4 434.5,239.2 436.6,238.9 438.7,238.7 440.8,238.3 442.8,238 444.9,237.6 447,237.2 449.1,236.7 451.2,236.2 453.2,235.7 455.3,235.2 457.4,234.6 459.5,234 461.5,233.3 463.6,232.7 465.7,231.9 467.8,231.2 469.8,230.4 471.9,229.6 474,228.7 476.1,227.8 478.2,226.9 480.2,226 482.3,225 484.4,224 486.5,222.9 488.5,221.8 490.6,220.7 492.7,219.6 494.8,218.4 496.8,217.2 498.9,215.9 501,214.7 503.1,213.3 505.2,212 507.2,210.6 509.3,209.2 511.4,207.7 513.5,206.2 515.5,204.7 517.6,203.2 519.7,201.6 521.8,200 523.8,198.3 525.9,196.7 528,194.9 530.1,193.2 532.2,191.4 534.2,189.6 536.3,187.7 538.4,185.8 540.5,183.9 542.5,182 544.6,180 546.7,178 548.8,176 550.8,174 552.9,172 555,170 557.1,168 559.2,166 561.2,164 563.3,162 565.4,160 567.5,158 569.5,156 571.6,154 573.7,152 575.8,150 577.8,148 579.9,146 582,144 584.1,142 586.2,140 588.2,138 590.3,136 592.4,134 594.5,132 596.5,130 598.6,128 600.7,126 602.8,124 604.8,122 606.9,120 609,118 611.1,116 613.2,114 615.2,112 617.3,110 619.4,108 621.5,106 623.5,104 625.6,102 627.7,100 629.8,98 631.8,96 633.9,94 636,92 638.1,90 640.2,88 642.2,86 644.3,84 646.4,82 648.5,80 650.5,78 652.6,76 654.7,74 656.8,72 658.8,70 660.9,68 663,66 665.1,64 667.2,62 669.2,60"/>
  <line x1="457.4" y1="237.3" x2="561.2" y2="170.7" stroke="var(--accent)" stroke-width="1.6" stroke-dasharray="5 4"/>
  <circle cx="503.1" cy="213.3" r="4" fill="var(--accent)"/>
  <text x="567.2" y="174.7" font-size="13" fill="var(--accent)" text-anchor="start">傾き4＝t＝2の速度</text>
  <line x1="669.2" y1="240" x2="669.2" y2="60" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="669.2" cy="60" r="4" fill="var(--cool)"/>
  <text x="430" y="44" font-size="13" fill="var(--muted)" text-anchor="start">位置のグラフ</text>
</svg>
<figcaption>左は速度のグラフで右は位置のグラフである。左の網かけの面積は 0秒から6秒までに進んだ距離 27 m を表す。右のグラフで時刻2秒の点の接線の傾きは4で左のグラフの時刻2秒の速度4に一致する。</figcaption>
</figure>

<p>2つのグラフの関係は次の2文にまとめられる。</p>
<ul>
<li><strong>位置のグラフの傾きが速度である</strong>。位置から速度を求める操作が微分である</li>
<li><strong>速度のグラフの面積が位置の変化量である</strong>。速度から位置の変化を求める操作が積分である</li>
</ul>
<p>位置を微分すると速度になる。速度を積分すると位置の変化に戻る。微分と積分は互いに逆の操作である。この関係を<strong>微分積分学の基本定理</strong>と呼ぶ。第7章と第12章で次の形で扱う。</p>
\[ \frac{d}{dx}\int_a^x f(t)\,dt = f(x) \]
<p>左辺は関数 \( f \) をいったん積分してから微分したものである。結果は元の \( f(x) \) に戻る。</p>

<h3>傾きを求める手順</h3>
<p>曲線の接線の傾きは直接は計算できない。そこで曲線上の2点を結ぶ直線すなわち<strong>割線</strong>の傾きから近づく。\( y=x^2 \) の点 A(1, 1) と点 \( (1+h, (1+h)^2) \) を結ぶ割線の傾きは次のとおりである。</p>
\[ \frac{(1+h)^2-1}{h}=\frac{2h+h^2}{h}=2+h \]
<p>\( h \) を 2・1・0.5 と小さくすると傾きは 4・3・2.5 と変わる。\( h \) を限りなく0に近づけると傾きは2に近づく。この値2を点Aでの接線の傾きと定める。第5章で<strong>微分係数</strong>として定義する値である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 345" role="img" aria-label="割線の傾きはhを小さくすると接線の傾き2に近づく">
  <line x1="292.5" y1="20" x2="292.5" y2="320" stroke="var(--line)" stroke-width="1"/>
  <line x1="427.5" y1="20" x2="427.5" y2="320" stroke="var(--line)" stroke-width="1"/>
  <line x1="562.5" y1="20" x2="562.5" y2="320" stroke="var(--line)" stroke-width="1"/>
  <line x1="90" y1="238.2" x2="630" y2="238.2" stroke="var(--line)" stroke-width="1"/>
  <line x1="90" y1="183.6" x2="630" y2="183.6" stroke="var(--line)" stroke-width="1"/>
  <line x1="90" y1="129.1" x2="630" y2="129.1" stroke="var(--line)" stroke-width="1"/>
  <line x1="90" y1="74.5" x2="630" y2="74.5" stroke="var(--line)" stroke-width="1"/>
  <line x1="90" y1="292.7" x2="638" y2="292.7" stroke="var(--ink)" stroke-width="1.3"/>
  <line x1="157.5" y1="320" x2="157.5" y2="12" stroke="var(--ink)" stroke-width="1.3"/>
  <text x="642" y="296.7" font-size="14" fill="var(--ink)" font-style="italic">x</text>
  <text x="153.5" y="8" font-size="14" fill="var(--ink)" font-style="italic" text-anchor="middle">y</text>
  <line x1="292.5" y1="289.7" x2="292.5" y2="295.7" stroke="var(--ink)"/>
  <text x="292.5" y="309.7" font-size="12" fill="var(--sub)" text-anchor="middle">1</text>
  <line x1="427.5" y1="289.7" x2="427.5" y2="295.7" stroke="var(--ink)"/>
  <text x="427.5" y="309.7" font-size="12" fill="var(--sub)" text-anchor="middle">2</text>
  <line x1="562.5" y1="289.7" x2="562.5" y2="295.7" stroke="var(--ink)"/>
  <text x="562.5" y="309.7" font-size="12" fill="var(--sub)" text-anchor="middle">3</text>
  <line x1="154.5" y1="238.2" x2="160.5" y2="238.2" stroke="var(--ink)"/>
  <text x="150.5" y="242.2" font-size="12" fill="var(--sub)" text-anchor="end">2</text>
  <line x1="154.5" y1="183.6" x2="160.5" y2="183.6" stroke="var(--ink)"/>
  <text x="150.5" y="187.6" font-size="12" fill="var(--sub)" text-anchor="end">4</text>
  <line x1="154.5" y1="129.1" x2="160.5" y2="129.1" stroke="var(--ink)"/>
  <text x="150.5" y="133.1" font-size="12" fill="var(--sub)" text-anchor="end">6</text>
  <line x1="154.5" y1="74.5" x2="160.5" y2="74.5" stroke="var(--ink)"/>
  <text x="150.5" y="78.5" font-size="12" fill="var(--sub)" text-anchor="end">8</text>
  <text x="150.5" y="308.7" font-size="12" fill="var(--sub)" text-anchor="end">O</text>
  <polyline fill="none" stroke="var(--ink)" stroke-width="2.2" points="90,285.9 93.1,286.5 96.2,287.1 99.3,287.7 102.4,288.2 105.4,288.7 108.5,289.1 111.6,289.6 114.7,290 117.8,290.4 120.9,290.7 124,291 127.1,291.3 130.1,291.6 133.2,291.8 136.3,292.1 139.4,292.2 142.5,292.4 145.6,292.5 148.7,292.6 151.8,292.7 154.9,292.7 157.9,292.7 161,292.7 164.1,292.7 167.2,292.6 170.3,292.5 173.4,292.3 176.5,292.2 179.6,292 182.6,291.8 185.7,291.5 188.8,291.3 191.9,291 195,290.6 198.1,290.3 201.2,289.9 204.3,289.5 207.3,289 210.4,288.5 213.5,288 216.6,287.5 219.7,286.9 222.8,286.3 225.9,285.7 229,285.1 232.1,284.4 235.1,283.7 238.2,283 241.3,282.2 244.4,281.4 247.5,280.6 250.6,279.8 253.7,278.9 256.8,278 259.8,277.1 262.9,276.1 266,275.1 269.1,274.1 272.2,273 275.3,272 278.4,270.9 281.5,269.7 284.6,268.6 287.6,267.4 290.7,266.2 293.8,264.9 296.9,263.6 300,262.3 303.1,261 306.2,259.7 309.3,258.3 312.3,256.8 315.4,255.4 318.5,253.9 321.6,252.4 324.7,250.9 327.8,249.3 330.9,247.7 334,246.1 337.1,244.5 340.1,242.8 343.2,241.1 346.3,239.4 349.4,237.6 352.5,235.8 355.6,234 358.7,232.2 361.8,230.3 364.8,228.4 367.9,226.5 371,224.5 374.1,222.5 377.2,220.5 380.3,218.5 383.4,216.4 386.5,214.3 389.5,212.1 392.6,210 395.7,207.8 398.8,205.6 401.9,203.3 405,201.1 408.1,198.8 411.2,196.4 414.3,194.1 417.3,191.7 420.4,189.3 423.5,186.8 426.6,184.4 429.7,181.9 432.8,179.3 435.9,176.8 439,174.2 442,171.6 445.1,168.9 448.2,166.2 451.3,163.5 454.4,160.8 457.5,158.1 460.6,155.3 463.7,152.5 466.8,149.6 469.8,146.7 472.9,143.8 476,140.9 479.1,138 482.2,135 485.3,131.9 488.4,128.9 491.5,125.8 494.5,122.7 497.6,119.6 500.7,116.4 503.8,113.3 506.9,110 510,106.8 513.1,103.5 516.2,100.2 519.2,96.9 522.3,93.5 525.4,90.2 528.5,86.7 531.6,83.3 534.7,79.8 537.8,76.3 540.9,72.8 544,69.2 547,65.7 550.1,62 553.2,58.4 556.3,54.7 559.4,51 562.5,47.3 565.6,43.5 568.7,39.8 571.7,35.9 574.8,32.1 577.9,28.2 581,24.3 584.1,20.4"/>
  <line x1="211.5" y1="330.9" x2="582.8" y2="30.9" stroke="var(--muted)" stroke-width="1.5"/>
  <circle cx="562.5" cy="47.3" r="4" fill="var(--muted)"/>
  <text x="574.5" y="51.3" font-size="13" fill="var(--muted)" text-anchor="start">h＝2 傾き4</text>
  <line x1="211.5" y1="314.5" x2="447.8" y2="171.4" stroke="var(--sub)" stroke-width="1.5"/>
  <circle cx="427.5" cy="183.6" r="4" fill="var(--sub)"/>
  <text x="439.5" y="187.6" font-size="13" fill="var(--sub)" text-anchor="start">h＝1 傾き3</text>
  <line x1="211.5" y1="306.4" x2="380.2" y2="221.1" stroke="var(--cool)" stroke-width="1.5"/>
  <circle cx="360" cy="231.4" r="4" fill="var(--cool)"/>
  <text x="372" y="245.4" font-size="13" fill="var(--cool)" text-anchor="start">h＝0.5 傾き2.5</text>
  <line x1="117" y1="336.4" x2="454.5" y2="200" stroke="var(--warm)" stroke-width="2.4"/>
  <text x="462.5" y="216" font-size="13" fill="var(--warm)" text-anchor="start" font-weight="600">接線 傾き2</text>
  <circle cx="292.5" cy="265.5" r="5" fill="var(--warm)"/>
  <text x="284.5" y="257.5" font-size="13" fill="var(--ink)" text-anchor="end">A(1, 1)</text>
</svg>
<figcaption>\( y=x^2 \) の点A(1, 1) から引いた割線である。もう1つの点を A に近づけると割線の傾きは 4・3・2.5 と小さくなり接線の傾き2に近づく。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 2</div>
<p>直線上を進む物体の時刻 \( t \) 秒での位置が \( x=t^2 \) m である。時刻 1秒から 3秒までの平均の速さを求めよ。また時刻 1秒から \( 1+h \) 秒までの平均の速さを \( h \) で表し時刻1秒の瞬間の速さを求めよ。</p>
<details open><summary>解き方</summary><div>手順1 1秒から3秒までの移動は \( 9-1=8 \) m で時間は2秒である。平均の速さは \( 8\div 2=4 \) m/s である。<br>手順2 1秒から \( 1+h \) 秒までの移動は \( (1+h)^2-1=2h+h^2 \) である。時間 \( h \) で割ると \( 2+h \) になる。<br>手順3 \( h \) を0に近づけると \( 2+h \) は2に近づく。<br>答え 平均の速さ4 m/s ／ \( 2+h \) ／ 瞬間の速さ2 m/s。</div></details></div>

<p>典型的な誤りは2つある。1つは平均の速さと瞬間の速さの混同である。例題2の4 m/s は2秒間の平均であり時刻1秒の速さではない。もう1つは \( h=0 \) を代入して傾きを求めようとする誤りである。\( \frac{(1+h)^2-1}{h} \) に \( h=0 \) を代入すると \( \frac{0}{0} \) になり値を持たない。先に式を約分して \( 2+h \) にしてから \( h \) を0に近づける。</p>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">限界費用は総費用のグラフの接線の傾きである</p>
<p>生産量を1単位増やしたときの費用の増分を限界費用と呼ぶ。増分の幅を限りなく小さくした値が総費用関数の微分である。</p>
</aside>

<h2 id="s5">現実世界 ニュートンとライプニッツ</h2>
<p>微分積分は17世紀後半に2人の数学者がそれぞれ独立に体系化した。イングランドのアイザック・ニュートンとドイツのゴットフリート・ライプニッツである。</p>
<ol class="tb-tl">
<li><b>1665〜1666年</b><strong>ニュートンが流率法を考案</strong>。ペストの流行でケンブリッジ大学が閉鎖された時期に郷里で研究した。量の変化の速さを流率と呼んだ。</li>
<li><b>1675年</b><strong>ライプニッツが積分記号を使用</strong>。手稿で和を表す長いSの字 \( \int \) を使った。</li>
<li><b>1684年</b><strong>ライプニッツが微分法を論文で公表</strong>。学術誌『アクタ・エルディトールム』に掲載された。微分法を印刷物で公表した最初の例である。</li>
<li><b>1687年</b><strong>ニュートンが『プリンキピア』を刊行</strong>。運動の法則と万有引力を示した。記述の多くは幾何学の形をとる。</li>
<li><b>1712年</b><strong>王立協会の委員会が先取権をニュートンに認める</strong>。ライプニッツが盗用したとする論争の中で出された報告で1713年に『書簡集』として刊行された。</li>
</ol>
<p>現在の数学史ではどちらも独立に発見したとされる。今日使う記号の多くはライプニッツに由来する。導関数の \( \frac{dy}{dx} \) と積分の \( \int f(x)\,dx \) である。ニュートンは時間についての変化の速さを \( \dot{x} \) のように文字の上の点で表した。この記法は物理学の一部で今も使われる。</p>

<aside class="an an-rw"><b>現実世界</b>
<p>イギリスはニュートンの点の記法を長く使い続けた。大陸ヨーロッパはライプニッツの記法で解析学を発展させた。19世紀の初めにケンブリッジ大学の学生たちがライプニッツの記法の導入を求める運動を起こした。記号の選び方が研究の進み方に影響した例である。</p>
</aside>

<h2 id="s6">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 区間ごとの距離</div>
<p class="qz-q">自転車の速度が 0分から10分は分速200 m・10分から30分は分速300 m・30分から35分は分速100 m であった。35分間に進んだ距離は何 m か。</p>
<ol><li>3,000 m</li><li>8,000 m</li><li>8,500 m</li><li>9,000 m</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。200×10＋300×20＋100×5＝2,000＋6,000＋500＝8,500 である。速度のグラフで3つの長方形の面積を足す計算にあたる。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 平均の速さ</div>
<p class="qz-q">位置が \( x=t^2 \) で表される物体の時刻2秒から3秒までの平均の速さを求めよ。</p>
<ol><li>1</li><li>4</li><li>5</li><li>6</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\( \frac{3^2-2^2}{3-2}=\frac{9-4}{1}=5 \) である。時刻2秒の瞬間の速さ4と時刻3秒の瞬間の速さ6のどちらとも異なる。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 割線の傾き</div>
<p class="qz-q">\( y=x^2 \) の点 \( (1, 1) \) と点 \( (1.1, 1.21) \) を結ぶ割線の傾きを求めよ。</p>
<ol><li>2</li><li>2.1</li><li>2.21</li><li>1.21</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( \frac{1.21-1}{1.1-1}=\frac{0.21}{0.1}=2.1 \) である。本文の式 \( 2+h \) に \( h=0.1 \) を代入した値と一致する。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 速度のグラフの面積</div>
<p class="qz-q">速度が \( v=2t \) m/s で増える物体が時刻0秒から4秒までに進む距離を速度のグラフの面積から求めよ。</p>
<ol><li>8 m</li><li>16 m</li><li>32 m</li><li>64 m</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。速度のグラフは原点と点 \( (4, 8) \) を結ぶ直線で囲まれる部分は三角形である。面積は \( \frac{1}{2}\times 4\times 8=16 \) である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 共通テストの配点</div>
<p class="qz-q">令和7年度の数学②の本試験で数学Ⅱの必答3問の配点は15点・15点・22点であった。選択問題は各16点である。数学Ⅱの必答3問と選択3問の配点の合計を求めよ。</p>
<ol><li>94</li><li>100</li><li>106</li><li>116</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。15＋15＋22＝52 で 16×3＝48 である。52＋48＝100 で満点と一致する。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 科目の範囲</div>
<p class="qz-q">平成30年告示の学習指導要領で共通テストの出題範囲に含まれない内容を1つ選べ。</p>
<ol><li>2次関数</li><li>指数関数と対数関数</li><li>数列</li><li>極限</li></ol>
<details><summary>解答と解説</summary><div>正解は 4 である。極限は数学Ⅲの内容で数学Ⅲは共通テストに含まれない。2次関数は数学Ⅰで指数関数と対数関数は数学Ⅱで数列は数学Bである。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 微分積分の歴史</div>
<p class="qz-q">微分積分の記号と人物の組み合わせとして正しいものを1つ選べ。</p>
<ol><li>\( \frac{dy}{dx} \) はニュートンが導入した</li><li>\( \int \) はライプニッツが導入した</li><li>文字の上の点 \( \dot{x} \) はライプニッツが導入した</li><li>微分法を最初に印刷物で公表したのはニュートンの『プリンキピア』である</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( \frac{dy}{dx} \) と \( \int \) はライプニッツの記法で点の記法はニュートンの記法である。微分法の最初の印刷物での公表は1684年のライプニッツの論文で『プリンキピア』の1687年より早い。</div></details></div>

<h2 id="s7">この章の要点</h2>
<div class="tb-key"><b>要点</b>
微分は変化の速さを求める操作でグラフでは接線の傾きにあたる。<br>
積分は変化を積み重ねる操作でグラフでは面積にあたる。<br>
位置を微分すると速度になり速度を積分すると位置の変化になる。微分と積分は逆の操作である。<br>
接線の傾きは割線の傾き \( \frac{f(a+h)-f(a)}{h} \) で \( h \) を0に近づけた値として求める。<br>
本書は数学Ⅰ・数学Ⅱ・数学B・数学Ⅲの順に積み上げる。数学Ⅲは共通テストに含まれない。</div>

<h2 id="s8">残っている問い</h2>
<ul>
<li class="tb-vnote">この章の「限りなく近づける」は直感による説明である。極限の厳密な定義である ε-δ 論法は大学の内容で高校では扱わない。</li>
<li class="tb-vnote">共通テストの大問の構成と配点は令和7年度本試験の値である。年度によって変わる可能性がある。受験する年度の大学入試センターの公表資料で確かめること。</li>
<li class="tb-vnote">ニュートンが流率法を考案した時期は本人の後年の記述と手稿にもとづく。どの成果がどの月に得られたかは史料によって幅がある。</li>
<li class="tb-vnote">ケンブリッジ大学の学生による記法改革の団体は解析学協会と呼ばれる。結成年を1812年とする資料と1815年とする資料があり確定していない。</li>
</ul>

<h2 id="s9">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 — https://www.mext.go.jp/a_menu/shotou/new-cs/1384661.htm</li>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>大学入試センター 大学入学共通テスト — https://www.dnc.ac.jp/kyotsu/</li>
<li>リクルート進学ネット 共通テストの出題構成 — https://shingakunet.com/journal/exam/20250622000001/</li>
<li>大学入試センター 令和7年度 本試験の問題 — https://www.dnc.ac.jp/kyotsu/kakomondai/r7/r7_honshiken_mondai.html</li>
<li>大学入試センター 令和7年度 本試験の正解 — https://www.dnc.ac.jp/kyotsu/kakomondai/r7/r7_honsiken_seikai.html</li>
<li>Analytical Society — Wikipedia — https://en.wikipedia.org/wiki/Analytical_Society</li>
<li>Leibniz–Newton calculus controversy — Wikipedia — https://en.wikipedia.org/wiki/Leibniz%E2%80%93Newton_calculus_controversy</li>
<li>Isaac Newton — MacTutor History of Mathematics — https://mathshistory.st-andrews.ac.uk/Biographies/Newton/</li>
<li>Gottfried Wilhelm Leibniz — MacTutor History of Mathematics — https://mathshistory.st-andrews.ac.uk/Biographies/Leibniz/</li>
<li>Fundamental theorem of calculus — Wikipedia — https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus</li>
</ol>
