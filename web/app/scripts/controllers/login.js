'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
    .controller('LoginCtrl', [
        '$scope',
        'OAuth',
        function ($scope, OAuth) {

            OAuth.login();

        }]);
