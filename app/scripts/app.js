'use strict';

/**
 * @ngdoc overview
 * @name misbehaveFrontendApp
 * @description
 * # misbehaveFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('misbehaveFrontendApp', [
    'ngAnimate',
    'ngAria',
    //'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ipCookie',
    'ng-token-auth'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($authProvider) {
    $authProvider.configure({
      apiUrl: 'https://api.misbehavewith.me'
    });
  });
