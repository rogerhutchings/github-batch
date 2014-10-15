'use strict';

// Instantiating controllers in the tests, as per http://goo.gl/L4IwDZ
describe('Controller: LogoutCtrl', function () {

    var controllerFactory, mockScope, mockLocation, mockOAuth, mockRouteParams;
 
    var createController = function () {
        return controllerFactory('LogoutCtrl', {
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
            logout: function () {}
        };
        spyOn(mockOAuth, 'logout');
        
        mockLocation = { 
            path: function () {}
        };
        spyOn(mockLocation, 'path');
        
        mockRouteParams = {};

    });  

    it('should call OAuth.logout', function () {
        createController();
        expect(mockOAuth.logout).toHaveBeenCalled();
    });

    it('should redirect to the homepage after logging out', function () {
        createController();
        expect(mockLocation.path).toHaveBeenCalledWith('/');
    });

});

