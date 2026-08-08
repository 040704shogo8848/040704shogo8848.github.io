---
section: industry
chapter: 1
slug: semiconductor-value-chain
title: 半導体の価値連鎖と供給律速
thesis: 半導体の競争力は設計でも露光でもなく、設計・前工程・後工程・電力用途という各層のうち、その時点で最も増設に時間がかかる層に決まり、現在それは先端パッケージである。
---

半導体の話題は、線幅が何ナノメートルか、露光装置を何台確保したか、という一点に集まりやすい。しかし2026年7月16日の決算説明会で、TSMCのC.C. Wei氏は自社のパッケージ能力が逼迫しており顧客の成長を制限していると述べた。==制約はウェハを焼く工程ではなく、焼いたあとにチップを積んで基板へ載せる工程にあった==。

この事実は、半導体産業を1本の鎖として見ないと理解できない。鎖は最も弱い環で切れる。==どの環が最も弱いかは技術の優劣ではなく、その環を増やすのに何年かかるかで決まる==。露光装置を1台増やすのと、組立工場を1棟建てるのと、電力用の別ラインを立ち上げるのとでは、必要な年数も投じる資本の性質も違う。

この章は、設計から出荷までの層を並べ直したうえで、各層の増設リードタイムを比べる。読み終えたときに残ってほしいのは、どの企業が偉いかという序列ではなく、どの層が今この瞬間の律速かを自分で判定する手順である。律速は移動する。2026年と2027年では答えが変わる。

## 設計から出荷までを一本の流れに並べ直す

半導体の用語は、抽象度の違う4つの層の言葉が混在したまま流通している。EDAは設計工程を回すソフトウェアである。FinFETとGAAはトランジスタの立体構造である。リソグラフィは露光装置の物理である。RISC-Vとx86は命令セットアーキテクチャである。NANDは記憶素子の製品カテゴリである。これらを同じ平面に並べると、FinFETとRISC-Vを競合する技術選択肢として比較する、といった誤りが起きる。

順序に直すと次のようになる。第1に命令セットを決める。第2にEDAで論理設計と物理設計を行う。第3にリソグラフィで露光する。第4にFinFETまたはGAAという構造としてトランジスタを作り込む。第5にロジックまたはメモリとして製品化する。第6にチップを積層し基板へ実装する。第7に完成品として電力系や車載系や計算機系へ組み込まれる。

本書はこの流れを4つの層に束ねる。上流の設計層、ウェハを加工する前工程層、チップを組み立てて検査する後工程層、そして電力を扱うパワー半導体という別系統の用途層である。パワー半導体を別立てにするのは、競争軸が線幅ではなく耐圧とオン抵抗と熱設計だからである。ロジックとメモリの論理をそのまま持ち込むと読み違える。

層を分けたうえで問うべきことは1つである。需要が1単位増えたとき、どの層が最初に追いつかなくなるか。これが律速の定義である。

<figure class="tb-fig">
<svg viewBox="0 0 720 288" role="img" aria-label="半導体の4層と各層の増設に要する時間">
  <text x="12" y="18" font-size="11" fill="var(--muted)">層</text>
  <text x="286" y="18" font-size="11" fill="var(--muted)">この層が縛られるもの</text>
  <text x="546" y="18" font-size="11" fill="var(--muted)">増設に要する時間</text>
  <rect x="12" y="26" width="696" height="1" fill="var(--line)"/>
  <g font-size="12.5">
    <rect x="12" y="36" width="262" height="44" rx="6" fill="var(--dim)" stroke="var(--line)"/>
    <text x="28" y="56" fill="var(--ink)">設計層</text>
    <text x="28" y="73" font-size="10.5" fill="var(--muted)">命令セット・EDA・IP</text>
    <text x="286" y="62" fill="var(--sub)" font-size="11.5">人材と検証時間</text>
    <text x="546" y="62" fill="var(--sub)" font-size="11.5">資本では買えない</text>

    <rect x="12" y="88" width="262" height="44" rx="6" fill="var(--dim)" stroke="var(--line)"/>
    <text x="28" y="108" fill="var(--ink)">前工程層</text>
    <text x="28" y="125" font-size="10.5" fill="var(--muted)">露光・FinFET・GAA</text>
    <text x="286" y="114" fill="var(--sub)" font-size="11.5">EUV装置と工場</text>
    <text x="546" y="114" fill="var(--sub)" font-size="11.5">3〜4年</text>

    <rect x="12" y="140" width="262" height="44" rx="6" fill="#EEF2FF" stroke="var(--accent)" stroke-width="1.5"/>
    <text x="28" y="160" fill="var(--ink)" font-weight="600">後工程層</text>
    <text x="28" y="177" font-size="10.5" fill="var(--muted)">CoWoS・HBM積層・テスト</text>
    <text x="286" y="166" fill="var(--ink)" font-size="11.5">組立能力とテスタ</text>
    <text x="546" y="166" fill="var(--accent)" font-size="11.5" font-weight="600">2026年の律速はここ</text>

    <rect x="12" y="192" width="262" height="44" rx="6" fill="var(--dim)" stroke="var(--line)"/>
    <text x="28" y="212" fill="var(--ink)">用途層</text>
    <text x="28" y="229" font-size="10.5" fill="var(--muted)">パワー半導体・車載・計算機</text>
    <text x="286" y="218" fill="var(--sub)" font-size="11.5">耐圧・オン抵抗・熱設計</text>
    <text x="546" y="218" fill="var(--sub)" font-size="11.5">別系統の競争軸</text>
  </g>
  <text x="12" y="262" font-size="11" fill="var(--muted)">鎖は最も弱い環で切れる。どの環が弱いかは技術の優劣ではなく、増設に何年かかるかで決まる。</text>
  <text x="12" y="280" font-size="11" fill="var(--muted)">律速は移動する。2027年以降はHBMとDRAMが仕様と台数の両方を縛る側に回る。</text>
</svg>
<figcaption>層を並べる目的は序列をつけることではない。需要が1単位増えたときに最初に追いつかなくなる層を特定するためである。2026年時点でそれは後工程層にある。</figcaption>
</figure>

## EDAと命令セットが決める上流の分業

EDAが自動化したのは、設計仕様から製造用マスクデータへの変換作業である。トランジスタ1個の物理設計ではない。工程はHDLによる設計入力、論理合成、配置配線、テスト容易化設計、検証、DRCとLVS、サインオフの順に並ぶ。論理合成はVerilogやVHDLの高位記述をゲートレベルのネットリストへ変換する工程である。配置配線は素子の座標と金属配線の経路を決める工程で、かつて人手のレイアウト作業だった部分にあたる。DRCとLVSは、製造ルールへの適合とレイアウト対回路図の一致を、目視から自動チェックへ移した工程である。Synopsysは、現代のチップが数十億個のトランジスタを含み手作業の設計は不可能だと説明している [出典](https://www.synopsys.com/glossary/what-is-electronic-design-automation.html)。

ここでよくある理解を1つ潰しておく。EDAはトランジスタを自動設計してくれる、という理解は正しくない。トランジスタの構造自体はプロセス側が標準セルライブラリとして提供する。設計者はセルを選ぶのであって、セルを描いてはいない。EDAが置き換えたのは描く作業であり、何を作るか決める作業は人間に残った。設計者の仕事はマイクロアーキテクチャの選択、電力と面積と性能のトレードオフ判断、IPの組み合わせ設計へ移っている。

この層の経済規模は、前工程や後工程に比べて小さい。Synopsysの2025会計年度売上は70.54億ドルで、うちDesign Automationセグメントが53.02億ドル、全社の75.2%を占めた [出典](https://investor.synopsys.com/news/news-details/2025/Synopsys-Posts-Financial-Results-for-Fourth-Quarter-and-Fiscal-Year-2025/default.aspx)。後述するTSMCの2026年設備投資600億ドルから640億ドルと比べると、EDA最大手の年間売上は1桁小さい。==設計層は資本ではなく人材と検証時間で律速される層だと押さえてよい==。

命令セットの層も同じ性質を持つ。RISC-Vの武器は3つある。第1にライセンス構造で、ISAと批准済み拡張はロイヤリティ無償かつ恒久的に公開される。RISC-V InternationalはISA自体が新規技術を表すものではないとして特許を出願していない [出典](https://riscv.org/about/)。第2にモジュール性で、基本命令セットRV32Iは40命令にとどまり、乗除算やベクトルは拡張として後付けする [出典](https://en.wikipedia.org/wiki/RISC-V)。第3に統制構造で、2020年3月にスイスで法人化され、特定国の輸出管理に単一のライセンサーとして服さない形をとった [出典](https://riscv.org/about/)。

対するArmはライセンス料とチップ単位のロイヤリティで収益を得る。2026年3月期の売上は49.20億ドルで、2023年3月期の26.79億ドルに対し1.8倍である [出典](https://stockanalysis.com/stocks/arm/financials/)。内訳を見ると、同期のロイヤリティ収入は26.1億ドル、ライセンス収入は23.1億ドルで、ほぼ折半である [出典](https://newsroom.arm.com/news/arm-q4-fye26-results)。四半期のロイヤリティは第2四半期6.20億ドル、第3四半期7.37億ドル、第4四半期6.71億ドルと推移し、前年同期比では21%から27%の増加である。累計のチップ出荷個数は3,500億個を超える。

この2本立てが意味するのは、==収益の半分が過去の設計の出荷数に連動し、残り半分が将来の設計の契約数に連動する==ということである。ロイヤリティは出荷が続くかぎり入り続けるが単価が小さく、ライセンスは大きいが一度きりである。同社が伸ばしているのはデータセンター向けで、この領域のロイヤリティは前年比で2倍を超えた。スマートフォンで積み上げた出荷個数の資産を、単価の高い領域へ持ち込めるかがこの事業モデルの分岐点になる。

RISC-Vがこの収益構造をどこまで削れるかについては、ここで注意がいる。無償なのはISAの仕様だけで、コア実装、検証、ソフトウェア移植のコストは残る。RISC-Vが実際に奪えているのは、ISAライセンス料と設計自由度が効く組込みや制御用の小型コア領域である。x86の既存バイナリ互換という資産を代替してはいない。

==上流の分業は、供給を縛る側ではなく、誰が付加価値を取るかを決める側にある==。この区別が次節につながる。

## 微細化の減速が後工程を主役に押し上げた理由

まず物理から入る。平面MOSFETはゲートがチャネルの上面1方向からしか電界をかけられない。チャネル長が短くなるとソースとドレインの電界がチャネルに直接及び、ゲート電位でチャネルを閉じきれなくなる。これが短チャネル効果であり、実害はオフ状態のリーク電流として現れる。FinFETはチャネルをフィン状に立て、ゲートがフィンの両側面と上面を包む構造にした。同じチャネル長でもゲートがチャネルを囲む面積が増えるため、静電的な制御力が回復する [出典](https://en.wikipedia.org/wiki/Multigate_device)。

因果の向きに注意がいる。==微細化のために立体化した、という理解は逆である==。微細化を続けた結果ゲート制御が効かなくなり、制御力を取り戻す手段として立体化した。面積縮小は副次的な結果である。

時期は量産実績で確定できる。Intelは2011年に22nm世代で3-Dトライゲートを量産導入した。22nm世代のゲート長は約25nm、トランジスタ密度は1平方ミリメートルあたり1,650万個である [出典](https://en.wikipedia.org/wiki/22_nm_process)。ファウンドリではTSMCが16nm FinFETで追随し、N7は2018年、N5は2020年、N3は2022年といずれもFinFETで量産した。N2では第1世代ナノシートすなわちGAAを採用し、2025年第4四半期に量産を開始している [出典](https://www.tsmc.com/english/dedicatedFoundry/technology/logic)。露光側ではEUVの波長が13.5nm、解像度が13nm、開口数はNXEで0.33である。High-NAのEXEは開口数0.55、解像度8nmとされる [出典](https://www.asml.com/en/products/euv-lithography-systems)。なおIntelの22nm世代の性能数値は一次資料であるプレスリリースがHTTP 403で取得できず、二次資料に依拠している。

では、前工程の技術が止まったのか。止まっていない。止まっていないが、性能を上げる手段の主戦場が移った。1個のダイを小さくするだけでは、AIアクセラレータが必要とする演算量とメモリ帯域に届かない。演算ダイ、シリコンインターポーザ、HBMスタックを1つの基板上に統合して初めて製品になる。この統合工程が2.5D先端パッケージであり、代表がTSMCのCoWoSである。ここが足りなければ、前工程のウェハをいくら積んでも出荷はできない。

需要側の構成も同じ方向を指している。TSMCの2026年第2四半期のプラットフォーム別売上構成比は、HPCが66%、スマートフォンが22%である。スマートフォンは2025年第2四半期の27%から5ポイント下がった [出典](https://investor.tsmc.com/english/quarterly-results/2026/q2)。7nm以下の先端プロセスは同四半期のウェハ売上の77%を占め、2nmは3%だった [出典](https://investor.tsmc.com/english/quarterly-results/2026/q2)。市場全体でも、WSTSの2026年春季予測は2026年の世界半導体市場を1兆5,100億ドル、前年比90%増とし、うちメモリを前年比約250%増の8,000億ドル超と見込む [出典](https://www.wsts.org/76/Recent-News-Release)。

ここで1つ、よく引かれる数字に注意を促しておく。半導体売上の約25%がスマートフォンという構成比は、2026年時点では成立していないと判断する。TSMCのプラットフォーム別構成でスマートフォンは22%まで下がり、市場全体はメモリが約53%を占める計算になるためである。ただしこれは断定できない。WSTSもSIAもアプリケーション別の売上構成比を一般公開しておらず、SIA FactbookのPDFはHTTP 403で本文を取得できなかった。したがってこの判定はファウンドリ1社の構成比と市場全体のカテゴリ別構成からの推論であり、一次資料で直接示された数値ではない。

## 先端パッケージとHBM積層のどちらが先に供給を縛るか

2026年時点ではパッケージが先に効いている。根拠は当事者の発言である。TSMCのC.C. Wei氏は2026年7月16日の決算説明会で、自社のパッケージ能力が逼迫しており顧客の成長を制限していると述べ、IntelのEMIB-Tのような代替手段が市場に増えることを歓迎すると発言した。同氏はテスタも不足していると述べており、制約はパッケージ単独ではなく後工程バケット全体に及んでいる [出典](https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-07/547d1696765e05ce3adb81c108ce1c8c1682b80c/TSMC%202Q26%20Transcript.pdf)。

能力の絶対量を押さえる。TrendForceは2026年6月時点で、2026年のCoWoS月産能力をTSMC自社分120,000枚から140,000枚、OSATパートナー分50,000枚から60,000枚、業界合計を約200,000枚と伝えている。OSAT分は合計の25%から30%にあたる [出典](https://www.trendforce.com/news/2026/06/15/news-tsmc-cowos-supply-demand-gap-reportedly-seen-narrowing-from-20-to-10-by-end-2026-as-capacity-expands/)。

ここで数字が食い違う。同じTrendForceの2026年4月の記事は、CoWoSの2026年能力を年130万枚、2027年に200万枚としている [出典](https://www.trendforce.com/news/2026/04/28/news-tsmc-cowos-wafer-asp-reportedly-nears-7nm-levels-advanced-packaging-poised-to-become-a-key-profit-driver/)。月産200,000枚を単純に年換算すると240万枚となり、130万枚と一致しない。本章は月産の系列を採る。理由は、月産の系列のほうが2カ月後の更新であり、かつTSMC分とOSAT分を分解して示しているため、どの範囲を数えているかが読者に検証可能だからである。年130万枚の系列はTSMC自社分のみを指しているか、または年初時点の平均能力を指している可能性があるが、記事本文からは範囲を確定できない。年換算値を使う場合は130万枚から240万枚の幅として扱うのが安全である。

範囲の定義が揺れても、増設の速度そのものは一貫している。TSMC自社分の月産能力は2024年末の約35,000枚から2025年末の約75,000枚へ、2026年末には125,000枚から130,000枚へ増える見通しで、年率でおよそ80%の拡張が続いている。予約の集中度も高い。NVIDIA1社が2026年分として800,000枚から850,000枚を確保し、その年の総能力の50%超にあたると報じられている。==増設が年80%で進んでも需給ギャップが残るのは、需要側の伸びがそれを上回っているためである==。

分業線はCoWoSという1つの工程名の内部に引かれている。CoWoSはCoW、すなわちチップをインターポーザへ接合する段階と、WoS、すなわちインターポーザを基板へ接合する段階に分かれる。TSMCはWoSを以前からASE、Amkor、SPILへ外注してきた一方、CoWの外注は限定的にとどめてきた。2026年8月、TSMCがCoWの外注を拡大するとの報道が出た [出典](https://www.trendforce.com/news/2026/08/05/news-tsmc-reportedly-expands-outsourcing-of-key-cowos-front-end-step-to-osats-amid-rising-nvidia-asic-demand/)。受け手のOSATはいずれもWoSの技術ライセンスを既に受けており、CoW向けの新ラインに向けて装置発注を進めていると報じられている [出典](https://en.etnews.com/20260805200002)。これはいずれも報道段階の情報であり、当事者の開示ではない。

線が引かれる原理は工程の性質にある。CoW側はウェハプロセスの延長で、シリコンインターポーザ形成やハイブリッドボンディングを含み、前工程の装置と歩留まり管理に近い。WoS側は有機基板の扱いとリフローと反り制御が中心で、従来のフリップチップBGAの延長にある。==したがって線は技術ライセンスと歩留まり責任の所在で引かれており、固定的な工程境界ではない==。

第二極はIntelである。ニューメキシコ州リオランチョのFab 9を米国内の先端パッケージ拠点とし、従業員2,700名を置く。レチクル換算の実装面積は現行8倍、2028年に12倍超を計画する [出典](https://newsroom.intel.com/intel-foundry/intels-us-advanced-packaging-enables-next-generation-ai-semiconductors)。TSMCは2028年に14倍レチクルのCoWoSを掲げており、面積で競争が起きている。

第三極がOSATである。2024年のOSAT上位10社合計売上は415.6億米ドルで前年比3%増、内訳はASE 185.4億米ドル、Amkor 63.2億米ドル、JCET 50.0億米ドル、通富微電 33.2億米ドル、Powertech 22.8億米ドルだった [出典](https://www.trendforce.com/presscenter/news/20250513-12577.html)。ASEは上位10社合計の約45%を占める。この415.6億米ドルは後工程全体ではなく上位10社の合計である点に注意がいる。物理的な拠点数では、SEMIとTechSearch Internationalの2026年版データベースが世界820施設超を収録し、前年版の750施設から増えた。うち170施設超がAIとHPCを主要用途として申告している [出典](https://www.prnewswire.com/news-releases/semi-and-techsearch-international-release-2026-edition-of-worldwide-assembly--test-facility-database-302818766.html)。

では律速はいつまでパッケージにとどまるか。CoWoSの需給ギャップは2026年央の約20%から2026年末に約10%へ縮む見通しで、2.5D能力の逼迫は2027年に緩み始めるとされる [出典](https://www.trendforce.com/news/2026/06/15/news-tsmc-cowos-supply-demand-gap-reportedly-seen-narrowing-from-20-to-10-by-end-2026-as-capacity-expands/)。一方でメモリ側は逆に動く。2027年のHBMビット出荷は前年比50%増から60%増と見込まれるが需要増に追いつかず、DRAM全体の逼迫がHBM向けウェハ配分を縛る。その結果、NVIDIAはRubin Ultraについて当初の12段HBM4eから8段HBM4eや12段HBM4への引き下げを検討していると報じられている [出典](https://www.trendforce.com/presscenter/news/20260804-13166.html)。2026年のHBM市場を546億米ドル、前年比58%増とする予測もある [出典](https://news.skhynix.com/en/2026-market-outlook-focus-on-the-hbm-led-memory-supercycle/)。

順序をまとめる。2026年はパッケージが出荷台数を縛る。2027年以降はHBMとDRAMが仕様と台数の両方を縛る。メモリ制約が台数より先に仕様へ現れるのは、積層段数がGPU1台あたりのHBM容量とGPU出荷台数のトレードオフになるためである。律速が層をまたいで移動する例として、この2年間の推移は覚えておく価値がある。

## ロジックと切り離して見るべきパワー半導体の需要源

パワー半導体は電流を切り替えて損失を減らす部品である。==競争軸は線幅ではなく、耐圧、オン抵抗、熱設計、そして実装である==。設備投資の単価も先端ロジックとは1桁以上違う。ロジックとメモリの論理をそのまま持ち込むと読み違える。

需要源は2つある。第1は車載で、主戦場は駆動用インバータである。400Vから800Vのバッテリー系に対応する耐圧600Vから1200Vの領域で、IGBTモジュールまたはSiC MOSFETモジュールが使われる。車載充電器とDC-DCコンバータも同じ電圧帯を使う。第2はAIデータセンターの電力供給網である。系統からラックまでの配電は高耐圧側で車載の耐圧帯と部分的に重なるが、ラック内の電源ユニットからGPU直下の電圧変換までは低電圧かつ大電流の領域で、低耐圧MOSFETとGaNデバイスの世界になる。

したがって、車載が減速したらデータセンターが穴埋めするという代替関係は成立しにくい。IGBTモジュールの生産ラインは、GPU直下の電圧変換用デバイスの生産ラインに転用できない。強い企業も別である。

市況の実勢を見る。WSTSの2026年春季予測では、2026年の世界半導体市場が前年比90%増、メモリが約250%増、ロジックが37%増と予測されるのに対し、ディスクリートは8%増にとどまる。アナログは10%増である。地域別ではアメリカ大陸が112%増、日本が28%増である [出典](https://www.wsts.org/76/Recent-News-Release)。パワー半導体の大半はディスクリート区分に入る。AI投資は2026年の半導体市場を押し上げているが、その押し上げはメモリとロジックに集中しており、パワー半導体の伸びは1桁違う。データセンターがパワー半導体を牽引しているという主張は、この時点の数字では支持されない。

ただしディスクリートの成長率はパワー半導体の代理指標であって同一ではない。電源管理ICなどはアナログ区分に入り、逆にディスクリートには小信号トランジスタやダイオードも含まれる。

日本勢の位置づけについても、通説を数字で点検しておく。富士電機の半導体セグメントは、2025年3月期に売上高2,368億円、営業利益371億円、2026年3月期に売上高2,374億円、営業利益235億円だった。営業利益は136億円減、率にして37%減であり、営業利益率は15.7%から9.9%へ低下した。同じ2026年3月期の全社は売上高12,276億円、営業利益1,366億円である。半導体セグメントを除く営業利益は1,131億円となり、2025年3月期の805億円から40%増えている計算になる [出典](https://www.fujielectric.co.jp/about/ir/finance/segment.html)、[出典](https://www.fujielectric.co.jp/about/ir/finance/highlight.html)。営業利益率と半導体を除く営業利益は開示値ではなく、開示された売上高と営業利益からの算出である。全社が増益するなかで半導体だけが減益している。==技術的な蓄積があることと、その期に稼げていることは別である==。

日本勢の相対優位がどの工程にあるかについては、構造からの推論しか置けない。パワー半導体の性能は線幅ではなくパッケージの熱設計で決まる部分が大きく、基板材料、接合材、封止材、モジュール構造の設計がそのまま製品性能になる。川上材料と、成膜、エッチング、洗浄、研削といった製造装置も日本企業の比重が高いとされる領域である。ただし工程別シェアの一次データは取得できていない。SEMIの装置市場データ、信越化学のIR資料、ロームと経済産業省の資料はいずれもHTTP 403で取得できず、Infineon、STMicroelectronics、三菱電機、東芝のIRページはHTTP 404またはタイムアウトで取得できなかった。したがってこの結論は実証されていない構造推論として扱う。

## 層ごとの増設リードタイムと投資回収年数を比べる

律速を判定する物差しは、能力を1単位増やすのに何年かかるかである。層ごとに並べる。

| 層 | 増設リードタイムの根拠 | 目安 | 出典URL |
| --- | --- | --- | --- |
| 設計 | 資本ではなく人材と検証時間で決まる。Design Automation市場は年53.02億ドル規模で、前工程投資の1桁下 | 明確な一次資料なし | https://investor.synopsys.com/news/news-details/2025/Synopsys-Posts-Financial-Results-for-Fourth-Quarter-and-Fiscal-Year-2025/default.aspx |
| 前工程 | TSMCは技術と製品の開発、能力準備、量産立ち上げまでに5年超を要すると説明 | 5年超 | https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-07/547d1696765e05ce3adb81c108ce1c8c1682b80c/TSMC%202Q26%20Transcript.pdf |
| 後工程 | Amkorのアリゾナ州ピオリア拠点は2025年10月着工、竣工2027年央、量産2028年初 | 着工から初回売上まで約2年強 | https://www.manufacturingdive.com/news/amkor-arizona-7-billion-semiconductor-tsmc-apple-nvidia/802297/ |
| メモリ | 2027年のHBMビット出荷は前年比50%増から60%増でも需要に届かない見通し | 前工程増設に従属 | https://www.trendforce.com/presscenter/news/20260804-13166.html |
| パワー | 該当する一次資料を取得できず | 不明 | — |

後工程が前工程より短いリードタイムで増設できることは、投資の軽さを意味しない。ここが通説と食い違う点である。設備投資の売上比で見ると、TSMCの2025年は設備投資1兆2,724億台湾ドルに対し売上3兆8,091億台湾ドルで33.4%、ASEの2025年は設備投資1,646億台湾ドルに対し売上6,454億台湾ドルで25.5%、Amkorの2025年は設備投資9.05億米ドルに対し売上67.08億米ドルで13.5%である。ただしAmkorは2026年の設備投資を25億米ドルから30億米ドルへ引き上げており、2026年第2四半期の売上19億米ドルを年率換算した約80億米ドルに対して31%から38%にあたる [出典](https://www.investing.com/news/company-news/amkor-q2-2026-slides-record-revenue-stock-falls-on-outlook-93CH-4815192)。後工程が資本効率で前工程に勝るという一般論は、AIサイクル下では成立していない。

金額の絶対値でも後工程は小さくない。TSMCの2026年設備投資は600億米ドルから640億米ドルで、うち先端パッケージ、テスト、マスク等の後工程バケットが10%から20%を占める。金額では60億米ドルから128億米ドルとなり、OSAT最大手ASEの2026年設備投資105億米ドルと同じ桁に並ぶ。ASEは2026年に新規13拠点の建設と8拠点の改修を並行させ、2.5Dと3D、パネルレベルファンアウト、先端テストへ投資を集中させ、2027年に先端パッケージ売上75億米ドル以上を目標としている [出典](https://www.trendforce.com/news/2026/07/31/news-ase-again-raises-2026-capex-to-record-us10-5b-eyes-2x-leading-edge-advanced-packaging-revenue-by-2027/)。

収益性の側も、下請け工程という理解を裏切る。CoWoSウェハの平均販売価格は約10,000米ドルで7nmロジックウェハの水準に近い一方、CoWoSは1台1.5億米ドル超のEUV露光装置を必要としない。TrendForceは償却負担の軽さが先端パッケージの収益性の主因だとしている [出典](https://www.trendforce.com/news/2026/04/28/news-tsmc-cowos-wafer-asp-reportedly-nears-7nm-levels-advanced-packaging-poised-to-become-a-key-profit-driver/)。

投資回収年数そのものは、いずれの層についても一次開示が見つからなかった。TSMC、ASE、Amkorのいずれも回収期間を開示していない。代替指標として減価償却の耐用年数があり、TSMCは機械装置を5年、建物を10年から20年で償却する [出典](https://investor.tsmc.com/static/annualReports/2022/english/ebook/files/basic-html/page316.html)。OSAT側の耐用年数はSECのEDGARとAmkorのIRサイトがいずれも取得できず確認できなかった。したがって本章は回収年数を数値で比較していない。比較できるのは、着工から初回売上までの期間と、設備投資の売上比の2点にとどまる。

それでも判定はできる。2026年時点で最も増設に時間がかかり、かつ現に需要に届いていないのは後工程の先端パッケージである。前工程は5年超のリードタイムを持つが、7nm以下がウェハ売上の77%を占める水準まで既に立ち上がっており、当面の出荷台数を縛っているのはその先の工程である。設計層は資本制約が小さい。パワー半導体は需要の伸びが8%予測であり、そもそも逼迫の側にいない。律速は先端パッケージにある。

## この章の要点

- 半導体は設計、前工程、後工程、パワー用途という抽象度の違う層の集合であり、層を混ぜて比較すると誤る。FinFETとRISC-Vは同列の選択肢ではない。
- EDAが自動化したのはHDLからマスクデータへの変換であり、トランジスタ構造は標準セルライブラリとして与えられる。設計層は資本ではなく人材と検証時間で律速される。
- FinFETは微細化のためではなく、微細化で失われたゲート制御力を取り戻すために採用された。目的はリーク電流の抑制で、面積縮小は副次的な結果である。
- 2026年の律速は後工程である。TSMCのC.C. Wei氏は2026年7月16日にパッケージ能力が顧客の成長を制限していると述べ、テスタ不足にも言及した。
- CoWoSの月産能力は2026年に業界合計約200,000枚で、うちOSAT分が50,000枚から60,000枚、比率は25%から30%である。分業線はCoWとWoSの間にあり、2026年8月にCoW側の外注拡大が報じられた。
- 律速は移動する。CoWoSの需給ギャップは2026年末に約10%へ縮む見通しで、2027年以降はHBMとDRAMが仕様と台数の両方を縛る側に回る。
- 後工程は増設が前工程より速いが投資は軽くない。設備投資の売上比はASEが2025年で25.5%、Amkorが2026年計画で31%から38%であり、TSMCの2025年実績33.4%と同じ帯域に入る。
- パワー半導体はAIサイクルの外にいる。2026年の市場全体が90%増予測のなか、ディスクリートは8%増予測である。車載とデータセンターは電圧帯も生産ラインも別で、片方の減速をもう片方が埋める構造にはない。

## 残っている問い

- 半導体市場のアプリケーション別売上構成比を一次資料で確認できていない。WSTSもSIAも一般公開しておらず、SIA FactbookのPDFはHTTP 403で取得できなかった。本章のスマートフォン構成比に関する判定は推論である。
- CoWoS能力の年換算値が食い違う。月産200,000枚は年240万枚に相当する一方、別記事は2026年を年130万枚としている。範囲の定義が記事本文から確定できないため、年換算は130万枚から240万枚の幅として扱うほかない。月産の時系列と予約集中度は確認できたが、TSMCの公式開示ではない。
- 後工程投資の回収年数を明示した一次開示が見つからない。OSATの機械装置の耐用年数、装置1台あたりの取得価額、稼働率前提の3点が揃えば下限は計算できる。AmkorのForm 10-KとASEの年次報告書の有形固定資産注記が必要である。
- パワー半導体市場の用途別金額内訳を取得できていない。車載とデータセンターの金額比、1台あたり搭載額の水準が未確認である。YoleまたはOmdiaのパワーデバイス市場レポート、InfineonとSTMicroelectronicsの用途別売上開示が必要になる。
- 日本勢がパワー半導体のどの工程で相対優位を持つかは構造推論にとどまる。SEMIの装置地域別出荷額、信越化学とSUMCOのウエハー事業セグメント開示、Yoleのパワーモジュール市場シェア表の3点が要る。
- Armのロイヤリティを最終製品の分野別に分解できていない。四半期別の金額と累計出荷個数は同社の決算発表で確認したが、スマートフォン、エッジ、データセンターの金額内訳は開示されていない。データセンター向けが前年比2倍という記述も比率のみである。
- Intelの22nm世代の性能数値は、プレスリリースがHTTP 403で取得できず二次資料に依拠している。
- CoW工程の外注拡大は2026年8月時点で報道段階の情報であり、TSMCおよびOSAT各社の開示による確認が取れていない。

## 出典

1. WSTS, Spring 2026 Semiconductor Market Forecast — https://www.wsts.org/76/Recent-News-Release
2. TSMC, 2026年第2四半期 決算資料 — https://investor.tsmc.com/english/quarterly-results/2026/q2
3. TSMC, 2Q26 Earnings Conference Transcript — https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-07/547d1696765e05ce3adb81c108ce1c8c1682b80c/TSMC%202Q26%20Transcript.pdf
4. TSMC, Logic Technology — https://www.tsmc.com/english/dedicatedFoundry/technology/logic
5. TSMC, 2022 Annual Report 減価償却方針 — https://investor.tsmc.com/static/annualReports/2022/english/ebook/files/basic-html/page316.html
6. Synopsys, What is Electronic Design Automation — https://www.synopsys.com/glossary/what-is-electronic-design-automation.html
7. Synopsys, Financial Results for Fourth Quarter and Fiscal Year 2025 — https://investor.synopsys.com/news/news-details/2025/Synopsys-Posts-Financial-Results-for-Fourth-Quarter-and-Fiscal-Year-2025/default.aspx
8. ASML, EUV lithography systems — https://www.asml.com/en/products/euv-lithography-systems
9. RISC-V International, About — https://riscv.org/about/
10. Wikipedia, RISC-V — https://en.wikipedia.org/wiki/RISC-V
11. Wikipedia, Multigate device — https://en.wikipedia.org/wiki/Multigate_device
12. Wikipedia, 22 nm process — https://en.wikipedia.org/wiki/22_nm_process
13. StockAnalysis, Arm Holdings financials — https://stockanalysis.com/stocks/arm/financials/
14. TrendForce, TSMC CoWoS Supply-Demand Gap Reportedly Seen Narrowing from 20% to 10% by End-2026 — https://www.trendforce.com/news/2026/06/15/news-tsmc-cowos-supply-demand-gap-reportedly-seen-narrowing-from-20-to-10-by-end-2026-as-capacity-expands/
15. TrendForce, TSMC CoWoS Wafer ASP Reportedly Nears 7nm Levels — https://www.trendforce.com/news/2026/04/28/news-tsmc-cowos-wafer-asp-reportedly-nears-7nm-levels-advanced-packaging-poised-to-become-a-key-profit-driver/
16. TrendForce, TSMC Reportedly Expands Outsourcing of Key CoWoS Front-End Step to OSATs — https://www.trendforce.com/news/2026/08/05/news-tsmc-reportedly-expands-outsourcing-of-key-cowos-front-end-step-to-osats-amid-rising-nvidia-asic-demand/
17. ETNews, TSMC Expands CoWoS Outsourcing to Ease AI Chip Bottleneck — https://en.etnews.com/20260805200002
18. TrendForce, Top 10 OSAT Companies of 2024 Revealed — https://www.trendforce.com/presscenter/news/20250513-12577.html
19. TrendForce, ASE Again Raises 2026 CapEx to Record US$10.5B — https://www.trendforce.com/news/2026/07/31/news-ase-again-raises-2026-capex-to-record-us10-5b-eyes-2x-leading-edge-advanced-packaging-revenue-by-2027/
20. TrendForce, DRAM Supply to Remain Tight in 2027, Prompting NVIDIA to Lower HBM Configurations for Rubin Ultra — https://www.trendforce.com/presscenter/news/20260804-13166.html
21. SK hynix Newsroom, 2026 Market Outlook — https://news.skhynix.com/en/2026-market-outlook-focus-on-the-hbm-led-memory-supercycle/
22. Intel Newsroom, Intel's U.S. Advanced Packaging Enables Next-Generation AI Semiconductors — https://newsroom.intel.com/intel-foundry/intels-us-advanced-packaging-enables-next-generation-ai-semiconductors
23. SEMI / PR Newswire, 2026 Edition of Worldwide Assembly & Test Facility Database — https://www.prnewswire.com/news-releases/semi-and-techsearch-international-release-2026-edition-of-worldwide-assembly--test-facility-database-302818766.html
24. Investing.com, Amkor Q2 2026 slides — https://www.investing.com/news/company-news/amkor-q2-2026-slides-record-revenue-stock-falls-on-outlook-93CH-4815192
25. Manufacturing Dive, Amkor expands Arizona semiconductor campus investment to $7B — https://www.manufacturingdive.com/news/amkor-arizona-7-billion-semiconductor-tsmc-apple-nvidia/802297/
26. 富士電機, セグメント情報 — https://www.fujielectric.co.jp/about/ir/finance/segment.html
27. 富士電機, 業績ハイライト — https://www.fujielectric.co.jp/about/ir/finance/highlight.html
28. Wikipedia, Semiconductor industry — https://en.wikipedia.org/wiki/Semiconductor_industry
