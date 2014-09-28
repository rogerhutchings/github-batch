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

        var newIssues = [];

        var createIssue = function (issue) {
            newIssues.push(issue);
        };

        var deleteIssue = function (issue) {
            
        };

        var updateIssue = function (issue) {

        };

        var clearIssues = function () {
            newIssues = [];
        };

        return {
            issues: newIssues,
            clearIssues: clearIssues,
            createIssue: createIssue,
            deleteIssue: deleteIssue,
            updateIssue: updateIssue
        };

    });
