'use strict';

describe('Service: issues', function () {

    // load the service's module
    beforeEach(module('githubBatchApp'));

    // instantiate service
    var issues;
    beforeEach(inject(function (_issues_) {
        issues = _issues_;
    }));

});
