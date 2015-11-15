'use strict';

angular.module('eventManagerApp.events')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events/:id/show', {
            templateUrl: 'events/show.html',
            controller: 'EventShowCtrl',
            data: {
                isStartPage: false,
                pageTitle: "Show Event"
            }
        });
    }])

    .controller('EventShowCtrl', ['$scope', 'eventsService', '$routeParams', function ($scope, eventsService, $routeParams) {
        $scope.event = eventsService.loadEvent($routeParams.id);
    }]);