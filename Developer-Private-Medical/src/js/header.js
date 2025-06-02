$(document).ready(function() {
    // Елементи, які ми використовуємо
    const $header = $('.menu-header');
    const $breakElement = $('#breakpoint'); // Ваш елемент-маркер
    
    // Функція для перевірки позиції
    function checkScrollPosition() {
        const breakPosition = $breakElement.offset().top;
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();
        
        // Якщо користувач прокрутив до break-елемента
        if (scrollPosition > breakPosition - windowHeight/2) {
            $header.addClass('scrolled-bg');
        } else {
            $header.removeClass('scrolled-bg');
        }
    }
    
    // Перевіряємо при завантаженні та прокрутці
    checkScrollPosition();
    $(window).scroll(function() {
        checkScrollPosition();
    });
});

$(document).ready(function() {
    const $dropUl = $('.drop-ul');
    const $menuLogo = $('.drop-ul .logo'); 
    const $closeBtn = $('.close'); 
    const $menu = $('.menu'); 
    const $close = $('.close div');

    

    $menuLogo.on('click', function(e) {
        setTimeout(() =>{
            $close.addClass('open');
        }, 400)
        e.stopPropagation(); 
        $menu.addClass('active');
        $dropUl.addClass('menu-open');
    });
    

    $closeBtn.on('click', function(e) {
        $close.removeClass('open');
        setTimeout (() =>{
            e.stopPropagation(); 
            $menu.removeClass('active');
            $dropUl.removeClass('menu-open');
        }, 500)
        
    });
});