'use strict';

/**
 * @ngdoc directive
 * @name githubBatchApp.directive:nav
 * @description
 * # nav
 */
angular.module('githubBatchApp')
    .directive('nav', function ($location, OAuth) {
        return {
            templateUrl: 'views/directives/nav.html',
            restrict: 'A',
            replace: true,
            link: function (scope) {

                scope.$on('OAuth/logout', function () {
                    console.log('Logged out', OAuth.loggedIn);
                });

                scope.loggedIn = OAuth.loggedIn;

                scope.login = function () {
                    OAuth.login();
                };

                scope.logout = function () {
                    OAuth.logout();
                };

            }
        };
    });
