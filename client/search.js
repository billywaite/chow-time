//require stuff
var yummly = require('yummly');
var express = require('express');
var app = express();

//Yummly API credentials
var credentials = {
  id: '********',
  key: '********************************'
}

//waiting on Yummly account credentials before testing queries
yummly.search({
  credentials: credentials,
  query: {
    q: 'chicken'
  }
}, function (error, response, json) {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    console.log(json);
  }
});

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(3000, function () {
	console.log('Testing to make sure express is working');
});