var canvas = document.getElementById('main-canvas');
var textInput = document.getElementById('text-input');
var downloadButton = document.getElementById('download-button');

function CanvasDrawer(canvas, bgUrl) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.fontSize = this.lineSpacing = 150;
	this.fontFamily = 'CoreSansDS67CnHeavyItalic';
	this.background = this.loadImage(bgUrl);
	this.linesCount = 1;
	this.currentText = '';
	this.top = 280;
	this.setFillStyle();
}

CanvasDrawer.prototype.saveImage = function() {
	console.log(this.canvas);
	var link = document.createElement('a');
    link.href = this.canvas.toDataURL();
    link.download = this.currentText + '.png';
    link.click();
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
	gradient.addColorStop(0.0, "#FCFDFF");
	gradient.addColorStop(1.0, "#E5F4FA");
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
	}.bind(this))
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
	this.fontSize = this.lineSpacing = size;
	this.ctx.font = this.fontSize + 'px ' + this.fontFamily;
	this.refreshTitle();
}

var drawer = new CanvasDrawer(canvas, 'background.svg');

WebFontConfig = {
	custom: {
		families: ['CoreSansDS67CnHeavyItalic'],
		urls: ['fonts.css']
	},
	active: function() {
		textInput.addEventListener('keyup', function (e) {
			drawer.moveToCenter();
			drawer.refreshTitle(this.value);
		});
		downloadButton.addEventListener('click', function(e) {
			drawer.saveImage();
		});
	}
};



