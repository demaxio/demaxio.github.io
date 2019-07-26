import React from 'react';
let class_header= {
	'header': 'head_header__29DvD'
}
var now = new Date();
var dayNames = new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");

var now = new Date();
var textout;
var month = now.getMonth();
var date = now.getDate();
textout = date;
if (month==0) textout+=" января";
if (month==1) textout+=" февраля";
if (month==2) textout+=" марта";
if (month==3) textout+=" апреля";
if (month==4) textout+=" мая";
if (month==5) textout+=" июня";
if (month==6) textout+=" июля";
if (month==7) textout+=" августа";
if (month==8) textout+=" сентября";
if (month==9) textout+=" октября";
if (month==10) textout+=" ноября";
if (month==11) textout+=" декабря";

var day =  ("Самара, " + textout+", " + dayNames[now.getDay()]); 
const Header = () => {
	return (
		<header className={class_header.header}> 
		<h1>Прогноз погоды</h1>
		&nbsp;{day}
		</header>
	);
}
export default Header;