import React from 'react';
import cloudly from './../../../images/wi-cloud.svg';
import sunny from './../../../images/wi-sun.svg';
import rainy from './../../../images/wi-rain.svg';
import {day} from './functions.js';
import {dayNames} from './functions.js';
import {now} from './functions.js';
import {textout} from './functions.js';
import {result} from './../Slide.js';
let class_item ={
'Item':'item_Item__39tWA',
'Sub':'item_Sub__1TlvC'
}

export const Item = (props) => {
	function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
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

	return (
	<div className={class_item.Item}> 
		<h7>{props.name_day}</h7>
		<br></br>
		<h3>{props.day}</h3>
		<br></br>
		<img src ={img}/>
		<br></br>
		<h4> днем +{temperature_day}<sup>o</sup></h4>
		<br></br>
		<h5> ночью +{temperature_night}<sup>o</sup></h5>
		<div className={class_item.Sub}>
			<center><h6>{sub}</h6></center>
			<center><h6>{sub2}</h6></center>
		</div>
	</div>	
	);
}
export var name_day;
