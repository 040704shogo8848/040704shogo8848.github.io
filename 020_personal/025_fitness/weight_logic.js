function parseDate(dateStr) {
  var parts = dateStr.split("-");
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
}

function formatDate(d) {
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

function addDays(dateStr, n) {
  var d = parseDate(dateStr);
  d.setDate(d.getDate() + n);
  return formatDate(d);
}

function dayDiff(a, b) {
  var da = parseDate(a);
  var db = parseDate(b);
  return Math.round((db.getTime() - da.getTime()) / 86400000);
}

function isValidDateStr(s) {
  if (typeof s !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  var parts = s.split("-");
  var y = Number(parts[0]);
  var m = Number(parts[1]);
  var day = Number(parts[2]);
  if (m < 1 || m > 12 || day < 1 || day > 31) return false;
  var d = new Date(y, m - 1, day);
  return d.getFullYear() === y && d.getMonth() === m - 1 && d.getDate() === day;
}

function avgWeight7(weights, today) {
  var start = addDays(today, -6);
  var sum = 0;
  var count = 0;
  for (var i = 0; i < weights.length; i++) {
    var w = weights[i];
    if (w.date >= start && w.date <= today) {
      sum += w.kg;
      count++;
    }
  }
  if (count === 0) return null;
  return sum / count;
}

function avgRice7(rice, today) {
  var start = addDays(today, -6);
  var sum = 0;
  var count = 0;
  for (var i = 0; i < rice.length; i++) {
    var r = rice[i];
    if (r.date >= start && r.date <= today) {
      sum += r.cups;
      count++;
    }
  }
  if (count === 0) return { avg: null, count: 0 };
  return { avg: sum / count, count: count };
}

function pace28(weights, today) {
  var start = addDays(today, -27);
  var pts = [];
  for (var i = 0; i < weights.length; i++) {
    var w = weights[i];
    if (w.date >= start && w.date <= today) {
      pts.push({ x: dayDiff(start, w.date), y: w.kg });
    }
  }
  var count = pts.length;
  if (count < 10) {
    return { pace: null, count: count, need: 10 - count };
  }
  var sumX = 0;
  var sumY = 0;
  var sumXY = 0;
  var sumXX = 0;
  for (var j = 0; j < count; j++) {
    sumX += pts[j].x;
    sumY += pts[j].y;
    sumXY += pts[j].x * pts[j].y;
    sumXX += pts[j].x * pts[j].x;
  }
  var denom = count * sumXX - sumX * sumX;
  var slope = denom === 0 ? 0 : (count * sumXY - sumX * sumY) / denom;
  return { pace: slope * 30, count: count, need: 0 };
}

function judge(pace) {
  if (pace === null || pace === undefined) return "insufficient";
  if (pace > 1.0) return "decrease";
  if (pace < 0.5) return "increase";
  return "keep";
}

function rolling7(weights) {
  var sorted = weights.slice().sort(function (a, b) {
    return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
  });
  var result = [];
  for (var i = 0; i < sorted.length; i++) {
    var d = sorted[i].date;
    var start = addDays(d, -6);
    var sum = 0;
    var count = 0;
    for (var j = 0; j < sorted.length; j++) {
      if (sorted[j].date >= start && sorted[j].date <= d) {
        sum += sorted[j].kg;
        count++;
      }
    }
    result.push({ date: d, avg: sum / count });
  }
  return result;
}

function compareTime(a, b) {
  var ta = a == null ? null : a;
  var tb = b == null ? null : b;
  if (ta === null && tb === null) return 0;
  if (ta === null) return -1;
  if (tb === null) return 1;
  if (ta < tb) return -1;
  if (ta > tb) return 1;
  return 0;
}

function dailyWeights(entries) {
  var byDate = {};
  var dates = [];
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i];
    var d = e.date;
    if (!byDate.hasOwnProperty(d)) {
      byDate[d] = [];
      dates.push(d);
    }
    byDate[d].push(e);
  }
  dates.sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  var result = [];
  for (var j = 0; j < dates.length; j++) {
    var date = dates[j];
    var list = byDate[date];
    var earliest = list[0];
    for (var k = 1; k < list.length; k++) {
      if (compareTime(list[k].time, earliest.time) < 0) {
        earliest = list[k];
      }
    }
    result.push({
      date: date,
      kg: earliest.kg,
      time: earliest.time == null ? null : earliest.time,
      count: list.length,
    });
  }
  return result;
}

function recordKey(row) {
  return row.date + "\0" + (row.time == null ? "" : String(row.time));
}

function mergeRecords(existing, incoming) {
  var keyCounts = {};
  for (var i = 0; i < incoming.length; i++) {
    var k0 = recordKey(incoming[i]);
    keyCounts[k0] = (keyCounts[k0] || 0) + 1;
  }
  var existingMap = {};
  for (var e = 0; e < existing.length; e++) {
    existingMap[recordKey(existing[e])] = existing[e].kg;
  }
  var out = [];
  for (var k = 0; k < incoming.length; k++) {
    var row = incoming[k];
    var date = row.date;
    var kg = row.kg;
    var key = recordKey(row);
    var status;
    var oldKg = undefined;
    if (!isValidDateStr(date) || typeof kg !== "number" || !isFinite(kg) || kg < 30 || kg > 200) {
      status = "invalid";
    } else if (keyCounts[key] > 1) {
      status = "dup";
    } else if (existingMap.hasOwnProperty(key)) {
      status = "exists";
      oldKg = existingMap[key];
    } else {
      status = "new";
    }
    var item = { date: date, kg: kg, status: status };
    if (oldKg !== undefined) item.oldKg = oldKg;
    out.push(item);
  }
  return out;
}

function lbToKg(lb) {
  return Math.round(lb * 0.45359237 * 10) / 10;
}

function seededNoise(dateStr) {
  var h = 0;
  for (var i = 0; i < dateStr.length; i++) {
    h = (h * 31 + dateStr.charCodeAt(i)) | 0;
  }
  var x = Math.sin(h) * 10000;
  return x - Math.floor(x);
}

function makeSampleData(today) {
  var weights = [];
  var rice = [];
  // ±0.6kg の揺らぎ（日付から決まる擬似乱数の振幅 0.4〜0.6）に、
  // 線形傾きと直交する4日周期符号を掛け、毎回同じ値でペースが目標帯に入るようにする
  var ortho = [1, -1, -1, 1];
  for (var i = 34; i >= 0; i--) {
    var date = addDays(today, -i);
    var daysFromStart = 34 - i;
    var base = 71.0 + (0.8 / 30) * daysFromStart;
    var amp = 0.4 + seededNoise(date) * 0.2;
    var noise = ortho[daysFromStart % 4] * amp;
    var kg = Math.round((base + noise) * 10) / 10;
    weights.push({ date: date, kg: kg });
    var cupsRaw = 5.5 + seededNoise(date + "-r");
    var cups = Math.round(cupsRaw * 2) / 2;
    if (cups < 5.5) cups = 5.5;
    if (cups > 6.5) cups = 6.5;
    rice.push({ date: date, cups: cups });
  }
  return { weights: weights, rice: rice };
}

if (typeof module !== "undefined") {
  module.exports = {
    addDays: addDays,
    dayDiff: dayDiff,
    avgWeight7: avgWeight7,
    avgRice7: avgRice7,
    pace28: pace28,
    judge: judge,
    rolling7: rolling7,
    dailyWeights: dailyWeights,
    mergeRecords: mergeRecords,
    lbToKg: lbToKg,
    makeSampleData: makeSampleData,
  };
}
