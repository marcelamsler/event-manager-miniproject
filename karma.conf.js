module.exports = function(config){
  config.set({

    basePath : './',

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/modules/events/init.js',
      'app/modules/events/services/eventsService.js',
      'app/components/services/UUID-service.js',
      'app/modules/events/controller/events.js',
      'app/modules/events/controller/new.js',
      'app/modules/events/controller/edit.js',
      'app/modules/events/controller/show.js',
      'app/modules/events/directives/events-form-directive.js',
      'app/modules/events/directives/date-time-picker.js',
      'app/modules/events/tests/*.js',
      'app/modules/guests/init.js',
      'app/modules/guests/controller/new.js',
      'app/modules/guests/controller/edit.js',
      'app/modules/guests/directives/guest-form-directive.js',
      'app/modules/guests/tests/*.js',
      'app/app.js',
      'app/components/directives/toolbar-directive.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
