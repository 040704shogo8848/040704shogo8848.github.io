#!/usr/bin/env python3
"""Bundle per-page question JSON into questions.js for the quiz app.

usage: python3 tools/build.py <workdir>
  workdir holds src/ (from tools/extract.py), out/ and pages.json; data/ in this
  folder keeps the last out/ and pages.json.
Only questions that pass tools/validate.py are bundled. Pages that git does not
track yet (drafts from other sessions) are left out so nothing unpublished leaks.
"""
import json, sys, os, re, hashlib, datetime, importlib.util, subprocess

GREEK = {'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'δ', 'epsilon': 'ε', 'varepsilon': 'ε', 'theta': 'θ', 'lambda': 'λ',
         'mu': 'μ', 'pi': 'π', 'rho': 'ρ', 'sigma': 'σ', 'tau': 'τ', 'phi': 'φ', 'varphi': 'φ', 'omega': 'ω',
         'Delta': 'Δ', 'Sigma': 'Σ', 'Omega': 'Ω', 'Phi': 'Φ'}
OPS = {'times': '×', 'div': '÷', 'cdot': '·', 'pm': '±', 'le': '≤', 'leq': '≤', 'ge': '≥', 'geq': '≥', 'neq': '≠', 'ne': '≠',
       'approx': '≈', 'to': '→', 'rightarrow': '→', 'Rightarrow': '⇒', 'infty': '∞', 'int': '∫', 'sum': 'Σ', 'sqrt': '√',
       'partial': '∂', 'cap': '∩', 'cup': '∪', 'fallingdotseq': '≒', 'qquad': ' ', 'quad': ' ', 'overline': '', 'bar': '', 'circ': '°', 'in': '∈', 'cdots': '⋯', 'ldots': '…', 'prime': '′',
       'sin': 'sin', 'cos': 'cos', 'tan': 'tan', 'log': 'log', 'lim': 'lim', 'exp': 'exp', 'max': 'max', 'min': 'min'}
SUP = str.maketrans('0123456789+-n', '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ')


def tex2u(s):
    """Rough TeX -> Unicode for showing evidence quotes. Validation runs on the raw text."""
    def conv(m):
        t = m.group(1)
        for _ in range(3):
            t = re.sub(r'\\frac\{([^{}]*)\}\{([^{}]*)\}', r'(\1)/(\2)', t)
            t = re.sub(r'\\(?:mathrm|text|mathbf|operatorname)\{([^{}]*)\}', r'\1', t)
            t = re.sub(r'\\sqrt\{([^{}]*)\}', r'√(\1)', t)
        t = re.sub(r'\^\{?([0-9+\-n]+)\}?', lambda m: m.group(1).translate(SUP), t)
        t = re.sub(r'\\(left|right)', '', t)
        t = re.sub(r'\\([A-Za-z]+)', lambda m: GREEK.get(m.group(1), OPS.get(m.group(1), '')), t)
        t = re.sub(r'\\[,;:! ]', ' ', t)
        t = t.replace('\\{', '{').replace('\\}', '}')
        t = re.sub(r'(?<![{}])[{}](?![{}])', '', t)
        return re.sub(r'\s+', ' ', t).strip()
    s = re.sub(r'\$([^$]+)\$', conv, s)
    # spans cut out of the page can hold TeX without its $ delimiters
    return conv(re.match(r'(.*)', s, re.S)) if '\\' in s else s


W = sys.argv[1]
spec = importlib.util.spec_from_file_location('v', os.path.join(W, 'tools/validate.py')); v = importlib.util.module_from_spec(spec); spec.loader.exec_module(v)
pages = json.load(open(os.path.join(W, 'pages.json')))
idx = {p['id']: i for i, p in enumerate(pages)}
Q, O, seen, dropped = [], [], set(), 0
REPO = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '../../..'))
tracked = set(subprocess.run(['git', 'ls-files', '*.html'], cwd=REPO, capture_output=True, text=True).stdout.split())
h = lambda s: hashlib.sha1(s.encode()).hexdigest()[:10]
for p in pages:
    if p['path'] not in tracked: print('untracked, skipped', p['path']); continue
    f = os.path.join(W, 'out', p['id'] + '.json')
    if not os.path.exists(f): print('missing', p['id']); continue
    errs, _, _ = v.check(f)
    bad = {e.split(':')[0] for e in errs}
    o = json.load(open(f)); i = idx[p['id']]
    for k, q in enumerate(o.get('questions', [])):
        if f'q{k}' in bad: dropped += 1; continue
        qid = 'q' + h(p['id'] + q['q'])
        if qid in seen: continue
        seen.add(qid)
        Q.append([qid, i, q['q'], q['a'], q['d'], tex2u(q['e']), tex2u(q['ev']), q['lv']])
    for k, od in enumerate(o.get('orders', [])):
        if f'order{k}' in bad: dropped += 1; continue
        oid = 'o' + h(p['id'] + od['q'] + ''.join(x['t'] for x in od['items']))
        if oid in seen: continue
        seen.add(oid)
        O.append([oid, i, od['q'], [[x['t'], x['y'], x['k']] for x in od['items']], [tex2u(e) for e in od['ev']]])
used = sorted({x[1] for x in Q + O})
remap = {old: new for new, old in enumerate(used)}
for x in Q + O: x[1] = remap[x[1]]
data = {'built': datetime.date.today().isoformat(),
        'pages': [[pages[i]['id'], pages[i]['path'], pages[i]['title'], pages[i]['genre']] for i in used],
        'q': Q, 'o': O}
out = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'questions.js')
write = lambda: open(out, 'w').write('window.QDATA=' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n')
write()
# questions.js sits outside 010_research, so leak-check treats every hit as hard.
# Drop the items that carry a hit rather than adding exceptions.
# share counts match a regex rule that leak-check reports one hit at a time
data['q'] = [x for x in data['q'] if not re.search(r'\d株', json.dumps(x, ensure_ascii=False))]
data['o'] = [x for x in data['o'] if not re.search(r'\d株', json.dumps(x, ensure_ascii=False))]
write()
for _ in range(20):
    r = subprocess.run(['node', '_tools/leak-check.mjs', os.path.relpath(out, REPO)], cwd=REPO, capture_output=True, text=True)
    hits = set(re.findall(r'— "(.+?)"', r.stdout + r.stderr))
    if not hits: break
    has = lambda x: any(t in json.dumps(x, ensure_ascii=False) for t in hits)
    n0 = len(data['q']) + len(data['o'])
    data['q'] = [x for x in data['q'] if not has(x)]; data['o'] = [x for x in data['o'] if not has(x)]
    print(f'leak-check: dropped {n0 - len(data["q"]) - len(data["o"])} items for {sorted(hits)}')
    write()
else:
    sys.exit('leak-check still failing')
Q, O = data['q'], data['o']
print(f'{len(used)} pages, {len(Q)} questions, {len(O)} orders, dropped {dropped}, {os.path.getsize(out)//1024} KB')
