(() => {
  'use strict';
  const video = document.querySelector('video');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let autoplayAttempted = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries.some(entry => entry.isIntersecting) && !reducedMotion.matches && !autoplayAttempted) {
      autoplayAttempted = true;
      video.play().catch(() => {});
    }
  }, {threshold: 0.2});
  observer.observe(video);
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) video.pause(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); });
})();
