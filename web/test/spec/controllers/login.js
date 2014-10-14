'use strict';

describe('Controller: LoginCtrl', function () {

    beforeEach(module('githubBatchApp'));

    var LoginCtrl,
        scope,
        OAuth;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        OAuth = {
            login: function () {}
        };
        spyOn(OAuth, 'login');

        LoginCtrl = $controller('LoginCtrl', {
            $scope: scope,
            OAuth: OAuth
        });
    }));

    it('should call OAuth.login', function () {
        expect(OAuth.login).toHaveBeenCalled();
    });

});
