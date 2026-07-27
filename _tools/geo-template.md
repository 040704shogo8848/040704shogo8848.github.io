# 国リサーチ テンプレート仕様

`010_research/013_geo/countries/` に置く国別ページの仕様。

Kyo さんの `country_research_template.md` を土台にしているが、あちらは35セクション超で
1国あたりの調査量が大きい。ここでは**核になる9章に絞る**。抜いたのは国家P&Lの詳細、
デジタルエコシステムのシェア表、税制の全税目、食文化、著名人。必要になったら足せばよい。

絞る代わりに、**全ての数値に出典と時点を付けることは緩めない**。企業リサーチと同じ基準。

---

## 章構成（①〜⑨固定）

```
① 基本情報
     KPIカード4枚: 人口 / 一人あたりGDP / 名目GDP / 中央値年齢
     表: 首都・面積・公用語・通貨・政体・独立年

② 人口動態
     過去50年の人口・TFR・都市化率を10年刻みの表で
     人口ボーナス／オーナスのどちらの局面にいるかを明記

③ 経済構造
     産業3分類（一次・二次・三次）のGDP比を20年前と現在で比較
     主要産業を表で（GDP比 / 輸出比 / 雇用比 / 競争優位）
     GDP比と雇用比が乖離している産業があれば必ず指摘する

④ 貿易
     輸出入の総額と収支
     輸出先Top5 / 輸入元Top5 を表で（相手国・シェア・主要品目）
     主要輸出品目の集中度。単一品目依存があればリスクとして書く

⑤ 主要都市
     人口順Top5（小国はTop3）。都市圏人口・経済的性格・特徴

⑥ 対外関係と債務
     対外債務のGDP比、主要債権国・機関
     中国（一帯一路）の融資・インフラ・貿易依存度
     日本との関係（ODA・JICA・進出企業）
     IMF・世銀の関与

⑦ 交通インフラ
     フラグキャリア、主要空港（IATA付き）、港湾、鉄道
     一帯一路の回廊上にある場合は、どの回廊のどこに位置するかを明記

⑧ 歴史の骨格
     時代区分ごとの表。植民地・独立・体制転換・経済危機を落とさない
     現在の経済構造が歴史のどこで決まったかを1段落で

⑨ 出典一覧
```

---

## HTML規約

企業リサーチと同じ。完全なHTML骨格から始め、`<body>` 直後に
`<!-- snav:start --><!-- snav:end -->` を空で置く。CSSは
`010_research/011_company/reports/airbnb_research_260727.html` の `<style>` を流用。

**外部依存は OpenStreetMap の iframe のみ**（①の下に国の位置を示す地図を置く）。
clearbit ロゴは国には使わない。絵文字なし、国旗絵文字も使わない。

`</body>` 直前に facts ブロックを埋める。企業リサーチと同じ形式。

```html
<script type="application/json" id="facts">
[{"claim":"名目GDP","value":80.4,"unit":"B USD","as_of":"2024",
  "source":"https://data.worldbank.org/...","confidence":"reported"}]
</script>
```

`confidence` の値は `_tools/report-template.md` と共通で `reported` / `estimated` /
`single-source` / `disputed` の4つ。**係争地や国境紛争に関わる数値は `disputed`** を使い、
どちらかの当事者の主張を採らない。

係争的な主題（国境、民族、政変）は本文でも同じ扱いにする。「〜側は〜と主張している」の形で
各当事者の立場を併記し、国連・OSCE・ICJ 等の第三者の対応があれば添えたうえで、
**このページはどの評価も確定した国際的判断としては扱わないと明記する。**

---

## 出典の当て方

一次統計を優先する。

- 人口・GDP・貿易: World Bank Open Data、IMF World Economic Outlook、UN Population Division
- 貿易相手・品目: OEC (Observatory of Economic Complexity)、UN Comtrade
- 債務: World Bank International Debt Statistics、IMF Article IV
- 日本との関係: 外務省の国別基礎データ、JICA
- CIA World Factbook は補助。単独ソースにしない

**数値には必ず年を添える。** 「人口3,700万人」ではなく「人口3,700万人（2024年、World Bank）」。
推計値は「推計」と明記。不明は N/A で、推測で埋めない。

---

## countries.json エントリ

ページを書いたら以下を返す。`bin/add-country.sh` は自分で呼ばない。

```json
{
  "country": "ウズベキスタン",
  "en": "Uzbekistan",
  "iso": "UZ",
  "region": "中央アジア",
  "capital": "タシケント",
  "population": 37000000,
  "gdp_per_capita": 2500,
  "visited": ["2025-11"],
  "lat": 41.31,
  "lon": 69.24,
  "summary": "1〜2文",
  "file": "countries/uzbekistan.html",
  "sourceCount": 12
}
```

`visited` は渡航月の配列。`010_research/013_geo/data/trips.json` の記録と一致させる。
