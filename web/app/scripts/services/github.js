(function (angular, _) {

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

                var _endpoint = function (url) {
                    return 'https://api.github.com' + url;
                };

                var _defaults = {
                    headers: {
                        Authorization: 'token ' + OAuth.token
                    },
                    cache: true
                };

                // Return a promise containing a list of repos the user has 
                // access to.
                // TODO: Ensure that we also get org repos
                var getRepos = function () {
                    return $http.get(_endpoint('/user/repos'), _defaults)
                        .then(function (response) {
                            return response.data;
                        });
                };

                // Return a promise with the user information
                var getUser = function () {
                    return $http.get(_endpoint('/user'), _defaults);
                };

                // Submit the issues to Github. Since issues can only be created
                // singly, we create a whole bunch of promises and wait for them
                // all to resolve.
                var submitIssues = function (args) {

                    var promises = [];

                    args.issues.forEach(function (issue) {
                        promises.push($http(_.extend(_defaults, {
                            method: 'POST',
                            url: args.repo + '/issues',
                            cache: false,
                            data: {
                                title: issue.title,
                                body: issue.body
                            }
                        })));
                    });

                    return $q.all(promises);

                };

                return {
                    getRepos: getRepos,
                    getUser: getUser,
                    submitIssues: submitIssues
                };
            }]);

})(window.angular, window._);
