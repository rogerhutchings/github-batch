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
    '$route',
    '$window',
    'config',
    function ($http, $localStorage, $location, $route, $window, config) {

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
                token = $localStorage.token = response.data.token;
                loggedIn.value = true;
                $location.search('code', null).path('/choose-repo');
            } else {
                console.log(response);
            }
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
