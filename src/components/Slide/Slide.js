import React from 'react';
import arrow_1 from './../../images/arrow_1.png';
import arrow_2 from './../../images/arrow_2.png';
import cloudly from './../../images/wi-cloud.svg';
import {Item, Item_1, Item_2, Item_3} from './Item/item.js';
import class_item from './Item/item.module.css';
let class_slider= {
'Slider':'Slide_Slider__1khaz',
'Left':'Slide_Left__3hcVX',
'Right':'Slide_Right__1yrY1',
'Container':'Slide_contaner__3LUCb',
'Arrow1':'Slide_Arrow1__1VRgd',
'Arrow2':'Slide_Arrow2__h2XFx'
}
const Slide = () => {
	return (
		<div> 
			<div className={class_slider.Left}>
				<div className ={class_slider.Arrow1}>
					<img src={arrow_1}/>
				</div>
			</div>
			<div className={class_slider.Slider}>
				<div className = {class_slider.Container}>
					<Item />
					<Item_1 />
					<Item_2 />
					<Item_3 />
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
export default Slide;