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

        UserFactory.createUser(user).then(function (user) {
            $scope.signup = user;
        })
    };

});