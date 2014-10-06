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

        $scope.issues = [];

        $scope.addIssue = function () {
            $scope.issues.push({});
        };

        $scope.removeIssue = function (index) {
            $scope.issues.splice(index, 1);
        };

        $scope.checkTitle = function (title) {
            if (_.isUndefined(title)) {
                return 'Issue title cannot be blank.';
            }
        };

    });
