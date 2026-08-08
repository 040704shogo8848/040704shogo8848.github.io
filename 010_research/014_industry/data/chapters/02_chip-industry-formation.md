---
section: industry
chapter: 2
slug: chip-industry-formation
title: 半導体産業はどう形づくられたか
thesis: 半導体の勝敗は技術の優劣より、誰の資本がどの条件で供給されたかと、需要爆発をどの規制環境で迎えたかで説明できる。
---

半導体の歴史は、優れた技術を持つ側が勝つ物語として語られることが多い。しかし記録に残っている事実はその筋書きに合わない。DRAMを世界で最初に量産したインテルは、1984年時点でDRAM市場のシェアを数パーセント以下まで落としている。平面技術と集積回路の量産を確立したフェアチャイルド セミコンダクターは、2016年に社名ごと消えた。逆に、設計力も販路も持たなかった台湾の企業が、製造だけを引き受ける形で世界最大の受託製造会社になった。

この食い違いは、技術の水準を並べても解けない。解けるのは、誰の資本がどういう条件で供給され、その資本が誰の手に渡ったかを見たときである。同じ国家資金でも、組合という法人に流すか大学と個別企業に流すかで、生まれる産業構造が変わる。==同じ需要爆発でも、収益が規制価格で決まる事業と期待価格で決まる事業では、株価の壊れ方が変わる==。本章はこの二つの軸で、半導体産業の形成を読み直す。いま起きているAI向け半導体と電力の需要爆発を評価するときにも、同じ軸が使える。

## 超LSI計画と軍需研究という二つの資本供給モデル

1976年から1979年にかけて、日本と米国はどちらも国家資金を半導体に投じている。投じたこと自体は共通していて、違ったのは配り方だった。

日本側は超LSI技術研究組合である。富士通、日立、NEC、三菱電機、東芝の5社が参加し、1976年度から4年間で総投資額700億円、うち国庫補助金は次世代電子計算機用大型集積回路開発促進補助金から約290億円が投じられた。共同研究所は4テーマ6研究室体制で、約100人が集まっている。残した成果は電子線描画装置と縮小投影型露光装置の国産化であり、製造装置の国産化比率は20%程度から70%以上へ上がった[出典](https://ja.wikipedia.org/wiki/%E8%B6%85LSI%E6%8A%80%E8%A1%93%E7%A0%94%E7%A9%B6%E7%B5%84%E5%90%88)。同じ金額と参加企業は日経クロステックの電子産業史でも記録されている[出典](https://xtech.nikkei.com/dm/article/COLUMN/20080801/155928/)。

競合5社が同じ研究所に技術者を出せた条件は2つある。第一に、対象が製造プロセスと製造装置という前競争段階の技術に限られていた。5社は最終製品では競合し続けたため、共同開発が自社の販売を食う関係にならなかった。第二に、補助金の受け皿が個社ではなく組合という法人だった。資金を受け取るために連携が制度として強制された形になる。

米国側は同じ時期に3つの経路で資金を出している。DARPAのVLSI Projectは1978年にRobert Kahnが立ち上げ、UC Berkeley、Stanford、Caltech、UNC Chapel Hillといった大学チームへ研究資金を配分した。1981年にはMOSISを立ち上げ、1枚のウェハに複数の設計を載せるマルチチップウェハ方式で試作コストを下げている。ここから出たのがSun Microsystems、SPARC、BSD Unix、SGIであり、RISCとファブレスモデルの起点になった[出典](https://en.wikipedia.org/wiki/VLSI_Project)。VHSICは1980年に陸海空軍の共同プログラムとして始まり、10億ドル超が投じられた。1990年時点で商用プロセッサが国防総省の成果を上回っており、投入資金あたりの費用対効果は日本のVLSI計画に比べて低かったと整理されている[出典](https://en.wikipedia.org/wiki/Very_High_Speed_Integrated_Circuit_Program)。

米国が組合型を作らなかった理由の中心は反トラスト規制である。競合他社間の水平的な共同研究は、シャーマン法違反と認定された場合に3倍賠償の対象となりうるため、法的リスクが高かった。この状態が緩和されたのは1984年のNational Cooperative Research Actであり、1993年のNational Cooperative Research and Production Actへ引き継がれて、登録された研究ジョイントベンチャーへの損害賠償を実損害と利息と弁護士費用に限る扱いが明文化された[出典](https://en.wikipedia.org/wiki/National_Cooperative_Research_Act)。超LSI計画が動いていた1976年から1979年の米国には、同型の組合を作る法的余地がなかったことになる。

この解釈を支える順序がある。米国が組合型に転じたのは1987年のSEMATECHで、政府と14社の官民パートナーシップとして設立され、連邦政府から5年で5億ドルがDARPA経由で拠出された。政府のマッチング資金は1996年以降に打ち切られている[出典](https://en.wikipedia.org/wiki/SEMATECH)。法改正が1984年、組合型の成立が1987年という順序は、それ以前に組合型が作られなかった主因が法制度だったことの傍証になる。

| 項目 | 日本 超LSI技術研究組合 | 米国 VHSIC | 米国 DARPA VLSI Project |
| --- | --- | --- | --- |
| 期間 | 1976年度から4年間 | 1980年から1990年 | 1978年開始 |
| 資金 | 総額700億円、国庫補助約290億円 | 10億ドル超 | 大学向け研究資金 |
| 受け皿 | 競合5社が作る組合 | 軍の調達契約 | 大学と個別プロジェクト |
| 帰結 | 装置国産化比率が20%程度から70%以上へ | 1990年時点で商用品が成果を上回る | RISC、ファブレス、Sun、SGI |
| 出典 | https://ja.wikipedia.org/wiki/%E8%B6%85LSI%E6%8A%80%E8%A1%93%E7%A0%94%E7%A9%B6%E7%B5%84%E5%90%88 | https://en.wikipedia.org/wiki/Very_High_Speed_Integrated_Circuit_Program | https://en.wikipedia.org/wiki/VLSI_Project |

配り方の違いが構造の違いに直結している。組合に流した側は既存大手の集約を強め、大学と試作支援に流した側は参入障壁を下げて分散を強めた。どちらが優れた政策かという問いは立てにくい。日本は1980年代のDRAM競争を取り、米国は1990年代以降のファブレスとプロセッサを取っているからである。

## 低金利と貯蓄超過が競争力へ転化する経路

資本の配り方と並んで効いたのが、資本の値段である。1980年前後の日米は、資本コストが逆方向に動いた。

米国の貸出金利は1978年に9.06%、1981年に18.87%、1982年に14.86%である[出典](https://api.worldbank.org/v2/country/JPN;USA/indicator/FR.INR.LEND?format=json&date=1976:1995&per_page=300)。フェデラルファンドレートは1981年6月に20%、プライムレートは1981年に21.5%でピークをつけた[出典](https://en.wikipedia.org/wiki/Volcker_shock)。同じ時期の日本の公定歩合は1980年3月の9.00%を頂点に、1981年3月18日に6.25%、同年12月11日に5.50%へ下がっている[出典](https://www.boj.or.jp/statistics/boj/other/discount/discount.htm)。1981年で比べると、米国の貸出金利18.87%に対して日本の公定歩合は5.50%から6.25%であり、差は12.6ポイントから13.4ポイントになる。指標の種類が違うため厳密な同一比較ではないが、資本コストの方向が逆だったことは動かない。

この差がDRAMで効いた経路は2つある。第一に、DRAMは前工程設備を先に建て、数年かけて償却する事業である。投資判断の現在価値が割引率に強く反応するため、資本コストが低い側は同じ需要見通しの下でより大きな設備を建てても採算が合う。第二に、1980年から1982年の米国は景気後退局面にあり、失業率は10%を超えた。需要が落ちる局面で資金調達コストが最高値をつけたため、米国メーカーは能力増強を止める側に立たされた。日本勢が1981年に64キロビットDRAMで70%のシェアを取ったのは、この窓の中である[出典](https://ja.wikipedia.org/wiki/%E6%97%A5%E7%B1%B3%E5%8D%8A%E5%B0%8E%E4%BD%93%E5%8D%94%E5%AE%9A)。

==ただし金利差は引き金であって、持続要因ではない==。米国の貸出金利は1985年に9.93%、1986年に8.33%まで戻り、日本の公定歩合1986年11月1日の3.00%との差は5.3ポイント程度に縮んだ。にもかかわらず日本の世界シェアが46%で首位に立ったのは1986年である。金利差が最大だった1981年ではなく、金利差が縮んだ1986年に到達しているという事実は、金利差だけでは1986年を説明できないことを示す。持続要因としては、超LSI計画が残した装置国産化と、量産歩留まりの水準を置くほうが整合する。

日本のシェアのピーク年については、参照したノートの間で数字が食い違う。1986年に46%で世界1位という記述と、1988年に50.3%でピークという記述がある[出典](https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r03/html/nd105120.html)。ここでは両方を否定せず、1986年に首位に立ち、1988年前後に50%程度まで上がってピークを打った、と幅で読むのが安全である。総務省の情報通信白書は同じ系列で2019年に10.0%まで下がったことも示しており、系列としての一貫性は白書側にある。

資金供給の配管という観点では、当時の日本と現在の中国は同型である。国内総貯蓄の対GDP比は、日本が1980年に35.78%、1986年に36.29%、1990年に37.71%であり、中国は2010年に50.56%、2023年に43.24%である。同じ年の米国は1980年に22.85%、2023年に18.74%である[出典](https://api.worldbank.org/v2/country/JPN;USA;CHN/indicator/NY.GDS.TOTL.ZS?format=json&date=1976:2023&per_page=300)。国内に貯蓄が滞留し、その配分を銀行と国家が握るという構造が共通している。中国の国家集成電路産業投資基金は、第1期が2014年9月26日設立で218億ドル、第2期が2019年で290.8億ドル、第3期が2024年5月24日設立で登録資本3440億元、475億ドルである。第3期の出資構成は財政部が36.74%、国家開発銀行が22.29%であり、6大銀行が1140億元を拠出している[出典](https://en.wikipedia.org/wiki/China_Integrated_Circuit_Industry_Investment_Fund)。

同型でない部分は3つある。第一に規模と手段である。超LSI計画は4年間で総投資700億円のR&D補助であり、大基金は3期合計で1000億ドルに近い株式出資である。第二に需要側の出口である。1980年代の日本の資本は開かれた世界市場でシェアを取るために投下され、中国の資本は輸出規制下で国内代替を作るために投下されている。第三に制約の性質である。日本が受けた制約は市場アクセスの制約であり、資金で緩和できる余地があった。中国が受けているのは装置と技術の禁輸であり、資金投入では代替できない。日本は装置国産化比率を4年で20%程度から70%以上へ引き上げたが、対象は当時の露光技術であって、現在のEUV相当の課題とは難易度が異なる。したがって配管が同じでも帰結が同じになるとは言えない。

## フェアチャイルド系譜に見る人材スピンアウトの構造

資本の話にもう一つ層を足す。==1950年代から60年代の米国では、資本が企業ではなく人に付いた==。その結果が退社と創業の連鎖である。

起点は1957年9月、ショックレー半導体研究所を出た8人がフェアチャイルド セミコンダクターを設立したことにある。フェアチャイルドは平面技術と集積回路の量産を確立した一方で、親会社の一事業部であり、成果を株式で報いる仕組みを持たなかった。ゴードン・ムーアとロバート・ノイスが1968年7月18日にインテルを法人化したのは、この点が直接の理由になっている[出典](https://timeline.intel.com/1968/a-new-company-is-born)。2人はストックオプションを前提とした会社を作り、それがシリコンバレーの標準になった。

枝分かれの規模については、数え方の違う2つの数字が流通している。Computer History Museumは、SEMIが作成した1986年版の系譜図にフェアチャイルドから直接たどれる126社の半導体企業が載っていたと記し、別に2014年時点でフェアチャイルドの創業者と従業員にたどれるベイエリアの上場企業が92社、合計時価総額が約2.1兆ドルだったとしている[出典](https://computerhistory.org/blog/fairchild-and-the-fairchildren/)。92社にはGoogleやFacebookのような半導体以外の企業が含まれるため、126社と比較してはいけない。半導体企業に限った直接の系譜が126社である。

系譜のうち、社名として残ったものは少ない。

| 企業 | 買い手 | 完了時期 | 買収額 | 出典URL |
| --- | --- | --- | --- | --- |
| フェアチャイルド セミコンダクター | オン・セミコンダクター | 2016年9月19日 | 24億ドル | https://investor.onsemi.com/static-files/e017bd8c-1422-4095-92b0-8aefa616a40e |
| ナショナル セミコンダクター | テキサス・インスツルメンツ | 2011年9月23日 | 約65億ドル | https://www.sec.gov/Archives/edgar/data/0000097476/000119312511088304/dex991.htm |
| インターシル | ルネサス エレクトロニクス | 2017年2月24日 | 約32億ドル | https://www.renesas.com/en/about/press-room/renesas-electronics-completes-acquisition-intersil |
| LSI | アバゴ | 2014年5月6日 | 約66億ドル | https://www.globenewswire.com/news-release/2014/05/06/633503/19933/en/Avago-Technologies-Completes-Acquisition-of-LSI-Corporation.html |

残った系譜は3つに分けて理解するのが正確である。第一に、独立した上場企業として現存するインテルとAMD。第二に、装置とベンチャー投資の系譜で、アプライドマテリアルズと、Eugene Kleinerが関わったベンチャー投資の系列がここに入る。第三に、買収を通じて他社の中に溶けた製品ラインで、オン・セミコンダクター、テキサス・インスツルメンツ、ルネサス、ブロードコムがそれぞれ受け皿になった。

創業者の経歴を並べると、==創業の動機が技術的発見ではなく報われ方の設計にあった==ことが見える。モリス・チャンは1958年から1983年までテキサス・インスツルメンツに在籍し、最初の担当だったIBM向けゲルマニウムトランジスタで歩留まりをほぼ0%から引き上げた[出典](https://www.construction-physics.com/p/morris-chang-and-the-origins-of-tsmc)。1977年に不振の消費者製品部門へ、1983年には品質担当へ配置換えされて退社している[出典](https://spectrum.ieee.org/morris-chang-foundry-father)。ジェリー・サンダースはフェアチャイルドの販売部門の責任者だったが、1968年の経営交代で居場所を失い、1969年5月1日にフェアチャイルド出身の7人とともにAMDを設立し、自らが社長になることを参加条件にした[出典](https://historyofinformation.com/detail.php?id=879)。アンディ・グローブは1968年のインテル創業時の最初の採用者で、1979年に社長、1987年にCEOとなり、在任中に年間売上高は19億ドルから260億ドル超になった[出典](https://www.intc.com/news-events/press-releases/detail/284/andrew-s-grove-1936-2016)。任正非は1983年に工程兵の解体で除隊し、1987年に資本金2万1000元でファーウェイを設立した[出典](https://www.huawei.com/en/executives/board-of-directors/ren-zhengfei)。上場せず従業員持株で自己資金を回す構造がここから来ており、2024年の研究開発費は1797億元で売上高の20.8%、研究開発人員は11万3000人である[出典](https://www.huawei.com/en/news/2025/3/annual-report-2024)。

チャンの場合、外された経験が受託製造という形にまで具体化する過程は、資本の供給条件で説明できる。1985年に工業技術研究院院長となり、1987年にTSMCを設立したとき、台湾には設計力も販路もなく、売れるものは製造能力しかなかった。顧客と競合しない専業ファウンドリという形はこの制約から出ている。設立時の資本は政府7000万ドル、フィリップス4000万ドル、民間投資家3500万ドル、政府融資5700万ドルの合計約2億200万ドルであり、政府が最大の出し手である[出典](https://www.construction-physics.com/p/morris-chang-and-the-origins-of-tsmc)。TSMCの2025年第4四半期売上高は1兆461億台湾ドル、337億ドルで、純利益は5057億台湾ドルである[出典](https://pr.tsmc.com/english/news/3281)。なおチャンがテキサス・インスツルメンツ在籍中に同種の構想を社内提案していたとする報道はあるが、その1976年の社内文書は一次資料で確認できていない。

## 発明した企業がシェアを取れない条件

インテルは1970年に1103でDRAMを立ち上げた当事者であり、1984年には市場から消えかけている。この落差は、外圧だけでは説明できない。

まず数字を確定させておく。しばしば引かれる1.7%という値には一次資料が見当たらない。二次資料の間でも値が割れており、Burgelmanの研究を引く記述は1974年の82.9%から1984年に1.3%へ低下したとし、Richard Rumeltは1970年代の80%超から1984年に2%から3%へ低下したと書いている[出典](https://rumelt.substack.com/p/intels-fall-from-grace)。ここでは1984年時点で数パーセント以下という幅で扱う。どの値を取っても、以下の構造の説明は変わらない。

第一の要因は社内の工程能力配分である。Stanford GSBによるBurgelman論文の要旨は、インテルの社内選択環境が、全社戦略が正式に変更される前に希少な製造資源をメモリからマイクロプロセッサへ移す働きをしたと記述している[出典](https://www.gsb.stanford.edu/faculty-research/publications/fading-memories-process-theory-strategic-business-exit-dynamic)。撤退を決めた時点で、8つのシリコン工場のうちメモリを作っていたのは1つだけだったとGroveは述懐している[出典](https://commoncog.com/c/cases/intel-transition-memories-processors/)。市場で負ける前に、社内で負けが確定していたことになる。

第二の要因は日本勢の世代交代の速さである。日本の64キロビットDRAMシェアは1981年に米国を上回り、1986年に日本は世界最大の半導体供給国になり、1987年にはDRAM全体で80%に達した[出典](http://www.shmj.or.jp/english/trends/trd80s.html)。DRAMは設計の独自性ではなくビットあたりコストで決まる商品であり、露光装置と歩留まりを押さえた側が勝つ。前節までに見た装置国産化と低い資本コストが、ここで直接効いている。

第三の要因は品質である。1980年3月、ヒューレット・パッカードのRichard Andersonがワシントンでの業界会合で、16キロビットRAMについて日本製が同社の受入検査を通る比率が高く、実装後の故障までの時間も長かったと報告した[出典](https://aliciapatterson.org/t-r-reid/meet-dr-deming-corporate-americas-newest-guruc/)。この報告で示された具体的な不良率の数値は一次資料で確認できていない。

第四の要因は、インテルには退路があったことである。同じ工場でマイクロプロセッサを作れたため、撤退が事業の終わりを意味しなかった。Groveは撤退について、われわれが下した最良の事業判断だったと述べている[出典](https://timeline.intel.com/1985/farewell-to-dram)。DRAM専業のメーカーには存在しない選択肢である。

ここから引き出せる一般則は次の形になる。==発明した企業がシェアを取れるかどうかは、その製品の勝負軸が発明の側にあるか量産の側にあるかで決まる==。DRAMの勝負軸はビットあたりコストであり、発明の優位は3年程度で消える。加えて、社内で希少資源をどう配分するかのルールが、経営の意思決定より先に事業の生死を決めることがある。==撤退の判断が遅かったのではなく、判断する前に実質的な撤退が進んでいた==。

なお、日米半導体協定を日本の衰退の原因とする理解は、時系列と合わない。協定の締結は1986年9月2日であり、日本が世界シェア46%で首位に立ったのも1986年である。秘密書簡には外国製シェアを5年以内に20%以上とする約束が含まれ、1987年4月17日にはパソコン、カラーテレビ、電子工具に100%関税が課され、合計3億ドルの関税引き上げが行われた。第二次協定は1991年6月締結で四半期ごとのシェア監視が始まり、外国製シェアが20%を超えたのは1992年である[出典](https://ja.wikipedia.org/wiki/%E6%97%A5%E7%B1%B3%E5%8D%8A%E5%B0%8E%E4%BD%93%E5%8D%94%E5%AE%9A)。シェア低下と協定の間には6年の間隔がある。協定単独を原因とする因果は、本章が参照した出典では立証できない。

## 国家研究機関の資金供給が民間VCと異なる点

国家が半導体に資金を出す形は、補助金と調達契約だけではない。もう一つの型が研究機関による資金供給であり、DARPAがその代表である。VCと同じく高リスクに賭ける機関に見えるが、設計が根本から違う。

第一に、対価の取り方が違う。DARPAは契約、助成、その他の取引で資金を出し、株式を取得しない。企業価値の上昇による回収を前提としていない。DARPAが公式に掲げる資金提供の対象は、大学、防衛政府機関、スタートアップから大手防衛企業までの産業、投資家と起業家、小企業の5つである[出典](https://www.darpa.mil/work-with-us)。回収するのは技術の実装先、すなわち軍が使える能力である。説明責任の相手も投資家ではなく議会になる。

第二に、意思決定者の構造が違う。DARPAの職員は約220人、うちプログラムマネージャーは約100人とされる[出典](https://en.wikipedia.org/wiki/DARPA)。この人数でFY2026の43億2200万ドルを配分し、FY2027は50億3900万ドルを要求している[出典](https://www.darpa.mil/about)。1人あたりの配分額はVCのパートナー1人が扱う額と桁が近い。違うのは関与の仕方で、VCは投資先の取締役会に入って経営に関わるが、DARPAのプログラムマネージャーは経営に関与せず、プログラムという課題設定そのものを書く。

第三に、審査基準が違う。DARPAはハイルマイヤーの問答という8問で提案を評価する。目的を専門用語なしで述べよ、現在はどう行われていて何が限界か、あなたのやり方の新規性は何か、誰が気にするのか、リスクは何か、いくらかかるか、どれだけ時間がかかるか、中間と最終の合否判定は何か、の8問である[出典](https://www.darpa.mil/about/heilmeier-catechism)。市場規模と競合優位を問わない点がVCとの決定的な差になる。誰が気にするのかという問いは、市場ではなく作戦上の意味を問うている。

第四に、任期の設計である。プログラムマネージャーは着任時点で退任予定日を持ち、在任は3年から5年で終わる。同機関は、任期が5年未満であることが他のどの研究環境よりも速く成果を出そうとする切迫感を生むと説明しており、年間で約25%が入れ替わる[出典](https://www.darpa.mil/careers/program-manager)。==短い在任は、機関でキャリアを築くのではなく、何かを終わらせるために来る人を選別する装置として設計されている==。VCのパートナーはファンドの10年満期に縛られるが、個人の任期はない。ここが逆になっている。DARPAは人に期限を置いて資金には置かず、VCは資金に期限を置いて人には置かない。

<figure class="tb-fig">
<svg viewBox="0 0 720 262" role="img" aria-label="国家資金とベンチャー資本の設計の違い">
  <g font-size="11" fill="var(--muted)">
    <text x="196" y="18">DARPA</text>
    <text x="372" y="18">日本の技術研究組合</text>
    <text x="576" y="18">ベンチャー資本</text>
  </g>
  <rect x="12" y="26" width="696" height="1" fill="var(--line)"/>
  <g font-size="11.5">
    <text x="12" y="52" fill="var(--sub)">対価の取り方</text>
    <text x="196" y="52" fill="var(--ink)">契約と助成</text>
    <text x="372" y="52" fill="var(--ink)">国庫補助</text>
    <text x="576" y="52" fill="var(--ink)">株式</text>

    <text x="12" y="82" fill="var(--sub)">回収するもの</text>
    <text x="196" y="82" fill="var(--ink)">軍が使える能力</text>
    <text x="372" y="82" fill="var(--ink)">国内産業の装置国産化</text>
    <text x="576" y="82" fill="var(--ink)">企業価値の上昇</text>

    <text x="12" y="112" fill="var(--sub)">説明先</text>
    <text x="196" y="112" fill="var(--ink)">議会</text>
    <text x="372" y="112" fill="var(--ink)">所管官庁</text>
    <text x="576" y="112" fill="var(--ink)">出資者</text>

    <text x="12" y="142" fill="var(--sub)">審査の中心</text>
    <text x="196" y="142" fill="var(--ink)">作戦上の意味</text>
    <text x="372" y="142" fill="var(--ink)">共同開発テーマ</text>
    <text x="576" y="142" fill="var(--ink)">市場規模と競合優位</text>

    <text x="12" y="172" fill="var(--sub)">資金の受け手</text>
    <text x="196" y="172" fill="var(--accent)" font-weight="600">大学と新規参入者</text>
    <text x="372" y="172" fill="var(--warm)" font-weight="600">既存の競合5社</text>
    <text x="576" y="172" fill="var(--ink)">創業者</text>

    <text x="12" y="202" fill="var(--sub)">期限の置き場所</text>
    <text x="196" y="202" fill="var(--ink)">人（在任3〜5年）</text>
    <text x="372" y="202" fill="var(--ink)">計画（4年間）</text>
    <text x="576" y="202" fill="var(--ink)">資金（満期10年）</text>
  </g>
  <line x1="12" y1="216" x2="708" y2="216" stroke="var(--grid)"/>
  <text x="12" y="238" font-size="11.5" fill="var(--ink)">生まれる産業構造が逆になる分岐点は、株式を取るかどうかではない。</text>
  <text x="12" y="256" font-size="11.5" fill="var(--ink)">資金の受け手を既存の大手に固定するかどうかにある。</text>
</svg>
<figcaption>3つとも高リスクに資金を出す仕組みだが、受け手の選び方と期限の置き場所が違う。DARPAは人に期限を置いて資金には置かず、ベンチャー資本は資金に期限を置いて人には置かない。</figcaption>
</figure>

この4点を前節までの話に接続すると、第1節の日米の差が別の角度から見える。日本の組合は既存大手の共同研究に資金を集約し、DARPAは課題設定を書き換えることで新規参入者を作った。どちらも国家資金だが、==生む産業構造が逆になる理由は、株式を取るかどうかではなく、資金の受け手を既存の大手に固定するかどうかにある==。

## 安価なドローンが調達構造を書き換えた経路

半導体と国家資金の関係を語るとき、防衛はこれまで最大の需要家だった。その前提が2022年以降に崩れている。崩したのは新技術ではなく、民生部材の量産である。

FPVドローンの構成要素はフレーム、モーター4基、電子速度制御、飛行制御基板、映像送信機、カメラ、受信機、バッテリー、そして弾頭である。このうち弾頭を除くすべてがレース用FPVの民生市場で量産済みの部材であり、軍需固有の部品を含まない。これが1機あたり数万円台が成立する第一の理由である。ただし部材ごとの単価については、参照した量販サイトがHTTP 403で取得できなかったため、内訳を数字で示すことはできない。

第二の理由は数量である。ウクライナは2025年に450万機を目標とし、実績は300万機、2026年計画は700万機超とされる。ロシアは2025年にFPVドローン200万機の計画を示した[出典](https://en.wikipedia.org/wiki/Aerial_warfare_in_the_Russo-Ukrainian_war)。年間数百万機という需要は民生部材の量産ロットと桁が一致する。防衛装備品の通常の調達数量は年間数十から数百であり、その桁では量産効果が働かない。==ドローンが安いのは技術が単純だからではなく、数量が単価を押し下げているからである==。

第三に、機体を安くしたぶん高い部品を1点だけ載せる設計が成立する。迎撃ドローンStingは単価2100ドル、最高速度343km/h、月産1万機以上とされ、フレームは3Dプリント製、カメラはOdd Systems製の熱画像カメラKurbasを搭載する[出典](https://en.wikipedia.org/wiki/Sting_(drone))。数万円台の攻撃用FPVと30万円台の迎撃機が、同じ部材思想の上に並んでいる。

この変化が調達制度に返ってくる。日本の中央調達は原価計算方式で予定価格を積み上げる仕組みを持ち、防衛装備庁には原価管理官が置かれている[出典](https://ja.wikipedia.org/wiki/防衛装備庁)。原価を積み上げる方式は、部材が民生量販品で市場価格が数か月で変動する製品と相性が悪い。積み上げた原価を検証する事務コストが機体価格を上回りうる。

部材の出所も制約になる。米国は大統領令14307で、法の許す最大限の範囲で国産機を外国製より優先すること、Blue UASリストを毎月更新すること、90日以内に対象外国事業体リストを公表することを指示した[出典](https://www.whitehouse.gov/presidential-actions/2025/06/unleashing-american-drone-dominance/)。Blue UASの管理は2025年7月10日付の通知で国防契約管理局へ移管されている[出典](https://www.diu.mil/blue-uas-cleared-list)。安いFPV部材の供給網は中国に集中しており、供給網を国内に置き換えれば単価は上がる。安さと供給網の安全は同時には満たせない。

組織を作れば解決するという理解も成り立たない。日本は2024年10月1日に防衛イノベーション科学技術研究所を約100人態勢で設置し、DARPAと国防イノベーションユニットを参考にしている[出典](https://ja.wikipedia.org/wiki/防衛イノベーション科学技術研究所)。参照したのは研究の仕組みであり、単価を決める原価計算方式と調達数量には手が付いていない。防衛装備庁は2026年6月5日に迎撃ドローン早期取得プログラムの実施と提案企業の公募を発表し、提出期限を6月29日とした。公募条件は高度おおむね1万8,000フィート未満、速度250ノット程度、重量600キログラム以下の無人機である。7月上旬に試験機を選定し、7月下旬から8月上旬に実証試験、運用に適すると判断すれば8月下旬に量産の調達契約を結び、9月の納入を目指すとしている[出典](https://www.mod.go.jp/j/press/news/2026/06/05f.pdf)。==公募から納入まで4か月弱という工程は、既存の装備品調達の時間軸とは別物である==。ただし調達数量と価格帯は公表されていないため、量産効果が働く桁に届くかどうかは依然として判定できない。

半導体の文脈に戻すと、この節は資本供給の話と同じ構造をしている。==技術の優劣ではなく、誰がどの条件で買うかが産業の形を決める==。年間数百万機を買う顧客がいる市場と、年間数百機を買う顧客しかいない市場では、同じ部材を使っても単価が桁で変わる。

## インフラ需要の爆発は必ず投機を伴うのか

半導体と電力の需要爆発は、資本市場に先に現れ、実物投資が数年遅れてついてくる。この時間差の期間に、期待だけで値付けされた証券が積み上がる。同じ構造は19世紀の鉄道と1920年代の電力で先に起きている。

19世紀英国の鉄道マニアでは、1846年に263本の鉄道会社設立法が議会を通過し、認可路線は合計9500マイルに達した。認可された路線のうち約3分の1は建設されず、1844年から1846年に認可された案件から実際に建設されたのは6220マイルである[出典](https://en.wikipedia.org/wiki/Railway_Mania)。重要なのは株価と実物投資のずれである。株価は1845年半ばに天井を打ち、そこから約4年下げ続けたのに対し、実物投資額は1847年にピークをつけ、その年の投資額は国家予算の約4分の3の規模だった[出典](https://www-users.cse.umn.edu/~odlyzko/doc/mania04.pdf)。

このずれが素材産業にとって持つ意味は具体的である。鉄の最大需要家である鉄道の株が下げ始めた後も、レールと橋梁の注文は2年増え続けた。需要側の株価暴落と素材産業の不況は同時には来ない。遅れて来る。

投資家の側は負けている。1849年から1858年の10年間の鉄道普通株の配当は平均約2.8%で、当時の無リスク国債利回り約3%を下回った。投資家が期待していた配当は10%である[出典](https://www-users.cse.umn.edu/~odlyzko/doc/mania04.pdf)。ただし物理インフラは残った。一つ前の1830年代の鉄道マニアでは、価格は暴落したものの、投資家は最終的に市場平均を上回るリターンを得ている[出典](https://www-users.cse.umn.edu/~odlyzko/doc/mania01.pdf)。同じ形をした熱狂が、片方は成功し片方は失敗した。この成功体験が次の失敗の心理的土台になった。

需要側バブルの崩壊が素材産業を潰した最も明確な事例は1873年である。米国では1868年から1873年に33000マイルの線路が敷設された。恐慌後、年間敷設距離は1872年の7500マイルから1875年の1600マイルへ落ちている[出典](https://en.wikipedia.org/wiki/Panic_of_1873)。レール需要は5分の1近くまで縮んだ計算になる。

製鉄業そのものの株式に大規模な投機バブルがあったという記録は、今回参照した範囲では確認できなかった。近い事例は1901年のUS Steel設立である。Carnegie Steel、Federal Steel、National Steelの合併に4億9200万ドルが払われ、資本金は14億ドルで世界初の10億ドル企業となった。一方で米国企業局は後にこの会社の価値を約7億ドルと評価している[出典](https://en.wikipedia.org/wiki/U.S._Steel)。発行証券の額面が実態評価の約2倍という水増しの実例である。発行構成は普通株5億800万ドル、優先株5億1,000万ドル、社債3億9,100万ドルだった。1901年2月の上場時に普通株は約50ドル、優先株は約100ドルで取引されている。水増しは株価として実現した。普通株は1904年までに10ドルを割り、100ドルを回復したのは1916年である[出典](https://finaeon.com/united-states-steel-the-first-billion-dollar-company/)。==上場時から4年で8割超下落し、回復に15年かかった==。実物資産の裏づけがある産業でも、証券の側で作られた期待は独立に崩れる。

製鉄が鉄道ほどの株式バブルを起こさなかった一因として、供給側のコスト低下が挙げられる。熱風炉の導入により、鉄1トンあたりの石炭消費は8.06ロングトンから5.16ロングトンへ下がり、1840年までに58人の製鉄業者が実施権を取得した[出典](https://en.wikipedia.org/wiki/Hot_blast)。需要が増える局面で供給側の単位コストが36%下がれば、価格は需要ほどには上がらない。ただしこの因果を裏づける同時代の株価データは取得できていない。推測として扱う。

半導体に置き換えると、注意すべき点が2つある。第一に、需要側の期待が崩れても実物投資はしばらく増え続ける。したがって装置メーカーの受注が伸びていることは、需要期待が健全であることの証拠にならない。第二に、供給側の単位コストが下がり続ける産業では、需要爆発が価格上昇として現れにくい。数量で見るか価格で見るかで、同じ需要爆発が別の絵に見える。

## 規制産業であることが価格変動に与える影響

最後に、需要爆発を迎える環境の側を見る。規制産業だから株価は安定するという理解は、事実に合わない。

歴史側から確認する。ダウ・ジョーンズ公益株平均の年末値は1929年88.27、1930年60.80、1931年31.41、1932年27.71、1933年23.09、1934年17.80である[出典](https://en.wikipedia.org/wiki/Dow_Jones_Utility_Average)。1929年末から1934年末までの下落率は79.8%になる。規制産業であることは暴落を防がなかった。

崩壊の中心は、規制されていた運営会社ではなく、その上に積まれた持株会社である。1932年6月、39州で事業を営むMiddle West Utilitiesが破綻した。同じ1932年時点で大手8社が投資家所有の電気事業の73%を支配していた[出典](https://en.wikipedia.org/wiki/Public_Utility_Holding_Company_Act_of_1935)。Samuel Insullは自己資本2700万ドルで5億ドルの帝国を支配しており、レバレッジは約18.5倍である。この崩壊で60万人の株主の貯蓄が消えた[出典](https://en.wikipedia.org/wiki/Samuel_Insull)。連邦議会は1935年8月26日にPUHCAを成立させ、この持株会社構造を解体した。規制が暴落を防いだのではない。暴落の後に規制が拡張された。

現在側でも同じ分岐が観察できる。2026年8月6日終値で、規制電力を中心とするUtilities Select Sector SPDR Fundは43.38ドル、52週レンジは41.15ドルから47.80ドルであり、高値からの下落率は9.2%である[出典](https://stockanalysis.com/etf/xlu/)。同じ日、Constellation Energyは261.10ドル、52週高値412.70ドルで、高値からの下落率は36.7%である[出典](https://stockanalysis.com/stocks/ceg/)。Vistraは141.38ドル、52週高値219.82ドルで、下落率は35.7%である[出典](https://stockanalysis.com/stocks/vst/)。

分岐の理由は規制の有無そのものではなく、収益がどう決まるかにある。規制電力会社の利益はレートベースに許容ROEを掛けて決まるため、卸電力価格が動いても利益は直接には動かない。データセンター需要の期待が縮んでも、規制会社の利益式には入ってこない。これに対して独立系発電事業者の株価は、将来の卸電力価格とデータセンター契約の期待値で値付けされる。期待の修正がそのまま株価に出る。

1930年代が反例になるのは、あのときの下落要因が事業の性質ではなく財務レバレッジだったからである。運営会社のキャッシュフローが相対的に安定していても、その上に18倍のレバレッジを積めば株式は消える。==規制産業だから安全という命題は、規制の対象が運営会社の料金であって親会社の資本構成ではない限り成立しない==。

したがって、需要爆発を迎えたときに何が壊れるかを決める変数は2つに絞れる。第一に、収益が規制価格で決まるか期待価格で決まるか。第二に、事業のキャッシュフローの上に何倍のレバレッジが積まれているか。規制産業という括りはこの2つの代理変数にすぎない。半導体はどちらの変数でも規制側にいない。価格は市場で決まり、設備投資は自己資本と負債で賄われる。同じ需要爆発でも、半導体側の証券のほうが期待の修正を直接に受ける位置にある。

インプット側にも同じ論理が通る。高炉一貫ルートで需要の価格弾力性が最も低いのは原料炭である。コークスは酸化鉄を還元する一酸化炭素の供給源であると同時に、炉内で装入物を支え通気を確保する骨格でもある[出典](https://en.wikipedia.org/wiki/Coke_(fuel))。微粉炭吹込みで一部は置き換わるが、骨格としての塊状コークスをゼロにはできない。加えて海上原料炭貿易の58%をオーストラリアが占める[出典](https://en.wikipedia.org/wiki/Metallurgical_coal)。価格は2022年3月に635.00ドル/tの過去最高を記録し、2026年8月6日時点で215.50ドル/tである[出典](https://tradingeconomics.com/commodity/coking-coal)。対照的に鉄鉱石は2021年7月に219.77ドル/tの過去最高をつけた後、2026年8月6日には95.28ドル/tまで下げ、ピーク比56.6%安である[出典](https://tradingeconomics.com/commodity/iron-ore)。鉄鉱石も供給は集中しており、オーストラリアとブラジルで海上貿易の72%、BHPとRio TintoとValeの3社で66%を占める[出典](https://en.wikipedia.org/wiki/Iron_ore)。それでも価格が半減したのは、この3社が増産で応じたためと解釈できる。集中しているかどうかではなく、価格上昇に増産で応じるかどうかが弾力性を決めている。半導体で同じ位置にあるのは、供給者が1社に近い露光装置である。

## この章の要点

- 1976年から1979年の日米は、どちらも国家資金を半導体に投じていた。差は金額ではなく配り方であり、日本は組合という法人に流し、米国は反トラスト規制の下で大学と個別契約に流した
- 米国が組合型を作れなかった主因は法制度である。1984年のNational Cooperative Research Actで規制が緩和され、1987年にSEMATECHが成立したという順序がこれを裏づける
- 1981年の日米の資本コスト差は12.6ポイントから13.4ポイントあり、DRAMという設備先行型事業の投資判断を分けた。ただし日本のシェアが首位に立った1986年には差が5.3ポイント程度に縮んでおり、金利差は引き金であって持続要因ではない
- 貯蓄超過と銀行主導という資金供給の配管は1980年代日本と現在の中国で同型だが、需要側の出口が世界市場か国内市場かと、制約が市場アクセスか技術禁輸かが異なる。帰結の外挿は成立しない
- フェアチャイルドから直接たどれる半導体企業は1986年版の系譜図で126社だが、独立上場企業として残ったのはインテルとAMDの2社である。フェアチャイルド本体は2016年に24億ドルで買収され社名が消えた
- インテルのDRAMシェアは1984年に数パーセント以下まで落ちた。撤退決定の時点で8工場のうちメモリを作っていたのは1つで、社内の資源配分ルールが経営判断より先に事業の生死を決めていた
- DARPAは株式を取らず契約と助成で資金を出し、市場規模と競合優位を審査基準に置かない。プログラムマネージャーの在任は3年から5年で年約25%が入れ替わる。既存大手に資金を固定しない設計が、日本の組合型と逆の産業構造を生んだ
- 需要爆発の局面では株価のピークが実物投資のピークに先行する。1840年代英国では株価が1845年半ば、実物投資が1847年にピークをつけ、素材側の受注は2年遅れて崩れた
- 規制産業であることは暴落を防がない。ダウ・ジョーンズ公益株平均は1929年末から1934年末に79.8%下げた。壊れるかどうかを決めるのは収益が規制価格で決まるかどうかと、レバレッジの倍率である

## 残っている問い

- 金利差が日本の半導体競争力に何ポイント寄与したかを定量的に分解した分析は見つからなかった。分解には日米主要メーカーの1978年から1986年の有利子負債残高、平均調達金利、設備投資額、資本構成の時系列が必要である
- 1986年の日米半導体協定の一次テキストと、米国会計検査院による同協定の評価報告に到達できなかった
- 日本の1980年代の家計貯蓄率について、内閣府の国民経済計算による年次系列を直接取得できていない。1970年代半ばに20%を超え、1980年頃は15%超という水準は二次資料で確認したが、本章の貯蓄比較は依然として国内総貯蓄の対GDP比で代替している
- 日本の半導体世界シェアのピークについて、1988年50.3%という値は複数の業界資料が一致して用いている一方、1986年46%とする記述も残る。両者を同一系列で接続した統計元の開示に到達できていない
- インテルのDRAMシェアが1984年に1.3%だったのか2%から3%だったのかは確定できていない。1.7%という値には一次資料が見当たらない
- ヒューレット・パッカードが1980年3月に報告した日米の16キロビットRAMの不良率の具体的な数値は一次資料で確認できていない
- モリス・チャンがテキサス・インスツルメンツ在籍中にファウンドリ構想を社内提案したとされる1976年の社内文書を確認できていない
- ソニーとウエスタン・エレクトリックのトランジスタ特許実施権契約の金額条件は一次資料で確認できていない
- FPVドローンの部材ごとの単価と、防衛装備庁の迎撃ドローン早期取得プログラムの調達数量と価格帯は、参照先がHTTP 403で取得できず未確認である
- 日本の想定するドローン調達数量が公表資料から確認できていないため、量産効果が働く桁に届くかどうかを判定できない
- 熱風炉によるコスト低下が製鉄株のバブルを抑えたという説明を裏づける同時代の株価データは取得できていない
- 脱炭素方針が新規原料炭鉱山への投資を細らせているという説明の定量的裏づけが未確認である。日本の石炭輸入は2025年で1.63億トン、うち豪州が1.07億トンの65.8%、インドネシアが0.27億トンの16.7% を占め、原料炭は2023年度で消費量の99.6% を輸入に頼り、国内生産は1991年度に途絶えている。黒鉛電極は2026年市場が前年比約5%増の47.1億ドルと見込まれ、東海カーボンが2025年に10%の値上げを実施したが、ニードルコークスの価格系列そのものは取得できていない

## 出典

1. 超LSI技術研究組合 — Wikipedia日本語版 — https://ja.wikipedia.org/wiki/%E8%B6%85LSI%E6%8A%80%E8%A1%93%E7%A0%94%E7%A9%B6%E7%B5%84%E5%90%88
2. 日経クロステック「電子産業史 1979年 超エル・エス・アイ技術研究組合」 — https://xtech.nikkei.com/dm/article/COLUMN/20080801/155928/
3. 日米半導体協定 — Wikipedia日本語版 — https://ja.wikipedia.org/wiki/%E6%97%A5%E7%B1%B3%E5%8D%8A%E5%B0%8E%E4%BD%93%E5%8D%94%E5%AE%9A
4. Very High Speed Integrated Circuit Program — Wikipedia — https://en.wikipedia.org/wiki/Very_High_Speed_Integrated_Circuit_Program
5. VLSI Project — Wikipedia — https://en.wikipedia.org/wiki/VLSI_Project
6. SEMATECH — Wikipedia — https://en.wikipedia.org/wiki/SEMATECH
7. National Cooperative Research and Production Act — Wikipedia — https://en.wikipedia.org/wiki/National_Cooperative_Research_Act
8. 日本銀行 基準割引率および基準貸付利率の推移 — https://www.boj.or.jp/statistics/boj/other/discount/discount.htm
9. World Bank 世界開発指標 FR.INR.LEND 貸出金利 — https://api.worldbank.org/v2/country/JPN;USA/indicator/FR.INR.LEND?format=json&date=1976:1995&per_page=300
10. World Bank 世界開発指標 NY.GDS.TOTL.ZS 国内総貯蓄 対GDP比 — https://api.worldbank.org/v2/country/JPN;USA;CHN/indicator/NY.GDS.TOTL.ZS?format=json&date=1976:2023&per_page=300
11. Volcker shock — Wikipedia — https://en.wikipedia.org/wiki/Volcker_shock
12. China Integrated Circuit Industry Investment Fund — Wikipedia — https://en.wikipedia.org/wiki/China_Integrated_Circuit_Industry_Investment_Fund
13. 総務省「令和3年版 情報通信白書 我が国ICT産業の世界的な位置付けの推移」 — https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r03/html/nd105120.html
14. Computer History Museum「Fairchild, Fairchildren, and the Family Tree of Silicon Valley」 — https://computerhistory.org/blog/fairchild-and-the-fairchildren/
15. Computer History Museum「Spinoff: Fairchild & the Family Tree of Silicon Valley」 — https://computerhistory.org/stories/spinoff-fairchild/
16. ON Semiconductor「ON Semiconductor Successfully Completes Acquisition of Fairchild Semiconductor」 — https://investor.onsemi.com/static-files/e017bd8c-1422-4095-92b0-8aefa616a40e
17. Texas Instruments Form 8-K Exhibit 99.1、SEC EDGAR — https://www.sec.gov/Archives/edgar/data/0000097476/000119312511088304/dex991.htm
18. Renesas Electronics「Renesas Electronics Completes Acquisition of Intersil」 — https://www.renesas.com/en/about/press-room/renesas-electronics-completes-acquisition-intersil
19. Avago Technologies「Avago Technologies Completes Acquisition of LSI Corporation」 — https://www.globenewswire.com/news-release/2014/05/06/633503/19933/en/Avago-Technologies-Completes-Acquisition-of-LSI-Corporation.html
20. Intel「A New Company is Born」Intel Timeline — https://timeline.intel.com/1968/a-new-company-is-born
21. Intel「Farewell to DRAM」Intel Timeline — https://timeline.intel.com/1985/farewell-to-dram
22. Intel Investor Relations「Andrew S. Grove 1936 – 2016」 — https://www.intc.com/news-events/press-releases/detail/284/andrew-s-grove-1936-2016
23. IEEE Spectrum「Morris Chang: Foundry Father」 — https://spectrum.ieee.org/morris-chang-foundry-father
24. Construction Physics「Morris Chang and the Origins of TSMC」 — https://www.construction-physics.com/p/morris-chang-and-the-origins-of-tsmc
25. TSMC「TSMC Reports Fourth Quarter EPS of NT$19.50」 — https://pr.tsmc.com/english/news/3281
26. History of Information「Jerry Sanders and Colleagues from Fairchild Semiconductor Found AMD」 — https://historyofinformation.com/detail.php?id=879
27. Huawei「Mr. Ren Zhengfei」 — https://www.huawei.com/en/executives/board-of-directors/ren-zhengfei
28. Huawei「Huawei Releases 2024 Annual Report」 — https://www.huawei.com/en/news/2025/3/annual-report-2024
29. Stanford GSB「Fading Memories: A Process Theory of Strategic Business Exit in Dynamic Environments」 — https://www.gsb.stanford.edu/faculty-research/publications/fading-memories-process-theory-strategic-business-exit-dynamic
30. Commoncog Case Library「Intel's Near Death Moment」 — https://commoncog.com/c/cases/intel-transition-memories-processors/
31. Richard Rumelt「Intel's Fall From Grace」 — https://rumelt.substack.com/p/intels-fall-from-grace
32. 半導体歴史館「80s Trends in the Semiconductor Industry」 — http://www.shmj.or.jp/english/trends/trd80s.html
33. Alicia Patterson Foundation、T. R. Reid「Meet Dr. Deming, Corporate America's Newest Guru」 — https://aliciapatterson.org/t-r-reid/meet-dr-deming-corporate-americas-newest-guruc/
34. About DARPA — https://www.darpa.mil/about
35. The Heilmeier Catechism、DARPA — https://www.darpa.mil/about/heilmeier-catechism
36. Careers、DARPA — https://www.darpa.mil/careers
37. Work With Us、DARPA — https://www.darpa.mil/work-with-us
38. DARPA — Wikipedia — https://en.wikipedia.org/wiki/DARPA
39. Aerial warfare in the Russo-Ukrainian war — Wikipedia — https://en.wikipedia.org/wiki/Aerial_warfare_in_the_Russo-Ukrainian_war
40. Sting drone — Wikipedia — https://en.wikipedia.org/wiki/Sting_(drone)
41. Executive Order 14307 Unleashing American Drone Dominance、The White House — https://www.whitehouse.gov/presidential-actions/2025/06/unleashing-american-drone-dominance/
42. Blue UAS Cleared List、Defense Innovation Unit — https://www.diu.mil/blue-uas-cleared-list
43. 防衛装備庁 — Wikipedia — https://ja.wikipedia.org/wiki/防衛装備庁
44. 防衛イノベーション科学技術研究所 — Wikipedia — https://ja.wikipedia.org/wiki/防衛イノベーション科学技術研究所
45. Railway Mania — Wikipedia — https://en.wikipedia.org/wiki/Railway_Mania
46. Andrew Odlyzko「Charles Mackay's own extraordinary popular delusions and the Railway Mania」 — https://www-users.cse.umn.edu/~odlyzko/doc/mania04.pdf
47. Andrew Odlyzko「This time is different: An example of a giant, wildly speculative, and successful investment mania」 — https://www-users.cse.umn.edu/~odlyzko/doc/mania01.pdf
48. Panic of 1873 — Wikipedia — https://en.wikipedia.org/wiki/Panic_of_1873
49. U.S. Steel — Wikipedia — https://en.wikipedia.org/wiki/U.S._Steel
50. Hot blast — Wikipedia — https://en.wikipedia.org/wiki/Hot_blast
51. Dow Jones Utility Average — Wikipedia — https://en.wikipedia.org/wiki/Dow_Jones_Utility_Average
52. Public Utility Holding Company Act of 1935 — Wikipedia — https://en.wikipedia.org/wiki/Public_Utility_Holding_Company_Act_of_1935
53. Samuel Insull — Wikipedia — https://en.wikipedia.org/wiki/Samuel_Insull
54. Utilities Select Sector SPDR Fund — StockAnalysis — https://stockanalysis.com/etf/xlu/
55. Constellation Energy — StockAnalysis — https://stockanalysis.com/stocks/ceg/
56. Vistra — StockAnalysis — https://stockanalysis.com/stocks/vst/
57. Coking Coal — Trading Economics — https://tradingeconomics.com/commodity/coking-coal
58. Iron Ore — Trading Economics — https://tradingeconomics.com/commodity/iron-ore
59. Metallurgical coal — Wikipedia — https://en.wikipedia.org/wiki/Metallurgical_coal
60. Iron ore — Wikipedia — https://en.wikipedia.org/wiki/Iron_ore
61. Coke (fuel) — Wikipedia — https://en.wikipedia.org/wiki/Coke_(fuel)

数値の取得時点はいずれも2026年8月7日である。
