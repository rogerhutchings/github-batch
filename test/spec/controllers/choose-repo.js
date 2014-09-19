'use strict';

describe('Controller: ChooseRepoCtrl', function () {

  // load the controller's module
  beforeEach(module('githubBatchApp'));

  var ChooseRepoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChooseRepoCtrl = $controller('ChooseRepoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
