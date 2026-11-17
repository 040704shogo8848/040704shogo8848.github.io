import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const source = readFileSync(new URL("../app.js", import.meta.url), "utf8");

function makeResponse(status, body) {
  return { status, ok: status >= 200 && status < 300, json: async () => body };
}

async function boot(fetchImpl) {
  const values = new Map();
  const calls = [];
  const app = { addEventListener() {}, innerHTML: "" };
  const document = {
    visibilityState: "visible",
    getElementById(id) {
      if (id === "app") return app;
      if (["tab-cal", "tab-weight", "tab-settings"].includes(id)) return { classList: { toggle() {} } };
      return null;
    },
    addEventListener() {},
    createElement() { return { click() {} }; },
  };
  const context = {
    console,
    Date,
    JSON,
    Math,
    Number,
    String,
    Object,
    Array,
    Promise,
    Error,
    Uint8Array,
    TextEncoder,
    TextDecoder,
    setTimeout,
    clearTimeout,
    btoa: (s) => Buffer.from(s, "binary").toString("base64"),
    atob: (s) => Buffer.from(s, "base64").toString("binary"),
    localStorage: {
      getItem(k) { return values.has(k) ? values.get(k) : null; },
      setItem(k, v) { values.set(k, String(v)); },
      removeItem(k) { values.delete(k); },
    },
    document,
    location: { hash: "#settings" },
    window: { EXERCISES: {}, addEventListener() {} },
    fetch: async (...args) => {
      if (String(args[0]).startsWith("data/")) return makeResponse(200, {});
      calls.push({ url: args[0], options: args[1] });
      return fetchImpl(...args);
    },
  };
  vm.createContext(context);
  vm.runInContext(source, context);
  await Promise.resolve();
  await Promise.resolve();
  return { api: context.window.__FIT2__, values, calls };
}

async function syncWith(fetchImpl, setup) {
  const env = await boot(fetchImpl);
  env.values.set("fit2_ghToken", "token");
  setup(env.api.state);
  await env.api.syncNow();
  return env;
}

// 404 creates a file without sha.
{
  const calls = [];
  const env = await syncWith(async (url, options) => {
    calls.push({ url, options });
    return calls.length === 1 ? makeResponse(404, {}) : makeResponse(201, {});
  }, (state) => { state.logs = { "2026-11-17": { squat: [{ kg: 50, reps: 8, note: "日本語" }] } }; });
  const body = JSON.parse(env.calls[1].options.body);
  assert.equal(env.calls.length, 2);
  assert.equal(body.sha, undefined);
  assert.equal(JSON.parse(env.api.decodeUtf8Base64(body.content)).logs["2026-11-17"].squat[0].note, "日本語");
}

// Same content except updatedAt does not create a PUT.
{
  const calls = [];
  let stateRef;
  const env = await syncWith(async (url, options) => {
    calls.push({ url, options });
    if (calls.length === 1) {
      const p = { version: 1, updatedAt: "old", logs: stateRef.logs, meals: stateRef.meals, settings: stateRef.settings, customExercises: stateRef.customExercises };
      return makeResponse(200, { sha: "sha1", content: Buffer.from(JSON.stringify(p)).toString("base64") });
    }
    throw new Error("PUT should not happen");
  }, (state) => { stateRef = state; state.logs = {}; state.meals = {}; state.customExercises = {}; });
  assert.equal(env.calls.length, 1);
}

// Different content uses the returned sha.
{
  const calls = [];
  const env = await syncWith(async (url, options) => {
    calls.push({ url, options });
    return calls.length === 1
      ? makeResponse(200, { sha: "sha2", content: Buffer.from(JSON.stringify({ version: 1, logs: { old: 1 }, meals: {}, settings: {}, customExercises: {} })).toString("base64") })
      : makeResponse(200, {});
  }, (state) => { state.logs = { new: 2 }; state.meals = {}; state.customExercises = {}; });
  assert.equal(env.calls.length, 2);
  assert.equal(JSON.parse(env.calls[1].options.body).sha, "sha2");
}

// A conflict performs one fresh GET and then succeeds.
{
  const calls = [];
  const env = await syncWith(async (url, options) => {
    calls.push({ url, options });
    if (calls.length === 1) return makeResponse(200, { sha: "old", content: Buffer.from("{}").toString("base64") });
    if (calls.length === 2) return makeResponse(409, {});
    if (calls.length === 3) return makeResponse(200, { sha: "fresh", content: Buffer.from("{}").toString("base64") });
    return makeResponse(200, {});
  }, (state) => { state.logs = { changed: true }; });
  assert.equal(env.calls.length, 4);
  assert.equal(JSON.parse(env.calls[3].options.body).sha, "fresh");
}

console.log("ALL SYNC TESTS PASSED");
