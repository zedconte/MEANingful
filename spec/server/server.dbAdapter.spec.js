/**
 * New node file
 */
var sinon = require('sinon')
	, mockery = require('mockery')
	, chai = require('chai')
	, should = chai.should();

	chai.use(require('sinon-chai'));


 
describe('DB Adapter: ', function(){
	var sandbox;
	var dbadapter, bb, mongo, dbConfig = { connString: 'connstring'}, disposable, connection, connectionPromise, expectedResult;
	var dbSettings = {db : {native_parser:true}};
	var actualResult;
	beforeAll(function(){
		sandbox = sinon.sandbox.create();
		mockery.enable({
		      warnOnReplace: false,
		      warnOnUnregistered: false,
		      useCleanCache: true
		    });
		expectedResult = { prop : 'value'};
		disposable = { disposer: sandbox.stub() };
		
		bb = { promisifyAll: sandbox.stub(), reject : sandbox.stub()};
		connectionPromise = { catch: sandbox.stub() };
		mongo = { 
				Cursor : function(){},
				MongoClient : {
					connectAsync : sandbox.stub()
				}
		};
		disposable.disposer.returns(expectedResult);
		connectionPromise.catch.returns(disposable);
		mongo.MongoClient.connectAsync.returns(connectionPromise);
		bb.promisifyAll.returns(mongo.MongoClient);
		connection = { close: sandbox.stub() };
		mockery.registerMock('./db.config', dbConfig);
		mockery.registerMock('bluebird', bb);
		mockery.registerMock('mongodb', mongo);
		dbadapter = require('../../server/data-layer/db.adapter');
	});
	
	beforeAll(function(){
		actualResult = dbadapter();
	});
	
	it('should promisify all mongo methods', function(){
		bb.promisifyAll.getCall(0).args[0].should.eql(mongo);
		bb.promisifyAll.getCall(1).args[0].should.eql(mongo.Cursor.prototype);
		bb.promisifyAll.getCall(2).args[0].should.eql(mongo.MongoClient);
	});
	
	
	describe('getConnection: ', function(){
		
		it('should call connectAsync', function(){
			mongo.MongoClient.connectAsync.withArgs(dbConfig.connString, dbSettings).calledOnce.should.equal(true);
		});
		
		it('should catch rejection', function(){
			var callback = connectionPromise.catch.getCall(0).args[0];
			
			callback('error');
			
			bb.reject.calledOnce.should.eql(true);
		});
			
		it('should configure disposer', function(){
			var callback = disposable.disposer.getCall(0).args[0];
			
			callback(connection);
			
			connection.close.calledOnce.should.eql(true);
		});
		
		it('should return expectedResult', function(){
			actualResult.should.eql(expectedResult);
		});
	});
	afterAll(function(){
		sandbox.restore();
	});
});