import React from 'react';
import arrow_1 from './../../images/arrow_1.png';
import arrow_2 from './../../images/arrow_2.png';
import {Item} from './Item/item.jsx';
import class_item from './Item/item.module.css';
import {temperature_day} from './Item/getWeather.js';
import {temperature_night} from './Item/getWeather.js';
import {dayNames} from './Item/getWeek.js'
import {now} from './Item/getWeek.js';
import {days} from './Item/getWeek.js';
let class_slider= {
'Slider':'Slide_Slider__1khaz',
'Left':'Slide_Left__3hcVX',
'Right':'Slide_Right__1yrY1',
'Item':'Slide_Item__K8ODJ',
'Arrow1':'Slide_Arrow1__1VRgd',
'Arrow2':'Slide_Arrow2__h2XFx'
}
const Slide = (props) => {


	return (
		<div id="myCarousel" class ="carousel slide" data-interval="false"> 
			<div className={class_slider.Slider} class="carousel-inner">
					<div class = "item active" >
						<div className = {class_slider.Item}>
							<Item day={days[0]} name_day ="Сегодня"/>
							<Item day={days[1]} name_day ={dayNames[0]}/>
							<Item day={days[2]} name_day ={dayNames[1]}/>
							<Item day={days[3]} name_day ={dayNames[2]}/>
						</div>
				</div>
					<div className = "item">
						<div className = {class_slider.Item}>
							<Item day={days[4]} name_day ={dayNames[3]}/>
							<Item day={days[5]} name_day ={dayNames[4]}/>
							<Item day={days[6]} name_day ={dayNames[5]}/>
							<Item day={days[7]} name_day ={dayNames[6]}/>
						</div>
					</div>
					<div className = "item">
						<div className = {class_slider.Item}>
							<Item day={days[8]} name_day ={dayNames[0]}/>
							<Item day={days[9]} name_day ={dayNames[1]} />
							<Item day={days[10]} name_day ={dayNames[2]} />
							<Item day={days[11]} name_day ={dayNames[3]}/>
						</div>
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
	);
}

export default Slide;
