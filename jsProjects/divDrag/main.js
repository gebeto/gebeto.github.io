var myDiv = document.getElementById('drag');

var move = false;

var shadow = 0;

document.addEventListener('mousedown', function(event) {
	myDiv.style.left = event.clientX + 'px';
	myDiv.style.top = event.clientY + 'px';
	move = true;
	addShadow();
});

document.addEventListener('mouseup', function(event) {
	move = false;
	myDiv.style.boxShadow = '0';

});

document.addEventListener('mousemove', function(event) {
	if (move) {
		myDiv.style.left = event.clientX + 'px';
		myDiv.style.top = event.clientY + 'px';
	}
});

function addShadow() {

	myDiv.style.boxShadow = '0 0 '+ shadow++ +'px #333';
	if (shadow > 10) return;
	window.requestAnimationFrame(addShadow);
	
}