# 人物リサーチ テンプレート仕様

`010_research/019_people/people/` に置く人物レポートの共通仕様。variant は今のところ1つ。

| variant | 対象 | 構成 |
|---|---|---|
| `life-arc` | 生涯を時系列で追う長編。投資家・創業者・政治家いずれも同じ形 | ①〜⑧ |

会社を主語にするなら `011_company`、会社×部署の商談準備なら `client-prep` スキル、
人物1人の「自分の文脈への落とし込み」なら `~/.claude/skills/person/`（People/ に MD で保存）。
ここは**公開用の人物長編**の置き場である。

---

## 共通のHTML規約

**単一HTMLファイル完結。CSSはインライン。外部依存なし**（地図もロゴも読み込まない）。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{人物名} — {副題}</title>
<style>/* 011_company のレポートと同じCSS変数 */</style>
</head>
<body>
<!-- snav:start --><!-- snav:end -->
<div class="wrap">... 本文 ...</div>
</body>
</html>
```

CSS変数は `011_company` のレポートに揃える。

```
--bg:#F8F7F3  --ink:#1a1a1a  --sub:#555  --accent:#2563EB  --line:#E5E2DA
--good:#15803d  --bad:#b91c1c  --warn:#b45309  --chip:#EEF2FF
```

見出しは `<h2><span class="num">①</span>見出し<span class="en">English Subtitle</span></h2>`。
絵文字なし。装飾アニメーションなし。日本語は全角、数字英字は半角。グラデーション禁止。`@media print` 対応。

### グラフの色（dataviz スキル準拠）

チャート面は白（`#fff`）。カテゴリ色は下記の順で固定して使い、循環させない。
検証済み（`node scripts/validate_palette.js "#2a78d6,#eb6834,#1baf7a,#eda100,#e87ba4" --mode light --surface "#ffffff"`）。

| slot | hex | 用途 |
|---|---|---|
| 1 | `#2a78d6` | 単系列の既定色 |
| 2 | `#eb6834` | 2系列目 |
| 3 | `#1baf7a` | 3系列目 |
| 4 | `#eda100` | 4系列目 |
| 5 | `#e87ba4` | 5系列目 |

- slot 3・4・5 は白地に対して3:1未満なので、**必ず直接ラベルか表を併置**する（relief rule）
- 損益の符号など極性を表すときは `#2a78d6`（正）↔ `#d03b3b`（負）の2色。中点は無彩色
- 2軸グラフは作らない。単位が違う指標は別チャートにする
- 値は棒の端に直接書く。凡例だけで識別させない

---

## 章構成（`life-arc`）

```
① 概要
     生年月日 / 出身 / 現職 / 一行で何をした人か
     KPIカード4枚（例: 生年 / 創業年 / 直近の規模を表す数値 / 保有比率）
     「先に結論」callout: この人物を読む上での結論を3段落以内で先に出す

② 年表
     日付が確定した出来事だけを時系列に並べる。時代でフィルタできるようにする
     各項目は「事実 → 具体（場所・人名・金額・発言） → なぜ効いたか」の3層
     出典番号を各項目に付ける
     **日付の隣にその時点の満年齢を必ず出す**（後述の ageAt）

③ 局面ごとの解剖
     年表を5〜10の局面に区切り、局面ごとに何が起きたかを本文で書く
     ここが本体。「今の姿」より「どこで曲がったか」を厚く書く

④ 実績の数字
     投資家なら投資トラックレコード（投資年 / 投資額 / 現在価値 / 倍率 / 実現・未実現）
     経営者なら業績、政治家なら選挙結果と役職
     倍率や比率は自分で計算し、根拠となる2つの数値を必ず併記する

⑤ 失敗の解剖
     ④と同じ精度で負けを扱う。金額を書く。3〜5類型に分類し、案件を紐づける
     この章を省略した人物レポートは公開しない

⑥ 思想と方法
     本人が使った語をそのまま拾う。一次資料（本人の講演・著書・公式資料）優先
     「〜と言われている」で終わらせない

⑦ 語録
     日付・場所・出典が確定できる発言だけ。英語発言は原文＋訳
     出典が取れない有名な言い回しは「出典未確定」として本文から隔離する

⑧ 出典一覧
```

---

## 品質ゲート

1. 出典が20件以上。かつ一次情報（本人発言・公式開示・当局資料）を含む
2. 本文の `<sup>` 参照番号と `ol.sources` の項目が1対1で対応する
3. すべての数値に単位・通貨・時点（as_of）がある
4. 推定値には「推定」、報道間で割れている数値には「諸説」と本文に書く
5. プレースホルダーが本文に無い（`_tools/leak-check.mjs` の `PLACEHOLDER` を参照）
6. 存命の人物について、出典のない私生活の記述を書かない

### 年齢の表示（全レポート共通）

年表の各項目には、日付の右に**その時点の満年齢**を出す。
「28歳のときに脱藩」のような記述を本文で繰り返すより、年表を縦に読んだときに
その人が何歳で何をしたかが一目で追えるほうが速い。

年齢は項目ごとに手で書かず、生年月日から描画時に計算する。
`d` の先頭にある西暦年（あれば月日）を拾って引くだけの関数を置く。

```js
const BORN = '1957-08-11';   // 生年月日（ISO）
const DIED = null;           // 存命なら null、没しているなら ISO の没年月日
function ageAt(x) {
  if (x.a) return { t: x.a, out: true };          // 項目側の上書き
  const m = String(x.d).match(/(\d{4})(?:[-.](\d{1,2})(?:[-.](\d{1,2}))?)?/);
  if (!m) return null;
  const y = +m[1], mo = m[2] ? +m[2] : null, dd = m[3] ? +m[3] : null;
  const [by, bm, bd] = BORN.split('-').map(Number);
  if (DIED) { const dy = +DIED.split('-')[0]; if (y > dy) return { t: '没後' + (y - dy) + '年', out: true }; }
  if (y < by) return { t: '生誕' + (by - y) + '年前', out: true };
  let a = y - by;
  if (mo !== null && (mo < bm || (mo === bm && dd !== null && dd < bd))) a -= 1;
  return { t: a + '歳', out: false };
}
```

- 生前より前の項目（親の代など）は「生誕N年前」、没後の項目は「没後N年」を出す
- 没年と同じ年の没後の出来事のように、年差では正しく出ない項目は
  `{d:'...', e:7, a:'没後2か月', t:'...'}` のように `a` で上書きする
- 和暦しか特定できない人物は年までしか取れない。誕生日が新暦の何月かを本文の
  リード文で明示し、年差で満年齢になることを読者が検証できる状態にしておく
- 没後の項目が年差であることも同じくリード文に書く
- 年齢は年表の検索対象にも含める（`filterTL` の `hay` に `ageAt(x)?.t` を足す）
- 見た目は `.tl-age`（生前）と `.tl-age.out`（生前より前・没後）の2種

### facts ブロック

`</body>` の直前に機械可読な出典対応を埋める。`confidence` は
`reported` / `estimated` / `single-source` / `disputed` の4つ。

```html
<script type="application/json" id="facts">
[
  {"claim":"Alibaba 初回出資額","value":20,"unit":"M USD","as_of":"2000-01",
   "source":"https://...","confidence":"reported"}
]
</script>
```

---

## people.json エントリ

レポート本体を書いたら、以下の形のJSONを返す。登録は
`echo '<entry JSON>' | 010_research/019_people/bin/add-person.sh <report.html>`。
**並列実行しないこと**（`people.json` の read-modify-write が競合する）。

```json
{
  "name": "孫正義",
  "nameEn": "Masayoshi Son",
  "born": 1957,
  "died": null,
  "country": "JP",
  "role": "ソフトバンクグループ 代表取締役 会長兼社長執行役員",
  "field": "investor",
  "status": "active",
  "tags": ["投資", "AI", "通信", "起業"],
  "date": "2026-08-18",
  "summary": "1〜3文。表とタイルの説明文に使う",
  "file": "people/son_masayoshi_260818.html",
  "sourceCount": 42,
  "variant": "life-arc"
}
```

- `field`: `investor` | `founder` | `operator` | `politician` | `scientist` | `financier`
- `status`: `active` | `retired` | `deceased`
- `died` は存命なら `null`（文字列で "—" と入れると表示側が歪む）
- ファイル名は `{姓_名のローマ字小文字}_{YYMMDD}.html`
