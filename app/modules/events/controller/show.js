'use strict';

define([], function () {
    var EventsShowCtrl = function ($scope, eventsService, $routeParams) {

        refreshEvent();

        function refreshEvent() {
            eventsService.loadEvent($routeParams.id).then(function (response) {
                $scope.event = response;
            });
        }

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

        $scope.showReInviteButton = function (guest){
            return guest.canceled && eventsService.canJoin($scope.event);
        }

    };
    return EventsShowCtrl;
});
