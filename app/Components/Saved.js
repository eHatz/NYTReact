// Saved - displays the Saved Articles that were searched and stored in the database

import React from 'react';

const Saved = React.createClass({
	getInitialState: () => {
		return {
			
		}
	},

	render: () => {
		return (
			<div id='savedDiv'>
				<h1>Im the Saved!</h1>
			</div>
		)
	}
});

export default Saved;