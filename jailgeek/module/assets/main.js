var canvas = document.getElementById('main-canvas');
var img = document.getElementById('main-img');
var textInput = document.getElementById('text-input');
var downloadButton = document.getElementById('download-button');

function CanvasDrawer(canvas, bgUrl) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.fontSize = this.lineSpacing = 120;
	this.fontFamily = 'font';
	this.background = this.loadImage(bgUrl);
	this.linesCount = 1;
	this.currentText = 'JailGeek';
	this.top = 280;
	this.setFillStyle();
}

CanvasDrawer.prototype.saveImage = function() {
	console.log(this.canvas);
	var imgg = document.createElement('img');
	imgg.src = this.canvas.toDataURL();
	document.body.appendChild(imgg);
	// var link = document.createElement('a');
	// link.href = this.canvas.toDataURL();
 // 	link.download = this.currentText + '.png';
	// link.click();
}


CanvasDrawer.prototype.loadImage = function(iurl) {
	var bg = new Image();
	bg.addEventListener('load', function() {
		this.ctx.drawImage(bg, 0, 0);
	}.bind(this));
	bg.src = iurl;
	return bg;
}

CanvasDrawer.prototype.setFillStyle = function() {
	var gradient = this.ctx.createLinearGradient(this.canvas.width/2, this.canvas.height/3, this.canvas.width/2, this.canvas.height - this.canvas.height/3);
	// gradient.addColorStop(0.0, "#FCFDFF");
	// gradient.addColorStop(1.0, "#e5c3bd");
	gradient.addColorStop(0.0, "#e5c3bd");
	gradient.addColorStop(1.0, "#d8a79e");
	this.ctx.fillStyle = gradient;
	this.ctx.font = this.fontSize + 'px ' + this.fontFamily;
	this.ctx.textAlign = 'center';
}

CanvasDrawer.prototype.refreshTitle = function(text) {
	this.currentText = (text ? text : this.currentText);
	this.ctx.drawImage(this.background, 0, 0);
	var lines = this.currentText.split('\n');
	// console.log(lines);
	lines.map(function(line, i) {
		var top = this.top + this.fontSize / 3;
		this.ctx.fillText(line, 425, top + this.lineSpacing * i);
	}.bind(this));
}

CanvasDrawer.prototype.moveOneLineUp = function() {
	this.top -= this.fontSize / 2;
	this.refreshTitle();
}

CanvasDrawer.prototype.moveOneLineDown = function() {
	this.top += this.fontSize / 2;
	this.refreshTitle();
}

CanvasDrawer.prototype.moveToCenter = function() {
	this.top = this.canvas.height / 2 - this.fontSize / 2 * (this.currentText.split('\n').length - 1);
	this.refreshTitle();
}

CanvasDrawer.prototype.changeFontSize = function(size) {
	// this.fontSize = this.lineSpacing = size;
	this.fontSize = size;
	this.ctx.font = this.fontSize + 'px ' + this.fontFamily;
	this.refreshTitle();
}

CanvasDrawer.prototype.changeLineSpacing = function(size) {
	this.lineSpacing = size;
	this.refreshTitle();
}

// var drawer = new CanvasDrawer(canvas, 'assets/background.svg');
var drawer = new CanvasDrawer(canvas, 'assets/background.png');

WebFontConfig = {
	custom: {
		families: ['font'],
		urls: ['assets/fonts.css']
	},
	active: function() {
		drawer.refreshTitle();
		textInput.addEventListener('keyup', function (e) {
			drawer.moveToCenter();
			drawer.refreshTitle(this.value);
		});
		downloadButton.addEventListener('click', function(e) {
			drawer.saveImage();
		});
		document.getElementById('fontsize-input').addEventListener('input', function() {
			drawer.changeFontSize(this.value);
		});
		document.getElementById('linespacing-input').addEventListener('input', function() {
			drawer.changeLineSpacing(this.value);
		});
		document.getElementById('move-up').addEventListener('click', function() {
			drawer.moveOneLineUp();
		});
		document.getElementById('move-down').addEventListener('click', function() {
			drawer.moveOneLineDown();
		});
	}
};



