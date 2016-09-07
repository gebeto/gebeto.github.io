var PARES = [[510, 605], [620, 715], [730, 825], [855, 950], [965, 1060], [1075, 1110]];
var CHYSELNYK = chisOrZnam();
var DAY = dayOfWeek();

$(document).ready(function(){

	$(".chys-or-znam").text(CHYSELNYK ? "Чисельник" : "Знаменник");
	$(".day-of-week").text(DAY);
	setStatus(".pg1");
	setStatus(".pg2");

});

function dayOfWeek(){
	var myDate = new Date();
	return ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"][myDate.getDay()];
};

function chisOrZnam(){
	var SeptemberStart = 1473033600;
	var week = 604800;
	var now = parseInt(new Date().getTime()/1000);
	var chyselnyk = true;
	while(SeptemberStart < now){
		chyselnyk = !chyselnyk;
		SeptemberStart += week;
	}
	return chyselnyk;
};

function setStatus(pg) {
	var date = new Date();
	var subGroup = $(pg);
	var now = date.getHours() * 60 + date.getMinutes();
	$.each(PARES, function(key, vals){
		if ((now > vals[0])&&(now < vals[1])){
			var toEnd = vals[1]-now;
			if (toEnd > 60) toEnd = "1 год. "+(toEnd-60)
			var subj = getSubject(key, pg)
			if (subj == false) return 0;
			subGroup.find(".status").html((key+1)+" пара, <br>"+getSubject(key, pg)+"<br>до кінця залишилось "+toEnd+" хв.");
		}
	});

};

function getSubject(number, pg) {
	// number -= 1;
	var day = $(pg).find("ul");
	if (CHYSELNYK) day = day.slice(0,4);
	else day = day.slice(4,9);
	day = day[(new Date).getDay()];

	day = $(day).find("li");

	$.each(day, function(key, val){
		ind = $(val).find("H1").text();
		if (parseInt(ind) == number){
			// console.log( ind );
			// console.log( $(val).find("td")[1].innerText );
			day = $(val).find("td")[1];
			day = $(day).find("H3").text();
		}

	});
	if (day.toString() == "[object Object]")
		return false;
	return day;
}