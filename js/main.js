function toMinutes(hour, minute) {
	return ((hour * 60) + minute);
}

var PARES = [
	[toMinutes(8, 30),  toMinutes(10,5)], 
	[toMinutes(10, 20), toMinutes(11, 55)], 
	[toMinutes(12, 10), toMinutes(12, 45)], 
	[toMinutes(14, 15), toMinutes(15, 50)], 
	[toMinutes(16, 5),  toMinutes(17, 40)], 
	[toMinutes(17, 55), toMinutes(18, 30)],
	[toMinutes(18, 45), toMinutes(20, 15)]
];
var CHYSELNYK = chisOrZnam();
var DAY = dayOfWeek();

$(document).ready(function(){

	$(".chys-or-znam").text(CHYSELNYK ? "Чисельник" : "Знаменник");
	$(".day-of-week").text(DAY);
	setStatus(".pg1");

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
	$(pg).find(".status").text(getSubject());
};

function getSubject(number, pg) {
	var res = "До кінця залишилось ";
	var minutesOn = 0;
	var now = (((new Date()).getHours() * 60) + (new Date()).getMinutes());
	for (var i = 0; i < PARES.length; i++)
	{
		if ((now > PARES[i][0]) && (now < PARES[i][1])){
			minutesOn = now - PARES[i][0];
			console.log( i );
			minutesOn = (95 - minutesOn);
		}
	}
	if (minutesOn > 60)
	{
		minutesOn -= 60;
		res += "1 год. "
		res += minutesOn
		res += " хв."
	}
	else
	{
		res += minutesOn;
		res += "хв";
	}
	return res;
};