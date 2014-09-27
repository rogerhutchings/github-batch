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
            }
        };
    });
