'use strict';

describe('eventManagerApp Events', function() {

	beforeEach(module('eventManagerApp.events'));
    var scope, createController;

    beforeEach(inject(function ($rootScope, $controller) {
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
