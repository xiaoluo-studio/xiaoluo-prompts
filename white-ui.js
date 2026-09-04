(() => {
  const HOME_ICON = `<svg class="home-glyph" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4.5 10.5 7.5-6 7.5 6v8a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v-8Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.5 20v-6.5h5V20" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;

  const icon = name => {
    const icons = {
      formula: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M11 13h26M11 24h17M11 35h22" stroke-width="2.4" stroke-linecap="round"/><circle cx="35" cy="24" r="4" stroke-width="2.4"/><path d="m32.2 26.8-5 5" stroke-width="2.4" stroke-linecap="round"/></svg>`,
      oneClick: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="m23.8 8 2.7 8.2 8.2 2.7-8.2 2.7-2.7 8.2-2.7-8.2-8.2-2.7 8.2-2.7L23.8 8Z" stroke-width="2.2" stroke-linejoin="round"/><path d="m36.5 29 1.4 4.1 4.1 1.4-4.1 1.4-1.4 4.1-1.4-4.1-4.1-1.4 4.1-1.4 1.4-4.1ZM12.5 29l1.1 3.4 3.4 1.1-3.4 1.1-1.1 3.4-1.1-3.4L8 33.5l3.4-1.1 1.1-3.4Z" stroke-width="2" stroke-linejoin="round"/></svg>`,
      half: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="8" y="9" width="13" height="13" rx="3" stroke-width="2.2"/><rect x="27" y="26" width="13" height="13" rx="3" stroke-width="2.2"/><path d="M21 15.5h7a6 6 0 0 1 6 6V26M27 32.5h-7a6 6 0 0 1-6-6V22" stroke-width="2.2" stroke-linecap="round"/></svg>`,
      full: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M9 13h9l5 11h16" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 35h9l5-11" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="13" r="3" stroke-width="2.2"/><circle cx="9" cy="35" r="3" stroke-width="2.2"/><circle cx="39" cy="24" r="3" stroke-width="2.2"/></svg>`,
      examples: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="8" y="10" width="32" height="28" rx="5" stroke-width="2.2"/><circle cx="17" cy="19" r="3" stroke-width="2.2"/><path d="m12 33 8-8 6 6 4-4 6 6" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      poses: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="11" r="4" stroke-width="2.2"/><path d="M24 15v11m0-7-9 7m9-7 10 5m-10 2-7 12m7-12 8 12" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    };
    return icons[name] || icons.formula;
  };

  const stepIcon = name => {
    const icons = {
      lock: `<svg viewBox="0 0 32 32" fill="none"><rect x="7" y="13" width="18" height="14" rx="4"/><path d="M11 13V9a5 5 0 0 1 10 0v4"/><circle cx="16" cy="20" r="1.5"/></svg>`,
      compose: `<svg viewBox="0 0 32 32" fill="none"><path d="m8 23 1.2-5.2L21.5 5.5a2.1 2.1 0 0 1 3 0l2 2a2.1 2.1 0 0 1 0 3L14.2 22.8 9 24Z"/><path d="m19.5 7.5 5 5M8 27h17"/></svg>`,
      camera: `<svg viewBox="0 0 32 32" fill="none"><path d="M5 11.5h5l2-3h8l2 3h5v14H5Z"/><circle cx="16" cy="18.5" r="5"/><path d="M23.5 14.5h.1"/></svg>`,
      finish: `<svg viewBox="0 0 32 32" fill="none"><path d="m16 4 2.2 7.1L25 13.5l-6.8 2.4L16 23l-2.2-7.1L7 13.5l6.8-2.4L16 4Z"/><path d="m22.5 22.5 1.1 3.3 3.4 1.2-3.4 1.1-1.1 3.4-1.1-3.4L18 27l3.4-1.2 1.1-3.3Z"/></svg>`,
      cleanup: `<svg viewBox="0 0 32 32" fill="none"><path d="M8 21 21.2 7.8a2.4 2.4 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4L13 26H8Z"/><path d="m17.5 11.5 7 7M8 26h18"/></svg>`,
      scene: `<svg viewBox="0 0 32 32" fill="none"><rect x="4.5" y="5.5" width="23" height="21" rx="4"/><circle cx="11" cy="12" r="2.5"/><path d="m7.5 23 6.5-7 4.5 4 3-3 3.5 6"/></svg>`,
      effects: `<svg viewBox="0 0 32 32" fill="none"><path d="m14 4 2.2 7.2L23 13.5l-6.8 2.3L14 23l-2.2-7.2L5 13.5l6.8-2.3L14 4Z"/><path d="m24.5 19 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/></svg>`,
      enhance: `<svg viewBox="0 0 32 32" fill="none"><path d="M12 5H6a1 1 0 0 0-1 1v6M20 5h6a1 1 0 0 1 1 1v6M12 27H6a1 1 0 0 1-1-1v-6M20 27h6a1 1 0 0 0 1-1v-6"/><path d="m11 18 3 3 7-9"/></svg>`,
      reference: `<svg viewBox="0 0 32 32" fill="none"><rect x="5" y="6" width="22" height="20" rx="4"/><circle cx="12" cy="13" r="2.5"/><path d="m8 23 6-6 4.2 4 2.8-3 3 5"/><path d="M22 4v4M20 6h4"/></svg>`,
      hair: `<svg viewBox="0 0 32 32" fill="none"><path d="M8 24c0-9 3.5-16 8-16s8 7 8 16"/><path d="M10 18c2.5-1 4.4-3.3 5.5-7 1.7 4 4 6.5 7 7M12 24v3M16 23v5M20 24v3"/></svg>`,
      face: `<svg viewBox="0 0 32 32" fill="none"><path d="M9 13c0-5 3-8 7-8s7 3 7 8v5c0 5-3 9-7 9s-7-4-7-9v-5Z"/><path d="M12.5 16h.1M19.5 16h.1M13 21c2 1.4 4 1.4 6 0"/></svg>`,
      fabric: `<svg viewBox="0 0 32 32" fill="none"><path d="m11 6-6 6 4 4 3-3v14h8V13l3 3 4-4-6-6c-1.2 1.4-2.8 2-5 2s-3.8-.6-5-2Z"/></svg>`,
      body: `<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="6.5" r="3"/><path d="M16 10v8m0-5-7 4m7-4 7 4m-7 1-5 9m5-9 5 9"/></svg>`,
      prop: `<svg viewBox="0 0 32 32" fill="none"><path d="M7 25 23 9M19 7l6-2-2 6M5 27l5-1-4-4-1 5Z"/><path d="m11 19 3 3"/></svg>`,
      light: `<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="14" r="6"/><path d="M16 3v3M16 22v3M5 14h3M24 14h3M8.2 6.2l2.1 2.1M21.7 19.7l2.1 2.1M23.8 6.2l-2.1 2.1M10.3 19.7l-2.1 2.1M12 28h8"/></svg>`,
      weather: `<svg viewBox="0 0 32 32" fill="none"><path d="M9 20h14a5 5 0 0 0 .4-10A7.5 7.5 0 0 0 9.2 12 4 4 0 0 0 9 20Z"/><path d="m10 24-1 3M16 24v3M22 24l1 3"/></svg>`,
      color: `<svg viewBox="0 0 32 32" fill="none"><path d="M16 5C9.9 5 5 9.5 5 15s4.4 10 10 10h2.5a2.5 2.5 0 0 0 0-5H16a2 2 0 0 1 0-4h8.8c1.5 0 2.4-1.4 2.1-2.8C25.9 8.5 21.5 5 16 5Z"/><circle cx="10.5" cy="13" r="1.2"/><circle cx="14" cy="9.5" r="1.2"/><circle cx="19" cy="9.5" r="1.2"/></svg>`
    };
    return icons[name] || icons.effects;
  };

  const iconKindFor = item => {
    const id = item.id || "";
    const text = `${item.title || ""} ${item.group || ""} ${item.variant || ""}`;
    if (id === "formula-prefix") return "lock";
    if (id === "formula-body") return "compose";
    if (id === "formula-limit") return "camera";
    if (id === "formula-suffix") return "finish";
    if (/参考图/.test(text)) return "reference";
    if (/生成|主体描述|构思/.test(text)) return "compose";
    if (/头发|发丝|假发|黑边/.test(text)) return "hair";
    if (/背景|杂物|清理|修复|去除|替换/.test(text)) return "cleanup";
    if (/场景|构图/.test(text)) return "scene";
    if (/特效|能量/.test(text)) return "effects";
    if (/高清|放大|降噪|画质|细节/.test(text)) return "enhance";
    if (/面部|妆容|美瞳/.test(text)) return "face";
    if (/服装|布料|裙/.test(text)) return "fabric";
    if (/体态|肢体|身材|腹肌/.test(text)) return "body";
    if (/道具|材质|武器/.test(text)) return "prop";
    if (/光影|融合|打光/.test(text)) return "light";
    if (/天气|下雪|下雨|氛围/.test(text)) return "weather";
    if (/色彩|成片|色调/.test(text)) return "color";
    return "effects";
  };

  const iconColorFor = kind => ({
    lock: "#0071e3", compose: "#7457e8", camera: "#008f88", finish: "#c44178",
    cleanup: "#3f7fdd", scene: "#008f88", effects: "#7457e8", enhance: "#0071e3",
    reference: "#d85c31", hair: "#c44178", face: "#c44178", fabric: "#7457e8",
    body: "#d85c31", prop: "#8a6f34", light: "#d28a00", weather: "#3f7fdd", color: "#b84b8d"
  }[kind] || "#0071e3");

  const vectorBadge = (item, className = "") => {
    const kind = iconKindFor(item);
    return `<span class="card-vector ${className}" style="--icon-color:${iconColorFor(kind)}" aria-hidden="true">${stepIcon(kind)}</span>`;
  };

  formulaMenuCard = function formulaMenuCardWhite(item) {
    const parts = item.title.split("·").map(part => part.trim());
    const title = parts.shift() || item.title;
    const subtitle = parts.join(" · ") || "点击查看完整提示词";
    return `<article class="prompt-card formula-menu-card" data-card-id="${item.id}" data-open-id="${item.id}" role="button" tabindex="0" aria-label="查看${escapeHTML(item.title)}的完整提示词"><div class="formula-menu-top"><span class="formula-menu-index">${escapeHTML(item.index)}</span><span class="formula-menu-action">查看内容 ↗</span></div>${vectorBadge(item)}<h3>${escapeHTML(title)}</h3><p>${escapeHTML(subtitle)}</p><button class="copy-btn" title="复制完整提示词" data-copy-id="${item.id}" aria-label="复制${escapeHTML(item.title)}">${ICON_COPY}</button></article>`;
  };

  workflowMenuCard = function workflowMenuCardWhite(item, options = {}) {
    const parts = item.title.split("·").map(part => part.trim());
    const title = parts.shift() || item.title;
    const subtitle = parts.join(" · ");
    return `<article class="prompt-card workflow-menu-card" data-card-id="${item.id}" data-open-id="${item.id}" role="button" tabindex="0" aria-label="查看第${item.step}步${escapeHTML(item.title)}"><div class="workflow-menu-top"><span class="workflow-menu-index">STEP ${String(item.step).padStart(2,"0")}</span><span class="workflow-menu-tool">${escapeHTML(item.tool || "AI")}</span></div>${vectorBadge(item)}<h3>${escapeHTML(title)}</h3>${subtitle ? `<p>${escapeHTML(subtitle)}</p>` : ""}<span class="workflow-view-hint">点击查看本步骤提示词</span><button class="copy-btn" title="复制本步骤提示词" data-copy-id="${item.id}" aria-label="复制${escapeHTML(item.title)}">${ICON_COPY}</button>${options.connector ? '<span class="flow-arrow" aria-hidden="true"><i></i></span>' : ""}</article>`;
  };

  branchMenuCard = function branchMenuCardWhite(item) {
    return `<article class="prompt-card branch-menu-card" data-card-id="${item.id}" data-open-id="${item.id}" role="button" tabindex="0" aria-label="查看${escapeHTML(item.variant)}分支提示词"><div class="workflow-menu-top"><span class="workflow-menu-index">STEP 01</span><span class="workflow-menu-tool">${escapeHTML(item.tool || "AI")}</span></div>${vectorBadge(item, "card-vector-branch")}<h3>${escapeHTML(item.variant)}</h3><p class="branch-view-hint">点击查看本步骤提示词</p><button class="copy-btn" title="复制分支提示词" data-copy-id="${item.id}" aria-label="复制${escapeHTML(item.variant)}分支提示词">${ICON_COPY}</button></article>`;
  };

  compactOneClickCard = function compactOneClickCardWhite(item) {
    return `<article class="prompt-card one-click-card" data-card-id="${item.id}" data-open-id="${item.id}" role="button" tabindex="0" aria-label="查看${escapeHTML(item.title)}的完整提示词">${vectorBadge(item, "card-vector-compact")}<h3 class="card-title">${escapeHTML(item.title)}</h3><span class="card-open-hint">查看</span><button class="copy-btn" title="复制完整提示词" data-copy-id="${item.id}" aria-label="复制${escapeHTML(item.title)}">${ICON_COPY}</button></article>`;
  };

  const categoryCard = ({ key, index, title, description, count, color }) => `
    <button class="category-card reveal-item" style="--cat:${color};--reveal-delay:${index * 55}ms" data-section-jump="${key}" aria-label="打开${escapeHTML(title)}">
      <span class="category-count">${escapeHTML(String(count))}</span>
      <span class="category-visual">${icon(key)}</span>
      <strong>${escapeHTML(title)}</strong>
      <small>${escapeHTML(description)}</small>
      <span class="category-arrow" aria-hidden="true">›</span>
    </button>`;

  overview = function overviewWhite() {
    const categories = [
      { key: "formula", index: 0, title: "万能提示词公式", description: "四段式骨架，快速搭好完整指令", count: `${DATA.formula.length} 部分`, color: "#0071e3" },
      { key: "oneClick", index: 1, title: "一键精修提示词", description: "清理、发丝、服装、光影与特效", count: `${DATA.oneClick.length} 条`, color: "#7457e8" },
      { key: "half", index: 2, title: "场照半合成流程", description: "保留场馆骨架，逐层丰富场景", count: `${DATA.half.length} 步`, color: "#008f88" },
      { key: "full", index: 3, title: "场照全合成流程", description: "从构思生成，到特效和最终精修", count: `5 阶段`, color: "#d85c31" },
      { key: "examples", index: 4, title: "使用示例图库", description: "样片、完整提示词与二维码案例", count: `${DATA.examples.length} 例`, color: "#c44178" }
    ];
    return `<section class="overview-screen home-overview" aria-label="提示词分类">
      <div class="category-section home-category-section">
        <div class="category-shelf">${categories.map(categoryCard).join("")}</div>
      </div>
    </section>`;
  };

  const itemSearchText = item => {
    const fields = [
      item.title, item.prompt, item.group, item.tool, item.variant, item.kind,
      item.englishTitle, item.subCategory, item.majorCategory, item.actionType,
      item.propType, item.lens, item.lighting, item.shotSize, item.summary,
      ...(item.tags || [])
    ];
    return `${fields.filter(Boolean).join(" ")} ${JSON.stringify(item)}`.toLowerCase();
  };

  searchView = function searchViewWhite(query) {
    const q = query.trim().toLowerCase();
    const results = allItems.filter(item => item.section !== "poses" && itemSearchText(item).includes(q));
    currentSection = "search";
    document.getElementById("crumb").textContent = "搜索结果";
    if (!results.length) {
      return `<section><p class="eyebrow">搜索</p><h2 class="hero-title search-heading">“${escapeHTML(query)}”</h2><div class="empty" style="margin-top:34px"><strong>没有找到匹配内容</strong>换一个任务词试试，例如「头发」「去背景」「4K」或「下雪」。</div></section>`;
    }
    const order = ["formula", "oneClick", "half", "full", "examples"];
    const groups = order.map(section => ({ section, items: results.filter(item => item.section === section) })).filter(group => group.items.length);
    const renderItem = (item, index) => item.section === "oneClick"
      ? compactOneClickCard(item)
      : card(item, { tag: sectionMeta[item.section].name });
    return `<section class="search-page"><p class="eyebrow">搜索</p><h2 class="hero-title search-heading">“${escapeHTML(query)}”</h2><p class="search-summary">找到 ${results.length} 个相关结果，已按分类整理</p><div class="search-groups">${groups.map(group => `<section class="search-group"><div class="search-group-head"><h3>${sectionMeta[group.section].name}</h3><span>${group.items.length}</span></div><div class="search-results">${group.items.map(renderItem).join("")}</div></section>`).join("")}</div></section>`;
  };

  const baseRender = render;
  const visibleSections = new Set(["overview", "formula", "oneClick", "half", "full", "examples", "search"]);
  let lastSection = currentSection === "search" ? "overview" : currentSection;
  const decorateNavigation = () => {
    document.querySelectorAll('[data-section="poses"], [data-section-jump="poses"]').forEach(node => node.remove());
    const brand = document.querySelector(".brand");
    if (brand) {
      brand.dataset.sectionJump = "overview";
      brand.setAttribute("role", "button");
      brand.setAttribute("tabindex", "0");
      brand.setAttribute("aria-label", "返回首页");
      brand.title = "返回首页";
    }
    const home = document.querySelector('.nav-btn[data-section="overview"]');
    if (home) {
      home.innerHTML = `${HOME_ICON}<span class="nav-name">首页</span>`;
      home.setAttribute("aria-label", "返回首页分类总览");
      home.title = "首页";
    }
    const search = document.getElementById("search");
    if (search) {
      search.placeholder = "搜索提示词";
      search.setAttribute("aria-label", "搜索提示词");
    }
    if (currentSection === "overview") document.getElementById("crumb").textContent = "首页";
  };
  const initReveal = () => {
    const nodes = [...document.querySelectorAll(".reveal-item:not(.is-visible)")];
    if (!nodes.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      nodes.forEach(node => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: "0px 0px -4%" });
    nodes.forEach(node => observer.observe(node));
  };

  render = function renderWhite(section = currentSection) {
    section = visibleSections.has(section) ? section : "overview";
    const query = document.getElementById("search").value.trim();
    if (!query && section === "search") section = lastSection || "overview";
    if (!query && section !== "search") lastSection = section;
    baseRender(section);
    decorateNavigation();
    requestAnimationFrame(() => {
      decorateNavigation();
      initReveal();
    });
    window.setTimeout(() => {
      decorateNavigation();
      initReveal();
    }, 90);
  };

  const toast = document.getElementById("toast");
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");

  document.addEventListener("click", event => {
    const focusSearch = event.target.closest("[data-focus-search]");
    if (focusSearch) document.getElementById("search").focus();
    const quick = event.target.closest("[data-quick-search]");
    if (quick) {
      const input = document.getElementById("search");
      input.value = quick.dataset.quickSearch;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.focus();
    }
  });

  document.addEventListener("keydown", event => {
    const brandHome = event.target.closest?.('.brand[data-section-jump="overview"]');
    if (brandHome && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      brandHome.click();
      return;
    }
    const focusSearch = event.target.closest?.("[data-focus-search]");
    if (focusSearch && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      document.getElementById("search").focus();
    }
  });

  decorateNavigation();
  render("overview");
})();
