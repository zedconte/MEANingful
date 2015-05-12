/**
 * Module dependencies.
 */

	var express = require('express'), 
		router = require('./routes/router'), 
		http = require('http'), 
		path = require('path'), 
		favicon = require('serve-favicon'), 
		serveStatic = require('serve-static'),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		errorHandler = require('errorhandler'),
		morgan = require('morgan'),
		BundleUp = require('bundle-up3'),
		assets = require('./assets');
	
	

	var app = express();
	BundleUp(app, assets, {
		  staticRoot: __dirname+ '/public/',
		  staticUrlRoot:'/',
		  bundle:true,
		  minifyCss: false,
		  minifyJs: false,
		  complete: console.log.bind(console, "Bundle-up: static files are minified/ready")
		});
	// all environments
	app.set('port', process.env.PORT || 3000);
	app.set('views', path.join(__dirname, 'public/views'));
	app.set('view engine', 'jade');
	// app.use(favicon());
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(methodOverride());
	

	
	app.use(serveStatic(path.join(__dirname, 'public')));
//	app.use(serveStatic(path.join(__dirname, 'bower_components')));
//	app.use('/bower_components', serveStatic(path.join(__dirname,
//			'/bower_components')));

	// development only
	if ('development' === app.get('env')) {
		app.use(errorHandler());
	}

	router(app);

	http.createServer(app).listen(app.get('port'), function() {
		console.log('Express server listening on port ' + app.get('port'));
	});


