var spieler = document.querySelector('.player')

var spielfeld = document.querySelector('.playground')
var backgroundPosition = 0;

var boden = document.querySelector('.floor')

var punkteAnzeige = document.querySelector('.punkte')
var score = 0

var timer = new Timer(400)

var gameMusic = new Audio('sounds/Hyper_mixdown.mp3')
var musicplay = true;

var gegner1 = document.querySelector('.level-border')

var playerFloor = true;
var playerFloorPosition = 0;

var vollbildButton = document.querySelector('.fullscreen')

vollbildButton.addEventListener('click', function () {
    spielfeld.requestFullscreen()
  })

let isJumping = false;
let upTime;
let downTIme;


// Position
spieler.style.left = '8vw'
spieler.style.top = '47.6vh'


function jump() {
  /*
  if(isJumping) return;
  upTime = setInterval(() => {
    spieler.style.top += -10;
    spieler.style.top = spieler + 'px';
    isJumping = true;
  }
  */
}

function tastatur() {
  if(keyboard(68)) {
    spieler.style.left = parseInt(spieler.style.left) + 5 + 'px';
  }
  if(keyboard(65)) {
    spieler.style.left = parseInt(spieler.style.left) - 5 + 'px';
  }

  if(keyboard(32)) {
      spieler.style.top = parseInt(spieler.style.top) - 18 + 'px';
      spieler.style.top = true;
    } else if (parseInt(spieler.style.top) > 10 + 'px') {
      spieler.style.top = false;
    }

}


function loop() {

  tastatur();

  if(mouseClick()) {
    var spielerX = parseInt(spieler.style.left)
    var spielerY = parseInt(spieler.style.top)
  }

  // Collision
  var gegner = document.querySelectorAll(".level-border")
  // Kommentar: sobald der Spieler mit Gegner1 oder 2 kollidiert, ist das Spiel fertig
  if(anyCollision(spieler, gegner)) {
  alert("you reached your destination.")
  return
  }

  var gegner = document.querySelectorAll(".stein1")
  // Kommentar: sobald der Spieler mit Gegner1 oder 2 kollidiert, ist das Spiel fertig
  if(anyCollision(spieler, gegner)) {
  alert("GAME OVER.")
  return
  }

  // Kommentar: sobald der Spieler mit Gegner3 oder 4 kollidiert, werden diese gelöscht
  var collisions = allCollisions(spieler, [])
  // Kommentar: wir gehen durch alle Kollisionsobjekte durch und löschen sie
  for(var collision of collisions) {
    collision.parentNode.removeChild(collision)
  }

  // Score
  if(parseInt(spieler.style.left) > 100) {
    score = score + 1
    punkteAnzeige.textContent = score
  }

  // Gravity
  if(parseInt(spieler.style.top) < 341.8) {
    spieler.style.top = parseInt(spieler.style.top) + 5 + 'px'
  }

  // Hindernisse
  if(timer.ready()) {
    var a = document.createElement('img')
    a.src = "img/16bit/sand-digger1.png"
    a.classList.add('stein1')
    a.style.top = '53.7vh'
    a.style.left = '1600px'
    spielfeld.appendChild(a)
  }

  var steine1 = document.querySelectorAll('.stein1')
  for(var stein1 of steine1) {
    stein1.style.left = parseInt(stein1.style.left) - 8 + 'px'
    if(parseInt(stein1.style.top) > 400) {
      stein1.parentNode.removeChild(stein1)
    }
  }

  // Background-Scrolling
  backgroundPosition = backgroundPosition + 1;
  spielfeld.style.backgroundPosition = `-${backgroundPosition}px 0`;

  playerFloorPosition = playerFloorPosition + 3;
  spielfeld.style.playerFloorPosition = `-${backgroundPosition}px 0`;

  // Music
  if(musicplay == true) {
    gameMusic.play()
  }

  //Fullscreen
  if(vollbildButton.addEventListener('click', function () {
    spielfeld.requestFullscreen()
  }) == true) {
    a.classList.add('stein1')
    a.style.top = '20.7vh'
  }

  window.requestAnimationFrame(loop)
}
  
window.requestAnimationFrame(loop)
