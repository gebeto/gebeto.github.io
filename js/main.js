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

var CHYSELNYK = getDelta();
var DAY = dayOfWeek();

$(document).ready(function(){

	$(".chys-or-znam").text(CHYSELNYK ? "Чисельник" : "Знаменник");
	$(".day-of-week").text(DAY);

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

function getDelta() {
	var d0 = new Date ().getTime (),
    d  = new Date (new Date ().getFullYear (), 0, 1),
    d1 = d.getTime (),
    dd = d.getDay (),
    re = Math.floor ((d0 - d1) / 8.64e7) + (dd ? dd - 1 : 6);
	return ((Math.floor (re / 7) % 2) ? true : false);
}