/* One shared, accessible falling-light effect for every ministry page header. */
(function () {
  function renderHeaderRain() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.site-header .header-light-rain').forEach(function (sky) {
      if (sky.dataset.rainReady === 'true') return;
      sky.dataset.rainReady = 'true';
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < 34; i++) {
        var ray = document.createElement('span');
        ray.className = 'header-light-drop';
        ray.style.left = ((i * 37.19) % 100) + '%';
        ray.style.animationDelay = (-(i * 0.43) % 7) + 's';
        ray.style.animationDuration = (3.4 + (i % 6) * 0.49) + 's';
        ray.style.opacity = 0.30 + (i % 5) * 0.12;
        fragment.appendChild(ray);
      }
      sky.appendChild(fragment);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHeaderRain, {once: true});
  } else {
    renderHeaderRain();
  }
})();
