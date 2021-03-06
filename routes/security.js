/**
 * New node file
 */

	var router  = require('express-promise-router')();
	var api =  require('../server/api/user.api');
	
	/*
	 * GET userlist.
	 */
	router.get('/api/user/:id', function(req, res) {
	    var userToGet = req.params.id;
	    res.json(api.get(userToGet));
//	    api.get(userToGet).toArray(function (err, items) {
//	        res.json(items);
//	    });
	});
	
	/*
	 * GET userlist.
	 */
	router.get('/api/user', function(req, res) {
		res.json(api.getAll());
		
//	    api.getAll().then(function(users){
//	    	res.json(users);
//	    });
	});

	

	/*
	 * POST to adduser.
	 */
	// router.post('/user', function(req, res) {
//	     var db = req.db;
//	     db.collection('userlist').insert(req.body, function(err, result){
//	         res.send(
//	             (err === null) ? { msg: '' } : { msg: err }
//	         );
//	     });
	// });

	/*
	 * DELETE to deleteuser.
	 */
	// router.delete('/user/:id', function(req, res) {
//	     var db = req.db;
//	     var userToDelete = req.params.id;
//	     db.collection('userlist').removeById(userToDelete, function(err, result) {
//	         res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
//	     });
	// });


	/*
	 * PUT to updateUser.
	 */
	// router.put('/updateuser/:id', function(req, res) {
//	 	var db = req.db;
//	     var userToUpdate = req.params.id;
//	     var doc = { $set: req.body};
//	     db.collection('userlist').updateById(userToUpdate, doc ,function(err, result) {
//	       res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
//	     });
	// });

	module.exports = function(app){
		app.get('/views/security/:name', function(req, res){
	 	  var name = req.params.name;
		  res.render('security/' + name);
		});
		app.all('/api/user', router);
	};



	


