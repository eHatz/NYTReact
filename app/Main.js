// Main - contains the main-container div that holds the main layout and navigation.
// This component should also be able to hold sub-components Search and Saved

import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Components/Search.js';

ReactDOM.render(
	<div className = 'col-md-12'>
		<h1>Hello World</h1>
		<Search/>
	</div>,
	document.getElementById('app')
)