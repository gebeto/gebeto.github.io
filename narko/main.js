function changeText(elem) {
	var text = prompt("Enter text");
	if (text.length > 0)
		elem.innerHTML = text;
}

function load() {
	// document.getElementsByClassName("wrapper")[0].setAttribute("style", "background:"+getRandomColor());
	document.getElementsByClassName("cube1")[0].setAttribute("style", "background:"+getRandomColor());
	document.getElementsByClassName("cube2")[0].setAttribute("style", "background:"+getRandomColor());
	document.getElementsByClassName("first")[0].setAttribute("style", "background:"+getRandomColor());
	document.getElementsByClassName("second")[0].setAttribute("style", "background:"+getRandomColor());
	document.getElementsByClassName("third")[0].setAttribute("style", "background:"+getRandomColor());
	document.getElementById("section1").setAttribute("style", "background:"+getRandomColor());
	document.getElementById("section2").setAttribute("style", "background:"+getRandomColor());
	document.getElementById("section3").setAttribute("style", "background:"+getRandomColor());
	document.getElementById("section4").setAttribute("style", "background:"+getRandomColor());
	setTimeout(function() { load() }, 10);
}

function rC() {
	var ran = Math.round(Math.random()*(14-0)+0);
	return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"][ran];
}

function getRandomColor() {
	return "#"+rC()+rC()+rC()+rC()+rC()+rC();
}