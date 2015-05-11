/**
 * New node file
 */
(function(){

	var UsersCtrl = function(){
		var vm = this;
		//this.Username = '';
		vm.Users = [];
		vm.load = function() {

			    // jQuery AJAX call for JSON
			    $.getJSON( '/api/user', function( data ) {
			        // Stick our user data array into a userlist variable in the global object
			        vm.Users = data;
			    });
			};
		vm.load();
	}
	


	angular.module('app.security').controller('UsersCtrl', UsersCtrl);
	
	
})();
