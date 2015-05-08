/**
 * New node file
 */


exports.routes = function(req, res){
 	  var name = req.params.name;
	  res.render('security/' + name);
};