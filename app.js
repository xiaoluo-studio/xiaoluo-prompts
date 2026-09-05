(() => {
  'use strict';
  const data = window.XIAOLUO_DATA;
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const paths = {
    home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1Z"/>',
    formula:'<path d="M4 5h16M4 12h10M4 19h16"/><circle cx="19" cy="12" r="2.5"/>',
    oneClick:'<path d="m13 2 2.7 7.3L23 12l-7.3 2.7L13 22l-2.7-7.3L3 12l7.3-2.7L13 2Z"/><path d="M4 2v4M2 4h4"/>',
    half:'<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><path d="M11 7h4a3 3 0 0 1 3 3v3M13 17H9a3 3 0 0 1-3-3v-3"/>',
    full:'<circle cx="5" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 5h3l4 7h3M7 19h3l4-7"/>',
    examples:'<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m4 18 6-6 4 4 3-3 4 4"/>',
    copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"/>',
    arrow:'<path d="M4 12h15m-6-6 6 6-6 6"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    lock:'<rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 15v2"/>',
    pen:'<path d="m4 16-1 5 5-1L20 8a2 2 0 0 0 0-3l-1-1a2 2 0 0 0-3 0L4 16Zm10-10 4 4M11 21h10"/>',
    camera:'<path d="M3 7h4l2-3h6l2 3h4v14H3Z"/><circle cx="12" cy="13" r="4"/>',
    cleanup:'<path d="m4 14 9-10a2 2 0 0 1 3 0l5 5a2 2 0 0 1 0 3l-8 9H8l-4-4a2 2 0 0 1 0-3ZM9 9l9 9M12 21h9"/>',
    enhance:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5m-8-9 3 3 5-6"/>',
    hair:'<path d="M5 20c0-10 3-16 7-16s7 6 7 16M6 14c3-1 5-4 6-8 1 4 3 7 6 8M8 19v3m4-4v4m4-3v3"/>',
    face:'<path d="M5 10a7 7 0 0 1 14 0v4c0 4-3 8-7 8s-7-4-7-8Z"/><path d="M9 11h.1m5.8 0h.1m-5 6c1.2 1 2.8 1 4 0"/>',
    fabric:'<path d="m8 3-6 5 4 4 2-2v12h8V10l2 2 4-4-6-5c-2 2-6 2-8 0Z"/>',
    body:'<circle cx="12" cy="4" r="2.5"/><path d="M12 7v7m0-4-7 3m7-3 7 3m-7 1-5 8m5-8 5 8"/>',
    prop:'<path d="m3 21 5-1 13-15V2h-3L5 17l-2 4Zm3-6 4 4m-1-6 3 3"/>',
    light:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
    weather:'<path d="M7 16h11a4 4 0 0 0 .5-8A6 6 0 0 0 7 9a3.5 3.5 0 0 0 0 7Zm0 4-1 2m6-2v2m5-2 1 2"/>',
    color:'<path d="M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h6c2 0 3-1 2-3-1.6-4.5-5-7-9-7Z"/><path d="M7 9h.1M11 6h.1M16 7h.1"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
    qr:'<path d="M3 3h6v6H3Zm12 0h6v6h-6ZM3 15h6v6H3Zm12 0h3v3h3v3h-6Zm6-3h.01M12 12h.01"/>'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.oneClick}</svg>`;
  const sections = {
    home:{name:'首页',title:'提示词库',eyebrow:'PROMPT COLLECTION'},
    formula:{name:'万能公式',title:'万能提示词公式',eyebrow:'01 / PROMPT FORMULA',description:'固定前缀、主体描述、镜头限定、质感后缀，组合成完整指令。'},
    oneClick:{name:'一键精修',title:'一键精修提示词',eyebrow:'02 / RETOUCH LIBRARY',description:'从清理与修复，到光影与特效，按修图任务查找。'},
    half:{name:'半合成流程',title:'场照半合成流程',eyebrow:'03 / SEMI-COMPOSITE',description:'保留场馆骨架，依次完成背景清理、场景添加、特效与高清修复。'},
    full:{name:'全合成流程',title:'场照全合成流程',eyebrow:'04 / FULL COMPOSITE',description:'从场景构思开始，完成生成、特效、放大与最终精修。'},
    examples:{name:'使用示例',title:'使用示例图库',eyebrow:'05 / CASE STUDIES',description:'查看成片与对应提示词，寻找适合当前作品的处理思路。'},
    search:{name:'搜索结果',title:'搜索结果',eyebrow:'SEARCH RESULTS'}
  };
  const groupIcons = {'清理与修复':'cleanup','画质与细节':'enhance','面部与妆容':'face','假发与发丝':'hair','服装与布料':'fabric','体态与肢体':'body','道具与材质':'prop','光影与融合':'light','场景与构图':'examples','氛围与天气':'weather','特效与能量':'oneClick','色彩与成片':'color'};
  const groups = Object.keys(groupIcons);
  const contentSections = ['formula','oneClick','half','full','examples'];
  const items = contentSections.flatMap(section => data[section].map(item => ({...item,section})));
  const byId = new Map(items.map(item => [item.id,item]));
  const groupCount = name => data.oneClick.filter(item=>item.group===name).length;
  const main = $('main'), input = $('search'), dialog = $('promptDialog');
  let route, lastRoute={page:'home',params:new URLSearchParams()}, searchTimer, toastTimer, focusedBeforeDialog, dialogWasPushed=false, composing=false;
  let openId='';
  const href = (page,params={}) => `#${page}${Object.keys(params).length ? '?' + new URLSearchParams(params).toString() : ''}`;
  function readRoute(){
    const [candidate,query='']=location.hash.slice(1).split('?');
    return {page:sections[candidate] ? candidate : 'home',params:new URLSearchParams(query)};
  }
  function saveRoute(page,params={},replace=false,scroll=true){
    history[replace?'replaceState':'pushState']({},'',href(page,params));
    render(scroll);
  }
  function routeParams(){return Object.fromEntries(route.params.entries());}
  function heading(page,action=''){
    const section=sections[page];
    return `<div class="page-head"><div><p class="eyebrow">${section.eyebrow}</p><h2>${section.title}</h2>${section.description?`<p class="page-description">${section.description}</p>`:''}</div>${action}</div>`;
  }
  function copyButton(item,label='复制'){
    return item.qr
      ? `<button class="copy-small" data-open="${item.id}" aria-label="查看${escape(item.title)}的二维码">${icon('qr')}查看二维码</button>`
      : `<button class="copy-small" data-copy="${item.id}" aria-label="复制${escape(item.title)}">${icon('copy')}${label}</button>`;
  }
  function itemIcon(item){
    if(item.section==='formula') return ['lock','pen','camera','oneClick'][data.formula.findIndex(x=>x.id===item.id)];
    if(item.group)return groupIcons[item.group];
    if(/高清|降噪/.test(item.title))return 'enhance';
    if(/头发/.test(item.title))return 'hair';
    if(/背景杂物/.test(item.title))return 'cleanup';
    if(/特效/.test(item.title))return 'oneClick';
    return item.variant?'pen':item.section==='examples'?'examples':'half';
  }
  function highlight(text,query=''){
    if(!query.trim())return escape(text);
    const tokens=query.trim().split(/\s+/).filter(Boolean).sort((a,b)=>b.length-a.length);
    const pattern=new RegExp('('+tokens.map(token=>token.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')','gi');
    return String(text).split(pattern).map(part=>tokens.some(token=>part.toLowerCase()===token.toLowerCase())?`<mark>${escape(part)}</mark>`:escape(part)).join('');
  }
  function snippet(item,query=''){
    const text=item.prompt.replace(/\s+/g,' ');
    const token=query.trim().split(/\s+/).find(word=>text.toLowerCase().includes(word.toLowerCase()));
    const start=token?Math.max(0,text.toLowerCase().indexOf(token.toLowerCase())-30):0;
    return (start?'…':'')+text.slice(start,start+190)+(text.length>start+190?'…':'');
  }
  function promptCard(item,{query='',step=false}={}){
    const title=item.variant || item.title;
    return `<article class="prompt-card"><button class="prompt-open" data-open="${item.id}" aria-label="查看${escape(title)}完整提示词">${step?`<span class="step-label">${item.index} / ${['固定前缀','主体描述','镜头限定','质感后缀'][Number(item.index)-1]}</span>`:''}<div class="prompt-top"><span class="small-icon">${icon(itemIcon(item))}</span><h3>${highlight(step?item.title.split('·')[0].trim():title,query)}</h3></div><p class="prompt-preview">${highlight(snippet(item,query),query)}</p></button><div class="prompt-footer"><span class="prompt-tag">${escape(item.tool || item.group || sections[item.section].name)}</span>${copyButton(item)}</div></article>`;
  }
  const quickTasks = () => ['背景杂物','头发','高清','光影','特效'].map(word=>`<a class="quick-link" href="${href('search',{q:word})}">${icon('search')}${word}</a>`).join('');
  function home(){
    const category=(key,title,description,count,extra='')=>`<article class="category category-${key}"><a class="category-main" href="#${key}" aria-label="打开${title}"><div class="category-top"><span class="category-icon">${icon(key)}</span><span class="category-count">${count}</span></div><h3>${title}</h3><p class="category-description">${description}</p><span class="category-arrow">${icon('arrow')}</span>${extra}</a></article>`;
    return `<div class="page-head home-head"><h2 class="home-heading">提示词库</h2><span class="head-meta">100 条精修提示词 · 17 个示例</span></div><div class="quick-tasks"><span class="quick-label">常用任务</span>${quickTasks()}</div><section class="home-grid" aria-label="五个提示词分类"><article class="category category-featured"><a class="category-main" href="#oneClick" aria-label="打开一键精修提示词"><div class="category-top"><span class="category-icon">${icon('oneClick')}</span><span class="category-count">${data.oneClick.length} 条提示词 / ${groups.length} 个分类</span></div><h3>一键精修提示词</h3><p class="category-description">清理杂物，修整细节，完善光影。</p><span class="category-arrow">${icon('arrow')}</span></a><div class="category-shortcuts" aria-label="直达精修分类">${['清理与修复','假发与发丝','光影与融合','特效与能量'].map(group=>`<a class="category-shortcut" href="${href('oneClick',{group})}">${group}</a>`).join('')}</div></article>${category('formula','万能提示词公式','四段式结构，组织完整指令','4 个部分')}${category('half','场照半合成流程','保留场馆，逐层丰富场景','4 个步骤')}${category('full','场照全合成流程','从构思生成，到最终精修','5 个阶段')}${category('examples','使用示例图库','成片、提示词与二维码案例','17 个示例',`<span class="example-peek" aria-hidden="true"><img src="assets/example-02.jpg" alt="" width="43" height="58"><img src="assets/example-03.jpg" alt="" width="43" height="58"></span>`)}</section><p class="home-footnote">${icon('info')}点击提示词查看全文，复制后可直接使用。</p>`;
  }
  function formula(){
    return heading('formula',`<button class="button primary" data-copy-all="formula">${icon('copy')}复制完整骨架</button>`)+`<div class="formula-strip" aria-label="提示词组成"><span>固定前缀</span><b>+</b><span>主体描述</span><b>+</b><span>镜头限定</span><b>+</b><span>质感后缀</span></div><div class="formula-grid">${data.formula.map(x=>promptCard(byId.get(x.id),{step:true})).join('')}</div><div class="formula-note"><p><strong>搭建你的完整指令</strong><br>复制骨架后，替换「主体 / 场景 / 特效需求」，再按作品调整镜头与质感。</p><a class="text-link" href="#examples">查看使用示例${icon('arrow')}</a></div>`;
  }
  function retouch(){
    let selected=route.params.get('group')||'';
    if(!groups.includes(selected))selected='';
    const filterLink=(name,label,count)=>`<a class="filter ${selected===name?'active':''}" href="${href('oneClick',name?{group:name}:{})}" ${selected===name?'aria-current="true"':''}>${label}<span>${count}</span></a>`;
    const filter=`<div class="filter-panel"><div class="filter-row" aria-label="精修分类">${filterLink('','全部',data.oneClick.length)}${groups.map(group=>filterLink(group,group,groupCount(group))).join('')}</div><label class="mobile-filter" for="groupSelect">精修分类<select id="groupSelect"><option value="" ${!selected?'selected':''}>全部分类（${data.oneClick.length}）</option>${groups.map(group=>`<option value="${group}" ${selected===group?'selected':''}>${group}（${groupCount(group)}）</option>`).join('')}</select></label></div>`;
    return heading('oneClick',`<button class="button" data-copy-all="oneClick">${icon('copy')}${selected?'复制当前分类':'复制全部'}</button>`)+filter+(selected?[selected]:groups).map(group=>`<section class="prompt-group"><div class="group-heading"><h3>${icon(groupIcons[group])}${group}</h3><span>${groupCount(group)} 条提示词</span></div><div class="prompt-grid">${data.oneClick.filter(x=>x.group===group).map(x=>promptCard(byId.get(x.id))).join('')}</div></section>`).join('');
  }
  function workflow(page){
    const steps=[...new Set(data[page].map(x=>x.step))];
    return heading(page,`<button class="button" data-copy-all="${page}">${icon('copy')}复制整个流程</button>`)+`<p class="workflow-kicker">${icon('info')}${page==='full'?'第 1 步先选择是否有参考图，再按顺序完成后续步骤。':'按顺序执行；每一步都可单独查看和复制。'}</p><div class="workflow">${steps.map(step=>{
      const records=data[page].filter(x=>x.step===step);
      return `<section class="workflow-step" aria-label="第 ${step} 步"><div class="step-rail"><span>${String(step).padStart(2,'0')}</span></div><div class="${records.length>1?'branch-grid':''}">${records.map(x=>promptCard(byId.get(x.id))).join('')}</div></section>`;
    }).join('')}</div>`;
  }
  function exampleCard(item){
    return `<article class="example-card"><button class="example-open" data-open="${item.id}" aria-label="查看示例：${escape(item.title)}"><div class="example-image"><img src="${item.image}" alt="${escape(item.title)}" width="400" height="500" loading="lazy" decoding="async"><span class="example-number">${String(item.number).padStart(2,'0')}</span></div><div class="example-info"><h3>${escape(item.title)}</h3><small>${item.qr?'二维码案例':'含完整提示词'}</small></div></button><div class="prompt-footer"><span class="prompt-tag">EXAMPLE ${String(item.number).padStart(2,'0')}</span>${copyButton(item,'复制提示词')}</div></article>`;
  }
  function gallery(){
    const kind=route.params.get('kind')||'';
    const options=[['','全部示例',17],['prompt','完整提示词',data.examples.filter(x=>!x.qr).length],['qr','二维码案例',data.examples.filter(x=>x.qr).length]];
    return heading('examples')+`<div class="gallery-tabs" aria-label="示例类型">${options.map(([key,label,count])=>`<a class="filter ${key===kind?'active':''}" href="${href('examples',key?{kind:key}:{})}" ${key===kind?'aria-current="true"':''}>${label}<span>${count}</span></a>`).join('')}</div><div class="gallery-grid">${data.examples.filter(x=>kind==='qr'?x.qr:kind==='prompt'?!x.qr:true).map(x=>exampleCard(byId.get(x.id))).join('')}</div>`;
  }
  const synonyms={'去背景':['去背景','背景杂物','移除背景'],'去杂物':['去杂物','去除背景杂物','清理杂物'],'头发':['头发','发丝','假发'],'高清':['高清','清晰','放大'],'光影':['光影','受光','光线']};
  function searchItems(query){
    const tokens=query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if(!tokens.length)return [];
    return items.map(item=>{
      const title=item.title.toLowerCase(),body=[item.title,item.prompt,item.group,item.variant,item.tool].filter(Boolean).join(' ').toLowerCase();
      if(!tokens.every(token=>(synonyms[token]||[token]).some(word=>body.includes(word))))return null;
      return {item,score:(title===query.toLowerCase()?100:0)+tokens.reduce((score,token)=>score+(title.includes(token)?20:0)+(item.group?.includes(token)?10:0),0)};
    }).filter(Boolean).sort((a,b)=>b.score-a.score).map(x=>x.item);
  }
  function searchPage(){
    const query=route.params.get('q')||'';
    const scope=route.params.get('scope')||'';
    const found=searchItems(query),shown=scope?found.filter(x=>x.section===scope):found;
    const options=[['','全部',found.length],...contentSections.map(key=>[key,sections[key].name,found.filter(x=>x.section===key).length])];
    return heading('search')+`<p class="result-count" role="status">“${escape(query)}” · ${shown.length} 个结果</p><div class="filter-row search-filters" aria-label="搜索结果分类">${options.filter(([, ,count])=>count || !found.length).map(([key,label,count])=>`<a class="filter ${scope===key?'active':''}" href="${href('search',{q:query,...(key?{scope:key}:{})})}" ${scope===key?'aria-current="true"':''}>${label}<span>${count}</span></a>`).join('')}</div>${shown.length?`<div class="prompt-grid search-grid">${shown.map(item=>promptCard(item,{query})).join('')}</div>`:`<div class="empty-state">${icon('search')}<h3>没有找到匹配的提示词</h3><p>试试更简短的任务词，或换一个相关关键词。</p><div class="quick-tasks">${quickTasks()}</div></div>`}`;
  }
  function render(scroll=true){
    route=readRoute();
    if(route.page!=='search')lastRoute={page:route.page,params:new URLSearchParams(route.params)};
    input.value=route.page==='search'?(route.params.get('q')||''):'';
    $('clearSearch').hidden=!input.value;
    $('navigation').innerHTML=Object.entries(sections).filter(([key])=>key!=='search').map(([key,section])=>`<a class="nav-link" href="#${key}" ${key===route.page?'aria-current="page"':''}>${icon(key)}${section.name}</a>`).join('');
    main.innerHTML=route.page==='home'?home():route.page==='formula'?formula():route.page==='oneClick'?retouch():route.page==='examples'?gallery():route.page==='search'?searchPage():workflow(route.page);
    document.title=route.page==='home'?'小洛后期提示词合集':`${sections[route.page].title} · 小洛后期提示词合集`;
    if(scroll){window.scrollTo({top:0,behavior:'instant'});main.classList.remove('page-enter');void main.offsetWidth;main.classList.add('page-enter');}
    syncDialog();
  }
  function toast(text){clearTimeout(toastTimer);$('toast').textContent=text;$('toast').classList.add('visible');toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),2400);}
  async function copyText(text,button){
    let success=false;
    try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);success=true;}}catch(_){/* The selection fallback also works for file://. */}
    if(!success){
      const area=document.createElement('textarea');area.value=text;area.readOnly=true;area.style.cssText='position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;font-size:16px';
      (dialog.open?dialog:document.body).append(area);const active=document.activeElement;area.focus();area.select();area.setSelectionRange(0,text.length);
      try{success=document.execCommand('copy');}catch(_){}
      area.remove();active?.focus({preventScroll:true});
    }
    if(success){
      toast('已复制完整提示词');
      if(button){const original=button.dataset.copyLabel||button.innerHTML;button.dataset.copyLabel=original;clearTimeout(button.copyFeedbackTimer);button.innerHTML=icon('check')+'已复制';button.copyFeedbackTimer=setTimeout(()=>{if(button.isConnected)button.innerHTML=original;},1600);}
    }else{
      toast('浏览器未允许复制，请在详情中长按或选择文字复制');
    }
  }
  function sectionText(page){
    if(page==='formula')return data.formulaText;
    let records=data[page];
    const group=route.params.get('group');
    if(page==='oneClick'&&groups.includes(group))records=records.filter(item=>item.group===group);
    return records.map(item=>`${item.step?`第 ${item.step} 步 · `:''}${item.title}\n${item.prompt}`).join('\n\n──────────\n\n');
  }
  function openPrompt(id,trigger){
    if(!byId.has(id))return;
    clearTimeout(searchTimer);
    focusedBeforeDialog=trigger;
    dialogWasPushed=true;
    history.pushState({},'',href(route.page,{...routeParams(),item:id}));
    route=readRoute();syncDialog();
  }
  function syncDialog(){
    const id=route.params.get('item'),item=byId.get(id);
    if(!item){
      if(dialog.open)dialog.close();openId='';
      if(focusedBeforeDialog?.isConnected)focusedBeforeDialog.focus({preventScroll:true});
      return;
    }
    if(openId!==id){
      openId=id;
      $('dialogLabel').textContent=[sections[item.section].name,item.group,item.step?`第 ${item.step} 步`:null,item.tool].filter(Boolean).join(' / ');
      $('dialogTitle').textContent=item.title;
      const imageHTML=item.image?`<img class="dialog-image" src="${item.image}" alt="${escape(item.title)}">`:'';
      $('dialogBody').innerHTML=imageHTML+(item.qr?`<div class="qr-view"><img src="${item.qr}" alt="${escape(item.title)}的腾讯文档二维码"><p>扫码查看完整案例<br>手机可保存二维码后，在微信中识别。</p><a href="${item.qr}" download="${item.id}-qr.png">保存二维码图片</a></div>`:`${item.image?'<details class="example-details" open><summary>完整提示词</summary>':''}<div class="prompt-full">${escape(item.prompt)}</div>${item.image?'</details>':''}`);
      $('dialogHint').textContent=item.qr?'二维码链接到原案例文档':`${item.prompt.length.toLocaleString()} 字符 · 可直接选中文字`;
      $('dialogCopy').innerHTML=icon(item.qr?'check':'copy')+(item.qr?'完成':'复制完整提示词');
      $('dialogCopy').dataset.copy=item.qr?'':id;
      $('dialogBody').scrollTop=0;
    }
    if(!dialog.open){dialog.showModal();$('closeDialog').focus({preventScroll:true});}
  }
  function closePrompt(){
    if(!dialog.open)return;
    if(dialogWasPushed){dialogWasPushed=false;history.back();}
    else{const params=routeParams();delete params.item;history.replaceState({},'',href(route.page,params));route=readRoute();syncDialog();}
  }
  function runSearch(){
    const rawQuery=input.value,query=rawQuery.trim();
    if(query){
      const first=route.page!=='search';
      history[first?'pushState':'replaceState']({},'',href('search',{q:query}));render(false);input.value=rawQuery;
    }else{
      const params=Object.fromEntries(lastRoute.params);delete params.item;
      saveRoute(lastRoute.page,params,true,false);
    }
  }
  input.addEventListener('compositionstart',()=>{composing=true;clearTimeout(searchTimer);});
  input.addEventListener('compositionend',()=>{composing=false;clearTimeout(searchTimer);searchTimer=setTimeout(runSearch,130);});
  input.addEventListener('input',()=>{clearTimeout(searchTimer);$('clearSearch').hidden=!input.value;if(!composing)searchTimer=setTimeout(runSearch,130);});
  $('searchForm').addEventListener('submit',event=>{event.preventDefault();clearTimeout(searchTimer);runSearch();input.blur();window.scrollTo({top:0,behavior:'instant'});});
  $('clearSearch').addEventListener('click',()=>{clearTimeout(searchTimer);input.value='';runSearch();input.focus();});
  document.addEventListener('click',event=>{
    const copy=event.target.closest('[data-copy]');
    if(copy&&copy.dataset.copy){copyText(byId.get(copy.dataset.copy).prompt,copy);return;}
    const copyAll=event.target.closest('[data-copy-all]');
    if(copyAll){copyText(sectionText(copyAll.dataset.copyAll),copyAll);return;}
    const open=event.target.closest('[data-open]');
    if(open){openPrompt(open.dataset.open,open);return;}
    const anchor=event.target.closest('a[href^="#"]');
    if(anchor&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey){
      if(anchor.hash==='#main')return;
      event.preventDefault();clearTimeout(searchTimer);dialogWasPushed=false;
      history.pushState({},'',anchor.getAttribute('href'));render(true);main.focus({preventScroll:true});
    }
  });
  document.addEventListener('change',event=>{if(event.target.id==='groupSelect')saveRoute('oneClick',event.target.value?{group:event.target.value}:{},false,false);});
  $('closeDialog').addEventListener('click',closePrompt);
  $('dialogCopy').addEventListener('click',()=>{if(!$('dialogCopy').dataset.copy)closePrompt();});
  dialog.addEventListener('cancel',event=>{event.preventDefault();closePrompt();});
  dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)closePrompt();});
  document.addEventListener('keydown',event=>{
    if(dialog.open)return;
    if(event.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){event.preventDefault();input.focus();}
    if(event.key==='Escape'&&document.activeElement===input){input.value='';clearTimeout(searchTimer);runSearch();input.blur();}
  });
  function onHistory(){
    clearTimeout(searchTimer);
    const next=readRoute(),previousParams=routeParams(),nextParams=Object.fromEntries(next.params);delete previousParams.item;delete nextParams.item;
    if(next.page===route.page&&JSON.stringify(previousParams)===JSON.stringify(nextParams)){route=next;syncDialog();}
    else render(true);
  }
  window.addEventListener('popstate',onHistory);
  window.addEventListener('hashchange',()=>{if(location.hash!==href(route.page,routeParams()))onHistory();});
  main.addEventListener('pointermove',event=>{
    if(event.pointerType!=='mouse'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const card=event.target.closest('.category');if(!card)return;
    const rect=card.getBoundingClientRect();card.style.setProperty('--mx',`${event.clientX-rect.left}px`);card.style.setProperty('--my',`${event.clientY-rect.top}px`);
  });
  render(false);
})();
