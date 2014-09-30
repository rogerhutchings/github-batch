'use strict';

/**
 * @ngdoc service
 * @name githubBatchApp.config
 * @description
 * # config
 * Constant in the githubBatchApp.
 */
angular.module('githubBatchApp')
    .constant('config', {
        
        // Credentials for first step of the Github OAuth dance
        credentials: {
            client_id: '1ef3b7ef1581851dff8f',
            scope: 'repo',
            redirect_uri: encodeURIComponent('http://localhost:9000/')
        },

        // Url for Github temporary code request
        codeUrl: 'https://github.com/login/oauth/authorize?response_type=token',

        // Url for instance of Gatekeeper
        gatekeeperUrl: 'http://localhost:9001/authenticate/'

    });
