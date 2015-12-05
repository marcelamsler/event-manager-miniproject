'use strict';

define([], function () {
        var EventsShowCtrl = function ($scope, eventsService, $routeParams) {

            refreshEvent();

            function refreshEvent() {
                eventsService.loadEvent($routeParams.id).then(function (response) {
                    $scope.event = response;
                });
            }

            $scope.cancelGuest = function (guest) {
                guest.canceled = true;
                eventsService.updateGuest($scope.event.id, guest).then(function () {
                    refreshEvent();
                });
            }
        };
    return EventsShowCtrl;
});
