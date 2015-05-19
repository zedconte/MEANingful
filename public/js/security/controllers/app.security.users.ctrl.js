/**
 * New node file
 */
(function(){
	
	var usersService;
	var UsersCtrl = function($scope, _UsersService_){
		usersService = _UsersService_;
		var vm = this;
		vm.Users =[];
		
		// private function
		vm.Get = function() {
				usersService.Get().then(function( data ) {
			        
			    	$scope.$apply(function(){
			    		vm.Users = data;
			        });
			        
			    });
			};
			
			
	    
	};
	
	UsersCtrl.$inject=['$scope', 'UsersService'];

	angular.module('app.security').controller('UsersCtrl', UsersCtrl);
	
	
})();
