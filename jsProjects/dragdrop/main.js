var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'white';

function Square(sx, sy) {
	this.curPos = [100, 100];
	this.size = [sx, sy];
	this.canDrag = false;
	this.clickedPos = [0, 0];
}

Square.prototype.draw = function() {

	ctx.fillRect(this.curPos[0], this.curPos[1], this.size[0], this.size[1]);

}

var squares = [new Square(50, 50)];

for (var i = 0; i < squares.length; i++)
	squares[i].draw();

document.addEventListener('mousedown', function(event) {
	for (var i = 0; i < squares.length; i++) {
		if ((event.clientX > squares[i].curPos[0] && event.clientX < (squares[i].curPos[0] + squares[i].size[0])) &&
		    (event.clientY > squares[i].curPos[1] && event.clientY < (squares[i].curPos[1] + squares[i].size[1]))) {
			squares[i].canDrag = true;
			squares[i].clickedPos = [event.clientX - squares[i].curPos[0], event.clientY - squares[i].curPos[1]]
			console.log(squares[i].clickedPos[0].toString() + ', ' + squares[i].clickedPos[1].toString());
			ctx.fillStyle = 'red';
			ctx.fillRect(squares[i].curPos[0], squares[i].curPos[1], squares[i].size[0], squares[i].size[1]);
		}
	}
});

document.addEventListener('mouseup', function(event) {
	for (var i = 0; i < squares.length; i++){
		squares[i].canDrag = false;
		ctx.fillStyle = 'white';
		ctx.fillRect(squares[i].curPos[0], squares[i].curPos[1], squares[i].size[0], squares[i].size[1]);
	}
});

document.addEventListener('mousemove', function(event) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].draw();
		if (squares[i].canDrag) {
			ctx.clearRect(squares[i].curPos[0], squares[i].curPos[1], squares[i].size[0], squares[i].size[1]);
			squares[i].curPos = [event.clientX - squares[i].clickedPos[0], event.clientY - squares[i].clickedPos[1]]
			squares[i].draw();
		}
	}

});

document.addEventListener('keypress', function(event) {
	if (event.key === 'a') {
		squares.push(new Square(50, 50));
	}
});

document.addEventListener('contextmenu', function(event) {
	for (var i = 0; i < squares.length; i++) {
		if ((event.clientX > squares[i].curPos[0] && event.clientX < (squares[i].curPos[0] + squares[i].size[0])) &&
		    (event.clientY > squares[i].curPos[1] && event.clientY < (squares[i].curPos[1] + squares[i].size[1]))) {
			ctx.clearRect(squares[i].curPos[0], squares[i].curPos[1], squares[i].size[0], squares[i].size[1]);
			squares.splice(i, 1);
		}
	}
});