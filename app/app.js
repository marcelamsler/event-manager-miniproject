'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'events',
  'myApp.view2',
  'myApp.version',
  "ngMaterial"
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/events'});
}]);
