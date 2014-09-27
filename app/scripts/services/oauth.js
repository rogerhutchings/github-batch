'use strict';

/**
 * @ngdoc service
 * @name githubBatchApp.OAuth
 * @description
 * # OAuth
 * Factory in the githubBatchApp.
 */
var app = angular.module('githubBatchApp');

app.factory('OAuth', function ($http, $localStorage, $location, $rootScope, $route, $window, config) {

    var credentials = config.credentials;
    var token = $localStorage.token || 'blahblahblah';
    var loggedIn = token !== null;

    // Sends you to Github for the first step of the dance
    var requestCode = function () {

        var url = config.codeUrl;

        Object.keys(credentials).forEach(function (key) {
            url += '&' + key + '=' + credentials[key];
        });

        $window.location.href = url;

    };

    // Exchange the temporary code Github provides for an access token, and
    // save it to local storage
    var requestToken = function (code) {

        var request = $http({
            method: 'GET', 
            url: config.gatekeeperUrl + code
        });

        // then save to local storage,  and redirect to repo select
        request.success(function (data) {
            if (data.token) {
                $rootScope.$broadcast('OAuth/login');
                $localStorage.token = token = data.token;
                loggedIn = true;
                $location.search('code', null).path('/choose-repo');
            } else if (data.error === 'bad_code') {
                $location.search('code', null).path('/error');
            }
        });

        // or redirect to error page
        request.error(function () {
            $location.path('/error');
        });

    };

    // Delete the access token from local storage
    var deleteToken = function () {
        $rootScope.$broadcast('OAuth/logout');
        delete $localStorage.token;
        token = null;
        $location.path('/');
    };

    return {
        login: requestCode,
        requestToken: requestToken,
        logout: deleteToken,
        token: token,
        loggedIn: loggedIn
    };

});
