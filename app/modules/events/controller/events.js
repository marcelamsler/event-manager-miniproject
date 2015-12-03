'use strict';

angular.module('eventManagerApp.events')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events', {
            templateUrl: 'modules/events/templates/events.html',
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
            $scope.events = eventsService.events;
        }

        $scope.canJoin = function (event) {
            return event.maximalAmountOfGuests - event.guests.length > 0;
        };

        /**
         * Set a certain event active (or inactive again) and set all other
         * events inactive.
         */
        $scope.setActive = function( event ) {
          angular.forEach($scope.events, function(ev){
            ev.activeInList = ev.id === event.id && !event.activeInList;
          });
        }

    }]);