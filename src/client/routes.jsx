import React from 'react';

import { Route } from 'react-router';

// Load this component for ALL routes
import Application from './Components/Application';

// lists ALL todo items
import IndexPage from './Components/Pages/IndexPage';

// lists just ACTIVE todo items (not-completed)
import SavedPage from './Components/Pages/SavedPage';

export default (
	/* This means the Application component 
		is gonna be the parent of all components nested w/in this route! */
	<Route component={Application}>

		{/* when the address bar shows /#/, render the IndexPage component */}
		<Route path="/" component={IndexPage} />
		{/* when the address bar shows /#/completed, render the CompletedPage component */}
		<Route path="/saved_articles" component={SavedPage} />

	</Route>
);