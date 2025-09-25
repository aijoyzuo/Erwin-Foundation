
$(document).ready(function () {
 $(function () {
  const $nav = $('.navbar');
  const $mobileMenu = $('#mobileMenu');

  // 漢堡開關（只切換 .is-open，不動 inline style）
  $('#hamburgerBtn').on('click', function (e) {
    e.stopPropagation();
    $nav.toggleClass('is-open');
  });

  // 手機版：點 dropdown-toggle 只展開/收起次選單，不關整個菜單
  $mobileMenu.on('click', '.dropdown-toggle', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).siblings('.submenu').slideToggle(200);
  });

  // ✅ 只在點到「次選單內的超連結」時才關閉整個漢堡
  $mobileMenu.on('click', '.submenu a', function () {
    $nav.removeClass('is-open');
    // 可選：順便把所有次選單收起，避免殘留 inline style
    $mobileMenu.find('.submenu').slideUp(0);
  });

  // （可選）點擊 navbar 外部就關閉
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.navbar').length) {
      $nav.removeClass('is-open');
      $mobileMenu.find('.submenu').slideUp(0);
    }
  });

  // 視窗放大回桌機時，重置狀態
  $(window).on('resize', function () {
    if (window.innerWidth > 768) {
      $nav.removeClass('is-open');
      $mobileMenu.find('.submenu').removeAttr('style');
    }
  });
});
  /* === 桌機版下拉：用 CSS :hover 已足夠；不需要 jQuery 另外綁 === */
  // 若你一定要點擊觸發桌機版：再另外針對 .nav-menu .dropdown-toggle 綁 click

  /* === 上移錯視（IntersectionObserver） === */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('scrolled', entry.isIntersecting);
    });
  });
  document.querySelectorAll('.scroll-element').forEach(t => io.observe(t));

  /* === ScrollReveal（你有引 CDN） === */
  if (window.ScrollReveal) {
    ScrollReveal().reveal('.about-a, #animatedElement, .life-a, .life-d, .life-c, .square-a, .square-b, .swiper, .anecdote-a');
  }

  /* === 旋轉硬幣：每 5 秒旋一次 === */
  const coin = document.querySelector('#animatedElement img');
  if (coin && coin.animate) {
    const keyframes = [{transform:'rotateY(0deg)'},{transform:'rotateY(360deg)'}];
    const timing = {duration:1200, easing:'ease-in-out', iterations:1, fill:'none'};
    setInterval(() => coin.animate(keyframes, timing), 5000);
  }

  /* === Swiper：集中初始化，避免重複 === */
  // 海報輪播
  if (window.Swiper) {
    new Swiper('.swiper1', {
      effect: 'fade',
      loop: true,
      speed: 2000,
      autoplay: { delay: 2500 },
    });

    // 典藏輪播
    new Swiper('.swiper', {
      direction: 'horizontal',
      speed: 1500,
      loop: true,
      pagination: { el: '.swiper-pagination' },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      scrollbar: { el: '.swiper-scrollbar' },
    });
  }
});

