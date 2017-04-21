

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
	canvas.width = 100 * colors.length;
	canvas.height = 100;

	ctx.font = '14px Arial';
	colors.map(function(item, index) {
		ctx.fillStyle = item;
		ctx.fillRect(100 * index, 0, 100, 100);
		ctx.fillStyle = '#fff';
		ctx.fillText(item, 100 * index + 4, 96);
	});

	img.src = canvas.toDataURL();
}