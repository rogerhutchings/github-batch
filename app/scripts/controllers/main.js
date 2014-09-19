'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
