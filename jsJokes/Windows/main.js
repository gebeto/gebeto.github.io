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

document.addEventListener('mousedown', function(event) {
	moveWindow = true;
	draw();
});

document.addEventListener('mouseup', function(event) {
	moveWindow = false;	
});

document.addEventListener('mousemove', function(event) {
	if (moveWindow) {
		// ctx.fillRect(0, 0, ww, hh);
		ctx.drawImage(win, event.clientX - win.naturalWidth/2, event.clientY-20);
	}
});


var raf;
var running = false;
var ball = {
  x: 100,
  y: 100,
  vx: 4,
  vy: 2,
  draw: function() {
  	ctx.drawImage(win, this.x, this.y);
  }
};

function draw() {
	ball.draw();
	ball.x += ball.vx;
	ball.y += ball.vy;
	
	if (ball.y + ball.vy > canvas.height - win.naturalHeight || ball.y + ball.vy < 0) {
		ball.vy = -ball.vy;
	}

	if (ball.x + ball.vx > canvas.width - win.naturalHeight || ball.x + ball.vx < 0) {
		ball.vx = -ball.vx;
	}
	
	raf = window.requestAnimationFrame(draw);
}

// draw();
ctx.fillStyle = "white";
ctx.font = "40px Arial";
ctx.fillText("Press left mouse key...", ww/2, hh/2);