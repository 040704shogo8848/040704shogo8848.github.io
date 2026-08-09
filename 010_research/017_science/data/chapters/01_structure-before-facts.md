---
section: science
chapter: 1
slug: structure-before-facts
title: 構造を先に置く思考
thesis: 科学の強さは事実を集めきることではなく、先に構造を仮定して未知の場所を名指しできるところにあり、線形代数と周期表は同じ型の道具である。
---

科学の教科書は、確定した事実の一覧として書かれることが多い。==だが実際に効いてきたのは、事実の数ではなく、事実を置く枠のほうである==。1869年に周期表が提示された時点で、手元にあった元素は56個から63個にとどまる。現在の118元素の半分程度である。それでも、まだ見ていない元素の密度を小数第1位まで書き下すことができた。表という構造を先に置いたからである。

同じことが数学でも起きている。連立一次方程式を解く手続きは紀元1世紀ごろから存在したが、それをベクトル空間という枠で言い直したのは1888年である。手続きが先にあり、構造は1800年後に来た。そして構造が来た瞬間に、同じ言葉で3次元も1000次元も扱えるようになった。

この章で扱うのは、その枠の作り方と使い方、そして枠が壊れる場所の見つけ方である。枠を知らずに事実を集めると、集め終わるまで何も言えない。枠を先に置けば、集め終わる前に、どこに何が無いかを名指しできる。

<figure class="tb-fig">
<svg viewBox="0 0 720 244" role="img" aria-label="構造を先に置くと未知の場所を名指しできる">
  <text x="12" y="18" font-size="11" fill="var(--muted)">事実を集めきる進み方</text>
  <text x="380" y="18" font-size="11" fill="var(--muted)">構造を先に置く進み方</text>

  <g font-size="11.5">
    <rect x="12" y="30" width="330" height="126" rx="8" fill="var(--dim)" stroke="var(--line)"/>
    <g fill="#B9B2A6">
      <rect x="34" y="52" width="26" height="26" rx="3"/><rect x="66" y="52" width="26" height="26" rx="3"/>
      <rect x="98" y="52" width="26" height="26" rx="3"/><rect x="162" y="52" width="26" height="26" rx="3"/>
      <rect x="34" y="84" width="26" height="26" rx="3"/><rect x="98" y="84" width="26" height="26" rx="3"/>
      <rect x="130" y="84" width="26" height="26" rx="3"/><rect x="194" y="84" width="26" height="26" rx="3"/>
      <rect x="66" y="116" width="26" height="26" rx="3"/><rect x="162" y="116" width="26" height="26" rx="3"/>
    </g>
    <text x="234" y="70" fill="var(--sub)">集めた事実が</text>
    <text x="234" y="88" fill="var(--sub)">並んでいるだけで、</text>
    <text x="234" y="106" fill="var(--sub)">欠けている場所を</text>
    <text x="234" y="124" fill="var(--sub)">指させない</text>

    <rect x="380" y="30" width="328" height="126" rx="8" fill="#EEF2FF" stroke="#D5DDF7"/>
    <g fill="#6892EF">
      <rect x="402" y="52" width="26" height="26" rx="3"/><rect x="434" y="52" width="26" height="26" rx="3"/>
      <rect x="466" y="52" width="26" height="26" rx="3"/><rect x="530" y="52" width="26" height="26" rx="3"/>
      <rect x="402" y="84" width="26" height="26" rx="3"/><rect x="466" y="84" width="26" height="26" rx="3"/>
      <rect x="498" y="84" width="26" height="26" rx="3"/><rect x="562" y="84" width="26" height="26" rx="3"/>
      <rect x="434" y="116" width="26" height="26" rx="3"/><rect x="530" y="116" width="26" height="26" rx="3"/>
    </g>
    <g fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3">
      <rect x="434" y="84" width="26" height="26" rx="3"/><rect x="498" y="52" width="26" height="26" rx="3"/>
      <rect x="530" y="84" width="26" height="26" rx="3"/><rect x="466" y="116" width="26" height="26" rx="3"/>
    </g>
    <text x="602" y="70" fill="var(--deep)">空白の位置が</text>
    <text x="602" y="88" fill="var(--deep)">枠から決まり、</text>
    <text x="602" y="106" fill="var(--deep)">性質まで予測</text>
    <text x="602" y="124" fill="var(--deep)">できる</text>
  </g>
  <line x1="12" y1="176" x2="708" y2="176" stroke="var(--grid)"/>
  <g font-size="11.5">
    <text x="12" y="200" fill="var(--ink)">周期表 1869年</text>
    <text x="150" y="200" fill="var(--sub)">手元の元素は56から63個。現在の118元素の半分で、未発見元素の密度を書けた</text>
    <text x="12" y="226" fill="var(--ink)">ベクトル空間 1888年</text>
    <text x="150" y="226" fill="var(--sub)">解法は紀元1世紀からあった。構造は1800年遅れて来て、3次元と1000次元を同じ語で扱えるようにした</text>
  </g>
</svg>
<figcaption>枠を知らずに事実を集めると、集め終わるまで何も言えない。枠を先に置けば、集め終わる前に、どこに何が無いかを名指しできる。破線が名指しされた空白にあたる。</figcaption>
</figure>

## 個別の計算を一般化するとき何が起きるか

連立一次方程式を消去法で解く手続きは、九章算術の第8章、方程にすでにある。成立は紀元1世紀ごろと推定されている[出典](https://en.wikipedia.org/wiki/Nine_Chapters_on_the_Mathematical_Art)。関孝和が行列式を扱ったのが1683年、ライプニッツによる体系的な扱いが1693年、クラメルの公式が1750年である[出典](https://en.wikipedia.org/wiki/Linear_algebra)。ここまではすべて、与えられた方程式から答えを出すための技法である。

一般化が起きたのはその後である。1844年にグラスマンが拡大論で線形独立と次元と内積を扱い、1848年にシルベスターが matrix という語を導入し、1856年にケイリーが行列の積と逆行列を定めた。そして1888年にペアノが、ベクトル空間と線形写像の現代的な定義を与えた[出典](https://en.wikipedia.org/wiki/Vector_space)。計算技法の最古の記録から、公理的な定義まで1800年以上かかっている。

一般化で何が変わったのかを、3点に分けて述べる。

第1に、対象が入れ替わる。それまでの主役は「この方程式の答え」だった。一般化のあとの主役は「係数の並びが持つ性質」になる。同じ行列を、方程式の係数と見ることも、データの表と見ることも、写像の表現と見ることもできる。

第2に、問いの立て方が変わる。答えが1つに決まるかどうかを聞く代わりに、どれだけの自由度が残るかを聞くようになる。掃き出し法は答えを出す道具であると同時に、rank すなわち独立な行の本数を出す道具でもある[出典](https://en.wikipedia.org/wiki/Gaussian_elimination)。前者は個別の答えだが、後者は構造の記述である。

第3に、通用範囲が変わる。有限次元の線形代数は、四則演算と論理だけで閉じる。極限も連続性も要らない。だから未知数が3個でも3万個でも、同じ定義がそのまま動く。

ここで注意が要る。一般化は自動的に計算を速くしない。抽象化の負荷そのものも研究対象になっている。DorierとSierpinskaは学生の困難の源を3つに整理した。数学的な言語と理論的概念そのもの、証明が難しいと受け取られる教え方、そして実務的な表現と理論的な表現を行き来する認知的な柔軟性である。1つ目を形式主義の障害と呼んだ[出典](https://link.springer.com/chapter/10.1007/0-306-47224-4_2)。==形式的な記号を対象そのものと取り違え、意味を伴わずに機械的に操作してしまう状態を指す==。n次のフル行列に対する掃き出し法の演算回数は、乗算と減算がそれぞれ2nの3乗足す3nの2乗引く5nを6で割った回数である[出典](https://en.wikipedia.org/wiki/Gaussian_elimination)。LAPACK も1右辺の線形求解の基準演算数を0.67掛けるNの3乗として扱う[出典](https://www.netlib.org/lapack/lug/node71.html)。この式に rank は入らない。rank が下がっても、密行列を素直に解く限り手順は短くならない。

短くなるのは、低 rank という構造を表現に持ち込んだときだけである。m行n列の行列を rank k で表すと、記憶量は m 掛ける n から k 掛ける m 足す n へ落ちる。行列ベクトル積も同じ比率で落ちる。さらに、その低 rank 表現を得るコスト自体も下がっている。上位k個の特異値と特異ベクトルを取る古典的手法は m 掛ける n 掛ける k に比例する演算を要するが、乱択アルゴリズムは m 掛ける n 掛ける log k に比例する演算で済む。データへのパス数も、古典手法の k に比例する回数から定数回に落ちる[出典](https://epubs.siam.org/doi/10.1137/090771806)。

==つまり一般化の見返りは、計算の短縮ではなく、構造を名指しできることそのものにある==。構造を名指しできてはじめて、その構造を使う手法を選べる。

## 次元という言葉が指しているもの

次元は日常語では空間の広がりを指すが、線形代数では独立な方向の本数を指す。ベクトルを1本追加したとき、それが既存のベクトルの張る空間に入っていなければ次元が1増え、入っていれば変わらない。この二分法が基底の定義であり、掃き出し法で残る非ゼロ行の本数が rank になるという事実と一致する[出典](https://en.wikipedia.org/wiki/Gaussian_elimination)。

3次元までの直感をn次元へ持っていくとき、絵を描き直そうとすると行き詰まる。3層に分けて扱うほうが速い。

| 層 | 内容 | 対応の仕方 |
| --- | --- | --- |
| 第1層 | 内積、ノルム、直交、射影、部分空間、基底、次元 | 定義式がそのまま通る。絵を捨てて定義だけ持ち込む |
| 第2層 | 回転、外積 | 絵は使えない。4次元以上の回転は軸ではなく2次元平面に対して定義され、外積は外積代数に置き換わる |
| 第3層 | 高次元特有の現象 | 3次元の直感が誤りになる。定義から出る帰結を優先する |

第3層の代表が測度の集中である。高次元では、独立に取った2本のランダムなベクトルがほぼ直交する。この性質は Johnson-Lindenstrauss 補題の土台になっている。N点の集合を、点どうしの距離の歪みを1プラスマイナスεの範囲に収めたまま低次元へ写すには、目標次元kが8掛ける ln N をεの2乗で割った値より大きければ足りる[出典](https://en.wikipedia.org/wiki/Johnson%E2%80%93Lindenstrauss_lemma)。同じ補題には、15掛ける ln N をεの2乗で割った値以上という別表記の下限も記されている。

この式で重要なのは、元の次元nがどこにも現れないことである。次元を落とせば距離が壊れるというのが3次元由来の直感だが、実際に効くのは点数の対数と許容する歪みだけである。1万次元のデータでも100次元のデータでも、点数が同じで許容歪みが同じなら、必要な目標次元は同じになる。

もう1つ、次元の二分法そのものが実データでは持たない。==浮動小数点の世界では、独立か従属かは二値ではなく、特異値という連続量になる==。NumPy の rank 判定の既定しきい値は、最大特異値掛けるmとnの大きい方掛ける機械イプシロンである[出典](https://numpy.org/doc/stable/reference/generated/numpy.linalg.matrix_rank.html)。しきい値を動かせば rank の値も動く。追加したベクトルが既存の空間とほぼ平行なら、形式的には rank が1増えるが、その方向の特異値は小さく、条件数は悪化する。条件数が10のk乗のとき、解法固有の誤差に加えて最大k桁の精度が失われる[出典](https://en.wikipedia.org/wiki/Condition_number)。

近似の誤差も同じ言語で書ける。rank k で打ち切ったときのフロベニウスノルムでの最小誤差は、切り捨てた特異値の2乗和の平方根に等しい[出典](https://en.wikipedia.org/wiki/Low-rank_approximation)。==次元が増えたかどうかではなく、どれだけ増えたかを数値で測る枠がここにある==。

学習の入口としては、一次独立イコール新しい次元の追加という理解で足りる。実データに移った時点で、二値の判定を特異値の分布に置き換える必要がある。

高次元で距離そのものが意味を失う現象にも定量的な出典がある。Beyerらは1999年に、広い条件のもとで次元が増えるにつれ最近傍までの距離が最遠点までの距離に近づくこと、すなわち最大距離と最小距離の比が1へ収束することを示した。Aggarwalらは2001年に、p≧1のLpノルムについて比の差が1/d^(1/p−1/2)の速度でゼロへ向かうことを示している。実データと合成データの双方で、この効果は10次元から15次元という早い段階で現れる[出典](https://members.loria.fr/MOBerger/Enseignement/Master2/Exposes/beyer.pdf)。==測度の集中は理論上の話ではなく、実務で扱う次元数で既に起きている==。

## 空白を予言する規則性の使い方

構造を先に置く利得が最もはっきり出たのが周期表である。

1869年3月6日、メンデレーエフはロシア化学会に周期表を提示した。この時点の既知元素数について、資料は約56個と記すものと、1869年の表に63元素が並んだと記すものに分かれる[出典](https://en.wikipedia.org/wiki/Dmitri_Mendeleev)[出典](https://en.wikipedia.org/wiki/History_of_the_periodic_table)。前者は当時知られていた元素の総数、後者は表に配置された項目数を数えており、数える対象が違う可能性が高い。ただし1869年の原論文を確認できていないため、ここでは56個から63個の幅として扱う。

後の整理では63に収束している。メンデレーエフは1869年の論文「元素の性質と原子量の関係について」で、既知の63元素を原子量順に並べた表を示した[出典](https://en.wikipedia.org/wiki/Mendeleev%27s_predicted_elements)。56という数は、当時知られていた元素の総数を別の基準で数えたものと読むのが整合的である。

規則性は3段階で積み上がっている。

第1段階は局所的な数値規則である。1829年にデーベライナーが三つ組元素を指摘し、塩素と臭素とヨウ素、リチウムとナトリウムとカリウムでは、中央の元素の原子量が両端の算術平均におおむね一致することを示した[出典](https://en.wikipedia.org/wiki/History_of_the_periodic_table)。隣から値を計算できるという発想がここで生まれた。

第2段階は周期性の発見である。1862年にド・シャンクルトワが原子量順に元素を円筒面へ螺旋状に配置し、性質の似た元素が縦に揃うことを示した。1864年にニューランズが、原子量順に並べると8番目ごとに性質が反復するというオクターブ則を提出し、既知62元素を8群に整理した。同じ1864年にマイヤーが原子量と原子体積の関係を描き、極大と極小が交互に現れる曲線を得た[出典](https://en.wikipedia.org/wiki/History_of_the_periodic_table)。

第3段階がメンデレーエフの操作である。==彼は表の穴を並べ方の失敗ではなく未発見元素の席と読み==、隣接する元素の原子量と性質から内挿し、族から決まる原子価に合わせて酸化物や塩化物の化学式まで先に確定させた[出典](https://en.wikipedia.org/wiki/History_of_the_periodic_table)。1871年に発表された予言は、サンスクリット語で1を意味する接頭辞エカを使い、エカホウ素、エカアルミニウム、エカケイ素、エカマンガンと名付けられた[出典](https://en.wikipedia.org/wiki/Mendeleev%27s_predicted_elements)。

的中の程度は数値で確認できる。

| 予言名 | 対応元素 | 予測値 | 実測値 |
| --- | --- | --- | --- |
| エカアルミニウム | ガリウム、1875年発見 | 密度 6.0 g/cm3 | 5.91 g/cm3 |
| エカケイ素 | ゲルマニウム、1886年発見 | 密度 5.5 g/cm3 | 5.35 g/cm3 |
| エカケイ素の酸化物 | 二酸化ゲルマニウム | 密度 4.7 g/cm3 | 4.7 g/cm3 |
| エカケイ素の塩化物 | 四塩化ゲルマニウム | 密度 1.9 g/cm3、沸点100℃未満 | 密度 1.9 g/cm3、沸点86℃ |

出典は密度と沸点がゲルマニウムの項[出典](https://en.wikipedia.org/wiki/Germanium)、ガリウムの密度が予言元素の項である[出典](https://en.wikipedia.org/wiki/Mendeleev%27s_predicted_elements)。スカンジウムは1879年後半にニルソンが発見した。

エカケイ素の予測原子量も、72が原典側の数字である。メンデレーエフはエカケイ素に原子量72、密度5.5g/cm³を与えた。1886年に発見されたゲルマニウムの実測原子量は72.63であり[出典](https://abacus.bates.edu/acad/depts/biobook/Eka-Si.pdf)、72.64という記述は測定側の値を後年の精度で書いたものである。==予測値と実測値を取り違えると、的中の精度を過大に見積もることになる==。

ここで的中だけを数えると評価を誤る。メンデレーエフは水素より軽い不活性元素を2種想定し、軽いほうを全空間に浸透する気体、重いほうをコロニウムと呼んだ。いずれも存在しない[出典](https://en.wikipedia.org/wiki/Dmitri_Mendeleev)。的中3件を分子に置き、外れた予言を分母から外すと、当時の予測精度を過大に見積もることになる。

同じ型の予測は分野を越えて反復している。

素粒子物理の多重項が最も近い。ゲルマンとネエマンのエイトフォールドウェイは、アップとダウンとストレンジの3種類のクォークを入れ替えるフレーバーSU3対称性で粒子を分類した。バリオン十重項に空席が1つ残り、ゲルマンは1962年、ストレンジネス-3、電荷-1、質量およそ1680 MeV/c2の粒子を予言した。1964年にブルックヘブン国立研究所でオメガマイナス粒子が確認された[出典](https://en.wikipedia.org/wiki/Eightfold_way_(physics))。==表の周期性を対称群の既約表現に置き換えただけで、手続きは周期表と同型である==。 同じ型の予測は素粒子物理でも働いた。質量獲得機構に対応する粒子は理論が先に席を用意し、測定が後から埋めている。ATLASは二光子崩壊とレプトン4体崩壊の測定を合わせて125.11GeV、不確かさ0.11GeVという値を得た。0.09%の精度にあたる[出典](https://atlas.cern/Updates/Press-Statement/atlas-sets-record-precision-higgs-bosons-mass)。CMSは125.38±0.14GeVである[出典](https://cms.cern/news/cms-precisely-measures-mass-higgs-boson)。==枠が先に空席を指定し、測定が後から埋めるという順序は、周期表から150年後も変わっていない==。

保存則の欠損からの予測も同じ族に属する。1930年にパウリは、ベータ崩壊で放出される電子のエネルギーが離散値ではなく連続分布になる事実を、エネルギーと運動量と角運動量を持ち去る未検出粒子で説明した。実験的な確認は1956年のコーワンとライネスらによる原子炉実験である[出典](https://en.wikipedia.org/wiki/Neutrino)。予言から検出まで26年かかっている。1964年に提案された質量獲得機構に対応する粒子の発見発表は2012年7月4日であり、48年かかっている[出典](https://home.cern/science/physics/higgs-boson)。

計算科学では、内挿の担い手が人間から機械に移った。DeepMind の GNoME は2023年11月29日に Nature で公表され、220万件の新規結晶構造を予測し、うち38万件を合成候補となる安定構造とした。既知の安定物質は計算由来が約4万8000件、実験由来が約2万件だったところを、合計42万1000件へ拡張した。外部研究者によって736件の構造が実験的に作製されている[出典](https://deepmind.google/discover/blog/millions-of-new-materials-discovered-with-deep-learning/)。組成空間の格子に空席を見つけ、性質を先に計算するという構造は、エカケイ素の推定と変わらない。

化学と物理の外にも同型の例がある。魚類から四足動物への移行形は、地層の年代から出現時期を絞り込めるという推論に基づいて探索された。デシュラーとシュービンとジェンキンスの調査隊は約3億7500万年前のデボン紀後期の地層を狙い、2004年にエルズミーア島でティクターリクを発見し、2006年4月6日に Nature で報告した[出典](https://en.wikipedia.org/wiki/Tiktaalik)。空席の座標が表の行と列ではなく、地層の年代と地理である点だけが違う。

## 歴史の順序と学習の順序がずれる理由

構造を先に置く思考は、学ぶ順序にも跳ね返る。ここで多くの混乱が起きる。

発見の順序では微積が先である。ニュートンの流率法の形成が1664年から1666年、ライプニッツの微分法公表が1684年、プリンキピア刊行が1687年である[出典](https://en.wikipedia.org/wiki/History_of_calculus)。ベクトル空間の公理的定義は1888年だから、1684年から数えて204年の差がある。

論理的な依存関係で並べると逆になる。微積を定義から厳密に扱うには実数の連続性が要り、その構成はデデキントの1872年まで存在しなかった[出典](https://en.wikipedia.org/wiki/Dedekind_cut)。ライプニッツの公表から188年後である。つまり微積は、基礎づけなしに188年運用されてから基礎づけられた。対して有限次元の線形代数は、四則演算と論理だけで閉じる。

ここで、よく語られる前提を1つ検証しておく。「現代のカリキュラムでは線形代数が先に来る」は普遍ではない。MIT の科目カタログでは 18.06 Linear Algebra の履修前提が Calculus II であり、微積が2段階先行する[出典](https://catalog.mit.edu/subjects/18/)。日本の理系学部では微分積分学と線型代数学を1年次に並行配当する形が広く見られるが、この配当実態を示す一次資料は取得できていない。したがって「線形代数が先」は特定の設計思想であって、標準的な配列ではない。

線形代数を早い位置に置く設計の根拠は、歴史順の再現ではなく逆算である。根拠は3点ある。第1に、前提知識が少ない。第2に、線形独立や基底や次元は定義から数行で反例が作れるため、抽象的な定義に慣れる訓練の媒体に向く。第3に、下流科目の依存が広い。日本の理系学部では、微分積分と線形代数を1年次の前期と後期へ分けて配置する構成が一般的である。九州大学は微分積分学と線形代数学から始めて2年次に論理・集合・位相を置き、金沢大学は微分積分学第一・第二と線形代数学第一・第二を1年次に配当する[出典](https://math.w3.kanazawa-u.ac.jp/wp/course1/curriculum/)。多変数微積分の全微分は線形写像そのものであり、定数係数の線形常微分方程式系は固有値問題に帰着し、数値計算と統計と機械学習は行列演算を基盤にする。依存関係のグラフで入次数が小さく出次数が大きい科目を前に置くのは、カリキュラム設計の一般原則である。

反対側の指摘もある。線形代数は抽象度が高く、形式主義そのものが学習障壁になるという議論が数学教育研究にある。Dorier と Sierpinska による obstacle of formalism の議論がこれに当たるが、出版社側の認証で本文を取得できておらず、内容は確認できていない。未検証のまま記す。

高校で微積を先に置く順序は妥当である。ただし理由は、実数のイメージが湧くからではない。高校の数学IIIは極限、微分法、積分法の3領域で構成され、極限はイプシロン・デルタ論法ではなく値の近づき方の直感的な把握として扱われる[出典](https://ja.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6III)。実数の構成も連続性の公理も出てこない。実数論を回避しているから高校で成立している。 現行課程の数学IIIは微分法と積分法を中心とする構成で、平成30年告示の学習指導要領解説がその範囲を定めている[出典](https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm)。妥当性の第2の理由は動機の可視性である。速度、加速度、面積、体積、最大最小は物理と同時に扱える題材であり、微積の誕生自体が力学と天文学の要求から来ている[出典](https://en.wikipedia.org/wiki/History_of_calculus)。

問題は順序ではなく接続にあった。高校の行列は1994年から2003年の課程で数学Cの中核だったが、2012年度実施の課程で標準の内容から外れ、2022年度実施の課程で数学Cに部分復活した[出典](https://ja.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6C)。この間に高校を出た学生は、大学初年度で行列の記法から始める必要があった。2018年告示の学習指導要領は2022年度の第1学年から学年進行で実施されているため、新課程で行列に触れた学年が大学1年になるのは2025年度以降である[出典](https://ja.wikipedia.org/wiki/%E5%AD%A6%E7%BF%92%E6%8C%87%E5%B0%8E%E8%A6%81%E9%A0%98)。なお2022年度課程の数学Cは3単元から2単元を選ぶ構成であり、全員が行列を履修するわけではない。これらの年度と単元名は日本語版ウィキペディア経由であり、文部科学省の解説PDFでの確認は取れていない。

まとめると、歴史の順序は発見の順序であって、論理的前提の順序ではない。教育設計は前提の少なさと下流依存の広さで並べる。だから両者はずれる。ずれていること自体は設計の失敗ではない。

## 構造が崩れる場所を見つける

構造を先に置く思考の最後の要素は、その構造がどこで効かなくなるかを知ることである。枠を信じきると、枠の外を見落とす。

周期表では3か所で崩れる。第1に、原子量順という規則が最初から完全ではなかった。メンデレーエフはテルルとヨウ素で原子量の大小に反する順序を採り、当時の測定が誤っていると考えた。順序は正しかったが理由づけは誤っていた[出典](https://en.wikipedia.org/wiki/Dmitri_Mendeleev)。並びの根拠が確定したのは1913年から1914年で、モーズリーが特性X線の振動数の平方根が原子番号にほぼ比例することを示し、基準が原子量から原子番号へ移った。モーズリーはさらに原子番号43、61、72、75に空席があることを示した[出典](https://en.wikipedia.org/wiki/Henry_Moseley)。原子量による予言は経験則からの内挿であり、原子番号による予言は連番の欠番検出である。規則性の水準が違う。

第2に、外挿は無限には効かない。超重元素では相対論効果とスピン軌道相互作用によって軌道の単純な近似が崩れ、アウフバウ原理から期待される位置から外れる元素が生じると予測されている。シーボーグの拡張周期表は相対論効果を考慮していなかった[出典](https://en.wikipedia.org/wiki/Extended_periodic_table)。中性子側の魔法数は2、8、20、28、50、82に続く次の閉殻として184が予測されているが、陽子側は1960年代後半にメルドナーが114を提案して以降、114から126の範囲で見解が分かれ合意はない[出典](https://en.wikipedia.org/wiki/Island_of_stability)。

第3に、空席を名指しできることと、実物に届くことは別である。第8周期を開く119番と120番の合成は成功していない。JINRの実験は2026年6月時点で感度480 fbに達したが合成に至らず、結果の公表は2026年9月から10月に見込まれている。ローレンス・バークレー国立研究所は2025年に249Cfと50Tiの反応で120番元素の合成に着手したが、原子は検出されていない[出典](https://en.wikipedia.org/wiki/Extended_periodic_table)。

線形代数でも同じ構図が現れる。理論上の到達点はジョルダン標準形である。掃き出し法からそこへ至るには4段が要る。第1段は行列を線形写像として見る視点、すなわち基底の取り替えと表現行列と相似変換である。第2段は固有値と固有ベクトルと特性多項式と対角化可能性である。第3段は不変部分空間と直和分解である。第4段は一般化固有ベクトルと最小多項式であり、一般化固有ベクトルはAからλIを引いた行列のb乗を掛けるとゼロになるベクトルとして定義され、ジョルダン鎖を作る[出典](https://en.wikipedia.org/wiki/Jordan_normal_form)。 数値計算の側から見ると、この到達点には別の注意が付く。GolubとWilkinsonは1976年のSIAM Reviewで、非正規行列の固有値問題は行列が退化しているかその近傍にあるとき実務上の困難が大きく、丸め誤差があるもとでは退化しているかどうかの判定自体ができないと述べ、ジョルダン標準形を求める代わりに不変部分空間の直交基底を計算する方法を提示した[出典](https://academic.oup.com/book/52895/chapter/421921054)。==理論上の到達点が、数値計算では到達しないほうがよい対象になっている==。体の条件も要る。ジョルダン標準形を与える基底が存在するのは、特性多項式がその体上で1次式の積に分解するときに限る。

ところがこの到達点は、数値計算では避けられる。固有値が重複または近接する行列では、微小な摂動でジョルダン構造が変わる。εがゼロなら1を2つ並べた2次のジョルダンブロックになる行列が、εがゼロでなければ固有値1プラスルートεと1マイナスルートεの対角行列になる例が知られている[出典](https://en.wikipedia.org/wiki/Jordan_normal_form)。構造そのものが入力の微小な変化で不連続に変わる。だから実務上の到達点はシューア分解と特異値分解になる。LAPACK も rank 落ちの最小二乗問題に対して、完全直交分解を使う xGELSY、特異値分解を使う xGELSS、分割統治型の xGELSD を用意している[出典](https://www.netlib.org/lapack/lug/node27.html)。

2つの分野から同じ教訓が出る。構造は近似であり、適用範囲がある。周期性は超重元素で崩れ、ジョルダン構造は摂動で崩れる。崩れる場所を先に知っている人は、構造を使いながらその外側も見ていられる。構造を先に置く思考の完成形は、構造を信じることではなく、構造の境界を名指しできることである。

## この章の要点

- 科学の前進は事実の網羅ではなく、構造を先に置いて未知の位置を名指しすることで起きた。周期表は既知元素が56個から63個の段階で未発見元素の密度を予測した。
- 一般化は計算を速くしない。密行列の掃き出し法の演算回数はnだけで決まり、rank は入らない。速くなるのは低 rank 構造を明示的に使う表現へ切り替えたときだけである。
- 次元は独立な方向の本数であり、実データでは二値ではなく特異値という連続量になる。rank の値はしきい値の取り方に依存する。
- 高次元では3次元の直感が誤りになる。Johnson-Lindenstrauss 補題の目標次元は点数の対数と許容歪みで決まり、元の次元に依存しない。
- 空席を隣接項から埋める手続きは、周期表、素粒子の多重項、未検出粒子、結晶構造の機械探索、化石の探索で同型に反復している。
- 予言から実物の確認までの時間差は大きい。未検出粒子で26年、質量獲得機構に対応する粒子で48年、119番と120番元素は2026年時点で未達である。
- 歴史の順序と学習の順序はずれる。微積は基礎づけなしに188年運用された。教育設計は前提の少なさと下流依存の広さで並べる。
- 構造には適用範囲がある。周期性は超重元素で崩れ、ジョルダン標準形は摂動で構造が変わる。境界を名指しできることが構造思考の完成形である。

## 残っている問い
この章に積み上がっていた問いは、いまのところすべて解いた。新しく出た問いはここに足す。
## 出典

1. Linear algebra — Wikipedia — https://en.wikipedia.org/wiki/Linear_algebra
2. History of calculus — Wikipedia — https://en.wikipedia.org/wiki/History_of_calculus
3. Vector space — Wikipedia — https://en.wikipedia.org/wiki/Vector_space
4. Dedekind cut — Wikipedia — https://en.wikipedia.org/wiki/Dedekind_cut
5. The Nine Chapters on the Mathematical Art — Wikipedia — https://en.wikipedia.org/wiki/Nine_Chapters_on_the_Mathematical_Art
6. Course 18 Mathematics — MIT Course Catalog — https://catalog.mit.edu/subjects/18/
7. 数学C — ウィキペディア日本語版 — https://ja.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6C
8. 数学III — ウィキペディア日本語版 — https://ja.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6III
9. 学習指導要領 — ウィキペディア日本語版 — https://ja.wikipedia.org/wiki/%E5%AD%A6%E7%BF%92%E6%8C%87%E5%B0%8E%E8%A6%81%E9%A0%98
10. Gaussian elimination — Wikipedia — https://en.wikipedia.org/wiki/Gaussian_elimination
11. LAPACK Users' Guide, Performance of LAPACK driver routines — Netlib — https://www.netlib.org/lapack/lug/node71.html
12. LAPACK Users' Guide, Linear Least Squares Problems — Netlib — https://www.netlib.org/lapack/lug/node27.html
13. Low-rank approximation — Wikipedia — https://en.wikipedia.org/wiki/Low-rank_approximation
14. Halko, Martinsson, Tropp, Finding Structure with Randomness, SIAM Review 53巻2号 — https://epubs.siam.org/doi/10.1137/090771806
15. Jordan normal form — Wikipedia — https://en.wikipedia.org/wiki/Jordan_normal_form
16. Johnson-Lindenstrauss lemma — Wikipedia — https://en.wikipedia.org/wiki/Johnson%E2%80%93Lindenstrauss_lemma
17. numpy.linalg.matrix_rank — NumPy documentation — https://numpy.org/doc/stable/reference/generated/numpy.linalg.matrix_rank.html
18. Condition number — Wikipedia — https://en.wikipedia.org/wiki/Condition_number
19. Mendeleev's predicted elements — Wikipedia — https://en.wikipedia.org/wiki/Mendeleev%27s_predicted_elements
20. Germanium — Wikipedia — https://en.wikipedia.org/wiki/Germanium
21. History of the periodic table — Wikipedia — https://en.wikipedia.org/wiki/History_of_the_periodic_table
22. Dmitri Mendeleev — Wikipedia — https://en.wikipedia.org/wiki/Dmitri_Mendeleev
23. Henry Moseley — Wikipedia — https://en.wikipedia.org/wiki/Henry_Moseley
24. Eightfold way — Wikipedia — https://en.wikipedia.org/wiki/Eightfold_way_(physics)
25. Neutrino — Wikipedia — https://en.wikipedia.org/wiki/Neutrino
26. The Higgs boson — CERN — https://home.cern/science/physics/higgs-boson
27. Island of stability — Wikipedia — https://en.wikipedia.org/wiki/Island_of_stability
28. Extended periodic table — Wikipedia — https://en.wikipedia.org/wiki/Extended_periodic_table
29. Millions of new materials discovered with deep learning — Google DeepMind — https://deepmind.google/discover/blog/millions-of-new-materials-discovered-with-deep-learning/
30. Tiktaalik — Wikipedia — https://en.wikipedia.org/wiki/Tiktaalik
31. Sheldon Axler, Linear Algebra Done Right 4th edition — https://linear.axler.net/

すべての出典の取得日は2026年8月8日である。
