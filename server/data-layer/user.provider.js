var db = require('./db.adapter')();

var Provider = {
	/*
	 * GET userlist.
	 */
	getAll : function() {
	    return db.collection('userlist').find();
	},
	/*
	 * GET userlist.
	 */
	get : function(id) {
	    return db.collection('userlist').find({id:id});
	}
};

module.exports = Provider;
