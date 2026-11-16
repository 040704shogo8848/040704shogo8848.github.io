/* scandal.js — shared behaviors for 日本の経済事件 pages (v2) */
(function () {
  "use strict";

  var REL_TYPES = {
    ally: { label: "協力・盟友", color: "#2E6B4F", dash: "" },
    conflict: { label: "対立・確執", color: "#8B1E1E", dash: "" },
    betrayal: { label: "裏切り・告発・供述", color: "#C45C1A", dash: "" },
    money: { label: "資金・金銭授受", color: "#1E3A5F", dash: "" },
    hierarchy: { label: "上司部下・師弟", color: "#5A4A8A", dash: "" },
    family: { label: "姻戚・血縁・創業家", color: "#8A5A6A", dash: "" },
    underworld: { label: "闇社会との接点", color: "#8B1E1E", dash: "5 4" }
  };

  var SCHEME_KIND = {
    company: { fill: "#EDF1F6", stroke: "#1E3A5F" },
    person: { fill: "#F7F5F0", stroke: "#5A5A5A" },
    fund: { fill: "#F8EDED", stroke: "#8B1E1E" },
    offshore: { fill: "#F5EFE6", stroke: "#8A6A3A" },
    bank: { fill: "#E8EEF5", stroke: "#1E3A5F" },
    market: { fill: "#EEF5F0", stroke: "#2E6B4F" },
    authority: { fill: "#EDE8F5", stroke: "#5A4A8A" },
    victim: { fill: "#F8F0E8", stroke: "#8A5A2A" }
  };

  var FLOW_KIND = {
    fraud: "#8B1E1E",
    money: "#1E3A5F",
    stock: "#2E6B4F",
    info: "#6A6A6A",
    control: "#5A4A8A",
    loss: "#8A5A2A",
    underworld: "#3A3A3A",
    asset: "#2E6B4F",
    authority: "#5A4A8A",
    pressure: "#8B1E1E",
    cost: "#8A5A2A"
  };

  var FLOW_LABELS = { money: "資金", fraud: "不正な取引", stock: "株式", info: "情報", control: "指示・支配", loss: "損失", underworld: "闇の資金", asset: "資産", authority: "当局の措置", pressure: "圧力", cost: "費用" };

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function parseJson(id) {
    var el = document.getElementById(id);
    if (!el) return null;
    try {
      return JSON.parse(el.textContent.replace(/<span><\/span>/g, ""));
    } catch (e) {
      return null;
    }
  }

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  /* —— Map —— */
  function initMap() {
    var dataEl = document.getElementById("map-data");
    var mapEl = document.getElementById("sc-map");
    if (!dataEl || !mapEl) return;

    var points;
    try {
      points = JSON.parse(dataEl.textContent);
    } catch (e) {
      showMapFallback(mapEl, "地図データを読み込めませんでした。下の表を参照");
      return;
    }
    if (!Array.isArray(points) || !points.length) {
      showMapFallback(mapEl, "地図データを読み込めませんでした。下の表を参照");
      return;
    }
    if (typeof L === "undefined") {
      showMapFallback(mapEl, "地図を読み込めませんでした。下の表を参照");
      return;
    }

    try {
      var map = L.map(mapEl, { scrollWheelZoom: false });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18
      }).addTo(map);

      var bounds = [];
      points.forEach(function (p) {
        if (typeof p.lat !== "number" || typeof p.lng !== "number") return;
        var marker = L.marker([p.lat, p.lng]).addTo(map);
        var html = "<strong>" + escapeHtml(p.name || "") + "</strong>";
        if (p.note) html += "<br>" + escapeHtml(p.note);
        marker.bindPopup(html);
        bounds.push([p.lat, p.lng]);
      });

      if (bounds.length === 1) {
        map.setView(bounds[0], 14);
      } else if (bounds.length > 1) {
        map.fitBounds(bounds, { padding: [36, 36], maxZoom: 12 });
      } else {
        showMapFallback(mapEl, "地図を読み込めませんでした。下の表を参照");
      }
      setTimeout(function () { map.invalidateSize(); }, 200);
    } catch (err) {
      showMapFallback(mapEl, "地図を読み込めませんでした。下の表を参照");
    }
  }

  function showMapFallback(mapEl, msg) {
    var div = document.createElement("div");
    div.className = "sc-map-fallback";
    div.textContent = msg;
    mapEl.replaceWith(div);
  }

  /* —— Gen toggle —— */
  function initGenToggle() {
    var cards = document.querySelectorAll("figure.gen");
    cards.forEach(function (card) {
      if (card.querySelector(".gen-toggle")) return;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gen-toggle";
      btn.setAttribute("aria-pressed", "false");
      btn.textContent = "ハイライトのみ";
      btn.addEventListener("click", function () {
        var on = card.classList.toggle("hl-only");
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
      card.appendChild(btn);
    });
  }

  /* —— TOC spy —— */
  function initTocSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".sc-toc a[href^='#']"));
    if (!links.length) return;
    var map = {};
    links.forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      var el = document.getElementById(id);
      if (el) map[id] = { link: a, el: el };
    });
    var ids = Object.keys(map);
    if (!ids.length) return;

    function setActive(id) {
      links.forEach(function (a) { a.classList.remove("is-active"); });
      if (id && map[id]) map[id].link.classList.add("is-active");
    }

    if ("IntersectionObserver" in window) {
      var current = null;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) current = en.target.id;
        });
        if (current) setActive(current);
      }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
      ids.forEach(function (id) { io.observe(map[id].el); });
    } else {
      window.addEventListener("scroll", function () {
        var y = window.scrollY + 120;
        var best = null;
        ids.forEach(function (id) {
          if (map[id].el.offsetTop <= y) best = id;
        });
        setActive(best);
      }, { passive: true });
    }
  }

  /* —— Relation chart —— */
  function initRelChartLegacy() {
    var data = parseJson("rel-data");
    var host = document.querySelector(".rel-chart");
    if (!data || !host || !data.nodes || !data.edges) return;

    var groups = data.groups || [];
    var groupOrder = groups.map(function (g) { return g.id; });
    var groupLabel = {};
    groups.forEach(function (g) { groupLabel[g.id] = g.label || g.id; });

    var byGroup = {};
    groupOrder.forEach(function (gid) { byGroup[gid] = []; });
    data.nodes.forEach(function (n) {
      if (!byGroup[n.group]) {
        byGroup[n.group] = [];
        if (groupOrder.indexOf(n.group) < 0) groupOrder.push(n.group);
        if (!groupLabel[n.group]) groupLabel[n.group] = n.group;
      }
      byGroup[n.group].push(n);
    });

    var colW = 168;
    var topPad = 100;
    var bottomPad = 100;
    var nodeGap = 112;
    var radius = 24;
    var maxRows = 1;
    groupOrder.forEach(function (gid) {
      maxRows = Math.max(maxRows, (byGroup[gid] || []).length);
    });
    var width = Math.max(960, groupOrder.length * colW + 80);
    var height = topPad + maxRows * nodeGap + bottomPad;
    var bandTop = topPad - 8;
    var bandBot = height - bottomPad + 8;

    var pos = {};
    var colIndex = {};
    groupOrder.forEach(function (gid, ci) {
      colIndex[gid] = ci;
      var list = byGroup[gid] || [];
      var x = 50 + ci * colW + colW / 2;
      list.forEach(function (n, ri) {
        pos[n.id] = { x: x, y: topPad + 28 + ri * nodeGap, n: n, r: radius, col: ci, row: ri };
      });
    });

    var usedTypes = {};
    data.edges.forEach(function (e) {
      if (REL_TYPES[e.type]) usedTypes[e.type] = true;
    });

    var legend = document.createElement("div");
    legend.className = "rel-legend";
    Object.keys(REL_TYPES).forEach(function (t) {
      if (!usedTypes[t]) return;
      var meta = REL_TYPES[t];
      var span = document.createElement("span");
      span.innerHTML = '<i style="border-top-color:' + meta.color +
        (meta.dash ? ';border-top-style:dashed' : '') + '"></i>' + escapeHtml(meta.label);
      legend.appendChild(span);
    });

    var wrap = document.createElement("div");
    wrap.className = "sc-chart-scroll";
    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
    svg.setAttribute("width", String(width));
    svg.setAttribute("height", String(height));
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "人間関係の相関図");

    groupOrder.forEach(function (gid, ci) {
      var tx = document.createElementNS(svgNS, "text");
      tx.setAttribute("x", String(50 + ci * colW + colW / 2));
      tx.setAttribute("y", "22");
      tx.setAttribute("text-anchor", "middle");
      tx.setAttribute("class", "rel-col-lab");
      tx.textContent = groupLabel[gid];
      svg.appendChild(tx);
    });

    var edgeLayer = document.createElementNS(svgNS, "g");
    svg.appendChild(edgeLayer);
    var labelLayer = document.createElementNS(svgNS, "g");
    svg.appendChild(labelLayer);
    var nodeLayer = document.createElementNS(svgNS, "g");
    svg.appendChild(nodeLayer);

    function edgePoint(p, towardX, towardY) {
      var dx = towardX - p.x;
      var dy = towardY - p.y;
      var dist = Math.sqrt(dx * dx + dy * dy) || 1;
      var pad = p.r + 3;
      return { x: p.x + (dx / dist) * pad, y: p.y + (dy / dist) * pad };
    }

    var edgeEls = [];
    var labelBoxes = [];
    var laneTop = 0;
    var laneBot = 0;
    var laneSide = {};

    data.edges.forEach(function (e, idx) {
      var a = pos[e.from];
      var b = pos[e.to];
      if (!a || !b) return;
      var meta = REL_TYPES[e.type] || REL_TYPES.ally;

      var p1, p2, d, mid;
      var sameCol = a.col === b.col;

      if (sameCol) {
        var key = "c" + a.col;
        laneSide[key] = (laneSide[key] || 0) + 1;
        var side = (a.col === 0 ? 1 : -1) * (48 + laneSide[key] * 18);
        var sx = a.x + side;
        var sy = (a.y + b.y) / 2;
        p1 = edgePoint(a, sx, sy);
        p2 = edgePoint(b, sx, sy);
        d = "M " + p1.x + " " + p1.y + " Q " + sx + " " + sy + " " + p2.x + " " + p2.y;
        mid = { x: sx, y: sy };
      } else {
        // Route via top or bottom clear band with quadratic Bezier
        var useTop = (idx % 2 === 0);
        var lane;
        if (useTop) {
          laneTop += 1;
          lane = bandTop - 18 - (laneTop % 5) * 12;
        } else {
          laneBot += 1;
          lane = bandBot + 18 + (laneBot % 5) * 12;
        }
        lane = Math.max(28, Math.min(height - 28, lane));
        var cx = (a.x + b.x) / 2;
        p1 = edgePoint(a, cx, lane);
        p2 = edgePoint(b, cx, lane);
        d = "M " + p1.x + " " + p1.y + " Q " + cx + " " + lane + " " + p2.x + " " + p2.y;
        mid = { x: cx, y: 0.25 * p1.y + 0.5 * lane + 0.25 * p2.y };
      }

      var path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", d);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", meta.color);
      path.setAttribute("stroke-width", e.type === "underworld" ? "2.2" : "1.6");
      if (meta.dash) path.setAttribute("stroke-dasharray", meta.dash);
      path.setAttribute("class", "rel-edge");
      path.dataset.from = e.from;
      path.dataset.to = e.to;
      edgeLayer.appendChild(path);

      var label = e.label || "";
      var tw = Math.min(108, Math.max(32, 8 + label.length * 10));
      var th = 15;
      var lx = mid.x - tw / 2;
      var ly = mid.y - th / 2 - (sameCol ? 0 : 2);
      var attempts = 0;
      var dirs = [[0,0],[0,-12],[0,12],[14,0],[-14,0],[18,-10],[-18,-10],[0,-22],[0,22],[28,0],[-28,0]];
      for (; attempts < dirs.length; attempts++) {
        var tx = Math.max(4, Math.min(width - tw - 4, lx + dirs[attempts][0]));
        var ty = Math.max(24, Math.min(height - th - 4, ly + dirs[attempts][1]));
        var hit = false;
        Object.keys(pos).forEach(function (pid) {
          var p = pos[pid];
          var cx = Math.max(tx, Math.min(tx + tw, p.x));
          var cy = Math.max(ty, Math.min(ty + th, p.y));
          if ((cx - p.x) * (cx - p.x) + (cy - p.y) * (cy - p.y) < (p.r + 8) * (p.r + 8)) hit = true;
        });
        labelBoxes.forEach(function (box) {
          if (!(tx + tw + 3 < box.x || box.x + box.w + 3 < tx || ty + th + 3 < box.y || box.y + box.h + 3 < ty)) hit = true;
        });
        if (!hit) { lx = tx; ly = ty; break; }
      }
      labelBoxes.push({ x: lx, y: ly, w: tw, h: th });

      var g = document.createElementNS(svgNS, "g");
      g.setAttribute("class", "rel-edge-label");
      g.dataset.from = e.from;
      g.dataset.to = e.to;
      var rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("x", String(lx));
      rect.setAttribute("y", String(ly));
      rect.setAttribute("width", String(tw));
      rect.setAttribute("height", String(th));
      rect.setAttribute("rx", "2");
      rect.setAttribute("fill", "#FBFAF7");
      rect.setAttribute("stroke", meta.color);
      rect.setAttribute("stroke-width", "0.8");
      g.appendChild(rect);
      var text = document.createElementNS(svgNS, "text");
      text.setAttribute("x", String(lx + tw / 2));
      text.setAttribute("y", String(ly + 11));
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("class", "rel-edge-lab");
      text.setAttribute("fill", meta.color);
      text.textContent = label.length > 9 ? label.slice(0, 8) + "…" : label;
      g.appendChild(text);
      labelLayer.appendChild(g);
      edgeEls.push({ path: path, label: g, from: e.from, to: e.to });
    });

    data.nodes.forEach(function (n) {
      var p = pos[n.id];
      if (!p) return;
      var g = document.createElementNS(svgNS, "g");
      g.setAttribute("class", "rel-node");
      g.dataset.id = n.id;
      g.style.cursor = "pointer";

      var circ = document.createElementNS(svgNS, "circle");
      circ.setAttribute("cx", String(p.x));
      circ.setAttribute("cy", String(p.y));
      circ.setAttribute("r", String(radius));
      circ.setAttribute("fill", "#EDF1F6");
      circ.setAttribute("stroke", "#1E3A5F");
      circ.setAttribute("stroke-width", "1.5");
      g.appendChild(circ);

      if (n.photo) {
        var clipId = "clip-" + n.id;
        var defs = svg.querySelector("defs") || (function () {
          var d = document.createElementNS(svgNS, "defs");
          svg.insertBefore(d, svg.firstChild);
          return d;
        })();
        var clip = document.createElementNS(svgNS, "clipPath");
        clip.setAttribute("id", clipId);
        var cc = document.createElementNS(svgNS, "circle");
        cc.setAttribute("cx", String(p.x));
        cc.setAttribute("cy", String(p.y));
        cc.setAttribute("r", String(radius - 1));
        clip.appendChild(cc);
        defs.appendChild(clip);
        var img = document.createElementNS(svgNS, "image");
        img.setAttributeNS("http://www.w3.org/1999/xlink", "href", n.photo);
        img.setAttribute("href", n.photo);
        img.setAttribute("x", String(p.x - radius + 1));
        img.setAttribute("y", String(p.y - radius + 1));
        img.setAttribute("width", String((radius - 1) * 2));
        img.setAttribute("height", String((radius - 1) * 2));
        img.setAttribute("preserveAspectRatio", "xMidYMid slice");
        img.setAttribute("clip-path", "url(#" + clipId + ")");
        g.appendChild(img);
      } else {
        var ini = document.createElementNS(svgNS, "text");
        ini.setAttribute("x", String(p.x));
        ini.setAttribute("y", String(p.y + 5));
        ini.setAttribute("text-anchor", "middle");
        ini.setAttribute("class", "rel-ini");
        ini.textContent = (n.name || "?").charAt(0);
        g.appendChild(ini);
      }

      var name = document.createElementNS(svgNS, "text");
      name.setAttribute("x", String(p.x));
      name.setAttribute("y", String(p.y + radius + 16));
      name.setAttribute("text-anchor", "middle");
      name.setAttribute("class", "rel-name");
      name.textContent = n.name || "";
      g.appendChild(name);
      if (n.role) {
        var role = document.createElementNS(svgNS, "text");
        role.setAttribute("x", String(p.x));
        role.setAttribute("y", String(p.y + radius + 30));
        role.setAttribute("text-anchor", "middle");
        role.setAttribute("class", "rel-role");
        role.textContent = n.role.length > 12 ? n.role.slice(0, 11) + "…" : n.role;
        g.appendChild(role);
      }

      function highlight(on) {
        edgeEls.forEach(function (ed) {
          var match = ed.from === n.id || ed.to === n.id;
          ed.path.style.opacity = on ? (match ? "1" : "0.1") : "1";
          ed.label.style.opacity = on ? (match ? "1" : "0.12") : "1";
        });
        nodeLayer.querySelectorAll(".rel-node").forEach(function (ng) {
          var id = ng.dataset.id;
          var connected = id === n.id;
          if (on) {
            edgeEls.forEach(function (ed) {
              if ((ed.from === n.id || ed.to === n.id) && (ed.from === id || ed.to === id)) connected = true;
            });
          }
          ng.style.opacity = on ? (connected ? "1" : "0.22") : "1";
        });
      }
      g.addEventListener("mouseenter", function () { highlight(true); });
      g.addEventListener("mouseleave", function () { highlight(false); });
      g.addEventListener("click", function () {
        var active = g.classList.toggle("is-focus");
        nodeLayer.querySelectorAll(".rel-node").forEach(function (ng) {
          if (ng !== g) ng.classList.remove("is-focus");
        });
        highlight(active);
      });
      nodeLayer.appendChild(g);
    });

    wrap.appendChild(svg);
    host.innerHTML = "";
    host.appendChild(legend);
    host.appendChild(wrap);
  }

  function loadVisNetwork(done) {
    if (window.vis && window.vis.Network) { done(); return; }
    var existing = document.querySelector('script[data-scandal-vis-network]');
    if (existing) {
      existing.addEventListener("load", function () { done(); }, { once: true });
      existing.addEventListener("error", function () { done(new Error("vis-network load failed")); }, { once: true });
      return;
    }
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/vis-network@9.1.9/standalone/umd/vis-network.min.js";
    script.async = true;
    script.dataset.scandalVisNetwork = "true";
    script.onload = function () { done(); };
    script.onerror = function () { done(new Error("vis-network load failed")); };
    document.head.appendChild(script);
  }

  function showRelFallback(host, data) {
    var names = {};
    (data.nodes || []).forEach(function (n) { names[n.id] = n.name || n.id; });
    var box = document.createElement("div");
    box.className = "rel-fallback";
    var title = document.createElement("p");
    title.textContent = "相関図を読み込めませんでした。関係一覧を表示します。";
    box.appendChild(title);
    var list = document.createElement("ul");
    (data.edges || []).forEach(function (e) {
      var li = document.createElement("li");
      var meta = REL_TYPES[e.type] || REL_TYPES.ally;
      li.textContent = (names[e.from] || e.from) + " — " + (names[e.to] || e.to) + "：" + meta.label + (e.label ? "（" + e.label + "）" : "");
      list.appendChild(li);
    });
    box.appendChild(list);
    host.innerHTML = "";
    host.appendChild(box);
  }

  function initRelChart() {
    var data = parseJson("rel-data");
    var host = document.querySelector(".rel-chart");
    if (!data || !host || !Array.isArray(data.nodes) || !Array.isArray(data.edges)) return;
    loadVisNetwork(function (err) {
      if (err || !window.vis || !window.vis.Network) { showRelFallback(host, data); return; }
      var groupColors = ["#1E3A5F", "#8B1E1E", "#2E6B4F", "#5A4A8A", "#8A5A6A", "#8A6A3A"];
      var groupMap = {};
      var legend = document.createElement("div");
      legend.className = "rel-legend";
      (data.groups || []).forEach(function (group, index) {
        var color = groupColors[index % groupColors.length];
        groupMap[group.id] = { label: group.label || group.id, color: color };
        var span = document.createElement("span");
        span.innerHTML = '<i class="rel-legend-dot" style="background:' + color + '"></i>' + escapeHtml(group.label || group.id);
        legend.appendChild(span);
      });
      var usedTypes = {};
      data.edges.forEach(function (e) { if (REL_TYPES[e.type]) usedTypes[e.type] = true; });
      Object.keys(REL_TYPES).forEach(function (type) {
        if (!usedTypes[type]) return;
        var meta = REL_TYPES[type];
        var span = document.createElement("span");
        span.innerHTML = '<i style="border-top-color:' + meta.color + (meta.dash ? ';border-top-style:dashed' : '') + '"></i>' + escapeHtml(meta.label);
        legend.appendChild(span);
      });
      var chart = document.createElement("div");
      chart.className = "rel-network";
      chart.setAttribute("role", "img");
      chart.setAttribute("aria-label", "人間関係の相関図");
      host.innerHTML = "";
      host.appendChild(legend);
      host.appendChild(chart);

      var nodes = new vis.DataSet(data.nodes.map(function (n, index) {
        var group = groupMap[n.group] || { color: groupColors[index % groupColors.length] };
        var item = {
          id: n.id,
          label: (n.name || "?") + (n.role ? "\n" + n.role : ""),
          group: n.group,
          shape: n.photo ? "circularImage" : "circle",
          image: n.photo || undefined,
          color: { background: "#F7F5F0", border: group.color, highlight: { background: "#FFF8C9", border: group.color } },
          borderWidth: 2,
          size: 28,
          font: { face: "Hiragino Sans, Noto Sans JP, sans-serif", size: 14, color: "#1A1A1A", multi: "md", vadjust: 3 },
          margin: 10,
          shapeProperties: { useBorderWithImage: true }
        };
        return item;
      }));
      var edges = new vis.DataSet(data.edges.map(function (e, index) {
        var meta = REL_TYPES[e.type] || REL_TYPES.ally;
        return {
          id: e.id || "edge-" + index,
          from: e.from,
          to: e.to,
          label: e.label || "",
          color: { color: meta.color, highlight: "#111111", opacity: 0.9 },
          dashes: e.type === "underworld",
          width: e.type === "underworld" ? 2.5 : 1.8,
          font: { face: "Hiragino Sans, Noto Sans JP, sans-serif", size: 12, color: meta.color, background: "#FBFAF7", strokeWidth: 0, align: "horizontal" },
          smooth: { enabled: true, type: "continuous", roundness: 0.35 }
        };
      }));
      var edgeMeta = {};
      data.edges.forEach(function (e, index) { edgeMeta[e.id || "edge-" + index] = REL_TYPES[e.type] || REL_TYPES.ally; });
      var network = new vis.Network(chart, { nodes: nodes, edges: edges }, {
        autoResize: true,
        height: "640px",
        interaction: { hover: true, navigationButtons: false, keyboard: true, dragNodes: true, zoomView: true },
        physics: { enabled: true, solver: "barnesHut", barnesHut: { gravitationalConstant: -5200, centralGravity: 0.08, springLength: 220, springConstant: 0.025, damping: 0.18, avoidOverlap: 0.8 }, stabilization: { enabled: true, iterations: 800, updateInterval: 50, fit: true } },
        nodes: { shape: "circle" },
        edges: { selectionWidth: 3, hoverWidth: 2.5 }
      });
      network.once("stabilizationIterationsDone", function () {
        network.setOptions({ physics: { enabled: false } });
        network.fit({ animation: false });
        // fit() can make the canvas text smaller than its readable size. Keep
        // the minimum scale at which 14px node labels remain at least 11px.
        var minScale = 11 / 14;
        if (network.getScale() < minScale) {
          network.moveTo({ position: network.getViewPosition(), scale: minScale, animation: false });
        }
      });
      network.on("zoom", function (params) {
        var minScale = 11 / 14;
        if (params && typeof params.scale === "number" && params.scale < minScale) {
          network.moveTo({ position: network.getViewPosition(), scale: minScale, animation: false });
        }
      });
      network.on("selectNode", function (params) {
        if (!params.nodes.length) return;
        var id = params.nodes[0];
        edges.forEach(function (edge) {
          var active = edge.from === id || edge.to === id;
          edges.update({ id: edge.id, color: { color: edgeMeta[edge.id].color, opacity: active ? 1 : 0.12 } });
        });
      });
      network.on("deselectNode", function () { edges.forEach(function (edge) { edges.update({ id: edge.id, color: { color: edgeMeta[edge.id].color, opacity: 0.9 } }); }); });
    });
  }

  /* —— Scheme chart —— */
  /* legacy scheme renderer (removed)
    var data = parseJson("scheme-data");
    var host = document.querySelector(".scheme-chart");
    if (!data || !host || !data.nodes) return;

    var colGap = 280;
    var rowGap = 110;
    var boxW = 150;
    var boxH = 52;
    var padX = 40;
    var padY = 36;

    var maxCol = 0;
    var maxRow = 0;
    var pos = {};
    data.nodes.forEach(function (n) {
      maxCol = Math.max(maxCol, n.col || 0);
      maxRow = Math.max(maxRow, n.row || 0);
    });
    data.nodes.forEach(function (n) {
      var x = padX + (n.col || 0) * colGap;
      var y = padY + (n.row || 0) * rowGap;
      pos[n.id] = { x: x, y: y, w: boxW, h: boxH, n: n };
    });

    var width = Math.max(900, padX * 2 + maxCol * colGap + boxW);
    var height = padY * 2 + maxRow * rowGap + boxH + 40;

    var wrap = document.createElement("div");
    wrap.className = "sc-chart-scroll";
    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
    svg.setAttribute("width", String(width));
    svg.setAttribute("height", String(height));
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "スキーム図解");
    svg.classList.add("scheme-svg");

    var defs = document.createElementNS(svgNS, "defs");
    Object.keys(FLOW_KIND).forEach(function (k) {
      var m = document.createElementNS(svgNS, "marker");
      m.setAttribute("id", "arr-" + k);
      m.setAttribute("markerWidth", "8");
      m.setAttribute("markerHeight", "8");
      m.setAttribute("refX", "6");
      m.setAttribute("refY", "3");
      m.setAttribute("orient", "auto");
      var p = document.createElementNS(svgNS, "path");
      p.setAttribute("d", "M0,0 L6,3 L0,6 Z");
      p.setAttribute("fill", FLOW_KIND[k]);
      m.appendChild(p);
      defs.appendChild(m);
    });
    svg.appendChild(defs);

    var pairCount = {};
    (data.flows || []).forEach(function (f) {
      var key = f.from + "->" + f.to;
      pairCount[key] = (pairCount[key] || 0) + 1;
    });
    var pairSeen = {};

    (data.flows || []).forEach(function (f) {
      var a = pos[f.from];
      var b = pos[f.to];
      if (!a || !b) return;
      var key = f.from + "->" + f.to;
      var total = pairCount[key] || 1;
      var seen = pairSeen[key] || 0;
      pairSeen[key] = seen + 1;
      var offset = (seen - (total - 1) / 2) * 14;

      var color = FLOW_KIND[f.kind] || FLOW_KIND.money;
      var ax = a.x + a.w;
      var ay = a.y + a.h / 2 + offset;
      var bx = b.x;
      var by = b.y + b.h / 2 + offset;
      var midX;

      var d;
      if (Math.abs((a.row || a.n.row) - (b.n.row)) < 0.1 && b.n.col > a.n.col) {
        midX = (ax + bx) / 2;
        d = "M " + ax + " " + ay + " H " + midX + " V " + by + " H " + bx;
      } else if (b.n.col === a.n.col) {
        var startY = a.y + a.h;
        var endY = b.y;
        var side = a.x + a.w + 24 + offset;
        d = "M " + (a.x + a.w / 2) + " " + startY + " V " + (startY + 12) +
          " H " + side + " V " + (endY - 12) + " H " + (b.x + b.w / 2) + " V " + endY;
        ax = a.x + a.w / 2;
        ay = startY;
        bx = b.x + b.w / 2;
        by = endY;
        midX = side;
      } else if (b.n.col < a.n.col) {
        midX = (a.x + b.x + b.w) / 2;
        ax = a.x;
        bx = b.x + b.w;
        d = "M " + ax + " " + ay + " H " + midX + " V " + by + " H " + bx;
      } else {
        midX = (ax + bx) / 2;
        d = "M " + ax + " " + ay + " H " + midX + " V " + by + " H " + bx;
      }

      var path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", d);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", color);
      path.setAttribute("stroke-width", "1.7");
      path.setAttribute("marker-end", "url(#arr-" + (f.kind || "money") + ")");
      svg.appendChild(path);

      var lx = midX != null ? midX : (ax + bx) / 2;
      var ly = (ay + by) / 2 - 18 + offset * 0.3;
      var lab = (f.label || "");
      var when = f.when || "";
      var tw = Math.max(80, Math.min(160, lab.length * 11 + 12));
      var rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("x", String(lx - tw / 2));
      rect.setAttribute("y", String(ly));
      rect.setAttribute("width", String(tw));
      rect.setAttribute("height", when ? "30" : "18");
      rect.setAttribute("fill", "#FBFAF7");
      rect.setAttribute("stroke", color);
      rect.setAttribute("stroke-width", "0.7");
      svg.appendChild(rect);
      var t1 = document.createElementNS(svgNS, "text");
      t1.setAttribute("x", String(lx));
      t1.setAttribute("y", String(ly + 13));
      t1.setAttribute("text-anchor", "middle");
      t1.setAttribute("class", "scheme-flow-lab");
      t1.setAttribute("fill", color);
      t1.textContent = lab.length > 14 ? lab.slice(0, 13) + "…" : lab;
      svg.appendChild(t1);
      if (when) {
        var t2 = document.createElementNS(svgNS, "text");
        t2.setAttribute("x", String(lx));
        t2.setAttribute("y", String(ly + 25));
        t2.setAttribute("text-anchor", "middle");
        t2.setAttribute("class", "scheme-flow-when");
        t2.textContent = when;
        svg.appendChild(t2);
      }
    });

    data.nodes.forEach(function (n) {
      var p = pos[n.id];
      var sk = SCHEME_KIND[n.kind] || SCHEME_KIND.company;
      var rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("x", String(p.x));
      rect.setAttribute("y", String(p.y));
      rect.setAttribute("width", String(p.w));
      rect.setAttribute("height", String(p.h));
      rect.setAttribute("rx", n.kind === "person" ? "18" : "2");
      rect.setAttribute("fill", sk.fill);
      rect.setAttribute("stroke", sk.stroke);
      rect.setAttribute("stroke-width", "1.5");
      svg.appendChild(rect);

      var t1 = document.createElementNS(svgNS, "text");
      t1.setAttribute("x", String(p.x + p.w / 2));
      t1.setAttribute("y", String(p.y + (n.sub ? 22 : 30)));
      t1.setAttribute("text-anchor", "middle");
      t1.setAttribute("class", "scheme-lab");
      t1.textContent = n.label || "";
      svg.appendChild(t1);
      if (n.sub) {
        var t2 = document.createElementNS(svgNS, "text");
        t2.setAttribute("x", String(p.x + p.w / 2));
        t2.setAttribute("y", String(p.y + 40));
        t2.setAttribute("text-anchor", "middle");
        t2.setAttribute("class", "scheme-lab-s");
        t2.textContent = n.sub.length > 16 ? n.sub.slice(0, 15) + "…" : n.sub;
        svg.appendChild(t2);
      }
    });

    wrap.appendChild(svg);
    host.innerHTML = "";
    host.appendChild(wrap);

    if (data.notes && data.notes.length) {
      data.notes.forEach(function (note) {
        var p = document.createElement("p");
        p.className = "sc-svg-note";
        p.textContent = note;
        host.appendChild(p);
      });
    }
  }

  function initSchemeChart() {
    var data = parseJson("scheme-data");
    var host = document.querySelector(".scheme-chart");
    if (!data || !host || !Array.isArray(data.nodes)) return;
    var svgNS = "http://www.w3.org/2000/svg";
    var pad = 28;
    var rowGap = 42;
    var colWidths = {};
    var colRows = {};
    var maxCol = 0;
    function textWidth(text) { return String(text || "").split("").reduce(function (sum, ch) { return sum + (/[ -~]/.test(ch) ? 8 : 14); }, 0); }
    function wrapText(text, maxWidth) {
      var lines = [], line = "";
      String(text || "").split("").forEach(function (ch) {
        if (line && textWidth(line + ch) > maxWidth) { lines.push(line); line = ""; }
        line += ch;
      });
      if (line || !lines.length) lines.push(line);
      return lines;
    }
    data.nodes.forEach(function (n) {
      var col = Number(n.col) || 0;
      maxCol = Math.max(maxCol, col);
      var lines = wrapText(n.label || "", 150);
      var subLines = n.sub ? wrapText(n.sub, 150) : [];
      var w = Math.min(180, Math.max(112, Math.max.apply(null, lines.concat(subLines).map(textWidth)) + 24));
      var h = 18 + lines.length * 17 + (subLines.length ? subLines.length * 15 + 8 : 0);
      n._lines = lines; n._subLines = subLines; n._w = w; n._h = Math.max(52, h);
      colWidths[col] = Math.max(colWidths[col] || 0, w);
      (colRows[col] || (colRows[col] = {}))[n.row || 0] = Math.max((colRows[col] || {})[n.row || 0] || 0, n._h);
    });
    var nodeById = {};
    data.nodes.forEach(function (n) { nodeById[n.id] = n; });
    var colGaps = {};
    (data.flows || []).forEach(function (f) {
      var from = nodeById[f.from], to = nodeById[f.to];
      if (!from || !to) return;
      var fromCol = Number(from.col) || 0, toCol = Number(to.col) || 0;
      var gapCol = Math.min(fromCol, toCol);
      if (fromCol === toCol) gapCol = fromCol;
      var labelWidth = Math.min(168, Math.max(70, textWidth(f.label || "") + 12));
      colGaps[gapCol] = Math.max(colGaps[gapCol] || 40, labelWidth + 40);
    });
    var colX = [], x = pad;
    for (var ci = 0; ci <= maxCol; ci++) {
      colX[ci] = x;
      if (ci < maxCol) x += (colWidths[ci] || 140) + (colGaps[ci] || 40);
    }
    var pos = {}, maxY = 0;
    data.nodes.forEach(function (n) {
      var col = Number(n.col) || 0, row = Number(n.row) || 0, y = pad;
      for (var ri = 0; ri < row; ri++) y += (colRows[col] && colRows[col][ri] || 52) + rowGap;
      pos[n.id] = { x: colX[col], y: y, w: n._w, h: n._h, n: n };
      maxY = Math.max(maxY, y + n._h);
    });
    var width = (colX[maxCol] || pad) + (colWidths[maxCol] || 140) + pad;
    var height = maxY + pad;
    var wrap = document.createElement("div"); wrap.className = "sc-chart-scroll";
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 " + width + " " + height); svg.setAttribute("width", String(width)); svg.setAttribute("height", String(height));
    svg.style.width = width + "px";
    svg.style.minWidth = width + "px";
    svg.style.maxWidth = "none";
    svg.setAttribute("role", "img"); svg.setAttribute("aria-label", "スキーム図解"); svg.classList.add("scheme-svg");
    var defs = document.createElementNS(svgNS, "defs");
    Object.keys(FLOW_KIND).forEach(function (k) { var m = document.createElementNS(svgNS, "marker"); m.id = "arr-v3-" + k; m.setAttribute("markerWidth", "8"); m.setAttribute("markerHeight", "8"); m.setAttribute("refX", "6"); m.setAttribute("refY", "3"); m.setAttribute("orient", "auto"); var p = document.createElementNS(svgNS, "path"); p.setAttribute("d", "M0,0 L6,3 L0,6 Z"); p.setAttribute("fill", FLOW_KIND[k]); m.appendChild(p); defs.appendChild(m); });
    svg.appendChild(defs);
    (data.flows || []).forEach(function (f) {
      var a = pos[f.from], b = pos[f.to]; if (!a || !b) return;
      var color = FLOW_KIND[f.kind] || FLOW_KIND.money, sameCol = a.n.col === b.n.col, fromRight = b.x >= a.x;
      var ax = fromRight ? a.x + a.w : a.x, bx = fromRight ? b.x : b.x + b.w, ay = a.y + a.h / 2, by = b.y + b.h / 2;
      var midX = (ax + bx) / 2, labelX = midX, labelY;
      var d;
      if (sameCol) {
        var sideX = a.x + a.w + 16;
        d = "M " + (a.x + a.w / 2) + " " + (a.y + a.h) + " V " + (a.y + a.h + 12) +
          " H " + sideX + " V " + (b.y - 12) + " H " + (b.x + b.w / 2) + " V " + b.y;
        labelX = sideX;
        labelY = a.y + a.h + 18;
      } else {
        d = "M " + ax + " " + ay + " H " + midX + " V " + by + " H " + bx;
        labelY = Math.min(ay, by) + Math.abs(by - ay) / 2;
      }
      var path = document.createElementNS(svgNS, "path"); path.setAttribute("d", d); path.setAttribute("fill", "none"); path.setAttribute("stroke", color); path.setAttribute("stroke-width", "1.7"); path.setAttribute("marker-end", "url(#arr-v3-" + (f.kind || "money") + ")"); svg.appendChild(path);
      var lab = f.label || "", lines = wrapText(lab, 150), when = f.when || "", lh = 14, boxH = lines.length * lh + (when ? 14 : 6), boxW = Math.min(168, Math.max(70, Math.max.apply(null, lines.map(textWidth)) + 12));
      var ly = sameCol ? labelY : labelY - boxH / 2 - 5;
      var lx = sameCol ? labelX + boxW / 2 + 8 : labelX;
      var rect = document.createElementNS(svgNS, "rect"); rect.setAttribute("x", lx - boxW / 2); rect.setAttribute("y", ly); rect.setAttribute("width", boxW); rect.setAttribute("height", boxH); rect.setAttribute("fill", "#FBFAF7"); rect.setAttribute("stroke", color); rect.setAttribute("stroke-width", "0.7"); svg.appendChild(rect);
      lines.forEach(function (line, i) { var t = document.createElementNS(svgNS, "text"); t.setAttribute("x", lx); t.setAttribute("y", ly + 13 + i * lh); t.setAttribute("text-anchor", "middle"); t.setAttribute("class", "scheme-flow-lab"); t.setAttribute("fill", color); t.textContent = line; svg.appendChild(t); });
      if (when) { var wt = document.createElementNS(svgNS, "text"); wt.setAttribute("x", lx); wt.setAttribute("y", ly + lines.length * lh + 10); wt.setAttribute("text-anchor", "middle"); wt.setAttribute("class", "scheme-flow-when"); wt.textContent = when; svg.appendChild(wt); }
    });
    data.nodes.forEach(function (n) {
      var p = pos[n.id], sk = SCHEME_KIND[n.kind] || SCHEME_KIND.company, rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("x", p.x); rect.setAttribute("y", p.y); rect.setAttribute("width", p.w); rect.setAttribute("height", p.h); rect.setAttribute("rx", n.kind === "person" ? "18" : "2"); rect.setAttribute("fill", sk.fill); rect.setAttribute("stroke", sk.stroke); rect.setAttribute("stroke-width", "1.5"); svg.appendChild(rect);
      var all = p.n._lines.concat(p.n._subLines), start = p.y + p.h / 2 - (all.length - 1) * 8;
      all.forEach(function (line, i) { var t = document.createElementNS(svgNS, "text"); t.setAttribute("x", p.x + p.w / 2); t.setAttribute("y", start + i * 16); t.setAttribute("text-anchor", "middle"); t.setAttribute("class", i < p.n._lines.length ? "scheme-lab" : "scheme-lab-s"); t.textContent = line; svg.appendChild(t); });
    });
    wrap.appendChild(svg); host.innerHTML = ""; host.appendChild(wrap);
    wrap.style.width = "100%";
    wrap.style.maxWidth = "100%";
    var available = Math.max(1, host.clientWidth - 2);
    var scale = width > available ? available / width : 1;
    // On a desktop chart canvas, keep the complete diagram in the initial
    // view; narrow screens retain the horizontal scroller when readability
    // would require going below the 0.7 scale floor.
    if (scale >= 0.7 || available >= 700) {
      svg.style.width = (width * scale) + "px";
      svg.style.minWidth = "0";
      svg.style.height = (height * scale) + "px";
    } else {
      svg.style.width = width + "px";
      svg.style.minWidth = width + "px";
      svg.style.height = height + "px";
    }
    (data.notes || []).forEach(function (note) { var p = document.createElement("p"); p.className = "sc-svg-note"; p.textContent = note; host.appendChild(p); });
  }

  */

  function schemeTextWidth(text) { return String(text || "").split("").reduce(function (s, c) { return s + (/[ -~]/.test(c) ? 7 : 12); }, 0); }
  function schemeWrap(text, width) { var out = [], line = ""; String(text || "").split("").forEach(function (c) { if (line && schemeTextWidth(line + c) > width) { out.push(line); line = ""; } line += c; }); if (line || !out.length) out.push(line); return out; }
  function schemeResolve(data) {
    var nodes = (data.nodes || []).map(function (n) { return Object.assign({}, n); }), ids = {}, labels = {};
    nodes.forEach(function (n) { ids[String(n.id)] = n; labels[String(n.label)] = n; });
    (data.flows || []).forEach(function (f) { ["from", "to"].forEach(function (side) { var key = String(f[side] == null ? "" : f[side]), n = ids[key] || labels[key]; if (!n) { n = { id: "implicit-" + side + "-" + key, label: key, sub: "", kind: "company", col: 999999, row: nodes.length }; nodes.push(n); ids[n.id] = n; labels[key] = n; } f[side + "Node"] = n; }); });
    return nodes;
  }
  function schemeLayout(data, displayWidth) {
    var nodes = schemeResolve(data), flows = data.flows || [], narrow = displayWidth < 720 || (displayWidth - 40) / Math.max(1, nodes.length) < 92;
    nodes.sort(function (a, b) { return (Number(a.col) || 0) - (Number(b.col) || 0) || (Number(a.row) || 0) - (Number(b.row) || 0); });
    var laneW = Math.max(118, (displayWidth - 60) / Math.max(1, nodes.length)), maxHeader = 52;
    nodes.forEach(function (n) { n._labelLines = schemeWrap(n.label || "", Math.max(90, laneW - 20)); n._subLines = n.sub ? schemeWrap(n.sub, Math.max(90, laneW - 20)) : []; n._headerH = Math.max(52, 20 + n._labelLines.length * 15 + (n._subLines.length ? n._subLines.length * 13 + 4 : 0)); maxHeader = Math.max(maxHeader, n._headerH); });
    var rows = [], y = maxHeader + 28; flows.forEach(function (f) { var distance = Math.abs(nodes.indexOf(f.fromNode) - nodes.indexOf(f.toNode)) * laneW, lines = schemeWrap(f.label || "", f.fromNode === f.toNode ? 170 : Math.max(distance - 8, 150)), h = Math.max(50, 16 + lines.length * 13 + (f.when ? 20 : 8)); rows.push({ y: y, h: h, lines: lines }); y += h; });
    var width = Math.max(displayWidth - 4, 40 + nodes.length * laneW + 16), pos = {}; nodes.forEach(function (n, i) { pos[n.id] = { x: 40 + i * laneW + laneW / 2, n: n }; });
    return { nodes: nodes, flows: flows, narrow: narrow, laneW: laneW, headerH: maxHeader, rows: rows, width: width, height: y + 34, pos: pos };
  }
  function schemeLegend(data) { var seen = {}, result = []; (data.flows || []).forEach(function (f) { var k = FLOW_KIND[f.kind] ? f.kind : "money"; if (!seen[k]) { seen[k] = true; result.push(k); } }); return result; }
  function addSchemeLegend(host, data) { var el = document.createElement("div"); el.className = "scheme-legend"; schemeLegend(data).forEach(function (k) { var s = document.createElement("span"); s.innerHTML = '<i style="border-top-color:' + FLOW_KIND[k] + '"></i>' + escapeHtml(FLOW_LABELS[k]); el.appendChild(s); }); host.appendChild(el); }

  function initSchemeChart() {
    var data = parseJson("scheme-data"), host = document.querySelector(".scheme-chart"); if (!data || !host || !Array.isArray(data.nodes)) return; data = JSON.parse(JSON.stringify(data).replace(/<span><\/span>/g, ""));
    var layout = schemeLayout(data, host.clientWidth || 720); host.innerHTML = "";
    if (layout.narrow) {
      var ol = document.createElement("ol"); ol.className = "scheme-steps";
      layout.flows.forEach(function (f, i) { var kind = FLOW_KIND[f.kind] ? f.kind : "money", li = document.createElement("li"); li.style.setProperty("--flow-color", FLOW_KIND[kind]); li.innerHTML = '<span class="scheme-step-no">' + (i + 1) + '</span><div class="scheme-step-body"><div class="scheme-step-nodes"><span class="scheme-chip" data-kind="' + escapeHtml(f.fromNode.kind || "company") + '">' + escapeHtml(f.fromNode.label || "") + '</span><span class="scheme-step-arrow">→</span><span class="scheme-chip" data-kind="' + escapeHtml(f.toNode.kind || "company") + '">' + escapeHtml(f.toNode.label || "") + '</span></div><div class="scheme-step-label">' + escapeHtml(f.label || "") + '</div>' + (f.when ? '<div class="scheme-step-when">' + escapeHtml(f.when) + '</div>' : "") + '</div>'; ol.appendChild(li); }); host.appendChild(ol); addSchemeLegend(host, data);
    } else renderSchemeSvg(host, data, layout);
    (data.notes || []).forEach(function (note) { var p = document.createElement("p"); p.className = "sc-svg-note"; p.textContent = String(note).replace(/<span><\/span>/g, ""); host.appendChild(p); });
  }
  function renderSchemeSvg(host, data, layout) {
    var ns = "http://www.w3.org/2000/svg", svg = document.createElementNS(ns, "svg"); svg.setAttribute("viewBox", "0 0 " + layout.width + " " + layout.height); svg.setAttribute("width", layout.width); svg.setAttribute("height", layout.height); svg.setAttribute("role", "img"); svg.setAttribute("aria-label", "スキーム図解"); svg.classList.add("scheme-svg");
    var defs = document.createElementNS(ns, "defs"); Object.keys(FLOW_KIND).forEach(function (k) { var m = document.createElementNS(ns, "marker"), p = document.createElementNS(ns, "path"); m.id = "scheme-arr-" + k; m.setAttribute("markerWidth", "8"); m.setAttribute("markerHeight", "8"); m.setAttribute("refX", "6"); m.setAttribute("refY", "3"); m.setAttribute("orient", "auto"); p.setAttribute("d", "M0,0 L6,3 L0,6 Z"); p.setAttribute("fill", FLOW_KIND[k]); m.appendChild(p); defs.appendChild(m); }); svg.appendChild(defs);
    var lanes = {}; layout.nodes.forEach(function (n) { var p = layout.pos[n.id], sk = n.kind === "fraud" ? SCHEME_KIND.fund : (SCHEME_KIND[n.kind] || SCHEME_KIND.company), g = document.createElementNS(ns, "g"), r = document.createElementNS(ns, "rect"); g.classList.add("scheme-lane"); g.dataset.nodeId = n.id; r.setAttribute("x", p.x - layout.laneW / 2 + 4); r.setAttribute("y", 16); r.setAttribute("width", layout.laneW - 8); r.setAttribute("height", layout.headerH); r.setAttribute("rx", n.kind === "person" ? "18" : "2"); r.setAttribute("fill", sk.fill); r.setAttribute("stroke", sk.stroke); r.setAttribute("stroke-width", "1.5"); g.appendChild(r); var all = n._labelLines.concat(n._subLines), start = 16 + layout.headerH / 2 - (all.length - 1) * 7; all.forEach(function (line, i) { var t = document.createElementNS(ns, "text"); t.setAttribute("x", p.x); t.setAttribute("y", start + i * 14); t.setAttribute("text-anchor", "middle"); t.setAttribute("class", i < n._labelLines.length ? "scheme-lab" : "scheme-lab-s"); t.textContent = line; g.appendChild(t); }); var l = document.createElementNS(ns, "line"); l.setAttribute("x1", p.x); l.setAttribute("x2", p.x); l.setAttribute("y1", layout.headerH + 16); l.setAttribute("y2", layout.height - 30); l.setAttribute("stroke", "#D8D4CC"); l.setAttribute("stroke-dasharray", "3 4"); g.appendChild(l); svg.appendChild(g); lanes[n.id] = g; });
    layout.flows.forEach(function (f, i) { var a = layout.pos[f.fromNode.id], b = layout.pos[f.toNode.id], row = layout.rows[i], kind = FLOW_KIND[f.kind] ? f.kind : "money", color = FLOW_KIND[kind], y = row.y + 20, g = document.createElementNS(ns, "g"), path = document.createElementNS(ns, "path"); g.classList.add("scheme-flow"); g.dataset.from = f.fromNode.id; g.dataset.to = f.toNode.id; var c = document.createElementNS(ns, "circle"), n = document.createElementNS(ns, "text"); c.setAttribute("cx", "20"); c.setAttribute("cy", y); c.setAttribute("r", "10"); c.setAttribute("fill", color); n.setAttribute("x", "20"); n.setAttribute("y", y + 4); n.setAttribute("text-anchor", "middle"); n.setAttribute("fill", "#fff"); n.setAttribute("font-size", "10"); n.textContent = i + 1; g.appendChild(c); g.appendChild(n); var same = a.x === b.x, x1 = Math.min(a.x, b.x), x2 = Math.max(a.x, b.x); path.setAttribute("fill", "none"); path.setAttribute("stroke", color); path.setAttribute("stroke-width", "1.8"); path.setAttribute("marker-end", "url(#scheme-arr-" + kind + ")"); path.setAttribute("d", same ? "M " + (a.x + 4) + " " + y + " H " + (a.x + 32) + " V " + (y + 18) + " H " + (a.x + 4) : "M " + a.x + " " + y + " H " + (b.x > a.x ? b.x - 2 : b.x + 2)); g.appendChild(path); if (!same) { var dot = document.createElementNS(ns, "circle"); dot.setAttribute("cx", a.x); dot.setAttribute("cy", y); dot.setAttribute("r", "3"); dot.setAttribute("fill", color); g.appendChild(dot); } var lines = schemeWrap(f.label || "", same ? 170 : Math.max(x2 - x1 - 8, 150)), lx = same ? a.x + 48 : Math.max(52, Math.min(layout.width - 52, (x1 + x2) / 2)), ly = same ? y + 14 : y - 7 - (lines.length - 1) * 6; lines.forEach(function (line, j) { var t = document.createElementNS(ns, "text"); t.setAttribute("x", lx); t.setAttribute("y", ly + j * 13); t.setAttribute("text-anchor", same ? "start" : "middle"); t.setAttribute("class", "scheme-flow-lab"); t.setAttribute("fill", color); t.setAttribute("paint-order", "stroke"); t.setAttribute("stroke", "#fff"); t.setAttribute("stroke-width", "4"); t.textContent = line; g.appendChild(t); }); if (f.when) { var wt = document.createElementNS(ns, "text"); wt.setAttribute("x", lx); wt.setAttribute("y", same ? ly + lines.length * 13 + 2 : y + 17); wt.setAttribute("text-anchor", same ? "start" : "middle"); wt.setAttribute("class", "scheme-flow-when"); wt.textContent = f.when; g.appendChild(wt); } svg.appendChild(g); });
    var wrap = document.createElement("div"); wrap.className = "sc-chart-scroll scheme-scroll"; wrap.appendChild(svg); host.appendChild(wrap); addSchemeLegend(host, data);
    layout.nodes.forEach(function (node) { var lane = lanes[node.id]; lane.style.cursor = "pointer"; function focus() { svg.querySelectorAll(".scheme-lane, .scheme-flow").forEach(function (el) { var active = el.classList.contains("scheme-flow") ? el.dataset.from === node.id || el.dataset.to === node.id : el.dataset.nodeId === node.id; el.style.opacity = active ? "1" : "0.15"; }); } function clear() { svg.querySelectorAll(".scheme-lane, .scheme-flow").forEach(function (el) { el.style.opacity = "1"; }); } lane.addEventListener("mouseenter", focus); lane.addEventListener("mouseleave", clear); lane.addEventListener("click", function (e) { e.stopPropagation(); focus(); }); }); svg.addEventListener("click", function () { svg.querySelectorAll(".scheme-lane, .scheme-flow").forEach(function (el) { el.style.opacity = "1"; }); });
  }
  var schemeResizeTimer; window.addEventListener("resize", function () { clearTimeout(schemeResizeTimer); schemeResizeTimer = setTimeout(initSchemeChart, 200); });

  /* —— Winners / losers chart —— */
  function initWlChart() {
    var data = parseJson("wl-data");
    var host = document.querySelector(".wl-chart");
    if (!data || !host || !Array.isArray(data)) return;
    // Convert a yen amount to 億円 so rows share one scale; other units are left to the table.
    function toOku(v, unit) {
      if (typeof v !== "number" || !(v > 0)) return 0;
      unit = String(unit || "");
      if (/ドル|％|%|件|人|名|年|社|機|株/.test(unit) || unit.indexOf("円") < 0) return 0;
      if (unit.indexOf("兆円") === 0) return v * 10000;
      if (unit.indexOf("億円") === 0) return v;
      if (unit.indexOf("万円") === 0) return v / 10000;
      if (unit === "円") return v / 100000000;
      return 0;
    }
    function fmt(v, unit) { return (typeof v === "number" ? v.toLocaleString("ja-JP") : String(v)) + String(unit || ""); }
    var rows = data.map(function (d) { return { d: d, g: toOku(d.gain, d.unit), l: toOku(d.loss, d.unit) }; })
      .filter(function (r) { return r.g > 0 || r.l > 0; });
    host.innerHTML = "";
    if (!rows.length) { host.style.display = "none"; return; }
    var max = 0; rows.forEach(function (r) { max = Math.max(max, r.g, r.l); });
    var box = document.createElement("div"); box.className = "wl-bars";
    box.innerHTML = '<div class="wl-head"><span></span><span class="wl-h-loss">損をした額</span><span class="wl-h-gain">得をした額</span></div>';
    rows.forEach(function (r) {
      var row = document.createElement("div"); row.className = "wl-row";
      var lw = r.l / max * 100, gw = r.g / max * 100;
      row.innerHTML = '<span class="wl-name">' + escapeHtml(r.d.who || "") + '</span>' +
        '<span class="wl-side wl-loss">' + (r.l ? '<i style="width:' + Math.max(lw, 1.5) + '%"></i><b>' + escapeHtml(fmt(r.d.loss, r.d.unit)) + '</b>' : '') + '</span>' +
        '<span class="wl-side wl-gain">' + (r.g ? '<i style="width:' + Math.max(gw, 1.5) + '%"></i><b>' + escapeHtml(fmt(r.d.gain, r.d.unit)) + '</b>' : '') + '</span>';
      box.appendChild(row);
    });
    host.appendChild(box);
    var note = document.createElement("p"); note.className = "sc-svg-note";
    note.textContent = "棒の長さは円建ての金額だけで比較している。金額が確認できない項目と、円以外の単位の項目は下の表に記載する。";
    host.appendChild(note);
  }

  ready(function () {
    initMap();
    initGenToggle();
    initTocSpy();
    initRelChart();
    initSchemeChart();
    initWlChart();
  });
})();
