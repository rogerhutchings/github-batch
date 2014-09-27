'use strict';

describe('Directive: newIssues', function () {

  // load the directive's module
  beforeEach(module('githubBatchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new-issues></new-issues>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the newIssues directive');
  }));
});
