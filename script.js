const tableData = {
  "Royal Imperial Table": {
    key: "royal-imperial",
    package: "Imperial Gold Package",
    capacity: "2 - 4 Guests",
    price: 1000,
    description:
      "A regal reservation experience designed for elegant dinners, intimate celebrations, and ceremonial luxury with refined golden styling.",
    full: "The Royal Imperial Table is an opulent setting designed for guests seeking dignified luxury in a more intimate format. Warm gold accents, premium table detailing, and refined hospitality touches create a classic evening of prestige. Ideal for anniversaries, elegant dates, and refined private occasions.",
    features: [
      "Private candle styling",
      "Signature welcome mocktail",
      "Premium dessert presentation",
      "Priority host escort",
      "Curated floral centerpiece",
    ],
    diningName: "Oakfire Sirloin Supper",
    diningDescription:
      "A composed starter-to-dessert dinner built around oak-fired sirloin and classic steakhouse finishing.",
    diningCourses: [
      "Dry-aged sirloin cooked medium or medium-well",
      "Pommes anna, broccolini, peppercorn jus",
      "Roasted onion tartlet and signature mocktail",
      "Date sticky pudding with vanilla cream",
    ],
    menuNote:
      "Standard Menu items remain available for additional à la carte orders.",
  },
  "Velvet Signature Table": {
    key: "velvet-signature",
    package: "Velvet Signature Romance",
    capacity: "2 - 4 Guests",
    price: 1500,
    description:
      "A deeply intimate dining concept focused on texture, romance, soft lighting, and a slow luxury pace.",
    full: "The Velvet Signature Table creates a private, romantic, and design-led evening. Rich textures, low warm lighting, premium touches, and a more intimate emotional tone make it ideal for date nights, proposals, anniversaries, and meaningful celebrations.",
    features: [
      "Romantic velvet styling",
      "Private ambiance detail",
      "Signature mocktail pair",
      "Premium dessert course",
      "Personalized occasion card",
    ],
    diningName: "Velvet Filet Dinner",
    diningDescription:
      "A romance-led dinner package with a finer cut, softer flavors, and dessert built for intimate celebrations.",
    diningCourses: [
      "Center-cut filet mignon with truffle glaze",
      "Potato fondant, asparagus, herb butter",
      "Rose citrus cooler and chef amuse-bouche",
      "Vanilla panna cotta with berry compote",
    ],
    menuNote:
      "The Standard Menu can still be ordered in addition to the included dinner.",
  },
  "Golden Prestige Lounge": {
    key: "golden-prestige",
    package: "Prestige Lounge Package",
    capacity: "4 - 6 Guests",
    price: 2000,
    description:
      "A warm social-luxury lounge table tailored for polished gatherings, elegant conversations, and curated celebration moments.",
    full: "The Golden Prestige Lounge offers a more social luxury environment while maintaining exclusivity and polish. Crafted for sophisticated gatherings, elevated birthdays, and stylish evening hosting, it blends comfort, premium service flow, and visually rich lounge energy.",
    features: [
      "Lounge-style seating",
      "Premium appetizer sequence",
      "Celebration plating",
      "Reserved service pacing",
      "Golden ambient styling",
    ],
    diningName: "Prestige Surf & Turf Lounge Set",
    diningDescription:
      "A share-friendly premium menu balancing grilled beef, garlic prawns, and elevated starters for the full table.",
    diningCourses: [
      "Prime ribeye carved for the table",
      "Butter garlic prawns and saffron rice",
      "Warm mezze trio with artisan breads",
      "Chocolate opera slices and sparkling cooler",
    ],
    menuNote:
      "Guests may still order individual dishes from the Standard Menu.",
  },
  "Platinum Horizon Deck": {
    key: "platinum-horizon",
    package: "Horizon Platinum Affair",
    capacity: "4 - 8 Guests",
    price: 2500,
    description:
      "An elevated skyline-inspired table concept with open visual depth, premium hosting energy, and modern celebratory elegance.",
    full: "The Platinum Horizon Deck is designed for guests who want visual openness, group luxury, and a modern high-end atmosphere. With statement positioning and premium package pacing, it suits elevated gatherings, business-hosted dinners, and stylish private celebrations.",
    features: [
      "Panoramic placement concept",
      "Premium sharing starters",
      "Extended hosting layout",
      "Refined celebration add-ons",
      "Enhanced service sequence",
    ],
    diningName: "Horizon Prime Selection",
    diningDescription:
      "A higher-tier skyline package featuring prime beef, shellfish, and a polished sequence designed for entertaining.",
    diningCourses: [
      "Prime striploin with smoked potato purée",
      "Lobster gratin share plate and citrus greens",
      "Seared scallop starter with saffron butter",
      "Hazelnut mille-feuille and table mocktail service",
    ],
    menuNote:
      "The Standard Menu remains separate and optional beyond the included package.",
  },
  "Noir Exclusive Chamber": {
    key: "noir-exclusive",
    package: "Noir Private Chamber",
    capacity: "2 - 5 Guests",
    price: 3000,
    description:
      "A dark, moody, highly exclusive private-style reservation experience built for discretion, intimacy, and statement luxury.",
    full: "The Noir Exclusive Chamber is one of the most distinct and dramatic reservation settings available. It is tailored for guests seeking privacy, atmosphere, and a sense of rare access. Deep contrast, intimate focus, and premium delivery make it ideal for highly personal evenings and confidential luxury hosting.",
    features: [
      "Private chamber mood",
      "Exclusive host attention",
      "Noir dessert sequence",
      "Luxury welcome ritual",
      "Priority celebration styling",
    ],
    diningName: "Noir Degustation Supper",
    diningDescription:
      "A private multi-course dinner with darker, richer flavors, premium seafood, and a more exclusive finish.",
    diningCourses: [
      "Black truffle tenderloin medallion",
      "Miso glazed sea bass with caviar butter",
      "Oscietra blini service and smoked date tonic",
      "Valrhona dark chocolate dome with gold leaf",
    ],
    menuNote:
      "Guests can complement the included degustation with Standard Menu sides or desserts.",
  },
  "Diamond Elite Experience": {
    key: "diamond-elite",
    package: "Elite Diamond Signature",
    capacity: "2 - 6 Guests",
    price: 3500,
    description:
      "A top-tier luxury reservation crafted for guests who want premium spectacle, chef-curated touches, and unforgettable exclusivity.",
    full: "The Diamond Elite Experience is the pinnacle of the Gomaa's Restaurant reservation collection. It combines visual drama, superior placement, premium culinary pacing, elevated service choreography, and distinct celebration enhancements. It is built for milestone occasions, prestige hosting, and rare evenings meant to feel unforgettable.",
    features: [
      "Chef tasting enhancement",
      "Luxury dessert tower",
      "VIP host reception",
      "Premium skyline placement",
      "Occasion styling upgrade",
    ],
    diningName: "Diamond Signature Tasting",
    diningDescription:
      "Our most elevated culinary inclusion, pairing A5 wagyu, lobster, caviar, and chef-finished dessert service.",
    diningCourses: [
      "A5 wagyu medallion with truffle jus",
      "Butter-poached lobster and saffron emulsion",
      "Caviar canapés and tableside amuse sequence",
      "Diamond dessert tower with petit fours",
    ],
    menuNote:
      "The Standard Menu stays available, but this tier already includes the most premium culinary package.",
  },
};

const dom = {
  body: document.body,
  header: document.querySelector(".site-header"),
  navToggle: document.getElementById("navToggle"),
  navMenu: document.getElementById("navMenu"),
  navLinks: document.querySelectorAll('.nav-menu a[href^="#"]'),
  revealItems: document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right",
  ),
  counters: document.querySelectorAll("[data-counter]"),
  cursorGlow: document.querySelector(".cursor-glow"),
  tableCards: document.querySelectorAll(".table-card"),
  tableModal: document.getElementById("tableModal"),
  modalClose: document.getElementById("modalClose"),
  modalTitle: document.getElementById("modalTitle"),
  modalPackage: document.getElementById("modalPackage"),
  modalCapacity: document.getElementById("modalCapacity"),
  modalPrice: document.getElementById("modalPrice"),
  modalDescription: document.getElementById("modalDescription"),
  modalFullDescription: document.getElementById("modalFullDescription"),
  modalFeatures: document.getElementById("modalFeatures"),
  modalImage: document.getElementById("modalImage"),
  modalReserveAction: document.getElementById("modalReserveAction"),
  modalSecondaryAction: document.getElementById("modalSecondaryAction"),
  modalDiningName: document.getElementById("modalDiningName"),
  modalDiningDescription: document.getElementById("modalDiningDescription"),
  modalDiningValue: document.getElementById("modalDiningValue"),
  modalDiningCourses: document.getElementById("modalDiningCourses"),
  modalMenuNote: document.getElementById("modalMenuNote"),
  reservationForm: document.getElementById("reservationForm"),
  fullName: document.getElementById("fullName"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  occasion: document.getElementById("occasion"),
  reservationDate: document.getElementById("reservationDate"),
  reservationTime: document.getElementById("reservationTime"),
  guestCount: document.getElementById("guestCount"),
  tableType: document.getElementById("tableType"),
  specialRequest: document.getElementById("specialRequest"),
  reservationStatus: document.getElementById("reservationStatus"),
  summaryTable: document.getElementById("summaryTable"),
  summaryPackage: document.getElementById("summaryPackage"),
  summaryDining: document.getElementById("summaryDining"),
  summaryDiningValue: document.getElementById("summaryDiningValue"),
  summaryCapacity: document.getElementById("summaryCapacity"),
  summaryPrice: document.getElementById("summaryPrice"),
  summaryOccasion: document.getElementById("summaryOccasion"),
  summaryDateTime: document.getElementById("summaryDateTime"),
  summaryDescription: document.getElementById("summaryDescription"),
  summaryFeatures: document.getElementById("summaryFeatures"),
  summaryLuxuryState: document.getElementById("summaryLuxuryState"),
  summaryMenuNote: document.getElementById("summaryMenuNote"),
  confirmationModal: document.getElementById("confirmationModal"),
  confirmationClose: document.getElementById("confirmationClose"),
  closeConfirmationBtn: document.getElementById("closeConfirmationBtn"),
  confirmationSummary: document.getElementById("confirmationSummary"),
};

const App = {
  activeTable: null,
  observers: {},
  scrollTicking: false,

  init() {
    this.setMinDate();
    this.bindNavigation();
    this.bindHeaderEffects();
    this.bindRevealAnimations();
    this.bindCounterAnimations();
    this.bindCursorGlow();
    this.bindTableSystem();
    this.bindReservationSystem();
    this.bindGlobalModalActions();
    this.updateReservationSummary();
  },

  setMinDate() {
    if (!dom.reservationDate) return;
    const now = new Date();
    dom.reservationDate.min = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  },

  bindNavigation() {
    if (dom.navToggle) {
      dom.navToggle.addEventListener("click", () => {
        const isOpen = dom.navMenu.classList.toggle("open");
        dom.navToggle.classList.toggle("active", isOpen);
        dom.navToggle.setAttribute("aria-expanded", String(isOpen));
      });
    }

    dom.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (dom.navMenu) dom.navMenu.classList.remove("open");
        if (dom.navToggle) {
          dom.navToggle.classList.remove("active");
          dom.navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    window.addEventListener("scroll", () => {
      const sections = [
        "about",
        "experience",
        "tables",
        "menu",
        "reservation",
        "gallery",
        "contact",
      ];
      let current = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) current = id;
      });
      dom.navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${current}`,
        );
      });
    });
  },

  bindHeaderEffects() {
    const onScroll = () => {
      if (this.scrollTicking) return;
      window.requestAnimationFrame(() => {
        if (dom.header)
          dom.header.classList.toggle("scrolled", window.scrollY > 20);
        this.parallaxHero();
        this.scrollTicking = false;
      });
      this.scrollTicking = true;
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
  },

  parallaxHero() {
    const hero = document.querySelector(".hero-section");
    const orbs = document.querySelectorAll(".hero-orb");
    const frame = document.querySelector(".hero-frame");
    if (!hero || !frame) return;
    const rect = hero.getBoundingClientRect();
    const offset = Math.max(Math.min(-rect.top, 500), 0);
    const y = offset * 0.12;
    frame.style.transform = `translateY(${y * 0.45}px)`;
    orbs.forEach((orb, index) => {
      orb.style.transform = `translateY(${y * (index === 0 ? 0.18 : 0.1)}px)`;
    });
  },

  bindRevealAnimations() {
    this.observers.reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          this.observers.reveal.unobserve(entry.target);
        });
      },
      { threshold: 0.14 },
    );
    dom.revealItems.forEach((item) => this.observers.reveal.observe(item));
  },

  bindCounterAnimations() {
    this.observers.counter = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target;
          this.animateCounter(element, Number(element.dataset.counter || 0));
          this.observers.counter.unobserve(element);
        });
      },
      { threshold: 0.65 },
    );
    dom.counters.forEach((counter) => this.observers.counter.observe(counter));
  },

  animateCounter(element, target) {
    const start = performance.now();
    const duration = 1600;
    const update = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  },

  bindCursorGlow() {
    if (!dom.cursorGlow) return;
    window.addEventListener("mousemove", (event) => {
      dom.cursorGlow.style.left = `${event.clientX}px`;
      dom.cursorGlow.style.top = `${event.clientY}px`;
    });
  },

  bindTableSystem() {
    dom.tableCards.forEach((card) => {
      const reserveButton = card.querySelector(".quick-reserve");
      const detailsButton = card.querySelector(".open-details");
      card.addEventListener("mouseenter", () => {
        this.activeTable = card.dataset.name;
      });
      if (detailsButton) {
        detailsButton.addEventListener("click", () =>
          this.openTableModalFromCard(card),
        );
      }
      if (reserveButton) {
        reserveButton.addEventListener("click", () =>
          this.selectTableFromCard(card, true),
        );
      }
    });
  },

  extractCardData(card) {
    return {
      key: card.dataset.table,
      name: card.dataset.name,
      capacity: card.dataset.capacity,
      price: Number(card.dataset.price),
      package: card.dataset.package,
      description: card.dataset.description,
      full: card.dataset.full,
      features: (card.dataset.features || "").split("|").filter(Boolean),
      diningName: card.dataset.diningName,
      diningValue: card.dataset.diningValue,
      diningDescription: card.dataset.diningDescription,
      diningCourses: (card.dataset.diningCourses || "")
        .split("|")
        .filter(Boolean),
      menuNote: card.dataset.menuNote,
    };
  },

  getTableImage(tableName) {
    const imageMap = {
      "Royal Imperial Table": "images/royal-imperial.jpg",
      "Golden Prestige Lounge": "images/golden-prestige.jpg",
      "Diamond Elite Experience": "images/diamond-elite.jpg",
      "Velvet Signature Table": "images/velvet-signature.jpg",
      "Platinum Horizon Deck": "images/platinum-horizon.jpg",
      "Noir Exclusive Chamber": "images/noir-exclusive.jpg",
    };
    return imageMap[tableName] || "";
  },

  openTableModalFromCard(card) {
    const payload = this.extractCardData(card);
    if (dom.modalTitle) dom.modalTitle.textContent = payload.name;
    if (dom.modalPackage) dom.modalPackage.textContent = payload.package;
    if (dom.modalCapacity) dom.modalCapacity.textContent = payload.capacity;
    if (dom.modalPrice) dom.modalPrice.textContent = `$${payload.price}`;
    if (dom.modalDescription)
      dom.modalDescription.textContent = payload.description;
    if (dom.modalFullDescription)
      dom.modalFullDescription.textContent = payload.full;
    if (dom.modalImage) {
      dom.modalImage.src = this.getTableImage(payload.name);
      dom.modalImage.alt = payload.name;
    }
    if (dom.modalFeatures)
      dom.modalFeatures.innerHTML = payload.features
        .map((feature) => `<li>${feature}</li>`)
        .join("");
    if (dom.modalDiningName)
      dom.modalDiningName.textContent = payload.diningName;
    if (dom.modalDiningDescription)
      dom.modalDiningDescription.textContent = payload.diningDescription;
    if (dom.modalDiningValue)
      dom.modalDiningValue.textContent = payload.diningValue;
    if (dom.modalDiningCourses)
      dom.modalDiningCourses.innerHTML = payload.diningCourses
        .map((item) => `<li>${item}</li>`)
        .join("");
    if (dom.modalMenuNote) dom.modalMenuNote.textContent = payload.menuNote;
    if (dom.modalReserveAction)
      dom.modalReserveAction.dataset.tableName = payload.name;
    this.openModal(dom.tableModal);
  },

  selectTableFromCard(card, scrollToForm = false) {
    const payload = this.extractCardData(card);
    this.activeTable = payload.name;
    if (dom.tableType) dom.tableType.value = payload.name;
    this.updateReservationSummary();
    this.highlightSelectedTableCard(payload.name);
    if (scrollToForm) {
      const section = document.getElementById("reservation");
      if (section)
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    this.setReservationStatus("Table Selected", true);
  },

  highlightSelectedTableCard(name) {
    dom.tableCards.forEach((card) => {
      const match = card.dataset.name === name;
      card.style.borderColor = match
        ? "rgba(201, 169, 110, 0.42)"
        : "rgba(255,255,255,0.12)";
      card.style.boxShadow = match
        ? "0 26px 60px rgba(201, 169, 110, 0.12), 0 22px 54px rgba(0,0,0,0.28)"
        : "";
    });
  },

  bindReservationSystem() {
    const liveFields = [
      dom.fullName,
      dom.email,
      dom.phone,
      dom.occasion,
      dom.reservationDate,
      dom.reservationTime,
      dom.guestCount,
      dom.tableType,
      dom.specialRequest,
    ];
    liveFields.forEach((field) => {
      if (!field) return;
      field.addEventListener("input", () => {
        this.clearFieldError(field);
        this.updateReservationSummary();
        if (field === dom.tableType && dom.tableType.value) {
          this.highlightSelectedTableCard(dom.tableType.value);
          this.setReservationStatus("Luxury Configuration Ready", true);
        }
      });
      field.addEventListener("change", () => {
        this.clearFieldError(field);
        this.updateReservationSummary();
      });
    });
    if (!dom.reservationForm) return;
    dom.reservationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const validation = this.validateReservationForm();
      if (!validation.isValid) {
        this.setReservationStatus("Please Complete Required Fields", false);
        return;
      }
      this.setReservationStatus("Reservation Request Prepared", true);
      this.showConfirmation();
      dom.reservationForm.reset();
      this.activeTable = null;
      this.updateReservationSummary();
      this.highlightSelectedTableCard("");
    });
  },

  validateReservationForm() {
    const values = this.getFormValues();
    let isValid = true;
    if (!values.fullName || values.fullName.length < 3) {
      this.setFieldError(dom.fullName, "Please enter a valid full name.");
      isValid = false;
    }
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      this.setFieldError(dom.email, "Please enter a valid email address.");
      isValid = false;
    }
    if (!values.phone || values.phone.replace(/\D/g, "").length < 8) {
      this.setFieldError(dom.phone, "Please enter a valid phone number.");
      isValid = false;
    }
    if (!values.occasion) {
      this.setFieldError(dom.occasion, "Please select an occasion.");
      isValid = false;
    }
    if (!values.reservationDate) {
      this.setFieldError(
        dom.reservationDate,
        "Please choose a reservation date.",
      );
      isValid = false;
    }
    if (!values.reservationTime) {
      this.setFieldError(
        dom.reservationTime,
        "Please choose a reservation time.",
      );
      isValid = false;
    }
    if (!values.guestCount || Number(values.guestCount) < 1) {
      this.setFieldError(dom.guestCount, "Please enter the guest count.");
      isValid = false;
    }
    if (!values.tableType) {
      this.setFieldError(dom.tableType, "Please select a luxury table.");
      isValid = false;
    }
    if (values.tableType) {
      const selected = tableData[values.tableType];
      const guests = Number(values.guestCount || 0);
      if (selected && guests > 0) {
        const { min, max } = this.parseCapacityRange(selected.capacity);
        if (guests < min || guests > max) {
          this.setFieldError(
            dom.guestCount,
            `This table supports ${selected.capacity}. Please adjust guest count or choose another table.`,
          );
          isValid = false;
        }
      }
    }
    return { isValid };
  },

  parseCapacityRange(rangeText) {
    const matches = rangeText.match(/(\d+)\s*-\s*(\d+)/);
    return matches
      ? { min: Number(matches[1]), max: Number(matches[2]) }
      : { min: 1, max: 12 };
  },

  getFormValues() {
    return {
      fullName: dom.fullName ? dom.fullName.value.trim() : "",
      email: dom.email ? dom.email.value.trim() : "",
      phone: dom.phone ? dom.phone.value.trim() : "",
      occasion: dom.occasion ? dom.occasion.value : "",
      reservationDate: dom.reservationDate ? dom.reservationDate.value : "",
      reservationTime: dom.reservationTime ? dom.reservationTime.value : "",
      guestCount: dom.guestCount ? dom.guestCount.value : "",
      tableType: dom.tableType ? dom.tableType.value : "",
      specialRequest: dom.specialRequest ? dom.specialRequest.value.trim() : "",
    };
  },

  updateReservationSummary() {
    const values = this.getFormValues();
    const selected = tableData[values.tableType];
    if (selected) {
      if (dom.summaryTable) dom.summaryTable.textContent = values.tableType;
      if (dom.summaryPackage) dom.summaryPackage.textContent = selected.package;
      if (dom.summaryDining)
        dom.summaryDining.textContent = selected.diningName;
      if (dom.summaryCapacity)
        dom.summaryCapacity.textContent = selected.capacity;
      if (dom.summaryPrice) dom.summaryPrice.textContent = `$${selected.price}`;
      if (dom.summaryDescription)
        dom.summaryDescription.textContent = selected.description;
      if (dom.summaryLuxuryState)
        dom.summaryLuxuryState.textContent = "Luxury Package Synced";
      if (dom.summaryFeatures)
        dom.summaryFeatures.innerHTML = selected.diningCourses
          .map((item) => `<li>${item}</li>`)
          .join("");
      if (dom.summaryMenuNote)
        dom.summaryMenuNote.textContent = selected.menuNote;
    } else {
      if (dom.summaryTable) dom.summaryTable.textContent = "Not selected";
      if (dom.summaryPackage) dom.summaryPackage.textContent = "Not selected";
      if (dom.summaryDining) dom.summaryDining.textContent = "Not selected";
      if (dom.summaryDiningValue) dom.summaryDiningValue.textContent = "—";
      if (dom.summaryCapacity) dom.summaryCapacity.textContent = "—";
      if (dom.summaryPrice) dom.summaryPrice.textContent = "$0";
      if (dom.summaryDescription)
        dom.summaryDescription.textContent =
          "Choose a table experience to reveal the included dining package, hospitality tier, and booking value.";
      if (dom.summaryLuxuryState)
        dom.summaryLuxuryState.textContent = "Luxury Selection Pending";
      if (dom.summaryFeatures)
        dom.summaryFeatures.innerHTML =
          "<li>Select a table to reveal the included dining package.</li>";
      if (dom.summaryMenuNote)
        dom.summaryMenuNote.textContent =
          "The Standard Menu is always ordered separately.";
    }
    if (dom.summaryOccasion)
      dom.summaryOccasion.textContent = values.occasion || "Not selected";
    if (dom.summaryDateTime)
      dom.summaryDateTime.textContent =
        values.reservationDate && values.reservationTime
          ? `${this.formatDate(values.reservationDate)} • ${values.reservationTime}`
          : "Not selected";
    this.setReservationStatus(
      selected ? "Luxury Selection Active" : "Awaiting Selection",
      !!selected,
      !selected,
    );
  },

  formatDate(dateString) {
    if (!dateString) return "Not selected";
    return new Date(`${dateString}T00:00:00`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  },

  setFieldError(field, message) {
    if (!field) return;
    const formField = field.closest(".form-field");
    if (!formField) return;
    formField.classList.add("invalid");
    const error = formField.querySelector(".error-message");
    if (error) error.textContent = message;
  },

  clearFieldError(field) {
    if (!field) return;
    const formField = field.closest(".form-field");
    if (!formField) return;
    formField.classList.remove("invalid");
    const error = formField.querySelector(".error-message");
    if (error) error.textContent = "";
  },

  setReservationStatus(message, active = false, neutral = false) {
    if (!dom.reservationStatus) return;
    dom.reservationStatus.textContent = message;
    if (neutral) {
      dom.reservationStatus.classList.remove("active");
      return;
    }
    dom.reservationStatus.classList.toggle("active", active);
  },

  showConfirmation() {
    const values = this.getFormValues();
    const selected = tableData[values.tableType];
    const summaryItems = [
      { label: "Guest Name", value: values.fullName },
      { label: "Table Experience", value: values.tableType },
      {
        label: "Hospitality Package",
        value: selected ? selected.package : "—",
      },
      {
        label: "Included Dining Package",
        value: selected ? selected.diningName : "—",
      },
      {
        label: "Reservation Schedule",
        value: `${this.formatDate(values.reservationDate)} • ${values.reservationTime}`,
      },
      { label: "Guest Count", value: `${values.guestCount} Guests` },
      { label: "Base Price", value: selected ? `$${selected.price}` : "$0" },
      { label: "Occasion", value: values.occasion },
      {
        label: "Standard Menu",
        value: "Available separately for additional à la carte orders",
      },
      {
        label: "Special Request",
        value: values.specialRequest || "No additional notes provided.",
      },
    ];
    if (dom.confirmationSummary) {
      dom.confirmationSummary.innerHTML = summaryItems
        .map(
          (item) =>
            `<div class="summary-item"><span>${item.label}</span><strong>${item.value}</strong></div>`,
        )
        .join("");
    }
    this.openModal(dom.confirmationModal);
  },

  bindGlobalModalActions() {
    if (dom.modalClose)
      dom.modalClose.addEventListener("click", () =>
        this.closeModal(dom.tableModal),
      );
    if (dom.confirmationClose)
      dom.confirmationClose.addEventListener("click", () =>
        this.closeModal(dom.confirmationModal),
      );
    if (dom.closeConfirmationBtn)
      dom.closeConfirmationBtn.addEventListener("click", () =>
        this.closeModal(dom.confirmationModal),
      );
    if (dom.modalSecondaryAction)
      dom.modalSecondaryAction.addEventListener("click", () =>
        this.closeModal(dom.tableModal),
      );
    if (dom.modalReserveAction) {
      dom.modalReserveAction.addEventListener("click", () => {
        const tableName = dom.modalReserveAction.dataset.tableName;
        if (tableName && dom.tableType) {
          dom.tableType.value = tableName;
          this.updateReservationSummary();
          this.highlightSelectedTableCard(tableName);
          this.setReservationStatus("Luxury Configuration Ready", true);
          this.closeModal(dom.tableModal);
          const reservationSection = document.getElementById("reservation");
          if (reservationSection)
            reservationSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        }
      });
    }
    [dom.tableModal, dom.confirmationModal].forEach((modal) => {
      if (!modal) return;
      modal.addEventListener("click", (event) => {
        if (event.target === modal) this.closeModal(modal);
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.closeModal(dom.tableModal);
        this.closeModal(dom.confirmationModal);
      }
    });
  },

  openModal(modal) {
    if (!modal) return;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    if (dom.body) dom.body.classList.add("modal-open");
  },

  closeModal(modal) {
    if (!modal || !modal.classList.contains("active")) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".modal-overlay.active") && dom.body)
      dom.body.classList.remove("modal-open");
  },
};

App.init();
