'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
