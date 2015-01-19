'use strict';

/**
 * @ngdoc function
 * @name misbehaveFrontendApp.directive:loginForm
 * @description
 * # loginForm
 * Directive of the misbehaveFrontendApp
 */
angular.module('misbehaveFrontendApp')
  .directive('loginForm', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/login-form.html',
      controller: function($scope, $auth) {
        $scope.submit = function() {
          $auth.submitLogin($scope.loginForm)
            .then(function(response) {
            })
            .catch(function(response) {
            });
        };
      },
      controllerAs: 'loginCtrl'
    };
  });
