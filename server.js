var express = require('express');
var mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('Server loaded!');
})