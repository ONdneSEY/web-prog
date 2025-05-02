
    // const videoContainer = document.querySelector('.video');
    // const video = videoContainer.querySelector('video');
    // const playButton = videoContainer.querySelector('.play-button');

    // playButton.addEventListener('click', function() {
       
    //     playButton.classList.add('hidden');
        
    //     video.play();
        
    // });



const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


let youtubePlayer;


function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player('youtube-video-2', {
        events: {
            'onReady': onPlayerReady,
        }
    });
}


function onPlayerReady(event) {
    const playButton = document.querySelector('.play-button');
    
    playButton.addEventListener('click', () => {
        playButton.classList.add('hidden');
        event.target.playVideo();
    });
}