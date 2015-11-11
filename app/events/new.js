'use strict';

angular.module('eventManagerApp.events')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events/new', {
            templateUrl: 'events/new.html',
            controller: 'EventFormCtrl'
        });
    }])

    .controller('EventFormCtrl', [function () {
        $scope.event = {
            id: 1,
            name: null,
            description: null,
            targetGroup: null,
            contributionsDescription: null,
            location: {
                name: null,
                street: null,
                plz: null,
                city: null
            },
            times: {
                begin: null,
                end: null
            },
            maximalAmountOfGuests: 0,
            guests: []
        }


    }]);