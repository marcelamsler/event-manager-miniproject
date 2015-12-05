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
        "modules/events/controller/edit",
        "modules/events/services/eventsService",
        "modules/events/directives/events-form-directive",
        "modules/events/directives/date-time-picker",
        "components/services/UUID-service",
        "components/directives/toolbar-directive",
        "modules/guests/controller/edit",
        "modules/guests/controller/new",
        "modules/guests/directives/guest-form-directive"
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
                EventEditCtrl,
                eventsService,
                eventsFormDirective,
                dateTimePickerInput,
                UUIDService,
                toolbar,
                GuestEditCtrl,
                NewGuestCtrl,
                guestForm
              ) {

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
                }).when('/events/:id/edit', {
                    templateUrl: 'modules/events/templates/edit.html',
                    controller: 'EventEditCtrl',
                    data: {
                        isStartPage: false,
                        pageTitle: "Edit Event"
                    }
                }).when('/events/:event_id/guests/:guest_id/edit', {
                    templateUrl: 'modules/guests/templates/edit.html',
                    controller: 'GuestEditCtrl',
                    data: {
                        isStartPage: false,
                        pageTitle: "Edit Participation"
                    }
                }).when('/events/:event_id/guests/new', {
                    templateUrl: 'modules/guests/templates/new.html',
                    controller: 'NewGuestCtrl',
                    data: {
                        isStartPage: false,
                        pageTitle: "Join Event"
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

        EventEditCtrl.$inject = ['$scope', 'eventsService', '$routeParams', '$location'];
        eventModule.controller('EventEditCtrl', EventEditCtrl);

        toolbar.$inject = ['$rootScope','$window'];
        eventModule.directive('toolbar', toolbar);
        eventModule.directive('eventsFormDirective', eventsFormDirective);

        dateTimePickerInput.$inject = [ '$mdDialog', '$filter'];
        eventModule.directive('dateTimePickerInput', dateTimePickerInput);

        var guestModule = angular.module('eventManagerApp.guests', []);

        NewGuestCtrl.$inject = ['$scope', 'eventsService', '$routeParams', '$location'];
        guestModule.controller('NewGuestCtrl', NewGuestCtrl);

        GuestEditCtrl.$inject = ['$scope', 'eventsService', '$routeParams', '$location'];
        guestModule.controller('GuestEditCtrl', GuestEditCtrl);

        guestModule.directive('guestForm', guestForm);

        return app;
    });
