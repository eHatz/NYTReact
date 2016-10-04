const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
	title: String,
	link: String,
	articleId: String
});

const Article = mongoose.model('Article', itemSchema);

module.exports = Article;