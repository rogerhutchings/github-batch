'use strict';

// Instantiating controllers in the tests, as per http://goo.gl/L4IwDZ
describe('Controller: CreateIssuesCtrl', function () {

    var controllerFactory, mockScope, mockLocation, mockOAuth, mockGithub, mockIssues;
 
    var createController = function () {
        return controllerFactory('CreateIssuesCtrl', {
            $scope: mockScope,
            OAuth: mockOAuth,
            $location: mockLocation,
            Github: mockGithub,
            Issues: mockIssues
        });
    };

    beforeEach(module('githubBatchApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        mockScope = $rootScope.$new();
        controllerFactory = $controller;
    }));

    // Setup our mock services
    beforeEach(function () {
        
        mockOAuth = {};
        
        mockLocation = { 
            path: function () {}
        };
        spyOn(mockLocation, 'path');

        mockIssues = {
            createIssue: function () {},
            deleteIssue: function () {}
        };
        spyOn(mockIssues, 'createIssue');
        spyOn(mockIssues, 'deleteIssue');

    });  

    it('should redirect to the homepage if there\'s no token available', function () {
        mockOAuth.token = false;
        createController();
        expect(mockLocation.path).toHaveBeenCalledWith('/');
    });

    // it('should have the Github service available as a scope object');

    it('should have the Issues service available as a scope object');

    it('should have an addIssue scope method which calls the relevant Issue service method');

    it('should have an deleteIssue scope method which calls the relevant Issue service method');

    it('should have a checkTitle scope method to ensure titles aren\'t blank');

});
