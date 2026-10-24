(() => {
  "use strict";

  const imageUrls = [
    "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=900&q=85"
  ];

  const products = [
    { name: "Studio Glass 60", category: "Aquarium Tanks", price: 8990, image: 1, rating: "4.9", reviews: 32, description: "A beautifully proportioned, low-iron glass aquarium designed to make your aquascape the centre of attention.", specifications: ["60 cm rimless low-iron glass", "Approx. 60 litre capacity", "Precision-finished clear silicone"], features: ["Ultra-clear viewing", "Minimal, seamless profile", "Ideal for a planted community tank"] },
    { name: "The Nano Cube", category: "Aquarium Tanks", price: 4290, image: 0, rating: "4.8", reviews: 24, description: "A considered little canvas for a desk, shelf or first planted aquarium.", specifications: ["30 cm compact format", "Approx. 27 litre capacity", "Polished edge glass"], features: ["Space-conscious footprint", "A lovely first aquascape", "Easy to style and maintain"] },
    { name: "Horizon 90", category: "Aquarium Tanks", price: 14990, image: 4, rating: "4.9", reviews: 18, description: "A generous, clear stage for a richly layered nature aquarium.", specifications: ["90 cm rimless aquarium", "Approx. 120 litre capacity", "Low-iron front viewing panel"], features: ["Room for a layered layout", "Clean contemporary lines", "Suitable for planted setups"] },
    { name: "Living Green Starter Set", category: "Aquatic Plants", price: 1499, image: 6, rating: "4.9", reviews: 48, description: "A welcoming collection of hardy aquatic plants chosen to give your first aquascape a head start.", specifications: ["Assorted beginner-friendly species", "Fresh, nursery-grown bunches", "Selection varies with availability"], features: ["Easy-care plant varieties", "Adds natural cover and texture", "A gentle introduction to planted tanks"] },
    { name: "Carpet & Canopy Bundle", category: "Aquatic Plants", price: 2190, image: 3, rating: "4.8", reviews: 21, description: "A balanced mix of foreground and midground plants for a naturally layered underwater garden.", specifications: ["Curated foreground and midground plants", "Fresh nursery-grown selection", "Plant varieties confirmed at purchase"], features: ["Creates depth and visual layers", "Suitable for established aquariums", "Thoughtfully paired growth habits"] },
    { name: "Anubias on Wood", category: "Aquatic Plants", price: 890, image: 0, rating: "4.9", reviews: 16, description: "A graceful, easygoing Anubias attached to natural wood, ready to bring a little character to your hardscape.", specifications: ["Healthy Anubias rhizome", "Natural wood attachment", "Hand-selected piece"], features: ["No substrate planting needed", "Slow-growing, resilient foliage", "Each wood shape is unique"] },
    { name: "Canopy LED 45", category: "Aquarium Lighting", price: 4850, image: 5, rating: "4.8", reviews: 29, description: "A refined planted-tank light with a balanced spectrum for vivid greens and comfortable viewing.", specifications: ["For aquariums up to 45 cm", "Daylight plant-friendly spectrum", "Adjustable mounting brackets"], features: ["Even, natural-looking illumination", "Slim, low-profile design", "Simple on/off operation"] },
    { name: "Canopy LED 60", category: "Aquarium Lighting", price: 6290, image: 1, rating: "4.9", reviews: 14, description: "Brighter, balanced illumination for a flourishing medium-sized planted aquarium.", specifications: ["For aquariums up to 60 cm", "Full-spectrum LED array", "Adjustable mounting brackets"], features: ["Promotes healthy plant growth", "Natural colour rendition", "Efficient LED design"] },
    { name: "Moonlight Nano", category: "Aquarium Lighting", price: 2490, image: 4, rating: "4.7", reviews: 19, description: "A compact light with a gentle, clean look for smaller freshwater aquariums.", specifications: ["Compact nano-tank fit", "Freshwater daylight spectrum", "Low-profile housing"], features: ["Simple setup", "Bright, even coverage", "A neat fit for small spaces"] },
    { name: "Clearflow Canister 600", category: "Filters", price: 7490, image: 2, rating: "4.9", reviews: 23, description: "Quiet, reliable filtration that helps keep a medium planted aquarium clear and balanced.", specifications: ["Recommended for medium aquariums", "Multi-stage media chambers", "Hose and intake set included"], features: ["Flexible media arrangement", "Quiet cabinet-friendly operation", "Straightforward maintenance"] },
    { name: "Gentle Current 350", category: "Filters", price: 1890, image: 1, rating: "4.8", reviews: 34, description: "A compact internal filter with a gentle flow for smaller, peaceful freshwater setups.", specifications: ["Compact internal unit", "Adjustable water outlet", "Reusable filter sponge"], features: ["Easy to install", "Soft adjustable current", "Quick-clean sponge"] },
    { name: "Bioflow Sponge Set", category: "Filters", price: 590, image: 3, rating: "4.7", reviews: 27, description: "Replacement sponge media to keep your aquarium filter working as it should.", specifications: ["Fine and coarse sponge pieces", "Trim-to-fit format", "Rinse before first use"], features: ["Mechanical debris capture", "Reusable filter media", "Simple, tool-free fit"] },
    { name: "Root & River Soil Kit", category: "Fertilizers", price: 2250, image: 2, rating: "4.9", reviews: 27, description: "A nutrient-rich aquasoil starter kit for establishing rooted plants and a thriving planted substrate.", specifications: ["Nutrient-rich planted substrate", "Sized for a small-to-medium layout", "Rinse and setup guidance included"], features: ["Supports rooted aquatic plants", "Creates a natural-looking base", "Pairs well with planted layouts"] },
    { name: "Greenwater Plant Tonic", category: "Fertilizers", price: 790, image: 6, rating: "4.8", reviews: 20, description: "An easy-to-dose liquid plant supplement for a steady, consistent aquarium care routine.", specifications: ["Freshwater plant supplement", "Measured dosing cap", "Follow label directions"], features: ["Simple weekly routine", "Supports healthy plant growth", "Convenient liquid format"] },
    { name: "Root Tabs — Set of 10", category: "Fertilizers", price: 490, image: 2, rating: "4.8", reviews: 17, description: "Targeted root-zone nutrition for heavier-feeding plants in an established aquascape.", specifications: ["10 root-zone fertiliser tabs", "Place below the substrate", "Use according to package directions"], features: ["Feeds plants at the roots", "Useful for established tanks", "Convenient measured portions"] },
    { name: "Riverstone Collection", category: "Decorations", price: 1290, image: 4, rating: "4.9", reviews: 22, description: "A hand-selected assortment of natural stones for building a calm, expressive aquascape.", specifications: ["Natural aquarium-safe stone", "Assorted sizes and shapes", "Rinse thoroughly before use"], features: ["Creates natural focal points", "Pairs with wood and plants", "Every collection is individual"] },
    { name: "Branchwood Sculpture", category: "Decorations", price: 1690, image: 5, rating: "4.8", reviews: 15, description: "Sculptural natural aquarium wood with graceful branching lines for a distinctive layout.", specifications: ["Natural aquarium driftwood", "Selected medium-size piece", "Pre-soak before aquarium use"], features: ["Beautiful natural texture", "Creates depth and shelter", "A unique one-off shape"] },
    { name: "Pebble Path Set", category: "Decorations", price: 690, image: 3, rating: "4.7", reviews: 12, description: "Smooth, aquarium-safe pebbles to add a quiet finishing detail to your underwater landscape.", specifications: ["Smooth natural pebble selection", "Assorted small sizes", "Wash before aquarium use"], features: ["A subtle, natural accent", "Easy to arrange by hand", "Works in planted and simple layouts"] }
  ];

  const projectTitles = [
    "The Quiet Current", "Blue Hour", "Forest in Glass", "A Softer Morning", "Stillwater Study",
    "Canopy & Current", "The Green Room", "A Place to Pause", "Riverlight", "The Living Edit",
    "A Study in Stone", "Tide & Timber", "Where Light Lands", "The Gentle Wild", "A Room of Water",
    "Moss & Memory", "The Open Current", "A Little Elsewhere", "Green Horizon", "The Hidden Garden",
    "Waterline", "The Long View", "Quietly Flourishing", "Wild at Heart", "Light Through Leaves",
    "A Living Welcome", "Between Two Worlds", "Rooted in Stillness", "The Everyday Escape", "A World, Well Placed"
  ];
  const projectCategories = ["Home Aquarium", "Office Aquarium", "Restaurant Aquarium", "Luxury Aquascape", "Nature Aquarium"];
  const projectLocations = ["Adyar", "Nungambakkam", "ECR", "Alwarpet", "Anna Nagar", "T. Nagar"];
  const portfolioProjects = projectTitles.map((title, index) => ({
    title,
    category: projectCategories[index % projectCategories.length],
    location: projectLocations[index % projectLocations.length],
    image: imageUrls[index % imageUrls.length],
    video: [4, 14, 24].includes(index),
    description: [
      "A living composition made to feel at home.",
      "A thoughtful centrepiece for a considered space.",
      "A planted world shaped around light and stone."
    ][index % 3]
  }));
  const projectVideoUrl = "https://videos.pexels.com/video-files/11342036/11342036-uhd_2560_1440_30fps.mp4";

  function initLoader() {
    const loader = document.querySelector(".site-loader");
    if (!loader) return;
    const hideLoader = () => window.setTimeout(() => loader.classList.add("is-hidden"), 180);
    if (document.readyState === "complete") hideLoader();
    else window.addEventListener("load", hideLoader, { once: true });
    window.setTimeout(hideLoader, 1800);
  }

  function initGlobalControls() {
    const year = document.querySelector("[data-year]");
    if (year) year.textContent = new Date().getFullYear();

    const scrollTop = document.querySelector(".scroll-top");
    const updateScrollButton = () => {
      if (scrollTop) scrollTop.classList.toggle("is-visible", window.scrollY > 420);
      document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", updateScrollButton, { passive: true });
    updateScrollButton();
    scrollTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    document.querySelectorAll(".navbar-collapse .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        const menu = link.closest(".navbar-collapse");
        if (menu?.classList.contains("show") && window.bootstrap?.Collapse) {
          window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      });
    });

    document.querySelectorAll("[data-newsletter]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const feedback = form.parentElement?.querySelector(".newsletter-feedback");
        if (feedback) feedback.textContent = "Newsletter sign-up isn’t connected yet. Follow @fnb_aquatics on Instagram for updates.";
        form.reset();
      });
    });
  }

  function initAnimations() {
    if (window.AOS) {
      window.AOS.init({ duration: 700, once: true, offset: 50, easing: "ease-out-quart" });
    }

    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;
    const animateCounter = (element) => {
      const target = Number(element.dataset.counter);
      if (!Number.isFinite(target)) return;
      const duration = 1400;
      const start = performance.now();
      const draw = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        element.textContent = target % 1 ? (target * eased).toFixed(1) : Math.round(target * eased).toString();
        if (progress < 1) window.requestAnimationFrame(draw);
      };
      window.requestAnimationFrame(draw);
    };
    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
      return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    counters.forEach((counter) => observer.observe(counter));
  }

  function initReviews() {
    const slider = document.querySelector(".review-swiper");
    if (!slider || !window.Swiper) return;
    new window.Swiper(slider, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: { delay: 5200, disableOnInteraction: false },
      pagination: { el: slider.querySelector(".swiper-pagination"), clickable: true },
      a11y: { enabled: true },
      breakpoints: { 768: { slidesPerView: 1.15 }, 1100: { slidesPerView: 1.25 } }
    });
  }

  function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(price);
  }

  function initProducts() {
    const grid = document.querySelector("[data-product-grid]");
    if (!grid) return;

    const modal = document.querySelector("[data-product-modal]");
    const modalContent = modal?.querySelector("[data-modal-content]");
    const countLabel = document.querySelector("[data-product-count]");
    let lastFocused = null;
    let activeFilter = "all";
    const currency = (price) => `₹${formatPrice(price)}`;

    const renderProducts = () => {
      const filtered = products.filter((product) => activeFilter === "all" || product.category === activeFilter);
      if (countLabel) countLabel.textContent = `${filtered.length} considered ${filtered.length === 1 ? "essential" : "essentials"}`;
      grid.innerHTML = filtered.map((product) => {
        const index = products.indexOf(product);
        return `<article class="col-6 col-lg-4 col-xl-3" data-aos="fade-up">
          <div class="catalog-card">
            <div class="catalog-image"><img src="${imageUrls[product.image]}" alt="${product.name}" loading="lazy"><span class="catalog-category">${product.category}</span>
              <button class="quick-view" type="button" data-quick-view="${index}" aria-label="Quick view: ${product.name}"><i class="fa-regular fa-eye"></i></button>
            </div>
            <div class="catalog-copy"><h3>${product.name}</h3><div class="catalog-rating" aria-label="${product.rating} out of 5 stars">★★★★★ <small>(${product.reviews})</small></div><div class="catalog-bottom"><span class="catalog-price">${currency(product.price)}</span><button class="catalog-detail-link btn-reset" type="button" data-quick-view="${index}">Quick view <i class="fa-solid fa-arrow-right ms-1"></i></button></div></div>
          </div>
        </article>`;
      }).join("");
      grid.querySelectorAll("[data-aos]").forEach((element) => element.classList.add("aos-animate"));
    };

    const openModal = (product, trigger) => {
      if (!modal || !modalContent) return;
      lastFocused = trigger;
      const productEnquiry = `https://wa.me/919789827973?text=${encodeURIComponent(`Hello, I’m interested in ${product.name}.`)}`;
      modalContent.innerHTML = `<img class="product-modal-image" src="${imageUrls[product.image]}" alt="${product.name}" loading="lazy">
        <div class="product-modal-info"><span class="eyebrow"><span class="eyebrow-line"></span> ${product.category.toUpperCase()}</span><h2 id="modalProductName">${product.name}</h2><div class="catalog-rating" aria-label="${product.rating} out of 5 stars">★★★★★ <small>${product.rating} · ${product.reviews} reviews</small></div><p class="mt-3">${product.description}</p><span class="modal-price">${currency(product.price)}</span><span class="card-kicker">DETAILS</span><ul class="modal-list">${product.specifications.map((item) => `<li><i class="fa-solid fa-check"></i>${item}</li>`).join("")}</ul><span class="card-kicker">WHY YOU’LL LOVE IT</span><ul class="modal-list">${product.features.map((item) => `<li><i class="fa-solid fa-leaf"></i>${item}</li>`).join("")}</ul><a class="btn modal-whatsapp" href="${productEnquiry}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i> Enquire on WhatsApp</a></div>`;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      modal.querySelector(".modal-close")?.focus();
    };

    const closeModal = () => {
      if (!modal?.classList.contains("is-open")) return;
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      lastFocused?.focus();
    };

    document.querySelector("[data-product-filters]")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-product-filters] [data-filter]").forEach((chip) => {
        const selected = chip === button;
        chip.classList.toggle("active", selected);
        chip.setAttribute("aria-pressed", String(selected));
      });
      renderProducts();
    });

    grid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-quick-view]");
      if (!button) return;
      const product = products[Number(button.dataset.quickView)];
      if (product) openModal(product, button);
    });
    modal?.querySelectorAll("[data-modal-close]").forEach((element) => element.addEventListener("click", closeModal));
    modal?.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const focusable = [...modal.querySelectorAll("a[href], button:not([disabled])")];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeModal();
    });
    renderProducts();
  }

  function initPortfolio() {
    const grid = document.querySelector("[data-portfolio-grid]");
    if (!grid) return;
    let activeFilter = "all";
    let lightboxInstance = null;
    const countLabel = document.querySelector("[data-project-count]");

    const renderProjects = () => {
      const filtered = portfolioProjects.filter((project) => activeFilter === "all" || project.category === activeFilter);
      if (countLabel) countLabel.textContent = `${filtered.length} living ${filtered.length === 1 ? "world" : "worlds"}`;
      grid.innerHTML = filtered.map((project, index) => {
        const media = project.video
          ? `<video muted playsinline controls preload="none" poster="${project.image}" aria-label="Aquarium video: ${project.title}"><source src="${projectVideoUrl}" type="video/mp4">Your browser does not support embedded video.</video><span class="portfolio-play" aria-hidden="true"><i class="fa-solid fa-play"></i></span>`
          : `<img src="${project.image}" alt="${project.title}, ${project.category.toLowerCase()} project in ${project.location}" loading="lazy">`;
        const lightbox = project.video
          ? ""
          : `<a class="lightbox-link glightbox" href="${project.image.replace("w=900", "w=1600")}" data-gallery="aquascape-portfolio" aria-label="View larger image: ${project.title}"></a>`;
        return `<article class="col-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(index % 3) * 60}"><div class="portfolio-card">${media}${lightbox}<div class="portfolio-overlay"><span>${project.category} · ${project.location}</span><h3>${project.title}</h3><p>${project.description}</p></div></div></article>`;
      }).join("");
      grid.querySelectorAll("[data-aos]").forEach((element) => element.classList.add("aos-animate"));
      if (window.GLightbox) {
        lightboxInstance?.destroy();
        lightboxInstance = window.GLightbox({ selector: ".glightbox", touchNavigation: true, loop: true });
      }
    };

    document.querySelector("[data-project-filters]")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-project-filters] [data-filter]").forEach((chip) => {
        const selected = chip === button;
        chip.classList.toggle("active", selected);
        chip.setAttribute("aria-pressed", String(selected));
      });
      renderProjects();
    });
    renderProjects();
  }

  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const values = new FormData(form);
      const body = [
        "Hello, I would like to enquire about your aquarium services.",
        "",
        `Name: ${values.get("name")}`,
        `Mobile: ${values.get("phone")}`,
        `Email: ${values.get("email")}`,
        `Service: ${values.get("service") || "Not specified"}`,
        "",
        "Message:",
        values.get("message")
      ].join("\n");
      const whatsappUrl = `https://wa.me/919789827973?text=${encodeURIComponent(body)}`;
      const feedback = form.querySelector(".contact-feedback");
      if (feedback) feedback.textContent = "WhatsApp should open with your enquiry ready. If it doesn’t, call +91 97898 27973 or +91 81487 26512.";
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  initLoader();
  initGlobalControls();
  initAnimations();
  initReviews();
  initProducts();
  initPortfolio();
  initContactForm();
})();
