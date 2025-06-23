$(document).ready(function () {
    const $points = $('.point');
    const $slides = $('.img-wrap');
    let currentSlide = 0;
    let slideInterval;
    let isAnimating = false;

    // Приховуємо всі слайди, крім першого
    $slides.not('[data-slide="1"]').hide();

    function goToSlide(newIndex) {
        if (isAnimating || newIndex === currentSlide) return;
        isAnimating = true;

        const $currentSlide = $slides.eq(currentSlide);
        const $nextSlide = $slides.eq(newIndex);
        const direction = newIndex > currentSlide ? 'right' : 'left';

        // Анімація виходу поточного слайда
        $currentSlide.addClass('slide-out-' + (direction === 'right' ? 'left' : 'right'));

        setTimeout(() => {
            // Оновлюємо активну точку
            $points.removeClass('active');
            $points.eq(newIndex).addClass('active');

            // Показуємо новий слайд перед анімацією входу
            $nextSlide.show().addClass('slide-in-' + direction);
            $currentSlide.hide().removeClass('slide-out-left slide-out-right');

            currentSlide = newIndex;

            setTimeout(() => {
                $nextSlide.removeClass('slide-in-left slide-in-right');
                isAnimating = false;
            }, 500);
        }, 500);
    }

    // Обробник кліку на точки
    $points.on('click', function () {
        const newIndex = $(this).index();
        goToSlide(newIndex);
        resetInterval();
    });

    // // Автоматична зміна слайдів
    // function startInterval() {
    //     slideInterval = setInterval(() => {
    //         const nextSlide = (currentSlide + 1) % $slides.length;
    //         goToSlide(nextSlide);
    //     }, 5000);
    // }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Пауза при наведенні
    $('.carusel-wrap').hover(
        () => clearInterval(slideInterval),
        () => {
            if (!slideInterval) startInterval();
        }
    );

    startInterval();
});

