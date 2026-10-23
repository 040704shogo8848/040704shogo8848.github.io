# Top-up: add more questions to person pages

Same rules as GUIDE.md (read it first). These pages are long biographies and currently have too few questions.

For each page_id in your list:
1. Read `data/src/<page_id>.txt` fully and the existing `data/out/<page_id>.json`.
2. Append new `mc` questions to the existing `questions` array so the page reaches **40 questions total**. Do not change or remove existing ones. Do not repeat a fact already asked.
3. Focus on what a person who wants to memorize this biography should know: names of people around the subject (mentors, partners, rivals, family), places, years and ages at turning points, organisations, amounts, famous decisions and their outcomes. Spread across the whole life, especially the middle and late parts of the page.
4. You may also add orders (chronological sets) so the page has up to 4 in total.
5. Run `python3 tools/validate.py data/out/<page_id>.json` and fix until 0 errors.

Edit only the JSON files in your list. Reply with page_id, new total questions, orders, errors.
