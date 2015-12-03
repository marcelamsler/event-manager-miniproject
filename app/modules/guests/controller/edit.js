'use strict';

angular.module('eventManagerApp.guests')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events/:event_id/guests/:guest_id/edit', {
            templateUrl: 'modules/guests/templates/edit.html',
            controller: 'GuestEditCtrl',
            data: {
                isStartPage: false,
                pageTitle: "Edit Participation"
            }
      });
    }])

    .controller('GuestEditCtrl', ['$scope', 'eventsService', '$routeParams', '$location', function ($scope, eventsService, $routeParams, $location) {
        var eventId = $routeParams.event_id;
        var guestId = $routeParams.guest_id;

        eventsService.loadGuest(eventId, guestId).then(function (response) {
            $scope.guest = response;
        });

        eventsService.loadEvent(eventId).then(function(response){
            $scope.event = response;
        });

        $scope.save = function () {
            eventsService.updateGuest(eventId, $scope.guest).then(function () {
                $location.path('/events/' + eventId + '/show');
            });
        };

        $scope.cancel = function () {
            $location.path('/events');
        };

    }]);
