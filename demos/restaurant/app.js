/* ==========================================================================
   L'ÉTOILE - BISTRONOMIE & GRILL - MENU LOGIC (DISPLAY ONLY)
   ========================================================================== */

const GROUPS = [
  { id: "all", t: "⭐ La Carte Complète" },
  { id: "plats", t: "🥩 Viandes & Poissons" },
  { id: "entrees", t: "🥗 Entrées & Pâtes" },
  { id: "douceurs", t: "🍮 Desserts & Boissons" }
];

const MENU = [
  {
    id: "entrees",
    g: "entrees",
    t: "Entrées & Salades Raffinées",
    icon: "🥗",
    img: "img/entrees.webp",
    badge: "Fraîcheur & Finesse",
    i: [
      { n: "Burrata di Bufala & Truffe d'Été", p: 75, d: "Burrata crémeuse des Pouilles, mesclun bio, tomates d'antan rôties et huile infusée à la truffe." },
      { n: "Carpaccio de Bœuf Angus Mariné", p: 68, d: "Fines tranches de filet Angus, copeaux de parmesan 24 mois, câpres frites et roquette." },
      { n: "Salade de Poulpe Tiède à la Chermoula", p: 72, d: "Poulpe braisé fondant, pommes de terre grenailles, agrumes et émulsion coriandre-citron." },
      { n: "Velouté Onctueux de Homard", p: 65, d: "Bisque raffinée de crustacés, crème double fouettée et croûtons dorés à l'ail doux." }
    ]
  },
  {
    id: "viandes",
    g: "plats",
    t: "Viandes d'Exception & Grillades",
    icon: "🥩",
    img: "img/viandes.webp",
    badge: "Cuisson à la Flamme",
    i: [
      { n: "Filet de Bœuf Façon Rossini", p: 160, d: "Cœur de filet tendre, escalope de foie gras poêlée, jus corsé au porto et purée truffée." },
      { n: "Entrecôte Maturée 30 Jours au Feu de Bois", p: 175, d: "Pièce noble de 350g grillée sur braises de chêne, beurre maître d'hôtel et frites maison." },
      { n: "Carré d'Agneau Rôti au Romarin", p: 145, d: "Côtes d'agneau laquées au miel de thym, légumes racines glacés et jus réduit d'agneau." },
      { n: "Magret de Canard Glacé aux Épices", p: 135, d: "Magret rôti rosé, réduction de jus de grenade et mousseline de patates douces." }
    ]
  },
  {
    id: "poissons",
    g: "plats",
    t: "Poissons & Trésors Marins",
    icon: "🐟",
    img: "img/poissons.webp",
    badge: "Pêche du Jour",
    i: [
      { n: "Pavé de Saumon d'Écosse Rôti aux Asperges", p: 130, d: "Saumon mi-cuit peau croustillante, pointes d'asperges vertes et émulsion hollandaise au yuzu." },
      { n: "Filet de Loup de Mer Émulsion Beurre Blanc", p: 140, d: "Loup sauvage poêlé, tombée d'épinards frais au beurre noisette et risotto safrané." },
      { n: "Gambas Royales Sautées Flambées", p: 155, d: "Gambas géantes snackées à la plancha, ail doux, persil plat et bisque légère parfumée." }
    ]
  },
  {
    id: "pates",
    g: "entrees",
    t: "Pâtes Fraîches & Risottos",
    icon: "🍝",
    img: "img/pates.webp",
    badge: "Fait Maison",
    i: [
      { n: "Tagliolini Fraîches à la Truffe Noire", p: 110, d: "Pâtes fraîches maison au jaune d'œuf, crème de truffe d'Alba et parmesan râpé minute." },
      { n: "Risotto Crémeux aux Cèpes & Morilles", p: 95, d: "Riz Carnaroli lié au parmesan Reggiano, champignons sauvages sautés et filet d'huile blanche." },
      { n: "Ravioles de Homard Sauce Bisque", p: 125, d: "Pâtes farcies à la chair de homard noble, bisque crémeuse et herbes fraîches." }
    ]
  },
  {
    id: "desserts",
    g: "douceurs",
    t: "Desserts Signatures du Chef",
    icon: "🍮",
    img: "img/desserts.webp",
    badge: "Haute Pâtisserie",
    i: [
      { n: "Dôme Chocolat Grand Cru Valrhona", p: 55, d: "Coque chocolat noir 70%, mousse onctueuse pralinée et coulis chaud versé minute." },
      { n: "Millefeuille Croustillant Vanille Bourbon", p: 48, d: "Feuilletage caramélisé inversé, crème diplomate à la vanille de Madagascar." },
      { n: "Tartelette Citron Meringuée Revisitée", p: 45, d: "Pâte sablée noisette, crème citron de Menton acidulée et meringue italienne dorée." },
      { n: "Pavlova Légère aux Fruits Rouges", p: 50, d: "Meringue craquante, chantilly mascarpone vanillée et sélection de baies sauvages fraîches." }
    ]
  },
  {
    id: "cocktails",
    g: "douceurs",
    t: "Cocktails Signatures & Vins Sans Alcool",
    icon: "🥂",
    img: "img/cocktails.webp",
    badge: "Mixologie",
    i: [
      { n: "Mocktail Signature Étoile d'Or", p: 42, d: "Nectar de pêche blanche, jus de canneberge, sirop de rose et paillettes d'or comestibles." },
      { n: "Virgin Mojito Fruit de la Passion", p: 38, d: "Menthe pilée, purée de passion fraîche, citron vert et eau pétillante fraîche." },
      { n: "Eau Minérale Oulmès Bouteille Prestige 75cl", p: 22, d: "L'eau minérale gazeuse naturelle emblématique servie glacée." },
      { n: "Sélection de Thés Précieux du Palais", p: 28, d: "Thés d'origine servis au samovar d'argent avec mignardises du chef." }
    ]
  }
];

const $ = id => document.getElementById(id);
const fmt = v => typeof v === "number" ? v.toFixed(2).replace(".", ",") + " DH" : v;
const norm = s => (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

let activeGroup = "all";
let currentSearch = "";

function renderGroupChips() {
  const container = $("groupChips");
  container.innerHTML = GROUPS.map(g => `
    <button class="group-pill ${g.id === activeGroup ? "active" : ""}" data-group="${g.id}">
      ${g.t}
    </button>
  `).join("");
}

function renderCategoriesGrid() {
  const container = $("categoriesGrid");
  const filteredCats = MENU.filter(c => activeGroup === "all" || c.g === activeGroup);

  $("categoriesCount").textContent = `${filteredCats.length} catégories`;

  container.innerHTML = filteredCats.map(cat => `
    <a href="#${cat.id}" class="cat-big-card" style="background-image:url(${cat.img})">
      <div class="cat-big-card-content">
        <div>
          <span class="cat-badge-pill">${cat.badge || cat.t}</span>
          <h3 class="cat-big-title">${cat.icon} ${cat.t}</h3>
          <span class="cat-big-count">${cat.i.length} choix</span>
        </div>
        <div class="cat-big-action">
          <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      </div>
    </a>
  `).join("");
}

function renderDishCard(it, cat) {
  const itemImg = it.img || cat.img;
  return `
    <div class="dish-card">
      <div class="dish-img-wrap" data-action="lightbox" data-img="${itemImg}" data-title="${it.n}" data-desc="${it.d || cat.t}" data-price="${fmt(it.p)}">
        <img class="dish-img" src="${itemImg}" alt="${it.n}" loading="lazy">
        <div class="dish-zoom-icon">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
        </div>
      </div>
      <div class="dish-info">
        <div>
          <h4 class="dish-name">${it.n}</h4>
          ${it.d ? `<p class="dish-desc">${it.d}</p>` : ""}
        </div>
        <div class="dish-pricing-row">
          <span class="dish-single-price">${fmt(it.p)}</span>
        </div>
      </div>
    </div>
  `;
}

function renderSearchResults() {
  const q = norm(currentSearch);
  const searchSec = $("searchResultsSection");
  const catsGrid = $("categoriesGrid");
  const metaHeader = $("homeSectionHeader");

  if (!q) {
    searchSec.hidden = true;
    catsGrid.hidden = false;
    metaHeader.hidden = false;
    $("clearSearchBtn").hidden = true;
    return;
  }

  $("clearSearchBtn").hidden = false;
  searchSec.hidden = false;
  catsGrid.hidden = true;
  metaHeader.hidden = true;

  const hits = [];
  MENU.forEach(cat => {
    cat.i.forEach(it => {
      const matchText = norm(it.n + " " + (it.d || "") + " " + cat.t);
      if (matchText.includes(q)) hits.push({ item: it, cat: cat });
    });
  });

  if (hits.length === 0) {
    searchSec.innerHTML = `
      <div class="empty-state">
        <p>Aucun plat trouvé pour "<strong>${currentSearch}</strong>".</p>
      </div>
    `;
    return;
  }

  searchSec.innerHTML = `
    <div class="search-results-header">Résultats pour "<strong>${currentSearch}</strong>" (${hits.length}) :</div>
    <div class="items-list">
      ${hits.map(({ item, cat }) => renderDishCard(item, cat)).join("")}
    </div>
  `;
}

function renderCategoryDetail(catId) {
  const cat = MENU.find(m => m.id === catId);
  if (!cat) { location.hash = "#home"; return; }

  $("detailBarTitle").textContent = `${cat.icon} ${cat.t}`;
  $("subCategoryTabs").innerHTML = MENU.map(c => `
    <a href="#${c.id}" class="sub-cat-pill ${c.id === cat.id ? "active" : ""}">
      <span>${c.icon}</span>
      <span>${c.t}</span>
    </a>
  `).join("");

  $("detailHeroBanner").style.backgroundImage = `url(${cat.img})`;
  $("detailHeroBadge").textContent = cat.badge || "Gastronomie";
  $("detailHeroTitle").textContent = `${cat.icon} ${cat.t}`;
  $("detailHeroCount").textContent = `${cat.i.length} créations d'exception`;

  $("detailItemsList").innerHTML = cat.i.map(dish => renderDishCard(dish, cat)).join("");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function route() {
  const rawHash = (location.hash || "").replace("#", "").trim();
  const isHome = !rawHash || rawHash === "home";

  if (isHome) {
    $("homeView").hidden = false;
    $("detailView").hidden = true;
    $("searchInput").value = "";
    currentSearch = "";
    renderSearchResults();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    $("homeView").hidden = true;
    $("detailView").hidden = false;
    renderCategoryDetail(rawHash);
  }
}

function openLightbox(imgUrl, title, desc, price) {
  $("lightboxImg").src = imgUrl;
  $("lightboxTitle").textContent = title;
  $("lightboxDesc").textContent = desc;
  $("lightboxPrice").textContent = price;
  $("lightboxModal").hidden = false;
}

function initEventListeners() {
  window.addEventListener("hashchange", route);
  $("backToHomeBtn").addEventListener("click", e => {
    e.preventDefault();
    location.hash = "#home";
  });

  $("groupChips").addEventListener("click", e => {
    const pill = e.target.closest("[data-group]");
    if (!pill) return;
    activeGroup = pill.dataset.group;
    renderGroupChips();
    renderCategoriesGrid();
  });

  $("searchInput").addEventListener("input", e => {
    currentSearch = e.target.value;
    renderSearchResults();
  });

  $("clearSearchBtn").addEventListener("click", () => {
    $("searchInput").value = "";
    currentSearch = "";
    renderSearchResults();
  });

  const savedTheme = localStorage.getItem("restaurant-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  $("themeToggle").addEventListener("click", () => {
    const curr = document.documentElement.getAttribute("data-theme");
    const next = curr === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("restaurant-theme", next);
  });

  const openInfo = () => $("infoModal").hidden = false;
  const closeInfo = () => $("infoModal").hidden = true;
  $("infoBtn").addEventListener("click", openInfo);
  $("detailInfoBtn").addEventListener("click", openInfo);
  $("closeInfoBtn").addEventListener("click", closeInfo);
  $("infoModal").addEventListener("click", e => { if (e.target === $("infoModal")) closeInfo(); });

  $("closeLightboxBtn").addEventListener("click", () => $("lightboxModal").hidden = true);
  $("lightboxModal").addEventListener("click", e => { if (e.target === $("lightboxModal")) $("lightboxModal").hidden = true; });

  document.addEventListener("click", e => {
    const lightboxTrigger = e.target.closest('[data-action="lightbox"]');
    if (lightboxTrigger) {
      const { img, title, desc, price } = lightboxTrigger.dataset;
      openLightbox(img, title, desc, price);
    }
  });
}

function init() {
  $("currentYear").textContent = new Date().getFullYear();
  renderGroupChips();
  renderCategoriesGrid();
  initEventListeners();
  route();
}

document.addEventListener("DOMContentLoaded", init);
