
/**
 * Module dependencies.
 */

var express = require('express')
  , routesIndex = require('./routes/index')
  , routesSecurity = require('./routes/security')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'public/views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routesIndex.routes);
app.get('/views/security/:name', routesSecurity.routes);
app.get('*', routesIndex.routes);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
