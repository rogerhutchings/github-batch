'use strict';

// Instantiating controllers in the tests, as per http://goo.gl/L4IwDZ
describe('Controller: LoginCtrl', function () {

    var controllerFactory, mockScope, mockLocation, mockOAuth, mockRouteParams;
 
    var createController = function () {
        return controllerFactory('LoginCtrl', {
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
            login: function () {}
        };
        spyOn(mockOAuth, 'login');
        
    });  

    it('should call OAuth.login', function () {
        createController();
        expect(mockOAuth.login).toHaveBeenCalled();
    });

});

