import React, { Component } from 'react';
import SingleArticle from './SingleArticle';

// this component is "dumb" as it has no state. really all its responsible
// for is iterating over an array of items and rendering TodoItem for each
// one
class ArticleList extends Component {

	render() {
		const { articles, toggleSaved } = this.props;

		return (
			<ul className="ArticleList">
				{
					// .map example:
					// [1, 2, 3].map((number) => number * 2)
					// will return [2, 4, 6]

					// .map just iterates over all of our items and returns a rendered
					// .TodoItem for each item
					articles.map((item, index) =>
						<SingleArticle
							article={item}
							key={index}
							toggleSaved={toggleSaved}
						/>
					)
				}
			</ul>
		);
	}
}

export default ArticleList;