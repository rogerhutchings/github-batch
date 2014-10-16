(function (angular) {

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
            function ($http, $q, OAuth) {

                // Append the OAuth token to the API url hit
                // TODO: Replace with interceptor
                var appendToken = function (url) {
                    return url + '?access_token=' + OAuth.token;
                };

                // Return a promise containing a list of repos the user has 
                // access to.
                // TODO: Ensure that we also get org repos
                var getRepos = function () {

                    return $http({
                        method: 'GET',
                        url: appendToken('https://api.github.com/user/repos'),
                        cache: true
                    }).then(function (response) {
                        return response.data;
                    });
                };

                // Return a promise with the user information
                var getUser = function () {
                    return $http({
                        method: 'GET',
                        url: appendToken('https://api.github.com/user'),
                        cache: true
                    });
                };

                // Submit the issues to Github. Since issues can only be created
                // singly, we create a whole bunch of promises and wait for them
                // all to resolve.
                var submitIssues = function (args) {

                    console.log(args);

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

})(window.angular);
