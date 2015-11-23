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

    .controller('EventsCtrl', ['$scope', 'eventsService', '$q', '$rootScope', function ($scope, eventsService, $q, $rootScope) {
        $scope.events = [];

        eventsService
            .loadAllEvents()
            .then(function (response) {
                $scope.events = [].concat(response.data.events);
            });

        $scope.slotsLeft = function (event) {
            return event.maximalAmountOfGuests - event.guests.length;
        };

        $scope.createNewEvent = function() {

        }

        $scope.canJoin = function ( event ) {
          return $scope.slotsLeft( event ) > 0;
        }
    }]);
