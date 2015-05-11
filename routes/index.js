
/*
 * GET home page.
 */

module.exports = function (app){
		app.get('/views/index/:name', function(req, res){
	 	  var name = req.params.name;
		  res.render('index/' + name);
		});
		
};

