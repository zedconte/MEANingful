/**
 * Module dependencies.
 */
(function() {
	var express = require('express'), 
		router = require('./routes/router'), 
		http = require('http'), 
		path = require('path'), 
		favicon = require('serve-favicon'), 
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		errorHandler = require('errorhandler'),
		morgan = require('morgan');

	var app = express();

	// all environments
	app.set('port', process.env.PORT || 3000);
	app.set('views', path.join(__dirname, 'public/views'));
	app.set('view engine', 'jade');
	// app.use(favicon());
	app.use(morgan('dev'));
	app.use(bodyParser());
	app.use(methodOverride());
	

	app.use(express.static(path.join(__dirname, 'public')));
	app.use('/bower_components', express.static(path.join(__dirname,
			'/bower_components')));

	// development only
	if ('development' === app.get('env')) {
		app.use(errorHandler());
	}

	router(app);

	http.createServer(app).listen(app.get('port'), function() {
		console.log('Express server listening on port ' + app.get('port'));
	});

})();
