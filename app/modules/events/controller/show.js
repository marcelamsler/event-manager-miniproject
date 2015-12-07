'use strict';

define([], function () {
    var EventsShowCtrl = function ($scope, eventsService, $routeParams) {

        refreshEvent();

        function refreshEvent() {
            eventsService.loadEvent($routeParams.id).then(function (response) {
                $scope.event = response;
            });
        }

        //function canJoin(event) {
        //    var activeGuests = 0;
        //    angular.forEach(event.guests, function (guest) {
        //        if (!guest.canceled) {
        //            activeGuests++;
        //        }
        //    });
        //    return event.maximalAmountOfGuests - activeGuests > 0;
        //}

        $scope.toggleCancelGuest = function (guest) {
            if (guest.canceled) {
                if (!eventsService.canJoin($scope.event)) {
                    return;
                }
            }
            guest.canceled = !guest.canceled;
            eventsService.updateGuest($scope.event.id, guest).then(function () {
                refreshEvent()
            }).then(function () {
                eventsService.updateEvent($scope.event);
            }).then(function () {
                eventsService.loadAllEvents();
            });
        }

    };
    return EventsShowCtrl;
});
