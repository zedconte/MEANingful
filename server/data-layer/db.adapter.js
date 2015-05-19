var dbconfig = require('./db.config');
var mongo = require('mongodb');
var bb = require('bluebird');

bb.promisifyAll(mongo);
bb.promisifyAll(mongo.Cursor.prototype);
var mongoClient = bb.promisifyAll(mongo.MongoClient);

var getConnection = function () {
	return mongoClient
			.connectAsync(dbconfig.connString, { db: {native_parser:true }})
			.catch(function(err) {
				console.log(err);
				return bb.reject("Can't connect to DB server");
			})
			.disposer(function(db){
				if (db) db.close();
			});
			
			
}

module.exports = getConnection;
