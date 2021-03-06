'use strict';

define([], function () {
    var NewGuestCtrl = function ($scope, eventsService, $routeParams, $location) {
        $scope.guest = {
            id: UUIDService.getRandomUuid(),
            name : "",
            contribution: "",
            comment: "",
            canceled: false
        };

        eventsService.loadEvent($routeParams.event_id).then(function(response){
            $scope.event = response;
        });

        $scope.save = function() {
          eventsService.addGuest( $scope.event, $scope.guest).then(function() {
              eventsService.loadAllEvents().then(function() {
                  $location.path( '/events' );
              });
          });
        };

        $scope.cancel = function() {
          $location.path( '/events' );
        };
    };
    return NewGuestCtrl;
});
