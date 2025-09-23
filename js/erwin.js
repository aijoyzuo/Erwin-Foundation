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
/*$(document).ready(function() {
    // 設置動畫循環的時間（毫秒）
    const animationDuration = 5000; // 2 秒

    setInterval(function() {
        $('#animatedElement').removeClass('animate__flipInY');
        
        // 觸發重繪，確保動畫可以重新開始
        void $('#animatedElement')[0].offsetWidth; 

        $('#animatedElement').addClass('animate__animated animate__flipInY');
    }, animationDuration);
});*/
// icon 循環播放（重啟版，無 reflow）
$(document).ready(function () {
  const el = document.querySelector('#animatedElement img');

  // 定義一段旋轉動畫（單次播放）
  const keyframes = [
    { transform: 'rotateY(0deg)' },
    { transform: 'rotateY(360deg)' }
  ];
  const timing = {
    duration: 1200,       // 你要轉多久
    easing: 'ease-in-out',
    iterations: 1,        // 只播一次（等下每 N 秒重新開新的一段）
    fill: 'none'          // 播完回到初始狀態
  };

  // 每 5 秒重啟一次動畫（不需強制回流）
  const intervalMs = 5000;
  setInterval(() => {
    el.animate(keyframes, timing); // 直接開新動畫
  }, intervalMs);
});
//hello world
$(document).ready(function () {
    ScrollReveal().reveal('.about-a, #animatedElement, .life-a, .life-d, .life-c, .square-a, .square-b, .swiper, .anecdote-a');
});

//swiper
$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        // 其他配置...
        navigation: false, // 確保這個設置是 false
    });
});


