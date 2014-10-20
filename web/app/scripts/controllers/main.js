(function (angular) {

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

            $scope.getStarted = function () {
                if (OAuth.token) {
                    $location.path('/create-issues');
                } else {
                    $location.path('/login');
                }
            };

            // Exchange an access code for a token if we have one.
            if ($routeParams.code && !OAuth.token) {
                OAuth.requestToken($routeParams.code)
                    .then(function () {
                        $location.search('code', null).path('/create-issues');
                    });
            }

        });

})(window.angular);
