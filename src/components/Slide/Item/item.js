import React from 'react';
import cloudly from './../../../images/wi-cloud.svg';
import sunny from './../../../images/wi-sun.svg';
import rainy from './../../../images/wi-rain.svg';
import {day} from './functions.js';
import {temperature_day} from './functions.js';
import {day1} from './functions.js';
import {day2} from './functions.js';
import {day3} from './functions.js';
import {dayNames} from './functions.js';
import {now} from './functions.js';
import {textout} from './functions.js';
let class_item ={
'Item':'item_Item__39tWA',
'Sub':'item_Sub__1TlvC'
}

export const Item = () => {
	function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
	var temperature_day = getRandomInt(24, 34);
	if (temperature_day <=29) {
		var img = require('./../../../images/wi-cloud.svg');
		var stat = 'облачно,';
		var stat2 = 'без осадков';
}
	if (temperature_day >25 && temperature_day <29) {
		var img = require('./../../../images/wi-sun.svg');
		var stat = 'ясно,';
		var stat2 = 'без осадков';
}
else {
	var img = require('./../../../images/wi-rain.svg');
	var stat = 'облачно,';
	var stat2 = 'возможен дождь';
}
var temperature_night = getRandomInt(20, 26);
	return (
	<div className={class_item.Item}> 
		<h7>Сегодня</h7>
		<br></br>
		<h3>{day}</h3>
		<br></br>
		<img src ={img}/>
		<br></br>
		<h4> днем +{temperature_day}<sup>o</sup></h4>
		<h5> ночью +{temperature_night}<sup>o</sup></h5>
		<div className={class_item.Sub}>
			<center><h6>{stat}</h6></center>
			<center><h6>{stat2}</h6></center>
		</div>
	</div>	
	);
}
export const Item_1 = () => {
	function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
	var temperature_day = getRandomInt(24, 34);
	if (temperature_day <=29) {
		var img = require('./../../../images/wi-cloud.svg');
		var stat = 'облачно,';
		var stat2 = 'без осадков';
}
	if (temperature_day >25 && temperature_day <29) {
		var img = require('./../../../images/wi-sun.svg');
		var stat = 'ясно,';
		var stat2 = 'без осадков';
}
else {
	var img = require('./../../../images/wi-rain.svg');
	var stat = 'облачно,';
	var stat2 = 'возможен дождь';
}
var temperature_night = getRandomInt(20, 26);

	return (
	<div className={class_item.Item}> 
		<span>{dayNames[now.getDay()+1]}</span>
		<br></br>
		<h3>{day1}</h3>
		<br></br>
		<img src ={img}/>
		<br></br>
		<h4> днем +{temperature_day}<sup>o</sup></h4>
		<h5> ночью +{temperature_night}<sup>o</sup></h5>
		<div className={class_item.Sub}>
			<center><h6>{stat}</h6></center>
			<center><h6>{stat2}</h6></center>
		</div>
	</div>	
	);
}
export const Item_2 = () => {
	function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
	var temperature_day = getRandomInt(24, 34);
	if (temperature_day > 29) {
		var img = require('./../../../images/wi-sun.svg');
		var stat = 'ясно,';
		var stat2 = 'без осадков';
}
	if (temperature_day > 25 && temperature_day < 29) {
		var img = require('./../../../images/wi-cloud.svg');
		var stat = 'облачно,';
		var stat2 = 'без осадков';
}
else {
	var img = require('./../../../images/wi-rain.svg');
	var stat = 'облачно,';
	var stat2 = 'возможен дождь';
}
var temperature_night = getRandomInt(20, 26);
	return (
	<div className={class_item.Item}> 
		<span>{dayNames[now.getDay()+2]}</span>
		<br></br>
		<h3>{day2}</h3>
		<br></br>
		<img src ={img}/>
		<br></br>
		<h4> днем +{temperature_day}<sup>o</sup></h4>
		<h5> ночью +{temperature_night}<sup>o</sup></h5>
		<div className={class_item.Sub}>
			<center><h6>{stat}</h6></center>
			<center><h6>{stat2}</h6></center>
		</div>
	</div>	
	);
}

export const Item_3 = () => {
	function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
	var temperature_day = getRandomInt(24, 34);
	if (temperature_day <=29) {
		var img = require('./../../../images/wi-cloud.svg');
		var stat = 'облачно,';
		var stat2 = 'без осадков';
}
	if (temperature_day >25 && temperature_day <29) {
		var img = require('./../../../images/wi-sun.svg');
		var stat = 'ясно,';
		var stat2 = 'без осадков';
}
else {
	var img = require('./../../../images/wi-rain.svg');
	var stat = 'облачно,';
	var stat2 = 'возможен дождь';
}
var temperature_night = getRandomInt(20, 26);
	return (
	<div className={class_item.Item}> 
		<span>{dayNames[now.getDay()+3]}</span>
		<br></br>
		<h3>{day3}</h3>
		<br></br>
		<img src ={img}/>
		<br></br>
		<h4> днем +{temperature_day}<sup>o</sup></h4>
		<h5> ночью +{temperature_night}<sup>o</sup></h5>
		<div className={class_item.Sub}>
			<center><h6>{stat}</h6></center>
			<center><h6>{stat2}</h6></center>
		</div>
	</div>	
	);
}