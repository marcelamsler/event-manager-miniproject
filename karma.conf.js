module.exports = function(config){
  config.set({

    basePath : './',


//    files : [
//      'app/bower_components/angular/angular.js',
//      'app/bower_components/angular-route/angular-route.js',
//      'app/bower_components/angular-mocks/angular-mocks.js',
//      'app/components/**/*.js',
//      'app/events/*.js',
//      'app/events/**/*.js',
//      'app/modules/**/*.js',
//      'app/modules/*.js',
//      'app/app.js'
//    ],

files: [
  'app/bower_components/angular/angular.js',
  'app/bower_components/angular-route/angular-route.js',
  'app/bower_components/angular-mocks/angular-mocks.js',
  'app/bower_components/sc-date-time/dist/sc-date-time.js',
  'app/events/events.js',
  'app/events/services/eventsService.js',
  'app/components/services/UUID-service.js',
  'app/events/new.js',
  'app/events/edit.js',
  'app/events/show.js',
  'app/events/directives/events-form-directive.js',
  'app/events/directives/date-time-picker.js',
  'app/modules/guests/init-module.js',
  'app/modules/guests/new.js',
  'app/modules/guests/edit.js',
  'app/modules/guests/directives/guest-form-directive.js',
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
