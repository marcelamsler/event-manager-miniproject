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
            guest.canceled = !guest.canceled;
            eventsService.updateGuest($scope.event.id, guest).then(function () {
                refreshEvent();
            });
        }

    };
    return EventsShowCtrl;
});
