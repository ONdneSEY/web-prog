// Функція для імітації прогресу завантаження
function simulateProgress() {
    let progress = 0;
    const progressBar = document.getElementById('progress-bar');
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            // Коли завантаження завершено
            setTimeout(() => {
                document.body.classList.remove('loading');
                document.body.classList.add('loaded');
            }, 500);
        }
        progressBar.style.width = progress + '%';
    }, 200);
}

// Запускаємо preloader при завантаженні сторінки
window.addEventListener('load', function() {
    // Якщо все завантажилось швидше, ніж за 1 секунду
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    }, 1000);
    
    // Запускаємо анімацію прогресу
    simulateProgress();
});

// Альтернатива: приховати preloader, коли DOM повністю завантажений
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    }, 1000);
});