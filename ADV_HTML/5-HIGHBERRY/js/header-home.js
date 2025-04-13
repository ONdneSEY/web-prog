document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.style-header');
    const elementsToToggle = [
      document.querySelector('.style-header'),
      document.querySelector('.logo'),
      document.querySelector('.catalog'),
      document.querySelector('.social-networks-conteiner'),
      document.querySelector('.language-selector'),
      document.querySelector('.mobile-burger')
    ];
    
    header.style.position = 'relative';
    
    let lastScroll = 0;
    const positionThreshold = 0; 
    const classToggleThreshold = window.innerHeight - 85; 
  
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScroll > positionThreshold) {
        header.style.position = 'fixed';
      } 
      else if (currentScroll <= lastScroll && currentScroll <= positionThreshold) {
        header.style.position = 'relative';
      }
      
      if (currentScroll > classToggleThreshold) {
        elementsToToggle.forEach(el => {
          if (el) el.classList.remove('home-first');
        });
      } 
      else if (currentScroll <= lastScroll && currentScroll <= classToggleThreshold) {
        elementsToToggle.forEach(el => {
          if (el) el.classList.add('home-first');
        });
      }
      
      lastScroll = currentScroll;
    });
  });