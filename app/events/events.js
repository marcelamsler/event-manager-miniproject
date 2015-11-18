//angular.module('eventManagerApp.events')

define([], function() {
  function EventsCtrl($scope, eventsService, $q, $rootScope) {
    $scope.events = [];

    eventsService
        .loadAllEvents()
        .then(function (response) {
            $scope.events = [].concat(response.data.events);
        });

    $scope.slotsLeft = function (event) {
        //return event.maximalAmountOfGuests - event.guests.length;
    };

    $scope.createNewEvent = function() {

    };
  };

  EventsCtrl.$inject=['$scope', 'eventsService', '$q', '$rootScope'];

  return EventsCtrl;
});
