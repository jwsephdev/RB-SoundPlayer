const sfx_sample =  new Audio('sample_audio/Pop.mp3');
const bg_sample =  new Audio('sample_audio/BG_Sample.mp3');

const btn_sfx1 = document.getElementById('sfx1_btn');
const filename_sfx1 = document.getElementById('sfx1_filename');
const keybind_sfx1 = document.getElementById('sfx1_keybind');

btn_sfx1.addEventListener("click", () => {
    playAud(sfx_sample);
  });

window.addEventListener('keydown', (event) => {
    console.log(('You pressed:'+ event.key));
    if (event.key === 'q') {
        playAud(sfx_sample);
        
     };
    if (event.key === 'w') {
        playAud(bg_sample);
    }
    else if (event.key == " ") {
        bg_sample.pause();
    }
});

function playAud(audio) {
    audio.currentTime = 0;
    audio.play();
};  