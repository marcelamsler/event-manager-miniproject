'use strict';

define([], function () {
    var eventsController = function ($scope, eventsService) {
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
          // consider cancelled guests as not counting towards the limit
          var activeGuests = 0;
          angular.forEach( event.guests, function( guest ) {
            if ( !guest.canceled ) {
              activeGuests++;
            }
          });
          return event.maximalAmountOfGuests - activeGuests > 0;
        };

        /**
         * Set a certain event active (or inactive again) and set all other
         * events inactive.
         */
        $scope.setActive = function (event) {
            angular.forEach($scope.events, function (ev) {
                ev.activeInList = ev.id === event.id && !event.activeInList;
            });
        }

    };
    return eventsController;
});
