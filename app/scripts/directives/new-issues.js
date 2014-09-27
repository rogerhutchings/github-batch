'use strict';

/**
 * @ngdoc directive
 * @name githubBatchApp.directive:newIssues
 * @description
 * # newIssues
 */
angular.module('githubBatchApp')
    .directive('newIssues', function () {
        return {
            templateUrl: 'views/directives/new-issues.html',
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
            }
        };
    });
