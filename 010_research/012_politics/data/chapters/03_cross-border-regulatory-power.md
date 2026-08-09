---
section: politics
chapter: 3
slug: cross-border-regulatory-power
title: 国境を越えて効く規制と国家間対立
thesis: 市場規模を持つ国は自国法で域外企業の設計と立地を書き換えており、現代の主要な国家間対立は軍事ではなく規制の形式をとって現れる。
---

日本の工作機械メーカーが日本国内で作った装置を第三国に売るとき、その取引の可否を決めるのは日本の法律だけではない。米国の輸出管理規則が条件次第で及ぶ。==トルコの製鉄所が自国の炭素価格制度を作り直したのは、国内の環境世論ではなくEU向け輸出の採算を守るためである==。国境の内側にしか主権が及ばないという建前と、実際に企業が守っている規則の集合は、すでに一致していない。==この不一致は例外的な事故ではなく、市場規模を持つ国が意図して作った設計である==。制度の条文構造を読まずに輸出額や株価だけを見ると、「リストに載った企業とは一切取引できない」「規制で中国の投資が止まった」といった読み違いが残る。この章は、規制がどの条件で国境を越えるのか、越えた結果が企業の数字にいつ現れるのかを、条文と統計の両方から追う。

## 域外適用が発動する条件と輸出管理規則の作動範囲

米国の輸出管理規則EARが米国外の取引に及ぶ経路は3つある。3つは性質が違うので、まとめて「域外適用」と呼ぶと発動条件を見誤る。

第1は再輸出である。米国原産の品目はEARの対象であり続ける。BISは、EARの対象となる米国原産品目は所在地がどこであってもEARの対象であり続ける、と明示している。[出典](https://www.bis.gov/learn-support/reexports-and-exports-from-abroad)。物が国外に出ても管轄は消えない。

第2はde minimis規則である。外国で製造された品目に含まれる米国原産の規制対象内容の価値比率が閾値を超えると、その外国製品の全体がEARの対象になる。原則の閾値は25%で、これはCountry Group E:1およびE:2向けには使えない。全世界向けに使える閾値は10%である。[出典](https://www.law.cornell.edu/cfr/text/15/734.4)。先端ノード集積回路向けの半導体製造装置のように、閾値が0%に設定された類型もある。この場合は米国内容が非ゼロでありさえすれば管轄が生じる。2025年9月の規則では、米国原産集積回路を含む一部の半導体製造装置について、武器禁輸仕向地またはマカオ向けとなる場合にde minimis水準を置かない扱いが導入された。[出典](https://www.wilmerhale.com/en/insights/client-alerts/20241206-bis-issues-sweeping-additional-restrictions-on-semiconductors-and-advanced-computing-entity-list-designations)

第3が外国直接製品規則FDPである。これは米国内容を1ドルも含まない外国製品にも及ぶ点で、de minimisと構造が違う。発動には2つの要件が同時に必要になる。ひとつはproduct scopeで、その外国製品が米国原産の技術、ソフトウェア、または生産設備の直接製品であることを要する。もうひとつはdestination scopeまたはend-user scopeで、仕向地が武器禁輸国等であるか、あるいは特定のリスト掲載者が取引に関与することを要する。半導体製造装置FDP規則は仕向地要件として米国武器禁輸仕向地とマカオを置く。==エンティティリストFDP規則は仕向地ではなく相手方を要件とし==、Footnote 5指定者が製造または購入する物に組み込まれると輸出者が知り得た場合に及ぶ。[出典](https://www.wilmerhale.com/en/insights/client-alerts/20241206-bis-issues-sweeping-additional-restrictions-on-semiconductors-and-advanced-computing-entity-list-designations)

したがってFDPの発動条件は、品目要件と相手方要件の積である。片方だけでは効かない。日本企業が米国製の装置で作った部材を第三国に出す場合、相手方が非掲載企業であり仕向地要件も満たさなければ、FDPは発動しない。この積の構造を理解していないと、米国製装置を1台でも使っていれば全取引が米国の許可対象になるという過大な自己規制に陥る。

| 経路 | 及ぶ対象 | 発動の鍵 | 出典URL |
| --- | --- | --- | --- |
| 再輸出 | 米国原産品目 | 所在地を問わず管轄が継続する | https://www.bis.gov/learn-support/reexports-and-exports-from-abroad |
| de minimis | 米国内容を含む外国製品 | 価値比率が25%、10%、0%の各閾値を超えること | https://www.law.cornell.edu/cfr/text/15/734.4 |
| FDP | 米国内容ゼロの外国製品 | 米国技術の直接製品であることと、相手方または仕向地の該当が同時に成立すること | https://www.wilmerhale.com/en/insights/client-alerts/20241206-bis-issues-sweeping-additional-restrictions-on-semiconductors-and-advanced-computing-entity-list-designations |

## エンティティリスト掲載が取引網に波及する経路

エンティティリストへの掲載が持つ効果は、3層に分けると誤読が減る。

第1層は許可義務である。掲載者向けには、商務管理品目リストCCL上の全品目と、EAR Part 746のSupplement No. 7に列挙されたEAR99品目について、輸出、再輸出、国内移転の許可が必要になる。審査方針は多くの場合presumption of denialであり、申請しても不許可を前提に運用される。ライセンス例外も原則として使えない。[出典](https://www.bis.gov/media/documents/entity-list-faqs.pdf)

第2層はFDPの重畳である。Footnote 4指定者とFootnote 5指定者については、掲載に加えて専用のFDP規則が適用される。ここで前節の第3経路が接続し、米国内容を含まない外国製品まで許可対象に入る。掲載の効果が米国製品にとどまらない理由はこの重畳にある。

第3層は及ばない範囲である。エンティティリストはOFACのSDNリストとは別制度で、目的も法的要件も異なる。掲載されても資産は凍結されない。EAR対象品を伴わない役務提供、資金決済、米国技術と無関係な非米国原産品の売買それ自体は、エンティティリストでは禁止されない。[出典](https://www.bis.gov/media/documents/entity-list-faqs.pdf)。掲載イコール全面取引禁止という理解は誤りである。

グループ会社への波及については、2025年に制度が動いてから戻った。BISは2025年9月29日発効のAffiliates Ruleで、エンティティリスト、MEUリスト、および一部SDNリストの掲載者が直接または間接に、単独または合算で50%以上を所有する外国法人へ、掲載者と同じ制限を自動的に及ぼす扱いを導入した。[出典](https://www.morganlewis.com/pubs/2025/09/bis-adopts-50-percent-rule-key-takeaways-for-trade-compliance)。同規則はsubsidiaryではなくforeign affiliatesの語を用い、複数の制限対象者の持分を合算して50%に達する場合を含む。[出典](https://www.squirepattonboggs.com/insights/publications/bis-expands-entity-list-controls-to-all-unlisted-foreign-affiliates-owned-50-percent-or-more-by-listed-parties/)。ただし移行措置の一時一般許可は2025年12月1日に失効し、規則自体も2025年11月10日から2026年11月9日まで停止された。[出典](https://www.morganlewis.com/pubs/2025/09/bis-adopts-50-percent-rule-key-takeaways-for-trade-compliance)。2026年8月時点のエンティティリストは、名指しされた法人の単位で効いている状態に戻っている。

==同じ型の規制は米国の専有物ではなくなった==。中国は価値比率0.1%以上を基準とするレアアース関連の再輸出規制を導入し、2025年12月1日施行予定としたうえで2026年11月10日まで停止している。[出典](https://www.cistec.or.jp/service/keizai_anzenhosho/china/data/20251009.pdf)。閾値の数字は米国のde minimisより2桁小さい。制度の型が模倣され、発動条件の厳しさで競り上がる段階に入っている。

## 日本の外為法が米国の枠組みに接続する接点

日本の法体系は、外為法が根拠を与え、政令の輸出貿易管理令が手続と対象の大枠を定め、経済産業省令の貨物等省令が対象品目を具体化する三段構造をとる。規制の型はリスト規制とキャッチオール規制の2本立てである。[出典](https://www.amt-law.com/asset/pdf/bulletins5_pdf/230407.pdf)

2023年の改正は最下層の省令で行われた。貨物等省令6条17号は元来10品目だったところに23品目が追加され、合計33品目に拡大された。追加品目にはEUV用ペリクル製造装置、EUV用レジストの塗布と現像の装置、特定条件のドライエッチング装置、コバルト電気メッキ成膜装置などが含まれる。[出典](https://www.amt-law.com/asset/pdf/bulletins5_pdf/230407.pdf)。施行日は2023年7月23日である。[出典](https://www.nikkei.com/article/DGXZQOUA233FD0T20C23A5000000/)

米国の枠組みとの接続は3点に整理できる。

第1に、品目を決める場が変わった。従来の日本の輸出管理は、ワッセナー・アレンジメント等の国際レジームでの合意を国内法令に反映する運用だった。2023年改正はレジーム合意を待たずに日米蘭が独自に対象を指定したものである。前掲の法律事務所はこれを極めて異例の事態と評価している。[出典](https://www.amt-law.com/asset/pdf/bulletins5_pdf/230407.pdf)

第2に、名指しの有無が違う。米国は仕向地と掲載者を条文で特定する。日本は新規品目について全地域を許可対象とし、中国を名指ししていない。西村経済産業大臣は特定の国を念頭に置くものではないと述べている。実質的な差は包括許可の地域区分でつく。新規品目の輸出は、い地域①すなわちホワイト国向けには一般包括許可と特別一般包括許可が使え、と地域②と韓国向けには特別一般包括許可が使えるのに対し、中国等が属すると地域③向けは特定包括許可に限られる。特定包括許可は継続的取引関係のある同一相手方に限られるため、新規の相手方には個別許可が必要になる。[出典](https://www.amt-law.com/asset/pdf/bulletins5_pdf/230407.pdf)。条文は無差別、運用は差別的という構造である。

第3に、米国側は日本を域外適用の免除側に置いている。日本とオランダはCountry Group A:5およびA:6に属し、2025年1月のAIフレームワークでもTier 1の18の低リスク仕向地に含まれた。[出典](https://www.cov.com/en/news-and-insights/insights/2025/01/us-department-of-commerce-establishes-export-control-framework-limiting-the-diffusion-of-advanced-artificial-intelligence-and-expands-and-clarifies-advanced-computing-controls)。同等の国内規制を持つことが、米国FDPの適用から外れる条件として機能している。日本が2023年に省令を改正したことと、日本企業が米国FDPの直接の標的から外れていることは、制度上つながっている。域外適用を持たない国が、自国法を相手国の水準に合わせることで域外適用の被害を避ける。これが規制輸出の受け手側の典型的な反応である。

なお日本には米国型の域外適用がない。管轄は属地主義を基本とし、国内での非居住者や特定類型の居住者への技術提供を輸出とみなす、みなし輸出の制度で補う。特定類型は2022年5月の運用見直しで導入された。

輸出管理と混同されやすい制度に経済安全保障推進法がある。2022年5月11日成立、同月18日公布で、4制度からなる。重要物資の安定供給確保と先端的重要技術の開発支援が2022年8月1日施行、基幹インフラ役務の安定提供確保が2023年11月17日施行、特許出願の非公開が2024年5月1日施行である。[出典](https://keiyaku-watch.jp/media/hourei/202405-keizaianzenhosyo/)。輸出管理が外向きの流出防止を扱うのに対し、この法律は供給網と国内インフラの内向きの確保を扱う。別の法律であり、目的も違う。

## 価格を通じた規制輸出としての排出量取引と国境炭素調整

輸出管理が許可という形式で国境を越えるのに対し、炭素規制は価格という形式で越える。禁止しないかわりにコストを上げ、相手国の制度設計そのものを引き寄せる。

まずEUの域内価格がどう決まるかを押さえる。供給側は法律で固定されている。EU ETSの排出上限は線形削減係数によって毎年縮む。2023年改正で線形削減係数は2.2%から、2024年から2027年について4.3%へ、2028年から2030年について4.4%へ引き上げられた。加えて上限そのものを2024年に9,000万枠、2026年に2,700万枠削る一括減少が入っている。2030年の排出量目標は2005年比マイナス62%である。[出典](https://icapcarbonaction.com/en/news/eu-adopts-landmark-ets-reforms-and-new-policies-meet-2030-target)

需給の緩みは市場安定化リザーブが機械的に吸収する。流通枠総量が10億9,600万枠を超えると年間で流通枠総量の24%が吸い上げられ、8億3,300万枠から10億9,600万枠の帯では超過分が吸い上げられる。4億枠を下回ると1億枠が放出される。リザーブ内の4億枠超は毎年無効化され、2025年1月1日には2億7,100万枠が消滅した。[出典](https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets/market-stability-reserve_en)。供給が法律で決まっている以上、短期の価格変動を動かすのは需要側である。電力部門の燃料転換、産業生産量、電力会社の先渡しヘッジ需要の3つが主な要因になる。2026年8月7日のEUA価格は82.42ユーロ/tCO2で、前年同期比プラス12.58%だった。[出典](https://tradingeconomics.com/commodity/carbon)

この価格を輸入品に乗せる仕組みが国境炭素調整措置CBAMである。乗り方は3段階に分かれる。

第1段階は対象の絞り込みである。CBAMはセメント、鉄鋼、アルミニウム、肥料、電力、水素の6分野を対象とし、年間50トンを超えてCBAM対象品を輸入する者が認定申告者となる。[出典](https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/cbam-definitive-regime_en)

第2段階は単価である。証書価格はEU ETSの入札価格に連動し、2026年は四半期平均、2027年以降は週次平均で算定される。認定申告者は各四半期末に、その時点までの内包排出量の50%以上に相当する証書を保有していなければならない。2026年分の申告は2027年9月30日までに提出して証書を償却し、余剰証書の買戻し請求は2027年10月31日から可能となる。[出典](https://www.dehst.de/EN/Topics/CBAM/CBAM-definitive-regime-2026/CBAM-certificates/cbam-certificates_node.html)

第3段階が実効負担率である。==輸入者が支払うのは内包排出量の全量ではなく、EU域内生産者の無償割当が減った分だけである==。この課金係数は2026年に2.5%、2028年に10%、2030年に48.5%、2034年に100%となる。[出典](https://cbamguide.com/carbon/free-allocation/)。2026年1月1日に本格運用が始まったが、同年の輸入者負担は名目上の炭素コストの40分の1にとどまる。原産国で既に炭素価格を支払った証拠があれば、その額を控除できる。なおこの年次表はEUR-Lexの規則本文ではなく二次情報に依拠しており、原典の確認は取れていない。

負担には分野間の非対称がある。アルミニウム、鉄鋼、水素は直接排出のみが対象で、電力由来の間接排出は算入されない。間接排出が算入されるのはセメントと肥料の2分野である。[出典](https://cbamguide.com/learn/eu-cbam/)。アルミニウムは排出の大半が電力由来であるため、この扱いはアルミ輸入の実効負担を小さくする。

マクロで見た規模は大きくない。OECDの推計では、CBAM対象の貿易フローはEUの域外輸入の3%、世界貿易の0.37%にあたる。対象となる内包排出量は2022年時点で1億7,100万トンCO2換算で、同年の世界温室効果ガス排出量の0.31%である。EU ETS価格を80ユーロ/tCO2と置いた場合、完全実施時の年間収入は147億ユーロと試算されている。[出典](https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/03/what-to-expect-from-the-eu-carbon-border-adjustment-mechanism_a21e9b51/719d2ff9-en.pdf)

貿易量で見て小さいこの制度が意味を持つのは、他国の制度設計を動かしたからである。トルコは2025年7月9日に気候法第7552号を官報公示し、即日施行した。この法律は国家排出量取引制度の法的基盤を定め、2026年から2027年の試行フェーズを予定するとともに、輸入品に対するCBAMの鏡像制度を設ける権限を通商省に与えている。[出典](https://icapcarbonaction.com/en/news/turkiye-adopts-landmark-climate-law-paving-way-national-ets)。自国で炭素価格を課せば、CBAMの控除を通じて同じ額を自国の税収として取り戻せる。英国は2025年5月19日にEUとの排出量取引制度リンクで合意し、相互のCBAM免除が想定されている。英国政府は2030年までに英国輸出者の約8億ポンドのCBAM支払いを回避できると見積もっている。ただしEUはリンク完成前の暫定免除を拒否しており、英国自身のCBAMは2027年1月1日開始である。[出典](https://icapcarbonaction.com/en/news/eu-and-uk-commit-linking-emissions-trading-systems-landmark-cooperation-agreement)。インドは炭素クレジット取引制度を導入し、最初の遵守年度を2025年度とした。アルミニウム、セメント、電解ソーダ、パルプ紙、石油精製、石油化学、繊維の7業種、約490事業所に排出原単位目標が課されている。ただしインドの制度は原単位ベースで、CBAMのトン単価ロジックとは構造が違うため、国内で支払ったコストがそのまま国境で控除されるとは限らない。[出典](https://icapcarbonaction.com/en/ets/indian-carbon-credit-trading-scheme)

規制輸出が製品設計まで届いた事例としては、炭素以外の分野のほうが明確である。共通充電器指令 EU 2022/2380 は2024年12月28日以降にEU市場で販売される携帯電話等にUSB-Cポートを義務付け、2026年4月28日からノートPCにも適用される。Appleはこれに対応してiPhone 15世代で全世界的にUSB-Cへ移行した。[出典](https://oeil.europarl.europa.eu/oeil/en/document-summary?id=1726604)。炭素分野で同等に明確な設計変更の事例は、素材の調査では一次資料まで確認できなかった。OECDは、域外生産者が低排出の製品だけをEUに振り向け高排出品を国内消費に回す資源シャッフルの可能性を指摘している。==これは設計変更ではなく出荷先の振り分けである==。

## 炭素コストが電炉と高炉の採算差と立地判断を変える幅

炭素価格が立地を動かすかどうかは、工程間の排出差に価格を掛けた金額が、製品価格に対してどの比率になるかで測れる。鉄鋼が最も追いやすい。

排出原単位の差から始める。JRCの推計では、EUの高炉一貫製鉄ルートの炭素集約度はスコープ1と上流とスコープ2の合計で1.81トンCO2/トン粗鋼である。中国は1.84、インドと南アフリカは3.8超である。電炉ルートは大半の国で0.6トンCO2/トン粗鋼を下回る。基準年は2018年である。[出典](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC129297/JRC129297_01.pdf)。EU域内の高炉と電炉の差は約1.2トンCO2/トン粗鋼となる。

これに2026年8月7日のEUA価格82.42ユーロ/tCO2を掛けると、炭素コスト差は約99ユーロ/トン粗鋼になる。北欧HRC指数は2026年5月28日時点で680.73ユーロ/トンである。[出典](https://eurometal.net/europe-steel-hrc-prices-steady-as-weak-demand-high-stocks-undermine-summer-rebound-hopes/)。99ユーロはこの14.5%にあたる。

ただしこの14.5%は今日効いている数字ではない。無償割当の残存率を掛けた実効差は、2026年で約2.5ユーロ/トンすなわちHRC価格の0.36%、2030年で約48ユーロ/トンすなわち7.0%、2034年で約99ユーロ/トンすなわち14.5%と推移する。採算の逆転が起きるのは、課金係数が10%から48.5%へ跳ねる2029年から2030年の局面である。

電炉側にも炭素コストは乗る。JRCの工程エネルギー表ではスクラップ電炉の電力消費は1.73GJ/トン粗鋼、すなわち480kWh/トンである。電力価格転嫁分のCO2係数は2021年から2025年の州援助ガイドラインで0.63トンCO2/MWhとされているため、480kWhあたり0.30トンCO2、金額で約25ユーロ/トン粗鋼が電力価格に埋め込まれている計算になる。加盟国はこの間接コストを最大75%まで補償でき、鉄鋼はNACE 24.10として対象業種に含まれる。補償後の電炉側の実質負担は約6ユーロ/トンとなる。[出典](https://www.dehst.de/EN/Topics/SPK/spk-understanding/spk-understanding_node.html)。つまり電炉の優位は、排出差そのものだけでなく、間接コスト補償という別の政策で上乗せされている。

EU域内の生産構成は既にこの方向に動いている。2024年のEU粗鋼生産のうち高炉ルートが約56%、電炉ルートが約44%とされる。EUROFERの集計では、2024年のEU粗鋼生産は1億2,970万トンで電炉比率は44.4%、2023年の44.8%からわずかに下がった[出典](https://gmk.center/en/news/the-share-of-eaf-in-global-steel-production-in-2024-increased-to-29-1/)。==電炉化は進んでいるのではなく、直近では横ばいから微減である==。排出原単位の差は大きい。2024年のEUでは電炉ルートが鋼材1トンあたり0.3トンのCO2に対し、高炉ルートは2.1トンで、7倍の開きがある。2025年の粗鋼生産は2.9%減の1億2,580万トンで統計上の最低を更新した。炭素コストが採算差を広げる一方、生産量そのものが縮んでいる。[出典](https://www.eurofer.eu/publications/brochures-booklets-and-factsheets/european-steel-in-figures-2025)。ただし原本PDFは取得できておらず、この比率は同刊行物を引用した二次情報に依拠している。

無償割当はベンチマークに対して与えられるため、実排出量がベンチマークを上回る高炉事業者の実効負担は上記の試算より大きくなる。個社別のベンチマーク超過分は公開データから特定できていない。したがって上の年次推移は業界平均の目安であり、個別設備の投資判断をそのまま説明する数字ではない。

## 規制強化が投資額と関税負担に反映されるまでの時差と観測方法

規制の効果を測るとき、最も誤りやすいのは、規制が課された分野の投資額の総額を見て強弱を判断することである。半導体製造装置と米国関税の2つの例は、どちらも総額が反応しなかったか、または反応が遅れて逆方向に現れた事例になる。

半導体製造装置では、規制強化は総額を減らさず配分を動かした。世界の販売額は2024年に1,171億ドル、2025年に1,351億ドルで前年比15%増となった。地域別では中国が2024年に前年比35%増の496億ドルで最大市場となり、2025年は493億ドルで前年比0.5%減とほぼ横ばいだった。同じ2025年に台湾は前年比90%増の315億ドル、韓国は前年比26%増の258億ドル、これに対し北米は前年比20%減の109億ドル、欧州は前年比41%減の29億ドルだった。[出典](https://www.prnewswire.com/news-releases/semi-reports-global-semiconductor-equipment-billings-reached-135-billion-in-2025-up-15-year-on-year-302735003.html)。規制対象の中心である中国の装置投資は、2023年から2025年にかけて縮小していない。減ったのは北米と欧州である。

日本からの輸出でも同じ形が出る。2024年の日本の対中輸出全体は1,564億5,525万ドルで前年比2.7%減、3年連続の減少だった。一方でHS8486すなわち半導体、集積回路またはフラットパネルディスプレイの製造用機器の対中輸出は142億9,611万ドルで前年比24.9%増となり、対中輸出全体の9.1%を占めた。HS848620に限ると、日本の同品目輸出全体に占める中国の構成比は2019年の24.9%から2024年に53.6%へ上昇した。[出典](https://www.jetro.go.jp/biz/areareports/2025/b2cbdfbb82ba07a5.html)。規制対象外の成熟ノード向け装置に需要が振り替わったことが背景にあると考えられるが、公開統計はノード別に分解できないため、この説明は検証されていない。

供給側の政策資金も同時に増えた。中国は2024年5月24日に国家集成電路産業投資基金三期を設立し、登録資本は3,440億元である。これは一期の1,387億元と二期の2,041.5億元の合計を上回る。[出典](http://m.ce.cn/cj/gd/202405/28/t20240528_39017806.shtml)。米国側では、商務省が2025年7月時点で40件の案件に309億ドルを交付した。[出典](https://www.manufacturingdive.com/news/chips-and-science-act-tracker-semiconductor-manufacturing/734039/)

因果の分離はできていない。同時期にAIデータセンター投資が拡大し、世界半導体市場は2025年に前年比22.5%増の7,722億ドルと2年連続で過去最高を更新した。[出典](https://www.seaj.or.jp/file/jan2026seajforecastforpress_j.pdf)。規制がなければ中国向けがどれだけ伸びたかという反実仮想の推計は、素材の範囲では見つからなかった。これを答えるには、規制対象ECCNごとの対中出荷額の時系列と、成熟ノードと先端ノードを分けた設備投資額が要る。SEMIとジェトロの公表粒度では分解できない。

関税では、負担者が時間差で入れ替わった。法的な納税義務者は輸入者である。第1に、外国の輸出者は負担していない。関税を除いた契約価格を測るBLSの輸入物価指数は、2025年1月の141.8から12月の141.4へ0.3%下がっただけだった。[出典](https://api.bls.gov/publicAPI/v1/timeseries/data/EIUIR?startyear=2024&endyear=2026)。関税率が二桁で動いた期間に契約価格がほぼ動いていないため、外国側の値引きによる吸収は確認できない。第2に、米国の消費者への転嫁は関税率より小さい。食品とエネルギーを除く商品の消費者物価指数は2024年12月の163.712から2025年12月の166.037へ1.42%上がった。[出典](https://api.bls.gov/publicAPI/v1/timeseries/data/CUUR0000SACL1E?startyear=2024&endyear=2026)。差額は輸入業者と小売の利幅で吸収されたと見られるが、利幅圧縮を直接測った一次資料は確認できていない。

第3に、2026年に負担者が反転した。連邦最高裁は2026年2月20日のLearning Resources, Inc. v. Trump判決でIEEPA関税を退け、国際貿易裁判所が還付を命じた。CBPは2025年2月3日から2026年2月24日までにIEEPAで徴収した関税を約1,660億ドルと見積もり、還付対象の輸入者を330,000者としている。[出典](https://www.federalregister.gov/documents/full_text/text/2026/07/08/2026-13771.txt)。財務省の月次計算書では、関税収入が2026年5月に0.4億ドルのマイナス、6月に255.6億ドルのマイナスとなった。[出典](https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_9)。徴収時点の収入は、法的な根拠が覆れば返済義務を負う一時的な資金だった。

観測方法として言えるのは3点である。第1に、総額ではなく地域別と品目別の配分を見る。第2に、規制対象と対象外の境界線をまたぐ振替を疑う。第3に、負担の所在は物価指数と財政計数の両方で確認する。片方だけでは転嫁先を追えない。

## 条約か慣行かで見る情報共有の枠組みと日本の位置の変化

規制と並ぶもうひとつの国境を越える営みが情報共有である。ここでは形式が逆になる。規制は条文で公開され運用が非公開であるのに対し、情報共有は核心が非公開で、公開されるのは周辺の保護義務だけである。

情報共有の中核は条約ではない。英国立公文書館とNSAが2010年に公開したUKUSA協定の1955年改訂版は、第1項で当事者を米国側のUnited States Communications Intelligence Board、英国側のLondon Signal Intelligence Boardと定める。いずれも政府ではなく情報委員会である。第13項は当事者の正当に授権された代表者の署名により効力を生ずるとし、批准手続を要求しない。第12項は、相互合意による改廃に加えて、自国の利益に資すると判断すれば一方の通告のみで全部終了できると定める。第6項aは、両当事者の合意がない限り協定の存在を第三者に明かすことを協定違反とする。第7項は英連邦諸国を、当事国ではないが第三者でもない中間の区分に置く。[出典](https://documents.theblackvault.com/documents/ukusa/new_ukusa_agree_10may55.pdf)。英国側の一次資料を整理したUnredactedは、1961年以降は付属書の正式更新が止まり個別交渉に移行したと記す。[出典](https://unredacted.uk/briefings/ukusa-origins/)

提供範囲も、文言の広さと運用の狭さが同居する。1955年版第4項bは成果物の交換を着手したすべての作業について無制限とすると書いたうえで、一方の当事者の要請により他方の同意を得て明示的に除外された場合を除くと続ける。第5項bは、手法と技術について、他方に通知すれば特別の利益を理由に留保できるとする。第9項は配布に承認を要求し、第三者への配布は両委員会の共同承認を要する。第10項は商業目的での利用を制限する。[出典](https://documents.theblackvault.com/documents/ukusa/new_ukusa_agree_10may55.pdf)。能力の側にも上限がある。欧州議会は2001年9月5日、賛成367、反対159、棄権39でECHELON決議を採択し、UKUSA協定のもとで運用される通信傍受システムの存在はもはや疑いの余地がないとしたうえで、同じ決議のなかで、接触できるのはケーブルおよび無線通信のごく限られた部分にすぎず、分析できるのはそのさらに限られた部分であると書いている。[出典](https://ccdcoe.org/uploads/2018/10/EU-010905-EP_Resolution_ECHELON.pdf)

条約化されているのは共有ではなく保護である。日本が結ぶ情報保護協定が定めるのは、提供された秘密情報を受領国が国内法令に従ってどう保護するかであって、何をどれだけ提供するかではない。日ウクライナ情報保護協定は2024年11月16日に署名され、2025年6月21日に発効した。[出典](https://ja.wikipedia.org/wiki/軍事情報包括保護協定)。締結の一覧は米国と2007年、NATOと2010年、フランスと2011年、豪州と2012年、英国と2013年、インドと2015年、イタリアと2016年、韓国と2016年、ドイツと2021年とされる。署名日まで追えるものもある。日米は2007年8月10日の署名である。日韓は2016年11月23日に署名され、1年ごとの自動更新で、破棄には更新の3か月前の通告を要する設計になっている[出典](https://ja.wikipedia.org/wiki/%E6%97%A5%E9%9F%93%E7%A7%98%E5%AF%86%E8%BB%8D%E4%BA%8B%E6%83%85%E5%A0%B1%E4%BF%9D%E8%AD%B7%E5%8D%94%E5%AE%9A)。2019年8月23日に韓国が延長しない旨を通告し、11月23日午前0時の失効が見込まれたが、前日の22日に通告の効力停止が明らかになった。==協定が切れなかったのは条文の設計ではなく、期限直前の政治判断による==。自動更新と3か月前通告という組み合わせは、撤回の余地を残す構造でもあった。ただし外務省の一次ページは2026年8月7日時点でHTTP 403を返し、署名日と発効日を一次資料で確認できていない。日付は二次情報である。

日本の位置は4段階で動いてきた。第1段階は施設と資金の提供である。The Interceptがスノーデン文書にもとづき2017年4月24日に報じたところでは、三沢の運用センターは2009年3月時点で16の対象衛星上の8,000超の信号を監視しており、日本はキャンプ・ハンセンの施設に5億ドル超を負担した。[出典](https://theintercept.com/2017/04/24/japans-secret-deals-with-the-nsa-that-expand-global-surveillance/)。日本政府はこの内容を認めていない。第2段階は保護協定の網の拡大である。第3段階は国内法制で、特定秘密保護法は2014年12月10日に施行され、重要経済安保情報保護活用法は2024年5月10日成立、2025年5月16日施行となった。[出典](https://www.cao.go.jp/keizai_anzen_hosho/hogokatsuyou/hogokatsuyou.html)。サイバー対処能力強化法は2025年5月16日に成立し、5月23日に公布された。通信情報の利用に関する規定の施行は公布から2年6か月以内とされている。[出典](https://www.nli-research.co.jp/report/detail/id=82440?site=nli)。第4段階は運用の常態化である。2023年12月19日、日米韓の防衛相は北朝鮮が発射したミサイルを3か国がリアルタイムで探知し評価するメカニズムを確立したと発表した。[出典](https://www.mod.go.jp/j/approach/anpo/2023/1219b_usa_kor-j.html)

国内の秘密指定の統計は、この運用の輪郭を外から測る数少ない手掛かりになる。2026年6月の国会報告によれば、2025年末時点の特定秘密は854件で、指定権限を持つ20機関のうち13機関が指定している。内訳は防衛省493件、内閣官房132件、警察庁64件、外務省46件である。2024年末は788件で、2025年中に66件が加わり、解除と満了はなかった。適性評価は2025年中に26機関が64,939件を実施し、うち5件について漏えいのおそれがないとは認められなかった。前年の35,839件から増えたのは、2015年に一斉実施された評価の5年ごとの更新期が来たためと同報告は説明している。[出典](https://www.cas.go.jp/jp/tokuteihimitsu/pdf/r08_0626_houkoku.pdf)。件数は文書の束の単位であって情報量ではない。

変わっていない点が2つある。ひとつはFive Eyesへの正式加入がないことである。2020年8月に当時の防衛相がSix Eyesと呼ばれる水準まで近づけると述べたが、制度化には至っていない。CSISが2020年12月8日に掲載した対論では、反対側の論拠として、UKUSAの枠組みが生の情報と最終成果物を継続的かつ即時に要求を待たずに共有する運用を前提としており、数十年単位の文化的な同調を要すると指摘されている。[出典](https://www.csis.org/analysis/resolved-japan-ready-become-formal-member-five-eyes)。もうひとつは非対称である。WikiLeaksが2015年7月31日に公開したTarget Tokyoは、日本国内の35件を米国の傍受対象リストとして示した。対象には内閣府の交換台、官房長官秘書官の回線、日銀総裁を含む複数の回線、三菱の天然ガス部門、三井の石油部門が含まれる。公開された報告のうち1件には米豪加英ニュージーランドの5か国向けの配布指定が付いていた。[出典](https://wikileaks.org/nsa-japan/)。第二当事国どうしを対象としない建前は、第三国には及ばない。制度面にも非対称がある。特定秘密保護法第4条第4項ただし書は指定の有効期間を通じて60年を超えられないと定めつつ7つの例外を置き、その第6号は外国の政府または国際機関から60年を超えて指定を行うことを条件に提供された情報である。[出典](https://www.cas.go.jp/jp/tokuteihimitsu/pdf/r08_0626_houkoku.pdf)。外国から供給された情報は、日本国内の公開制度の期限の外に置かれる。

## 政権交代で速く動く政策と動かない政策の切り分け

同じ政権のもとで、ある政策は数か月で数字を動かし、別の政策は制度が変わっても数字が動かない。境界線は、決定に必要な手続の数で引ける。

速く動くのは、大統領や大臣の単独の権限で発動でき、既存の徴収経路に乗る政策である。関税がその典型で、根拠法を差し替えても水準を維持できる。IEEPA関税が2026年2月20日の判決で無効になった後も、2026年6月1日署名の布告は通商拡大法232条により鉄鋼とアルミの派生製品に25%を課し、6月8日から2027年12月31日まで適用するとした。[出典](https://www.federalregister.gov/documents/full_text/text/2026/06/04/2026-11314.txt)。2026年7月20日署名の布告はカナダの自動車関連品に1930年関税法338条を使い50%の追加関税を課し、8月19日午前0時1分から適用するとした。[出典](https://www.federalregister.gov/documents/full_text/text/2026/07/23/2026-14997.txt)。関税収入はIEEPA消滅後の2026年3月に単月221.5億ドル、4月に221.2億ドルで、2024年10月の73.0億ドルの3.0倍を維持している。[出典](https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_9)。変わったのは徴収の法的な器であって、負担の構造ではない。

規則の整備は動くが、資金の向きまでは動かさない。暗号資産の制度整備は一方向に緩んだ。2025年3月11日公表の大統領令が戦略ビットコイン準備と米国デジタル資産備蓄を設置した。[出典](https://www.federalregister.gov/documents/2025/03/11/2025-03992/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile)。2026年に入ると、GENIUS法にもとづく発行体規制の具体化が各当局で並行し、NCUAが5月18日、FDICが6月5日、FinCENが6月22日、OCCが6月24日に規則案を公告した。[出典](https://www.federalregister.gov/documents/2026/06/24/2026-12692/permitted-payment-stablecoin-issuer-anti-money-launderingcountering-the-financing-of-terrorism-and)。CFTCは2026年6月3日の政策声明でビットコイン現物価格を参照する無期限契約の上場を認めた。[出典](https://www.federalregister.gov/documents/2026/06/03/2026-11020/policy-statement-concerning-the-listing-of-perpetual-contracts)。それでも価格は逆に動いた。ビットコインは2026年8月7日時点で64,264ドルで、最高値をつけた2025年10月6日の126,080ドルから49.0%低い。イーサリアムは1,899.07ドルで、2025年8月24日の4,946.05ドルから61.6%低い。[出典](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,usd-coin)。増えたのは器のほうで、USDTの時価総額は12か月前の1,641億ドルから1,834億ドルへ11.8%増え、USDCの718億ドルと合わせて2,552億ドルになった。上場企業のバランスシート経由の保有は1,284,191 BTCで、流通量の6.12%にあたる。[出典](https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin)。制度整備が動かしたのは資金の入り口の形であって価格ではない。

動かないのは、他国の主権的決定を必要とする政策である。中東の周辺国の体制変化については、米連邦官報をSyriaで2025年5月以降について検索しても該当するのは不拡散措置の通知2件のみで、制裁解除や国交正常化に関する文書は見つからない。Abraham Accordsを検索語にした場合の該当件数は0件である。二次情報の水準では、米国とシリアの外交関係が2012年に停止し2025年9月に再開したこと、カザフスタンが2025年11月にAbraham Accordsへの参加を表明し、ソマリランドが2025年12月のイスラエルによる承認に合わせて参加を表明したことが確認できる。[出典](https://en.wikipedia.org/wiki/Abraham_Accords)。いずれも百科事典の記述であり一次資料ではない。観察できる範囲で言えるのは、米国と近い政権が生まれたときに動いたのは周辺国の体制ではなく枠組みへの参加国の顔ぶれであり、参加したのは中東の周辺国ではなく域外の小国だったという点にとどまる。

輸出管理と炭素規制はこの中間にある。どちらも発動は行政の判断で速いが、効果が出るのは投資と設備の入替を待つため遅い。Affiliates Ruleは2025年9月29日に発効して2か月足らずで停止された。CBAMは2026年に始まったが、実効負担が製品価格の1割を超えるのは2034年である。制度の変更速度と、企業の資本回転の速度が一致していない。この時間差が、規制を巡る国家間の応酬が長期化する理由になっている。

## この章の要点

- 米国の輸出管理が国境を越える経路は再輸出、de minimis、FDPの3つで、FDPだけは米国内容ゼロの製品にも及ぶが、品目要件と相手方要件の両方が同時に成立したときにしか発動しない。
- エンティティリスト掲載の効果はEAR対象品の許可義務であり、資産凍結や役務提供の全面禁止は伴わない。50%所有の外国法人まで自動的に及ぼすAffiliates Ruleは2025年11月10日から2026年11月9日まで停止されている。
- 日本の外為法は域外適用を持たず、2023年の省令改正でも中国を名指ししていない。差は包括許可の地域区分でつく。日本が同等の国内規制を持つことが、日本企業を米国FDPの標的から外す条件として機能している。
- 中国は価値比率0.1%以上を基準とするレアアース再輸出規制を導入した。域外適用という制度の型は米国の専有ではなくなり、閾値の厳しさで競り上がる局面に入っている。
- EUのCBAMは貿易フローでEU域外輸入の3%、世界貿易の0.37%しか覆わないが、トルコ、英国、インドが自国の炭素価格制度をCBAMの控除に合わせて設計し直した点で規制輸出として機能した。
- 鉄鋼の高炉と電炉の炭素コスト差は約1.2トンCO2/トン粗鋼で、EUA価格82.42ユーロ/tCO2を掛けると約99ユーロ/トンとなりHRC価格の14.5%にあたる。ただし無償割当の残存により2026年の実効差は0.36%で、逆転が起きるのは2029年から2030年である。
- 規制強化は半導体製造装置の投資総額を減らさず配分を動かした。中国向けは2025年に493億ドルで前年比0.5%減、台湾は315億ドルで前年比90%増、北米は109億ドルで前年比20%減である。
- 情報共有で条約化されているのは保護義務であって共有の量ではない。日本は施設と資金の提供者から保護法制を備えた協定当事国へ移ったが、Five Eyesの当事国ではなく、日本自身が傍受対象として5か国に配布された記録がある。

## 残っている問い
- CBAMの課金係数の年次表はEUR-Lexの規則本文を取得できず、二次情報に依拠している。2026年の2.5%と2034年の100%は原典で確認していない。
- 炭素規制を理由に域外企業が製品設計そのものを変えた事例は、一次資料で確認できなかった。確認には個別企業のCBAM申告データまたは低炭素製品の生産能力投資の開示が要る。
- 個社別の無償割当ベンチマーク超過分は公開データから特定できず、高炉事業者の実効負担が業界平均からどれだけ乖離するかは示せていない。
- 輸出規制がなければ中国向け装置投資がどれだけ伸びたかという反実仮想は推計できなかった。規制対象ECCN別の対中出荷額と、成熟ノードと先端ノードを分けた設備投資額が要る。
- 関税の負担のうち輸入業者と小売の利幅で吸収された分を直接測った一次資料は確認できていない。物価指数からの差引きにとどまる。
- 日本がUKUSA体系の用語でいうThird Partyに該当するかを明示した公開の一次文書は確認できていない。
- 中東での親米政権の成立が周辺国の体制に及ぼす影響は答えを出せていない。OFACの制裁解除と一般許可の発出時系列、二国間協定の締結時期、武器輸出許可の変化が要る。
## 出典

1. BIS Reexports and exports from abroad — https://www.bis.gov/learn-support/reexports-and-exports-from-abroad
2. 15 CFR 734.4 De minimis U.S. content — https://www.law.cornell.edu/cfr/text/15/734.4
3. BIS Entity List FAQs — https://www.bis.gov/media/documents/entity-list-faqs.pdf
4. WilmerHale BIS Issues Sweeping Additional Restrictions on Semiconductors and Advanced Computing — https://www.wilmerhale.com/en/insights/client-alerts/20241206-bis-issues-sweeping-additional-restrictions-on-semiconductors-and-advanced-computing-entity-list-designations
5. Morgan Lewis BIS Adopts 50% Rule — https://www.morganlewis.com/pubs/2025/09/bis-adopts-50-percent-rule-key-takeaways-for-trade-compliance
6. Squire Patton Boggs BIS Expands Entity List Controls to All Unlisted Foreign Affiliates — https://www.squirepattonboggs.com/insights/publications/bis-expands-entity-list-controls-to-all-unlisted-foreign-affiliates-owned-50-percent-or-more-by-listed-parties/
7. CISTEC 中国によるレアアース関連貨物及び技術の輸出管理規制の強化について 改訂5版 — https://www.cistec.or.jp/service/keizai_anzenhosho/china/data/20251009.pdf
8. アンダーソン・毛利・友常法律事務所 日本の新たな半導体輸出規制改正の概要とその影響 — https://www.amt-law.com/asset/pdf/bulletins5_pdf/230407.pdf
9. 日本経済新聞 先端半導体の輸出規制、7月23日施行 — https://www.nikkei.com/article/DGXZQOUA233FD0T20C23A5000000/
10. Covington U.S. Department of Commerce Establishes Export Control Framework Limiting the Diffusion of Advanced AI — https://www.cov.com/en/news-and-insights/insights/2025/01/us-department-of-commerce-establishes-export-control-framework-limiting-the-diffusion-of-advanced-artificial-intelligence-and-expands-and-clarifies-advanced-computing-controls
11. 契約ウォッチ 経済安全保障推進法とは — https://keiyaku-watch.jp/media/hourei/202405-keizaianzenhosyo/
12. ICAP EU adopts landmark ETS reforms — https://icapcarbonaction.com/en/news/eu-adopts-landmark-ets-reforms-and-new-policies-meet-2030-target
13. 欧州委員会 Market Stability Reserve — https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets/market-stability-reserve_en
14. Trading Economics EU Carbon Permits — https://tradingeconomics.com/commodity/carbon
15. 欧州委員会 CBAM definitive regime — https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/cbam-definitive-regime_en
16. DEHSt CBAM Certificates — https://www.dehst.de/EN/Topics/CBAM/CBAM-definitive-regime-2026/CBAM-certificates/cbam-certificates_node.html
17. CBAM Guide EU ETS Free Allocation Phase-Out — https://cbamguide.com/carbon/free-allocation/
18. CBAM Guide EU CBAM Guide 2026 — https://cbamguide.com/learn/eu-cbam/
19. OECD What to Expect from the EU Carbon Border Adjustment Mechanism 2025 — https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/03/what-to-expect-from-the-eu-carbon-border-adjustment-mechanism_a21e9b51/719d2ff9-en.pdf
20. ICAP Türkiye adopts landmark climate law — https://icapcarbonaction.com/en/news/turkiye-adopts-landmark-climate-law-paving-way-national-ets
21. ICAP EU and UK commit to linking emissions trading systems — https://icapcarbonaction.com/en/news/eu-and-uk-commit-linking-emissions-trading-systems-landmark-cooperation-agreement
22. ICAP Indian Carbon Credit Trading Scheme — https://icapcarbonaction.com/en/ets/indian-carbon-credit-trading-scheme
23. 欧州議会 Radio Equipment Directive common charger — https://oeil.europarl.europa.eu/oeil/en/document-summary?id=1726604
24. JRC Greenhouse gas intensities of the EU steel industry and its trading partners JRC129297 — https://publications.jrc.ec.europa.eu/repository/bitstream/JRC129297/JRC129297_01.pdf
25. EUROMETAL Europe steel HRC prices steady — https://eurometal.net/europe-steel-hrc-prices-steady-as-weak-demand-high-stocks-undermine-summer-rebound-hopes/
26. DEHSt Understanding electricity price compensation — https://www.dehst.de/EN/Topics/SPK/spk-understanding/spk-understanding_node.html
27. EUROFER European Steel in Figures 2025 — https://www.eurofer.eu/publications/brochures-booklets-and-factsheets/european-steel-in-figures-2025
28. SEMI Global Semiconductor Equipment Billings Reached $135 Billion in 2025 — https://www.prnewswire.com/news-releases/semi-reports-global-semiconductor-equipment-billings-reached-135-billion-in-2025-up-15-year-on-year-302735003.html
29. ジェトロ 2024年の日中貿易 前編 — https://www.jetro.go.jp/biz/areareports/2025/b2cbdfbb82ba07a5.html
30. 中国経済網 注册资本3440亿元 国家大基金三期成立 — http://m.ce.cn/cj/gd/202405/28/t20240528_39017806.shtml
31. Manufacturing Dive Tracking CHIPS and Science Act awards — https://www.manufacturingdive.com/news/chips-and-science-act-tracker-semiconductor-manufacturing/734039/
32. SEAJ 2026年1月発表 半導体・FPD製造装置 需要予測 — https://www.seaj.or.jp/file/jan2026seajforecastforpress_j.pdf
33. BLS Import Price Index All Imports 系列 EIUIR — https://api.bls.gov/publicAPI/v1/timeseries/data/EIUIR?startyear=2024&endyear=2026
34. BLS CPI Commodities Less Food and Energy Commodities 系列 CUUR0000SACL1E — https://api.bls.gov/publicAPI/v1/timeseries/data/CUUR0000SACL1E?startyear=2024&endyear=2026
35. U.S. Treasury Fiscal Data Monthly Treasury Statement Table 9 — https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_9
36. Federal Register Court-Ordered Refunds Under the International Emergency Economic Powers Act Worksheet — https://www.federalregister.gov/documents/full_text/text/2026/07/08/2026-13771.txt
37. Federal Register Further Adjusting the Tariff Regimes for Imports of Aluminum, Steel, and Copper — https://www.federalregister.gov/documents/full_text/text/2026/06/04/2026-11314.txt
38. Federal Register Imposing Additional Duties To Offset Canadian Discrimination — https://www.federalregister.gov/documents/full_text/text/2026/07/23/2026-14997.txt
39. Federal Register Establishment of the Strategic Bitcoin Reserve and United States Digital Asset Stockpile — https://www.federalregister.gov/documents/2025/03/11/2025-03992/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile
40. Federal Register Permitted Payment Stablecoin Issuer AML/CFT and Sanctions Compliance Risk Management — https://www.federalregister.gov/documents/2026/06/24/2026-12692/permitted-payment-stablecoin-issuer-anti-money-launderingcountering-the-financing-of-terrorism-and
41. Federal Register Policy Statement Concerning the Listing of Perpetual Contracts — https://www.federalregister.gov/documents/2026/06/03/2026-11020/policy-statement-concerning-the-listing-of-perpetual-contracts
42. CoinGecko coins/markets — https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,usd-coin
43. CoinGecko companies/public_treasury/bitcoin — https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin
44. Wikipedia Abraham Accords 二次情報 — https://en.wikipedia.org/wiki/Abraham_Accords
45. UKUSA協定1955年改訂版 原文 The Black Vault所蔵 — https://documents.theblackvault.com/documents/ukusa/new_ukusa_agree_10may55.pdf
46. Unredacted The origins of the UKUSA Agreement — https://unredacted.uk/briefings/ukusa-origins/
47. European Parliament resolution on the ECHELON interception system CCDCOE所蔵PDF — https://ccdcoe.org/uploads/2018/10/EU-010905-EP_Resolution_ECHELON.pdf
48. WikiLeaks Target Tokyo — https://wikileaks.org/nsa-japan/
49. The Intercept Japan Made Secret Deals With the NSA — https://theintercept.com/2017/04/24/japans-secret-deals-with-the-nsa-that-expand-global-surveillance/
50. 内閣官房 特定秘密の指定及びその解除並びに適性評価の実施の状況に関する報告 令和8年6月 — https://www.cas.go.jp/jp/tokuteihimitsu/pdf/r08_0626_houkoku.pdf
51. 内閣府 重要経済安保情報保護活用法 — https://www.cao.go.jp/keizai_anzen_hosho/hogokatsuyou/hogokatsuyou.html
52. ニッセイ基礎研究所 サイバー対処能力強化法の成立 — https://www.nli-research.co.jp/report/detail/id=82440?site=nli
53. 防衛省 日米韓防衛相共同プレス声明 2023年12月19日 — https://www.mod.go.jp/j/approach/anpo/2023/1219b_usa_kor-j.html
54. CSIS RESOLVED: Japan Is Ready to Become a Formal Member of Five Eyes — https://www.csis.org/analysis/resolved-japan-ready-become-formal-member-five-eyes
55. 軍事情報包括保護協定 日本語版Wikipedia 二次情報 — https://ja.wikipedia.org/wiki/軍事情報包括保護協定
