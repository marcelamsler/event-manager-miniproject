define([],function(){

  function config($routeProvider, $mdThemingProvider) {
    $routeProvider.when('/events/:id/show', {
        templateUrl: 'events/templates/show.html',
        controller: 'EventShowCtrl',
        data: {
            isStartPage: false,
            pageTitle: "Show Event"
        }
    });
    $routeProvider.when('/events/:id/edit', {
        templateUrl: 'events/templates/edit.html',
        controller: 'EventEditCtrl',
        data: {
            isStartPage: false,
            pageTitle: "Edit Event"
        }
    });
    $routeProvider.when('/events', {
        templateUrl: 'events/templates/events.html',
        controller: 'EventsCtrl',
        data: {
            isStartPage: true,
            pageTitle: "Event Manager Overview"
        }
    });
    $routeProvider.when('/events/new', {
        templateUrl: 'events/templates/new.html',
        controller: 'EventNewCtrl',
        data: {
            isStartPage: false,
            pageTitle: "New Event"
        }
    });
    $routeProvider.otherwise({redirectTo: '/events'});

    $mdThemingProvider.theme('default')
                      .primaryPalette('blue')
                      .accentPalette('orange');
  }

  config.$inject = ['$routeProvider', '$mdThemingProvider'];
  
  return config;
});
