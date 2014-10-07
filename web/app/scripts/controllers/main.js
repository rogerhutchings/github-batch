'use strict';

/**
 * @ngdoc function
 * @name githubBatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubBatchApp
 */
angular.module('githubBatchApp')
    .controller('MainCtrl', function ($location, $scope, $routeParams, OAuth) {

            if (OAuth.token) {
                $location.path('/create-issues');
            }

            if ($routeParams.code && !OAuth.token) {
                OAuth.requestToken($routeParams.code);
            }

    });
