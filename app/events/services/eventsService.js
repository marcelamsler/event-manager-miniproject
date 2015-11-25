'use strict';

angular.module('eventManagerApp.events').service('eventsService', ['$http', function ($http) {

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
        return $http.post('http://localhost:8080/api/events', eventToSave)
            .then(function (response) {
                return response.data;
            })
            .catch(function (err) {
                $log.error(err);
                return {};
            });
    };

    this.updateEvent = function ( eventToUpdate ) {
        return $http.post( 'http://localhost:8080/api/events/' + eventToUpdate.id, eventToUpdate )
            .then(function (response) {
                return response.data;
            })
            .catch(function (err) {
                $log.error(err);
                return {};
            });
    };

    this.addGuest = function (event, newGuest) {

        if (event.guests.length < event.maximalAmountOfGuests) {
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


}])
;
