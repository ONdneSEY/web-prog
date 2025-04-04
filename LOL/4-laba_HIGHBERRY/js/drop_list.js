const menuListBox = document.querySelector(".menu_list_box");
const closeMenu =document.querySelector(".close_menu");

const headerOtherConteiner = document.querySelector(".header_other_conteiner");
const headerMenuConteiner = document.querySelector(".header_menu_conteiner");

menuListBox.addEventListener('click', () =>{
    console.log("1");
    headerOtherConteiner.style.display = "none"
    headerMenuConteiner.style.display = "block"
});

closeMenu.addEventListener('click', () =>{
    console.log("2");
    headerMenuConteiner.style.display = "none"
    headerOtherConteiner.style.display = "flex"
});

document.querySelectorAll('.header_menu_list_element_box').forEach(menuListItem => {
    const buttonOpen = menuListItem.querySelector('.arrow_open');
    const buttonClosed = menuListItem.querySelector('.arrow_close');
    const dropList = menuListItem.querySelector('.header_menu_drop_list');

    if (buttonOpen && buttonClosed && dropList) {
        buttonOpen.addEventListener('click', () => {
            buttonOpen.style.display = 'none';
            buttonClosed.style.display = 'block';
            dropList.classList.add("active");
        });

        buttonClosed.addEventListener('click', () => {
            buttonClosed.style.display = 'none';
            buttonOpen.style.display = 'block';
            dropList.classList.remove("active");
        });
    }
});

// document.querySelectorAll('.header_menu_list_element_box').forEach(menuListItem => {
//     const buttonOpen = menuListItem.querySelector('.arrow_open');
//     const buttonClosed = menuListItem.querySelector('.arrow_close');
//     const faqsText = menuListItem.querySelector('.header_menu_drop_list');

//     buttonClosed.addEventListener('click', () => {
//         buttonOpen.style.display = 'none';
//         buttonChevronOpen.style.display = 'block';
//         faqsText.classList.add("active");
//     });

//     buttonOpen.addEventListener('click', () => {
//         buttonOpen.style.display = 'block';
//         buttonClosed.style.display = 'none';
//         faqsText.classList.remove("active");
//     });
// });


