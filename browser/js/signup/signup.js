app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'SignupCtrl'
    });

});

app.controller('SignupCtrl', function ($scope, UserFactory, $state) {

    $scope.signup = {};
    $scope.error = null;

    $scope.createUser = function (user) {

        $scope.error = null;

        UserFactory.createUser(user).then(function (user) {
            $scope.signup = user;
            $state.go('home');
        }).catch(function () {
            $scope.error = 'Invalid signup credentials.';
        });
    };

});