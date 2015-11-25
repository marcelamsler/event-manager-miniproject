'use strict';

angular.module('eventManagerApp.events', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events', {
            templateUrl: 'events/events.html',
            controller: 'EventsCtrl',
            data: {
                isStartPage: true,
                pageTitle: "Event Manager Overview"
            }
        });
    }])

    .controller('EventsCtrl', ['$scope', 'eventsService', function ($scope, eventsService) {
        $scope.events = [];

        if (eventsService.events == null) {
            eventsService.loadAllEvents()
                .then(function (response) {
                    $scope.events = response.events;
                });
        } else {
            console.log("load events from service");
            $scope.events = eventsService.events;
        }

        $scope.canJoin = function (event) {
            return event.maximalAmountOfGuests - event.guests.length > 0;
        };

    }]);
