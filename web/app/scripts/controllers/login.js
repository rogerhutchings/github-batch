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
        '$routeParams',
        function ($scope, OAuth, $routeParams) {

            OAuth.login();

        }]);
