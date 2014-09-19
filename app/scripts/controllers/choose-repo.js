'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:ChooseRepoCtrl
 * @description
 * # ChooseRepoCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
  .controller('ChooseRepoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
