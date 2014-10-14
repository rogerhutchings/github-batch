'use strict';

describe('Controller: LogoutCtrl', function () {

    beforeEach(module('githubBatchApp'));

    var LogoutCtrl,
        scope,
        location,
        OAuth;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        OAuth = {
            logout: function () {}
        };
        spyOn(OAuth, 'logout');

        location = { 
            path: function () {}
        };
        spyOn(location, 'path');

        LogoutCtrl = $controller('LogoutCtrl', {
            $scope: scope,
            $location: location,
            OAuth: OAuth
        });
    }));

    it('should call OAuth.logout', function () {
        expect(OAuth.logout).toHaveBeenCalled();
    });

    it('should redirect to the homepage after logging out', function () {
        expect(location.path).toHaveBeenCalledWith('/');
    });

});
