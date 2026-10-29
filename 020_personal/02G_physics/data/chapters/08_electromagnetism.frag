<!--meta
{"chapter": 8, "part": "物理基礎", "title": "磁場と交流・エネルギーの利用", "thesis": "電流は磁場をつくり変化する磁場は電流をつくる。この2つの現象がモーターと発電機と変圧器を成り立たせる。送電で電圧を上げるのは損失が電流の2乗に比例するからである。発電の方式はどれもエネルギーの変換であり原子力は原子核のエネルギーを使う。", "verify": {"date": "2026-10-29", "checked": 70, "match": 65, "fixed": 5, "unconfirmed": 0}}
-->
<p>第7章では導線の中を電荷が移動する現象とオームの法則と電力を扱った。この章では電流と磁場の関係に進む。電流が磁場をつくる現象と磁場の変化が電流をつくる現象の2つがそろうと電気のエネルギーと運動のエネルギーを相互に変換できる。発電所から家庭までの電力網はこの2つの現象と第7章のジュール熱の式でほとんど説明できる。</p>
<p>物理基礎では磁場を定性的に扱い計算は求めない。共通テストで問われる論点は主に6つである。電流がつくる磁場の向き・電磁誘導が起きる条件・交流の周波数と周期・変圧器の巻数比・送電で高電圧を使う理由・放射線の種類と単位である。後半は発電方式と原子力も扱う。物理の範囲で磁場を数式で扱うのは第15章である。</p>

<h2 id="s1">磁場と電流がつくる磁場</h2>
<p>磁石には N 極と S 極がある。同じ極どうしは反発し異なる極どうしは引き合う。この力を<strong>磁気力</strong>と呼ぶ。磁気力がはたらく空間を<strong>磁場</strong>または磁界と呼ぶ。磁場の向きはその点に置いた方位磁針の N 極が指す向きと定める。磁場の向きを順につないだ線を<strong>磁力線</strong>と呼び磁石の外では N 極から出て S 極へ入る。磁力線が密な所ほど磁場は強い。</p>
<p>1820年にデンマークのハンス・クリスティアン・エルステッドは導線に電流を流すと近くの方位磁針の向きが変わることを示した。<strong class="hit">電流は周囲に磁場をつくる</strong>。電気と磁気が結びついた最初の発見である。</p>
<p>まっすぐな導線を流れる電流は導線を中心とする同心円状の磁場をつくる。磁場の向きは右ねじの法則で定まる。<strong>右ねじが進む向きに電流を流すと右ねじを回転させる向きが磁場の向きである</strong>。右手の親指を電流の向きに向けると残りの4本の指が巻く向きが磁場の向きである。磁場は電流が大きいほど強く導線から離れるほど弱い。</p>
<p>導線を円筒状に巻いたものを<strong>コイル</strong>またはソレノイドと呼ぶ。コイルに電流を流すと内部に強くそろった磁場ができ外側の磁力線は棒磁石と同じ形になる。右手の4本の指を電流の向きに巻くと親指が指す向きがコイル内部の磁場の向きであり N 極の側である。コイルの中に鉄心を入れると磁場が強くなる。これが<strong>電磁石</strong>である。電磁石は電流を切ると磁場が消え電流の大きさで磁場の強さを変えられる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 270" role="img" aria-label="直線電流のまわりの同心円状の磁場とコイルがつくる磁場">
  <defs>
    <marker id="ah08a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah08b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
  </defs>
  <text x="20" y="24" font-size="13" fill="var(--muted)">直線電流 上から見た図</text>
  <text x="390" y="24" font-size="13" fill="var(--muted)">コイル 横から見た断面</text>
  <g fill="none" stroke="var(--cool)" stroke-width="1.6">
    <circle cx="180" cy="140" r="40"/><circle cx="180" cy="140" r="70"/><circle cx="180" cy="140" r="100"/>
  </g>
  <g fill="none" stroke="var(--cool)" stroke-width="2.2">
    <path d="M140 139 L140 145" marker-end="url(#ah08b)"/>
    <path d="M110 137 L110 145" marker-end="url(#ah08b)"/>
    <path d="M80 135 L80 145" marker-end="url(#ah08b)"/>
    <path d="M220 141 L220 135" marker-end="url(#ah08b)"/>
    <path d="M250 143 L250 135" marker-end="url(#ah08b)"/>
    <path d="M280 145 L280 135" marker-end="url(#ah08b)"/>
  </g>
  <circle cx="180" cy="140" r="12" fill="var(--paper, #fff)" stroke="var(--warm)" stroke-width="2"/>
  <circle cx="180" cy="140" r="4" fill="var(--warm)"/>
  <text x="180" y="262" font-size="12.5" text-anchor="middle" fill="var(--sub)">電流は紙面の裏から表へ ・ 磁場は反時計回り</text>
  <line x1="372" y1="36" x2="372" y2="250" stroke="var(--line)" stroke-dasharray="4 4"/>
  <rect x="450" y="100" width="180" height="80" fill="var(--warm)" fill-opacity="0.08" stroke="var(--line)"/>
  <g font-size="14" font-weight="700" text-anchor="middle">
    <g fill="var(--warm)"><text x="470" y="96">●</text><text x="505" y="96">●</text><text x="540" y="96">●</text><text x="575" y="96">●</text><text x="610" y="96">●</text></g>
    <g fill="var(--warm)"><text x="470" y="198">×</text><text x="505" y="198">×</text><text x="540" y="198">×</text><text x="575" y="198">×</text><text x="610" y="198">×</text></g>
  </g>
  <g fill="none" stroke="var(--cool)" stroke-width="1.8">
    <line x1="440" y1="125" x2="650" y2="125" marker-end="url(#ah08b)"/>
    <line x1="440" y1="155" x2="650" y2="155" marker-end="url(#ah08b)"/>
    <path d="M655 140 C 700 60, 400 40, 430 130" stroke-dasharray="5 4"/>
    <path d="M655 140 C 700 225, 400 245, 430 150" stroke-dasharray="5 4"/>
  </g>
  <text x="672" y="145" font-size="15" font-weight="700" fill="var(--ink)">N</text>
  <text x="408" y="145" font-size="15" font-weight="700" fill="var(--ink)">S</text>
  <text x="540" y="262" font-size="12.5" text-anchor="middle" fill="var(--sub)">● は表へ × は裏へ流れる電流</text>
</svg>
<figcaption>左は紙面に垂直な導線を電流が裏から表へ流れる場合で磁場は導線を中心とする反時計回りの同心円になる。右はコイルの断面で上の導線は表へ下の導線は裏へ電流が流れる。内部の磁場は右向きにそろい右端が N 極になる。</figcaption>
</figure>

<h3>磁場が電流に及ぼす力とモーター</h3>
<p>磁場の中に導線を置いて電流を流すと導線は力を受ける。電流は磁場をつくって磁石に力を及ぼす。その反作用として電流も磁石の磁場から力を受ける。力の向きは電流の向きと磁場の向きの両方に垂直である。左手の中指を電流・人差し指を磁場・親指を力の向きに対応させる<strong>フレミングの左手の法則</strong>で向きを定める。電流が大きいほど磁場が強いほど力は大きい。電流と磁場が平行なとき力は0である。</p>
<p>この力を連続した回転に変える装置が<strong>モーター</strong>である。磁石の間に置いたコイルに電流を流すとコイルの左右の辺が逆向きの力を受けてコイルが回転する。半回転ごとに整流子とブラシで電流の向きを切り替えると同じ向きに回転し続ける。<strong class="hit">モーターは電気エネルギーを運動エネルギーに変換する装置である</strong>。</p>

<aside class="an an-rw"><b>現実世界</b>
<p class="an-h">世界の電力の4割強はモーターで消費される</p>
<p>国際エネルギー機関の2011年の報告はモーター駆動の機器が世界の電力消費の43〜46%を占めると推計した。</p>
</aside>

<h2 id="s2">電磁誘導と発電機</h2>
<p>1831年にイギリスのマイケル・ファラデーは電流が磁場をつくるなら磁場から電流を取り出せると考え実験を重ねた。コイルに棒磁石を出し入れするとコイルにつないだ検流計の針が振れる。磁石を静止させると針は0に戻る。<strong class="hit">コイルを貫く磁場が変化している間だけコイルに電圧が生じ電流が流れる</strong>。この現象を<strong>電磁誘導</strong>と呼び生じる電圧を誘導起電力・流れる電流を誘導電流と呼ぶ。</p>
<p>電磁誘導の性質は次の3点にまとまる。</p>
<div class="tb-tw"><table>
<thead><tr><th>操作</th><th>誘導電流</th><th>理由</th></tr></thead>
<tbody>
<tr><td>磁石をコイルの中で静止させる</td><td>流れない</td><td>磁場が変化しない</td></tr>
<tr><td>N 極を近づける ／ N 極を遠ざける</td><td>向きが逆になる</td><td>磁場の増加と減少が逆である</td></tr>
<tr><td>磁石を速く動かす ／ 巻数を増やす</td><td>大きくなる</td><td>磁場の変化が速い ／ 各巻きの電圧が足し合わされる</td></tr>
</tbody></table></div>
<p>誘導電流の向きは磁場の変化を妨げる向きである。N 極を近づけるとコイルは近づく側に N 極をつくる向きに電流を流し磁石を押し返す。これを<strong>レンツの法則</strong>と呼ぶ。押し返す力に逆らって磁石を動かす仕事が電気エネルギーに変わる。仕事をせずに電流だけが得られることはなくエネルギー保存の法則と整合する。</p>

<h3>発電機</h3>
<p>磁石の間でコイルを回転させるとコイルを貫く磁場が周期的に増減し誘導電流の向きも周期的に反転する。これが<strong>発電機</strong>である。<strong>発電機はモーターと同じ構造で変換の向きが逆である</strong>。モーターは電気から回転を生み発電機は回転から電気を生む。火力発電所も水力発電所も原子力発電所も最後は発電機のコイルを回転させて電気を得る。違いはタービンを回転させるエネルギー源だけである。</p>

<aside class="an an-biz"><b>投資で言えば</b>
<p class="an-h">電磁誘導は業績の水準ではなく予想との差に反応する株価である</p>
<p>強い磁石でも静止していれば電流は0である。電流を生むのは磁場の変化だけで変化が速いほど大きい。</p>
</aside>

<div class="ex"><div class="ex-h">例題 1</div>
<p>コイルの上から棒磁石の N 極を下向きに近づけると検流計の針が右に振れた。次の操作で針はどう振れるか。（ア）N 極を上へ遠ざける（イ）S 極を下向きに近づける（ウ）N 極をコイルの中で止める</p>
<details open><summary>解き方</summary><div>手順1 基準は N 極が近づく操作でコイル内の下向きの磁場が増加する変化である。<br>
手順2 （ア）は下向きの磁場が減少する。変化が逆なので左に振れる。<br>
手順3 （イ）はコイル内の上向きの磁場が増加する。下向きの増加と逆なので左に振れる。<br>
手順4 （ウ）は磁場が変化しないので振れない。<br>
答え（ア）左（イ）左（ウ）振れない</div></details></div>

<h2 id="s3">直流と交流</h2>
<p>電池から得られる電流のように向きと大きさが一定の電流を<strong>直流</strong>と呼ぶ。発電機から得られる電流のように向きと大きさが周期的に変わる電流を<strong>交流</strong>と呼ぶ。家庭のコンセントの電圧は交流である。</p>
<p>交流の電圧が1回の変化を終えて元に戻るまでの時間を<strong>周期</strong> \(T\) と呼ぶ。1秒間に繰り返す変化の回数を<strong>周波数</strong> \(f\) と呼び単位はヘルツで記号は Hz である。周期と周波数は逆数の関係にある。</p>
\[ f = \frac{1}{T} \]
<p>発電機のコイルを1秒間に50回転させると 50 Hz の交流が得られる。周期は \(1/50 = 0.020\ \mathrm{s}\) である。</p>

<h3>東日本の 50 Hz と西日本の 60 Hz</h3>
<p>日本の商用電源の周波数は東日本が 50 Hz で西日本が 60 Hz である。境界はおおむね静岡県の富士川と新潟県の糸魚川を結ぶ線である。1895年に東京電燈はドイツの AEG から 50 Hz の発電機を購入した。大阪電燈はその1〜2年後にアメリカの GE から 60 Hz の発電機を購入した。両社の地域でそれぞれの周波数の設備が広がりその後も統一されなかった。異なる周波数の電力網の間で電力を送るには周波数変換所で交流を一度直流に変えてから別の周波数の交流に戻す。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 260" role="img" aria-label="50ヘルツと60ヘルツの交流電圧の時間変化">
  <g stroke="var(--line)" stroke-width="1">
    <line x1="220" y1="40" x2="220" y2="220"/><line x1="370" y1="40" x2="370" y2="220"/><line x1="520" y1="40" x2="520" y2="220"/><line x1="670" y1="40" x2="670" y2="220"/>
    <line x1="70" y1="50" x2="670" y2="50"/><line x1="70" y1="210" x2="670" y2="210"/>
  </g>
  <line x1="70" y1="130" x2="690" y2="130" stroke="var(--ink)" stroke-width="1.3"/>
  <line x1="70" y1="225" x2="70" y2="35" stroke="var(--ink)" stroke-width="1.3"/>
  <polyline fill="none" stroke="var(--cool)" stroke-width="2.4" points="70.0,130.0 77.5,117.5 85.0,105.3 92.5,93.7 100.0,83.0 107.5,73.4 115.0,65.3 122.5,58.7 130.0,53.9 137.5,51.0 145.0,50.0 152.5,51.0 160.0,53.9 167.5,58.7 175.0,65.3 182.5,73.4 190.0,83.0 197.5,93.7 205.0,105.3 212.5,117.5 220.0,130.0 227.5,142.5 235.0,154.7 242.5,166.3 250.0,177.0 257.5,186.6 265.0,194.7 272.5,201.3 280.0,206.1 287.5,209.0 295.0,210.0 302.5,209.0 310.0,206.1 317.5,201.3 325.0,194.7 332.5,186.6 340.0,177.0 347.5,166.3 355.0,154.7 362.5,142.5 370.0,130.0 377.5,117.5 385.0,105.3 392.5,93.7 400.0,83.0 407.5,73.4 415.0,65.3 422.5,58.7 430.0,53.9 437.5,51.0 445.0,50.0 452.5,51.0 460.0,53.9 467.5,58.7 475.0,65.3 482.5,73.4 490.0,83.0 497.5,93.7 505.0,105.3 512.5,117.5 520.0,130.0 527.5,142.5 535.0,154.7 542.5,166.3 550.0,177.0 557.5,186.6 565.0,194.7 572.5,201.3 580.0,206.1 587.5,209.0 595.0,210.0 602.5,209.0 610.0,206.1 617.5,201.3 625.0,194.7 632.5,186.6 640.0,177.0 647.5,166.3 655.0,154.7 662.5,142.5 670.0,130.0"/>
  <polyline fill="none" stroke="var(--warm)" stroke-width="2" stroke-dasharray="6 4" points="70.0,130.0 77.5,115.0 85.0,100.6 92.5,87.1 100.0,75.2 107.5,65.3 115.0,57.6 122.5,52.5 130.0,50.2 137.5,50.6 145.0,53.9 152.5,59.9 160.0,68.4 167.5,79.0 175.0,91.5 182.5,105.3 190.0,120.0 197.5,135.0 205.0,149.9 212.5,164.1 220.0,177.0 227.5,188.3 235.0,197.5 242.5,204.4 250.0,208.6 257.5,210.0 265.0,208.6 272.5,204.4 280.0,197.5 287.5,188.3 295.0,177.0 302.5,164.1 310.0,149.9 317.5,135.0 325.0,120.0 332.5,105.3 340.0,91.5 347.5,79.0 355.0,68.4 362.5,59.9 370.0,53.9 377.5,50.6 385.0,50.2 392.5,52.5 400.0,57.6 407.5,65.3 415.0,75.2 422.5,87.1 430.0,100.6 437.5,115.0 445.0,130.0 452.5,145.0 460.0,159.4 467.5,172.9 475.0,184.8 482.5,194.7 490.0,202.4 497.5,207.5 505.0,209.8 512.5,209.4 520.0,206.1 527.5,200.1 535.0,191.6 542.5,181.0 550.0,168.5 557.5,154.7 565.0,140.0 572.5,125.0 580.0,110.1 587.5,95.9 595.0,83.0 602.5,71.7 610.0,62.5 617.5,55.6 625.0,51.4 632.5,50.0 640.0,51.4 647.5,55.6 655.0,62.5 662.5,71.7 670.0,83.0"/>
  <g font-size="12" fill="var(--sub)" text-anchor="end">
    <text x="64" y="54">141</text><text x="64" y="134">0</text><text x="64" y="214">−141</text>
  </g>
  <text x="70" y="28" font-size="12.5" text-anchor="middle" fill="var(--ink)">電圧 単位 V</text>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="70" y="244">0</text><text x="220" y="244">10</text><text x="370" y="244">20</text><text x="520" y="244">30</text><text x="670" y="244">40 ms</text>
  </g>
    <rect x="440" y="18" width="16" height="4" fill="var(--cool)"/><text x="462" y="24" font-size="12.5" fill="var(--cool)">50 Hz 周期 20 ms</text>
  <rect x="604" y="18" width="16" height="4" fill="var(--warm)"/><text x="626" y="24" font-size="12.5" fill="var(--warm)">60 Hz</text>
</svg>
<figcaption>実線は 50 Hz で 40 ms の間に2回の変化を繰り返す。破線は 60 Hz で同じ時間に2.4回繰り返し周期は約 16.7 ms である。電圧の最大値は約 141 V で実効値 100 V の√2倍である。</figcaption>
</figure>

<h3>交流の実効値</h3>
<p>家庭の電圧を 100 V と呼ぶのは<strong>実効値</strong>である。実効値は同じ抵抗で同じ電力を消費する直流の電圧に等しい値である。交流の電圧は時間とともに変わり最大値は実効値の \(\sqrt{2}\) 倍で約 141 V である。電力の計算に実効値を使えば第7章の \(P = IV\) をそのまま使える。最大値と実効値の関係を導くのは物理の第15章である。</p>

<aside class="an an-biz"><b>経済で言えば</b>
<p class="an-h">50 Hz と 60 Hz の併存は経路依存である</p>
<p>最初に購入した発電機の規格に周辺の設備がそろい統一の費用が便益を上回った。キーボードの QWERTY 配列や鉄道の軌間と同じ構造である。</p>
</aside>

<div class="ex"><div class="ex-h">例題 2</div>
<p>60 Hz の交流の周期を求めよ。また 60 Hz の交流で電圧が0になる回数は1秒間に何回か。</p>
<details open><summary>解き方</summary><div>手順1 \(T = \dfrac{1}{60} \approx 0.017\ \mathrm{s}\)<br>
手順2 1周期の間に電圧は正から負へ1回と負から正へ1回の合計2回0を通る。<br>
手順3 \(60\times2 = 120\) 回<br>
答え 周期は約 0.017 s で0になる回数は120回</div></details></div>

<h2 id="s4">変圧器と送電</h2>
<p>交流の電圧を変える装置を<strong>変圧器</strong>またはトランスと呼ぶ。1つの鉄心に2つのコイルを巻いた構造である。電源につなぐ側を一次コイル・負荷につなぐ側を二次コイルと呼ぶ。一次コイルに交流を流すと鉄心の中の磁場が周期的に変化する。変化する磁場が二次コイルを貫き電磁誘導によって二次コイルに交流の電圧が生じる。</p>
<p>鉄心の中の磁場は両方のコイルに共通であり各巻きに生じる電圧は等しい。したがってコイルの電圧は巻数に比例する。一次コイルの巻数を \(N_1\)・電圧を \(V_1\) とし二次コイルを \(N_2\)・\(V_2\) とすると次の関係が成り立つ。</p>
\[ \frac{V_1}{V_2} = \frac{N_1}{N_2} \]
<p>変圧器でエネルギーが失われないとすると一次側の電力と二次側の電力は等しい。</p>
\[ V_1I_1 = V_2I_2 \]
<p><strong class="hit">電圧を10倍に上げると電流は10分の1になる</strong>。変圧器は電力を増やす装置ではない。直流では磁場が変化しないので変圧器は電圧を変えられない。交流が送電の標準になった理由の1つがこの点である。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 230" role="img" aria-label="鉄心に一次コイルと二次コイルを巻いた変圧器">
  <rect x="200" y="40" width="320" height="150" fill="none" stroke="var(--muted)" stroke-width="22"/>
  <g fill="none" stroke="var(--warm)" stroke-width="2.4">
    <path d="M150 70 H180 M150 160 H180"/>
    <path d="M180 70 L220 78 M180 92 L220 100 M180 114 L220 122 M180 136 L220 144 M180 158 L220 166"/>
  </g>
  <g fill="none" stroke="var(--cool)" stroke-width="2.4">
    <path d="M540 60 H570 M540 172 H570"/>
    <path d="M500 60 L540 66 M500 74 L540 80 M500 88 L540 94 M500 102 L540 108 M500 116 L540 122 M500 130 L540 136 M500 144 L540 150 M500 158 L540 164"/>
  </g>
  <g font-size="13" text-anchor="middle">
    <text x="110" y="110" fill="var(--warm)">一次 巻数 N₁</text><text x="110" y="130" fill="var(--warm)">電圧 V₁</text>
    <text x="620" y="110" fill="var(--cool)">二次 巻数 N₂</text><text x="620" y="130" fill="var(--cool)">電圧 V₂</text>
    <text x="360" y="120" fill="var(--sub)">鉄心の磁場が変化する</text>
    <text x="360" y="218" fill="var(--ink)">V₁ ： V₂ ＝ N₁ ： N₂</text>
  </g>
</svg>
<figcaption>左の一次コイルの交流が鉄心に変化する磁場をつくる。磁場は鉄心を通って右の二次コイルを貫き電磁誘導で電圧を生じる。図は二次コイルの巻数が多い昇圧の例である。</figcaption>
</figure>

<h3>送電で電圧を上げる理由</h3>
<p>発電所から家庭までの送電線には抵抗がある。送電線の抵抗を \(r\)・送電線を流れる電流を \(I\) とすると送電線で熱として失われる電力は第7章のジュール熱の式から \(rI^2\) である。送る電力 \(P\) を一定にして送電の電圧 \(V\) を上げると \(I = P/V\) が小さくなる。</p>
\[ P_{\text{損失}} = rI^2 = r\left(\frac{P}{V}\right)^2 \]
<p><strong class="hit">損失は電圧の2乗に反比例する</strong>。電圧を10倍にすると損失は100分の1になる。日本の発電所では発電機の電圧を変圧器で数十万 V に上げ基幹の送電線では最高 500 kV で送電する。変電所で段階的に電圧を下げ電柱の変圧器で 6600 V を家庭用の 100 V と 200 V に下げる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 200" role="img" aria-label="発電所から家庭までの送電と電圧">
  <defs><marker id="ah08c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>
  <g fill="none" stroke="var(--ink)" stroke-width="1.5">
    <rect x="20" y="70" width="110" height="60" rx="6"/><rect x="170" y="70" width="110" height="60" rx="6"/>
    <rect x="320" y="70" width="110" height="60" rx="6"/><rect x="470" y="70" width="110" height="60" rx="6"/><rect x="610" y="70" width="90" height="60" rx="6"/>
  </g>
  <g stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah08c)">
    <line x1="130" y1="100" x2="166" y2="100"/><line x1="280" y1="100" x2="316" y2="100"/><line x1="430" y1="100" x2="466" y2="100"/><line x1="580" y1="100" x2="606" y2="100"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="var(--ink)">
    <text x="75" y="96">発電所</text><text x="75" y="116">発電機</text>
    <text x="225" y="96">昇圧</text><text x="225" y="116">変圧器</text>
    <text x="375" y="96">送電線</text><text x="375" y="116">変電所で降圧</text>
    <text x="525" y="96">配電線</text><text x="525" y="116">電柱の変圧器</text>
    <text x="655" y="106">家庭</text>
  </g>
  <g font-size="12.5" text-anchor="middle">
    <text x="75" y="160" fill="var(--sub)">約 1万〜2万 V</text>
    <text x="300" y="160" fill="var(--warm)">最高 500 kV</text>
    <text x="525" y="160" fill="var(--sub)">6600 V</text>
    <text x="655" y="160" fill="var(--sub)">100 V ／ 200 V</text>
  </g>
  <text x="300" y="186" font-size="12.5" text-anchor="middle" fill="var(--warm)">電流を小さくして損失 rI² を下げる区間</text>
  <text x="360" y="40" font-size="13" text-anchor="middle" fill="var(--muted)">電圧を上げて送り使う場所の近くで下げる</text>
</svg>
<figcaption>発電機の電圧を変圧器で上げて長距離を送り変電所と電柱の変圧器で段階的に下げる。長距離の区間ほど高電圧にして電流を小さくする。発電機の電圧は設備によって異なり図の値は代表例である。</figcaption>
</figure>

<aside class="an an-biz"><b>会計で言えば</b>
<p class="an-h">変圧器は両替で電力という額面を変えずに電圧と電流の組を替える</p>
<p>手数料にあたる送電損失は電流の2乗で課金される。だから高電圧と小電流の組に両替して送る。</p>
</aside>

<div class="ex"><div class="ex-h">例題 3</div>
<p>抵抗 10 Ω の送電線で 1000 kW の電力を送る。送電電圧が 10 kV のときと 100 kV のときの送電線の損失を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 10 kV では \(I = \dfrac{1.0\times10^{6}}{1.0\times10^{4}} = 100\ \mathrm{A}\) ・ 損失 \(10\times100^2 = 1.0\times10^{5}\ \mathrm{W}\)<br>
手順2 100 kV では \(I = 10\ \mathrm{A}\) ・ 損失 \(10\times10^2 = 1.0\times10^{3}\ \mathrm{W}\)<br>
答え 10 kV で 100 kW の損失は送る電力の10%である。100 kV では 1 kW で0.1%である。電圧10倍で損失は100分の1である。</div></details></div>
<p>典型的な誤りは損失を \(V^2/r\) で計算することである。送電電圧 \(V\) は送電線の両端の電圧ではない。送電線の両端にかかる電圧は送電線の電圧降下 \(rI\) であり損失は \(rI^2\) で求める。</p>

<div class="ex"><div class="ex-h">例題 4</div>
<p>一次コイル 200 回・二次コイル 40 回の変圧器の一次側に 100 V の交流を加えた。二次側の電圧を求めよ。二次側に 20 W の電球をつないだとき一次側の電流を求めよ。変圧器での損失はないとする。</p>
<details open><summary>解き方</summary><div>手順1 \(V_2 = 100\times\dfrac{40}{200} = 20\ \mathrm{V}\)<br>
手順2 一次側の電力も 20 W なので \(I_1 = \dfrac{20}{100} = 0.20\ \mathrm{A}\)<br>
答え 二次側 20 V ・ 一次側 0.20 A</div></details></div>

<h2 id="s5">電磁波</h2>
<p>変化する電場は磁場をつくり変化する磁場は電場をつくる。この連鎖が空間を伝わる波を<strong>電磁波</strong>と呼ぶ。1864年にイギリスのジェームズ・クラーク・マクスウェルが理論で予言し1888年にドイツのハインリヒ・ヘルツが実験で確かめた。電磁波は媒質がなくても真空中を伝わり速さは光の速さ \(c = 3.0\times10^{8}\ \mathrm{m/s}\) である。光も電磁波の一種である。</p>
<p>第6章の波の式 \(v = f\lambda\) は電磁波にも成り立つ。</p>
\[ c = f\lambda \]
<p>真空中の速さは共通なので<strong class="hit">周波数が大きい電磁波ほど波長が短い</strong>。電磁波は波長によって名称と性質が異なる。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 210" role="img" aria-label="電磁波の種類を波長の対数目盛りで並べた図">
  <line x1="40" y1="110" x2="690" y2="110" stroke="var(--ink)" stroke-width="1.3"/>
  <g font-size="12" fill="var(--sub)" text-anchor="middle">
    <text x="40" y="132">1 km</text><text x="155" y="132">1 m</text><text x="270" y="132">1 mm</text><text x="385" y="132">1 µm</text><text x="500" y="132">1 nm</text><text x="615" y="132">1 pm</text>
  </g>
  <g stroke="var(--ink)"><line x1="40" y1="104" x2="40" y2="116"/><line x1="155" y1="104" x2="155" y2="116"/><line x1="270" y1="104" x2="270" y2="116"/><line x1="385" y1="104" x2="385" y2="116"/><line x1="500" y1="104" x2="500" y2="116"/><line x1="615" y1="104" x2="615" y2="116"/></g>
  <rect x="40" y="60" width="268" height="36" fill="var(--cool)" fill-opacity="0.35"/>
  <rect x="308" y="60" width="81" height="36" fill="var(--warm)" fill-opacity="0.35"/>
  <rect x="389" y="60" width="12" height="36" fill="var(--accent)"/>
  <rect x="401" y="60" width="61" height="36" fill="var(--cool)" fill-opacity="0.55"/>
  <rect x="462" y="60" width="153" height="36" fill="var(--warm)" fill-opacity="0.55"/>
  <rect x="577" y="60" width="113" height="36" fill="var(--ink)" fill-opacity="0.45"/>
  <g font-size="13" text-anchor="middle" fill="var(--ink)">
    <text x="174" y="83">電波</text><text x="348" y="83">赤外線</text><text x="431" y="83">紫外線</text><text x="519" y="83">X線</text><text x="652" y="83">γ線</text>
  </g>
  <line x1="395" y1="58" x2="395" y2="34" stroke="var(--accent)"/>
  <text x="395" y="28" font-size="12.5" text-anchor="middle" fill="var(--accent)">可視光 約 380〜770 nm</text>
  <text x="40" y="170" font-size="12.5" fill="var(--sub)">波長が長い ・ 周波数が小さい</text>
  <text x="690" y="170" font-size="12.5" text-anchor="end" fill="var(--sub)">波長が短い ・ 周波数が大きい</text>
  <text x="365" y="196" font-size="12" text-anchor="middle" fill="var(--muted)">X線とγ線の境界は波長ではなく発生の仕組みで区別し波長の範囲は重なる</text>
</svg>
<figcaption>横軸は波長の対数目盛りで目盛り1つが1000倍である。可視光は電磁波全体の中で幅の小さい区間にすぎない。区分の境界は下の表の値で描いた。X線とγ線の帯が重なる区間は両方の名称が使われる範囲である。境界の値は資料によって異なる。</figcaption>
</figure>
<div class="tb-tw"><table>
<thead><tr><th>種類</th><th>波長の目安</th><th>主な利用</th></tr></thead>
<tbody>
<tr><td>電波</td><td>0.1 mm 以上</td><td>ラジオ ／ テレビ ／ 携帯電話 ／ 電子レンジ</td></tr>
<tr><td>赤外線</td><td>約 770 nm 〜 0.1 mm</td><td>暖房 ／ リモコン ／ 赤外線カメラ</td></tr>
<tr><td>可視光</td><td>約 380 〜 770 nm</td><td>照明 ／ 光ファイバー通信</td></tr>
<tr><td>紫外線</td><td>約 10 〜 380 nm</td><td>殺菌 ／ 日焼けの原因</td></tr>
<tr><td>X線</td><td>約 1 pm 〜 10 nm</td><td>レントゲン撮影 ／ 空港の手荷物検査</td></tr>
<tr><td>γ線</td><td>約 10 pm 以下</td><td>がんの放射線治療 ／ 医療器具の滅菌</td></tr>
</tbody></table></div>

<p>電子レンジは周波数 2.45 GHz の電波で食品中の水分子を振動させて加熱する。波長は \(c/f\) から約 12 cm である。携帯電話や無線LANも同じ電波の仲間であり周波数帯の割り当てで区別する。</p>

<div class="ex"><div class="ex-h">例題 5</div>
<p>周波数 80 MHz の FM 放送の電波の波長を求めよ。</p>
<details open><summary>解き方</summary><div>手順1 \(\lambda = \dfrac{c}{f} = \dfrac{3.0\times10^{8}}{8.0\times10^{7}}\)<br>
答え \(3.75\) より約 3.8 m</div></details></div>

<h2 id="s6">エネルギー資源と発電方式</h2>
<p>人間が利用するエネルギーの元になる石炭・石油・天然ガス・ウラン・水の流れ・太陽光・風などを<strong>エネルギー資源</strong>と呼ぶ。石炭・石油・天然ガスは大昔の生物の遺骸からできた<strong>化石燃料</strong>である。化石燃料とウランは使えば減る資源である。太陽光・風力・水力・地熱は自然の中で繰り返し補われ<strong>再生可能エネルギー</strong>と呼ぶ。</p>
<p>発電はどの方式もエネルギーの変換である。変換の経路を並べると方式の違いが明確になる。</p>
<div class="tb-tw"><table>
<thead><tr><th>方式</th><th>エネルギーの変換</th><th>特徴</th></tr></thead>
<tbody>
<tr><td>火力</td><td>化学エネルギー → 熱 → 蒸気やガスの運動 → 電気</td><td>出力を調整しやすい ／ 二酸化炭素を排出する</td></tr>
<tr><td>原子力</td><td>原子核のエネルギー → 熱 → 蒸気の運動 → 電気</td><td>運転中に二酸化炭素を排出しない ／ 放射性廃棄物が生じる</td></tr>
<tr><td>水力</td><td>重力による位置エネルギー → 水の運動 → 電気</td><td>変換効率が高い ／ 立地が限られる</td></tr>
<tr><td>風力</td><td>空気の運動エネルギー → 電気</td><td>出力が風の状況で変動する</td></tr>
<tr><td>太陽光</td><td>光のエネルギー → 電気</td><td>発電機を使わず半導体で直接変換する ／ 夜間は発電しない</td></tr>
<tr><td>地熱</td><td>地下の熱 → 蒸気の運動 → 電気</td><td>天候に左右されない ／ 適地が限られる</td></tr>
</tbody></table></div>
<p>熱を経由する発電では第5章の熱力学第二法則により熱のすべてを仕事に変えることはできない。火力発電の熱効率は方式によって約40%から60%前後である。残りの熱は海水や大気に捨てられる。<strong class="hit">熱を経由しない水力発電は位置エネルギーの約80%を電気にできる</strong>。太陽光発電は発電機を使わない唯一の主要な方式である。</p>

<div class="ex"><div class="ex-h">例題 6</div>
<p>高さ 100 m から毎秒 10 m<sup>3</sup> の水を落下させて発電する。水の位置エネルギーの80%が電気になるとき発電の出力は何 kW か。水 1 m<sup>3</sup> の質量を 1000 kg・重力加速度を 9.8 m/s<sup>2</sup> とする。</p>
<details open><summary>解き方</summary><div>手順1 1秒あたりの水の質量 \(1.0\times10^{4}\ \mathrm{kg}\)<br>
手順2 1秒あたりの位置エネルギー \(mgh = 1.0\times10^{4}\times9.8\times100 = 9.8\times10^{6}\ \mathrm{J}\)<br>
手順3 出力 \(9.8\times10^{6}\times0.80 \approx 7.8\times10^{6}\ \mathrm{W}\)<br>
答え 約 7800 kW</div></details></div>

<h2 id="s7">原子力と放射線</h2>
<p>原子核は正の電荷をもつ<strong>陽子</strong>と電荷をもたない<strong>中性子</strong>からなる。陽子の数を原子番号・陽子と中性子の数の和を<strong>質量数</strong>と呼ぶ。原子番号が同じで質量数が異なる原子を互いに<strong>同位体</strong>と呼ぶ。ウランには質量数235と238の同位体がある。</p>
<p>原子核の中には不安定なものがあり自然に放射線を出して別の原子核に変わる。この変化を<strong>放射性崩壊</strong>と呼ぶ。放射線を出す性質を<strong>放射能</strong>と呼び放射能をもつ物質を<strong>放射性物質</strong>と呼ぶ。</p>

<h3>放射線の種類</h3>
<div class="tb-tw"><table>
<thead><tr><th>種類</th><th>実体</th><th>電離作用</th><th>透過力 ／ 止める物質</th></tr></thead>
<tbody>
<tr><td>α線</td><td>ヘリウムの原子核</td><td>大きい</td><td>小さい ／ 紙1枚</td></tr>
<tr><td>β線</td><td>電子</td><td>中程度</td><td>中程度 ／ 厚さ数 mm のアルミニウム板</td></tr>
<tr><td>γ線</td><td>波長の短い電磁波</td><td>小さい</td><td>大きい ／ 鉛や厚いコンクリート</td></tr>
<tr><td>X線</td><td>電磁波</td><td>小さい</td><td>大きい ／ 鉛</td></tr>
<tr><td>中性子線</td><td>中性子</td><td>間接に生じる</td><td>大きい ／ 水やコンクリート</td></tr>
</tbody></table></div>
<p>放射線は物質中の原子から電子をはじき出してイオンをつくる。この作用を<strong>電離作用</strong>と呼ぶ。電離作用が強い放射線ほど短い距離でエネルギーを失うので透過力は小さい。<strong class="hit">電離作用と透過力は逆の順に並ぶ</strong>。</p>

<figure class="tb-fig">
<svg viewBox="0 0 720 220" role="img" aria-label="α線は紙でβ線はアルミニウム板でγ線は鉛で止まる">
  <defs>
    <marker id="ah08d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warm)"/></marker>
    <marker id="ah08e" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--cool)"/></marker>
    <marker id="ah08f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker>
  </defs>
  <rect x="250" y="30" width="4" height="160" fill="var(--sub)"/>
  <rect x="400" y="30" width="14" height="160" fill="var(--muted)"/>
  <rect x="560" y="30" width="40" height="160" fill="var(--ink)" fill-opacity="0.7"/>
  <g font-size="12.5" text-anchor="middle" fill="var(--sub)">
    <text x="252" y="208">紙</text><text x="407" y="208">アルミニウム板</text><text x="580" y="208">鉛</text>
  </g>
  <line x1="80" y1="60" x2="246" y2="60" stroke="var(--warm)" stroke-width="2.5" marker-end="url(#ah08d)"/>
  <line x1="80" y1="110" x2="396" y2="110" stroke="var(--cool)" stroke-width="2.5" marker-end="url(#ah08e)"/>
  <line x1="80" y1="160" x2="556" y2="160" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#ah08f)"/>
  <g font-size="14" font-weight="700">
    <text x="40" y="65" fill="var(--warm)">α線</text><text x="40" y="115" fill="var(--cool)">β線</text><text x="40" y="165" fill="var(--ink)">γ線</text>
  </g>
  </svg>
<figcaption>α線は紙1枚で止まりβ線は数 mm のアルミニウム板で止まる。γ線は鉛の板でも一部が透過し厚さに応じて減衰する。透過力の順はα線＜β線＜γ線で電離作用の順はその逆である。</figcaption>
</figure>

<h3>放射線の単位と半減期</h3>
<div class="tb-tw"><table>
<thead><tr><th>単位</th><th>表す量</th><th>定義</th></tr></thead>
<tbody>
<tr><td>ベクレル Bq</td><td>放射能の強さ</td><td>1秒間に崩壊する原子核の数</td></tr>
<tr><td>グレイ Gy</td><td>吸収線量</td><td>物質 1 kg あたりが受け取る放射線のエネルギー J</td></tr>
<tr><td>シーベルト Sv</td><td>等価線量 ／ 実効線量</td><td>放射線の種類と臓器ごとの影響の違いでグレイの値を重み付けした量</td></tr>
</tbody></table></div>
<p>放射性の原子核の数が崩壊によって元の半分になるまでの時間を<strong>半減期</strong>と呼ぶ。半減期は原子核の種類で定まり温度や圧力では変わらない。ヨウ素131の半減期は約8日でセシウム137は約30年である。時間 \(t\) の後に残る原子核の数 \(N\) は初めの数を \(N_0\)・半減期を \(T\) として次の式で表す。</p>
\[ N = N_0\left(\frac{1}{2}\right)^{t/T} \]
<p>人は自然界からも放射線を受けている。宇宙から届く放射線・大地の放射性物質・食物に含まれるカリウム40・空気中のラドンなどである。日本の平均は1年あたり約 2.1 mSv と推計される。放射線は医療の画像診断やがん治療・農作物の品種改良・非破壊検査にも利用される。</p>

<h3>核分裂と原子力発電</h3>
<p>ウラン235の原子核に中性子が当たると原子核は2つの原子核に分裂し同時に2〜3個の中性子とエネルギーを放出する。これを<strong>核分裂</strong>と呼ぶ。放出された中性子が別のウラン235に当たると次の核分裂が起きる。核分裂が次々に続く現象を<strong>連鎖反応</strong>と呼ぶ。原子炉は制御棒で中性子の数を調整し連鎖反応の速さを一定に保つ。</p>
<p>核分裂の後の原子核と中性子の質量の合計は分裂前より小さい。失われた質量 \(\Delta m\) はアインシュタインの関係式に従ってエネルギーに変わる。</p>
\[ E = \Delta m\,c^2 \]
<p>\(c^2 = 9.0\times10^{16}\ \mathrm{m^2/s^2}\) と大きいので質量のわずかな減少が大きなエネルギーになる。ウラン235の 1 g が全部核分裂すると石炭約3トンを燃やしたときと同程度の熱が出る。原子力発電はこの熱で水を沸騰させて蒸気でタービンを回転させる。熱から先の仕組みは火力発電と同じである。</p>

<aside class="an an-bb"><b>野球で言えば</b>
<p class="an-h">半減期は打率ではなく選手の在籍年数の中央値である</p>
<p>どの1人が次に抜けるかは予測できないが半数が抜けるまでの期間は一定である。個々の原子核の崩壊も予測できず集団の半減期だけが定まる。</p>
</aside>

<div class="ex"><div class="ex-h">例題 7</div>
<p>半減期8日の放射性物質がある。24日後に残っている原子核の数は初めの何倍か。また放射能が初めの 1/16 になるのは何日後か。</p>
<details open><summary>解き方</summary><div>手順1 24日は半減期の3回分である。\(\left(\tfrac{1}{2}\right)^3 = \tfrac{1}{8}\)<br>
手順2 \(\tfrac{1}{16} = \left(\tfrac{1}{2}\right)^4\) なので半減期の4回分である。\(8\times4 = 32\) 日<br>
答え 1/8 倍 ・ 32日後</div></details></div>
<p>典型的な誤りは半減期の2倍の時間で0になると考えることである。半減期ごとに残りの半分が崩壊するので2倍の時間では 1/4 が残る。</p>

<h2 id="s8">現実世界の周波数の壁</h2>
<p>2011年3月の東日本大震災では東日本の発電所が停止し電力が不足した。西日本には余力があったが 60 Hz の電力を 50 Hz の電力網へ送るには周波数変換所を通す必要があった。当時の変換能力は限られていて首都圏では計画停電が実施された。</p>
<p>その後に変換設備の増強が進んだ。2021年3月に飛騨信濃周波数変換設備が運用を始め東京と中部の間の変換能力は120万 kW から210万 kW に拡大した。さらに300万 kW への増強が進められている。電力広域的運営推進機関の2025年10月の報告は、工事の遅れにより完了予定を当初の2027年度末から2028年12月としている。第3節の 50 Hz と 60 Hz の境界は明治時代の発電機の購入の結果であり現在も電力網の設計を制約している。</p>

<h2 id="s9">確認問題</h2>
<div class="qz"><div class="qz-h">問1 ・ 電流がつくる磁場</div>
<p class="qz-q">鉛直に張った導線に下から上へ電流を流した。導線の真東に置いた方位磁針の N 極が指す向きとして最も適当なものを1つ選べ。地球の磁場の影響は無視する。</p>
<ol><li>東</li><li>西</li><li>南</li><li>北</li></ol>
<details><summary>解答と解説</summary><div>正解は 4 である。上向きの電流がつくる磁場は上から見て反時計回りである。導線の東側の点で反時計回りの接線の向きは北である。</div></details></div>

<div class="qz"><div class="qz-h">問2 ・ 電磁誘導</div>
<p class="qz-q">コイルと棒磁石を使った操作のうち誘導電流が流れないものを1つ選べ。</p>
<ol><li>磁石をコイルに近づける</li><li>磁石を静止させたままコイルを磁石から遠ざける</li><li>磁石をコイルの中に入れたまま両方を同じ速度で動かす</li><li>コイルの中の電磁石の電流を減らす</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。コイルと磁石の位置関係が変わらないのでコイルを貫く磁場は変化しない。2 は相対的に磁石が遠ざかる。4 は磁場が弱まる。どちらも磁場が変化するので電流が流れる。</div></details></div>

<div class="qz"><div class="qz-h">問3 ・ 変圧器</div>
<p class="qz-q">一次コイル 100 回・二次コイル 2000 回の変圧器の一次側に 100 V・1.0 A の交流を入力した。損失がないとき二次側の電圧と電流の組として正しいものを1つ選べ。</p>
<ol><li>2000 V ・ 20 A</li><li>2000 V ・ 0.050 A</li><li>5.0 V ・ 20 A</li><li>5.0 V ・ 0.050 A</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(V_2 = 100\times2000/100 = 2000\ \mathrm{V}\) である。電力 100 W が保存されるので \(I_2 = 100/2000 = 0.050\ \mathrm{A}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問4 ・ 送電損失</div>
<p class="qz-q">同じ送電線で同じ電力を送る。送電電圧を 66 kV から 275 kV に上げると送電線の損失はおよそ何倍になるか。</p>
<ol><li>約0.24倍</li><li>約0.058倍</li><li>約4.2倍</li><li>約17倍</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。電流は \(66/275 = 0.24\) 倍になり損失 \(rI^2\) は \(0.24^2 \approx 0.058\) 倍になる。電圧の比をそのまま使う1は誤りである。</div></details></div>

<div class="qz"><div class="qz-h">問5 ・ 交流と電磁波</div>
<p class="qz-q">次の記述のうち正しいものを1つ選べ。</p>
<ol><li>60 Hz の交流の周期は 60 s である</li><li>家庭の 100 V は交流の電圧の最大値である</li><li>真空中では赤外線のほうが紫外線より波長が長い</li><li>直流でも変圧器で電圧を変えられる</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。1 の周期は 1/60 s である。2 の 100 V は実効値で最大値は約 141 V である。4 は直流では磁場が変化せず電磁誘導が起きない。</div></details></div>

<div class="qz"><div class="qz-h">問6 ・ 電磁波の波長</div>
<p class="qz-q">周波数 2.4 GHz の無線LANの電波の真空中の波長として最も近いものを1つ選べ。光の速さを 3.0×10<sup>8</sup> m/s とする。</p>
<ol><li>1.25 mm</li><li>12.5 cm</li><li>1.25 m</li><li>8.0 m</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(\lambda = 3.0\times10^{8}/2.4\times10^{9} = 0.125\ \mathrm{m}\) である。</div></details></div>

<div class="qz"><div class="qz-h">問7 ・ 放射線</div>
<p class="qz-q">放射線と単位に関する記述として誤っているものを1つ選べ。</p>
<ol><li>α線はヘリウムの原子核の流れで紙1枚で止まる</li><li>β線の実体は電子である</li><li>ベクレルは人体が受ける影響の大きさを表す単位である</li><li>γ線は電離作用が小さく透過力が大きい</li></ol>
<details><summary>解答と解説</summary><div>正解は 3 である。ベクレルは1秒間に崩壊する原子核の数で放射能の強さを表す。人体への影響を表すのはシーベルトである。</div></details></div>

<div class="qz"><div class="qz-h">問8 ・ 半減期</div>
<p class="qz-q">半減期30年の放射性物質が 800 Bq ある。放射能が 100 Bq になるのは何年後か。</p>
<ol><li>60年後</li><li>90年後</li><li>120年後</li><li>240年後</li></ol>
<details><summary>解答と解説</summary><div>正解は 2 である。\(100/800 = 1/8 = (1/2)^3\) なので半減期3回分の90年である。放射能は残っている原子核の数に比例するので同じ式で求まる。</div></details></div>

<h2 id="s10">この章の要点</h2>
<div class="tb-key"><b>要点</b>
電流は周囲に磁場をつくり向きは右ねじの法則で定まる。磁場中の電流は力を受けモーターはこの力で回転する。<br>
コイルを貫く磁場が変化している間だけ誘導電流が流れる。変化が速いほど大きく向きは変化を妨げる向きである。<br>
交流の周波数は f＝1/T。東日本は 50 Hz・西日本は 60 Hz。家庭の 100 V は実効値で最大値は約 141 V である。<br>
変圧器は V₁：V₂＝N₁：N₂ で損失がなければ V₁I₁＝V₂I₂ である。<br>
送電損失は rI²＝r(P/V)² で電圧の2乗に反比例する。だから高電圧で送る。<br>
電磁波は c＝fλ。波長の長い順に電波・赤外線・可視光・紫外線・X線・γ線である。<br>
透過力は α＜β＜γ で電離作用はその逆。Bq は放射能・Gy は吸収線量・Sv は人体への影響である。</div>

<h2 id="s11">考えるための問い</h2>
<p>答えが一つに定まらない問いを挙げた。手がかりは本文の内容から示した。</p>
<ul>
<li class="tb-vnote"><strong>電磁波の区分の境界は、自然に定まるものか。</strong> 本文の表は波長で電磁波を区分したが、境界の値は資料によって異なり、X線とγ線は両方の名称が使われる範囲をもつ。表には区分ごとの用途も示しており、区分が物理的な性質を表すのか、利用の慣習を表すのかで見方が異なる。</li>
<li class="tb-vnote"><strong>東日本の 50 Hz と西日本の 60 Hz は、統一すべきか。</strong> 本文は周波数の違いが2011年の電力の融通を制約し、その後は周波数変換設備の増強で対応してきたことを示した。融通の制約を除く利点と、一方の地域の設備を改める負担のどちらを重く見るかで判断が分かれる。</li>
</ul>

<h2 id="s12">出典</h2>
<ol>
<li>文部科学省 高等学校学習指導要領 平成30年告示 解説 理科編 理数編 — https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm</li>
<li>パナソニック 電気と周波数 — https://www2.panasonic.biz/jp/basics/electric/electricity/frequency/</li>
<li>Utility frequency — Wikipedia — https://en.wikipedia.org/wiki/Utility_frequency</li>
<li>東京電力パワーグリッド 飛騨信濃周波数変換設備の運用開始について 2021年 — https://www.tepco.co.jp/pg/company/press-information/press/2021/1591426_8616.html</li>
<li>電力広域的運営推進機関 第94回広域系統整備委員会 資料4 広域系統整備計画の進捗状況について 2025年10月31日 — https://www.occto.or.jp/assets/iinkai/kouikikeitouseibi/2025/files/seibi_94_04_01.pdf</li>
<li>Electromagnetic induction — Wikipedia — https://en.wikipedia.org/wiki/Electromagnetic_induction</li>
<li>Oersted's law — Wikipedia — https://en.wikipedia.org/wiki/Oersted%27s_law</li>
<li>Electromagnetic spectrum — Wikipedia — https://en.wikipedia.org/wiki/Electromagnetic_spectrum</li>
<li>IEA Energy-Efficiency Policy Opportunities for Electric Motor-Driven Systems 2011 — https://www.iea.org/reports/energy-efficiency-policy-opportunities-for-electric-motor-driven-systems</li>
<li>環境省 放射線による健康影響等に関する統一的な基礎資料 — https://www.env.go.jp/chemi/rhm/basic-data.html</li>
<li>Nuclear fission — Wikipedia — https://en.wikipedia.org/wiki/Nuclear_fission</li>
</ol>
