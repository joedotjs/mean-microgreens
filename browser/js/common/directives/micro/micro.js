app.directive('micro', function (MicrosFactory, AuthService) {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/micro/micro.html',
        scope: {
            micro: '='
        },
        link: function (scope) {

        }

    };

});