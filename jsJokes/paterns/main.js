var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var w = window.innerWidth;
var h = window.innerHeight;

canvas.height = h;
canvas.width = w;

var stroke = prompt('Enter phrase for pattern');
var cnt = 0;

	ctx.translate(w/2, h/2)
function mainLoop() {
	
//	ctx.clearRect(0, 0, w, h);
	ctx.fillText(stroke.slice(0, cnt), 0, 0);
	cnt += 1;
	ctx.rotate(0.1);
	setTimeout(mainLoop, Math.random()*100+100);
	
}

mainLoop();