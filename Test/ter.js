const header = document.querySelector('.header');
const triggerElement = document.querySelector('.trigger-element');

window.addEventListener('scroll', () => {
  // Отримуємо позицію тригерного елемента
  const triggerPosition = triggerElement.getBoundingClientRect().top;
  
  // Якщо користувач прокрутив до елемента
  if (triggerPosition <= 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

