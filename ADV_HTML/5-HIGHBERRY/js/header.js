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
