/* ==========================================================================
   L'ATELIER CAFÉ & BRUNCH - MENU LOGIC (DISPLAY ONLY)
   ========================================================================== */

const GROUPS = [
  { id: "all", t: "⭐ Tout le menu" },
  { id: "boissons", t: "☕ Cafés & Boissons" },
  { id: "brunch", t: "🥐 Brunch & Douceurs" }
];

const MENU = [
  {
    id: "cafes",
    g: "boissons",
    t: "Cafés de Spécialité",
    icon: "☕",
    img: "img/cafes.webp",
    badge: "100% Arabica",
    i: [
      { n: "Espresso Simple", p: 18, d: "Extraction précise de grains de spécialité sélectionnés, notes chocolatées." },
      { n: "Double Espresso", p: 24, d: "Double dose intense d'espresso riche en crema veloutée." },
      { n: "Americano", p: 22, d: "Double shot d'espresso allongé à l'eau chaude filtrée." },
      { n: "Cortado", p: 25, d: "Espresso serré adouci d'une touche égale de lait chaud soyeux." },
      { n: "Flat White", p: 28, d: "Double ristretto et micro-mousse de lait onctueuse." },
      { n: "Cappuccino Artisanal", p: 28, d: "Espresso corsé, lait chaud et généreux dôme de mousse fine avec cacao." },
      { n: "Café Latte", p: 30, d: "Lait chaud délicatement texturé et shot d'espresso doux." },
      { n: "Caramel Macchiato", p: 34, d: "Sirop de vanille bourbon, lait soyeux, espresso et coulis caramel maison." },
      { n: "Mocha Chocolat Noir", p: 35, d: "Espresso, chocolat noir artisanal fondu et crème fouettée." }
    ]
  },
  {
    id: "iced",
    g: "boissons",
    t: "Boissons Glacées & Iced",
    icon: "🧊",
    img: "img/iced.webp",
    badge: "Fraîcheur Barista",
    i: [
      { n: "Iced Latte", p: 32, d: "Espresso frais servi sur lait froid texturé et glaçons cristallins." },
      { n: "Cold Brew Vanille", p: 34, d: "Café infusé à froid pendant 18 heures, pointe de vanille naturelle." },
      { n: "Iced Matcha Latte", p: 38, d: "Poudre de thé vert matcha premium d'Uji (Japon) et lait frais." },
      { n: "Iced Spanish Latte", p: 36, d: "Espresso, lait condensé doux et lait entier sur lit de glace." },
      { n: "Frappuccino Caramel Beurre Salé", p: 38, d: "Café frappé au blender, caramel fondant, crème chantilly." }
    ]
  },
  {
    id: "thes",
    g: "boissons",
    t: "Thés & Infusions",
    icon: "🍵",
    img: "img/thes.webp",
    badge: "Feuilles Entières",
    i: [
      { n: "Thé Marocain à la Menthe Fraîche", p: 18, d: "Thé vert Gunpowder traditionnel servi avec menthe fraîchement cueillie." },
      { n: "Thé Vert Sencha Bio", p: 22, d: "Thé vert d'origine aux notes herbacées délicates et fraîches." },
      { n: "Earl Grey Impérial", p: 24, d: "Thé noir de Ceylan parfumé à l'huile essentielle de bergamote fine." },
      { n: "Infusion Verveine-Citron", p: 20, d: "Mélange apaisant de verveine odorante et zeste de citron jaune." },
      { n: "Chai Latte Épicé", p: 32, d: "Thé noir infusé aux épices (cannelle, cardamome, gingembre) et lait moussé." }
    ]
  },
  {
    id: "brunch",
    g: "brunch",
    t: "Brunch & Salé",
    icon: "🥑",
    img: "img/brunch.webp",
    badge: "Préparé Minute",
    i: [
      { n: "Avocado Toast Saumon Fumé", p: 55, d: "Pain de campagne toasté, écrasé d'avocat au citron, saumon fumé d'Écosse et graines." },
      { n: "Croissant Œuf Poché & Dinde", p: 42, d: "Croissant pur beurre garni d'œuf poché coulant, dinde fumée et sauce hollandaise." },
      { n: "Club Sandwich Poulet Grillé", p: 48, d: "Triple toast brioché, blanc de poulet mariné, cheddar affiné, tomate et salade." },
      { n: "Pancakes Salés & Œuf Miroir", p: 45, d: "Pancakes moelleux maison, œuf miroir, dinde croustillante et filet de sirop d'érable." },
      { n: "Granola Bowl & Fruits Frais", p: 38, d: "Yaourt grec onctueux, granola bio croustillant aux amandes, baies et miel pur." }
    ]
  },
  {
    id: "patisserie",
    g: "brunch",
    t: "Pâtisseries & Douceurs",
    icon: "🍰",
    img: "img/patisserie.webp",
    badge: "Artisanal",
    i: [
      { n: "Croissant Pur Beurre AOP", p: 14, d: "Feuilletage croustillant et fondant au bon beurre AOP de Charentes." },
      { n: "Pain au Chocolat Artisanal", p: 16, d: "Double barre de chocolat noir riche dans un feuilletage doré." },
      { n: "Cheesecake New-Yorkais Fruits Rouges", p: 35, d: "Base biscuit spéculoos, crème onctueuse et coulis de framboises sauvages." },
      { n: "Tiramisu Traditionnel au Café", p: 32, d: "Biscuits cuillère imbibés de notre espresso maison, mascarpone aérien et cacao." },
      { n: "Fondant Cœur Coulant Chocolat Noir", p: 34, d: "Chocolat Valrhona 70%, cœur chaud fondant et noisettes grillées." },
      { n: "Carrot Cake Glacé au Fromage Frais", p: 30, d: "Gâteau épicé aux carottes et noix, nappé d'un glaçage cream cheese velouté." }
    ]
  },
  {
    id: "jus",
    g: "boissons",
    t: "Jus Pressés & Smoothies",
    icon: "🍹",
    img: "img/jus.webp",
    badge: "100% Naturel",
    i: [
      { n: "Jus d'Orange Pressé Minute", p: 22, d: "Pur jus d'oranges marocaines douces, pressé sous vos yeux." },
      { n: "Green Detox Énergie", p: 28, d: "Pomme verte, concombre frais, épinards jeunes, menthe et pointe de gingembre." },
      { n: "Smoothie Berry Boost", p: 30, d: "Mélange fruité de fraises, framboises, myrtilles et banane mixées au lait d'amande." },
      { n: "Cocktail Exotique Passion", p: 32, d: "Mangue mûre, fruit de la passion et jus d'ananas frais." }
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
        <p>Aucun article trouvé pour "<strong>${currentSearch}</strong>".</p>
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
  $("detailHeroBadge").textContent = cat.badge || "Spécialité";
  $("detailHeroTitle").textContent = `${cat.icon} ${cat.t}`;
  $("detailHeroCount").textContent = `${cat.i.length} créations gourmandes`;

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

  const savedTheme = localStorage.getItem("cafe-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  $("themeToggle").addEventListener("click", () => {
    const curr = document.documentElement.getAttribute("data-theme");
    const next = curr === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("cafe-theme", next);
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
