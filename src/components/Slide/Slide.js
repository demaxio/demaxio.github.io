import React from 'react';
import arrow_1 from './../../images/arrow_1.png';
import arrow_2 from './../../images/arrow_2.png';
import cloudly from './../../images/wi-cloud.svg';
import {Item} from './Item/item.js';
import class_item from './Item/item.module.css';
import {temperature_day} from './Item/functions.js';
import {temperature_night} from './Item/functions.js';
import {day,day1, day2,day3,day4,day5,day6,day7,day8,day9,day10,day11,day12} from './Item/functions.js';
import {name_day} from './Item/functions.js';
import {dayNames} from './Item/functions.js';
import {now} from './Item/functions.js';
import {index} from './Item/functions.js';
import './JS.js';
let class_slider= {
'Slider':'Slide_Slider__1khaz',
'Left':'Slide_Left__3hcVX',
'Right':'Slide_Right__1yrY1',
'Item':'Slide_Item__K8ODJ',
'Arrow1':'Slide_Arrow1__1VRgd',
'Arrow2':'Slide_Arrow2__h2XFx'
}
const Slide = (props) => {
var name_day = dayNames[now.getDay()];
	return (
		<div id="myCarousel" class ="carousel slide"> 
			<div className={class_slider.Slider} class="carousel-inner">
					<div class = "item active" >
						<div className = {class_slider.Item}>
							<Item day={day} name_day ="Сегодня"/>
							<Item day={day1} name_day ={dayNames[now.getDay()+1]}/>
							<Item day={day2}name_day ={dayNames[now.getDay()+2]} />
							<Item day={day3} name_day ={dayNames[now.getDay()+3]}/>
						</div>
				</div>
					<div className = "item">
						<div className = {class_slider.Item}>
							<Item day={day4} name_day ={dayNames[now.getDay()+4]} />
							<Item day={day5} name_day ={dayNames[now.getDay()+5]} />
							<Item day={day6}name_day ={dayNames[now.getDay()+6]} />
							<Item day={day7} name_day ={dayNames[now.getDay()+7]} />
						</div>
					</div>
					<div className = "item">
						<div className = {class_slider.Item}>
							<Item day={day8}  name_day ={dayNames[now.getDay()+8]} />
							<Item day={day9} name_day ={dayNames[now.getDay()+9]} />
							<Item day={day10}name_day ={dayNames[now.getDay()+10]} />
							<Item day={day11} name_day ={dayNames[now.getDay()+11]}/>
						</div>
					</div>
				<div className={class_slider.Left} href="#myCarousel" data-slide="prev">
					<div className ={class_slider.Arrow1}>
						<img src={arrow_1}/>
					</div>
				</div>
				<div className ={class_slider.Right} href="#myCarousel" data-slide="next">
					<div className ={class_slider.Arrow2}>
						<img src={arrow_2}/>
					</div>
				</div>
			</div>
		</div>
	);
}
export var result;
export default Slide;
