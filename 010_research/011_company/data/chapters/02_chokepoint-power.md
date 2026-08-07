---
section: company
chapter: 2
slug: chokepoint-power
title: 価格決定力はどこに宿るか
thesis: 価格決定力はシェアの大きさではなく代替に必要な年数で決まり、その年数がそのまま独占プレミアムの寿命になる。
---

企業を評価するとき、多くの人はまずシェアを見る。世界の何割を握っているか、競合は何社いるか。しかしシェアの数字が同じでも、価格を自分で決められる会社と、決められない会社がある。2026年前半の半導体産業には、その差がはっきり出た例が並んでいる。HBMで56.4%のシェアを持つ会社は、汎用DRAMの値上がりに追随できず1ウェハ当たりの採算を逆転させた。一方でEUV露光装置を100%供給する会社は、粗利率を5年間ほぼ同じ水準に保っている。両者を分けているのはシェアの大小ではない。顧客が別の供給元に切り替えるまでに何年かかるか、である。この章では、その年数を測る方法と、年数が価格と株価倍率のどちらに現れるかを扱う。年数を見誤ると、崩れない独占を崩れると読み、崩れる独占を崩れないと読むことになる。

## 供給の集中をシェアではなく代替リードタイムで測る

シェアは結果であって原因ではない。原因は、顧客が今の供給元をやめたいと思ったときに、実際にやめられるまでの時間である。これを代替リードタイムと呼ぶ。代替リードタイムが10年なら、供給元は10年分の価格決定力を持つ。1年なら1年分しか持たない。

EUV露光装置はこの尺度で最も長い。ASMLはEUV露光装置を供給する唯一の企業であり、自社サイトでもEUVをASML固有の技術と説明している [出典](https://www.asml.com/en/products/euv-lithography-systems)。ただし参入を止めているのは装置の設計ではなく、その手前の光学系である。High-NA世代の投影光学系はCarl Zeiss SMTが単独で供給しており、ASMLは2016年に10億ユーロを現金で払って同社の24.9%を取得し、加えて研究開発に約2.2億ユーロ、設備投資とサプライチェーン投資に約5.4億ユーロを6年間で拠出する契約を結んだ [出典](https://www.asml.com/en/news/press-releases/2016/zeiss-and-asml-strengthen-partnership-for-next-generation-of-euv-lithography)。新規参入者は装置を設計する前に、同等の非球面鏡を作れる第二のZeissを見つけなければならない。ここが本当のボトルネックである。

既存の露光装置メーカーは先端領域から降りている。ニコンの2026年3月期の半導体露光装置販売台数は新品22台と中古5台の合計27台で、光源別ではArF液浸がゼロ、ArFドライが3台、KrFが4台、i線が20台だった。精機事業は売上収益1,672億円、営業損益は45億円の赤字である [出典](https://www.jp.nikon.com/content/dam/web-assets/nikoncom/company/local/jp/ja/ir/ir_library/result/pdf/2026/26_all.pdf)。キヤノンの2026年12月期計画はKrF69台とi線169台の合計238台で、ArF液浸もEUVも含まない [出典](https://news.mynavi.jp/techplus/article/20260515-4461438/)。中国ではSiCarrierがHuaweiの支援でEUVを開発しており、SMIC創業者の張汝京は量産レベルの国産化まで最短2年、最長5年と述べている [出典](https://toyokeizai.net/articles/-/938909?display=b)。ただし出力や歩留まりを示す一次資料は確認できていない。仮に国産化が成功しても、報じられている水準は0.33 NA相当であり、ASMLが2019年に量産投入した世代にあたる。追いつく先が動いている以上、代替リードタイムは張汝京の言う2年から5年ではなく、それより長く見るのが妥当である。

同じ尺度をTSMCの先端ノードに当てると、年数はもっと短い。TSMCが2025年4月23日に発表した1.4nm世代のA14は、N2比で同一電力時に最大15%高速、同一速度時に最大30%低消費電力、ロジック密度は20%超の向上とされ、2028年の生産開始を計画している [出典](https://pr.tsmc.com/english/news/3228)。競合の予定は、SamsungがSF1.4の量産を2029年、IntelがIntel 14Aのリスク生産を2027年末で量産を2028年としている。いずれも報道ベースであり、Intelについては2026年前半時点で確定した外部顧客が公表されていない [出典](https://www.trendforce.com/news/2026/06/30/news-samsung-reportedly-restarts-1-4nm-push-targets-2029-mass-production-to-close-gap-with-tsmc-intel/)、[出典](https://www.tomshardware.com/tech-industry/semiconductors/intel-says-it-has-two-prospective-customers-for-14a-expects-to-hear-about-commitments-in-second-half-of-2026)。設計はプロセスごとに最適化されるため、他社ノードへ移すには物理設計のやり直しとテープアウトが要る。四半期単位では終わらないが、10年はかからない。

HBMはさらに短い。NVIDIAは2026年6月5日、Vera Rubin向けHBM4の供給元としてSK hynix、Samsung、Micronの3社すべてを認定したと表明した [出典](https://finance.yahoo.com/sectors/technology/articles/nvidia-certifies-samsung-sk-hynix-133001560.html)。HBM3E世代ではSK hynixが先行認定の優位を持っていたが、HBM4では3社が同じ土俵に立っている。認定が済んでいるということは、顧客から見た代替リードタイムがほぼゼロだという意味である。SK hynixのHBMシェアは会社開示で2026年第1四半期に56.4% [出典](https://www.stocktitan.net/sec-filings/SKHY/424b4-sk-hynix-inc-prospectus-filed-pursuant-to-rule-424-b-4-20fb1c1aec65.html)、第三者推計では50%から62%まで幅がある。集計対象と時点が異なるため一本の数字には寄せられない。ここで押さえるべきは、シェアが56%であってもEUVの100%とは価格決定力の質が違うという点であって、シェアの小数点以下ではない。

CPU IPはもう一段短い。RISC-Vでは命令セット仕様そのものが無償であり、顧客には自社設計という代替肢が常に残る。ISAの使用権に価格が付かない以上、IPベンダの提示価格には上限がかかる。

| 対象 | 供給の集中度 | 代替に必要な年数の目安 | 年数を決めている要因 | 出典 |
|---|---|---|---|---|
| EUV露光装置 | 単独供給 | 10年級 | Zeiss SMTが投影光学系を単独供給、ASMLが24.9%出資 | https://www.asml.com/en/news/press-releases/2016/zeiss-and-asml-strengthen-partnership-for-next-generation-of-euv-lithography |
| 1.4nm級ロジック | 実質単独 | 1年から数年 | Samsungは2029年、Intelは2028年を計画、いずれも報道ベース | https://www.trendforce.com/news/2026/06/30/news-samsung-reportedly-restarts-1-4nm-push-targets-2029-mass-production-to-close-gap-with-tsmc-intel/ |
| HBM4 | 3社 | ほぼゼロ | NVIDIAが2026年6月に3社を認定済み | https://finance.yahoo.com/sectors/technology/articles/nvidia-certifies-samsung-sk-hynix-133001560.html |
| CPU IP | 複数 | 常時 | ISAが無償で内製という選択肢が残る | https://riscv.org/blog/shd-forecast-2026/ |

## 独占プレミアムが株価倍率に乗り続ける条件

代替リードタイムが長いと、その企業の何が守られるのか。答えは粗利率である。株価収益率ではない。この2つを分けて考えないと、独占が続いているのに倍率が下がった、という現象を説明できなくなる。

ASMLの粗利率は2021年の52.7%から2025年の52.8%までほぼ横ばいである [出典](https://www.asml.com/en/news/press-releases/2026/q4-2025-financial-results)。単独供給という立場は、利益率の水準を守ってはいるが伸ばしてはいない。2026年通期ガイダンスで粗利率が54%から56%へ上がる見込みなのは、値上げではなく単価の高いEUVの構成比が上がるためである [出典](https://www.asml.com/en/news/press-releases/2026/q2-2026-financial-results)。独占プレミアムは、値上げの自由としてではなく、値下げを迫られない自由として損益計算書に出ると理解したほうがよい。

一方で株価倍率は別の要因で動く。2026年8月時点のASMLのTTM PERは53.2倍で、同じ集計の2025年末は37.5倍だった [出典](https://companiesmarketcap.com/asml/pe-ratio/)。フォワードPERは2026年8月2日時点で37.25倍である [出典](https://www.gurufocus.com/term/forward-pe-ratio/ASML)。TTMとフォワードの差が16ポイント近くあるという事実が、この倍率の中身を示している。53倍は独占の対価ではなく、利益が伸びる前提の対価である。実際、2026年通期の売上高ガイダンスは1月28日時点の340億から390億ユーロ、4月時点の360億から400億ユーロ、7月15日時点の430億から450億ユーロと3回引き上げられた [出典](https://www.asml.com/en/news/press-releases/2026/q2-2026-financial-results)。2024年11月のInvestor Dayで示した2030年シナリオは年間売上高440億から600億ユーロ、粗利率56%から60%だった [出典](https://www.asml.com/en/news/press-releases/2024/asml-investor-day-2024)。2026年ガイダンスの上限450億ユーロは、この2030年シナリオの下限を4年前倒しで超える水準にあたる。次のCapital Markets Dayは2027年6月10日に設定されている [出典](https://ourbrand.asml.com/asset/9078cf4d-91fd-4dd9-a5d5-d1caab6dc046/2026_07_15_Presentation-Investor-Relations-Q2-2026.pdf)。つまり倍率は、長期目標が上方修正されるという期待を先に織り込んでいる。

したがって倍率が下がる引き金は、競合の出現ではなく成長率の鈍化である。ASMLの場合、引き金は3つある。第一に中国売上比率の低下で、CFOのRoger Dassenは2024年の41%から2025年に33%へ下がり、2026年は20%程度になると述べている [出典](https://www.scmp.com/tech/tech-trends/article/3341632/asml-reports-heated-global-demand-2025-cools-china-outlook-amid-us-sanctions)。第二に開示の後退で、2025年第4四半期には四半期受注残高131.58億ユーロを開示していたが、2026年第1四半期と第2四半期の決算発表には四半期受注額の記載がない。投資家は出荷とガイダンスから需要を推定するしかなく、推定の幅がそのまま倍率の振れ幅になる。第三に受注そのものの変動で、2025年の四半期受注額は最小39.36億ユーロから最大131.58億ユーロまで3.3倍の開きがあった [出典](https://ourbrand.asml.com/m/3136300aa4999bc1/original/2026_01_28_Presentation-Investor-Relations-Q4-2025.pdf)。

SK hynixは、この分離が逆向きに現れた例である。2026年第2四半期の売上高は79兆3,187億ウォン、営業利益は60兆5,426億ウォン、営業利益率は76%だった [出典](https://news.skhynix.com/en/q2-2026-business-results/)。前年同期比では売上高が257%増、営業利益が557%増である。それでも7月28日発表の決算は市場予想を5%から6%下回り、株価は下落した。理由は、HBMが年次の長期供給契約で価格を決めているため、汎用DRAMのスポット価格急騰を即座に反映できないことにある。2026年前半には、1ウェハ当たり採算で汎用DRAMがHBMを上回る逆転が生じた [出典](https://xenospectrum.com/sk-hynix-q2-hbm-lta/)。シェアが50%台後半でも、契約の形式が価格決定力を年単位で凍結する。ここでも、シェアではなく契約と代替性の構造が価格を決めている。

## 世代交代が障壁を作り直す局面と壊す局面

技術の世代が変わるとき、既存企業の障壁は自動的に更新されるわけではない。強化される場合と溶ける場合があり、分岐点は新世代で希少になる資源を既存企業が押さえているかどうかにある。

EUVからHigh-NAへの移行は、障壁が作り直された例である。新世代で希少になるのは0.55 NAの投影光学系であり、それを供給できるのはZeiss SMT1社で、ASMLは出資と資金拠出でその1社を囲い込んでいる。したがって世代が進むほど参入は難しくなる。

HBM3EからHBM4への移行は逆である。新世代で希少になるはずの資源、つまり顧客の認定を、3社が同時に取得した。SK hynixが持っていた先行認定の優位は世代の切り替わりで消えた。数量配分についてSK hynixが6割から7割、Samsungが2割半ばから3割、Micronが残りという供給網筋の推計はあるが、NVIDIAは配分比率を公表していない。推計は一次資料で裏が取れていない。

ただしHigh-NAの側にも、参入とは別の脅威がある。採用の遅れである。TSMCのKevin Zhangは2nmからA14までHigh-NAを使う必要はないと述べている [出典](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-reiterates-it-doesnt-need-high-na-euv-for-1-4nm-class-process-technology)。Intelは2026年第2四半期にIntel 18Aの一部レイヤーでHigh-NAプロセスオプションの認定を完了した [出典](https://ourbrand.asml.com/asset/9078cf4d-91fd-4dd9-a5d5-d1caab6dc046/2026_07_15_Presentation-Investor-Relations-Q2-2026.pdf)。1台あたり約3.8億ドルという価格が採用判断を鈍らせている [出典](https://www.tomshardware.com/tech-industry/manufacturing/asmls-high-na-chipmaking-tool-will-cost-dollar380-million-the-company-already-has-orders-for-10-to-20-machines-and-is-ramping-up-production)。ASML自身の行動もこれを裏づける。2027年に増産すると表明したのはHigh-NAではなく低NA EUVで、2026年の約65台から30%増やす計画である [出典](https://www.asml.com/en/news/press-releases/2026/q2-2026-financial-results)。障壁が最も高い世代が、必ずしも収益の主戦場になるとは限らない。

需要の変動をどこまで吸収できるかも、世代交代とあわせて見ておく必要がある。ASMLの場合、吸収材は3つある。第一に、装置販売から切り離されたInstalled Base Management売上が2025年に82億ユーロで、総売上326.67億ユーロの25%を占める。2026年第2四半期も27.62億ユーロで、四半期売上93.26億ユーロの30%にあたる。この収益は稼働中の装置台数に連動し、新規受注には連動しない。第二に、台数の落ち込みを単価と構成で相殺した実績がある。リソグラフィ装置の販売台数は2023年449台、2024年418台、2025年327台と2年間で27%減ったが、同じ期間に売上高は275.59億ユーロから326.67億ユーロへ19%増えた。第三に、受注の振れが売上に伝わるまで時間差がある。年間受注額は2022年306.74億ユーロ、2023年200.41億ユーロ、2024年188.99億ユーロと2年連続で減ったが、売上高は2023年275.59億ユーロ、2024年282.63億ユーロと2.6%増えている [出典](https://ourbrand.asml.com/m/3136300aa4999bc1/original/2026_01_28_Presentation-Investor-Relations-Q4-2025.pdf)。

吸収力の上限は受注残高で測れる。2025年末の受注残高387.97億ユーロは、2026年ガイダンス中央値440億ユーロに対して0.88年分にあたる。単年度の需要停止は吸収できるが、2年続く下降局面は吸収できない。しかも吸収材が1つ減っている。2023年から2024年にかけて先端ロジックの投資が鈍った局面では、中国向けの成熟ノードDUVが穴を埋めた。中国比率が2026年に20%まで下がるなら、次の下降局面ではこの緩衝材は使えない。

## 単一拠点への集中が抱える物理リスクと分散の実速度

代替リードタイムが長い供給元は、その分だけ物理的な事故のインパクトも大きくなる。止まったときに代わりがないからである。ここでよく起きる誤りは、物理リスクの大きさを事故の頻度や規模で測ってしまうことである。測るべきは、止まった期間と代替リードタイムの比である。

TSMCの地震被害は、この観点で見ると小さい。2024年4月3日の花蓮地震はML7.1で、TSMCは構造被害なし、EUVを含む主要装置の損傷なしと発表し、10時間以内に装置復旧率70%超、地震から3日目の終わりまでに全復旧したとしている。損失は保険控除後でNT$30億だった [出典](https://www.trendforce.com/news/2024/04/19/news-tsmc-to-recognize-ntd-3-billion-earthquake-loss/)。2025年1月21日の嘉義大埔地震はML6.4で、TSMCは構造被害なしとしつつ保険控除後NT$53億の損失を2025年第1四半期に計上した [出典](https://pr.tsmc.com/english/news/3204)。規模が小さいほうの地震で損失が1.77倍になっている点は、マグニチュードではなく震源からの距離が効くことを示す。2025年の純売上高はNT$3兆8,090億なので [出典](https://investor.tsmc.com/sites/ir/sec-filings/2025_20F%20Report.pdf)、NT$53億は0.14%にあたる。地震は生産が止まるリスクではなく、数日分の仕掛品が飛ぶリスクとして現れている。

ただし耐力の上限は分かっていない。TSMCの主要Fabについて、設計震度も設計加速度も一次資料では公表されていない。2025年のForm 20-Fにも2025年アニュアルレポートにも数値の記載がない。開示されているのは、施設と装置の耐震許容度を評価し耐震保護その他の安全対策を実施しているという定性的な記述と、2025年に避難訓練を123回、消防訓練を71回実施したという実績である [出典](https://investor.tsmc.com/static/annualReports/2025/english/pdf/2025_tsmc_ar_e_ch7.pdf)。2026年7月28日の熊本地震はマグニチュード7.1、最大震度7を宇城市と氷川町で観測したが [出典](https://www.kyoshin.bosai.go.jp/ja/topics/20260728162700/)、JASMのある菊陽町の震度は5強である [出典](https://typhoon.yahoo.co.jp/weather/jp/earthquake/20260728162718.html)。TSMCは第1工場の構造に被害なし、第2工場も工事上の後退なしと発表し、8月初旬に通常操業へ復帰した [出典](https://focustaiwan.tw/business/202608040008)。震度6強までは構造被害ゼロで通過した実績があるが、震度7の直撃に対する耐力は実績でも一次資料でも確認できていない。

分散は進んでいるのか。ここは投資ベースと稼働ベースを分けないと読み違える。投資ベースでは加速している。TSMCは2025年3月4日に対米投資を1,650億ドルへ拡大すると発表し [出典](https://pr.tsmc.com/english/news/3210)、2026年7月16日の決算説明では2nm以下のロジックFabと後工程Fabのために追加で1,000億ドルを投じ、Arizonaへの累計投資を約2,650億ドルとすること、Fabを4棟追加することを説明した。2026年の設備投資ガイダンスは600億から640億ドルへ引き上げられている [出典](https://www.fool.com/earnings/call-transcripts/2026/07/16/tsm-tsm-q2-2026-earnings-call-transcript/)。稼働ベースでは初期段階にある。2026年2月28日時点で操業中の12インチFabのうち台湾外にあるのは、Arizonaの Fab 21 が5nm、Kumamotoの Fab 23 が28nmの2拠点だけである。3nmの量産はFab 18、2nmの量産はFab 20とFab 22で、3拠点とも台湾にある [出典](https://investor.tsmc.com/sites/ir/sec-filings/2025_20F%20Report.pdf)。

分散の速度は過去の実績から推定できる。Fab 21は2020年11月の法人設立から2024年末の量産まで4年を要した。同じリードタイムを当てはめると、2026年7月に追加発表された4棟が2nm以下で量産に入るのは2030年前後になる。したがって台湾外に先端能力の実体が積み上がるのは2029年から2030年で、それまで先端の集中構造は変わらない。台湾外比率の会社公式目標として一次資料で確認できるものはない。

分散にはコストも伴う。海外Fabの立ち上げは粗利率を初期に2から3ポイント、後半に3から4ポイント希薄化するとTSMCは説明している [出典](https://www.fool.com/earnings/call-transcripts/2026/07/16/tsm-tsm-q2-2026-earnings-call-transcript/)。物理リスクを下げる行動が、独占プレミアムの現れ場所である粗利率を削る。この交換関係は避けられない。なおA14の生産拠点は台中の中部科学園区に建設中のFab 25と報じられており、投資額はNT$1兆5,000億、4棟構成、量産は2028年下期とされるが、立地も投資額も一次資料では確認できていない [出典](https://www.trendforce.com/news/2025/10/20/news-tsmc-reportedly-to-break-ground-1-4nm-taichung-fab-on-nov-5-mass-production-slated-in-2h28/)。

顧客の集中も併せて見る必要がある。2025年の上位10社が純売上の78%、最大顧客が19%、第2位顧客が17%を占め、プラットフォーム別ではHPCが58%、スマートフォンが29%である [出典](https://investor.tsmc.com/sites/ir/sec-filings/2025_20F%20Report.pdf)。先端ノードの初期割当は上位顧客に偏るため、特定世代の停止はまず少数の製品ロードマップに直撃する。なお、台湾の生産へのアクセスを失うと世界の先端ロジック供給は62%減り、米中の武力衝突シナリオでは初年度で世界GDPの9.6%、10.6兆ドルが失われるという試算がある [出典](https://www.insurancejournal.com/news/international/2026/02/12/857770.htm)。これは台湾全体を失う想定であり、単一世代の停止に当てはめてはならない。

## 挑戦者は既存の牙城のどの層から食い込むか

代替リードタイムという尺度は、守る側だけでなく攻める側の読み方も変える。挑戦者は最も収益性の高い層からではなく、代替リードタイムが最も短い層から入る。そこが唯一、顧客が乗り換えを決断できる場所だからである。

SiFiveの数字はこの構図を示している。同社は2026年4月のSeries Gのリリースで、累計出荷コアが100億超、採用設計が500件超と記載した [出典](https://www.sifive.com/press/sifive-raises-400-million-to-accelerate-high-performance-risc-v-data-center-solutions)。一方で会社紹介ページは20億台超のデバイスと400件超のdesign winを掲げており、数え方が異なる [出典](https://www.sifive.com/company/about)。コア数はチップ内のコア実装数の合計、デバイス数は出荷機器数なので、この2つは矛盾ではなく、1チップに複数コアが載る構造を示す。ここで重要なのは、100億という数がArmのチップを100億個置き換えた意味ではないことである。SiFiveのIntelligence系IPは専用コプロセッサインタフェースを介したAccelerator Control Unitとして位置づけられ、X160 Gen 2とX180 Gen 2はfar edgeとIoT向けである [出典](https://www.sifive.com/press/new-x100-series-second-gen-intelligence-family)。サーバ向けのPerformance P870-DはArm Neoverse N2クラスとの競合として説明されており、上位のNeoverse V系ではない [出典](https://www.sifive.com/blog/investing-in-our-next-chapter-of-growth)。つまり食い込んでいるのはSoC内部の制御コア、組込みクラス、サーバCPUの下位クラスである。

守る側の数字にも、いま削られている形跡は出ていない。Armの2027年3月期第1四半期はroyaltyが7.15億米ドルで前年同期比22%増、licensingが5.74億米ドルで同23%増、いずれも第1四半期として過去最高である。Neoverseエコシステムの累計出荷は15億コアを超え、うち5億コアは直近9か月に発生した [出典](https://newsroom.arm.com/news/arm-q1-fye27-results)。ただしArmはISA別の失注シェアを開示していないため、SiFiveの100億コアがArmから奪った分か、もともと自社設計や既製MCUだった枠かは一次資料からは切り分けられない。

挑戦者の側が主張する優位も、性能ではなく設計自由度に置かれている。SiFiveは2026年1月15日にNVIDIA NVLink Fusionへの対応を発表し、顧客がNVIDIAのGPUと自社カスタムCPUをcoherentに接続できる構成を示した [出典](https://www.sifive.com/press/sifive-nvidia-nvlinkfusion-datacenter)。この発表内容は、NVIDIA自身がRISC-V CPUへ移行するという意味ではない。CTOのYunsup Leeはagentic AIが複雑な制御を電力効率を保ったまま処理するElastic Computeを要求すると述べ、モジュール型のオープンISAでなければワークロード別の最適化ができないと主張している [出典](https://www.sifive.com/blog/investing-in-our-next-chapter-of-growth)。P870-DとNeoverseの電力あたり性能を比較した公開データは、SiFiveの資料にもArmの資料にも見当たらない。一方でArmは2026年3月にagentic AI向けのArm AGI CPUを投入し、2027年3月期と2028年3月期にまたがる顧客需要が20億米ドル超、採用先にMeta、OpenAI、Cerebrasを挙げている [出典](https://newsroom.arm.com/news/arm-q4-fye26-results)。

収益の構造を見ると、挑戦者の側の単価の上限がはっきりする。Armは2026年3月期にroyalty 26.1億米ドル、licensing 23.1億米ドル、合計49.2億米ドルを計上し、royaltyが全体の53%を占める [出典](https://newsroom.arm.com/news/arm-q4-fye26-results)。Flexible Accessは年会費が0米ドルから8.5万米ドルで、Standard tierは年8.5万米ドル、tape out時に製品別のfee、量産後に出荷数連動のroyaltyという構造である [出典](https://www.arm.com/products/flexible-access)。SiFiveは価格表も売上絶対額も公開していない。開示されているのは2025年の売上が前年比50%超の伸びだったことだけである。SHD Groupの2026年版予測では、2031年のRISC-VベースSoCは359億個、関連収益は3,180億米ドルだが、そのうちRISC-V CPU IP収益は約19億米ドルにとどまる [出典](https://riscv.org/blog/shd-forecast-2026/)。IPが取る割合は約0.6%であり、この19億米ドルはArm単独の2026年3月期royalty 26.1億米ドルの0.73倍にすぎない。市場が拡大しても、取り分の構造が変わらなければIP収益は追いつかない。

露光装置の側でも同じ形が見える。キヤノンのナノインプリントは2023年10月に世界初の商用機として発表され、2024年9月に最初の顧客であるTexas Institute for Electronicsへ出荷された。解像力は出荷時点で最小線幅14nm、テンプレート技術の進化で10nmを目標としている [出典](https://global.canon/en/news/2024/20240926.html)。最初の顧客が研究コンソーシアムであることが、この技術が量産ロジックの置き換えではないことを示している。挑戦者はまず、乗り換えコストが最も低い顧客のところに現れる。

そして挑戦者の資金調達は、代替リードタイムを縮める意思表示として読むべきである。SiFiveは2026年4月9日、Atreides Management主導、NVIDIAとApollo Global Management、T. Rowe Priceなどが参加する4億米ドルのSeries Gを発表し、評価額は36.5億米ドルとなった [出典](https://www.sifive.com/press/sifive-raises-400-million-to-accelerate-high-performance-risc-v-data-center-solutions)。SK hynixは2026年7月10日に米国預託証券をナスダックへ上場し、公開価格149ドルで177,900,000 ADSを売り出して265億700万ドルを調達した [出典](https://www.stocktitan.net/sec-filings/SKHY/424b4-sk-hynix-inc-prospectus-filed-pursuant-to-rule-424-b-4-20fb1c1aec65.html)。後者は資金繰りのための調達ではない。第2四半期末のネットキャッシュは69兆4,000億ウォンで [出典](https://news.skhynix.com/en/q2-2026-business-results/)、上場前も35兆ウォンを超える純現金があった。総額55兆9,200億ウォンの投資計画のうち、龍仁半導体クラスタ1期が9兆4,100億ウォン、同2期から6期が21兆6,100億ウォン、清州の先端パッケージング棟P&T7が19兆ウォン、米国インディアナの先端パッケージング拠点が5兆9,000億ウォンである [出典](https://www.thelec.net/news/articleView.html?idxno=11651)。HBM4で認定の優位を失った企業が、後工程の能力に資本を積み増している。代替リードタイムが認定では作れなくなったので、生産能力の絶対量で作り直そうとしている、と読める。

## この章の要点

- 価格決定力の尺度はシェアではなく代替リードタイムである。顧客が別の供給元に切り替えるまでの年数が、そのまま価格を守れる年数になる。
- 代替リードタイムを決めるのは最終製品ではなく、その手前で最も希少な資源である。EUVの場合はZeiss SMTの投影光学系であり、ASMLは2016年に24.9%を出資してそこを押さえた。
- 独占プレミアムは粗利率に出る。ASMLの粗利率は2021年52.7%から2025年52.8%まで横ばいで、独占は利益率の水準を守ったが伸ばしていない。
- 株価収益率は成長率に出る。ASMLのTTM PERは2025年末37.5倍から2026年8月53.2倍へ上がったが、フォワードPERは37.25倍であり、差は将来の増益期待である。
- シェアが50%台後半でも価格決定力が弱い場合がある。SK hynixのHBMは長期供給契約で価格が固定され、2026年前半に1ウェハ当たり採算で汎用DRAMに逆転された。
- 世代交代は障壁を作り直すことも壊すこともある。High-NAでは希少資源が既存者の手中にあり障壁が強化され、HBM4では3社が同時に認定を得て障壁が消えた。
- 物理リスクは事故の規模ではなく停止期間と代替リードタイムの比で測る。TSMCの地震損失は2025年純売上の0.14%だが、震度7の直撃に対する耐力は非開示で実績もない。
- 分散は独占プレミアムを削る。TSMCは海外Fabの立ち上げが粗利率を初期に2から3ポイント希薄化すると説明している。
- 挑戦者は最も収益性の高い層ではなく、代替リードタイムが最も短い層から入る。SiFiveが食い込んでいるのはSoC内部の制御コアとサーバCPUの下位クラスであり、Armのroyaltyは2027年3月期第1四半期に前年同期比22%増で過去最高である。

## 残っている問い

- TSMCの主要Fabの設計震度、設計地震力、設計加速度はいずれも非開示である。台湾の建築物耐震設計規範に対して何倍の設計地震力を採用しているか、免震装置とダンパーの仕様、装置固定の設計加速度が分からないと、震度7直撃の耐力は評価できない。
- A14世代単独の停止による川下影響を定量化した資料は見つからなかった。Fab 25の完成後の月産は約5万枚と報じられているが一次資料では確認できない。A14の月産枚数計画と、A14を前提とする製品の出荷金額が要る。
- Fab 25の立地と投資額NT$1兆5,000億は報道ベースであり、一次資料では確認できていない。
- TSMCの台湾外比率の会社公式目標は一次資料で確認できない。完成後にArizonaが2nm以下能力の約30%を担うという発言は報道ベースで、決算資料では確認できなかった。
- Kumamoto第2工場の受注不足とDresdenの進捗停滞を伝える業界紙の報道は、一次資料では裏が取れていない。
- 中国の国産EUVについて、出力と歩留まりを示す一次資料は確認できていない。張汝京の言う最短2年から最長5年という期間の根拠も示されていない。
- ArmはISA別の失注シェアを開示していないため、SiFiveの累計100億コアのうちArmから置き換わった分がどれだけかは切り分けられない。切り分けにはArmのroyalty per chipの推移と、SiFive顧客のSoC内でどのコアが置換されたかの個別開示が要る。
- SiFive P870-DとArm Neoverseの電力あたり性能を比較した公開データは、双方の資料に存在しない。データセンターでのRISC-V優位は現時点で定量的に検証できない。
- SiFiveは価格表も売上絶対額も公開していないため、royalty比率と単価は外部から確認できない。
- SK hynixのHBM単独の売上比率は四半期開示に含まれておらず、一次資料では確認できない。2026年第2四半期の当期純利益93兆9,226億ウォンが営業利益60兆5,426億ウォンを上回っている要因も、開示資料からは特定できない。
- HBM4の数量配分について、SK hynixが6割から7割、Samsungが2割半ばから3割という供給網筋の推計があるが、NVIDIAは配分比率を公表していない。
- SK hynixのHBMシェアは会社開示で56.4%、第三者推計で50%から62%と幅があり、集計対象と時点の違いを揃えた比較はできていない。

## 出典

1. ASML EUV lithography systems — https://www.asml.com/en/products/euv-lithography-systems
2. ZEISS and ASML Strengthen Partnership for Next Generation of EUV Lithography — https://www.asml.com/en/news/press-releases/2016/zeiss-and-asml-strengthen-partnership-for-next-generation-of-euv-lithography
3. ASML reports €32.7 billion total net sales and €9.6 billion net income in 2025 — https://www.asml.com/en/news/press-releases/2026/q4-2025-financial-results
4. ASML reports €9.3 billion total net sales and €2.9 billion net income in Q2 2026 — https://www.asml.com/en/news/press-releases/2026/q2-2026-financial-results
5. ASML Presentation Investor Relations Q4 2025 — https://ourbrand.asml.com/m/3136300aa4999bc1/original/2026_01_28_Presentation-Investor-Relations-Q4-2025.pdf
6. ASML 2026 second-quarter results Investor Relations Presentation — https://ourbrand.asml.com/asset/9078cf4d-91fd-4dd9-a5d5-d1caab6dc046/2026_07_15_Presentation-Investor-Relations-Q2-2026.pdf
7. ASML Investor Day 2024 — https://www.asml.com/en/news/press-releases/2024/asml-investor-day-2024
8. ASML (ASML) P/E ratio — https://companiesmarketcap.com/asml/pe-ratio/
9. ASML HOLDING NV Forward PE Ratio — https://www.gurufocus.com/term/forward-pe-ratio/ASML
10. ASML reports heated global demand in 2025, but cools China outlook amid US sanctions — https://www.scmp.com/tech/tech-trends/article/3341632/asml-reports-heated-global-demand-2025-cools-china-outlook-amid-us-sanctions
11. TSMC reiterates it doesn't need High-NA EUV for 1.4nm-class process technology — https://www.tomshardware.com/tech-industry/semiconductors/tsmc-reiterates-it-doesnt-need-high-na-euv-for-1-4nm-class-process-technology
12. ASML's High-NA chipmaking tool will cost $380 million — https://www.tomshardware.com/tech-industry/manufacturing/asmls-high-na-chipmaking-tool-will-cost-dollar380-million-the-company-already-has-orders-for-10-to-20-machines-and-is-ramping-up-production
13. ニコン 2026年3月期 決算説明資料 — https://www.jp.nikon.com/content/dam/web-assets/nikoncom/company/local/jp/ja/ir/ir_library/result/pdf/2026/26_all.pdf
14. 半導体露光機3社の決算まとめ — https://news.mynavi.jp/techplus/article/20260515-4461438/
15. 中国が最先端の半導体製造装置EUV露光を完成 — https://toyokeizai.net/articles/-/938909?display=b
16. Canon Inc. Delivers FPA-1200NZ2C Nanoimprint Lithography System to the Texas Institute for Electronics — https://global.canon/en/news/2024/20240926.html
17. TSMC, Annual Report on Form 20-F for 2025 — https://investor.tsmc.com/sites/ir/sec-filings/2025_20F%20Report.pdf
18. TSMC, 2025 Annual Report 第7章 — https://investor.tsmc.com/static/annualReports/2025/english/pdf/2025_tsmc_ar_e_ch7.pdf
19. TSMC, January 2025 Revenue Report and the Statement on the Impact of Earthquake — https://pr.tsmc.com/english/news/3204
20. TSMC, TSMC Unveils Next-Generation A14 Process at North America Technology Symposium — https://pr.tsmc.com/english/news/3228
21. TSMC, TSMC Intends to Expand Its Investment in the United States to US$165 Billion — https://pr.tsmc.com/english/news/3210
22. TSM Q2 2026 Earnings Call Transcript, The Motley Fool — https://www.fool.com/earnings/call-transcripts/2026/07/16/tsm-tsm-q2-2026-earnings-call-transcript/
23. TrendForce, TSMC to Recognize NTD 3 Billion Earthquake Loss — https://www.trendforce.com/news/2024/04/19/news-tsmc-to-recognize-ntd-3-billion-earthquake-loss/
24. TrendForce, TSMC Reportedly to Break Ground 1.4nm Taichung Fab on Nov. 5 — https://www.trendforce.com/news/2025/10/20/news-tsmc-reportedly-to-break-ground-1-4nm-taichung-fab-on-nov-5-mass-production-slated-in-2h28/
25. TrendForce, Samsung Reportedly Restarts 1.4nm Push, Targets 2029 Mass Production — https://www.trendforce.com/news/2026/06/30/news-samsung-reportedly-restarts-1-4nm-push-targets-2029-mass-production-to-close-gap-with-tsmc-intel/
26. Tom's Hardware, Intel says it has two prospective customers for 14A — https://www.tomshardware.com/tech-industry/semiconductors/intel-says-it-has-two-prospective-customers-for-14a-expects-to-hear-about-commitments-in-second-half-of-2026
27. 防災科学技術研究所 強震観測網, 2026年07月28日 令和8年熊本地震による強震動 — https://www.kyoshin.bosai.go.jp/ja/topics/20260728162700/
28. Yahoo!天気・災害, 地震情報 2026年7月28日 最大震度7 震源地 熊本県熊本地方 — https://typhoon.yahoo.co.jp/weather/jp/earthquake/20260728162718.html
29. Focus Taiwan, TSMC's Kumamoto fab back to normal after earthquake — https://focustaiwan.tw/business/202608040008
30. Insurance Journal, The $10 Trillion Fight: Modeling a US-China War Over Taiwan — https://www.insurancejournal.com/news/international/2026/02/12/857770.htm
31. SK hynix Inc. 424B4 目論見書の要約, StockTitan — https://www.stocktitan.net/sec-filings/SKHY/424b4-sk-hynix-inc-prospectus-filed-pursuant-to-rule-424-b-4-20fb1c1aec65.html
32. SK hynix Announces 2Q26 Financial Results, SK hynix Newsroom — https://news.skhynix.com/en/q2-2026-business-results/
33. SK hynix Files ADR Registration Statement for Nasdaq Listing, The Elec — https://www.thelec.net/news/articleView.html?idxno=11651
34. Nvidia certifies Samsung, SK Hynix and Micron for Vera Rubin HBM4 supply, Yahoo Finance — https://finance.yahoo.com/sectors/technology/articles/nvidia-certifies-samsung-sk-hynix-133001560.html
35. 過去最高益でも予想を5%下回ったSK hynix, HBMと汎用DRAMの採算逆転, XenoSpectrum — https://xenospectrum.com/sk-hynix-q2-hbm-lta/
36. SiFive Raises $400 Million to Accelerate High-Performance RISC-V Data Center Solutions — https://www.sifive.com/press/sifive-raises-400-million-to-accelerate-high-performance-risc-v-data-center-solutions
37. SiFive Blog, Investing In Our Next Chapter of Growth — https://www.sifive.com/blog/investing-in-our-next-chapter-of-growth
38. SiFive to Power Next-Gen RISC-V AI Data Centers with NVIDIA NVLink Fusion — https://www.sifive.com/press/sifive-nvidia-nvlinkfusion-datacenter
39. SiFive, About — https://www.sifive.com/company/about
40. SiFive's New RISC-V IP Combines Scalar, Vector and Matrix Compute — https://www.sifive.com/press/new-x100-series-second-gen-intelligence-family
41. Arm Holdings plc, Q1 FYE27 results — https://newsroom.arm.com/news/arm-q1-fye27-results
42. Arm Holdings plc, Q4 and full year FYE26 results — https://newsroom.arm.com/news/arm-q4-fye26-results
43. Arm Flexible Access — https://www.arm.com/products/flexible-access
44. RISC-V International, Behind The Scenes of SHD Group's 2026 RISC-V Market Forecast — https://riscv.org/blog/shd-forecast-2026/
