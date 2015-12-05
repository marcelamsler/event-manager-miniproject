'use strict';

require.config({
    baseUrl: './',
    paths: {
        'angular': 'bower_components/angular/angular',
        'angularRoute': 'bower_components/angular-route/angular-route',
        'angularAria': 'bower_components/angular-aria/angular-aria',
        'angularAnimate': 'bower_components/angular-animate/angular-animate',
        'angularMaterial': 'bower_components/angular-material/angular-material',
        'scDateTime': 'bower_components/sc-date-time/dist/sc-date-time'
    },
    // angular/modernizr do not support async loading out of the box -> use the shim loader
    shim: {
        'angular'   : { exports: 'angular' },
        'app'       : { deps: ['angular'] },
        'angularRoute': ['angular'],
        'angularAria': ['angular'],
        'angularAnimate': ['angular'],
        'angularMaterial': ['angular'],
        'scDateTime': ['angular']
    }
});

define(['angular', 'app'], function (angular, app) {
    angular.element(document).ready(function() {
        angular.bootstrap(document, [app.name]);
    });
});
