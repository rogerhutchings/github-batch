'use strict';

/**
 * @ngdoc service
 * @name githubBatchApp.issues
 * @description
 * # issues
 * Service in the githubBatchApp.
 */
angular.module('githubBatchApp')
    .factory('Issues', function issues () {

        var issues = [];

        var createIssue = function () {
            issues.push({});
        };

        var deleteIssue = function (issue) {
            issues.splice(issue, 1);
        };

        var clearIssues = function () {
            console.log('Clearing issues...');
            issues = [];
        };

        return {
            issues: issues,
            clearIssues: clearIssues,
            createIssue: createIssue,
            deleteIssue: deleteIssue,
        };

    });
