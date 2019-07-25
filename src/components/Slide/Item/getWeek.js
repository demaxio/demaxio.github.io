var number= new Number();
var now = new Date();
export let dayNames = ['Суббота', 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
if (now.getDay() + number === dayNames.length) {
      dayNames = dayNames[0];
    }
    if (now.getDay() + number > dayNames.length) {
      let differ = ((now.getDay() + number) - dayNames.length) % 7;
	dayNames = dayNames[differ];}
export let days = ['26 июля','27 июля', '28 июля','29 июля','30 июля','31 июля','1 августа','2 августа','3 августа','4 августа','5 августа','6 августа' ]; 
export var now = new Date();
