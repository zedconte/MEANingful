
/*
 * GET home page.
 */

module.exports = function (app){
		app.get('/views/index', function(req, res){
	 	  
		  res.render('index');
		});
		
};

