var now = new Date();
var dayNames = new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота", "Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота" );
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

var date = now.getDate()+4;
textout = date;
var month = now.getMonth();
if (month ==0) day4 = textout + " января";
if (month ==1) day4 = textout + " февраля";
if (month ==2) day4 = textout + " марта";
if (month ==3) day4 = textout + " апреля";
if (month ==4) day4 = textout + " мая";
if (month ==5) day4 = textout + " июня";
if (month ==6) day4 = textout + " июля";
if (month ==7) day4 = textout + " августа";
if (month ==8) day4 = textout + " сентября";
if (month ==9) day4 = textout + " октября";
if (month ==10)day4 = textout + " ноября";
if (month ==11) day4 = textout + " декабря";

var date = now.getDate()+5;
textout = date;
var month = now.getMonth();
if (month ==0) day5= textout + " января";
if (month ==1) day5 = textout + " февраля";
if (month ==2) day5 = textout + " марта";
if (month ==3) day5 = textout + " апреля";
if (month ==4) day5 = textout + " мая";
if (month ==5) day5 = textout + " июня";
if (month ==6) day5 = textout + " июля";
if (month ==7) day5 = textout + " августа";
if (month ==8) day5 = textout + " сентября";
if (month ==9) day5 = textout + " октября";
if (month ==10)day5 = textout + " ноября";
if (month ==11) day5 = textout + " декабря";

var date = now.getDate()+6;
textout = date;
var month = now.getMonth();
if (month ==0) day6 = textout + " января";
if (month ==1) day6 = textout + " февраля";
if (month ==2) day6= textout + " марта";
if (month ==3) day6 = textout + " апреля";
if (month ==4) day6 = textout + " мая";
if (month ==5) day6 = textout + " июня";
if (month ==6) day6 = textout + " июля";
if (month ==7) day6 = textout + " августа";
if (month ==8) day6 = textout + " сентября";
if (month ==9) day6 = textout + " октября";
if (month ==10)day6 = textout + " ноября";
if (month ==11) day6 = textout + " декабря";

var date = now.getDate()+7;
textout = date;
var month = now.getMonth();
if (month ==0) day7 = textout + " января";
if (month ==1) day7 = textout + " февраля";
if (month ==2) day7 = textout + " марта";
if (month ==3) day7 = textout + " апреля";
if (month ==4) day7 = textout + " мая";
if (month ==5) day7 = textout + " июня";
if (month ==6) day7 = textout + " июля";
if (month ==7) day7 = textout + " августа";
if (month ==8) day7 = textout + " сентября";
if (month ==9) day7 = textout + " октября";
if (month ==10)day7 = textout + " ноября";
if (month ==11) day7 = textout + " декабря";

var date = now.getDate()+8;
textout = date;
var month = now.getMonth();
if (month ==0) day8 = textout + " января";
if (month ==1) day8 = textout + " февраля";
if (month ==2) day8 = textout + " марта";
if (month ==3) day8 = textout + " апреля";
if (month ==4) day8 = textout + " мая";
if (month ==5) day8 = textout + " июня";
if (month ==6) day8 = textout + " июля";
if (month ==7) day8 = textout + " августа";
if (month ==8) day8 = textout + " сентября";
if (month ==9) day8 = textout + " октября";
if (month ==10)day8 = textout + " ноября";
if (month ==11) day8 = textout + " декабря";

var date = now.getDate()+9;
textout = date;
var month = now.getMonth();
if (month ==0) day9 = textout + " января";
if (month ==1) day9 = textout + " февраля";
if (month ==2) day9 = textout + " марта";
if (month ==3) day9 = textout + " апреля";
if (month ==4) day9 = textout + " мая";
if (month ==5) day9 = textout + " июня";
if (month ==6) day9 = textout + " июля";
if (month ==7) day9 = textout + " августа";
if (month ==8) day9 = textout + " сентября";
if (month ==9) day9 = textout + " октября";
if (month ==10)day9 = textout + " ноября";
if (month ==11) day9 = textout + " декабря";

var date = now.getDate()+10;
textout = date;
var month = now.getMonth();
if (month ==0) day10 = textout + " января";
if (month ==1) day10 = textout + " февраля";
if (month ==2) day10 = textout + " марта";
if (month ==3) day10 = textout + " апреля";
if (month ==4) day10 = textout + " мая";
if (month ==5) day10 = textout + " июня";
if (month ==6) day10 = textout + " июля";
if (month ==7) day10 = textout + " августа";
if (month ==8) day10 = textout + " сентября";
if (month ==9) day10 = textout + " октября";
if (month ==10)day10 = textout + " ноября";
if (month ==11) day10 = textout + " декабря";

var date = now.getDate()+11;
textout = date;
var month = now.getMonth();
if (month ==0) day11 = textout + " января";
if (month ==1) day11 = textout + " февраля";
if (month ==2) day11 = textout + " марта";
if (month ==3) day11 = textout + " апреля";
if (month ==4) day11 = textout + " мая";
if (month ==5) day11 = textout + " июня";
if (month ==6) day11 = textout + " июля";
if (month ==7) day11 = textout + " августа";
if (month ==8) day11 = textout + " сентября";
if (month ==9) day11 = textout + " октября";
if (month ==10)day11 = textout + " ноября";
if (month ==11) day11 = textout + " декабря";

var date = now.getDate()+12;
textout = date;
var month = now.getMonth();
if (month ==0) day12 = textout + " января";
if (month ==1) day12 = textout + " февраля";
if (month ==2) day12 = textout + " марта";
if (month ==3) day12 = textout + " апреля";
if (month ==4) day12 = textout + " мая";
if (month ==5) day12 = textout + " июня";
if (month ==6) day12 = textout + " июля";
if (month ==7) day12 = textout + " августа";
if (month ==8) day12 = textout + " сентября";
if (month ==9) day12 = textout + " октября";
if (month ==10)day12 = textout + " ноября";
if (month ==11) day12 = textout + " декабря";

	
 export var day, day1,day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12;
 export var index;
export var name_day = dayNames[now.getDay()];
export var dayNames;
