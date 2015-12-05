'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */


/*
describe('NewGuestCtrl', function(){
  var scope, ctrl, $httpBackend;

  // Load our app module definition before each test.
  beforeEach(module('eventManagerApp.guests', []));

  // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
  // This allows us to inject a service but then attach it to a variable
  // with the same name as the service in order to avoid a name conflict.
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;

    console.log( "asda" );
    $httpBackend.expectGET('http://localhost:8080/api/events/' + eventId).
        respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

    scope = $rootScope.$new();
    ctrl = $controller('PhoneListCtrl', {$scope: scope});
  }));
});

*/

/*
describe('Ecent controllers', function() {
  describe('EventsCtrl', function(){
    var scope, ctrl, $httpBackend;

    // Load our app module definition before each test.
    beforeEach(module('eventManagerApp'));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service in order to avoid a name conflict.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      scope = $rootScope.$new();
      ctrl = $controller('EventsCtrl', {$scope: scope});
    }));
  })
});
*/

describe('my app', function() {
  beforeEach(module('eventManagerApp.events'));

  it('should add 2 and 2', function() {
    expect(true).toBe(true);
  });

/*
  it('should automatically redirect to /events when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/events");
  });
  */

/*

  describe('events', function() {

    beforeEach(function() {
      browser.get('index.html#/events');
    });


    it('should render events when user navigates to /events', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/events-creator');
    });


    it('should render events-creator when user navigates to /events-creator', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
  */
});
