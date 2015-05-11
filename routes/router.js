/**
 * New node file
 */
var routes = function(app){
	console.log('loading routes... ');
	require('./index')(app); // rutas de vistas de  home page
	require('./security')(app);
	require('./default')(app);
};

module.exports = routes;
