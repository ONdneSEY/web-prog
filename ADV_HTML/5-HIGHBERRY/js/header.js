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
      }, index * 150);
    });
  };

const removeAnimationClass = (item) =>{
    item.forEach(m => {
        m.classList.remove('menuItemsAnima');
    })
}



document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.style-header');
  
  header.style.position = 'relative';
  
  let lastScroll = 0;
  const scrollThreshold = 1;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > scrollThreshold) {
      header.style.position = 'fixed';
    } 
    else if (currentScroll <= lastScroll && currentScroll < scrollThreshold) {
      header.style.position = 'relative';
    }
    
    lastScroll = currentScroll;
  });
});

const buttonsMenu = document.querySelectorAll('.button-dror-menu');
    
buttonsMenu.forEach(button => {
    button.addEventListener('click', function() {
        const menu = this.closest('.open-menu-icon').querySelector('.button-dror-menu');
            
        menu.classList.toggle('open');
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const dropButtons = document.querySelectorAll('.button-dror-menu');
  
  dropButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const menu = this.closest('.menu-item').querySelector('.open-menu-icon');

      menu.classList.toggle('open');
    });
  });
});


