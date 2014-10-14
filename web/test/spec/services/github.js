'use strict';

describe('Service: Github', function () {

    // load the service's module
    beforeEach(module('githubBatchApp'));

    // instantiate service
    var Github;
    beforeEach(inject(function (_Github_) {
        Github = _Github_;
    }));

});
