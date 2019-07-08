import React from 'react';
import'./App.css';
import Header from './components/Head/head.js';
import class_header from './components/Head/head.module.css';
import Slide from './components/Slide/Slide.js';
import class_slider from './components/Slide/Slide.module.css';
function App() {
  return (
    <div className="App">
		<div className="Head">
			<center><Header /></center>
		</div>
		<div className="Slide">
			<Slide />
		</div>
	</div>
  );
}

export default App;
