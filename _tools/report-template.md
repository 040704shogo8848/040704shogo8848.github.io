# 企業リサーチレポート テンプレート仕様

`010_research/011_company/reports/` に置くレポートの共通仕様。3つの変種がある。

| variant | 対象 | 章構成 |
|---|---|---|
| `listed` | 上場企業。AI提案の売り先になりうる先 | ①〜⑦（従来通り） |
| `startup-case` | スタートアップの事例研究。売り先ではなく学習対象 | ①〜⑦（差し替え版） |
| `postmortem` | 消滅・解体した会社 | 章立てを強制しない1ページ |

`listed` の章構成は `~/.claude/skills/company-research/SKILL.md` に準拠する。以下は差分のみ記す。

---

## 共通のHTML規約

**単一HTMLファイル完結。CSSはインライン。外部依存は clearbit ロゴのみ**（`startup-case` と `postmortem` は地図を使わないため OSM iframe も無し）。

必ず完全なHTML骨格から始める。既存3本は `<meta charset>` から始まる断片で、viewport が無いためスマホで横に潰れている。同じ轍を踏まない。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{会社名} 企業リサーチレポート</title>
<style>/* 後述の共通CSS */</style>
</head>
<body>
<!-- snav:start --><!-- snav:end -->
<div class="wrap">
  ... 本文 ...
</div>
</body>
</html>
```

`<!-- snav:start --><!-- snav:end -->` は空のまま置く。`_tools/build-nav.mjs` が中身を生成する。手で書かない。

### 共通CSS

`010_research/011_company/reports/` の既存レポート（`kameda_seika_research_260713.html`）の `<style>` ブロックをそのまま使う。CSS変数は以下で固定。

```
--bg:#F8F7F3  --ink:#1a1a1a  --sub:#555  --accent:#2563EB  --line:#E5E2DA
--good:#15803d  --bad:#b91c1c  --warn:#b45309  --chip:#EEF2FF
```

主要クラス: `.wrap`(max-width:940px) / `header.top` / `.tag` / `.lead` / `.kpi`(4カラム、640px以下で2) / `.box` / `.callout`(左ボーダー accent) / `.risk`(左ボーダー赤) / `strong.hit`(黄色ハイライト) / `sup`(出典番号) / `ol.sources` / `td.num`(右寄せ tabular-nums)

見出しは `<h2><span class="num">①</span>見出し<span class="en">English Subtitle</span></h2>`。

絵文字なし。装飾アニメーションなし。日本語は全角、数字英字は半角。グラデーション禁止。`@media print` 対応。

---

## variant: `startup-case`

YC企業など、スタートアップの事例研究用。**売り先ではなく学習対象**として書く。

現行 SKILL.md の①〜⑦は「日本の上場企業にAIを売る」構成なので、そのままだと2箇所が破綻する。⑥「LLM×社内データ提案」は Stripe や Airbnb には無意味（むしろAIの供給側）。④「本社・拠点＋地図」は既に会社が存在しない先で必ず壊れる。よって以下に差し替える。

```
① 概要
     創業年 / 創業者 / YCバッチ / 現ステータス（listed | private | acquired | defunct）
     KPIカード4枚: 創業年 / 現ステータス / 直近の規模を表す数値 / 従業員数

② 創業ストーリーと初期プロダクト
     何から始めたか。何にピボットしたか。ピボットの引き金は何だったか
     ここが事例研究の本体。「今の姿」より「どう曲がったか」を厚く書く

③ ビジネスモデルの分解
     SKILL.md の②をそのまま流用。「誰に×何を×どう課金するか」の3軸マトリクスは
     非上場でも成立するので必ず入れる。収益構造（フロー/ストック、単価×数量、粗利の源泉）

④ 資金調達とバリュエーション推移
     表: ラウンド / 年 / 調達額 / ポストマネー評価額 / 主要投資家
     判明している分だけ書く。不明は N/A。推定値は「推定」と明記

⑤ 現ステータスの数値
     listed   → 時価総額・売上・営業利益・利益率
     private  → 直近ラウンド評価額 ＋ 報道ベースの ARR/GMV/TPV。全て「推定」ラベル必須
     acquired → 買収額・買収者・買収年・買収後の顛末
     defunct  → 終了理由と資産・人材の行方

⑥ 転換点
     ⑤までの事実から、意思決定の分岐点を3〜5個抽出する
     「なぜその判断が効いたか / 効かなかったか」を書く
     一般論に逃げない。この会社固有の条件を明示する

⑦ 出典一覧
```

**本社地図（OSM iframe）は入れない。**

---

## variant: `postmortem`

消滅した会社用。7章を強制しない。1ページで以下を押さえる。

- 何をやろうとしていたか、なぜその時期に成立すると思われたか
- 何が起きて終わったか（買収／サービス終了／解散の別と、その条件）
- 資産・人材・技術がどこへ行ったか
- そこから何が言えるか

会社としての規模が小さくても、**創業者のその後の文脈が本体**になることがある。そちらを厚く書いてよい。

---

## 品質ゲート（`_tools/verify-report.mjs` が機械検査する）

1. 出典が6件以上。かつ Wikipedia 単独ではない（一次情報・報道を含む）
2. 本文の `<sup>` 参照番号と `ol.sources` の項目が1対1で対応する
3. 後述の `facts` ブロックの全項目に `as_of` と `source` がある
4. ヘッドライン数値（時価総額・評価額・ARR・売上）は2ソース以上。1ソースしか取れない場合は `"confidence": "single-source"` を明示
5. プレースホルダーが本文に無い（伏字の数値、未定を表すマーカーの類。検出パターンは `_tools/leak-check.mjs` の `PLACEHOLDER` を参照）
6. 全リンクが 2xx

コンサル提案書の「サンプル値はプレースホルダーで」という原則は**ここには適用しない**。リサーチレポートは実数か N/A のどちらかしか許さない。

### facts ブロック

`</body>` の直前に機械可読な出典対応を埋める。

```html
<script type="application/json" id="facts">
[
  {"claim":"2024年 TPV","value":1400,"unit":"B USD","as_of":"2025-01",
   "source":"https://stripe.com/newsroom/...","confidence":"reported"}
]
</script>
```

`confidence` は次の4つのいずれか。

| 値 | 意味 |
|---|---|
| `reported` | 一次情報、または複数の報道で一致している |
| `estimated` | 推定値。本文にも「推定」と明記する |
| `single-source` | 1ソースしか取れなかった |
| `disputed` | 当事者間で数値や評価が割れている。どちらかを採らず、割れていること自体を記録する |

---

## reports.json エントリ

レポート本体を書いたら、以下の形のJSONを返す。**`bin/add-report.sh` は自分で呼ばない**（並列実行時に `reports.json` の read-modify-write が競合して他のエントリが消える）。登録は親が直列でまとめて行う。

```json
{
  "company": "Stripe",
  "fullName": "Stripe, Inc.",
  "ticker": null,
  "market": null,
  "country": "US",
  "status": "private",
  "cohort": "yc",
  "tags": ["fintech", "payments", "developer-tools"],
  "date": "2026-07-27",
  "summary": "1〜2文。タイル/テーブルの説明文に使う",
  "file": "reports/stripe_research_260727.html",
  "sourceCount": 11,
  "variant": "startup-case"
}
```

- `ticker` / `market` は非上場なら**文字列ではなく `null`**。`"非上場"` と入れると表示側が歪む
- `status`: `listed` | `private` | `acquired` | `defunct`
- `cohort`: `yc` | `jp-listed`
- ファイル名は `{会社名英字小文字}_research_{YYMMDD}.html`
