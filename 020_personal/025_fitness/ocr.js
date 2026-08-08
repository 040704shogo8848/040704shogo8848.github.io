/* 体組成計のスクショから数値を読む。
   画像はブラウザ内だけで処理し、どこにも送信しない。

   方式 — 画像全体を一度に OCR させると、日本語ラベルが数字として誤検出され、
   拾った数値の並びがずれて「正しい値が別の項目に入る」という一番たちの悪い
   壊れ方をする。実測で 13項目中 2〜7項目しか合わなかった。

   そこでアプリの画面レイアウトが固定であることを使い、値の位置を幅・高さの
   比率で持っておいて、セルを1つずつ切り出して読む。切り出した領域には数字しか
   写らないので PSM 7（単一行）と数字ホワイトリストが効き、どの項目かも位置で
   確定するので並びのずれが原理的に起きない。実測 13/13。

   機種や画面比率が変わると比率がずれるため、読み取り後は切り出した画像を値の
   横に並べて目視できるようにし、ずれた場合はオフセットで補正する。            */

/* 読み取りエンジンは外部の CDN から取る。バージョンを固定し、本体には
   SRI ハッシュを付けて改ざんされたコードが動かないようにしている。
   ハッシュを更新せずに TESS_VER だけ上げると読み込みが失敗する（そのほうが安全）。
   画像そのものは worker 内で処理されるだけで、どこにも送信しない。          */
const TESS_VER = "5.1.1";
const TESS_BASE = "https://cdn.jsdelivr.net/npm/tesseract.js@" + TESS_VER + "/dist/";
const TESS_SRI = {
  main: "sha384-GJqSu7vueQ9qN0E9yLPb3Wtpd7OrgK8KmYzC8T1IysG1bcvxvIO4qtYR/D3A991F"
};

/* 値の位置。画像の幅・高さに対する比率で持つ。
   1列目〜3列目 × 1行目〜4行目の12項目と、上部の体重。表示順は SCALE_FIELDS と同じ */
const LAYOUT = {
  weight: { x0: 0.040, x1: 0.230, y0: 0.269, y1: 0.306 },
  colsX: [[0.040, 0.325], [0.365, 0.648], [0.686, 0.970]],
  rowsY: [[0.386, 0.417], [0.521, 0.552], [0.656, 0.687], [0.791, 0.822]]
};

/** 表示順に並んだ13個の切り出し枠を返す。dx/dy は比率のオフセット */
function cellBoxes(dx, dy) {
  dx = dx || 0; dy = dy || 0;
  const sh = b => ({ x0: b.x0 + dx, x1: b.x1 + dx, y0: b.y0 + dy, y1: b.y1 + dy });
  const out = [sh(LAYOUT.weight)];
  LAYOUT.rowsY.forEach(ry => LAYOUT.colsX.forEach(cx =>
    out.push(sh({ x0: cx[0], x1: cx[1], y0: ry[0], y1: ry[1] }))));
  return out;
}

/* ─── 値の検証 ───────────────────────────────────────────────────────────
   nums は表示順の配列。null は読めなかった項目                              */
function assignFields(nums, fields) {
  const values = {}, warnings = [];
  fields.forEach((f, i) => {
    const v = nums[i];
    if (v == null || !isFinite(v)) { warnings.push(f[1] + " を読み取れなかった"); return; }
    values[f[0]] = v;
    if (f[3] != null && (v < f[3] || v > f[4])) {
      warnings.push(f[1] + " が " + v + " と読めた。想定は " + f[3] + "〜" + f[4] + " なので確認する");
    }
  });
  return { values: values, warnings: warnings };
}

/* 数値の羅列（貼り付け用） */
function parseNumberList(text, fields) {
  const nums = (String(text).match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
  return assignFields(nums, fields);
}

/* ─── ここから下はブラウザ専用 ───────────────────────────────────────────── */

/** 1セルを切り出し、反転とコントラスト調整をかけた canvas を返す */
function cropCell(img, box, scale) {
  scale = scale || 2;
  const W = img.naturalWidth, H = img.naturalHeight;
  const x = Math.round(box.x0 * W), y = Math.round(box.y0 * H);
  const w = Math.max(1, Math.round((box.x1 - box.x0) * W));
  const h = Math.max(1, Math.round((box.y1 - box.y0) * H));
  const cv = document.createElement("canvas");
  cv.width = Math.round(w * scale); cv.height = Math.round(h * scale);
  const cx = cv.getContext("2d", { willReadFrequently: true });
  cx.imageSmoothingQuality = "high";
  cx.drawImage(img, x, y, w, h, 0, 0, cv.width, cv.height);

  const d = cx.getImageData(0, 0, cv.width, cv.height), p = d.data;
  let sum = 0, n = 0;
  for (let i = 0; i < p.length; i += 4 * 11) { sum += 0.299 * p[i] + 0.587 * p[i + 1] + 0.114 * p[i + 2]; n++; }
  const invert = (sum / n) < 128;          // 暗い背景なら反転して黒文字にする
  for (let i = 0; i < p.length; i += 4) {
    let v = 0.299 * p[i] + 0.587 * p[i + 1] + 0.114 * p[i + 2];
    if (invert) v = 255 - v;
    v = (v - 118) * 2.6 + 128;
    v = v < 0 ? 0 : v > 255 ? 255 : v;
    p[i] = p[i + 1] = p[i + 2] = v; p[i + 3] = 255;
  }
  cx.putImageData(d, 0, 0);
  return cv;
}

/* tesseract.js はこのサイト唯一の外部依存。読み取りを押したときだけ取りに行く */
function loadTesseract() {
  if (window.Tesseract) return Promise.resolve();
  return new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = TESS_BASE + "tesseract.min.js";
    s.integrity = TESS_SRI.main;      // 中身が1バイトでも違えばブラウザが実行を拒む
    s.crossOrigin = "anonymous";
    s.onload = () => res();
    s.onerror = () => rej(new Error("読み取りライブラリを取得できなかった（通信不可か、配信内容が変わっている）"));
    document.head.appendChild(s);
  });
}

/**
 * スクショから13項目を読む。
 * offset は {dx, dy}（比率）。戻り値に cells（確認用の画像URL）を含める。
 */
async function readScaleImage(img, offset, onProgress) {
  offset = offset || {};
  await loadTesseract();
  const boxes = cellBoxes(offset.dx, offset.dy);
  const canvases = boxes.map(b => cropCell(img, b, 2));
  // worker と wasm の取得先も同じ固定バージョンに寄せる。既定のままだと
  // 実行時に別バージョンを取りに行くことがあり、何が動いているか読めなくなる
  const worker = await Tesseract.createWorker("eng", 1, {
    workerPath: TESS_BASE + "worker.min.js",
    corePath: "https://cdn.jsdelivr.net/npm/tesseract.js-core@5.1.1",
    langPath: "https://tessdata.projectnaptha.com/4.0.0"
  });
  const nums = [];
  try {
    await worker.setParameters({
      tessedit_pageseg_mode: "7",              // 単一行として読む
      tessedit_char_whitelist: "0123456789."
    });
    for (let i = 0; i < canvases.length; i++) {
      if (onProgress) onProgress(i, canvases.length);
      const r = await worker.recognize(canvases[i]);
      const t = String((r.data && r.data.text) || "").replace(/[^0-9.]/g, "").replace(/^\.+|\.+$/g, "");
      nums.push(t === "" ? null : parseFloat(t));
    }
  } finally {
    try { await worker.terminate(); } catch (e) { /* 後片付けの失敗は無視する */ }
  }
  const res = assignFields(nums, SCALE_FIELDS);
  res.cells = canvases.map(c => c.toDataURL("image/png"));
  return res;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { cellBoxes, assignFields, parseNumberList, LAYOUT };
}
