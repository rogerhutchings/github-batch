'use strict';

describe('Service: OAuth', function () {

    // load the service's module
    beforeEach(module('githubBatchApp'));

    // instantiate service
    var OAuth;
    beforeEach(inject(function (_OAuth_) {
        OAuth = _OAuth_;
    }));

});
