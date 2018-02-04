var images = document.getElementById('images');
var header = new Image();
header.src = 'header.jpg';

function drawLogoInCtx(canvas, img) {
	var ctx = canvas.getContext('2d');

	var cwidth = canvas.width;
	var cheight = canvas.height;
	
	// console.log('canvas', cwidth, cheight);
	// console.log('img', header.width, header.height);

	ctx.globalAlpha = 1.0;
	ctx.drawImage(img, 0, 0);

	ctx.drawImage(
		header,
		0, 0,
		cwidth,
		header.height * (cwidth / header.width)
	);
}

function createImageWithFile(openedFile, index) {
	var img = new Image();
	img.onload = function() {
		var blc = document.createElement('div');
		blc.className = 'image';
		var canvas = document.createElement('canvas');
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext('2d');
		drawLogoInCtx(canvas, img);
		// blc.appendChild(canvas);
		var link = document.createElement('a');
	    link.href = canvas.toDataURL();
	    link.download = index + '.png';
	    link.innerHTML = 'Скачать';
	    link.className = 'download';
	    link.setAttribute('target', '_blank');
		var imgForSave = document.createElement('img');
		imgForSave.src = canvas.toDataURL();
		imgForSave.height = 200;
		blc.appendChild(imgForSave);
		document.getElementById('results').appendChild(blc);
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
