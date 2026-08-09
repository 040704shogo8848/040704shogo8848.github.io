---
section: company
chapter: 5
slug: services-to-product
title: 受託とプロダクトを分ける線
thesis: 受託をプロダクトと呼び替えても倍率は付かず、導入体制の人員が売上に比例して増えるかどうかが評価倍率を分ける唯一の線引きになる。
---

同じ「企業向けAI導入」という言葉で括られる会社が、2026年8月時点で株価売上倍率1.43倍から60.87倍まで、40倍以上の開きをもって値付けされている。低いほうはAccenture、高いほうはPalantirである。両社とも顧客の業務にエンジニアやコンサルタントを送り込み、業務手順を作り直し、システムに載せている。表面的な活動は近い。それでも市場は二つを別の種類の事業として扱っている。

この差を「AIかどうか」で説明することはできない。Accentureが取り込んでいる需要もAI導入である。差を作っているのは、売上を1単位増やすときに何を追加で投入しなければならないかという一点だけである。人を追加しなければ増えない売上には人月の値段が付き、追加しなくても増える売上にはソフトウェアの値段が付く。この章では、その線がどこに引かれ、外からどう検証できるのかを扱う。自社を「プロダクト企業」と名乗るかどうかは、この判定に一切影響しない。

## 売上構成を受託分とプロダクト分に割り直す

最初にやるべきは、公表されている売上を役務提供の対価とライセンスの対価に割り直すことである。ところが、この割り直しは多くの場合できない。

Distyl AIは2022年創業のAI導入企業で、共同創業者2人はいずれもPalantir出身であり、顧客先に常駐して業務を解くforward deployed engineerの方式を持ち込んでいる。同社の主張は、常駐で解いた業務手順をDistilleryというプラットフォーム上に資産として畳み込み、次の顧客に再利用するというものである。この主張が正しければプロダクト比率は年々上がるはずだが、比率そのものが開示されていない。2025年9月23日の調達発表に売上額も構成比も記載はなく、書かれているのはエンドユーザー1億2,000万人超への到達、顧客側の営業利益改善が累計で数億ドル規模、本番稼働率100%という運用指標だけである [出典](https://www.prnewswire.com/news-releases/distyl-ai-raises-175-million-at-1-8-billion-valuation-to-help-global-enterprises-become-ai-native-302564270.html)。自社サイトも同様で、稼働中の導入50件超、年間10億件超の意思決定処理、対象12業種という運用指標にとどまる [出典](https://distyl.ai/)。

二次情報としてLatka由来の推定年間経常収益3,100万ドルが複数のデータベースに転載されているが、算出根拠が示されていないため金額としては採用できない。この数字を分母に置くと評価額18億ドルは約58倍になるが、分母が推定である以上、倍率は幅を持った参考値にしかならない。

分子と分母のどちらも不確かなときに残る手掛かりが、契約の形である。Distylの契約は12か月から36か月の常駐型で、収益モデルは時間課金ではなく成果連動を軸にし、そこにプラットフォームのライセンス料が重なる構造だとCEOのArjun Prakashが説明している。==成果を顧客と共同で持つために客先に前方展開する必要があるという説明は、プロダクト単体で売る構造ではないことを本人が認めた記述である== [出典](https://www.channeldive.com/news/billion-dollar-ai-startup-distyl-ai-openai-azure-anthropic/802806/)。契約期間と規模の下限に関する記述は二次情報であり、一次資料では裏が取れていない。

比較のために、割り直しが済んでいる例を置く。Palantirの2026年第2四半期の売上高は19億3,500万ドルで、政府9億9,000万ドル、商用9億4,500万ドルに分かれる [出典](https://www.stocktitan.net/sec-filings/PLTR/10-q-palantir-technologies-inc-quarterly-earnings-report-588b13838fce.html)。==ただしこの区分も顧客の属性による分割であって、役務とライセンスの分割ではない==。同社の契約はプラットフォーム利用、ホスティング、専門サービスが一体になった複数年サブスクリプションであり、契約書の中で受託部分だけを切り出すことは外部からはできない。

つまり、売上構成の開示だけで受託とプロダクトを分けようとしても、多くの場合は届かない。判定は別の指標に移す必要がある。

## 導入体制のスケール特性を人員数の推移で検証する

外から使える最も強い指標が、売上の伸び率と従業員数の伸び率の比である。受託であれば、この二つはほぼ同じ速度で動く。人が増えなければ売れる時間が増えないためである。

Palantirの従業員数は2024年末の3,936人から2025年末の4,429人へ、12.5%増にとどまった [出典](https://axis-intelligence.com/palantir-statistics/)。同じ2025年通期の売上高は44億7,500万ドルで前年比56%増である [出典](https://stockanalysis.com/stocks/pltr/financials/)。売上の伸びが人員の伸びの4倍以上ある。2026年第2四半期には売上が前年同期比93%増まで加速している [出典](https://www.stocktitan.net/news/PLTR/palantir-reports-q2-2026-u-s-comm-revenue-growth-of-149-y-y-and-c8762wptyyap.html)。同社は導入作業の一部を顧客側に移し、オントロジーと呼ぶ組織データの表現を再利用することで、売上と人員の連動を切ったと説明している。なお従業員数の出典は二次集計サイトであり、一次資料との照合は行えていない。

Distylは反対の動きを示している。従業員数は2025年11月23日時点で111人、2026年5月時点で159人とされ、6か月で43%増えている [出典](https://joinplank.com/research/distyl-ai)。売上が人員から切り離されつつあるなら、この増員速度は説明しにくい。ただしこの数値も二次情報であり、同期間の売上の伸びが分からないため、比を取ることはできない。増員そのものは、人員に比例する構造がまだ残っていることを示唆する材料にとどまる。

規模の反対側にAccentureがある。2026年5月31日締めの第3四半期は売上高187億ドルで前年同期比6%増、新規受注は193億2,000万ドルで2%減、通期のローカル通貨ベース成長率見通しは3%から4%、従業員数は約79万9,000人である [出典](https://newsroom.accenture.com/content/3qfy26-earnings/accenture-reports-third-quarter-fiscal-2026-results.pdf)。79万人という人員を抱えたまま売上が1桁前半で伸びる構造に対し、市場は株価売上倍率1.43倍を付け、株価は52週前と比べて30.74%下落した [出典](https://stockanalysis.com/stocks/acn/statistics/)。

三社を同じ軸に並べると次のようになる。

| 会社 | 売上の伸び | 人員の伸び | 株価売上倍率 | 出典 |
| --- | --- | --- | --- | --- |
| Palantir | 2025年通期で前年比56%増 | 2025年通期で12.5%増 | 60.87倍、2026-08-07時点 | https://stockanalysis.com/stocks/pltr/statistics/ |
| Distyl AI | 2024年に5倍と報じられる | 6か月で43%増、二次情報 | 約58倍、推定分母による | https://news.crunchbase.com/ai/distyl-raises-valuation-175m-seriesb/ |
| Accenture | 2026年第3四半期で前年同期比6%増 | 約79万9,000人を維持 | 1.43倍、2026-08-06時点 | https://stockanalysis.com/stocks/acn/statistics/ |

Distylの行だけ、分母も分子も検証を通っていない。同社の売上は2024年に5倍、2025年は8倍の見込みで推移したと報じられているが [出典](https://news.crunchbase.com/ai/distyl-raises-valuation-175m-seriesb/)、これは一次開示ではない。人月で売る事業が年5倍にならないという点は正しいが、5倍という数値自体の裏付けは取れていない。

読み取るべきはこうである。市場はAI導入需要そのものを否定していない。同じ需要を、労働投入に比例する事業体と比例しない事業体に切り分け、40倍以上違う倍率を付けている。==Distylに付いた倍率は現在の売上構成への評価ではなく、Palantirと同じ経路を辿るという仮説への値付けである==。仮説である以上、人員の伸びが売上の伸びに追いついた瞬間に取り消される。

## 顧客セグメント別の粗利差が示す事業の実態

人員の伸びが遅れて出る指標であるのに対し、売上総利益率は同じ構造をその期のうちに映す。人が客先で働いた分は売上原価に入るためである。

2026年8月7日時点で、Palantirの売上総利益率は84.80%、Accentureは32.01%である [出典](https://stockanalysis.com/stocks/pltr/statistics/) [出典](https://stockanalysis.com/stocks/acn/statistics/)。Palantirは2026年第2四半期の粗利率を85%と開示しており、通期ベースの数値とほぼ一致する [出典](https://www.stocktitan.net/sec-filings/PLTR/10-q-palantir-technologies-inc-quarterly-earnings-report-588b13838fce.html)。この52.79ポイントの差が、受託とプロダクトの距離である。非公開企業の実態を推し量るときは、この二つの間のどこに落ちるかを問えばよい。Distylについては売上総利益率が開示されていないため、位置を特定できない。

セグメント別の内訳は、同じ会社の中に速度の違う事業が同居していることを示す。Palantirの2026年第2四半期を分解すると、米国商用が7億6,400万ドルで前年同期比149%増、米国政府が8億900万ドルで90%増である [出典](https://www.stocktitan.net/news/PLTR/palantir-reports-q2-2026-u-s-comm-revenue-growth-of-149-y-y-and-c8762wptyyap.html)。セグメント合計から米国分を差し引くと国際政府と国際商用がいずれも1億8,100万ドルとなり、同じ手順で前年同期を復元すると国際商用は27%増、国際政府は43%増になる。この差し引きはノート筆者による算出であり、会社は国際の内訳を開示していない。

米国だけが伸びる理由のうち、一次資料で確認できるのは政府側の調達構造である。米陸軍は2025年8月1日、15の主契約と60の関連契約、計75契約を1本の企業契約に統合し、上限100億ドル、期間10年の枠組みを設定した。目的は商用ソフトの納入加速とリセラーの中間手数料の排除にある [出典](https://www.washingtontechnology.com/contracts/2025/08/palantir-signs-10b-enterprise-agreement-army/407153/)。2026年6月22日には次世代指揮統制NGC2でFoundryが共通データ層に位置づけられた。契約金額は非開示である [出典](https://www.stocktitan.net/news/PLTR/palantir-secures-foundational-role-in-ngc2-data-oyuib538gyv0.html)。米国商用側の加速要因として挙げられるブートキャンプ型販売については、5日間の作業で12か月から18か月の商談期間を短縮したという説明が二次報道に依存しており、会社の一次開示では確認できない。国際商用が伸び悩む理由についても、会社の公式説明は取得できていない。

==粗利の源泉が顧客数ではなく単価にあることも押さえておく==。Palantirの顧客数は2026年6月末で1,049社、前年同期の849社から24%増である。同期間の売上は93%増えており、差分を埋めているのは単価である。上位20顧客の直近12か月平均売上は1億2,400万ドルで、前年同期の7,500万ドルから67%増えた [出典](https://www.stocktitan.net/sec-filings/PLTR/10-q-palantir-technologies-inc-quarterly-earnings-report-588b13838fce.html)。==成長の主因は新規獲得ではなく既存顧客内の拡張である==。

なお顧客数の定義には注意が必要である。10-Kベースでは2025年12月末に954社、2026年第1四半期の決算資料では商用顧客が直近12か月ベースで1,007社とされる [出典](https://axis-intelligence.com/palantir-statistics/)。1,049社を含めこれらは集計基準が異なり、同じ系列として比較できない。定義の照合は一次資料では行えていない。

## 投資家が見る運用指標と事業者が出す指標のずれ

売上構成も粗利も出さない会社は、代わりに運用指標を出す。ここに事業者と投資家のずれが生じる。

Decagonはカスタマーサポート向けAIエージェントの専業で、2025年6月22日にシリーズCとして1億3,100万ドルを評価額15億ドルで調達した [出典](https://www.builtinsf.com/articles/decagon-raises-131m-series-c-1b-valuation-20250625)。同社が調達発表で前面に出したのは、平均で70%近いdeflection rate、Duolingoでの80%超、OuraのCSATが3倍、ClassPassのサポート会話あたり費用が95%減、そして直前1年で8桁の年間経常収益に到達したことである [出典](https://decagon.ai/blog/series-c-announcement)。

これらの指標は性質が三段階に分かれる。

第一段階は自己申告の性能指標で、deflection rateがこれにあたる。定義がベンダーごとに異なるため、そのままでは値付けの分母にならない。同じ領域で課金単位まで踏み込んだ事業者は定義を明文化している。Zendeskはautomated resolutionを課金単位と定め、人間の介在なしに解決したことをLLMが検証した会話だけを計上し、Slack向けAnswer Botや記事推薦APIは計上しないと明記する [出典](https://support.zendesk.com/hc/en-us/articles/5352026794010-About-automated-resolutions-for-AI-agents)。Intercom Finは1件0.99ドルの成果課金で、顧客が解決を確認した場合、Finの応答後に追加の質問が来なかった場合、Finが手続きを完了した場合の三条件のいずれかを満たしたときにのみ課金し、1会話につき1回しか計上しない [出典](https://www.intercom.com/pricing)。Decagonには公開価格表がなく、2026年8月7日時点でdecagon.ai/pricingは存在しない。二次情報では会話単位と解決単位の二本立てとされるが、一次資料では確認できない [出典](https://sacra.com/c/decagon/)。

第二段階は、性能が金額に変換された結果である。Decagonは2025年に100社超の新規グローバルエンタープライズを追加したと述べ、顧客名としてAvis Budget Group、Block、Deutsche Telekomを挙げている [出典](https://decagon.ai/blog/series-d-announcement)。収益額は同社が出していない。二次情報では2024年末の年換算収益1,000万ドルから2025年10月に3,500万ドル、2025年第3四半期のGAAP収益と年間経常収益がいずれも前年同期比3倍超とされる [出典](https://sacra.com/c/decagon/)。この分母を置くとシリーズCの15億ドルは約43倍、2026年1月27日のシリーズDの45億ドルは約129倍になるが、評価額と収益の時点がずれており、シリーズC時点の年間経常収益は8桁という範囲でしか開示されていないため、倍率はいずれも事後推定にすぎない。

第三段階は、性能改善の担い手が人からソフトウェアに移っているかを示す指標である。Decagonは2026年6月にDuetBenchを公開し、診断タスクの通過率93%が人間平均の83%を上回ること、構築タスクの3時間以内通過率45.5%が人間の23%を上回ることを示した [出典](https://decagon.ai/blog/duetbench)。==これは解決率そのものではなく、解決率を改善する作業を自動化できるかを測る指標である==。前節までの言い方に直せば、運用チームの人員を増やさずに性能を上げられるかという問いになる。

以上を整理すると、投資家が実際に分母に使っているのは解決率の絶対水準ではない。

粗利率の分解についても、2025年時点では答えが出ている。政府部門と商用部門の貢献利益率はそれぞれ65.61%と65.92%で、historically 政府側が高かった差はほぼ消えた[出典](https://stockdividendscreener.com/technology/palantir-profit-margin-and-profit-breakdown-by-segment/)。==同じ導入方式を別の顧客層へ移して同じ利益率が出たことが、この体制が案件固有ではないことの傍証になる==。前方展開の型は5日間の集中導入という形に製品化され、2024年末までに1,000件超が実施された。従業員数は約3,800人で、この規模のまま2026年6月期の四半期売上が前年同期比93%増になっている[出典](https://www.channeldive.com/news/palantir-forward-deployed-engineers-ai-revenue-spike/827139/)。人員の線形増加を伴わずに売上が伸びている以上、体制はスケールしていると読める。第一に、性能指標が課金単位に変換されているか。変換されていれば性能改善がそのまま収益になる。第二に、収益の伸び率と新規エンタープライズ獲得の速度。第三に、性能改善の担い手がソフトウェアに移っているか。粗利率と正味収益維持率はいずれも非開示であり、この二つが出れば第一の点は確定するが、2026年8月時点では確認できない。

同じ時期に同じ水準の倍率が広く付いていた点も付け加えておく。Sierraは2025年9月に評価額100億ドルで調達し、年間経常収益1億ドルへの到達を2025年11月21日に公表した [出典](https://sierra.ai/blog/100m-arr)。倍率は約100倍になる。成果連動課金を掲げるエンタープライズAIの一群に共通してこの水準が付いていた時期だと理解するのが妥当である。

なお、評価額と時価総額を同じものとして扱ってはならない。Distylの18億ドルは優先株に付いた価格であり、残余財産分配の優先権や希薄化防止条項を伴う。条件は非開示のため、普通株換算の価値は算出できない。

## 既存SaaSが機能追加してきたときに残る堀

人員に比例しない構造を作れたとしても、それだけでは倍率は保てない。同じ機能を既存のSaaSが追加してきたときに何が残るかが次の問いになる。

現状の数字では、既存側が規模で専業側を上回っている。Intercom Finは12,000社超に導入され、平均解決率76%、週あたり200万件の解決を処理していると公表する [出典](https://fin.ai/)。Salesforceは2026年1月期通期でAgentforceの年間経常収益が8億ドル、前年同期比169%増、累計成約29,000件超と開示した [出典](https://investor.salesforce.com/news/news-details/2026/Salesforce-Delivers-Record-Fourth-Quarter-Fiscal-2026-Results/default.aspx)。これに対しDecagonの年換算収益は二次情報で3,500万ドルであり、桁が二つ違う。分布と既存契約という点では、堀を持っているのはむしろ既存側である。

その上で専業側に残る差分は三つに絞られる。

第一が導入速度である。Decagonは、Fortune 50企業が競合製品で9か月かかった内容を3週間で実現したこと、航空会社が3週間未満で稼働したこと、音楽配信サービスが6営業日でPoCから本番に移ったことを挙げている。同じ投稿で、音楽配信サービスが6日で会話処理成功率71%とCSAT 4.2、SNS事業者が2か月で成功率80%に到達したとしている [出典](https://decagon.ai/blog/our-bet-on-you)。いずれも自己申告で第三者検証はない。ただし成果課金が前提の市場では導入期間の短さが収益認識の開始時期に直結するため、差分としては意味を持つ。前節までの軸で言えば、導入速度は1件あたりに投入する人員時間を減らす要素であり、人員と売上の連動を切る方向に働く。

第二が業務手順の資産化である。DecagonはAgent Operating Proceduresという形式で、自然言語の指示をコードにコンパイルして実行する構造を取り、これをシリーズCの中核として説明した [出典](https://decagon.ai/blog/series-c-announcement)。認証を伴う手続きや複数システムをまたぐ実行を扱う領域では、既存ヘルプデスクの記事検索型の延長では届かない。これはPalantirのオントロジーやDistylのRoutinesと同じ発想であり、一度解いた業務を次の顧客に持ち越す装置にあたる。

第三が自己改善の内製化で、DuetBenchとAutopilotがこれにあたる。

一方、堀を弱める要素が二つある。ひとつは、Decagon自身が顧客データの囲い込みを否定する立場を明示したことである。同社はベンダーが顧客の顧客に関する専門家として振る舞う構造を批判し、glass boxであることを差別化として掲げた [出典](https://decagon.ai/blog/our-bet-on-you)。これは既存ベンダーへの攻撃であると同時に、自社への切替コストも低いと宣言していることになる。もうひとつは性能差の比較が成立しないことである。Finの76%は解決の定義を明文化した上での数字、Decagonの70%近くはdeflectionという別の定義であり、直接比較はできない。定義が揃わない限り、性能差を根拠に乗り換えを説得する構造そのものが機能しにくい。

したがって、汎用チャネルの単純な問い合わせ処理には堀がない。堀が成立しうるのは、複数システムをまたぐ手続きの実行と、規制産業の音声チャネルの二つに限られる。判定に必要な正味収益維持率、解約率、既存ヘルプデスク併用時の実行環境の取り合いはいずれも一次資料で確認できず、専業側が既存側に勝っているという証拠は2026年8月時点の公開情報には存在しない。

堀の弱さは、人員に比例しない構造を作れた会社にも別の形で効く。Palantirの2026年6月末の残存履行義務は49億ドルで、うち約43%が今後12か月、約36%が13か月から36か月の間に認識される見込みである。契約負債は11億ドルで、2025年末の8億ドルから増えた [出典](https://www.stocktitan.net/sec-filings/PLTR/10-q-palantir-technologies-inc-quarterly-earnings-report-588b13838fce.html)。ただし10-Qは多くの顧客が12か月未満の通知で任意解約できる旨を明示しており、49億ドルは2026年通期ガイダンスの中央値81億5,400万ドルの6割程度でしかない。==受注残が先行して積み上がる構造ではなく、四半期ごとの新規契約に依存する==。粗利85%の事業であっても、乗り換えコストの低さは受注残の拘束力として現れる。

先行指標も一方向ではない。2026年第2四半期に締結した総契約価値は33億7,300万ドルで前年同期比49%増、うち米国商用が21億3,200万ドルで153%増、米国商用の残存契約価値は62億3,800万ドルで前年同期比124%増である [出典](https://www.stocktitan.net/news/PLTR/palantir-reports-q2-2026-u-s-comm-revenue-growth-of-149-y-y-and-c8762wptyyap.html)。総契約価値の伸び49%が売上の伸び93%を下回っている点は減速方向の材料として読めるが、総契約価値は契約更新の時期でぶれるため単一四半期では判断できない。

## この章の要点

- 受託とプロダクトを分ける線は自称ではなく、売上を1単位増やすときに人員を追加する必要があるかどうかにある。
- 売上構成の開示だけでは判定できない場合が多い。Distyl AIは役務とライセンスの構成比を開示しておらず、Palantirの政府と商用の区分も顧客属性の分割であって役務とライセンスの分割ではない。
- 最も強い外部指標は売上の伸び率と従業員数の伸び率の比である。Palantirは2025年通期で売上56%増に対し人員12.5%増、Distylは6か月で人員43%増、Accentureは約79万9,000人を維持したまま売上6%増である。
- 売上総利益率は同じ構造を同じ期に映す。2026年8月時点でPalantirが84.80%、Accentureが32.01%であり、非公開企業はこの間のどこに落ちるかで実態が決まる。
- 市場はAI需要を否定しているのではなく、労働投入に比例する事業体と比例しない事業体に分け、株価売上倍率で1.43倍と60.87倍という40倍以上の差を付けている。
- 非公開企業に付いた倍率は現在の売上構成への評価ではなく、人員と売上の連動を切れるという仮説への値付けである。人員の伸びが売上の伸びに追いつけば取り消される。
- 事業者が出す運用指標と投資家が使う分母はずれる。deflection rateは定義がベンダーごとに異なり値付けの分母にならず、実際に使われているのは課金単位への変換の有無、収益の伸び、性能改善のソフトウェア化である。
- 人員に比例しない構造を作れても堀は自動的には付かない。既存SaaS側はIntercom Finが12,000社超、Agentforceが年間経常収益8億ドルという分布を持ち、専業側に残るのは複数システムをまたぐ手続きの実行と規制産業の音声チャネルに限られる。

## 残っている問い
- Distyl AIの売上額、役務提供とライセンスの構成比、売上総利益率、従業員1人あたり売上の時系列。いずれも一次資料でも二次資料でも確認できない。上場申請書類か投資家向け開示が出るまで比率は断定できない。
- Distylの推定年間経常収益3,100万ドルは算出根拠が示されておらず、金額として採用できない。したがって約58倍という倍率も分母が確定していない。
- Distylの従業員数111人と159人はいずれも二次情報であり、一次資料では裏が取れていない。同期間の売上の伸びが分からないため、人員と売上の比も取れない。
- Palantirの国際政府と国際商用の内訳は会社が開示しておらず、本章に示した1億8,100万ドルはセグメント合計からの差し引きによる算出である。
- Palantirの顧客数は1,049社、954社、1,007社と集計基準の異なる数値が並び、定義の照合を一次資料で行えていない。
- Palantirの米国商用が伸びた理由としてのブートキャンプ型販売の効果は二次報道に依存し、一次開示では確認できない。国際商用が伸び悩む理由についての会社の公式説明も取得できていない。
- Decagonの粗利率、正味収益維持率、解約率はいずれも非開示であり、堀の有無を判定できない。公開価格表も存在せず、課金単位が会話単位か解決単位かは一次資料で確認できない。
- 既存ヘルプデスクと専業エージェントを併用する顧客において、実行環境をどちらが握るかを示す資料が見つからない。
- Palantirの2026年第2四半期のGAAP純利益10億6,200万ドルが営業利益9億1,200万ドルを1億5,000万ドル上回る要因の内訳が確認できない。
- 本章で参照したPalantirの10-Qと10-Kの内容は要約サイト経由の二次情報であり、SEC EDGARの原文と照合できていない。
## 出典

1. Palantir Reports Q2 2026 U.S. Comm. Revenue Growth of 149% Y/Y — StockTitan掲載のプレスリリース全文 — https://www.stocktitan.net/news/PLTR/palantir-reports-q2-2026-u-s-comm-revenue-growth-of-149-y-y-and-c8762wptyyap.html
2. Palantir Technologies Inc. Quarterly Earnings Report 10-Q 2026年第2四半期の要約 — https://www.stocktitan.net/sec-filings/PLTR/10-q-palantir-technologies-inc-quarterly-earnings-report-588b13838fce.html
3. Palantir Financials 年次 — Stock Analysis — https://stockanalysis.com/stocks/pltr/financials/
4. Palantir Statistics — Stock Analysis — https://stockanalysis.com/stocks/pltr/statistics/
5. Palantir Statistics 2026 — Axis Intelligence — 二次集計であり顧客数と従業員数の定義を一次資料と照合できていない — https://axis-intelligence.com/palantir-statistics/
6. Palantir signs $10B enterprise agreement with Army — Washington Technology — https://www.washingtontechnology.com/contracts/2025/08/palantir-signs-10b-enterprise-agreement-army/407153/
7. Palantir Secures Foundational Role in NGC2 Data Layer — StockTitan掲載のプレスリリース — https://www.stocktitan.net/news/PLTR/palantir-secures-foundational-role-in-ngc2-data-oyuib538gyv0.html
8. Distyl AI Raises $175 Million at $1.8 Billion Valuation — PR Newswire — https://www.prnewswire.com/news-releases/distyl-ai-raises-175-million-at-1-8-billion-valuation-to-help-global-enterprises-become-ai-native-302564270.html
9. Distyl AI Raises $175M Series B At $1.8B Valuation — Crunchbase News — https://news.crunchbase.com/ai/distyl-raises-valuation-175m-seriesb/
10. Distyl — Architecting the AI-Native Enterprise — https://distyl.ai/
11. Billion-dollar AI startup leans on collaborative deployment model — Channel Dive — https://www.channeldive.com/news/billion-dollar-ai-startup-distyl-ai-openai-azure-anthropic/802806/
12. Distyl AI: FDE Profile, Leadership & Competitors — Plank Research — 二次情報 — https://joinplank.com/research/distyl-ai
13. Accenture Statistics — Stock Analysis — https://stockanalysis.com/stocks/acn/statistics/
14. Accenture Reports Third-Quarter Fiscal 2026 Results — Accenture Newsroom — https://newsroom.accenture.com/content/3qfy26-earnings/accenture-reports-third-quarter-fiscal-2026-results.pdf
15. Decagon, Series C announcement — https://decagon.ai/blog/series-c-announcement
16. Decagon, Series D announcement — https://decagon.ai/blog/series-d-announcement
17. Decagon, The customer relationship was always yours — https://decagon.ai/blog/our-bet-on-you
18. Decagon, DuetBench — https://decagon.ai/blog/duetbench
19. Built In SF, Decagon Raises $131M Series C — https://www.builtinsf.com/articles/decagon-raises-131m-series-c-1b-valuation-20250625
20. Sacra, Decagon revenue, valuation and funding — 二次情報 — https://sacra.com/c/decagon/
21. Zendesk, About automated resolutions for AI agents — https://support.zendesk.com/hc/en-us/articles/5352026794010-About-automated-resolutions-for-AI-agents
22. Intercom, Pricing — https://www.intercom.com/pricing
23. Fin AI, 製品トップページ — https://fin.ai/
24. Salesforce Delivers Record Fourth Quarter Fiscal 2026 Results — https://investor.salesforce.com/news/news-details/2026/Salesforce-Delivers-Record-Fourth-Quarter-Fiscal-2026-Results/default.aspx
25. Sierra reaches $100M ARR — https://sierra.ai/blog/100m-arr

出典の取得日はいずれも2026年8月7日である。
