'use strict';

// Instantiating controllers in the tests, as per http://goo.gl/L4IwDZ
describe('Controller: MainCtrl', function () {

    var controllerFactory, mockScope, mockLocation, mockOAuth, mockRouteParams;
 
    var createController = function () {
        return controllerFactory('MainCtrl', {
            $scope: mockScope,
            OAuth: mockOAuth,
            $location: mockLocation,
            $routeParams: mockRouteParams
        });
    };

    beforeEach(module('githubBatchApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        mockScope = $rootScope.$new();
        controllerFactory = $controller;
    }));

    // Setup our mock services
    beforeEach(function () {
        
        mockOAuth = {
            requestToken: function () {}
        };
        spyOn(mockOAuth, 'requestToken');
        
        mockLocation = { 
            path: function () {}
        };
        spyOn(mockLocation, 'path');
        
        mockRouteParams = {};

    });  

    it('should redirect to the issue creation screen if there\'s a token available', function () {
        mockOAuth.token = true;
        createController();
        expect(mockLocation.path).toHaveBeenCalledWith('/create-issues');
    });

    it('should request a token if there\'s a code in the URL and no token is available', function () {
        mockOAuth.token = false;
        mockRouteParams.code = 'dummyCode';
        createController();
        expect(mockOAuth.requestToken).toHaveBeenCalledWith('dummyCode');
    });

});
