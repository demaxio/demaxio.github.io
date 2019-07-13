import React from 'react';
import arrow_1 from './../../images/arrow_1.png';
import arrow_2 from './../../images/arrow_2.png';
import cloudly from './../../images/wi-cloud.svg';
import {Item, Item_1, Item_2, Item_3} from './Item/item.js';
import class_item from './Item/item.module.css';
import {temperature_day} from './Item/functions.js';
import {temperature_night} from './Item/functions.js';
import {day} from './Item/functions.js';
import {day1} from './Item/functions.js';
import {day2} from './Item/functions.js';
import {day3} from './Item/functions.js';
import {name_day} from './Item/functions.js';
import {dayNames} from './Item/functions.js';
import {now} from './Item/functions.js';
import {index} from './Item/functions.js';
let class_slider= {
'Slider':'Slide_Slider__1khaz',
'Left':'Slide_Left__3hcVX',
'Right':'Slide_Right__1yrY1',
'Container':'Slide_contaner__3LUCb',
'Arrow1':'Slide_Arrow1__1VRgd',
'Arrow2':'Slide_Arrow2__h2XFx'
}

const Slide = (props) => {
var name_day = dayNames[now.getDay()];
let ip = {index};
let I_map = [
<Item day={day} name_day ="Сегодня" />,
<Item day={day1} name_day ={dayNames[now.getDay()+1]} ip = "0" />,
<Item day={day2}name_day ={dayNames[now.getDay()+2]}  ip ="1" />,
<Item day={day3} name_day ={dayNames[now.getDay()+3]} ip ="2"/>	
];

	return (
		<div> 
			<div className={class_slider.Left}>
				<div className ={class_slider.Arrow1}>
					<img src={arrow_1}/>
				</div>
			</div>
			<div className={class_slider.Slider}>
				<div className = {class_slider.Container}>
					{I_map}	
				</div>
			</div>	
			<div className ={class_slider.Right}>
				<div className ={class_slider.Arrow2}>
					<img src={arrow_2}/>
				</div>
			</div>
		</div>
	);
}
export var result;
export default Slide;
