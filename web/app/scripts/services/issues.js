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

        var repo = null;

        var createIssue = function () {
            issues.push({});
        };

        var deleteIssue = function (issueIndex) {
            issues.splice(issueIndex, 1);
        };

        var clearIssues = function () {
            // Because we have references to this array, we can't simply create
            // a new one, we have to empty it. According to 
            // http://stackoverflow.com/a/1232046, this is the fastest way.
            while (issues.length > 0) {
                issues.pop();
            }
        };

        return {
            repo: repo,
            issues: issues,
            clearIssues: clearIssues,
            createIssue: createIssue,
            deleteIssue: deleteIssue,
        };

    });
