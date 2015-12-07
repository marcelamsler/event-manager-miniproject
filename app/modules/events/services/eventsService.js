'use strict';

define([], function () {
    var eventsService = function ($http) {

        this.events = null;

        this.loadAllEvents = function () {
            var _this = this;
            return $http.get('http://localhost:8080/api/events')
                .then(function (response) {
                    _this.events = response.data.events;
                    console.log('updated events');
                    return response.data;
                })
                .catch(function (err) {
                    console.log(err);
                    return {};
                });

        };

        this.loadEvent = function (eventId) {
            return $http.get('http://localhost:8080/api/events/' + eventId)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (err) {
                    console.log(err);
                    return {};
                });
        };

        this.saveEvent = function (eventToSave) {
            console.log(eventToSave);
            return $http.post('http://localhost:8080/api/events', eventToSave)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (err) {
                    $log.error(err);
                    return {};
                });
        };

        this.updateEvent = function (eventToUpdate) {
            return $http.post('http://localhost:8080/api/events/' + eventToUpdate.id, eventToUpdate)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (err) {
                    $log.error(err);
                    return {};
                });
        };

        this.loadGuest = function (eventId, guestId) {
            return $http.get('http://localhost:8080/api/events/' + eventId + '/guests/' + guestId)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (err) {
                    console.log(err);
                    return {};
                });
        };

        this.addGuest = function (event, newGuest) {
            var activeGuests = 0;
            angular.forEach( event.guests, function( guest ) {
                if ( !guest.canceled ) {
                    activeGuests++;
                }
            });
            if (activeGuests < event.maximalAmountOfGuests) {
                return $http.post('http://localhost:8080/api/events/' + event.id + '/guests', newGuest)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (err) {
                        console.log(werr);
                        return {};
                    });
            } else {
                console.log("no more guests allowed");
            }
        };

        this.updateGuest = function (eventId, guestToUpdate) {
            return $http.post('http://localhost:8080/api/events/' + eventId + '/guests/' + guestToUpdate.id, guestToUpdate)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (err) {
                    console.log(err);
                    return {};
                });
        };
        this.canJoin = function (event) {
            // consider cancelled guests as not counting towards the limit
            var activeGuests = 0;
            angular.forEach( event.guests, function( guest ) {
                if ( !guest.canceled ) {
                    activeGuests++;
                }
            });
            return event.maximalAmountOfGuests - activeGuests > 0;
        };

    };
    return eventsService;
});
