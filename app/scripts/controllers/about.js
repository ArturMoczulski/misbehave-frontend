'use strict';

/**
 * @ngdoc function
 * @name misbehaveFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the misbehaveFrontendApp
 */
angular.module('misbehaveFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
