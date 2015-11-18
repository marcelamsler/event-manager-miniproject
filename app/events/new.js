//angular.module('eventManagerApp.events')

define([], function() {
  function EventNewCtrl($scope, $rootScope) {
    $scope.event = {
        id: 1,
        name: null,
        description: null,
        targetGroup: null,
        contributionsDescription: [],
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

    $scope.today = new Date();
    $scope.minDateBegin = new Date(
      $scope.today.getFullYear(),
      $scope.today.getMonth(),
      $scope.today.getDate()
    );

    /**
     * Start Time changed --> check if end time is still after the start time.
     * Also: Change the min date for the end time so that it can only be after
     * the start time.
     */
    $scope.changeMinDateEnd = function() {
      if ( $scope.event.times.end < $scope.event.times.begin ) {
        $scope.event.times.end = $scope.event.times.begin;
      }
      $scope.minDateEnd = $scope.event.times.begin ? $scope.event.times.begin : $scope.minDateBegin;
    };
    $scope.changeMinDateEnd();
  };

  EventNewCtrl.$inject=['$scope', '$rootScope'];

  return EventNewCtrl;
});
