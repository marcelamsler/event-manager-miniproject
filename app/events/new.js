'use strict';

angular.module('eventManagerApp.events')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events/new', {
            templateUrl: 'events/new.html',
            controller: 'EventFormCtrl'
        });
    }])

    .controller('EventFormCtrl', ['$scope', '$rootScope', '$window', function ($scope, $rootScope, $window) {
        $rootScope.isStartPage = false;

        $rootScope.goBack = function() {
            $window.history.back();
        };

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