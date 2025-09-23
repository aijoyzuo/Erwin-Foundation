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


