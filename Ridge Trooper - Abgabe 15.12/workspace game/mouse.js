document.addEventListener('mousemove', bbzGameMouseMove)
document.addEventListener('click', bbzGameMouseClick)

bbzGameMouse = { x: 0, y: 0, click: false };

function bbzGameMouseMove(e) {
	bbzGameMouse.x = e.clientX;
  bbzGameMouse.y = e.clientY;
}

function bbzGameMouseClick(e) {
	bbzGameMouse.click = true;
}

function mousePositionX(playground) {
  var rect = playground.getBoundingClientRect();
  return bbzGameMouse.x - rect.left;
}

function mousePositionY(playground) {
  var rect = playground.getBoundingClientRect();
  return bbzGameMouse.y - rect.top;
}

function mouseClick() {
	if(bbzGameMouse.click) {
  	bbzGameMouse.click = false;
    return true;
  }
  return false;
}
