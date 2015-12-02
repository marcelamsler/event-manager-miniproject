'use strict';
// Declare app level module which depends on views, and components
angular.module('eventManagerApp', [
        'angular-route',
        'ngRoute',
        'eventManagerApp.events',
        'eventManagerApp.guests',
        'ngMaterial',
        'scDateTime'
    ])
    .config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider) {
        $routeProvider.otherwise({redirectTo: '/events'});

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange');
    }])
    .value('scDateTimeConfig', {
        displayTwentyfour: true,
        defaultTheme: 'material'
    });
