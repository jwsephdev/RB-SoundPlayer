
var Audio_1 = new Audio("audio/Pop.mp3")
var Audio_2 = new Audio("audio/BG_Sample.mp3")

window.addEventListener('keydown', (event) => {
    console.log(('You pressed:'+ event.key));



    if (event.key == "q") {
        Audio_2.currentTime = 0;
        Audio_2.play();
    }
    else if (event.key == " ") {
        Audio_2.pause();
    }

    if (event.key == "w") {
        Audio_1.currentTime = 0;
        Audio_1.play();
    }
    
});