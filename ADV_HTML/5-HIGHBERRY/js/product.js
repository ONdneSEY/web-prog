const buttonFilter = document.querySelector("#button-filter");
const filterMenu = document.querySelector('.filter-menu');

buttonFilter.addEventListener("click", ()=>{
    filterMenu.classList.toggle('active');
    console.log(1);
    
});


const buttons = document.querySelectorAll('.button-filt-open');
    
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const menu = this.closest('.filter-element').querySelector('.filter-drop-menu');
            
        menu.classList.toggle('open');
    });
});
