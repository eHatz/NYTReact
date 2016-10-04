const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/nytreactify');

const { connection } = mongoose;

connection.on('error', (err) => {
	console.error(err);
});

connection.once('open', () => {
	console.log('Connection to mongo db successful');
});

const Article = require('./models/Article');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../../index.html'));
});

// get all todo items
app.get('/api/articles', (req, res) => {
	Article.find().exec((err, items) => {
		if (err) {
			res.json(err);
		} else {
			res.json(items);
		}
	});
});

// create a new item  	
app.post('/api/save', (req, res) => {
	console.log(req.body)
	const newArticle = {
		title: req.body.headline.main,
		link: req.body.web_url,
		articleId: req.body._id
	}
	const newItem = new Article(newArticle);
	newItem.save((err, item) => {
		if (err) {
			res.json(err);
		} else {
			res.json(item);
		}
	});
});


app.delete('/api/delete', (req, res) => {
	Article.remove({ _id: req.body._id }, (err, removed) => {
		if (err) {throw err};

	});
});

app.listen(PORT, () => {
	console.log(`Server is now listening on ${PORT}`);
});