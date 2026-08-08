/* 人体図。前面と背面の輪郭に筋群を重ねる。
   bodySVG(level, view) の level は {筋群key: 2(主働) | 1(補助)}。
   viewBox は 120×232。頭を約1/8頭身に、肩幅を広め・ウエストを細めに取っている。 */

const SILHOUETTE = [
  'M60,6 a10.5,12.5 0 1,0 0.01,0 Z',                             // 頭
  'M53,27 L67,27 L68,40 L52,40 Z',                               // 首
  'M40,40 L80,40 L82,58 L76,80 L73,104 L47,104 L44,80 L38,58 Z', // 胴
  'M38,41 L47,40 L44,80 L30,77 Z',                               // 上腕 左
  'M82,41 L73,40 L76,80 L90,77 Z',                               // 上腕 右
  'M30,79 L43,81 L41,108 L29,106 Z',                             // 前腕 左
  'M90,79 L77,81 L79,108 L91,106 Z',                             // 前腕 右
  'M29,108 L41,110 L40,120 L28,118 Z',                           // 手 左
  'M91,108 L79,110 L80,120 L92,118 Z',                           // 手 右
  'M47,104 L73,104 L75,126 L45,126 Z',                           // 骨盤
  'M45,126 L59,126 L57,172 L44,172 Z',                           // 大腿 左
  'M75,126 L61,126 L63,172 L76,172 Z',                           // 大腿 右
  'M44,172 L57,172 L55,216 L46,216 Z',                           // 下腿 左
  'M76,172 L63,172 L65,216 L74,216 Z',                           // 下腿 右
  'M45,216 L55,216 L56,224 L44,224 Z',                           // 足 左
  'M75,216 L65,216 L64,224 L76,224 Z'                            // 足 右
];

const MUSCLE_PATH_F = {
  delt_ant:  ['M39,41 L47,40 L46,60 L38,60 Z',  'M81,41 L73,40 L74,60 L82,60 Z'],
  delt_lat:  ['M31,47 L39,41 L38,60 L30,57 Z',  'M89,47 L81,41 L82,60 L90,57 Z'],
  chest:     ['M47,44 L59,44 L59,68 L45,61 Z',  'M73,44 L61,44 L61,68 L75,61 Z'],
  biceps:    ['M32,60 L44,62 L42,79 L31,76 Z',  'M88,60 L76,62 L78,79 L89,76 Z'],
  forearm:   ['M30,83 L42,85 L40,105 L29,103 Z','M90,83 L78,85 L80,105 L91,103 Z'],
  abs:       ['M51,70 L69,70 L68,102 L52,102 Z'],
  oblique:   ['M46,71 L51,70 L51,100 L47,93 Z', 'M74,71 L69,70 L69,100 L73,93 Z'],
  quads:     ['M45,128 L58,128 L56,169 L45,169 Z','M75,128 L62,128 L64,169 L75,169 Z'],
  calves:    ['M45,176 L56,176 L55,203 L46,203 Z','M75,176 L64,176 L65,203 L74,203 Z']
};

const MUSCLE_PATH_B = {
  traps:     ['M50,37 L70,37 L79,54 L60,63 L41,54 Z'],
  delt_post: ['M31,47 L41,41 L40,60 L30,57 Z',  'M89,47 L79,41 L80,60 L90,57 Z'],
  delt_lat:  ['M30,50 L34,44 L33,60 L29,57 Z',  'M90,50 L86,44 L87,60 L91,57 Z'],
  upperback: ['M49,56 L59,56 L59,72 L50,72 Z',  'M71,56 L61,56 L61,72 L70,72 Z'],
  // 広背筋: 脇下で広く、ウエストへ絞る V 字
  lats:      ['M42,57 L59,66 L57,92 L49,95 L44,78 Z', 'M78,57 L61,66 L63,92 L71,95 L76,78 Z'],
  triceps:   ['M32,60 L44,62 L42,79 L31,76 Z',  'M88,60 L76,62 L78,79 L89,76 Z'],
  forearm:   ['M30,83 L42,85 L40,105 L29,103 Z','M90,83 L78,85 L80,105 L91,103 Z'],
  erector:   ['M56,73 L64,73 L63,102 L57,102 Z'],
  glutes:    ['M46,106 L59,106 L59,126 L45,125 Z','M74,106 L61,106 L61,126 L75,125 Z'],
  hams:      ['M45,129 L58,129 L56,169 L45,169 Z','M75,129 L62,129 L64,169 L75,169 Z'],
  calves:    ['M45,176 L56,176 L55,203 L46,203 Z','M75,176 L64,176 L65,203 L74,203 Z']
};

const MCOLOR = { 0:"#dcdce1", 1:"#eeaea1", 2:"#c0392b" };

/** 人体図のSVG文字列。level = {筋群key: 1|2} */
function bodySVG(level, view, opt) {
  opt = opt || {};
  const paths = view === "back" ? MUSCLE_PATH_B : MUSCLE_PATH_F;
  let out = '';
  SILHOUETTE.forEach(d => {
    out += '<path d="' + d + '" fill="#e7e7ec" stroke="#cfcfd6" stroke-width="0.6" stroke-linejoin="round"/>';
  });
  for (const key in paths) {
    const lv = level[key] || 0;
    if (lv === 0 && opt.activeOnly) continue;
    const stroke = lv ? ' stroke="#9c2c20" stroke-width="0.4"' : '';
    paths[key].forEach(d => {
      out += '<path d="' + d + '" fill="' + MCOLOR[lv] + '"' + stroke + ' stroke-linejoin="round">'
           + '<title>' + (MUSCLES[key] ? MUSCLES[key][0] : key) + '</title></path>';
    });
  }
  out += '<text x="60" y="231" text-anchor="middle" font-size="8.5" fill="#9a9aa2">'
       + (view === "back" ? "背面" : "前面") + '</text>';
  return '<svg class="bodysvg" viewBox="0 0 120 234" xmlns="http://www.w3.org/2000/svg">' + out + '</svg>';
}

/** 種目の配列から活性度マップを作る。主働2、補助1（強いほうが勝つ） */
function levelsOf(exList) {
  const lv = {};
  exList.forEach(e => {
    (e.pri || []).forEach(m => { lv[m] = 2; });
    (e.sec || []).forEach(m => { if (!lv[m]) lv[m] = 1; });
  });
  return lv;
}

/** 前面＋背面を並べて返す */
function bodyPair(level, opt) {
  return '<div class="bodypair">' + bodySVG(level, "front", opt) + bodySVG(level, "back", opt) + '</div>';
}
