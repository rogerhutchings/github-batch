'use strict';

describe('Controller: CreateIssuesCtrl', function () {

  // load the controller's module
  beforeEach(module('githubBatchApp'));

  var CreateIssuesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateIssuesCtrl = $controller('CreateIssuesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
