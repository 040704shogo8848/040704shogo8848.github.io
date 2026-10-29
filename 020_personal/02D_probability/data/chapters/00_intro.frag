<!--meta
{"chapter": 0, "part": "序章", "title": "確率と統計の地図", "thesis": "統計は手元のデータを要約する記述統計と一部から全体を推し量る推測統計に分かれる。両者をつなぐ言語が確率である。高校では数学Ⅰ・数学A・数学Bの3科目に分かれて学ぶ。この本はその順序どおりに11章で積み上げる。", "verify": {"date": "2026-10-15", "checked": 29, "match": 29, "fixed": 0, "unconfirmed": 0}}
-->
<p>確率と統計は高校数学の中で3つの科目に分かれて現れる。数学Ⅰのデータの分析・数学Aの場合の数と確率・数学Bの統計的な推測である。教科書が別々なので単元どうしのつながりが見えにくい。実際には1本の道筋である。手元のデータを数で要約する方法から始めて偶然を数で表す方法を学ぶ。最後に両者を組み合わせて一部のデータから全体を推し量る。</p>
<p>この序章ではその道筋の全体像を示す。各科目が学習指導要領でどの位置にあるか・共通テストでどう問われるか・確率と統計がどのような問いから生まれたかを順に確認する。第1章以降の計算に入る前の地図である。</p>

<h2 id="s1">記述統計と推測統計と確率</h2>
<p>統計学は扱う対象によって2つに分かれる。</p>
<p><strong>記述統計</strong>は手元にある全データを表やグラフや数値で要約する方法である。1クラス40人の得点を集めて平均値を計算しヒストグラムを描く作業は記述統計である。データは全員分そろっており不確かさは含まれない。数学Ⅰのデータの分析が記述統計にあたる。</p>
<p><strong>推測統計</strong>は調べたい集団の一部だけを取り出して調べ集団全体の性質を推し量る方法である。調べたい集団全体を<strong>母集団</strong>と呼び取り出した一部を<strong>標本</strong>と呼ぶ。内閣支持率の世論調査は有権者全員ではなく一部の人に質問する。<strong class="hit">標本の選び方には偶然が入るので推測には必ず誤差が伴う</strong>。数学Bの統計的な推測が推測統計にあたる。</p>
<p>偶然が入る以上は推測の確かさを数で示す道具が要る。その道具が<strong>確率</strong>である。確率は起こりうる結果の起こりやすさを0から1の数で表す。数学Aの場合の数と確率で確率の計算規則を学び数学Bで確率分布へ広げる。確率は推測統計の言語である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="記述統計と推測統計の対象の違い">
<defs><marker id="ah02d00b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker></defs>
<text x="20" y="26" font-size="13" fill="var(--muted)">記述統計 手元の全データを要約する</text>
<text x="380" y="26" font-size="13" fill="var(--muted)">推測統計 一部から全体を推し量る</text>
<circle cx="60" cy="60" r="7" fill="var(--cool)"/>
<circle cx="90" cy="60" r="7" fill="var(--cool)"/>
<circle cx="120" cy="60" r="7" fill="var(--cool)"/>
<circle cx="150" cy="60" r="7" fill="var(--cool)"/>
<circle cx="180" cy="60" r="7" fill="var(--cool)"/>
<circle cx="210" cy="60" r="7" fill="var(--cool)"/>
<circle cx="240" cy="60" r="7" fill="var(--cool)"/>
<circle cx="270" cy="60" r="7" fill="var(--cool)"/>
<circle cx="60" cy="90" r="7" fill="var(--cool)"/>
<circle cx="90" cy="90" r="7" fill="var(--cool)"/>
<circle cx="120" cy="90" r="7" fill="var(--cool)"/>
<circle cx="150" cy="90" r="7" fill="var(--cool)"/>
<circle cx="180" cy="90" r="7" fill="var(--cool)"/>
<circle cx="210" cy="90" r="7" fill="var(--cool)"/>
<circle cx="240" cy="90" r="7" fill="var(--cool)"/>
<circle cx="270" cy="90" r="7" fill="var(--cool)"/>
<circle cx="60" cy="120" r="7" fill="var(--cool)"/>
<circle cx="90" cy="120" r="7" fill="var(--cool)"/>
<circle cx="120" cy="120" r="7" fill="var(--cool)"/>
<circle cx="150" cy="120" r="7" fill="var(--cool)"/>
<circle cx="180" cy="120" r="7" fill="var(--cool)"/>
<circle cx="210" cy="120" r="7" fill="var(--cool)"/>
<circle cx="240" cy="120" r="7" fill="var(--cool)"/>
<circle cx="270" cy="120" r="7" fill="var(--cool)"/>
<circle cx="60" cy="150" r="7" fill="var(--cool)"/>
<circle cx="90" cy="150" r="7" fill="var(--cool)"/>
<circle cx="120" cy="150" r="7" fill="var(--cool)"/>
<circle cx="150" cy="150" r="7" fill="var(--cool)"/>
<circle cx="180" cy="150" r="7" fill="var(--cool)"/>
<circle cx="210" cy="150" r="7" fill="var(--cool)"/>
<circle cx="240" cy="150" r="7" fill="var(--cool)"/>
<circle cx="270" cy="150" r="7" fill="var(--cool)"/>
<circle cx="60" cy="180" r="7" fill="var(--cool)"/>
<circle cx="90" cy="180" r="7" fill="var(--cool)"/>
<circle cx="120" cy="180" r="7" fill="var(--cool)"/>
<circle cx="150" cy="180" r="7" fill="var(--cool)"/>
<circle cx="180" cy="180" r="7" fill="var(--cool)"/>
<circle cx="210" cy="180" r="7" fill="var(--cool)"/>
<circle cx="240" cy="180" r="7" fill="var(--cool)"/>
<circle cx="270" cy="180" r="7" fill="var(--cool)"/>
<text x="165" y="222" font-size="12.5" text-anchor="middle" fill="var(--sub)">1クラス40人の得点を全員分集める</text>
<text x="165" y="242" font-size="12.5" text-anchor="middle" fill="var(--sub)">平均値と分散をそのまま計算する</text>
<line x1="352" y1="40" x2="352" y2="245" stroke="var(--line)" stroke-dasharray="4 4"/>
<ellipse cx="490" cy="130" rx="105" ry="85" fill="none" stroke="var(--line)" stroke-width="1.5"/>
<circle cx="455" cy="73" r="3.2" fill="var(--dim)"/>
<circle cx="520" cy="60" r="3.2" fill="var(--dim)"/>
<circle cx="497" cy="108" r="3.2" fill="var(--dim)"/>
<circle cx="402" cy="131" r="3.2" fill="var(--dim)"/>
<circle cx="397" cy="119" r="3.2" fill="var(--dim)"/>
<circle cx="475" cy="184" r="3.2" fill="var(--dim)"/>
<circle cx="415" cy="85" r="3.2" fill="var(--dim)"/>
<circle cx="515" cy="203" r="3.2" fill="var(--dim)"/>
<circle cx="505" cy="113" r="3.2" fill="var(--dim)"/>
<circle cx="562" cy="95" r="3.2" fill="var(--dim)"/>
<circle cx="452" cy="182" r="3.2" fill="var(--dim)"/>
<circle cx="426" cy="143" r="3.2" fill="var(--dim)"/>
<circle cx="518" cy="109" r="3.2" fill="var(--dim)"/>
<circle cx="500" cy="58" r="3.2" fill="var(--dim)"/>
<circle cx="526" cy="118" r="3.2" fill="var(--dim)"/>
<circle cx="453" cy="144" r="3.2" fill="var(--dim)"/>
<circle cx="481" cy="97" r="3.2" fill="var(--dim)"/>
<circle cx="549" cy="163" r="3.2" fill="var(--dim)"/>
<circle cx="439" cy="142" r="3.2" fill="var(--dim)"/>
<circle cx="495" cy="192" r="3.2" fill="var(--dim)"/>
<circle cx="536" cy="95" r="3.2" fill="var(--dim)"/>
<circle cx="474" cy="172" r="3.2" fill="var(--dim)"/>
<circle cx="420" cy="128" r="3.2" fill="var(--dim)"/>
<circle cx="398" cy="158" r="3.2" fill="var(--dim)"/>
<circle cx="543" cy="142" r="3.2" fill="var(--dim)"/>
<circle cx="565" cy="99" r="3.2" fill="var(--warm)"/>
<circle cx="529" cy="145" r="3.2" fill="var(--dim)"/>
<circle cx="506" cy="123" r="3.2" fill="var(--dim)"/>
<circle cx="485" cy="157" r="3.2" fill="var(--dim)"/>
<circle cx="402" cy="163" r="3.2" fill="var(--dim)"/>
<circle cx="554" cy="95" r="3.2" fill="var(--dim)"/>
<circle cx="467" cy="158" r="3.2" fill="var(--dim)"/>
<circle cx="395" cy="124" r="3.2" fill="var(--dim)"/>
<circle cx="416" cy="89" r="3.2" fill="var(--dim)"/>
<circle cx="468" cy="191" r="3.2" fill="var(--dim)"/>
<circle cx="406" cy="122" r="3.2" fill="var(--warm)"/>
<circle cx="500" cy="193" r="3.2" fill="var(--dim)"/>
<circle cx="554" cy="190" r="3.2" fill="var(--dim)"/>
<circle cx="446" cy="116" r="3.2" fill="var(--dim)"/>
<circle cx="462" cy="193" r="3.2" fill="var(--dim)"/>
<circle cx="425" cy="86" r="3.2" fill="var(--dim)"/>
<circle cx="437" cy="128" r="3.2" fill="var(--dim)"/>
<circle cx="508" cy="91" r="3.2" fill="var(--dim)"/>
<circle cx="464" cy="141" r="3.2" fill="var(--dim)"/>
<circle cx="581" cy="161" r="3.2" fill="var(--dim)"/>
<circle cx="493" cy="149" r="3.2" fill="var(--dim)"/>
<circle cx="525" cy="57" r="3.2" fill="var(--dim)"/>
<circle cx="570" cy="176" r="3.2" fill="var(--dim)"/>
<circle cx="565" cy="179" r="3.2" fill="var(--dim)"/>
<circle cx="468" cy="113" r="3.2" fill="var(--dim)"/>
<circle cx="411" cy="152" r="3.2" fill="var(--dim)"/>
<circle cx="432" cy="75" r="3.2" fill="var(--dim)"/>
<circle cx="458" cy="57" r="3.2" fill="var(--dim)"/>
<circle cx="410" cy="108" r="3.2" fill="var(--dim)"/>
<circle cx="513" cy="72" r="3.2" fill="var(--dim)"/>
<circle cx="440" cy="105" r="3.2" fill="var(--dim)"/>
<circle cx="463" cy="68" r="3.2" fill="var(--dim)"/>
<circle cx="483" cy="127" r="3.2" fill="var(--warm)"/>
<circle cx="459" cy="91" r="3.2" fill="var(--dim)"/>
<circle cx="556" cy="74" r="3.2" fill="var(--dim)"/>
<circle cx="496" cy="72" r="3.2" fill="var(--dim)"/>
<circle cx="499" cy="52" r="3.2" fill="var(--dim)"/>
<circle cx="496" cy="208" r="3.2" fill="var(--dim)"/>
<circle cx="563" cy="162" r="3.2" fill="var(--dim)"/>
<circle cx="442" cy="108" r="3.2" fill="var(--warm)"/>
<circle cx="423" cy="175" r="3.2" fill="var(--warm)"/>
<circle cx="497" cy="176" r="3.2" fill="var(--dim)"/>
<circle cx="456" cy="85" r="3.2" fill="var(--dim)"/>
<circle cx="561" cy="180" r="3.2" fill="var(--warm)"/>
<circle cx="554" cy="169" r="3.2" fill="var(--dim)"/>
<circle cx="435" cy="133" r="3.2" fill="var(--dim)"/>
<circle cx="442" cy="162" r="3.2" fill="var(--dim)"/>
<circle cx="581" cy="121" r="3.2" fill="var(--dim)"/>
<circle cx="581" cy="108" r="3.2" fill="var(--dim)"/>
<circle cx="434" cy="85" r="3.2" fill="var(--dim)"/>
<circle cx="429" cy="82" r="3.2" fill="var(--dim)"/>
<circle cx="515" cy="196" r="3.2" fill="var(--dim)"/>
<circle cx="558" cy="127" r="3.2" fill="var(--warm)"/>
<circle cx="521" cy="179" r="3.2" fill="var(--warm)"/>
<circle cx="407" cy="156" r="3.2" fill="var(--dim)"/>
<circle cx="540" cy="126" r="3.2" fill="var(--dim)"/>
<circle cx="426" cy="177" r="3.2" fill="var(--dim)"/>
<circle cx="457" cy="179" r="3.2" fill="var(--dim)"/>
<circle cx="584" cy="113" r="3.2" fill="var(--dim)"/>
<circle cx="470" cy="203" r="3.2" fill="var(--dim)"/>
<circle cx="535" cy="76" r="3.2" fill="var(--dim)"/>
<circle cx="419" cy="184" r="3.2" fill="var(--dim)"/>
<circle cx="460" cy="138" r="3.2" fill="var(--dim)"/>
<circle cx="584" cy="155" r="3.2" fill="var(--warm)"/>
<circle cx="495" cy="201" r="3.2" fill="var(--dim)"/>
<circle cx="477" cy="191" r="3.2" fill="var(--dim)"/>
<circle cx="555" cy="83" r="3.2" fill="var(--dim)"/>
<circle cx="440" cy="96" r="3.2" fill="var(--dim)"/>
<circle cx="438" cy="144" r="3.2" fill="var(--dim)"/>
<circle cx="442" cy="117" r="3.2" fill="var(--dim)"/>
<circle cx="461" cy="123" r="3.2" fill="var(--dim)"/>
<circle cx="507" cy="196" r="3.2" fill="var(--dim)"/>
<circle cx="474" cy="199" r="3.2" fill="var(--dim)"/>
<circle cx="490" cy="135" r="3.2" fill="var(--dim)"/>
<circle cx="495" cy="51" r="3.2" fill="var(--dim)"/>
<circle cx="478" cy="78" r="3.2" fill="var(--dim)"/>
<circle cx="424" cy="126" r="3.2" fill="var(--dim)"/>
<circle cx="535" cy="139" r="3.2" fill="var(--dim)"/>
<circle cx="455" cy="133" r="3.2" fill="var(--warm)"/>
<circle cx="501" cy="177" r="3.2" fill="var(--dim)"/>
<circle cx="411" cy="140" r="3.2" fill="var(--dim)"/>
<circle cx="440" cy="93" r="3.2" fill="var(--dim)"/>
<circle cx="544" cy="131" r="3.2" fill="var(--dim)"/>
<circle cx="502" cy="173" r="3.2" fill="var(--dim)"/>
<circle cx="572" cy="121" r="3.2" fill="var(--dim)"/>
<text x="490" y="236" font-size="12.5" text-anchor="middle" fill="var(--sub)">母集団 全国の有権者</text>
<circle cx="660" cy="130" r="38" fill="none" stroke="var(--warm)" stroke-width="1.5"/>
<circle cx="680" cy="130" r="3.2" fill="var(--warm)"/>
<circle cx="676" cy="142" r="3.2" fill="var(--warm)"/>
<circle cx="666" cy="149" r="3.2" fill="var(--warm)"/>
<circle cx="654" cy="149" r="3.2" fill="var(--warm)"/>
<circle cx="644" cy="142" r="3.2" fill="var(--warm)"/>
<circle cx="640" cy="130" r="3.2" fill="var(--warm)"/>
<circle cx="644" cy="118" r="3.2" fill="var(--warm)"/>
<circle cx="654" cy="111" r="3.2" fill="var(--warm)"/>
<circle cx="666" cy="111" r="3.2" fill="var(--warm)"/>
<circle cx="676" cy="118" r="3.2" fill="var(--warm)"/>
<text x="660" y="186" font-size="12.5" text-anchor="middle" fill="var(--warm)">標本</text>
<path d="M596 108 Q 610 92 624 104" fill="none" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#ah02d00b)"/>
<path d="M624 158 Q 610 172 598 158" fill="none" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#ah02d00b)"/>
<text x="611" y="84" font-size="12" text-anchor="middle" fill="var(--accent)">抽出</text>
<text x="611" y="190" font-size="12" text-anchor="middle" fill="var(--accent)">推測</text>
</svg>
<figcaption>左は全員分のデータを集めて要約する記述統計である。右は母集団から標本を抽出してその結果から母集団を推し量る推測統計である。推測には標本の偶然による誤差が伴う。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 1</div>
<p>次の調査のうち推測統計の考え方を用いるものはどれか。(a) ある高校の3年生全員の身長を測定して平均値を求める。(b) 工場で生産した電球から100個を抜き取って寿命を調べ全体の平均寿命を推定する。</p>
<details open><summary>解き方</summary><div>手順1 (a) は対象の全員を測定するので全数調査である。結果を要約するだけで推し量る部分がない。<br>手順2 (b) は全部の電球を寿命まで点灯させると商品がなくなる。一部の100個を標本として母集団全体を推し量る。<br>答え (b)</div></details></div>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">記述統計は決算の集計で推測統計は監査の抜き取り検査である</p>
<p>決算は全取引を集計する。監査人は全取引を見ずに一部を抜き取り全体の誤りの程度を推し量る。</p>
</aside>

<h2 id="s2">学習指導要領での位置とこの本の順序</h2>
<p>高等学校学習指導要領は平成30年に告示され令和4年度の入学生から実施された。確率と統計に関わる内容は次の3か所にある。いずれも中学校で学んだ内容の続きである。中学校ではヒストグラム・相対度数・四分位範囲・箱ひげ図・確率の基礎・標本調査をすでに扱っている。</p>
<div class="tb-tw"><table>
<thead><tr><th>科目</th><th>単元</th><th>主な内容</th><th>この本</th></tr></thead>
<tbody>
<tr><td>数学Ⅰ</td><td>データの分析</td><td>分散・標準偏差・散布図・相関係数・仮説検定の考え方・外れ値</td><td>第1章〜第3章</td></tr>
<tr><td>数学A</td><td>場合の数と確率</td><td>和の法則と積の法則・順列・組合せ・確率の基本法則・期待値・独立な試行・条件付き確率</td><td>第4章〜第7章</td></tr>
<tr><td>数学B</td><td>統計的な推測</td><td>標本調査・確率変数と確率分布・二項分布・正規分布・区間推定・仮説検定</td><td>第8章〜第11章</td></tr>
</tbody></table></div>
<p>数学Ⅰは全員が履修する必履修科目である。仮説検定の考え方は平成30年告示の学習指導要領で数学Ⅰに加わった。期待値は前の学習指導要領では数学Aに含まれず今回の改訂で数学Aに入った。数学Bの統計的な推測には仮説検定の方法と信頼区間と有意水準の用語が入った。<strong class="hit">高校の統計は記述から始まり検定で終わる一続きの構成に改められた</strong>。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 330" role="img" aria-label="この本の11章を3つの科目に並べた地図">
<defs><marker id="ah02d00a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--sub)"/></marker></defs>
<rect x="14" y="20" width="216" height="34" rx="6" fill="var(--cool)"/>
<text x="122.0" y="42" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">数学Ⅰ データの分析</text>
<rect x="14" y="70" width="216" height="34" rx="5" fill="none" stroke="var(--cool)" stroke-width="1.5"/>
<text x="24" y="92" font-size="12.5" fill="var(--ink)">第1章 データの整理と代表値</text>
<rect x="14" y="114" width="216" height="34" rx="5" fill="none" stroke="var(--cool)" stroke-width="1.5"/>
<text x="24" y="136" font-size="12.5" fill="var(--ink)">第2章 散らばりと箱ひげ図</text>
<rect x="14" y="158" width="216" height="34" rx="5" fill="none" stroke="var(--cool)" stroke-width="1.5"/>
<text x="24" y="180" font-size="12.5" fill="var(--ink)">第3章 散布図と相関・検定の考え方</text>
<line x1="232" y1="37" x2="248" y2="37" stroke="var(--sub)" stroke-width="1.5" marker-end="url(#ah02d00a)"/>
<rect x="252" y="20" width="216" height="34" rx="6" fill="var(--warm)"/>
<text x="360.0" y="42" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">数学A 場合の数と確率</text>
<rect x="252" y="70" width="216" height="34" rx="5" fill="none" stroke="var(--warm)" stroke-width="1.5"/>
<text x="262" y="92" font-size="12.5" fill="var(--ink)">第4章 集合と場合の数・順列</text>
<rect x="252" y="114" width="216" height="34" rx="5" fill="none" stroke="var(--warm)" stroke-width="1.5"/>
<text x="262" y="136" font-size="12.5" fill="var(--ink)">第5章 組合せと二項定理</text>
<rect x="252" y="158" width="216" height="34" rx="5" fill="none" stroke="var(--warm)" stroke-width="1.5"/>
<text x="262" y="180" font-size="12.5" fill="var(--ink)">第6章 確率と独立な試行</text>
<rect x="252" y="202" width="216" height="34" rx="5" fill="none" stroke="var(--warm)" stroke-width="1.5"/>
<text x="262" y="224" font-size="12.5" fill="var(--ink)">第7章 条件付き確率と期待値</text>
<line x1="470" y1="37" x2="486" y2="37" stroke="var(--sub)" stroke-width="1.5" marker-end="url(#ah02d00a)"/>
<rect x="490" y="20" width="216" height="34" rx="6" fill="var(--accent)"/>
<text x="598.0" y="42" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">数学B 統計的な推測</text>
<rect x="490" y="70" width="216" height="34" rx="5" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
<text x="500" y="92" font-size="12.5" fill="var(--ink)">第8章 確率変数と二項分布</text>
<rect x="490" y="114" width="216" height="34" rx="5" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
<text x="500" y="136" font-size="12.5" fill="var(--ink)">第9章 正規分布</text>
<rect x="490" y="158" width="216" height="34" rx="5" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
<text x="500" y="180" font-size="12.5" fill="var(--ink)">第10章 標本調査と推定</text>
<rect x="490" y="202" width="216" height="34" rx="5" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
<text x="500" y="224" font-size="12.5" fill="var(--ink)">第11章 仮説検定</text>
<line x1="14" y1="268" x2="706" y2="268" stroke="var(--line)"/>
<text x="122" y="292" font-size="13" text-anchor="middle" fill="var(--cool)" font-weight="600">記述統計</text>
<text x="122" y="312" font-size="12" text-anchor="middle" fill="var(--sub)">手元のデータを要約する</text>
<text x="360" y="292" font-size="13" text-anchor="middle" fill="var(--warm)" font-weight="600">確率</text>
<text x="360" y="312" font-size="12" text-anchor="middle" fill="var(--sub)">偶然の起こりやすさを数で表す</text>
<text x="598" y="292" font-size="13" text-anchor="middle" fill="var(--accent)" font-weight="600">推測統計</text>
<text x="598" y="312" font-size="12" text-anchor="middle" fill="var(--sub)">標本から母集団を推し量る</text>
</svg>
<figcaption>この本の11章を3つの科目に並べた。左から右へ進むほど不確かさを扱う度合いが増す。下段は各科目が担う統計の役割である。</figcaption>
</figure>

<p>この本の順序は学習指導要領の順序に従う。第1章から第3章で記述統計を固める。代表値・散らばり・相関の3つである。第3章の最後で仮説検定の考え方に触れる。ここでは確率の計算を使わずにシミュレーションの結果で判断する。</p>
<p>第4章から第7章では場合の数を数える技術から確率へ進む。確率の多くは起こりうる場合の数の比で計算するので数え方が先に要る。第8章から第11章では確率を値ごとに並べた確率分布を学ぶ。二項分布と正規分布を使って区間推定と仮説検定を行う。<strong class="hit">第3章で直感として扱った検定が第11章で確率の計算として完成する</strong>。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">今季の打率は記述統計で来季の打率予想は推測統計である</p>
<p>打率は全打席の集計で誤差はない。来季の予想は今季の打席を標本と見て能力を推し量るので誤差が伴う。</p>
</aside>

<h2 id="s3">共通テストでの出題のされ方</h2>
<p>大学入学共通テストの数学は2つの試験時間帯に分かれる。数学①の『数学Ⅰ，数学A』と数学②の『数学Ⅱ，数学B，数学C』である。令和7年度の試験から新しい学習指導要領に基づく出題に変わった。</p>
<div class="tb-kpi">
<div><b>70<small>分</small></b><i>『数学Ⅰ，数学A』の試験時間</i><em>配点100点</em></div>
<div><b>70<small>分</small></b><i>『数学Ⅱ，数学B，数学C』の試験時間</i><em>令和7年度から10分延長</em></div>
<div><b>42<small>%程度</small></b><i>令和7年度 数学Ⅰ・A 第2問の得点率</i><em>二次関数とデータの分析</em></div>
<div><b>37<small>%程度</small></b><i>令和7年度 数学Ⅱ・B・C 第5問の得点率</i><em>統計的な推測 7問中で最低</em></div>
</div>
<p>『数学Ⅰ，数学A』では数学Aの出題範囲が図形の性質と場合の数と確率の2項目に定められ全問を解答する。選択問題はない。<strong class="hit">データの分析と場合の数と確率は避けて通れない</strong>。令和7年度の本試験では第2問の後半がデータの分析であった。47都道府県の外国人宿泊者数と日本人宿泊者数のデータを題材に統計量と散らばりを問い実験の結果から主張の妥当性を判断させた。第4問は場合の数と確率でくじ引きのゲームの確率と期待値を問い参加料の払い方による期待値の変化から意思決定をさせた。</p>
<p>『数学Ⅱ，数学B，数学C』は第1問から第3問が数学Ⅱの必答である。第4問から第7問は数列・統計的な推測・ベクトル・平面上の曲線と複素数平面の4項目に対応し4問のうち3問を選んで解答する。統計的な推測は選択問題なので避けることもできる。令和7年度の第5問はレモンの重さの分布を題材に信頼区間と仮説検定を問い得点率は37％程度であった。7問の中で最も低い。</p>
<p>共通テストの統計の問題には共通する型がある。長い会話文や表やグラフから必要な数値を読み取り計算し最後に結論の妥当性を判断させる。計算の正確さに加えて<strong>どの統計量をなぜ使うか</strong>が問われる。この本が公式ごとに理由を添えるのはそのためである。</p>

<div class="ex"><div class="ex-h">例題 2</div>
<p>『数学Ⅱ，数学B，数学C』の第4問から第7問の4問から3問を選ぶ。選び方は何通りあるか。また統計的な推測を必ず含む選び方は何通りあるか。</p>
<details open><summary>解き方</summary><div>手順1 4問から3問を選ぶ選び方は選ばない1問を決めれば定まる。選ばない問題の選び方は4通りである。<br>手順2 統計的な推測を必ず含むのは選ばない1問が統計的な推測以外の3問のどれかの場合である。3通りある。<br>答え 4通り ／ 3通り。組合せの記号では \( {}_4\mathrm{C}_3=4 \) と \( {}_3\mathrm{C}_2=3 \) である。第5章で扱う。</div></details></div>

<h2 id="s4">確率と統計の歴史</h2>
<p>確率と統計は別々の問いから生まれ20世紀に合流した。確率の出発点は賭けの問題で統計の出発点は国家や社会の数の集計である。</p>
<ol class="tb-tl">
<li><b>1654年</b><strong>パスカルとフェルマーの往復書簡</strong>。途中で中断した勝負の賭け金をどう分けるかを論じた。確率論の出発点とされる</li>
<li><b>1858年</b><strong>ナイチンゲールの鶏頭図</strong>。クリミア戦争の兵士の死因を月ごとに円グラフの変形で示した。病気による死亡が戦闘による死亡を上回ることを図で訴えた</li>
<li><b>1888年</b><strong>ゴルトンの相関</strong>。2つの量の関係の強さを1つの係数で表した。後にピアソンが標準偏差を用いた相関係数の形に整えた</li>
<li><b>1925年</b><strong>フィッシャーの研究者のための統計的方法</strong>。少数のデータから結論を導く検定の手順をまとめた</li>
<li><b>1935年</b><strong>フィッシャーの実験計画法</strong>。紅茶の入れ方を当てる婦人の実験を例に仮説検定の考え方を示した</li>
<li><b>1977年</b><strong>テューキーの探索的データ解析</strong>。箱ひげ図を広めた</li>
</ol>
<h3>パスカルとフェルマーの分配問題</h3>
<p>書簡で論じられた問題を簡単にすると次のようになる。2人が同じ強さで勝負をし先に3勝した方が賭け金をすべて受け取る。Aが2勝・Bが1勝の時点で勝負が中断した。賭け金をどう分けるのが公平か。</p>
<p>2人が到達した答えの要点は<strong class="hit">これまでの勝ち数ではなく優勝までに残り何勝要るかで分ける</strong>という考え方である。Aは残り1勝でBは残り2勝である。勝負を続けたとすると次の回にAが勝てばAの優勝である。Bが勝つと1勝ずつ残る状態になり次の回の勝者が優勝する。</p>
<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="中断した勝負の残りの展開を樹形図で数える">
<g stroke="var(--sub)" stroke-width="1.5">
<line x1="110" y1="125" x2="300" y2="60"/><line x1="110" y1="125" x2="300" y2="190"/>
<line x1="340" y1="190" x2="520" y2="150"/><line x1="340" y1="190" x2="520" y2="230"/></g>
<circle cx="100" cy="125" r="10" fill="var(--ink)"/>
<text x="40" y="100" font-size="12.5" fill="var(--sub)">中断時点</text><text x="22" y="160" font-size="12.5" fill="var(--sub)">Aは残り1勝</text><text x="22" y="178" font-size="12.5" fill="var(--sub)">Bは残り2勝</text>
<text x="190" y="80" font-size="12.5" fill="var(--sub)">次の回</text>
<rect x="300" y="46" width="130" height="28" rx="5" fill="var(--warm)"/><text x="365" y="65" font-size="13" text-anchor="middle" fill="#fff">A勝 確率 1/2</text>
<rect x="300" y="176" width="40" height="28" rx="5" fill="var(--dim)"/><text x="320" y="195" font-size="13" text-anchor="middle" fill="var(--ink)">B勝</text>
<rect x="520" y="136" width="150" height="28" rx="5" fill="var(--warm)"/><text x="595" y="155" font-size="13" text-anchor="middle" fill="#fff">A勝 確率 1/4</text>
<rect x="520" y="216" width="150" height="28" rx="5" fill="var(--cool)"/><text x="595" y="235" font-size="13" text-anchor="middle" fill="#fff">B勝 確率 1/4</text>
<text x="460" y="66" font-size="12.5" fill="var(--sub)">ここでAの優勝が確定する</text>
<text x="430" y="120" font-size="12.5" fill="var(--sub)">その次の回</text>
</svg>
<figcaption>Aが残り1勝・Bが残り2勝で中断した場合の続きである。各回の勝敗は確率1/2ずつとする。Aの優勝確率は 1/2＋1/4＝3/4 でBは1/4である。賭け金は3対1に分けるのが公平になる。</figcaption>
</figure>
<p>この推論には第6章で学ぶ独立な試行の確率と第7章で学ぶ期待値の考え方がすでに含まれている。Aの取り分を賭け金の \( \tfrac{3}{4} \) とするのはAが受け取る金額の期待値に等しい。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>先に3勝した方が勝つ勝負でAが1勝・Bが2勝の時点で中断した。各回の勝敗の確率はともに \( \tfrac12 \) とする。賭け金 64 枚をどう分けるのが公平か。</p>
<details open><summary>解き方</summary><div>手順1 Aは残り2勝でBは残り1勝である。Aが優勝するのは続く2回にAが連勝する場合だけである。<br>手順2 その確率は \( \tfrac12\times\tfrac12=\tfrac14 \) でBの優勝確率は \( 1-\tfrac14=\tfrac34 \) である。<br>手順3 64枚を1対3に分ける。<br>答え Aが16枚・Bが48枚</div></details></div>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">分配問題は企業価値の評価と同じで過去ではなく残りの展開で値をつける</p>
<p>過去の勝ち数は過去の利益にあたる。値を決めるのは残り何勝要るかという将来の展開である。</p>
</aside>

<h2 id="s5">現実世界の統計 ナイチンゲールの図</h2>
<p>フローレンス・ナイチンゲールは看護師として知られるが統計の図で政策を動かした人物でもある。クリミア戦争の野戦病院で兵士の死亡記録を集めた。1858年に英国陸軍の衛生に関する報告書を私家版で印刷し月ごとの死因を扇形の面積で示す図を載せた。円を12か月に分け防ぐことのできた感染症による死亡・負傷による死亡・その他の死亡を色で分けた。</p>
<p>図が示したのは死亡の大半が戦闘ではなく病院の衛生状態に起因する病気だったことである。数字の表だけでは伝わりにくい事実を1枚の図で示した。データを集めて要約し図で伝える手順は記述統計そのものである。第1章で学ぶヒストグラムも同じ目的の図である。</p>
<aside class="an an-rw"><b>現実世界</b>
<p class="an-h">ナイチンゲールの図は面積で量を表す</p>
<p>扇形の中心角はどの月も等しく半径を変えて面積を死者数に比例させた。半径を量に比例させると面積が2乗で大きく見えるからである。</p>
<p class="an-x">ヒストグラムも面積が度数を表す図である。階級の幅が等しい場合に限り高さで比べてよい。</p>
</aside>

<h2 id="s6">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 記述統計と推測統計</div>
<p class="qz-q">次の記述のうち推測統計の考え方を用いているものを1つ選べ。</p>
<ol><li>ある球団の今季の全試合の観客数を合計する</li><li>ある会社の全社員の年齢の中央値を求める</li><li>投票を終えた有権者の一部に投票先を聞き当選者を予測する</li><li>ある店の1年間の売上を月ごとに棒グラフにする</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。出口調査は投票者の一部を標本として全投票者という母集団の投票先を推し量る。1 と 2 と 4 は全データを集計して要約する記述統計である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 分配問題</div>
<p class="qz-q">同じ強さの2人が先に4勝した方が勝つ勝負をした。Aが3勝・Bが2勝の時点で中断した。Aの優勝確率を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は \( \tfrac34 \) である。Aは残り1勝でBは残り2勝である。Bが優勝するのは続く2回をBが連勝する場合だけで確率は \( \tfrac14 \) である。Aの優勝確率は \( 1-\tfrac14=\tfrac34 \) である。本文の例と同じく必要な残り勝数だけで値が定まる。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 賭け金の分配</div>
<p class="qz-q">先に3勝した方が勝つ勝負でAが2勝・Bが0勝の時点で中断した。各回の勝敗の確率はともに \( \tfrac12 \) である。賭け金 80 枚を公平に分けるときAの取り分は何枚か。</p>
<details><summary>解答と解説</summary><div>正解は 70 枚である。Aは残り1勝でBは残り3勝である。Bが優勝するのは続く3回をBがすべて勝つ場合だけで確率は \( \left(\tfrac12\right)^3=\tfrac18 \) である。Aの優勝確率は \( \tfrac78 \) で取り分は \( 80\times\tfrac78=70 \) 枚である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 学習指導要領での位置</div>
<p class="qz-q">平成30年告示の高等学校学習指導要領で数学Aの場合の数と確率に含まれる内容を1つ選べ。</p>
<ol><li>相関係数</li><li>条件付き確率</li><li>正規分布</li><li>区間推定</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。数学Aの場合の数と確率は数え上げの原則・順列と組合せ・確率と期待値・独立な試行・条件付き確率を扱う。相関係数は数学Ⅰで正規分布と区間推定は数学Bである。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 紅茶の実験</div>
<p class="qz-q">8杯の紅茶のうち4杯は牛乳を先に入れ残りの4杯は紅茶を先に入れた。判別できると主張する人が牛乳を先に入れた4杯を選ぶ。まったくでたらめに4杯を選んだ場合に4杯すべてが正しい確率を求めよ。</p>
<details><summary>解答と解説</summary><div>正解は \( \tfrac{1}{70} \) である。8杯から4杯を選ぶ選び方は \( {}_8\mathrm{C}_4=\tfrac{8\cdot7\cdot6\cdot5}{4\cdot3\cdot2\cdot1}=70 \) 通りである。すべて正しい選び方は1通りなので確率は \( \tfrac{1}{70}\approx0.014 \) である。でたらめでは起こりにくい結果なので全問正解なら判別できるという主張を支持する根拠になる。これが仮説検定の考え方である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 全数調査と標本調査</div>
<p class="qz-q">標本調査を用いるのが適当なものを1つ選べ。</p>
<ol><li>国勢調査</li><li>学校で行う健康診断</li><li>出荷前の缶詰の中身の品質検査</li><li>入学試験の採点</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。缶詰を開けると商品にならないので全部を調べることはできない。一部を抜き取って全体の品質を推し量る。1 と 2 と 4 は全員分の結果そのものが必要なので全数調査で行う。</div></details></div>

<h2 id="s7">この章の要点</h2>
<div class="tb-key"><b>要点</b>
記述統計は手元の全データを要約し推測統計は標本から母集団を推し量る。<br>
推測には標本の偶然による誤差が伴いその大きさを確率で表す。<br>
高校では数学Ⅰ データの分析 → 数学A 場合の数と確率 → 数学B 統計的な推測 の順に学ぶ。<br>
共通テストの『数学Ⅰ，数学A』ではデータの分析と場合の数と確率がどちらも必答である。<br>
『数学Ⅱ，数学B，数学C』の統計的な推測は4項目から3項目を選ぶ選択問題の1つである。<br>
分配問題の答えは過去の勝ち数ではなく残りに必要な勝ち数で定まる。</div>

<h2 id="s8">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>中断した勝負の賭け金を優勝確率の比で分けることは、公平な分け方と言えるか。</strong> 本文はこれまでの勝ち数ではなく、優勝までに残り何勝要るかで分ける考え方を示した。過去の勝ち数を重く見るか、残りの展開を重く見るかで公平の意味が異なる。</li>
<li class="tb-vnote"><strong>誤差を必ず伴う推測統計の結論を、判断の根拠にしてよいか。</strong> 本文は、標本の選び方に偶然が入るので推測には必ず誤差が伴うとした。缶詰の品質検査のように全数を調べられない場面もあり、誤差をどこまで許すかで判断が異なる。</li>
</ul>

<h2 id="s9">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 — https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_03.pdf</li>
<li>文部科学省 高等学校学習指導要領解説 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>大学入試センター 令和9年度大学入学共通テスト出題教科・科目の出題方法等 — https://www.dnc.ac.jp/albums/abm.php?d=753&amp;f=abm00005360.pdf</li>
<li>大学入試センター 令和7年度大学入学共通テストの主な変更点について — https://www.dnc.ac.jp/albums/abm.php?d=642&amp;f=abm00004895.pdf</li>
<li>大学入試センター 令和7年度 問題評価・分析委員会報告書 本試験 — https://www.dnc.ac.jp/kyotsu/hyouka/r7_hyouka/r7_hyoukahoukokusyo_honshiken.html</li>
<li>Problem of points — Wikipedia — https://en.wikipedia.org/wiki/Problem_of_points</li>
<li>Pascal to Fermat 1654 letters — APS News — https://www.aps.org/apsnews/2009/07/pascal-letters-fermat-points</li>
<li>Nightingale's Rose Diagram — Lehigh University Libraries — https://exhibits.lib.lehigh.edu/exhibits/show/data_visualization/science/nightingale</li>
<li>Galton as statistician — galton.org — https://www.galton.org/statistician.html</li>
<li>The Design of Experiments — Wikipedia — https://en.wikipedia.org/wiki/The_Design_of_Experiments</li>
<li>John Tukey — Wikipedia — https://en.wikipedia.org/wiki/John_Tukey</li>
</ol>
