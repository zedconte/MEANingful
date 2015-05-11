var provider = require('../data-layer/user.provider');
var api = {
	/*
	 * GET userlist.
	 */
	getAll : function() {
	   return provider.getAll();
	},
	/*
	 * GET specific userlist.
	 */
	get : function(id) {
	   return provider.get(id);
	}
};

module.exports = api;