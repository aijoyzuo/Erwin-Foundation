/*!
 * Erwin Foundation - unified script
 * - Loads partials (header/footer) via fetch (with dynamic base)
 * - Rewrites <a data-root="..."> to correct href (with dynamic base)
 * - Initializes UI after partials are ready
 * - Safe to run across multiple pages
 */

// ====== 動態前綴設定 ======
const BASE = location.hostname.endsWith('github.io') ? '/Erwin-Foundation' : '';
function withBase(p) {
  if (!p) return p;
  return p.startsWith('/') ? (BASE + p) : p;
}
function resolveIncludePath(p) {
  // data-include 建議寫成以 "/" 開頭的站內路徑；這裡會自動接上 BASE
  return withBase(p);
}

(function () {
  const INCLUDE_ATTR = 'data-include';
  const PARTIALS_EVENT = 'partials:loaded';

  const once = (fn) => {
    let done = false;
    return function (...args) {
      if (done) return;
      done = true;
      return fn.apply(this, args);
    };
  };

  const log = (...args) => console.log('[EF]', ...args);
  const warn = (...args) => console.warn('[EF]', ...args);
  const err = (...args) => console.error('[EF]', ...args);

  // -------- Partials Loader --------
  async function loadPartials() {
    const nodes = Array.from(document.querySelectorAll(`[${INCLUDE_ATTR}]`));
    if (nodes.length === 0) {
      log('No partial placeholders found.');
      document.dispatchEvent(new CustomEvent(PARTIALS_EVENT));
      return;
    }

    log(`Loading ${nodes.length} partial(s)...`);
    const tasks = nodes.map(async (node) => {
      const raw = node.getAttribute(INCLUDE_ATTR);
      const url = resolveIncludePath(raw);
      try {
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const html = await res.text();
        const tpl = document.createElement('template');
        tpl.innerHTML = html.trim();
        node.replaceWith(tpl.content);
      } catch (e) {
        err('Include failed:', url, e);
      }
    });

    await Promise.all(tasks);
    log('All partials loaded.');
    document.dispatchEvent(new CustomEvent(PARTIALS_EVENT));
  }

  // -------- UI Init (runs after partials) --------
  const initAfterPartials = once(function () {
    log('Initializing UI...');

    // 先把 header/footer 裡的 data-root 轉為 href（本機/正式站都正確）
    document.querySelectorAll('a[data-root]').forEach(a => {
      const raw = a.getAttribute('data-root');
      a.setAttribute('href', withBase(raw));
    });

    // jQuery 依賴（navbar/mobile）
    if (!window.jQuery) {
      warn('jQuery not found. Navbar/mobile menu JS is skipped.');
    } else {
      (function ($) {
        const $nav = $('.navbar');
        const $mobileMenu = $('#mobileMenu');

        if ($nav.data('ef-bound')) {
          log('Navbar already bound. Skipping duplicate binding.');
        } else {
          $nav.data('ef-bound', true);

          // 漢堡開關
          $(document).on('click', '#hamburgerBtn', function (e) {
            e.stopPropagation();
            $nav.toggleClass('is-open');
            // 可選：同步 ARIA
            const expanded = $nav.hasClass('is-open');
            this.setAttribute('aria-expanded', String(expanded));
          });

          // 手機版：展開/收起次選單
          $mobileMenu.on('click', '.dropdown-toggle', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).siblings('.submenu').slideToggle(200);
          });

          // 點 submenu 內連結 → 關閉漢堡 & 收起所有次選單
          $mobileMenu.on('click', '.submenu a', function () {
            $nav.removeClass('is-open');
            $mobileMenu.find('.submenu').slideUp(0);
          });

          // 點擊 navbar 以外 → 關閉
          $(document).on('click', function (e) {
            if (!$(e.target).closest('.navbar').length) {
              $nav.removeClass('is-open');
              $mobileMenu.find('.submenu').slideUp(0);
            }
          });

          // 視窗變大回桌機 → 重置
          $(window).on('resize', function () {
            if (window.innerWidth > 768) {
              $nav.removeClass('is-open');
              $mobileMenu.find('.submenu').removeAttr('style');
            }
          });
        }
      })(window.jQuery);
    }

    // IntersectionObserver
    try {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('scrolled', entry.isIntersecting);
        });
      });
      document.querySelectorAll('.scroll-element').forEach((el) => io.observe(el));
    } catch (e) {
      warn('IntersectionObserver not available:', e);
    }

    // ScrollReveal
    if (window.ScrollReveal) {
      try {
        ScrollReveal().reveal(
          '.about-a, #animatedElement, .life-a, .life-d, .life-c, .square-a, .square-b, .swiper, .anecdote-a'
        );
      } catch (e) {
        warn('ScrollReveal init failed:', e);
      }
    }

    // 旋轉硬幣
    try {
      const coin = document.querySelector('#animatedElement img');
      if (coin && coin.animate) {
        const keyframes = [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(360deg)' }];
        const timing = { duration: 1200, easing: 'ease-in-out', iterations: 1, fill: 'none' };
        setInterval(() => coin.animate(keyframes, timing), 5000);
      }
    } catch (e) {
      warn('Coin animation failed:', e);
    }

    // Swiper
    if (window.Swiper) {
      try {
        document.querySelectorAll('.swiper1').forEach((el) => {
          if (el.dataset.efSwiper) return;
          new Swiper(el, {
            effect: 'fade',
            loop: true,
            speed: 2000,
            autoplay: { delay: 2500 }
          });
          el.dataset.efSwiper = '1';
        });

        document.querySelectorAll('.swiper.mySwiper').forEach((el) => {
          if (el.dataset.efSwiper) return;
          new Swiper(el, {
            direction: 'horizontal',
            speed: 1500,
            loop: true,
            pagination: { el: '.swiper-pagination' },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            scrollbar: { el: '.swiper-scrollbar' }
          });
          el.dataset.efSwiper = '1';
        });
      } catch (e) {
        warn('Swiper init failed:', e);
      }
    } else {
      warn('Swiper not found. Skipping sliders.');
    }

    log('UI initialized.');
  });

  // -------- Bootstrap flow --------
  document.addEventListener('DOMContentLoaded', function () {
    // 啟動 partials 載入；若頁面沒有占位，也會立即派發事件
    loadPartials();

    // 保險機制：若 2 秒內沒等到事件，直接初始化（避免極端錯誤）
    setTimeout(() => {
      initAfterPartials(); // once() 會避免重複執行
    }, 2000);
  });

  // 正常載入完成
  document.addEventListener(PARTIALS_EVENT, function () {
    initAfterPartials();
  });
})();
