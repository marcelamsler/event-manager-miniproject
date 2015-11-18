//angular.module('eventManagerApp.events')

define([], function() {
  function EventEditCtrl($scope, eventsService, $routeParams) {
    $scope.event = eventsService.loadEvent($routeParams.id);
  };

  EventEditCtrl.$inject=['$scope', 'eventsService', '$routeParams'];

  return EventEditCtrl;
});
