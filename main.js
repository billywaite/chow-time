//require stuff
var app = require('express')(),
    port = 8080;

//set routes
app.use(require('./app/routes'));

//start the server
app.listen(port, function () {
	console.log('App listening on http://localhost:' + port);
});