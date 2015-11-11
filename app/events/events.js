'use strict';

angular.module('events', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events', {
            templateUrl: 'events/events.html',
            controller: 'EventsCtrl'
        });
    }])

    .controller('EventsCtrl', ['$scope', 'eventsService', '$q', function ( $scope, eventsService, $q ) {
        $scope.events = [];

        eventsService
          .loadAllEvents()
          .then( function( events ) {
            $scope.events    = [].concat( events );
          });

        $scope.slotsLeft = function( event ) {
          return event.maximalAmountOfGuests - event.guests.length;
        };
    }]);
