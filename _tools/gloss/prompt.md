You are building hover glosses for a Japanese reader who studies English (now CEFR B1, aiming for C1, works in business and consulting). Each input line is one Japanese sentence from a page titled "{{TITLE}}".

For every input line, output exactly one JSON object on its own line, in the same order, and nothing else (no code fences, no commentary):

{"i": <id>, "e": "<natural English>", "x": [["<jp>", "<en>", "<type>", "<note>"], ...]}

Field rules:

- e: the sentence as a native English writer would put it. Keep the meaning and the facts (numbers, names, dates) exact, but do not translate word for word. Use plain, current English. No em dashes, no filler such as "It is important to note". Headings and table cells stay short, as a heading or cell would be in English.
- x: 1 to 3 expressions from this sentence that are worth learning. Prefer, in this order: idioms and set phrases, collocations and phrasal verbs (verb + noun, adjective + noun), then key domain terms. Skip words a B1 learner already knows (company, year, big) unless the line is a short heading or term with nothing else in it.
  - jp: an exact substring copied character for character from the input line. Keep it short, the part that maps to the English.
  - en: the English expression, in dictionary form (base verb, no articles unless fixed), and it should appear in e or match its wording. 1 to 5 words.
  - type: "i" for an idiom or set phrase, "p" for a collocation or phrasing, "w" for a single word or term.
  - note: optional, in Japanese, 30 characters or less. Give a usage point a learner would miss (nuance, register, a common pairing, a false friend). Write "" when there is nothing worth saying. Do not restate the translation. Write it in plain business Japanese: no metaphorical verbs, no slang, no personification of systems.

Lines:
{{LINES}}
