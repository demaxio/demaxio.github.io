var now = new Date();
var dayNames = new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота" );
export var now = new Date();
var textout;
var date;
var day;
var day1;
var day2;
var temperature_day;
var temperature_night;
var img = new Image();
var sub;
var stat2;

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;}
	
var temperature_day = getRandomInt(24, 34);
	if (temperature_day <=29) {
		var img = require('./../../../images/wi-cloud.svg');
		var sub = 'облачно,';
		var sub2 = 'без осадков';
}
	if (temperature_day >25 && temperature_day <29) {
		var img = require('./../../../images/wi-sun.svg');
		var sub = 'ясно,';
		var sub2 = 'без осадков';
}
else {
	var img = require('./../../../images/wi-rain.svg');
	var sub = 'облачно,';
	var sub2 = 'возможен дождь';
}
var temperature_night = getRandomInt(20, 26);
export var temperature_day, temperature_night;

var index;
if (index = "0") {
var date = now.getDate();
textout = date;
var month = now.getMonth();
if (month ==0) day = textout + " января";
if (month ==1) day = textout + " февраля";
if (month ==2) day = textout + " марта";
if (month ==3) day = textout + " апреля";
if (month ==4) day = textout + " мая";
if (month ==5) day = textout + " июня";
if (month ==6) day = textout + " июля";
if (month ==7) day = textout + " августа";
if (month ==8) day = textout + " сентября";
if (month ==9) day = textout + " октября";
if (month ==10)day = textout + " ноября";
if (month ==11) day = textout + " декабря";
}
if (index ="1") {
var date = now.getDate()+1;
textout = date;
var month = now.getMonth();
if (month ==0) day1 = textout + " января";
if (month ==1) day1 = textout + " февраля";
if (month ==2) day1 = textout + " марта";
if (month ==3) day1 = textout + " апреля";
if (month ==4) day1 = textout + " мая";
if (month ==5) day1 = textout + " июня";
if (month ==6) day1 = textout + " июля";
if (month ==7) day1 = textout + " августа";
if (month ==8) day1 = textout + " сентября";
if (month ==9) day1 = textout + " октября";
if (month ==10)day1 = textout + " ноября";
if (month ==11) day1 = textout + " декабря";
}
if (index ="2") {
var date = now.getDate()+2;
textout = date;
var month = now.getMonth();
if (month ==0) day2 = textout + " января";
if (month ==1) day2 = textout + " февраля";
if (month ==2) day2 = textout + " марта";
if (month ==3) day2 = textout + " апреля";
if (month ==4) day2 = textout + " мая";
if (month ==5) day2 = textout + " июня";
if (month ==6) day2 = textout + " июля";
if (month ==7) day2 = textout + " августа";
if (month ==8) day2 = textout + " сентября";
if (month ==9) day2 = textout + " октября";
if (month ==10)day2 = textout + " ноября";
if (month ==11) day2 = textout + " декабря";
}
if (index ="3") {
var date = now.getDate()+3;
textout = date;
var month = now.getMonth();
if (month ==0) day3 = textout + " января";
if (month ==1) day3 = textout + " февраля";
if (month ==2) day3 = textout + " марта";
if (month ==3) day3 = textout + " апреля";
if (month ==4) day3 = textout + " мая";
if (month ==5) day3 = textout + " июня";
if (month ==6) day3 = textout + " июля";
if (month ==7) day3 = textout + " августа";
if (month ==8) day3 = textout + " сентября";
if (month ==9) day3 = textout + " октября";
if (month ==10)day3 = textout + " ноября";
if (month ==11) day3 = textout + " декабря";
}	
 export var day, day1,day2, day3;
 export var index;
export var name_day = dayNames[now.getDay()];
export var dayNames;
