function changeText(elem) {
	var text = prompt('Enter text');
	if (text.length > 0) {
		elem.innerHTML = text;
	}
}

function load() {
	var elements = [
		document.getElementsByClassName('cube1')[0],
		document.getElementsByClassName('cube2')[0],
		document.getElementsByClassName('first')[0],
		document.getElementsByClassName('second')[0],
		document.getElementsByClassName('third')[0],
		document.getElementById('section1'),
		document.getElementById('section2'),
		document.getElementById('section3'),
		document.getElementById('section4')
	];
	setInterval(function() { 
		elements.forEach(function(element){
			element.setAttribute('style', 'background:'+getRandomColor());
		});
	}, 20);
}

function getRandomColor() {
	var randColor = '#';
	for (var i = 0; i < 6; i++) {
		randColor += Math.round(Math.random()*15).toString(16);
	}
	return randColor;
}

