(function () {
    'use strict';

    angular.module('eventManagerApp.events').service('eventsService', ['$q', '$http', EventsService]);

    /**
     * Events DataService
     * Events embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function EventsService($q, $http) {
        var fakeResponse = {
            data: {
                events: [
                    {
                        id: 1,
                        name: "Studiengangabend",
                        description: "auf ein Neues",
                        targetGroup: "Stud I",
                        contributionsDescription: ["Desserts gem. Doodle"],
                        location: {
                            name: "HSR",
                            street: "Oberseestrasse",
                            plz: "8640",
                            city: "Rapperswil"
                        },
                        times: {
                            begin: new Date('2015-11-20T18:00:00'),
                            end: new Date('2015-11-20T18:00:00')
                        },
                        maximalAmountOfGuests: 150,
                        guests: []
                    },
                    {
                        id: 2,
                        name: "Birthday Party",
                        description: "man wird alt",
                        targetGroup: "Freunde",
                        contributionsDescription: ["gute Laune"],
                        location: {
                            name: "My Flat",
                            street: "Kniestrasse",
                            plz: "8640",
                            city: "Rapperswil"
                        },
                        times: {
                            begin: new Date('2015-11-20T18:00:00'),
                            end: new Date('2015-11-20T18:00:00')
                        },
                        maximalAmountOfGuests: 12,
                        guests: []
                    },
                    {
                        id: 3,
                        name: "Fette Fete",
                        description: "riesige Fete",
                        targetGroup: "alle",
                        contributionsDescription: ["cash"],
                        location: {
                            name: "Club Fete",
                            street: "rue du fete",
                            plz: "2000",
                            city: "Genf"
                        },
                        times: {
                            begin: new Date('2015-11-20T18:00:00'),
                            end: new Date('2015-11-20T18:00:00')
                        },
                        maximalAmountOfGuests: 350,
                        guests: []
                    }
                ]
            }
        };

        // Promise-based API
        return {
            loadAllEvents: function () {
                // Simulate async nature of real remote calls
                return $q.when(fakeResponse);
                // Access server API
                // return $http({method: 'GET', url: 'http://localhost:8080/api/events'});
            },
            loadEvent: function (id) {
                return fakeResponse.data.events.filter(function(event) {
                    return event.id == id;
                })[0];
            },
            saveEvent: function(eventToSave) {
                fakeResponse.data.events.filter(function(event) {
                    return event.id == eventToSave.id;
                })[0] = eventToSave;
            },
            addGuest: function(eventID, newGuest) {
                var foundEvent = fakeResponse.data.events.filter(function(event) {
                  return event.id == eventID;
                })[0];

                if ( foundEvent.guests.length < foundEvent.maximalAmountOfGuests ) {
                  foundEvent.guests.push( newGuest );
                }
            }

        };
    }

})();
