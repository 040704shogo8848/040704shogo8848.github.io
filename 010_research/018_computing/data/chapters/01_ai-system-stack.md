---
section: computing
chapter: 1
slug: ai-system-stack
title: AIシステムの層構造
thesis: 生成AIの実用性能は基盤モデルの規模ではなく、事後学習・検索・状態管理という周辺層の設計で決まり、失敗はモデル本体ではなく層の接合部で起きる。
---

生成AIの導入を検討する場面で、最初に出てくる問いはたいてい「どのモデルを使うか」である。この問いの立て方には落とし穴がある。実際に動くシステムは、基盤モデル1つで構成されていない。事後学習で振る舞いを整え、検索で外部の文書を差し込み、ツール呼び出しの履歴を管理し、出力を評価する。この一連の層が直列につながっている。そして観測される失敗の多くは、層と層の接合部で起きる。検索が正解文書を拾えていないのに生成側のプロンプトを直す、視覚の読み取りが崩れているのに推論の指示を足す、といった当て先の誤りが繰り返し発生する。層の切り分けができていれば避けられる誤りである。この章は、どこで何が壊れるかを層ごとに分けて示す。==モデルの良し悪しではなく、層の接合を見る目を作ることが目的になる==。

<figure class="tb-fig">
<svg viewBox="0 0 720 296" role="img" aria-label="AIシステムの層構造と接合部で起きる失敗">
  <text x="12" y="18" font-size="11" fill="var(--muted)">層</text>
  <text x="440" y="18" font-size="11" fill="var(--muted)">接合部で起きる失敗</text>
  <g font-size="12.5">
    <rect x="12" y="30" width="396" height="34" rx="6" fill="#EEF2FF" stroke="#D5DDF7"/>
    <text x="28" y="52" fill="var(--ink)">評価</text>
    <text x="120" y="52" font-size="11" fill="var(--sub)">出力の合否判定と回帰検知</text>

    <rect x="12" y="76" width="396" height="34" rx="6" fill="#EEF2FF" stroke="#D5DDF7"/>
    <text x="28" y="98" fill="var(--ink)">状態管理</text>
    <text x="120" y="98" font-size="11" fill="var(--sub)">ツール呼び出しの履歴と文脈の受け渡し</text>

    <rect x="12" y="122" width="396" height="34" rx="6" fill="#EEF2FF" stroke="#D5DDF7"/>
    <text x="28" y="144" fill="var(--ink)">検索</text>
    <text x="120" y="144" font-size="11" fill="var(--sub)">外部文書の取得と関連度の判定</text>

    <rect x="12" y="168" width="396" height="34" rx="6" fill="#EEF2FF" stroke="#D5DDF7"/>
    <text x="28" y="190" fill="var(--ink)">事後学習</text>
    <text x="120" y="190" font-size="11" fill="var(--sub)">振る舞いの整形と経路の選好づけ</text>

    <rect x="12" y="214" width="396" height="34" rx="6" fill="var(--dim)" stroke="var(--line)"/>
    <text x="28" y="236" fill="var(--ink)">基盤モデル</text>
    <text x="120" y="236" font-size="11" fill="var(--sub)">到達しうる上限を決める</text>
  </g>
  <g>
    <path d="M414 64 L414 76" stroke="var(--warm)" stroke-width="2"/>
    <path d="M414 110 L414 122" stroke="var(--warm)" stroke-width="2"/>
    <path d="M414 156 L414 168" stroke="var(--warm)" stroke-width="2"/>
    <path d="M414 202 L414 214" stroke="var(--warm)" stroke-width="2"/>
    <circle cx="414" cy="70" r="3.5" fill="var(--warm)"/>
    <circle cx="414" cy="116" r="3.5" fill="var(--warm)"/>
    <circle cx="414" cy="162" r="3.5" fill="var(--warm)"/>
    <circle cx="414" cy="208" r="3.5" fill="var(--warm)"/>
  </g>
  <g font-size="11" fill="var(--sub)">
    <text x="440" y="74">評価基準が実運用の失敗を捕まえていない</text>
    <text x="440" y="120">前の呼び出しの結果が次の入力に渡っていない</text>
    <text x="440" y="166">検索が正解文書を拾えていないのに生成側を直す</text>
    <text x="440" y="212">基盤モデルの上限を事後学習で超えようとする</text>
  </g>
  <text x="12" y="276" font-size="11.5" fill="var(--ink)">失敗の多くは層の内部ではなく、層と層のあいだで起きる。</text>
  <text x="12" y="292" font-size="11" fill="var(--muted)">層の切り分けができていないと、当て先を誤った修正を繰り返すことになる。</text>
</svg>
<figcaption>「どのモデルを使うか」という問いが答えを出しにくいのは、実際のシステムが基盤モデル1つで構成されていないためである。見るべきは各層の性能ではなく接合部である。</figcaption>
</figure>

## 事前学習のスケーリングから事後学習と蒸留への潮目

2020年から2024年前半までのスケーリング則は、パラメータ数と学習トークン数を増やすほど損失が下がるという事前学習の話だった。2024年12月にIlya SutskeverがNeurIPS 2024で pre-training as we know it will end と述べ、計算資源は増えるがインターネットは1つしかないためデータが増えないと指摘した。同時期にOpenAIがo1を公開し、学習時の強化学習量と推論時の思考トークン量という2つの軸で性能が伸びることを示した。

ここで「事前学習の時代が終わり強化学習の時代になった」と読むと、判断を誤る。一次資料は積層を示している。

第1に、強化学習の到達点が base model に規定される。Yueらは6種類のRLVRアルゴリズムを数学・コーディング・視覚推論のベンチマークで比較し、pass@1 のような小さいkでは強化学習済みモデルが上回るが、kを大きく取ると base model のほうが高い pass@k を出すと報告した [出典](https://arxiv.org/abs/2504.13837)。==強化学習は正解に至る経路へ出力分布を寄せる操作であり、経路そのものを新設する操作ではない、という整理になる==。

第2に、DeepSeek-R1論文も、知能の境界を押し広げるにはより強い base model とより大規模な強化学習の両方が要ると明記している [出典](https://www.thewirechina.com/wp-content/uploads/2025/01/DeepSeek-R1-Document.pdf)。二者択一ではない。

第3に、事前学習の計算量は縮小していない。Epoch AI は frontier model の学習計算量が年4倍から5倍で伸びてきたとしている [出典](https://epoch.ai/publications/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year)。

そのうえで、限界収益が高いのは現状では事後学習の側である。OpenAIの競技プログラミング論文は、ドメイン固有の推論ヒューリスティクスを手で組んだ o1-ioi が IOI 2024 のライブ環境で49パーセンタイルにとどまり、汎用の強化学習をスケールさせた o3 が手作りヒューリスティクスなしで金メダル相当に達したと報告している [出典](https://arxiv.org/abs/2502.06807)。

蒸留の位置づけも押さえておく必要がある。蒸留は単なる圧縮ではない。同一の 32B 規模の base に対し、大規模な強化学習は AIME 2024 の pass@1 で 47.0%、教師モデルの生成データによる蒸留は 72.6% だった [出典](https://www.thewirechina.com/wp-content/uploads/2025/01/DeepSeek-R1-Document.pdf) [出典](https://huggingface.co/deepseek-ai/DeepSeek-R1)。Yueらも、RLVR が base model の範囲内に留まるのに対し、蒸留は教師から新しい推論パターンを導入すると述べている。

ただし転写されるのは教師データが覆う範囲に限られる。DeepSeek-R1論文自身が、関数呼び出し、マルチターン、複雑なロールプレイ、JSON出力といったタスクで DeepSeek-V3 に劣ると認めている。これらは業務システムの接合部で毎回使われる機能である。数学ベンチマークのスコアを汎用性能の代理指標に使ってはいけない。なお、蒸留モデルが世界知識の広さをどれだけ保つかを教師と直接比較した定量データは、素材ノートでは特定できていない。

容量差の制約もある。AppleとOxfordの distillation scaling law は、教師が生徒に対して強すぎると capacity gap が生じると報告し、生徒が1体だけで教師も新規に学習する必要がある場合は通常の教師あり学習のほうが有利だと述べている [出典](https://arxiv.org/abs/2502.08606)。蒸留は無条件に得な操作ではない。

データの質はどの工程で効くか。投入トークンあたりの効率で最も効くのは事前学習のフィルタリングである。FineWeb-Edu は教育的価値の分類器で FineWeb 15兆トークンの約91%を捨て、1.3兆トークンを残した。その結果 MMLU が 33% から 37% へ、ARC が 46% から 57% へ改善した [出典](https://arxiv.org/html/2406.17557v1)。9割を超えて捨ててなお性能が上がる。

事後学習の教師あり微調整では必要件数が4桁から5桁小さい。s1 は難易度・多様性・品質の3基準で選んだ1,000問で Qwen2.5-32B-Instruct を微調整した [出典](https://arxiv.org/abs/2501.19393)。件数が少ないほど1件あたりの選別基準が結果を左右する。

強化学習では、質は検証可能性という形で効く。DeepSeek-R1 は最終解答の正誤だけを報酬にする設計を採った [出典](https://arxiv.org/abs/2501.12948)。逆に正誤判定が自動化できない領域では回らない。同論文は、ソフトウェア工学タスクは評価に時間がかかり強化学習の効率を落とすため大規模には適用できなかったと述べている。

自社データに引き直すと順序が決まる。事前学習を自前で回す企業はまれである。効くのは第1に検索対象文書の質、第2に微調整用の少量高品質サンプル、第3に自動評価可能な形への業務タスクの分解である。3つ目が満たせない業務では、強化学習型の改善が回らない。

### 自己回帰という構造への批判は、どこまで残っているか

積層という整理に対して、そもそも自己回帰モデルには構造的な上限があるという批判が並行して存在する。ヤン・ルカンの主張は形式化できる。1トークンが正解の空間から外れる確率を e とすると、長さ n の応答が正解に留まる確率は (1-e)^n になる。==長さに対して指数的に減衰するため、規模と学習の改善では超えられない天井がある==、という論法である[出典](https://jeroenvangorsel.net/blog/limits_of_llm_based_systems/exponential_error_accumulation_prolem)。同氏はこれを根拠に、言語予測器ではなく世界モデルが要るとして、JEPA系の枠組みを推している[出典](https://themenonlab.blog/blog/ami-labs-lecun-world-models-jepa-vs-llm-diffusion)。

2026年時点での評価は、批判の適用範囲を切り分けたところで落ち着いている。3点に分けられる。

第1に、指数減衰の式は e が独立かつ一定であることを前提にしている。誤りが独立でないこと、および途中で自己修正が入ることを織り込むと減衰は指数より緩くなる、という反論が出ている[出典](https://arxiv.org/pdf/2505.24187)。推論時に思考トークンを増やす系列のモデルが伸びたことは、この反論と整合する。==生成が一方向にしか進まないという構造は、生成の外側に検証と再試行を置くことで部分的に補償できる==。

第2に、批判が最も強く当たるのは物理世界の推論と長期計画であって、テキスト処理一般ではない。この区別を落とすと、批判の射程を過大に読むことになる。

第3に、代替アーキテクチャは実際に進んでいる。状態空間モデルは線形スケーリングで長文脈を扱い、Transformerが同じ長さでできないことを示した。ただし2026年時点で自己回帰型を置き換えた実運用の事例は確認できていない。

したがって実務上の扱いはこうなる。==構造的限界の主張は反証されていないが、証明もされていない==。当面は、自己回帰の外側に検証層と状態管理層を置く設計、すなわち本章が扱う層構造そのものが、この限界への現実的な対処になっている。

## 検索を接続したときに精度を規定する要素

検索を接続した生成、いわゆるRAGの故障は、独立な2つのモードが直列につながっている。第1は必要な文書が上位k件に入らない検索失敗、第2は文書が入っていても生成側が文脈にない内容を書く非根拠生成である。この2つを1つのスコアに丸めると、chunk設計を直すべき状況とプロンプトや検証器を直すべき状況が区別できなくなる。

生成側の数字から入る。RAGTruth は質問応答989件、data-to-text 1,033件、要約943件に対し6モデルの応答を集め、単語区間レベルで注釈した。総応答17,790件のうちハルシネーション区間を含む応答は43.1%だった [出典](https://aclanthology.org/2024.acl-long.585/)。文脈を与えたうえでこの水準である。==RAGはハルシネーションを消す技術ではない==。

タスク差はモデル差と同程度に大きい。応答100語あたりのハルシネーション区間数で、GPT-4-0613 は質問応答で 0.06、要約で 0.08、data-to-text で 0.27 である。Mistral-7B-Instruct は同じ順に 0.59、0.86、1.51 である。

要約に限った定点観測として Vectara の HHEM リーダーボードがあり、2026年5月11日更新時点の首位はハルシネーション率 1.8% である [出典](https://github.com/vectara/hallucination-leaderboard)。RAGTruth の 43.1% と桁が違う理由は、タスクが要約単独であること、判定単位が応答全体であること、対象モデル世代が異なることによる。==この2つは矛盾する数字ではなく、判定単位の違う別の指標である==。数字を引くときは判定単位とタスクを必ず添える。

検索側の数字も出ている。Anthropic の評価では、上位20チャンクに正解が入らない失敗率のベースラインが 5.7%、contextual embeddings で 3.7%、contextual embeddings と contextual BM25 の併用で 2.9%、さらに再ランクを加えて 1.9% まで下がった [出典](https://www.anthropic.com/news/contextual-retrieval)。

検出器を挟むと生成側も下がる。RAGTruth の応答レベル検出では、finetune した Llama-2-13B の F1 が 78.7、GPT-4-turbo のプロンプト検出が 63.4 だった。この検出器で2応答から選択する運用に回すと、ハルシネーション率が 9.8% から 4.8% と 5.6% に下がった。

評価指標の名前にも注意が要る。faithfulness と grounding は同じものを測っていない。faithfulness は応答を主張に分解し、検索文脈から推論できる主張の数を全主張数で割る比率指標である [出典](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/)。応答が質問に答えているかは問わない。FACTS Grounding は2段階で、第1段でユーザーの要求を満たしていない応答を失格にし、第2段で提供文書に完全に根拠づけられているかを判定する [出典](https://arxiv.org/abs/2501.03200)。

差は具体的に出る。文脈に情報がありませんとだけ返す応答は、主張がないため faithfulness が高く出る。同じ応答は FACTS の第1段で失格になり0点になる。非根拠主張が1つ混じった長文は faithfulness で 0.9台に着地し、FACTS では不合格になる。

そして、どちらの指標も測っていないものが2つある。1つは検索が正しかったかどうかで、これは context precision が担う [出典](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/context_precision/)。もう1つは応答が世界の事実として真かどうかである。文脈が誤っていれば、faithfulness も grounding も満点のまま誤答になる。層をまたいだ誤りは、層ごとの指標では拾えない。

| 指標 | 測っている対象 | 採点単位 | 出典 |
| --- | --- | --- | --- |
| context precision | 検索段の適合率 | 上位K件の比率 | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/context_precision/ |
| faithfulness | 生成段の主張支持率 | 主張ごとの比率 | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/ |
| FACTS grounding | 指示充足と完全根拠づけ | 応答ごとの合否 | https://arxiv.org/abs/2501.03200 |
| HHEM | 要約の非根拠有無 | 応答ごとの合否 | https://github.com/vectara/hallucination-leaderboard |

## rerank・RRF・federated searchをどこで効かせるか

検索段の内部にも層がある。==3つの技法は代替関係ではなく直列関係にある==。

RRF は、スコアの尺度が揃わない複数の検索結果を、順位だけを使って束ねる技法である。Cormack らの定義は各ランキング r について 1/(k + r(d)) を足し合わせるもので、k は 60 が使われる [出典](http://cormack.uwaterloo.ca/cormacksigir09-rrf.pdf)。k の感度は低い。TREC topics 351-400 で30システムを融合した予備実験の MAP は、k=30 で .2139、k=60 で .2145、k=500 で .2098 だった。

RRF の利点は精度の絶対値ではない。論文の総括は Condorcet、CombMNZ、最良単独システムを平均で4%から5%上回るというもので、LETOR 3 の583,850ペアでは CombMNZ の .6107 が RRF の .6051 を上回り、差は有意でない。本質的な利点はスコア較正が不要な点にある。BM25スコアに上限はなく、コサイン類似度の HNSW スコアは 0.333 から 1.00 に収まる [出典](https://learn.microsoft.com/en-us/azure/search/search-relevance-overview)。この2つを直接足すことはできない。Azure AI Search と Elasticsearch はいずれも k の既定値を 60 としている [出典](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/reciprocal-rank-fusion)。

rerank は、候補集合が十分な再現率を持っている前提で、上位k件の精度を上げる技法である。Anthropic の構成では150チャンクを取得してから20件に絞り込み、失敗率の削減幅がベースライン比49%から67%に伸びた。Azure はこれを L2 と位置づけ、L1 の BM25 と HNSW、その融合である RRF の後段に置く。L1 の全件に意味的再ランクを掛けるのは費用と時間の面で成立しないという設計思想が明示されている [出典](https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking)。

使い分けの判断は単純である。正解文書が候補集合に入っていない再現率の問題なら、rerank をいくら足しても改善しない。chunk設計、embedding、ハイブリッド化、取得件数の拡大で直す。正解文書は入っているが上位に来ない精度の問題なら rerank が効く。検索器が複数あってスコアを比較できないなら、その手前で RRF を挟む。

ソースをまたぐ federated search になると、テナント境界の設計が精度に効いてくる。Azure AI Search はマルチテナントの型を、テナントごとに1インデックス、テナントごとに1サービス、大口専用と小口共有の混合型の3つに整理している [出典](https://learn.microsoft.com/en-us/azure/search/search-modeling-multitenant-saas-applications)。単一インデックスにテナントIDを持たせてフィルタする方式はコストが最小だが、同ドキュメントに但し書きがある。==関連度スコアはテナント単位ではなくインデックス単位で計算されるため、語の出現頻度などの統計に全テナントのデータが混入する==。権限は守れても、他テナントの文書分布が自テナントの検索順位を動かす。

複数ソース横断そのものは Azure の agentic retrieval が実装している。LLMがクエリを部分問いに分解し、各 knowledge source に並列で投げ、結果を意味的再ランクにかけてから統合する [出典](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview)。順位付けの権限を各ソースの生スコアではなく reranker に集約している点が要点で、これは RRF が順位だけを使う理由と同じ、異種コーパス間でスコアが比較できないという制約への対処である。

コストは fan-out に比例する。同ドキュメントの試算では、2,000回の検索、1回あたり3部分問い、部分問いあたり50チャンク、1チャンク500トークンで再ランク対象が1億5,000万トークンとなり、再ランク費用が 3.30米ドル、クエリ計画のLLM費用が 1.02米ドル、合計 4.32米ドルになる。

権限分離には残存リスクがある。クエリ時の判定に使うのはインデックスに同期済みのメタデータであり、元システム側の権限変更は同期後にしか反映されない [出典](https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview)。SharePointでは、固有権限を持つ項目の変更はインデクサー実行ごとに反映されるが、親スコープから継承された変更は明示的な再同期が必要とされる。秘匿性が高い用途では、この遅延を許容できるかが導入可否の分水嶺になる。

## 専用ベクトルDBが汎用DB拡張に対して守れる領域

近似最近傍検索という機能だけで比べると、専用ベクトルDBが汎用DBの拡張に勝てる領域は縮んでいる。pgvector は HNSW と IVFFlat の2索引、L2・内積・コサイン・L1・ハミング・ジャッカードの6距離関数を持ち、バイナリ量子化と半精度による索引縮小も実装済みである [出典](https://github.com/pgvector/pgvector)。Oracle も AI Database 26ai で VECTOR 型と HNSW/IVF 索引を提供する [出典](https://docs.oracle.com/en/database/oracle/oracle-database/23/vecse/overview-ai-vector-search.html)。索引アルゴリズムの名前では差がつかない。

差が残るのは運用構造の3点である。

第1にフィルタ付き検索の再現率。pgvector は近似索引を使う場合、フィルタを索引スキャンの後に適用する。README は、条件が全行の10%に一致するとき既定設定では平均で約4件しか返らないと明記している [出典](https://raw.githubusercontent.com/pgvector/pgvector/master/README.md)。回避策として iterative index scan が用意されており、`hnsw.iterative_scan` の設定で緩和できる。回避可能だが、パラメータ調整が前提になる。

第2にマルチテナント。Weaviate はテナントごとに1シャードを割り当て、1ノードあたり5万シャード以上を稼働でき、20ノード程度で100万の同時アクティブテナントを支えられるとしている [出典](https://docs.weaviate.io/weaviate/concepts/data)。テナントは ACTIVE、INACTIVE、OFFLOADED の状態を持ち、退避先がローカルディスクとS3に分かれる。同等の分離を pgvector で作るなら、テナント列でのフィルタか、テナントごとのテーブル分割になる。前者は上のフィルタ問題を踏み、後者は数万テーブルの運用負荷を負う。

第3にベクトルがRAMに載らない規模での索引設計。Weaviate 1.38 は HFresh というディスク常駐索引を追加した。ベクトルを posting というディスク上の領域にまとめ、その重心に対する小さな HNSW だけをメモリに置く設計である [出典](https://weaviate.io/blog/weaviate-1-38-release)。同リリース記事は具体的なベンチマーク数値を示していない。

分岐点は件数ではない。Weaviate の dynamic 索引が flat から HNSW に切り替わる既定値は10,000オブジェクト、AlloyDB が ScaNN 索引を推奨するのは10,000行超だが [出典](https://docs.weaviate.io/weaviate/concepts/vector-index) [出典](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)、この水準はどちらの選択肢でも処理できる。

実務上の分岐はメモリ所要量である。Weaviate はメモリ使用量を全ベクトルのメモリフットプリントの2倍と説明し、384次元 float32 の100万ベクトルで約3GB という例を示す [出典](https://docs.weaviate.io/weaviate/concepts/resources)。この式を1,536次元 float32 の1,000万ベクトルに当てはめると、素のベクトルで約61.4GB、2倍して約123GB になる。この規模では、PostgreSQL の共有バッファやトランザクション処理と同じインスタンス上にベクトル索引を同居させる設計が破綻しやすい。

したがって判断基準は3つになる。ベクトルのRAM所要が数十GBを超えるか。テナント数が数千を超えるか。ハイブリッド検索の融合方式や再ランクが精度要件の中核か。いずれも該当しないなら、専用DBの導入は運用対象を1つ増やすだけになる。該当するなら、量子化とディスク索引の選択肢が製品として揃っている側に寄る。Weaviate は RQ の 8-bit で4倍圧縮かつ再現率98から99%という数字を示している [出典](https://docs.weaviate.io/weaviate/concepts/vector-quantization)。

製品間の比較では、課金軸が逆向きである点に注意が要る。Pinecone Standard はストレージ 0.33米ドル/GB/月に加え、読み取り100万ユニットあたり16から18米ドルを課金する [出典](https://www.pinecone.io/pricing/)。Weaviate Cloud の Flex は100万ベクトル次元あたり 0.00465米ドルから、ストレージ 0.12米ドル/GiB からである [出典](https://weaviate.io/pricing)。前者はクエリ量に比例し、後者は保存次元量に比例する。同じワークロードでも、想定QPSと保存量の比率によって安い側が入れ替わる。

なお、この判断を数値で裏づける中立的なベンチマークは素材の範囲では取れていない。取得できたのは pgvectorscale リポジトリの自社主張のみで、第三者検証は確認できていない。

## モーダルをまたぐと崩れる認識が評価に現れない理由

テキストの層構造は上のとおりだが、画像が入ると別の断層が生じる。この断層は最終回答の正誤だけを見る指標にほとんど現れない。

まず現象から。西洋チェスと象棋の初期配置から駒を1つだけ除去または置換した144枚の画像で、Gemini-2.5 Pro、Sonnet-3.7、GPT-4.1、o3、o4-mini の5モデルの駒数カウント平均正答率は 26.25% である [出典](https://arxiv.org/html/2505.23941v1)。正解31に対して標準の32を答え続ける。これはランダムな作話ではない。背景を除去すると7領域全体の平均正答率が 21.09ポイント上昇する [出典](https://arxiv.org/abs/2505.23941)。文脈的な視覚手がかりが記憶された答えを引き出しているという解釈になる。

崩れる箇所は複数の層に分散している。第1に入力解像度とパッチ分割で、LLaVA-1.5系の視覚エンコーダは336ピクセル四方に縮小する [出典](https://ar5iv.labs.arxiv.org/html/2310.03744)。第2に視覚トークンの圧縮で、BLIP-2 の Q-Former は 257×1024 の凍結画像特徴を 32×768 に要約する [出典](https://ar5iv.labs.arxiv.org/html/2301.12597)。64マスの盤面を32トークンに落とせば、マスと駒の対応は原理的に保持できない。第3に対照学習が生む表現の性質で、ARO benchmark は視覚言語モデルが属性の結びつけと関係の理解に失敗し語順にほとんど反応しないことを示した [出典](https://arxiv.org/abs/2210.01936)。第4に視覚エンコーダ由来の盲点で、MMVP は9つの視覚パターンのうち7つがいかなる大規模CLIPモデルでも解決されないと報告している [出典](https://arxiv.org/html/2401.06209v2)。第5に結合の問題で、同色同形の対象が並ぶ連言探索では対象5個で正答率が約90%、それ以上で低下する [出典](https://arxiv.org/html/2411.00238v2)。

==重要なのは、情報が符号化されていないとは限らない点である==。線形プローブでは視覚エンコーダに十分な視覚情報が含まれると報告されている [出典](https://arxiv.org/abs/2407.06581)。推論時に注意の鋭さを調整するだけで空間推論ベンチマークが最大50ポイント改善したという分析もある [出典](https://arxiv.org/abs/2503.01773)。崩れる場所は符号化と読み出しの両方にある。

では、なぜ評価に現れないのか。誤認識した盤面の上で論理的に整合した手順を踏めば、途中の文章は正しく見える。最終回答が外れても、知覚の失敗か推論の失敗かは区別されない。Stockfish 15 で評価した183局面を3クラスに分類させる課題で、GPT-4V の正答率は画像のみ 40.98%、FEN表記のみ 38.80%、両方で 42.08% だった [出典](https://arxiv.org/html/2402.13577v1)。3クラスなのでランダム水準は 33.3% である。画像とFENの差は 2.18ポイントで、この指標だけでは原因を分離できない。

現れさせるには3系統の測り方がいる。

1つ目はステップ単位の採点である。MathVerse は各問題を6つのバージョンに変換し、推論ステップを抽出して段階ごとに採点する [出典](https://arxiv.org/abs/2403.14624)。この設計では図を外した条件のほうが高得点になるモデルが出る。Qwen-VL-Max は Text Dominant 42.8% に対し Vision Intensive 33.6% で 9.2ポイント低く、InternLM-XComposer2 は 36.9% 対 20.1% で 16.8ポイント低い [出典](https://arxiv.org/html/2403.14624v2)。図を見ると成績が下がるという結果は、誤った視覚読み取りが推論を汚染していることの直接的な証拠になる。

2つ目は知覚だけを切り出すプローブである。POPE は物体の存在を個別に問う形式に落とす。MSCOCO の adversarial 設定で LLaVA は「はい」と答える比率が 99.10%、正答率 50.77% であり、二値問題のチャンス水準に張り付く [出典](https://ar5iv.labs.arxiv.org/html/2305.10355)。

3つ目は画像なし条件との差分である。GeminiPro は画像を一切与えずに MMMU で 42.9%、Sphinx-X-MoE は 43.6% を得ている [出典](https://arxiv.org/abs/2403.20330)。この対照を取らないと、画像を見ずに言語事前分布だけで答えたケースが正解として計上される。

補助として、MMMU では GPT-4V の誤答150件を人手で分類し、知覚エラー35%、知識不足29%、推論エラー26%、その他10%という内訳を得ている [出典](https://ar5iv.labs.arxiv.org/html/2311.16502)。これは指標そのものではなく指標の外側で行う人手分析である。

課題そのものが不可能なわけではない。専用設計の認識系は合成レンダリング画像でマス単位誤り率 0.23% を達成している [出典](https://arxiv.org/abs/2104.14963)。実写1万800枚の ChessReD では盤面全体の完全一致が 15.26% まで落ちるので撮影条件の影響は大きい [出典](https://arxiv.org/abs/2310.04086)。汎用VLMの構成が向いていない、という話である。

## ワークフロー型とエージェント型で分かれる状態設計

最後の層は状態である。Anthropic はワークフローを、LLMとツールがあらかじめ定義されたコードパス上で協調するシステムと定義し、エージェントを、LLMが自身のプロセスとツール利用を動的に決めるシステムと定義している。この区別が設計上の分岐になる理由は、状態の置き場所が変わるからである。ワークフロー型では次に何が起きるか既知なので、状態はステップ間の受け渡し変数で足りる。エージェント型では実行ステップ数が事前に決まらず、途中経過を外部に保持する必要が生じる。

LLM APIは1回のリクエストに全履歴を送り直すステートレスなインターフェースである。したがって実務的な標準解は、推論呼び出しをステートレスに保ったまま、状態を3層に分けて外に置くことになる。

第1層はスレッド内の実行状態である。LangGraph は `thread_id` をキーにチェックポインタでグラフの状態スナップショットを保存し、会話継続、human-in-the-loop、タイムトラベル、障害復旧を可能にする [出典](https://docs.langchain.com/oss/python/langgraph/persistence)。OpenAI Agents SDK は同じ役割を Sessions で提供する [出典](https://openai.github.io/openai-agents-python/sessions/)。ここでクライアント側セッションとサーバ側の `conversation_id` を併用できない点が接合部の落とし穴になる。状態の正本はどちらか一方に置く。

第2層はスレッドを跨ぐ長期記憶である。LangGraph はチェックポインタと別に Store を持つ。Anthropic 側の対応物は memory tool で、ファイル操作としてモデルに記憶の読み書きを行わせる [出典](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)。

第3層はプロセス障害に対する耐久性である。Temporal は実行履歴を Event History として永続化し、ワーカがクラッシュしてもコードをリプレイして直前の状態を再構成する [出典](https://docs.temporal.io/evaluate/understanding-temporal)。1実行が数十分から数時間に及ぶ場合、この層がないと途中失敗が全損になる。

マルチエージェントに固有の難しさは、状態の共有範囲である。Cognition は並列サブエージェントの脆さを指摘し、個々のメッセージではなくエージェントの全トレースを共有せよ、行動は暗黙の決定を伴い矛盾する決定は悪い結果を生む、という2原則を挙げている [出典](https://cognition.com/blog/dont-build-multi-agents)。この立場からの実装解は、単一スレッドの線形エージェントに寄せることである。一方 Anthropic はオーケストレータ・ワーカ型を採り、リード側が計画を Memory に保存する。理由は、コンテキストウィンドウが200,000トークンを超えると切り捨てられるためである [出典](https://www.anthropic.com/engineering/multi-agent-research-system)。

両者は矛盾しない。書き込み権限を持つのをオーケストレータだけにし、サブエージェントを読み取りと結果返却に限定すれば、ステートレスな推論呼び出しと一貫した状態管理は両立する。分岐の判断基準は、サブタスクが互いに独立に検証できるかである。独立に検証できるなら並列化してよく、Anthropic は並列ツール呼び出しで複雑なクエリの調査時間を最大90%削減したと報告している。独立に検証できないなら線形に保つ。

ここでマルチエージェント化の効用を過大評価しないための数字がある。エージェントはチャットの約4倍、マルチエージェントは約15倍のトークンを使う。BrowseComp では性能の分散の80%がトークン量で説明される。性能差の相当部分はアーキテクチャではなく投入量に由来する。

ツール呼び出しの制約も、回数ではなくトークン予算として現れる。回数そのものを縛る公開された数値上限は、Anthropic のツール利用ドキュメントにも OpenAI の function calling ガイドにも見当たらない。OpenAI は上限ではなく推奨として、1ターンの開始時点で利用可能な関数は20個未満を目指すと書いている [出典](https://developers.openai.com/api/docs/guides/function-calling)。素材ノートでは、OpenAI Responses API の `max_tool_calls` の公式記述は確認できていない。

実際の制約は3つの形を取る。第1にツール定義のトークン消費で、GitHub、Slack、Sentry、Grafana、Splunk を繋いだ構成では定義だけで約55,000トークンを消費する [出典](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)。これは作業を始める前の固定費である。第2にツール選択精度の劣化で、利用可能ツールが30から50を超えると精度が落ちると明記されている。MCP評価では tool search 導入で Opus 4 が49%から74%へ、Opus 4.5 が79.5%から88.1%へ改善している [出典](https://www.anthropic.com/engineering/advanced-tool-use)。第3に履歴の累積で、呼び出しが増えるほど tool_result が積み上がりコンテキスト上限に先に当たる。

緩和策は2つある。ツールの遅延読み込みは `defer_loading: true` を付けたツールを検索で発見されるまでコンテキストに載せない設計で、1リクエストあたり最大10,000個の遅延ツールを扱え、トークン削減率は85%超と記載されている。履歴の刈り込みは context editing の `clear_tool_uses_20250919` が既定で入力100,000トークンを閾値に古い tool_result を消し、直近3件を残す [出典](https://platform.claude.com/docs/en/build-with-claude/context-editing)。ただし刈り込みはプロンプトキャッシュのプレフィックスを無効化するため、1回あたりの削除量を確保する設計が要る。

可視化ツールの守備範囲も明確にしておく。OpenAI Agents SDK は `Runner.run()` 全体をトレースで包み、エージェント・生成・関数・ガードレール・ハンドオフの各スパンを自動生成する [出典](https://openai.github.io/openai-agents-python/tracing/)。OpenTelemetry の GenAI 規約もオペレーション名と属性を定義しつつある [出典](https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/gen-ai-agent-spans.md)。ただし同規約のスパンと属性は現時点で全て Development ステータスであり、安定版ではない。

届かない理由は非決定性である。同じプロンプトでも実行ごとに異なる判断をするため、トレースを見て仮説を立てても同じ経路を再現できない。再現性はチェックポイントからのリプレイや Event History に頼ることになる。実務上の配分はこうなる。可視化ツールは、どのツール呼び出しで失敗したか、どこでトークンが膨らんだかの特定に使う。修正の検証は個別トレースではなく評価セットで行う。状態の復元と再開は永続化層に任せる。

## 出力面の変化と、生成AI経由の流入をどう測るか

層構造の最後は出力の届き方である。ここでも、置き換えと縮小を混同すると規模を誤る。

生成AI経由の流入は、計測可能な規模にはなった。SE Ranking が250の国と地域の101,574サイトの Google Analytics データを2025年1月から2026年4月まで追跡した集計では、AI経由の流入は全流入の 0.32% である。2025年は 0.24%、2024年は 0.02% だった [出典](https://seranking.com/blog/ai-traffic-research-study/)。2年で16倍だが水準は1%未満である。他の計測も Contentsquare が 0.2%、Conductor が 1.08% で同じ桁に収まる。倍率だけを見て水準を見ないと規模を誤る。

流入元は ChatGPT に偏る。2026年のAI流入のうち ChatGPT が 74.78%、Gemini が 11.56%、Perplexity が 7.23%、Copilot が 3.51%、Claude が 2.62% である。送出の小ささはクローラ側からも裏が取れる。Cloudflare が定義するクロール対リファラ比では、Anthropic は2025年6月19日から26日の週で 70,900対1 だった [出典](https://blog.cloudflare.com/ai-search-crawl-refer-ratio-on-radar/)。

一方で、検索という既存の流入経路そのものが目減りしている。SparkToro が Similarweb のクリックストリームで2026年1月から4月の米国を集計した結果では、Google検索の 68.01% がクリックなしで終わる。2024年は 60.45% だった [出典](https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/)。Pew Research Center が米国成人900人の68,879件の Google 検索を2025年3月に追跡した調査では、AI要約があるとき従来型の検索結果へのクリックは 8%、ないときは 15% だった。AI要約内のリンクへのクリックは全訪問の 1% である [出典](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)。

つまり起きているのは生成AIによる検索の代替ではなく、検索1単位あたりの送客量の減少である。減った分をAI経由が埋める規模には達していない。

単価は別の話になる。Adobe の計測では、2026年3月の米国小売サイトでAI経由の訪問はそれ以外の訪問より42%高いコンバージョン率、37%高い訪問あたり売上、48%長い滞在時間を示した。2025年3月時点ではAI経由のコンバージョンは38%低かったので、1年で符号が反転している [出典](https://techcrunch.com/2026/04/16/ai-traffic-to-us-retailers-rose-393-in-q1-and-its-boosting-their-revenue-too/)。SE Ranking でも滞在時間はAI経由が9分19秒、オーガニック検索経由が5分33秒である。0.32%の流入がコンバージョン率で1.42倍なら、コンバージョン寄与は 0.45% 相当にとどまる。それでも分離して計測する価値はある。

最適化手法の側でも、置き換えは起きていない。Semrush が5,000キーワードと15万件超の引用を2025年7月に分析した結果では、Google AI Mode の引用は検索上位10件とドメインで約54%、URLで約35%重なる。Perplexity はドメインで91%超、URLで82%、AI Overviews はドメインで約86%、URLで約67%である [出典](https://www.semrush.com/blog/ai-mode-comparison-study/)。生成エンジンの多くは自前の巡回ではなく検索インデックスを検索して引用元を選ぶ。インデックスに載らないページは引用もされない。Google の公式ドキュメントも、AI Overviews や AI Mode に表示されるための追加要件や特別な最適化は存在しないと明記し、llms.txt のような機械可読ファイルもAI向けの特別なマークアップも不要としている [出典](https://developers.google.com/search/docs/appearance/ai-features)。これは Google についての記述であり、他エンジンへの一般化はできない。

変わるのは文の作りである。Aggarwal らは10,000クエリの GEO-bench で9手法を比較した。位置調整済み語数の指標で、最適化なしのベースラインは 19.3、引用の追加が 27.2、統計の追加が 25.2、出典明記が 24.6、流暢さの改善が 24.7 である [出典](https://arxiv.org/pdf/2311.09735)。効かない手法も同じ表に出ており、キーワード詰め込みは 17.7 でベースラインを下回った。ユニーク語の追加は 20.5 で有意差がない。

効き方は元の検索順位に依存する。同論文では、検索5位のソースに出典明記を適用した場合の可視性改善が 115.1%、引用追加が 99.7% である一方、検索1位のソースでは出典明記が -30.3%、引用追加が -22.9% と悪化する。既に上位のサイトにとっては守りの施策、中位以下にとっては攻めの施策になる。効く手法は分野でも違い、統計の追加は法律・行政、討論、意見で上位、引用の追加は社会、解説、歴史で上位である。

なお Aggarwal らの結果は合成環境のベンチマークである。実運用の生成エンジンでの再現性は確認できていない。

## この章の要点

- 強化学習は事前学習の代替ではなく積層である。kを大きく取った pass@k では base model が上回り、強化学習の到達点は base model に規定される。
- 蒸留は圧縮ではなく推論パターンの移転である。同一の 32B base で強化学習が AIME 2024 pass@1 47.0%、蒸留が 72.6% だった。ただし関数呼び出しやJSON出力など、教師データが覆わない能力は転写されない。
- RAG の故障は検索失敗と非根拠生成の2層に分かれる。文脈を与えても RAGTruth の17,790応答の 43.1% に非根拠区間が残った。RAGは発生率を下げる仕組みであり、除去する仕組みではない。
- faithfulness と grounding は別の指標である。前者は主張の支持率、後者は指示充足を前提にした合否判定であり、拒否応答の扱いが逆になる。どちらも検索の正しさと世界の事実性は測らない。
- RRF、rerank、federated search は代替ではなく直列である。正解文書が候補集合に入っていない再現率の問題は、rerank を足しても改善しない。
- 専用ベクトルDBの分岐点は件数ではなく、ベクトルのRAM所要量とテナント数である。1,536次元 float32 の1,000万ベクトルは Weaviate の目安式で約123GB になる。
- 視覚の誤認識はランダムな作話ではない。背景除去だけで平均正答率が 21.09ポイント上がる。最終回答一致型の指標には現れず、ステップ採点、知覚プローブ、画像なし対照の3点を併走させて初めて見える。
- エージェント基盤では、推論呼び出しをステートレスに保ち、状態を実行状態・長期記憶・耐久実行の3層に外置きする。書き込み権限をオーケストレータ1つに絞れば一貫性が保てる。
- 生成AI経由の流入は全流入の 0.32% で検索の代替になっていない。同時に Google検索の 68.01% がクリックなしで終わる。起きているのは代替ではなく既存経路の目減りである。

## 残っている問い

- 蒸留モデルが世界知識の広さをどれだけ失うかを定量化した一次資料が特定できていない。同一の蒸留モデル群を MMLU や事実想起系ベンチマークで教師と直接比較した表が必要である。
- OpenAI の o1 発表記事は素材収集時に HTTP 403 を返し、学習時計算量と推論時計算量の2軸スケーリング図の原文が確認できていない。xAI の Grok 4 発表ページも同様で、強化学習の計算量を事前学習と同規模にしたという主張は一次確認できていない。
- embedding モデルの選択が RAG 精度に与える影響の定量値が取れていない。chunk サイズと重なり幅についても、統制された一次実験データに到達できていない。実務では検証すべき変数だが、本章では数値を出していない。
- FACTS Grounding のリーダーボードの2026年8月時点の順位は確認できていない。本文に挙げた 83.6% は2024年12月公開時点の値である。
- 専用ベクトルDBと汎用DB拡張を同一条件で比較した第三者ベンチマークが取れていない。取得できたのはベンダー自身の主張のみである。これが取れれば規模の分岐点を数値で示せる。
- OpenAI Responses API の `max_tool_calls` の公式記述、および1リクエストあたりの関数定義数のハード上限は、Anthropic と OpenAI の双方で明示的な数値を確認できていない。
- GEO 施策の実施前後で自社の被引用率がどれだけ動いたかを実データで測った公開研究が見つかっていない。Aggarwal らの結果は合成環境のベンチマークである。
- Weaviate の企業規模に関する記述は2023年時点の内容しか取れておらず、2026年8月時点の実態を反映していない可能性が高い。

## 出典

1. Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?、NeurIPS 2025 — https://arxiv.org/abs/2504.13837
2. DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning、PDF全文 — https://www.thewirechina.com/wp-content/uploads/2025/01/DeepSeek-R1-Document.pdf
3. DeepSeek-R1 arXiv 掲載ページ — https://arxiv.org/abs/2501.12948
4. deepseek-ai/DeepSeek-R1 モデルカード — https://huggingface.co/deepseek-ai/DeepSeek-R1
5. Training compute of frontier AI models grows by 4-5x per year、Epoch AI — https://epoch.ai/publications/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year
6. Competitive Programming with Large Reasoning Models、OpenAI — https://arxiv.org/abs/2502.06807
7. Distillation Scaling Laws、Apple および University of Oxford — https://arxiv.org/abs/2502.08606
8. The FineWeb Datasets — https://arxiv.org/html/2406.17557v1
9. s1: Simple test-time scaling — https://arxiv.org/abs/2501.19393
10. RAGTruth: A Hallucination Corpus for Developing Trustworthy Retrieval-Augmented Language Models、ACL 2024 — https://aclanthology.org/2024.acl-long.585/
11. Vectara Hallucination Leaderboard — https://github.com/vectara/hallucination-leaderboard
12. Introducing Contextual Retrieval、Anthropic — https://www.anthropic.com/news/contextual-retrieval
13. FACTS Grounding、arXiv:2501.03200 — https://arxiv.org/abs/2501.03200
14. FACTS Grounding、Google DeepMind Blog — https://deepmind.google/discover/blog/facts-grounding-a-new-benchmark-for-evaluating-the-factuality-of-large-language-models/
15. Faithfulness、Ragas Documentation — https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/
16. Context Precision、Ragas Documentation — https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/context_precision/
17. Cormack, Clarke, Büttcher, Reciprocal Rank Fusion outperforms Condorcet and individual Rank Learning Methods、SIGIR 2009 — http://cormack.uwaterloo.ca/cormacksigir09-rrf.pdf
18. Reciprocal Rank Fusion、Elasticsearch Reference — https://www.elastic.co/docs/reference/elasticsearch/rest-apis/reciprocal-rank-fusion
19. Relevance and Ranking Overview、Azure AI Search — https://learn.microsoft.com/en-us/azure/search/search-relevance-overview
20. Hybrid Search Scoring、Azure AI Search — https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking
21. Multitenancy and Content Isolation、Azure AI Search — https://learn.microsoft.com/en-us/azure/search/search-modeling-multitenant-saas-applications
22. Agentic Retrieval Overview、Azure AI Search — https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview
23. Document-Level Access Control、Azure AI Search — https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview
24. pgvector リポジトリ README — https://github.com/pgvector/pgvector
25. pgvector README 原文 — https://raw.githubusercontent.com/pgvector/pgvector/master/README.md
26. Oracle AI Vector Search 概要 — https://docs.oracle.com/en/database/oracle/oracle-database/23/vecse/overview-ai-vector-search.html
27. Weaviate データ概念とマルチテナンシー — https://docs.weaviate.io/weaviate/concepts/data
28. Weaviate ベクトル索引概念 — https://docs.weaviate.io/weaviate/concepts/vector-index
29. Weaviate リソース計画 — https://docs.weaviate.io/weaviate/concepts/resources
30. Weaviate ベクトル量子化 — https://docs.weaviate.io/weaviate/concepts/vector-quantization
31. Weaviate 1.38 リリースノート — https://weaviate.io/blog/weaviate-1-38-release
32. Weaviate 料金 — https://weaviate.io/pricing
33. Pinecone 料金 — https://www.pinecone.io/pricing/
34. AlloyDB ベクトル検索 — https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search
35. Vision Language Models are Biased — https://arxiv.org/abs/2505.23941
36. Vision Language Models are Biased 本文 — https://arxiv.org/html/2505.23941v1
37. Improved Baselines with Visual Instruction Tuning — https://ar5iv.labs.arxiv.org/html/2310.03744
38. BLIP-2 — https://ar5iv.labs.arxiv.org/html/2301.12597
39. When and why vision-language models behave like bags-of-words — https://arxiv.org/abs/2210.01936
40. Eyes Wide Shut? Exploring the Visual Shortcomings of Multimodal LLMs — https://arxiv.org/html/2401.06209v2
41. Understanding the Limits of Vision Language Models Through the Lens of the Binding Problem — https://arxiv.org/html/2411.00238v2
42. Vision language models are blind — https://arxiv.org/abs/2407.06581
43. Why Is Spatial Reasoning Hard for VLMs? — https://arxiv.org/abs/2503.01773
44. BBA: Bi-Modal Behavioral Alignment for Reasoning with Large Vision-Language Models — https://arxiv.org/html/2402.13577v1
45. MathVerse — https://arxiv.org/abs/2403.14624
46. MathVerse 本文 — https://arxiv.org/html/2403.14624v2
47. Evaluating Object Hallucination in Large Vision-Language Models — https://ar5iv.labs.arxiv.org/html/2305.10355
48. Are We on the Right Way for Evaluating Large Vision-Language Models? — https://arxiv.org/abs/2403.20330
49. MMMU — https://ar5iv.labs.arxiv.org/html/2311.16502
50. Determining Chess Game State From an Image — https://arxiv.org/abs/2104.14963
51. End-to-End Chess Recognition — https://arxiv.org/abs/2310.04086
52. LangChain, LangGraph Persistence — https://docs.langchain.com/oss/python/langgraph/persistence
53. OpenAI, Agents SDK Sessions — https://openai.github.io/openai-agents-python/sessions/
54. OpenAI, Agents SDK Tracing — https://openai.github.io/openai-agents-python/tracing/
55. OpenAI, Function calling guide — https://developers.openai.com/api/docs/guides/function-calling
56. Anthropic, Tool use with Claude — https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview
57. Anthropic, Tool search tool — https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool
58. Anthropic, Context editing — https://platform.claude.com/docs/en/build-with-claude/context-editing
59. Anthropic, Advanced tool use — https://www.anthropic.com/engineering/advanced-tool-use
60. Anthropic, How we built our multi-agent research system — https://www.anthropic.com/engineering/multi-agent-research-system
61. Anthropic, Building effective agents — https://www.anthropic.com/engineering/building-effective-agents
62. Cognition, Don't Build Multi-Agents — https://cognition.com/blog/dont-build-multi-agents
63. Temporal, Understanding Temporal — https://docs.temporal.io/evaluate/understanding-temporal
64. OpenTelemetry, GenAI agent and framework spans — https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/gen-ai-agent-spans.md
65. SE Ranking, Analysis of Top AI Search Engines — https://seranking.com/blog/ai-traffic-research-study/
66. SparkToro, In 2026, Less than One Third of Google Searches Still Send a Click — https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/
67. Pew Research Center, Google users are less likely to click on links when an AI summary appears in the results — https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
68. Semrush, How Google's AI Mode Compares to Traditional Search and Other LLMs — https://www.semrush.com/blog/ai-mode-comparison-study/
69. Aggarwal et al., GEO: Generative Engine Optimization、KDD 2024 — https://arxiv.org/pdf/2311.09735
70. Google Search Central, AI Features and Your Website — https://developers.google.com/search/docs/appearance/ai-features
71. Cloudflare Blog, The crawl before the fall of referrals — https://blog.cloudflare.com/ai-search-crawl-refer-ratio-on-radar/
72. TechCrunch, AI traffic to US retailers rose 393% in Q1 — https://techcrunch.com/2026/04/16/ai-traffic-to-us-retailers-rose-393-in-q1-and-its-boosting-their-revenue-too/
73. Similarweb, AI Search Stats 2026 — https://www.similarweb.com/blog/marketing/geo/gen-ai-stats/
