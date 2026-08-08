---
section: geo
chapter: 4
slug: infrastructure-power-competition
title: インフラ輸出とエネルギーの覇権
thesis: 国家間の競争はもはや貿易額ではなく、他国の電力網と輸送網をどちらの規格と資金で敷くかで測られ、その投資判断は採算より地政学的な回収を優先している。
---

国と国の力関係を輸出入の金額で読む習慣は、いま説明力を落としている。金額は毎年入れ替わるが、送電線と港と鉄道は一度敷かれると30年から99年そこに残り、その間ずっと規格と保守部品と借入契約を通じて敷いた側に相手を結びつける。==だから見るべき対象は、誰がどれだけ売ったかではなく、誰の資金と誰の規格で相手国の電力網と輸送網が敷かれたかに移っている==。

この移動は二方向で進んでいる。ひとつは自国内である。==AIの計算能力の上限を決めるのが半導体ではなく電力の質になりつつあり、送電線を年に何マイル敷けるかが国力の指標になった==。もうひとつは国外である。==相手国に電源と港を敷く行為が、採算計算ではなく回収設計と外交上の見返りで正当化されている==。この章は、その2つを同じ論理でつなぐ。前提知識は要らないが、途中で扱う数字は出典の付いたものだけに絞り、確認できなかったものは確認できていないと書く。

## 電力の質と安定性が計算資源の上限を決める

電力について最初に外すべき思い込みは、停電が少ない系統は電力の質が高いという理解である。この2つは別の層を測っている。停電統計は電気が無い時間と回数を数える。電力品質は電気が有るあいだの電圧と周波数と波形が規格からどれだけ外れるかを、逸脱の大きさと継続時間の2軸で分類する。分類の基準は IEEE 1159 であり、たとえば電圧サグは実効電圧が 0.1〜0.9pu へ低下し、その状態が 0.5サイクルから1分続く事象と定義されている[出典](https://powerquality.blog/2021/03/12/overview-of-ieee-std-1564-2014-guide-for-voltage-sag-indices/)。年間停電時間がゼロでも、電圧サグが年に数十回起きる系統はありうる。

AIデータセンターに効くのは後者である。情報機器が許容できる電圧変動の包絡線を示す ITIC カーブでは、完全な電圧喪失に耐えられる時間は 60Hz で約0.5サイクル、8.3ミリ秒とされる[出典](https://voltage-disturbance.com/voltage-quality/itic-curve/)。この閾値を超えると、データセンターの無停電電源装置は自分を守るために商用系統から負荷を切り離す。系統の側から見ると、8.3ミリ秒の擾乱で数百MW級の負荷が一瞬で消える。

実例がある。2024年7月10日、230kV送電線の避雷器故障を起点に82秒間で6回の系統事故が連鎖し、データセンター負荷だけで約1,500MWが同時に脱落した[出典](https://www.publicpower.org/periodical/article/nerc-incident-review-examines-risks-challenges-tied-integration-large-loads)。NERC はこの規模の同時脱落を系統が歴史的に経験していないと記録している。NERC は2025年9月に大規模負荷に関する Level 2 の警告を出し、2026年5月4日に Level 3 のアラートを公表する予定とされた。同じ報道は、1,000MW以上が一斉に脱落する事象が2022年以降に複数回、主に2024年と2025年に起きたとしている[出典](https://www.utilitydive.com/news/data-center-load-disruptions-nerc-alert-recommendations/818036/)。つまりAI時代の電力の質は、供給側の波形と負荷側の耐える能力の組み合わせでしか定義できない。

停電そのものの構造も、米国と中国で層が違う。米国では末端の配電網が気象で物理的に壊れる。2024年の需要家1件あたり平均停電時間は11時間で、直近10年平均のほぼ2倍だった。11時間のうち80%はハリケーン Beryl、Helene、Milton を含む大規模事象に由来し、大規模事象由来は約9時間、それ以外は約2時間である。2014年から2023年の大規模事象由来は年平均約4時間だったので、増分はほぼ気象由来と分かる。平均停電回数は年1.5回である[出典](https://www.eia.gov/todayinenergy/detail.php?id=66744)。中国では中央が需給を見て負荷を切る。2021年後半には半数を超える省が電力を配給制にした。原因は物理故障ではなく価格構造で、石炭価格が市場で決まる一方で発電事業者の受取価格が規制されていたため、石炭火力に発電を続ける経済的誘因が消えた[出典](https://www.oxfordenergy.org/wpcms/wp-content/uploads/2021/11/Chinas-power-crisis.pdf)。平時の配電信頼度は上がっており、2024年の全国供給信頼率は99.924%で年間6.7時間相当、2020年比で都市部の平均停電時間は28%、農村部は44%減ったとされる[出典](https://english.www.gov.cn/news/202506/06/content_WS6842875fc6d0868f4e8f31be.html)。ただし米国の11時間と中国の6.7時間相当を並べて優劣を言うことはできない。米国の指標は大規模事象を含む値と除いた値を分けて公表するのに対し、中国の供給信頼率は算入範囲が同一とは限らず、計画的な負荷制限が故障統計と混ざりうるためである。

==増設速度の差は、発電容量よりも送電線と手続きと機器で決まる==。整理すると次のとおりである。

| 律速要因 | 米国 | 中国 | 出典 |
| --- | --- | --- | --- |
| 新規電源導入量、2025年 | 約63GW | 543GW、うち風力と太陽光が430GW超 | https://oilprice.com/Latest-Energy-News/World-News/China-Added-543-Gigawatts-in-New-Power-Capacity-in-2025.html |
| 送電線新設 | 345kV以上で2024年に888マイル、2020年から2023年の年平均は350マイル | UHV送電線が2025年12月時点で45本稼働、交流21本と直流24本 | https://cleanenergygrid.org/wp-content/uploads/2025/07/ACEG_Grid-Strategies_Fewer-New-Miles-2025_Rev-1.pdf / https://www.gem.wiki/Ultra-High-Voltage_(UHV)_Power_Transmission_System_in_China |
| 系統連系手続き | 2024年末で約10,300件が滞留、発電1,400GWと蓄電約890GWが待機、標準手続き期間は55カ月 | 該当する滞留統計を確認できず | https://www.latitudemedia.com/news/the-us-interconnection-queue-is-twice-its-installed-capacity/ |
| 機器調達 | 電力用変圧器の納期は平均128週、発電機昇圧変圧器は平均144週 | 該当する納期統計を確認できず | https://pv-magazine-usa.com/2026/05/11/u-s-transformer-market-faces-severe-supply-constraints-as-lead-times-extend-to-four-years/ |
| 送電投資 | 投資額は記録的だが新設マイル数に変換されていない | 国家電網の2025年固定資産投資が6,500億元超、2024年は6,000億元 | https://gmk.center/en/news/chinas-state-grid-operator-plans-89-billion-in-investments-for-2025/ |

米国側の律速は物理ではなく制度である。55カ月の連系待ちも、2000年から2020年の申請容量のうち2025年末までに商業運転に至ったのが13%で75%が取り下げられたという結果も、送電線が引けないという物理的限界からは出てこない。費用配分の合意と州際調整に時間がかかる制度設計の帰結である。一方で変圧器の納期は物理と製造能力の問題で、米国の電力用変圧器需要の80%は輸入で賄われている。

ここで方向を取り違えないことが要る。中国の総電力消費量は2025年に10,368TWh で、米国の2025年予測4,199billion kWh の約2.5倍である。しかしデータセンターに実際に投じられている電力は米国の方が多い。米国は2023年で176TWh、全米消費の4.4%を占め、中国は2024年で約100TWh である[出典](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf)[出典](https://www.carbonbrief.org/explainer-how-china-is-managing-the-rising-energy-demand-from-data-centres/)。非対称の向きは逆である。米国は計算側が先行して電力側が制約になり、中国は電力側に余力があって計算側が制約になっている。==中国の UHV 送電網も、AI 需要を見越して敷かれたものではない==。西部の風力と太陽光の大規模基地から東部の需要地へ送る目的で建設されてきたもので、データセンターを西部の電源近くへ寄せる政策とは別々に設計されている。

## 相手国のリスクを承知で投資を通す選定基準

国内の電力網の話を国外に持ち出すと、判断の性格が変わる。自国では料金認可や採算が効くが、他国に敷く場合は、貸した金がどう戻るかという設計が先に来る。中国の対外資金がその典型である。

まず、資金の窓口が単一ではない。AidData は貸し手として1,193の中国側公的機関を識別しており、政策銀行と国有商業銀行と商務部の無償資金では判断基準も回収要求も異なる。中国の年間の国際開発金融コミットメントの90%超は非譲許的な公的融資であり、無償や低利の援助は少数派である[出典](https://docs.aiddata.org/reports/belt-and-road-reboot/Belt_and_Road_Reboot_Executive_Summary.pdf)。したがって選定基準は二層で見る必要がある。援助部分は外交上の考慮で動き、譲許性の低い公的資金は経済的利害で説明されるという分析がある。この分析はアフリカ向け2,647件を対象とし、データ期間は2000年から2013年である[出典](https://www.aiddata.org/publications/apples-and-dragon-fruits-the-determinants-of-aid-and-other-forms-of-state-financing-from-china-to-africa)。

その上で、よく挙がる3つの基準を量的な重みで比べる。

| 基準 | 効き方 | 数値 | 出典 |
| --- | --- | --- | --- |
| 資源 | 金額シェアで首位。担保設計にも効く | 2025年のBRI関与額2,136億ドルのうちエネルギーが939億ドルで43%、金属・鉱業が326億ドルで15.3%、交通は133億ドルで6.2% | https://greenfdc.org/china-belt-and-road-initiative-bri-investment-report-2025/ |
| 国連票 | 国別の配分量に効く。案件単位の採否ではない | 2000年から2021年で低中所得国の対中投票整合率は75%、対米は23%。対中整合を10%高めると援助と信用の受取が平均276%増える | https://docs.aiddata.org/reports/belt-and-road-reboot/Belt_and_Road_Reboot_Executive_Summary.pdf |
| 港湾 | 地理的網羅性で首位、金額では小さい | 2000年から2025年で90カ国168港の363案件に240億ドル。2000年から2023年の総ポートフォリオ2.2兆ドルの約1% | https://www.aiddata.org/china / https://www.aiddata.org/publications/chasing-china |

順位は基準の取り方で入れ替わる。金額シェアなら資源が首位、国別配分量の説明力なら国連票が首位、地理的な広がりなら港湾が首位である。単一の順位を出す問い方自体が粗い。ただし共通しているのは、いずれの基準も相手国の事業採算を指していないという点である。発電所や港が単体で黒字になるかどうかは、選定の主変数として現れていない。

では相手国の破綻リスクをどう処理しているか。==避けるのではなく、担保で潰す設計になっている==。中国の担保付き対外債権は2000年から2021年で4,200億ドル、57カ国、620件のコミットメント、31の中国国有債権者と158の借り手に及ぶ。新興国・途上国向けの公的および公的保証債権ポートフォリオのほぼ半分が実質的に担保付きである[出典](https://www.aiddata.org/publications/how-china-collateralizes)。担保化比率は世紀転換期の19%から2021年に72%へ上がった。財政困難国向けに限れば、2000年時点で担保付きは0%だったが2021年には74%に達している[出典](https://docs.aiddata.org/reports/belt-and-road-reboot/Belt_and_Road_Reboot_Executive_Summary.pdf)。危険な国を外すのではなく、危険な国にこそ担保を付けて貸している。

担保の中身を誤解しないことが要点になる。==差し出させているのは港や鉄道そのものではなく、中国国内の銀行口座にある現金と、管理下の口座を通過させるコモディティ収入である==。インフラ資産自体を担保に取ることは稀である[出典](https://www.aiddata.org/publications/how-china-collateralizes)。資源国が選ばれるのは資源が欲しいからだけではない。資源収入が口座を通るため担保にしやすいからである。ベネズエラ向けの構造がそれを具体的に示す。2015年9月に中国国家開発銀行が組成した52.3億ドルの融資は、PDVSA が中国聯合石油へ売った原油の代金を国家開発銀行のエスクロー口座に入れて返済に充てる設計で、最終返済期日は2024年12月29日だった[出典](https://china.aiddata.org/projects/41089/)。外貨を持たない国でも発注できるのは、施工と融資と返済原資が一体で提供されるからである。

## 情勢不安が受注構造を一社に寄せる過程

受注が特定の出し手に寄る過程は、価格競争の結果ではない。ベネズエラを追うと機構が見える。

2005年以降の中国からベネズエラへの融資は約600億ドルに達し、中南米最大の借り手になった[出典](https://www.cfr.org/backgrounders/china-influence-latin-america-argentina-brazil-venezuela-security-energy-bri)。2007年から2017年に限れば、この額は中国の中南米向け融資総額の40%超を占める[出典](https://www.atlanticcouncil.org/blogs/new-atlanticist/chinas-support-for-the-maduro-regime-enduring-or-fleeting/)。資金と施工の両方を中国側が握った。鉄道では中国中鉄が2009年に現地鉄道会社の40%を取得して参画し、衛星地上局2か所は中国長城工業が建設し、2012年には CITIC が鉄・金・ボーキサイト・トリウムの契約を結び、2016年には ZTE が食料配給の追跡用IDを構築した[出典](https://en.wikipedia.org/wiki/China%E2%80%93Venezuela_relations)。

同じ市場に他国の建設会社が入らない理由は、リスクを取る度胸の差ではない。リスクを移す手段が制度として存在しないためである。日本貿易保険 NEXI の国カテゴリー表で、ベネズエラは A から H までの区分のうち最下位の H に置かれている。同じ表でブラジルは E、コロンビアは E、ペルーは D、チリは C である。適用日は2026年7月6日である[出典](https://www.nexi.go.jp/cover/categorytable)。H は保険料率が最も高い区分であり、引受停止の対象にもなりうる。貿易保険が付かなければ JBIC の融資も組成できず、案件が成立しない。結果は受注統計に出る。2025年度の日本企業の海外建設受注は2兆9,350億円で、うち中南米は62億円、構成比0.2%、前年度比84.6%減であり、地域別で最小である[出典](https://www.ocaji.or.jp/overseas_contract/)。

物価も契約技術の範囲を超えている。ベネズエラの消費者物価上昇率は2024年に48%、2025年に475%、2026年予測で628.8%とされる。ただしこの数値は二次資料経由であり、IMF の国別ページは取得できていないため一次統計での裏取りができていない[出典](https://en.wikipedia.org/wiki/Economy_of_Venezuela)。年率で数百%の環境では、通常の物価スライド条項で実質単価を維持できない。外貨建てに切り替えても送金規制と決済銀行の確保という別の問題が残る。

したがって、情勢不安の国で受注が一社に寄るのは、その一社が安いからではない。公的輸出信用が届かない国では他の出し手が入札の土俵に立てず、資金と返済原資を自前で組める出し手だけが残る。競争軸は工事価格ではなく資金の付帯である。

ただしこの構図は固定ではない。ベネズエラでは前提が二重に崩れた。中国は2013年以降マドゥロ政権への新規与信を止め、既存枠の一部更新にとどめてきた[出典](https://www.atlanticcouncil.org/blogs/new-atlanticist/chinas-support-for-the-maduro-regime-enduring-or-fleeting/)。さらに2026年1月3日に米軍がマドゥロを拘束し、暫定政権が発足した。暫定大統領のデルシー・ロドリゲスは炭化水素法を改正して石油部門の規制を緩め、米国の仲介による最初の原油販売で3億ドルを受領し、2026年3月12日に米国から正式承認を受けている[出典](https://en.wikipedia.org/wiki/Delcy_Rodr%C3%ADguez)。2026年6月24日のマグニチュード7.2と7.5の連続地震は UNDRR 推計で370億ドルの直接被害を生んだが、この復興需要が中国企業に集中するという見立ては現時点の材料では支持できない。発注側の政治的な向きが逆になっているうえ、震災後の中国の追加支援は1億元、約1,467万ドルにとどまる。これは過去の融資600億ドルの0.02%に相当する規模で、再進出のための資本投下ではなく外交上のシグナルと読むのが妥当である[出典](https://socialistchina.org/2026/06/29/china-and-vietnam-support-venezuela-after-devastating-earthquakes/)。習近平は弔電で復興支援の用意に言及したが、金額と企業の関与は示していない[出典](https://www.globaltimes.cn/page/202606/1364547.shtml)。

一社集中は国単位の話であって、面としての展開とは別に動く。中国と中南米の貿易額は2024年に5,180億ドルの過去最高を記録し、中南米カリブの20か国超が一帯一路に署名し、港湾は域内で少なくとも12件を中国系が押さえ、2024年末にはペルーの新メガ港が開業した[出典](https://www.cfr.org/backgrounders/china-influence-latin-america-argentina-brazil-venezuela-security-energy-bri)。南米での重心はすでにベネズエラからペルーとブラジルへ移っている。

## 出し手側が投資回収を疑い始めた兆候の読み方

出し手が自分の投資を疑い始めたかどうかは、声明ではなく契約構造の変化に出る。読むべき指標は4つある。

第1に、ポートフォリオの局面である。低中所得国向け融資の55%がすでに元本返済期に入り、2030年には75%に達する見込みである。元本ベースの対中未償還債務は少なくとも1.1兆ドル、最大で1.5兆ドルと推計され、中国の途上国向け貸付ポートフォリオの80%が財政的に困窮した国を支えている[出典](https://docs.aiddata.org/reports/belt-and-road-reboot/Belt_and_Road_Reboot_Executive_Summary.pdf)。回収不能は例外ではなく常態になっている。

第2に、貸付の目的が建設から延命へ移った。BRI 実施初年の2014年、低中所得国向け融資の65%はインフラ案件向けで、緊急救済融資は13%だった。2021年にはインフラ向けが31%に落ち、緊急救済融資が58%に上がった。2000年から2021年の対外救済は2,400億ドル超で、内訳は中国人民銀行のスワップ枠による1,700億ドル超の流動性支援と、国有銀行と国有企業による約700億ドルの国際収支支援融資である。この規模は過去10年の IMF 融資総額の20%超に相当し、金利は伝統的な最後の貸し手より高い[出典](https://www.nber.org/papers/w31105)。

第3に、審査の外部化と担保の強化である。政策銀行経由の融資比率は以前の約75%から22%へ落ち、国有商業銀行の年間コミットメントが政策銀行と並ぶ水準になった。非緊急融資の50%がシンジケートローンで供与され、そのうち80%超に西側商業銀行または国際機関が参加している。国際金融公社、欧州復興開発銀行、スタンダードチャータード、BNP パリバといった審査基準の厳しい機関にデューデリジェンスを外注する形である。強固なセーフガードを備えた案件の比率は2018年の26%から2021年の57%へ31ポイント上がった[出典](https://docs.aiddata.org/reports/belt-and-road-reboot/Belt_and_Road_Reboot_Executive_Summary.pdf)。自前の審査能力に依存せず、担保と外部審査で守りを固める方向への転換と読める。

第4に、回収手段の実行である。借り手が返済に遅れると、政策銀行は借り手のエスクロー口座から外貨を一方的に引き出して延滞元本と利息を回収する。この現金差押えは主として非公開で行われ、借入国の会計検査院や議会の決算委員会の直接の手が届かない場所で執行される。口座残高を減らした後、短期の資金繰り支援の条件として口座の積み増しを求める慣行が広がり、これが債務繰延交渉の主要な争点になっている。低所得のコモディティ輸出国では、担保口座の現金残高が年間の公的および公的保証債務返済額の20%超に相当する[出典](https://www.aiddata.org/publications/how-china-collateralizes)。罰則も強化された。2014年から2017年と2018年から2021年を比べると、平均の遅延損害金利は2倍になり、最大の罰則金利は3%から8.7%へ上がった[出典](https://docs.aiddata.org/reports/belt-and-road-reboot/Belt_and_Road_Reboot_Executive_Summary.pdf)。

一方で、疑い始めたことは撤退を意味していない。2025年の BRI 関与額は2,136億ドルで、建設契約は前年比81%増、投資は前年比62%増である[出典](https://greenfdc.org/china-belt-and-road-initiative-bri-investment-report-2025/)。総量は縮んでおらず、変わったのは案件の性格と契約構造である。

回収の成否を個別に見ると、地政学的な回収と財務的な回収がずれることも分かる。ベネズエラの場合、財務面では元本の大半を原油の現物で回収し終えている。2025年末時点の未回収残高について、出典によって100億ドル超と約200億ドルの2つの推計があり、2倍の開きがある。どちらか一方を採る根拠を本章では持てないため、100億ドルから200億ドルの幅として扱う[出典](https://asiatimes.com/2026/01/beijing-moves-to-cut-losses-in-venezuela-after-maduros-capture/)[出典](https://www.atlanticcouncil.org/blogs/new-atlanticist/chinas-support-for-the-maduro-regime-enduring-or-fleeting/)。いずれの値でも、600億ドルの元本の3分の2以上は原油の引き渡しで回収済みという評価になる。回収の代償として、返済相当分の原油を日量約61万バレル引き取る義務が生じていた。この現物が市場価格より有利な条件だったかどうかは、割引幅を示す一次資料を確認できていない。他方、従属国確保という地政学的な回収は2026年に毀損した。政権が米国と情報協力を進める側に移り、軍事装備の供給先や寄港地としての価値が不確実になったためである。2026年1月時点で北京は損失の最小化に軸足を移し、資産の西側企業への売却や提携を検討しているとされる[出典](https://asiatimes.com/2026/01/beijing-moves-to-cut-losses-in-venezuela-after-maduros-capture/)。

最後に、広く流通する2つの理解を訂正しておく。ひとつは、債務の罠でインフラ資産が差し押さえられているという理解である。実際には資産そのものを担保に取ることは稀で、執行されるのは口座からの現金掃き出しである。よく引かれるハンバントタ港も代物弁済ではない。第1期は中国輸出入銀行が推計費用の85%にあたる3億670万ドルを金利6.3%で、第2期は2012年に7億5,700万ドルを金利2%で融資し、2016年時点で港の累積損失は467億ルピー、約6億9,600万ドルに達していた。2017年に招商局港口が11億2,000万ドルを投じて新設のハンバントタ国際港湾グループの株式85%と99年のリースを取得した取引であり、スリランカ側はその対価を別の外貨債務の返済に充てた。ただしこの整理は二次資料に基づくもので、契約書での確認は取れていない[出典](https://en.wikipedia.org/wiki/Port_of_Hambantota)。もうひとつは、中国が途上国の債務を帳消しにしているという理解である。確認できた処理手段はエスクロー口座からの現金回収、高金利の救済融資による借換え、罰則金利の引き上げ、満期延長の4つであり、元本削減の規模を示す一次資料は取得できていない。

## この章の要点

- AIの制約は半導体から電力へ移り、電力の質は停電時間ではなく電圧と周波数と波形の規格内維持で測る。ITIC カーブ上、完全な電圧喪失への許容は 60Hz で約8.3ミリ秒であり、これを超えると無停電電源装置が系統から負荷を切り離す。
- 2024年7月10日には82秒間で6回の系統事故が連鎖し、データセンター負荷だけで約1,500MWが同時脱落した。停電統計にはほぼ現れない事象で系統が揺れる段階に入っている。
- 増設速度の律速は発電容量ではなく送電線と手続きと機器である。米国の系統連系は2024年末で約10,300件が滞留し標準手続き期間は55カ月、電力用変圧器の納期は平均128週である。
- 電力量の総量はAI能力の総量ではない。中国の総電力消費量は米国の約2.5倍だが、データセンター向けは米国が2023年で176TWh、中国が2024年で約100TWh である。
- 対外インフラ投資の選定は事業採算を主変数にしていない。2025年のBRI関与額のうちエネルギーが43%、金属・鉱業が15.3%を占め、港湾は2000年から2025年の累計240億ドルで総ポートフォリオ2.2兆ドルの約1%にとどまる。
- リスクの高い国は避けられていない。担保化比率は19%から72%へ上がり、財政困難国向けの担保付き比率は2000年の0%から2021年の74%へ動いた。担保は資産ではなく現金と口座を通る資源収入である。
- 情勢不安の国で受注が一社に寄るのは価格差ではなく制度差による。NEXI の国カテゴリーで最下位のHに置かれた国では貿易保険が付かず公的金融が組成できないため、他国の建設会社は入札の前提を欠く。
- 出し手が投資を疑い始めた兆候は、緊急救済融資の比率が2014年の13%から2021年の58%へ、政策銀行経由が約75%から22%へ、最大罰則金利が3%から8.7%へ動いたことに表れる。総量は縮んでおらず、変わったのは契約構造である。

## 残っている問い

- パワー半導体の自給率。SiC 基板のベンダー別シェアとして中国系企業の台頭を示す数値が流通しているが、一次資料の本文を取得できておらず、シェアの定義と対象年を確定できないため本章では扱わなかった。中国のパワー半導体自給率についても政府統計や業界団体の一次資料を確認できていない。
- 米中の停電統計を同じ物差しに載せる方法。中国の供給信頼率の算入範囲、とくに計画的な負荷制限が算入されるかどうかが確認できていない。この点が定まらない限り11時間と6.7時間相当の比較は成立しない。
- 中国が元本削減に応じた事例の規模。ザンビアの2024年の公的債権者との再編合意とスリランカの中国輸出入銀行との合意について、金額と猶予期間と金利と元本削減の有無を示す一次資料に到達できていない。必要なのは公的債権者委員会のMoU本文、スリランカ財務省の公表条件、IMF の債務持続性分析である。
- ベネズエラのインフラをブラジル勢と自国企業がどれだけ施工していたか。契約額と件数を示す資料に到達できていない。ベネズエラ側の公共事業発注記録か BNDES の輸出金融の国別実績が要る。
- ベネズエラの物価上昇率の一次統計。IMF の国別ページが取得できず、2024年48%、2025年475%、2026年予測628.8%は二次資料経由のままである。
- 石油担保融資における現物の割引幅。日量約61万バレルの引き取りが市場価格に対してどれだけ有利だったかを示す一次資料を確認できていない。
- 中国系企業の国際建設受注シェア。ENR Top 250 International Contractors を取得できず、施工側の集中度を数値で示せていない。

## 出典

1. Power Quality Blog「Overview of IEEE STD 1564-2014 Guide for Voltage Sag Indices」 https://powerquality.blog/2021/03/12/overview-of-ieee-std-1564-2014-guide-for-voltage-sag-indices/
2. Voltage Disturbance「ITIC Curve」 https://voltage-disturbance.com/voltage-quality/itic-curve/
3. American Public Power Association「NERC Incident Review Examines Risks, Challenges Tied to Integration of Large Loads」 https://www.publicpower.org/periodical/article/nerc-incident-review-examines-risks-challenges-tied-integration-large-loads
4. Utility Dive「Sudden data center load losses prompt NERC alert, recommendations」 https://www.utilitydive.com/news/data-center-load-disruptions-nerc-alert-recommendations/818036/
5. U.S. Energy Information Administration「Hurricanes in 2024 led to the most hours without power in the United States in 10 years」 https://www.eia.gov/todayinenergy/detail.php?id=66744
6. Oxford Institute for Energy Studies「China's power crisis: Long-term goals meet short-term realities」 https://www.oxfordenergy.org/wpcms/wp-content/uploads/2021/11/Chinas-power-crisis.pdf
7. 中国政府網英語版「China has significantly cut power outages, energy authority says」 https://english.www.gov.cn/news/202506/06/content_WS6842875fc6d0868f4e8f31be.html
8. OilPrice「China Added 543 Gigawatts in New Power Capacity in 2025」 https://oilprice.com/Latest-Energy-News/World-News/China-Added-543-Gigawatts-in-New-Power-Capacity-in-2025.html
9. Grid Strategies / ACEG「Fewer New Miles 2025」 https://cleanenergygrid.org/wp-content/uploads/2025/07/ACEG_Grid-Strategies_Fewer-New-Miles-2025_Rev-1.pdf
10. Global Energy Monitor「Ultra-High-Voltage Power Transmission System in China」 https://www.gem.wiki/Ultra-High-Voltage_(UHV)_Power_Transmission_System_in_China
11. Latitude Media「The US interconnection queue is twice its installed capacity」 https://www.latitudemedia.com/news/the-us-interconnection-queue-is-twice-its-installed-capacity/
12. pv magazine USA「U.S. transformer market faces severe supply constraints as lead times extend to four years」 https://pv-magazine-usa.com/2026/05/11/u-s-transformer-market-faces-severe-supply-constraints-as-lead-times-extend-to-four-years/
13. GMK Center「China's state grid operator plans $89 billion in investments for 2025」 https://gmk.center/en/news/chinas-state-grid-operator-plans-89-billion-in-investments-for-2025/
14. Lawrence Berkeley National Laboratory「2024 United States Data Center Energy Usage Report」 https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf
15. Carbon Brief「Explainer: How China is managing the rising energy demand from data centres」 https://www.carbonbrief.org/explainer-how-china-is-managing-the-rising-energy-demand-from-data-centres/
16. Enerdata「China's electricity demand rose by 5% in 2025」 https://www.enerdata.net/publications/daily-energy-news/chinas-electricity-demand-rose-5-2025.html
17. Oil & Gas 360「U.S. power consumption to hit record highs in 2025 and 2026, says EIA」 https://www.oilandgas360.com/u-s-power-consumption-to-hit-record-highs-in-2025-and-2026-says-eia/
18. AidData「Belt and Road Reboot: Beijing's Bid to De-Risk Its Global Infrastructure Initiative, Executive Summary」 https://docs.aiddata.org/reports/belt-and-road-reboot/Belt_and_Road_Reboot_Executive_Summary.pdf
19. AidData「China datasets overview」 https://www.aiddata.org/china
20. AidData「Chasing China: Learning to Play by Beijing's Global Lending Rules」 https://www.aiddata.org/publications/chasing-china
21. AidData「How China Collateralizes」 https://www.aiddata.org/publications/how-china-collateralizes
22. AidData「Power Playbook: Beijing's Bid to Secure Overseas Transition Minerals」 https://www.aiddata.org/publications/power-playbook-beijings-bid-to-secure-overseas-transition-minerals
23. Dreher, Fuchs, Parks, Strange, Tierney「Apples and Dragon Fruits: The Determinants of Aid and Other Forms of State Financing from China to Africa」 https://www.aiddata.org/publications/apples-and-dragon-fruits-the-determinants-of-aid-and-other-forms-of-state-financing-from-china-to-africa
24. Horn, Parks, Reinhart, Trebesch「China as an International Lender of Last Resort」NBER Working Paper 31105 https://www.nber.org/papers/w31105
25. Green Finance & Development Center「China Belt and Road Initiative Investment Report 2025」 https://greenfdc.org/china-belt-and-road-initiative-bri-investment-report-2025/
26. Green Finance & Development Center「Countries of the Belt and Road Initiative」 https://greenfdc.org/countries-of-the-belt-and-road-initiative-bri/
27. AidData「CDB provides $5 billion loan for oil field development projects in September 2015」 https://china.aiddata.org/projects/41089/
28. Council on Foreign Relations「China's Growing Influence in Latin America」 https://www.cfr.org/backgrounders/china-influence-latin-america-argentina-brazil-venezuela-security-energy-bri
29. Atlantic Council「China's support for the Maduro regime: Enduring or fleeting?」 https://www.atlanticcouncil.org/blogs/new-atlanticist/chinas-support-for-the-maduro-regime-enduring-or-fleeting/
30. Asia Times「Beijing moves to cut losses in Venezuela after Maduro's capture」 https://asiatimes.com/2026/01/beijing-moves-to-cut-losses-in-venezuela-after-maduros-capture/
31. Wikipedia「China–Venezuela relations」二次資料 https://en.wikipedia.org/wiki/China%E2%80%93Venezuela_relations
32. Wikipedia「Delcy Rodríguez」二次資料 https://en.wikipedia.org/wiki/Delcy_Rodr%C3%ADguez
33. Wikipedia「Economy of Venezuela」二次資料 https://en.wikipedia.org/wiki/Economy_of_Venezuela
34. Wikipedia「Port of Hambantota」二次資料 https://en.wikipedia.org/wiki/Port_of_Hambantota
35. Wikipedia「2026 Venezuela earthquakes」二次資料 https://en.wikipedia.org/wiki/2026_Venezuela_earthquakes
36. 日本貿易保険 NEXI「国カテゴリー表」 https://www.nexi.go.jp/cover/categorytable
37. 海外建設協会「海外建設受注実績」 https://www.ocaji.or.jp/overseas_contract/
38. Global Times「Xi extends condolences over deadly earthquakes in Venezuela」 https://www.globaltimes.cn/page/202606/1364547.shtml
39. Friends of Socialist China「China and Vietnam support Venezuela after devastating earthquakes」新華社報道の引用 https://socialistchina.org/2026/06/29/china-and-vietnam-support-venezuela-after-devastating-earthquakes/
