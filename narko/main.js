function changeText(elem) {
	var name = prompt("Enter text");
	if (name.length > 0)
		elem.innerHTML = name;
}

function load() {
	document.getElementsByClassName("wrapper")[0].setAttribute("style", "background:"+getRandomColor());
	setTimeout(function() { load() }, 10);
}

function rC() {
	return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"][Math.round(Math.random()*15)];
}

function getRandomColor() {
	return "#"+rC()+rC()+rC()+rC()+rC()+rC();
}