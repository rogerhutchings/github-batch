'use strict';

// Instantiating controllers in the tests, as per http://goo.gl/L4IwDZ
describe('Controller: CreateIssuesCtrl', function () {

    var controllerFactory, scope, mockLocation, mockOAuth, mockGithub, mockIssues;
 
    var createController = function () {
        return controllerFactory('CreateIssuesCtrl', {
            $scope: scope,
            OAuth: mockOAuth,
            $location: mockLocation,
            Github: mockGithub,
            Issues: mockIssues
        });
    };

    beforeEach(module('githubBatchApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
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

    it('should have the Issues service available as a scope object', function () {
        createController();
        expect(scope.issues).toEqual(mockIssues);
    });

    it('should have an addIssue scope method which calls the relevant Issue service method', function () {
        createController();
        scope.addIssue();
        expect(mockIssues.createIssue).toHaveBeenCalled();
    });

    it('should have an deleteIssue scope method which calls the relevant Issue service method', function () {
        createController();
        scope.deleteIssue(5);
        expect(mockIssues.deleteIssue).toHaveBeenCalledWith(5);
    });

    it('should have a checkTitle scope method to ensure titles aren\'t blank', function () {
        createController();
        var result;
        result = scope.checkTitle();
        expect(result).toBe('Issue title cannot be blank.');
        result = scope.checkTitle('Title');
        expect(result).toBe(true);
    });

});
