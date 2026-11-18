(function () {
  var target = new Date('2076-07-04T00:00:00+09:00');
  var now = new Date();
  var jst = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tokyo' }).format(now);
  var today = new Date(jst + 'T00:00:00+09:00');
  var days = Math.max(0, Math.ceil((target - today) / 86400000));
  var counter = document.getElementById('days-left');
  startSparks();
  // Number line from birth (0) to 72. The fill grows with the day counter.
  var birth = new Date('2004-07-04T00:00:00+09:00');
  var ratio = Math.min(1, Math.max(0, (today - birth) / (target - birth)));
  var fill = document.getElementById('lifeline-fill');
  var dot = document.getElementById('lifeline-now');
  var pct = document.getElementById('lifeline-pct');
  var ageEl = document.getElementById('lifeline-age');
  if (ageEl) {
    var age = today.getFullYear() - 2004 - ((today.getMonth() < 6 || (today.getMonth() === 6 && today.getDate() < 4)) ? 1 : 0);
    ageEl.textContent = '今 ' + age + '歳';
    // Start the dot at today's position so it never reads as age 0.
    fill && (fill.style.width = (ratio * 100) + '%');
    dot && (dot.style.left = (ratio * 100) + '%');
    pct && (pct.textContent = (ratio * 100).toFixed(1) + '% 経過');
  }
  if (counter) {
    var started = performance.now();
    function tick(time) {
      var progress = Math.min(1, (time - started) / 900);
      var eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(days * eased).toLocaleString('ja-JP');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  document.querySelectorAll('.home-card').forEach(function (card) {
    var raw = card.getAttribute('data-updated');
    if (!raw) return;
    var updated = new Date(raw + 'T00:00:00+09:00');
    var age = (today - updated) / 86400000;
    if (age >= 0 && age <= 7) {
      var badge = document.createElement('span');
      badge.className = 'home-new';
      badge.textContent = 'NEW';
      card.appendChild(badge);
    }
  });

  var pickCard = document.getElementById('today-pick');
  var pickButton = document.getElementById('pick-another');
  if (!pickCard || !pickButton) return;
  fetch('_home/picks.json').then(function (res) { return res.json(); }).then(function (items) {
    if (!items.length) return;
    var previous = '';
    function show() {
      var pool = items.filter(function (item) { return item.url !== previous; });
      var item = pool[Math.floor(Math.random() * pool.length)];
      previous = item.url;
      pickCard.href = item.url;
      pickCard.querySelector('img').src = item.img;
      pickCard.querySelector('.pick-section').textContent = item.section;
      pickCard.querySelector('.pick-title').textContent = item.title;
      pickCard.querySelector('.pick-desc').textContent = item.desc;
    }
    show();
    pickButton.addEventListener('click', function (event) { event.preventDefault(); show(); });
    pickCard.hidden = false;
  }).catch(function () {});

  // Sparks thrown off the left side of the dot, like a burning fuse.
  function startSparks() {
    var canvas = document.getElementById('lifeline-sparks');
    if (!canvas || !canvas.getContext) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var ctx = canvas.getContext('2d');
    var parts = [];
    var w = 0, h = 0;
    function resize() {
      var dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);
    var colors = ['#fde68a', '#fbbf24', '#f97316', '#ea580c', '#dc2626'];
    function spawn(x, y) {
      var speed = 1.2 + Math.random() * 3.2;
      var angle = Math.PI + (Math.random() - 0.5) * 1.6; // mostly leftward
      parts.push({
        x: x - 4, y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 1.2,
        life: 0, max: 22 + Math.random() * 30,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 1.4
      });
    }
    function frame() {
      var dot = document.getElementById('lifeline-now');
      var x = dot ? dot.offsetLeft : 0;
      // Track center in canvas coordinates; the canvas extends far below so sparks can fall until they fade.
      var y = -canvas.offsetTop + (canvas.parentNode.clientHeight || 6) / 2;
      ctx.clearRect(0, 0, w, h);
      // Flickering glow around the burning point.
      var r = 16 + Math.random() * 6;
      var g = ctx.createRadialGradient(x - 3, y, 0, x - 3, y, r);
      g.addColorStop(0, 'rgba(253,186,116,0.85)');
      g.addColorStop(0.45, 'rgba(249,115,22,0.35)');
      g.addColorStop(1, 'rgba(249,115,22,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x - 3, y, r, 0, Math.PI * 2); ctx.fill();
      var n = 4 + Math.floor(Math.random() * 4);
      for (var i = 0; i < n; i++) spawn(x, y);
      for (var j = parts.length - 1; j >= 0; j--) {
        var p = parts[j];
        p.life++;
        if (p.life > p.max) { parts.splice(j, 1); continue; }
        var px = p.x, py = p.y;
        p.vy += 0.09; p.vx *= 0.975;
        p.x += p.vx; p.y += p.vy;
        ctx.globalAlpha = 1 - p.life / p.max;
        ctx.strokeStyle = p.c;
        ctx.lineWidth = 1.2 + p.size;
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(p.x, p.y); ctx.stroke();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
}());
