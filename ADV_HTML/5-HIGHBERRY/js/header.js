const styleHeader = document.querySelector(".style-header");
const mobileBurger = document.querySelector(".mobile-burger");
const menuWrapper = document.querySelector(".menu-wrapper");
const menuItem = document.querySelectorAll('.menu-item');

let animationTimeout = null;

mobileBurger.addEventListener("click", ()=>{
    menuWrapper.classList.add("offcanvas");
    div = document.createElement("div");
    div.classList.add('headel-menu-bg');
    styleHeader.append(div);

    animateItemsSequentially(menuItem);
});

menuWrapper.addEventListener("click", ()=>{
    menuWrapper.classList.remove("offcanvas");
    div.remove();
    div = null;

    removeAnimationClass(menuItem);
});




const animateItemsSequentially = (items) => {
    
    items.forEach((item, index) => {
      animationTimeout = setTimeout(() => {
        item.classList.add('menuItemsAnima');
      }, index * 100);
    });
  };

const removeAnimationClass = (item) =>{
    item.forEach(m => {
        m.classList.remove('menuItemsAnima');
    })
}


window.addEventListener('scrol', function(){
  const header = document.querySelector('.style-header');
  const mobileBurger = document.querySelector('.mobile-burger');
  const languageSelector = document.querySelector('.language-selector')
  const socialNetworks = document.querySelector('.social-networks-conteiner');
  const catalog = document.querySelector('.catalog');
  const scrollPosition = window.scrollY || window.pageYOffset;
  const scrollPoint = 100;

  if (scrollPosition > scrollPoint){
    header.classList.add('home-first');
    mobileBurger.classList.add('home-first');
    languageSelector.classList.add('home-first');
    socialNetworks.classList.add('home-first');
    catalog.classList.add('home-first');
  }
  else{
    header.classList.remove('home-first');
    mobileBurger.classList.remove('home-first');
    languageSelector.classList.remove('home-first');
    socialNetworks.classList.remove('home-first');
    catalog.classList.remove('home-first');
  }
})