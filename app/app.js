define("app", [
        "angular",
        "angularRoute",
        "angularMaterial",
        "angularAnimate",
        "scDateTime",
        "angularAria",
        "modules/events/controller/events",
        "modules/events/controller/show",
        "modules/events/controller/new",
        "modules/events/services/eventsService",
        "modules/events/directives/events-form-directive",
        "components/services/UUID-service",
        "components/directives/toolbar-directive"
    ]
    , function (angular,
                angularRoute,
                angularMaterial,
                angularAnimate,
                scDateTime,
                angularAria,
                EventsCtrl,
                EventShowCtrl,
                EventNewCtrl,
                eventsService,
                eventsFormDirective,
                UUIDService,
                toolbar) {

        var app = angular.module('eventManagerApp', [
                'ngRoute',
                'eventManagerApp.events',
                'ngMaterial',
                'scDateTime'
            ])
            .config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider) {
                $routeProvider.otherwise({redirectTo: '/events'});

                $mdThemingProvider.theme('default')
                    .primaryPalette('blue')
                    .accentPalette('orange');

                $routeProvider.when('/events/:id/show', {
                    templateUrl: 'modules/events/templates/show.html',
                    controller: 'EventShowCtrl',
                    data: {
                        isStartPage: false,
                        pageTitle: "Show Event"
                    }
                }).when('/events', {
                    templateUrl: 'modules/events/templates/events.html',
                    controller: 'EventsCtrl',
                    data: {
                        isStartPage: true,
                        pageTitle: "Event Manager Overview"
                    }
                }).when('/events/new', {
                    templateUrl: 'modules/events/templates/new.html',
                    controller: 'EventNewCtrl',
                    data: {
                        isStartPage: false,
                        pageTitle: "New Event"
                    }
                });
            }])
            .value('scDateTimeConfig', {
                displayTwentyfour: true,
                defaultTheme: 'material'
            });

        var eventModule = angular.module('eventManagerApp.events', []);

        eventsService.$inject = ['$http'];
        eventModule.service('eventsService', eventsService);

        EventsCtrl.$inject = ['$scope', 'eventsService'];
        eventModule.controller('EventsCtrl', EventsCtrl);

        EventShowCtrl.$inject = ['$scope', 'eventsService', '$routeParams'];
        eventModule.controller('EventShowCtrl', EventShowCtrl);

        EventNewCtrl.$inject = ['$scope', 'eventsService', '$location'];
        eventModule.controller('EventNewCtrl', EventNewCtrl);

         toolbar.$inject = ['$rootScope','$window'];
         eventModule.directive('toolbar', toolbar);

         eventModule.directive('eventsFormDirective', eventsFormDirective);

        return app;
    });
