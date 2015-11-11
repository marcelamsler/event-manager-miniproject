'use strict';

angular.module('eventManagerApp.events', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events', {
            templateUrl: 'events/events.html',
            controller: 'EventsCtrl'
        });
    }])

    .controller('EventsCtrl', ['$scope', 'eventsService', '$q', '$rootScope', function ( $scope, eventsService, $q, $rootScope ) {
        $rootScope.isStartPage = true;
        $scope.events = [];


        eventsService
          .loadAllEvents()
          .then( function( response ) {
            $scope.events = [].concat( response.data.events );
          });

        $scope.slotsLeft = function( event ) {
          //return event.maximalAmountOfGuests - event.guests.length;
        };
    }]);
