angular.module('eventManagerApp.events')

    .directive('eventsFormDirective', function () {
        return {
            templateUrl: 'modules/events/templates/form.html',
            scope: false
        };
    });
