
document.addEventListener('DOMContentLoaded', function() {
  const buttonDown = document.querySelector('.button-down');

  if (buttonDown) {
      buttonDown.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetSection = document.getElementById('mi-poruch');
          
          if (targetSection) {
              const offset = 130;
              const elementPosition = targetSection.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              
              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              }); 
          }
      });
  }
});