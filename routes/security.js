/**
 * New node file
 */

	var express = require('express');
	console.log('creating router' + express);
	var router = express.Router();
	console.log('router - ' + router);
	var api =  require('../server/api/user.api');
	
	/*
	 * GET userlist.
	 */
	router.get('/user/:id', function(req, res) {
	    var userToGet = req.params.id;
	    api.get(userToGet).toArray(function (err, items) {
	        res.json(items);
	    });
	});
	
	/*
	 * GET userlist.
	 */
	router.get('/user', function(req, res) {
	    api.getAll().toArray(function (err, items) {
	        res.json(items);
	    });
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
		app.all('/user', router);
	};



	


