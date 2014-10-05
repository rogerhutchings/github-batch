'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:CreateIssuesCtrl
 * @description
 * # CreateIssuesCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
    .controller('CreateIssuesCtrl', function ($scope, $location, Github) {
        
        // Redirect if we don't have a repo selected
        if (_.isEmpty(Github.currentRepo)) {
            $location.path('/choose-repo');
        }

        console.log(Github.currentRepo);

        $scope.issues = [];

        $scope.addIssue = function (issue) {
            // $scope.issues.pop(issue);
            console.log('Add issue');
        };

    });
