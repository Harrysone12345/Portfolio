// Mobile nav toggle
(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Lightbox: any <img> inside .project-gallery, or with data-zoom, opens full-size.
// No onclick needed when you add new images.
(function () {
  const overlay = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!overlay || !lightboxImg) return;

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Enlarged view';
    overlay.classList.add('open');
  }
  function close() {
    overlay.classList.remove('open');
  }

  document.addEventListener('click', (e) => {
    const img = e.target.closest('.project-gallery img, img[data-zoom]');
    if (img) open(img.currentSrc || img.src, img.alt);
  });

  overlay.addEventListener('click', close);
  lightboxImg.addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();
