describe('eventsService', function () {
  var eventsService,
      httpBackend,
      returnData;

  beforeEach(function (){
    // load the module.
    module('eventManagerApp.events');
    // get the service, also get $httpBackend, which will be a mock, thanks to angular-mocks.js <3
    inject(function($httpBackend, _eventsService_) {
      eventsService = _eventsService_;
      httpBackend = $httpBackend;
      // set up some data for the http call to return and test later.
      returnData = [{
          id: 1,
          name: "HSR-Party",
          description: "Party an der HSR",
          targetGroup: "Studenten",
          contributions: ["Kuchen"],
          maximalAmountOfGuests: 100,
          location: {
              name: "HSR",
              street: "Oberseestrasse",
              plz: 8640,
              city: "Rapperswil"
          },
          times: {
              begin: new Date('2015-11-15T19:00:00'),
              end: new Date('2015-11-16T03:00:00')
          },
          guests: []
        }, {
          id: 2,
          name: "Gala-Diner",
          description: "Feinstes Gala-Diner auf dem Zürichsee, yo!",
          targetGroup: "Leute in Anzügen und so",
          contributions: ["Kummerbund", "Champagner"],
          maximalAmountOfGuests: 200,
          location: {
              name: "Schiff Unsinkbar 2",
              street: "-",
              plz: 8000,
              city: "Zürich"
          },
          times: {
              begin: new Date('2015-12-15T19:00:00'),
              end: new Date('2015-12-16T03:00:00')
          },
          guests: []
        }];
    });

  });

  // make sure no expectations were missed in your tests. (e.g. expectGET or expectPOST)
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should get all the events that we mock', function (){

    // expectGET to make sure this is called once.
    httpBackend.expectGET('http://localhost:8080/api/events').respond(returnData);

    // make the call.
    var returnedPromise = eventsService.loadAllEvents();

    // set up a handler for the response, that will put the result
    // into a variable in this scope for you to test.
    var result;
    returnedPromise.then(function(response) {
      result = response;
    });

    // flush the backend to "execute" the request to do the expectedGET assertion.
    httpBackend.flush();

    // check the result.
    // (after Angular 1.2.5: be sure to use `toEqual` and not `toBe`
    // as the object will be a copy and not the same instance.)
    expect(result).toEqual(returnData);
  });

  it('should load an event by id', function (){
    httpBackend.expectGET('http://localhost:8080/api/events/1').respond(returnData[0]);

    var result;
    eventsService.loadEvent(1).then(function(response) {
      result = response;
    });

    httpBackend.flush();
    expect(result).toEqual(returnData[0]);
  });

  it('should not crash on illegal id', function (){

    httpBackend.expectGET('http://localhost:8080/api/events/-1').respond();

    var result;
    eventsService.loadEvent(-1).then(function(response) {
      result = response;
    });

    httpBackend.flush();
    expect(result).toEqual(undefined);
  });

  it('should save an event and return the saved event', function (){
    var newEvent = {
          id: UUIDService.getRandomUuid(),
          name: "Neuer Event",
          description: "Komplett neuer Event omg",
          targetGroup: "jedermann",
          contributions: ["nix!", "nada!"],
          location: {
              name: "Club Lorem",
              street: "Ipsumweg 23",
              plz: 4242,
              city: "Dolorsittingen"
          },
          times: {
              begin: new Date('2016-01-01T19:00:00'),
              end: new Date('2016-01-02T03:00:00')
          },
          maximalAmountOfGuests: 0,
          guests: []
        },
        result;

    httpBackend.expectPOST('http://localhost:8080/api/events').respond( newEvent);

    eventsService.saveEvent( newEvent ).then(function(response) {
      result = response;
    });

    httpBackend.flush();
    expect(result).toEqual( newEvent );
  });

  it('should update an event and return the updated event', function (){
    var updatedEvent,
        result;

    httpBackend.expectGET('http://localhost:8080/api/events/1').respond( returnData[0] );
    eventsService.loadEvent(1).then(function( response ) {
      updatedEvent = response;
    });
    httpBackend.flush();

    updatedEvent.name = "Updated name!";

    httpBackend.expectPOST('http://localhost:8080/api/events/1').respond( updatedEvent );

    eventsService.updateEvent( updatedEvent ).then(function(response) {
      result = response;
    });

    httpBackend.flush();
    expect(result).toEqual( updatedEvent );
  });
});
