var mainTitle = document.getElementById('main-text');
var canvas = document.getElementById('main-canvas');
var ctx = canvas.getContext('2d');
var font = {
	size: 150,
	family: 'CoreSansDS67CnHeavyItalic',
}

WebFontConfig = {
	custom: {
		families: ['CoreSansDS67CnHeavyItalic'],
		urls: ['fonts.css']
	},
	active: function() {
		var bg = loadImage('vkpass.svg');
		ctx.font = font.size + 'px ' + font.family;
		ctx.textAlign = 'center';

		var gradient = ctx.createLinearGradient(canvas.width/2, canvas.height/3, canvas.width/2, canvas.height - canvas.height/3);
		gradient.addColorStop(0.0, "#FCFDFF");
		gradient.addColorStop(1.0, "#E5F4FA");
		ctx.fillStyle = gradient;
		document.getElementById('text-input').addEventListener('keyup', function (e) {
			ctx.drawImage(bg, 0, 0);
			ctx.fillText(this.value, 425, 280 + font.size / 3);
		});
	}
};

function loadImage(iurl) {
	var bg = new Image();
	bg.addEventListener('load', function() {
		ctx.drawImage(bg, 0, 0);
	});
	bg.src = iurl;
	return bg;
}





