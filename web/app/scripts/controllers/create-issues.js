(function (angular, _) {

    'use strict';

    /**
     * @ngdoc function
     * @name githubBatchApp.controller:CreateIssuesCtrl
     * @description
     * # CreateIssuesCtrl
     * Controller of the githubBatchApp
     */
    angular.module('githubBatchApp')
        .controller('CreateIssuesCtrl', [
            '$scope',
            '$location', 
            'Issues', 
            'OAuth',
            function ($scope, $location, Issues, OAuth) {
            
            if (!OAuth.token) {
                $location.path('/');
            }

            $scope.issues = Issues;

            $scope.addIssue = function () {
                $scope.issues.createIssue();
            };

            $scope.deleteIssue = function (index) {
                $scope.issues.deleteIssue(index);
            };

            $scope.checkTitle = function (title) {
                if (_.isUndefined(title)) {
                    return 'Issue title cannot be blank.';
                } 
                return true;
            };

        }]);

})(window.angular, window._);
