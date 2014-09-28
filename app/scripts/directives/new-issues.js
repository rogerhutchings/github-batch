'use strict';

/**
 * @ngdoc directive
 * @name githubBatchApp.directive:newIssues
 * @description
 * # newIssues
 */
angular.module('githubBatchApp')
    .directive('newIssues', function (Issues) {
        return {
            templateUrl: 'views/directives/new-issues.html',
            restrict: 'A',
            link: function postLink(scope, element, attrs) {

                scope.issues = {};

                // TODO: Add correct split
                var processIssues = function (content) {
                    var issues = content.split();
                    return issues;
                };

                scope.addIssues = function () {
                    // TODO: Add issues to list
                    // TODO: Close form
                };

                scope.cancelIssues = function () {
                    // TODO: Close form
                    scope.issues = {};
                };

            }
        };
    });
