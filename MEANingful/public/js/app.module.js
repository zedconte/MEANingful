/**
 * New node file
 */


angular.module('app', ['app.security', 'ui.router']).config([
                                                             '$stateProvider',
                                                             '$urlRouterProvider',
                                                             function($stateProvider, $urlRouterProvider){
                                                               $stateProvider
                                                                 .state('home', {
                                                                   url: '/',
                                                                   abstract: true,
                                                                   templateUrl: "/index.html",
                                                                 });
                                                                 

                                                               $urlRouterProvider.otherwise('/');

                                                             }
                                                           ]).run(['$state', '$rootScope', '$templateCache', function ($state, $rootScope, $templateCache) {
                                                               $state.transitionTo('security.login');
                                                               $rootScope.$on('$viewContentLoaded', function () {
                                                                   $templateCache.removeAll();
                                                               });
                                                           }]);