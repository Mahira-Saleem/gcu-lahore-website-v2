

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasGSAP = typeof window.gsap !== "undefined";

const THEME_KEY = "gcu-theme";
const applyTheme = (t) => document.documentElement.setAttribute("data-theme", t);
applyTheme(localStorage.getItem(THEME_KEY) ||
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("#themeToggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

const DATA = {
  "programs": [
    {
      "title": "BS Physics",
      "level": "BS",
      "faculty": "Physical Sciences",
      "years": 4,
      "icon": "⚛",
      "desc": "The department of Nobel laureate Dr. Abdus Salam — theory, labs and research from year one."
    },
    {
      "title": "BS Computer Science",
      "level": "BS",
      "faculty": "Computing",
      "years": 4,
      "icon": "⌨",
      "desc": "Algorithms, AI, software engineering and industry-linked capstone projects."
    },
    {
      "title": "BS English Literature",
      "level": "BS",
      "faculty": "Languages",
      "years": 4,
      "icon": "✒",
      "desc": "From Shakespeare to South Asian writing, with critical theory and creative writing."
    },
    {
      "title": "BS Economics",
      "level": "BS",
      "faculty": "Social Sciences",
      "years": 4,
      "icon": "₨",
      "desc": "Micro, macro and econometrics with a focus on Pakistan's development economy."
    },
    {
      "title": "BS Botany",
      "level": "BS",
      "faculty": "Life Sciences",
      "years": 4,
      "icon": "❦",
      "desc": "Plant sciences backed by one of the region's oldest botanic gardens."
    },
    {
      "title": "BS Psychology",
      "level": "BS",
      "faculty": "Social Sciences",
      "years": 4,
      "icon": "◉",
      "desc": "Clinical, social and developmental psychology with supervised practicum."
    },
    {
      "title": "MPhil Mathematics",
      "level": "MPhil",
      "faculty": "Mathematical Sciences",
      "years": 2,
      "icon": "∑",
      "desc": "Advanced analysis, algebra and applied mathematics with thesis research."
    },
    {
      "title": "MPhil Urdu",
      "level": "MPhil",
      "faculty": "Languages",
      "years": 2,
      "icon": "ن",
      "desc": "The tradition of Iqbal and Faiz — classical and modern Urdu literature."
    },
    {
      "title": "MPhil Chemistry",
      "level": "MPhil",
      "faculty": "Physical Sciences",
      "years": 2,
      "icon": "⚗",
      "desc": "Organic, inorganic and analytical chemistry with funded research labs."
    },
    {
      "title": "PhD Biotechnology",
      "level": "PhD",
      "faculty": "Life Sciences",
      "years": 4,
      "icon": "🧬",
      "desc": "Molecular biology and genomics research with national and global partners."
    },
    {
      "title": "PhD History",
      "level": "PhD",
      "faculty": "Humanities",
      "years": 4,
      "icon": "⌛",
      "desc": "Archival research on South Asian history using GCU's rare manuscript collection."
    },
    {
      "title": "Intermediate FSc Pre-Engineering",
      "level": "Intermediate",
      "faculty": "Intermediate",
      "years": 2,
      "icon": "⚙",
      "desc": "The legendary GCU intermediate programme preparing future engineers."
    }
  ],
  "news": [
    {
      "title": "Fall 2026 BS admissions open",
      "category": "Admissions",
      "date": "2026-10-20",
      "img": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=60&auto=format",
      "text": "Online applications for BS programs are now open. Last date: 25 November."
    },
    {
      "title": "Ravians win All-Pakistan Bilingual Declamation",
      "category": "Achievements",
      "date": "2026-10-12",
      "img": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=700&q=60&auto=format",
      "text": "The Debating Society brings home the trophy for the third year running."
    },
    {
      "title": "Abdus Salam Memorial Lecture 2026",
      "category": "Events",
      "date": "2026-11-21",
      "img": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=60&auto=format",
      "text": "A visiting CERN physicist speaks on the future of particle physics."
    },
    {
      "title": "GCU Dramatic Club stages 'Anarkali'",
      "category": "Events",
      "date": "2026-12-05",
      "img": "https://images.unsplash.com/photo-1503095396549-807759245b35?w=700&q=60&auto=format",
      "text": "Pakistan's oldest theatre society returns to the Bukhari Auditorium."
    },
    {
      "title": "HEC grant for climate research centre",
      "category": "Research",
      "date": "2026-09-28",
      "img": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700&q=60&auto=format",
      "text": "Rs. 120 million awarded to study air quality and smog in Lahore."
    },
    {
      "title": "MPhil/PhD entry test schedule",
      "category": "Admissions",
      "date": "2026-10-30",
      "img": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=60&auto=format",
      "text": "GAT-style entry tests will be held on campus from 15 December."
    }
  ],
  "facilities": [
    {
      "title": "Main Library",
      "icon": "📚",
      "text": "Over 400,000 volumes and rare manuscripts dating back centuries."
    },
    {
      "title": "Research Labs",
      "icon": "🔬",
      "text": "Modern labs for physics, biotech, chemistry and computing."
    },
    {
      "title": "Sports Grounds",
      "icon": "🏏",
      "text": "Historic Oval cricket ground, rowing club and indoor courts."
    },
    {
      "title": "Hostels",
      "icon": "🏛",
      "text": "Secure on-campus residences for male and female students."
    },
    {
      "title": "2 Nobel Laureates",
      "icon": "🏅",
      "text": "Dr. Abdus Salam and Dr. Har Gobind Khorana studied here."
    },
    {
      "title": "Iqbal's Alma Mater",
      "icon": "✍",
      "text": "Allama Muhammad Iqbal studied and taught philosophy at GC."
    },
    {
      "title": "Oldest Societies",
      "icon": "🎭",
      "text": "Dramatic Club, Debating and Mountaineering societies since the 1900s."
    },
    {
      "title": "HEC Ranked",
      "icon": "⭐",
      "text": "Consistently among Pakistan's top general-category universities."
    }
  ],
  "testimonials": [
    {
      "name": "Ayesha Khan",
      "role": "BS Physics, 2024",
      "quote": "Studying in the same department as Dr. Abdus Salam made every late night in the lab feel like part of something bigger."
    },
    {
      "name": "Hamza Rafiq",
      "role": "MPhil Economics, 2023",
      "quote": "The faculty pushed me to think critically about Pakistan's economy. I now work at the State Bank because of that training."
    },
    {
      "name": "Fatima Noor",
      "role": "Dramatic Club President",
      "quote": "GCU taught me that confidence is built on stage and in debate halls, not just in classrooms."
    },
    {
      "name": "Dr. Usman Tariq",
      "role": "Alumnus & Professor, LUMS",
      "quote": "The tower, the Oval, the library — GCU shaped how I think. Courage to know is not a slogan, it's a habit."
    }
  ],
  "gallery": [
    {
      "src": "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&q=70&auto=format",
      "caption": "Convocation day"
    },
    {
      "src": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=70&auto=format",
      "caption": "Historic corridors"
    },
    {
      "src": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=70&auto=format",
      "caption": "Main Library reading hall"
    },
    {
      "src": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=70&auto=format",
      "caption": "Research laboratories"
    },
    {
      "src": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=70&auto=format",
      "caption": "Cricket at the Oval"
    },
    {
      "src": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=70&auto=format",
      "caption": "Lecture theatre"
    }
  ],
  "faq": [
    {
      "q": "When do admissions open?",
      "a": "Intermediate admissions open after matric results (usually August–September); BS admissions open after FSc results; MPhil/PhD twice a year (Fall and Spring)."
    },
    {
      "q": "What is the eligibility for BS programs?",
      "a": "Intermediate (FA/FSc/ICS or equivalent) with at least 45–60% marks depending on the program, plus the GCU entry test where applicable."
    },
    {
      "q": "Are scholarships available?",
      "a": "Yes — need-based (HEC, PEEF, Ehsaas), merit scholarships and the GCU Endowment Fund support thousands of students each year."
    },
    {
      "q": "Does GCU provide hostel accommodation?",
      "a": "Yes, separate hostels for male and female students are allotted on merit and distance from Lahore."
    },
    {
      "q": "Is GCU co-educational?",
      "a": "Yes, GCU has been co-educational for decades and welcomes students from all provinces of Pakistan."
    }
  ]
};

/* ---------- Mobile menu ---------- */
function initMenu() {
  const btn = $("#hamburger"), nav = $("#nav");
  const toggle = (open) => {
    nav.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  btn.addEventListener("click", () => toggle(!nav.classList.contains("is-open")));
  $$(".nav__link").forEach((a) => a.addEventListener("click", () => toggle(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && toggle(false));
}

/* ---------- Active link + navbar + back-to-top on scroll ---------- */
function initScrollUI() {
  const navbar = $("#navbar"), toTop = $("#toTop");
  const links = $$(".nav__link");
  const sections = links.map((l) => $(l.getAttribute("href"))).filter(Boolean);
  let lastY = 0;

  const onScroll = () => {
    const y = window.scrollY;
    navbar.classList.toggle("is-scrolled", y > 40);
    // Hide navbar on scroll down, show on scroll up
    if (hasGSAP && !reduceMotion && !$("#nav").classList.contains("is-open")) {
      gsap.to(navbar, { yPercent: y > lastY && y > 300 ? -100 : 0, duration: .35, ease: "power2.out", overwrite: true });
    }
    lastY = y;
    toTop.classList.toggle("is-visible", y > 600);

    const current = sections.findLast?.((s) => s.offsetTop - 120 <= y) ?? sections[0];
    links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${current?.id}`));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
}

/* ---------- Generic filter-chip builder (closure keeps state) ---------- */
function createChips(container, options, onChange) {
  let active = "All";
  container.innerHTML = ["All", ...options]
    .map((o) => `<button type="button" class="chip ${o === "All" ? "is-active" : ""}" data-value="${o}" aria-pressed="${o === "All"}">${o}</button>`)
    .join("");
  container.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    active = chip.dataset.value;
    $$(".chip", container).forEach((c) => {
      const on = c === chip;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-pressed", String(on));
    });
    onChange(active);
  });
  return () => active;
}

const animateIn = (els) => {
  if (hasGSAP && !reduceMotion) gsap.from(els, { y: 24, opacity: 0, duration: .5, stagger: .06, ease: "power2.out" });
};

function initPrograms(programs) {
  const grid = $("#programGrid"), search = $("#programSearch"), empty = $("#programEmpty");
  const levels = [...new Set(programs.map(({ level }) => level))];
  let level = "All";

  const render = () => {
    const q = search.value.trim().toLowerCase();
    const list = programs.filter(({ title, faculty, level: l, desc }) =>
      (level === "All" || l === level) &&
      [title, faculty, l, desc].join(" ").toLowerCase().includes(q));
    grid.innerHTML = list.map(({ title, faculty, level: l, years, icon, desc }) => `
      <article class="card">
        <div class="card__icon" aria-hidden="true">${icon}</div>
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="card__meta"><span class="tag tag--gold">${l}</span><span class="tag">${faculty}</span><span class="tag">${years} yrs</span></div>
      </article>`).join("");
    empty.hidden = list.length > 0;
    animateIn(grid.children);
  };

  createChips($("#programFilters"), levels, (v) => { level = v; render(); });
  search.addEventListener("input", render);
  render();

  $("#program").insertAdjacentHTML("beforeend", programs.map(({ title }) => `<option>${title}</option>`).join(""));
}

function initNews(news) {
  const grid = $("#newsGrid");
  const fmt = new Intl.DateTimeFormat("en-PK", { day: "numeric", month: "short", year: "numeric" });
  const render = (cat) => {
    grid.innerHTML = news
      .filter(({ category }) => cat === "All" || category === cat)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map(({ title, category, date, img, text }) => `
        <article class="card news-card">
          <img src="${img}" alt="${title}" loading="lazy" />
          <div class="news-card__body">
            <div class="card__meta" style="margin-bottom:.6rem"><span class="tag tag--gold">${category}</span><time datetime="${date}">${fmt.format(new Date(date))}</time></div>
            <h3>${title}</h3>
            <p>${text}</p>
          </div>
        </article>`).join("");
    animateIn(grid.children);
  };
  createChips($("#newsFilters"), [...new Set(news.map((n) => n.category))], render);
  render("All");
}

/* ---------- Facilities ---------- */
function initFacilities(items) {
  $("#facilityGrid").innerHTML = items.map(({ title, icon, text }) => `
    <article class="card facility reveal-card">
      <div class="card__icon" aria-hidden="true">${icon}</div>
      <h3>${title}</h3><p>${text}</p>
    </article>`).join("");
}

/* ---------- Testimonials slider ---------- */
function initSlider(items) {
  const track = $("#sliderTrack"), dots = $("#sliderDots");
  if (!items.length) return;
  track.innerHTML = items.map(({ name, role, quote }) => `
    <div class="slide" role="group" aria-roledescription="slide">
      <blockquote>${quote}</blockquote>
      <cite>${name}<span>${role}</span></cite>
    </div>`).join("");
  dots.innerHTML = items.map((_, i) => `<button class="dot" aria-label="Go to testimonial ${i + 1}"></button>`).join("");

  let index = 0, timer;
  const go = (i) => {
    index = (i + items.length) % items.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    $$(".dot", dots).forEach((d, di) => d.classList.toggle("is-active", di === index));
  };
  const start = () => { if (!reduceMotion) timer = setInterval(() => go(index + 1), 5500); };
  const restart = () => { clearInterval(timer); start(); };

  $("#nextSlide").addEventListener("click", () => { go(index + 1); restart(); });
  $("#prevSlide").addEventListener("click", () => { go(index - 1); restart(); });
  $$(".dot", dots).forEach((d, i) => d.addEventListener("click", () => { go(i); restart(); }));
  const slider = $("#slider");
  slider.addEventListener("mouseenter", () => clearInterval(timer));
  slider.addEventListener("mouseleave", start);
  go(0); start();
}

/* ---------- Gallery + lightbox ---------- */
function initGallery(images) {
  const grid = $("#galleryGrid"), lb = $("#lightbox"), img = $("#lbImg"), cap = $("#lbCaption");
  grid.innerHTML = images.map(({ src, caption }, i) => `
    <button class="gallery__item" data-index="${i}" aria-label="Open image: ${caption}">
      <img src="${src.replace("w=1200", "w=600")}" alt="${caption}" loading="lazy" /><span>${caption}</span>
    </button>`).join("");

  let current = 0, lastFocus;
  const show = (i) => {
    current = (i + images.length) % images.length;
    const { src, caption } = images[current];
    img.src = src; img.alt = caption; cap.textContent = `${caption} (${current + 1}/${images.length})`;
  };
  const open = (i) => { lastFocus = document.activeElement; show(i); lb.hidden = false; document.body.style.overflow = "hidden"; $("#lbClose").focus(); };
  const close = () => { lb.hidden = true; document.body.style.overflow = ""; lastFocus?.focus(); };

  grid.addEventListener("click", (e) => { const b = e.target.closest(".gallery__item"); if (b) open(+b.dataset.index); });
  $("#lbClose").addEventListener("click", close);
  $("#lbPrev").addEventListener("click", () => show(current - 1));
  $("#lbNext").addEventListener("click", () => show(current + 1));
  lb.addEventListener("click", (e) => e.target === lb && close());
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    const actions = { Escape: close, ArrowLeft: () => show(current - 1), ArrowRight: () => show(current + 1) };
    actions[e.key]?.();
  });
}

/* ---------- FAQ accordion ---------- */
function initFAQ(faq) {
  const list = $("#faqList");
  list.innerHTML = faq.map(({ q, a }, i) => `
    <div class="accordion__item">
      <h3 style="margin:0;font-size:1rem;font-family:inherit">
        <button class="accordion__btn" aria-expanded="false" aria-controls="faq-${i}" id="faq-btn-${i}">${q}</button>
      </h3>
      <div class="accordion__panel" id="faq-${i}" role="region" aria-labelledby="faq-btn-${i}"><p>${a}</p></div>
    </div>`).join("");
  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".accordion__btn");
    if (!btn) return;
    const open = btn.getAttribute("aria-expanded") === "true";
    $$(".accordion__btn", list).forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      $(`#${b.getAttribute("aria-controls")}`).style.maxHeight = null;
    });
    if (!open) {
      btn.setAttribute("aria-expanded", "true");
      const panel = $(`#${btn.getAttribute("aria-controls")}`);
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* ---------- Form validation ---------- */
function initForm() {
  const form = $("#contactForm"), success = $("#formSuccess");
  const PK_PHONE = /^(?:\+92|0092|0)(?:3\d{2}|[1-9]\d{1,2})[\s-]?\d{6,8}$/;
  const rules = {
    name: (v) => (v.length < 3 ? "Please enter your full name (min 3 characters)." : /^[a-zA-Z\s.'-]+$/.test(v) ? "" : "Name can only contain letters."),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Please enter a valid email address."),
    phone: (v) => (PK_PHONE.test(v.replace(/\s+/g, " ")) ? "" : "Use a Pakistani number, e.g. +92 300 1234567 or 0300-1234567."),
    message: (v) => (v.length < 10 ? "Message should be at least 10 characters." : v.length > 1000 ? "Message is too long." : ""),
  };
  const check = (field) => {
    const input = form.elements[field];
    const msg = rules[field](input.value.trim());
    const wrap = input.closest(".field");
    wrap.classList.toggle("has-error", !!msg);
    $(".error", wrap).textContent = msg;
    input.setAttribute("aria-invalid", String(!!msg));
    return !msg;
  };
  Object.keys(rules).forEach((f) => form.elements[f].addEventListener("blur", () => check(f)));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = Object.keys(rules).map(check);
    if (results.includes(false)) {
      form.querySelector("[aria-invalid='true']")?.focus();
      success.hidden = true;
      return;
    }
    const { name } = Object.fromEntries(new FormData(form));
    success.textContent = `Thank you, ${name.split(" ")[0]}! Our admissions office will contact you within 2 working days.`;
    success.hidden = false;
    form.reset();
    if (hasGSAP && !reduceMotion) gsap.from(success, { y: 10, opacity: 0, duration: .4 });
  });
}

/* ---------- Counters ---------- */
function initCounters() {
  const nums = $$(".stat__num");
  const setFinal = (el) => (el.textContent = (+el.dataset.target).toLocaleString("en-PK"));
  if (!hasGSAP || reduceMotion) return nums.forEach(setFinal);
  nums.forEach((el) => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: +el.dataset.target, duration: 2, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => (el.textContent = Math.round(obj.val).toLocaleString("en-PK")),
    });
  });
}

/* ---------- GSAP animations ---------- */
function initAnimations() {
  const preloader = $("#preloader");
  if (!hasGSAP || reduceMotion) { preloader.remove(); return; }
  gsap.registerPlugin(ScrollTrigger);

  // Preloader → hero timeline
  const tl = gsap.timeline();
  tl.to(".preloader__bar span", { width: "100%", duration: .9, ease: "power2.inOut" })
    .to(preloader, { yPercent: -100, duration: .7, ease: "power4.inOut" })
    .set(preloader, { display: "none" })
    .from(".hero__eyebrow", { y: 20, opacity: 0, duration: .5 }, "-=.2")
    .from(".hero__title", { y: 60, opacity: 0, duration: .8, ease: "power3.out" }, "-=.2")
    .from(".hero__text", { y: 30, opacity: 0, duration: .6 }, "-=.4")
    .from(".hero__cta .btn", { y: 20, opacity: 0, stagger: .12, duration: .5 }, "-=.3")
    .from(".navbar", { y: -40, opacity: 0, duration: .5 }, "-=.5");

  // Hero parallax
  gsap.to("#heroBg", { yPercent: 18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // Section reveals
  $$(".reveal").forEach((el) =>
    gsap.from(el, { y: 40, opacity: 0, duration: .8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }));
  $$(".section__head").forEach((el) =>
    gsap.from(el.children, { y: 30, opacity: 0, stagger: .1, duration: .7, scrollTrigger: { trigger: el, start: "top 85%" } }));
  gsap.from(".reveal-card", { y: 40, opacity: 0, stagger: .08, duration: .6, scrollTrigger: { trigger: "#facilityGrid", start: "top 85%" } });
  gsap.from(".gallery__item", { scale: .92, opacity: 0, stagger: .08, duration: .6, scrollTrigger: { trigger: "#galleryGrid", start: "top 85%" } });
  gsap.from(".stat", { y: 30, opacity: 0, stagger: .1, scrollTrigger: { trigger: ".stats", start: "top 85%" } });
}

/* ---------- Boot ---------- */
(async function init() {
  $("#year").textContent = new Date().getFullYear();
  initMenu();
  initScrollUI();
  initForm();
  const { programs, news, facilities, testimonials, gallery, faq } = DATA;
  initPrograms(programs);
  initNews(news);
  initFacilities(facilities);
  initSlider(testimonials);
  initGallery(gallery);
  initFAQ(faq);
  initAnimations();
  initCounters();
  if (hasGSAP) ScrollTrigger?.refresh();
})();
