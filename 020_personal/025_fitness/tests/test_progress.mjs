import assert from "node:assert/strict";
import { readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const tmpCjs = join(tmpdir(), "fit2_progress_" + process.pid + ".cjs");
writeFileSync(tmpCjs, readFileSync(join(__dirname, "..", "progress.js")));
const P = require(tmpCjs);
unlinkSync(tmpCjs);

function sess(date, kgs, reps) {
  const sets = [];
  for (let i = 0; i < kgs.length; i++) {
    sets.push({ kg: kgs[i], reps: reps[i], rir: null });
  }
  return { date, sets };
}

function neverDeload() {
  return false;
}

// 1. first session
{
  const t = P.nextTarget([], { sets: 3, repMin: 8, repMax: 12 }, { type: "fixed", kg: 2.5 });
  assert.equal(t.kg, null);
  assert.deepEqual(t.reps, [8, 8, 8]);
  assert.equal(t.sets, 3);
  assert.equal(t.reason, "初回: 重さを決めて記録");
  console.log("OK 1 first");
}

// 2. all hit repMax -> +2.5
{
  const hist = [sess("2026-11-01", [60, 60, 60], [12, 12, 12])];
  const t = P.nextTarget(hist, { sets: 3, repMin: 8, repMax: 12 }, { type: "fixed", kg: 2.5 });
  assert.equal(t.kg, 62.5);
  assert.deepEqual(t.reps, [8, 8, 8]);
  assert.match(t.reason, /全セット12回達成のため\+2\.5kg/);
  console.log("OK 2 +2.5kg");
}

// 3. almost all max -> stay, +1 capped
{
  const hist = [sess("2026-11-01", [60, 60, 60], [12, 12, 11])];
  const t = P.nextTarget(hist, { sets: 3, repMin: 8, repMax: 12 }, { type: "fixed", kg: 2.5 });
  assert.equal(t.kg, 60);
  assert.deepEqual(t.reps, [12, 12, 12]);
  console.log("OK 3 cap at max");
}

// 4. +1 each
{
  const hist = [sess("2026-11-01", [60, 60, 60], [9, 8, 7])];
  const t = P.nextTarget(hist, { sets: 3, repMin: 8, repMax: 12 }, { type: "fixed", kg: 2.5 });
  assert.equal(t.kg, 60);
  assert.deepEqual(t.reps, [10, 9, 8]);
  console.log("OK 4 +1 reps");
}

// 5. dumbbell list step
{
  const hist = [sess("2026-11-01", [12, 12, 12], [10, 10, 10])];
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
  const t = P.nextTarget(hist, { sets: 3, repMin: 6, repMax: 10 }, { type: "list", list });
  assert.equal(t.kg, 14);
  assert.deepEqual(t.reps, [6, 6, 6]);
  assert.match(t.reason, /12kg→14kg/);
  console.log("OK 5 dumbbell step");
}

// 6. dumbbell max hold
{
  const hist = [sess("2026-11-01", [30, 30, 30], [10, 10, 10])];
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
  const t = P.nextTarget(hist, { sets: 3, repMin: 6, repMax: 10 }, { type: "list", list });
  assert.equal(t.kg, 30);
  assert.match(t.reason, /最大/);
  console.log("OK 6 dumbbell max");
}

// 7. second set below base -> no increase
{
  const hist = [sess("2026-11-01", [60, 57.5, 60], [12, 12, 12])];
  const t = P.nextTarget(hist, { sets: 3, repMin: 8, repMax: 12 }, { type: "fixed", kg: 2.5 });
  assert.equal(t.kg, 60);
  assert.deepEqual(t.reps, [12, 12, 12]);
  console.log("OK 7 below base no increase");
}

// 8. presc 3 sets, prev 2 sets
{
  const hist = [sess("2026-11-01", [60, 60], [10, 9])];
  const t = P.nextTarget(hist, { sets: 3, repMin: 8, repMax: 12 }, { type: "fixed", kg: 2.5 });
  assert.equal(t.kg, 60);
  assert.deepEqual(t.reps, [11, 10, 10]);
  console.log("OK 8 extend sets");
}

// 9. isRegression
{
  const a = sess("2026-11-01", [60, 60, 60], [10, 10, 10]);
  const up = sess("2026-11-05", [62.5, 62.5, 62.5], [8, 8, 8]);
  const down = sess("2026-11-05", [57.5, 57.5, 57.5], [10, 10, 10]);
  const less = sess("2026-11-05", [60, 60, 60], [9, 9, 9]);
  const same = sess("2026-11-05", [60, 60, 60], [10, 10, 10]);
  const setsDiff = sess("2026-11-05", [60, 60], [10, 10]);
  assert.equal(P.isRegression(a, up, false, false), false);
  assert.equal(P.isRegression(a, down, false, false), true);
  assert.equal(P.isRegression(a, less, false, false), true);
  assert.equal(P.isRegression(a, same, false, false), false);
  assert.equal(P.isRegression(a, setsDiff, false, false), false);
  assert.equal(P.isRegression(a, less, true, false), false);
  assert.equal(P.isRegression(a, less, false, true), false);
  console.log("OK 9 isRegression");
}

// 10. recoveryStatus consecutive regression
{
  const ex = "lat_pulldown";
  // Mon 2026-11-09 .. Sun 2026-11-15
  const s1 = sess("2026-11-09", [60, 60, 60], [10, 10, 10]);
  const s2 = sess("2026-11-11", [60, 60, 60], [9, 9, 9]);
  const s3 = sess("2026-11-13", [60, 60, 60], [8, 8, 8]);
  const all = { [ex]: [s1, s2, s3] };

  const after = P.recoveryStatus(all, "2026-11-14", neverDeload);
  assert.equal(after.deload, true);
  assert.ok(after.causes.includes(ex));
  assert.equal(after.since, "2026-11-13");

  const onS3 = P.recoveryStatus(all, "2026-11-13", neverDeload);
  assert.equal(onS3.deload, false);

  const sun = P.recoveryStatus(all, "2026-11-15", neverDeload);
  assert.equal(sun.deload, true);

  const nextMon = P.recoveryStatus(all, "2026-11-16", neverDeload);
  assert.equal(nextMon.deload, false);
  console.log("OK 10 recoveryStatus week");
}

// 11. weight up breaks consecutive regression
{
  const ex = "lat_pulldown";
  const s1 = sess("2026-11-01", [60, 60, 60], [12, 12, 12]);
  const s2 = sess("2026-11-05", [62.5, 62.5, 62.5], [8, 8, 8]);
  const s3 = sess("2026-11-08", [62.5, 62.5, 62.5], [7, 7, 7]);
  assert.equal(P.isRegression(s1, s2, false, false), false);
  assert.equal(P.isRegression(s2, s3, false, false), true);
  const r = P.recoveryStatus({ [ex]: [s1, s2, s3] }, "2026-11-09", neverDeload);
  assert.equal(r.deload, false);
  console.log("OK 11 no consecutive");
}

// 12. half sets
{
  assert.equal(P.halfSets(3), 2);
  assert.equal(P.halfSets(2), 1);
  assert.equal(P.halfSets(4), 2);
  console.log("OK 12 halfSets");
}

// 13. one exercise causes deload for all (half sets applied by caller)
{
  const bad = "lat_pulldown";
  const s1 = sess("2026-11-09", [60, 60, 60], [10, 10, 10]);
  const s2 = sess("2026-11-11", [60, 60, 60], [9, 9, 9]);
  const s3 = sess("2026-11-13", [60, 60, 60], [8, 8, 8]);
  const all = {
    [bad]: [s1, s2, s3],
    incline_db_press: [sess("2026-11-10", [20, 20, 20], [10, 10, 10])],
    chest_fly: [sess("2026-11-10", [30, 30, 30], [12, 12, 12])],
    seated_cable_row: [sess("2026-11-10", [50, 50, 50], [10, 10, 10])],
    cable_lateral_raise: [sess("2026-11-10", [10, 10, 10], [12, 12, 12])],
  };
  const r = P.recoveryStatus(all, "2026-11-14", neverDeload);
  assert.equal(r.deload, true);
  assert.deepEqual(r.causes, [bad]);
  // all exercises on that day use halfSets
  assert.equal(P.halfSets(3), 2);
  assert.equal(P.halfSets(4), 2);
  console.log("OK 13 one cause halves all");
}

console.log("ALL PROGRESS TESTS PASSED");
