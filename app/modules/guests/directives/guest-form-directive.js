angular.module('eventManagerApp.guests')

    .directive('guestForm', function () {
        return {
            templateUrl: 'modules/guests/directives/guest-form.html',
            scope: false
        };
    });
