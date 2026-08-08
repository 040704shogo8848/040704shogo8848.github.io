---
section: industry
chapter: 6
slug: datacenter-siting
title: 計算資源はどこに置かれるか
thesis: データセンターの立地は電力の安さでも気候の涼しさでもなく、何年後に何MWを引けるかで決まる。安い電気と余った送電容量が同時にある土地は、たいてい過去の需要予測が外れた場所である。
---

# 計算資源はどこに置かれるか

前章は、計算需要を支える物理層がどこで詰まるかを扱った。この章は問いを一段ずらす。詰まっている物理層を前提にしたとき、事業者は地図のどこを選ぶのか、である。

立地の議論は2つの誤解に挟まれている。1つは電気が安い土地に建つという理解、もう1つは涼しい土地に建つという理解である。どちらも変数としては実在するが、順番が違う。実務では、==まず何年後に通電できるかで候補地の大半が消え、残った候補地のなかで運転費が比較される==。時間が先で費用が後である。この順序を逆に置くと、テキサスに建つ理由も秋田に建つ理由も説明できなくなる。

<figure class="tb-fig">
<svg viewBox="0 0 720 316" role="img" aria-label="立地制約が効く段階を示すふるいの図">
  <text x="12" y="20" font-size="11" fill="var(--muted)" letter-spacing="1">制約が効く順序</text>
  <text x="600" y="20" font-size="11" fill="var(--muted)" letter-spacing="1">落ちる理由</text>

  <g font-size="12.5" fill="var(--ink)">
    <rect x="12" y="34" width="560" height="34" rx="6" fill="var(--dim)" stroke="var(--line)"/>
    <text x="26" y="56">候補地の全体</text>
    <text x="600" y="56" font-size="11" fill="var(--muted)">—</text>

    <path d="M280 68 l0 10" stroke="var(--line)" stroke-width="1.5"/>
    <rect x="68" y="78" width="448" height="34" rx="6" fill="#EEF2FF" stroke="#D5DDF7"/>
    <text x="82" y="100">用途が許すレイテンシ帯</text>
    <text x="600" y="100" font-size="11" fill="var(--muted)">推論は人口圏、学習は不問</text>

    <path d="M280 112 l0 10" stroke="var(--line)" stroke-width="1.5"/>
    <rect x="112" y="122" width="360" height="34" rx="6" fill="#EEF2FF" stroke="#D5DDF7"/>
    <text x="126" y="144">特別高圧が届き、容量が空いている</text>
    <text x="600" y="144" font-size="11" fill="var(--muted)">最大の脱落段</text>

    <path d="M280 156 l0 10" stroke="var(--line)" stroke-width="1.5"/>
    <rect x="146" y="166" width="292" height="34" rx="6" fill="#EEF2FF" stroke="#D5DDF7"/>
    <text x="160" y="188">取水と排水の許認可が取れる</text>
    <text x="600" y="188" font-size="11" fill="var(--muted)">量ではなく可否</text>

    <path d="M280 200 l0 10" stroke="var(--line)" stroke-width="1.5"/>
    <rect x="174" y="210" width="236" height="34" rx="6" fill="#EEF2FF" stroke="#D5DDF7"/>
    <text x="188" y="232">地盤・災害・用地面積</text>
    <text x="600" y="232" font-size="11" fill="var(--muted)">50ha級が要る</text>

    <path d="M280 244 l0 10" stroke="var(--line)" stroke-width="1.5"/>
    <rect x="196" y="254" width="192" height="34" rx="6" fill="var(--accent)" stroke="var(--accent)"/>
    <text x="210" y="276" fill="#fff">実際に建つ場所</text>
    <text x="600" y="276" font-size="11" fill="var(--muted)">ここで初めて単価比較</text>
  </g>
  <text x="12" y="306" font-size="11" fill="var(--muted)">電力単価と気候はこの図のどの段でも候補地を落とさない。落とすのは時間と許認可である。</text>
</svg>
<figcaption>立地選定は費用の比較ではなく候補地の消去で進む。電力単価の比較が始まるのは、通電時期と許認可を通過した最後の集合のなかだけである。</figcaption>
</figure>

## 電力は量ではなく時間で効く

「電力需給が充実しているところ」という言い方は、発電量の話と受け取られやすい。実務で効いているのは発電量ではなく、送電容量が空いているかと、空いていない場合に何年待つかである。

米国の全国平均で、事業者が系統から電力を引くまでの待ち時間は4年とされる[出典](https://www.constructionowners.com/insights/how-long-it-actually-takes-to-power-a-data-center-in-2026-a-u-s-market-by-market-reality-check)。同じ資料は、北バージニアを供給するドミニオン・エナジーの区域では100MW接続の平均待ち時間が7年に達したと報告している。これに対し、現代的なデータセンターの躯体工事は米国の多くの市場で18か月から24か月で終わる。建物のほうが電気より2倍から4倍速く用意できる。

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="建設期間と通電待ち時間および機器納期の比較">
  <g font-size="11" fill="var(--muted)">
    <line x1="196" y1="30" x2="196" y2="216" stroke="var(--grid)"/>
    <line x1="292" y1="30" x2="292" y2="216" stroke="var(--grid)"/>
    <line x1="388" y1="30" x2="388" y2="216" stroke="var(--grid)"/>
    <line x1="484" y1="30" x2="484" y2="216" stroke="var(--grid)"/>
    <line x1="580" y1="30" x2="580" y2="216" stroke="var(--grid)"/>
    <line x1="676" y1="30" x2="676" y2="216" stroke="var(--grid)"/>
    <text x="196" y="234" text-anchor="middle">1年</text>
    <text x="292" y="234" text-anchor="middle">2年</text>
    <text x="388" y="234" text-anchor="middle">3年</text>
    <text x="484" y="234" text-anchor="middle">4年</text>
    <text x="580" y="234" text-anchor="middle">5年</text>
    <text x="676" y="234" text-anchor="middle">6年</text>
  </g>
  <g font-size="12" fill="var(--ink)">
    <text x="12" y="52">躯体工事</text>
    <rect x="100" y="40" width="192" height="16" rx="3" fill="var(--cool)"/>
    <text x="302" y="52" font-size="11" fill="var(--sub)">18〜24か月</text>

    <text x="12" y="84">電力用変圧器</text>
    <rect x="100" y="72" width="236" height="16" rx="3" fill="#A8A29A"/>
    <text x="346" y="84" font-size="11" fill="var(--sub)">128週</text>

    <text x="12" y="116">発電機昇圧変圧器</text>
    <rect x="100" y="104" width="266" height="16" rx="3" fill="#A8A29A"/>
    <text x="376" y="116" font-size="11" fill="var(--sub)">144週</text>

    <text x="12" y="148">通電（全米平均）</text>
    <rect x="100" y="136" width="384" height="16" rx="3" fill="var(--warm)"/>
    <text x="494" y="148" font-size="11" fill="var(--sub)">4年</text>

    <text x="12" y="180">通電（北バージニア100MW）</text>
    <rect x="100" y="168" width="672" height="16" rx="3" fill="var(--warm)"/>
    <text x="676" y="180" font-size="11" fill="#fff" text-anchor="end">7年</text>

    <text x="12" y="212">SMRの規制手続き</text>
    <rect x="100" y="200" width="480" height="16" rx="3" fill="#A8A29A"/>
    <text x="590" y="212" font-size="11" fill="var(--sub)">5年前後</text>
  </g>
  <text x="12" y="20" font-size="11" fill="var(--muted)">着工から起算した所要期間</text>
</svg>
<figcaption>躯体は最短の工程である。律速は通電と機器納期にあり、この2つはいずれも事業者の投資判断より長い。北バージニアのバーは図の右端を超える。</figcaption>
</figure>

この時間差が立地の意味を変える。==事業者が探しているのは安い電気ではなく、早い電気である==。そして==早い電気があるのは、送電網が既に敷かれていて、それを使う需要が来なかった土地である==。

テキサスの数字がこの構造を露出させた。ERCOTの大規模負荷の接続待ちは2024年12月の63GWから2025年11月の226GWへ増え、データセンターがその約73%を占めた[出典](https://www.utilitydive.com/news/texas-facing-438-gw-queue-approves-initial-large-load-interconnection-pro/823367/)。2026年8月時点では1,800件超、474GW超になっている。これはテキサスの記録的なピーク需要の5倍を超える[出典](https://www.utilitydive.com/news/texas-hits-pause-data-center-interconnections/827046/)。待ち行列がピーク需要の5倍まで膨らんだ時点で、==この数字は建設計画の集計ではなく、順番待ちの札を配った枚数として読むべきものになる==。

## 電力単価の地域差は、気候の地域差より大きい

「涼しいところは冷却費が安い」という理解は正しい。問題は、その効果がどれだけの大きさかである。

まず冷却が総電力に占める割合を確認する。国際エネルギー機関の整理では、冷却と環境制御は効率の高いハイパースケールで約7%、効率の低い企業内データセンターで30%超である[出典](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai)。気候が効くのはこの部分だけである。

気候の効き方は自由冷却の時間で測る。年平均気温が10度を下回る北欧では年間最大8,000時間の外気冷却が使え、温帯では2,000時間から4,000時間である[出典](https://w.media/special-feature-just-chill-cooling-innovations-in-nordic-data-centers-setting-new-sustainability-standards/)。北欧の施設レベルPUEは1.09まで下がる。

ここで2つの数字を掛け合わせる。PUEを1.35から1.10へ下げると、同じIT負荷に対する総電力は18.5%減る。つまり==最良の気候帯へ移ることの価値は、電力単価が18.5%安い土地へ移ることと等しい==。この除算はノート筆者による算術である。

では電力単価の地域差はどれだけあるか。米国エネルギー情報局の産業用小売価格は、2026年5月までの年初来で次のとおりである[出典](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_06_b)。

<div class="tb-bars">
<h5>産業用電力価格（セント/kWh、2026年5月までの年初来）</h5>
<div class="tb-bar"><span>アイオワ</span><u class="c"><i style="width:34%"></i></u><b>6.60</b></div>
<div class="tb-bar"><span>テキサス</span><u class="c"><i style="width:34%"></i></u><b>6.67</b></div>
<div class="tb-bar"><span>ルイジアナ</span><u class="c"><i style="width:34%"></i></u><b>6.77</b></div>
<div class="tb-bar"><span>ワシントン</span><u class="c"><i style="width:36%"></i></u><b>7.06</b></div>
<div class="tb-bar"><span>アイダホ</span><u class="c"><i style="width:36%"></i></u><b>7.14</b></div>
<div class="tb-bar"><span>米国平均</span><u class="m"><i style="width:45%"></i></u><b>8.83</b></div>
<div class="tb-bar"><span>ニューヨーク</span><u class="w"><i style="width:52%"></i></u><b>10.14</b></div>
<div class="tb-bar"><span>バージニア</span><u class="w"><i style="width:52%"></i></u><b>10.25</b></div>
<div class="tb-bar"><span>カリフォルニア</span><u class="w"><i style="width:100%"></i></u><b>19.66</b></div>
</div>

テキサスの6.67セントはバージニアの10.25セントより35%安い。カリフォルニアの19.66セントはテキサスの2.9倍である。単価の地域差は、気候帯を最良に振り切ったときの18.5%を上回る。

テキサスはこれで説明がつく。暑い土地であることは事実で、冷却の不利も事実である。ただし==冷却が効くのは総電力の1割前後であり、その1割で負ける幅より、単価で勝つ幅のほうが大きい==。実効的な電力コストは単価とPUEの積で決まる。

<figure class="tb-fig">
<svg viewBox="0 0 720 232" role="img" aria-label="電力単価とPUEの積で見た実効電力コストの比較">
  <text x="12" y="18" font-size="11" fill="var(--muted)">IT電力1kWhあたりの実効コスト（セント）＝ 単価 × PUE</text>
  <g font-size="11" fill="var(--muted)">
    <line x1="150" y1="30" x2="150" y2="182" stroke="var(--grid)"/>
    <line x1="270" y1="30" x2="270" y2="182" stroke="var(--grid)"/>
    <line x1="390" y1="30" x2="390" y2="182" stroke="var(--grid)"/>
    <line x1="510" y1="30" x2="510" y2="182" stroke="var(--grid)"/>
    <line x1="630" y1="30" x2="630" y2="182" stroke="var(--grid)"/>
    <text x="150" y="200" text-anchor="middle">5</text>
    <text x="270" y="200" text-anchor="middle">10</text>
    <text x="390" y="200" text-anchor="middle">15</text>
    <text x="510" y="200" text-anchor="middle">20</text>
    <text x="630" y="200" text-anchor="middle">25</text>
  </g>
  <g font-size="12" fill="var(--ink)">
    <text x="12" y="52">アイオワ</text>
    <rect x="30" y="40" width="158" height="18" rx="3" fill="var(--accent)"/>
    <rect x="188" y="40" width="24" height="18" rx="3" fill="#BFD0F5"/>
    <text x="222" y="53" font-size="11" fill="var(--sub)">7.6　PUE 1.15</text>

    <text x="12" y="86">テキサス</text>
    <rect x="30" y="74" width="160" height="18" rx="3" fill="var(--accent)"/>
    <rect x="190" y="74" width="56" height="18" rx="3" fill="#BFD0F5"/>
    <text x="256" y="87" font-size="11" fill="var(--sub)">9.0　PUE 1.35</text>

    <text x="12" y="120">バージニア</text>
    <rect x="30" y="108" width="246" height="18" rx="3" fill="var(--accent)"/>
    <rect x="276" y="108" width="49" height="18" rx="3" fill="#BFD0F5"/>
    <text x="335" y="121" font-size="11" fill="var(--sub)">12.3　PUE 1.20</text>

    <text x="12" y="154">カリフォルニア</text>
    <rect x="30" y="142" width="472" height="18" rx="3" fill="var(--accent)"/>
    <rect x="502" y="142" width="94" height="18" rx="3" fill="#BFD0F5"/>
    <text x="606" y="155" font-size="11" fill="var(--sub)">23.6</text>
  </g>
  <g font-size="11">
    <rect x="12" y="212" width="10" height="10" rx="2" fill="var(--accent)"/>
    <text x="28" y="221" fill="var(--sub)">系統から買う電気の単価</text>
    <rect x="200" y="212" width="10" height="10" rx="2" fill="#BFD0F5"/>
    <text x="216" y="221" fill="var(--sub)">PUEが上乗せする分（冷却・配電損失）</text>
  </g>
</svg>
<figcaption>薄い帯が気候で動く部分、濃い帯が単価で動く部分である。テキサスは薄い帯で負けるが、濃い帯の差がそれを上回る。単価は米国エネルギー情報局の実測値、PUEはノート筆者の仮置きである。</figcaption>
</figure>

図のPUEは実測値ではない。テキサスの1.35、アイオワの1.15といった値は説明のための仮置きであり、施設ごとに1桁の幅で動く運転条件を代表していない。この図が示せるのは大小関係だけである。

## 気候が効かなくなる境界

冷却方式の選択は、気候の効き方そのものを変える。ここには水と電力の交換関係がある。

乾式冷却は外気にラジエータを晒してファンで熱を運ぶ方式で、水を消費しない。代わりにファンがプラント出力の1%から1.5%を使う。蒸発式の冷却塔は0.5%で済む[出典](https://itif.org/publications/2026/07/06/the-data-center-water-problem-is-soluble/)。同じ資料は、蒸発冷却が夏季のピーク冷却電力を乾式比で25%から35%減らす一方、その削減が最も暑い日、すなわち水と系統の両方が逼迫する日に水使用を集中させると整理している。

暑い土地で水を使わない選択をすると電力が増え、電力を節約すると水が減る。テキサスの事業者はこの交換のうち電力側を選んでいる。同州で稼働する大型データセンター800MWのうち、蒸発冷却を使うのは約20%である[出典](https://insideclimatenews.org/news/10042026/texas-data-center-developers-play-offense-on-water-claiming-huge-cuts-in-usage/)。8割は水を使わない方式を選び、その分の電力を単価の安さで吸収している。

技術側もこの方向に動いている。NVIDIAはRubin世代について、液冷ループの温度を上げて外部の乾式クーラーで冷やすことにより、暖かい気候でも水消費をほぼゼロにできるとしている。液冷は高い施設水温で運転できるため、外気温が高くても自由冷却の成立時間が伸びる。

ここから帰結が1つ出る。==液冷とラック密度の上昇が進むほど、気候の優位は薄くなる==。空冷を前提とした時代には外気温が直接PUEに効いたが、45度前後の温水を捨てればよい設計では、テキサスの夏でも冷凍機を回さずに済む時間が増える。気候が立地を決める力は、冷却技術の進歩によって年々弱くなっている。

## レイテンシは学習と推論で別の制約になる

「東京電力から近いところ」という直感には、通信の近さと電力の近さが混ざっている。この2つは分けたほうがよい。電力は送電線の話であり、通信は光ファイバの話である。そしてレイテンシの制約は、施設で何を動かすかによって存在したりしなかったりする。

==学習は外部レイテンシに影響されない==。数千枚のGPU間の内部帯域は決定的に重要だが、施設と利用者の間の数ミリ秒は学習結果を変えない。したがって学習用の大規模拠点は、電力と土地が安い遠隔地へ移動できる。推論は逆である。消費者向けのAIは50ミリ秒以下の応答を目標とするため、推論設備は人口圏の近くに置く必要がある[出典](https://techresearchonline.com/blog/ai-training-vs-inference-data-center-map/)。

<figure class="tb-fig">
<svg viewBox="0 0 720 250" role="img" aria-label="学習拠点と推論拠点の地理的な分かれ方">
  <circle cx="250" cy="125" r="104" fill="none" stroke="var(--grid)" stroke-dasharray="4 4"/>
  <circle cx="250" cy="125" r="62" fill="#EEF2FF" stroke="#D5DDF7"/>
  <circle cx="250" cy="125" r="20" fill="var(--accent)"/>
  <text x="250" y="130" font-size="11" fill="#fff" text-anchor="middle">人口圏</text>
  <text x="250" y="79" font-size="11.5" fill="var(--deep)" text-anchor="middle">推論：50ms圏</text>
  <text x="250" y="42" font-size="11" fill="var(--muted)" text-anchor="middle">レイテンシが立地を縛る</text>

  <path d="M368 125 L470 125" stroke="var(--line)" stroke-width="1.5"/>
  <path d="M462 120 L470 125 L462 130" fill="none" stroke="var(--line)" stroke-width="1.5"/>
  <text x="419" y="116" font-size="11" fill="var(--muted)" text-anchor="middle">電力の安い方向へ</text>

  <rect x="486" y="86" width="222" height="78" rx="8" fill="var(--dim)" stroke="var(--line)"/>
  <text x="502" y="110" font-size="12.5" fill="var(--ink)">学習：レイテンシ不問</text>
  <text x="502" y="132" font-size="11" fill="var(--sub)">内部帯域だけが要件になるため、</text>
  <text x="502" y="150" font-size="11" fill="var(--sub)">通電時期と単価で場所を選べる</text>

  <g font-size="11" fill="var(--muted)">
    <text x="12" y="206">同じ「データセンター」でも、この2つは別の産業として立地する。</text>
    <text x="12" y="226">北欧からフランクフルトは約15ms、ヘルシンキからアムステルダムは約25ms。学習は成立し、対話型の推論は成立しにくい。</text>
  </g>
</svg>
<figcaption>レイテンシ要件は施設の用途で決まる。学習拠点が遠隔地へ動けるのは、外部の数ミリ秒が学習結果に影響しないためである。</figcaption>
</figure>

この区別は容量の配分としても現れはじめた。2025年時点でAI向けデータセンター容量の内訳は学習が5GW、推論が2GWである。推論は2026年末までにAIデータセンター需要の約3分の2を占めるとの見通しが出ており、2030年までの年平均成長率は推論79%に対し学習25%とされる[出典](https://techresearchonline.com/blog/ai-training-vs-inference-data-center-map/)。==レイテンシに縛られる側の需要が、縛られない側より速く伸びている==。遠隔地に建てられる範囲は、いま比率としては縮む方向にある。

北欧の位置づけはこの区別で説明できる。ストックホルムからフランクフルトは約15ミリ秒、ヘルシンキからアムステルダムは約25ミリ秒である[出典](https://introl.com/blog/nordic-ai-data-centers-renewable-power-advantage-guide-2025)。学習とバッチ処理には十分で、ロンドンやフランクフルトの隣に置く必要がある金融系や対話型の処理には遠い。北欧はFLAP-D市場を置き換えるのではなく、レイテンシに縛られない層を引き取っている。

日本の集積も同じ構造で読める。国内のデータセンターは電力容量ベースで約9割が東京圏と大阪圏にある。これは電力会社との距離ではなく、インターネットエクスチェンジと海底ケーブル陸揚げ局への近さ、および利用者の所在の結果である。

## 用地は過去の計画違算が作る

早い電気は、送電網が既にあって需要が来なかった場所にある。==この条件は意図して作れない。過去の計画が外れた副産物として現れる==。

千葉県印西市がその例である。同市を含む千葉ニュータウンは1966年の当初計画で計画人口34万人、区域面積約2,912ヘクタールだった。1986年に17万6,000人へ、2015年11月にさらに14万3,300人へ引き下げられ、2021年12月時点の実績人口は10万5,175人である[出典](https://ja.wikipedia.org/wiki/%E5%8D%83%E8%91%89%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%BF%E3%82%A6%E3%83%B3)。当初計画の3割にとどまった。この人口を前提に東京電力が敷いた送配電網が過剰になり、==その余剰がデータセンターを引き寄せた==[出典](https://www.itmedia.co.jp/business/articles/2606/22/news018.html)。事業そのものは2014年に完了している。加えて下総台地は締まった洪積層で、付近に活断層がない[出典](https://www.mc-digitalrealty.com/blog/13)。立地選定では対象地が6万V以上の特別高圧で受電できるかが確認され、近年は海底ケーブル陸揚げ局までの距離も重視される[出典](https://www.scsk.jp/sp/netxdc/column/inzai_datacenter.html)。==印西の優位は、住宅需要の予測が外れたことによって生まれている==。

バージニア州ラウドン郡も同型である。冷戦期の政府による光ファイバ投資が1993年のMAE-East設立につながり、1997年に同郡最初のデータセンターが建った[出典](https://www.pecva.org/region/loudoun/data-centers-in-loudoun-a-primer/)。2008年に州が売上税の免除を導入し、郡が「Data Center Alley」というブランドを立てた。免除の要件は資本投資1.5億ドル超と、平均賃金の1.5倍以上を支払う雇用50人の創出である。

この免除の規模は州の監査機関が測っている。バージニア州の合同立法監査検討委員会は、免除による州の逸失収入が2023会計年度の6億8,500万ドルから2024会計年度の10億2,000万ドルへ増えたとし、2021年から2024年の累計27億3,000万ドルが州の経済インセンティブ支出の53%を占めると報告した。2024会計年度に限れば、この免除だけでインセンティブ支出の約80%にあたる[出典](https://virginiabusiness.com/virginia-data-centers-tax-exemption-2-7-billion/)。同委員会は同時に、==州のデータセンター投資の90%超は免除がなければ起きなかった==と評価している。免除がなければ集積もなかったという評価であり、税制がこの立地の必要条件だったことを州自身が認めている。

免除は郡の財政を通じて別の形でも効く。データセンターはラウドン郡の一般財源の38%、固定資産税収の約半分を生む一方、免除によって同郡の公立学校は2024会計年度に約1,700万ドルを失ったとする推計がある[出典](https://goodjobsfirst.org/wp-content/uploads/2026/04/The-Hidden-Costs-of-Virginias-Data-Center-Subsidy-and-How-they-Undermine-Public-Schools.pdf)。==国防目的で敷かれた回線が、30年後に民間の計算需要の集積を決め、その集積が郡財政の依存先になっている==。

<div class="tb-key"><b>この節の含意</b>
用地の優位は誰かが意図して作ったものではなく、別の目的で敷いたインフラが余ったことの帰結である。したがって「次はどこか」を予測するには、いま需要が来ていないのに送電容量と回線が敷かれている場所を探すことになる。</div>

## 制度は速さの源泉であり、同時に最大のリスク

テキサスがデータセンターを集めた要因のうち、単価と並んで大きいのは制度である。ERCOTは他州と接続していない独立系統で、連邦の州際規制の外にある。規制が軽く、土地が広く、税負担が低いことが投資を呼んだ。

その優位は2026年8月に反転した。アボット知事は8月3日、テキサス州公益事業委員会とERCOTに対し、接続手続きを進行中の全データセンターの検証と監査を指示し、新規の系統接続を停止した[出典](https://www.texastribune.org/2026/08/03/texas-data-center-project-audit-greg-abbott/)。事業者に求められる情報は、税優遇、電力使用、水使用と冷却方式、近隣住民への影響を減らす取り組み、そして施設を実際に誰が所有するかである。ERCOTは8月7日に予定していたBatch Zeroの大規模負荷分類通知を停止し、8月20日の公開会合で例外の承認を求めるとした[出典](https://www.troutman.com/insights/texas-hits-pause-on-data-center-grid-connections-amid-growing-oversight-push/)。知事が指示を出した時点で、新規の負荷申込の約90%がデータセンターだった。

<ul class="tb-tl">
<li><b>2024年12月</b>ERCOTの大規模負荷キューは<strong>63GW</strong></li>
<li><b>2025年11月</b>同キューが<strong>226GW</strong>へ。データセンターが約73%を占める</li>
<li><b>2026年6月</b>ERCOT理事会がBatch Zero手続きを承認。滞留の整理に着手</li>
<li><b>2026年8月3日</b>アボット知事が新規接続を停止し、監査を指示。キューは<strong>474GW超</strong>、1,800件超</li>
<li><b>2026年8月7日</b>ERCOTがBatch Zeroの分類通知を停止</li>
</ul>

この20か月の推移が示すのは、==規制の軽さが立地の優位である場合、その優位は規制側の一片の判断で消える==ということである。ことである。テキサスを選んだ事業者は、安い電気と速い手続きを買ったつもりで、政治的な可変性も一緒に買っていた。認可の速さは資産ではなく、いつでも取り消せる貸与である。

## 秋田をどう説明するか

秋田市に日本最大級のAIデータセンターを建てる計画は、電力単価でも冷却費でも説明できない。説明する変数は別にある。

規模と時期から確認する。計画は300MWから500MWで、整備費は2兆円規模、2030年代早期の稼働を目指す。UAEなどが投資する方向で協議されている[出典](https://www.nikkei.com/article/DGXZQOCC138LW0T10C26A7000000/)。準備委員会には秋田市、秋田県、株式会社エスツー、Bitgrit, Inc. が参画し、秋田市北部の再生可能エネルギー工業団地内に50ヘクタールの用地を想定している[出典](https://www.aaidc.jp/)。ただし2兆円という整備費とUAEの投資は報道であり、当事者による公式発表を確認できていない。この節の数字はその前提で読む。

立地の理由として挙げられているのは2つである。洋上を含む風力発電の先進地域であり、地元のクリーン電力を大容量の需要に結びつけられること、そして南海トラフ地震のような大規模災害のリスクが相対的に小さいことである[出典](https://www.jetro.go.jp/biznews/2025/11/52689b1d41ea8c06.html)。

この2つは、これまでの節で扱った変数に翻訳できる。

<div class="tb-vs">
<div><h5>秋田が満たしている条件</h5>
<ul>
<li><strong>電源が先にある</strong>。洋上風力の適地として送電と電源の整備が先行しており、需要が後から来る側にある</li>
<li><strong>用地がまとまる</strong>。50ヘクタール級の工業団地が確保でき、東京圏では同規模の一団の土地が出ない</li>
<li><strong>災害リスクが低い</strong>。想定される大規模地震の震源から遠い</li>
<li><strong>用途が学習寄り</strong>。レイテンシ制約が緩い処理なら、消費地から遠くても成立する</li>
</ul></div>
<div><h5>説明していない条件</h5>
<ul>
<li><strong>電力単価</strong>。国内の電力単価に、立地を決めるほどの地域差があるとは確認できていない</li>
<li><strong>冷却費</strong>。秋田は北欧ほど寒冷ではなく、自由冷却の時間で北海道にも劣る</li>
<li><strong>通信</strong>。海底ケーブル陸揚げ局と国内IXへの距離は東京圏に劣る</li>
<li><strong>建設と運用の人員</strong>。500MW級の施工と保守を地元で調達できるかは未確認</li>
</ul></div>
</div>

==秋田を説明しているのは、電源と用地と災害耐性が同時に揃う場所が国内に少ないこと、そして用途がレイテンシを要求しないことである==。電気の安さはここに入っていない。UAEの資金が入るとすれば、それは立地の理由ではなく、2兆円規模の初期投資を国内の資本市場だけでは吸収しにくいという別の制約への答えになる。

## 北海道は涼しさで選ばれているのではない

北海道は自由冷却の時間で国内最良の部類にある。それでも立地の主因を冷却に置くと、この地域で起きていることを読み違える。

北海道で進んでいるのは、==電気を本州へ送る代わりに、電気を使う需要を北海道へ持ってくるという交換==である。。前章で見たとおり、広域連系系統のマスタープランの最大項目は北海道から東北を経て東京への新設で、概算2.5兆円から3.4兆円である[出典](https://www.fepc.or.jp/resource_sw/INFOBASE_2025_g.pdf)。この投資額は、北海道で作った電気が現状では本州で使えないことの裏返しである。連系線を作るのに数兆円と年単位の工期がかかるなら、電気を運ばずに計算需要を運ぶほうが速い。

同時に、北海道の電力需給は余裕がある状態ではない。ラピダスの新工場が2027年の量産を目標に立ち上がり、苫小牧ではソフトバンクが大規模なAI向け拠点を整備している。半導体工場とデータセンターが同じ系統で同時に立ち上がる構図であり、涼しいから電気が余っているという関係は成り立たない。

<div class="tb-key"><b>読み替え</b>
北海道の優位は気候ではなく、系統の孤立である。連系線が細いために域内で消費先を必要としており、その消費先として計算需要が誘致されている。冷却の利得はその上に乗る二次的な便益である。</div>

## 半導体の物流は立地を決めない

チップが空輸されることは事実である。ただしそれがデータセンターの立地を決めるかは別の問いになる。決めていない。

現在の流れは、台湾でシリコンが作られ、メキシコの国境州でFoxconn、Flex、Jabil、Pegatron、Sanminaが最終組立を行い、完成したラックがUSMCAの枠内でトラックにより北上して発注元のデータセンターへ入る形である[出典](https://fourweekmba.com/ai-mexico-ai-server-assembly-foxconn-flex-compute-floor/)。メキシコは2026年1月から5月に469億ドルのサーバーを米国へ輸出し、AIデータセンター向けサーバーの米国輸入の約4割を占めた[出典](https://aiweekly.co/alerts/mexico-hits-469b-in-us-server-exports-just-behind-taiwan)。空輸も実在する。EVA Airは台湾と米国を結ぶ路線の貨物の40%から50%がAIサーバーだと開示している[出典](https://finance.biggo.com/news/c08e470f-caaa-4b60-9db3-d1d324514148)。試運転の遅延を避けるために747をチャーターした事例もある[出典](https://omnilogistics.com/gpu-supply-chain-neoclouds/)。

<figure class="tb-fig">
<svg viewBox="0 0 720 214" role="img" aria-label="AIサーバーの供給経路">
  <g font-size="12">
    <rect x="12" y="46" width="146" height="62" rx="8" fill="var(--dim)" stroke="var(--line)"/>
    <text x="28" y="70" fill="var(--ink)">台湾</text>
    <text x="28" y="90" font-size="10.5" fill="var(--sub)">前工程・パッケージング</text>

    <rect x="234" y="46" width="146" height="62" rx="8" fill="var(--dim)" stroke="var(--line)"/>
    <text x="250" y="70" fill="var(--ink)">メキシコ国境州</text>
    <text x="250" y="90" font-size="10.5" fill="var(--sub)">ラック最終組立</text>

    <rect x="456" y="46" width="146" height="62" rx="8" fill="#EEF2FF" stroke="#D5DDF7"/>
    <text x="472" y="70" fill="var(--ink)">米国のデータセンター</text>
    <text x="472" y="90" font-size="10.5" fill="var(--sub)">搬入・据付・試運転</text>

    <path d="M158 77 L226 77" stroke="var(--accent)" stroke-width="1.5"/>
    <path d="M218 72 L226 77 L218 82" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
    <text x="192" y="66" font-size="10.5" fill="var(--accent)" text-anchor="middle">空輸</text>
    <text x="192" y="100" font-size="10" fill="var(--muted)" text-anchor="middle">台米線の貨物の40〜50%</text>

    <path d="M380 77 L448 77" stroke="var(--accent)" stroke-width="1.5"/>
    <path d="M440 72 L448 77 L440 82" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
    <text x="414" y="66" font-size="10.5" fill="var(--accent)" text-anchor="middle">陸送</text>
    <text x="414" y="100" font-size="10" fill="var(--muted)" text-anchor="middle">USMCA域内</text>
  </g>
  <line x1="12" y1="134" x2="708" y2="134" stroke="var(--grid)"/>
  <g font-size="11" fill="var(--sub)">
    <text x="12" y="156">1ラック（GB200 NVL72）は1.36トン、600×1,068×2,236mm、120〜140kWで液冷が必須。</text>
    <text x="12" y="176">重量と寸法が効くのは搬入経路と床荷重であって、拠点をどの州に置くかではない。</text>
    <text x="12" y="196" fill="var(--muted)">物流が立地を動かすとすれば、それは組立工場が需要地へ寄る方向であり、逆ではない。</text>
  </g>
</svg>
<figcaption>チップは軽く、ラックは重い。空輸が効くのは前工程から組立までの区間であり、完成したラックは陸送で入る。この経路のどこにも、データセンターを特定の州に固定する力はない。</figcaption>
</figure>

ラックの物性を確認しておく。GB200 NVL72は1.36トン、外寸は600×1,068×2,236mm、消費電力は120kWから140kWで液冷が必須である[出典](https://www.sunbirddcim.com/blog/your-data-center-ready-nvidia-gb200-nvl72)。==この重量と寸法が制約するのは、搬入経路の幅、床の耐荷重、荷役設備であって、拠点をどの州に置くかではない==。空港からの距離が数百km違っても、通電が4年遅れることの前には小さい。

因果はむしろ逆向きに働いている。Foxconn、Inventec、Wistron、Pegatronはテキサスでのサーバー生産を計画し、台湾企業は2025年にテキサス向けで53億ドルの対外直接投資計画を開示した[出典](https://www.dallasfed.org/research/pubs/25trade/a4)。データセンターが集まった土地へ、組立工場が後から寄っている。==物流はデータセンターの立地の結果であって、原因ではない==。

## 立地判断の順序

ここまでの変数を、判断の順に並べ直す。

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="立地判断の順序を示す決定木">
  <g font-size="12">
    <rect x="12" y="14" width="252" height="40" rx="7" fill="var(--card)" stroke="var(--line)"/>
    <text x="26" y="32" fill="var(--ink)" font-size="11.5">1　用途は学習か推論か</text>
    <text x="26" y="48" font-size="10.5" fill="var(--sub)">推論なら人口圏内に候補地を限定する</text>

    <rect x="12" y="68" width="252" height="40" rx="7" fill="var(--card)" stroke="var(--line)"/>
    <text x="26" y="86" fill="var(--ink)" font-size="11.5">2　何年後に何MW引けるか</text>
    <text x="26" y="102" font-size="10.5" fill="var(--sub)">大半の候補地がここで落ちる</text>

    <rect x="12" y="122" width="252" height="40" rx="7" fill="var(--card)" stroke="var(--line)"/>
    <text x="26" y="140" fill="var(--ink)" font-size="11.5">3　取水と排水の許認可</text>
    <text x="26" y="156" font-size="10.5" fill="var(--sub)">量ではなく可否の問題</text>

    <rect x="12" y="176" width="252" height="40" rx="7" fill="var(--card)" stroke="var(--line)"/>
    <text x="26" y="194" fill="var(--ink)" font-size="11.5">4　用地・地盤・災害</text>
    <text x="26" y="210" font-size="10.5" fill="var(--sub)">一団の50ha級が取れるか</text>

    <rect x="12" y="230" width="252" height="40" rx="7" fill="#EEF2FF" stroke="#D5DDF7"/>
    <text x="26" y="248" fill="var(--ink)" font-size="11.5">5　単価 × PUE と制度リスク</text>
    <text x="26" y="264" font-size="10.5" fill="var(--sub)">ここで初めて費用の比較になる</text>

    <path d="M138 54 l0 14M138 108 l0 14M138 162 l0 14M138 216 l0 14"
      stroke="var(--line)" stroke-width="1.5"/>
  </g>
  <line x1="292" y1="14" x2="292" y2="286" stroke="var(--grid)"/>
  <g font-size="11.5" fill="var(--sub)">
    <text x="316" y="32" fill="var(--ink)" font-size="12">よくある誤りは順序の反転にある</text>
    <text x="316" y="60">・単価の安い州を先に選び、通電時期を後から確認する</text>
    <text x="316" y="82">・涼しさで候補地を作り、系統容量を後から確認する</text>
    <text x="316" y="104">・認可の速さを優位として数え、それが止まる確率を</text>
    <text x="330" y="124">見込まない</text>
    <text x="316" y="146">・空輸と港湾の近さを上位の条件に置く</text>

    <text x="316" y="184" fill="var(--ink)" font-size="12">順序を守ると説明できること</text>
    <text x="316" y="212">・テキサスが暑くても選ばれた理由（2と5）</text>
    <text x="316" y="234">・秋田が寒くなくても選ばれた理由（1と2と4）</text>
    <text x="316" y="256">・北海道が涼しくても主戦場にならない理由（2）</text>
    <text x="316" y="278">・印西とラウドンが偶然の産物である理由（2）</text>
  </g>
</svg>
<figcaption>費用は最後に効く変数である。上の4段を通過した候補地が2つ以上残ったときに限って、単価とPUEの比較が意思決定を動かす。</figcaption>
</figure>

この順序に立つと、章の冒頭に置いた2つの誤解の位置がはっきりする。==電力単価も気候も、候補地を落とす力を持たない。落とすのは通電時期と許認可である==。単価と気候は、生き残った候補地のあいだで順位をつけるための変数にすぎない。

## この章の要点

- 立地選定は費用の比較ではなく候補地の消去で進む。落とすのは通電時期と許認可であり、電力単価と気候は最後に残った集合のなかでしか効かない。
- 米国の通電待ちは全国平均で4年、北バージニアの100MW接続で7年との報告がある。躯体工事は18か月から24か月で終わる。事業者が探しているのは安い電気ではなく早い電気である。
- 冷却が総電力に占めるのはハイパースケールで約7%である。PUEを1.35から1.10へ下げる価値は電力単価が18.5%安い土地へ移ることに等しく、テキサス6.67セントとバージニア10.25セントの35%差はそれを上回る。暑いテキサスが選ばれる理由はこの大小関係にある。
- 暑い土地では水と電力が交換関係になる。乾式冷却はファンにプラント出力の1%から1.5%を使い、蒸発式は0.5%で済む。テキサスの稼働中大型データセンター800MWのうち蒸発冷却は約20%で、残りは電力側を支払っている。
- レイテンシ制約は用途で決まる。学習は外部の数ミリ秒に影響されず遠隔地へ動けるが、消費者向け推論は50ミリ秒以下を目標とするため人口圏に縛られる。同じ「データセンター」でも別の産業として立地する。
- 早い電気がある土地は、送電網が敷かれて需要が来なかった場所である。印西は千葉ニュータウンの計画人口未達、ラウドンは冷戦期の政府光ファイバ投資とMAE-Eastの副産物であり、どちらも意図して作られた優位ではない。
- 規制の軽さを立地の理由に計上するなら、それが止まる確率も同じ表に書く。ERCOTのキューは2024年12月の63GWから2026年8月の474GW超へ増え、アボット知事は2026年8月3日に新規接続を停止した。
- 秋田は電源の先行、50ヘクタール級の用地、低い災害リスク、レイテンシを要求しない用途で説明できる。電力単価と冷却費では説明できない。
- 北海道の優位は気候ではなく系統の孤立である。連系線の増強に概算2.5兆円から3.4兆円かかるため、電気を送る代わりに需要を持ち込む選択が取られている。
- 半導体の物流は立地を決めない。台湾で作り、メキシコで組み、陸送で運ぶ経路のどこにも州を固定する力はない。因果は逆で、組立工場がデータセンターの集積地へ寄っている。

## 残っている問い

- 日本の10エリア別の特別高圧の実効単価を確認できていない。全国水準としては2020年から2021年に10円/kWh以下、2023年4月に24.20円、2026年3月に16.58円という推移を確認したが、エリア間の差は各社の料金単価表と託送供給等約款を突き合わせないと出ない。
- 秋田の計画について、2兆円という整備費とUAEの投資は報道であり当事者の公式発表を確認できていない。事業主体、資本構成、受電契約の相手方の3点が公表されれば、この節の記述は書き直す必要がある。
- 図3で用いたPUEは仮置きである。州別または気候帯別の実測PUEの分布を取得できていない。事業者のサステナビリティ報告書を州単位で集計すれば代替できる。
- 日本の特別高圧の申込から受電までの期間について、統計値を確認できていない。数年待ちという業界の記述はあるが、一般送配電事業者による期間の公表統計に到達していない。
- テキサスの監査がいつ終わり、どの条件で接続が再開されるかは2026年8月時点で未定である。8月20日の公益事業委員会の公開会合の結果を追う。
- ラウドン郡の売上税免除について、州の逸失収入は合同立法監査検討委員会の報告で確認したが、報告書本体の算定方法に当たれていない。郡レベルの固定資産税収と免除額を突き合わせた収支は未確認である。
- 印西について、東京電力が千葉ニュータウン向けに敷設した設備容量の数値を確認できていない。計画人口34万人と実績10万5,175人という乖離は確認したが、その人口に対応する設備容量と現在のデータセンター負荷の比較ができていない。
- 学習と推論の容量比は2025年の5GW対2GWという推計を確認したが、出所が二次資料であり、事業者による用途別の設備容量開示に到達できていない。
- 液冷と高温許容の進展が気候の優位をどれだけ削るかを、外気温別の自由冷却成立時間として定量化できていない。冷却水温45度前提の成立時間の地域別データが要る。
- 秋田の計画が想定する電源構成と受電方式を確認できていない。洋上風力からの直接調達か、系統経由か、自家発を併設するかで必要な系統増強が変わる。

## 出典

1. U.S. Energy Information Administration, Electric Power Monthly Table 5.6.B. https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_06_b
2. IEA, Energy and AI, Energy demand from AI. https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai
3. Construction Owners, How Long It Actually Takes to Power a Data Center in 2026. https://www.constructionowners.com/insights/how-long-it-actually-takes-to-power-a-data-center-in-2026-a-u-s-market-by-market-reality-check
4. Utility Dive, Texas, facing 438 GW queue, approves initial large-load interconnection process. https://www.utilitydive.com/news/texas-facing-438-gw-queue-approves-initial-large-load-interconnection-pro/823367/
5. Utility Dive, Facing an estimated 474 GW of interconnection requests, Texas hits pause on data centers. https://www.utilitydive.com/news/texas-hits-pause-data-center-interconnections/827046/
6. The Texas Tribune, New Texas data center projects frozen until state audits them. https://www.texastribune.org/2026/08/03/texas-data-center-project-audit-greg-abbott/
7. Troutman Pepper Locke, Texas Hits Pause on Data Center Grid Connections Amid Growing Oversight Push. https://www.troutman.com/insights/texas-hits-pause-on-data-center-grid-connections-amid-growing-oversight-push/
8. ITIF, The Data Center Water Problem Is Soluble. https://itif.org/publications/2026/07/06/the-data-center-water-problem-is-soluble/
9. Inside Climate News, Texas Data Center Developers Play Offense on Water. https://insideclimatenews.org/news/10042026/texas-data-center-developers-play-offense-on-water-claiming-huge-cuts-in-usage/
10. W.Media, Cooling innovations in Nordic data centers. https://w.media/special-feature-just-chill-cooling-innovations-in-nordic-data-centers-setting-new-sustainability-standards/
11. Introl, Nordic AI Data Centers: The Renewable Power Advantage. https://introl.com/blog/nordic-ai-data-centers-renewable-power-advantage-guide-2025
12. Tech Research Online, AI Training vs Inference Is Redrawing the Data Center Map. https://techresearchonline.com/blog/ai-training-vs-inference-data-center-map/
13. ITmedia ビジネスオンライン, 千葉県印西市はなぜ「データセンターの聖地」になったのか. https://www.itmedia.co.jp/business/articles/2606/22/news018.html
14. MC Digital Realty, データセンターはなぜ千葉県印西市に多い？. https://www.mc-digitalrealty.com/blog/13
15. SCSK, 印西が「データセンター銀座」と呼ばれる歴史的背景と立地要件. https://www.scsk.jp/sp/netxdc/column/inzai_datacenter.html
16. Piedmont Environmental Council, Data Centers in Loudoun: A Primer. https://www.pecva.org/region/loudoun/data-centers-in-loudoun-a-primer/
17. City Journal, Loudoun County, Virginia: The Heart of the Data-Center Boom. https://www.city-journal.org/article/loudoun-county-virginia-data-centers-construction
18. 日本経済新聞, 秋田に日本最大級AIデータセンター 建設費2兆円、UAEが投資へ. https://www.nikkei.com/article/DGXZQOCC138LW0T10C26A7000000/
19. 秋田AIデータセンター構想準備委員会. https://www.aaidc.jp/
20. ジェトロ, 秋田市でAIデータセンター建設に向けた連携協定締結. https://www.jetro.go.jp/biznews/2025/11/52689b1d41ea8c06.html
21. 電気事業連合会, FEPC INFOBASE 2025 テーマg. https://www.fepc.or.jp/resource_sw/INFOBASE_2025_g.pdf
22. FourWeekMBA, Foxconn, Flex, and the Compute Floor: How Mexico Became the Assembly Hub. https://fourweekmba.com/ai-mexico-ai-server-assembly-foxconn-flex-compute-floor/
23. AI Weekly, Mexico Hits $46.9B in US Server Exports. https://aiweekly.co/alerts/mexico-hits-469b-in-us-server-exports-just-behind-taiwan
24. BigGo Finance, AI Chips Jam Taiwan-US Cargo Holds. https://finance.biggo.com/news/c08e470f-caaa-4b60-9db3-d1d324514148
25. Omni Logistics, GPU Supply Chain: Why Speed Decides Margins. https://omnilogistics.com/gpu-supply-chain-neoclouds/
26. Sunbird DCIM, Is Your Data Center Ready for the NVIDIA GB200 NVL72?. https://www.sunbirddcim.com/blog/your-data-center-ready-nvidia-gb200-nvl72
27. Federal Reserve Bank of Dallas, Taiwan firms key to nearshoring and reshoring to support AI boom. https://www.dallasfed.org/research/pubs/25trade/a4
