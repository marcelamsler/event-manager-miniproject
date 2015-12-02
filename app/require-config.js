'use strict';

if(window.__karma__) {
    var allTestFiles = [];
    var TEST_REGEXP = /spec\.js$/;

    var pathToModule = function(path) {
        return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
    };

}

require.config({
    paths: {
        angular: 'bower_components/angular/angular',
        angularRoute: 'bower_components/angular-route/angular-route',
        angularMocks: 'bower_components/angular-mocks/angular-mocks',
        text: 'bower_components/text/text',
        angularAria: 'bower_components/angular-aria/angular-aria',
        angularAnimate: 'bower_components/angular-animate/angular-animate',
        angularMaterial: 'bower_components/angular-material/angular-material',
        scDateTime: 'bower_components/sc-date-time/dist/sc-date-time',
        events: 'events/events',
        eventsService: 'events/services/eventsService',
        uuidService: 'components/services/UUID-service',
        newEvent: 'events/new',
        editEvent: 'events/edit',
        showEvent: 'events/show',
        eventsFormDirective: 'events/directives/events-form-directive',
        dateTimePicker: 'events/directives/date-time-picker',
        initModule: 'modules/guests/init-module',
        newGuests: 'modules/guests/new',
        editGuests: 'modules/guests/edit',
        guestFormDirective: 'modules/guests/directives/guest-form-directive',
        app: 'app',
        toolbarDirective: 'components/directives/toolbar-directive'

    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }
    },
    priority: [
        "angular"
    ],
});

require([
        'angular',
        'app'
    ], function(angular, app) {
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
            // bootstrap the app manually
            angular.bootstrap(document, ['eventManagerApp']);
        });
    }
);