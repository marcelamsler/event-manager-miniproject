'use strict';

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

    .controller('EventNewCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

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
            times: {},
            maximalAmountOfGuests: 0,
            guests: []
        }


    }]);