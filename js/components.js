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
                return el;
            });
    }

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
