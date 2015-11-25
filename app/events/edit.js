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

    .controller('EventEditCtrl', ['$scope', 'eventsService', '$routeParams', '$location', function ($scope, eventsService, $routeParams, $location) {
        eventsService.loadEvent($routeParams.id).then( function( response ) {
          $scope.event = response;
        });

        $scope.cancel = function() {
          $scope.event = $scope.originalEvent;
          $location.path( '/events' );
        };
    }]);
