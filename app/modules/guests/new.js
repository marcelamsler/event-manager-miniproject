'use strict';

angular.module('eventManagerApp.guests')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events/:event_id/guests/new', {
            templateUrl: 'modules/guests/new.html',
            controller: 'GuestNewCtrl',
            data: {
                isStartPage: false,
                pageTitle: "Join Event"
            }
        });
    }])

    .controller('GuestNewCtrl', ['$scope', 'eventsService', '$routeParams', '$location', function ($scope, eventsService, $routeParams, $location) {

        $scope.guest = {
            id: UUIDService.getRandomUuid(),
            name : "",
            contribution: "",
            comment: "",
            canceled: false
        };

        $scope.event = eventsService.loadEvent($routeParams.event_id).then(function(response){
            $scope.event = response;
        });

        $scope.join = function() {
          eventsService.addGuest( $scope.event, $scope.guest );
          $location.path( '/events' );
        };

        $scope.cancel = function() {
          $location.path( '/events' );
        };

    }]);
