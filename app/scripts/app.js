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
    'ngTouch'
]);

app.config(function ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
        })
        .when('/choose-repo', {
          templateUrl: 'views/choose-repo.html',
          controller: 'ChooseRepoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });


});
