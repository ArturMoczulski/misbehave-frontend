'use strict';

angular.module('ArturMoczulski.MisbehaveFrontend')

  .controller('MainCtrl', function($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

  });
