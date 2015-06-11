app.directive('micro', function (MicrosFactory) {

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