$(document).ready(function() {
    const $header = $('.menu-header');
    const $breakElement = $('#breakpoint');
    const headerHeight = $header.outerHeight();
    const scrollOffset = 0;
    let isScrolling = false;

    function checkScrollPosition() {
        if (isScrolling) return;
        isScrolling = true;
        
        requestAnimationFrame(() => {
            const scrollPosition = $(window).scrollTop();
            const breakPosition = $breakElement.offset().top;
            
            $header.removeClass('scrolled-bg scrolled-bg-blur');
            
            if (scrollPosition > scrollOffset && scrollPosition + headerHeight <= breakPosition) {
                $header.addClass('scrolled-bg-blur');
            } else if (scrollPosition + headerHeight > breakPosition) {
                $header.addClass('scrolled-bg');
            }
            
            isScrolling = false;
        });
    }
    
    checkScrollPosition();
    $(window).scroll(checkScrollPosition);
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