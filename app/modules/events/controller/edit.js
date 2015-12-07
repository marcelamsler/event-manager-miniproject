'use strict';

define([], function () {
    var EventEditCtrl = function ($scope, eventsService, $routeParams, $location) {
        eventsService.loadEvent($routeParams.id).then( function( response ) {
          $scope.event = response;
        });

        $scope.save = function () {
            eventsService.updateEvent($scope.event).then(function () {
                eventsService.loadAllEvents().then(function () {
                    $location.path('/events');
                });
            });
        };

        $scope.cancel = function() {
          $scope.event = $scope.originalEvent;
          $location.path( '/events' );
        };
    };
    return EventEditCtrl;
});
