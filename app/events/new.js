    'use strict';
    define([
        'angular',
        'angular-route',
        'newEvent'
    ], function(angular) {


    angular.module('eventManagerApp.events')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events/new', {
            templateUrl: 'events/new.html',
            controller: 'EventNewCtrl',
            data: {
                isStartPage: false,
                pageTitle: "New Event"
            }
        });
    }])

    .controller('EventNewCtrl', ['$scope', 'eventsService', '$location', function ($scope, eventsService, $location) {
        $scope.save = function () {
            eventsService.saveEvent($scope.event).then(function () {
                eventsService.loadAllEvents().then(function () {
                    $location.path('/events');
                });
            });
        };

        $scope.cancel = function() {
            $location.path('/events');
        };

        $scope.event = {
            id: UUIDService.getRandomUuid(),
            name: null,
            description: null,
            targetGroup: null,
            contributions: [],
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

}]);

});

