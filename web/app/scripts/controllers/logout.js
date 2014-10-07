'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
    .controller('LogoutCtrl', [
        '$scope', 
        '$location',
        'OAuth',
        function ($scope, $location, OAuth) {
            OAuth.logout();
            $location.path('/');
        }
    ]);
