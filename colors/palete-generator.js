

// var colors = ['F7F8FA', '3CA1D8', 'D7DADC', '6C8F8B', '3CAEE2', 'F17052', '51C1B0', '85CFD8'];

function createPalete(colors) {
	colors = colors.map(function(item, index) {
		if (item[0] !== '#') return '#' + item;
		return item;
	});

	var canvas = document.createElement('canvas');
	var img = document.createElement('img');
	// img.style.width = '100%';
	img.className = 'generated-palete';
	img.addEventListener('click', function() {
		this.outerHTML = '';
	});
	document.body.insertBefore(img, document.body.children[0]);
	var ctx = canvas.getContext('2d');
	canvas.width = 300 * colors.length;
	canvas.height = 300;

	ctx.font = 'bold 40px Arial';
	ctx.textAlign = 'center';
	colors.map(function(item, index) {
		ctx.fillStyle = item;
		ctx.fillRect(300 * index, 0, 300, 300);
		ctx.fillStyle = '#fff';
		ctx.fillText(item, 300 * index + 150, 170);
	});

	img.src = canvas.toDataURL();
}