var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: {
      	'angular': 'app/bower_components/angular/angular',
      	'angularRoute': 'app/bower_components/angular-route/angular-route',
      	'angularAria': 'app/bower_components/angular-aria/angular-aria',
      	'angularAnimate': 'app/bower_components/angular-animate/angular-animate',
      	'angularMocks': 'app/bower_components/angular-mocks/angular-mocks',
      	'angularMaterial': 'app/bower_components/angular-material/angular-material',
      	'scDateTime': 'app/bower_components/sc-date-time/dist/sc-date-time'
    },
    // angular/modernizr do not support async loading out of the box -> use the shim loader
    shim: {
        'angular'   : { exports: 'angular' },
        'app'       : { deps: ['angular'] },
        'angularRoute': ['angular'],
        'angularAria': ['angular'],
        'angularAnimate': ['angular'],
	      'angularMocks': ['angular'],
        'angularMaterial': ['angular'],
        'scDateTime': ['angular']
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
