'use strict';

/**
 * @ngdoc service
 * @name githubBatchApp.OAuth
 * @description
 * # OAuth
 * Factory in the githubBatchApp.
 */
var app = angular.module('githubBatchApp');

app.factory('OAuth', [
    '$http',
    '$localStorage',
    '$location',
    '$q',
    '$rootScope',
    '$route',
    '$window',
    'config',
    function ($http, $localStorage, $location, $q, $rootScope, $route, $window, config) {

    var credentials = config.credentials;
    var token = $localStorage.token || null;
    var loggedIn = {
        value: token !== null
    };

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

        console.log('Requesting... via', code);

        var request = $http.get(config.gatekeeperUrl + code);

        request.then(function (response) {
            if (response.data.token) {
                console.log('Got', response.data.token);
                $localStorage.token = response.data.token;
                loggedIn.value = true;
            } else {
                console.log(response);
            }
        }).then(function () {
            $rootScope.$broadcast('OAuth/login');
        });

    };

    // Delete the access token from local storage
    var deleteToken = function () {
        delete $localStorage.token;
        token = null;
        loggedIn.value = false;
        $location.path('/');        
    };

    return {
        login: requestCode,
        requestToken: requestToken,
        logout: deleteToken,
        token: token,
        loggedIn: loggedIn
    };

}]);
