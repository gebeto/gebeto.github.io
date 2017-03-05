var images = document.getElementById('images');
var logo = new Image();
logo.src = 'logo.png';

function drawLogoInCtx(ctx, img) {
	ctx.globalAlpha = 1.0;
	ctx.drawImage(img, 0, 0);
	var smallerHeight = (img.width > img.height);
	// logoSize = (img.width > img.height ? img.height : img.width) / 5;
	logoSize = (smallerHeight ? img.height : img.width);
	logoSize -= logoSize / 10;
	ctx.globalAlpha = 0.1;
	if (smallerHeight) {
		ctx.drawImage(logo, img.width / 2 - logoSize / 2, logoSize / 20, logoSize, logoSize);
	} else {
		ctx.drawImage(logo, logoSize / 20, img.height / 2 - logoSize / 2, logoSize, logoSize);
	}
}

function createImageWithFile(openedFile, index) {
	var img = new Image();
	img.onload = function() {
		var blc = document.createElement('div');
		var canvas = document.createElement('canvas');
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext('2d');
		drawLogoInCtx(ctx, img);
		blc.appendChild(canvas);
		var link = document.createElement('a');
	    link.href = canvas.toDataURL();
	    link.download = index + '.png';
	    link.innerHTML = 'Скачать';
	    link.className = 'download';
	    link.setAttribute('target', '_blank');
		blc.appendChild(link);
		document.body.appendChild(blc);

	    // link.click();

	};
	img.src = URL.createObjectURL(openedFile);
}

images.addEventListener('change', function(e) {
	var files = this.files;
	console.log(files[0]);
	for (var i = 0; i < files.length; i++) {
		createImageWithFile(files[i], i);
	}
});



