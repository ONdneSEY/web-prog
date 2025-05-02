const carouselTitle = document.querySelectorAll(".carousel-title");
const imgCont1 = document.querySelector("#img-cont1");

const imagesMap = {
    'Полуниця':           'url(/ADV_HTML/5-HIGHBERRY/img/bg/carusel-1.png)',
    'МАЛИНА':             'url(/ADV_HTML/5-HIGHBERRY/img/bg/carusel-2.png)',
    'ОЖИНА':              'url(/ADV_HTML/5-HIGHBERRY/img/bg/carusel-3.png)',
    'ВИШНЯ':              'url(/ADV_HTML/5-HIGHBERRY/img/bg/carusel-4.png)',
    'БРОКОЛІ':            'url(/ADV_HTML/5-HIGHBERRY/img/bg/carusel-5.png)',
    'ЦВІТНА КАПУСТА':     'url(/ADV_HTML/5-HIGHBERRY/img/bg/carusel-6.png)',
    'БРЮСЕЛЬСЬКА КАПУСТА':'url(/ADV_HTML/5-HIGHBERRY/img/bg/carusel-7.png)',
    'ПЕРЕЦЬ':             'url(/ADV_HTML/5-HIGHBERRY/img/bg/carusel-8.png)',
    'ТОМАТИ':             'url(/ADV_HTML/5-HIGHBERRY/img/bg/carusel-9.png)',
    'МОРКВА':             'url(/ADV_HTML/5-HIGHBERRY/img/bg/carusel-10.png)',

  };

carouselTitle.forEach(title =>{
    title.addEventListener('click', function(){
        const carouselItem = this.closest('.carousel-item');

        document.querySelectorAll('.carousel-item').forEach(item =>{
            item.classList.remove('open');
        });

        carouselItem.classList.add('open');

        const titleText = this.textContent.trim();
        const newImage = imagesMap[titleText];
        
        if (newImage && imgCont1) {
            imgCont1.style.backgroundImage = newImage;
        }
    });
    
});

const carouselTitle2 = document.querySelectorAll(".carousel-title2");
const imagesMap2 = {
    'Миття та сушка':     '/ADV_HTML/5-HIGHBERRY/img/bg/carusel-11.png',
    'Бланшування':        '/ADV_HTML/5-HIGHBERRY/img/bg/carusel-12.png',
    'Очищення':           '/ADV_HTML/5-HIGHBERRY/img/bg/carusel-13.png',
    'Видалення кісточки': '/ADV_HTML/5-HIGHBERRY/img/bg/carusel-14.png',
    'Нарізка':            '/ADV_HTML/5-HIGHBERRY/img/bg/carusel-15.png',
    'Глазурування':       '/ADV_HTML/5-HIGHBERRY/img/bg/carusel-16.png',
    'Шнекування':         '/ADV_HTML/5-HIGHBERRY/img/bg/carusel-17.png',
    'Калібрування':       '/ADV_HTML/5-HIGHBERRY/img/bg/carusel-18.png',
    'Ручна інспекція':    '/ADV_HTML/5-HIGHBERRY/img/bg/carusel-19.png',
    'Фасування':          '/ADV_HTML/5-HIGHBERRY/img/bg/carusel-20.png',
    'ЗАМОРОЖУВАННЯ':      '/ADV_HTML/5-HIGHBERRY/img/bg/carusel-21.png',

  };
carouselTitle2.forEach(title =>{
    title.addEventListener('click', function(){
        const carouselItem = this.closest('.carousel-item2');

        document.querySelectorAll('.carousel-item2').forEach(item =>{
            item.classList.remove('open');
        });

        carouselItem.classList.add('open');

        const titleText = this.textContent.trim();
        const newImage = imagesMap2[titleText];
        
        if (newImage && imgCont1) {
            imgCont1.style.backgroundImage = newImage;
        }
    });
    
});



 

const liItems = document.querySelectorAll(".li-item");

liItems.forEach(item => {
    item.addEventListener('click', function() {

        liItems.forEach(i => {
            i.classList.remove('active');
        });
        
        this.classList.add('active');
        
        console.log('Елемент активовано');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.point');
    
    points.forEach(point => {
        point.addEventListener('click', function() {
            const slideNumber = this.getAttribute('data-slide');
            
            const currentActiveImg = document.querySelector('.img-cont.active');
            const currentActiveText = document.querySelector('.text.active');
            const currentActivePoint = document.querySelector('.point.active');
            
            if (currentActiveImg) {
                currentActiveImg.classList.remove('active');
                currentActiveImg.classList.add('leaving');
                
                setTimeout(() => {
                    currentActiveImg.classList.remove('leaving');
                }, 1000);
            }
            
            if (currentActiveText) {
                currentActiveText.classList.remove('active');
                currentActiveText.classList.add('leaving');
                
                setTimeout(() => {
                    currentActiveText.classList.remove('leaving');
                }, 1000);
            }
            
            const newActiveImg = document.querySelector(`.img-cont[data-slide="${slideNumber}"]`);
            const newActiveText = document.querySelector(`.text[data-slide="${slideNumber}"]`);
            
            if (newActiveImg) {
                newActiveImg.classList.add('active');
            }
            
            if (newActiveText) {
                newActiveText.classList.add('active');
            }
            
            if (currentActivePoint) {
                currentActivePoint.classList.remove('active');
            }
            this.classList.add('active');
        });
    });
});