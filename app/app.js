define("app", ["angular"], function(angular){

    var app = angular.module('eventManagerApp', [
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

    return app;
});

// TODO
require(["app", "controllers/TestController1"]);
require(["app", "controllers/TestController2"]);
require(["app", "controllers/TestController3"]);
require(["app", "controllers/TestController4"]);
require(["app", "controllers/TestController5"]);
