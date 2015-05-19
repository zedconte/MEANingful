var provider = require('../data-layer/user.provider');
var api = {
	/*
	 * GET userlist.
	 */
	getAll : function() {
	   return provider.find({});
//		   	.then(function(users){
//			   return users;
//		   	})
//		   	.catch(function(err){
//		   	   console.log('resolving reject');
//		   	   return Promise.resolve([]);
//		   	});
	},
	/*
	 * GET specific userlist.
	 */
	get : function(id) {
	   return provider.get(id);
	}
};

module.exports = api;