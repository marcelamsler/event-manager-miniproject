'use strict';

angular.module('eventManagerApp.events')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events/:id/show', {
            templateUrl: 'modules/events/templates/show.html',
            controller: 'EventShowCtrl',
            data: {
                isStartPage: false,
                pageTitle: "Show Event"
            }
        });
    }])
    .controller('EventShowCtrl', ['$scope', 'eventsService', '$routeParams', function ($scope, eventsService, $routeParams) {

        refreshEvent();

        function refreshEvent() {
            eventsService.loadEvent($routeParams.id).then( function( response ){
                $scope.event = response;
            });
        }

        $scope.cancelGuest = function(guest) {
            guest.canceled = true;
            eventsService.updateGuest($scope.event.id, guest).then(function () {
                refreshEvent();
            });
        }
    }]);
