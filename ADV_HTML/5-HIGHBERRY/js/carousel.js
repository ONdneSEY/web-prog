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


const imgCon2 =document.querySelector("#img-con2");
const point = document.querySelectorAll('.point');
const text = document.querySelectorAll('.text');

 const imageMap = {
    "1":    "/ADV_HTML/5-HIGHBERRY/img/bg/carusel-type-two-1.png",
    "2":    "/ADV_HTML/5-HIGHBERRY/img/bg/carusel-type-two-2.png",
    "3":    "/ADV_HTML/5-HIGHBERRY/img/bg/carusel-type-two-3.png",
    "4":    "/ADV_HTML/5-HIGHBERRY/img/bg/carusel-type-two-4.png",
    "5":    "/ADV_HTML/5-HIGHBERRY/img/bg/carusel-type-two-5.png"
}

point.forEach(point => {
    point.addEventListener('click', function(){
        
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