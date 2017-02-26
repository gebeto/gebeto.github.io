var canvas = document.getElementById('main-canvas');

function CanvasDrawer(canvas, bgUrl) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.size = 150;
	this.family = 'CoreSansDS67CnHeavyItalic';
	this.background = this.loadImage(bgUrl);
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
	this.ctx.font = this.size + 'px ' + this.family;
	this.ctx.textAlign = 'center';
}

CanvasDrawer.prototype.setup = function() {
	this.setFillStyle();
}

CanvasDrawer.prototype.refreshTitle = function(text) {
	this.ctx.drawImage(this.background, 0, 0);
	this.ctx.fillText(text, 425, 280 + this.size / 3);
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
			// drawer.
		});
	}
};





