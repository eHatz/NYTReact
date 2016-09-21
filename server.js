var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var request = require('request'); 

const app = express();
app.use(express.static('public'));


mongoose.connect('mongodb://localhost/nytreact');
const db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));


app.get('/', function(req, res) {
	res.sendFile('./public/index.html')
});

app.get('/api/saved', function(req, res) {

});

app.post('/api/saved', function(req, res) {

});


var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('Server loaded!');
});