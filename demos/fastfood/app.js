/* ==========================================================================
   KEBAB KAMAL - APPLICATION LOGIC & MENU ENGINE (DISPLAY ONLY)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. DONNÉES DU RESTAURANT & DU MENU
   -------------------------------------------------------------------------- */
const INFO = {
  name: "Ahmed Burger",
  tagline: "البنة لي كتخليك ترجع",
  desc: "Tacos généreux, chawarma artisanale, burgers gourmets, grillades mixtes et jus pressés à la minute.",
  address: "Rabat",
  phone: "06XX-XXXXXX",
  phoneClean: "06XXXXXXXX",
  whatsapp: "2126XXXXXXXX",
  maps: "",
};

const GROUPS = [
  { id: "all", t: "⭐ Tout le menu" },
  { id: "repas", t: "🍽️ Repas & Grillades" },
  { id: "boissons", t: "🥤 Boissons & Jus" },
];

const MENU = [
  {
    id: "tacos",
    g: "repas",
    t: "Tacos",
    icon: "🌯",
    img: "img/tacos.webp",
    badge: "Sauce Fromagère Maison",
    cols: ["Normal", "XL"],
    i: [
      { n: "Poulet", p: 39, x: 70, d: "", img: "img/tacos/poulet.webp" },
      { n: "Dinde", p: 39, x: 70, d: "", img: "img/tacos/dinde.webp" },
      { n: "Nuggets", p: 40, x: 75, d: "", img: "img/tacos/nuggets.webp" },
      { n: "Merguez", p: 43, x: 75, d: "", img: "img/tacos/merguez.webp" },
      {
        n: "Viande hachée",
        p: 43,
        x: 75,
        d: "",
        img: "img/tacos/viandeHachee.webp",
      },
      {
        n: "Cordon bleu",
        p: 42,
        x: 75,
        d: "",
        img: "img/tacos/cordonBleu.webp",
      },
      {
        n: "Crispy Chicken",
        p: 45,
        x: 80,
        d: "",
        img: "img/tacos/crispyChicken.webp",
      },
      { n: "Chawarma", p: 43, x: 75, d: "", img: "img/tacos/chawarma.webp" },
      { n: "Mixte", p: 45, x: 75, d: "", img: "img/tacos/mixte.webp" },
      {
        n: "Royale mixte",
        p: 50,
        x: 90,
        d: "",
        img: "img/tacos/royaleMixte.webp",
      },
      {
        n: "Charcuterie + viande hachée",
        p: 45,
        x: "-",
        d: "",
        img: "img/tacos/charcuterieViandeHachee.webp",
      },
    ],
  },
  {
    id: "salades",
    g: "repas",
    t: "Salades",
    icon: "🥗",
    img: "img/salades.webp",
    badge: "Frais & Équilibré",
    i: [
      { n: "Salade variée", p: 25, d: "", img: "img/salades/variee.webp" },
      {
        n: "Salade mexicaine",
        p: 30,
        d: "",
        img: "img/salades/mexicaine.webp",
      },
      { n: "Salade niçoise", p: 32, d: "", img: "img/salades/mexicaine.webp" },
      { n: "Salade de dinde", p: 38, d: "", img: "img/salades/dinde.webp" },
      { n: "Salade maison", p: 42, d: "", img: "img/salades/maison.webp" },
      { n: "Salade du chef", p: 50, d: "", img: "img/salades/chef.webp" },
    ],
  },
  {
    id: "plats",
    g: "repas",
    t: "Plats Grillés",
    icon: "🥩",
    img: "img/plats.webp",
    badge: "Boucherie & Braise",
    i: [
      { n: "Viande hachée", p: 49, d: "", img: "img/plats/viandeHachee.webp" },
      { n: "Saucisses", p: 49, d: "", img: "img/plats/saucisses.webp" },
      { n: "Poulet", p: 47, d: "", img: "img/plats/poulet.webp" },
      { n: "Dinde", p: 47, d: "", img: "img/plats/dinde.webp" },
      { n: "Mixte", p: 53, d: "", img: "img/plats/mixte.webp" },
      { n: "Cordon bleu", p: 47, d: "", img: "img/plats/cordonBleu.webp" },
      { n: "Royale mixte", p: 60, d: "", img: "img/plats/royaleMixte.webp" },
      { n: "Crispy", p: 50, d: "", img: "img/plats/crispy.webp" },
      { n: "Nuggets", p: 45, d: "", img: "img/plats/nuggets.webp" },
    ],
  },
  {
    id: "burgers",
    g: "repas",
    t: "Burgers Gourmets",
    icon: "🍔",
    img: "img/burgers.webp",
    badge: "100% Bœuf Frais",
    i: [
      { n: "Cheese Burger", p: 32, d: "" },
      { n: "Egg Burger", p: 32, d: "" },
      { n: "Egg Cheese Burger", p: 34, d: "" },
      { n: "Double Hamburger", p: 47, d: "" },
      { n: "Chicken Cheese", p: 32, d: "" },
      { n: "Royale Chicken Cheese", p: 45, d: "" },
    ],
  },
  {
    id: "chawarma",
    g: "repas",
    t: "Chawarma",
    icon: "🥙",
    img: "img/chawarma.webp",
    badge: "Broche Rôtie Minute",
    i: [
      { n: "Simple (Rghif)", p: 30, d: "" },
      { n: "Simple + fromage", p: 32, d: "" },
      { n: "Mixte", p: 35, d: "" },
      { n: "Sans garniture", p: 35, d: "" },
      { n: "Chawarma plat", p: 50, d: "" },
      { n: "XL Simple", p: 55, d: "" },
      { n: "XL Sans garniture", p: 65, d: "" },
    ],
  },
  {
    id: "bocadillos",
    g: "repas",
    t: "Bocadillos",
    icon: "🥖",
    img: "img/bocadillos.webp",
    badge: "Recette Nordique",
    i: [
      { n: "Omelette", p: 17, d: "" },
      { n: "Thon", p: 17, d: "" },
      { n: "Œufs durs (bid mslouk)", p: 15, d: "" },
      { n: "Tortilla", p: 17, d: "" },
      { n: "Thon + omelette", p: 20, d: "" },
      { n: "Tortilla plat", p: 30, d: "" },
    ],
  },
  {
    id: "paninis",
    g: "repas",
    t: "Paninis Chauds",
    icon: "🥪",
    img: "img/paninis.webp",
    badge: "Pressé & Grillé",
    i: [
      { n: "Thon", p: 25, d: "" },
      { n: "Saucisses", p: 30, d: "" },
      { n: "Dinde", p: 28, d: "" },
      { n: "Jumbo de dinde", p: 27, d: "" },
      { n: "Viande hachée", p: 30, d: "" },
      { n: "Poulet", p: 28, d: "" },
      { n: "Mixte", p: 33, d: "" },
      { n: "Chawarma", p: 28, d: "" },
      { n: "Nuggets", p: 28, d: "" },
      { n: "Cordon bleu", p: 29, d: "" },
      { n: "Crispy", p: 33, d: "" },
    ],
  },
  {
    id: "sandwichs",
    g: "repas",
    t: "Sandwichs Baguette",
    icon: "🌭",
    img: "img/sandwichs/mixteRoyal.webp",
    badge: "Frites & Sauces",
    i: [
      {
        n: "Viande hachée",
        p: 28,
        d: "",
        img: "img/sandwichs/viandeHachee.webp",
      },
      { n: "Poulet", p: 25, d: "", img: "img/sandwichs/poulet.webp" },
      { n: "Saucisses", p: 28, d: "", img: "img/sandwichs/saucisses.webp" },
      { n: "Dinde", p: 25, d: "", img: "img/sandwichs/dinde.webp" },
      { n: "Mixte", p: 30, d: "", img: "img/sandwichs/mixte.webp" },
      { n: "Mixte royal", p: 38, d: "", img: "img/sandwichs/mixteRoyal.webp" },
      { n: "Nuggets", p: 30, d: "", img: "img/sandwichs/nuggets.webp" },
      { n: "Crispy", p: 32, d: "", img: "img/sandwichs/crispy.webp" },
      { n: "Cordon bleu", p: 32, d: "", img: "img/sandwichs/cordonBleu.webp" },
    ],
  },
  {
    id: "poutchi",
    g: "repas",
    t: "Poutchi (Batbout)",
    icon: "🫓",
    img: "img/poutchi.webp",
    badge: "Pain Toasté Maison",
    i: [
      { n: "Thon", p: 18, d: "" },
      { n: "Omelette", p: 18, d: "" },
      { n: "Poulet", p: 25, d: "" },
      { n: "Dinde", p: 25, d: "" },
      { n: "Viande hachée", p: 27, d: "" },
      { n: "Spécial", p: 30, d: "" },
      { n: "Mixte", p: 30, d: "" },
      { n: "Chawarma", p: 30, d: "" },
    ],
  },
  {
    id: "enfant",
    g: "repas",
    t: "Menu Enfant",
    icon: "👶",
    img: "img/enfant.webp",
    badge: "Surprise Incluse 🎁",
    i: [
      {
        n: "Menu enfant complet",
        p: 35,
        d: "Au choix : Cheese Burger, Nuggets ou Mini Tacos. Accompagné de frites croustillantes, jus d'orange frais pressé et Egg Surprise offert !",
      },
    ],
  },
  {
    id: "nuggets",
    g: "repas",
    t: "Ration Nuggets",
    icon: "🍗",
    img: "img/nuggets.webp",
    badge: "Croustillant",
    i: [
      {
        n: "Ration Nuggets (6 pièces)",
        p: 20,
        d: "6 délicieuses bouchées de poulet croustillant avec sauce dip au choix.",
      },
    ],
  },
  {
    id: "jus",
    g: "boissons",
    t: "Jus Frais & Smoothies",
    icon: "🍹",
    img: "img/jus.webp",
    badge: "Pressé Minute",
    i: [
      { n: "Jus de citron", p: 13, d: "", img: "img/jus/citron.webp" },
      { n: "Jus d'orange", p: 14, d: "", img: "img/jus/orange.webp" },
      { n: "Jus de pomme", p: 13, d: "", img: "img/jus/pomme.webp" },
      { n: "Jus de banane", p: 13, d: "", img: "img/jus/banane.webp" },
      { n: "Jus d'avocat", p: 20, d: "", img: "img/jus/avocat.webp" },
      { n: "Panaché au lait", p: 17, d: "", img: "img/jus/panacheLait.webp" },
      { n: "Panaché orange", p: 20, d: "", img: "img/jus/panacheOrange.webp" },
      { n: "Avocat fruits secs", p: 25, d: "", img: "img/jus/avocat.webp" },
      { n: "Salade de fruits", p: 15, d: "", img: "img/jus/saladeFruits.webp" },
      { n: "Salade de fruits orange", p: 18, d: "", img: "img/jus/saladeFruitsOrange.webp" },
    ],
  },
  {
    id: "boissons",
    g: "boissons",
    t: "Sodas & Boissons Fraîches",
    icon: "🥤",
    img: "img/boissons.webp",
    badge: "Extra Glacé",
    i: [
      { n: "Soda (canette)", p: 6, d: "", img: "img/boissons/soda.webp" },
      { n: "Soda Maxi", p: 9, d: "", img: "img/boissons/soda1.webp" },
      { n: "Soda 1 L", p: 12, d: "", img: "img/boissons/soda1.webp" },
      { n: "Eau minérale 0,5 L", p: 5, d: "", img: "img/boissons/eau05.webp" },
      { n: "Eau minérale 1,5 L", p: 7, d: "", img: "img/boissons/eau1.webp" },
      { n: "Schweppes Mx", p: 10, d: "", img: "img/boissons/schweppes.webp" },
      { n: "Schweppes 1 L", p: 15, d: "", img: "img/boissons/schweppes1.webp" },
      { n: "Orangina 0,5 L", p: 10, d: "", img: "img/boissons/orangina05.webp" },
      { n: "Orangina 1 L", p: 15, d: "", img: "img/boissons/orangina1.webp" },
    ],
  },
];

/* --------------------------------------------------------------------------
   2. UTILITAIRES
   -------------------------------------------------------------------------- */
const $ = (id) => document.getElementById(id);
const fmt = (v) =>
  typeof v === "number" ? v.toFixed(2).replace(".", ",") + " DH" : v;
const norm = (s) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

/* --------------------------------------------------------------------------
   3. ÉTAT DE L'APPLICATION
   -------------------------------------------------------------------------- */
let activeGroup = "all";
let currentSearch = "";

/* --------------------------------------------------------------------------
   4. RENDU DE LA VUE 1 : ACCUEIL DES CATÉGORIES
   -------------------------------------------------------------------------- */

// Rendu des filtres de groupes (Tout / Repas / Boissons)
function renderGroupChips() {
  const container = $("groupChips");
  container.innerHTML = GROUPS.map(
    (g) => `
    <button class="group-pill ${g.id === activeGroup ? "active" : ""}" data-group="${g.id}">
      ${g.t}
    </button>
  `,
  ).join("");
}

// Rendu des cartes de catégories sur l'accueil
function renderCategoriesGrid() {
  const container = $("categoriesGrid");
  const filteredCats = MENU.filter(
    (c) => activeGroup === "all" || c.g === activeGroup,
  );

  $("categoriesCount").textContent = `${filteredCats.length} catégories`;

  container.innerHTML = filteredCats
    .map(
      (cat) => `
    <a href="#${cat.id}" class="cat-big-card" style="background-image:url(${cat.img})" data-cat="${cat.id}">
      <div class="cat-big-card-content">
        <div class="cat-big-card-info">
          <h3 class="cat-big-title">${cat.icon} ${cat.t}</h3>
          <span class="cat-big-count">${cat.i.length} plats au choix</span>
        </div>
        <div class="cat-big-action" aria-label="Voir les plats">
          <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      </div>
    </a>
  `,
    )
    .join("");
}

// Rendu d'une carte de plat (Affichage uniquement : Photo, Titre, Description, Prix)
function renderDishCard(it, cat) {
  const isDual = it.x !== undefined;
  const itemImg = it.img || cat.img;

  let priceHtml = "";
  if (isDual) {
    const hasXL = typeof it.x === "number";
    priceHtml = `
      <div class="dish-dual-prices">
        <span class="size-badge">
          <span class="size-name">Normal</span>
          <span class="size-val">${fmt(it.p)}</span>
        </span>
        ${
          hasXL
            ? `
        <span class="size-badge">
          <span class="size-name">XL</span>
          <span class="size-val">${fmt(it.x)}</span>
        </span>`
            : ""
        }
      </div>
    `;
  } else {
    priceHtml = `
      <div class="dish-single-price">
        <span class="price-number">${fmt(it.p)}</span>
      </div>
    `;
  }

  return `
    <div class="dish-card" data-cat="${cat.id}" data-name="${it.n}">
      <div class="dish-img-wrap" data-action="lightbox" data-img="${itemImg}" data-title="${it.n}" data-desc="${it.d || cat.t}" data-price="${isDual ? "Normal: " + fmt(it.p) + " · XL: " + fmt(it.x) : fmt(it.p)}">
        <img class="dish-img" src="${itemImg}" alt="${it.n}" loading="lazy" onerror="this.src='${cat.img}'">
        <div class="dish-zoom-icon" title="Agrandir la photo">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
        </div>
      </div>
      <div class="dish-info">
        <div class="dish-header">
          <h4 class="dish-name">${it.n}</h4>
          ${it.d ? `<p class="dish-desc">${it.d}</p>` : ""}
        </div>
        <div class="dish-pricing-row">
          ${priceHtml}
        </div>
      </div>
    </div>
  `;
}

// Rendu de la recherche en temps réel (sur la vue d'accueil)
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
  MENU.forEach((cat) => {
    cat.i.forEach((it) => {
      const matchText = norm(it.n + " " + (it.d || "") + " " + cat.t);
      if (matchText.includes(q)) {
        hits.push({ item: it, cat: cat });
      }
    });
  });

  if (hits.length === 0) {
    searchSec.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">Aucun plat trouvé</h3>
        <p>Essayez avec un autre mot comme "tacos", "burger", "kefta", "panini" ou "jus".</p>
        <button class="btn-reset-search" id="resetSearchBtn">Effacer la recherche</button>
      </div>
    `;
    $("resetSearchBtn")?.addEventListener("click", () => {
      $("searchInput").value = "";
      currentSearch = "";
      renderSearchResults();
    });
    return;
  }

  searchSec.innerHTML = `
    <div class="search-results-header">
      Résultats pour "<strong>${currentSearch}</strong>" (${hits.length} plats trouvés) :
    </div>
    <div class="items-list">
      ${hits.map(({ item, cat }) => renderDishCard(item, cat)).join("")}
    </div>
  `;
}

/* --------------------------------------------------------------------------
   5. RENDU DE LA VUE 2 : DÉTAIL D'UNE CATÉGORIE
   -------------------------------------------------------------------------- */
function renderCategoryDetail(catId) {
  const cat = MENU.find((m) => m.id === catId);
  if (!cat) {
    // Si la catégorie n'existe pas, retour à l'accueil
    location.hash = "#home";
    return;
  }

  // Barre supérieure
  $("detailBarTitle").textContent = `${cat.icon} ${cat.t}`;

  // Sous-barre horizontale des catégories
  const subBar = $("subCategoryTabs");
  subBar.innerHTML = MENU.map(
    (c) => `
    <a href="#${c.id}" class="sub-cat-pill ${c.id === cat.id ? "active" : ""}">
      <span>${c.icon}</span>
      <span>${c.t}</span>
    </a>
  `,
  ).join("");

  // Bannière Hero
  const banner = $("detailHeroBanner");
  banner.style.backgroundImage = `url(${cat.img})`;
  // $("detailHeroBadge").textContent = cat.badge || "Spécialité";
  $("detailHeroTitle").textContent = `${cat.icon} ${cat.t}`;
  $("detailHeroCount").textContent =
    `${cat.i.length} plats au choix préparés à la commande`;

  // Liste des plats
  const itemsContainer = $("detailItemsList");
  itemsContainer.innerHTML = cat.i
    .map((dish) => renderDishCard(dish, cat))
    .join("");

  // Scroll en haut
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* --------------------------------------------------------------------------
   6. ROUTEUR SIMPLE PAR HASH (#home vs #tacos, #burgers, etc.)
   -------------------------------------------------------------------------- */
function route() {
  const rawHash = (location.hash || "").replace("#", "").trim();
  const isHome = !rawHash || rawHash === "home";

  const homeView = $("homeView");
  const detailView = $("detailView");

  if (isHome) {
    homeView.hidden = false;
    detailView.hidden = true;
    $("searchInput").value = "";
    currentSearch = "";
    renderSearchResults();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    homeView.hidden = true;
    detailView.hidden = false;
    renderCategoryDetail(rawHash);
  }
}

/* --------------------------------------------------------------------------
   7. MODAL LIGHTBOX & INFOS
   -------------------------------------------------------------------------- */
function openLightbox(imgUrl, title, desc, price) {
  $("lightboxImg").src = imgUrl;
  $("lightboxTitle").textContent = title;
  $("lightboxDesc").textContent = desc;
  $("lightboxPrice").textContent = price;
  $("lightboxModal").hidden = false;
}

function closeLightbox() {
  $("lightboxModal").hidden = true;
}

/* --------------------------------------------------------------------------
   8. ÉCOUTEURS D'ÉVÉNEMENTS
   -------------------------------------------------------------------------- */
function initEventListeners() {
  // Navigation hash (changement d'écran au clic sur une catégorie ou retour)
  window.addEventListener("hashchange", route);

  // Bouton retour
  $("backToHomeBtn").addEventListener("click", (e) => {
    e.preventDefault();
    location.hash = "#home";
  });

  // Sélecteur de groupes (Repas / Boissons / Tout)
  $("groupChips").addEventListener("click", (e) => {
    const pill = e.target.closest("[data-group]");
    if (!pill) return;
    activeGroup = pill.dataset.group;
    renderGroupChips();
    renderCategoriesGrid();
  });

  // Recherche en direct
  $("searchInput").addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderSearchResults();
  });

  $("clearSearchBtn").addEventListener("click", () => {
    $("searchInput").value = "";
    currentSearch = "";
    renderSearchResults();
  });

  // Thème Sombre / Clair

  $("themeToggle").addEventListener("click", () => {
    const curr = document.documentElement.getAttribute("data-theme");
    const next = curr === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("menu-theme", next);
  });

  // Modal Infos & Horaires
  const openInfo = () => ($("infoModal").hidden = false);
  const closeInfo = () => ($("infoModal").hidden = true);

  $("infoBtn").addEventListener("click", openInfo);
  $("detailInfoBtn").addEventListener("click", openInfo);
  $("closeInfoBtn").addEventListener("click", closeInfo);
  $("infoModal").addEventListener("click", (e) => {
    if (e.target === $("infoModal")) closeInfo();
  });

  // Modal Lightbox
  $("closeLightboxBtn").addEventListener("click", closeLightbox);
  $("lightboxModal").addEventListener("click", (e) => {
    if (e.target === $("lightboxModal")) closeLightbox();
  });

  // Clic sur l'image d'un plat pour zoomer
  document.addEventListener("click", (e) => {
    const lightboxTrigger = e.target.closest('[data-action="lightbox"]');
    if (lightboxTrigger) {
      const { img, title, desc, price } = lightboxTrigger.dataset;
      openLightbox(img, title, desc, price);
    }
  });
}

/* --------------------------------------------------------------------------
   9. INITIALISATION
   -------------------------------------------------------------------------- */
function init() {
  $("currentYear").textContent = new Date().getFullYear();

  renderGroupChips();
  renderCategoriesGrid();
  initEventListeners();
  route();
}

document.addEventListener("DOMContentLoaded", init);
