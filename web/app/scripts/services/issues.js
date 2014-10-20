(function (angular) {

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

            var issuesArray = [];

            var repo = null;

            var createIssue = function () {
                issuesArray.push({});
            };

            var deleteIssue = function (issueIndex) {
                issuesArray.splice(issueIndex, 1);
            };

            var clearIssues = function () {
                // Because we have references to this array, we can't simply create
                // a new one, we have to empty it. According to 
                // http://stackoverflow.com/a/1232046, this is the fastest way.
                while (issuesArray.length > 0) {
                    issuesArray.pop();
                }
            };

            return {
                repo: repo,
                issues: issuesArray,
                clearIssues: clearIssues,
                createIssue: createIssue,
                deleteIssue: deleteIssue,
            };

        });

})(window.angular);
