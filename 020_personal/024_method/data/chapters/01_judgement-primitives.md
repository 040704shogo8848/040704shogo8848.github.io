---
section: method
chapter: 1
slug: judgement-primitives
title: 思考の型が壊れる境界
thesis: 実務で使われる思考の型には、それぞれ検証された判定基準と、判定基準が効かなくなる境界がある。型を覚えることと、型が使えない場面を見分けることは別の作業である。
---

# 思考の型が壊れる境界

思考の型は、覚えた時点では役に立たない。抽象度をどこまで下げるか、どの媒体を選ぶか、目的から引くか手段から組むか、といった判断が要るからである。そして型の説明はたいてい、その判断基準を書いていない。

この章は、このセクションに積み上がっていた5つの論点を1つずつ潰したものである。各論点には共通の構造があった。==型そのものは正しく、判定基準が欠けていたために使えなかった==。したがって以下では、型の紹介ではなく判定基準の特定に紙面を割く。加えて、判定基準が効かなくなる境界も書く。境界を知らないまま型を当てると、当たらない場所に当て続けることになる。

## 構造から学ぶとは、何を書き換えることか

「結果から学ぶのではなく構造から学ぶ」という言い方には、2つの未定義がある。抽象化をどこまで進めるか、そして構造を直したと言える条件は何か、である。

### 抽象度をどこまで下げるか

根本原因分析の実務規範は明快で、==対処すれば問題を防げる原因であり、かつ自分が制御または影響できる原因に到達したら止める==。5回という回数は経験則であって法則ではなく、3回で解決する問題もあり、系統的な問題では7回から8回を要する[出典](https://www.imd.org/blog/strategy/the-5-whys-technique/)。

ここで見落とされやすい非対称がある。調査と報告で使う抽象度は違ってよい。調査者は解決策を特定できる詳細さまで抽象度を下げる必要があるが、報告は伝達に適した高い抽象度で行う[出典](https://www.sologic.com/en-us/resources/blog/english/abstraction-levels)。==降りる粒度と語る粒度を同じにする必要はない==。「どの粒度で止めるか」という問いが答えにくかった理由の一部は、この2つを1つの問いとして立てていたことにある。

5回の反復そのものにも既知の弱点がある。単一の線形な因果連鎖に注意を集めるため、複数要因が絡む組織的な問題を捉えきれない。調査者の現有知識を超えられず、結果が反復可能でなく、単一の根本原因に収束させようとする傾向がある[出典](https://blog.thinkreliability.com/top-criticisms-of-the-5-why-approach)。したがって、系統的な問題では特性要因図など複数要因を並列に扱う手法と組み合わせる。

### 枝葉と構造を見分ける判定基準

こちらには明確な基準がある。アージリスとショーンの単一ループ学習と二重ループ学習である。行動を修正するのが単一ループ、==行動を規定している支配変数、すなわち方針・誘因・前提そのものを疑うのが二重ループ==である[出典](https://infed.org/dir/welcome/chris-argyris-theories-of-action-double-loop-learning-and-organizational-learning/)。

実務上重要なのは、この区別が自己申告では判定できない点である。二重ループ学習に関する体系的レビューは、==場当たり的な対応から根本原因分析へ移行しただけでは二重ループの証拠にならない==と指摘する。支配変数が実際に変わったこと、そしてその変化の結果として行動が変わったことの両方が要る[出典](https://onlinelibrary.wiley.com/doi/10.1111/emre.12615)。

<figure class="tb-fig">
<svg viewBox="0 0 720 262" role="img" aria-label="単一ループ学習と二重ループ学習の違い">
  <g font-size="12">
    <rect x="150" y="46" width="130" height="40" rx="7" fill="var(--dim)" stroke="var(--line)"/>
    <text x="215" y="70" fill="var(--ink)" text-anchor="middle">支配変数</text>
    <text x="215" y="102" font-size="10.5" fill="var(--muted)" text-anchor="middle">方針・誘因・前提</text>

    <rect x="340" y="46" width="110" height="40" rx="7" fill="var(--card)" stroke="var(--line)"/>
    <text x="395" y="70" fill="var(--ink)" text-anchor="middle">行動</text>

    <rect x="510" y="46" width="110" height="40" rx="7" fill="var(--card)" stroke="var(--line)"/>
    <text x="565" y="70" fill="var(--ink)" text-anchor="middle">結果</text>

    <path d="M280 66 L332 66" stroke="var(--line)" stroke-width="1.5"/>
    <path d="M324 61 L332 66 L324 71" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <path d="M450 66 L502 66" stroke="var(--line)" stroke-width="1.5"/>
    <path d="M494 61 L502 66 L494 71" fill="none" stroke="var(--line)" stroke-width="1.5"/>
  </g>

  <path d="M565 92 L565 132 L395 132 L395 92" fill="none" stroke="var(--cool)" stroke-width="1.8"/>
  <path d="M400 100 L395 92 L390 100" fill="none" stroke="var(--cool)" stroke-width="1.8"/>
  <text x="480" y="150" font-size="11.5" fill="var(--cool)" text-anchor="middle">単一ループ：行動を直す</text>

  <path d="M565 92 L565 188 L215 188 L215 92" fill="none" stroke="var(--accent)" stroke-width="1.8"/>
  <path d="M220 100 L215 92 L210 100" fill="none" stroke="var(--accent)" stroke-width="1.8"/>
  <text x="390" y="206" font-size="11.5" fill="var(--accent)" text-anchor="middle">二重ループ：支配変数を疑う</text>

  <line x1="12" y1="224" x2="708" y2="224" stroke="var(--grid)"/>
  <text x="12" y="246" font-size="11" fill="var(--muted)">「構造を直した」と言えるのは、左の箱が書き換わり、その結果として中の箱が変わったときだけである。</text>
  <text x="12" y="258" font-size="11" fill="var(--muted)">根本原因分析に取り組んだこと自体は、二重ループの証拠にならない。</text>
</svg>
<figcaption>単一ループと二重ループの差は、フィードバックがどこへ戻るかにある。判定は意図ではなく、支配変数の変化の有無で行う。</figcaption>
</figure>

<div class="tb-key"><b>この節の判定基準</b>
抽象度は「自分が制御または影響できる水準」で止める。調査は深く降り、報告は高い抽象度で行う。そして構造を直したと主張するには、方針・誘因・前提のどれかが実際に書き換わった証跡と、それによる行動変化の両方を示す。どちらか一方では単一ループである。</div>

## 質と量の前に、多義性を測る

「一世一代の場面は質、日常は量」という配分は、経験としては妥当である。ただしこれを判断基準に使うには、場面の重要度ではなく別の変数で測る必要がある。

### 意味的密度は単一の尺度では測れない

媒体の濃さを扱う理論はある。ダフトとレンゲルのメディアリッチネス理論は、フィードバックの速さ、手がかりの数、自然言語の使用、個人志向という4次元で媒体を濃いものから薄いものへ並べる[出典](https://en.wikipedia.org/wiki/Media_richness_theory)。ただし厳密な順位づけへの実証支持は一貫していない。1990年代後半の実験では、フィードバックと手がかりが成果に効く一方、電子メールのような新しい媒体では多義的な課題に対する予測が弱まり、同期性を補完変数として置く必要が示された[出典](https://grokipedia.com/page/Media_richness_theory)。

代わりに使える区別がある。同理論は伝達すべき情報の欠落を2種類に分ける。==不確実性は事実が足りない状態で、多義性は解釈が複数ありうる状態である==。薄い媒体は不確実性の低減に向き、濃い媒体は多義性の低減に向く[出典](https://www.communicationtheory.org/media-richness-theory/)。

<div class="tb-vs">
<div><h5>不確実性が高い場合</h5>
<ul>
<li><strong>足りないのは事実</strong>。数値、日程、仕様</li>
<li>薄い媒体で足りる。文書、メール、チャット</li>
<li>量を増やすことが有効に働く</li>
<li>誤りは「知らない」という形で現れる</li>
</ul></div>
<div><h5>多義性が高い場合</h5>
<ul>
<li><strong>足りないのは解釈の一致</strong>。何を良しとするか、誰が何を優先しているか</li>
<li>濃い媒体が要る。対面、通話</li>
<li>量を増やしても収束しない。手がかりの数が要る</li>
<li>誤りは「合意したつもり」という形で現れる</li>
</ul></div>
</div>

<p>この置き換えが実務上の意味を持つのは、==重要度と多義性が一致しないことがある==点にある。重要だが多義性の低い連絡は文書で足り、日常的だが多義性の高い会話は対面が要る。質と量という軸で切ると、この2つを取り違える。</p>

### 相手の知覚領域は、判定するより較正する

「相手の知覚領域を即座に判定する技術」は、問いの立て方に無理がある。クラークの共通基盤の理論では、共通基盤は相互知識・相互信念・相互前提の集合であり、これは会話の中でグラウンディングという相互行為を通じて漸次的に更新される[出典](https://en.wikipedia.org/wiki/Grounding_in_communication)。==一方が事前に判定して終わる対象ではなく、往復によって作られる状態である==。

そして往復のコスト配分に、実務に落ちる原則がある。最小協調努力の原則は、個々の受け手の負担ではなく参加者全体の負担の合計を最小化する、という考え方である。同原則の含意として、==完璧な発話を作るコストは、生じた誤解を共同で修復するコストを上回ることがある==[出典](https://www-users.york.ac.uk/~am1/Monk2003CommonGrnd.pdf)。

したがって取るべき行動は、判定精度を上げることではなく往復回数を確保することになる。短く出して反応で較正するほうが、完全な理解を推定してから一度で当てにいくより総コストが低い。会話が進むにつれて参加者は既出の要素への短い参照を発達させ、使う語数が減っていく。これは共通基盤が蓄積した結果である。

## 目的から引くか、手段から組むか

エフェクチュエーションとコーゼーションを「不確実性の高さで使い分ける」と理解すると、切り替え点を決められない。不確実性は連続量であり、どこに閾値を置くかの根拠が出てこないからである。

### 切り替えは水準ではなく条件の充足で決まる

サラスバシーの整理では、因果論的推論が有効なのは3つの条件が揃う領域である。将来が予測可能であること、目標が既知であること、そして外生的な環境が最終的な選択機構として働くこと[出典](https://cdn.mises.org/sarasvathy_2001_causation_and_effectuation.pdf)。==この3つのどれかが欠けた時点で、因果論は行動の基準を与えられなくなる==。連続量の閾値ではなく条件分岐である。

具体的な線引きも示されている。既知の市場に向けた既存技術のように事前の知識が競争優位の源泉になる場合は因果論が適し、市場が未知または複数ありうる新技術では、予期せず生じる偶発性を活用できるエフェクチュエーションが適する[出典](https://effectuation.org/publications-library/causation-and-effectuation-toward-a-theoretical-shift-from-economic-inevitability-to-entrepreneurial-contingency)。

<figure class="tb-fig">
<svg viewBox="0 0 720 268" role="img" aria-label="因果論が成立する3条件と、欠けた場合の切り替え">
  <text x="12" y="18" font-size="11" fill="var(--muted)">因果論的推論が基準を与えられる条件</text>
  <g font-size="12.5">
    <rect x="12" y="30" width="300" height="38" rx="6" fill="var(--card)" stroke="var(--line)"/>
    <text x="28" y="54" fill="var(--ink)">1　将来が予測可能</text>

    <rect x="12" y="76" width="300" height="38" rx="6" fill="var(--card)" stroke="var(--line)"/>
    <text x="28" y="100" fill="var(--ink)">2　目標が既知</text>

    <rect x="12" y="122" width="300" height="38" rx="6" fill="var(--card)" stroke="var(--line)"/>
    <text x="28" y="146" fill="var(--ink)">3　環境が選択機構として働く</text>

    <path d="M162 68 l0 8M162 114 l0 8" stroke="var(--line)" stroke-width="1.5"/>

    <rect x="12" y="176" width="300" height="38" rx="6" fill="var(--dim)" stroke="var(--line)"/>
    <text x="28" y="200" fill="var(--ink)">3つ揃う</text>
    <text x="180" y="200" font-size="11.5" fill="var(--cool)">→ コーゼーション</text>
  </g>

  <g>
    <path d="M320 49 L392 49M320 95 L392 95M320 141 L392 141" stroke="var(--warm)" stroke-width="1.5"/>
    <path d="M384 44 L392 49 L384 54M384 90 L392 95 L384 100M384 136 L392 141 L384 146"
      fill="none" stroke="var(--warm)" stroke-width="1.5"/>
    <rect x="400" y="76" width="308" height="66" rx="8" fill="#EEF2FF" stroke="#D5DDF7"/>
    <text x="416" y="102" font-size="12.5" fill="var(--ink)">いずれか1つでも欠けた時点で</text>
    <text x="416" y="126" font-size="12.5" fill="var(--deep)" font-weight="600">→ エフェクチュエーション</text>
  </g>
  <text x="400" y="60" font-size="11" fill="var(--warm)">欠ける</text>

  <line x1="12" y1="232" x2="708" y2="232" stroke="var(--grid)"/>
  <text x="12" y="252" font-size="11" fill="var(--muted)">連続量の閾値ではなく条件分岐である。不確実性が「どれだけ高いか」ではなく、3条件の充足で決まる。</text>
  <text x="12" y="264" font-size="11" fill="var(--muted)">ただし実際の事業創造では両者が同時に用いられ、切り替えより配合の問題として現れる。</text>
</svg>
<figcaption>切り替え点を決められなかった理由は、不確実性を連続量として見ていたことにある。判定は水準ではなく3条件の充足で行う。</figcaption>
</figure>

ただし二者択一として扱うのは実態と合わない。事業創造の過程を追った研究は、両者が同時に用いられることと、その併用から生じる緊張を報告している[出典](https://sms.onlinelibrary.wiley.com/doi/full/10.1002/sej.1413)。==切り替えの問題ではなく配合の問題として扱うほうが実務に近い==。

### 五原則をどこで検証するか

五原則は、それぞれ観測可能な指標に翻訳すれば実務で検証できる。原則の名前を覚えることと、自分がその原則で動けているかを測ることは別である。

| 原則 | 内容 | 実務での観測点 |
| --- | --- | --- |
| 手中の鳥 | 手持ちの手段から始め、目標は手段から立ち上がる | 着手時点で新規に調達した資源の割合。高ければ因果論側に寄っている |
| 許容可能な損失 | 期待利益ではなく、失っても許せる額を基準にする | 撤退基準を金額で事前に置いたかどうか |
| クレイジーキルト | 提携相手を集め、資源を共有して共に機会を探す | 同じ市場の他社を競合と見るか協働相手と見るか |
| レモネード | 偶発性を機会として活用する | 計画外の事象が新しい取り組みに転換された件数 |
| 飛行機のパイロット | 予測ではなく制御によって将来に働きかける | 予測に基づく行動と、自分が動かせる変数への行動の比 |

<p class="fn">出典は五原則の定義部分[出典](https://arxiv.org/pdf/2311.14340)。観測点の列はノート筆者による対応づけであり、検証された尺度ではない。妥当性が検証された測定尺度は研究用に存在するが[出典](https://effectuation.org/hubfs/Journal%20Articles/2017/05/Causation-and-effectuation-processes.pdf)、構成が本表と一致しない。ChandlerとDeTienneらの検証研究では、コーゼーションが一次元の構成概念であるのに対し、エフェクチュエーションは実験、許容可能な損失、柔軟性という3つの下位次元と、コーゼーションと共有する事前コミットメントの1次元からなる形成的な多次元構成概念として測定される[出典](https://effectuation.org/publications-library/causation-and-effectuation-processes-a-validation-study)。==五原則のうち手中の鳥とクレイジーキルトは、検証済み尺度では独立の次元として立っていない==。同研究は、コーゼーションが不確実性と負の相関を持ち、下位次元の実験が正の相関を持つことも報告している、質問項目数が多く自己診断には向かない。</p>

## 検索の実効的な語彙

作業効率の型のうち、検索は最も答えが確定している領域である。2026年時点で確実に機能する演算子は約25個であり、廃止されたものも特定できる。

| 区分 | 演算子 | 備考 |
| --- | --- | --- |
| **機能する** | `site:` `intitle:` `inurl:` `filetype:` | 2026年時点で問題なく動作する |
| **機能する** | `allintitle:` `intext:` `allintext:` | allintitle は指定語すべてがタイトルに含まれるページを返す |
| **機能する** | 完全一致の引用符、`OR`、マイナス | 論理演算の中核 |
| **機能する** | `after:` `before:` | 期間の絞り込み |
| **廃止** | `link:` `+` `~` `info:` | 動作しない |
| **廃止** | `cache:` | 2024年初に廃止。2010年以降で少なくとも12個が廃止されている |

<p>出典は演算子の一覧と廃止時期[出典](https://kinsta.com/blog/google-search-operators/)。実務上効くのは単体ではなく組み合わせで、==<code>site:</code> と <code>filetype:pdf</code> に <code>intitle:</code> または <code>after:</code> を重ねる3段から4段の指定が、一次資料に到達する最短経路になる==。構文上の注意が1つある。<code>site:example.com</code> のコロンの後に空白を入れると演算子として解釈されず、「site:」という語の検索になる。</p>

<div class="tb-key"><b>この節で答えが出なかった部分</b>
常時開くタブの構成と、用途別カスタム指示の細分化については、検証された規範が見つからなかった。どちらも作業内容に依存し、一般解を置ける根拠がない。演算子のように「動くか動かないか」で判定できる対象ではないため、⑦の残っている問いへ移した。</div>

## 解像度の四分割はどこで使えないか

「わかること・わからないこと・試すべき内容・そこから得たい報酬」という四分割は、既知と未知を切り分ける枠組みとして機能する。近い構造を持つのがラムズフェルド行列で、既知の既知、既知の未知、未知の未知、未知の既知の4象限に知識を分類する[出典](https://www.theuncertaintyproject.org/tools/rumsfeld-matrix)。

崩れる場所は2つある。

第一に、==未知の未知は定義上列挙できないため、この象限に資源を配分できない==。行列は不確実性を管理可能な塊に分けて優先順位づけを助けるとされるが、優先順位をつけられるのは既知の既知と既知の未知の2象限に限られる。未知の未知を減らす手段は分析ではなく、探索と多様な視点と早い試行という行動である。分析の枠として使いながら行動の枠と混同すると、列挙できない象限を睨んで時間を使うことになる。

第二に、未知の既知、すなわち組織のどこかにはあるが意思決定者に届いていない知識は、思考の粒度の問題ではなく情報流通の問題である。個人の思考法を精緻にしても解けない。

<div class="tb-key"><b>使える範囲</b>
四分割は思考を整理する枠としては有効で、資源配分の道具としては2象限にしか使えない。残る2象限のうち、未知の未知は行動で減らし、未知の既知は情報流通の設計で減らす。同じ図の中に、思考で扱う領域と扱えない領域が混在している。</div>

### 行動力を分解する

「行動力」という語は粒度が粗すぎて打ち手に変換できない。少なくとも4つの成分に分解できる。

ゴルヴィツァーとシーランの実行意図に関するメタ分析は、94件の独立した検証、8,000人超を対象に、==目標達成への効果量を d=0.65 と報告している==[出典](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8149892/)。この0.65は目標達成全体に対する値だが、自己制御上の問題ごとの分解も出ている。着手できないという問題に対しては d=.61、進行中の目標が脱線するのを防ぐ働きに対しては d=.77 である[出典](https://www.researchgate.net/publication/37367696_Implementation_Intentions_and_Goal_Achievement_A_Meta-Analysis_of_Effects_and_Processes)。==遮蔽のほうが着手より効果量が大きい==。始められないことより、始めた後に崩れることのほうが、事前の取り決めで防ぎやすいという読みになる。実行意図とは「状況Yに遭遇したら、行動Xを開始する」という形で、いつ・どこで・どうやるかを事前に決めておくことである。同分析が効果を確認した対象は1つではない。

<ul class="tb-tl">
<li><b>成分1 着手</b>目標追求の<strong>開始</strong>。事前に状況と行動を紐づけておくことで、その場の判断を省く</li>
<li><b>成分2 遮蔽</b>進行中の目標追求を、望まない干渉から<strong>守る</strong>こと</li>
<li><b>成分3 撤退</b>失敗しつつある行動から<strong>離脱</strong>すること。継続と同じく能力の問題である</li>
<li><b>成分4 自己効力感</b>できるという見込み。自己効力感の強化を含む介入は、含まない介入の<strong>約3倍</strong>の効果を示し、含まない介入の効果は小さいか統計的に有意でない</li>
</ul>

<p class="fn">成分1から3は実行意図のメタ分析が効果を確認した領域[出典](https://www.researchgate.net/publication/37367696_Implementation_Intentions_and_Goal_Achievement_A_Meta-Analysis_of_Effects_and_Processes)、成分4は自己効力感の寄与に関する報告である[出典](https://uxpsychology.substack.com/p/from-intentions-to-actions-achieving)。4成分という区切り方はノート筆者による整理であり、確立した分類ではない。</p>

<p>この分解が効くのは診断の場面である。==「行動力がない」という記述では、着手できないのか、途中で干渉に負けるのか、撤退できず塩漬けにしているのか、そもそもできると思えていないのかが区別されない==。4つはそれぞれ別の介入に対応する。着手には実行意図、遮蔽には環境設計、撤退には事前の撤退基準、自己効力感には小さい成功の蓄積である。「解像度を上げると打ち手の数が増える」という当初の観察は、この構造を指していたことになる。</p>

<p class="fn">なお解像度そのものを扱う枠としては、深さ・広さ・構造・時間の4視点という整理がある。深さが原因追求、広さが視野の拡大、構造が情報の整理、時間が将来の予測に対応する[出典](https://blog.takaumada.com/entry/book-clearness-intro)。本章の第1節は深さ、第5節は構造と時間に対応しており、独立に立てた5つの論点が同じ枠の別の面を見ていたことになる。</p>

## この章の要点

- 抽象度は「自分が制御または影響できる水準」で止める。5回という回数は経験則で、3回から8回まで対象によって変わる。加えて、調査で降りる粒度と報告で語る粒度は分けてよい。
- 構造を直したと言えるのは、方針・誘因・前提のどれかが書き換わり、その結果として行動が変わったときだけである。根本原因分析に取り組んだこと自体は二重ループ学習の証拠にならない。
- 媒体の選択は重要度ではなく多義性で決まる。事実が足りない不確実性は薄い媒体で足り、解釈が一致しない多義性には濃い媒体が要る。重要度と多義性は一致しないことがある。
- 相手の知覚領域は事前に判定する対象ではなく、往復で作る状態である。最小協調努力の原則により、完璧な発話を作るコストは誤解を共同修復するコストを上回ることがある。短く出して較正するほうが総コストが低い。
- エフェクチュエーションへの切り替えは不確実性の水準ではなく条件で決まる。予測可能性・目標の既知性・環境の選択機構という3条件のどれかが欠けた時点で因果論は基準を与えられない。実態としては切り替えより配合である。
- 検索演算子で2026年時点に機能するのは約25個。`site:` `intitle:` `inurl:` `filetype:` `allintitle:` `intext:` と引用符・OR・マイナス・`after:`。`link:` `+` `~` `info:` `cache:` は廃止。効くのは3段から4段の組み合わせである。
- 既知と未知の四分割は、資源配分の道具としては2象限にしか使えない。未知の未知は列挙できないため行動で減らし、未知の既知は情報流通の設計で減らす。
- 行動力は着手・遮蔽・撤退・自己効力感の4成分に分解できる。実行意図の効果量は d=0.65（94件、8,000人超）、自己効力感の強化を含む介入は含まない介入の約3倍の効果を示す。4つはそれぞれ別の介入に対応する。

## 残っている問い
- 常時開くタブの構成について、検証された規範を確認できていない。作業内容への依存が大きく、一般解を置ける根拠がない。自分の1週間のタブ切り替え回数と、切り替え先の分布を記録すれば、少なくとも自分にとっての最適配置は測れる。
- 用途別カスタム指示の細分化の限度を確認できていない。細分化のコストは指示の保守と選択にかかり、便益は出力の適合度に出る。両方を同じ単位で測る方法がない。
- 意味的密度の直接的な測定尺度を確認できていない。メディアリッチネス理論の4次元は媒体の属性であって、個々の発話の密度ではない。発話単位の密度を測る指標が存在するかは未確認である。
- 多義性の水準を事前に判定する手順を確認できていない。事後には「合意したつもり」の発生で分かるが、着手前に多義性の高低を見分ける基準が要る。
- エフェクチュエーションの3条件のうち、目標の既知性をどう判定するかが曖昧なまま残っている。目標が既知でないことと、目標が複数あることは別の状態である。
- 自己効力感の「約3倍」という比較は、介入の種類が揃っていない可能性がある。比較対象の介入設計を確認できていない。
## 出典

1. IMD「The 5 Whys technique」（回数は経験則であり、制御・影響できる原因に到達したら止める） — https://www.imd.org/blog/strategy/the-5-whys-technique/
2. Sologic「Abstraction Levels」（調査は低い抽象度へ、報告は高い抽象度で） — https://www.sologic.com/en-us/resources/blog/english/abstraction-levels
3. ThinkReliability「Top Criticisms of the 5-Why Approach」（単一の線形因果連鎖、調査者の知識の限界、反復不可能性） — https://blog.thinkreliability.com/top-criticisms-of-the-5-why-approach
4. infed.org「Chris Argyris: theories of action, double-loop learning and organizational learning」（支配変数を疑うことが二重ループ） — https://infed.org/dir/welcome/chris-argyris-theories-of-action-double-loop-learning-and-organizational-learning/
5. European Management Review「Revitalizing double-loop learning in organizational contexts: A systematic review」（根本原因分析への移行だけでは二重ループの証拠にならない） — https://onlinelibrary.wiley.com/doi/10.1111/emre.12615
6. Wikipedia (en)「Media richness theory」（4次元による媒体の順位づけ） — https://en.wikipedia.org/wiki/Media_richness_theory
7. Grokipedia「Media richness theory」（1990年代後半の実験、同期性を補完変数とする指摘） — https://grokipedia.com/page/Media_richness_theory
8. Communication Theory「Media Richness Theory」（不確実性は薄い媒体、多義性は濃い媒体） — https://www.communicationtheory.org/media-richness-theory/
9. Wikipedia (en)「Grounding in communication」（共通基盤とグラウンディング） — https://en.wikipedia.org/wiki/Grounding_in_communication
10. Monk, A.「Common Ground in Electronically Mediated Communication: Clark's Theory of Language Use」（最小協調努力の原則） — https://www-users.york.ac.uk/~am1/Monk2003CommonGrnd.pdf
11. Sarasvathy, S.「Causation and Effectuation: Toward a Theoretical Shift from Economic Inevitability to Entrepreneurial Contingency」（因果論が有効な3条件） — https://cdn.mises.org/sarasvathy_2001_causation_and_effectuation.pdf
12. Society for Effectual Action「Causation and Effectuation」解説ページ（既知市場の既存技術と、未知または複数市場の新技術） — https://effectuation.org/publications-library/causation-and-effectuation-toward-a-theoretical-shift-from-economic-inevitability-to-entrepreneurial-contingency
13. Galkina, T. et al.「From tensions to synergy: Causation and effectuation in the process of venture creation」Strategic Entrepreneurship Journal 2022（両者の同時使用と緊張） — https://sms.onlinelibrary.wiley.com/doi/full/10.1002/sej.1413
14. arXiv:2311.14340「Impact of effectual propensity on entrepreneurial intention」（五原則の定義） — https://arxiv.org/pdf/2311.14340
15. Chandler, G. et al.「Causation and effectuation processes: A validation study」（検証済み測定尺度） — https://effectuation.org/hubfs/Journal%20Articles/2017/05/Causation-and-effectuation-processes.pdf
16. Kinsta「Google Search Operators: In-Depth List of 40 Commands to Know in 2026」（機能する演算子と廃止された演算子、構文の注意） — https://kinsta.com/blog/google-search-operators/
17. The Uncertainty Project「Rumsfeld Matrix」（4象限の分類と用途） — https://www.theuncertaintyproject.org/tools/rumsfeld-matrix
18. Cross, R. et al.「A Meta-Analysis of the Effects of Mental Contrasting With Implementation Intentions on Goal Attainment」（94件、8,000人超、d=0.65） — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8149892/
19. Gollwitzer, P. & Sheeran, P.「Implementation Intentions and Goal Achievement: A Meta-Analysis of Effects and Processes」（着手・遮蔽・撤退への効果） — https://www.researchgate.net/publication/37367696_Implementation_Intentions_and_Goal_Achievement_A_Meta-Analysis_of_Effects_and_Processes
20. UX Psychology「From Intentions to Actions: Achieving Goals with Implementation Intentions」（自己効力感を含む介入の効果差） — https://uxpsychology.substack.com/p/from-intentions-to-actions-achieving
21. 馬田隆明「『解像度を上げる』の概要とポイントが5分で分かる、著者自身による解説」（深さ・広さ・構造・時間の4視点） — https://blog.takaumada.com/entry/book-clearness-intro
