'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
    .controller('MainCtrl', function ($scope, $routeParams, OAuth) {

        // TODO: replace with interceptor
        if ($routeParams.code && !OAuth.token) {
            OAuth.requestToken($routeParams.code);
        }
        
    });
