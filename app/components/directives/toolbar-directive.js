angular.module('eventManagerApp').directive('toolbar', ['$rootScope','$window', function ($rootScope, $window) {
        return {
            templateUrl: 'components/templates/toolbar.html',
            link: function (scope, element) {
                $rootScope.$on('$routeChangeSuccess', function (event, toState) {
                    scope.isStartPage = toState.data.isStartPage;
                    scope.pageTitle = toState.data.pageTitle;
                });

                scope.goBack = function () {
                    $window.history.back();
                }
            }
        };
    }
]);