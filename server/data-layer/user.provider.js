var getConnection = require('./db.adapter');
var bb = require('bluebird');
var using = bb.using;

var Provider = {
	/*
	 * GET userlist.
	 */
	find : function(predicate) {
		return using(getConnection(),function(db){
			return db.collection('userlist')
					.find(predicate)
					.toArrayAsync();
		});
	    
	},
	/*
	 * GET userlist.
	 */
	get : function(id) {
//	    return db.collection('userlist').find({id:id}).toArrayAsync()
//    	.then(function (user) {
//	    	db.close();
//	        return user;
//	    })
//	    .error(function (err) {
//	    	db.close();
//	    });
	}
};

module.exports = Provider;
