const sfx_sample =  new Audio('sample_audio/Pop.mp3');
const bg_sample =  new Audio('sample_audio/BG_Sample.mp3');


window.addEventListener('keydown', (event) => {
    console.log(('You pressed:'+ event.key));
    if (event.key === 'q') {
        sfx_sample.currentTime = 0;
        sfx_sample.play();
        
     }
    if (event.key === 'w') {
        bg_sample.currentTime = 0;
        bg_sample.play();
    }
    else if (event.key == " ") {
        bg_sample.pause();
    }
  
});