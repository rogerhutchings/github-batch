'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:ChooseRepoCtrl
 * @description
 * # ChooseRepoCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
    .controller('ChooseRepoCtrl', function ($scope, $location, Github, OAuth) {
        
        if (!OAuth.token) {
            $location.path('/')
        }

        // Get available repos, then put on the scope
        // TODO: Add graceful failure
        Github.getRepos()
            .then(function (response) {
                $scope.repos = response;
                $scope.getRepos = function (filter) {
                    return _.filter($scope.repos, function (repo) {
                        return repo.name.indexOf(filter);
                    });
                };
            });

        // TODO: validate form by checking that selected is an object
        $scope.submit = function () {
            Github.currentRepo = angular.copy($scope.selected);
            $location.path('/create-issues');
        };

    });
