/**
 * Leo General Contracting — Main JavaScript
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        initSmoothScroll();
        initBackToTop();
        initFormValidation();
    });

    function initSmoothScroll() {
        var HEADER_OFFSET = 80;

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    var y = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });

                    var checks = 0;
                    var corrector = setInterval(function() {
                        var off = target.getBoundingClientRect().top - HEADER_OFFSET;
                        if (Math.abs(off) > 30) {
                            window.scrollTo({
                                top: target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET,
                                behavior: 'instant'
                            });
                        }
                        if (++checks >= 8) clearInterval(corrector);
                    }, 400);
                }
            });
        });
    }

    function initBackToTop() {
        let backToTop = document.querySelector('.back-to-top');
        if (!backToTop) {
            backToTop = document.createElement('button');
            backToTop.className = 'back-to-top';
            backToTop.innerHTML = '<span class="material-symbols-outlined">arrow_upward</span>';
            backToTop.setAttribute('aria-label', 'Back to top');
            backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        background: var(--tw-primary, #C49130);
        color: white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      `;
            document.body.appendChild(backToTop);
        }

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'flex';
                setTimeout(() => {
                    backToTop.style.opacity = '1';
                }, 10);
            } else {
                backToTop.style.opacity = '0';
                setTimeout(() => {
                    backToTop.style.display = 'none';
                }, 300);
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    function initFormValidation() {
        document.querySelectorAll('input[type="tel"]').forEach(input => {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 10) value = value.substring(0, 10);
                if (value.length >= 6) {
                    value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6)}`;
                } else if (value.length >= 3) {
                    value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
                }
                e.target.value = value;
            });
        });
    }

})();
