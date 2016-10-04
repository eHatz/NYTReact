import React, { Component } from 'react';

// another "dumb" component responsible for just rendering the HTML relevant
// for ONE todo item
class SingleArticle extends Component {

	render() {
		const { article, toggleSaved} = this.props;
		if (article.headline) {
			return (
				<li id={article._id}>
					<button
					  onClick={() => toggleSaved(article._id)} // we're creating a new function on 'the fly' here which is already bound to the correct id
				 	 >Save Article</button>
					
					<a href={article.web_url}>{article.headline.main}</a>
				</li>
			);
			
		} else {
			return (
				<li id={article.articleId}>
					<button
					  onClick={() => toggleSaved(article.articleId)} // we're creating a new function on 'the fly' here which is already bound to the correct id
				 	 >Delete Article</button>
					
					<a href={article.link}>{article.title}</a>
				</li>
			);
		};	
	}
}

export default SingleArticle;