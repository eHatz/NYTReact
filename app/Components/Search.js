// Search - queries the NYT API for articles. Displays API search results from another possible
// Query component and Results component. Gives the user the ability to save an article to their Saved Articles.

import React from 'react';
import Saved from './Saved.js';
const authKey = 'e91eb77672be41ee9baa15d68ecbb2e5';
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

var Search = React.createClass({

	getInitialState: function() {
		return{
			clicks: 0
		};
		
	},
	handleClick: function(event) {
		var query = document.getElementById('articleSearch').value;
		var resultsDiv = document.getElementById('resultsDiv');
		resultsDiv.innerHTML = '';

		fetch(queryURLBase + query, {method: 'GET'}).then(function (NYTData) {
			NYTData.json().then(function(json) {
				var results = json.response.docs;
				for (var i = 0; i < results.length; i++) {
					var singleResult = document.createElement( 'div')
						singleResult.id = i;
						singleResult.className = 'singleResult';
						singleResult.innerHTML =  results[i].headline.main;

					resultsDiv.appendChild(singleResult);
				}
				
			});
		})
	},
	render: function() {
		return (
			<div className='container'>

				<div className='row'>
					<div className='col-md-12' id='searchDiv'>
						<input type='text' id='articleSearch' placeholder='Search Articles'/>
						<button onClick={this.handleClick} className='btn btn-primary'>Search</button>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12' id='resultsDiv'>
						
					</div>
				</div>

			</div>
		);
	}
})
export default Search;
// class Search extends React.Component{

// 	// This is the equivalent of our "getInitialState"
// 	constructor(props){

// 		// This super(props) line lets us access our Searchs properties as props.
// 		super(props);

// 		// This line gives us access to state variables.
// 		this.state = {
// 			clicks: 0
// 		}

// 		// These lines allow the render function to access our Components' functions.
// 		this.handleClick = this.handleClick.bind(this);
// 		this.resetClick = this.resetClick.bind(this);
// 	}

// 	// Here we have the functions associated with our component for registering clicks.
// 	handleClick() {
// 		this.setState({
// 			clicks: this.state.clicks + 1
// 		});
// 	}

// 	resetClick(){
// 		this.setState({clicks: 0});
// 	}

// 	// Render function
// 	render(){

// 		return (
// 				<div className="container">
// 					<div className="row">
// 						<div id='searchDiv'>
// 							<h1>Im the Search! clicks {this.state.clicks}</h1>
// 							<button onClick={this.handleClick} className='btn btn-primary'>Search</button>
// 						</div>
// 					</div>
// 				</div>
// 			)

// 	}
// }



// // Export the componen back for use in other files
// export default Search;
