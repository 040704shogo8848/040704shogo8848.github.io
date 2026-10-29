<!--meta
{"chapter": 10, "part": "第2編 物質の変化とその利用", "title": "溶液の濃度", "thesis": "濃度は溶質の量を溶液の量で割った比である。分子に質量をとれば質量パーセント濃度で物質量をとればモル濃度になる。両者は密度を介して換算でき希釈では溶質の物質量だけが保存される。", "verify": {"date": "2026-10-15", "checked": 51, "match": 45, "fixed": 5, "unconfirmed": 1}}
-->
<p>第9章では質量・粒子数・気体の体積を物質量 mol に換算する方法を扱った。実験室で扱う物質の多くは水溶液である。水溶液の中の溶質は天秤で直接量れない。そこで溶液の体積に濃度を掛けて溶質の物質量を求める。この章の濃度は第9章の換算図に「溶液の体積」という4本目の経路を加えるものである。</p>
<p>共通テストでこの範囲から出る論点は5種類である。溶質・溶媒・溶液の区別・質量パーセント濃度の計算・モル濃度の計算・密度を使った両者の換算・希釈と溶液の調製の手順である。第13章の中和滴定はこの章のモル濃度をそのまま使う。</p>

<h2 id="s1">溶質・溶媒・溶液</h2>
<p>物質が液体に溶けて均一に混じり合ったものを<strong>溶液</strong>と呼ぶ。溶かしている液体を<strong>溶媒</strong>と呼び溶けている物質を<strong>溶質</strong>と呼ぶ。食塩水では水が溶媒で塩化ナトリウムが溶質である。溶媒が水である溶液を水溶液と呼ぶ。</p>
<p><strong class="hit">溶液の質量は溶媒の質量と溶質の質量の和である</strong>。溶質が溶けても質量は消えない。一方で体積は和にならないことが多い。水 50 mL とエタノール 50 mL を混ぜると 100 mL より小さくなる。分子どうしが引き合って詰まるからである。このため濃度の計算では質量は足し算できるが体積は問題文に与えられた値を使う。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 230" role="img" aria-label="溶質と溶媒と溶液の質量の関係と質量パーセント濃度の分母">
  <text x="20" y="26" font-size="13" fill="var(--muted)">食塩 20 g を水 180 g に溶かす</text>
  <rect x="50" y="60" width="20" height="40" fill="var(--warm)"/>
  <text x="60" y="122" font-size="13" text-anchor="middle">溶質 20 g</text>
  <text x="110" y="86" font-size="18" text-anchor="middle">＋</text>
  <rect x="140" y="60" width="180" height="40" fill="var(--cool)" opacity=".8"/>
  <text x="230" y="122" font-size="13" text-anchor="middle">溶媒 180 g</text>
  <text x="350" y="86" font-size="18" text-anchor="middle">＝</text>
  <rect x="400" y="60" width="20" height="40" fill="var(--warm)"/>
  <rect x="420" y="60" width="180" height="40" fill="var(--cool)" opacity=".8"/>
  <text x="500" y="122" font-size="13" text-anchor="middle">溶液 200 g</text>
  <line x1="380" y1="140" x2="600" y2="140" stroke="var(--ink)"/>
  <text x="490" y="164" font-size="13" text-anchor="middle" font-weight="600" fill="var(--accent)">20 ÷ 200 × 100 ＝ 10 %  正しい分母は溶液</text>
  <text x="490" y="196" font-size="13" text-anchor="middle" fill="#B91C1C">20 ÷ 180 × 100 ＝ 11.1 %  溶媒で割る誤り</text>
  <text x="640" y="86" font-size="12.5" fill="var(--sub)">質量は</text>
  <text x="640" y="104" font-size="12.5" fill="var(--sub)">足し算</text>
</svg>
<figcaption>帯の長さは質量に比例させて描いた。溶液の質量は溶質と溶媒の和である。質量パーセント濃度の分母は溶液の200 gであり溶媒の180 gではない。共通テストは溶媒で割った値を誤答の選択肢に置く。</figcaption>
</figure>

<aside class="an an-lv"><b>男女で言えば</b>
<p class="an-h">濃度の分母は会場の全員であり反対側の人数ではない</p>
<p>男性2人と女性8人の会で男性の割合は 2÷10 ＝ 20 % であり 2÷8 ではない。溶質の質量は溶媒ではなく溶液の質量で割る。</p>
</aside>

<h2 id="s2">質量パーセント濃度とモル濃度</h2>
<p>濃度は溶質の量を溶液の量で割った比である。分子と分母に何をとるかで2種類の濃度が定義される。</p>
<div class="fx">質量パーセント濃度 [%] ＝ 溶質の質量 [g] ÷ 溶液の質量 [g] × 100<small>分子も分母も g なので単位は約分されて % だけが残る</small></div>
<div class="fx">モル濃度 [mol/L] ＝ 溶質の物質量 [mol] ÷ 溶液の体積 [L]<small>分母は溶液の体積であり溶媒の体積ではない</small></div>
<p>質量パーセント濃度は中学で扱った濃度である。天秤で量った値から直接計算できるので市販の薬品の表示に使われる。モル濃度は溶液の体積から溶質の粒子数を計算できるので反応の量を扱う計算に使われる。<strong class="hit">反応は粒子の個数で起こるので化学の計算の主役はモル濃度である</strong>。モル濃度は溶液の体積を分母にとるので温度で値が変わり、温度に依存しない濃度として溶媒 1 kg あたりの物質量で表す質量モル濃度がある。</p>

<div class="fx">例1 ・ 水酸化ナトリウム 4.0 g を水に溶かして 250 mL にした溶液のモル濃度 ・ NaOH＝40<br>4.0 g × (1 mol ／ 40 g) ＝ 0.10 mol<br>0.10 mol ÷ 0.250 L ＝ 0.40 mol/L<small>mL は L に直してから割る。250 mL ＝ 0.250 L</small></div>
<div class="fx">例2 ・ 0.40 mol/L の NaOH 水溶液 30 mL に含まれる NaOH の質量<br>30 mL × (1 L ／ 1000 mL) × (0.40 mol ／ 1 L) × (40 g ／ 1 mol) ＝ 0.48 g<small>モル濃度は「溶液の L」と「溶質の mol」の換算レートである。mL → L → mol → g の順に約分が続く</small></div>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">モル濃度は防御率である。量を 1 L という9イニングにそろえる</p>
<p>自責点 ／ 溶質の物質量。投球回 ／ 溶液の体積。合計ではなく単位量あたりで比べ c×V＝n で合計に戻す。</p>
</aside>

<h3>微量の濃度 ppm と ppb</h3>
<p>環境や半導体の分野ではごく小さな質量の比を ppm と ppb で表す。ppm は 10<sup>−6</sup> を表し ppb は 10<sup>−9</sup> を表す。どちらも質量パーセント濃度と同じく質量の比であり単位の桁だけが異なる。1 % は 10<sup>−2</sup> なので 1 % ＝ 10,000 ppm ＝ 10,000,000 ppb である。水溶液では溶液 1 kg に 1 mg の溶質を含むと 1 ppm である。</p>
<div class="fx">1 ppm ＝ 1 mg ／ 1 kg ＝ 10<sup>−3</sup> g ／ 10<sup>3</sup> g ＝ 10<sup>−6</sup><small>分子と分母の単位をそろえてから桁を数える。mg と kg の換算を単位ごと書けば桁を取り違えない</small></div>

<h3>誤答の選択肢に置かれる3つの型</h3>
<p>濃度の計算問題の誤答は3つの型に分類できる。1つ目は分母に溶媒をとる型である。2つ目は mL を L に直さずに割る型であり値が1000倍ずれる。3つ目は「溶質 1 mol を水 1 L に溶かした溶液」を 1 mol/L とする型である。溶質が溶けると溶液の体積は 1 L からずれるので 1 mol/L にはならない。どの型も単位を書いて約分すれば検出できる。</p>

<h2 id="s3">質量パーセント濃度とモル濃度の換算</h2>
<p>2つの濃度は分子も分母も異なる。分子の換算には溶質のモル質量を使い分母の換算には溶液の密度を使う。<strong class="hit">換算は溶液 1 L を仮定して計算する</strong>。モル濃度の分母が 1 L なので 1 L を仮定すると溶質の物質量がそのままモル濃度の数値になる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="濃塩酸の質量パーセント濃度からモル濃度へ換算する手順">
  <defs><marker id="ah10a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>
  <text x="20" y="26" font-size="13" fill="var(--muted)">濃塩酸 37 % ・ 密度 1.18 g/cm³ ・ HCl＝36.5 を 1 L 分で計算する</text>
  <g font-size="14" font-weight="600" text-anchor="middle">
    <rect x="20" y="70" width="130" height="64" rx="6" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <text x="85" y="98">溶液 1 L</text><text x="85" y="120" font-size="12.5" fill="var(--sub)">1000 cm³</text>
    <rect x="200" y="70" width="130" height="64" rx="6" fill="none" stroke="var(--cool)" stroke-width="2"/>
    <text x="265" y="98">溶液 1180 g</text><text x="265" y="120" font-size="12.5" fill="var(--sub)">溶液の質量</text>
    <rect x="380" y="70" width="130" height="64" rx="6" fill="none" stroke="var(--warm)" stroke-width="2"/>
    <text x="445" y="98">HCl 437 g</text><text x="445" y="120" font-size="12.5" fill="var(--sub)">溶質の質量</text>
    <rect x="560" y="70" width="140" height="64" rx="6" fill="var(--accent)"/>
    <text x="630" y="98" fill="#fff">HCl 12.0 mol</text><text x="630" y="120" font-size="12.5" fill="#fff">＝ 12.0 mol/L</text>
  </g>
  <g stroke="var(--ink)" stroke-width="1.5">
    <line x1="152" y1="102" x2="196" y2="102" marker-end="url(#ah10a)"/>
    <line x1="332" y1="102" x2="376" y2="102" marker-end="url(#ah10a)"/>
    <line x1="512" y1="102" x2="556" y2="102" marker-end="url(#ah10a)"/>
  </g>
  <g font-size="12.5" text-anchor="middle">
    <text x="175" y="164" fill="var(--cool)">× 密度</text><text x="175" y="182" fill="var(--sub)">1.18 g/cm³</text>
    <text x="355" y="164" fill="var(--warm)">× 37/100</text><text x="355" y="182" fill="var(--sub)">質量パーセント</text>
    <text x="535" y="164" fill="var(--accent)">÷ モル質量</text><text x="535" y="182" fill="var(--sub)">36.5 g/mol</text>
  </g>
  <text x="360" y="226" font-size="13" text-anchor="middle" fill="var(--muted)">体積 → 溶液の質量 → 溶質の質量 → 溶質の物質量 と分母から分子へ順に換算する</text>
</svg>
<figcaption>溶液1 Lを仮定すると最後に得た物質量の数値がそのままモル濃度になる。密度は溶液の体積と溶液の質量を結び質量パーセント濃度は溶液の質量と溶質の質量を結ぶ。モル質量は溶質の質量と溶質の物質量を結ぶ。</figcaption>
</figure>

<div class="fx">例3 ・ 濃塩酸 37 % ・ 密度 1.18 g/cm<sup>3</sup> のモル濃度<br>1000 cm<sup>3</sup> × (1.18 g ／ 1 cm<sup>3</sup>) × (37 ／ 100) × (1 mol ／ 36.5 g) ＝ 11.96 mol → 12 mol/L<small>市販の濃塩酸のモル濃度は約 12 mol/L である。36 % では 11.6 mol/L ・ 38 % では 12.4 mol/L が文献値である</small></div>
<p>逆向きの換算も同じく 1 L を仮定する。溶質の物質量からモル質量で溶質の質量を求め密度から溶液の質量を求めて割る。</p>
<div class="fx">例4 ・ 2.0 mol/L の NaOH 水溶液 ・ 密度 1.08 g/cm<sup>3</sup> の質量パーセント濃度<br>溶質 2.0 mol × 40 g/mol ＝ 80 g ・ 溶液 1000 cm<sup>3</sup> × 1.08 g/cm<sup>3</sup> ＝ 1080 g<br>80 ÷ 1080 × 100 ＝ 7.4 %<small>分母に溶媒の質量 1000 g を使う誤りに注意する。1 L の溶液の質量は密度から求める</small></div>
<p>式にまとめると次の関係になる。暗記するより毎回 1 L を仮定して組み立てるほうが誤りが少ない。</p>
<div class="fx">モル濃度 ＝ 1000 × 密度 [g/cm<sup>3</sup>] × (質量パーセント濃度 ／ 100) ÷ モル質量 [g/mol]</div>

<aside class="an an-biz"><b>スタートアップで言えば</b>
<p class="an-h">1 L を仮定するのはユニットエコノミクスと同じ1単位の切り出しである</p>
<p>濃度は量によらない比なので顧客1人分と同じく溶液 1 L 分で計算しても答えは変わらない。100 g を仮定すれば質量パーセント濃度の数値がそのまま溶質の g 数になる。</p>
</aside>

<h2 id="s4">希釈と混合</h2>
<p>溶液に溶媒を加えて濃度を下げる操作を<strong>希釈</strong>と呼ぶ。希釈では溶媒が増えるだけで溶質の粒子は増えも減りもしない。<strong class="hit">希釈の前後で保存されるのは溶質の物質量である</strong>。濃度×体積＝物質量なので次の式が成り立つ。</p>
<div class="fx">c<sub>1</sub> × V<sub>1</sub> ＝ c<sub>2</sub> × V<sub>2</sub><small>c はモル濃度 ・ V は溶液の体積。両辺とも溶質の物質量を表す</small></div>

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="希釈の前後で溶質の粒子の数は変わらず体積だけが増える">
  <defs><marker id="ah10b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>
  <!-- before -->
  <path d="M90 60 L90 200 L210 200 L210 60" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <rect x="92" y="150" width="116" height="48" fill="var(--cool)" opacity=".25"/>
  <g fill="var(--warm)">
    <circle cx="110" cy="165" r="5"/><circle cx="135" cy="180" r="5"/><circle cx="160" cy="162" r="5"/><circle cx="185" cy="178" r="5"/>
    <circle cx="120" cy="188" r="5"/><circle cx="150" cy="190" r="5"/><circle cx="175" cy="160" r="5"/><circle cx="198" cy="190" r="5"/>
  </g>
  <text x="150" y="226" font-size="13" text-anchor="middle">希釈前 100 mL ・ 粒子 8 個</text>
  <!-- arrow -->
  <line x1="250" y1="150" x2="340" y2="150" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah10b)"/>
  <text x="295" y="138" font-size="12.5" text-anchor="middle" fill="var(--sub)">水を加える</text>
  <!-- after -->
  <path d="M380 40 L380 200 L560 200 L560 40" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <rect x="382" y="72" width="176" height="126" fill="var(--cool)" opacity=".25"/>
  <g fill="var(--warm)">
    <circle cx="405" cy="90" r="5"/><circle cx="470" cy="100" r="5"/><circle cx="530" cy="86" r="5"/><circle cx="420" cy="140" r="5"/>
    <circle cx="500" cy="135" r="5"/><circle cx="440" cy="185" r="5"/><circle cx="540" cy="170" r="5"/><circle cx="475" cy="165" r="5"/>
  </g>
  <text x="470" y="226" font-size="13" text-anchor="middle">希釈後 400 mL ・ 粒子 8 個</text>
  <g font-size="12.5" fill="var(--sub)">
    <text x="590" y="90">物質量 一定</text>
    <text x="590" y="112">体積 4 倍</text>
    <text x="590" y="134" fill="var(--accent)" font-weight="600">濃度 1/4</text>
  </g>
</svg>
<figcaption>液の断面の面積は体積の比4倍に合わせて描いた。水を加えても溶質の粒子の数は変わらない。体積が4倍になれば1 Lあたりの粒子の数は4分の1になりモル濃度も4分の1になる。</figcaption>
</figure>

<div class="fx">例5 ・ 12 mol/L の濃塩酸から 0.10 mol/L の塩酸 500 mL をつくるのに要する濃塩酸の体積<br>必要な HCl ＝ 0.10 mol/L × 0.500 L ＝ 0.050 mol<br>0.050 mol × (1 L ／ 12 mol) ＝ 4.2×10<sup>−3</sup> L ＝ 4.2 mL<small>4.2 mL の濃塩酸を水で薄めて全体を 500 mL にする。500 mL の水を加えるのではない</small></div>
<p>2種類の溶液を混ぜる場合も溶質の物質量を足し算する。体積は問題文が「混合後の体積は混合前の和とする」と与えた場合だけ足し算する。0.20 mol/L の溶液 100 mL と 0.50 mol/L の溶液 300 mL を混ぜると溶質は 0.020 ＋ 0.150 ＝ 0.170 mol で体積は 0.400 L なのでモル濃度は 0.425 mol/L である。濃度の単純平均 0.35 mol/L ではない。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">希釈は増資による持分の希薄化である。創業者の株数は変わらない</p>
<p>創業者の株数 ／ 溶質の物質量。発行済株式数 ／ 溶液の体積。発行済株式を2倍にすれば持分比率は半分になる。</p>
</aside>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">希釈は無安打の打数を足す操作である</p>
<p>安打数 ／ 溶質の物質量。打数 ／ 溶液の体積。混合後の濃度も2人の打率の平均ではなく安打の合計を打数の合計で割る。</p>
</aside>

<h2 id="s5">溶液の調製とメスフラスコ</h2>
<p>決まったモル濃度の溶液をつくる操作を溶液の調製と呼ぶ。モル濃度の分母は溶液の体積なので<strong class="hit">溶液全体の体積を正確に合わせる器具としてメスフラスコを使う</strong>。メスフラスコは首の細い部分に標線があり 20 ℃ で標線まで液を満たしたときに表示の体積になるようにつくられている。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="メスフラスコで溶液を調製する4つの手順">
  <g font-size="13" font-weight="600" text-anchor="middle">
    <text x="90" y="26">1 量り取る</text><text x="270" y="26">2 少量の水で溶かす</text><text x="450" y="26">3 移して洗い込む</text><text x="630" y="26">4 標線まで水を加える</text>
  </g>
  <!-- 1 balance -->
  <rect x="40" y="150" width="100" height="16" fill="var(--line)"/>
  <rect x="60" y="134" width="60" height="16" fill="none" stroke="var(--ink)"/>
  <circle cx="90" cy="128" r="6" fill="var(--warm)"/>
  <text x="90" y="196" font-size="12.5" fill="var(--sub)" text-anchor="middle">NaCl 5.85 g</text>
  <!-- 2 beaker -->
  <path d="M235 100 L235 170 L305 170 L305 100" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <rect x="237" y="140" width="66" height="28" fill="var(--cool)" opacity=".3"/>
  <text x="270" y="196" font-size="12.5" fill="var(--sub)" text-anchor="middle">ビーカー</text>
  <!-- 3 transfer -->
  <path d="M440 70 L440 120 Q410 130 410 160 Q410 190 450 190 Q490 190 490 160 Q490 130 460 120 L460 70" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <path d="M395 52 L438 66" stroke="var(--cool)" stroke-width="3"/>
  <text x="450" y="216" font-size="12.5" fill="var(--sub)" text-anchor="middle">洗った水も全部入れる</text>
  <!-- 4 flask to mark -->
  <path d="M620 50 L620 120 Q590 130 590 160 Q590 190 630 190 Q670 190 670 160 Q670 130 640 120 L640 50" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <path d="M621 76 L621 121 Q592 131 592 160 Q592 188 630 188 Q668 188 668 160 Q668 131 639 121 L639 76 Z" fill="var(--cool)" opacity=".3"/>
  <line x1="612" y1="76" x2="648" y2="76" stroke="var(--accent)" stroke-width="2"/>
  <text x="655" y="72" font-size="12.5" fill="var(--accent)">標線</text>
  <text x="630" y="216" font-size="12.5" fill="var(--sub)" text-anchor="middle">栓をして振り混ぜる</text>
  <text x="360" y="246" font-size="12.5" fill="var(--muted)" text-anchor="middle">0.100 mol/L の NaCl 水溶液 1.00 L ＝ 0.100 mol ＝ 5.85 g を溶かして全体を 1.00 L にする</text>
</svg>
<figcaption>溶質を少量の水で溶かしてからメスフラスコに移す。ビーカーに残った溶質も洗い込む。最後に標線まで水を加えて溶液全体を1.00 Lにする。1.00 Lの水に溶かす方法では溶液の体積が1.00 Lにならない。</figcaption>
</figure>

<p>手順の要点は3つである。溶質を直接メスフラスコに入れず先にビーカーで溶かす。溶解のときに発熱や吸熱が生じると液の温度が変わり体積が変わるので室温に戻してから標線を合わせる。ビーカーとガラス棒を少量の水で洗いその水もメスフラスコに入れる。洗い込みを省くと溶質の一部がビーカーに残り濃度が小さくなる。</p>
<p>メスフラスコの内側が純水で濡れていても使ってよい。最後に標線まで水を加えるので最初からある水は結果に影響しない。一方で溶液を正確な体積だけ量り取るホールピペットやビュレットは使う溶液で内側を洗ってから使う。この操作を共洗いと呼び第13章の中和滴定で扱う。</p>

<h2 id="s6">溶解度と化学基礎の範囲</h2>
<p>一定量の溶媒に溶ける溶質の量には限度がある。限度まで溶けた溶液を<strong>飽和溶液</strong>と呼び溶媒 100 g に溶ける溶質の最大の質量 [g] を<strong>溶解度</strong>と呼ぶ。固体の溶解度は多くの場合温度が高いほど大きい。温度と溶解度の関係を表したグラフが溶解度曲線である。</p>
<p>学習指導要領では溶解度曲線を中学校で扱い化学基礎では混合物の分離の再結晶で使う。<strong class="hit">溶解度を溶解平衡と関連付けて計算する内容と気体の溶解度は科目「化学」の範囲である</strong>。化学基礎で溶解度を使う計算は飽和溶液の質量パーセント濃度を溶解度から求める程度にとどまると考えてよい。</p>
<div class="fx">溶解度 S の物質の飽和溶液の質量パーセント濃度 ＝ S ÷ (100 ＋ S) × 100<small>溶解度が 60 なら 60 ÷ 160 × 100 ＝ 37.5 %。溶解度の分母は溶媒 100 g で濃度の分母は溶液 160 g である</small></div>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">溶解度は会場の定員であり温度は会場の広さである</p>
<p>定員を超えた人は外に残る ／ 溶けきれない溶質は底に残る。多くの固体は温度を下げると定員が減り超えた分が結晶として出る。これが再結晶である。</p>
</aside>

<h2 id="s7">現実世界の濃度 点滴と半導体工場の水</h2>
<p>濃度の計算は医療と半導体製造の品質を数値で管理する手段である。前者は 0.9 % という大きな濃度を正確に保ち後者は 10<sup>−10</sup> の桁の微量を検出する。</p>
<aside class="an an-rw"><b>現実世界</b>
<p>点滴に使う生理食塩液は塩化ナトリウム 0.9 w/v% の水溶液である。w/v% は溶液 100 mL あたりの溶質のグラム数であり溶液 1 L に 9.0 g を含む。この表示は質量パーセント濃度とは分母が異なる。モル濃度に直すと 9.0 g ÷ 58.5 g/mol ＝ 0.154 mol/L で添付文書に記載された Na<sup>+</sup> と Cl<sup>−</sup> の濃度 154 mEq/L と一致する。1価のイオンでは 1 mEq は 1 mmol である。</p>
<p>半導体工場はウェハーを洗うために超純水を使う。純粋な水の抵抗率は 25 ℃ で約 18.2 MΩ・cm であり超純水はこの値に近づけて管理される。塩化ナトリウムが 0.1 ppb 混じるだけで抵抗率は 18.11 MΩ・cm に下がる。0.1 ppb は質量の比で 10<sup>−10</sup> である。水 1 L ＝ 1000 g に含まれる NaCl は 1.0×10<sup>−7</sup> g であり 1.0×10<sup>−7</sup> ÷ 58.5 ＝ 1.7×10<sup>−9</sup> mol である。粒子数に直すと 1.7×10<sup>−9</sup> × 6.02×10<sup>23</sup> ＝ 1.0×10<sup>15</sup> 個になる。濃度の数値が小さくても粒子の数は 10<sup>15</sup> 個の桁で存在する。</p>
<p>洗浄工程では超純水に薬液を混ぜた洗浄液も使う。1965年に RCA 社の Werner Kern が開発した SC-1 という洗浄液は水 5 ・ 29 % アンモニア水 1 ・ 30 % 過酸化水素水 1 の体積比で混ぜて 75 ℃ から 80 ℃ で使う。体積比の調合も希釈の計算の一種である。</p>
</aside>

<h2 id="s8">確認問題</h2>
<p>必要があれば次の値を使うこと。H＝1.0 ・ C＝12 ・ O＝16 ・ Na＝23 ・ S＝32 ・ Cl＝35.5。</p>

<div class="qz"><div class="qz-h">問1 ・ 質量パーセント濃度</div>
<p class="qz-q">水 100 g にスクロース 25 g を溶かした水溶液の質量パーセント濃度として最も適当なものを1つ選べ。</p>
<ol><li>20 %</li><li>25 %</li><li>30 %</li><li>33 %</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。溶液の質量は 100 ＋ 25 ＝ 125 g で 25 ÷ 125 × 100 ＝ 20 %。2 は溶媒の質量 100 g で割った誤りである。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ モル濃度</div>
<p class="qz-q">グルコース C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> 9.0 g を水に溶かして 200 mL にした水溶液のモル濃度として最も適当なものを1つ選べ。</p>
<ol><li>0.045 mol/L</li><li>0.050 mol/L</li><li>0.25 mol/L</li><li>0.45 mol/L</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。分子量は 12×6 ＋ 1.0×12 ＋ 16×6 ＝ 180。9.0 g × (1 mol ／ 180 g) ＝ 0.050 mol。0.050 mol ÷ 0.200 L ＝ 0.25 mol/L。2 は物質量のままで体積で割っていない。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 密度を使う換算</div>
<p class="qz-q">質量パーセント濃度 98 % ・ 密度 1.8 g/cm<sup>3</sup> の濃硫酸のモル濃度として最も適当なものを1つ選べ。H<sub>2</sub>SO<sub>4</sub>＝98 とする。</p>
<ol><li>1.8 mol/L</li><li>10 mol/L</li><li>18 mol/L</li><li>98 mol/L</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。溶液 1 L を仮定する。1000 cm<sup>3</sup> × 1.8 g/cm<sup>3</sup> ＝ 1800 g。溶質は 1800 × 0.98 ＝ 1764 g。1764 ÷ 98 ＝ 18 mol でモル濃度は 18 mol/L である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 希釈</div>
<p class="qz-q">0.50 mol/L の塩化ナトリウム水溶液 20 mL をメスフラスコに取り水を加えて全体を 100 mL にした。この水溶液のモル濃度として最も適当なものを1つ選べ。</p>
<ol><li>0.010 mol/L</li><li>0.10 mol/L</li><li>0.25 mol/L</li><li>2.5 mol/L</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。溶質は 0.50 × 0.020 ＝ 0.010 mol で希釈後も変わらない。0.010 mol ÷ 0.100 L ＝ 0.10 mol/L。1 は物質量を答えている。4 は体積の比を逆に掛けた値である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 溶液の調製</div>
<p class="qz-q">0.100 mol/L の塩化ナトリウム水溶液 1.00 L を調製する操作として最も適当なものを1つ選べ。</p>
<ol><li>塩化ナトリウム 5.85 g を水 1.00 L に溶かす</li><li>塩化ナトリウム 5.85 g をビーカーで少量の水に溶かしビーカーの洗液とともに 1.00 L のメスフラスコに移し標線まで水を加える</li><li>塩化ナトリウム 58.5 g をビーカーで少量の水に溶かし 1.00 L のメスフラスコに移し標線まで水を加える</li><li>水で濡れたメスフラスコは使えないので加熱して乾かしてから塩化ナトリウム 5.85 g を入れ標線まで水を加える</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。必要な NaCl は 0.100 mol × 58.5 g/mol ＝ 5.85 g。1 は溶液の体積が 1.00 L にならない。3 は 10 倍の量である。4 はメスフラスコが濡れていても結果に影響せず加熱は容器の体積を変えるおそれがあるので行わない。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 混合</div>
<p class="qz-q">0.20 mol/L の塩化ナトリウム水溶液 100 mL と 0.50 mol/L の塩化ナトリウム水溶液 300 mL を混合した。混合後の体積は混合前の和とする。混合後のモル濃度に最も近いものを1つ選べ。</p>
<ol><li>0.35 mol/L</li><li>0.43 mol/L</li><li>0.70 mol/L</li><li>0.85 mol/L</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。溶質は 0.20 × 0.100 ＋ 0.50 × 0.300 ＝ 0.020 ＋ 0.150 ＝ 0.170 mol。体積は 0.400 L。0.170 ÷ 0.400 ＝ 0.425 mol/L。1 は濃度の単純平均で 3 は濃度の和である。</div></details></div>

<h2 id="s9">この章の要点</h2>
<div class="tb-key"><b>要点</b>
溶液の質量は溶質と溶媒の和である。濃度の分母は溶媒ではなく溶液である。<br>
質量パーセント濃度は溶質の g を溶液の g で割りモル濃度は溶質の mol を溶液の L で割る。<br>
2つの濃度の換算は溶液 1 L を仮定し密度とモル質量を順に掛け算する。<br>
希釈と混合で保存されるのは溶質の物質量であり c₁V₁ ＝ c₂V₂ が成り立つ。<br>
調製はビーカーで溶かしてメスフラスコへ洗い込み標線まで水を加える。</div>

<h2 id="s10">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>濃度の表し方は、質量パーセント濃度とモル濃度のどちらを基本とすべきか。</strong> 本文は質量パーセント濃度が天秤の値から直接計算でき市販の薬品の表示に使われ、モル濃度が反応の量の計算に使われるとする。生理食塩液の w/v% のように分母の異なる表示もあり、どの用途を重く見るかで基本とする表し方が異なる。</li>
</ul>

<h2 id="s11">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Hydrochloric acid — Wikipedia — https://en.wikipedia.org/wiki/Hydrochloric_acid</li>
<li>Saline (medicine) — Wikipedia — https://en.wikipedia.org/wiki/Saline_(medicine)</li>
<li>医療用医薬品 詳細表示 生理食塩液 — PMDA — https://www.pmda.go.jp/PmdaSearch/iyakuDetail/260054_3311401A9144_1_02</li>
<li>Ultrapure water — Wikipedia — https://en.wikipedia.org/wiki/Ultrapure_water</li>
<li>RCA clean — Wikipedia — https://en.wikipedia.org/wiki/RCA_clean</li>
</ol>
