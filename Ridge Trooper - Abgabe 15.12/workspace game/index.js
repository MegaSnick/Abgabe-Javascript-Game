var spielfeld = document.querySelector('body')
var backgroundPosition = 0;

var indexMusic = new Audio('sounds/Paradigm.mp3')
var musicplay = true;

function loop() {

  // Music
  if(musicplay == true) {
    indexMusic.play()
  }

  // Background-Scrolling
  backgroundPosition = backgroundPosition + 1;
  spielfeld.style.backgroundPosition = `-${backgroundPosition}px 0`;

  window.requestAnimationFrame(loop)
}
  
window.requestAnimationFrame(loop)
