app.config(function ($stateProvider) {

    $stateProvider.state('reset', {
        url: '/reset',
        templateUrl: 'js/reset/reset.html',
        controller: 'ResetPasswordCtrl'
    });

});

app.controller('ResetPasswordCtrl', function ($scope, UserFactory, $state) {

    $scope.login = {};
    $scope.error = null;

    $scope.editUserPassword = function (id) {

        $scope.error = null;

        UserFactory.editUserPassword(id).then(function (users) {
            $scope.userlist = users;
            $state.go('home');
        }).catch(function () {
            $scope.error = 'Invalid reset credentials.';
        });
    }
});