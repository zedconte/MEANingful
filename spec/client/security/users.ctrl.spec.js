/**
 * New node file
 */

describe('Users Controller', function(){
	var vm, $scope, UsersService;
	beforeEach(function(){
		angular.module('app.security.routes', []);
		UsersService = {
			Get: sinon.stub().returns({ then : sinon.stub() })	
		};
		module('app.security',function($provide) {
			$provide.value('$state', { });
			$provide.value('UsersService', UsersService);
		});
	});
	beforeEach(inject(function ($controller) {
		
        vm = $controller('UsersCtrl', {$scope : $scope});
    }));
	
	it('should have Users collection', function(){
		expect(vm.Users).toBeDefined();
	});
	
	describe('Get', function(){
		beforeEach(function(){
			vm.Get();
		});
		it('should have Users collection', function(){
			expect(UsersService.Get.calledOnce).toBeTruthy();
		});
	});
	
});