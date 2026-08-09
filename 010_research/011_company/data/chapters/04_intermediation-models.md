---
section: company
chapter: 4
slug: intermediation-models
title: 取引の間に立つ事業の収益条件
thesis: 仲介事業の収益は取引量ではなく当事者間のスプレッドのうちどこまでを手数料として取れるかで決まるため、押さえる層を誤ると規模が増えても粗利は増えない。
---

売り手と買い手の間に立って手数料を取る事業は、外から見ると規模が大きく見える。決済プラットフォームは年間で兆ドル単位の金額を通し、電力の仲介業者は累計で兆円単位の取扱高を発表し、貿易プラットフォームは万単位の企業を顧客として掲げる。この数字を見ると、あとは量を増やせば利益が積み上がるように思える。しかし実際に開示された損益を並べると、量が増えても粗利が増えない事業が並んでいる。PayPal の取引原価率は 5 四半期にわたって動いていない。Serve Robotics は売上の 2.75 倍の粗損失を出している。Nuro は自社製造から撤退した。理由は同じ一点にある。==仲介が取れる金額は、自分が処理した取引の総額ではなく、売り手と買い手の間に開いた差額のうち自分の層に配分される部分だけだからである==。この章は、その配分がどこで決まるのかを、決済、電力、貿易、小売、物流の実例から読む。

## 取引の流れのどの層を押さえると手数料が発生するか

ひとつの取引は、実際には複数の工程の連なりである。決済を例に取ると、加盟店側で支払いを受け付ける工程、資金を運ぶ工程、消費者側で資金を出す工程の 3 つに分かれる。仲介事業者はこのどこか 1 層以上を担当し、担当した層の対価として手数料を受け取る。問題は、層ごとに取れる対価の大きさが違うことである。

Stripe は 2010 年代を通じて加盟店側の受付層を取った。2025 年の処理額は 1.9 兆ドル、前年比 34% 増である [出典](https://stripe.com/newsroom/news/stripe-2025-update)。処理額としては世界有数だが、この層は資金源を握っていない。消費者がクレジットカードで支払う限り、加盟店から徴収した手数料の大半はカードの発行体と国際ブランドへ流れる。Stripe と Advent International が 2026 年 7 月 15 日に PayPal へ 1 株 60.50 ドル、総額 530 億ドル超の買収提案を出したと報じられたのは、この構造への対処と読める [出典](https://www.cnbc.com/2026/07/15/stripe-advent-offer-to-buy-paypal-for-more-than-53-billion-reuters.html)。PayPal 側で加盟店処理を担う Braintree は Stripe の中核と機能が重なるため、加算しても能力は増えない。増分は消費者側にある。PayPal のアクティブアカウントは 2026 年 6 月 30 日時点で 4.39 億口座、前年同期比 0.3% 増である [出典](https://s205.q4cdn.com/875401827/files/doc_financials/2026/q2/PYPL-2Q-26-Earnings-Release.pdf)。Venmo の TPV は 2026 年 4 - 6 月期に為替中立ベースで 14% 増え、総 TPV に占める比率は前年の 18% から 19% へ上がった。

層の位置が対価を決めるという構造は、決済に限らない。電力の卸取引では、公的な取引所が場を運営する市場と、当事者同士が直接契約する相対フォワード市場が並存する。enechain は 2019 年 7 月設立で、後者に画面取引を持ち込んだ仲介者である。JEPX が 2016 年 4 月に電気事業法上の卸電力取引所の指定を受けた主体であるのに対し、enechain はその指定を受けていない。同じ電力を扱うが、法的な立ち位置は別である。==押さえた層は、価格の場そのものではなく、相手探しと価格交渉の代行である==。

貿易でも同じ切り分けができる。フォワーダーは船も航空機も持たず、輸送枠の仕入れと通関、書類処理で稼ぐ。==押さえているのは実運送ではなく、荷主と実運送業者の間にある手配と書類の層である==。Shippio は 2016 年 6 月設立で、第一種と第二種の貨物利用運送事業許可と IATA 公認代理店認可を持ち、2022 年 9 月に通関業者の協和海運を 100% 取得した [出典](https://www.shippio.io/corp/)。免許を持たないマーケットプレイスではなく、既存フォワーダーと同じ免許構成を後から揃えた仲介者である。

層を押さえていない状態でも取引の間に立つことはできる。GMO AI&ロボティクス商事は 2024 年 6 月 18 日に資本金 1 億円で設立されたが、Unitree Robotics との国内正規代理店契約は約 2 年後の 2026 年 6 月 19 日である [出典](https://group.gmo/news/article/10065/)。それ以前に立ち上がっていたのは 2025 年 4 月 3 日開始の人材派遣型サービスで、機体の所有権を移さない役務が先行した [出典](https://group.gmo/news/article/9463/)。==仕入れと再販の権利を先に取ってから役務を足したのではなく、役務から入って後から物販の権利を取った経路である==。社名は商事だが、収益の順序は商社の説明と整合しない。

ここまでを整理すると、押さえる層の選択は次の 3 つの問いに還元される。第 1 に、その層は当事者の意思決定を左右するか。第 2 に、その層を通らない迂回路があるか。第 3 に、その層の対価は誰から誰へ払われる金額の内側にあるか。決済で言えば、受付層は迂回路があり対価はカード網の外側にない。資金源の層は迂回路が少なく、残高からの支払いはカード網を通らないため原価が消える。

## スプレッドの厚みが手数料率の上限を規定する

手数料率の上限は、仲介者の交渉力ではなく、売り手と買い手の間に開いた差額の厚みが決める。この関係が数字で読める例が PayPal である。

2026 年 4 - 6 月期の TPV は 4,864 億ドル、純収益は 86.8 億ドルで、実効的な取り分は 1.78% になる。ここから取引原価が TPV 比 0.90%、取引損失が 0.08% 差し引かれる。残るのは 0.80% である。原価率 0.90% は 2025 年 4 - 6 月期から 5 四半期連続で 0.89% から 0.90% の範囲に張り付いており、TPV が前年同期比 10% 増えても下がっていない [出典](https://s205.q4cdn.com/875401827/files/doc_financials/2026/q2/PYPL-2Q-26-Earnings-Release.pdf)。この原価の主因は発行体と国際ブランドへの支払いである。米連邦準備制度理事会の 2024 年データでは、規制対象外の発行体によるデビット取引の平均インターチェンジは取引額の 1.21%、規制対象は 0.47% である [出典](https://www.federalreserve.gov/paymentsystems/regii-average-interchange-fee.htm)。クレジットの水準はこれより高い。つまり受付層でどれだけ優れていても、==取れるのは 1.78% から 0.98% を引いた差分であり、その上限は資金源の側が決めている==。

電力の卸取引ではスプレッドがさらに薄い。enechain の手数料体系は一次資料で確認できない。サービス紹介、資金調達リリース、報道のいずれにも料率の記載がなく、以下は代替指標からの推定である。上限の目安になるのは、同じ商品を扱う公的市場が徴収している水準である。需給調整市場の売買手数料は 2025 年度で 0.03 円/ΔkW・30 分、従来単位に直すと 0.06 円/ΔkW・h である [出典](https://www.eprx.or.jp/outline/docs/202502tesuuryou_sankou1.pdf)。JEPX のスポット年平均価格は 2025 年度で 11.08 円/kWh である [出典](https://www.jepx.jp/company/overview/pdf/BR2025.pdf)。仮に仲介料が 0.1 円/kWh なら約定価格の 0.9%、0.03 円/kWh なら 0.27% になる。小売電気事業者が卸調達価格に乗せられる粗利は 1 kWh あたり数円の単位で、その内側から仲介料を払う。数パーセントの料率を取る設計は成立しないと見られる。

薄い料率のもとでは、収益は取扱高でしか作れない。enechain の累計取扱高は 2026 年 1 月 26 日発表で 3 兆円超である [出典](https://prtimes.jp/main/html/rd/p/000000042.000069751.html)。0.1% の料率を当てはめた単純計算では累計 30 億円で、これは 2019 年 7 月の設立から 6 年半分の累計にすぎない。同社が eScan、eCompass、eBalance という非仲介プロダクトを並べているのは、この計算の帰結として読める。

フォワーディングも同じ帯にいる。総取扱高に対する粗利率は、第三者推計で Flexport が 2021 年に約 20%、Kuehne+Nagel と Expeditors が約 30% とされる [出典](https://research.contrary.com/company/flexport)。同じ Flexport について、運賃下落局面の 2023 年は約 6% という別の第三者推計がある [出典](https://sacra.com/c/flexport/)。この 2 つは矛盾ではなく、市況の差である。運賃が高い局面では仕入れと売りの差が開き、下落局面では縮む。==ここから読めるのは、フォワーダーの粗利率が自社の交渉力ではなく運賃市況に従属するということである==。なお Flexport は非上場で監査済みの決算を公開しておらず、これらはいずれも第三者推計である。

手数料単価が取引量に反比例する構造も、あわせて押さえておく必要がある。需給調整市場の 0.06 円/ΔkW・h は、市場運営費用の想定額 30.6 億円と前々年度の不足分 4.4 億円を、約定量想定値 315 億 ΔkW・h の 2 倍で割った原価積み上げである。2024 年度の 0.02 円/ΔkW・h から 3 倍になった原因は、システム関連費用が 12 億円から 26.9 億円へ増えたことと、約定量想定値が 759 億 ΔkW・h から 315 億 ΔkW・h へ縮んだことである。量が出ない市場では単価が上がる。これは料率が高いことが強さを意味しない例である。

| 事業 | 取引の総額 | 仲介が取る率 | 出典URL |
| --- | --- | --- | --- |
| PayPal | TPV 4,864 億ドル、2026 年 4 - 6 月期 | 純収益ベース 1.78%、原価控除後 0.80% | https://s205.q4cdn.com/875401827/files/doc_financials/2026/q2/PYPL-2Q-26-Earnings-Release.pdf |
| 需給調整市場 | 約定量想定値 315 億 ΔkW・h、2025 年度 | 0.06 円/ΔkW・h の定額単価 | https://www.eprx.or.jp/outline/docs/202502tesuuryou_sankou1.pdf |
| 電力卸スポット | 年平均価格 11.08 円/kWh、2025 年度 | enechain は非開示、推定で 1% 未満 | https://www.jepx.jp/company/overview/pdf/BR2025.pdf |
| フォワーディング | 取扱高ベース | 粗利率 約 20%、2021 年、第三者推計 | https://research.contrary.com/company/flexport |
| フォワーディング | 取扱高ベース | 粗利率 約 6%、2023 年、第三者推計 | https://sacra.com/c/flexport/ |

## 情報プロダクトはスイッチングコストをどこまで上げるか

スプレッドが薄い事業では、料率を上げる代わりに顧客を離れにくくする方向へ投資が向かう。その手段として使われるのが情報プロダクトである。==ただし情報プロダクトは一枚岩ではなく、公開範囲によって効果が逆転する==。

Flexport は Tariff Simulator、Tariff Refunds Calculator、Rate Explorer、HS Code 検索、Open Emissions Calculator、Flexport Atlas、Compliance Audit を自社サイトに無料ツールとして並べている [出典](https://www.flexport.com/data/)。Tariff Simulator は 2026 年 8 月時点で登録不要、サブスクリプション不要、利用回数制限なしである [出典](https://tariffs.flexport.com/faq)。この設計は、利用と取引の結合を意図的に切っている。非顧客が匿名で使えるのだから、スイッチングコストは上がらない。上がるのは認知であり、下がるのは顧客獲得コストである。

無料で出せる理由はデータの源泉にある。関税系ツールの材料は HTSUS の基本税率、USTR の連邦官報告示、商務省の Section 232 レート、CBP の特恵プログラム表という米国政府の公開データである。自社貨物の実績に依存しないため、非顧客に開いても原価が増えない。逆に、模倣に必要なのも更新運用だけである。公式発表から反映までの所要時間は 24 時間から 48 時間で、これが唯一の品質差になる。機能面では単一出荷の計算のみで、時計、GRI 1 のセット品、GSP、Chapter 98 と 99 の一部が未対応である。この状態のものに月額を課すのは難しい。

課金余地があるのは運用側である。2025 年 10 月 20 日発表の Tariff Simulator Pro は、商品カタログ全体に対する税率変更の通知と着地コスト算出を機能差分としている [出典](https://finance.yahoo.com/news/flexport-launches-customs-technology-suite-020000504.html)。単発の税率計算ではなく、SKU 数千点を継続監視する運用が有料化の対象になる。ただし Pro の価格は公表されていない。より大きいのは送客の期待値である。同時発表の Customs Analysis は CBP データから支払済み関税と削減余地を示す無料診断で、そこから接続する Duty Drawback は 300 社超に対して累計 7 億ドル超の還付を出している。無料公開の見返りは、有償の通関業務の受注である。

顧客限定の層は逆にスイッチングコストを上げる。Flexport Platform は自社フォワーディング以外の輸送についても同じマイルストーン可視化を提供すると明記している [出典](https://www.flexport.com/products/flexport-platform/)。荷主が輸送記録の正本を Flexport 側に置く動機が生まれ、正本が移れば貨物量を他社に振り替えても管理画面は残る。ただしこの構造は反対向きにも働く。可視化の連続性が保たれるなら、荷主は運賃だけで輸送先を選べる。第三者調査は Flexport のフォワーディング事業について、差別化と粘着性を欠くと明示し、Freightos 等のマーケットプレイスとの価格競争圧力が増していると評価している [出典](https://research.contrary.com/company/flexport)。==同じ調査の NPS 72 は満足度であって、スイッチングコストではない==。

最も粘着するのは、履歴が業者側に蓄積する工程である。通関の申告データと分類の履歴、還付請求のための過去の輸出入の突合は、業者を替えると途切れる。Compliance Audit は申告のほぼ 100% をリアルタイムに点検すると説明され、業界標準は 5% から 10% を事後に確認する運用とされる [出典](https://finance.yahoo.com/news/flexport-launches-customs-technology-suite-020000504.html)。

Shippio は同じ論点に別の答えを出している。API はシップメント情報、輸送中商品情報、コンテナ情報の登録とトラッキング取得に対応し、2025 年 7 月から申込不要で無償提供されている [出典](https://www.shippio.io/news/press-release/apifree202507/)。荷主の基幹システム側にデータを流し込む設計であり、自社画面に囲い込む設計ではない。さらに 2024 年 9 月開始の Shippio Works は、国際物流事業者向けの貿易管理クラウドとして 2025 年 10 月時点で 80 社超に導入され、三井物産グローバルロジスティクスが含まれる [出典](https://www.shippio.io/news/press-release/works-1year/)。輸送では競合し、ソフトウェアでは供給するという二重の関係である。自社貨物の囲い込みを前提とする既存フォワーダーの自社プラットフォームには無い構造だが、囲い込みを弱める方向でもある。

ソフトウェアが削れる費目には限界がある。荷主から見た貿易のコストは、実費、社内人件費、ペナルティと機会損失の 3 つに分かれる。海上運賃、燃油と各種サーチャージ、ターミナルハンドリング、ドレージ、通関料、保険料は船社と実運送業者への支払いであり、ソフトウェアでは動かない。動かすには物量の集約か仕入れ交渉が要る。削れているのは、転記、突合、進捗照会という入力と照会の作業である。数値が出ている例では、協和海運との実証で通関業務が約 70% 効率化 [出典](https://www.shippio.io/news/press-release/shippio-clear/)、発注データと請求書の突合がゴンチャ ジャパンで 1 件あたり約 10 分から約 2 分になり約 80% 削減、アナナスジャパンでは最大 50% である [出典](https://www.shippio.io/news/press-release/ai-invoice/)。同じ機能でも削減幅が 2 倍近く違うのは、品目数に依存するためである。ペナルティ側では、ヤマタネがドレージのキャンセル料を年間で約 5% 削減している [出典](https://www.shippio.io/news/press-release/works-1year/)。三菱自動車の事例では Shippio Cargo が提示する ETA が実績の ATA と 97.5% の精度で一致したとされる [出典](https://www.shippio.io/news/mitsubishi-motors-cargo/)。

電力側でも同じ動きがある。enechain は 2026 年 6 月 10 日に需給管理 SaaS の eBalance を発表し、2026 年秋の正式リリースを予定している [出典](https://prtimes.jp/main/html/rd/p/000000046.000069751.html)。機能は需要想定、JEPX スポットと時間前市場への発注、計画提出、実績収支計算である。扱う市場は卸電力市場のままだが、事業者の需給管理業務そのものに入り込む点が仲介との違いになる。2026 年 1 月の 50.5 億円の調達の使途も、eSquare Live への 3 年間の投資、AI 実装と AI ラボ設立、セキュリティ基盤、M&A の 4 つである。

情報プロダクトについての結論はこうなる。公開ツールは獲得コストを下げるが固定化しない。顧客限定の可視化は正本を移すが、可視化の連続性が確保された分だけ取引の乗り換えを容易にする側面を持つ。履歴の蓄積が必要な工程だけが固定化に効く。そして 2026 年時点で、情報プロダクトが粗利率のプレミアムに転化した証拠は、参照した資料の範囲では確認できない。

## 規制と免許が参入の順序と速度を変える

仲介事業では、押さえたい層に免許が要ることが多い。免許は参入の可否を決めるだけでなく、どの順序で事業を組み立てるかを規定する。

決済では免許が買収対価の一部になる。PayPal (Europe) S.à r.l. et Cie, S.C.A. は 2007 年 7 月 2 日付でルクセンブルクの信用機関として認可され、CSSF の監督下にある [出典](https://www.paypal.com/lu/webapps/mpp/about)。Stripe が PayPal を買う場合、欧州の銀行免許を同時に取得することになるという整理が業界紙で示されている [出典](https://www.americanbanker.com/payments/news/paypal-balks-at-stripe-acquisition-offer)。免許を自前で取る道も並行して進んでいる。Stripe は 2025 年 2 月に Bridge を 11 億ドルで取得し、Bridge は 2025 年 10 月に申請した全国信託銀行チャーターについて 2026 年 2 月に OCC の条件付き承認を得た [出典](https://www.bankingdive.com/news/stripe-bridge-occ-conditional-approval-national-trust-bank-charter/812417/)。免許を取るか、免許を持つ会社を買うかという二択が、この価格交渉の背景にある。なお PayPal 取締役会が 2026 年 7 月 20 日に 60.50 ドルを過小評価として拒否したという情報は報道ベースであり、PayPal の適時開示では確認できていない [出典](https://fintech.garden/news/2026-07-17-paypal-board-rejects-53-billion-stripe-advent-offer-as-too-low-leaving-room-for-/)。

電力では制度が場を指定する。日本の電力システム改革は卸電力市場のほかに容量市場と需給調整市場を作ったが、後の 2 つには私設の取引所が入る余地がない。容量市場は OCCTO が年 1 回のメインオークションを運営し、2029 年度を対象とする直近の結果は約定総容量 1 億 6,608 万 kW、経過措置控除後の約定総額 2 兆 2,094 億円である [出典](https://www.occto.or.jp/assets/news/capacity-market/260123_mainauction_youryouyakujokekka_kouhyou_jitsujukyu2029.pdf)。金額規模は大きいが、これは小売電気事業者と一般送配電事業者が容量拠出金として負担し発電側へ渡る資金の総額であって、手数料が乗る取引代金ではない。需給調整市場は電力需給調整力取引所が運営し、2026 年 3 月末時点で応札実績のある会員は 56 社にとどまる [出典](https://www.eprx.or.jp/information/summary_2025.pdf)。買い手が一般送配電事業者に限られ、売り手も限られる。三つの市場の性質差を一行でまとめると、卸電力市場は相手を探す市場、容量市場と需給調整市場は制度が買い手を固定した市場である。前者にしか仲介の需要が生まれない。

貿易では免許が参入コストとして残る。日本発着では通関業許可と NACCS 申告が必須で、Shippio はこれを協和海運の取得で内製した。2026 年 4 月 16 日のサイバーポート利用規約改定を受け、自社プラットフォームの貿易情報をサイバーポート経由で NACCS へ送る機能開発を進めるとしている [出典](https://www.shippio.io/news/press-release/naccs_202604/)。運賃予約の即時性だけでは越えられない領域がここにある。さらにその先で、標準化の場を押さえる動きがある。2026 年 6 月 23 日に日本貿易 DX 協会が設立され、理事企業に Shippio、JASTPRO、トムソン・ロイター、トレードワルツ、日新が入り、経済産業省、国土交通省、財務省がオブザーバーとして参画している [出典](https://www.shippio.io/news/jtda/)。データ仕様の標準化を協調領域として先に定義すれば、外部プラットフォームが後から入るときの接続条件を国内側が決めることになる。

免許ではなく免除が参入条件になる領域もある。米国の車両安全基準 FMVSS は運転者と乗員が車内にいることを前提に書かれており、乗員のいない配送車は構造的に適合できない。NHTSA は 2020 年 2 月 11 日に Nuro の R2X について、鏡は自動運転システムがカメラとセンサーで環境を認識するため安全上の役割を持たない、ガラスの規定は保護すべき人間の乗員が存在しないため機能しない、と判断して免除を認めた [出典](https://www.govinfo.gov/content/pkg/FR-2020-02-11/html/2020-02668.htm)。免除の対象は FMVSS No. 500 の 3 項目と FMVSS No. 111 の一部試験手続である。ただし免除は恒久措置ではなく、期間 2 年、生産と配備 5,000 台が上限とされた。この台数と期間の条件は NHTSA の発表文に記載があるが、当該ページは直接取得時に HTTP 403 を返したため本文の全文確認はできていない [出典](https://www.nhtsa.gov/press-releases/nhtsa-grants-nuro-exemption-petition-low-speed-driverless-vehicle)。免除は低速車両という枠にも閉じており、FMVSS 上の低速車両は時速 25 マイルが上限である。走れる道路が幹線から外れる制約と引き換えの規制優遇である。

この非対称は縮んだ。旅客車両側では Zoox が 2025 年 8 月 22 日に申請し、2026 年 7 月 31 日に FMVSS No. 103、104、108、111、135、201、205、208 の 8 基準について免除を得た [出典](https://www.govinfo.gov/content/pkg/FR-2026-07-31/html/2026-15485.htm)。申請から許可までは約 11 か月で、Nuro の 2019 年 3 月 19 日公示から 2020 年 2 月 11 日許可までの期間と同じである [出典](https://www.federalregister.gov/documents/2019/03/19/2019-05121/nuro-inc-receipt-of-petition-for-temporary-exemption-for-an-electric-vehicle-with-an-automated)。差が出るのは条件の重さである。Zoox には 12 か月あたり 2,500 台の上限、期間 2 年、車両の売却禁止、遠隔支援の安全上重要な業務に従事する要員を米国本土内に置くことという条件が付いた。一方で GM は 2022 年 7 月 21 日に Cruise Origin の免除申請が公示されたが、許可に至った公示は Federal Register の検索結果に存在しない [出典](https://www.federalregister.gov/documents/2022/07/21/2022-15557/general-motors-receipt-of-petition-for-temporary-exemption-from-various-requirements-of-the-federal)。乗員なしの免除は 1 社で成立し、乗員ありの免除は 4 年以上かかって Zoox 1 社にとどまる。

規制が費用として実額で出る場合もある。韓国公正取引委員会は 2021 年 6 月に Coupang の調査を開始し、2024 年 6 月に検索順位の表示が韓国法に違反すると判断した。Coupang は 2024 年第 2 四半期に約 1 億 2,100 万ドルを引当計上した [出典](https://www.annualreports.com/HostedData/AnnualReports/PDF/NYSE_CPNG_2024.pdf)。2026 年 4 - 6 月期にはさらに韓国での行政制裁金約 4 億 1,000 万ドルを計上している [出典](https://s206.q4cdn.com/919117365/files/doc_financials/2026/q2/2026-Q2_Earnings-Release_.pdf)。2025 年後半に 3,370 万人分の顧客情報が流出した事案が報じられているが、この制裁金との対応関係は一次資料では確認できない。

## 国境と物流の分断が同じ出発点の企業を分岐させる

同じ EC という出発点から始まっても、市場の地理的条件と制度の違いが到達点を分ける。Coupang と楽天の比較がその例である。

楽天は 1997 年 2 月創業、Coupang は 2010 年 7 月創業で、起点に 13 年の差がある。楽天が JASDAQ に上場した 2000 年は、米国のグロースファンドが海外の非上場 EC に数十億ドル単位を投じる時代の前である。Coupang は創業から一貫して米国 Delaware 法人を親会社に置き、韓国事業を子会社として抱える構造をとった。この持株構造の差が調達通貨、上場市場、支配権の設計を規定した。Coupang, Inc. の Class B は 1 株 29 議決権で、全株を創業者 Bom Kim が実質保有し、2024 年 12 月 31 日時点で議決権全体の 74.4% を占める [出典](https://www.annualreports.com/HostedData/AnnualReports/PDF/NYSE_CPNG_2024.pdf)。NYSE を選んだというより、親会社が最初から米国法人であり、そこに Delaware 法で認められる複数議決権を組み込んだ結果として NYSE が帰結した、と読むのが事実に沿う。当時の韓国の上場規則が複数議決権株式を認めていなかったかどうかは、参照した一次資料では確認できない。

楽天は 2021 年 3 月 12 日の第三者割当増資で 2,423 億円を国内で調達した。発行価格は 1 株 1,145 円、希薄化率は 14.8% である。日本郵政が 8.32%、Tencent 子会社の Image Frame Investment (HK) Limited が 3.65% を取得した [出典](https://global.rakuten.com/corp/news/press/2021/0312_01.html)。Coupang は SoftBank に約 3 分の 1 を持たれても複数議決権で創業者が議決権を保持したのに対し、楽天は希薄化を受け入れ、支配権は普通株の持分比率のまま国内の事業会社に分散した。

事業側の分岐はより大きい。楽天の FY2025 の FinTech セグメントは売上 9,759 億円、セグメント利益 1,999 億円で、利益率 20.5% である。Internet Services は売上 1 兆 3,697 億円、セグメント利益 889 億円で利益率 6.5%、Mobile は売上 4,828 億円、セグメント損失 1,618 億円である [出典](https://global.rakuten.com/corp/investors/assets/doc/documents/25Q4tanshin_E.pdf)。銀行と証券とカードを連結するため総資産は 28 兆 8,044 億円、親会社所有者帰属持分比率は 3.4% になる。小売業ではなく金融グループのバランスシートである。Coupang の非 EC は Developing Offerings に収まり、2026 年 4 - 6 月期の売上は 14 億 3,100 万ドルで全体の 16.2%、調整後 EBITDA は 2 億 1,900 万ドルの赤字である [出典](https://s206.q4cdn.com/919117365/files/doc_financials/2026/q2/2026-Q2_Earnings-Release_.pdf)。Coupang は通信キャリアも銀行も持たない。設備投資の重さで言えば、Coupang は物流施設、楽天は基地局に資本を沈めた。

束ね方も分かれた。Coupang は 1 つのアプリに束ねる。WOW 会員は Coupang Eats の配送無料、Coupang Play の動画とスポーツ中継、Coupang Pay、大型商品の設置無料を月額課金に含める [出典](https://www.annualreports.com/HostedData/AnnualReports/PDF/NYSE_CPNG_2024.pdf)。楽天はサービスごとに別会社と別アプリを持ち、共通 ID とポイントで横断させる。FY2025 の楽天市場 MAU に占める楽天モバイル契約者の比率は 16.4% で前年同期比 1.4 ポイント増、モバイル契約者の年間平均 GMS は非契約者比 48.8% 高い [出典](https://global.rakuten.com/corp/investors/assets/doc/documents/25Q4MAINPPT_E.pdf)。この横断効果は会計上も Mobile Ecosystem Contribution として可視化され、Internet Services から 145 億 4,200 万円、FinTech から 194 億 8,000 万円が Mobile へ振り替えられる。Coupang は 1 つの損益の中で束ね、楽天はセグメント間の内部振替で束ねる。

国境そのものが壁になった記録もある。楽天は 2016 年に英国、スペイン、オーストリア、シンガポール、インドネシア、マレーシアの EC から撤退し、2020 年にドイツと米国マーケットプレイスを閉じた。Coupang の域外進出は 2021 年の台湾と 2024 年 1 月の Farfetch 買収に限られる。ただし規制と物流が到達点の差にどれだけ寄与したかを配分する定量的な根拠は得られていない。

貿易の分野でも国境が競争を切っている。中国発のオンライン即時見積かつ即時予約型プラットフォームの代表格である運去哪は、協力船社と航空会社が 300 社超、提携サプライヤーが 3,500 社超、グローバル拠点が 25 カ所と掲示するが、日本航路の掲示はなく、掲示されているのは豪州、欧州、中東向けである [出典](https://www.yqn.com/cn/)。日本発着で Shippio と直接ぶつかっている証拠は一次資料では確認できない。日本発着では通関業許可と NACCS 申告が壁になり、運賃予約の即時性だけでは越えられない。

情報の公開範囲にも国境の差が出る。Flexport が無料で出している関税率の検索を、日本では業界団体が有料で提供している。日本関税協会の実行関税率表 2025 の書籍版は税込 26,400 円である [出典](https://www.kanzei.or.jp/webdb/web_tariff/)。Web タリフ自体の年額は公開ページでは確認できない。国内フォワーダーの情報提供は、NX の SHUTTLE と e-NX visibility、郵船ロジスティクスの Yusen Vantage Focus のいずれも顧客向けプラットフォーム上の機能であり、非顧客が匿名で使える公開ツールは確認できなかった [出典](https://www.nipponexpress.com/jp/ja/service/solutions/scm/supply-chain-logistics-visibility-solutions/)。差は可視化機能の有無ではなく、非顧客向けに情報を公開するかどうかである。

## 仲介から在庫・資産保有へ踏み出す判断基準

薄い手数料に留まるか、在庫や資産を持って厚い粗利を取りに行くか。この選択は仲介事業のどこかで必ず現れる。判断基準は 4 つに整理できる。

第 1 に、押さえたい層に資産の保有が不可欠かどうか。Coupang は自社在庫と自社配送を垂直統合した。韓国は人口密度が高く単一言語の 1 国市場で、自社物流の全国展開が経済的に成立した。2026 年 4 - 6 月期の Product Commerce の調整後 EBITDA は 3 億 8,200 万ドル、利益率 5.1% である [出典](https://s206.q4cdn.com/919117365/files/doc_financials/2026/q2/2026-Q2_Earnings-Release_.pdf)。同じことを楽天は日本で試みて撤退した。FY2024 の一時的項目には、フルフィルメントセンター型オンライン食品配送で顧客獲得が計画を下回り一部エリアから撤退したことによる減損等 279 億 900 万円と、物流事業で取扱貨物量の増加が遅れたことによる減損 100 億 2,400 万円が含まれる [出典](https://global.rakuten.com/corp/investors/assets/doc/documents/25Q4tanshin_E.pdf)。同じ資産投下でも、密度と物量の前提が違えば結果が逆になる。

第 2 に、資本回収に必要な稼働率に届くかどうか。Nuro は 2024 年 9 月に自社配送車の製造を止めた。車両を自前で作ることが資本集約的で持続不可能だという判断である [出典](https://techcrunch.com/2025/04/09/nuros-106m-raise-backs-its-shift-from-delivery-robots-to-licensing-autonomy-tech/)。2025 年 4 月の Series E は 106 百万ドル、評価額は 60 億ドルで、2021 年の 86 億ドルから下がっている。転換後に選んだのは、1 台あたりの売上単価が配送より大きい旅客である。Uber と Lucid との提携では、Nuro Driver を搭載した Lucid 車両を 6 年間で 20,000 台以上、世界数十都市に配備する計画が示された [出典](https://www.prnewswire.com/news-releases/lucid-nuro-and-uber-partner-on-next-generation-autonomous-robotaxi-program-302507645.html)。車両は Uber または第三者フリートパートナーが保有し、Nuro は自動運転システムの提供と安全性検証を担う。資産の保有を他社へ移し、自分はソフトウェアの層に退いた形である。

同じ賭けを続ける Serve Robotics の開示が、この判断の妥当性を測る材料になる。2026 年 4 - 6 月期の売上高は 320 万ドル、粗損失は 880 万ドルで、売上の 2.75 倍の粗損失が出ている [出典](https://www.stocktitan.net/news/SERV/)。配送単価を下げる以前に粗利益が黒字化していない。同社は広告が食品配送売上の約半分を占めると述べており、配送料単体では事業が立たない構造と読める。配送単価がどこまで下がれば既存物流を置き換えるかという問いには、一次資料からは答えが出せない。閾値の計算には、車両原価、償却年数、遠隔監視要員 1 人あたりの担当車両台数、1 台 1 日あたり配送件数の 4 つが要る。Nuro も Serve Robotics も公開していない。既存宅配側でも UPS、FedEx、DoorDash のいずれも 1 件あたりのコストを分解した開示をしていない。

第 3 に、資産の保有が免許の取得と同義かどうか。Shippio が協和海運を買ったのは、通関という工程を持つためである。買収の効果は 2 つある。免許が手に入ることと、精度検証の場を自前で持てることである。2025 年 9 月提供開始の AI 通関クラウド Shippio Clear は、協和海運との実証で通関業務を約 70% 効率化したとしており、非定型の貿易書類の AI-OCR 読取精度は 97%、出力は NACCS 形式である。対象は 2025 年 9 月時点で海上輸入のみで、海上輸出と航空、NACCS 直接連携は今後の予定とされる [出典](https://www.shippio.io/news/press-release/shippio-clear/)。外販ソフト専業には無い条件である。

第 4 に、資産を持たずに済ませる場合、収益の源泉が役務として成立するかどうか。GMO AI&ロボティクス商事は機体の所有権を移さない派遣から始めた。EC の掲載価格は Unitree G1 が派遣で 10 万円/日から、Go2 が 6,000 円/日からで、購入価格は構成により見積もりとされ定価が出ていない [出典](https://gmo-humanoid.shop/g1/)。売り先は 3 層で、空港地上支援の実証、防衛、プロモーション用途である。日本航空、JAL グランドサービスとの実証実験は 2026 年 5 月から 2028 年まで羽田空港で行われ、対象はコンテナのドリーからハイリフトローダーへの移載作業である [出典](https://www.watch.impress.co.jp/docs/news/2104981.html)。陸上自衛隊の警備用ロボット案件では、四足歩行ロボットの企画、設計、開発を国内の未来ロボットが担い、同社の役割は品質管理である [出典](https://group.gmo/news/article/10063/)。商材の供給者ではなく工程の受託者として入っている。ただし単体の売上高と粗利率は非開示で、GMO インターネットグループの 2025 年 12 月期有価証券報告書の関係会社の状況にも個別記載がなく、その他 126 社に含まれている [出典](https://ir.group.gmo/pdf/securities-report/gmo20260323_yuhou.pdf)。物販売上と役務売上の比率は外部から確認できない。

判断の順序を逆から見ると、より整理される。資産を持つのは、持たなければ押さえられない層があるときだけである。Coupang は配送品質を押さえるために物流施設を持った。Shippio は通関の申告権を押さえるために通関業者を買った。Stripe は資金源の層を押さえるために銀行免許を取りに行った。逆に、資産を持っても層が変わらないなら、持つ理由がない。Nuro が車両製造を止めても Nuro Driver というソフトウェアの層は残った。GMO AI&ロボティクス商事が代理店契約を取っても、粗利の出どころは導入設計と運用保守の役務にあると見られる。持つべきかどうかは、資産そのものの収益性ではなく、その資産が層の支配に不可欠かどうかで決まる。

## この章の要点

- 仲介の収益は処理した取引の総額ではなく、売り手と買い手の間の差額のうち自分の層に配分される部分で決まる。PayPal は TPV 比 1.78% を受け取り、そのうち 0.98% が取引原価と取引損失で消える。
- 手数料率の上限は仲介者の交渉力ではなくスプレッドの厚みが決める。電力卸では公的市場の原価積み上げ単価から逆算して、仲介が取れる料率は約定代金の 1% 未満に収まると推定される。
- 規模を増やしても原価率は自動では下がらない。PayPal の取引原価率は TPV が前年同期比 10% 増えた期間を含む 5 四半期にわたり 0.89% から 0.90% の範囲で動いていない。
- 情報プロダクトの効果は公開範囲で逆転する。非顧客に開いた無料ツールは獲得コストを下げるが固定化しない。固定化に効くのは通関の申告履歴のように業者側に蓄積する記録である。
- 制度が買い手を固定した市場には仲介の需要が生まれない。容量市場と需給調整市場は前者に当たり、卸電力市場だけが相手を探す市場である。
- 免許と免除は参入の可否だけでなく順序も決める。Shippio は通関業者の買収を先に済ませ、Stripe は免許を買うか自前で取るかの二択を並行させている。
- 同じ出発点でも地理と持株構造が到達点を分ける。Coupang は Delaware 法人として複数議決権を残したまま自社物流を垂直統合し、楽天は国内調達と希薄化を選んで金融を本体に置いた。
- 資産を持つ判断は、資産の収益性ではなく、その資産がなければ押さえられない層があるかどうかで決まる。Nuro は車両製造を止めてもソフトウェアの層を保持した。

## 残っている問い

- enechain の手数料率と手数料体系は一次資料で確認できない。相対フォワードのビッドオファースプレッドも公表されておらず、スプレッドの何割を仲介が取っているかは算出できない。
- JEPX の 2025 年度事業収益 589 億 6,924 万円は内訳が開示されておらず、非化石価値取引の約定代金など手数料以外の収入が含まれる可能性がある。取引量で割った 0.20 円/kWh を手数料単価と読むことはできない。
- Flexport の Tariff Simulator Pro の価格は公表されていない。無料公開から有料運用への転換点がどこにあるかは判断できない。
- Flexport は非上場で監査済みの決算を公開していない。粗利率も NPS も第三者推計である。情報プロダクトが単価プレミアムに転化したかどうかは財務指標からは読み取れない。
- Shippio の粗利率、船社への支払い比率、人件費比率は開示されていない。公表はネットレベニューという売上総利益ベースの倍率だけで、SaaS 収入と輸送収入の内訳も不明である。
- 運去哪など中国系プラットフォームの日本発着コンテナ取扱量と、日本国内での通関業許可の有無は確認できなかった。競合の実態を測る材料が揃っていない。
- 無人配送の置換閾値を計算するための 4 変数、すなわち車両原価、償却年数、遠隔監視要員 1 人あたりの担当車両台数、1 台 1 日あたり配送件数は、Nuro と Serve Robotics のいずれも公開していない。既存宅配側の 1 件あたり限界コストも分解開示がない。
- Stripe と Advent の PayPal に対する提案について、2026 年 7 月 20 日の取締役会拒否と 70 ドル近辺という希望価格は報道ベースであり、PayPal の適時開示では確認できていない。引き上げ提案の有無も一次資料でも報道でも確認できない。
- NHTSA の Nuro 免除における台数上限 5,000 台と期間 2 年は、発表ページが HTTP 403 を返したため本文の全文確認ができていない。
- Coupang が 2026 年 4 - 6 月期に計上した韓国の行政制裁金約 4 億 1,000 万ドルと、2025 年後半に報じられた 3,370 万人分の顧客情報流出との対応関係は一次資料では確認できない。
- 韓国の上場規則が 2021 年時点で複数議決権株式を認めていなかったかどうかは、参照した一次資料では確認できない。韓国取引所の上場規程または金融委員会の告示を当たれば確定できる。
- GMO AI&ロボティクス商事の物販売上と役務売上の比率は非開示である。商社モデルと SIer モデルのどちらに近いかの判定は、事業立ち上げの順序からの推定にとどまる。
- 楽天と Coupang の到達点の差に対して、規制と物流の分断がどれだけ寄与したかを配分する定量的な根拠は得られていない。
- GMO AI&ロボティクス商事がどのロボットを誰に売っているかを、機種別・顧客業種別で確認できていない。代理店契約の対象機種は公表されているが、販売実績の内訳は非開示である。
- Shippioが中国のauto shipping portのような国営系プラットフォームとどう競合するかを確認できていない。両者が同じ荷主層を取り合っているかも未確認である。
- CoupangとRakutenの相違点のうち、EC以外の事業領域での差を整理できていない。金融・通信・コンテンツの各領域での位置づけの比較が要る。
- 両社のスーパーアプリ化の戦略差を確認できていない。アプリ内に載せた機能の順序と、その順序が示す優先度の違いが要る。
## 出典

1. Stripe, Stripe publishes 2025 annual letter and announces tender offer — https://stripe.com/newsroom/news/stripe-2025-update
2. PayPal Holdings, PayPal Reports Second Quarter 2026 Results — https://s205.q4cdn.com/875401827/files/doc_financials/2026/q2/PYPL-2Q-26-Earnings-Release.pdf
3. CNBC, Stripe, Advent make $53 billion takeover offer for PayPal — https://www.cnbc.com/2026/07/15/stripe-advent-offer-to-buy-paypal-for-more-than-53-billion-reuters.html
4. American Banker, PayPal balks at Stripe acquisition offer — https://www.americanbanker.com/payments/news/paypal-balks-at-stripe-acquisition-offer
5. Fintech Garden, PayPal board rejects $53 billion Stripe-Advent offer as too low — https://fintech.garden/news/2026-07-17-paypal-board-rejects-53-billion-stripe-advent-offer-as-too-low-leaving-room-for-/
6. Banking Dive, OCC conditionally approves Stripe subsidiary Bridge for trust charter — https://www.bankingdive.com/news/stripe-bridge-occ-conditional-approval-national-trust-bank-charter/812417/
7. Federal Reserve, Average Debit Card Interchange Fee by Payment Card Network — https://www.federalreserve.gov/paymentsystems/regii-average-interchange-fee.htm
8. PayPal, About Us、ルクセンブルク法人の免許表示 — https://www.paypal.com/lu/webapps/mpp/about
9. enechain、シリーズB追加ラウンドで総額50.5億円の調達を実施、PR TIMES — https://prtimes.jp/main/html/rd/p/000000042.000069751.html
10. enechain、SaaS型需給管理システム eBalance を2026年秋に提供開始、PR TIMES — https://prtimes.jp/main/html/rd/p/000000046.000069751.html
11. 2025年度事業報告書、日本卸電力取引所 — https://www.jepx.jp/company/overview/pdf/BR2025.pdf
12. 容量市場メインオークション約定結果 対象実需給年度2029年度、電力広域的運営推進機関 — https://www.occto.or.jp/assets/news/capacity-market/260123_mainauction_youryouyakujokekka_kouhyou_jitsujukyu2029.pdf
13. 参考 売買手数料単価の算定方法について、電力需給調整力取引所 — https://www.eprx.or.jp/outline/docs/202502tesuuryou_sankou1.pdf
14. 2025年度の取引実績について、電力需給調整力取引所 — https://www.eprx.or.jp/information/summary_2025.pdf
15. Flexport Tariff Simulator FAQ — https://tariffs.flexport.com/faq
16. Data and Tools、Flexport — https://www.flexport.com/data/
17. Flexport Platform 製品ページ — https://www.flexport.com/products/flexport-platform/
18. Flexport Launches Customs Technology Suite to Help Businesses Manage Tariffs and Reduce Costs、Yahoo Finance 掲載のプレスリリース — https://finance.yahoo.com/news/flexport-launches-customs-technology-suite-020000504.html
19. Flexport Business Breakdown & Founding Story、Contrary Research — https://research.contrary.com/company/flexport
20. Flexport revenue, valuation & funding、Sacra — https://sacra.com/c/flexport/
21. サプライチェーン・物流可視化ソリューション、NIPPON EXPRESS — https://www.nipponexpress.com/jp/ja/service/solutions/scm/supply-chain-logistics-visibility-solutions/
22. Web タリフ、日本関税協会 — https://www.kanzei.or.jp/webdb/web_tariff/
23. 株式会社Shippio 会社情報 — https://www.shippio.io/corp/
24. 目標を上回り拡大 国際物流業向け貿易管理クラウド「Shippio Works」80社超に導入 — https://www.shippio.io/news/press-release/works-1year/
25. 通関業務を7割削減 貿易DXのShippio、AI通関クラウド「Shippio Clear」を新たに提供開始 — https://www.shippio.io/news/press-release/shippio-clear/
26. 最大80%の作業削減 Shippio、新たに「AIインボイス照合」をリリース — https://www.shippio.io/news/press-release/ai-invoice/
27. 三菱自動車、荷主向け貿易管理クラウド「Shippio Cargo」を導入 — https://www.shippio.io/news/mitsubishi-motors-cargo/
28. Shippioプラットフォーム、ユーザー企業へAPI連携機能を無償提供開始 — https://www.shippio.io/news/press-release/apifree202507/
29. Shippio、国土交通省サイバーポート・NACCS連携へ — https://www.shippio.io/news/press-release/naccs_202604/
30. Shippio代表取締役CEO 佐藤孝徳、一般社団法人日本貿易DX協会の代表理事に就任 — https://www.shippio.io/news/jtda/
31. 运去哪 YQN 公式サイト — https://www.yqn.com/cn/
32. 楽天グループ 2025 年 12 月期 決算短信 英文版 — https://global.rakuten.com/corp/investors/assets/doc/documents/25Q4tanshin_E.pdf
33. 楽天グループ 2025 年 12 月期 決算説明資料 — https://global.rakuten.com/corp/investors/assets/doc/documents/25Q4MAINPPT_E.pdf
34. 楽天 第三者割当による新株式発行に関するプレスリリース 2021 年 3 月 12 日 — https://global.rakuten.com/corp/news/press/2021/0312_01.html
35. Coupang, Inc. Q2 2026 Earnings Release — https://s206.q4cdn.com/919117365/files/doc_financials/2026/q2/2026-Q2_Earnings-Release_.pdf
36. Coupang, Inc. 2024 Form 10-K — https://www.annualreports.com/HostedData/AnnualReports/PDF/NYSE_CPNG_2024.pdf
37. Nuro, Inc.; Grant of Temporary Exemption for a Low-Speed Vehicle With an Automated Driving System, Federal Register, 2020-02-11 — https://www.govinfo.gov/content/pkg/FR-2020-02-11/html/2020-02668.htm
38. Nuro, Inc.; Receipt of Petition for Temporary Exemption, Federal Register, 2019-03-19 — https://www.federalregister.gov/documents/2019/03/19/2019-05121/nuro-inc-receipt-of-petition-for-temporary-exemption-for-an-electric-vehicle-with-an-automated
39. Zoox—Grant of Temporary Exemption From Portions of Various Requirements of the FMVSS, Federal Register, 2026-07-31 — https://www.govinfo.gov/content/pkg/FR-2026-07-31/html/2026-15485.htm
40. General Motors—Receipt of Petition for Temporary Exemption, Federal Register, 2022-07-21 — https://www.federalregister.gov/documents/2022/07/21/2022-15557/general-motors-receipt-of-petition-for-temporary-exemption-from-various-requirements-of-the-federal
41. NHTSA Grants Nuro Exemption Petition for Low-Speed Driverless Vehicle, NHTSA、直接取得時 HTTP 403 — https://www.nhtsa.gov/press-releases/nhtsa-grants-nuro-exemption-petition-low-speed-driverless-vehicle
42. Nuro's $106M raise backs its shift from delivery robots to licensing autonomy tech, TechCrunch, 2025-04-09 — https://techcrunch.com/2025/04/09/nuros-106m-raise-backs-its-shift-from-delivery-robots-to-licensing-autonomy-tech/
43. Lucid, Nuro, and Uber Partner on Next-Generation Autonomous Robotaxi Program, PR Newswire, 2025-07-17 — https://www.prnewswire.com/news-releases/lucid-nuro-and-uber-partner-on-next-generation-autonomous-robotaxi-program-302507645.html
44. Serve Robotics 決算発表一覧, StockTitan — https://www.stocktitan.net/news/SERV/
45. GMOインターネットグループがAI・ロボット事業に参入 GMO AI＆ロボティクス商事株式会社設立 — https://group.gmo/news/article/9010/
46. GMO AI＆ロボティクス商事、Unitree Roboticsの国内正規代理店に — https://group.gmo/news/article/10065/
47. GMO AI＆ロボティクス商事、最新型ヒューマノイドロボットの人材派遣型サービスを提供開始 — https://group.gmo/news/article/9463/
48. GMOインターネットグループ、陸上自衛隊 警備用ロボット四足歩行型システム導入検証業務を受託 — https://group.gmo/news/article/10063/
49. Unitree G1 国内販売・価格・スペック、GMO ヒューマノイド.shop — https://gmo-humanoid.shop/g1/
50. GMOインターネットグループ株式会社 2025年12月期 有価証券報告書 — https://ir.group.gmo/pdf/securities-report/gmo20260323_yuhou.pdf
51. JALとGMO、羽田空港でのヒューマノイドロボット活用の実証実験、Impress Watch — https://www.watch.impress.co.jp/docs/news/2104981.html
