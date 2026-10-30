// Progress sync and friend matches. Server: ~/System/quiz-server (Cloudflare Workers).
// Loaded after the app script, so it uses the app's globals (S, M, ITEMS, save, show …).
const SERVER = 'https://quiz-server.akynks0704-18c.workers.dev';

// ====================================================================
//  sync: a code shared by the user's devices. The server keeps one copy per
//  code; each device merges it with its own before writing it back.
// ====================================================================
const SYNC_KEY = 'hq.sync';
const syncCfg = () => { try { return JSON.parse(localStorage.getItem(SYNC_KEY)) } catch (e) { return null } };
const setSyncCfg = c => { try { c ? localStorage.setItem(SYNC_KEY, JSON.stringify(c)) : localStorage.removeItem(SYNC_KEY) } catch (e) {} };
const CODE_CH = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
const normCode = c => String(c || '').toUpperCase().replace(/[^0-9A-Z]/g, '');
const fmtCode = c => normCode(c).replace(/(.{4})(?=.)/g, '$1-');
function newCode() { const r = crypto.getRandomValues(new Uint8Array(12)); return fmtCode([...r].map(x => CODE_CH[x % CODE_CH.length]).join('')) }
async function codeKey(c) { const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('hq:' + normCode(c))); return [...new Uint8Array(h)].map(x => x.toString(16).padStart(2, '0')).join('') }

// Per question, the record with more answers wins (a tie goes to the newer copy).
// Days keep the larger count. Settings and rating come from the newer copy.
function mergeS(a, b) {
  if (!b || !b.srs) return a;
  const [n, o] = (a.mt || 0) >= (b.mt || 0) ? [a, b] : [b, a];
  const r = { ...structuredClone(DEF), ...o, ...n, pref: { ...DEF.pref, ...o.pref, ...n.pref } };
  r.srs = { ...o.srs };
  for (const [k, v] of Object.entries(n.srs || {})) { const w = r.srs[k]; if (!w || v.n >= w.n) r.srs[k] = v }
  r.days = { ...o.days };
  for (const [k, v] of Object.entries(n.days || {})) { const w = r.days[k]; if (!w || v.n >= w.n) r.days[k] = v }
  r.xp = Math.max(a.xp || 0, b.xp || 0); r.matches = Math.max(a.matches || 0, b.matches || 0);
  r.flag = { ...o.flag, ...n.flag };
  r.known = a.known && b.known ? [...new Set([...a.known, ...b.known])] : a.known || b.known;
  r.v = Math.max(a.v || 1, b.v || 1);
  return r;
}

async function syncNow(quiet) {
  const c = syncCfg(); if (!c || syncNow.busy) return false;
  syncNow.busy = true;
  try {
    const url = SERVER + '/sync/' + await codeKey(c.code);
    const g = await fetch(url, { cache: 'no-store' }); if (!g.ok) throw 0;
    const remote = await g.json();
    S = mergeS(S, remote); save();
    const p = await fetch(url, { method: 'PUT', body: JSON.stringify(S) }); if (!p.ok) throw 0;
    c.at = Date.now(); setSyncCfg(c);
    if (!M && R[curTab]) R[curTab]();
    if (!quiet) toast('同期しました');
    return true;
  } catch (e) { if (!quiet) toast('同期できませんでした。通信状態を確認してください'); return false }
  finally { syncNow.busy = false }
}
const _endMatch = endMatch;
endMatch = function () { _endMatch(); syncNow(true) };
document.addEventListener('visibilitychange', () => {
  const c = syncCfg(); if (!c || M) return;
  // leaving: push what was done here. Coming back: pick up what another device did.
  if (document.hidden || Date.now() - (c.at || 0) > 60e3) syncNow(true);
});
setTimeout(() => syncNow(true), 1500);

const ago = t => { if (!t) return '未同期'; const s = (Date.now() - t) / 1000; return s < 90 ? 'たった今' : s < 3600 ? Math.round(s / 60) + '分前' : s < 86400 ? Math.round(s / 3600) + '時間前' : Math.round(s / 86400) + '日前' };
function syncRow() { const c = syncCfg(); $('#sSync').textContent = c ? `合言葉 ${fmtCode(c.code)}・最終同期 ${ago(c.at)}` : 'スマホと PC などで記録を共有する' }
const _settings = R.settings;
R.settings = function () { _settings(); syncRow() };

function openSync() {
  const c = syncCfg();
  $('#sheet').innerHTML = `<div class="grab"></div><h2>端末間の同期</h2>` + (c
    ? `<p class="sub">この端末は次の合言葉で同期しています。別の端末では、設定の「端末間の同期」でこの合言葉を入力してください。</p>
      <div class="code num" id="syCode">${esc(fmtCode(c.code))}</div>
      <p class="sub">最終同期：${ago(c.at)}。アプリを開いた時、閉じた時、対戦が終わった時に自動で同期します。</p>
      <div style="display:flex;gap:8px;margin:14px 0 4px"><button class="btn sec2" style="flex:1" id="syOff">この端末で同期をやめる</button><button class="btn pri" style="flex:1" id="syNow">今すぐ同期</button></div>`
    : `<p class="sub">合言葉を知っている端末どうしで、解答履歴・復習の予定・レベルを共有します。ログインは不要です。合言葉を他の人に教えると、その人も記録を読み書きできます。</p>
      <button class="btn pri wide" id="syNew" style="margin:10px 0">新しい合言葉を発行する</button>
      <div class="sec">別の端末で発行した合言葉を使う</div>
      <div style="display:flex;gap:8px;margin:6px 0 4px"><input class="search" id="syIn" placeholder="XXXX-XXXX-XXXX" autocapitalize="characters" autocomplete="off" style="flex:1;margin:0"><button class="btn sec2" id="syUse">使う</button></div>`);
  const done = async ok => { if (ok) { openSync(); R.settings() } };
  if (c) {
    $('#syNow').onclick = async () => { buzz('tap'); done(await syncNow()) };
    $('#syOff').onclick = () => { buzz('tap'); setSyncCfg(null); toast('この端末の同期をやめました。記録は端末に残っています'); openSync(); R.settings() };
  } else {
    $('#syNew').onclick = async () => { buzz('tap'); setSyncCfg({ code: newCode() }); if (!(await syncNow(true))) toast('合言葉を発行しました。通信できる場所で同期します'); openSync(); R.settings() };
    $('#syUse').onclick = async () => {
      const v = normCode($('#syIn').value); if (v.length !== 12) return toast('合言葉は12文字です');
      buzz('tap'); setSyncCfg({ code: v });
      if (await syncNow()) { openSync(); R.settings() } else setSyncCfg(null);
    };
  }
  openSheetLayer();
}

// ====================================================================
//  friend match: rooms of up to 8 players, joined by a 4-digit number.
//  The host's device picks the questions; the server keeps time and score.
// ====================================================================
const NET = { ws: null, you: null, players: [], room: null, host: false, scope: 'all', state: 'off' };
const SCOPES = [['all', '全分野'], ...GROUPS.map(([n]) => [n, n]), ['map', '地図で国当て']];
const myName = () => (S.pref.name || '').trim();

function scopePool(k) {
  if (k === 'map') return ITEMS.filter(x => x.mp);
  const g = GROUPS.find(([n]) => n === k);
  return ITEMS.filter(x => x.kind === 'q' && (!g || g[1].includes(gOf(x))));
}

function connect(room, host) {
  leaveRoom();
  NET.room = room; NET.host = host; NET.state = 'connecting';
  const ws = new WebSocket(SERVER.replace(/^http/, 'ws') + `/room/${room}?name=${encodeURIComponent(myName())}${host ? '&host=1' : ''}`);
  NET.ws = ws;
  ws.onmessage = e => { if (NET.ws === ws) onNet(JSON.parse(e.data)) };
  ws.onerror = () => {};
  ws.onclose = () => {
    if (NET.ws !== ws) return;
    const was = NET.state; NET.ws = null; NET.state = 'off';
    if (was === 'play' && M && M.online) { toast('接続が切れました'); clearTimers(); releaseLock(); $('#reveal').classList.remove('on'); M = null; if (topLayer() === 'match') history.back(); else tab('home') }
    else if (was === 'lobby' || was === 'connecting') { if ($('#sheet').classList.contains('on') && $('#sheet').dataset.net) openFriends('接続が切れました') }
  };
}
function leaveRoom() { const ws = NET.ws; NET.ws = null; NET.state = 'off'; NET.players = []; try { ws && ws.close() } catch (e) {} }

function onNet(m) {
  if (m.t === 'err') {
    // a random room number already in use: draw another
    if (m.msg === 'busy' && NET.host) return connect(String(1000 + Math.floor(Math.random() * 9000)), true);
    leaveRoom();
    return openFriends({ none: 'その番号の部屋はありません', full: '部屋が満員です（8人まで）', playing: 'その部屋は対戦中です。終わってから入ってください' }[m.msg] || '入れませんでした');
  }
  if (m.t === 'hello') { NET.you = m.you; return }
  if (m.t === 'lobby') {
    NET.players = m.players; NET.host = !!(m.players.find(p => p.id === NET.you) || {}).host;
    if (m.phase === 'lobby') { NET.state = 'lobby'; if (!M) renderLobby() }
    return;
  }
  if (m.t === 'start') return startOnline(m);
  if (!M || !M.online) return;
  if (m.t === 'q') return onlineQ(m);
  if (m.t === 'mark') return onlineMark(m);
  if (m.t === 'players') { M.players = M.players.filter(p => m.players.some(x => x.id === p.id)); renderBoard(); return }
  if (m.t === 'reveal') return;  // each device already shows the answer; the next 'q' moves on
  if (m.t === 'end') {
    for (const p of M.players) { const x = m.players.find(y => y.id === p.id); if (x) p.score = x.score }
    NET.state = 'end'; clearTimers(); $('#reveal').classList.remove('on');
    if (M.cur && !M.cur.answered) { M.cur.answered = true }
    endMatch();
  }
}

function startOnline(m) {
  NET.state = 'play';
  ac();
  const players = m.players.map(p => ({ id: p.id, n: p.id === NET.you ? 'あなた' : p.name, c: p.c, score: 0, me: p.id === NET.you }));
  players.sort((a, b) => (b.me ? 1 : 0) - (a.me ? 1 : 0));  // the app expects you first
  const online = { answer: k => { try { NET.ws.send(JSON.stringify({ t: 'ans', i: M.i, k })) } catch (e) {} }, quit: () => leaveRoom() };
  M = { round: Array.from({ length: m.n }, () => ({})), i: 0, opt: { label: m.label, again: () => backToRoom() }, online, players, log: [], combo: 0, maxCombo: 0, timers: [], retries: 0, rated: false, goalHit: false };
  if (topLayer() === 'sheet') { _closeSheet(); swapLayer('match') } else pushLayer('match');
  try { navigator.wakeLock?.request('screen').then(l => { M && (M.lock = l) }).catch(() => {}) } catch (e) {}
  show('match');
  $('#mTot').textContent = m.n; $('#mBoard').style.display = 'grid';
  renderBoard();
  $('#mText').textContent = ''; $('#mArea').innerHTML = '';
}

// The item comes from the host's copy of questions.js. Use this device's copy when it
// has the same question (so it counts for review); otherwise show what was sent.
function onlineQ(m) {
  const x = m.item, local = BYID[x.id], a = x.opts[x.ans];
  const it = local && local.a === a ? local : { id: x.id, kind: 'q', p: Math.max(0, PAGES.findIndex(p => p.path === x.path)), q: x.q, a, d: x.opts.filter((_, k) => k !== x.ans), e: x.e || '', ev: x.ev || '', lv: x.lv || 2, f: '', hi: -1, mp: x.mp };
  M.round[m.i] = { it, type: 'mc', opts: x.opts, limit: m.limit };
  clearTimers(); $('#reveal').classList.remove('on');
  M.i = m.i;
  if (m.i === 0) ready(M.opt.label, M.round.length, () => { if (M && M.online && M.i === 0) nextQ() });
  else nextQ();
}

function onlineMark(m) {
  const i = M.players.findIndex(p => p.id === m.id); if (i < 0) return;
  const p = M.players[i]; p.score = m.score;
  const sc = $('#sc' + i); if (sc) sc.textContent = m.score;
  if (p.me) return;  // finishQ already showed your own mark
  const st = $('#st' + i); if (st) { st.className = 'st on ' + (m.ok ? 'ok' : 'ng'); st.textContent = m.ok ? '○' : '×' }
  if (m.pts) { const g = $('#gn' + i); g.textContent = '+' + m.pts; g.classList.remove('on'); void g.offsetWidth; g.classList.add('on') }
  if (!M.cur || !M.cur.answered) buzz('tap');
}

function openFriends(msg) {
  if (NET.state === 'lobby' || NET.state === 'connecting') return renderLobby();
  const sh = $('#sheet'); sh.dataset.net = '1';
  sh.innerHTML = `<div class="grab"></div><h2>友達と対戦</h2>
    <p class="sub">部屋を作って番号を伝えるか、友達の部屋の番号を入力します。2〜8人で同じ問題を同時に解き、速く正解した人ほど得点が高くなります。</p>
    ${msg ? `<div class="vnote">${esc(msg)}</div>` : ''}
    <div class="sec">表示する名前</div>
    <input class="search" id="frName" maxlength="12" placeholder="例：しょうご" value="${esc(myName())}" autocomplete="off" style="margin:4px 0 0">
    <button class="btn pri wide" id="frMake" style="margin:16px 0 0">部屋を作る</button>
    <div class="sec">友達の部屋に入る</div>
    <div style="display:flex;gap:8px;margin:4px 0 4px"><input class="search num" id="frRoom" inputmode="numeric" maxlength="4" placeholder="4桁の番号" value="${esc(NET.joinHint || '')}" autocomplete="off" style="flex:1;margin:0"><button class="btn sec2" id="frJoin">入る</button></div>`;
  NET.joinHint = '';
  const named = () => { const v = $('#frName').value.trim(); if (!v) { toast('名前を入力してください'); $('#frName').focus(); return false } S.pref.name = v; save(); return true };
  $('#frMake').onclick = () => { if (!named()) return; buzz('tap'); connect(String(1000 + Math.floor(Math.random() * 9000)), true); renderLobby() };
  $('#frJoin').onclick = () => { const r = $('#frRoom').value.replace(/\D/g, ''); if (r.length !== 4) return toast('部屋の番号は4桁です'); if (!named()) return; buzz('tap'); connect(r, false); renderLobby() };
  openSheetLayer();
}

function renderLobby() {
  const sh = $('#sheet'); sh.dataset.net = '1';
  const ps = NET.players, link = location.origin + location.pathname + '?room=' + NET.room;
  sh.innerHTML = `<div class="grab"></div><h2>友達と対戦</h2>
    ${NET.state === 'connecting' ? '<p class="sub">接続しています…</p>' : `
    <p class="sub">部屋の番号</p><div class="code num">${esc(NET.room)}</div>
    <button class="btn sec2 wide" id="lbShare" style="margin:8px 0 0">番号を友達に送る</button>
    <div class="sec">参加者 ${ps.length}人</div>
    <div class="card" style="padding:2px 14px">${ps.map(p => `<div class="prow"><div class="pt"><span class="av" style="background:${esc(p.c)};display:inline-flex;width:22px;height:22px;border-radius:50%;color:#fff;font-size:11px;align-items:center;justify-content:center;margin-right:8px">${esc([...p.name][0] || '')}</span>${esc(p.name)}${p.id === NET.you ? '（あなた）' : ''}</div><div class="pp">${p.host ? 'ホスト' : ''}</div></div>`).join('')}</div>
    ${NET.host ? `<div class="sec">出題する範囲</div>
      <div class="seg" id="lbScope" style="flex-wrap:wrap">${SCOPES.map(([k, n]) => `<button data-v="${esc(k)}" class="${NET.scope === k ? 'on' : ''}">${esc(n)}</button>`).join('')}</div>
      <button class="btn pri wide" id="lbGo" style="margin:16px 0 4px" ${ps.length < 2 ? 'disabled' : ''}>${ps.length < 2 ? '友達の参加を待っています' : '10問で対戦を始める'}</button>`
      : '<p class="sub" style="margin-top:14px">ホストが対戦を始めるのを待っています。</p>'}`}
    <button class="btn sec2 wide" id="lbLeave" style="margin:8px 0 4px">部屋を出る</button>`;
  $('#lbLeave').onclick = () => { buzz('tap'); leaveRoom(); openFriends() };
  const share = $('#lbShare');
  if (share) share.onclick = async () => {
    buzz('tap'); const text = `早押しクイズの部屋 ${NET.room} で対戦しよう`;
    try { if (navigator.share) await navigator.share({ text, url: link }); else { await navigator.clipboard.writeText(text + ' ' + link); toast('リンクをコピーしました') } } catch (e) {}
  };
  sh.querySelectorAll('#lbScope button').forEach(b => b.onclick = () => { buzz('tap'); NET.scope = b.dataset.v; renderLobby() });
  const go = $('#lbGo');
  if (go) go.onclick = () => {
    buzz('tap');
    const picks = pickWeighted(scopePool(NET.scope), 10);
    if (!picks.length) return toast('出題できる問題がありません');
    const items = picks.map(it => { const opts = shuffle([it.a, ...it.d]); return { id: it.id, q: it.q, opts, ans: opts.indexOf(it.a), e: it.e, ev: it.ev, lv: it.lv, path: PAGES[it.p].path, mp: it.mp } });
    NET.ws.send(JSON.stringify({ t: 'start', items, time: S.pref.time || 12, label: '友達と対戦・' + (SCOPES.find(([k]) => k === NET.scope) || ['', ''])[1] }));
  };
  if (!sh.classList.contains('on')) openSheetLayer();
}

// leaving the lobby sheet (back button, tapping outside) leaves the room
const _closeSheetNet = _closeSheet;
_closeSheet = function () {
  const sh = $('#sheet'), wasNet = sh.dataset.net; delete sh.dataset.net;
  _closeSheetNet();
  if (wasNet && NET.state !== 'play') leaveRoom();
};
// after a match, the result screen's "もう一度" returns to the room
function backToRoom() { if (NET.ws && NET.state === 'end') { if (NET.host) NET.ws.send(JSON.stringify({ t: 'lobby' })); NET.state = 'lobby'; renderLobby() } else openFriends() }

$('#hFriends').onclick = () => { buzz('tap'); openFriends() };
$('#sSyncGo').onclick = () => { buzz('tap'); openSync() };
{ const u = new URL(location.href), r = u.searchParams.get('room');
  if (r && /^\d{4}$/.test(r)) { u.searchParams.delete('room'); history.replaceState(null, '', u.pathname + u.search + u.hash); NET.joinHint = r; openFriends() } }
