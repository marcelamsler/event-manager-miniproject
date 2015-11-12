'use strict';

angular.module('eventManagerApp.events')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events/:id/edit', {
            templateUrl: 'events/edit.html',
            controller: 'EventEditCtrl',
            data: {
                isStartPage: false,
                pageTitle: "Edit Event"
            }
        });
    }])

    .controller('EventEditCtrl', ['$scope', 'eventsService', '$routeParams', function ($scope, eventsService, $routeParams) {
        $scope.event = eventsService.loadEvent($routeParams.id);
    }]);