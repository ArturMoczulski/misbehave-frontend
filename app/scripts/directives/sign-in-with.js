'use strict';

/**
 * @ngdoc function
 * @name misbehaveFrontendApp.directive:signInWith
 * @description
 * # signInWith
 * Directive of the misbehaveFrontendApp
 */
angular.module('misbehaveFrontendApp')
  .directive('signInWith', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/sign-in-with.html',
      controller: function() {
      },
      controllerAs: 'signInWithCtrl'
    };
  });
