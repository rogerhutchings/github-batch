'use strict';

/**
 * @ngdoc directive
 * @name githubBatchApp.directive:nav
 * @description
 * # nav
 */
angular.module('githubBatchApp')
    .directive('nav', function () {
            return {
                templateUrl: 'views/directives/nav.html',
                restrict: 'A',
                replace: true,
                controller: function ($scope, $rootScope, OAuth, Github, Issues) {

                    $scope.loggedIn = OAuth.loggedIn;
                    $scope.currentRepo = Github.currentRepo;
                    $scope.issues = Issues.issues;

                    Github.getRepos()
                        .then(function (response) {
                            $scope.repos = response;
                            $scope.getRepos = function (filter) {
                                return _.filter($scope.repos, function (repo) {
                                    return repo.name.indexOf(filter);
                                });
                            };
                        })
                        .then(function () {
                            console.log($scope.repos)
                        });

                    // // TODO: validate form by checking that selected is an object
                    // $scope.submit = function () {
                    //     Github.currentRepo = angular.copy($scope.selected);
                    //     $location.path('/create-issues');
                    // };

                    $scope.clear = function () {
                        $scope.currentRepo = '';
                        console.log('clearing', $scope.currentRepo);
                    };

                    $scope.submit = function () {
                        console.log('Submitting issues...');
                        Github.submitIssues({
                            repo: $scope.currentRepo.url,
                            issues: $scope.issues
                        });
                    };

                }
            };
        });
