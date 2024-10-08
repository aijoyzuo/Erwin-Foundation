$(document).ready(function() {
    if (window.innerWidth <= 431) {
      $(".suport").html('支持 <i class="fa-solid fa-angle-down fa-2xs"></i>');
      $(".msb").html('<i class="fa-solid fa-comment"></i>　留言');
      $(".money").html('<i class="fa-solid fa-circle-dollar-to-slot"></i>　贊助');
      $(".relatedweb").html('關聯 <i class="fa-solid fa-angle-down fa-2xs"></i>');
      $(".second-life").html('<i class="fa-brands fa-youtube"></i>　阿卡曼');
      $(".14th").html('<i class="fa-solid fa-glasses"></i>　韓　吉');
      $(".paradis").html('<i class="fa-brands fa-instagram"></i>　康樂隊');
      $(".horse").html('<i class="fa-solid fa-horse-head"></i>　馬圖鑑');
    } else {
      $(".suport").html('支持我們 <i class="fa-solid fa-angle-down fa-2xs"></i>');
      $(".msb").html('<i class="fa-solid fa-comment"></i>　留言支持');
      $(".money").html('<i class="fa-solid fa-circle-dollar-to-slot"></i>　贊助支持');
      $(".relatedweb").html('關聯網站 <i class="fa-solid fa-angle-down fa-2xs"></i>');
      $(".second-life").html('<i class="fa-brands fa-youtube"></i>　阿卡曼先生頻道');
      $(".14th").html('<i class="fa-solid fa-glasses"></i>　韓吉‧佐耶紀念網');
      $(".paradis").html('<i class="fa-brands fa-instagram"></i>　-新帕島康樂隊-');
      $(".horse").html('<i class="fa-solid fa-horse-head"></i>　馬的圖鑑成果展');
    }

    // To handle window resize
    $(window).resize(function() {
      if (window.innerWidth <= 431) {
        $(".suport").html('支持 <i class="fa-solid fa-angle-down fa-2xs"></i>');
        $(".msb").html('<i class="fa-solid fa-comment"></i>　留言');
        $(".money").html('<i class="fa-solid fa-circle-dollar-to-slot"></i>　贊助');
        $(".relatedweb").html('關聯 <i class="fa-solid fa-angle-down fa-2xs"></i>');
        $(".second-life").html('<i class="fa-brands fa-youtube"></i>　阿卡曼');
        $(".14th").html('<i class="fa-solid fa-glasses"></i>　韓　吉');
        $(".paradis").html('<i class="fa-brands fa-instagram"></i>　康樂隊');
        $(".horse").html('<i class="fa-solid fa-horse-head"></i>　馬圖鑑');
      } else {
        $(".suport").html('支持我們 <i class="fa-solid fa-angle-down fa-2xs"></i>');
        $(".msb").html('<i class="fa-solid fa-comment"></i>　留言支持');
        $(".money").html('<i class="fa-solid fa-circle-dollar-to-slot"></i>　贊助支持');
        $(".relatedweb").html('關聯網站 <i class="fa-solid fa-angle-down fa-2xs"></i>');
        $(".second-life").html('<i class="fa-brands fa-youtube"></i>　阿卡曼先生頻道');
        $(".14th").html('<i class="fa-solid fa-glasses"></i>　韓吉‧佐耶紀念網');
        $(".paradis").html('<i class="fa-brands fa-instagram"></i>　-新帕島康樂隊-');
        $(".horse").html('<i class="fa-solid fa-horse-head"></i>　馬的圖鑑成果展');
      }
    });
  });
$(document).ready(function () {
    /*下拉選單*/
    $('.dropdown').click(function (event) {
        /* Act on the event */

        $('.dropdown').toggleClass('active');
        $(this).next('.othersite').slideToggle(700);
        $(this).parent('li').siblings('li').children('.othersite').slideUp();
    });
    /*上移錯視*/
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled');
            } else {
                entry.target.classList.remove('scrolled');
            }
        });
    });

    const targets = document.querySelectorAll('.scroll-element');
    targets.forEach(target => {
        observer.observe(target);
    });
});

//icon循環播放
$(document).ready(function() {
    // 設置動畫循環的時間（毫秒）
    const animationDuration = 5000; // 2 秒

    setInterval(function() {
        $('#animatedElement').removeClass('animate__flipInY');
        
        // 觸發重繪，確保動畫可以重新開始
        void $('#animatedElement')[0].offsetWidth; 

        $('#animatedElement').addClass('animate__animated animate__flipInY');
    }, animationDuration);
});
//hello world
$(document).ready(function () {
    ScrollReveal().reveal('.about-a, .animatedElement, .life-a, .life-d, .life-c, .square-a, .square-b, .swiper, .anecdote-a');
});

//swiper
$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        // 其他配置...
        navigation: false, // 確保這個設置是 false
    });
});


