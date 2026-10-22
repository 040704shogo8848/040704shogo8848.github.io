(function(){
"use strict";
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const NS="http://www.w3.org/2000/svg";
const reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function S(tag,attrs,style,text){const e=document.createElementNS(NS,tag);for(const k in attrs||{})e.setAttribute(k,attrs[k]);if(style)e.setAttribute("style",style);if(text!=null)e.textContent=text;return e}
function cssv(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}
function press(group,btn){$$("button",group).forEach(b=>b.setAttribute("aria-pressed",b===btn?"true":"false"))}

// Chapter file for each topic key, used by the glossary and quiz links on drill.html.
const FILE={"kosei": "00_plan.html", "toi": "01_question.html", "dasein": "02_dasein.html", "sekai": "03_being-in-the-world.html", "dougu": "04_equipment.html", "hito": "05_the-they.html", "kibun": "06_disclosedness.html", "sorge": "07_anxiety-care.html", "shi": "08_being-toward-death.html", "ketsui": "09_conscience.html", "jikan": "10_temporality.html", "rekishi": "11_historicality.html", "mikan": "12_time-and-being.html", "eikyo": "13_reception.html"};

/* ---------- DEMO 01 plan ---------- */
const PLAN=[
 {p:"第1部 第1編",t:"現存在の準備的基礎分析",pub:1,s:"§9–44",d:"日常性を手がかりに、世界内存在・世人・開示性・関心を分析する。刊行済み。"},
 {p:"第1部 第2編",t:"現存在と時間性",pub:1,s:"§45–83",d:"死・良心・決意性を経て、関心の意味が時間性であることを示す。歴史性と通俗的時間概念の起源まで扱う。刊行済み。"},
 {p:"第1部 第3編",t:"時間と存在",pub:0,s:"未刊",d:"時間を存在一般の了解の地平として示す予定だった。1927年夏学期講義『現象学の根本諸問題』が内容上の手がかりとされる。"},
 {p:"第2部 第1編",t:"カントの図式論と時間論",pub:0,s:"未刊",d:"存在の時間的性格の問題の前段階としてカントを解体する予定だった。1929年の『カントと形而上学の問題』が部分的に対応する。"},
 {p:"第2部 第2編",t:"デカルトの「われ思う、われ在り」の存在論的基礎",pub:0,s:"未刊",d:"デカルトが「われ在り」の存在の意味を問わなかった点と、中世存在論からの継承を扱う予定だった。§19–21 のデカルト批判が一部を先取りしている。"},
 {p:"第2部 第3編",t:"アリストテレスの時間論",pub:0,s:"未刊",d:"古代存在論の基盤と限界を判別する基準として、アリストテレスの時間論を扱う予定だった。§81 が『自然学』の時間の定義に言及している。"}
];
function initPlan(){
  const g=$("#planGrid");
  PLAN.forEach((x,i)=>{
    const b=document.createElement("button");b.className="plan-cell "+(x.pub?"pub":"unpub");b.style.cursor="pointer";b.style.textAlign="left";
    b.innerHTML=`<span class="mono">${x.p}</span>${x.t}`;
    b.addEventListener("click",()=>{$("#planOut").innerHTML=`<b>${x.p}「${x.t}」</b> ／ <span class="mono">${x.s}</span><br>${x.d}`;$$(".plan-cell",g).forEach(c=>c.style.outline="");b.style.outline="2px solid var(--fut)"});
    g.appendChild(b);
  });
  g.children[2].click();
}

/* ---------- DEMO 02 question ---------- */
const QTXT={
 a:"<b>問われているもの＝存在。</b>存在者を存在者として規定しているもの、存在者がそのつどすでに了解されている根拠を指す。",
 b:"<b>問いかけられるもの＝存在者。</b>存在はつねに何らかの存在者の存在であるため、存在者に問いかけるほかない。どの存在者に問いかけるべきかが次の問題になる。その答えが、存在を問うことのできる存在者である現存在である。",
 c:"<b>問いの結果として求められるもの＝存在の意味。</b>存在を定義することではない。存在が何から了解されているかを明らかにすることである。本書はその答えを時間に見出す予定だった。"
};
function initQ(){const c=$("#qCtrl");$$("button",c).forEach(b=>b.addEventListener("click",()=>{press(c,b);$("#qOut").innerHTML=QTXT[b.dataset.k]}));$("#qOut").innerHTML=QTXT.a}

/* ---------- DEMO 03 modes of being ---------- */
const MODES=[
 {n:"ハンマー（屋根を修理中）",m:"手許存在性",x:"使用されている道具。注意は釘と作業の進み具合に向いており、ハンマー自体は主題にならない。"},
 {n:"ハンマー（壊れて点検中）",m:"事物的存在性",x:"使用が中断され、重さや柄の亀裂といった性質をもつ物として眺められている。存在者は同じでも存在のしかたは変わる。"},
 {n:"川沿いの石（地質調査の試料）",m:"事物的存在性",x:"成分と年代を測定される対象。自然科学は存在者を事物的存在として主題化する。"},
 {n:"南風（農夫にとって）",m:"手許存在性",x:"§17 の例。農夫にとって南風は雨の兆しとして存在している。気象学的な空気の流れとして存在しているのではない。"},
 {n:"隣席の同僚",m:"共現存在",x:"他者は道具でも事物でもない。自分と同じく世界内存在する現存在として出会われる。"},
 {n:"私自身",m:"実存",x:"現存在の存在のしかた。何であるかではなく、どう存在しうるかが問題になる。"},
 {n:"数の7",m:"本書では主題化されない",x:"理念的な存在者の存在は本書で扱われない。3つの存在のしかたに収まらない存在者が残ることを示す例である。"}
];
function initModes(){
  const c=$("#modeCtrl");
  MODES.forEach((x,i)=>{const b=document.createElement("button");b.textContent=x.n;b.setAttribute("aria-pressed",i===0?"true":"false");
    b.addEventListener("click",()=>{press(c,b);$("#modeOut").innerHTML=`存在のしかた：<b>${x.m}</b><br>${x.x}`});c.appendChild(b)});
  $("#modeOut").innerHTML=`存在のしかた：<b>${MODES[0].m}</b><br>${MODES[0].x}`;
}

/* ---------- DEMO 04 sorter ---------- */
const SORT=[
 {s:"私は大学を辞めて起業すると決めた。",a:"e",x:"各自の具体的な選択であり、実存的な水準の事柄である。"},
 {s:"現存在はつねに自分の存在可能性へと投企している。",a:"z",x:"どの選択にも共通する構造を述べており、実存論的な命題である。"},
 {s:"彼女は友人の助言に従い、転職を見送った。",a:"e",x:"具体的な生き方の選択であり、実存的である。助言に従うことは顧慮の一つの様態でもある。"},
 {s:"情状性・了解・語りは等根源的である。",a:"z",x:"開示性の構造を述べており、実存論的である。"},
 {s:"死への先駆は現存在の全体存在を可能にする。",a:"z",x:"§53 の命題であり、実存論的な構造の記述である。実際に死をどう受け止めるかは実存的な問題として残る。"},
 {s:"彼は毎朝ニュースを確認しないと落ち着かない。",a:"e",x:"具体的な習慣であり、実存的である。好奇心という実存論的な構造の一つの事例として解釈できる。"}
];
function initSort(){
  const box=$("#sortList");let done=0,ok=0;
  SORT.forEach((q,i)=>{
    const row=document.createElement("div");row.style.cssText="border-top:1px solid var(--rule);padding:10px 0";
    row.innerHTML=`<div style="font-size:15px;margin-bottom:6px">${i+1}. ${q.s}</div><div class="ctrl" style="margin:0"><button data-a="e" aria-pressed="false">実存的</button><button data-a="z" aria-pressed="false">実存論的</button></div><div class="note" style="margin-top:6px" hidden></div>`;
    const ctrl=$(".ctrl",row),note=$(".note",row);
    $$("button",ctrl).forEach(b=>b.addEventListener("click",()=>{
      if(row.dataset.ans)return;row.dataset.ans=b.dataset.a;press(ctrl,b);done++;
      const right=b.dataset.a===q.a;if(right)ok++;
      note.hidden=false;note.innerHTML=`<b style="color:var(${right?"--pres":"--warn"})">${right?"正解":"不正解"}</b>。${q.x}`;
      $("#sortScore").textContent=`6問中 ${done}問に回答済み。正解 ${ok}問。`;
    }));
    box.appendChild(row);
  });
}

/* ---------- DEMO 05 nearness ---------- */
const NEAR=[
 {n:"かけている眼鏡",m:0.02,c:0.92,x:"鼻の上にあり物理的には最も近い。しかし配慮の中では壁の絵より遠い。眼鏡は見るための道具として身を引いているからである（§23）。"},
 {n:"壁に掛かった絵",m:4,c:0.12,x:"数メートル離れているが、見ている対象として最も近くにある。"},
 {n:"歩いている道路の路面",m:0.01,c:0.95,x:"足の裏と常に接しているが、配慮の中では最も遠いものの一つである（§23）。"},
 {n:"20歩先で出会った知人",m:15,c:0.08,x:"物理的には離れているが、挨拶を交わす相手として路面よりはるかに近い（§23）。"},
 {n:"通話中の相手（本ポータルの追加例）",m:300000,c:0.1,x:"数百キロメートル離れていても、会話の相手として近くにいる。隔たりの撤去は測定された距離に依存しない。"}
];
function initNear(){
  const c=$("#nearCtrl");
  function draw(mode){
    const rows=[...NEAR].sort((a,b)=>mode==="m"?a.m-b.m:a.c-b.c);
    const box=$("#nearRows");box.innerHTML="";
    rows.forEach(r=>{
      const mw=Math.max(2,Math.min(100,(Math.log10(r.m*100)+0.1)/7.6*100));
      const cw=Math.max(2,r.c*100);
      const d=document.createElement("div");d.style.cssText="display:grid;grid-template-columns:minmax(0,190px) minmax(0,1fr);gap:4px 14px;padding:9px 0;border-top:1px solid var(--rule);font-size:14px;align-items:center";
      d.innerHTML=`<div style="font-weight:700;line-height:1.5">${r.n}</div><div style="display:grid;gap:4px"><div style="display:flex;gap:8px;align-items:center"><span class="mono" style="width:5.6em;color:var(--ink-3)">測定距離</span><span style="height:8px;border-radius:4px;background:var(--ink-3);width:${mw}%;opacity:${mode==="m"?1:.35}"></span><span class="mono" style="color:var(--ink-3)">${r.m>=1000?(r.m/1000).toLocaleString()+" km":r.m<1?(r.m*100)+" cm":r.m+" m"}</span></div><div style="display:flex;gap:8px;align-items:center"><span class="mono" style="width:5.6em;color:var(--ink-3)">配慮上</span><span style="height:8px;border-radius:4px;background:var(--spruce);width:${cw}%;opacity:${mode==="c"?1:.35}"></span><span class="mono" style="color:var(--ink-3)">${r.c<.3?"近い":r.c<.7?"中間":"遠い"}</span></div></div>`;
      d.title=r.x;d.addEventListener("click",()=>{$("#nearOut").innerHTML=`<b>${r.n}</b>：${r.x}`});d.style.cursor="pointer";
      box.appendChild(d);
    });
    $("#nearOut").innerHTML=mode==="m"?"測定された距離の順に並べた。眼鏡と路面が最も近い。行を選ぶと解説を表示する。":"配慮上の近さの順に並べた。眼鏡と路面は最も遠い位置へ移る。行を選ぶと解説を表示する。";
  }
  $$("button",c).forEach(b=>b.addEventListener("click",()=>{press(c,b);draw(b.dataset.k)}));
  draw("m");
}

/* ---------- DEMO 06 hammer ---------- */
const HN={h:{x:110,y:165,t:"ハンマー"},n:{x:290,y:70,t:"釘"},b:{x:290,y:260,t:"板"},f:{x:460,y:165,t:"固定すること"},p:{x:630,y:80,t:"悪天候からの保護"},w:{x:630,y:255,t:"住まい（目的であるもの）"},o:{x:460,y:300,t:"注文主（他者）"}};
const HE=[["h","n","打つ"],["h","b",""],["n","f",""],["b","f",""],["f","p","〜のため"],["p","w","〜のため"],["o","f",""]];
const HAMTXT={
 use:"<b>使用している</b>：注意は作業の進み具合に向いている。ハンマーも指示の連関も主題にならず、目立たない。これが手許存在性である。",
 broken:"<b>目立つこと</b><span class=\"de\"> Auffälligkeit</span>：柄が折れて使えない。ハンマーは単なる物として目に付き、それが何のための道具であったかという連関が明示的になる。",
 missing:"<b>押しつけがましさ</b><span class=\"de\"> Aufdringlichkeit</span>：必要なハンマーが見当たらない。欠けている物が強く意識され、残りの道具は手許にあるのに使えない物として現れる。",
 block:"<b>手に負えなさ</b><span class=\"de\"> Aufsässigkeit</span>：倒れた資材が作業を妨げる。片付けなければ先へ進めない物として現れる。",
 stare:"<b>作業をやめて観察する</b>：ハンマーは重さ・長さ・材質という性質の担い手として現れる。指示の連関は視野から外れる。これが事物的存在性である。"
};
function drawHammer(state){
  const svg=$("#hamSvg"),E=$("#hamEdges"),N=$("#hamNodes");E.innerHTML="";N.innerHTML="";
  const lit=state==="broken"||state==="missing"||state==="block";
  const eOp=state==="use"?.28:state==="stare"?.06:1;
  HE.forEach(([a,b,l])=>{
    const A=HN[a],B=HN[b];
    const ln=S("line",{x1:A.x,y1:A.y,x2:B.x,y2:B.y,"marker-end":"url(#arr)"},`stroke:var(${lit?"--spruce":"--ink-3"});color:var(${lit?"--spruce":"--ink-3"});opacity:${eOp};transition:opacity .3s`);
    E.appendChild(ln);
    if(l&&state!=="stare"){E.appendChild(S("text",{x:(A.x+B.x)/2,y:(A.y+B.y)/2-8,"text-anchor":"middle","font-size":12},`fill:var(--ink-3);opacity:${eOp}`,l))}
  });
  if(state==="block"){
    const x=200,y=118;
    N.appendChild(S("rect",{x:x-52,y:y-16,width:104,height:32,rx:4},"fill:var(--warn-soft);stroke:var(--warn)"));
    N.appendChild(S("text",{x,y:y+5,"text-anchor":"middle","font-size":13},"fill:var(--warn)","倒れた資材"));
  }
  Object.entries(HN).forEach(([k,v])=>{
    const isH=k==="h";const w=Math.max(74,v.t.length*14+20);
    let fill="--card",stroke="--rule",tc="--ink",op=state==="stare"&&!isH?.12:1,dash="";
    if(isH){
      if(state==="broken"){fill="--warn-soft";stroke="--warn";tc="--warn"}
      if(state==="missing"){fill="--paper";stroke="--warn";tc="--warn";dash="5 4"}
      if(state==="use"){fill="--spruce-soft";stroke="--spruce"}
      if(state==="stare"){fill="--past-soft";stroke="--past"}
    }else if(k==="w"){fill="--fut-soft";stroke="--fut"}
    const g=S("g",{},`opacity:${op};transition:opacity .3s`);
    if(isH&&state==="stare"){
      g.appendChild(S("rect",{x:v.x-80,y:v.y-62,width:160,height:124,rx:6},`fill:var(${fill});stroke:var(${stroke})`));
      g.appendChild(S("text",{x:v.x,y:v.y-36,"text-anchor":"middle","font-size":15,"font-weight":700},"fill:var(--ink)","ハンマー"));
      ["重さ 0.6 kg","全長 33 cm","鋼の頭部と木の柄"].forEach((t,i)=>g.appendChild(S("text",{x:v.x,y:v.y-8+i*22,"text-anchor":"middle","font-size":13},"fill:var(--ink-2)",t)));
    }else{
      g.appendChild(S("rect",{x:v.x-w/2,y:v.y-18,width:w,height:36,rx:5,"stroke-dasharray":dash},`fill:var(${fill});stroke:var(${stroke})`));
      g.appendChild(S("text",{x:v.x,y:v.y+5,"text-anchor":"middle","font-size":14,"font-weight":isH?700:400},`fill:var(${tc})`,isH&&state==="missing"?"ハンマー（不在）":isH&&state==="broken"?"ハンマー（柄が破損）":v.t));
    }
    N.appendChild(g);
  });
  $("#hamOut").innerHTML=HAMTXT[state];
}
function initHammer(){const c=$("#hamCtrl");$$("button",c).forEach(b=>b.addEventListener("click",()=>{press(c,b);drawHammer(b.dataset.k)}));drawHammer("use")}

/* ---------- DEMO 07 crowd ---------- */
const crowd={pts:[],self:false,avg:.7,run:false,raf:0};
function initCrowd(){
  const cv=$("#crowd");const W=cv.width,H=cv.height;
  for(let i=0;i<80;i++){const a=Math.random()*Math.PI*2;crowd.pts.push({x:Math.random()*W,y:Math.random()*H,vx:Math.cos(a),vy:Math.sin(a),me:i===0})}
  $("#crowdAvg").addEventListener("input",e=>{crowd.avg=e.target.value/100;crowdText();if(reduce)stepCrowd(40)});
  $("#crowdSelf").addEventListener("click",e=>{crowd.self=!crowd.self;e.currentTarget.setAttribute("aria-pressed",crowd.self);e.currentTarget.textContent=crowd.self?"世人自己に戻す":"本来的な自己存在に切り替える";crowdText();if(reduce)stepCrowd(40)});
  crowdText();stepCrowd(1);
}
function crowdText(){
  const a=Math.round(crowd.avg*100);
  let t=a>60?`平均化の度合い ${a}：点の動きが揃い、誰の向きも他と区別できない。誰もが他者であり、誰一人として自分自身ではない状態である。`:a>25?`平均化の度合い ${a}：動きは部分的に揃っている。懸隔性によって、他との差を気にかけながら動いている。`:`平均化の度合い ${a}：各点がばらばらに動く。ただし公共性がない状態は日常の現存在には実在しない。比較のための極端な設定である。`;
  if(crowd.self)t+=" 「私」の点は自分で選んだ方向へ進むが、群れの中にとどまる。本来的な自己は世人から離脱するのではなく、世人の変様である。";
  $("#crowdOut").textContent=t;
}
function stepCrowd(n){
  const cv=$("#crowd"),ctx=cv.getContext("2d"),W=cv.width,H=cv.height,P=crowd.pts;
  for(let k=0;k<n;k++){
    let mx=0,my=0;P.forEach(p=>{mx+=p.vx;my+=p.vy});mx/=P.length;my/=P.length;
    const ml=Math.hypot(mx,my)||1;
    let cx=0,cy=0;P.forEach(p=>{cx+=p.x;cy+=p.y});cx/=P.length;cy/=P.length;
    P.forEach((p,i)=>{
      const own=Math.atan2(p.vy,p.vx)+(Math.random()-.5)*.5*(1-crowd.avg);
      let vx=Math.cos(own),vy=Math.sin(own);
      if(p.me&&crowd.self){const t=performance.now()/2600;vx=Math.cos(t);vy=Math.sin(t)*.6}
      else{vx=vx*(1-crowd.avg*.12)+mx/ml*crowd.avg*.12;vy=vy*(1-crowd.avg*.12)+my/ml*crowd.avg*.12}
      if(p.me){vx+=(cx-p.x)*.0012;vy+=(cy-p.y)*.0012}
      const l=Math.hypot(vx,vy)||1;p.vx=vx/l;p.vy=vy/l;
      p.x+=p.vx*1.3;p.y+=p.vy*1.3;
      if(p.x<0)p.x+=W;if(p.x>W)p.x-=W;if(p.y<0)p.y+=H;if(p.y>H)p.y-=H;
    });
  }
  ctx.clearRect(0,0,W,H);
  const ink=cssv("--ink-3"),me=cssv("--warn"),sp=cssv("--spruce");
  P.forEach(p=>{
    ctx.fillStyle=p.me?me:ink;ctx.globalAlpha=p.me?1:.7;
    ctx.beginPath();ctx.arc(p.x,p.y,p.me?7:4,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle=p.me?me:sp;ctx.globalAlpha=p.me?1:.45;ctx.lineWidth=p.me?2:1;
    ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+p.vx*(p.me?20:12),p.y+p.vy*(p.me?20:12));ctx.stroke();
  });
  ctx.globalAlpha=1;
  const m=P[0];ctx.fillStyle=me;ctx.font="14px "+cssv("--f-body");ctx.fillText("私",m.x+10,m.y-10);
}
function loopCrowd(){if(!crowd.run)return;stepCrowd(1);crowd.raf=requestAnimationFrame(loopCrowd)}

/* ---------- DEMO 08 as-structure ---------- */
const AS=[
 {b:"何も言わずに、より軽いハンマーに持ち替える",x:"<b>解釈学的な「として」</b>：ハンマーは「この仕事には重すぎる道具」として了解されている。言葉にされる前に、行為の中で解釈が行われている。"},
 {b:"作業中に「重すぎる、別のを取って」と言う",x:"<b>解釈学的な「として」</b>：語られてはいるが、配視の中での語りである。ハンマーは作業の連関の中の道具として語られている。"},
 {b:"「このハンマーの重さは0.6 kgである」と記録する",x:"<b>言明的な「として」</b><span class=\"de\"> apophantisches Als</span>：ハンマーは性質の担い手、すなわち事物的存在として規定される。手許存在の連関は視野から外れる。§33 によれば言明は解釈の派生的な様態である。"}
];
function initAs(){
  const c=$("#asCtrl");
  AS.forEach((a,i)=>{const b=document.createElement("button");b.textContent=a.b;b.setAttribute("aria-pressed",i===0?"true":"false");b.addEventListener("click",()=>{press(c,b);$("#asOut").innerHTML=a.x});c.appendChild(b)});
  $("#asOut").innerHTML=AS[0].x;
}

/* ---------- DEMO 09 angst ---------- */
const ROOM=[["机",150,70],["本",300,52],["時計",460,52],["窓",610,70],["鍵",150,240],["電話",300,258],["鞄",460,258],["椅子",610,240]];
const ANGTXT={
 calm:"<b>日常の配慮</b>：物はそれぞれ「〜するため」の道具として現存在と結び付いている。現存在は物のもとに没頭している。",
 fear:"<b>恐れ</b>：脅威は特定の方向から、特定の存在者として近づいてくる。恐れが向かう先は世界の内部の存在者であり、他の物は避難や防御の手段として現れる。",
 angst:"<b>不安</b>：脅威はどこからも来ない。それでいてすでに迫っている。世界内部の存在者は全体として意味を失い、何も手がかりを与えない。不安が向かう先は世界内存在そのものである。"
};
function drawAngst(st){
  const svg=$("#angSvg");svg.innerHTML="";
  const cx=380,cy=155;
  ROOM.forEach(([t,x,y])=>{
    const op=st==="angst"?.18:1;
    if(st!=="angst")svg.appendChild(S("line",{x1:cx,y1:cy,x2:x,y2:y},`stroke:var(--rule);stroke-width:1.3;opacity:${st==="fear"?.5:1}`));
    svg.appendChild(S("rect",{x:x-36,y:y-17,width:72,height:34,rx:5},`fill:var(--card);stroke:var(--ink-3);opacity:${op};transition:opacity .5s`));
    svg.appendChild(S("text",{x,y:y+5,"text-anchor":"middle","font-size":14},`fill:var(--ink);opacity:${op};transition:opacity .5s`,t));
  });
  svg.appendChild(S("circle",{cx,cy,r:40},`fill:var(${st==="angst"?"--warn-soft":"--spruce-soft"});stroke:var(${st==="angst"?"--warn":"--spruce"})`));
  svg.appendChild(S("text",{x:cx,y:cy+5,"text-anchor":"middle","font-size":14,"font-weight":700},"fill:var(--ink)","現存在"));
  if(st==="fear"){
    svg.appendChild(S("rect",{x:640,y:136,width:104,height:38,rx:5},"fill:var(--warn-soft);stroke:var(--warn)"));
    svg.appendChild(S("text",{x:692,y:160,"text-anchor":"middle","font-size":13},"fill:var(--warn)","近づく大型犬"));
    svg.appendChild(S("line",{x1:638,y1:155,x2:428,y2:155,"marker-end":"url(#arrA)"},"stroke:var(--warn);color:var(--warn);stroke-width:2.2;stroke-dasharray:7 5"));
  }
  if(st==="angst"){
    svg.appendChild(S("text",{x:cx,y:cy-62,"text-anchor":"middle","font-size":16,"font-weight":700},"fill:var(--warn)","何もない・どこにもない"));
    svg.appendChild(S("text",{x:cx,y:cy+76,"text-anchor":"middle","font-size":13},"fill:var(--ink-2)","不気味さ（家に居ない感覚）"));
  }
  const d=S("defs");d.innerHTML='<marker id="arrA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-3)"/></marker>';svg.prepend(d);
  $("#angOut").innerHTML=ANGTXT[st];
}
function initAngst(){const c=$("#angCtrl");$$("button",c).forEach(b=>b.addEventListener("click",()=>{press(c,b);drawAngst(b.dataset.k)}));drawAngst("calm")}

/* ---------- DEMO 10 sorge ---------- */
const SG=[
 {t:"Sich-vorweg-",k:"fut",x:"<b class=\"fut\">自己に先立って</b>：実存性。現存在はつねに自分の可能性へと先に出ている。了解と投企の契機であり、時間性では<b class=\"fut\">将来</b>に基づく。"},
 {t:"schon-sein-in-(der-Welt-)",k:"past",x:"<b class=\"past\">すでに（世界の）内に存在しつつ</b>：事実性。現存在は自分で選んだのではない状況にすでに投げ込まれている。情状性の契機であり、時間性では<b class=\"past\">既在</b>に基づく。"},
 {t:"als Sein-bei (innerweltlich begegnendem Seienden)",k:"pres",x:"<b class=\"pres\">（世界内部で出会う存在者の）もとに存在すること</b>：頽落。現存在は配慮の中で道具や事物のもとに没頭している。時間性では<b class=\"pres\">現在</b>に基づく。"}
];
function initSorge(){
  const f=$("#sorgeFormula");
  SG.forEach((s,i)=>{const b=document.createElement("button");b.textContent=s.t;b.style.cssText=`font:inherit;border:0;border-bottom:3px solid var(--${s.k});background:transparent;padding:0 2px;cursor:pointer;color:var(--ink)`;
    b.addEventListener("click",()=>{$$("button",f).forEach(x=>x.style.background="transparent");b.style.background=`var(--${s.k}-soft)`;$("#sorgeOut").innerHTML=s.x});f.appendChild(b)});
  f.children[0].click();
}

/* ---------- DEMO 11 death ---------- */
let deathMode="man";
function drawDeath(){
  const age=+$("#deathAge").value;$("#deathAgeV").textContent=age+"歳";
  const svg=$("#deathSvg");svg.innerHTML="";
  const x0=40,x1=720,X=a=>x0+(x1-x0)*a/100,y=110;
  svg.appendChild(S("line",{x1:x0,y1:y,x2:x1,y2:y},"stroke:var(--ink-3);stroke-width:1.5"));
  [0,20,40,60,80,100].forEach(a=>{svg.appendChild(S("line",{x1:X(a),y1:y-4,x2:X(a),y2:y+4},"stroke:var(--ink-3)"));svg.appendChild(S("text",{x:X(a),y:y+22,"text-anchor":"middle","font-size":12},"fill:var(--ink-3)",a+"歳"))});
  svg.appendChild(S("text",{x:x0,y:y-16,"text-anchor":"start","font-size":13},"fill:var(--ink-2)","誕生"));
  if(deathMode==="man"){
    svg.appendChild(S("rect",{x:X(age),y:y-10,width:X(85)-X(age),height:20},"fill:var(--paper-2)"));
    svg.appendChild(S("text",{x:(X(age)+X(85))/2,y:y+5,"text-anchor":"middle","font-size":12},"fill:var(--ink-3)","まだ当分は関係がない"));
    svg.appendChild(S("circle",{cx:X(88),cy:y,r:7},"fill:var(--ink-3)"));
    svg.appendChild(S("text",{x:X(88),y:y-18,"text-anchor":"middle","font-size":13},"fill:var(--ink-2)","いつか"));
    svg.appendChild(S("text",{x:X(88),y:y+48,"text-anchor":"middle","font-size":12},"fill:var(--ink-3)","人は死ぬ（誰でもない誰か）"));
  }else{
    const g=S("linearGradient",{id:"dg",x1:0,x2:1});g.appendChild(S("stop",{offset:0},"stop-color:var(--warn);stop-opacity:.34"));g.appendChild(S("stop",{offset:1},"stop-color:var(--warn);stop-opacity:.34"));
    const d=S("defs");d.appendChild(g);d.innerHTML+='<marker id="arrD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-3)"/></marker>';svg.appendChild(d);
    svg.appendChild(S("rect",{x:X(age),y:y-10,width:x1-X(age),height:20},"fill:url(#dg)"));
    svg.appendChild(S("text",{x:(X(age)+x1)/2,y:y+5,"text-anchor":"middle","font-size":12},"fill:var(--ink)","どの瞬間にも可能。時期は無規定"));
    svg.appendChild(S("path",{d:`M ${x1-20} ${y-14} C ${x1-120} ${y-90}, ${X(age)+90} ${y-90}, ${X(age)+6} ${y-16}`,"marker-end":"url(#arrD)",fill:"none"},"stroke:var(--warn);color:var(--warn);stroke-width:2"));
    svg.appendChild(S("text",{x:(X(age)+x1)/2,y:y-70,"text-anchor":"middle","font-size":13},"fill:var(--warn)","可能性から現在へ立ち返る"));
    svg.appendChild(S("text",{x:(X(age)+x1)/2,y:y+48,"text-anchor":"middle","font-size":12},"fill:var(--ink-3)","私が死にうる（誰も代われない）"));
  }
  svg.appendChild(S("line",{x1:X(age),y1:y-30,x2:X(age),y2:y+30},"stroke:var(--spruce);stroke-width:2.5"));
  svg.appendChild(S("text",{x:X(age),y:y+66,"text-anchor":"middle","font-size":13,"font-weight":700},"fill:var(--spruce)","今"));
  $("#deathOut").innerHTML=deathMode==="man"
   ?`<b>世人の語り方</b>：死は確実だと認められている。しかし時期は「いつか」として遠い将来へ先送りされ、${age}歳の現在とは関係がないものとして扱われる。死は誰にでも起こる出来事になり、自分の可能性ではなくなる。`
   :`<b>先駆</b>：死は${age}歳の今を含めたどの瞬間にも可能である。この無規定性を先送りせずに了解すると、追い越しえない可能性から自分の現在が捉え直される。世人が示す選択肢と自分の可能性が区別されるようになる。`;
}
function initDeath(){const c=$("#deathCtrl");$$("button",c).forEach(b=>b.addEventListener("click",()=>{press(c,b);deathMode=b.dataset.k;drawDeath()}));$("#deathAge").addEventListener("input",drawDeath);drawDeath()}

/* ---------- DEMO 12 call ---------- */
const CALL=[
 {k:"caller",t:"呼ぶ者",v:"不気味さの中の現存在",x:"呼ぶ者は神でも社会でもない。不気味さの中で単独化された現存在自身である。呼び声は計画して発するものではなく、私から来ながら私を超えて来る。"},
 {k:"called",t:"呼ばれる者",v:"世人自己",x:"呼ばれるのは世人の中に埋没している自己である。世人が与える世間的な評判や地位は、呼び声の中では意味をもたない。"},
 {k:"to",t:"呼び出される先",v:"最も固有の存在可能性",x:"呼び声は自己を、自分自身の存在可能性へと呼び出す。具体的に何をすべきかは指示されない。"},
 {k:"what",t:"語られる内容",v:"何も語らない",x:"呼び声は何も語らない。報告も指示もない。沈黙という様態で語る。そのため世人の空談では捉えられない。"}
];
function drawCall(k){
  const svg=$("#callSvg");svg.innerHTML="";
  const pos={caller:[110,100],called:[300,100],to:[490,100],what:[680,100]};
  const d=S("defs");d.innerHTML='<marker id="arrC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-3)"/></marker>';svg.appendChild(d);
  [["caller","called"],["called","to"]].forEach(([a,b])=>svg.appendChild(S("line",{x1:pos[a][0]+82,y1:100,x2:pos[b][0]-84,y2:100,"marker-end":"url(#arrC)"},"stroke:var(--ink-3);color:var(--ink-3);stroke-width:1.6")));
  svg.appendChild(S("line",{x1:pos.to[0]+82,y1:100,x2:pos.what[0]-84,y2:100},"stroke:var(--rule);stroke-dasharray:4 4"));
  CALL.forEach(c=>{const [x,y]=pos[c.k];const on=c.k===k;
    svg.appendChild(S("rect",{x:x-80,y:y-38,width:160,height:76,rx:6},`fill:var(${on?"--spruce-soft":"--card"});stroke:var(${on?"--spruce":"--rule"});stroke-width:${on?2:1}`));
    svg.appendChild(S("text",{x,y:y-10,"text-anchor":"middle","font-size":12},"fill:var(--ink-3)",c.t));
    svg.appendChild(S("text",{x,y:y+16,"text-anchor":"middle","font-size":14,"font-weight":700},"fill:var(--ink)",c.v));
  });
  svg.appendChild(S("text",{x:205,y:170,"text-anchor":"middle","font-size":12},"fill:var(--ink-3)","呼び声"));
  svg.appendChild(S("text",{x:395,y:170,"text-anchor":"middle","font-size":12},"fill:var(--ink-3)","呼び出し"));
  const c=CALL.find(c=>c.k===k);$("#callOut").innerHTML=`<b>${c.t}＝${c.v}</b>：${c.x}`;
}
function initCall(){const c=$("#callCtrl");CALL.forEach((x,i)=>{const b=document.createElement("button");b.textContent=x.t;b.setAttribute("aria-pressed",i===0?"true":"false");b.addEventListener("click",()=>{press(c,b);drawCall(x.k)});c.appendChild(b)});drawCall("caller")}

/* ---------- DEMO 13 time ---------- */
const tm={view:"ek",mode:"auth",run:false,raf:0,off:0};
const ARRDEF='<marker id="arrT" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-3)"/></marker>';
function drawTime(){
  const svg=$("#timeSvg");svg.innerHTML="";const d=S("defs");d.innerHTML=ARRDEF;svg.appendChild(d);
  $("#timeMode").style.opacity=tm.view==="ek"?1:.4;
  if(tm.view==="vulgar"){
    const y=170;svg.appendChild(S("line",{x1:30,y1:y,x2:730,y2:y,"marker-end":"url(#arrT)"},"stroke:var(--ink-3);color:var(--ink-3);stroke-width:1.5"));
    const g=S("g",{id:"nowPts"});svg.appendChild(g);
    for(let i=-1;i<16;i++){const x=30+i*48+(tm.off%48);if(x<30||x>720)continue;g.appendChild(S("circle",{cx:x,cy:y,r:5},`fill:var(--ink-3);opacity:${.35+.65*(1-Math.abs(x-380)/380)}`))}
    svg.appendChild(S("line",{x1:380,y1:y-40,x2:380,y2:y+40},"stroke:var(--spruce);stroke-width:2.5"));
    svg.appendChild(S("text",{x:380,y:y-52,"text-anchor":"middle","font-size":15,"font-weight":700},"fill:var(--spruce)","今"));
    svg.appendChild(S("text",{x:70,y:y+44,"text-anchor":"middle","font-size":13},"fill:var(--ink-2)","もはや今ではない"));
    svg.appendChild(S("text",{x:690,y:y+44,"text-anchor":"middle","font-size":13},"fill:var(--ink-2)","まだ今ではない"));
    svg.appendChild(S("text",{x:380,y:70,"text-anchor":"middle","font-size":14},"fill:var(--ink-2)","同質の今が無限に継起し、過ぎ去っていく"));
    svg.appendChild(S("text",{x:380,y:280,"text-anchor":"middle","font-size":12},"fill:var(--ink-3)","始まりも終わりもない。どの今も他の今と交換できる"));
    $("#timeOut").innerHTML="<b>通俗的時間概念</b>：時間は均質な今の点の無限の連なりとして表象される。過去は「もはや今ではない今」、未来は「まだ今ではない今」である。この表象は時間を手前にある事物のように扱っており、現存在の有限性と、時間が「〜するための時間」であることを覆い隠す。";
    return;
  }
  const A=tm.mode==="auth";
  const P={fut:[380,62],past:[150,272],pres:[610,272]};
  const lab=A?{fut:"先駆",past:"反復",pres:"瞬視"}:{fut:"予期",past:"忘却",pres:"現在化"};
  const name={fut:"将来",past:"既在",pres:"現在"};
  const arrows=A?[["fut","past","自分へ到来し、既在へ立ち返る"],["past","pres","既在から状況を開く"]]:[["pres","fut","現在化から予期する"],["pres","past","現在化しつつ忘却する"]];
  arrows.forEach(([a,b,l],i)=>{
    const [x1,y1]=P[a],[x2,y2]=P[b];const mx=(x1+x2)/2+(i?0:-40),my=(y1+y2)/2+(i? (A?-28:40):0);
    const dx=x2-x1,dy=y2-y1,len=Math.hypot(dx,dy);const sx=x1+dx/len*58,sy=y1+dy/len*58,ex=x2-dx/len*58,ey=y2-dy/len*58;
    const k=A?(a==="fut"?"--fut":"--past"):"--pres";
    svg.appendChild(S("path",{d:`M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`,fill:"none","marker-end":"url(#arrT)",class:"flow"},`stroke:var(${k});color:var(${k});stroke-width:2.4;stroke-dasharray:8 6;stroke-dashoffset:${-tm.off}`));
    const tx=(sx+ex)/2+(i?0:-118),ty=(sy+ey)/2+(i?(A?-14:30):-6);
    svg.appendChild(S("text",{x:tx,y:ty,"text-anchor":"middle","font-size":12.5},`fill:var(${k})`,l));
  });
  ["fut","past","pres"].forEach(k=>{
    const [x,y]=P[k];const big=!A&&k==="pres"||A&&k==="fut";
    svg.appendChild(S("circle",{cx:x,cy:y,r:big?54:46},`fill:var(--${k}-soft);stroke:var(--${k});stroke-width:${big?2.5:1.5}`));
    svg.appendChild(S("text",{x,y:y-4,"text-anchor":"middle","font-size":17,"font-weight":700},`fill:var(--${k})`,name[k]));
    svg.appendChild(S("text",{x,y:y+18,"text-anchor":"middle","font-size":13},"fill:var(--ink-2)",lab[k]));
  });
  svg.appendChild(S("text",{x:380,y:200,"text-anchor":"middle","font-size":14,"font-weight":700},"fill:var(--ink)",A?"既在しつつ現在化する将来":"予期しつつ忘却する現在化"));
  svg.appendChild(S("text",{x:380,y:222,"text-anchor":"middle","font-size":12},"fill:var(--ink-3)","3つの脱自は分離できない統一として時熟する"));
  $("#timeOut").innerHTML=A
   ?"<b>本来的な時間性</b>：将来が優位にある。現存在は死への先駆において自分へと到来し（<span class=\"fut\">先駆</span>）、そこから自分が存在してきた可能性へ立ち返る（<span class=\"past\">反復</span>）。その上で状況を見て取る（<span class=\"pres\">瞬視</span>）。"
   :"<b>非本来的な時間性</b>：現在化が優位にある。配慮されるものから結果を待ち受け（<span class=\"fut\">予期</span>）、自分が存在してきたことを忘れたまま（<span class=\"past\">忘却</span>）、目の前のものに没頭する（<span class=\"pres\">現在化</span>）。";
}
function loopTime(){if(!tm.run)return;tm.off=(tm.off+0.6)%480;
  if(tm.view==="vulgar"){drawTime()}else{$$("#timeSvg .flow").forEach(p=>p.style.strokeDashoffset=-tm.off)}
  tm.raf=requestAnimationFrame(loopTime)}
function initTime(){
  const c=$("#timeCtrl"),m=$("#timeMode");
  $$("button",c).forEach(b=>b.addEventListener("click",()=>{press(c,b);tm.view=b.dataset.k;drawTime()}));
  $$("button",m).forEach(b=>b.addEventListener("click",()=>{if(tm.view!=="ek")return;press(m,b);tm.mode=b.dataset.k;drawTime()}));
  drawTime();
}

/* ---------- DEMO 14 repetition ---------- */
const REP=[
 {x:150,k:"fut",t:"将来",s:"死への先駆",d:"<b class=\"fut\">1 先駆</b>：追い越しえない可能性を了解し、自分へと到来する。"},
 {x:380,k:"past",t:"既在",s:"遺産の反復",d:"<b class=\"past\">2 反復</b>：受け継いだ可能性の中から、かつての現存在の可能性へ明示的に立ち返る。過去の再現ではなく、過去の可能性への応答である。"},
 {x:610,k:"pres",t:"現在",s:"瞬視",d:"<b class=\"pres\">3 瞬視</b>：選んだ可能性を自分に引き渡し、「自分の時代」に対して決意して状況に向き合う。これが運命である。"}
];
function drawRep(step){
  const svg=$("#repSvg");svg.innerHTML="";const d=S("defs");d.innerHTML=ARRDEF.replace("arrT","arrR");svg.appendChild(d);
  for(let i=0;i<2;i++){const on=step>i;svg.appendChild(S("line",{x1:REP[i].x+70,y1:110,x2:REP[i+1].x-72,y2:110,"marker-end":"url(#arrR)"},`stroke:var(${on?"--spruce":"--rule"});color:var(${on?"--spruce":"--rule"});stroke-width:${on?2.4:1.4};transition:all .3s`))}
  REP.forEach((r,i)=>{const on=step>=i;
    svg.appendChild(S("rect",{x:r.x-70,y:70,width:140,height:80,rx:8},`fill:var(${on?"--"+r.k+"-soft":"--card"});stroke:var(${on?"--"+r.k:"--rule"});transition:all .3s`));
    svg.appendChild(S("text",{x:r.x,y:104,"text-anchor":"middle","font-size":16,"font-weight":700},`fill:var(${on?"--"+r.k:"--ink-3"})`,r.t));
    svg.appendChild(S("text",{x:r.x,y:128,"text-anchor":"middle","font-size":13},"fill:var(--ink-2)",r.s));
  });
  svg.appendChild(S("text",{x:380,y:195,"text-anchor":"middle","font-size":12.5},"fill:var(--ink-3)","受け継いだが自ら選んだ可能性に、自分を引き渡す（§74）"));
  if(step>=0&&step<3)$("#repOut").innerHTML=REP[step].d;
}
function initRep(){
  drawRep(-1);
  $("#repPlay").addEventListener("click",e=>{const b=e.currentTarget;b.setAttribute("aria-pressed","true");let s=0;drawRep(0);
    const t=setInterval(()=>{s++;if(s>2){clearInterval(t);b.setAttribute("aria-pressed","false");return}drawRep(s)},reduce?200:1700)});
}

/* ---------- DEMO 15 derivation ---------- */
const DER=[
 ["時間の単位","3つの脱自の統一","日付をもつ「今」","同質の今の点"],
 ["有限性","死によって閉じられている","「時間がない」という配慮の中に残る","覆い隠され、時間は無限とされる"],
 ["日付可能性","時熟の根拠","「〜する時」として保たれる","覆い隠される"],
 ["張り渡し","誕生と死の間の伸び広がり","「〜の間」として保たれる","今と今の間隔になる"],
 ["公共性","共存在として時熟する","太陽・時計・暦で共有される","誰にとっても同じ時間として保たれる"],
 ["世界性","有意義性の根拠","「〜するための時間」","覆い隠される"]
];
const DERTXT=["<b>根源的な時間性</b>：関心の意味。有限であり、将来を優位とする3つの脱自の統一である。",
 "<b>世界時間</b>：配慮において時間を計算に入れる時に現れる。時計の時間であっても、まだ「〜するための時間」という性格を保っている。",
 "<b>通俗的時間概念</b>：世界時間から日付可能性と世界性が取り除かれ、時間は無限に継起する今の点の連なりとして表象される。アリストテレス以来の時間論はこの段階に立っている。"];
function drawDerive(i){
  const t=$("#deriveTbl");t.innerHTML=`<tr><th>性格</th><th>1 根源的な時間性</th><th>2 世界時間</th><th>3 通俗的時間概念</th></tr>`+DER.map(r=>`<tr><td class="k">${r[0]}</td>${r.slice(1).map((c,j)=>`<td style="${j===i?"background:var(--spruce-soft);color:var(--ink);font-weight:500":"color:var(--ink-3)"}">${c}</td>`).join("")}</tr>`).join("");
  $("#deriveOut").innerHTML=DERTXT[i];
}
function initDerive(){const c=$("#deriveCtrl");$$("button",c).forEach(b=>b.addEventListener("click",()=>{press(c,b);drawDerive(+b.dataset.k)}));drawDerive(0)}

/* ---------- DEMO 16 four-dimensional time ---------- */
let fourMode="62";
function drawFour(){
  const svg=$("#fourSvg");svg.innerHTML="";const d=S("defs");d.innerHTML=ARRDEF.replace("arrT","arrF")+'<marker id="arrF2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-3)"/></marker>';svg.appendChild(d);
  const P={fut:[380,60],past:[150,270],pres:[610,270]},C=[380,190];
  const n62={fut:["将来","現前を差し控える"],past:["既在","現前を拒む"],pres:["現在","現前"]};
  const n27={fut:["将来","自分へ到来する"],past:["既在","立ち返る"],pres:["現在","状況に向き合う"]};
  const N=fourMode==="62"?n62:n27;
  if(fourMode==="62"){
    [["fut","past"],["past","pres"],["pres","fut"]].forEach(([a,b])=>{const [x1,y1]=P[a],[x2,y2]=P[b];const dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy);
      svg.appendChild(S("line",{x1:x1+dx/l*56,y1:y1+dy/l*56,x2:x2-dx/l*56,y2:y2-dy/l*56,"marker-start":"url(#arrF2)","marker-end":"url(#arrF2)",class:"flow"},"stroke:var(--spruce);color:var(--spruce);stroke-width:2;stroke-dasharray:7 5"))});
    ["fut","past","pres"].forEach(k=>{const [x,y]=P[k];const dx=x-C[0],dy=y-C[1],l=Math.hypot(dx,dy);
      svg.appendChild(S("line",{x1:C[0]+dx/l*52,y1:C[1]+dy/l*36,x2:x-dx/l*52,y2:y-dy/l*52,"marker-end":"url(#arrF)"},"stroke:var(--warn);color:var(--warn);stroke-width:1.6"))});
    svg.appendChild(S("ellipse",{cx:C[0],cy:C[1],rx:92,ry:34},"fill:var(--warn-soft);stroke:var(--warn)"));
    svg.appendChild(S("text",{x:C[0],y:C[1]-4,"text-anchor":"middle","font-size":14,"font-weight":700},"fill:var(--warn)","近づける近さ"));
    svg.appendChild(S("text",{x:C[0],y:C[1]+15,"text-anchor":"middle","font-size":11.5},"fill:var(--ink-2)","第4の次元（事柄としては第1）"));
    svg.appendChild(S("text",{x:265,y:150,"text-anchor":"middle","font-size":12},"fill:var(--spruce)","差し伸べ"));
    svg.appendChild(S("text",{x:380,y:300,"text-anchor":"middle","font-size":12},"fill:var(--spruce)","差し伸べ"));
    svg.appendChild(S("text",{x:495,y:150,"text-anchor":"middle","font-size":12},"fill:var(--spruce)","差し伸べ"));
  }else{
    [["fut","past"],["past","pres"]].forEach(([a,b])=>{const [x1,y1]=P[a],[x2,y2]=P[b];const dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy);
      svg.appendChild(S("line",{x1:x1+dx/l*56,y1:y1+dy/l*56,x2:x2-dx/l*56,y2:y2-dy/l*56,"marker-end":"url(#arrF)"},"stroke:var(--ink-3);color:var(--ink-3);stroke-width:2"))});
    svg.appendChild(S("text",{x:380,y:190,"text-anchor":"middle","font-size":14,"font-weight":700},"fill:var(--ink)","現存在の時間性"));
    svg.appendChild(S("text",{x:380,y:212,"text-anchor":"middle","font-size":12},"fill:var(--ink-3)","関心の意味として、現存在から分析される"));
  }
  ["fut","past","pres"].forEach(k=>{const [x,y]=P[k];
    svg.appendChild(S("circle",{cx:x,cy:y,r:50},`fill:var(--${k}-soft);stroke:var(--${k});stroke-width:1.5`));
    svg.appendChild(S("text",{x,y:y-4,"text-anchor":"middle","font-size":17,"font-weight":700},`fill:var(--${k})`,N[k][0]));
    svg.appendChild(S("text",{x,y:y+17,"text-anchor":"middle","font-size":12},"fill:var(--ink-2)",N[k][1]));
  });
  $("#fourOut").innerHTML=fourMode==="62"
   ?"<b>1962年</b>：時間は現存在の構造としてではなく、それ自体から規定される。既在は現在であることを拒みつつ、将来は現在であることを差し控えつつ、それぞれ現前に関わる。3つの次元を互いに近づけつつ隔てる働きが第4の次元であり、時間の他の次元を規定する。"
   :"<b>1927年</b>：時間性は現存在の関心の意味として分析される。将来から既在へ立ち返り、そこから現在が開かれる。分析の出発点はつねに現存在である。";
}
function initFour(){const c=$("#fourCtrl");$$("button",c).forEach(b=>b.addEventListener("click",()=>{press(c,b);fourMode=b.dataset.k;drawFour()}));drawFour()}

/* ---------- timeline ---------- */
const TL=[
 [1889,"life","9月26日、バーデン地方のメスキルヒに生まれる","父は聖マルティン教会の堂守"],
 [1909,"life","イエズス会の修練院に入るが短期間で退く。フライブルク大学で神学を学ぶ",""],
 [1911,"life","神学から哲学・数学・自然科学へ転じる",""],
 [1913,"work","学位論文『心理学主義における判断論』",""],
 [1915,"work","教授資格論文『ドゥンス・スコトゥスの範疇論と意義論』",""],
 [1917,"life","エルフリーデ・ペトリと結婚",""],
 [1919,"life","フライブルク大学でフッサールの助手となる","1923年まで。この時期の講義は全集第56巻以降に収録"],
 [1922,"life","トートナウベルクに山小屋を建てる",""],
 [1923,"life","マールブルク大学の員外教授となる",""],
 [1924,"life","ハンナ・アーレントが講義に出席し始める",""],
 [1927,"work","『存在と時間』刊行","『哲学および現象学研究年報』第8巻。夏学期講義『現象学の根本諸問題』"],
 [1928,"life","フッサールの後任としてフライブルク大学の正教授となる",""],
 [1929,"work","就任講演「形而上学とは何か」、『カントと形而上学の問題』","3月、ダボスでカッシーラーと討論"],
 [1933,"event","フライブルク大学の学長に就任し、ナチ党に入党","学長就任演説「ドイツの大学の自己主張」"],
 [1934,"event","学長を辞任",""],
 [1935,"work","講義『形而上学入門』、講演「芸術作品の根源」",""],
 [1936,"work","『哲学への寄与論稿』を執筆","1938年まで。刊行は1989年"],
 [1945,"event","非ナチ化の手続きが始まる","1946年に教職禁止が決定し、1951年に解除"],
 [1946,"work","『ヒューマニズムについての書簡』","ジャン・ボーフレへの書簡。1947年刊"],
 [1949,"work","ブレーメン講演「有るといえるものへの観入」",""],
 [1953,"work","講演「技術への問い」","同年『存在と時間』第7版で「前半」の表記を削除"],
 [1959,"work","『言葉への途上』","「日本人と問う者との対話」を収録"],
 [1962,"work","講演「時間と存在」","1月31日、フライブルク大学"],
 [1966,"event","『シュピーゲル』誌のインタビュー","本人の希望により死後の1976年に公表"],
 [1967,"life","詩人パウル・ツェランがトートナウベルクを訪れる",""],
 [1969,"work","『思考の事柄へ』","講演「時間と存在」とゼミナール記録を収録"],
 [1975,"work","全集の刊行が始まる",""],
 [1976,"life","5月26日、フライブルクで死去","メスキルヒに埋葬"],
 [1987,"event","ファリアス『ハイデガーとナチズム』をめぐる論争",""],
 [2014,"event","『黒ノート』の刊行が始まる","全集第94–96巻"]
];
function initTL(){
  const box=$("#tl");
  TL.forEach(([y,k,t,s])=>{const d=document.createElement("div");d.className="tl-item";d.dataset.k=k;d.innerHTML=`<div class="y">${y}</div><div class="dot"></div><div class="t">${t}${s?`<small>${s}</small>`:""}</div>`;box.appendChild(d)});
  const c=$("#tlCtrl");$$("button",c).forEach(b=>b.addEventListener("click",()=>{press(c,b);$$(".tl-item",box).forEach(it=>it.hidden=!(b.dataset.k==="all"||it.dataset.k===b.dataset.k))}));
}

/* ---------- glossary ---------- */
const GL=[
 ["Sein","存在","","存在者が「ある」ことの意味。それ自体は存在者ではない","toi"],
 ["Seiendes","存在者","","机・石・数・人間など、何らかのしかたで「ある」もの","toi"],
 ["ontologische Differenz","存在論的差異","","存在と存在者の区別。1927年の講義で定式化された","toi"],
 ["Seinsverständnis","存在了解","存在理解","現存在が存在の意味を漠然と、平均的に了解していること","toi"],
 ["Destruktion","解体","","伝統的な存在論の概念を、それが生まれた根源的な経験へ掘り返す作業","toi"],
 ["Phänomenologie","現象学","","自らを示すものを、それが自らを示すとおりに見えるようにする方法","toi"],
 ["Dasein","現存在","","存在を問うことのできる存在者。人間を指すが、人間学的な前提を避けるための語","dasein"],
 ["Existenz","実存","","現存在の存在のしかた。何であるかではなく、どう存在しうるかによって規定される","dasein"],
 ["Jemeinigkeit","各自性","","現存在がそのつど私のものであること","dasein"],
 ["existenzial","実存論的","","実存の構造を問う水準","dasein"],
 ["existenziell","実存的","","各自が具体的にどう生きるかの水準","dasein"],
 ["Existenzial","実存カテゴリー","実存疇・実存範疇","現存在の存在構造の項目。カテゴリーと区別される","dasein"],
 ["Eigentlichkeit","本来性","","自分のものとして存在していること。道徳的な優劣ではない","dasein"],
 ["Uneigentlichkeit","非本来性","","自分を世人に委ねて存在していること","dasein"],
 ["Alltäglichkeit","日常性","","分析の出発点となる、平均的な現存在のあり方","dasein"],
 ["In-der-Welt-sein","世界内存在","世界-内-存在","現存在の根本構造。世界・内存在・誰の3契機の統一","sekai"],
 ["In-Sein","内存在","","世界に慣れ親しんで住んでいること。空間的な包含ではない","sekai"],
 ["Weltlichkeit","世界性","","世界を世界として成り立たせている構造。有意義性","dougu"],
 ["Umwelt","環境世界","環世界・周囲世界","日常の現存在に最も身近な世界","sekai"],
 ["Ent-fernung","隔たりの撤去","開離","遠さを取り去り、物を近づけること。現存在の空間性","sekai"],
 ["Zeug","道具","","「〜するためのもの」として使用される存在者","dougu"],
 ["Zuhandenheit","手許存在性","道具的存在性・手もとにあること","道具の存在のしかた。使用の中で目立たずに身を引いている","dougu"],
 ["Vorhandenheit","事物的存在性","手前存在性・目の前にあること","眺められる物の存在のしかた。性質の担い手として現れる","dougu"],
 ["Umsicht","配視","目くばり","道具を使う時の、作業全体を見渡す見方","dougu"],
 ["Verweisung","指示","","道具が他の道具や目的を指し示す関係","dougu"],
 ["Bewandtnis","適所性","趣向","道具が指示の連関の中で何のためにあるかが定まっていること","dougu"],
 ["Bedeutsamkeit","有意義性","","指示の連関の全体。世界の世界性を構成する","dougu"],
 ["Worumwillen","目的であるもの","それのために","指示の連関の最終項。現存在自身の存在可能性","dougu"],
 ["Mitsein","共存在","","現存在がつねに他者とともに存在していること","hito"],
 ["Mitdasein","共現存在","","世界の中で出会われる他者の存在のしかた","hito"],
 ["Besorgen","配慮","配慮的気遣い","道具や事物への関わり","hito"],
 ["Fürsorge","顧慮","顧慮的気遣い","他者への関わり。尽力して代わる型と先に立って示す型がある","hito"],
 ["das Man","世人","ひと・世間","特定の誰でもない「人」。日常の現存在の主体","hito"],
 ["Öffentlichkeit","公共性","","懸隔性・平均性・均等化が合わさって成立する世人の存在のしかた","hito"],
 ["Erschlossenheit","開示性","開示態","世界と自分自身が開かれていること。現存在の「現」","kibun"],
 ["Befindlichkeit","情状性","情態性","気分において自分がどうであるかを見出していること","kibun"],
 ["Stimmung","気分","","世界内存在の全体を最初に開示する様態","kibun"],
 ["Geworfenheit","被投性","","自分で選んだのではない状況にすでに存在してしまっていること","kibun"],
 ["Faktizität","事実性","","被投的に存在しているという現存在の事実","kibun"],
 ["Verstehen","了解","理解","自分の存在可能性へと投企すること。知的な認識能力ではない","kibun"],
 ["Entwurf","投企","","自分を可能性へ向けて投げかけること","kibun"],
 ["Auslegung","解釈","","了解を明示的に仕上げること。「〜として」の構造をもつ","kibun"],
 ["Rede","語り","話","了解されたものを意味の単位に分節すること。言語より根源的","kibun"],
 ["Gerede","空談","世間話・おしゃべり","根拠を確かめずに受け売りして広める語り","kibun"],
 ["Neugier","好奇心","","了解するためではなく、ただ見るために見ること","kibun"],
 ["Zweideutigkeit","曖昧さ","両義性","何が本当に了解されているかが区別できない状態","kibun"],
 ["Verfallen","頽落","","現存在が世人と世界のもとに没頭していること。より高い状態からの転落ではない","kibun"],
 ["Furcht","恐れ","恐怖","特定の存在者が脅威として近づいてくる時の情状性","sorge"],
 ["Angst","不安","","世界内存在そのものを前にした根本気分。現存在を単独化する","sorge"],
 ["Unheimlichkeit","不気味さ","無気味さ","家に居るのではない、居心地の悪さ","sorge"],
 ["Sorge","関心","気遣い・気づかい","現存在の存在の全体構造。自己に先立ち、すでに世界の内に、存在者のもとに存在すること","sorge"],
 ["Unverborgenheit","非隠蔽性","隠れなさ","ギリシア語アレーテイアの訳。真理の根源的な意味","sorge"],
 ["Sein zum Tode","死への存在","死に臨む存在・死へとかかわる存在","現存在が自分の死に関わっている存在のしかた","shi"],
 ["Vorlaufen","先駆","先駆け","死を可能性として可能性のまま了解すること","shi"],
 ["Gewissen","良心","","世人に埋没した自己を、最も固有の存在可能性へ呼び出す呼び声","ketsui"],
 ["Schuldigsein","負い目があること","責めあること","無性の根拠であること。道徳的な負債の前提","ketsui"],
 ["Entschlossenheit","決意性","覚悟性","良心をもとうと意志し、最も固有の負い目へと自分を投企すること","ketsui"],
 ["vorlaufende Entschlossenheit","先駆的決意性","先駆的覚悟性","死への先駆として遂行される決意性。本来的な全体存在","ketsui"],
 ["Situation","状況","情況","決意性においてのみ開示される、そのつどの具体的な場","ketsui"],
 ["Zeitlichkeit","時間性","","関心の意味。将来・既在・現在の3つの脱自の統一","jikan"],
 ["Temporalität","存在の時間的性格","テンポラリテート・時節性","存在そのものの時間的な規定。未刊の第3編の主題","kosei"],
 ["Ekstase","脱自","脱自態","自分の外へ出ていく時間性の方向","jikan"],
 ["Zukunft","将来","","自分へと到来すること","jikan"],
 ["Gewesenheit","既在性","既往性","現存在が存在してきたことを、現に存在していること","jikan"],
 ["Gegenwart","現在","","存在者のもとに存在することを可能にする脱自","jikan"],
 ["Augenblick","瞬視","瞬間","本来的な現在。決意において状況に向き合うこと","jikan"],
 ["Wiederholung","反復","取り返し","かつての現存在の可能性へ明示的に立ち返ること","rekishi"],
 ["Gewärtigen","予期","","非本来的な将来。配慮されるものから結果を待ち受けること","jikan"],
 ["Vergessen","忘却","","非本来的な既在。自分の被投性を忘れていること","jikan"],
 ["Gegenwärtigen","現在化","","非本来的な現在。目の前のものに没頭すること","jikan"],
 ["Geschichtlichkeit","歴史性","","誕生と死の間に伸び広がって生起する現存在の存在のしかた","rekishi"],
 ["Geschehen","生起","","現存在の伸び広がった動き","rekishi"],
 ["Erbe","遺産","","現存在が被投的に引き受けている、過去の現存在の諸可能性","rekishi"],
 ["Schicksal","運命","","受け継いだが自ら選んだ可能性に自分を引き渡すこと","rekishi"],
 ["Geschick","共同の運命","命運","共存在としての現存在の生起。後期では存在の命運の意味でも用いられる","rekishi"],
 ["Weltzeit","世界時間","","配慮において計算に入れられる時間。日付可能性・張り渡し・公共性・世界性をもつ","rekishi"],
 ["Innerzeitigkeit","時間内部性","","存在者が時間の「中で」出会われること","rekishi"],
 ["Kehre","転回","","存在から時間への問いの向きの転換。後期思想を指す語","kosei"],
 ["Es gibt","それが与える","","「〜がある」を意味する独語の表現。1962年講演の出発点","mikan"],
 ["Ereignis","性起","出来事・エルアイクニス","存在と時間をそれぞれ固有のものへともたらす働き","mikan"]
];
function initGL(){
  const box=$("#gl"),q=$("#glQ");
  function draw(){
    const s=q.value.trim().toLowerCase();
    const rows=GL.filter(r=>!s||r.join(" ").toLowerCase().includes(s));
    box.innerHTML=rows.map(r=>`<div class="gl-row"><div class="de" style="color:var(--ink)">${r[0]}</div><div class="j">${r[1]}${r[2]?`<span class="alt">別訳：${r[2]}</span>`:""}</div><div>${r[3]}<a href="chapters/${FILE[r[4]]}">→ 該当章</a></div></div>`).join("");
    $("#glN").textContent=`${GL.length}語中 ${rows.length}語を表示`;
  }
  q.addEventListener("input",draw);draw();
}

/* ---------- quiz ---------- */
const QZ=[
 {q:"存在の問いにおいて「問いかけられるもの」は何か。",o:["存在","存在者、とくに現存在","存在の意味","神"],a:1,x:"存在はつねに存在者の存在であるため、存在者に問いかける。存在を問うことのできる存在者が現存在である（§2）。",v:"toi"},
 {q:"日常の現存在にとって最も身近な存在者の存在のしかたはどれか。",o:["事物的存在性","手許存在性","実存","時間内部性"],a:1,x:"最初に出会われるのは使用される道具であり、事物的存在は使用を控えた時に現れる派生的な様態である（§15）。",v:"dougu"},
 {q:"道具が見当たらない時に現れる様態をハイデガーは何と呼んだか。",o:["目立つこと","押しつけがましさ","手に負えなさ","好奇心"],a:1,x:"使えない道具は「目立つこと」、欠けている道具は「押しつけがましさ」、邪魔な物は「手に負えなさ」である（§16）。",v:"dougu"},
 {q:"世人についての説明として正しいものはどれか。",o:["教養のない大衆を指す","社会から離れることで克服される","私自身も含め誰もが日常的にとる存在のしかたである","近代社会に特有の病理である"],a:2,x:"世人は実存カテゴリーの一つであり、本来的な自己は世人の実存的な変様である（§27）。",v:"hito"},
 {q:"不安が何に対するものかを、ハイデガーはどう規定したか。",o:["近づいてくる特定の脅威","自分の死という出来事","世界内存在そのもの","他者の評価"],a:2,x:"恐れは世界内部の存在者に向かうが、不安は世界内存在そのものを前にする（§40）。",v:"sorge"},
 {q:"関心の定式の「すでに（世界の）内に存在しつつ」が基づく時間性の脱自はどれか。",o:["将来","既在","現在","世界時間"],a:1,x:"実存性は将来、事実性は既在、頽落は現在に基づく（§65）。",v:"jikan"},
 {q:"§52 の死の規定に含まれないものはどれか。",o:["最も固有の","没交渉的な","統計的に確実な","追い越しえない"],a:2,x:"死の確実さは経験的・統計的な確実さではない。統計は「これまで全員が死んだ」と示すだけである（§52）。",v:"shi"},
 {q:"本来的な既在の様態はどれか。",o:["忘却","予期","反復","瞬視"],a:2,x:"本来的な様態は先駆・反復・瞬視、非本来的な様態は予期・忘却・現在化である（§68）。",v:"jikan"},
 {q:"第1部第3編「時間と存在」について正しいものはどれか。",o:["1927年に刊行された","1953年の第7版で追加された","刊行されなかった","全集第2巻で初めて公刊された"],a:2,x:"刊行されたのは第1部の第1編と第2編だけである。1962年の講演は同じ題をもつが、第3編そのものではない。",v:"kosei"},
 {q:"1962年の講演で、存在と時間を与える「それ」と呼ばれたものは何か。",o:["現存在","性起","関心","神"],a:1,x:"「それ」は性起であり、性起には自らを引き去る脱性起が属する。",v:"mikan"}
];
function initQuiz(){
  const box=$("#quizBox");let done=0,ok=0;
  QZ.forEach((z,i)=>{
    const d=document.createElement("div");d.className="q";
    d.innerHTML=`<p class="qq">問${i+1}. ${z.q}</p><div class="opts">${z.o.map((o,j)=>`<button data-j="${j}">${o}</button>`).join("")}</div><div class="why" hidden></div>`;
    $$(".opts button",d).forEach(b=>b.addEventListener("click",()=>{
      if(d.dataset.done)return;d.dataset.done=1;done++;const j=+b.dataset.j;
      if(j===z.a){ok++;b.classList.add("ok")}else{b.classList.add("ng");$$(".opts button",d)[z.a].classList.add("ok")}
      const w=$(".why",d);w.hidden=false;w.innerHTML=`<b style="color:var(${j===z.a?"--pres":"--warn"})">${j===z.a?"正解":"不正解"}</b>。${z.x} <a href="chapters/${FILE[z.v]}">該当章へ</a>`;
      $("#quizScore").textContent=`10問中 ${done}問に回答済み。正解 ${ok}問。`+(done===10?(ok>=8?" 本書の骨格を把握できている。":" 不正解の章を読み直す。"):"");
    }));
    box.appendChild(d);
  });
  $("#quizScore").textContent="10問中 0問に回答済み。";
}

/* ---------- lifecycle ---------- */
// Each page carries only some of the demos; start the ones whose root exists.
const INIT=[["#demoPlan",initPlan],["#demoQ",initQ],["#demoMode",initModes],["#demoSort",initSort],["#demoNear",initNear],["#demoHammer",initHammer],["#demoCrowd",initCrowd],["#demoAs",initAs],["#demoAngst",initAngst],["#demoSorge",initSorge],["#demoDeath",initDeath],["#demoCall",initCall],["#demoTime",initTime],["#demoRep",initRep],["#demoDerive",initDerive],["#demoFour",initFour],["#tl",initTL],["#gl",initGL],["#quizBox",initQuiz]];
INIT.forEach(([sel,fn])=>{if($(sel))fn()});
// The two animations run only while their figure is on screen.
function watch(sel,on,off){const el=$(sel);if(!el||reduce||!("IntersectionObserver" in window))return;
  new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?on():off())).observe(el)}
watch("#crowd",()=>{if(!crowd.run){crowd.run=true;loopCrowd()}},()=>{crowd.run=false;cancelAnimationFrame(crowd.raf)});
watch("#timeSvg",()=>{if(!tm.run){tm.run=true;loopTime()}},()=>{tm.run=false;cancelAnimationFrame(tm.raf)});
})();

