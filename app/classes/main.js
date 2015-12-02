require.config({
    baseUrl: './',
    paths: {
        'angular': 'bower_components/angular/angular.min',
        'angular-route': 'bower_components/angular-route/angular-route.min'

        'angularRoute': 'bower_components/angular-route/angular-route',
        'angularMocks': 'bower_components/angular-mocks/angular-mocks',
        'text': 'bower_components/text/text',
        'angularAria': 'bower_components/angular-aria/angular-aria',
        'angularAnimate': 'bower_components/angular-animate/angular-animate',
        'angularMaterial': 'bower_components/angular-material/angular-material',
        'scDateTime': 'bower_components/sc-date-time/dist/sc-date-time',
        'events': 'events/events',
        'eventsService': 'events/services/eventsService',
        'uuidService': 'components/services/UUID-service',
        'newEvent': 'events/new',
        'editEvent': 'events/edit',
        'showEvent': 'events/show',
        'eventsFormDirective': 'events/directives/events-form-directive',
        'dateTimePicker': 'events/directives/date-time-picker',
        'initModule': 'modules/guests/init-module',
        'newGuests': 'modules/guests/new',
        'editGuests': 'modules/guests/edit',
        'guestFormDirective': 'modules/guests/directives/guest-form-directive',
        'app': 'app',
        'toolbarDirective': 'components/directives/toolbar-directive'
    },
    // angular does not support async loading out of the box -> use the shim loader
    shim: {

        'angular': {'exports': 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        }
    }
});

define(['angular'], function (angular) {
    var app = angular.module("eventManagerApp");
    return angular.bootstrap(app);
});
require([
        'angular',
        'app'
    ], function (angular, app) {
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function () {
// bootstrap the app manually
            angular.bootstrap(document, ['eventManagerApp']);
        });
    }
);