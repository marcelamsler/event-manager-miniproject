'use strict';

define([], function () {
    var EventNewCtrl = function($scope, eventsService, $location) {
        $scope.save = function () {
            eventsService.saveEvent($scope.event).then(function () {
                eventsService.loadAllEvents().then(function () {
                    $location.path('/events');
                });
            });
        };

        $scope.cancel = function() {
            $location.path('/events');
        };

        $scope.event = {
            id: UUIDService.getRandomUuid(),
            name: null,
            description: null,
            targetGroup: null,
            contributions: [],
            location: {
                name: null,
                street: null,
                plz: null,
                city: null
            },
            times: {
                begin: new Date(),
                end: new Date()
            },
            maximalAmountOfGuests: 0,
            guests: []
        };
      };

      return EventNewCtrl;
});
