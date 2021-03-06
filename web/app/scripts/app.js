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
    'ngStorage',
    'ngTouch',
    'ui.bootstrap',
    'xeditable'
]);

app.config(function ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when('/create-issues', {
          templateUrl: 'views/create-issues.html',
          controller: 'CreateIssuesCtrl'
        })
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
        })
        .when('/login', {
            template: null,
            controller: 'LoginCtrl'
        })
        .when('/logout', {
            template: null,
            controller: 'LogoutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

});

app.run(function (editableOptions) {
    editableOptions.theme = 'bs3';
});
