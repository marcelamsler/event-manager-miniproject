define([], function () {
  var toolbar = function ($rootScope, $window) {
    return {
        templateUrl: 'components/templates/toolbar.html',
        link: function (scope, element) {
            $rootScope.$on('$routeChangeSuccess', function (event, toState) {
                if ( toState.data !== undefined ) {
                  scope.isStartPage = toState.data.isStartPage;
                  scope.pageTitle = toState.data.pageTitle;
                }
            });

            scope.goBack = function () {
                $window.history.back();
            }
        }
    };
  };
  return toolbar;
});
