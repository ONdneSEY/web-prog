$(document).ready(function() {
    const $points = $('.point');
    const $imgWrap = $('.img-wrap');
    const $imagen1 = $('#imagen1');
    const $imagen2 = $('#imagen2');
    const $imagen3 = $('#imagen3');
    const $imagen4 = $('#imagen4');
    
    const slides = [
        {
            images: [
                "/dist/images/img/bottom-left.png",
                "/dist/images/icon/carusel-signature-1.png",
                "/dist/images/icon/carusel-signature-2.png",
                "/dist/images/icon/carusel-signature-3.png"
            ]
        },
        {
            images: [
                "/dist/images/img/bottom-left.png",
                "/dist/images/icon/carusel-signature-1.png",
                "/dist/images/icon/carusel-signature-2.png",
                "/dist/images/icon/carusel-signature-3.png"
            ]
        },
        {
            images: [
                "/dist/images/img/bottom-left.png",
                "/dist/images/icon/carusel-signature-1.png",
                "/dist/images/icon/carusel-signature-2.png",
                "/dist/images/icon/carusel-signature-3.png"
            ]
        },
        {
            images: [
                "/dist/images/img/bottom-left.png",
                "/dist/images/icon/carusel-signature-1.png",
                "/dist/images/icon/carusel-signature-2.png",
                "/dist/images/icon/carusel-signature-3.png"
            ]
        },
        {
            images: [
                "/dist/images/img/bottom-left.png",
                "/dist/images/icon/carusel-signature-1.png",
                "/dist/images/icon/carusel-signature-2.png",
                "/dist/images/icon/carusel-signature-3.png"
            ]
        },
        {
            images: [
                "/dist/images/img/bottom-left.png",
                "/dist/images/icon/carusel-signature-1.png",
                "/dist/images/icon/carusel-signature-2.png",
                "/dist/images/icon/carusel-signature-3.png"
            ]
        },
        {
            images: [
                "/dist/images/img/bottom-left.png",
                "/dist/images/icon/carusel-signature-1.png",
                "/dist/images/icon/carusel-signature-2.png",
                "/dist/images/icon/carusel-signature-3.png"
            ]
        },
    ];
    
    let currentSlide = 0;
    let slideInterval;
    let isAnimating = false;
    
    function goToSlide(newIndex) {
        if (isAnimating) return;
        
        isAnimating = true;


        let direction = 'right';
        if (newIndex < currentSlide || (currentSlide === $points.length-1 && newIndex === 0)) {
            direction = 'left';
        }
        
        $imgWrap.addClass('slide-out-' + (direction === 'right' ? 'left' : 'right'));
        
        setTimeout(() => {
            $points.removeClass('active');
            $points.eq(newIndex).addClass('active');
            

            const slide = slides[newIndex];
            $imagen1.attr('src', slide.images[0]);
            $imagen2.attr('src', slide.images[1]);
            $imagen3.attr('src', slide.images[2]);
            $imagen4.attr('src', slide.images[3]);
            
            // Показуємо нові зображення
            $imgWrap.removeClass('slide-out-left slide-out-right')
                   .addClass('slide-in-' + direction);
            
            currentSlide = newIndex;
            
            setTimeout(() => {
                $imgWrap.removeClass('slide-in-left slide-in-right');
                isAnimating = false;
            }, 500);
        }, 500);
    }
    

    $points.on('click', function() {
        const newIndex = $(this).index();
        goToSlide(newIndex);
        resetInterval();
    });
    
    // Автоматична зміна слайдів
    // function startInterval() {
    //     slideInterval = setInterval(() => {
    //         const nextSlide = (currentSlide + 1) % $points.length;
    //         goToSlide(nextSlide);
    //     }, 4000);
    // }
    
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }
    startInterval();
});


$(document).ready(function() {
    const $mainImg = $('#main');
    const $title = $('.slider2 .title');
    const $quote = $('.slider2 h3');
    const $memberInfo = $('.slider2 #parag');
    const $points = $('.point2');
    const $elementBoxContent = $('.slider2 > *:not(.point-wrap)');

    
    const stories = [
        {
            imgSrc: "/dist/images/img/img-3.png",
            title: "Member Stories",
            quote: "“Best investment I’ve ever made. I have been a member of Private Medical for over 15 years and count on them to always bring me the highest quality medical expertise.”",
            info: "San Francisco Member<br>Since 2007",
        },
        {
            imgSrc: "/dist/images/img/img-3.png",
            title: "Member Stories",
            quote: "“Best investment I’ve ever made. I have been a member of Private Medical for over 15 years and count on them to always bring me the highest quality medical expertise.”",
            info: "San Francisco Member<br>Since 2007",
        },{
            imgSrc: "/dist/images/img/img-3.png",
            title: "Member Stories",
            quote: "“Best investment I’ve ever made. I have been a member of Private Medical for over 15 years and count on them to always bring me the highest quality medical expertise.”",
            info: "San Francisco Member<br>Since 2007",
        },{
            imgSrc: "/dist/images/img/img-3.png",
            title: "Member Stories",
            quote: "“Best investment I’ve ever made. I have been a member of Private Medical for over 15 years and count on them to always bring me the highest quality medical expertise.”",
            info: "San Francisco Member<br>Since 2007",
        },
    ];
    
    let currentSlide = 0;
    let slideInterval;
    let isAnimating = false;
    

    async function animateSlide(newIndex) {
        if (isAnimating) return;
        isAnimating = true;
        
        $mainImg.css('opacity', 0);
        $elementBoxContent.css('opacity', 0);
        

        await new Promise(resolve => setTimeout(resolve, 300));
        

        const story = stories[newIndex];
        $mainImg.attr('src', story.imgSrc);
        $title.html(story.title);
        $quote.html(story.quote);
        $memberInfo.html(story.info);
 
        $points.removeClass('active');
        $points.eq(newIndex).addClass('active');
        

        $mainImg.css('opacity', 1);
        $elementBoxContent.css('opacity', 1);
        
        currentSlide = newIndex;
        isAnimating = false;
    }
    

    function autoAdvance() {
        const nextSlide = (currentSlide + 1) % stories.length;
        animateSlide(nextSlide);
    }
    

    function startSlider() {
        slideInterval = setInterval(autoAdvance, 5000);
    }
    

    $points.on('click', function() {
        const newIndex = $(this).index();
        if (newIndex !== currentSlide) {
            clearInterval(slideInterval);
            animateSlide(newIndex);
            startSlider();
        }
    });
    

    startSlider();
});