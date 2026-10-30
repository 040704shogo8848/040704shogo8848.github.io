// Offline cache. Serve from cache, refresh in the background so a new
// questions.js shows up on the next launch.
const CACHE = 'hayaoshi-v5';
const FILES = ['./', 'index.html', 'questions.js', 'map.js', 'net.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin || !url.pathname.includes('/02I_quiz/')) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});

// Review reminders (net.js, ~/System/quiz-server). The push carries no payload;
// the text comes from the server, with a fixed one if that request fails.
const SERVER = 'https://quiz-server.akynks0704-18c.workers.dev';
self.addEventListener('push', e => {
  e.waitUntil((async () => {
    let title = '早押し復習クイズ', body = '復習の期限が来た問題があります';
    try {
      const sub = await self.registration.pushManager.getSubscription();
      const m = await (await fetch(SERVER + '/push/msg?ep=' + encodeURIComponent(sub.endpoint), { cache: 'no-store' })).json();
      if (m && m.body) { title = m.title || title; body = m.body; }
    } catch (err) {}
    await self.registration.showNotification(title, { body, icon: 'icon-192.png', badge: 'icon-192.png', tag: 'review' });
  })());
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    for (const c of cs) if (c.url.includes('/02I_quiz/')) return c.focus();
    return clients.openWindow('./');
  }));
});
