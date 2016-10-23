var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.font = '20px Arial';

function draw(x, y) {
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = 'white';
	ctx.beginPath();
	ctx.arc(x, y, 40, 0, Math.PI*2);
	ctx.fill();
	
	
	ctx.fillStyle = 'black';
	ctx.fillText('ЙДИ', canvas.width/2 - 60, canvas.height/2 - 20);
	ctx.fillText('НАХУЙ', canvas.width/2 + 10, canvas.height/2 + 20);
	ctx.fillText('УЙОБОК', canvas.width/2 - 100, canvas.height/2 + 100);
}

function mainLoop() {
	
//	draw();
	
	window.requestAnimationFrames(mainLoop);
}

//mainLoop();

document.addEventListener('mousemove', function(event) {
	draw(event.clientX, event.clientY);
});