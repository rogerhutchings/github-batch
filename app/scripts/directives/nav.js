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
                controller: function ($scope, $rootScope, OAuth, Github) {

                    $scope.loggedIn = OAuth.loggedIn;

                }
            };
        });
