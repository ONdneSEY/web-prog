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
    'МОРКВА':             'url(/ADV_HTML/5-HIGHBERRY/img/bg/carusel-10.png)'
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



