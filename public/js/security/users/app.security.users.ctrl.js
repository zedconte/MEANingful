/**
 * New node file
 */
(function(){
	var User = function(data){
		this.id = 0;
		this.name = '';
		this.email = '';
		if (data){
			this.id = data.id;
			this.name = data.username;
			this.email = data.email;
		}
	};
	
	var UsersCtrl = function($scope){
		var vm = this;
		vm.Users =[];
		
		// private function
		var load = function() {
				// todo move to a service
			    $.get( '/api/user', function( data ) {
			        
			    	$scope.$apply(function(){
			    		_.each(data, function(x){ 
			    			vm.Users.push(new User(x));
			    			});
			        });
			        
			    });
			};
			
			
	    load();
	};
	
	UsersCtrl.$inject=['$scope'];

	angular.module('app.security').controller('UsersCtrl', UsersCtrl);
	
	
})();
