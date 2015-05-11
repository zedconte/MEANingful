var dbconfig = require('./db.config');
var mongo = require('mongoskin');
//var db = mongo.db("mongodb://localhost:27017/nodetest2", {native_parser:true});
module.exports = function() {
	return mongo.db(dbconfig.connString, {native_parser:true});
};
