import React from 'react';
import BodyPart from './BodyPart.js'

const Body = React.createClass({
	getInitialState: () => {
		return {
			
		}
	},

	render: () => {
		return (
			<div id='bodyDiv'>
				<h1>Im the Body!</h1>
				<BodyPart/>
			</div>
		)
	}
});

module.exports = Body;