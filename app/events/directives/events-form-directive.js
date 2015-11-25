angular.module('eventManagerApp.events')

    .directive('eventsFormDirective', function () {
        return {
            templateUrl: 'events/templates/form.html',
            scope: false,
            controller: "EventsFormCtrl"
        };
    })

    .controller('EventsFormCtrl', ['$scope', 'eventsService', '$location', function ($scope, eventsService, $location) {
        $scope.save = function () {
            eventsService.saveEvent($scope.event).then(function () {
                eventsService.loadAllEvents().then(function () {
                    $location.path('/events');
                });
            });

        };
    }]);
