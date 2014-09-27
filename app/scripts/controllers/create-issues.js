'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:CreateIssuesCtrl
 * @description
 * # CreateIssuesCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
    .controller('CreateIssuesCtrl', function ($scope) {
        
        $scope.issues = [];

        $scope.addIssue = function (issue) {
            // $scope.issues.pop(issue);
            console.log('Add issue');
        };

        $scope.addIssues = function (issue) {
            // $scope.issues.pop(issue);
            console.log('Add issues');
        };

    });
