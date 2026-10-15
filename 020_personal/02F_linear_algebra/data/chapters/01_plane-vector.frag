<!--meta
{"chapter": 1, "part": "数学C", "title": "平面ベクトル", "thesis": "ベクトルは向きと大きさだけで定まり位置を問わない。和と差と実数倍は数の計算と同じ法則に従う。平行でない2本のベクトルを決めると平面のどのベクトルも1通りに分解でき係数を比べる計算が可能になる。", "verify": {"date": "2026-10-15", "checked": 38, "match": 35, "fixed": 2, "unconfirmed": 1}}
-->
<p>序章ではベクトルを大きさと向きをもつ量として導入した。この章ではその定義を厳密にして計算の規則を組み立てる。足し算・引き算・実数倍の3つの演算を定義し数の計算と同じ法則が成り立つことを確かめる。続いて平面のどのベクトルも平行でない2本のベクトルで1通りに表せることを示す。最後に座標を使ってベクトルを数の組で表す。</p>
<p>共通テストで直接問われるのは主に3点である。図形の中のベクトルを2本の基本のベクトルで表すこと・平行条件から未知数を求めること・成分から大きさを求めることである。第1点の分解の一意性は第3章の交点の計算と第4章の空間の計算を支える。</p>

<h2 id="s1">有向線分とベクトルの相等</h2>
<p>線分ABに A から B への向きをつけたものを<strong>有向線分</strong>ABと呼ぶ。Aを始点・Bを終点という。有向線分は位置と向きと長さの3つをもつ。</p>
<p>有向線分から位置の情報を捨てて向きと長さだけを考えたものを<strong>ベクトル</strong>と呼ぶ。有向線分ABが表すベクトルを \( \overrightarrow{AB} \) と書く。1文字で \( \vec{a} \) と書くこともある。ベクトル \( \vec{a} \) の長さを<strong>大きさ</strong>といい \( |\vec{a}| \) で表す。</p>
<p>2つのベクトル \( \vec{a} \) と \( \vec{b} \) の向きが同じで大きさも等しい時 \( \vec{a}=\vec{b} \) と書き<strong>相等</strong>であるという。<strong class="hit">平行移動して重なる有向線分はすべて同じベクトルを表す</strong>。位置が異なっていても等しい。</p>
<p>特別なベクトルが3つある。大きさが1のベクトルを<strong>単位ベクトル</strong>と呼ぶ。始点と終点が一致する \( \overrightarrow{AA} \) は大きさが0であり<strong>零ベクトル</strong>と呼んで \( \vec{0} \) で表す。零ベクトルの向きは考えない。\( \vec{a} \) と大きさが等しく向きが反対のベクトルを<strong>逆ベクトル</strong>と呼び \( -\vec{a} \) で表す。\( \overrightarrow{BA}=-\overrightarrow{AB} \) である。</p>
<p>位置を捨てる理由は計算を簡単にするためである。移動や速度では「どこから」より「どちらへどれだけ」が問題になる。東へ3 kmの移動は東京駅から始めても大阪駅から始めても同じ移動である。位置を捨てておけば矢印を自由に平行移動して始点と終点をつなげる。次節の加法はこの自由を前提にしている。</p>
<p>大きさ \( |\vec{a}| \) は0以上の実数でありスカラーである。\( |\vec{a}|=0 \) となるのは \( \vec{a}=\vec{0} \) の時だけである。絶対値記号と同じ縦棒を使うが中身がベクトルの時は長さを表す。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="平行移動して重なる矢印は同じベクトルである">
  <defs><marker id="ah01a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  <marker id="ah01b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
  <marker id="ah01c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker></defs>
  <g stroke="var(--accent)" stroke-width="3" marker-end="url(#ah01a)">
    <line x1="60" y1="190" x2="180" y2="130"/>
    <line x1="120" y1="100" x2="240" y2="40"/>
    <line x1="230" y1="230" x2="350" y2="170"/>
  </g>
  <line x1="520" y1="90" x2="400" y2="150" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah01b)"/>
  <line x1="620" y1="230" x2="620" y2="96" stroke="var(--muted)" stroke-width="3" marker-end="url(#ah01c)"/>
  <g font-size="13">
    <text x="100" y="182" fill="var(--accent)" font-weight="600">a</text>
    <text x="160" y="92" fill="var(--accent)" font-weight="600">a</text>
    <text x="270" y="222" fill="var(--accent)" font-weight="600">a</text>
    <text x="466" y="142" fill="var(--warm)" font-weight="600">−a</text>
    <text x="632" y="170" fill="var(--muted)" font-weight="600">c</text>
    <text x="40" y="258" fill="var(--sub)">青の3本は向きと長さが同じなので等しい</text>
    <text x="390" y="200" fill="var(--warm)">−a は向きが反対</text>
    <text x="700" y="258" fill="var(--muted)" text-anchor="end">c は長さが同じで向きが異なる</text>
  </g>
</svg>
<figcaption>青の3本の矢印はすべて同じベクトル a を表す。橙の矢印は逆ベクトル −a である。灰色の c は a と大きさが等しいが向きが異なるので a と等しくない。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 1</div>
<p>平行四辺形ABCDで \( \overrightarrow{AB} \) と等しいベクトルと \( \overrightarrow{AD} \) と等しいベクトルを頂点の記号で答えよ。また \( \overrightarrow{CB} \) を \( \overrightarrow{AD} \) で表せ。</p>
<details open><summary>解き方</summary><div>手順1 平行四辺形では向かい合う辺が平行で長さが等しい。<br>手順2 ABと平行で同じ向きの辺は D から C へ向かう辺である。よって \( \overrightarrow{AB}=\overrightarrow{DC} \)。<br>手順3 同様に \( \overrightarrow{AD}=\overrightarrow{BC} \)。<br>手順4 \( \overrightarrow{CB} \) は \( \overrightarrow{BC} \) の逆ベクトルなので \( \overrightarrow{CB}=-\overrightarrow{AD} \)。<br>答え \( \overrightarrow{DC} \) ・ \( \overrightarrow{BC} \) ・ \( -\overrightarrow{AD} \)</div></details></div>

<p>典型的な誤りは頂点の順序である。平行四辺形ABCDで \( \overrightarrow{AB}=\overrightarrow{CD} \) と書くのは誤りである。CからDへの向きはAからBへの向きと反対だからである。頂点は周に沿って順に並ぶことを図で確かめてから式を書く。</p>

<aside class="an an-lv"><b>恋愛で言えば</b>
<p class="an-h">ベクトルの相等は出会った場所を問わない</p>
<p>2人の関係を向きと距離で表すなら出会いが大学でも職場でも同じ関係である。位置を捨てて向きと大きさだけを比べるのが相等である。</p>
</aside>

<h2 id="s2">ベクトルの加法と減法</h2>
<p>2つのベクトル \( \vec{a} \) と \( \vec{b} \) の和を次のように定める。\( \vec{a}=\overrightarrow{AB} \) となる点A・Bをとり \( \vec{b}=\overrightarrow{BC} \) となる点Cをとる。この時 \( \overrightarrow{AC} \) を \( \vec{a}+\vec{b} \) とする。つまり</p>
\[ \overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC} \]
<p>である。1つ目の終点を2つ目の始点につなぐので三角形の法則と呼ぶ。始点をそろえて2本を辺とする平行四辺形を描くと対角線が和になる。これを平行四辺形の法則と呼ぶ。2つの法則は同じ和を与える。序章の東へ3 kmと北へ4 kmの移動の合成はこの加法である。</p>
<p>加法では数の足し算と同じ法則が成り立つ。</p>
\[ \vec{a}+\vec{b}=\vec{b}+\vec{a},\qquad (\vec{a}+\vec{b})+\vec{c}=\vec{a}+(\vec{b}+\vec{c}),\qquad \vec{a}+\vec{0}=\vec{a},\qquad \vec{a}+(-\vec{a})=\vec{0} \]
<p>交換法則は平行四辺形の2通りの辺のたどり方が同じ対角線に着くことから分かる。</p>
<p>加法を繰り返すと折れ線のつなぎ方の規則が得られる。\( \overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}=\overrightarrow{AD} \) のように途中の点が順に消え最初の始点と最後の終点だけが残る。始点に戻る閉じた折れ線では和が零ベクトルになる。三角形ABCでは \( \overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CA}=\vec{0} \) である。この性質は等式の証明で途中の点を差し込む時に使う。例えば \( \overrightarrow{AC} \) を \( \overrightarrow{AB}+\overrightarrow{BC} \) と書き換えるのは点Bを経由する道に置き換える操作である。</p>
<p>差は逆ベクトルを足すことで定める。\( \vec{a}-\vec{b}=\vec{a}+(-\vec{b}) \) である。始点をそろえて \( \vec{a}=\overrightarrow{OA} \) と \( \vec{b}=\overrightarrow{OB} \) とすると差は次の形になる。</p>
\[ \overrightarrow{OA}-\overrightarrow{OB}=\overrightarrow{BA} \]
<p><strong class="hit">差 \( \vec{a}-\vec{b} \) は \( \vec{b} \) の終点から \( \vec{a} \) の終点へ向かう矢印である</strong>。引く側から引かれる側へ向かう点に注意する。この形を裏返した \( \overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA} \) は始点を O にそろえる変形として第3章で何度も使う。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="三角形の法則と平行四辺形の法則と差">
  <defs><marker id="ah01d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  <marker id="ah01e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
  <marker id="ah01f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker>
  <marker id="ah01g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker></defs>
  <text x="40" y="30" font-size="13" fill="var(--muted)">三角形の法則</text>
  <line x1="60" y1="220" x2="210" y2="180" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah01d)"/>
  <line x1="210" y1="180" x2="250" y2="70" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah01e)"/>
  <line x1="60" y1="220" x2="250" y2="70" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#ah01f)"/>
  <g font-size="13" font-weight="600">
    <text x="130" y="222" fill="var(--accent)">a</text><text x="240" y="135" fill="var(--cool)">b</text><text x="110" y="140" fill="var(--ink)">a ＋ b</text>
    <text x="48" y="240" fill="var(--sub)">A</text><text x="214" y="198" fill="var(--sub)">B</text><text x="256" y="66" fill="var(--sub)">C</text>
  </g>
  <line x1="340" y1="20" x2="340" y2="250" stroke="var(--line)" stroke-dasharray="4 4"/>
  <text x="380" y="30" font-size="13" fill="var(--muted)">平行四辺形の法則と差</text>
  <g stroke="var(--line)" stroke-width="1.5" stroke-dasharray="5 4"><line x1="550" y1="180" x2="590" y2="70"/><line x1="440" y1="110" x2="590" y2="70"/></g>
  <line x1="400" y1="220" x2="550" y2="180" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah01d)"/>
  <line x1="400" y1="220" x2="440" y2="110" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah01e)"/>
  <line x1="400" y1="220" x2="590" y2="70" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#ah01f)"/>
  <line x1="440" y1="110" x2="550" y2="180" stroke="var(--warm)" stroke-width="2.5" marker-end="url(#ah01g)"/>
  <g font-size="13" font-weight="600">
    <text x="470" y="222" fill="var(--accent)">a</text><text x="398" y="160" fill="var(--cool)">b</text>
    <text x="596" y="66" fill="var(--ink)">a ＋ b</text><text x="562" y="176" fill="var(--warm)">a − b</text>
    <text x="386" y="238" fill="var(--sub)">O</text>
  </g>
</svg>
<figcaption>左は a の終点に b の始点をつないで和を作る。右は始点を O にそろえた平行四辺形で対角線 a ＋ b が和である。もう1本の対角線は b の終点から a の終点へ向かい a − b を表す。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 2</div>
<p>正六角形ABCDEFの中心をOとし \( \overrightarrow{AB}=\vec{a} \) と \( \overrightarrow{AF}=\vec{b} \) とする。\( \overrightarrow{AO} \) と \( \overrightarrow{AC} \) と \( \overrightarrow{AD} \) と \( \overrightarrow{CE} \) を \( \vec{a} \) と \( \vec{b} \) で表せ。</p>
<details open><summary>解き方</summary><div>手順1 正六角形は中心Oで6つの正三角形に分かれる。四角形ABOFはひし形なので \( \overrightarrow{AO}=\vec{a}+\vec{b} \)。<br>手順2 \( \overrightarrow{BC} \) は \( \overrightarrow{AO} \) と平行で同じ長さなので \( \overrightarrow{BC}=\vec{a}+\vec{b} \)。<br>手順3 \( \overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{BC}=2\vec{a}+\vec{b} \)。<br>手順4 DはAOの延長上でAD＝2AOなので \( \overrightarrow{AD}=2\vec{a}+2\vec{b} \)。<br>手順5 \( \overrightarrow{AE}=\overrightarrow{AF}+\overrightarrow{FE}=\vec{b}+(\vec{a}+\vec{b})=\vec{a}+2\vec{b} \)。始点をAにそろえて \( \overrightarrow{CE}=\overrightarrow{AE}-\overrightarrow{AC}=-\vec{a}+\vec{b} \)。<br>答え \( \vec{a}+\vec{b} \) ・ \( 2\vec{a}+\vec{b} \) ・ \( 2\vec{a}+2\vec{b} \) ・ \( \vec{b}-\vec{a} \)</div></details></div>

<p>ベクトルの等式を示す時も始点をそろえる方針が使える。全部の矢印を同じ1点から出る矢印の差に書き直せば図に頼らず文字式の計算だけで確かめられる。</p>

<div class="ex"><div class="ex-h">例題 3</div>
<p>任意の4点A・B・C・Dについて \( \overrightarrow{AB}+\overrightarrow{CD}=\overrightarrow{AD}+\overrightarrow{CB} \) が成り立つことを示せ。</p>
<details open><summary>解き方</summary><div>手順1 左辺から右辺を引いて \( \vec{0} \) になることを示す。<br>手順2 \( \overrightarrow{AB}-\overrightarrow{AD}=\overrightarrow{DB} \) である。始点がAでそろっているので差は終点Dから終点Bへ向かう。<br>手順3 \( \overrightarrow{CD}-\overrightarrow{CB}=\overrightarrow{BD} \) である。<br>手順4 合計は \( \overrightarrow{DB}+\overrightarrow{BD}=\overrightarrow{DD}=\vec{0} \)。<br>答え 左辺と右辺の差が \( \vec{0} \) なので等式が成り立つ。別解として点Oを1つ決め全部を \( \overrightarrow{OB}-\overrightarrow{OA} \) の形に直すと両辺とも \( \overrightarrow{OB}+\overrightarrow{OD}-\overrightarrow{OA}-\overrightarrow{OC} \) になる。</div></details></div>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">AB ＝ OB − OA は期末残高から期首残高を引く計算である</p>
<p>O を基準日にとると OA が期首残高で OB が期末残高である。増減額 AB は後から前を引く。逆に引くと符号が反対になる。</p>
</aside>

<h2 id="s3">実数倍と平行条件</h2>
<p>実数 \( k \) とベクトル \( \vec{a} \) に対し \( k\vec{a} \) を次のように定める。\( \vec{a}\neq\vec{0} \) の時</p>
<ul>
<li>\( k>0 \) なら \( \vec{a} \) と同じ向きで大きさが \( k|\vec{a}| \) のベクトル</li>
<li>\( k<0 \) なら \( \vec{a} \) と反対の向きで大きさが \( |k||\vec{a}| \) のベクトル</li>
<li>\( k=0 \) なら \( \vec{0} \)</li>
</ul>
<p>とする。\( \vec{a}=\vec{0} \) の時は \( k\vec{0}=\vec{0} \) とする。\( (-1)\vec{a} \) は逆ベクトル \( -\vec{a} \) と一致する。実数倍についても数の計算と同じ法則が成り立つ。</p>
\[ k(l\vec{a})=(kl)\vec{a},\qquad (k+l)\vec{a}=k\vec{a}+l\vec{a},\qquad k(\vec{a}+\vec{b})=k\vec{a}+k\vec{b} \]
<p>3つ目の分配法則は三角形を \( k \) 倍に拡大すると3辺がすべて \( k \) 倍になる相似から分かる。この法則があるので \( 3(\vec{a}-2\vec{b})-2(\vec{a}+\vec{b})=\vec{a}-8\vec{b} \) のような計算を文字式と同じ手順で進めてよい。</p>
<p>\( \vec{0} \) でない2つのベクトルの向きが同じか反対である時 \( \vec{a} \) と \( \vec{b} \) は<strong>平行</strong>であるといい \( \vec{a}\parallel\vec{b} \) と書く。実数倍の定義から次の<strong>平行条件</strong>が成り立つ。</p>
\[ \vec{a}\neq\vec{0},\ \vec{b}\neq\vec{0}\ \text{のとき}\quad \vec{a}\parallel\vec{b}\iff \vec{b}=k\vec{a}\ \text{となる実数}\ k\ \text{がある} \]
<p>\( \vec{a}\neq\vec{0} \) の時 \( \dfrac{\vec{a}}{|\vec{a}|} \) は \( \vec{a} \) と同じ向きの単位ベクトルである。大きさを \( |\vec{a}| \) で割ると1になるからである。\( \vec{a} \) に平行な単位ベクトルは向きが同じものと反対のものの2つあり \( \pm\dfrac{\vec{a}}{|\vec{a}|} \) である。</p>

<div class="ex"><div class="ex-h">例題 4</div>
<p>\( |\vec{a}|=4 \) とする。\( \vec{a} \) に平行な単位ベクトルと \( \vec{a} \) と反対向きで大きさ10のベクトルを \( \vec{a} \) で表せ。</p>
<details open><summary>解き方</summary><div>手順1 平行な単位ベクトルは \( \pm\dfrac{\vec{a}}{|\vec{a}|}=\pm\dfrac{1}{4}\vec{a} \)。<br>手順2 反対向きで大きさ10は単位ベクトル \( -\dfrac{1}{4}\vec{a} \) の10倍である。<br>答え \( \pm\dfrac{1}{4}\vec{a} \) ・ \( -\dfrac{5}{2}\vec{a} \)</div></details></div>

<p>演算法則が数と同じなのでベクトルを未知数とする1次方程式も移項で解ける。ただしベクトルどうしの割り算は定義しない。両辺を割ってよいのは0でない実数だけである。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>\( 3(\vec{a}-2\vec{b})-2(\vec{a}+\vec{b}) \) を簡単にせよ。また \( 2\vec{x}+\vec{a}=5\vec{b}-\vec{x} \) を満たす \( \vec{x} \) を \( \vec{a} \) と \( \vec{b} \) で表せ。</p>
<details open><summary>解き方</summary><div>手順1 分配法則で \( 3\vec{a}-6\vec{b}-2\vec{a}-2\vec{b}=\vec{a}-8\vec{b} \)。<br>手順2 後半は \( \vec{x} \) を左辺へ・ \( \vec{a} \) を右辺へ移項して \( 3\vec{x}=5\vec{b}-\vec{a} \)。<br>手順3 両辺に実数 \( \dfrac{1}{3} \) をかけて \( \vec{x}=\dfrac{5\vec{b}-\vec{a}}{3} \)。<br>答え \( \vec{a}-8\vec{b} \) ・ \( \vec{x}=-\dfrac{1}{3}\vec{a}+\dfrac{5}{3}\vec{b} \)</div></details></div>

<p>典型的な誤りは平行な単位ベクトルを1つしか答えないことである。平行は向きが同じ場合と反対の場合の両方を含む。問題文が「同じ向き」と指定していない限り符号の2通りを答える。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">実数倍はレバレッジで負の実数倍は空売りである</p>
<p>2倍は同じ向きに損益を2倍にし −1倍は向きを反転させる。0倍はポジションを持たないことで零ベクトルに当たる。</p>
</aside>

<h2 id="s4">1次独立とベクトルの分解</h2>
<p>平面の2つのベクトル \( \vec{a} \) と \( \vec{b} \) がどちらも \( \vec{0} \) でなく平行でもない時 \( \vec{a} \) と \( \vec{b} \) は<strong>1次独立</strong>であるという。1次独立な2本のベクトルについて次の定理が成り立つ。</p>
<div class="tb-key"><b>ベクトルの分解</b>
\( \vec{a} \) と \( \vec{b} \) が1次独立ならば平面の任意のベクトル \( \vec{p} \) は \( \vec{p}=s\vec{a}+t\vec{b} \) の形にただ1通りに表せる。</div>
<p><strong>表せる理由</strong> 始点をOにそろえて \( \vec{a}=\overrightarrow{OA} \) と \( \vec{b}=\overrightarrow{OB} \) と \( \vec{p}=\overrightarrow{OP} \) とする。Pを通りOBに平行な直線と直線OAの交点をA′とする。Pを通りOAに平行な直線と直線OBの交点をB′とする。\( \vec{a} \) と \( \vec{b} \) が平行でないので2つの交点は必ず存在する。OA′はOAと同じ直線上にあるので \( \overrightarrow{OA'}=s\vec{a} \) と書ける。同様に \( \overrightarrow{OB'}=t\vec{b} \) と書ける。平行四辺形OA′PB′から \( \vec{p}=s\vec{a}+t\vec{b} \) である。</p>
<p><strong>1通りである理由</strong> \( s\vec{a}+t\vec{b}=s'\vec{a}+t'\vec{b} \) とする。移項すると \( (s-s')\vec{a}=(t'-t)\vec{b} \) である。もし \( s\neq s' \) なら両辺を \( s-s' \) で割って \( \vec{a}=\dfrac{t'-t}{s-s'}\vec{b} \) となる。これは \( \vec{a} \) と \( \vec{b} \) が平行であるか \( \vec{a}=\vec{0} \) であることを意味し仮定に反する。よって \( s=s' \) で同様に \( t=t' \) である。</p>
<p>一意性から次の<strong>係数比較</strong>が使える。</p>
\[ \vec{a},\ \vec{b}\ \text{が1次独立のとき}\quad s\vec{a}+t\vec{b}=s'\vec{a}+t'\vec{b}\iff s=s'\ \text{かつ}\ t=t' \]
<p><strong class="hit">1次独立な2本のベクトルは平面に斜めの座標軸を張る</strong>。係数 \( (s,t) \) はその斜交座標での座標である。\( s\vec{a}+t\vec{b}=\vec{0} \) ならば \( s=t=0 \) という形もよく使う。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 320" role="img" aria-label="1次独立な a と b が作る斜めの格子と p ＝ 2a ＋ b">
  <defs><marker id="ah01h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  <marker id="ah01i" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
  <marker id="ah01j" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker></defs>
  <g transform="translate(0,30)">
    <g stroke="var(--line)" stroke-width="1">
      <line x1="113" y1="276" x2="437" y2="204"/><line x1="143" y1="206" x2="467" y2="134"/><line x1="173" y1="136" x2="497" y2="64"/><line x1="203" y1="66" x2="527" y2="-6"/>
      <line x1="131" y1="291" x2="239" y2="39"/><line x1="221" y1="271" x2="329" y2="19"/><line x1="311" y1="251" x2="419" y2="-1"/><line x1="401" y1="231" x2="509" y2="-21"/>
    </g>
    <path d="M140 270 L320 230 L350 160" fill="none" stroke="var(--sub)" stroke-width="1.5" stroke-dasharray="5 4"/>
    <line x1="140" y1="270" x2="230" y2="250" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah01h)"/>
    <line x1="140" y1="270" x2="170" y2="200" stroke="var(--cool)" stroke-width="3" marker-end="url(#ah01i)"/>
    <line x1="140" y1="270" x2="350" y2="160" stroke="var(--warm)" stroke-width="3" marker-end="url(#ah01j)"/>
    <circle cx="140" cy="270" r="4" fill="var(--ink)"/>
    <g font-size="13" font-weight="600">
      <text x="122" y="290" fill="var(--sub)">O</text>
      <text x="196" y="276" fill="var(--accent)">a</text>
      <text x="138" y="222" fill="var(--cool)">b</text>
      <text x="356" y="156" fill="var(--warm)">p ＝ 2a ＋ b</text>
      <text x="300" y="256" fill="var(--sub)">2a</text>
    </g>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="560" y="120">a と b が1次独立</text>
    <text x="560" y="146" fill="var(--sub)">格子の交点は</text>
    <text x="560" y="168" fill="var(--sub)">sa ＋ tb の点</text>
    <text x="560" y="210">p の斜交座標</text>
    <text x="560" y="234" fill="var(--warm)">(s, t) ＝ (2, 1)</text>
  </g>
</svg>
<figcaption>灰色の線は a 方向と b 方向の格子である。p は a 方向に2目盛り・b 方向に1目盛り進んだ点で p ＝ 2a ＋ b と1通りに表せる。a と b が平行だと格子は1本の直線につぶれて平面を覆えない。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 6</div>
<p>\( \vec{a} \) と \( \vec{b} \) は1次独立とする。\( (s+1)\vec{a}+(2t-3)\vec{b}=\vec{0} \) を満たす実数 \( s \) と \( t \) を求めよ。また \( (2s-t)\vec{a}+(s+t)\vec{b}=4\vec{a}+5\vec{b} \) を満たす \( s \) と \( t \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 1次独立なので \( \vec{0} \) を表す係数はどちらも0である。\( s+1=0 \) と \( 2t-3=0 \) から \( s=-1 \) ・ \( t=\dfrac{3}{2} \)。<br>手順2 後半は係数比較で \( 2s-t=4 \) と \( s+t=5 \)。<br>手順3 2式を足して \( 3s=9 \) から \( s=3 \)。代入して \( t=2 \)。<br>検算 \( 2\times3-2=4 \) ・ \( 3+2=5 \)。<br>答え 前半 \( s=-1,\ t=\dfrac{3}{2} \) ・ 後半 \( s=3,\ t=2 \)</div></details></div>

<p>典型的な誤りは1次独立を確かめずに係数を比べることである。例えば \( \vec{b}=2\vec{a} \) の時 \( 2\vec{a}+0\vec{b} \) と \( 0\vec{a}+1\vec{b} \) は同じベクトルである。係数比較は1次独立という前提があって初めて成り立つ。</p>
<p>平面では1次独立なベクトルは最大で2本である。3本目の \( \vec{c} \) は定理により必ず \( \vec{c}=s\vec{a}+t\vec{b} \) と書けるので他の2本から作れてしまう。平面を表すのに必要な独立な方向の数が2であることを平面の<strong>次元</strong>が2であるという。第4章の空間では独立な方向が3本になり第6章では一般の \( n \) 本に広げる。</p>
<p>分解の定理は図形の問題を計算に変える出発点でもある。三角形OABで \( \overrightarrow{OA}=\vec{a} \) と \( \overrightarrow{OB}=\vec{b} \) とおけば三角形の上のどの点への矢印も \( s\vec{a}+t\vec{b} \) と書ける。例えば辺ABの中点Mについて \( \overrightarrow{OM}=\overrightarrow{OA}+\dfrac{1}{2}\overrightarrow{AB}=\vec{a}+\dfrac{1}{2}(\vec{b}-\vec{a})=\dfrac{1}{2}\vec{a}+\dfrac{1}{2}\vec{b} \) である。この計算を一般の内分点に広げるのが第3章である。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">1次独立は打撃と守備の2軸で選手を評価することである</p>
<p>2軸が打率と長打率のように同じ向きを測ると守備の差を表せない。向きの異なる2軸なら選手を1組の数で書き分けられる。</p>
</aside>

<h2 id="s5">ベクトルの成分表示と大きさ</h2>
<p>座標平面でx軸の正の向きの単位ベクトルを \( \vec{e_1} \) とし y軸の正の向きの単位ベクトルを \( \vec{e_2} \) とする。この2本を<strong>基本ベクトル</strong>と呼ぶ。2本は1次独立なので前節の定理により任意のベクトルは \( \vec{a}=a_1\vec{e_1}+a_2\vec{e_2} \) とただ1通りに表せる。この係数を並べて</p>
\[ \vec{a}=(a_1,a_2) \]
<p>と書くのが<strong>成分表示</strong>である。\( a_1 \) をx成分・ \( a_2 \) をy成分と呼ぶ。始点を原点Oに置いた時の終点の座標が成分と一致する。</p>
<p>成分表示の利点は演算が成分ごとの計算になることである。前節までの法則から次の式が成り立つ。</p>
\[ (a_1,a_2)\pm(b_1,b_2)=(a_1\pm b_1,\ a_2\pm b_2),\qquad k(a_1,a_2)=(ka_1,\ ka_2) \]
<p>相等は成分がすべて等しいことと同値である。\( (a_1,a_2)=(b_1,b_2)\iff a_1=b_1 \) かつ \( a_2=b_2 \) である。</p>
<p>大きさは三平方の定理で求める。成分が \( a_1 \) と \( a_2 \) の矢印は横 \( |a_1| \) ・縦 \( |a_2| \) の直角三角形の斜辺である。</p>
\[ |\vec{a}|=\sqrt{a_1^{\,2}+a_2^{\,2}} \]
<p>2点 \( A(a_1,a_2) \) と \( B(b_1,b_2) \) について \( \overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}=(b_1-a_1,\ b_2-a_2) \) である。<strong class="hit">成分は終点の座標から始点の座標を引く</strong>。大きさ \( |\overrightarrow{AB}| \) は2点間の距離と一致する。</p>
<p>平行条件を成分で書く。\( \vec{a}=(a_1,a_2) \) と \( \vec{b}=(b_1,b_2) \) が \( \vec{0} \) でない時 \( \vec{a}\parallel\vec{b}\iff a_1b_2-a_2b_1=0 \) である。\( \vec{b}=k\vec{a} \) を成分で書いて \( k \) を消去すると得られる。</p>
<p>この式は比の形 \( a_1:a_2=b_1:b_2 \) を分母を払って書いたものである。比の形で暗記すると成分に0がある時に割り算ができず誤る。\( a_1b_2-a_2b_1=0 \) の形なら0を含む場合もそのまま使える。この量 \( a_1b_2-a_2b_1 \) は第2章で三角形の面積として再び現れ第7章では行列式と呼ばれる。</p>
<p>成分による計算法則は基本ベクトルの式から確かめられる。\( \vec{a}+\vec{b}=(a_1\vec{e_1}+a_2\vec{e_2})+(b_1\vec{e_1}+b_2\vec{e_2})=(a_1+b_1)\vec{e_1}+(a_2+b_2)\vec{e_2} \) である。交換法則・結合法則・分配法則を使って同じ基本ベクトルの項をまとめただけである。成分表示は新しい規則ではなく第4節の分解を座標軸の方向で行ったものである。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 300" role="img" aria-label="成分表示と始点が異なる等しいベクトル">
  <defs><marker id="ah01k" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
  <marker id="ah01l" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>
  <g stroke="var(--line)" stroke-width="1">
    <line x1="110" y1="40" x2="110" y2="250"/><line x1="160" y1="40" x2="160" y2="250"/><line x1="210" y1="40" x2="210" y2="250"/><line x1="260" y1="40" x2="260" y2="250"/><line x1="310" y1="40" x2="310" y2="250"/><line x1="360" y1="40" x2="360" y2="250"/><line x1="410" y1="40" x2="410" y2="250"/><line x1="460" y1="40" x2="460" y2="250"/><line x1="510" y1="40" x2="510" y2="250"/>
    <line x1="60" y1="200" x2="530" y2="200"/><line x1="60" y1="150" x2="530" y2="150"/><line x1="60" y1="100" x2="530" y2="100"/><line x1="60" y1="50" x2="530" y2="50"/>
  </g>
  <line x1="60" y1="250" x2="540" y2="250" stroke="var(--ink)" marker-end="url(#ah01l)"/>
  <line x1="60" y1="250" x2="60" y2="30" stroke="var(--ink)" marker-end="url(#ah01l)"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="110" y="268">1</text><text x="160" y="268">2</text><text x="210" y="268">3</text><text x="260" y="268">4</text><text x="310" y="268">5</text><text x="360" y="268">6</text><text x="410" y="268">7</text><text x="460" y="268">8</text><text x="510" y="268">9</text>
    <text x="48" y="204">1</text><text x="48" y="154">2</text><text x="48" y="104">3</text><text x="48" y="54">4</text><text x="48" y="268">O</text>
    <text x="548" y="268">x</text><text x="60" y="22">y</text>
  </g>
  <g stroke="var(--sub)" stroke-width="1.5" stroke-dasharray="5 4"><line x1="60" y1="250" x2="210" y2="250"/><line x1="210" y1="250" x2="210" y2="150"/></g>
  <line x1="60" y1="250" x2="210" y2="150" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah01k)"/>
  <line x1="310" y1="200" x2="460" y2="100" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah01k)"/>
  <g font-size="13">
    <text x="120" y="244" fill="var(--sub)">x成分 3</text>
    <text x="216" y="206" fill="var(--sub)">y成分 2</text>
    <text x="96" y="186" fill="var(--accent)" font-weight="600">a ＝ (3, 2)</text>
    <text x="294" y="218" fill="var(--ink)">A(5, 1)</text>
    <text x="466" y="96" fill="var(--ink)">B(8, 3)</text>
    <text x="350" y="134" fill="var(--accent)" font-weight="600">AB</text>
  </g>
  <g font-size="13" fill="var(--ink)">
    <text x="565" y="90">|a| ＝ √(3² ＋ 2²)</text>
    <text x="565" y="112">　　＝ √13</text>
    <text x="565" y="160">AB ＝ (8 − 5, 3 − 1)</text>
    <text x="565" y="182">　　＝ (3, 2) ＝ a</text>
  </g>
</svg>
<figcaption>1目盛りは1。原点から (3, 2) へ向かう矢印の成分は終点の座標と一致する。A(5, 1) から B(8, 3) への矢印も成分が (3, 2) なので a と等しい。大きさは直角三角形の斜辺で √13 である。</figcaption>
</figure>

<div class="ex"><div class="ex-h">例題 7</div>
<p>\( \vec{a}=(2,1) \) と \( \vec{b}=(-1,3) \) とする。(1) \( \vec{p}=(1,11) \) を \( s\vec{a}+t\vec{b} \) の形で表せ。(2) \( \vec{c}=(x,6) \) が \( \vec{d}=(2,3) \) と平行になる \( x \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( s\vec{a}+t\vec{b}=(2s-t,\ s+3t) \)。成分を比べて \( 2s-t=1 \) と \( s+3t=11 \)。<br>手順2 1式目を3倍して2式目に足すと \( 7s=14 \) から \( s=2 \)。代入して \( t=3 \)。<br>検算 \( 2\times2-3=1 \) ・ \( 2+3\times3=11 \)。<br>手順3 平行条件 \( x\times3-6\times2=0 \) から \( x=4 \)。このとき \( \vec{c}=(4,6)=2\vec{d} \) である。<br>答え (1) \( \vec{p}=2\vec{a}+3\vec{b} \) (2) \( x=4 \)</div></details></div>

<div class="ex"><div class="ex-h">例題 8</div>
<p>\( \vec{a}=(3,-4) \) と同じ向きの単位ベクトルを成分で求めよ。また2点 \( A(-1,2) \) と \( B(5,-6) \) について \( \overrightarrow{AB} \) と \( |\overrightarrow{AB}| \) を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \( |\vec{a}|=\sqrt{9+16}=5 \)。単位ベクトルは \( \dfrac{1}{5}(3,-4)=\left(\dfrac{3}{5},-\dfrac{4}{5}\right) \)。<br>手順2 \( \overrightarrow{AB}=(5-(-1),\ -6-2)=(6,-8) \)。<br>手順3 \( |\overrightarrow{AB}|=\sqrt{36+64}=10 \)。<br>答え \( \left(\dfrac{3}{5},-\dfrac{4}{5}\right) \) ・ \( (6,-8) \) ・ 10</div></details></div>

<div class="ex"><div class="ex-h">例題 9</div>
<p>4点 \( A(1,1) \) ・ \( B(4,2) \) ・ \( C(5,5) \) ・ \( D(x,y) \) を頂点とする四角形ABCDが平行四辺形になる時 \( D \) の座標を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 ABCDが平行四辺形である条件は \( \overrightarrow{AD}=\overrightarrow{BC} \) である。頂点の順序から向かい合う辺はADとBCである。<br>手順2 \( \overrightarrow{BC}=(5-4,\ 5-2)=(1,3) \)。<br>手順3 \( \overrightarrow{AD}=(x-1,\ y-1) \) を \( (1,3) \) と等しくおいて \( x=2 \) ・ \( y=4 \)。<br>検算 \( \overrightarrow{AB}=(3,1) \) と \( \overrightarrow{DC}=(3,1) \) も等しい。<br>答え \( D(2,4) \)</div></details></div>

<p>典型的な誤りは \( \overrightarrow{AB} \) の成分で始点から終点を引くことである。\( (a_1-b_1,\ a_2-b_2) \) は \( \overrightarrow{BA} \) の成分であり符号が反対になる。大きさは同じなので距離の問題では誤りが表に現れず内積や平行条件の問題で失点する。</p>
<p>もう1つの誤りは和の大きさを大きさの和で求めることである。\( \vec{a}=(3,0) \) と \( \vec{b}=(0,4) \) では \( |\vec{a}|+|\vec{b}|=7 \) だが \( |\vec{a}+\vec{b}|=|(3,4)|=5 \) である。一般に \( |\vec{a}+\vec{b}|\le|\vec{a}|+|\vec{b}| \) が成り立ち等号は2本が同じ向きの時かどちらかが \( \vec{0} \) の時に限る。三角形の2辺の和が残りの1辺より長いことと同じ内容であり三角不等式と呼ぶ。和の大きさは先に成分を足してから求める。</p>

<h2 id="s6">現実世界 航空機の対地速度</h2>
<p>航空機の速度は2つのベクトルの和である。空気に対する速度を対気速度と呼び地面に対する速度を対地速度と呼ぶ。風速をベクトルで表すと次の関係が成り立つ。</p>
\[ \text{対地速度}=\text{対気速度}+\text{風速} \]
<p>例として機首を真北に向けて対気速度 400 km/h で飛ぶ機体を考える。西から東へ 30 km/h の風が吹くと東を x 軸・北を y 軸として対地速度は \( (0,400)+(30,0)=(30,400) \) である。大きさは \( \sqrt{30^2+400^2}=\sqrt{160900}\approx 401.1 \) km/h で機体は北から東へ流される。</p>
<p>真北へ進むには対気速度のx成分を \( -30 \) にして風を打ち消す。対気速度の大きさが400なので y成分は \( \sqrt{400^2-30^2}\approx 398.9 \) となる。機首は北から西へ約4.3°向き対地速度は約 398.9 km/h になる。これは速度を北向きと東向きの1次独立な2方向に分解して成分ごとに考えた計算である。</p>
<p>学習指導要領解説は物理で扱うベクトルと数学Cのベクトルの関係にも触れている。物理では速度や運動量の合成と分解を中心に学び数学Cでは演算の法則と図形の性質を中心に学ぶ。航空機の例は物理の題材を数学の分解の定理で整理したものである。物体に複数の力がはたらく時の合力も同じ加法で求める。</p>

<aside class="an an-rw"><b>現実世界</b>
<p>操縦士が使う飛行計算盤 E6B は風の三角形をこのベクトルの和として図で解く道具である。横風成分と向かい風成分への分解も同じ計算である。</p>
</aside>

<h2 id="s7">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 正六角形のベクトル</div>
<p class="qz-q">正六角形ABCDEFで \( \overrightarrow{AB}=\vec{a} \) と \( \overrightarrow{AF}=\vec{b} \) とする。\( \overrightarrow{AD} \) を表すものを1つ選べ。</p>
<ol><li>\( \vec{a}+\vec{b} \)</li><li>\( 2\vec{a}+\vec{b} \)</li><li>\( 2\vec{a}+2\vec{b} \)</li><li>\( 3\vec{a}+3\vec{b} \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。中心をOとすると \( \overrightarrow{AO}=\vec{a}+\vec{b} \) で AD は AO の2倍である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 差のベクトル</div>
<p class="qz-q">問1と同じ設定で \( \overrightarrow{CE} \) を表すものを1つ選べ。</p>
<ol><li>\( \vec{a}-\vec{b} \)</li><li>\( \vec{b}-\vec{a} \)</li><li>\( \vec{a}+\vec{b} \)</li><li>\( 2\vec{b}-\vec{a} \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( \overrightarrow{AC}=2\vec{a}+\vec{b} \) と \( \overrightarrow{AE}=\vec{a}+2\vec{b} \) から \( \overrightarrow{CE}=\overrightarrow{AE}-\overrightarrow{AC}=-\vec{a}+\vec{b} \) である。1 は引く順序を逆にした誤りである。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 平行条件</div>
<p class="qz-q">\( \vec{a}=(2,-1) \) と \( \vec{b}=(x,3) \) が平行になる \( x \) の値を求めよ。</p>
<ol><li>\( -6 \)</li><li>\( -\dfrac{3}{2} \)</li><li>\( \dfrac{3}{2} \)</li><li>6</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。\( a_1b_2-a_2b_1=2\times3-(-1)\times x=6+x=0 \) から \( x=-6 \)。このとき \( \vec{b}=(-6,3)=-3\vec{a} \) で向きは反対である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 単位ベクトル</div>
<p class="qz-q">\( \vec{a}=(-5,12) \) と同じ向きの単位ベクトルを1つ選べ。</p>
<ol><li>\( \left(-\dfrac{5}{12},1\right) \)</li><li>\( \left(-\dfrac{5}{13},\dfrac{12}{13}\right) \)</li><li>\( \left(\dfrac{5}{13},-\dfrac{12}{13}\right) \)</li><li>\( \left(-\dfrac{5}{7},\dfrac{12}{7}\right) \)</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\( |\vec{a}|=\sqrt{25+144}=13 \) で割る。3 は反対向きの単位ベクトルである。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 係数比較</div>
<p class="qz-q">\( \vec{a} \) と \( \vec{b} \) は1次独立である。\( (2s-1)\vec{a}+(s+t)\vec{b}=3\vec{a}-\vec{b} \) が成り立つ時 \( t \) の値を求めよ。</p>
<ol><li>\( -3 \)</li><li>\( -1 \)</li><li>1</li><li>2</li></ol>
<details><summary>解答と解説</summary><div>正解は 1 である。係数比較で \( 2s-1=3 \) から \( s=2 \)。\( s+t=-1 \) から \( t=-3 \)。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 分解</div>
<p class="qz-q">\( \vec{a}=(1,2) \) と \( \vec{b}=(3,-1) \) を用いて \( \vec{p}=(7,0) \) を \( s\vec{a}+t\vec{b} \) と表す。\( s+t \) の値を求めよ。</p>
<ol><li>1</li><li>2</li><li>3</li><li>7</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。\( s+3t=7 \) と \( 2s-t=0 \)。2式目から \( t=2s \) で1式目に代入して \( 7s=7 \)。\( s=1 \) ・ \( t=2 \) で \( s+t=3 \)。検算 \( (1,2)+2(3,-1)=(7,0) \)。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 2点を結ぶベクトル</div>
<p class="qz-q">\( A(-1,4) \) と \( B(2,0) \) について \( |\overrightarrow{AB}| \) を求めよ。</p>
<ol><li>3</li><li>4</li><li>5</li><li>7</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 の 5 である。\( \overrightarrow{AB}=(2-(-1),\ 0-4)=(3,-4) \) で大きさは \( \sqrt{9+16}=5 \)。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 定義の確認</div>
<p class="qz-q">次の記述のうち誤っているものを1つ選べ。</p>
<ol><li>\( 0\vec{a} \) は零ベクトルである</li><li>平行四辺形ABCDで \( \overrightarrow{AB}=\overrightarrow{DC} \) である</li><li>\( \vec{a} \) と \( \vec{b} \) が平行でも \( \vec{0} \) でなければ1次独立である</li><li>\( \overrightarrow{AB}+\overrightarrow{BA}=\vec{0} \) である</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。1次独立には \( \vec{0} \) でないことに加えて平行でないことが必要である。平行な2本では平面のベクトルを分解できない。</div></details></div>

<h2 id="s8">この章の要点</h2>
<div class="tb-key"><b>要点</b>
ベクトルは向きと大きさだけで定まり平行移動して重なる矢印は等しい。<br>
\( \overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC} \) ・ \( \overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA} \) で始点をそろえる。<br>
\( \vec{a}\parallel\vec{b}\iff\vec{b}=k\vec{a} \)。平行な単位ベクトルは \( \pm\dfrac{\vec{a}}{|\vec{a}|} \) の2つである。<br>
1次独立な \( \vec{a} \) と \( \vec{b} \) で任意のベクトルは \( s\vec{a}+t\vec{b} \) とただ1通りに表せ係数比較ができる。<br>
成分は終点から始点を引き \( |\vec{a}|=\sqrt{a_1^{\,2}+a_2^{\,2}} \) で求める。<br>
成分の平行条件は \( a_1b_2-a_2b_1=0 \) である。</div>

<h2 id="s9">残っている問い</h2>
<ul>
<li class="tb-vnote">この章はベクトルを「平行移動して重なる有向線分の集まり」として定義した。大学の線形代数では加法と実数倍の法則を満たす集合をベクトル空間と定義し矢印の図を前提にしない。数列や関数もその意味でベクトルになる。第6章以降でこの見方に移る。</li>
<li class="tb-vnote">航空機の例は風が一定で上昇や下降をしない場合の近似である。実際の運航では高度ごとに風が異なる。</li>
<li class="tb-vnote">学習指導要領解説は平面上のベクトルの導入を風の吹き方や物体の移動などの具体的な事象から始めるよう述べている。どの教科書がどの例を使うかは確認していない。</li>
</ul>

<h2 id="s10">出典</h2>
<ol>
<li>高等学校学習指導要領 平成30年告示 解説 数学編 理数編 数学C (1)ベクトル — https://www.mext.go.jp/content/20260115-mxt_kyoiku02-100002620_04.pdf</li>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>Euclidean vector — Wikipedia — https://en.wikipedia.org/wiki/Euclidean_vector</li>
<li>Linear independence — Wikipedia — https://en.wikipedia.org/wiki/Linear_independence</li>
<li>E6B flight computer — Wikipedia — https://en.wikipedia.org/wiki/E6B</li>
<li>Airspeed — Wikipedia — https://en.wikipedia.org/wiki/Airspeed</li>
</ol>
