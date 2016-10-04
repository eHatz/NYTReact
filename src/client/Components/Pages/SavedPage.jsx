import React, { Component } from 'react';
import ArticleList from '../ArticleList';

class IndexPage extends Component {


	render() {
		const { savedArticles, toggleSaved } = this.props;

		return (
			<div className='container'>
				<h1>Saved Page</h1>

				<ArticleList
					articles={savedArticles} // pass down ALL items
					toggleSaved={toggleSaved} // pass Application's toggleCompleted as-is!
				/>
				

			</div>
		);

	}
}

export default IndexPage;

