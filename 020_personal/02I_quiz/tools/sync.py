#!/usr/bin/env python3
"""Find what the quiz needs before the next build.

usage: python3 tools/sync.py            report + write data/todo_*.txt and data/reports.json
       python3 tools/sync.py --issues F  read issues from a JSON file (gh issue list format) instead of GitHub
       python3 tools/sync.py --mark     record current page text as "questions up to date" (run after generating)

Writes, under data/:
  todo_new_NN.txt   pages with no question file yet, batched by size for one subagent each
  todo_redo.txt     pages whose text changed so much that many questions no longer match
  todo_topup.txt    person pages below 36 questions
  reports.json      open GitHub issues labelled "quiz", resolved to the question they point at
"""
import hashlib, importlib.util, json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
QUIZ = os.path.dirname(HERE)
DATA = os.path.join(QUIZ, 'data')
REPO = os.path.abspath(os.path.join(QUIZ, '../..'))
GH_REPO = '040704shogo8848/040704shogo8848.github.io'
BATCH_CHARS = 150000

os.environ['QUIZ_DATA'] = DATA
subprocess.run([sys.executable, os.path.join(HERE, 'extract.py'), DATA], check=True, stdout=subprocess.DEVNULL)
spec = importlib.util.spec_from_file_location('v', os.path.join(HERE, 'validate.py')); v = importlib.util.module_from_spec(spec); spec.loader.exec_module(v)

pages = json.load(open(os.path.join(DATA, 'pages.json')))
state_path = os.path.join(DATA, 'state.json')
state = json.load(open(state_path)) if os.path.exists(state_path) else {}
sha = lambda pid: hashlib.sha1(open(os.path.join(DATA, 'src', pid + '.txt'), 'rb').read()).hexdigest()
out = lambda pid: os.path.join(DATA, 'out', pid + '.json')

if '--mark' in sys.argv:
    for p in pages:
        if os.path.exists(out(p['id'])): state[p['id']] = sha(p['id'])
    json.dump(state, open(state_path, 'w'), indent=1)
    print(f'marked {len(state)} pages')
    sys.exit(0)

for f in os.listdir(DATA):
    if f.startswith('todo_') and f.endswith('.txt'): os.remove(os.path.join(DATA, f))

new, redo, topup, drift = [], [], [], []
for p in pages:
    pid = p['id']
    if not os.path.exists(out(pid)):
        new.append(p); continue
    if state.get(pid) == sha(pid):
        if p['genre'] == 'people' and len(json.load(open(out(pid)))['questions']) < 36: topup.append(pid)
        continue
    # text changed since the questions were written: count evidence that no longer matches
    errs, nq, no = v.check(out(pid))
    lost = len({e.split(':')[0] for e in errs if 'not found' in e})
    total = max(1, nq + no)
    (redo if lost / total >= 0.25 else drift).append((pid, lost, total))

batches, cur, size = [], [], 0
for p in sorted(new, key=lambda x: x['path']):
    if cur and size + p['chars'] > BATCH_CHARS: batches.append(cur); cur, size = [], 0
    cur.append(p['id']); size += p['chars']
if cur: batches.append(cur)
for i, b in enumerate(batches):
    open(os.path.join(DATA, f'todo_new_{i:02d}.txt'), 'w').write('\n'.join(b) + '\n')
if redo: open(os.path.join(DATA, 'todo_redo.txt'), 'w').write('\n'.join(x[0] for x in redo) + '\n')
if topup: open(os.path.join(DATA, 'todo_topup.txt'), 'w').write('\n'.join(topup) + '\n')

# reports from the app ("問題を報告" opens a prefilled issue with an "- id:" line)
reports = []
if '--issues' in sys.argv:
    r = subprocess.CompletedProcess([], 0, open(sys.argv[sys.argv.index('--issues') + 1]).read(), '')
else:
    r = subprocess.run(['gh', 'issue', 'list', '-R', GH_REPO, '--label', 'quiz', '--state', 'open', '--limit', '200',
                        '--json', 'number,title,body,url'], capture_output=True, text=True)
if r.returncode == 0:
    h = lambda s: hashlib.sha1(s.encode()).hexdigest()[:10]
    for it in json.loads(r.stdout or '[]'):
        m = re.search(r'^- id: (\S+)', it['body'] or '', re.M)
        pm = re.search(r'^- page: (\S+)', it['body'] or '', re.M)
        rec = {'number': it['number'], 'url': it['url'], 'title': it['title'], 'body': it['body'], 'id': m and m.group(1)}
        page = next((p for p in pages if pm and p['path'] == pm.group(1)), None)
        if page and rec['id'] and os.path.exists(out(page['id'])):
            o = json.load(open(out(page['id'])))
            for k, q in enumerate(o.get('questions', [])):
                if 'q' + h(page['id'] + q['q']) == rec['id']: rec.update(page=page['id'], kind='questions', index=k, item=q)
            for k, od in enumerate(o.get('orders', [])):
                if 'o' + h(page['id'] + od['q'] + ''.join(x['t'] for x in od['items'])) == rec['id']: rec.update(page=page['id'], kind='orders', index=k, item=od)
        reports.append(rec)
else:
    print('gh issue list failed:', r.stderr.strip()[:200])
json.dump(reports, open(os.path.join(DATA, 'reports.json'), 'w'), ensure_ascii=False, indent=1)

print(json.dumps({
    'pages': len(pages),
    'new_pages': len(new), 'new_batches': len(batches),
    'redo_pages': [f'{a} ({b}/{c} lost)' for a, b, c in redo],
    'drifted_pages_kept': [f'{a} ({b}/{c} lost)' for a, b, c in drift],
    'topup_pages': len(topup),
    'reports_open': len(reports), 'reports_unresolved': sum(1 for x in reports if 'item' not in x),
}, ensure_ascii=False, indent=1))
