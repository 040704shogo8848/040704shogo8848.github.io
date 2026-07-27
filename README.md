# 040704shogo8848.github.io

久保田翔己の公開サイト。https://040704shogo8848.github.io/

ビルドシステムは無い。素の HTML を番号付きディレクトリに置き、共通ナビだけを
生成器で埋めている。`file://` で直接開いても全ページ動く。

```
index.html                    ディレクトリハブ
robots.txt                    ドメインルート。サブパスの他サイトもここで統べる
_tools/
  nav.json                    共通ナビの唯一の定義
  build-nav.mjs               全HTMLの snav マーカー間を再生成（--check で CI 検査）
  leak-check.mjs              第三者PII・内部リンク・認証情報の検査
  verify-report.mjs           リサーチ記事の出典・facts 検査（--links で URL 疎通も）
  normalize-html.mjs          断片HTMLに doctype/viewport/snav マーカーを補う
  report-template.md          リサーチ記事の仕様（3つの variant）
010_research/
  011_company/                企業リサーチ
    bin/add-report.sh         記事の追加（正規化→nav注入→manifest→leak-check→push）
    data/reports.json         真実のソース。manifest.js は自動生成
  012_politics/               戦後総理37人のキャリアパス
020_personal/021_profile/
```

## 記事を1本足す

```bash
010_research/011_company/bin/add-report.sh <生成した.html> <<'JSON'
{"company":"…","fullName":"…","ticker":null,"market":null,"country":"US",
 "status":"private","cohort":"yc","tags":["…"],"date":"YYYY-MM-DD",
 "summary":"…","sourceCount":N,"variant":"startup-case"}
JSON
```

正規化・ナビ注入・漏洩チェックはこのスクリプトの中で走る。並列で呼ばないこと
（`reports.json` は read-modify-write なので同時実行でエントリが消える）。

## ナビを変える

`_tools/nav.json` を直して `node _tools/build-nav.mjs`。各ページの深さに応じた
相対パスが自動で入る。HTML を手で編集しない。

## 公開範囲

このリポジトリは public。**push した内容は履歴から消えない。**

`.githooks/pre-push` が leak-check・nav の同期・verify-report の3つを push 前に
走らせる。クローン直後は一度だけ以下が要る。

```bash
git config core.hooksPath .githooks
```

キーワード辞書は `~/System/shogo-profile/build/secrets.json` にあり、意図的にこの
リポには置いていない。辞書が無い環境（CI）では組み込みルールだけが走る。組み込み側が
見ているのは社内 Slack・tl;dv・Notion・ローカル絶対パス・非公開レイヤの語彙・認証情報で、
これらは辞書の有無にかかわらず必ず止まる。
