/**
 * New node file
 */

(function() {
	'use strict';
	angular.module('app', [ 'app.security', 'ui.router' ]).config(
			[ '$stateProvider', '$urlRouterProvider',
					function($stateProvider, $urlRouterProvider) {
						$stateProvider.state('home', {
							url : '/',
							abstract : true,
							templateUrl : "views/index"
						});

						$urlRouterProvider.otherwise('/');

					} ]).run(
			[ '$state', '$rootScope', '$templateCache',
					function($state, $rootScope, $templateCache) {
						$state.transitionTo('security.login');
						$rootScope.$on('$viewContentLoaded', function() {
							$templateCache.removeAll();
						});
					} ]);
})();
