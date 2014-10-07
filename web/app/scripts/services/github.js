'use strict';

/**
 * @ngdoc service
 * @name githubBatchApp.Github
 * @description
 * # Github
 * Factory in the githubBatchApp.
 */
angular.module('githubBatchApp')
    .factory('Github', [
        '$http', 
        '$q',
        'OAuth', 
        'Issues',
        function ($http, $q, OAuth, Issues) {

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
                // }).then(function (response) {
                //     console.log(response)
                // });

                // Replace with promise.all when getting org repos
                return $http({
                    method: 'GET',
                    url: appendToken('https://api.github.com/user/repos'),
                    cache: true
                }).then(function (response) {
                    return response.data;
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

                console.log(args)

                var promises = [];

                args.issues.forEach(function (issue) {
                    promises.push($http({
                        method: 'POST',
                        url: appendToken(args.repo + '/issues'),
                        data: {
                            title: issue.title,
                            body: issue.body
                        }
                    }));
                });

                return $q.all(promises);

            };

            return {
                getRepos: getRepos,
                getUser: getUser,
                submitIssues: submitIssues
            };
        }]);
