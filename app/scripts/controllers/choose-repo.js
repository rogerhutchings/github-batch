'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:ChooseRepoCtrl
 * @description
 * # ChooseRepoCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
    .controller('ChooseRepoCtrl', function ($scope, Github) {
        
        // Get available repos, then put on the scope
        // TODO: Add graceful failure
        Github.getRepos()
            .then(function (response) {
                console.log(response);
                $scope.repos = response.data;
            });

    });
