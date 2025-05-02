
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

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('youtube-button');
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-modal');
    const iframe = document.getElementById('youtube-video');


    button.addEventListener('click', function() {
        iframe.src = "https://www.youtube.com/embed/jNBkpwDb7x4?autoplay=1&rel=0";
        modal.style.display = 'flex';
    });


    closeBtn.addEventListener('click', function() {
        iframe.src = ""; 
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            iframe.src = "";
            modal.style.display = 'none';
        }
    });
});