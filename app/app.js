'use strict';

// Declare app level module which depends on views, and components
angular.module('eventManagerApp', [
  'ngRoute',
  'eventManagerApp.events',
  'ngMaterial'
])
.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider) {
  $routeProvider.otherwise({redirectTo: '/events'});

  $mdThemingProvider.theme('default')
                    .primaryPalette('blue')
                    .accentPalette('orange');
}]);
