import React, { Component, cloneElement } from 'react';
import IndexPage from './Pages/IndexPage';
import SavedPage from './Pages/SavedPage';

class Application extends Component {

	constructor(props, context) {
		// whenever you overwrite React Component's constructor method, you must
	  // call super() so it will instantiate the Component class it inherits
	  // from
		super(props, context);

		// set initial state
		this.state = {
			articles: [],
			savedArticles: []
		};
	}

	componentWillMount() {
		fetch('/api/articles')
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					savedArticles: json
				});
			})
	}

	handleSearch(event) {
		const authKey = 'e91eb77672be41ee9baa15d68ecbb2e5';
		const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
		const query = document.getElementById('articleSearch').value;
		fetch(queryURLBase + query, {method: 'GET'}).then((NYTData) => {
			NYTData.json().then((json) => {
				console.log(json.response.docs);
				this.setState({
					articles: json.response.docs
				}) 
			});
		})
	}
	toggleSaved(articleId) {
		const { articles, savedArticles } = this.state;
		const article = articles.find((item) => item._id === articleId);
		const savedArticle = savedArticles.find((item) => item.articleId === articleId);

		function removeArticle(article) {
			return article.articleId !== savedArticle.articleId;
		};

		if (savedArticle) {
			fetch('/api/delete', {
				method: 'DELETE',
				body: JSON.stringify(savedArticle),
				headers: {
					'content-type': 'application/json'
				}
			}).then((response) => response.json())
				.then((json) => {
					this.setState({
						savedArticles: savedArticles.filter(removeArticle)
					});
				});

		} else {

			fetch('/api/save', {
				method: 'POST',
				body: JSON.stringify(article),
				headers: {
					'content-type': 'application/json'
				}
			}).then((response) => response.json())
				.then((json) => {
					console.log(json);
					this.setState({
						savedArticles: savedArticles.concat(json)
					});
				});
		}
	}

	toggleCompleted(articleId) {

		// find the first item in our state which has the ID we're looking for (itemId)
		const article = articles.find((item) => item._id === articleId);

		// if we found an item w/ that id, we toggle its `isCompleted` property
		if (article) {
			item.isCompleted = !item.isCompleted;

			fetch(`/api/items/${item._id}`, {
				method: 'PUT',
				body: JSON.stringify(item),
				headers: { 'content-type': 'application/json' }
			}).then((response) => response.json())
				.then((json) => {
					// then we update our state with the updated items array. note that
					// `item` has the item by reference, meaning that when we changed its
					// isCompleted property, the array `items` was updated as well
					this.setState({
						items: items
					});
				});
		}
	}

	render() {
		return (
			<div className="Application">
				{
					cloneElement(this.props.children, {
						handleSearch: this.handleSearch.bind(this),
						articles: this.state.articles,
						savedArticles: this.state.savedArticles,
						toggleSaved: this.toggleSaved.bind(this)
					})
				}

				<div className="navigation">
					<a href="#/">Search Articles</a>&nbsp;
					<a href="#/saved_articles">Saved Articles</a>&nbsp;
				</div>
			</div>
		);

	}
}

export default Application;