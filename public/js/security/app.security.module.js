/**
 * New node file
 */
(function(){

angular.module('app.security', ['ui.router']).config([
                                                       '$stateProvider',
                                                       '$urlRouterProvider',
                                                       function($stateProvider, $urlRouterProvider){
                                                         $stateProvider
                                                         .state('security', {
                                                             url: '/admin',
                                                             abstract: true,
                                                             templateUrl: "views/security/security",
                                                           })
                                                           .state('security.login', {
                                                             url: '/login',
                                                             templateUrl: "views/security/login",
                                                             controller: "LoginCtrl",
                                                             controllerAs: 'vm'
                                                           });
                                                           

                                                         $urlRouterProvider.otherwise('/');

                                                       }
                                                     ]);

})();