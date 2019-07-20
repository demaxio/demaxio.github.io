
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

