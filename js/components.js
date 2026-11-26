(function() {
    'use strict';

    var base = window.LGC_BASE || './';

    function injectComponent(url, targetId) {
        var el = document.getElementById(targetId);
        if (!el) return Promise.resolve();
        return fetch(url)
            .then(function(r) { return r.text(); })
            .then(function(html) {
                el.innerHTML = html.replace(/\{\{BASE\}\}/g, base);
                el.style.display = 'contents';
                return el;
            });
    }

    // Faded fixed backdrop (css/tailwind.css → body::before). Load the image only after the
    // page has loaded and the browser is idle, so it never delays the main content; once it
    // has loaded, html.bg-ready shows it. Skipped with reduced data; on error nothing changes.
    function loadBackdrop() {
        if (window.matchMedia('(prefers-reduced-data: reduce)').matches) return;
        var portrait = window.matchMedia('(orientation: portrait)').matches;
        var img = new Image();
        img.onload = function() { document.documentElement.classList.add('bg-ready'); };
        img.src = base + 'images/' + (portrait ? 'rockville-bg-portrait.webp' : 'rockville-bg.webp');
    }
    function startBackdrop() {
        if ('requestIdleCallback' in window) requestIdleCallback(loadBackdrop, { timeout: 2000 });
        else setTimeout(loadBackdrop, 200);
    }
    if (document.readyState === 'complete') startBackdrop();
    else window.addEventListener('load', startBackdrop, { once: true });

    var headerReady = injectComponent(base + 'components/header.html', 'site-header');
    var footerReady = injectComponent(base + 'components/footer.html', 'site-footer');

    headerReady.then(function() {
        var btn = document.getElementById('mobile-menu-btn');
        var menu = document.getElementById('mobile-menu');
        if (btn && menu) {
            btn.addEventListener('click', function() {
                menu.classList.toggle('hidden');
            });
        }

        document.querySelectorAll('.mobile-expand-btn').forEach(function(b) {
            b.addEventListener('click', function() {
                var panel = this.nextElementSibling;
                var icon = this.querySelector('.expand-icon');
                panel.classList.toggle('hidden');
                icon.textContent = panel.classList.contains('hidden') ? 'expand_more' : 'expand_less';
            });
        });
    });
})();
