'use strict';

angular.module('myApp.events', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events', {
            templateUrl: 'events/events.html',
            controller: 'EventsCtrl'
        });
    }])

    .controller('EventsCtrl', ['$scope', function ($scope) {
        $scope.events = [
            {
                id: 1,
                name: "Studiengangabend",
                description: "auf ein Neues",
                targetGroup: "Stud I",
                contributionsDescription: "Desserts gem. Doodle",
                location: {
                    name: "HSR",
                    street: "Oberseestrasse",
                    plz: "8640",
                    city: "Rapperswil"
                },
                times: {
                    begin: "15.11.2015 19:00",
                    end: "15.11.2015 22:30"
                },
                maximalAmountOfGuests: 150,
                guests: []
            },
            {
                id: 2,
                name: "Birthday Party",
                description: "man wird alt",
                targetGroup: "Freunde",
                contributionsDescription: "gute Laune",
                location: {
                    name: "My Flat",
                    street: "Kniestrasse",
                    plz: "8640",
                    city: "Rapperswil"
                },
                times: {
                    begin: "13.1.2016 19:00",
                    end: "13.1.2016 23:00"
                },
                maximalAmountOfGuests: 12,
                guests: []
            },
            {
                id: 3,
                name: "Fette Fete",
                description: "riesige Fete",
                targetGroup: "alle",
                contributionsDescription: "cash",
                location:{
                    name: "Club Fete",
                    street: "rue du fete",
                    plz: "2000",
                    city: "Genf"
                },
                times:{
                    begin: "1.3.2016 19:00",
                    end: "2.3.2016 23:00"
                },
                maximalAmountOfGuests: 350,
                guests: []
            }
        ];

        $scope.slotsLeft = function( event ) {
          return event.maximalAmountOfGuests - event.guests.length;
        };
    }]);
