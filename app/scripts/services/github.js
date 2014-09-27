'use strict';

/**
 * @ngdoc service
 * @name githubBatchApp.Github
 * @description
 * # Github
 * Factory in the githubBatchApp.
 */
angular.module('githubBatchApp')
    .factory('Github', function ($http, OAuth) {

        // TODO: Replace with interceptor
        var appendToken = function (url) {
            return url + '?access_token=' + OAuth.token;
        };

        var getRepos = function () {

            // TODO: Get user repos
            // var orgs = $http({
            //     method: 'GET',
            //     url: appendToken('https://api.github.com/user/orgs'),
            //     cache: true
            // });

            // Replace with promise.all when getting org repos
            return $http({
                method: 'GET',
                url: appendToken('https://api.github.com/user/repos'),
                cache: true
            });
        };

        var getUser = function () {
            return $http({
                method: 'GET',
                url: appendToken('https://api.github.com/user'),
                cache: true
            });
        };

        var submitIssues = function (args) {
        };

        return {
            getRepos: getRepos,
            getUser: getUser,
            submitIssues: submitIssues
        };
    });
