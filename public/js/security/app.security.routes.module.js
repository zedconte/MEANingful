/**
 * New node file
 */
(function() {

	angular.module('app.security.routes', [ 'ui.router' ]).config(
			[ '$stateProvider', '$urlRouterProvider',
					function($stateProvider, $urlRouterProvider) {
						$stateProvider.state('security', {
							url : 'admin',
							abstract : true,
							parent : 'home',
							views : {
								'footer' : {
									templateUrl : 'views/shared/footer'
								},
								'header' : {
									templateUrl : 'views/shared/header'
								},
								'content' : {
									templateUrl : 'views/security/security'
								}
							}

						}).state('security.login', {
							url : '/login',
							templateUrl : "views/security/login",
							controller : "LoginCtrl",
							controllerAs : 'vm'
						})
						.state('security.users', {
							url : '/users',
							templateUrl : "views/security/users",
							controller : "UsersCtrl",
							controllerAs : 'vm'
						});

						$urlRouterProvider.otherwise('/');

					} ]);

})();