(function (angular) {

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
                    $scope.github = Github;
                    $scope.issues = Issues;

                    Github.getRepos()
                        .then(function (response) {
                            $scope.repos = response;
                        });

                    // // TODO: validate form by checking that selected is an object
                    // $scope.submit = function () {
                    //     Github.currentRepo = angular.copy($scope.selected);
                    //     $location.path('/create-issues');
                    // };

                    // $scope.repoSelect = function ($item, $model, $label) {
                    //     console.log($model);
                    // };

                    // $scope.clear = function () {
                    //     $scope.currentRepo = '';
                    //     console.log('clearing', $scope.currentRepo);
                    // };

                    // Submit our issues to the Github API
                    $scope.submit = function () {
                        console.log('Submitting issues...');
                        Github.submitIssues({
                            repo: Issues.repo.url,
                            issues: Issues.issues
                        }).then(function (response) {
                            console.log('Success', response);
                        });
                        Issues.clearIssues();
                    };

                }
            };
        });

})(window.angular);
