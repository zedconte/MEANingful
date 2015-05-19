/**
 * New node file
 */
(function(){
	var User = function(data){
		this.id = 0;
		this.name = '';
		this.email = '';
		if (data){
			this.id = data._id;
			this.name = data.username;
			this.email = data.email;
		}
	};
	var UsersService = function(){
		this.Get = function(){
			return $.get( '/api/user').then(function( data ) {
		        	
		    		return _.map(data, function(x){ return new User(x);	});
		    		
		        
		    });
		}
	};
	
	angular.module('app.security').service('UsersService', UsersService);
})();