<!--meta
{"chapter": 0, "part": "序章", "title": "ベクトルと線形代数の地図", "thesis": "ベクトルは大きさと向きをもつ量である。高校では数学Cの単元として平面と空間のベクトルと複素数平面を学ぶ。行列から先は大学の線形代数であり計量経済学の回帰とAIの計算はその上に立つ。", "verify": {"date": "2026-10-15", "checked": 36, "match": 30, "fixed": 5, "unconfirmed": 1}}
-->
<p>この本は高校の数学Cで学ぶベクトルと複素数平面を出発点にして大学の線形代数の入口までを扱う。前半の第1章から第5章は学習指導要領の範囲であり大学入学共通テストの「数学Ⅱ・数学B・数学C」で出題される。後半の第6章から第8章は高校の範囲外であり大学の入門である。</p>
<p>序章ではベクトルとは何かを1つの例で確かめる。続いて学習指導要領での位置と共通テストでの出題形式を確認する。最後に線形代数が経済学とAIのどこで使われるかを短く示す。</p>

<h2 id="s1">ベクトルとは何か</h2>
<p>数学で扱う量には2種類がある。長さ・面積・気温・価格のように1つの実数で表せる量を<strong>スカラー</strong>と呼ぶ。移動・速度・力のように大きさと向きの2つをもつ量を<strong>ベクトル</strong>と呼ぶ。</p>
<p>例として地図の上の移動を考える。東へ3 km進んでから北へ4 km進む。進んだ道のりは合計7 kmである。一方で出発点から到着点までの移動は北東寄りの向きに5 kmである。<strong class="hit">道のりはスカラーであり移動はベクトルである</strong>。ベクトルで考えると途中の経路を問わず出発点と到着点だけで移動が定まる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 280" role="img" aria-label="東へ3と北へ4の移動を合わせると斜めに5の移動になる">
  <defs><marker id="ah00a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker>
  <marker id="ah00b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker></defs>
  <g stroke="var(--line)" stroke-width="1">
    <line x1="80" y1="250" x2="80" y2="50"/><line x1="120" y1="250" x2="120" y2="50"/><line x1="160" y1="250" x2="160" y2="50"/><line x1="200" y1="250" x2="200" y2="50"/><line x1="240" y1="250" x2="240" y2="50"/>
    <line x1="60" y1="230" x2="260" y2="230"/><line x1="60" y1="190" x2="260" y2="190"/><line x1="60" y1="150" x2="260" y2="150"/><line x1="60" y1="110" x2="260" y2="110"/><line x1="60" y1="70" x2="260" y2="70"/>
  </g>
  <line x1="80" y1="230" x2="200" y2="230" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#ah00a)"/>
  <line x1="200" y1="230" x2="200" y2="70" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#ah00a)"/>
  <line x1="80" y1="230" x2="200" y2="70" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah00b)"/>
  <circle cx="80" cy="230" r="4" fill="var(--ink)"/>
  <g font-size="13">
    <text x="62" y="268" fill="var(--sub)">出発点</text>
    <text x="210" y="62" fill="var(--sub)">到着点</text>
    <text x="125" y="250" fill="var(--ink)">東へ3</text>
    <text x="208" y="155" fill="var(--ink)">北へ4</text>
    <text x="96" y="140" fill="var(--accent)" font-weight="600">移動 5</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="330" y="80" font-weight="600">道のり スカラー</text>
    <text x="330" y="104" fill="var(--sub)">3 ＋ 4 ＝ 7 km</text>
    <text x="330" y="150" font-weight="600" fill="var(--accent)">移動 ベクトル</text>
    <text x="330" y="174" fill="var(--sub)">大きさ √(3² ＋ 4²) ＝ 5 km</text>
    <text x="330" y="198" fill="var(--sub)">向き 東から北へ約53°</text>
  </g>
</svg>
<figcaption>1目盛りは1 km。東へ3 kmと北へ4 kmの移動を合わせると長さ5の矢印1本になる。矢印の長さが大きさで矢印の向きが向きである。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 1</div>
<p>東へ5 km進み次に北へ12 km進んだ。出発点から到着点への移動の大きさを求めよ。また道のりとの差を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 東と北は直交するので三平方の定理を使う。<br>手順2 移動の大きさは \( \sqrt{5^2+12^2}=\sqrt{169}=13 \) km である。<br>手順3 道のりは \( 5+12=17 \) km である。<br>答え 移動の大きさは13 kmで道のりより4 km短い。</div></details></div>

<p>英語の vector はラテン語の vehere 運ぶ に由来し運ぶものを意味する。点を別の点へ運ぶ矢印というイメージは第1章の定義とそのまま一致する。</p>
<p>典型的な誤りは2つある。1つは大きさだけを比べて同じベクトルとみなす誤りである。東へ5 kmと北へ5 kmは大きさが等しいが向きが異なるので別のベクトルである。もう1つは移動の大きさを道のりの和で求める誤りである。向きの異なる移動の大きさは単純に足せない。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">打球速度だけではヒットかどうか分からない</p>
<p>同じ時速160 kmでも打球角度と方向でゴロにもホームランにもなる。打球は速さと向きの組でありベクトルである。</p>
</aside>

<h2 id="s2">学習指導要領での位置</h2>
<p>現行の高等学校学習指導要領は2018年 平成30年 3月に告示された。数学の新しい教育課程は2022年度の入学生から学年進行で実施された。この改訂で<strong>数学C</strong>が新設され次の3つの内容で構成された。</p>
<div class="tb-tw"><table>
<thead><tr><th>数学Cの内容</th><th>主な項目</th><th>改訂前の所属</th><th>この本の章</th></tr></thead>
<tbody>
<tr><td>(1) ベクトル</td><td>平面上のベクトル ／ 内積 ／ 空間座標とベクトル</td><td>数学B</td><td>第1章〜第4章</td></tr>
<tr><td>(2) 平面上の曲線と複素数平面</td><td>二次曲線 ／ 媒介変数 ／ 極座標 ／ 複素数平面 ／ ド・モアブルの定理</td><td>数学Ⅲ</td><td>第5章 複素数平面</td></tr>
<tr><td>(3) 数学的な表現の工夫</td><td>統計グラフ ／ 離散グラフ ／ 行列による表現</td><td>数学活用</td><td>第6章で触れる</td></tr>
</tbody></table></div>
<p>学習指導要領解説 数学編は改訂の要点として従前の数学Bのベクトルを数学Cに移行したと記している。数学Ⅲにあった平面上の曲線と複素数平面も数学Cへ移った。この結果ベクトルと複素数平面が同じ科目にそろった。どちらも平面の点を2つの数の組で表し図形を計算で扱う道具である。第5章では複素数を平面のベクトルとして読み替えるところから始める。</p>
<p>解説はベクトルの扱い方も示している。数学Cで学ぶベクトルは代数的な性格と図形の性質を中心にする。一方で物理で扱うベクトルは速度や運動量の合成と分解を中心にする。同じ矢印でも数学では演算の法則と図形の証明に重点を置く。</p>

<div class="tb-vs">
<div><h5>改訂前 2012年度〜2021年度入学</h5><ul>
<li>数学B ベクトル ／ 数列 ／ 確率分布と統計的な推測</li>
<li>数学Ⅲ 平面上の曲線と複素数平面 ／ 極限 ／ 微分法 ／ 積分法</li>
<li>数学Cは置かれず行列は数学活用の表現の工夫で扱う</li>
<li>センター試験と共通テストの数学Ⅱ・Bでベクトルを出題</li>
</ul></div>
<div><h5>改訂後 2022年度入学〜</h5><ul>
<li>数学B 数列 ／ 統計的な推測 ／ 数学と社会生活</li>
<li>数学C ベクトル ／ 平面上の曲線と複素数平面 ／ 数学的な表現の工夫</li>
<li>共通テストの数学Ⅱ・B・Cでベクトルと複素数平面を出題</li>
</ul></div>
</div>

<div class="ex"><div class="ex-h">例題 2</div>
<p>次の量をスカラーとベクトルに分けよ。ア 気温 イ 風 ウ 株価 エ ボールにはたらく重力 オ 三角形の面積</p>
<details open><summary>解き方</summary><div>手順1 1つの実数で表せるかを確かめる。<br>手順2 気温と株価と面積は1つの数で表せる。<br>手順3 風は風速と風向の組である。重力は大きさと鉛直下向きの組である。<br>答え スカラーはア・ウ・オ。ベクトルはイ・エ。</div></details></div>

<h2 id="s3">共通テストでの出題</h2>
<p>新課程による共通テストは2025年1月の試験から始まった。数学の試験科目のうち「数学Ⅱ・数学B・数学C」は試験時間70分・配点100点である。大問は7つあり解く大問は6つである。2025年と2026年の問題冊子では配点は第1問と第2問が各15点・第3問が22点・選択問題の第4問から第7問が各16点である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 230" role="img" aria-label="数学Ⅱ・B・Cの7つの大問の構成">
  <g font-size="13" text-anchor="middle">
    <rect x="20" y="60" width="92" height="70" rx="6" fill="var(--ink)"/>
    <rect x="118" y="60" width="92" height="70" rx="6" fill="var(--ink)"/>
    <rect x="216" y="60" width="92" height="70" rx="6" fill="var(--ink)"/>
    <text x="66" y="90" fill="#fff" font-weight="600">第1問</text><text x="164" y="90" fill="#fff" font-weight="600">第2問</text><text x="262" y="90" fill="#fff" font-weight="600">第3問</text>
    <text x="66" y="112" fill="#fff">数学Ⅱ</text><text x="164" y="112" fill="#fff">数学Ⅱ</text><text x="262" y="112" fill="#fff">数学Ⅱ</text>
    <rect x="330" y="60" width="88" height="70" rx="6" fill="none" stroke="var(--cool)" stroke-width="2"/>
    <rect x="424" y="60" width="88" height="70" rx="6" fill="none" stroke="var(--cool)" stroke-width="2"/>
    <rect x="518" y="60" width="88" height="70" rx="6" fill="var(--accent)"/>
    <rect x="612" y="60" width="88" height="70" rx="6" fill="var(--warm)"/>
    <text x="374" y="90" font-weight="600">第4問</text><text x="468" y="90" font-weight="600">第5問</text>
    <text x="562" y="90" fill="#fff" font-weight="600">第6問</text><text x="656" y="90" fill="#fff" font-weight="600">第7問</text>
    <text x="374" y="112" fill="var(--sub)">数列</text><text x="468" y="112" fill="var(--sub)">統計的推測</text>
    <text x="562" y="112" fill="#fff">ベクトル</text><text x="656" y="112" fill="#fff">複素数平面</text>
  </g>
  <g stroke="var(--sub)" stroke-width="1.5" fill="none">
    <path d="M20 150 V160 H308 V150"/><path d="M330 150 V160 H700 V150"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="var(--ink)">
    <text x="164" y="182">必答 3問</text>
    <text x="515" y="182">4問から3問を選ぶ</text>
    <text x="164" y="44" fill="var(--sub)">数学Ⅱ</text>
    <text x="421" y="44" fill="var(--sub)">数学B</text>
    <text x="609" y="44" fill="var(--sub)">数学C 第1章〜第5章</text>
  </g>
  <text x="360" y="214" font-size="12.5" text-anchor="middle" fill="var(--sub)">2025年と2026年の本試験の構成。試験時間70分・配点100点</text>
</svg>
<figcaption>第1問から第3問は数学Ⅱの必答である。第4問から第7問は数学Bの2問と数学Cの2問であり4問から3問を選んで解く。この本の第1章から第5章は第6問と第7問に対応する。</figcaption>
</figure>

<p>大学入試センターの問題冊子によると2025年の第6問は座標空間の球面上にある3点が正三角形をなす条件を扱った。2026年の第6問は平面ベクトルの等式 \( \overrightarrow{MP}=a\overrightarrow{MA}+b\overrightarrow{MB}+c\overrightarrow{MC} \) を満たす点Pの位置と存在範囲を扱った。第7問は2025年が2直線の垂直条件と点の軌跡で2026年が \( w=z+\frac{1}{z} \) による点の移り方であった。<strong class="hit">平面と空間のどちらも出題されるので第1章から第4章を一続きで仕上げる</strong>。</p>
<p>共通テストのベクトルは誘導つきの穴埋めが中心である。問われる技能は次の5つに集約される。</p>
<div class="tb-tw"><table>
<thead><tr><th>技能</th><th>扱う章</th><th>典型的な問い方</th></tr></thead>
<tbody>
<tr><td>ベクトルを2本の1次独立なベクトルで表す</td><td>第1章 ／ 第3章</td><td>\( \overrightarrow{OP}=s\vec{a}+t\vec{b} \) の係数を求める</td></tr>
<tr><td>内積を計算し角や長さを求める</td><td>第2章</td><td>\( |\vec{a}+t\vec{b}| \) の最小値</td></tr>
<tr><td>係数比較で交点を求める</td><td>第3章</td><td>2直線の交点の位置ベクトル</td></tr>
<tr><td>点の存在範囲を図示する</td><td>第3章</td><td>\( s+t\le 1 \) を満たす点の範囲</td></tr>
<tr><td>空間で同じ平面上の条件を使う</td><td>第4章</td><td>直線と平面の交点</td></tr>
</tbody></table></div>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">選択問題は機会費用で選ぶ</p>
<p>70分の中で得点の期待値が高い3問を選ぶ。選ばなかった1問の期待得点が機会費用である。ベクトルは型が少なく期待値を上げやすい。</p>
</aside>

<h2 id="s4">第6章から先は高校の範囲外である</h2>
<p>第6章 行列と連立一次方程式・第7章 線形変換と行列式・第8章 固有値と固有ベクトルは高校の学習指導要領の範囲外であり共通テストには出題されない。各章の冒頭に範囲外の表示がある。</p>
<p>数学Cの「数学的な表現の工夫」には行列が登場する。ただしそこでの行列は数の表を整理して表現する方法として扱われる。解説の例は5人の人間関係の表を行列で書くことと製品の評価点を重みつきで合計することである。行列の積の一般的な規則・逆行列・連立一次方程式の解法は数学Cの必須項目ではない。解説ではこれらを理数科の科目である理数数学特論の内容としている。</p>
<p>行列の扱いは改訂のたびに変わった。平成11年告示の数学Cには行列とその応用があり2×2の行列の演算と逆行列を学んでいた。2012年度の高校入学生から適用された平成21年告示では数学Cが置かれず行列は数学活用の数学的な表現の工夫に移った。現行の数学Cの行列はその内容を引き継いだものである。</p>
<p>範囲外の3章を入れた理由は2つある。1つはベクトルと行列が同じ理論の前半と後半であることである。第1章で学ぶ1次独立と分解は第6章の連立一次方程式の解の一意性とそのまま対応する。もう1つは経済学部の講義と実務で使うのが後半の行列だからである。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="この本の章の流れ">
  <defs><marker id="ah00c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--sub)"/></marker></defs>
  <rect x="10" y="28" width="470" height="150" rx="10" fill="none" stroke="var(--accent)" stroke-dasharray="5 4"/>
  <text x="22" y="20" font-size="13" fill="var(--accent)" font-weight="600">数学C 共通テストの範囲</text>
  <rect x="496" y="28" width="214" height="222" rx="10" fill="var(--dim)" stroke="var(--line)"/>
  <text x="508" y="20" font-size="13" fill="var(--muted)" font-weight="600">範囲外 大学の入門</text>
  <g font-size="13" text-anchor="middle">
    <rect x="24" y="50" width="96" height="48" rx="6" fill="var(--card, #fff)" stroke="var(--ink)"/><text x="72" y="72">第1章</text><text x="72" y="90" fill="var(--sub)">平面ベクトル</text>
    <rect x="140" y="50" width="96" height="48" rx="6" fill="none" stroke="var(--ink)"/><text x="188" y="72">第2章</text><text x="188" y="90" fill="var(--sub)">内積</text>
    <rect x="256" y="50" width="96" height="48" rx="6" fill="none" stroke="var(--ink)"/><text x="304" y="72">第3章</text><text x="304" y="90" fill="var(--sub)">位置ベクトル</text>
    <rect x="372" y="50" width="96" height="48" rx="6" fill="none" stroke="var(--ink)"/><text x="420" y="72">第4章</text><text x="420" y="90" fill="var(--sub)">空間ベクトル</text>
    <rect x="140" y="120" width="212" height="48" rx="6" fill="none" stroke="var(--warm)"/><text x="246" y="142">第5章</text><text x="246" y="160" fill="var(--sub)">複素数平面</text>
    <rect x="512" y="50" width="182" height="48" rx="6" fill="none" stroke="var(--muted)"/><text x="603" y="72">第6章</text><text x="603" y="90" fill="var(--sub)">行列と連立一次方程式</text>
    <rect x="512" y="120" width="182" height="48" rx="6" fill="none" stroke="var(--muted)"/><text x="603" y="142">第7章</text><text x="603" y="160" fill="var(--sub)">線形変換と行列式</text>
    <rect x="512" y="190" width="182" height="48" rx="6" fill="none" stroke="var(--muted)"/><text x="603" y="212">第8章</text><text x="603" y="230" fill="var(--sub)">固有値と固有ベクトル</text>
  </g>
  <g stroke="var(--sub)" stroke-width="1.5" marker-end="url(#ah00c)">
    <line x1="120" y1="74" x2="138" y2="74"/><line x1="236" y1="74" x2="254" y2="74"/><line x1="352" y1="74" x2="370" y2="74"/>
    <line x1="72" y1="98" x2="160" y2="118"/>
    <line x1="468" y1="74" x2="510" y2="74"/>
    <line x1="603" y1="98" x2="603" y2="118"/><line x1="603" y1="168" x2="603" y2="188"/>
  </g>
  <text x="20" y="205" font-size="12.5" fill="var(--sub)">第5章は第1章の成分表示と第2章の角を前提にする</text>
</svg>
<figcaption>実線の囲みは章である。破線で囲んだ第1章から第5章が数学Cの範囲である。灰色の第6章から第8章は大学の線形代数の入門である。</figcaption>
</figure>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">ポートフォリオは銘柄数と同じ次元のベクトルである</p>
<p>3銘柄の保有株数は3つの数の組である。全銘柄の時価の合計は第2章の内積で計算でき多数の口座の集計は第6章の行列で計算できる。</p>
</aside>

<h2 id="s5">現実世界 経済学とAIの線形代数</h2>
<p>線形代数が大学で最初に使われる場面の1つは計量経済学の回帰分析である。\( n \) 件のデータで被説明変数 \( y \) を説明変数 \( x_1,\dots,x_k \) の1次式で表すモデルを考える。データを並べると次の形になる。</p>
\[ \boldsymbol{y}=X\boldsymbol{\beta}+\boldsymbol{u} \]
<p>ここで \( \boldsymbol{y} \) は \( n \) 個の観測値を並べたベクトルで \( X \) は説明変数を並べた行列である。最小二乗法の推定量は次の式で与えられる。</p>
\[ \hat{\boldsymbol{\beta}}=(X^{\top}X)^{-1}X^{\top}\boldsymbol{y} \]
<p>この式は暗記用の公式ではなく図形の意味をもつ。<strong class="hit">回帰の当てはめ値は観測値のベクトルを説明変数のベクトルが張る空間へ正射影したものである</strong>。正射影は第2章で学び残差が説明変数と垂直になるという条件は第2章の垂直条件そのものである。行列の逆行列は第6章で扱う。この式は \( X^{\top}X \) が逆行列をもつ場合に限って使える。</p>
<p>AIでも中心にあるのはベクトルと内積である。文章や画像は数百から数千の成分をもつベクトルに変換される。2つのベクトルの向きが近いほど意味が近いとみなし向きの近さを内積から求めた cos で測る。これをコサイン類似度と呼ぶ。2017年に発表された Transformer の注意機構も内積で語どうしの関連の強さを計算する。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>2つの商品の特徴を2成分のベクトル \( \vec{a}=(1,2) \) と \( \vec{b}=(2,1) \) で表した。\( \cos\theta=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|} \) で定まるコサイン類似度を求めよ。ここで \( \vec{a}\cdot\vec{b}=a_1b_1+a_2b_2 \) である。</p>
<details open><summary>解き方</summary><div>手順1 \( \vec{a}\cdot\vec{b}=1\times 2+2\times 1=4 \)<br>手順2 \( |\vec{a}|=\sqrt{1^2+2^2}=\sqrt{5} \) で \( |\vec{b}|=\sqrt{5} \)<br>手順3 \( \cos\theta=\dfrac{4}{\sqrt{5}\sqrt{5}}=\dfrac{4}{5} \)<br>答え 0.8。2本の矢印のなす角は約37°である。式の意味は第2章で導く。</div></details></div>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="2本のベクトルのなす角とコサイン類似度">
  <defs><marker id="ah00d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
  <marker id="ah00e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker></defs>
  <g stroke="var(--line)"><line x1="100" y1="230" x2="100" y2="40"/><line x1="160" y1="230" x2="160" y2="40" stroke-dasharray="2 4"/><line x1="220" y1="230" x2="220" y2="40" stroke-dasharray="2 4"/><line x1="80" y1="230" x2="300" y2="230"/><line x1="80" y1="170" x2="300" y2="170" stroke-dasharray="2 4"/><line x1="80" y1="110" x2="300" y2="110" stroke-dasharray="2 4"/></g>
  <g font-size="12" fill="var(--sub)" text-anchor="middle"><text x="160" y="248">1</text><text x="220" y="248">2</text><text x="88" y="174">1</text><text x="88" y="114">2</text><text x="92" y="248">O</text></g>
  <line x1="100" y1="230" x2="160" y2="110" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah00d)"/>
  <line x1="100" y1="230" x2="220" y2="170" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah00e)"/>
  <path d="M 122.4 185.2 A 50 50 0 0 0 144.7 207.6" fill="none" stroke="var(--accent)" stroke-width="2"/>
  <g font-size="13">
    <text x="166" y="104" fill="var(--warm)" font-weight="600">a ＝ (1, 2)</text>
    <text x="226" y="166" fill="var(--cool)" font-weight="600">b ＝ (2, 1)</text>
    <text x="150" y="200" fill="var(--accent)">θ</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="360" y="80" font-weight="600">向きが同じ cos ＝ 1</text>
    <text x="360" y="108">向きが近い cos ＝ 0.8 この図</text>
    <text x="360" y="136">直交する cos ＝ 0</text>
    <text x="360" y="164">逆向き cos ＝ −1</text>
    <text x="360" y="204" fill="var(--sub)">長さを割って向きだけを比べる</text>
  </g>
</svg>
<figcaption>1目盛りは1。a と b のなす角 θ は約37°で cos θ は0.8である。コサイン類似度はベクトルの長さの影響を除いて向きの近さだけを測る。</figcaption>
</figure>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">相性は熱量ではなく向きで測る</p>
<p>趣味と価値観をベクトルにすると熱量は長さで方向性は向きである。コサイン類似度は長さを割って向きだけを比べる。</p>
</aside>

<h2 id="s6">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ スカラーとベクトル</div>
<p class="qz-q">次のうちベクトルであるものを1つ選べ。</p>
<ol><li>体重 60 kg</li><li>北東へ秒速 5 m の風</li><li>気温 25 ℃</li><li>売上高 1 億円</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。風は速さと向きの2つで定まる。他の3つは1つの実数で表せるスカラーである。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 移動の大きさ</div>
<p class="qz-q">西へ 8 km 進み次に南へ 6 km 進んだ。出発点から到着点への移動の大きさは何 km か。</p>
<ol><li>2</li><li>10</li><li>14</li><li>48</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 の 10 である。西と南は直交するので \( \sqrt{8^2+6^2}=\sqrt{100}=10 \) である。14 は道のりである。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 学習指導要領での位置</div>
<p class="qz-q">平成30年告示の学習指導要領に関する記述として正しいものを1つ選べ。</p>
<ol><li>ベクトルは数学Bの内容である</li><li>複素数平面は数学Ⅲの内容である</li><li>ベクトルと複素数平面はどちらも数学Cの内容である</li><li>行列の積と逆行列は数学Cの必須の内容である</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。1 と 2 は改訂前の課程の所属である。4 は誤りで数学Cの行列は表現の工夫として扱われる。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 共通テストの構成</div>
<p class="qz-q">共通テスト「数学Ⅱ・数学B・数学C」で受験者が解答する大問の数を答えよ。</p>
<ol><li>4</li><li>5</li><li>6</li><li>7</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 の 6 である。必答の第1問から第3問に加えて第4問から第7問のうち3問を解く。\( 3+3=6 \) である。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ コサイン類似度</div>
<p class="qz-q">\( \vec{a}=(3,4) \) と \( \vec{b}=(4,3) \) のコサイン類似度 \( \dfrac{a_1b_1+a_2b_2}{|\vec{a}||\vec{b}|} \) を求めよ。</p>
<ol><li>\( \dfrac{12}{25} \)</li><li>\( \dfrac{24}{25} \)</li><li>\( \dfrac{7}{25} \)</li><li>1</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。分子は \( 3\times4+4\times3=24 \) で \( |\vec{a}|=|\vec{b}|=5 \) なので \( \dfrac{24}{25} \) である。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 2つの移動の合成</div>
<p class="qz-q">点Oから東へ 2 km・北へ 1 km の位置に点Aがある。点Aからさらに東へ 1 km・北へ 3 km 進んで点Bに着いた。OからBへの移動の大きさは何 km か。</p>
<ol><li>\( \sqrt{5}+\sqrt{10} \)</li><li>5</li><li>7</li><li>\( \sqrt{17} \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。東へ \( 2+1=3 \) km・北へ \( 1+3=4 \) km なので \( \sqrt{3^2+4^2}=5 \) である。1 は2つの移動の大きさの和であり道のりに当たる。</div></details></div>

<h2 id="s7">この章の要点</h2>
<div class="tb-key"><b>要点</b>
スカラーは1つの実数で表す量でベクトルは大きさと向きをもつ量である。<br>
ベクトルの大きさは向きの異なる成分を三平方の定理で合わせて求める。<br>
平成30年告示でベクトルは数学Bから数学Cへ移り複素数平面は数学Ⅲから数学Cへ移った。<br>
共通テスト数学Ⅱ・B・Cは70分で第4問から第7問の4問から3問を選ぶ。第6問がベクトルで第7問が複素数平面である。<br>
第6章から第8章は範囲外であり回帰分析とAIの計算はその行列と内積の上に立つ。</div>

<h2 id="s8">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>文章の意味の近さを、ベクトルの向きの近さで測ってよいか。</strong> コサイン類似度はベクトルの長さの影響を除き、向きの近さだけを測る。本文の例えでは長さは熱量に当たり、長さが表す情報を捨ててよいかが論点になる。</li>
<li class="tb-vnote"><strong>行列は数を並べた表か、それとも点を動かす規則か。</strong> 現行の数学Cは行列を数の表を整理して表現する方法として扱う。一方で第7章は 2×2 行列を平面の点を動かす規則として扱い、どちらを基本とみるかで行列の学び方が変わる。</li>
</ul>

<h2 id="s9">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>高等学校学習指導要領 平成30年告示 解説 数学編 理数編 PDF — https://www.mext.go.jp/content/20260115-mxt_kyoiku02-100002620_04.pdf</li>
<li>大学入試センター 大学入学共通テスト — https://www.dnc.ac.jp/kyotsu/</li>
<li>大学入試センター 令和7年度本試験 数学Ⅱ・数学B・数学C 問題 — https://www.dnc.ac.jp/albums/abm.php?d=771&amp;f=abm00005945.pdf&amp;n=2025_op_30_sugaku2BC.pdf</li>
<li>大学入試センター 令和8年度本試験 数学Ⅱ・数学B・数学C 問題 — https://www.dnc.ac.jp/albums/abm.php?d=2144&amp;f=abm00017550.pdf&amp;n=2026_ol_18_sugaku2BC.pdf</li>
<li>東進 2025年共通テスト 数学Ⅱ・B・C 分析 — https://www.toshin.com/kyotsutest/2025/analysis_suugaku2bc.html</li>
<li>リセマム 2026年共通テスト 数学Ⅱ・B・C 講評 — https://resemom.jp/article/2026/01/18/84675.html</li>
<li>旧課程 高等学校数学C — Wikibooks — https://ja.wikibooks.org/wiki/旧課程(-2012年度)高等学校数学C</li>
<li>vector — Wiktionary — https://en.wiktionary.org/wiki/vector</li>
<li>Vaswani et al. Attention Is All You Need — https://arxiv.org/abs/1706.03762</li>
<li>Ordinary least squares — Wikipedia — https://en.wikipedia.org/wiki/Ordinary_least_squares</li>
</ol>
