/**
 * ==========================================================================
 * speedPrint Digital - Landing Page Scripts
 * Brand: speedPrint Digital | Témara / Rabat, Maroc
 * Tagline: "Le digital au service de votre restaurant."
 * ==========================================================================
 */

"use strict";

/* --------------------------------------------------------------------------
   1. EDITABLE BUSINESS CONFIGURATION & PLACEHOLDERS
   Replace these placeholders with your actual business contact information.
   -------------------------------------------------------------------------- */
const SPEEDPRINT_CONFIG = {
  // Display placeholders (shown in text)
  phoneDisplay: "+212 645-952586",
  emailDisplay: "contact@digital.speedprintmaroc.com",
  cityDisplay: "Témara / Rabat, Maroc",
  brandName: "speedPrint Digital",

  // Raw values used for links & actions
  // IMPORTANT: For WhatsApp, enter country code + number without '+' or spaces (e.g., '212612345678')
  whatsappRaw: "212645952586",
  emailRaw: "contact@digital.speedprintmaroc.com",

  // Demo Links (relative paths working directly on Cloudflare Pages and Hostinger)
  demoLinks: {
    fastfood: "./demos/fastfood/",
    cafe: "./demos/cafe/",
    restaurant: "./demos/restaurant/",
  },

  // Social media placeholders (replace with your URLs when ready)
  socialLinks: {
    instagram: "https://www.instagram.com/speedprint.digital/",
    facebook: "#",
    linkedin: "#",
  },
};

/* --------------------------------------------------------------------------
   2. DOM READY INITIALIZATION
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileNav();
  initFaqAccordion();
  initModalHandling();
  initSmoothScroll();
  initActiveNavHighlight();
});

/* --------------------------------------------------------------------------
   3. STICKY NAVBAR ELEVATION ON SCROLL
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 25) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------------------------------
   4. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (!toggleBtn || !mobileMenu) return;

  const toggleMenu = (openState) => {
    const shouldOpen =
      openState !== undefined
        ? openState
        : !mobileMenu.classList.contains("open");
    toggleBtn.classList.toggle("open", shouldOpen);
    mobileMenu.classList.toggle("open", shouldOpen);
    toggleBtn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    document.body.style.overflow = shouldOpen ? "hidden" : "";
  };

  toggleBtn.addEventListener("click", () => toggleMenu());

  // Close when clicking any nav link in the mobile drawer
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      toggleMenu(false);
    }
  });
}

/* --------------------------------------------------------------------------
   5. FAQ ACCORDION INTERACTION
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!questionBtn || !answer) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other items for a clean accordion experience
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          const otherAns = otherItem.querySelector(".faq-answer");
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        item.classList.remove("active");
        answer.style.maxHeight = null;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. CONTACT / ORDER MODAL HANDLING & WHATSAPP GENERATOR
   -------------------------------------------------------------------------- */
function initModalHandling() {
  const modal = document.getElementById("contact-modal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".modal-close-btn");
  const dialog = modal.querySelector(".modal-dialog");
  const modelSelect = document.getElementById("modal-model");
  const serviceSelect = document.getElementById("modal-service");
  const nameInput = document.getElementById("modal-name");
  const cityInput = document.getElementById("modal-city");
  const phoneInput = document.getElementById("modal-phone");
  const waSubmitBtn = document.getElementById("modal-submit-wa");
  const emailSubmitBtn = document.getElementById("modal-submit-email");
  const inputs = document.querySelectorAll(".form-input");

  let lastActiveElement = null;

  // Function to open modal
  window.openContactModal = (
    preferredModel = "fastfood",
    preferredService = "pack_complet",
  ) => {
    lastActiveElement = document.activeElement;
    if (modelSelect && preferredModel) {
      modelSelect.value = preferredModel;
    }
    if (serviceSelect && preferredService) {
      serviceSelect.value = preferredService;
    }
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Focus first input
    setTimeout(() => {
      if (nameInput) nameInput.focus();
    }, 150);
  };

  // Function to close modal
  window.closeContactModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus();
    }
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", window.closeContactModal);
  }

  // Close when clicking outside dialog
  modal.addEventListener("click", (e) => {
    if (!dialog.contains(e.target)) {
      window.closeContactModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      window.closeContactModal();
    }
  });

  // Attach triggers with data attributes: [data-open-modal] and [data-model]
  document.querySelectorAll("[data-open-modal]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const model = btn.getAttribute("data-model") || "fastfood";
      const service = btn.getAttribute("data-service") || "pack_complet";
      window.openContactModal(model, service);
    });
  });

  // Helper to build friendly model label
  const getModelLabel = (val) => {
    switch (val) {
      case "fastfood":
        return "Modèle Fast-Food & Snack";
      case "cafe":
        return "Modèle Café & Brunch";
      case "restaurant":
        return "Modèle Restaurant & Lounge";
      default:
        return "Modèle sur mesure";
    }
  };

  const getServiceLabel = (val) => {
    switch (val) {
      case "pack_complet":
        return "Pack Complet (Menu Digital + Chevalets Plexiglas + Carte NFC)";
      case "menu_seul":
        return "Menu Digital QR Seul";
      case "menu_plexi":
        return "Menu Digital + Chevalets Plexiglas";
      case "nfc_avis":
        return "Cartes NFC Avis Google";
      default:
        return "Demande personnalisée";
    }
  };

  // 2. Fonction de vérification
  function checkInputs() {
    // Array.from(inputs).every(...) vérifie si TOUS les champs remplissent la condition
    const allFilled = Array.from(inputs).every(
      (input) => input.value.trim() !== "",
    );

    // Si allFilled est vrai, disabled devient false (bouton activé)
    waSubmitBtn.disabled = !allFilled;
  }

  // 3. Ajouter l'écouteur d'événement sur chaque input
  inputs.forEach((input) => {
    input.addEventListener("input", checkInputs);
  });

  // WhatsApp Submission Builder
  if (waSubmitBtn) {
    waSubmitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const name = nameInput ? nameInput.value.trim() : "";
      const city = cityInput ? cityInput.value.trim() : "";
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const model = modelSelect ? getModelLabel(modelSelect.value) : "";
      const service = serviceSelect ? getServiceLabel(serviceSelect.value) : "";

      const lines = [
        `Bonjour speedPrint Digital,`,
        `Je souhaite commander une solution pour mon établissement :`,
        `• Établissement : ${name || "[Non précisé]"}`,
        `• Ville : ${city || "Témara / Rabat"}`,
        `• Téléphone / Contact : ${phone || "[Non précisé]"}`,
        `• Modèle retenu : ${model}`,
        `• Formule souhaitée : ${service}`,
        `Merci de me recontacter pour finaliser la démo ou la commande.`,
      ];

      const fullMessage = encodeURIComponent(lines.join("\n"));
      const whatsappUrl = `https://wa.me/${SPEEDPRINT_CONFIG.whatsappRaw}?text=${fullMessage}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  // Email Submission Builder
  if (emailSubmitBtn) {
    emailSubmitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const name = nameInput ? nameInput.value.trim() : "Restaurant";
      const city = cityInput ? cityInput.value.trim() : "Témara / Rabat";
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const model = modelSelect ? getModelLabel(modelSelect.value) : "";
      const service = serviceSelect ? getServiceLabel(serviceSelect.value) : "";

      const subject = encodeURIComponent(
        `Demande de menu digital - ${name} (${city})`,
      );
      const body = encodeURIComponent(
        `Bonjour speedPrint Digital,\n\n` +
          `Je souhaite obtenir des informations / commander un menu digital :\n\n` +
          `- Établissement : ${name}\n` +
          `- Ville : ${city}\n` +
          `- Téléphone : ${phone}\n` +
          `- Modèle souhaité : ${model}\n` +
          `- Service : ${service}\n\n` +
          `Dans l'attente de votre retour,\nCordialement.`,
      );

      window.location.href = `mailto:${SPEEDPRINT_CONFIG.emailRaw}?subject=${subject}&body=${body}`;
    });
  }
}

/* --------------------------------------------------------------------------
   7. SMOOTH SCROLL WITH HEADER OFFSET
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "") return;

      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerOffset = 80;
        const elemPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elemPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. ACTIVE NAV LINK HIGHLIGHT ON SCROLL
   -------------------------------------------------------------------------- */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    },
    {
      rootMargin: "-30% 0px -60% 0px",
    },
  );

  sections.forEach((sec) => observer.observe(sec));
}
