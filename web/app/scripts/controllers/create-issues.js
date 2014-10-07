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

        $scope.github = Github;
        $scope.issues = Issues;

        $scope.addIssue = function () {
            $scope.issues.createIssue();
        };

        $scope.deleteIssue = function (index) {
            $scope.issues.deleteIssue(index);
        };

        $scope.checkTitle = function (title) {
            if (_.isUndefined(title)) {
                return 'Issue title cannot be blank.';
            }
        };

    });
