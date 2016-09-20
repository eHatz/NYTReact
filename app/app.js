import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.js';
import Body from './Components/Body.js';

ReactDOM.render(
	<div className = 'col-md-12'>
		<Header/>
		<h1>Hello World</h1>
		<Body/>
	</div>,
	document.getElementById('app')
)