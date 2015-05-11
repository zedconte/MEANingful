/**
 * New node file
 */


module.exports = function(app){
	app.get('/views/security/:name', function(req, res){
 	  var name = req.params.name;
	  res.render('security/' + name);
	});
};