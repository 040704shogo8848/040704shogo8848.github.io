"""Extract the plain text of every page used for questions into <workdir>/src/ and write <workdir>/pages.json.

usage: python3 tools/extract.py [workdir]   (default: data/ next to tools/)
"""
import os,re,html,json,sys
ROOT=os.path.expanduser('~/System/040704shogo8848.github.io')
OUT=sys.argv[1] if len(sys.argv)>1 else os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),'data')
os.makedirs(os.path.join(OUT,'src'),exist_ok=True)
pages=[]
def want(rel):
    if rel.endswith('index.html') or rel.endswith('drill.html'): return False
    if rel.startswith('010_research/'): return True
    if rel.startswith('020_personal/02B_reading/'): return True
    if re.match(r'020_personal/02[C-H]_[^/]+/chapters/',rel): return True
    return False
def genre(rel):
    p=rel.split('/')
    if p[0]=='010_research':
        if p[1]=='013_geo':
            if len(p)>3 and p[2] in('cities','countries'): return 'geo_'+p[2]
            return 'geo'
        return p[1][4:]
    return p[1][4:]
for r,ds,fs in os.walk(ROOT):
    if 'node_modules' in r or '/.git' in r: continue
    for f in fs:
        if not f.endswith('.html'): continue
        rel=os.path.relpath(os.path.join(r,f),ROOT)
        if not want(rel): continue
        s=open(os.path.join(r,f),encoding='utf-8').read()
        m=re.search(r'<title>(.*?)</title>',s,re.S); title=html.unescape(m.group(1).strip()) if m else f
        s=re.sub(r'<!-- snav:start -->.*?<!-- snav:end -->','',s,flags=re.S)
        s=re.sub(r'<math.*?<annotation encoding="application/x-tex">(.*?)</annotation>.*?</math>',lambda m:' $'+m.group(1)+'$ ',s,flags=re.S)
        s=re.sub(r'<(script|style|svg|head)[^>]*>.*?</\1>',' ',s,flags=re.S)
        s=re.sub(r'<h([1-4])[^>]*>',lambda m:'\n\n'+'#'*int(m.group(1))+' ',s)
        s=re.sub(r'</(p|li|tr|h\d|div|section|blockquote)>','\n',s)
        s=re.sub(r'<(td|th)[^>]*>',' | ',s)
        t=html.unescape(re.sub(r'<[^>]+>','',s))
        t=re.sub(r'[ \t　]+',' ',t); t=re.sub(r'\n\s*\n+','\n\n',t).strip()
        pid=re.sub(r'[^a-z0-9]+','_',rel[:-5].lower()).strip('_')
        open(os.path.join(OUT,'src',pid+'.txt'),'w').write(f'PAGE_ID: {pid}\nPATH: {rel}\nTITLE: {title}\nGENRE: {genre(rel)}\n\n{t}\n')
        pages.append({'id':pid,'path':rel,'title':title,'genre':genre(rel),'chars':len(t)})
pages.sort(key=lambda p:p['path'])
json.dump(pages,open(os.path.join(OUT,'pages.json'),'w'),ensure_ascii=False,indent=1)
from collections import Counter
c=Counter(); n=Counter()
for p in pages: c[p['genre']]+=p['chars']; n[p['genre']]+=1
for g in c: print(g,n[g],c[g])
print(len(pages),sum(c.values()))
