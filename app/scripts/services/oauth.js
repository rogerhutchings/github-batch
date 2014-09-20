'use strict';

/**
 * @ngdoc service
 * @name githubBatchApp.OAuth
 * @description
 * # OAuth
 * Factory in the githubBatchApp.
 */
angular.module('githubBatchApp')
    .factory('OAuth', function ($window) {

        var credentials = {
            client_id: '1ef3b7ef1581851dff8f',
            client_secret: '5ad4eb0bce08c3887fa0d5d231f8b530c5040ed9',
            scope: 'repo',
            redirect_uri: encodeURIComponent('http://localhost:9000/')

        };

        var getCode = function () {
            var url = 'https://github.com/login/oauth/authorize';
            ['client_id','scope','redirect_uri'].forEach(function (key) {
                url += '&' + key + '=' + credentials[key];
            });
            console.log(url);

        };

        // Public API here
        return {
            getCode: getCode
        };
    });
