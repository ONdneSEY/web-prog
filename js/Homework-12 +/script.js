const images = document.querySelectorAll('.image-to-show');
    const stopButton = document.getElementById('stopButton');
    const resumeButton = document.getElementById('resumeButton');
    let currentIndex = 0;
    let interval;

    function showNextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }

    function startSlideshow() {
      interval = setInterval(showNextImage, 1000);
      updateTimer();
    }

    function stopSlideshow() {
      clearInterval(interval);
    }

    

    stopButton.addEventListener('click', stopSlideshow);
    resumeButton.addEventListener('click', () => {
      stopSlideshow();
      startSlideshow();
    });

    document.addEventListener('DOMContentLoaded', () => {
      startSlideshow();
    });