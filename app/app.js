'use strict';

// Declare app level module which depends on views, and components
angular.module('eventManagerApp', [
  'ngRoute',
  'eventManagerApp.events',
  'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/events'});
}]);
