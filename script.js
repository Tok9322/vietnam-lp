// Saigon Breeze interactions
(function () {
  const $ = (q, el = document) => el.querySelector(q);
  const $$ = (q, el = document) => Array.from(el.querySelectorAll(q));

  // Mobile menu toggle
  const toggle = $('.nav-toggle');
  const list = $('#nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      list.classList.toggle('show');
    });
    // Close on click
    $$('#nav-list a').forEach(a => a.addEventListener('click', () => {
      list.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Smooth scroll enhancement for same-page anchors (in case browser setting is off)
  $$("a[href^='#']").forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = $(id);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Back to top
  const back = $('.back-to-top');
  if (back) {
    back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    const onScroll = () => {
      if (window.scrollY > 480) back.classList.add('show');
      else back.classList.remove('show');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
