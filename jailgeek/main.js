var canvas = document.getElementById('main-canvas');

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
	console.log(lines);
	lines.map(function(line, i) {
		var top = this.top + this.fontSize / 3;
		this.ctx.fillText(line, 425, top + this.lineSpacing * i);
	}.bind(this))
}


var drawer = new CanvasDrawer(canvas, 'background.svg');

WebFontConfig = {
	custom: {
		families: ['CoreSansDS67CnHeavyItalic'],
		urls: ['fonts.css']
	},
	active: function() {
		document.getElementById('text-input').addEventListener('keyup', function (e) {
			// CanvasDrawer.refreshTitle(this.value);
			drawer.refreshTitle(this.value);
		});
	}
};





