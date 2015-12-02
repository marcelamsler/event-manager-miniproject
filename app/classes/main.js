require.config({
    baseUrl: './',
    paths: {
        'angular': 'bower_components/angular/angular.min',
        'angular-route': 'bower_components/angular-route/angular-route.min'
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
    ], function(angular, app) {
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
// bootstrap the app manually
            angular.bootstrap(document, ['eventManagerApp']);
        });
    }
);