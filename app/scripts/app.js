'use strict';

/**
 * @ngdoc overview
 * @name githubBatchApp
 * @description
 * # githubBatchApp
 *
 * Main module of the application.
 */

var app = angular.module('githubBatchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'oauth'
]);

app.config(function ($routeProvider) {
    
    $routeProvider

        .when('/access_token=:accessToken', {
            template: '',
            controller: function ($location, AccessToken) {
                var hash = $location.path().substr(1);
                AccessToken.setTokenFromString(hash);
                $location.path('/');
                $location.replace();
            }
        })
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/choose-repo', {
          templateUrl: 'views/choose-repo.html',
          controller: 'ChooseRepoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });


});
