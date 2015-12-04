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

require(["app", "modules/events/init"]);
require(["app", "modules/guests/init"]);
