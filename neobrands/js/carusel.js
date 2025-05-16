$(document).ready(function() {
    var $points = $('.point');
    var $contents = $('.content');
    var currentIndex = 1; 
    var autoSlideInterval;
    var slideDuration = 2000; // 20 секунд
    
    // Ініціалізація слайдера
    function initSlider() {
        // Показуємо початковий активний контент
        $contents.removeClass('active slide-left slide-right');
        $contents.eq(currentIndex).addClass('active');
        
        // Запускаємо автоматичне переключення
        startAutoSlide();
    }
    
    // Обробник кліків на точки
    $points.on('click', function() {
        var newIndex = $points.index(this);
        if (newIndex === currentIndex) return;
        
        // Визначаємо напрямок анімації
        var direction = newIndex > currentIndex ? 'left' : 'right';
        
        // Оновлюємо активні точки
        updateActivePoint(newIndex);
        
        // Переключаємо контент з анімацією
        switchContent(newIndex, direction);
        
        // Скидаємо таймер автоматичного переключення
        resetAutoSlide();
    });
    
    // Оновлення активної точки
    function updateActivePoint(newIndex) {
        $points.removeClass('active');
        $points.eq(newIndex).addClass('active');
        currentIndex = newIndex;
    }
    
    // Переключення контенту з анімацією
    function switchContent(newIndex, direction) {
        var $currentContent = $contents.filter('.active');
        var $newContent = $contents.eq(newIndex);
        
        // Додаємо клас анімації в залежності від напрямку
        if (direction === 'left') {
            $newContent.addClass('slide-left');
        } else {
            $newContent.addClass('slide-right');
        }
        
        // Анімація переходу
        $currentContent.removeClass('active');
        $newContent.addClass('active');
        
        // Видаляємо класи анімації після завершення
        setTimeout(function() {
            $newContent.removeClass('slide-left slide-right');
        }, 500);
    }
    
    // Автоматичне переключення
    function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
            var nextIndex = (currentIndex + 1) % $points.length;
            var direction = 'left'; // Автоматичне переключення завжди йде вправо
            
            updateActivePoint(nextIndex);
            switchContent(nextIndex, direction);
        }, slideDuration);
    }
    
    // Скидання таймеру автоматичного переключення
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Ініціалізуємо слайдер
    initSlider();
});