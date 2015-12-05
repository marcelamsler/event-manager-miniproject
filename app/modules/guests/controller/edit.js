'use strict';

define([], function(){

    var GuestEditCtrl = function ($scope, eventsService, $routeParams, $location) {
        var eventId = $routeParams.event_id;
        var guestId = $routeParams.guest_id;

        eventsService.loadGuest(eventId, guestId).then(function (response) {
            $scope.guest = response;
        });

        eventsService.loadEvent(eventId).then(function(response){
            $scope.event = response;
        });

        $scope.save = function () {
            eventsService.updateGuest(eventId, $scope.guest).then(function () {
                $location.path('/events/' + eventId + '/show');
            });
        };

        $scope.cancel = function () {
            $location.path('/events');
        };
    };
    return GuestEditCtrl;
});
