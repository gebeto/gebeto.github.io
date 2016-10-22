//canvas 500 x 500
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.canvas.height = 150;
ctx.canvas.width = 300;

var myControllers = {
	text: document.querySelector('input[name=text]'),
	top: document.querySelector('input[name=top]'),
	left: document.querySelector('input[name=left]'),
	fontSize: document.querySelector('input[name=fontSize]'),
	width: document.querySelector('input[name=width]'),
	height: document.querySelector('input[name=height]'),
}

var textProperties = {
	top: ctx.canvas.height/2,
 	left: ctx.canvas.width/2,
 	fontSize: myControllers.fontSize.value
}

myControllers.left.value = textProperties.left;
myControllers.top.value = textProperties.top;

function draw() {
	var text = myControllers.text.value;
	ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
	ctx.fillText(text, textProperties.left, textProperties.top);
}

myControllers.text.addEventListener('input', function(event) {
	draw();
});

myControllers.fontSize.addEventListener('input', function(event) {
	var font = this.value + 'px ' + ctx.font.split(' ')[1];
	ctx.font = font;
	draw();
})

myControllers.left.addEventListener('input', function(event) {
	textProperties.left = this.value;
	draw();
})

myControllers.top.addEventListener('input', function(event) {
	textProperties.top = this.value;
	draw();
})

myControllers.width.addEventListener('input', function(event) {
	ctx.canvas.width = this.value;
});

myControllers.height.addEventListener('input', function(event) {
	ctx.canvas.height = this.value;
});

console.log(canvas);
var drag = false;
canvas.addEventListener('click', function() {
	drag = !drag;
	console.log(drag);
});

canvas.addEventListener('mousemove', function(event) {
	if (drag) {
		textProperties.top = event.layerY + textProperties.fontSize/2;
		textProperties.left = event.layerX - textProperties.fontSize/2;
		myControllers.left.value = textProperties.left;
		myControllers.top.value = textProperties.top;
		draw();
	}
});