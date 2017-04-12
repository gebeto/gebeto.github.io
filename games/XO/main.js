var canvas;
var ctx;
var board;


window.onresize = function() {
	// canvas.width = window.innerWidth;
	// canvas.height = window.innerHeight;
}


window.onload = function() {
	init();

	canvas.addEventListener('click', board.fillCell.bind(board));

}


function init() {
	canvas = document.createElement('canvas');
	canvas.width = 300;
	canvas.height = 300;
	document.body.appendChild(canvas);
	ctx = canvas.getContext('2d');
	board = new MainBoard(ctx);
}


function MainBoard(context) {
	this.ctx = context;
} 

MainBoard.prototype.fillCell = function(e) {
	var x = e.layerX, y = e.layerY;
	if (x < 100 && y < 100) {x = 0; y = 0;}
	else if (x < 100 && y < 200) {x = 0; y = 100;}
	else if (x < 100 && y < 300) {x = 0; y = 200;}
	else if (x < 200 && y < 100) {x = 100; y = 0;}
	else if (x < 300 && y < 100) {x = 200; y = 0;}
	else if (x < 200 && y < 200) {x = 100; y = 100;}
	else if (x < 300 && y < 200) {x = 200; y = 100;}
	else if (x < 200 && y < 300) {x = 100; y = 200;}
	else if (x < 300 && y < 300) {x = 200; y = 200;}
	this.ctx.fillRect(x, y, 100, 100);
}
