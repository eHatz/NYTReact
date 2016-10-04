import React, { Component } from 'react';
import ArticleList from '../ArticleList';

class IndexPage extends Component {


	render() {
		const { articles, handleSearch, toggleSaved } = this.props;

		return (
			<div className='container'>
				<h1>Index Page</h1>
				<div className='row'>
					<div className='col-md-12' id='searchDiv'>
						<input type='text' id='articleSearch' placeholder='Search Articles'/>
						<button onClick={handleSearch} className='btn btn-primary'>Search</button>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12' id='resultsDiv'>
						
					</div>
				</div>

				<ArticleList
					articles={articles} // pass down ALL items
					toggleSaved={toggleSaved} // pass Application's toggleCompleted as-is!
				/>
				

			</div>
		);

	}
}

export default IndexPage;

