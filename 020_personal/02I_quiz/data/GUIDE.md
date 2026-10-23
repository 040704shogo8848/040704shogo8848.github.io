# Quiz question authoring guide

You write quiz questions for a personal memorization game (like the Japanese quiz app "みんはや"). The player is a Keio economics student who wrote/read these pages and wants to memorize their content: people, places, years, numbers, technical terms, definitions, causal links.

## Input
Each page is a plain-text file in `src/<page_id>.txt` (header lines PAGE_ID / PATH / TITLE / GENRE, then the body). Read the whole file before writing.

## Output
For each page write `out/<page_id>.json` (UTF-8, valid JSON):

```json
{
  "page": "<page_id>",
  "questions": [
    {"type":"mc","q":"孫正義が1981年に創業した会社の社名は何か。","a":"日本ソフトバンク","d":["ソフトバンクBB","日本テレコム","ユニソン・ワールド"],"e":"1981年、24歳の孫正義は資本金1,000万円で日本ソフトバンクを創業した。","ev":"1981年日本ソフトバンク、24歳、資本金1,000万円","lv":1}
  ],
  "orders": [
    {"q":"孫正義の経歴を古い順に並べよ。","items":[{"t":"日本ソフトバンク創業","y":"1981年","k":1981},{"t":"…","y":"1994年","k":1994},{"t":"…","y":"…","k":2006},{"t":"…","y":"…","k":2017}],"ev":["…","…","…","…"]}
  ]
}
```

Fields:
- `q` question (Japanese, 8–140 chars, ends with 。 or ？). `a` correct answer. `d` exactly 3 wrong answers. `e` explanation, 1–2 sentences. `ev` evidence: a string copied **verbatim** from the src file (6–200 chars, one contiguous span; whitespace differences are ignored, everything else must match exactly). `lv` difficulty 1 (core fact) / 2 / 3 (detail).
- `orders`: chronological-ordering sets. 4 items, each with short label `t` (≤40 chars), display date `y`, numeric sort key `k` (year, or year+month/100 e.g. 1994.07 — all distinct). `ev` = 4 verbatim evidence spans, one per item. Write orders only when the page has dated events (people, history, company, countries, cities, politics). 0–4 per page.

## How many
About 1 question per 1,000 characters of body text, minimum 5, maximum 40 per page. Orders: up to 1 per 4,000 chars where applicable, max 4.

## Quality rules (most important)
1. **Only facts stated in the page.** Never add outside knowledge. The `ev` span must actually support the answer.
2. **Self-contained.** The question must make sense to someone who does not see the page. Name the subject (person, city, country, company, theorem). Forbidden: このページ, 本章, この章, 本稿, 本レポート, 上記, 「以下のうち正しいもの」.
3. **Short, noun-like answers**: a name, place, year, number with unit, term, short phrase. Aim ≤ 15 chars; hard limit 30. Many answers (人名, 地名, 用語) should be 2–8 characters so they can also be played in a letter-panel mode.
4. **Distractors** are the same type and plausible (other people from the same era, nearby cities, neighbouring numbers, related terms), clearly wrong according to the page, and not paraphrases of the answer. Prefer distractors that also appear in the page. Same format as the answer (if answer is "1981年", distractors are years).
5. The answer string must not appear in the question.
6. Choose what is worth memorizing: key names, dates, figures, definitions, turning points, cause→effect. Skip page metadata (作成日, 出典番号, URLs, "未確認事項" lists) and trivia about the page itself.
7. Math/physics/chemistry: ask definitions, theorem/law names, units, what a formula gives, typical values, qualitative results. Write math in plain Unicode (x², √2, ∫, Σ, π, ≤, →, e^x); **no `$` / TeX** in q, a, d. Formula answers are fine if short.
8. Mix difficulty: ~40% lv1, ~40% lv2, ~20% lv3. Spread questions across the whole page, not just the opening.
9. Japanese style: business/written Japanese. No colloquialisms (違う→異なる, 作る→作成する is not required in questions but avoid casual speech). No metaphorical verbs where a literal one exists. Ask with 何か／誰か／いつか／どこか／いくらか etc.
10. No two questions in a page asking the same fact.

## Self-check
After writing each file run:
```
python3 tools/validate.py out/<page_id>.json
```
Fix every error (most common: `ev` not verbatim — copy it again from the src file, keeping punctuation and full-width/half-width characters exactly; a table row looks like `| A | B |` in the src, so pick a span inside one cell or include the ` | ` separators exactly). Repeat until 0 errors. Do not finish with errors.

Work inside the quiz directory only. Do not touch anything else (no git, no other directories).
