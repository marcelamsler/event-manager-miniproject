//angular.module('eventManagerApp.events')

define([], function() {
  function EventShowCtrl($scope, eventsService, $routeParams) {
    $scope.event = eventsService.loadEvent($routeParams.id);
  };

  EventShowCtrl.$inject=['$scope', 'eventsService', '$routeParams'];

  return EventShowCtrl;
});
