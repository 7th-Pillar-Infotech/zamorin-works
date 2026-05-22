/* Zamorin Works — Broadsheet layout (masthead + nav + footer + floating CTA). */
(function () {
  'use strict';

  function relPath(href) {
    var depth = (document.body.dataset.depth | 0) || 0;
    var prefix = depth > 0 ? '../'.repeat(depth) : './';
    if (href.indexOf('#') === 0 || href.indexOf('http') === 0) return href;
    return prefix + href;
  }

  function currentSlug() {
    return document.body.dataset.page || '';
  }

  var navLinks = [
    { num: '01', label: 'Services',   href: 'services.html',   slug: 'services' },
    { num: '02', label: 'Approach',   href: 'approach.html',   slug: 'approach' },
    { num: '03', label: 'Work',       href: 'work.html',       slug: 'work' },
    { num: '04', label: 'Leadership', href: 'leadership.html', slug: 'leadership' },
    { num: '05', label: 'About',      href: 'about.html',      slug: 'about' }
  ];

  function buildMasthead() {
    return '' +
      '<div class="masthead">' +
        '<div class="container masthead__inner">' +
          '<div class="masthead__left">' +
            '<span>Zamorin Works</span>' +
            '<span class="masthead__dot">·</span>' +
            '<span>A Zamorin Company</span>' +
            '<span class="masthead__dot">·</span>' +
            '<span>Enterprise IT</span>' +
          '</div>' +
          '<div class="masthead__right">' +
            '<span>Dubai</span>' +
            '<span class="masthead__dot">·</span>' +
            '<span>GCC</span>' +
            '<span class="masthead__dot">·</span>' +
            '<span>EN</span>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function buildNav() {
    var page = currentSlug();
    var linkHtml = navLinks.map(function (l) {
      var current = (page === l.slug || (page.indexOf(l.slug) === 0 && l.slug !== ''));
      return '<a class="nav__link" href="' + relPath(l.href) + '"' +
        (current ? ' aria-current="page"' : '') + '>' +
        '<span class="nav__link__sect">§' + l.num + '</span>' +
        '<span>' + l.label + '</span>' +
      '</a>';
    }).join('');

    var sheetLinks = navLinks.map(function (l) {
      return '<a href="' + relPath(l.href) + '"><span class="nav__link__sect">§' + l.num + '</span>' + l.label + '</a>';
    }).join('') +
    '<a href="' + relPath('contact.html') + '"><span class="nav__link__sect">§06</span>Contact</a>';

    return '' +
      buildMasthead() +
      '<header class="nav" role="banner">' +
        '<div class="container nav__inner">' +
          '<a class="nav__logo" href="' + relPath('index.html') + '" aria-label="Zamorin Works home">' +
            '<span>Zamorin</span>' +
            '<span class="nav__logo-dot" aria-hidden="true"></span>' +
            '<span>Works</span>' +
            '<span class="nav__logo-meta">Enterprise IT — Dubai</span>' +
          '</a>' +
          '<nav class="nav__links" aria-label="Primary">' + linkHtml + '</nav>' +
          '<button class="nav__toggle" aria-label="Open menu" aria-controls="nav-sheet" aria-expanded="false">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">' +
              '<line x1="3" y1="7" x2="21" y2="7"></line>' +
              '<line x1="3" y1="12" x2="21" y2="12"></line>' +
              '<line x1="3" y1="17" x2="21" y2="17"></line>' +
            '</svg>' +
          '</button>' +
          '<a class="nav__cta" href="' + relPath('contact.html') + '">Contact</a>' +
        '</div>' +
      '</header>' +
      '<div id="nav-sheet" class="nav__sheet" data-open="false" role="dialog" aria-modal="true" aria-label="Menu">' +
        '<button class="nav__close" aria-label="Close menu">' +
          '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">' +
            '<line x1="6" y1="6" x2="18" y2="18"></line>' +
            '<line x1="18" y1="6" x2="6" y2="18"></line>' +
          '</svg>' +
        '</button>' +
        sheetLinks +
      '</div>';
  }

  function buildFooter() {
    var year = new Date().getFullYear();
    return '' +
      '<footer class="footer" role="contentinfo">' +
        '<div class="container">' +
          '<div class="footer__grid">' +
            '<div>' +
              '<div class="footer__brand">' +
                '<span>Zamorin</span>' +
                '<span class="footer__brand-dot" aria-hidden="true"></span>' +
                '<span>Works</span>' +
              '</div>' +
              '<p style="max-width:280px;line-height:1.55;">A Dubai-based IT consultancy. Twenty years of Zamorin Group operating discipline, applied to enterprise technology.</p>' +
              '<span class="footer__company-tag">A Zamorin Company</span>' +
            '</div>' +
            '<div>' +
              '<h4>Sections</h4>' +
              '<ul>' +
                '<li><a href="' + relPath('services.html') + '">§01 Services</a></li>' +
                '<li><a href="' + relPath('approach.html') + '">§02 Approach</a></li>' +
                '<li><a href="' + relPath('work.html') + '">§03 Work</a></li>' +
                '<li><a href="' + relPath('leadership.html') + '">§04 Leadership</a></li>' +
                '<li><a href="' + relPath('about.html') + '">§05 About</a></li>' +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h4>Practices</h4>' +
              '<ul>' +
                '<li><a href="' + relPath('services/strategy-advisory.html') + '">Strategy &amp; Advisory</a></li>' +
                '<li><a href="' + relPath('services/custom-software.html') + '">Custom Software</a></li>' +
                '<li><a href="' + relPath('services/cloud-devops.html') + '">Cloud &amp; DevOps</a></li>' +
                '<li><a href="' + relPath('services/data-ai.html') + '">Data &amp; AI</a></li>' +
                '<li><a href="' + relPath('services/cybersecurity.html') + '">Cybersecurity</a></li>' +
                '<li><a href="' + relPath('services/managed-it.html') + '">Managed IT</a></li>' +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h4>Family</h4>' +
              '<ul>' +
                '<li><a href="https://zamorindecorate.com" target="_blank" rel="noopener">Zamorin Decorate <span class="ext">↗</span></a></li>' +
                '<li><a href="https://zamorinprojects.com" target="_blank" rel="noopener">Zamorin Projects <span class="ext">↗</span></a></li>' +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h4>Correspondence</h4>' +
              '<ul>' +
                '<li><a href="mailto:hello@zamorinworks.com">hello@zamorinworks.com</a></li>' +
                '<li><span class="muted">Dubai · Business Bay</span></li>' +
                '<li><span class="muted">Kochi · Infopark</span></li>' +
                '<li><span class="muted">Tel · on request</span></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
          '<div class="footer__bottom">' +
            '<div>© ' + year + ' Zamorin Works · All rights reserved</div>' +
            '<div><a href="#">Privacy</a> · <a href="#">Terms</a></div>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  function mount() {
    var navMount = document.getElementById('nav-mount');
    var footerMount = document.getElementById('footer-mount');
    if (navMount) navMount.outerHTML = buildNav();
    if (footerMount) footerMount.outerHTML = buildFooter();

    // Mobile menu
    var toggle = document.querySelector('.nav__toggle');
    var sheet = document.getElementById('nav-sheet');
    var close = sheet && sheet.querySelector('.nav__close');
    function openSheet() {
      if (!sheet) return;
      sheet.dataset.open = 'true';
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      var firstLink = sheet.querySelector('a'); firstLink && firstLink.focus();
    }
    function closeSheet() {
      if (!sheet) return;
      sheet.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle && toggle.focus();
    }
    toggle && toggle.addEventListener('click', openSheet);
    close && close.addEventListener('click', closeSheet);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sheet && sheet.dataset.open === 'true') closeSheet();
    });
    sheet && sheet.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeSheet);
    });

    // Floating CTA visibility
    var floating = document.querySelector('.floating-cta');
    if (floating) {
      var thresholdEl = document.querySelector('.hero, .page-header');
      function checkFloating() {
        var threshold = thresholdEl ? thresholdEl.offsetTop + thresholdEl.offsetHeight - 100 : 400;
        floating.dataset.visible = (window.scrollY > threshold) ? 'true' : 'false';
      }
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) {
          requestAnimationFrame(function () { checkFloating(); ticking = false; });
          ticking = true;
        }
      });
      checkFloating();
    }

    // Reveal-on-scroll
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.dataset.shown = 'true';
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) { el.dataset.shown = 'true'; });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
