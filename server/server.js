var express = require('express');
var mongoose = require('mongoose');

// connect to mongo database named "lets-hangout"
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/rbk-prep';
mongoose.connect(mongoURI);
db = mongoose.connection;

var app = express();


app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
})
// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = process.env.PORT || 8000;

app.listen(port);

// export our app for testing and flexibility, required by index.js
module.exports = app;
