#!/usr/bin/env python3
"""Bottom-up estimate of money each PM spent before taking office.
Reads data/pm_cost_inputs.json, writes data/pm_costs.json (also merged by build-profiles.py)."""
import json, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
D = json.load(open(ROOT / 'data/pm_cost_inputs.json'))
U = D['units']
CPI = {1946: 3.5, 1947: 6.9, 1948: 10.0, 1949: 11.5, 1950: 11.9, 1955: 16.6, 1960: 17.9, 1965: 23.9, 1970: 30.9,
       1975: 53.1, 1980: 73.2, 1985: 83.8, 1990: 89.6, 1995: 95.9, 2000: 97.3, 2005: 95.2, 2010: 94.8,
       2015: 98.2, 2020: 100.0, 2024: 108.5, 2025: 111.9}

def cpi(y):
    ks = sorted(CPI)
    if y <= ks[0]: return CPI[ks[0]]
    if y >= ks[-1]: return CPI[ks[-1]]
    for a, b in zip(ks, ks[1:]):
        if a <= y <= b: return CPI[a] + (CPI[b] - CPI[a]) * (y - a) / (b - a)

def unit(kind, y):
    v = None
    for start, val in U[kind]:
        if y >= start: v = val
    return v

def real(nominal, y):  # nominal 万円 in year y -> 2025 万円
    return nominal * CPI[2025] / cpi(y)

def years(iv):
    a, b = iv[0], iv[1]
    return [a] if a == b else list(range(a, b))

def fmt(v):
    return f"{v/10000:g}億円" if v >= 10000 else f"{v:,.0f}万円"

def era_label(kind, y):
    s = None
    for start, val in U[kind]:
        if y >= start: s = start
    return s

out = {}
for name, p in D['people'].items():
    scale = p.get('scale', 1.0)
    su = p.get('scale_until')
    def sc(y): return su[1] if su and y <= su[0] else scale
    items = []
    # 1 elections
    el_nom = el_real = 0; groups = {}
    for y in p['elections']:
        m = p.get('election_scale', {}).get(str(y), 1)
        n = unit('election', y) * sc(y) * m
        el_nom += n; el_real += real(n, y)
        k = (era_label('election', y), unit('election', y) * sc(y) * m)
        groups.setdefault(k, []).append(y)
    if p['elections']:
        expl = ' ＋ '.join(f"{len(v)}回×{fmt(k[1])}（{v[0]}年{'〜'+str(v[-1])+'年' if len(v)>1 else ''}）" for k, v in sorted(groups.items()))
        items.append({'kind': '選挙', 'label': f"国政選挙 {len(p['elections'])}回", 'calc': expl, 'nominal': el_nom, 'real': el_real, 'basis': '推計'})
    # 2 activity
    ivs = p['legislator']
    if ivs and not isinstance(ivs[0], list): ivs = [ivs]
    yrs = [y for iv in ivs for y in years(iv)]
    if yrs:
        nom = sum(unit('activity', y) * sc(y) for y in yrs); re_ = sum(real(unit('activity', y) * sc(y), y) for y in yrs)
        g = {}
        for y in yrs: g.setdefault(unit('activity', y) * sc(y), []).append(y)
        expl = ' ＋ '.join(f"{len(v)}年×{fmt(k)}（{v[0]}〜{v[-1]}年）" for k, v in sorted(g.items(), key=lambda kv: kv[1][0]))
        items.append({'kind': '活動', 'label': f"議員活動 {len(yrs)}年", 'calc': expl, 'nominal': nom, 'real': re_, 'basis': '推計'})
    # 3 faction
    for a, b, n in p['faction']:
        fy = years([a, b]); gs = (U['group_scale'] if p.get('faction_is_group') else 1) * p.get('faction_scale', 1)
        nom = sum(unit('faction_per_member', y) * n * gs for y in fy); re_ = sum(real(unit('faction_per_member', y) * n * gs, y) for y in fy)
        per = unit('faction_per_member', fy[0]) * gs
        items.append({'kind': '派閥', 'label': f"{'グループ' if gs < 1 else '派閥'}維持 {len(fy)}年×{n}人", 'calc': f"{len(fy)}年×{n}人×1人年{fmt(per)}（{fy[0]}年〜）", 'nominal': nom, 'real': re_, 'basis': '推計'})
    # 4 races & extra
    for y, v, basis, desc in p['races']:
        items.append({'kind': '総裁選', 'label': f"{y}年の党首選", 'calc': desc, 'nominal': v, 'real': real(v, y), 'basis': basis})
    for y, v, basis, desc in p['extra']:
        items.append({'kind': 'その他', 'label': f"{y}年", 'calc': desc, 'nominal': v, 'real': real(v, y), 'basis': basis})
    tot_n = sum(i['nominal'] for i in items); tot_r = sum(i['real'] for i in items)
    lo = sum(i['real'] * (0.8 if i['basis'] in ('報道', '回顧録') else 0.5) for i in items)
    hi = sum(i['real'] * ((2.0 if name == '田中角栄' else 1.5) if i['basis'] in ('報道', '回顧録') else 2.0) for i in items)
    for i in items: i['nominal'] = round(i['nominal']); i['real'] = round(i['real'])
    out[name] = {'items': items, 'total_nominal': round(tot_n), 'total_real': round(tot_r), 'low_real': round(lo), 'high_real': round(hi),
                 'special': p.get('special', ''), 'source_of_funds': p.get('source_of_funds', '')}
json.dump({'units': U, 'cpi': CPI, 'people': out}, open(ROOT / 'data/pm_costs.json', 'w'), ensure_ascii=False, indent=1)
for n, v in sorted(out.items(), key=lambda kv: -kv[1]['total_real']):
    parts = {}
    for i in v['items']: parts[i['kind']] = parts.get(i['kind'], 0) + i['real']
    print(f"{n:8s} 2025円 {v['total_real']/1e4:6.1f}億 ({v['low_real']/1e4:.1f}-{v['high_real']/1e4:.1f}) 名目 {v['total_nominal']/1e4:6.1f}億 | " + ' '.join(f"{k}{x/1e4:.1f}" for k, x in parts.items()))
