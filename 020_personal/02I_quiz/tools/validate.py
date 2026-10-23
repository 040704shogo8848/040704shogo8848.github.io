import json,sys,re,os
# page text lives in <quiz>/data/src/ (QUIZ_DATA overrides the data folder)
BASE=os.environ.get('QUIZ_DATA') or os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),'data')
def norm(s): return re.sub(r'\s+','',s)
BAN=re.compile(r'このページ|本ページ|本章|この章|本稿|本レポート|このレポート|上記|以下のうち正しい')
def check(path):
    errs=[]
    try: o=json.load(open(path))
    except Exception as e: return [f'JSON parse: {e}'],0,0
    pid=o.get('page'); sp=os.path.join(BASE,'src',f'{pid}.txt')
    if not os.path.exists(sp): return [f'unknown page {pid}'],0,0
    src=norm(open(sp).read())
    qs=o.get('questions',[]); ods=o.get('orders',[])
    for i,q in enumerate(qs):
        tag=f'q{i}'
        for k in('q','a','d','e','ev'):
            if k not in q: errs.append(f'{tag}: missing {k}')
        if any(k not in q for k in('q','a','d','e','ev')): continue
        if q.get('type','mc')!='mc': errs.append(f'{tag}: type must be mc')
        if not isinstance(q['d'],list) or len(q['d'])!=3: errs.append(f'{tag}: d must be 3 items')
        else:
            if len(set(map(norm,q['d'])))!=3: errs.append(f'{tag}: duplicate distractors')
            if norm(q['a']) in map(norm,q['d']): errs.append(f'{tag}: answer in distractors')
        if len(q['a'])>30: errs.append(f'{tag}: answer too long ({len(q["a"])})')
        if not 8<=len(q['q'])<=140: errs.append(f'{tag}: q length {len(q["q"])}')
        if len(norm(q['a']))>=2 and norm(q['a']) in norm(q['q']): errs.append(f'{tag}: answer appears in question')
        if BAN.search(q['q']): errs.append(f'{tag}: page-relative wording in q')
        if '$' in q['q']+q['a']+''.join(q['d']): errs.append(f'{tag}: TeX $ not allowed, use Unicode')
        if not 6<=len(norm(q['ev']))<=200: errs.append(f'{tag}: ev length')
        elif norm(q['ev']) not in src: errs.append(f'{tag}: ev not found verbatim: {q["ev"][:40]}')
        if q.get('lv') not in (1,2,3): errs.append(f'{tag}: lv must be 1-3')
    for i,od in enumerate(ods):
        tag=f'order{i}'
        it=od.get('items',[]); ev=od.get('ev',[])
        if len(it)!=4: errs.append(f'{tag}: need 4 items'); continue
        ks=[x.get('k') for x in it]
        if not all(isinstance(k,(int,float)) for k in ks): errs.append(f'{tag}: k must be number'); continue
        if len(set(ks))!=4: errs.append(f'{tag}: k must be distinct')
        if any(len(x.get('t',''))>40 for x in it): errs.append(f'{tag}: item text >40')
        if len(ev)!=4: errs.append(f'{tag}: ev needs 4')
        for e in ev:
            if norm(e) not in src: errs.append(f'{tag}: ev not found: {e[:40]}')
        if BAN.search(od.get('q','')): errs.append(f'{tag}: page-relative wording')
    return errs,len(qs),len(ods)
if __name__=='__main__':
    bad=0
    for p in sys.argv[1:]:
        e,n,m=check(p)
        print(f'{os.path.basename(p)}: {n} q, {m} order, {len(e)} errors')
        for x in e[:30]: print('  ',x)
        bad+=len(e)
    sys.exit(1 if bad else 0)
