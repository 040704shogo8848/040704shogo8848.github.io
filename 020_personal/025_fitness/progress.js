/**
 * Next-target and recovery helpers. Pure functions only.
 */
"use strict";

function baseKg(session) {
  if (!session || !session.sets || !session.sets.length) return null;
  return session.sets[0].kg;
}

function allAtOrAboveBaseAndRepMax(session, repMax) {
  if (!session || !session.sets || !session.sets.length) return false;
  var base = baseKg(session);
  for (var i = 0; i < session.sets.length; i++) {
    var s = session.sets[i];
    if (s.kg < base) return false;
    if (s.reps < repMax) return false;
  }
  return true;
}

function nextListKg(list, base) {
  var next = null;
  for (var i = 0; i < list.length; i++) {
    if (list[i] > base && (next === null || list[i] < next)) next = list[i];
  }
  return next;
}

function nextTarget(history, presc, step) {
  var sets = presc.sets;
  var repMin = presc.repMin;
  var repMax = presc.repMax;
  var repsMinArr = [];
  for (var i = 0; i < sets; i++) repsMinArr.push(repMin);

  if (!history || !history.length) {
    return {
      kg: null,
      reps: repsMinArr,
      sets: sets,
      reason: "初回: 重さを決めて記録",
    };
  }

  var last = history[history.length - 1];
  var base = baseKg(last);

  if (allAtOrAboveBaseAndRepMax(last, repMax)) {
    if (step.type === "fixed") {
      return {
        kg: base + step.kg,
        reps: repsMinArr,
        sets: sets,
        reason: "全セット" + repMax + "回達成のため+" + step.kg + "kg",
      };
    }
    var next = nextListKg(step.list || [], base);
    if (next === null) {
      return {
        kg: base,
        reps: repsMinArr,
        sets: sets,
        reason: "ダンベル一覧の最大のため据え置き",
      };
    }
    return {
      kg: next,
      reps: repsMinArr,
      sets: sets,
      reason: "全セット" + repMax + "回達成のため" + base + "kg→" + next + "kg",
    };
  }

  var reps = [];
  var prevSets = last.sets || [];
  for (var j = 0; j < sets; j++) {
    var prevReps;
    if (j < prevSets.length) {
      prevReps = prevSets[j].reps;
    } else {
      prevReps = prevSets.length ? prevSets[prevSets.length - 1].reps : repMin - 1;
    }
    reps.push(Math.min(prevReps + 1, repMax));
  }
  return {
    kg: base,
    reps: reps,
    sets: sets,
    reason: "上限" + repMax + "回に未達のため同じ重さで各セット+1回",
  };
}

function isRegression(prev, cur, prevDeload, curDeload) {
  if (prevDeload || curDeload) return false;
  var prevBase = baseKg(prev);
  var curBase = baseKg(cur);
  if (prevBase == null || curBase == null) return false;
  if (curBase > prevBase) return false;
  if (curBase < prevBase) return true;
  var prevSets = prev.sets || [];
  var curSets = cur.sets || [];
  if (prevSets.length !== curSets.length) return false;
  var prevSum = 0;
  var curSum = 0;
  for (var i = 0; i < prevSets.length; i++) prevSum += prevSets[i].reps;
  for (var j = 0; j < curSets.length; j++) curSum += curSets[j].reps;
  return curSum < prevSum;
}

function mondayOf(dateStr) {
  var parts = dateStr.split("-");
  var d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  var day = d.getDay();
  var diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var dayNum = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + dayNum;
}

function sundayOf(dateStr) {
  var mon = mondayOf(dateStr);
  var parts = mon.split("-");
  var d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  d.setDate(d.getDate() + 6);
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var dayNum = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + dayNum;
}

function addDays(dateStr, n) {
  var parts = dateStr.split("-");
  var d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  d.setDate(d.getDate() + n);
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var dayNum = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + dayNum;
}

function sessionsBefore(sessions, date) {
  return (sessions || [])
    .filter(function (s) {
      return s.date < date;
    })
    .slice()
    .sort(function (a, b) {
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
    });
}

function recoveryStatus(allSessionsByExercise, date, isDeloadWeek) {
  var causes = [];
  var since = null;
  var ids = Object.keys(allSessionsByExercise || {});

  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    var hist = sessionsBefore(allSessionsByExercise[id], date);
    if (hist.length < 3) continue;
    var s1 = hist[hist.length - 3];
    var s2 = hist[hist.length - 2];
    var s3 = hist[hist.length - 1];
    var d1 = isDeloadWeek ? !!isDeloadWeek(s1.date) : false;
    var d2 = isDeloadWeek ? !!isDeloadWeek(s2.date) : false;
    var d3 = isDeloadWeek ? !!isDeloadWeek(s3.date) : false;
    if (isRegression(s1, s2, d1, d2) && isRegression(s2, s3, d2, d3)) {
      causes.push(id);
      if (since === null || s3.date > since) since = s3.date;
    }
  }

  if (!causes.length || since === null) {
    return { deload: false, causes: [], since: null };
  }

  var weekEnd = sundayOf(since);
  var deload = date > since && date <= weekEnd;
  return { deload: deload, causes: causes, since: since };
}

function halfSets(sets) {
  return Math.ceil(sets / 2);
}

var Progress = {
  nextTarget: nextTarget,
  isRegression: isRegression,
  recoveryStatus: recoveryStatus,
  halfSets: halfSets,
  baseKg: baseKg,
  mondayOf: mondayOf,
  sundayOf: sundayOf,
  addDays: addDays,
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = Progress;
}
if (typeof globalThis !== "undefined") {
  globalThis.Progress = Progress;
}
