var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var win = new Image();
win.src = ['lab.png', 'target.png'][Math.round(Math.random()*1)];
console.log(Math.round(Math.random()*2));

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ww = window.innerWidth;
var hh = window.innerHeight;

var curX = (ww/2) - (win.naturalWidth/2);
var curY = (hh/2) - (win.naturalHeight/2);

var moveWindow = false;

ctx.fillRect(0, 0, ww, hh);
ctx.drawImage(win, curX, curY);

var curPos = [0, 0];
document.addEventListener('mousedown', function(event) {
	curPos = [event.clientX, event.clientY];
	moveWindow = true;
});

document.addEventListener('mouseup', function(event) {
	moveWindow = false;	
});

document.addEventListener('mousemove', function(event) {
	if (moveWindow) {
		ctx.fillRect(0, 0, ww, hh);
		ctx.drawImage(win, event.clientX - win.naturalWidth/2, event.clientY-20);
	}
});
