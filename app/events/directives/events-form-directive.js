angular.module('eventManagerApp.events')

    .directive('eventsFormDirective', function () {
        return {
            templateUrl: 'events/templates/form.html',
            scope: false,
            controller: "EventsFormCtrl"
        };
    })

    .controller('EventsFormCtrl', ['$scope', 'eventsService', function ($scope, eventsService) {
        $scope.saveEvent = function() {eventsService.saveEvent($scope.event)};
    }]);
