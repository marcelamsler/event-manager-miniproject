define([], function () {
    var eventsFormDirective = function () {
        return {
            templateUrl: 'modules/events/templates/form.html',
            scope: false
        };
    };
    return eventsFormDirective;
});
