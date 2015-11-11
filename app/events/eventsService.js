(function(){
  'use strict';

  angular.module('events').service('eventsService', ['$q', EventsService]);

  /**
   * Events DataService
   * Events embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function EventsService($q){
    var events = [
        {
            id: 1,
            name: "Studiengangabend",
            description: "auf ein Neues",
            targetGroup: "Stud I",
            contributionsDescription: "Desserts gem. Doodle",
            location: {
                name: "HSR",
                street: "Oberseestrasse",
                plz: "8640",
                city: "Rapperswil"
            },
            times: {
                begin: "15.11.2015 19:00",
                end: "15.11.2015 22:30"
            },
            maximalAmountOfGuests: 150,
            guests: []
        },
        {
            id: 2,
            name: "Birthday Party",
            description: "man wird alt",
            targetGroup: "Freunde",
            contributionsDescription: "gute Laune",
            location: {
                name: "My Flat",
                street: "Kniestrasse",
                plz: "8640",
                city: "Rapperswil"
            },
            times: {
                begin: "13.1.2016 19:00",
                end: "13.1.2016 23:00"
            },
            maximalAmountOfGuests: 12,
            guests: []
        },
        {
            id: 3,
            name: "Fette Fete",
            description: "riesige Fete",
            targetGroup: "alle",
            contributionsDescription: "cash",
            location:{
                name: "Club Fete",
                street: "rue du fete",
                plz: "2000",
                city: "Genf"
            },
            times:{
                begin: "1.3.2016 19:00",
                end: "2.3.2016 23:00"
            },
            maximalAmountOfGuests: 350,
            guests: []
        }
    ];

    // Promise-based API
    return {
      loadAllEvents : function() {
        // Simulate async nature of real remote calls
        return $q.when(events);
      }
    };
  }

})();
