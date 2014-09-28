'use strict';

/**
 * @ngdoc directive
 * @name githubBatchApp.directive:newIssue
 * @description
 * # newIssue
 */
angular.module('githubBatchApp')
    .directive('newIssue', function () {
        return {
            templateUrl: 'views/directives/new-issue.html',
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
            
                scope.issue = {};

                scope.addIssue = function () {
                    // TODO: Add issue to list
                    // TODO: Close form
                };

                scope.cancelIssue = function () {
                    // TODO: Close form
                    scope.issue = {};
                };

            }
        };
    });
