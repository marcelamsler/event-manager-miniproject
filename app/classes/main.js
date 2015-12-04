(function(require) {
'use strict';

require.config({
    baseUrl: '../',
    paths: {
        'modernizr': 'bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
        'angular': 'bower_components/angular/angular.min',
        'angular-route': 'bower_components/angular-route/angular-route.js',
        'angular-aria': 'bower_components/angular-aria/angular-aria.js',
        'angular-animate': 'bower_components/angular-animate/angular-animate.js',
        'angular-material': 'bower_components/angular-material/angular-material.js',
        'sc-date-time': 'bower_components/sc-date-time/dist/sc-date-time.js',
        'events': 'modules/events',
        'guests': 'modules/guests'
    },
    // angular/modernizt do not support async loading out of the box -> use the shim loader
    shim: {
        'angular'   : { exports: 'angular' },
        'modernizr' : { exports: 'Modernizr' },
        'app'       : { deps: ['angular'] }
    }
});

define(['angular', 'app'], function (angular) {
    'use strict';
    return angular.bootstrap(document, ['app']);
});

})(this.require);
