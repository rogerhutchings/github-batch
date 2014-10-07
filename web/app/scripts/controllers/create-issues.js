'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:CreateIssuesCtrl
 * @description
 * # CreateIssuesCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
    .controller('CreateIssuesCtrl', function ($scope, $location, Github, Issues, OAuth) {
        
        if (!OAuth.token) {
            $location.path('/')
        }

        $scope.issues = Issues.issues;

        $scope.addIssue = function () {
            Issues.createIssue();
            console.log($scope.issues);
        };

        $scope.deleteIssue = function (index) {
            Issues.deleteIssue(index);
        };

        $scope.checkTitle = function (title) {
            if (_.isUndefined(title)) {
                return 'Issue title cannot be blank.';
            }
        };

    });
