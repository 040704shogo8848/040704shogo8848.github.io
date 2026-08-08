---
section: science
chapter: 3
slug: measuring-living-systems
title: 生命と集団を測る
thesis: 生体も組織も測定装置の精度と条件設定に結果が左右されるため、数値そのものより、その数値がどの条件下で意味を持つかを先に確かめる必要がある。
---

腕時計は昨夜の深い睡眠を78分と表示する。センサーは血糖値を5分ごとに報告する。コンサルティングファームのレポートは、経営陣が多様な企業のほうが利益率が高いと述べる。製薬企業は第1相の良好な結果を発表する。これらはすべて数値であり、単位が付いていて、比較できるように見える。

しかし、この4つの数値はどれも、測定の条件を外すと意味を失う。深い睡眠78分は、その機種が脳波を測っていないという前提の上に乗っている。血糖値の変動は、健常者がもともと狭い範囲に収まっているという分布の上でしか解釈できない。多様性と利益率の相関は、サンプルを誰が選んだかで消える。==第1相の成功は、その次の段階の通過率が別の理由で決まることを教えてくれない==。

この章が扱うのは、生命と集団という2つの対象に共通する測定の問題である。どちらも直接は測れない。血糖も睡眠段階も集団の賢さも、代理となる別の量を測って推定している。推定である以上、参照との一致率と、推定が成り立つ条件がある。数値を読む前に条件を読む習慣がないと、測定系の違いを対象の違いとして読み違える。

## 情報として読む生命の仕組み

生命の仕組みを情報の流れとして捉えると、介入できる階層が3つに分かれる。遺伝情報はDNAに保存され、RNAに写し取られ、タンパク質として機能する。遺伝子編集はDNAそのものを書き換える。siRNAやアンチセンス核酸はRNAの段階で止める。従来型の低分子薬と抗体はタンパク質に作用する。

階層が上流であるほど、1回の投与で効果が持続しやすい。同時に、誤った編集が元に戻らないという不可逆性を抱える。この対比が、上流への介入が承認薬として世に出るまで時間を要した理由である。

遺伝子編集の到達点は、ひとまとまりに語れない。3つの層に分けて見る必要がある。

第1の層は、体外で編集して体に戻す ex vivo 型で、すでに承認済みである。患者から造血幹細胞を取り出し、体外で CRISPR/Cas9 により BCL11A を編集し、胎児ヘモグロビンの産生を上げてから患者に戻す設計の Casgevy が該当する。欧州医薬品庁は2024年2月9日に、輸血依存性βサラセミアと重症鎌状赤血球症を対象として12歳以上に条件付き承認を与えた [出典](https://www.ema.europa.eu/en/medicines/human/EPAR/casgevy)。承認時の有効性データは、βサラセミアで42人中39人が12か月以上にわたり輸血なしでヘモグロビン9g/dL超を維持し、鎌状赤血球症で29人中28人が12か月以上にわたり疼痛発作ゼロを達成したというものである [出典](https://www.ema.europa.eu/en/medicines/human/EPAR/casgevy)。追跡例数を増やした2026年6月公表の解析では、βサラセミアで56人中55人が12か月以上の輸血非依存を達成している [出典](https://pubmed.ncbi.nlm.nih.gov/42252696/)。

第2の層は、体内に直接投与する in vivo 型で、後期臨床の段階にある。脂質ナノ粒子で編集装置を肝臓に送り込む NTLA-2001 は、第1相を72人で完了したのち、トランスサイレチンアミロイドーシス心筋症を対象とする1,200人規模の第3相を2023年12月13日から実施中であり、主要評価項目の完了予定は2027年12月である [出典](https://clinicaltrials.gov/api/v2/studies?query.term=NTLA-2001)。遺伝性血管性浮腫を対象とする NTLA-2002 は80人規模の第3相で、主要評価項目の完了予定が2026年2月10日であり、体内編集としては承認申請に最も近い [出典](https://clinicaltrials.gov/api/v2/studies?query.term=NTLA-2002)。

第3の層は、次世代の編集手法で、初期臨床にとどまる。DNAを切断せず1塩基を化学的に変換する塩基編集では、PCSK9 を標的とする VERVE-102 が85人規模の第1相を2024年4月30日から実施している [出典](https://clinicaltrials.gov/api/v2/studies?query.term=VERVE-102)。挿入や置換を狙うプライム編集では、慢性肉芽腫症を対象とする PM359 の第1/2相が2024年10月17日に開始され、ウィルソン病を対象とする PM577 の第1/2相が2026年8月開始予定である。プライム編集の登録臨床試験は3件のみである [出典](https://clinicaltrials.gov/api/v2/studies?query.term=prime%20editing)。

ここで一般に流通している理解を2つ訂正しておく。ひとつは、CRISPR による治療とは体に注射して遺伝子を治すものだという理解である。承認済みの Casgevy は体外編集型であり、体内投与型の承認品は2026年8月時点で存在しない。もうひとつは、CRISPR が狙った遺伝子を望む配列に書き換える技術だという理解である。初代の CRISPR/Cas9 が行うのはDNAの切断であり、Casgevy は BCL11A の機能を壊して胎児ヘモグロビンの抑制を外す設計である。書き換えではなく破壊による治療にあたる [出典](https://www.ema.europa.eu/en/medicines/human/EPAR/casgevy)。狙った配列への置換や挿入を担うのは塩基編集とプライム編集であり、これらはまだ第1相と第1/2相の段階にある。

この3層に加えて、2025年に新しい軸が立った。カルバモイルリン酸合成酵素1欠損症の新生児に対し、その患者固有の変異に合わせた塩基編集治療を設計し、生後約7か月と8か月の2回投与した症例が報告されている。初回投与から7週間以内に、タンパク質摂取量を増やし、窒素排泄薬を半量に減らせている [出典](https://pubmed.ncbi.nlm.nih.gov/40373211/)。患者1人のために設計された治療が規制当局の手続きを経て投与された点に、産業構造上の含意がある。ただしこれは1症例の報告であり、有効性が集団に対して検証された段階ではない。

## 連続計測が変えたものと変えなかったもの

上の話は、専門機関の中で行われる測定である。ここからは、消費者が自分の体に対して行う測定に移る。この20年で変わったのは、臨床検査と同じ用語を出力する装置が個人の手元に来たことである。腕時計とリングは深い睡眠とREMを分単位で表示し、店頭で買える連続血糖測定器は血糖値を5分刻みで表示する。

==表示される単位は臨床検査と同一だが、測定原理は同一ではない==。睡眠段階の臨床基準は、脳波と眼電図と筋電図を組み合わせた終夜睡眠ポリグラフ検査であり、30秒のエポックごとに判定する。消費者向け機器はこれらの電気信号を測らない。体動と、光電容積脈波から得られる心拍および心拍変動から段階を推定する。連続血糖測定器も、血液ではなく皮下間質液のグルコースを測っている。

==したがって、これらの機器が変えたのは測定の対象ではなく、測定の頻度と場所である==。年に1回の健診が毎日の連続記録に置き換わった。==一方で変えなかったのは、測っているものが参照基準そのものではないという事実である==。推定である以上、参照との一致率が問題になる。

一致率は機種によって異なる。韓国の2施設で実施された前向き多施設研究は、消費者向け睡眠トラッカー11機種を同時に終夜睡眠ポリグラフ検査と突き合わせた。参加者は75人、平均年齢は43.59歳、標準偏差は14.10であり、解析対象は349,114エポックである。参加者のうち37人は睡眠障害の検査予定者、38人は主観的な睡眠の不調を持つ一般募集者だった [出典](https://pubmed.ncbi.nlm.nih.gov/37917155/)。

4段階分類のマクロF1は次のとおりである [出典](https://pmc.ncbi.nlm.nih.gov/articles/PMC10654909/)。

| 機種 | 形態 | 4段階マクロF1 |
| --- | --- | --- |
| SleepRoutine | アプリ | 0.6863 |
| Amazon Halo Rise | 据置 | 0.6242 |
| Fitbit Sense 2 | 装着 | 0.5814 |
| Galaxy Watch 5 | 装着 | 0.5761 |
| Google Pixel Watch | 装着 | 0.5669 |
| Oura Ring 3 | 装着 | 0.5186 |
| Apple Watch 8 | 装着 | 0.4910 |
| Withings Sleep Mat | 据置 | 0.4496 |
| SleepScore | アプリ | 0.4049 |
| Google Nest Hub 2 | 据置 | 0.3009 |
| Pillow | アプリ | 0.2588 |

最高値と最低値の比は2.65倍である。この差の構造には注意が要る。装着型5機種の範囲は0.4910から0.5814であり、その比は1.18倍にとどまる。アプリ型3機種の範囲は0.2588から0.6863であり、比は2.65倍に達する。腕時計は正確でアプリは不正確という整理は成り立たない。最高値を取ったのはアプリ型の SleepRoutine である。

集計指標のずれも機種依存である。睡眠効率のバイアスは Galaxy Watch 5 がマイナス0.4ポイント、Google Pixel Watch がプラス12.8ポイントだった。入眠潜時のバイアスは Apple Watch 8 がマイナス0.81分、Google Nest Hub 2 がプラス39.42分である。同じ一晩に対して、入眠潜時の推定が40分以上ずれる機種の組み合わせが存在する。

判定の偏り方にも構造がある。Fitbit 機種を対象にした22本のレビューでは、睡眠段階推定を持たない旧世代の特異度は0.10から0.52、段階推定を持つ新世代でも0.58から0.69にとどまる。感度は新世代で0.95から0.96である [出典](https://pubmed.ncbi.nlm.nih.gov/31778122/)。感度が高く特異度が低いという偏りは、機器が寝ていると判定しすぎることを意味する。旧世代の Fitbit では、総睡眠時間を7分から67分過大に、中途覚醒時間を6分から44分過小に推定していた。

ここから導かれる使い方の線引きは明確である。睡眠と覚醒の二値判定は多くの機種で実用水準にある。==4段階の推定は機種間の性能差が2.65倍あり、深睡眠とREMの分数を機種を跨いで比較する使い方は成立しない==。同一機種内で夜ごとの相対変化を追う用途に限れば、測定誤差の方向が一定であるため情報として使える。

なお、各社が表示する睡眠スコアは、参照基準との一致率とは別の合成指標である。4段階マクロF1が0.2588の機種も、0.6863の機種と同じようにスコアを表示する。スコアの高低と参照一致率は別々に評価する必要がある。

連続血糖測定については、精度ではなく分布の側に論点がある。7歳から80歳の健常非糖尿病者153人に Dexcom G6 を最長10日装着した多施設前向き研究では、平均血糖は60歳以下の全年齢層で98から99 mg/dL、60歳超で104 mg/dLだった。70から140 mg/dL の範囲に滞在する時間の中央値は96%であり、四分位範囲は93%から98%である。140 mg/dL を超える時間は中央値2.1%で、1日あたり30分に相当する。70 mg/dL 未満は1.1%で、1日あたり15分である。個人内変動係数は17%、その標準偏差は3%だった [出典](https://pubmed.ncbi.nlm.nih.gov/31127824/)。

滞在時間の中央値が96%であるという事実は、改善で動かせる余地が残り4%であることを意味する。測定の精度が十分でも、対象の分布が狭ければ、指標としての情報量は小さくなる。

同時に、標準検査で正常と判定される人の中にも変動パターンの差は存在する。糖尿病の診断歴がない57人に Dexcom G4 を2週から4週装着した研究では、2.5時間の窓で見た波形を3つのクラスターに分類した。標準基準で正常血糖と判定された38人のうち、変動の大きい群は監視時間の約15%を140 mg/dL 超で、約2%を200 mg/dL 超で過ごしていた。標準化した食事の後にこれらの範囲に入った正常判定者は16人である [出典](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.2005143)。この研究が示したのは分類が存在することであり、分類と将来の疾患発症を結びつけた追跡ではない。

## 精度と再現性をどこまで疑うか

前節までで見たのは、装置の精度という意味での測定誤差である。集団を測る場面では、装置ではなく解析の設計が同じ役割を果たす。誰がサンプルを選んだか、どの指標で評価したか、モデルの前提をどこに置いたか。これらが結果を左右する点で、センサーの原理と変わらない。

企業レベルの多様性と業績の関係は、この問題の典型例である。Green と Hand は、McKinsey が2015年、2018年、2020年、2023年に公表した Diversity Matters シリーズが示した、経営陣の人種民族多様性と業種調整後EBITマージンの正の関係を検証した。指摘は2点ある。McKinsey が自社で選定したサンプルを使っているため独立検証ができないこと、そして検定が逆向きの因果を取っていることである。2019年12月31日時点のS&P 500構成企業と2020年半ばの経営陣構成を使って追試したところ、業種調整後EBITマージン、売上成長、粗利率、ROA、ROE、株主総利回りのいずれについても統計的に有意な関係は見いだせなかった [出典](https://econjwatch.org/1352)。

同じ疑い方をシミュレーション研究にも向けられる。多様性が能力に勝つという主張の形式的な根拠は Hong and Page 2004 の定理である。その内容は、問題解決エージェントが問題の表現と探索アルゴリズムを持つとき、多様な母集団からランダムに選んだチームが、成績上位者を集めたチームを上回るというものである。この結果を支えている直観は、母集団が大きくなるほど成績最上位のエージェントどうしが問題解決者の空間の中で似てくるという点にある [出典](https://doi.org/10.1073/pnas.0403723101)。

つまり、負ける原因は優秀であること自体ではない。単一のスコアで大きな母集団から上位を切り出すという選抜手続きにある。2024年の書評シンポジウムで Kai Spiekermann が行った再現では、最良のヒューリスティクスはわずか6種類のステップ数の順列にすぎなかったのに対し、ランダムに構成した集団は可能なステップ長のすべて、または大半を含んでいた [出典](https://link.springer.com/article/10.1007/s11615-024-00550-1)。

モデルの結果が前提にどれだけ敏感かも検証されている。Grim らは Hong and Page のモデルを、ランダム性の度合いが異なる地形に拡張し、多様性が能力に勝つという結果の感度の高さを示した。結論として、この種のモデルは多様性政策にとって示唆的でありうるが、そうした結果を過度に広く解釈することは勧めない、と述べている [出典](https://doi.org/10.1086/701070)。Grim らはまた、このモデルの専門性という語が1つの問題で好成績を出すことに限定されている点を問題視し、複数の類似問題での成功に定義を変えると結果が変わると指摘している。

定理の数学的内容そのものへの批判も存在する。Abigail Thompson は2014年の Notices of the AMS で、この定理を数学の誤用の例として論じた [出典](https://doi.org/10.1090/noti1163)。ただし Thompson の原文は ams.org が HTTP 403 を返して取得できておらず、内容の把握は上記シンポジウムの要約という二次情報にとどまる。同シンポジウムは Thompson の主張を、定理が自明または冗長だとするものとして紹介し、あわせて Romaniega の批判として、無限個のランダムな問題解決者を組み込むことから自明に従う結果である、という論点を挙げている。この評価は一次資料で確認できていないため、本章でも断定しない。

現場実験の水準では、効果量の小ささと推定の不安定さが確認できる。Hoogendoorn、Oosterbeek、van Praag はアムステルダムの学生に事業チームを組ませ、性別を条件としたランダム配分を行った。分析対象は43チームで、女性比率0.2から0.6の区間に観測が集中している。この区間では、性別が均等なチームは男性優位のチームより売上と利益が高かった。ただし女性比率を0.3から0.4に上げたときの売上増は225ユーロにとどまる。全チームの平均売上は838ユーロ、標準偏差は707ユーロであり、増分は標準偏差の3分の1に満たない。OLSの推定値は外れ値の影響を受けており、中央値回帰とロバスト回帰では推定値がおおむね半減する。著者らは補完性、学習、相互監視、対立という既存の説明メカニズムを検証し、いずれも支持を得られなかったと述べている [出典](https://papers.tinbergen.nl/11074.pdf)。

疑い方の型をまとめると、次の4つになる。サンプルを誰が選んだかを見る。効果量を対象のばらつきと比べる。推定手法を変えても結果が残るかを見る。モデルの前提を動かしたときの感度を見る。この4つは、睡眠トラッカーの参照一致率を見るのと同じ作業である。

## 条件付きで成り立つ主張の扱い方

ここまでの3節は、いずれも同じ形の結論に至っている。主張が偽なのではなく、主張が成立する条件が限定されている。条件付きの主張を扱う技術は、条件を明示して保存することに尽きる。条件を落として要約すると、主張は反証可能性を失いながら適用範囲だけが広がる。

多様性の効果は、この扱い方を練習するのに適した題材である。根拠は3層に分かれている。第1層は形式モデルで、Hong and Page の定理がこれにあたる。第2層は実験室と現場での因果実験である。第3層は企業の財務指標との相関である。第1層は数学的主張であって組織への含意ではない。第3層は相関であって因果ではない。層を混ぜて科学が証明したと述べると、批判に耐えない。

効く条件を第2層の実験から取り出すと、次の4つが挙がる。

第1に、能力差が小さい課題であること。Luan、Katsikopoulos、Reimer のシミュレーションは、手がかりの妥当性の分布が異なる4つの環境で、精度の高い Take-the-Best を使う集団と、探索順序がばらばらで個人精度の低い Minimalist を使う集団を比較した。手がかりの質に差がない環境では、集団サイズが4を超えると Minimalist 集団が Take-the-Best 集団を上回った。手がかりの質の差が大きい環境では、Minimalist 100人の集団が単独の Take-the-Best 1人に届かなかった [出典](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0031043)。多様性が能力に勝つかどうかを決めているのは、集団の側ではなく課題の側の性質である。

第2に、個人の誤りが互いに独立していること。Levine らは東南アジアと北米で実験市場を構築し、参加者を民族的に同質な市場と多様な市場にランダムに配分した。多様な市場では市場価格と本源的価値の適合が58%良く、同質な市場では取引参加者の価格誤差の相関が高かった [出典](https://doi.org/10.1073/pnas.1407301111)。ここで効いているのは視点の豊富さではなく、他者の判断を無批判に受け入れないという摩擦である。

第3に、討議のプロセスが実際に情報を引き出す設計になっていること。Sommers の模擬陪審実験では、多様な陪審は同質な陪審より広い範囲の情報を交換した。この効果は黒人参加者の発言だけでは説明できない。白人参加者自身が、多様な集団では事実をより多く引用し、誤りが少なく、人種問題の議論に応じやすかった [出典](https://doi.org/10.1037/0022-3514.90.4.597)。多様性が誰の行動を変えるのかが論点になる。

第4に、成果を規定するのが構成ではなく相互作用であること。Woolley らは699人を2人から5人の集団に分け、多様な課題を実施して、集団の成績を説明する一般因子を検出した。この因子は構成員の平均知能とも最高知能とも強くは相関せず、社会的感受性の平均、発言順番の均等さ、女性比率と相関した [出典](https://doi.org/10.1126/science.1193147)。

効かない条件も同じ数だけ挙がる。能力差が大きく優劣の順序が明確な課題。正解が定義できない課題。属性の断層が顕在化していて課題が単純な場面。企業の財務相関を根拠にする場面である。2番目については、Hong and Page のモデルが、値を最大化する探索課題で最適解が見つかれば即座に認識できることを前提としている点が効いてくる。2024年のシンポジウムで Lisa Herzog は、この定理が討議をまったくモデル化していないと指摘し、規範的判断を含む政治的決定への適用を限定した。Charles Girard は多様性の認識論的効果が文脈依存性の高いものだとし、多様性の増加が特定の論点での平均的な能力の低下や分極化のリスクを伴う場合があると述べている [出典](https://link.springer.com/article/10.1007/s11615-024-00550-1)。

3番目については、van Knippenberg、De Dreu、Homan の categorization-elaboration model が枠組みを与える。同じ属性の多様性が、情報の精緻化を通じて成果を上げる経路と、内集団と外集団の区別を通じて成果を下げる経路の両方を持つ。どちらが優勢になるかの調整変数として、課題の複雑さ、認知欲求、多様性への信念、カテゴリー差異の顕在性が挙げられている [出典](https://research.vu.nl/ws/files/2734382/Knippenberg%20Journal%20of%20Applied%20Psychology%2089%286%29%202004%20u.pdf)。属性の多様性と職務関連の多様性を同じものとして扱えないのは、この二重経路が理由である。

同じ整理を、消費者向け連続血糖測定に対して行うとどうなるか。指標として意味があると言うには2つが要る。測定値が変えるべき行動に一対一で対応すること、そしてその行動変化がアウトカムを動かすことである。

前者は部分的に成立する。個人ごとの食後反応の差は可視化される。後者は未検証である。無作為化比較試験25本、参加者2,996人のメタ解析では、連続血糖測定によるフィードバック介入はHbA1cを0.28%低下させ、95%信頼区間は0.15から0.42、I2は88%だった。目標範囲内時間は7.4ポイント増加し、95%信頼区間は2.0から12.8、I2は80.5%である。ただし対象集団の内訳は、2型糖尿病が17本で68%、1型糖尿病が3本で12%、妊娠糖尿病が3本で12%、肥満が3本で12%である。非糖尿病者に該当するのは肥満を対象とした3本のみであり、BMIと体重には有意な効果が出ていない。食事の変化を評価したのは25本中4本、身体活動を評価したのは25本中5本にとどまる [出典](https://pubmed.ncbi.nlm.nih.gov/39716288/)。効果の主体はHbA1cという糖尿病特有の指標であり、非糖尿病者にはこの指標が意思決定に結びつかない。

血糖スパイクの害についても、査読文献と一般向け情報の主張が一致していない。医学研究11本と一般向け情報48本を比較したスコーピングレビューでは、両者とも非糖尿病者または血管内皮細胞における内皮機能障害、酸化ストレス、炎症を報告していた。一般向け情報のみが、癌リスクの増加、精神状態、エネルギー、気分、睡眠への影響を追加で主張していた。レビューの結論は、健康アウトカムに影響するのは長期にわたる頻回のスパイクであり、単発の急性スパイクではないというものである [出典](https://pubmed.ncbi.nlm.nih.gov/41170150/)。

多様性と連続血糖測定は、対象も分野も異なる。それでも条件の構造は同じである。測れることと、測った値が意思決定に結びつくことは別の命題であり、後者には別の証拠が要る。

## 産業の律速段階を見抜く

条件の見極めは、投資判断や事業判断でも同じ形で働く。売上がゼロでも時価総額が数千億円つくバイオテック企業があり、その差を説明しているのは財務諸表ではなく開発パイプラインの科学的な確度である。確度を読むには、候補品がどの段階で何割落ちるかを知る必要がある。

2000年1月から2015年10月までの406,038件の臨床試験データを対象とした解析では、各段階の移行率は次のとおりである [出典](https://pmc.ncbi.nlm.nih.gov/articles/PMC6409418/)。

| 段階 | 移行率 |
| --- | --- |
| 第1相から第2相 | 66.4% |
| 第2相から第3相 | 58.3% |
| 第3相から承認 | 59.0% |
| 第1相から承認までの通算 | 13.8% |
| 腫瘍領域の通算 | 3.4% |

移行率だけを見ると、第2相と第3相の差は0.7ポイントしかない。それでも律速段階は第2相にある。理由は通過率ではなく、通過率と投下費用の積にある。第2相は少数例で有効性を初めて検証する段階であり、ここを通した候補が第3相で数百人規模の費用を負担する。承認1件あたりの資本化済み研究開発費は中央値9億8,530万ドル、平均13億3,590万ドルであり、抗腫瘍薬と免疫調節薬に限れば中央値27億7,160万ドルに達する [出典](https://pmc.ncbi.nlm.nih.gov/articles/PMC7054832/)。この額の大半は、失敗した候補品の費用を承認品が負担した結果である。腫瘍領域の通算通過率3.4%と中央値27億7,160万ドルは、同じ現象の裏表にあたる。

化合物の探索が律速でないことは、AI創薬の実績から確認できる。AI由来分子の第1相成功率は80%から90%であり、業界平均を上回る。一方で第2相の成功率は約40%にとどまり、業界平均と同水準である [出典](https://pubmed.ncbi.nlm.nih.gov/38692505/)。分子設計の質を上げると第1相の安全性と薬物動態は改善するが、第2相の有効性は改善しない。第2相で問われているのが分子の性質ではなく、標的そのものが疾患を駆動しているかという生物学的な仮説の当否だからである。なおこの第2相の約40%という数字は、限られた検体数に基づくと著者自身が注記しており、確定値として扱えない [出典](https://pubmed.ncbi.nlm.nih.gov/38692505/)。

この構造を踏まえると、遺伝子編集が持つ意味が定まる。Casgevy の標的である BCL11A は、胎児ヘモグロビンの発現を抑制するという機能がヒト遺伝学から確立している [出典](https://www.ema.europa.eu/en/medicines/human/EPAR/casgevy)。単一遺伝子疾患を対象とする限り、標的仮説が外れるリスクは低い。逆に言えば、多因子疾患に遺伝子編集を適用しようとした時点で、従来の創薬と同じ第2相の壁に直面する。技術が変わっても、律速段階は仮説の当否のまま残る。

事業としての現在地は、技術ではなく価格と対象人数で規定されている。米国での表示価格は exa-cel が220万ドル、lovo-cel が310万ドルである [出典](https://pubmed.ncbi.nlm.nih.gov/39982606/)。ICER が2023年8月に示した費用対効果上の価格帯は135万ドルから205万ドルであり、表示価格はこの上限を超えている [出典](https://icer.org/assessment/sickle-cell-disease-2023/)。ただし2026年2月公表のマルコフモデルでは、反復性血管閉塞発作を持つ患者に限れば、支払者視点の増分費用効果比は割引後QALYあたり16,800ドルと算出されている [出典](https://pubmed.ncbi.nlm.nih.gov/41730016/)。対象を絞れば費用対効果が成立しうるという結果であり、これもまた条件付きの主張である。同じ薬でも、誰を対象にするかを変えると評価が反転する。

## この章の要点

- 睡眠段階と血糖は直接測られていない。体動と脈波、あるいは皮下間質液という代理量からの推定であり、参照基準との一致率が使い方の上限を決める。
- 消費者向け睡眠トラッカー11機種の4段階マクロF1は0.2588から0.6863であり、最高と最低の比は2.65倍である。深睡眠とREMの分数を機種を跨いで比較する使い方は成立しない。
- 健常非糖尿病者は70から140 mg/dL の範囲に滞在時間の中央値96%を占めており、連続血糖測定が動かせる余地は残り4%にとどまる。非糖尿病者で硬いアウトカムの改善を示した無作為化比較試験は確認できていない。
- 集団を測る場面では、サンプルの選定者、効果量とばらつきの比、推定手法を変えたときの安定性、モデル前提への感度の4点を確認する。S&P 500を用いた独立検証では、経営陣多様性と6つの業績指標のいずれにも統計的に有意な関係が出ていない。
- Hong and Page の定理が示すのは、優秀さが不利になることではなく、単一スコアで大きな母集団から上位を選ぶと探索手順まで似通うという選抜構造の性質である。
- 多様性が効くのは、能力差が小さく、個人の誤りが独立し、討議が情報を引き出す設計になっている場面に限られる。能力差が大きい環境では、精度の低い100人が精度の高い1人に届かない。
- 医薬品開発の律速段階は第2相にある。移行率58.3%は第3相の59.0%と0.7ポイントしか違わないが、ここで誤って通した候補が第3相の巨額費用を発生させる。
- AI由来分子は第1相成功率80%から90%と業界平均を上回る一方、第2相は約40%で業界平均と同水準である。探索の質を上げても、標的仮説の当否は改善しない。

## 残っている問い

- 第2相の失敗理由の内訳は数値で示せなかった。該当する Nature Reviews Drug Discovery 2016年の論文は書誌情報のみ確認でき、本文と抄録を取得できていない [出典](https://pubmed.ncbi.nlm.nih.gov/27811931/)。有効性不足と安全性の比率がわかれば、第2相の失敗が標的仮説の誤りに帰属するのか、用量設計や患者選択の失敗に帰属するのかを切り分けられる。
- Casgevy の市販後の実投与患者数と売上は取得できていない。企業の投資家向けページがタイムアウトし、SEC EDGAR が HTTP 403 を返した。承認から市場浸透までの実績が確認できないため、価格と対象人数の議論は表示価格と費用対効果モデルの範囲にとどまる。
- 米国FDAによる Casgevy と Lyfgenia の承認日は、fda.gov の該当URLが HTTP 404 を返し、アーカイブへのアクセスも遮断されたため確認できなかった。査読論文は2023年後半と記述するにとどまる。
- 市販の連続血糖測定器の規制上の位置づけと、非糖尿病者向けの注意喚起についての規制当局の公式見解は、fda.gov の該当ページを取得できず反映できていない。米国糖尿病学会 Standards of Care の該当章も、出版社サイトが HTTP 403 を返したため参照できていない。
- 2015年以降のデータを含む臨床試験移行率は反映できていない。BIO・Informa・QLS による Clinical Development Success Rates 2011-2020 は配布URLがリダイレクトされ本文を取得できなかった。本章の移行率はすべて2000年から2015年のデータに基づく。
- Thompson 2014 の定理批判は原文を取得できず、書評シンポジウムの要約という二次情報にとどまる。定理が自明または冗長だとする評価と、Romaniega による批判の内容は、一次資料で確認できていない。
- 属性多様性と職務関連多様性を比較したメタ分析の効果量、および文化的多様性メタ分析の効果量は、出版社が抄録を非公開としており数値を取得できなかった。効かない条件の第3項は、枠組みの提示にとどまり効果量を伴っていない。

## 出典

1. European Medicines Agency, Casgevy (exagamglogene autotemcel) EPAR — https://www.ema.europa.eu/en/medicines/human/EPAR/casgevy
2. Correction of Ineffective Erythropoiesis and Normalization of Iron Homeostasis After Exagamglogene Autotemcel in Transfusion-Dependent β-Thalassemia. American Journal of Hematology, 2026 — https://pubmed.ncbi.nlm.nih.gov/42252696/
3. ClinicalTrials.gov API v2, NTLA-2001 登録試験一覧 — https://clinicaltrials.gov/api/v2/studies?query.term=NTLA-2001
4. ClinicalTrials.gov API v2, NTLA-2002 登録試験一覧 — https://clinicaltrials.gov/api/v2/studies?query.term=NTLA-2002
5. ClinicalTrials.gov API v2, VERVE-102 登録試験一覧 — https://clinicaltrials.gov/api/v2/studies?query.term=VERVE-102
6. ClinicalTrials.gov API v2, prime editing 登録試験一覧 — https://clinicaltrials.gov/api/v2/studies?query.term=prime%20editing
7. Musunuru K, Grandinette SA, Wang X, et al. Patient-Specific In Vivo Gene Editing to Treat a Rare Genetic Disease. N Engl J Med. 2025 — https://pubmed.ncbi.nlm.nih.gov/40373211/
8. Lee T, Cho Y, Cha KS, et al. Accuracy of 11 Wearable, Nearable, and Airable Consumer Sleep Trackers. JMIR Mhealth Uhealth. 2023 — https://pubmed.ncbi.nlm.nih.gov/37917155/
9. 同論文の全文 PMC10654909 — https://pmc.ncbi.nlm.nih.gov/articles/PMC10654909/
10. Haghayegh S, et al. Accuracy of Wristband Fitbit Models in Assessing Sleep. J Med Internet Res. 2019 — https://pubmed.ncbi.nlm.nih.gov/31778122/
11. Shah VN, DuBose SN, Li Z, et al. Continuous Glucose Monitoring Profiles in Healthy Nondiabetic Participants. J Clin Endocrinol Metab. 2019 — https://pubmed.ncbi.nlm.nih.gov/31127824/
12. Hall H, Perelman D, Breschi A, et al. Glucotypes reveal new patterns of glucose dysregulation. PLOS Biology. 2018 — https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.2005143
13. Richardson KM, et al. The efficacy of using continuous glucose monitoring as a behaviour change tool. Int J Behav Nutr Phys Act. 2024 — https://pubmed.ncbi.nlm.nih.gov/39716288/
14. Avner S, Robbins T. A Scoping Review of Glucose Spikes in People Without Diabetes. Clin Med Insights Endocrinol Diabetes. 2025 — https://pubmed.ncbi.nlm.nih.gov/41170150/
15. Green J, Hand JRM. Executive Diversity and Firm Performance. Econ Journal Watch, 2024 — https://econjwatch.org/1352
16. Hong L, Page SE. Groups of diverse problem solvers can outperform groups of high-ability problem solvers. PNAS, 2004 — https://doi.org/10.1073/pnas.0403723101
17. Niesen P, Spiekermann K, Herzog L, Girard C, Vogelmann F. Does Diversity Trump Ability? Politische Vierteljahresschrift, 2024 — https://link.springer.com/article/10.1007/s11615-024-00550-1
18. Grim P, Singer DJ, Bramson A, et al. Diversity, Ability, and Expertise in Epistemic Communities. 2019 — https://doi.org/10.1086/701070
19. Thompson A. Does Diversity Trump Ability? Notices of the AMS, 2014。原文未取得、書誌のみ確認 — https://doi.org/10.1090/noti1163
20. Hoogendoorn S, Oosterbeek H, van Praag M. The Impact of Gender Diversity on the Performance of Business Teams. Tinbergen Institute Discussion Paper TI 2011-074/3 — https://papers.tinbergen.nl/11074.pdf
21. Luan S, Katsikopoulos KV, Reimer T. When Does Diversity Trump Ability (and Vice Versa) in Group Decision Making? PLoS ONE, 2012 — https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0031043
22. Levine SS, Apfelbaum EP, Bernard M, et al. Ethnic diversity deflates price bubbles. PNAS, 2014 — https://doi.org/10.1073/pnas.1407301111
23. Sommers SR. On racial diversity and group decision making. Journal of Personality and Social Psychology, 2006 — https://doi.org/10.1037/0022-3514.90.4.597
24. Woolley AW, Chabris CF, Pentland A, et al. Evidence for a collective intelligence factor in the performance of human groups. Science, 2010 — https://doi.org/10.1126/science.1193147
25. van Knippenberg D, De Dreu CKW, Homan AC. Work group diversity and group performance. Journal of Applied Psychology, 2004 — https://research.vu.nl/ws/files/2734382/Knippenberg%20Journal%20of%20Applied%20Psychology%2089%286%29%202004%20u.pdf
26. Wong CH, Siah KW, Lo AW. Estimation of clinical trial success rates and related parameters. Biostatistics, 2019 — https://pmc.ncbi.nlm.nih.gov/articles/PMC6409418/
27. Wouters OJ, McKee M, Luyten J. Estimated Research and Development Investment Needed to Bring a New Medicine to Market, 2009-2018. JAMA, 2020 — https://pmc.ncbi.nlm.nih.gov/articles/PMC7054832/
28. Jayatunga MKP, Ayers M, Bruens L, et al. How successful are AI-discovered drugs in clinical trials? Drug Discovery Today, 2024 — https://pubmed.ncbi.nlm.nih.gov/38692505/
29. Innovative Payment Models for Sickle-Cell Disease Gene Therapies in Medicaid. Pharmacoeconomics, 2025 — https://pubmed.ncbi.nlm.nih.gov/39982606/
30. Institute for Clinical and Economic Review, Gene Therapies for Sickle Cell Disease, 2023 — https://icer.org/assessment/sickle-cell-disease-2023/
31. Cost-effectiveness of exagamglogene autotemcel gene-edited therapy in patients with sickle cell disease with recurrent vaso-occlusive crises in the United States. Journal of Medical Economics, 2026 — https://pubmed.ncbi.nlm.nih.gov/41730016/
32. Harrison RK. Phase II and phase III failures: 2013-2015. Nature Reviews Drug Discovery, 2016。書誌のみ確認 — https://pubmed.ncbi.nlm.nih.gov/27811931/
