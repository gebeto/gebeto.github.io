var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var img = new Image();
img.src = 'gummy.png';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function mainLoop() {
	
}


document.addEventListener('click', function(event){
	ctx.drawImage(img, event.clientX-55, event.clientY-50);
});