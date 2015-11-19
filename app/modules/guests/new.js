'use strict';

angular.module('eventManagerApp.guests')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events/:event_id/guests/new', {
            templateUrl: 'modules/guests/new.html',
            controller: 'GuestNewCtrl',
            data: {
                isStartPage: false,
                pageTitle: "Join Event"
            }
        });
    }])

    .controller('GuestNewCtrl', ['$scope', function ($scope) {

        $scope.guest = {
            id: UUIDService.getRandomUuid(),
            name : "",
            contribution: "",
            comment: "",
            canceled: false
        };


        $scope.event = {
            title: "event title should be loaded from server",
            freeContributions: ['cookies', 'bla', 'magic-cookies']
        };

    }]);
