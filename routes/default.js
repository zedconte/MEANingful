/**
 * New node file
 */

module.exports = function (app){
	   console.log('loading default routes... ');
	   app.get('/views/shared/:name', function(req, res){
		 	  var name = req.params.name;
			  res.render('shared/' + name);
			});
	   
		app.use(function(req, res){
		        res.render('layout'); // load the single view file (angular will handle the page changes on the front-end)
		});
};