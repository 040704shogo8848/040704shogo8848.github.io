/* fitness app UI + storage. Depends on Progress and weight_logic globals. */
(function () {
  "use strict";

  var LS_PREFIX = "fit2_";
  var PHOTO_DB = "fit2_photos";
  var DOW = ["日", "月", "火", "水", "木", "金", "土"];
  var KIND_LABEL = {
    upper: "上半身",
    lower: "下半身",
    shoulder_arm: "肩・腕",
    rest: "休み",
  };
  var KIND_KEYS = ["upper", "lower", "shoulder_arm", "rest"];
  var MEAL_SLOTS = [
    {
      id: "breakfast",
      time: "07:00",
      timeHtml: '<time datetime="07:00">07:00</time>',
      title: "朝食",
      blurb: "タンパク質を朝から入れる",
    },
    {
      id: "snack_am",
      time: "10:00",
      timeHtml: '<time datetime="10:00">10:00</time>',
      title: "補食",
      blurb: "朝食と昼食の間を空けない",
    },
    {
      id: "lunch",
      time: "12:30",
      timeHtml: '<time datetime="12:30">12:30</time>',
      title: "昼食",
      blurb: "むね肉はここでまとめて食べる。電子レンジで加熱するだけにする",
    },
    {
      id: "snack",
      time: null,
      timeHtml: '<span class="time-label">トレーニング後</span>',
      title: "補食",
      blurb: "トレーニングの後、速やかに",
    },
    {
      id: "dinner",
      time: "19:30",
      timeHtml: '<time datetime="19:30">19:30</time>',
      title: "夕食",
      blurb: "主食で量を整える",
    },
  ];
  var FOOD = {
    chicken100: { kcal: 133, p: 21.3, f: 5.9, c: 0.1 },
    protein30: { kcal: 116, p: 21.0, f: 1.9, c: 4.4 },
    egg1: { kcal: 71, p: 6.1, f: 5.1, c: 0.2 },
    natto1: { kcal: 86, p: 7.4, f: 4.5, c: 5.4 },
    rice150: { kcal: 234, p: 3.8, f: 0.5, c: 55.7 },
  };
  /* session img/session 対応（seated_cable_row→one_arm_row は使わない） */
  var SESSION_PHOTO = {
    lat_pulldown: { file: "img/session/lat_pulldown.jpg", creditKey: "lat_pulldown" },
    cable_lateral_raise: { file: "img/session/lateral_raise.jpg", creditKey: "lateral_raise" },
    rear_delt_fly: { file: "img/session/rear_delt.jpg", creditKey: "rear_delt" },
    machine_shoulder_press: { file: "img/session/shoulder_press.jpg", creditKey: "shoulder_press" },
  };
  var YT_QUERY = {
    incline_db_press: "incline dumbbell press",
    chest_fly: "chest fly machine",
    lat_pulldown: "lat pulldown",
    seated_cable_row: "seated cable row",
    cable_lateral_raise: "cable lateral raise",
    oh_cable_extension: "overhead cable tricep extension",
    incline_db_curl: "incline dumbbell curl",
    hack_squat: "leg press form",
    romanian_deadlift: "romanian deadlift",
    leg_extension: "leg extension",
    seated_leg_curl: "seated leg curl",
    calf_raise: "calf raise",
    cable_crunch: "cable crunch",
    machine_shoulder_press: "machine shoulder press",
    rear_delt_fly: "rear delt fly machine",
    preacher_curl: "preacher curl",
    cable_curl: "cable bicep curl",
    cable_pushdown: "cable tricep pushdown",
  };
  var photoCreditsCache = null;

  /* Muscle figures (BodyParts3D / Anatomography). arrow = [x%, y%] of the red region */
  var MUSCLE_READING = {
    大胸筋: "だいきょうきん",
    三角筋: "さんかくきん",
    上腕二頭筋: "じょうわんにとうきん",
    上腕筋: "じょうわんきん",
    腕橈骨筋: "わんとうこつきん",
    上腕三頭筋: "じょうわんさんとうきん",
    広背筋: "こうはいきん",
    大円筋: "だいえんきん",
    僧帽筋: "そうぼうきん",
    菱形筋: "りょうけいきん",
    棘下筋: "きょくかきん",
    脊柱起立筋: "せきちゅうきりつきん",
    腹直筋: "ふくちょくきん",
    外腹斜筋: "がいふくしゃきん",
    大臀筋: "だいでんきん",
    大内転筋: "だいないてんきん",
    大腿直筋: "だいたいちょっきん",
    外側広筋: "がいそくこうきん",
    内側広筋: "ないそくこうきん",
    中間広筋: "ちゅうかんこうきん",
    大腿二頭筋: "だいたいにとうきん",
    半腱様筋: "はんけんようきん",
    半膜様筋: "はんまくようきん",
    腓腹筋: "ひふくきん",
  };
  var PART_READING = {
    鎖骨部: "さこつぶ",
    胸肋部: "きょうろくぶ",
    長頭: "ちょうとう",
    短頭: "たんとう",
    外側頭: "がいそくとう",
    内側頭: "ないそくとう",
  };
  var MUSCLE_DESC = {
    "大胸筋（鎖骨部）": "胸の上部。鎖骨の下の厚みを作る",
    "大胸筋（胸肋部）": "胸の中部から下部。胸の面積の大部分を占める",
    "三角筋（前部）": "肩の前側。腕を前に上げる",
    "三角筋（中部）": "肩の横。腕を横に上げる。肩幅の広さを作り、逆三角形の上辺になる",
    "三角筋（後部）": "肩の後ろ側。腕を後ろに引く。横から見た肩の丸みを作る",
    "上腕二頭筋（長頭）": "力こぶの外側。力こぶの高さを作る",
    "上腕二頭筋（短頭）": "力こぶの内側。力こぶの厚みを作る",
    上腕二頭筋: "力こぶの筋肉。肘を曲げる",
    上腕筋: "上腕二頭筋の奥にある。肘を曲げる力が最も強く、腕を外側に押し出して太く見せる",
    腕橈骨筋: "前腕の親指側。肘を曲げる時に働く",
    "上腕三頭筋（長頭）": "二の腕の内側寄り。腕を頭上に上げた姿勢で最も伸びる。上腕三頭筋の中で最も大きい",
    "上腕三頭筋（外側頭）": "二の腕の外側。横から見た腕の張りを作る",
    "上腕三頭筋（内側頭）": "長頭と外側頭の奥。肘を伸ばす動作の全域で働く",
    上腕三頭筋: "二の腕の筋肉。肘を伸ばす。腕の太さの3分の2を占める",
    広背筋: "脇の下から腰まで広がる背中の筋肉。腕を下と後ろに引く。逆三角形の横幅を作る",
    大円筋: "脇の下の後ろ。広背筋と一緒に腕を引く",
    "僧帽筋（上部）": "首から肩にかけての筋肉。肩をすくめる",
    "僧帽筋（中部）": "肩甲骨の間。肩甲骨を寄せる",
    "僧帽筋（下部）": "肩甲骨の下。肩甲骨を下げる",
    菱形筋: "僧帽筋の奥、肩甲骨の内側。肩甲骨を寄せる",
    棘下筋: "肩甲骨の上の筋肉。腕を外に回す",
    脊柱起立筋: "背骨の両側を縦に走る。背中をまっすぐ保つ",
    腹直筋: "お腹の前の筋肉。上体を丸める。腹筋の割れ目を作る",
    外腹斜筋: "脇腹の筋肉。上体をひねる、横に倒す",
    大臀筋: "お尻の筋肉。股関節を伸ばす。体の中で最も大きい筋肉",
    大内転筋: "太ももの内側。脚を閉じる、股関節を伸ばす",
    大腿直筋: "太ももの前の中央。膝を伸ばし、股関節も曲げる。レッグエクステンションでよく発達する",
    外側広筋: "太ももの外側。大腿四頭筋の中で最も大きく、太ももの横幅を作る",
    内側広筋: "膝の内側の上。しずく型に盛り上がる部分。膝を深く曲げた位置で強く働く",
    中間広筋: "大腿直筋の奥。外からは見えない",
    大腿二頭筋: "太ももの裏の外側。膝を曲げる",
    半腱様筋: "太ももの裏の内側。膝を曲げる",
    半膜様筋: "半腱様筋の奥。膝を曲げる",
    "腓腹筋（内側頭）": "ふくらはぎの内側の盛り上がり",
    "腓腹筋（外側頭）": "ふくらはぎの外側の盛り上がり",
    ヒラメ筋: "腓腹筋の奥。膝を曲げた状態でかかとを上げる時に主に働く",
  };
  /* file is under img/muscles/. w,h = pixel size of the file */
  var MUSCLE_FIG = {
    "三角筋（前部）": { file: "deltoid_frontal.png", w: 500, h: 340, arrow: [76.0, 30.0] },
    "三角筋（中部）": { file: "deltoid_lateral.png", w: 320, h: 320, arrow: [40.0, 61.9] },
    "三角筋（後部）": { file: "deltoid_back.png", w: 500, h: 340, arrow: [78.0, 32.9] },
    "上腕二頭筋": { file: "biceps_brachii_frontal.png", w: 500, h: 500, arrow: [82.0, 50.0] },
    "上腕二頭筋（長頭）": { file: "biceps_brachii_long_head_frontal.png", w: 500, h: 360, arrow: [84.0, 53.9] },
    "上腕二頭筋（短頭）": { file: "biceps_brachii_short_head_frontal.png", w: 500, h: 360, arrow: [80.0, 51.1] },
    "上腕筋": { file: "brachialis_frontal.png", w: 500, h: 500, arrow: [80.0, 54.0] },
    "上腕三頭筋": { file: "triceps_brachii_back.png", w: 500, h: 360, arrow: [82.0, 53.1] },
    "上腕三頭筋（長頭）": { file: "triceps_brachii_long_head_back.png", w: 500, h: 360, arrow: [80.0, 53.9] },
    "上腕三頭筋（外側頭）": { file: "triceps_brachii_lateral_head_back.png", w: 500, h: 360, arrow: [85.0, 51.1] },
    "上腕三頭筋（内側頭）": { file: "triceps_brachii_medial_head_frontal.png", w: 500, h: 360, arrow: [80.0, 63.1] },
    "広背筋": { file: "latissimus_dorsi_back.png", w: 500, h: 500, arrow: [62.0, 55.0] },
    "大円筋": { file: "teres_major_back.png", w: 500, h: 340, arrow: [75.0, 47.1] },
    "僧帽筋（上部）": { file: "trapezius_upper_back.png", w: 500, h: 500, arrow: [54.0, 32.0] },
    "僧帽筋（中部）": { file: "trapezius_middle_back.png", w: 500, h: 500, arrow: [61.8, 46.0] },
    "僧帽筋（下部）": { file: "trapezius_lower_back.png", w: 500, h: 500, arrow: [57.0, 62.0] },
    "菱形筋": { file: "rhomboid_muscles_back.png", w: 500, h: 360, arrow: [56.0, 61.9] },
    "棘下筋": { file: "infraspinatus_back.png", w: 500, h: 340, arrow: [72.0, 42.1] },
    "大臀筋": { file: "gluteus_maximus_back.png", w: 380, h: 380, arrow: [61.1, 51.1] },
    "大内転筋": { file: "adductor_magnus_back.png", w: 380, h: 380, arrow: [57.6, 58.4] },
    "大腿直筋": { file: "rectus_femoris_frontal.png", w: 380, h: 380, arrow: [70.3, 53.4] },
    "外側広筋": { file: "vastus_lateralis_lateral.png", w: 380, h: 380, arrow: [46.1, 60.0] },
    "内側広筋": { file: "vastus_medialis_frontal.png", w: 380, h: 380, arrow: [63.2, 70.0] },
    "中間広筋": { file: "vastus_intermedius_frontal.png", w: 380, h: 380, arrow: [68.7, 63.4] },
    "大腿二頭筋": { file: "biceps_femoris_back.png", w: 240, h: 240, arrow: [60.8, 60.8] },
    "半膜様筋": { file: "semimembranosus_back.png", w: 240, h: 240, arrow: [55.0, 60.0] },
    "半腱様筋": { file: "semitendinosus.png", w: 320, h: 320, arrow: [58.4, 58.1] },
    "腓腹筋（内側頭）": { file: "gastrocnemius_back.png", w: 500, h: 500, arrow: [58.0, 35.0] },
    "腓腹筋（外側頭）": { file: "gastrocnemius_back.png", w: 500, h: 500, arrow: [66.0, 35.0] },
    "ヒラメ筋": { file: "soleus_back.png", w: 500, h: 500, arrow: [66.0, 45.0] },
  };
  var DEFAULT_DB_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

  /* exercises.md の文言をそのまま保持 */
  var EXERCISES = window.EXERCISES;

  function defaultSettings() {
    return {
      schedule: {
        1: "upper",
        2: "lower",
        3: "rest",
        4: "upper",
        5: "lower",
        6: "shoulder_arm",
        0: "rest",
      },
      menus: {
        upper: [
          { id: "incline_db_press", sets: 3, repMin: 6, repMax: 10 },
          { id: "chest_fly", sets: 3, repMin: 10, repMax: 15 },
          { id: "lat_pulldown", sets: 3, repMin: 8, repMax: 12 },
          { id: "seated_cable_row", sets: 3, repMin: 8, repMax: 12 },
          { id: "cable_lateral_raise", sets: 3, repMin: 10, repMax: 15 },
          { id: "oh_cable_extension", sets: 2, repMin: 10, repMax: 15 },
          { id: "incline_db_curl", sets: 2, repMin: 8, repMax: 12 },
        ],
        lower: [
          { id: "hack_squat", sets: 3, repMin: 6, repMax: 10 },
          { id: "romanian_deadlift", sets: 3, repMin: 8, repMax: 10 },
          { id: "leg_extension", sets: 3, repMin: 10, repMax: 15 },
          { id: "seated_leg_curl", sets: 3, repMin: 10, repMax: 15 },
          { id: "calf_raise", sets: 3, repMin: 10, repMax: 15 },
          { id: "cable_crunch", sets: 3, repMin: 10, repMax: 15 },
        ],
        shoulder_arm: [
          { id: "machine_shoulder_press", sets: 3, repMin: 8, repMax: 12 },
          { id: "cable_lateral_raise", sets: 4, repMin: 10, repMax: 15 },
          { id: "rear_delt_fly", sets: 3, repMin: 10, repMax: 15 },
          { id: "oh_cable_extension", sets: 3, repMin: 10, repMax: 15 },
          { id: "preacher_curl", sets: 3, repMin: 8, repMax: 12 },
        ],
      },
      steps: { compound: 2.5, isolation: 1.25 },
      stepOverrides: {},
      dumbbellList: DEFAULT_DB_LIST.slice(),
      riceBase: 6,
    };
  }

  var state = {
    settings: null,
    logs: {},
    meals: {},
    customExercises: {},
    backupAt: null,
    weightData: null,
    weightError: false,
    calPastExtra: 0,
    calFutureExtra: 0,
    weightRange: 28,
    draft: {},
  };

  function lsGet(key, fallback) {
    try {
      var raw = localStorage.getItem(LS_PREFIX + key);
      if (raw == null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function lsSet(key, value) {
    try {
      localStorage.setItem(LS_PREFIX + key, JSON.stringify(value));
    } catch (e) {
      /* ignore */
    }
  }

  function loadAll() {
    state.settings = lsGet("settings", null) || defaultSettings();
    state.logs = lsGet("logs", {}) || {};
    state.meals = lsGet("meals", {}) || {};
    state.customExercises = lsGet("customExercises", {}) || {};
    state.backupAt = lsGet("backupAt", null);
    state.draft = lsGet("draft", {}) || {};
  }
  // unsaved set inputs survive reloads (until the set is marked done)
  function saveDraft() {
    lsSet("draft", state.draft);
  }

  function saveSettings() {
    lsSet("settings", state.settings);
  }
  function saveLogs() {
    lsSet("logs", state.logs);
  }
  function saveMeals() {
    lsSet("meals", state.meals);
  }
  function saveCustom() {
    lsSet("customExercises", state.customExercises);
  }

  function todayStr() {
    return formatDate(new Date());
  }

  function formatDate(d) {
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }

  function parseDate(s) {
    var p = s.split("-");
    return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  }

  function addDays(dateStr, n) {
    var d = parseDate(dateStr);
    d.setDate(d.getDate() + n);
    return formatDate(d);
  }

  function dow(dateStr) {
    return parseDate(dateStr).getDay();
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function exerciseOf(id) {
    return EXERCISES[id] || state.customExercises[id] || null;
  }

  function exerciseName(id) {
    var e = exerciseOf(id);
    return e ? e.name : id;
  }

  function kindFor(dateStr) {
    var days = state.planDays || {};
    var d = days[dateStr];
    var k = d && typeof d === "object" ? d.kind : d;
    if (k && KIND_KEYS.indexOf(k) >= 0) return k;
    return state.settings.schedule[String(dow(dateStr))] || "rest";
  }

  function allSessionsByExercise() {
    var out = {};
    Object.keys(state.logs).forEach(function (date) {
      var day = state.logs[date] || {};
      Object.keys(day).forEach(function (exId) {
        var sets = day[exId];
        if (!sets || !sets.length) return;
        if (!out[exId]) out[exId] = [];
        out[exId].push({ date: date, sets: sets });
      });
    });
    Object.keys(out).forEach(function (id) {
      out[id].sort(function (a, b) {
        return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
      });
    });
    return out;
  }

  function recoveryFor(dateStr) {
    var all = allSessionsByExercise();
    function isDeloadWeek(d) {
      return Progress.recoveryStatus(all, d, function () {
        return false;
      }).deload;
    }
    return Progress.recoveryStatus(all, dateStr, isDeloadWeek);
  }

  function menuFor(dateStr) {
    var kind = kindFor(dateStr);
    if (kind === "rest") return { kind: kind, items: [], deload: false, recovery: null };
    var recovery = recoveryFor(dateStr);
    var items = (state.settings.menus[kind] || []).map(function (it) {
      var sets = recovery.deload ? Progress.halfSets(it.sets) : it.sets;
      return {
        id: it.id,
        sets: sets,
        repMin: it.repMin,
        repMax: it.repMax,
        baseSets: it.sets,
      };
    });
    // extra exercises for this date only (data/plan.json: {"kind":"lower","add":[{id,sets,repMin,repMax}]})
    var plan = (state.planDays || {})[dateStr];
    if (plan && typeof plan === "object" && Array.isArray(plan.add)) {
      plan.add.forEach(function (it) {
        if (!exerciseOf(it.id)) return;
        var sets = recovery.deload ? Progress.halfSets(it.sets) : it.sets;
        items.push({ id: it.id, sets: sets, repMin: it.repMin, repMax: it.repMax, baseSets: it.sets });
      });
    }
    // extra exercises for every day of a kind from a start date (data/plan.json: {"addByKind":{"from":"YYYY-MM-DD","lower":[...]}})
    var abk = state.planAddByKind;
    if (abk && typeof abk === "object" && abk.from && dateStr >= abk.from && Array.isArray(abk[kind])) {
      abk[kind].forEach(function (it) {
        if (!it || !exerciseOf(it.id)) return;
        var dup = items.some(function (x) {
          return x.id === it.id;
        });
        if (dup) return;
        var sets = recovery.deload ? Progress.halfSets(it.sets) : it.sets;
        items.push({ id: it.id, sets: sets, repMin: it.repMin, repMax: it.repMax, baseSets: it.sets });
      });
    }
    return { kind: kind, items: items, deload: recovery.deload, recovery: recovery };
  }

  function stepFor(exId) {
    var ex = exerciseOf(exId);
    if (!ex) return { type: "fixed", kg: 2.5 };
    if (state.settings.stepOverrides && state.settings.stepOverrides[exId] != null) {
      return { type: "fixed", kg: Number(state.settings.stepOverrides[exId]) };
    }
    if (ex.type === "dumbbell") {
      return { type: "list", list: state.settings.dumbbellList.slice() };
    }
    var kg = ex.type === "isolation" ? state.settings.steps.isolation : state.settings.steps.compound;
    return { type: "fixed", kg: kg };
  }

  function historyBefore(exId, dateStr) {
    var all = allSessionsByExercise();
    return (all[exId] || []).filter(function (s) {
      return s.date < dateStr;
    });
  }

  function targetFor(exId, dateStr, presc) {
    return Progress.nextTarget(historyBefore(exId, dateStr), presc, stepFor(exId));
  }

  function mealState(dateStr) {
    var m = state.meals[dateStr];
    if (!m) {
      return {
        checks: {},
        rice: state.settings.riceBase,
      };
    }
    return {
      checks: m.checks || {},
      rice: m.rice != null ? m.rice : state.settings.riceBase,
    };
  }

  function setMeal(dateStr, patch) {
    var cur = mealState(dateStr);
    state.meals[dateStr] = {
      checks: patch.checks != null ? patch.checks : cur.checks,
      rice: patch.rice != null ? patch.rice : cur.rice,
    };
    saveMeals();
  }

  function distributeRice(total) {
    var per = total / 3;
    var breakfast = Math.round(per * 2) / 2;
    var lunch = Math.round(per * 2) / 2;
    var dinner = Math.round((total - breakfast - lunch) * 2) / 2;
    return { breakfast: breakfast, lunch: lunch, dinner: dinner };
  }

  function scaleFood(base, factor) {
    return {
      kcal: base.kcal * factor,
      p: base.p * factor,
      f: base.f * factor,
      c: base.c * factor,
    };
  }

  function addNut(a, b) {
    return {
      kcal: a.kcal + b.kcal,
      p: a.p + b.p,
      f: a.f + b.f,
      c: a.c + b.c,
    };
  }

  function zeroNut() {
    return { kcal: 0, p: 0, f: 0, c: 0 };
  }

  function fmt1(n) {
    return (Math.round(n * 10) / 10).toFixed(1);
  }

  function fmt0(n) {
    return String(Math.round(n));
  }

  function fmtCups(n) {
    return (Math.round(n * 10) / 10).toString();
  }

  function dayNutrition(riceCups) {
    var split = distributeRice(riceCups);
    var day = zeroNut();
    day = addNut(day, scaleFood(FOOD.egg1, 2));
    day = addNut(day, scaleFood(FOOD.natto1, 1));
    day = addNut(day, scaleFood(FOOD.chicken100, 3.3));
    day = addNut(day, scaleFood(FOOD.protein30, 2));
    day = addNut(day, scaleFood(FOOD.rice150, riceCups));
    return {
      p: Math.round(day.p * 10) / 10,
      kcal: Math.round(day.kcal),
      f: Math.round(day.f * 10) / 10,
      c: Math.round(day.c * 10) / 10,
      split: split,
    };
  }

  function mealItemsFor(slotId, split) {
    if (slotId === "breakfast") {
      return [
        { img: "img/meal/boiled_egg.jpg", name: "卵", amount: "2個", nut: scaleFood(FOOD.egg1, 2) },
        { img: null, name: "納豆", amount: "1パック", nut: scaleFood(FOOD.natto1, 1) },
        {
          img: "img/meal/rice_bowl.jpg",
          name: "ご飯",
          amount: fmtCups(split.breakfast) + "杯（" + fmt0(split.breakfast * 150) + "g）",
          nut: scaleFood(FOOD.rice150, split.breakfast),
        },
      ];
    }
    if (slotId === "snack_am" || slotId === "snack") {
      return [
        {
          img: "img/meal/protein_shake.jpg",
          name: "プロテイン",
          amount: "粉30g（付属スプーンすり切り3杯）",
          nut: scaleFood(FOOD.protein30, 1),
        },
      ];
    }
    if (slotId === "lunch") {
      return [
        {
          img: "img/meal/raw_chicken_breast.jpg",
          name: "むね肉（電子レンジで加熱）",
          amount: "330g（生の重量）",
          nut: scaleFood(FOOD.chicken100, 3.3),
          note:
            "耐熱皿に乗せてふんわりラップをかけ、600Wで約3分加熱し、裏返してさらに約3分。中心まで白くなっていることを確認する",
        },
        {
          img: "img/meal/rice_bowl.jpg",
          name: "ご飯",
          amount: fmtCups(split.lunch) + "杯（" + fmt0(split.lunch * 150) + "g）",
          nut: scaleFood(FOOD.rice150, split.lunch),
        },
      ];
    }
    if (slotId === "dinner") {
      return [
        {
          img: "img/meal/rice_bowl.jpg",
          name: "ご飯",
          amount: fmtCups(split.dinner) + "杯（" + fmt0(split.dinner * 150) + "g）",
          nut: scaleFood(FOOD.rice150, split.dinner),
        },
      ];
    }
    return [];
  }

  function ytQueryFor(exId) {
    if (YT_QUERY[exId]) return YT_QUERY[exId];
    var ex = exerciseOf(exId);
    return ex && ex.name ? ex.name : exId;
  }

  function loadPhotoCredits() {
    if (photoCreditsCache) return Promise.resolve(photoCreditsCache);
    return Promise.all([
      fetch("img/session/_credits.json", { cache: "force-cache" })
        .then(function (r) {
          return r.ok ? r.json() : { images: {} };
        })
        .catch(function () {
          return { images: {} };
        }),
      fetch("img/exercises/_credits.json", { cache: "force-cache" })
        .then(function (r) {
          return r.ok ? r.json() : { images: {} };
        })
        .catch(function () {
          return { images: {} };
        }),
      fetch("img/meal/_credits.json", { cache: "force-cache" })
        .then(function (r) {
          return r.ok ? r.json() : { images: {} };
        })
        .catch(function () {
          return { images: {} };
        }),
      fetch("img/muscles/_credits.json", { cache: "force-cache" })
        .then(function (r) {
          return r.ok ? r.json() : { images: {} };
        })
        .catch(function () {
          return { images: {} };
        }),
    ]).then(function (arr) {
      photoCreditsCache = {
        session: (arr[0] && arr[0].images) || {},
        exercises: (arr[1] && arr[1].images) || {},
        meal: (arr[2] && arr[2].images) || {},
        muscles: (arr[3] && arr[3].images) || {},
      };
      return photoCreditsCache;
    });
  }

  function creditLine(file, meta) {
    if (!meta) return esc(file);
    return (
      esc(file) +
      " — 作者: " +
      esc(meta.author || "—") +
      " — ライセンス: " +
      esc(meta.license || "—") +
      (meta.source_url
        ? ' — <a href="' + esc(meta.source_url) + '" target="_blank" rel="noopener">' + esc(meta.source_url) + "</a>"
        : "")
    );
  }

  function resolveDefaultPhoto(exId) {
    return loadPhotoCredits().then(function (c) {
      if (SESSION_PHOTO[exId]) {
        var sk = SESSION_PHOTO[exId].creditKey;
        return {
          src: SESSION_PHOTO[exId].file,
          credit: c.session[sk]
            ? (c.session[sk].author || "") + " / " + (c.session[sk].license || "")
            : "",
        };
      }
      if (c.exercises[exId]) {
        var m = c.exercises[exId];
        return {
          src: "img/exercises/" + (m.file || exId + ".jpg"),
          credit: (m.author || "") + " / " + (m.license || ""),
        };
      }
      return null;
    });
  }

  function hydrateExPhotos(root) {
    if (!root) return;
    var nodes = root.querySelectorAll("[data-ex-photo]");
    nodes.forEach(function (el) {
      var exId = el.getAttribute("data-ex-photo");
      if (!exId) return;
      getPhoto(exId)
        .then(function (blob) {
          if (blob) {
            var url = URL.createObjectURL(blob);
            if (el.classList.contains("photo-box")) {
              el.innerHTML = '<img alt="" src="' + url + '">';
            } else {
              el.innerHTML =
                '<img class="eximg" alt="" src="' +
                url +
                '"><div class="excredit">アップロード写真</div>';
            }
            return { uploaded: true };
          }
          return resolveDefaultPhoto(exId);
        })
        .then(function (def) {
          if (def && def.uploaded) return;
          if (!def) {
            if (el.classList.contains("photo-box")) return;
            var ex0 = exerciseOf(exId);
            el.innerHTML =
              '<div class="eximg-ph">' + esc(ex0 && ex0.part ? ex0.part : "写真なし") + "</div>";
            return;
          }
          if (el.classList.contains("photo-box")) {
            el.innerHTML = '<img alt="" src="' + esc(def.src) + '">';
            return;
          }
          el.innerHTML =
            '<img class="eximg" alt="" src="' +
            esc(def.src) +
            '" loading="lazy">' +
            (def.credit ? '<div class="excredit">' + esc(def.credit) + "</div>" : "");
        })
        .catch(function () {
          if (el.classList.contains("photo-box")) return;
          var ex = exerciseOf(exId);
          el.innerHTML =
            '<div class="eximg-ph">' + esc(ex && ex.part ? ex.part : "写真なし") + "</div>";
        });
    });
  }

  function trainStatus(dateStr) {
    var menu = menuFor(dateStr);
    if (menu.kind === "rest") return "rest";
    var day = state.logs[dateStr] || {};
    var done = 0;
    menu.items.forEach(function (it) {
      if (day[it.id] && day[it.id].length > 0) done++;
    });
    if (done === 0) return "none";
    if (done >= menu.items.length) return "done";
    return "mid";
  }

  function mealCheckCount(dateStr) {
    var m = mealState(dateStr);
    var n = 0;
    MEAL_SLOTS.forEach(function (s) {
      if (m.checks[s.id]) n++;
    });
    return n;
  }

  function dailyWeightMap() {
    if (!state.weightData || !state.weightData.weights) return {};
    var daily = dailyWeights(state.weightData.weights.map(function (w) {
      return { date: w.date, kg: Number(w.kg), time: w.time == null ? null : w.time };
    }));
    var map = {};
    daily.forEach(function (d) {
      map[d.date] = d;
    });
    return map;
  }

  function riceSeries() {
    var out = [];
    Object.keys(state.meals).forEach(function (d) {
      var m = state.meals[d];
      if (m && m.rice != null) out.push({ date: d, cups: Number(m.rice) });
    });
    return out;
  }

  function needsBackup() {
    if (!state.backupAt) return true;
    var days = (Date.now() - Number(state.backupAt)) / 86400000;
    return days >= 7;
  }

  /* ---------- IndexedDB photos ---------- */
  function openPhotoDb() {
    return new Promise(function (resolve, reject) {
      var req = indexedDB.open(PHOTO_DB, 1);
      req.onupgradeneeded = function () {
        var db = req.result;
        if (!db.objectStoreNames.contains("photos")) db.createObjectStore("photos");
      };
      req.onsuccess = function () {
        resolve(req.result);
      };
      req.onerror = function () {
        reject(req.error);
      };
    });
  }

  function getPhoto(exId) {
    return openPhotoDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction("photos", "readonly");
        var req = tx.objectStore("photos").get(exId);
        req.onsuccess = function () {
          resolve(req.result || null);
        };
        req.onerror = function () {
          reject(req.error);
        };
      });
    });
  }

  function putPhoto(exId, blob) {
    return openPhotoDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction("photos", "readwrite");
        tx.objectStore("photos").put(blob, exId);
        tx.oncomplete = function () {
          resolve();
        };
        tx.onerror = function () {
          reject(tx.error);
        };
      });
    });
  }

  function deletePhoto(exId) {
    return openPhotoDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction("photos", "readwrite");
        tx.objectStore("photos").delete(exId);
        tx.oncomplete = function () {
          resolve();
        };
        tx.onerror = function () {
          reject(tx.error);
        };
      });
    });
  }

  function resizeToJpeg(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        var max = 1200;
        var scale = Math.min(1, max / Math.max(w, h));
        var cw = Math.round(w * scale);
        var ch = Math.round(h * scale);
        var canvas = document.createElement("canvas");
        canvas.width = cw;
        canvas.height = ch;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, cw, ch);
        canvas.toBlob(
          function (blob) {
            URL.revokeObjectURL(url);
            if (!blob) reject(new Error("toBlob failed"));
            else resolve(blob);
          },
          "image/jpeg",
          0.85
        );
      };
      img.onerror = function () {
        URL.revokeObjectURL(url);
        reject(new Error("image load failed"));
      };
      img.src = url;
    });
  }

  /* ---------- routing ---------- */
  function parseHash() {
    var h = (location.hash || "#").replace(/^#\/?/, "");
    if (!h || h === "") return { view: "cal" };
    if (h === "weight") return { view: "weight" };
    if (h === "settings") return { view: "settings" };
    var day = h.match(/^day\/(\d{4}-\d{2}-\d{2})$/);
    if (day) return { view: "day", date: day[1] };
    var ex = h.match(/^ex\/(.+)$/);
    if (ex) return { view: "ex", id: decodeURIComponent(ex[1]) };
    return { view: "cal" };
  }

  function go(hash) {
    location.hash = hash.charAt(0) === "#" ? hash : "#" + hash;
  }

  function setTabs(view) {
    document.getElementById("tab-cal").classList.toggle("on", view === "cal" || view === "day" || view === "ex");
    document.getElementById("tab-weight").classList.toggle("on", view === "weight");
    document.getElementById("tab-settings").classList.toggle("on", view === "settings");
  }

  /* ---------- render helpers ---------- */
  function placeholderSvg(part) {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img" aria-label="' +
      esc(part) +
      '">' +
      '<rect width="400" height="400" fill="#d8d8d8"/>' +
      '<text x="200" y="205" text-anchor="middle" font-size="28" fill="#666" font-family="system-ui,sans-serif">' +
      esc(part) +
      "</text></svg>"
    );
  }

  function compareText(prev, cur) {
    if (!prev || !prev.sets || !prev.sets.length) return "";
    function fmt(s) {
      var kg = s.sets[0].kg;
      var reps = s.sets.map(function (x) {
        return x.reps;
      }).join("/");
      return kg + "kg " + reps;
    }
    var prevSum = prev.sets.reduce(function (a, b) {
      return a + b.reps;
    }, 0);
    var curSum = cur.sets.reduce(function (a, b) {
      return a + b.reps;
    }, 0);
    var diff = curSum - prevSum;
    var sign = diff > 0 ? "+" : "";
    return "前回 " + fmt(prev) + " → 今回 " + fmt(cur) + "（合計 " + sign + diff + "回）";
  }

  function renderCal() {
    var today = todayStr();
    var start = addDays(today, -(14 + state.calPastExtra));
    var end = addDays(today, 14 + state.calFutureExtra);
    var wmap = dailyWeightMap();
    var html = "<h1>カレンダー</h1>";
    if (needsBackup()) {
      html += '<div class="warn-banner">バックアップを書き出してください</div>';
    }
    html += '<button type="button" class="cal-more" data-act="more-past">さらに表示</button>';
    var d = start;
    while (d <= end) {
      var kind = kindFor(d);
      var st = trainStatus(d);
      var mealN = mealCheckCount(d);
      var rec = recoveryFor(d);
      var w = wmap[d];
      var badge = "";
      if (st === "done") badge = '<span class="badge done">済</span>';
      else if (st === "mid") badge = '<span class="badge mid">途中</span>';
      else if (kind !== "rest") badge = '<span class="badge">未</span>';
      if (rec.deload) badge += '<span class="badge half">セット半分</span>';
      html +=
        '<button type="button" class="cal-row' +
        (d === today ? " today" : "") +
        '" data-day="' +
        d +
        '">' +
        '<div><span class="cal-date">' +
        d.slice(5) +
        '</span><span class="cal-dow">' +
        DOW[dow(d)] +
        "</span></div>" +
        '<div class="cal-mid"><div class="cal-kind">' +
        KIND_LABEL[kind] +
        badge +
        '</div><div class="cal-meta">食事 ' +
        mealN +
        "/5</div></div>" +
        '<div class="cal-right">' +
        (w ? w.kg.toFixed(1) + "kg" : "") +
        "</div></button>";
      d = addDays(d, 1);
    }
    html += '<button type="button" class="cal-more" data-act="more-future">さらに表示</button>';
    return html;
  }

  function draftKey(date, exId, setIdx) {
    return date + "|" + exId + "|" + setIdx;
  }

  function ensureDraft(date, exId, setIdx, target) {
    var k = draftKey(date, exId, setIdx);
    if (!state.draft[k]) {
      var prevDraft = setIdx > 0 ? state.draft[draftKey(date, exId, setIdx - 1)] : null;
      state.draft[k] = {
        kg: target.kg != null ? target.kg : prevDraft && prevDraft.kg != null ? prevDraft.kg : null,
        reps: target.reps[setIdx] != null ? target.reps[setIdx] : target.reps[0],
        rir: null,
      };
    }
    return state.draft[k];
  }

  function renderDay(dateStr) {
    var today = todayStr();
    var menu = menuFor(dateStr);
    var mode = dateStr < today ? "past" : dateStr > today ? "future" : "today";
    var html =
      '<a class="back" href="#">戻る</a><h1>' +
      esc(dateStr) +
      "（" +
      DOW[dow(dateStr)] +
      "）</h1>";
    html += '<section class="day-train"><h2>トレーニング</h2>';
    if (menu.kind === "rest") {
      html += '<div class="rest-card">休み</div>';
    } else {
      html += '<div class="kind-chip">' + esc(KIND_LABEL[menu.kind]) + "</div>";
      if (menu.deload && menu.recovery) {
        var names = menu.recovery.causes
          .map(function (id) {
            return exerciseName(id);
          })
          .join("・");
        html +=
          '<div class="deload-banner">回復不足: ' +
          esc(names) +
          "が2回続けて前回を下回ったため、今週は全種目のセット数を半分にしています</div>";
      }
      menu.items.forEach(function (it) {
        var presc = { sets: it.sets, repMin: it.repMin, repMax: it.repMax };
        var target = targetFor(it.id, dateStr, presc);
        var saved = (state.logs[dateStr] && state.logs[dateStr][it.id]) || [];
        var kgTxt = target.kg == null ? "—" : target.kg + "kg";
        html += '<div class="ex" data-ex="' + esc(it.id) + '">';
        html +=
          '<div class="exn"><a href="#ex/' +
          encodeURIComponent(it.id) +
          '">' +
          esc(exerciseName(it.id)) +
          "</a></div>";
        html += musclesHtml(exerciseOf(it.id));
        if (mode !== "past") {
          html += '<div class="exp">' + esc(target.reason) + "</div>";
        } else if (saved.length) {
          var hist0 = historyBefore(it.id, dateStr);
          var prev0 = hist0.length ? hist0[hist0.length - 1] : null;
          var cmp0 = compareText(prev0, { sets: saved });
          if (cmp0) html += '<div class="exp">' + esc(cmp0) + "</div>";
        }
        html += '<div data-ex-photo="' + esc(it.id) + '"><div class="eximg-ph">…</div></div>';
        html +=
          '<a class="exvid" href="https://www.youtube.com/results?search_query=' +
          encodeURIComponent(ytQueryFor(it.id)) +
          '" target="_blank" rel="noopener">動画で見る</a>';
        if (mode === "past") {
          if (!saved.length) {
            html += '<div class="exmeta">記録なし</div>';
          } else {
            html +=
              '<div class="exmeta">' +
              esc(
                saved
                  .map(function (s) {
                    return s.kg + "kg × " + s.reps;
                  })
                  .join(" ／ ")
              ) +
              "</div>";
            html += '<div class="exrow"><div class="sets">';
            for (var pi = 0; pi < saved.length; pi++) {
              html +=
                '<button type="button" class="setchk on" disabled aria-pressed="true">' +
                (pi + 1) +
                "</button>";
            }
            html += "</div></div>";
          }
        } else {
          html +=
            '<div class="exmeta">目標 ' +
            kgTxt +
            " × " +
            target.reps.join("/") +
            "（" +
            target.sets +
            "セット）</div>";
          if (mode === "future") {
            html += '<div class="exrow"><div class="sets">';
            for (var fi = 0; fi < target.sets; fi++) {
              html +=
                '<button type="button" class="setchk" disabled aria-pressed="false">' +
                (fi + 1) +
                "</button>";
            }
            html += "</div></div>";
          } else {
            for (var i = 0; i < it.sets; i++) {
              var doneSet = saved[i];
              if (target.kg == null && i > 0 && saved[i - 1] && saved[i - 1].kg != null) {
                var pk = draftKey(dateStr, it.id, i - 1);
                if (!state.draft[pk]) {
                  state.draft[pk] = { kg: saved[i - 1].kg, reps: saved[i - 1].reps, rir: null };
                } else if (state.draft[pk].kg == null) {
                  state.draft[pk].kg = saved[i - 1].kg;
                }
              }
              var dr = ensureDraft(dateStr, it.id, i, target);
              html += '<div class="set-panel"><div class="set-head">セット ' + (i + 1) + "</div>";
              if (doneSet) {
                html +=
                  '<div class="exrow"><div class="sets"><button type="button" class="setchk on" disabled aria-pressed="true">' +
                  (i + 1) +
                  "</button></div>" +
                  '<div class="exmeta" style="margin:0">記録済: ' +
                  doneSet.kg +
                  "kg × " +
                  doneSet.reps +
                  (doneSet.rir != null ? "（あと" + doneSet.rir + "回）" : "") +
                  "</div></div>";
              } else {
                var step = stepFor(it.id);
                var stepKg = step.type === "fixed" ? step.kg : 1;
                var dk = draftKey(dateStr, it.id, i);
                html +=
                  '<div class="field-row"><label>重さ</label>' +
                  '<button type="button" class="step" data-draft="' +
                  esc(dk) +
                  '" data-field="kg" data-delta="-' +
                  stepKg +
                  '">−</button>' +
                  '<input type="number" inputmode="decimal" data-draft="' +
                  esc(dk) +
                  '" data-field="kg" value="' +
                  (dr.kg == null ? "" : dr.kg) +
                  '" placeholder="kg">' +
                  '<button type="button" class="step" data-draft="' +
                  esc(dk) +
                  '" data-field="kg" data-delta="' +
                  stepKg +
                  '">＋</button></div>';
                html +=
                  '<div class="field-row"><label>回数</label>' +
                  '<button type="button" class="step" data-draft="' +
                  esc(dk) +
                  '" data-field="reps" data-delta="-1">−</button>' +
                  '<input type="number" inputmode="numeric" data-draft="' +
                  esc(dk) +
                  '" data-field="reps" value="' +
                  (dr.reps == null ? "" : dr.reps) +
                  '">' +
                  '<button type="button" class="step" data-draft="' +
                  esc(dk) +
                  '" data-field="reps" data-delta="1">＋</button></div>';
                html += '<div class="rir-row"><span class="lbl">あと何回できたか</span>';
                [0, 1, 2, 3].forEach(function (n) {
                  html +=
                    '<button type="button" class="rir' +
                    (dr.rir === n ? " on" : "") +
                    '" data-draft="' +
                    esc(dk) +
                    '" data-rir="' +
                    n +
                    '">' +
                    n +
                    "</button>";
                });
                html += "</div>";
                html +=
                  '<button type="button" class="primary" data-complete="' +
                  esc(dateStr) +
                  "|" +
                  esc(it.id) +
                  "|" +
                  i +
                  '">完了</button>';
              }
              html += "</div>";
            }
          }
        }
        html += "</div>";
      });
    }
    html += "</section>";

    /* meal — meal plan layout */
    var meal = mealState(dateStr);
    var nut = dayNutrition(meal.rice);
    html += '<section class="day-meal">';
    html += "<h2>1日の合計</h2>";
    html +=
      '<div class="totals">' +
      '<div class="stat"><span class="stat-value num">' +
      fmt1(nut.p) +
      '</span><span class="stat-unit">g</span><span class="stat-label">タンパク質</span></div>' +
      '<div class="stat"><span class="stat-value num">' +
      fmt0(nut.kcal) +
      '</span><span class="stat-unit">kcal</span><span class="stat-label">エネルギー</span></div>' +
      '<div class="stat"><span class="stat-value num">' +
      fmt1(nut.f) +
      '</span><span class="stat-unit">g</span><span class="stat-label">脂質</span></div>' +
      '<div class="stat"><span class="stat-value num">' +
      fmt1(nut.c) +
      '</span><span class="stat-unit">g</span><span class="stat-label">炭水化物</span></div>' +
      "</div>";
    html += "<h2>ご飯のダイヤル</h2>";
    html += '<p style="margin:0 0 4px;font-size:0.92rem;">1日のご飯の杯数</p>';
    html +=
      '<div class="dial">' +
      '<button type="button" class="step" data-rice="' +
      esc(dateStr) +
      '" data-delta="-0.5" aria-label="減らす">−</button>' +
      '<div><span class="dial-value num">' +
      fmtCups(meal.rice) +
      '</span><span class="dial-unit">杯</span></div>' +
      '<button type="button" class="step" data-rice="' +
      esc(dateStr) +
      '" data-delta="0.5" aria-label="増やす">+</button></div>';
    html +=
      '<p class="rice-split">配分: 朝 ' +
      fmtCups(nut.split.breakfast) +
      "杯 / 昼 " +
      fmtCups(nut.split.lunch) +
      "杯 / 晩 " +
      fmtCups(nut.split.dinner) +
      "杯（1杯=150g）</p>";
    html += "<h2>時間割</h2><ol class=\"timeline\">";
    MEAL_SLOTS.forEach(function (slot) {
      var items = mealItemsFor(slot.id, nut.split);
      var sub = zeroNut();
      items.forEach(function (item) {
        if (item.nut) sub = addNut(sub, item.nut);
      });
      html += '<li class="slot" data-slot="' + slot.id + '">';
      html +=
        '<div class="slot-time">' +
        slot.timeHtml +
        '<span class="blurb">' +
        esc(slot.blurb) +
        "</span></div>";
      html += '<div class="slot-dot"><span></span></div><div class="slot-body">';
      html +=
        '<div class="slot-head"><span class="slot-title">' +
        esc(slot.title) +
        '</span><span class="slot-subtotal num">小計 ' +
        fmt1(sub.p) +
        "g / " +
        fmt0(sub.kcal) +
        "kcal</span></div>";
      html += '<ul class="foods">';
      items.forEach(function (item) {
        html += '<li class="food">';
        if (item.img) {
          html +=
            '<img src="' +
            esc(item.img) +
            '" alt="' +
            esc(item.name) +
            '" width="72" height="72">';
        }
        html += '<div class="food-meta"><div class="food-name">' + esc(item.name) + "</div>";
        html += '<div class="food-amt">' + esc(item.amount) + "</div>";
        if (item.nut) {
          html += '<div class="food-p num">タンパク質 ' + fmt1(item.nut.p) + "g</div>";
        }
        if (item.note) {
          html += '<div class="food-note">' + esc(item.note) + "</div>";
        }
        html += "</div></li>";
      });
      html += "</ul>";
      html +=
        '<label class="done-label"><input type="checkbox" data-meal-check="' +
        esc(dateStr) +
        "|" +
        slot.id +
        '"' +
        (meal.checks[slot.id] ? " checked" : "") +
        "> 食べた</label>";
      html += "</div></li>";
    });
    html += "</ol></section>";
    return html;
  }

  function splitMuscle(name) {
    var m = /^(.+?)（(.+)）$/.exec(name);
    return m ? { base: m[1], part: m[2] } : { base: name, part: "" };
  }

  function muscleFigHtml(name) {
    var fig = MUSCLE_FIG[name];
    var p = splitMuscle(name);
    var reads = [MUSCLE_READING[p.base], PART_READING[p.part]].filter(Boolean);
    var h =
      '<figure class="mfig"><div class="mlabel">' +
      (reads.length
        ? '<div class="mread">' +
          reads
            .map(function (r) {
              return '<span class="mseg">' + esc(r) + "</span>";
            })
            .join(" ") +
          "</div>"
        : "") +
      '<div class="mname">' + esc(name) + "</div></div>";
    if (fig) {
      var w = fig.w;
      var hh = fig.h;
      var x0 = w / 2;
      var y0 = 0;
      var x1 = (fig.arrow[0] / 100) * w;
      var y1 = (fig.arrow[1] / 100) * hh;
      var dx = x1 - x0;
      var dy = y1 - y0;
      var len = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / len;
      var uy = dy / len;
      var sw = w * 0.012;
      var ah = w * 0.05;
      var aw = w * 0.025;
      var bx = x1 - ux * ah;
      var by = y1 - uy * ah;
      var pts =
        x1.toFixed(1) + "," + y1.toFixed(1) + " " +
        (bx - uy * aw).toFixed(1) + "," + (by + ux * aw).toFixed(1) + " " +
        (bx + uy * aw).toFixed(1) + "," + (by - ux * aw).toFixed(1);
      h +=
        '<div class="mimg" style="aspect-ratio:' + w + " / " + hh + '">' +
        '<img alt="" loading="lazy" src="img/muscles/' + esc(fig.file) + '">' +
        '<svg viewBox="0 0 ' + w + " " + hh + '" aria-hidden="true">' +
        '<line x1="' + x0.toFixed(1) + '" y1="' + y0 + '" x2="' + bx.toFixed(1) + '" y2="' + by.toFixed(1) +
        '" stroke="#111" stroke-width="' + sw.toFixed(1) + '" stroke-linecap="round"/>' +
        '<polygon points="' + pts + '" fill="#111"/></svg></div>';
    }
    return h + "</figure>";
  }

  function muscleDescHtml(names) {
    return (
      '<ul class="mdesc">' +
      names
        .map(function (n) {
          var p = splitMuscle(n);
          var reads = [MUSCLE_READING[p.base], PART_READING[p.part]].filter(Boolean);
          var nm = reads.length
            ? '<ruby class="mr">' + esc(n) + "<rt>" + esc(reads.join(" ")) + "</rt></ruby>"
            : esc(n);
          return "<li>" + nm + ": " + esc(MUSCLE_DESC[n] || "") + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  /* detail: true = exercise detail screen (sub figures too), false = exercise card */
  function musclesHtml(ex, detail) {
    if (!ex || !ex.muscles) return "";
    var main = ex.muscles.main || [];
    var sub = ex.muscles.sub || [];
    var h = '<div class="exmus">';
    h += '<div class="mgrid">' + main.map(muscleFigHtml).join("") + "</div>";
    if (sub.length) {
      if (detail) {
        h += '<div class="msubh">補助で使う筋肉</div>';
        h += '<div class="mgrid small">' + sub.map(muscleFigHtml).join("") + "</div>";
      } else {
        h += '<div class="msubline">補助: ' + esc(sub.join("、")) + "</div>";
      }
    }
    h += muscleDescHtml(detail ? main.concat(sub) : main);
    return h + "</div>";
  }

  function renderEx(exId) {
    var ex = exerciseOf(exId);
    if (!ex) return '<a class="back" href="#">戻る</a><p>種目が見つかりません</p>';
    var all = allSessionsByExercise()[exId] || [];
    var html =
      '<a class="back" href="javascript:history.back()">戻る</a><h1>' +
      esc(ex.name) +
      "</h1>" +
      musclesHtml(ex, true);
    html += '<div class="photo-box" id="photo-box" data-ex-photo="' + esc(exId) + '">' + placeholderSvg(ex.part) + "</div>";
    html +=
      '<div class="photo-actions"><label class="primary" style="display:inline-flex;align-items:center;padding:10px 14px;border-radius:6px;background:var(--accent);color:#fff;">写真を撮る・選ぶ' +
      '<input class="hidden-file" type="file" accept="image/*" capture="environment" id="photo-input"></label>' +
      '<button type="button" id="photo-del">写真を削除</button></div>';
    html +=
      '<a class="exvid" href="https://www.youtube.com/results?search_query=' +
      encodeURIComponent(ytQueryFor(exId)) +
      '" target="_blank" rel="noopener">動画で見る</a>';
    html +=
      '<div class="form-block"><h3>構え方</h3><p>' +
      esc(ex.setup) +
      "</p><h3>動かし方</h3><p>" +
      esc(ex.move) +
      "</p><h3>よくある失敗</h3><p>" +
      esc(ex.fail) +
      "</p><h3>効かせるポイント</h3><p>" +
      esc(ex.tip) +
      "</p></div>";
    html += "<h2>推移</h2>";
    if (all.length < 2) {
      html += '<p class="note">記録が2回以上になるとグラフを表示します</p>';
    } else {
      html += '<div class="chart-wrap" id="ex-chart"></div>';
    }
    html += "<h2>過去の記録</h2>";
    var rev = all.slice().reverse();
    if (!rev.length) html += '<p class="note">記録なし</p>';
    rev.forEach(function (s) {
      html +=
        '<div class="hist-item"><strong>' +
        esc(s.date) +
        "</strong> " +
        s.sets
          .map(function (x) {
            return x.kg + "kg×" + x.reps;
          })
          .join(" ／ ") +
        "</div>";
    });
    return { html: html, all: all, exId: exId, ex: ex };
  }

  function buildExChart(all) {
    var pts = all.map(function (s) {
      var maxKg = 0;
      var maxReps = 0;
      s.sets.forEach(function (x) {
        if (x.kg > maxKg) {
          maxKg = x.kg;
          maxReps = x.reps;
        } else if (x.kg === maxKg && x.reps > maxReps) {
          maxReps = x.reps;
        }
      });
      return { date: s.date, kg: maxKg, reps: maxReps };
    });
    var w = 360;
    var h = 180;
    var pad = { l: 36, r: 28, t: 16, b: 36 };
    var minY = Math.min.apply(
      null,
      pts.map(function (p) {
        return p.kg;
      })
    );
    var maxY = Math.max.apply(
      null,
      pts.map(function (p) {
        return p.kg;
      })
    );
    if (minY === maxY) {
      minY -= 2.5;
      maxY += 2.5;
    }
    function x(i) {
      return pad.l + (i * (w - pad.l - pad.r)) / Math.max(1, pts.length - 1);
    }
    function y(v) {
      return pad.t + ((maxY - v) * (h - pad.t - pad.b)) / (maxY - minY);
    }
    var line = pts
      .map(function (p, i) {
        return (i ? "L" : "M") + x(i) + "," + y(p.kg);
      })
      .join(" ");
    var dots = pts
      .map(function (p, i) {
        return (
          '<circle cx="' +
          x(i) +
          '" cy="' +
          y(p.kg) +
          '" r="3.5" fill="#2f6b3a"/>' +
          '<text x="' +
          (x(i) + 6) +
          '" y="' +
          (y(p.kg) - 6) +
          '" font-size="10" fill="#555">' +
          p.reps +
          "</text>" +
          '<text x="' +
          x(i) +
          '" y="' +
          (h - 10) +
          '" text-anchor="middle" font-size="9" fill="#888">' +
          p.date.slice(5) +
          "</text>"
        );
      })
      .join("");
    return (
      '<svg viewBox="0 0 ' +
      w +
      " " +
      h +
      '" width="100%" xmlns="http://www.w3.org/2000/svg">' +
      '<line x1="' +
      pad.l +
      '" y1="' +
      pad.t +
      '" x2="' +
      pad.l +
      '" y2="' +
      (h - pad.b) +
      '" stroke="#ccc"/>' +
      '<line x1="' +
      pad.l +
      '" y1="' +
      (h - pad.b) +
      '" x2="' +
      (w - pad.r) +
      '" y2="' +
      (h - pad.b) +
      '" stroke="#ccc"/>' +
      '<path d="' +
      line +
      '" fill="none" stroke="#2f6b3a" stroke-width="2"/>' +
      dots +
      '<text x="4" y="' +
      (pad.t + 4) +
      '" font-size="10" fill="#888">' +
      maxY +
      '</text><text x="4" y="' +
      (h - pad.b) +
      '" font-size="10" fill="#888">' +
      minY +
      "</text></svg>"
    );
  }

  function renderWeight() {
    var html = "<h1>体重</h1>";
    html +=
      '<p class="note">体重は Claude Code のスレッドに体重計のスクリーンショットを貼ると記録されます。記録後にこのページを再読み込みしてください</p>';
    if (state.weightError || !state.weightData) {
      html += '<div class="warn-banner">体重データを読み込めません</div>';
      return html;
    }
    var today = todayStr();
    var daily = dailyWeights(
      state.weightData.weights.map(function (w) {
        return { date: w.date, kg: Number(w.kg), time: w.time == null ? null : w.time };
      })
    );
    var pace = pace28(daily, today);
    var j = judge(pace.pace);
    var labels = {
      decrease: "ご飯を1日1杯減らす",
      increase: "ご飯を1日1杯増やす",
      keep: "今の量を維持",
      insufficient: "判定まであと" + pace.need + "日分",
    };
    var a7 = avgWeight7(daily, today);
    var r7 = avgRice7(riceSeries(), today);
    var roll = rolling7(daily);

    html += '<div class="card"><strong>判定</strong><div style="font-size:1.2rem;margin-top:6px;">' + labels[j] + "</div>";
    html +=
      '<div class="note" style="margin-top:6px;">直近28日のペース: ' +
      (pace.pace == null ? "—" : (Math.round(pace.pace * 100) / 100) + " kg/月") +
      "（目標帯 0.5〜1.0）</div>";
    var markerPct = 50;
    if (pace.pace != null) {
      markerPct = Math.max(0, Math.min(100, ((pace.pace - 0) / 1.5) * 100));
    }
    html +=
      '<div class="pace-bar"><div class="pace-zone"></div>' +
      (pace.pace == null
        ? ""
        : '<div class="pace-marker" style="left:' + markerPct + '%"></div>') +
      "</div></div>";
    html +=
      '<div class="totals"><div class="stat"><span class="v">' +
      (a7 == null ? "—" : (Math.round(a7 * 10) / 10).toFixed(1)) +
      '</span><span class="l">直近7日 平均体重 kg</span></div><div class="stat"><span class="v">' +
      (r7.avg == null ? "—" : (Math.round(r7.avg * 10) / 10).toFixed(1)) +
      '</span><span class="l">直近7日 平均ご飯杯</span></div></div>';

    html +=
      '<div class="range-tabs">' +
      [28, 90, "all"]
        .map(function (r) {
          var lab = r === "all" ? "全期間" : r + "日";
          return (
            '<button type="button" class="' +
            (state.weightRange === r ? "on" : "") +
            '" data-range="' +
            r +
            '">' +
            lab +
            "</button>"
          );
        })
        .join("") +
      "</div>";
    html += '<div class="chart-wrap" id="w-chart"></div>';

    html += "<h2>直近14日</h2><table class='list-table'><thead><tr><th>日付</th><th>体重</th><th>時刻</th><th>ご飯</th></tr></thead><tbody>";
    var riceMap = {};
    riceSeries().forEach(function (r) {
      riceMap[r.date] = r.cups;
    });
    var rows = [];
    for (var i = 0; i < 14; i++) {
      var d = addDays(today, -i);
      var dw = daily.filter(function (x) {
        return x.date === d;
      })[0];
      rows.push({
        date: d,
        kg: dw ? dw.kg : null,
        time: dw ? dw.time : null,
        rice: riceMap[d] != null ? riceMap[d] : null,
      });
    }
    rows.forEach(function (r) {
      html +=
        "<tr><td>" +
        r.date +
        "</td><td>" +
        (r.kg == null ? "—" : r.kg.toFixed(1)) +
        "</td><td>" +
        (r.time || "—") +
        "</td><td>" +
        (r.rice == null ? "—" : r.rice) +
        "</td></tr>";
    });
    html += "</tbody></table>";
    return { html: html, daily: daily, roll: roll };
  }

  function buildWeightChart(daily, roll) {
    var today = todayStr();
    var start;
    if (state.weightRange === "all") {
      start = daily.length ? daily[0].date : addDays(today, -27);
    } else {
      start = addDays(today, -(Number(state.weightRange) - 1));
    }
    var pts = daily.filter(function (d) {
      return d.date >= start && d.date <= today;
    });
    var rpts = roll.filter(function (d) {
      return d.date >= start && d.date <= today;
    });
    if (!pts.length) return '<p class="note">表示できる体重がありません</p>';
    var w = 360;
    var h = 200;
    var pad = { l: 36, r: 12, t: 12, b: 28 };
    var minY = Math.min.apply(
      null,
      pts.map(function (p) {
        return p.kg;
      })
    );
    var maxY = Math.max.apply(
      null,
      pts.map(function (p) {
        return p.kg;
      })
    );
    if (minY === maxY) {
      minY -= 1;
      maxY += 1;
    }
    function xOf(date) {
      var t0 = parseDate(start).getTime();
      var t1 = parseDate(today).getTime();
      var t = parseDate(date).getTime();
      return pad.l + ((t - t0) / Math.max(1, t1 - t0)) * (w - pad.l - pad.r);
    }
    function yOf(v) {
      return pad.t + ((maxY - v) * (h - pad.t - pad.b)) / (maxY - minY);
    }
    var dots = pts
      .map(function (p) {
        return '<circle cx="' + xOf(p.date) + '" cy="' + yOf(p.kg) + '" r="2.5" fill="#2f6b3a"/>';
      })
      .join("");
    var line = rpts
      .map(function (p, i) {
        return (i ? "L" : "M") + xOf(p.date) + "," + yOf(p.avg);
      })
      .join(" ");
    return (
      '<svg viewBox="0 0 ' +
      w +
      " " +
      h +
      '" width="100%" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="' +
      line +
      '" fill="none" stroke="#888" stroke-width="1.5"/>' +
      dots +
      "</svg>"
    );
  }

  function renderSettings() {
    var s = state.settings;
    var html = "<h1>設定</h1>";
    html += '<div class="settings-block"><h2>曜日の割り振り</h2>';
    for (var i = 0; i < 7; i++) {
      var day = (i + 1) % 7; /* Mon..Sun as 1..0 */
      var label = DOW[day];
      html +=
        '<div class="row"><label style="width:2em">' +
        label +
        '</label><select data-sched="' +
        day +
        '">';
      KIND_KEYS.forEach(function (k) {
        html +=
          '<option value="' +
          k +
          '"' +
          (s.schedule[String(day)] === k ? " selected" : "") +
          ">" +
          KIND_LABEL[k] +
          "</option>";
      });
      html += "</select></div>";
    }
    html += "</div>";

    ["upper", "lower", "shoulder_arm"].forEach(function (kind) {
      html +=
        '<div class="settings-block"><h2>メニュー（' +
        KIND_LABEL[kind] +
        "）</h2>";
      (s.menus[kind] || []).forEach(function (it, idx) {
        html +=
          '<div class="menu-ex" data-kind="' +
          kind +
          '" data-idx="' +
          idx +
          '"><div class="row"><strong>' +
          esc(exerciseName(it.id)) +
          "</strong></div>" +
          '<div class="row"><label>セット</label><input type="number" data-menu="' +
          kind +
          "|" +
          idx +
          '|sets" value="' +
          it.sets +
          '">' +
          '<label>下限</label><input type="number" data-menu="' +
          kind +
          "|" +
          idx +
          '|repMin" value="' +
          it.repMin +
          '">' +
          '<label>上限</label><input type="number" data-menu="' +
          kind +
          "|" +
          idx +
          '|repMax" value="' +
          it.repMax +
          '"></div>' +
          '<div class="row"><button type="button" data-menu-up="' +
          kind +
          "|" +
          idx +
          '">上へ</button>' +
          '<button type="button" data-menu-down="' +
          kind +
          "|" +
          idx +
          '">下へ</button>' +
          '<button type="button" data-menu-del="' +
          kind +
          "|" +
          idx +
          '">削除</button></div></div>';
      });
      html +=
        '<div class="row"><select data-add-ex="' +
        kind +
        '"><option value="">種目を追加</option>';
      Object.keys(EXERCISES)
        .concat(Object.keys(state.customExercises))
        .forEach(function (id) {
          html += '<option value="' + esc(id) + '">' + esc(exerciseName(id)) + "</option>";
        });
      html +=
        '</select><button type="button" data-add-btn="' +
        kind +
        '">追加</button></div>';
      html +=
        '<div class="row"><input type="text" placeholder="新しい種目名" data-new-name="' +
        kind +
        '"><select data-new-type="' +
        kind +
        '"><option value="compound">多関節</option><option value="isolation">単関節</option><option value="dumbbell">ダンベル</option></select>' +
        '<button type="button" data-new-btn="' +
        kind +
        '">新規追加</button></div></div>';
    });

    html +=
      '<div class="settings-block"><h2>刻み</h2>' +
      '<div class="row"><label>多関節</label><input type="number" step="0.25" data-step-type="compound" value="' +
      s.steps.compound +
      '"> kg</div>' +
      '<div class="row"><label>単関節</label><input type="number" step="0.25" data-step-type="isolation" value="' +
      s.steps.isolation +
      '"> kg</div>' +
      '<div class="row"><label>ダンベル一覧</label></div>' +
      '<input type="text" data-db-list value="' +
      esc(s.dumbbellList.join(",")) +
      '">' +
      "<h3>種目ごとの上書き</h3>";
    Object.keys(s.stepOverrides || {}).forEach(function (id) {
      html +=
        '<div class="row"><span>' +
        esc(exerciseName(id)) +
        '</span><input type="number" step="0.25" data-ov="' +
        esc(id) +
        '" value="' +
        s.stepOverrides[id] +
        '"><button type="button" data-ov-del="' +
        esc(id) +
        '">削除</button></div>';
    });
    html +=
      '<div class="row"><select id="ov-ex"><option value="">種目</option>';
    Object.keys(EXERCISES)
      .concat(Object.keys(state.customExercises))
      .forEach(function (id) {
        html += '<option value="' + esc(id) + '">' + esc(exerciseName(id)) + "</option>";
      });
    html +=
      '</select><input type="number" step="0.25" id="ov-kg" placeholder="kg"><button type="button" id="ov-add">上書き追加</button></div></div>';

    html +=
      '<div class="settings-block"><h2>ご飯の基準杯数</h2>' +
      '<div class="dial"><button type="button" class="step" data-rice-base="-0.5">−</button>' +
      '<div class="val" id="rice-base-val">' +
      s.riceBase +
      '</div><button type="button" class="step" data-rice-base="0.5">＋</button></div></div>';

    html +=
      '<div class="settings-block"><h2>バックアップ</h2>' +
      '<div class="row"><button type="button" class="primary" id="bak-export">書き出し</button>' +
      '<label class="primary" style="display:inline-flex;align-items:center;padding:10px 14px;background:var(--accent);color:#fff;border-radius:6px;">読み込み' +
      '<input class="hidden-file" type="file" accept="application/json,.json" id="bak-import"></label></div>' +
      '<p class="note">写真はバックアップに含まれません</p></div>';

    html +=
      '<div class="settings-block" id="photo-credits-block"><h2>写真の出典</h2>' +
      '<p class="note">読み込み中</p></div>';
    return html;
  }

  function fillPhotoCredits() {
    var box = document.getElementById("photo-credits-block");
    if (!box) return;
    loadPhotoCredits().then(function (c) {
      var html = "<h2>写真の出典</h2><ul class=\"sources\">";
      Object.keys(c.meal || {}).forEach(function (k) {
        var m = c.meal[k];
        html += "<li>" + creditLine(m.file || k + ".jpg", m) + "</li>";
      });
      Object.keys(SESSION_PHOTO).forEach(function (exId) {
        var sp = SESSION_PHOTO[exId];
        var m = c.session[sp.creditKey];
        if (!m) return;
        html +=
          "<li>" +
          creditLine(sp.file.replace(/^img\/session\//, ""), m) +
          "（" +
          esc(exerciseName(exId)) +
          "）</li>";
      });
      Object.keys(c.exercises || {}).forEach(function (exId) {
        var m = c.exercises[exId];
        html +=
          "<li>" +
          creditLine(m.file || exId + ".jpg", m) +
          "（" +
          esc(exerciseName(exId)) +
          "）</li>";
      });
      html += "</ul>";
      var mk = Object.keys(c.muscles || {});
      if (mk.length) {
        html += '<h3>筋肉図の出典</h3><ul class="sources">';
        mk.forEach(function (k) {
          var m = c.muscles[k];
          html +=
            "<li>" +
            creditLine(m.title || m.file, m) +
            (m.muscle ? "（" + esc(m.muscle) + "）" : "") +
            (m.modified ? " — 加工: " + esc(m.modified) : "") +
            "</li>";
        });
        html += "</ul>";
      }
      box.innerHTML = html;
    });
  }

  function render() {
    var route = parseHash();
    setTabs(route.view);
    var root = document.getElementById("app");
    if (route.view === "cal") {
      root.innerHTML = renderCal();
    } else if (route.view === "day") {
      root.innerHTML = renderDay(route.date);
      hydrateExPhotos(root);
    } else if (route.view === "ex") {
      var pack = renderEx(route.id);
      root.innerHTML = pack.html;
      getPhoto(pack.exId)
        .then(function (blob) {
          var box = document.getElementById("photo-box");
          if (!box) return;
          if (blob) {
            var url = URL.createObjectURL(blob);
            box.innerHTML = '<img alt="" src="' + url + '">';
            return;
          }
          return resolveDefaultPhoto(pack.exId).then(function (def) {
            if (!def) return;
            box.innerHTML = '<img alt="" src="' + esc(def.src) + '">';
          });
        })
        .catch(function () {});
      if (pack.all.length >= 2) {
        var ch = document.getElementById("ex-chart");
        if (ch) ch.innerHTML = buildExChart(pack.all);
      }
      bindExPage(pack.exId);
    } else if (route.view === "weight") {
      var wp = renderWeight();
      if (typeof wp === "string") {
        root.innerHTML = wp;
      } else {
        root.innerHTML = wp.html;
        var wc = document.getElementById("w-chart");
        if (wc) wc.innerHTML = buildWeightChart(wp.daily, wp.roll);
      }
    } else if (route.view === "settings") {
      root.innerHTML = renderSettings();
      fillPhotoCredits();
    }
  }

  function bindExPage(exId) {
    var input = document.getElementById("photo-input");
    if (input) {
      input.addEventListener("change", function () {
        var f = input.files && input.files[0];
        if (!f) return;
        resizeToJpeg(f)
          .then(function (blob) {
            return putPhoto(exId, blob);
          })
          .then(function () {
            render();
          })
          .catch(function () {});
      });
    }
    var del = document.getElementById("photo-del");
    if (del) {
      del.addEventListener("click", function () {
        deletePhoto(exId).then(function () {
          render();
        });
      });
    }
  }

  function completeSet(dateStr, exId, setIdx) {
    var k = draftKey(dateStr, exId, setIdx);
    var dr = state.draft[k];
    if (!dr || dr.kg === "" || dr.kg == null || dr.reps === "" || dr.reps == null) return;
    if (!state.logs[dateStr]) state.logs[dateStr] = {};
    var existing = (state.logs[dateStr][exId] || []).slice();
    if (existing.length !== setIdx) return;
    existing.push({
      kg: Number(dr.kg),
      reps: Number(dr.reps),
      rir: dr.rir,
    });
    state.logs[dateStr][exId] = existing;
    saveLogs();
    delete state.draft[k];
    saveDraft();
    render();
  }

  function exportBackup() {
    var payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      settings: state.settings,
      logs: state.logs,
      meals: state.meals,
      customExercises: state.customExercises,
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "fit2_backup_" + todayStr().replace(/-/g, "") + ".json";
    a.click();
    state.backupAt = Date.now();
    lsSet("backupAt", state.backupAt);
    render();
  }

  function importBackup(file) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = JSON.parse(String(reader.result));
        if (data.settings) state.settings = data.settings;
        if (data.logs) state.logs = data.logs;
        if (data.meals) state.meals = data.meals;
        if (data.customExercises) state.customExercises = data.customExercises;
        saveSettings();
        saveLogs();
        saveMeals();
        saveCustom();
        render();
      } catch (e) {
        /* ignore */
      }
    };
    reader.readAsText(file);
  }

  document.getElementById("app").addEventListener("click", function (ev) {
    var t = ev.target;
    if (!t) return;
    var dayBtn = t.closest("[data-day]");
    if (dayBtn) {
      go("#day/" + dayBtn.getAttribute("data-day"));
      return;
    }
    var act = t.getAttribute("data-act");
    if (act === "more-past") {
      state.calPastExtra += 7;
      render();
      return;
    }
    if (act === "more-future") {
      state.calFutureExtra += 7;
      render();
      return;
    }
    if (t.getAttribute("data-delta") != null && t.getAttribute("data-draft")) {
      var key = t.getAttribute("data-draft");
      var field = t.getAttribute("data-field");
      var delta = Number(t.getAttribute("data-delta"));
      if (!state.draft[key]) state.draft[key] = { kg: null, reps: null, rir: null };
      var cur = state.draft[key][field];
      if (cur == null || cur === "") cur = field === "kg" ? 0 : 0;
      cur = Number(cur) + delta;
      if (field === "reps") cur = Math.max(0, Math.round(cur));
      if (field === "kg") cur = Math.round(cur * 100) / 100;
      state.draft[key][field] = cur;
      saveDraft();
      render();
      return;
    }
    if (t.getAttribute("data-rir") != null) {
      var dk = t.getAttribute("data-draft");
      var rir = Number(t.getAttribute("data-rir"));
      if (!state.draft[dk]) state.draft[dk] = { kg: null, reps: null, rir: null };
      state.draft[dk].rir = state.draft[dk].rir === rir ? null : rir;
      saveDraft();
      render();
      return;
    }
    if (t.getAttribute("data-complete")) {
      var parts = t.getAttribute("data-complete").split("|");
      completeSet(parts[0], parts[1], Number(parts[2]));
      return;
    }
    if (t.getAttribute("data-rice")) {
      var date = t.getAttribute("data-rice");
      var dlt = Number(t.getAttribute("data-delta"));
      var m = mealState(date);
      var next = Math.round((m.rice + dlt) * 2) / 2;
      if (next < 0) next = 0;
      if (next > 20) next = 20;
      setMeal(date, { rice: next });
      render();
      return;
    }
    if (t.getAttribute("data-range") != null) {
      var r = t.getAttribute("data-range");
      state.weightRange = r === "all" ? "all" : Number(r);
      render();
      return;
    }
    if (t.getAttribute("data-rice-base") != null) {
      var rb = Number(t.getAttribute("data-rice-base"));
      var v = Math.round((state.settings.riceBase + rb) * 2) / 2;
      if (v < 0) v = 0;
      if (v > 20) v = 20;
      state.settings.riceBase = v;
      saveSettings();
      render();
      return;
    }
    if (t.id === "bak-export") {
      exportBackup();
      return;
    }
    if (t.getAttribute("data-menu-up")) {
      var u = t.getAttribute("data-menu-up").split("|");
      var arrU = state.settings.menus[u[0]];
      var iu = Number(u[1]);
      if (iu > 0) {
        var tmp = arrU[iu - 1];
        arrU[iu - 1] = arrU[iu];
        arrU[iu] = tmp;
        saveSettings();
        render();
      }
      return;
    }
    if (t.getAttribute("data-menu-down")) {
      var dn = t.getAttribute("data-menu-down").split("|");
      var arrD = state.settings.menus[dn[0]];
      var idn = Number(dn[1]);
      if (idn < arrD.length - 1) {
        var tmp2 = arrD[idn + 1];
        arrD[idn + 1] = arrD[idn];
        arrD[idn] = tmp2;
        saveSettings();
        render();
      }
      return;
    }
    if (t.getAttribute("data-menu-del")) {
      var dl = t.getAttribute("data-menu-del").split("|");
      state.settings.menus[dl[0]].splice(Number(dl[1]), 1);
      saveSettings();
      render();
      return;
    }
    if (t.getAttribute("data-add-btn")) {
      var kind = t.getAttribute("data-add-btn");
      var sel = document.querySelector('select[data-add-ex="' + kind + '"]');
      if (sel && sel.value) {
        state.settings.menus[kind].push({
          id: sel.value,
          sets: 3,
          repMin: 8,
          repMax: 12,
        });
        saveSettings();
        render();
      }
      return;
    }
    if (t.getAttribute("data-new-btn")) {
      var nk = t.getAttribute("data-new-btn");
      var nameEl = document.querySelector('input[data-new-name="' + nk + '"]');
      var typeEl = document.querySelector('select[data-new-type="' + nk + '"]');
      var name = nameEl && nameEl.value.trim();
      if (!name) return;
      var id = "custom_" + Date.now();
      state.customExercises[id] = {
        name: name,
        type: typeEl.value,
        part: "その他",
        setup: "",
        move: "",
        fail: "",
        tip: "",
      };
      state.settings.menus[nk].push({ id: id, sets: 3, repMin: 8, repMax: 12 });
      saveCustom();
      saveSettings();
      render();
      return;
    }
    if (t.id === "ov-add") {
      var oid = document.getElementById("ov-ex").value;
      var okg = Number(document.getElementById("ov-kg").value);
      if (!oid || !isFinite(okg)) return;
      state.settings.stepOverrides[oid] = okg;
      saveSettings();
      render();
      return;
    }
    if (t.getAttribute("data-ov-del")) {
      delete state.settings.stepOverrides[t.getAttribute("data-ov-del")];
      saveSettings();
      render();
      return;
    }
  });

  document.getElementById("app").addEventListener("change", function (ev) {
    var t = ev.target;
    if (t.getAttribute("data-meal-check")) {
      var p = t.getAttribute("data-meal-check").split("|");
      var m = mealState(p[0]);
      var checks = Object.assign({}, m.checks);
      checks[p[1]] = !!t.checked;
      setMeal(p[0], { checks: checks });
      return;
    }
    if (t.getAttribute("data-draft") && t.getAttribute("data-field")) {
      var key = t.getAttribute("data-draft");
      var field = t.getAttribute("data-field");
      if (!state.draft[key]) state.draft[key] = { kg: null, reps: null, rir: null };
      var val = t.value === "" ? null : Number(t.value);
      state.draft[key][field] = val;
      saveDraft();
      return;
    }
    if (t.getAttribute("data-sched") != null) {
      state.settings.schedule[String(t.getAttribute("data-sched"))] = t.value;
      saveSettings();
      return;
    }
    if (t.getAttribute("data-menu")) {
      var mp = t.getAttribute("data-menu").split("|");
      var item = state.settings.menus[mp[0]][Number(mp[1])];
      item[mp[2]] = Number(t.value);
      saveSettings();
      return;
    }
    if (t.getAttribute("data-step-type")) {
      state.settings.steps[t.getAttribute("data-step-type")] = Number(t.value);
      saveSettings();
      return;
    }
    if (t.hasAttribute("data-db-list")) {
      state.settings.dumbbellList = t.value
        .split(",")
        .map(function (x) {
          return Number(String(x).trim());
        })
        .filter(function (n) {
          return isFinite(n);
        });
      saveSettings();
      return;
    }
    if (t.getAttribute("data-ov")) {
      state.settings.stepOverrides[t.getAttribute("data-ov")] = Number(t.value);
      saveSettings();
      return;
    }
    if (t.id === "bak-import" && t.files && t.files[0]) {
      importBackup(t.files[0]);
    }
  });

  window.addEventListener("hashchange", render);

  function loadWeight() {
    return fetch("data/weight.json", { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("fail");
        return r.json();
      })
      .then(function (data) {
        state.weightData = data;
        state.weightError = false;
      })
      .catch(function () {
        state.weightData = null;
        state.weightError = true;
      });
  }

  // per-date menu changes written by Claude (data/plan.json: {"days":{"YYYY-MM-DD":"lower"}})
  function loadPlan() {
    return fetch("data/plan.json", { cache: "no-store" })
      .then(function (r) {
        return r.ok ? r.json() : {};
      })
      .then(function (data) {
        state.planDays = (data && data.days) || {};
        state.planAddByKind = (data && data.addByKind) || null;
      })
      .catch(function () {
        state.planDays = {};
        state.planAddByKind = null;
      });
  }

  loadAll();
  Promise.all([loadWeight(), loadPlan()]).then(function () {
    render();
  });

  /* expose for screenshot seeding */
  window.__FIT2__ = {
    state: state,
    render: render,
    loadAll: loadAll,
    saveLogs: saveLogs,
    saveMeals: saveMeals,
    saveSettings: saveSettings,
    lsSet: lsSet,
    defaultSettings: defaultSettings,
  };
})();
