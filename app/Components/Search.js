// Search - queries the NYT API for articles. Displays API search results from another possible
// Query component and Results component. Gives the user the ability to save an article to their Saved Articles.

import React from 'react';
import Saved from './Saved.js';
const authKey = 'e91eb77672be41ee9baa15d68ecbb2e5';
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

var Search = React.createClass({

	getInitialState: () => {
		return{
			clicks: 0
		};
	},
	handleClick: (event) => {
		this.setState({
			clicks: this.state.clicks + 1
		});
	},
	render: () => {
		return (
			<div id='searchDiv'>
				<h1>Im the Search! clicks {this.state.clicks}</h1>
				<button onClick={this.handleClick} className='btn btn-primary'>Search</button>
			</div>
		);
	}
});
export default Search;