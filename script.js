(function () {
  'use strict';

  var ICONS = {
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon" aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>',
    lock: '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
    gitlab: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="11" width="11" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"></path></svg>',
    play: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>',
    download: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>',
    external: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>',
    workflow: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-workflow" aria-hidden="true"><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg>',
    smartphone: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone" aria-hidden="true"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>',
    monitor: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor" aria-hidden="true"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>',
    appWindow: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-app-window" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>',
    blocks: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blocks" aria-hidden="true"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect x="14" y="2" width="8" height="8" rx="1"></rect></svg>',
    server: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-server" aria-hidden="true"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>',
    chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>',
    chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>',
    whatsapp: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>',
    zoomIn: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-in" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>',
    zoomOut: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-out" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>',
    maximize: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>',
    maximize2: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize2 lucide-maximize-2" aria-hidden="true"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>',
    chevronLeftLg: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>',
    chevronRightLg: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>'
  };

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;

  function isDark() {
    return root.classList.contains('dark');
  }

  function updateThemeIcons() {
    var dark = isDark();
    var icon = dark ? ICONS.sun : ICONS.moon;
    ['themeToggle', 'themeToggleMobile'].forEach(function (id) {
      var btn = document.getElementById(id);
      if (btn) btn.innerHTML = icon;
    });
  }

  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) {}
    if (stored === 'dark') root.classList.add('dark');
    else if (stored === 'light') root.classList.remove('dark');
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.classList.add('dark');
    updateThemeIcons();
  }

  function refreshGalleryImages() {
    var dark = isDark();
    document.querySelectorAll('.carousel-frame img[data-s], .diagram-img[data-s], #lightboxImg[data-s]').forEach(function (img) {
      var darkSrc = img.getAttribute('data-d');
      var lightSrc = img.getAttribute('data-s');
      var next = (dark && darkSrc) ? darkSrc : lightSrc;
      if (img.getAttribute('src') !== next) img.setAttribute('src', next);
    });
  }

  function toggleTheme() {
    root.classList.toggle('dark');
    try { localStorage.setItem('theme', isDark() ? 'dark' : 'light'); } catch (e) {}
    updateThemeIcons();
    refreshGalleryImages();
  }

  initTheme();
  ['themeToggle', 'themeToggleMobile'].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', toggleTheme);
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var navbar = document.getElementById('navbar');
  var progress = document.getElementById('scrollProgress');
  var lastY = 0;
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    if (y > 140 && y > lastY + 4) navbar.classList.add('hidden');
    else if (y < lastY - 4 || y < 140) navbar.classList.remove('hidden');
    lastY = y;
    var max = document.body.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');

  function closeMenu() {
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    menuToggle.innerHTML = ICONS.menu;
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', function () {
    var open = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuToggle.innerHTML = open ? ICONS.close : ICONS.menu;
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  window.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var hash = a.getAttribute('href');
    if (!hash || hash === '#') {
      if (hash === '#') { e.preventDefault(); window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' }); }
      return;
    }
    var el = document.getElementById(hash.slice(1));
    if (!el) return;
    e.preventDefault();
    closeMenu();
    el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    history.pushState(null, '', hash);
    window.setTimeout(function () {
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    }, 450);
  });

  document.getElementById('toTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  });

  var spyLinks = document.querySelectorAll('[data-spy]');
  var spyMap = {};
  spyLinks.forEach(function (l) { spyMap[l.getAttribute('data-spy')] = l; });
  var spyObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var id = en.target.id;
      spyLinks.forEach(function (l) { l.classList.remove('active'); });
      if (spyMap[id]) spyMap[id].classList.add('active');
      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  ['about', 'skills', 'experience', 'projects', 'education', 'contact'].forEach(function (id) {
    var s = document.getElementById(id);
    if (s) spyObserver.observe(s);
  });

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('visible'); revealObserver.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });

  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      counterObserver.unobserve(en.target);
      var target = parseInt(en.target.getAttribute('data-target'), 10) || 0;
      if (prefersReduced) { en.target.textContent = target; return; }
      var start = null;
      var dur = 1200;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        en.target.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach(function (el) { counterObserver.observe(el); });

  var barObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.style.width = en.target.getAttribute('data-pct'); barObserver.unobserve(en.target); }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.bar span').forEach(function (el) { barObserver.observe(el); });

  (function scramble() {
    var el = document.getElementById('scramble');
    if (!el || prefersReduced) return;
    var text = el.textContent;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·';
    var iteration = 0;
    var last = performance.now();
    function tick(now) {
      if (now - last < 30) { requestAnimationFrame(tick); return; }
      last = now;
      el.textContent = text.split('').map(function (ch, i) {
        if (ch === ' ') return ' ';
        if (i < iteration) return text[i];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      if (iteration >= text.length) return;
      iteration += 0.5;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  })();


  var IMG = 'public/projects/';

  var PROJECTS = [
    {
      id: 'keystone',
      title: 'Keystone',
      tagline: 'Self-Hosted Software Licensing & Entitlement Platform',
      description: 'Keystone is a self-hosted software licensing platform for independent software vendors — an alternative to SaaS license services that keeps licensing data, customer records, and cryptographic signing keys on the vendor\u2019s own infrastructure. A Go backend issues, validates, renews, and revokes licenses across perpetual, subscription, trial, and node-locked models, signing offline license packages with Ed25519 so validation works in fully air-gapped environments. Node-locked licenses bind to an irreversible SHA-256 device fingerprint, and single-use authorization leases plus clock-rollback detection close anti-replay and tampering gaps. The platform ships a React web dashboard and a Kotlin/Compose Multiplatform desktop console, multi-tenant organizations with RBAC, an immutable audit log, HMAC-signed webhooks, analytics, and native SDKs in six languages — Go, Kotlin, Java, JavaScript/TypeScript, Python, and .NET — that implement continuous license enforcement on the client.',
      tech: ['Go', 'PostgreSQL', 'Redis', 'SQLC', 'Ed25519', 'React 19', 'Kotlin', 'Compose Multiplatform'],
      stats: [
        '6 native SDKs — Go, Kotlin, Java, JS/TS, Python, .NET — all MIT-licensed',
        'Ed25519 offline validation, SHA-256 device fingerprinting, anti-replay leases',
        'Go backend on PostgreSQL 16 + Redis 7 with SQLC, Stripe billing integration',
        'Two management consoles: React web dashboard + Compose Multiplatform desktop app'
      ],
      repos: [
        { name: 'Go SDK', href: 'https://gitlab.com/oc-lab/keystone/go-sdk', desc: 'MIT · go get' },
        { name: 'Kotlin SDK', href: 'https://gitlab.com/oc-lab/keystone/kotlin-sdk', desc: 'MIT · io.gitlab.oc-lab:keystone-kotlin' },
        { name: 'Java SDK', href: 'https://gitlab.com/oc-lab/keystone/java-sdk', desc: 'MIT · io.gitlab.oc-lab:keystone-java' },
        { name: 'JS / TS SDK', href: 'https://gitlab.com/oc-lab/keystone/js-sdk', desc: 'MIT · @oc-lab/keystone-js' },
        { name: 'Python SDK', href: 'https://gitlab.com/oc-lab/keystone/python-sdk', desc: 'MIT · keystone-licensing-sdk' },
        { name: '.NET SDK', href: 'https://gitlab.com/oc-lab/keystone/dotnet-sdk', desc: 'MIT · Keystone.SDK' },
        { name: 'Landing Page', href: 'https://gitlab.com/oc-lab/keystone/landing-page', desc: 'React 19 · Vite' },
        { name: 'Public Docs', href: 'https://gitlab.com/oc-lab/keystone/keystone-docs-public', desc: 'HTML · OpenAPI reference' },
        { name: 'Backend', priv: true, desc: 'Go · Gin · PostgreSQL · Redis' },
        { name: 'Web Dashboard', priv: true, desc: 'React 19 · TanStack' },
        { name: 'Desktop Console', priv: true, desc: 'Kotlin · Compose Multiplatform' }
      ],
      demo: [
        { label: 'Landing Page', href: 'https://keystone-licensing.vercel.app/' },
        { label: 'Documentation', href: 'https://keystonedocs.vercel.app/' },
        { label: 'Web Dashboard', href: 'https://keystone-rw8j.onrender.com' },
        { label: '▶ Web Walkthrough', href: 'https://youtu.be/TwMBh8-0Tss' },
        { label: '▶ Desktop Demo', href: 'https://youtu.be/6v3TJdxH0iE' }
      ],
      featured: true,
      platforms: [
        {
          label: 'System', kind: 'arch',
          tagline: 'Self-hosted core + two consoles + six enforcement SDKs',
          highlights: ['Go / Gin core: REST /v1, RBAC, rate limiting, webhook dispatcher', 'Ed25519 offline validation — licenses verify in fully air-gapped environments', 'Anti-replay authorization leases and clock-rollback detection', 'PostgreSQL 16 control plane; Redis 7 validation cache', 'Web dashboard and desktop console talk to the same API'],
          tech: ['Go', 'PostgreSQL', 'Redis', 'Ed25519', 'React 19', 'Compose Multiplatform'],
          meta: '6 SDK languages · 2 management consoles · 1 REST API defined by OpenAPI',
          diagram: { id: 'keystone-system', label: 'Keystone end-to-end architecture', w: 1737, h: 1243, s: 'assets/diagrams/keystone-system-light.svg', d: 'assets/diagrams/keystone-system-dark.svg' }
        },
        {
          label: 'Web Dashboard', kind: 'shots', portrait: false,
          tagline: 'Management console — React 19, TypeScript, TanStack Router & Query',
          highlights: ['Dashboard KPIs and full license lifecycle: issue, activate, renew, revoke', 'Five-tab analytics: revenue estimates, zero-filled series, trends, usage, event feeds', 'Scoped ks_live_… API keys, HMAC-signed webhooks, immutable audit log with CSV export', 'Multi-tenant organizations with RBAC (read_only / member / admin)', 'Type-safe data layer with TanStack Query; Vitest, Testing Library & Playwright E2E', 'Dark/light mode driven by CSS-variable design tokens'],
          tech: ['React 19', 'TypeScript', 'TanStack Router', 'TanStack Query', 'Tailwind CSS', 'Recharts'],
          meta: 'v1.0.0 · Render blueprint · GitLab CI with E2E coverage',
          shots: [
            { s: 'keystone-web-dashboard.png', d: 'keystone-web-dashboard-dark.png', a: 'Keystone dashboard' },
            { s: 'keystone-web-dashboard-more.png', d: 'keystone-web-dashboard-more-dark.png', a: 'Keystone dashboard KPI modules' },
            { s: 'keystone-web-analytics.png', d: 'keystone-web-analytics-dark.png', a: 'Licensing analytics' },
            { s: 'keystone-web-products.png', d: 'keystone-web-products-dark.png', a: 'Product & entitlement management' },
            { s: 'keystone-web-create-product.png', d: 'keystone-web-create-product-dark.png', a: 'Create product' },
            { s: 'keystone-web-view-product.png', d: 'keystone-web-view-product-dark.png', a: 'Product details' },
            { s: 'keystone-web-licenses.png', d: 'keystone-web-licenses-dark.png', a: 'License management' },
            { s: 'keystone-web-generate-license.png', d: 'keystone-web-generate-license-dark.png', a: 'Generate license' },
            { s: 'keystone-web-view-license.png', d: 'keystone-web-view-license-dark.png', a: 'License details' },
            { s: 'keystone-web-customers.png', d: 'keystone-web-customers-dark.png', a: 'Customer management' },
            { s: 'keystone-web-new-customer.png', d: 'keystone-web-new-customer-dark.png', a: 'New customer' },
            { s: 'keystone-web-view-customer.png', d: 'keystone-web-view-customer-dark.png', a: 'Customer details' },
            { s: 'keystone-web-api-keys.png', d: 'keystone-web-api-keys-dark.png', a: 'Scoped API keys' },
            { s: 'keystone-web-create-api-key.png', d: 'keystone-web-create-api-key-dark.png', a: 'Create API key' },
            { s: 'keystone-web-api-key-details.png', d: 'keystone-web-api-key-details-dark.png', a: 'API key details' },
            { s: 'keystone-web-sdks.png', d: 'keystone-web-sdks-dark.png', a: 'SDK integration & workspace management' },
            { s: 'keystone-web-webhooks.png', d: 'keystone-web-webhooks-dark.png', a: 'Webhook endpoints' },
            { s: 'keystone-web-create-webhook.png', d: 'keystone-web-create-webhook-dark.png', a: 'Create webhook endpoint' },
            { s: 'keystone-web-webhook-details.png', d: 'keystone-web-webhook-details-dark.png', a: 'Webhook delivery history' },
            { s: 'keystone-web-audit-logs.png', d: 'keystone-web-audit-logs-dark.png', a: 'Immutable audit log' },
            { s: 'keystone-web-settings.png', d: 'keystone-web-settings-dark.png', a: 'Workspace settings' },
            { s: 'keystone-web-organization.png', d: 'keystone-web-organization-dark.png', a: 'Organization management' }
          ]
        },
        {
          label: 'Desktop Console', kind: 'shots', portrait: false,
          tagline: 'Native desktop console — Kotlin & Compose Multiplatform',
          highlights: ['Offline-resilient: embedded SQLite cache, zero-latency startup, auto re-sync', 'Full license lifecycle alongside customer & device fingerprint management', 'Webhook endpoint management with per-delivery retry history', 'Material 3 Keystone design system; runs on Windows, macOS, and Linux', 'ProGuard-obfuscated release pipeline and standalone OS installers', 'JUnit 5, MockWebServer, and Compose UI test coverage in CI'],
          tech: ['Kotlin', 'Compose Multiplatform', 'SQLDelight', 'OkHttp', 'Material 3'],
          meta: 'v1.0.0 · built on the official Kotlin SDK (keystone-kotlin)',
          shots: [
            { s: 'keystone-desktop-dashboard.png', d: 'keystone-desktop-dashboard-dark.png', a: 'Keystone dashboard' },
            { s: 'keystone-desktop-products.png', d: 'keystone-desktop-products-dark.png', a: 'Desktop product management' },
            { s: 'keystone-desktop-create-product.png', d: 'keystone-desktop-create-product-dark.png', a: 'Create product' },
            { s: 'keystone-desktop-licenses.png', d: 'keystone-desktop-licenses-dark.png', a: 'Desktop license management' },
            { s: 'keystone-desktop-license-details.png', d: 'keystone-desktop-license-details-dark.png', a: 'License details' },
            { s: 'keystone-desktop-issue-license.png', d: 'keystone-desktop-issue-license-dark.png', a: 'Issue license' },
            { s: 'keystone-desktop-customers.png', d: 'keystone-desktop-customers-dark.png', a: 'Desktop customer & device management' },
            { s: 'keystone-desktop-add-customer.png', d: 'keystone-desktop-add-customer-dark.png', a: 'Add customer' },
            { s: 'keystone-desktop-devices.png', d: 'keystone-desktop-devices-dark.png', a: 'Device fingerprint management' },
            { s: 'keystone-desktop-api-keys.png', d: 'keystone-desktop-api-keys-dark.png', a: 'Desktop API key management' },
            { s: 'keystone-desktop-create-api-key.png', d: 'keystone-desktop-create-api-key-dark.png', a: 'Create API key' },
            { s: 'keystone-desktop-sdks.png', d: 'keystone-desktop-sdks-dark.png', a: 'Desktop SDK & workspace management' },
            { s: 'keystone-desktop-audit-logs.png', d: 'keystone-desktop-audit-logs-dark.png', a: 'Immutable audit log' },
            { s: 'keystone-desktop-webhooks.png', d: 'keystone-desktop-webhooks-dark.png', a: 'Webhook endpoints' },
            { s: 'keystone-desktop-add-webhook.png', d: 'keystone-desktop-add-webhook-dark.png', a: 'Add webhook endpoint' },
            { s: 'keystone-desktop-webhook-details.png', d: 'keystone-desktop-webhook-details-dark.png', a: 'Webhook delivery history' },
            { s: 'keystone-desktop-settings.png', d: 'keystone-desktop-settings-dark.png', a: 'Application settings' },
            { s: 'keystone-desktop-organizations.png', d: 'keystone-desktop-organizations-dark.png', a: 'Organization management' }
          ]
        },
        {
          label: 'Backend', kind: 'arch',
          tagline: 'Go / Gin licensing core — private repository',
          highlights: ['REST /v1 with JWT + API-key auth, RBAC, and rate limiting', 'Ed25519 validation engine — offline licensing and anti-replay leases', 'Webhook dispatcher with retry and delivery history (HMAC-SHA256 signed)', 'PostgreSQL 16 control plane; Redis 7 validation cache', 'Stripe billing integration'],
          tech: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'SQLC', 'Ed25519', 'OpenTelemetry'],
          meta: 'Private repository · deployed with Docker',
          diagram: { id: 'keystone-backend', label: 'Keystone Go backend architecture', w: 628, h: 1027, s: 'assets/diagrams/keystone-backend-light.svg', d: 'assets/diagrams/keystone-backend-dark.svg' }
        },
        {
          label: 'SDK Ecosystem', kind: 'arch',
          tagline: '6 native SDKs — Go, Kotlin, Java, JS/TS, Python, .NET',
          highlights: ['Runtime enforcement: validate, activate, heartbeat, feature & permission checks', 'Offline Ed25519 signature verification + challenge-response proof of possession', 'Automatic lease renewal, clock-rollback detection, bounded offline grace', 'Device fingerprinting via SHA-256 over stable machine identifiers', 'Typed error hierarchies, automatic retries, validation caching', 'JS/TS SDK: zero runtime dependencies (native fetch + WebCrypto)'],
          tech: ['Go', 'Kotlin', 'Java', 'TypeScript', 'Python', '.NET'],
          meta: '6 languages · MIT license · one consistent contract',
          diagram: { id: 'keystone-sdk', label: 'Keystone client SDK architecture', w: 1017, h: 493, s: 'assets/diagrams/keystone-sdk-light.svg', d: 'assets/diagrams/keystone-sdk-dark.svg' }
        }
      ]
    },
    {
      id: 'productivityx',
      title: 'ProductivityX',
      tagline: 'Offline-First Productivity Ecosystem — Android, Desktop & Web',
      description: 'ProductivityX is a full-stack productivity system that unifies notes, tasks, calendar, a Pomodoro focus timer, and an AI assistant into a single offline-first workspace. A Java 21 / Spring Boot 4 backend serves three clients — native Android (Kotlin + Jetpack Compose), desktop (Kotlin + Compose Multiplatform), and web (React 19 + TypeScript) — each writing to an encrypted local database first and syncing silently through a cursor-based delta-sync protocol backed by an outbox pattern. The backend layers in JWT token rotation with device binding, Redis-backed rate limiting and idempotency, STOMP WebSocket push, Git-style three-way merge for note conflicts, and PostgreSQL tsvector search. The AI assistant streams over SSE from 11 providers and can act on your own data, creating notes, tasks, and events directly from the chat.',
      tech: ['Kotlin', 'Jetpack Compose', 'Compose Multiplatform', 'React 19', 'TypeScript', 'Spring Boot 4', 'PostgreSQL', 'Redis'],
      stats: [
        'Per-domain Spring Boot 4 backend with one canonical store',
        'Offline-first delta sync with outbox pattern and Git-style three-way note merge',
        'AI assistant wired to 11 providers, streaming responses over SSE',
        'Encrypted local storage on every client; 52 locale packs incl. RTL Arabic & Urdu'
      ],
      repos: [
        { name: 'Android', href: 'https://gitlab.com/oc-lab/productivityx/android', desc: 'Kotlin · Jetpack Compose · Room + SQLCipher' },
        { name: 'Web', href: 'https://gitlab.com/oc-lab/productivityx/web', desc: 'React 19 · TypeScript · Vite · TanStack Query' },
        { name: 'Desktop', href: 'https://gitlab.com/oc-lab/productivityx/desktop', desc: 'Kotlin · Compose Multiplatform · SQLDelight' },
        { name: 'Backend', href: 'https://gitlab.com/oc-lab/productivityx/backend', desc: 'Java 21 · Spring Boot 4 · PostgreSQL 16 · Redis 7' }
      ],
      demo: [
        { label: 'Live Web App', href: 'https://productivityx-web.vercel.app/login' },
        { label: '▶ Android Demo', href: 'https://youtu.be/x2fKChXLoBs' },
        { label: '▶ Desktop Demo', href: 'https://youtu.be/7x24odrZMOw' },
        { label: '▶ Web Demo', href: 'https://youtu.be/-_9rCq_pV5U' }
      ],
      featured: true,
      platforms: [
        {
          label: 'System', kind: 'arch',
          tagline: 'One offline-first core, three native clients, one Spring Boot backend',
          highlights: ['Every client writes to an encrypted local store first, then syncs via cursor-based delta protocol', 'Outbox pattern queues mutations; STOMP WebSocket broadcasts changes to connected devices', 'Backend owns the canonical copy — PostgreSQL 16 with versioned Flyway migrations', 'Redis 7 for rate limiting, idempotency, and WebSocket deduplication', 'AI proxy streams SSE from 11 providers; transactional email + FCM push out of the box'],
          tech: ['Kotlin', 'Compose', 'React 19', 'Spring Boot 4', 'PostgreSQL', 'Redis', 'WebSocket'],
          meta: '1,178 source files · 52 locale packs · 3 platforms at feature parity',
          diagram: { id: 'px-system', label: 'ProductivityX end-to-end architecture', w: 630, h: 434, s: 'assets/diagrams/px-system-light.svg', d: 'assets/diagrams/px-system-dark.svg' }
        },
        {
          label: 'Android', kind: 'shots', portrait: true,
          tagline: 'Native mobile client — Kotlin & Jetpack Compose, Material 3',
          highlights: ['Clean Architecture with Hilt DI: 94 use cases across 13 feature modules', 'Offline-first Room database encrypted with SQLCipher (AES-256), keys in Android Keystore', 'Outbox sync worker with exponential backoff + cursor-based delta sync', 'Kanban boards, subtasks, and RRULE-recurring calendar events', 'Pomodoro foreground service, 3 widgets, 3 quick-settings tiles', 'AI chat with SSE streaming, voice input, 18 languages incl. RTL'],
          tech: ['Kotlin', 'Jetpack Compose', 'Room', 'SQLCipher', 'Hilt', 'Retrofit', 'WorkManager'],
          meta: '386 Kotlin files · 32 ViewModels · 45 nav destinations · 94 use cases',
          shots: [
            { s: 'px-android-dashboard.png', d: 'px-android-dashboard-dark.png', a: 'Android dashboard' },
            { s: 'px-android-tasks-board.png', d: 'px-android-tasks-board-dark.png', a: 'Android task board' },
            { s: 'px-android-tasks-list.png', d: 'px-android-tasks-list-dark.png', a: 'Android tasks list' },
            { s: 'px-android-tasks-calendar.png', d: 'px-android-tasks-calendar-dark.png', a: 'Android tasks calendar' },
            { s: 'px-android-tasks-statistics.png', d: 'px-android-tasks-statistics-dark.png', a: 'Android task statistics' },
            { s: 'px-android-tasks-timeline.png', d: 'px-android-tasks-timeline-dark.png', a: 'Android tasks timeline' },
            { s: 'px-android-add-task.png', d: 'px-android-add-task-dark.png', a: 'Android task creation' },
            { s: 'px-android-add-event.png', d: 'px-android-add-event-dark.png', a: 'Android calendar event creation' },
            { s: 'px-android-events-month.png', d: null, a: 'Android month calendar view' },
            { s: 'px-android-notes-rows.png', d: 'px-android-notes-rows-dark.png', a: 'Android notes grid' },
            { s: 'px-android-note-editor.png', d: 'px-android-note-editor-dark.png', a: 'Android note editor' },
            { s: 'px-android-pomodoro.png', d: 'px-android-pomodoro-dark.png', a: 'Android Pomodoro timer' },
            { s: 'px-android-pomodoro-settings.png', d: 'px-android-pomodoro-settings-dark.png', a: 'Android Pomodoro settings' },
            { s: 'px-android-ai-chat.png', d: 'px-android-ai-chat-dark.png', a: 'Android AI assistant creating notes, tasks & events from chat' },
            { s: 'px-android-ai-settings-dark.png', d: null, a: 'Android AI provider & model settings' },
            { s: 'px-android-profile-settings.png', d: 'px-android-profile-settings-dark.png', a: 'Android profile & data sync / export' },
            { s: 'px-android-search.png', d: 'px-android-search-dark.png', a: 'Android search results' }
          ]
        },
        {
          label: 'Web', kind: 'shots', portrait: false,
          tagline: 'SPA — React 19 + TypeScript (strict), Vite & Tailwind CSS',
          highlights: ['TipTap rich-text editor, dnd-kit Kanban, and a global CmdK command palette', 'Delta sync polled every 30s and on window focus; single-flight 401 token refresh', 'Pomodoro timer in a Web Worker with charts and a weekly focus heatmap', 'RTL-aware i18n across 15 locales; 8 accent palettes, 3 density modes', 'AI assistant: 11 providers, 6 personas, action blocks that create content', 'Lazy-loaded pages with error boundaries, TanStack Query server state'],
          tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'TipTap'],
          meta: '239 TS files · 171 components · 26 routes · 15 locales',
          shots: [
            { s: 'px-web-dashboard.png', d: 'px-web-dashboard-dark.png', a: 'Web dashboard' },
            { s: 'px-web-tasks-board.png', d: 'px-web-tasks-board-dark.png', a: 'Web task board' },
            { s: 'px-web-tasks-list.png', d: 'px-web-tasks-list-dark.png', a: 'Web tasks list' },
            { s: 'px-web-tasks-calendar.png', d: 'px-web-tasks-calendar-dark.png', a: 'Web tasks calendar' },
            { s: 'px-web-notes-list.png', d: 'px-web-notes-dark.png', a: 'Web notes list' },
            { s: 'px-web-note-editor.png', d: 'px-web-note-editor-dark.png', a: 'Web note editor' },
            { s: 'px-web-add-task.png', d: 'px-web-add-task-dark.png', a: 'Web task creation' },
            { s: 'px-web-add-event.png', d: 'px-web-add-event-dark.png', a: 'Web event creation' },
            { s: 'px-web-calendar-month.png', d: 'px-web-calendar-month-dark.png', a: 'Web month calendar' },
            { s: 'px-web-pomodoro.png', d: 'px-web-pomodoro-dark.png', a: 'Web Pomodoro timer' },
            { s: 'px-web-pomodoro-history.png', d: 'px-web-pomodoro-history-dark.png', a: 'Web focus history & stats' },
            { s: 'px-web-search.png', d: 'px-web-search-dark.png', a: 'Web search results' },
            { s: 'px-web-ai.png', d: 'px-web-ai-dark.png', a: 'Web AI assistant' },
            { s: 'px-web-ai-settings.png', d: 'px-web-ai-settings-dark.png', a: 'Web AI provider settings' },
            { s: 'px-web-settings.png', d: 'px-web-settings-dark.png', a: 'Web general settings' }
          ]
        },
        {
          label: 'Desktop', kind: 'shots', portrait: false,
          tagline: 'Native desktop app — Kotlin & Compose Multiplatform',
          highlights: ['Keyboard-first: global CmdK/Ctrl+K palette, tab switching, system tray', 'SQLDelight local DB with SQLite FTS5 full-text search over notes & tasks', 'Encrypted .pxbackup export/import — AES-256-GCM, PBKDF2-SHA256, 600k iterations', '36 screens, 30 ViewModels, MVI-style state on a Clean Architecture shell', '6 accent palettes, 19 languages incl. RTL Arabic & Urdu', 'Packaged installers: DEB, RPM, AppImage, MSI, EXE + uber-JAR'],
          tech: ['Kotlin', 'Compose Multiplatform', 'SQLDelight', 'Ktor', 'Koin'],
          meta: '374 Kotlin files · 30 ViewModels · 36 screens · 13 tables',
          shots: [
            { s: 'px-desktop-dashboard.png', d: 'px-desktop-dashboard-dark.png', a: 'Desktop dashboard' },
            { s: 'px-desktop-tasks.png', d: 'px-desktop-tasks-dark.png', a: 'Desktop tasks list' },
            { s: 'px-desktop-notes.png', d: null, a: 'Desktop notes list' },
            { s: 'px-desktop-calendar.png', d: 'px-desktop-calendar-dark.png', a: 'Desktop calendar week' },
            { s: 'px-desktop-calendar-agenda.png', d: null, a: 'Desktop calendar agenda' },
            { s: 'px-desktop-new-task.png', d: null, a: 'Desktop task creation' },
            { s: 'px-desktop-new-event.png', d: null, a: 'Desktop event creation' },
            { s: 'px-desktop-notes-tags.png', d: null, a: 'Desktop note tags' },
            { s: 'px-desktop-pomodoro.png', d: 'px-desktop-pomodoro-dark.png', a: 'Desktop Pomodoro timer' },
            { s: 'px-desktop-pomodoro-states.png', d: null, a: 'Desktop Pomodoro states' },
            { s: 'px-desktop-pomodoro-history.png', d: null, a: 'Desktop Pomodoro history' },
            { s: 'px-desktop-search.png', d: 'px-desktop-search-dark.png', a: 'Desktop full-text search' },
            { s: 'px-desktop-ai-chat.png', d: null, a: 'Desktop AI chat with model & persona picker' },
            { s: 'px-desktop-ai-response.png', d: null, a: 'Desktop AI assistant response' },
            { s: 'px-desktop-ai-conversations.png', d: null, a: 'Desktop AI conversations' },
            { s: 'px-desktop-ai-settings.png', d: null, a: 'Desktop AI settings' },
            { s: 'px-desktop-settings.png', d: null, a: 'Desktop settings & profile' }
          ]
        },
        {
          label: 'Backend', kind: 'arch',
          tagline: 'Spring Boot 4 API — per-domain modules, one canonical store',
          highlights: ['JWT rotation with device binding; Redis-backed rate limiting and idempotency', 'STOMP WebSocket broker pushes changes to all connected clients', 'PostgreSQL 16 with 19 versioned Flyway migrations and tsvector search', 'Git-style three-way merge resolves concurrent note edits', 'Scheduled jobs for token cleanup and trash purges', 'AI proxy streaming SSE; Brevo transactional email; Firebase FCM push'],
          tech: ['Java 21', 'Spring Boot 4', 'PostgreSQL', 'Redis', 'STOMP', 'SSE', 'Flyway'],
          meta: '19 migrations · 3 sync domains · one canonical store',
          diagram: { id: 'px-backend', label: 'ProductivityX Spring Boot backend architecture', w: 920, h: 994, s: 'assets/diagrams/px-backend-light.svg', d: 'assets/diagrams/px-backend-dark.svg' }
        }
      ]
    },
    {
      id: 'wellloganalyzer',
      title: 'WellLogAnalyzer',
      tagline: 'Drilling Hydraulics & Well Engineering Workstation',
      description: 'WellLogAnalyzer is a petroleum engineering application that pairs an offline-first desktop workstation with a Go-based, multi-tenant cloud backend. Its hydraulics engine implements SPE and API RP 13D industry formulations — equivalent circulating density, annular pressure loss, bit hydraulics, jet impact force, surge/swab, and cuttings transport — across three rheology models (Bingham Plastic, Power Law, Herschel-Bulkley). Engineers build validated well profiles from drill strings, bit parameters, deviation surveys, fluid properties, and formation zones, then run single or batch what-if simulations rendered as interactive Lets-Plot 2D charts and a hardware-accelerated JavaFX 3D wellbore viewer. Data is stored in an encrypted SQLCipher vault with Argon2id key derivation and synchronized through a vector-clock outbox engine to a Go microservices backend (API gateway, WebSocket presence hub, async worker), so field engineers can operate fully offline and reconcile on reconnection. Automated Word, Excel, and PDF engineering reports export directly from the app.',
      tech: ['Kotlin', 'Compose Multiplatform', 'Go', 'JavaFX 3D', 'Lets-Plot', 'SQLCipher', 'MongoDB', 'Redis'],
      stats: [
        'SPE / API RP 13D hydraulics engine — ECD, bit hydraulics, surge/swab, cuttings transport',
        'Three rheology models: Bingham Plastic, Power Law, Herschel-Bulkley',
        'Vector-clock outbox sync to Go microservices (MongoDB, Redis, MinIO)',
        'Encrypted offline vault (SQLCipher + Argon2id), 3D viewer, Word/Excel/PDF reports'
      ],
      repos: [
        { name: 'Desktop', href: 'https://gitlab.com/oc-lab/wellloganalyzer/desktop', desc: 'Kotlin · Compose Multiplatform · SQLCipher' },
        { name: 'Backend', href: 'https://gitlab.com/oc-lab/wellloganalyzer/backend', desc: 'Go microservices · MongoDB · Redis · MinIO' }
      ],
      demo: [
        { label: '▶ Demo Video', href: 'https://youtu.be/RcGXi3ETzPs' },
        { label: '⤓ Release v1.0.0', href: 'https://gitlab.com/oc-lab/wellloganalyzer/desktop/-/releases/v1.0.0' }
      ],
      featured: true,
      platforms: [
        {
          label: 'System', kind: 'arch',
          tagline: 'Offline-first desktop engine + Go cloud backend',
          highlights: ['Encrypted local vault (SQLDelight + SQLCipher + Argon2id) on remote rigs offline', 'Vector-clock outbox engine reconciles changes with sub-millisecond conflict resolution', 'API gateway, WebSocket presence hub, and async worker in Go', 'MongoDB multi-tenant store, Redis presence/cache, MinIO report storage', 'Prometheus + Grafana observability across the stack'],
          tech: ['Kotlin', 'Compose Multiplatform', 'Go', 'MongoDB', 'Redis', 'MinIO', 'OpenTelemetry'],
          meta: 'API RP 13D · Bourgoyne et al. · 3 rheology models',
          diagram: { id: 'wla-system', label: 'WellLogAnalyzer end-to-end architecture', w: 808, h: 1683, s: 'assets/diagrams/wla-system-light.svg', d: 'assets/diagrams/wla-system-dark.svg' }
        },
        {
          label: 'Desktop', kind: 'shots', portrait: false,
          tagline: 'Native workstation — Kotlin & Compose Multiplatform',
          highlights: ['Hydraulics engine: ECD, annular pressure loss, bit hydraulics, surge/swab, cuttings transport', 'Bingham Plastic, Power Law, and Herschel-Bulkley rheology models', 'JavaFX 3D wellbore viewer + Lets-Plot 2D scientific charts', 'Encrypted offline vault with Argon2id key derivation', 'Automated Word, Excel, and PDF engineering reports'],
          tech: ['Kotlin', 'Compose Multiplatform', 'JavaFX 3D', 'Lets-Plot', 'SQLDelight', 'SQLCipher', 'Koin'],
          meta: 'v1.0.0 · MSI, DEB, RPM, JAR packages',
          shots: [
            { s: 'wla-dashboard.png', d: null, a: 'WellLogAnalyzer dashboard' },
            { s: 'wla-dashboard-new-project.png', d: null, a: 'New project setup' },
            { s: 'wla-account.png', d: null, a: 'Account & workspace' },
            { s: 'wla-settings.png', d: null, a: 'Application settings' },
            { s: 'wla-well-input-drill-string.png', d: null, a: 'Drill-string input' },
            { s: 'wla-well-input-validated.png', d: null, a: 'Validated drill-string input' },
            { s: 'wla-well-input-bit-parameters.png', d: null, a: 'Bit parameters input' },
            { s: 'wla-well-input-deviation.png', d: null, a: 'Deviation survey input' },
            { s: 'wla-well-input-fluid.png', d: null, a: 'Fluid properties input' },
            { s: 'wla-well-input-formation.png', d: null, a: 'Formation zones input' },
            { s: 'wla-well-input-import-excel.png', d: null, a: 'Well profile import from Excel' },
            { s: 'wla-2d-pressure-depth.png', d: null, a: 'Pressure vs. depth 2D chart' },
            { s: 'wla-2d-ecd-profile.png', d: null, a: 'ECD safe operating window' },
            { s: 'wla-2d-pressure-window.png', d: null, a: 'Pressure window chart' },
            { s: 'wla-2d-annular-velocity.png', d: null, a: 'Annular velocity chart' },
            { s: 'wla-2d-bit-hydraulics.png', d: null, a: 'Bit hydraulics chart' },
            { s: 'wla-2d-component-breakdown.png', d: null, a: 'Component breakdown chart' },
            { s: 'wla-3d-viewer.png', d: null, a: '3D wellbore trajectory viewer' },
            { s: 'wla-simulation-results.png', d: null, a: 'Hydraulics simulation results' },
            { s: 'wla-simulation-batch.png', d: null, a: 'Batch what-if simulation' },
            { s: 'wla-simulation-what-if.png', d: null, a: 'What-if simulation' },
            { s: 'wla-reports.png', d: null, a: 'Automated engineering reports' },
            { s: 'wla-component-lab.png', d: null, a: 'Component lab' }
          ]
        },
        {
          label: 'Backend', kind: 'arch',
          tagline: 'Go microservices — gateway, realtime hub, async worker',
          highlights: ['High-throughput REST gateway with swagger and health checks', 'Realtime hub for live ops and presence over WebSockets', 'Async worker generating reports into MinIO object storage', 'Multi-tenant MongoDB data store; Redis for presence, cache, token blacklist', 'Prometheus + Grafana observability with pre-provisioned dashboards'],
          tech: ['Go', 'MongoDB', 'Redis', 'MinIO', 'WebSockets', 'Prometheus', 'Grafana'],
          meta: 'OpenAPI 3.0 · Docker Compose · GitLab CI/CD',
          diagram: { id: 'wla-backend', label: 'WellLogAnalyzer Go backend architecture', w: 760, h: 1055, s: 'assets/diagrams/wla-backend-light.svg', d: 'assets/diagrams/wla-backend-dark.svg' }
        }
      ]
    },
    {
      id: 'roadside',
      title: 'Roadside Assistance Platform',
      tagline: 'Android Client Contribution · Team Project',
      description: 'A roadside assistance platform connecting stranded drivers with nearby service providers, built as a 2nd-year team project at ESI SBA. I contributed to the Android client app — Kotlin + Jetpack Compose on an MVVM shell with Koin, Retrofit, and Mapbox — letting users request assistance, track the provider\u2019s location in real time, and manage their account. The wider platform (provider app, Express + Prisma backend, admin and showcase web) lives in the same GitHub organization.',
      tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Koin', 'Retrofit', 'Mapbox'],
      stats: ['Team project, ESI SBA — Android client app contribution', 'Live provider tracking via Mapbox; MVVM with Koin, Retrofit, Room'],
      repos: [
        { name: 'Android Client', href: 'https://github.com/roadside-assistance-platform/roadside-assistance-android-client', desc: 'Kotlin · Compose · MVVM · Koin · Mapbox' },
        { name: 'Android Provider', href: 'https://github.com/roadside-assistance-platform/roadside-assistance-android-provider', desc: 'Kotlin · Compose · MVVM · Koin · Mapbox' },
        { name: 'Backend', href: 'https://github.com/roadside-assistance-platform/roadside-assistance-backend', desc: 'ExpressJS · TypeScript · Prisma · PostgreSQL' },
        { name: 'Admin Web', href: 'https://github.com/roadside-assistance-platform/AdminWeb', desc: 'Next.js · TypeScript' },
        { name: 'Showcase Web', href: 'https://github.com/roadside-assistance-platform/roadside-assistance-showcase-web', desc: 'Tailwind CSS · shadcn/ui · frontend-only' }
      ],
      demo: [],
      featured: false,
      platforms: []
    }
  ];

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function diagramHTML(diag) {
    if (!diag) return '';
    var src = isDark() ? diag.d : diag.s;
    return '<div class="diagram-container" data-diag-id="' + esc(diag.id) + '" data-w="' + diag.w + '" data-h="' + diag.h + '">' +
      '<div class="diagram-toolbar" role="toolbar" aria-label="Diagram zoom">' +
        '<span class="diagram-scale" aria-live="polite">100%</span>' +
        '<button type="button" class="diagram-btn" data-zoom-out aria-label="Zoom out" title="Zoom out">' + ICONS.zoomOut + '</button>' +
        '<button type="button" class="diagram-btn" data-zoom-in aria-label="Zoom in" title="Zoom in">' + ICONS.zoomIn + '</button>' +
        '<button type="button" class="diagram-btn" data-zoom-fit aria-label="Fit diagram to width" title="Fit to width">' + ICONS.maximize + '</button>' +
      '</div>' +
      '<div class="diagram-host" role="img" aria-label="' + esc(diag.label) + '" tabindex="0">' +
        '<div class="diagram-viewport">' +
          '<img class="diagram-img" src="' + src + '" data-s="' + diag.s + '" data-d="' + diag.d + '" alt="' + esc(diag.label) + '" width="' + diag.w + '" height="' + diag.h + '" loading="lazy">' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function wireDiagram(rootEl) {
    var w = parseInt(rootEl.getAttribute('data-w'), 10) || 800;
    var h = parseInt(rootEl.getAttribute('data-h'), 10) || 600;
    var host = rootEl.querySelector('.diagram-host');
    var viewport = rootEl.querySelector('.diagram-viewport');
    var img = rootEl.querySelector('.diagram-img');
    var scaleEl = rootEl.querySelector('.diagram-scale');
    var btnIn = rootEl.querySelector('[data-zoom-in]');
    var btnOut = rootEl.querySelector('[data-zoom-out]');
    var btnFit = rootEl.querySelector('[data-zoom-fit]');

    var MIN_SCALE = 0.25;
    var MAX_SCALE = 4.0;
    var ZOOM_STEP = 1.25;

    var userZoom = null;
    var fitScale = 1.0;

    function getFitScale() {
      var cw = host.clientWidth || 560;
      return Math.min(1.0, Math.max(MIN_SCALE, Math.round((cw / w) * 100) / 100));
    }

    function clamp(v) {
      return Math.min(MAX_SCALE, Math.max(MIN_SCALE, Math.round(v * 100) / 100));
    }

    function apply() {
      fitScale = getFitScale();
      var eff = userZoom !== null ? userZoom : fitScale;
      var pct = Math.round(eff * 100);
      if (scaleEl) scaleEl.textContent = pct + '%';
      if (btnIn) btnIn.disabled = eff >= MAX_SCALE;
      if (btnOut) btnOut.disabled = eff <= MIN_SCALE;

      viewport.style.width = Math.round(w * eff) + 'px';
      viewport.style.height = Math.round(h * eff) + 'px';
      img.style.transform = 'scale(' + eff + ')';
    }

    function zoomBy(factor) {
      var cur = userZoom !== null ? userZoom : fitScale;
      userZoom = clamp(cur * factor);
      apply();
    }

    if (btnIn) btnIn.addEventListener('click', function () { zoomBy(ZOOM_STEP); });
    if (btnOut) btnOut.addEventListener('click', function () { zoomBy(1 / ZOOM_STEP); });
    if (btnFit) btnFit.addEventListener('click', function () { userZoom = null; apply(); });

    host.addEventListener('wheel', function (e) {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      zoomBy(e.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP);
    }, { passive: false });

    var isDown = false;
    var startX, startY, scrollLeft, scrollTop;
    host.addEventListener('mousedown', function (e) {
      isDown = true;
      startX = e.pageX - host.offsetLeft;
      startY = e.pageY - host.offsetTop;
      scrollLeft = host.scrollLeft;
      scrollTop = host.scrollTop;
    });
    window.addEventListener('mouseup', function () { isDown = false; });
    host.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - host.offsetLeft;
      var y = e.pageY - host.offsetTop;
      host.scrollLeft = scrollLeft - (x - startX);
      host.scrollTop = scrollTop - (y - startY);
    });

    if (window.ResizeObserver) {
      var ro = new ResizeObserver(function () {
        if (userZoom === null) apply();
      });
      ro.observe(host);
    }

    apply();
  }

  function shotSrc(shot) {
    var file = (isDark() && shot.d) ? shot.d : shot.s;
    return IMG + file;
  }

  function fallbackHTML(shot) {
    return '<div class="carousel-fallback">Screenshot<br>' + esc(shot.s) + '</div>';
  }

  function getPlatformIcon(label) {
    var l = (label || '').toLowerCase();
    if (l.indexOf('android') !== -1) return ICONS.smartphone;
    if (l.indexOf('desktop') !== -1) return ICONS.monitor;
    if (l.indexOf('sdk') !== -1) return ICONS.blocks;
    if (l.indexOf('backend') !== -1) return ICONS.server;
    if (l.indexOf('system') !== -1) return ICONS.workflow;
    return ICONS.appWindow;
  }

  function getDemoIcon(label, href) {
    var l = (label || '').toLowerCase();
    if (l.indexOf('walkthrough') !== -1 || l.indexOf('demo') !== -1 || l.indexOf('video') !== -1 || (href && href.indexOf('youtu') !== -1)) {
      return ICONS.play;
    }
    if (l.indexOf('release') !== -1 || l.indexOf('download') !== -1) {
      return ICONS.download;
    }
    return ICONS.external;
  }

  function cleanDemoLabel(label) {
    return (label || '').replace(/^[▶⤓↗\s]+/, '').trim();
  }

  function carouselHTML(shots, portrait) {
    var cls = portrait ? 'portrait' : 'landscape';
    var slides = shots.map(function (shot, i) {
      return '<img src="' + shotSrc(shot) + '" data-s="' + IMG + esc(shot.s) + '" data-d="' + (shot.d ? IMG + esc(shot.d) : '') + '" alt="' + esc(shot.a) + '"' +
        ' loading="lazy" style="display:' + (i === 0 ? 'block' : 'none') + '"' +
        ' onerror="this.outerHTML=\'<div class=&quot;carousel-fallback&quot;>Screenshot<br>' + esc(shot.s) + '</div>\'">';
    }).join('');
    var dots = shots.map(function (shot, i) {
      return '<button data-i="' + i + '" class="' + (i === 0 ? 'active' : '') + '" aria-label="Go to screenshot ' + (i + 1) + '"></button>';
    }).join('');
    return '<div class="carousel ' + cls + '">' +
      '<div class="carousel-frame">' +
        '<button class="carousel-zoom-btn" type="button" aria-label="View full screen" title="View full screen">' + ICONS.maximize2 + '</button>' +
        slides +
      '</div>' +
      '<div class="carousel-bar"><button class="carousel-btn" data-prev aria-label="Previous screenshot">' + ICONS.chevronLeft + '</button>' +
      '<span class="carousel-count"><span data-cur>1</span> / ' + shots.length + '</span>' +
      '<button class="carousel-btn" data-next aria-label="Next screenshot">' + ICONS.chevronRight + '</button></div>' +
      '<div class="carousel-dots">' + dots + '</div></div>';
  }

  var currentLightboxShots = [];
  var currentLightboxIndex = 0;
  var lightboxModal = document.getElementById('lightboxModal');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaptionText');
  var lightboxCount = document.getElementById('lightboxCount');
  var lightboxPrevBtn = document.getElementById('lightboxPrev');
  var lightboxNextBtn = document.getElementById('lightboxNext');
  var lightboxCloseBtn = document.getElementById('lightboxClose');
  var lightboxDots = document.getElementById('lightboxDots');

  function updateLightboxView() {
    if (!currentLightboxShots.length) return;
    var shot = currentLightboxShots[currentLightboxIndex];
    var src = shotSrc(shot);
    lightboxImg.src = src;
    lightboxImg.setAttribute('data-s', IMG + shot.s);
    lightboxImg.setAttribute('data-d', shot.d ? (IMG + shot.d) : '');
    lightboxImg.alt = shot.a || '';
    if (lightboxCaption) lightboxCaption.textContent = shot.a || 'Screenshot';
    if (lightboxCount) lightboxCount.textContent = (currentLightboxIndex + 1) + ' / ' + currentLightboxShots.length;

    var multi = currentLightboxShots.length > 1;
    if (lightboxPrevBtn) lightboxPrevBtn.style.display = multi ? 'inline-flex' : 'none';
    if (lightboxNextBtn) lightboxNextBtn.style.display = multi ? 'inline-flex' : 'none';
    if (lightboxDots) {
      lightboxDots.style.display = multi ? 'flex' : 'none';
      if (multi) {
        lightboxDots.innerHTML = currentLightboxShots.map(function (_, i) {
          return '<button class="' + (i === currentLightboxIndex ? 'active' : '') + '" data-i="' + i + '" aria-label="Go to screenshot ' + (i + 1) + '"></button>';
        }).join('');
      }
    }
  }

  function openLightbox(shots, index) {
    if (!lightboxModal || !shots || !shots.length) return;
    currentLightboxShots = shots;
    currentLightboxIndex = (index || 0) % shots.length;
    updateLightboxView();
    lightboxModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function prevLightbox() {
    if (!currentLightboxShots.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxShots.length) % currentLightboxShots.length;
    updateLightboxView();
  }

  function nextLightbox() {
    if (!currentLightboxShots.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxShots.length;
    updateLightboxView();
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', function (e) { e.stopPropagation(); prevLightbox(); });
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', function (e) { e.stopPropagation(); nextLightbox(); });
  if (lightboxDots) {
    lightboxDots.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-i]');
      if (btn) {
        currentLightboxIndex = parseInt(btn.getAttribute('data-i'), 10);
        updateLightboxView();
      }
    });
  }
  if (lightboxModal) {
    lightboxModal.addEventListener('click', function (e) {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-img-wrap')) {
        closeLightbox();
      }
    });
  }
  window.addEventListener('keydown', function (e) {
    if (lightboxModal && lightboxModal.style.display !== 'none') {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') prevLightbox();
      else if (e.key === 'ArrowRight') nextLightbox();
    }
  });

  function wireCarousel(rootEl, shots) {
    var cur = 0;
    function items() { return rootEl.querySelectorAll('.carousel-frame img, .carousel-frame .carousel-fallback'); }
    function show(n) {
      var list = items();
      if (!list.length) return;
      cur = (n + list.length) % list.length;
      list.forEach(function (el, i) {
        var visible = i === cur;
        el.style.display = visible ? (el.tagName === 'IMG' ? 'block' : 'flex') : 'none';
      });
      rootEl.querySelector('[data-cur]').textContent = cur + 1;
      rootEl.querySelectorAll('.carousel-dots button').forEach(function (dot, i) {
        dot.classList.toggle('active', i === cur);
      });
    }
    rootEl.querySelector('[data-prev]').addEventListener('click', function () { show(cur - 1); restart(); });
    rootEl.querySelector('[data-next]').addEventListener('click', function () { show(cur + 1); restart(); });
    rootEl.querySelectorAll('.carousel-dots button').forEach(function (dot, i) {
      dot.addEventListener('click', function () { show(parseInt(dot.getAttribute('data-i'), 10)); restart(); });
    });

    var zoomBtn = rootEl.querySelector('.carousel-zoom-btn');
    if (zoomBtn && shots && shots.length) {
      zoomBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        openLightbox(shots, cur);
      });
    }

    var frame = rootEl.querySelector('.carousel-frame');
    if (frame && shots && shots.length) {
      frame.addEventListener('click', function (e) {
        if (e.target.closest('.carousel-zoom-btn')) return;
        openLightbox(shots, cur);
      });
    }

    var timer = null;
    function restart() {
      if (prefersReduced) return;
      if (timer) clearInterval(timer);
      timer = setInterval(function () { show(cur + 1); }, 4000);
    }
    rootEl.addEventListener('mouseenter', function () { if (timer) clearInterval(timer); });
    rootEl.addEventListener('mouseleave', restart);
    restart();
  }

  function tabPanelHTML(platform) {
    var visual = (platform.kind === 'arch' || platform.diagram) ? diagramHTML(platform.diagram) : carouselHTML(platform.shots, platform.portrait);
    var hl = platform.highlights.map(function (h) { return '<li><span>' + esc(h) + '</span></li>'; }).join('');
    var tech = platform.tech.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('');
    return '<div class="tab-panel"><div class="tab-visual">' + visual + '</div>' +
      '<div><p class="pill">' + getPlatformIcon(platform.label) + '<span>' + esc(platform.label) + '</span></p>' +
      '<p class="tab-summary-tag">' + esc(platform.tagline) + '</p>' +
      '<ul class="bullets">' + hl + '</ul>' +
      '<div class="tech-row">' + tech + '</div>' +
      '<p class="tab-meta">' + esc(platform.meta) + '</p></div></div>';
  }

  function projectHTML(p) {
    var stats = p.stats.map(function (s) { return '<li><span>' + esc(s) + '</span></li>'; }).join('');
    var tech = p.tech.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('');
    var repos = '';
    if (p.repos && p.repos.length) {
      repos = '<div class="repo-row"><p>Repositories</p><div class="repo-links">' +
        p.repos.map(function (r) {
          var title = r.desc ? ' title="' + esc(r.desc) + '"' : '';
          if (r.href) return '<a href="' + r.href + '" target="_blank" rel="noopener noreferrer"' + title + '>' + ICONS.gitlab + '<span>' + esc(r.name) + '</span></a>';
          return '<span class="repo-private"' + title + '>' + ICONS.lock + '<span>' + esc(r.name) + '</span></span>';
        }).join('') + '</div></div>';
    }
    var demo = '';
    if (p.demo && p.demo.length) {
      demo = '<div class="demo-row">' +
        p.demo.map(function (d) {
          return '<a href="' + d.href + '" target="_blank" rel="noopener noreferrer">' +
            getDemoIcon(d.label, d.href) + '<span>' + esc(cleanDemoLabel(d.label)) + '</span></a>';
        }).join('') + '</div>';
    }
    var tabs = '';
    if (p.platforms && p.platforms.length) {
      var def = 0;
      p.platforms.forEach(function (pl, i) { if (def === 0 && pl.kind === 'shots') def = i; });
      var btns = p.platforms.map(function (pl, i) {
        return '<button class="tab-btn' + (i === def ? ' active' : '') + '" data-tab="' + i + '" role="tab" aria-selected="' + (i === def) + '">' +
          getPlatformIcon(pl.label) + '<span>' + esc(pl.label) + '</span></button>';
      }).join('');
      tabs = '<div class="tabs" role="tablist" aria-label="' + esc(p.title) + ' platforms">' + btns + '</div>' +
        '<div class="tab-content">' + tabPanelHTML(p.platforms[def]) + '</div>';
    }
    return '<article class="card project' + (p.featured ? ' project-featured' : '') + ' reveal visible">' +
      (p.featured ? '<div class="project-badge">' + ICONS.star + '<span>Featured architecture</span></div>' : '') +
      '<div class="project-body">' +
      '<p class="project-tagline">' + esc(p.tagline) + '</p>' +
      '<h3 class="project-title">' + esc(p.title) + '</h3>' +
      '<p class="project-desc">' + esc(p.description) + '</p>' +
      '<ul class="project-stats">' + stats + '</ul>' +
      '<div class="tech-row">' + tech + '</div>' + repos + '</div>' +
      tabs + demo + '</article>';
  }

  var list = document.getElementById('projects-list');
  list.innerHTML = PROJECTS.map(projectHTML).join('');

  list.querySelectorAll('.project').forEach(function (card, pIdx) {
    var p = PROJECTS[pIdx];
    var content = card.querySelector('.tab-content');
    if (!content) return;
    card.querySelectorAll('.tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = parseInt(btn.getAttribute('data-tab'), 10);
        card.querySelectorAll('.tab-btn').forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        content.innerHTML = tabPanelHTML(p.platforms[i]);
        var car = content.querySelector('.carousel');
        if (car) wireCarousel(car, p.platforms[i].shots);
        var diag = content.querySelector('.diagram-container');
        if (diag) wireDiagram(diag);
      });
    });
    var def = -1;
    p.platforms.forEach(function (pl, i) { if (def === -1 && pl.kind === 'shots') def = i; });
    var firstCar = content.querySelector('.carousel');
    if (firstCar && def !== -1) wireCarousel(firstCar, p.platforms[def].shots);
    var firstDiag = content.querySelector('.diagram-container');
    if (firstDiag) wireDiagram(firstDiag);
  });
})();
