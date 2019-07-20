var number= new Number();
var now = new Date();
export let dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
if (now.getDay() + number === dayNames.length) {
      dayNames = dayNames[0];
    }
    if (now.getDay() + number > dayNames.length) {
      let differ = ((now.getDay() + number) - dayNames.length) % 7;
	dayNames = dayNames[differ];}
export let days = ['20 июля','21 июля', '22 июля','23 июля','24 июля','25 июля','26 июля','27 июля','28 июля','29 июля','30 июля','31 июля' ]; 
export var now = new Date();
