var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var w = window.innerWidth;
var h = window.innerHeight;

canvas.height = h;
canvas.width = w;

var stroke = prompt('Enter phrase for pattern');
var cnt = 0;
var count = 0;
ctx.fillStyle = 'rgba(0,0,0,0.8)';

ctx.translate(w/2, h/2);
ctx.scale(2.2, 2.2);
function mainLoop() {
	if (count == 180) return;
	count++;
	ctx.fillText(stroke, 0, 0);
	cnt += 1;
	ctx.rotate(Math.PI/90);
	window.requestAnimationFrame(mainLoop);
	
}

mainLoop();