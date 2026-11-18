(function () {
  var target = new Date('2076-07-04T00:00:00+09:00');
  var now = new Date();
  var jst = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tokyo' }).format(now);
  var today = new Date(jst + 'T00:00:00+09:00');
  var days = Math.max(0, Math.ceil((target - today) / 86400000));
  var counter = document.getElementById('days-left');
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
}());
