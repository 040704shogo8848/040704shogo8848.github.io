#!/usr/bin/env python3
"""Bundle per-page question JSON into questions.js for the quiz app.

usage: python3 tools/build.py [workdir]   (default: data/ next to tools/)
  workdir holds src/ and pages.json (from tools/extract.py) and out/ (question JSON).
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


def frag(ev):
    """Plain span of the evidence for a #:~:text= link: no table separators, no TeX, cut at punctuation.
    None when nothing usable is left (formula-only evidence)."""
    parts = [x.strip(' 　、。，．・:：') for x in re.split(r'\s*\|\s*|\$[^$]*\$|\s{2,}|\n', ev)]
    parts = [x for x in parts if '\\' not in x and '$' not in x]
    t = max(parts, key=len) if parts else ''
    if len(t) > 60:
        cut = max(t.rfind('、', 0, 60), t.rfind('。', 0, 60))
        t = t[:cut] if cut >= 12 else t
    return t if len(t) >= 6 else None


def headings(src):
    """[(normalized offset, heading text)] for the ## / ### lines of an extracted page."""
    out, pos = [], 0
    for line in src.split('\n'):
        m = re.match(r'#{2,3} (.+)', line)
        if m:
            words = [w for w in re.split(r'\s+', m.group(1)) if len(w) >= 2 and not re.fullmatch(r'[\d.]+', w)]
            if words: out.append((pos, max(words, key=len)))
        pos += len(re.sub(r'\s+', '', line))
    return out


def link(ev, src_norm, heads, hlist):
    """(fragment, heading index) for the question's 'read it on the page' link."""
    f = frag(ev)
    at = src_norm.find(re.sub(r'\s+', '', ev))
    hi = -1
    if at >= 0:
        before = [t for o, t in heads if o <= at]
        if before:
            if before[-1] not in hlist: hlist.append(before[-1])
            hi = hlist.index(before[-1])
    fe = tex2u(ev)
    return ('' if f == fe else f), hi

def panel_ok(q, a):
    """Whether a multiple-choice question also works as a letter-panel question, where
    the player types the answer without seeing the choices. Keeps names, places, terms
    and years; drops questions that need the choices (次のうち, 含まれないもの),
    statistics (typing 約68% or 260億ドル超 tests the wording, not the fact) and
    phrases with kana, which have more than one correct wording."""
    if not re.fullmatch(r'[^\s、。,.・()（）「」]{2,8}', a) or re.fullmatch(r'[A-Za-z]+', a): return 0
    if re.search(r'次の|どれか|正しいもの|誤って|適切な|ないもの|ないのは|含まれない', q): return 0
    if re.search(r'\d', a) and not re.fullmatch(r'(紀元前)?\d{1,4}年|\d{1,2}世紀', a): return 0
    if re.search(r'[ぁ-ゖ]', a): return 0
    return 1

W = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'data')
os.environ['QUIZ_DATA'] = W
spec = importlib.util.spec_from_file_location('v', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'validate.py')); v = importlib.util.module_from_spec(spec); spec.loader.exec_module(v)
pages = json.load(open(os.path.join(W, 'pages.json')))
idx = {p['id']: i for i, p in enumerate(pages)}
Q, O, seen, dropped, HEADS = [], [], set(), 0, {}
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
    src = open(os.path.join(W, 'src', p['id'] + '.txt')).read()
    src_norm, heads, hlist = re.sub(r'\s+', '', src), headings(src), HEADS.setdefault(i, [])
    for k, q in enumerate(o.get('questions', [])):
        if f'q{k}' in bad: dropped += 1; continue
        qid = 'q' + h(p['id'] + q['q'])
        if qid in seen: continue
        seen.add(qid)
        Q.append([qid, i, q['q'], q['a'], q['d'], tex2u(q['e']), tex2u(q['ev']), q['lv'], *link(q['ev'], src_norm, heads, hlist), panel_ok(q['q'], q['a'])])
    for k, od in enumerate(o.get('orders', [])):
        if f'order{k}' in bad: dropped += 1; continue
        oid = 'o' + h(p['id'] + od['q'] + ''.join(x['t'] for x in od['items']))
        if oid in seen: continue
        seen.add(oid)
        O.append([oid, i, od['q'], [[x['t'], x['y'], x['k']] for x in od['items']], [tex2u(e) for e in od['ev']], *link(od['ev'][0], src_norm, heads, hlist)])
used = sorted({x[1] for x in Q + O})
remap = {old: new for new, old in enumerate(used)}
for x in Q + O: x[1] = remap[x[1]]
data = {'built': datetime.date.today().isoformat(),
        'pages': [[pages[i]['id'], pages[i]['path'], pages[i]['title'], pages[i]['genre'], HEADS.get(i, [])] for i in used],
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
    for pg in data['pages']:
        pg[4] = ['' if has(t) else t for t in pg[4]]  # keep indices stable; '' = no heading link
    print(f'leak-check: dropped {n0 - len(data["q"]) - len(data["o"])} items for {sorted(hits)}')
    write()
else:
    sys.exit('leak-check still failing')
# build-nav.mjs puts a "quiz for this page" button on these pages
open(os.path.join(REPO, '_tools', 'quiz-pages.json'), 'w').write(json.dumps(sorted(pg[1] for pg in data['pages']), indent=0) + '\n')
Q, O = data['q'], data['o']
print(f'{len(used)} pages, {len(Q)} questions, {len(O)} orders, dropped {dropped}, {os.path.getsize(out)//1024} KB')
