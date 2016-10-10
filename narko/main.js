function changeText(elem) {
	var text = prompt('Enter text');
	if (text.length > 0) {
		elem.innerHTML = text;
	}
}

function load() {
	// document.getElementsByClassName('wrapper')[0].setAttribute('style', 'background:'+getRandomColor());
	document.getElementsByClassName('cube1')[0].setAttribute('style', 'background:'+getRandomColor());
	document.getElementsByClassName('cube2')[0].setAttribute('style', 'background:'+getRandomColor());
	document.getElementsByClassName('first')[0].setAttribute('style', 'background:'+getRandomColor());
	document.getElementsByClassName('second')[0].setAttribute('style', 'background:'+getRandomColor());
	document.getElementsByClassName('third')[0].setAttribute('style', 'background:'+getRandomColor());
	document.getElementById('section1').setAttribute('style', 'background:'+getRandomColor());
	document.getElementById('section2').setAttribute('style', 'background:'+getRandomColor());
	document.getElementById('section3').setAttribute('style', 'background:'+getRandomColor());
	document.getElementById('section4').setAttribute('style', 'background:'+getRandomColor());
	setTimeout(function() { load() }, 10);
}

// OLD VERSION
// function rC() {
// 	var ran = Math.round(Math.random()*15);
// 	console.log(ran);
// 	return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'][ran];
// }

function getRandomColor() {
	var randColor = '#';
	for (var i = 0; i < 6; i++) {
		randColor += Math.round(Math.random()*15).toString(16);
	}
	return randColor;
}

