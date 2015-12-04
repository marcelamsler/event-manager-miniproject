'use strict';

describe('eventManagerApp Events', function() {

	beforeEach(module('eventManagerApp.events'));
    var scope, createController, $httpBackend;

    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;

        //$httpBackend.expectGET('phones/phones.json').
        //        respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

        scope = $rootScope.$new();

        createController = function() {
            return $controller('EventsCtrl', {
                '$scope': scope
            });
        };
    }));

    it('should have no events in the beginning', function() {
        var controller = createController();
        expect(scope.events.length).toBe(0);
    });
});
