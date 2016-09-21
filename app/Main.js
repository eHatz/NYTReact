// Main - contains the main-container div that holds the main layout and navigation.
// This component should also be able to hold sub-components Search and Saved

import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Components/Search';

ReactDOM.render(
	<Search/>,
	document.getElementById('app')
)