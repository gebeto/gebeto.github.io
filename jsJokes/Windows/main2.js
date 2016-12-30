var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var win = new Image();
win.src = 'lab.png';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ww = window.innerWidth;
var hh = window.innerHeight;

var curX = (ww/2) - (win.naturalWidth/2);
var curY = (hh/2) - (win.naturalHeight/2);

var moveWindow = false;

ctx.fillRect(0, 0, ww, hh);

var raf;
var running = false;
var ball = {
  draw: function() {
  	ctx.drawImage(win, 
  		Math.random()*(ww - win.naturalWidth), 
  		Math.random()*(hh - win.naturalHeight));
  }
};

function draw() {
	
	ball.draw();
	
	raf = window.requestAnimationFrame(draw);
}

draw();
// draw();
ctx.fillStyle = "white";
ctx.font = "40px Arial";
ctx.fillText("Press left mouse key...", ww/2, hh/2);