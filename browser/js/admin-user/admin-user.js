app.config(function ($stateProvider) {

    $stateProvider.state('admin-user', {
        url: '/admin-user',
        templateUrl: 'js/admin-user/admin-user.html',
        controller: 'ManageUserCtrl'
    });

});

app.controller('ManageUserCtrl', function ($scope, UserFactory, $state) {

    $scope.error = null;

    $scope.getAllUsers = function () {

        UserFactory.getAllUsers().then(function (users) {
            $scope.userlist = users;
        })    
    };

    $scope.promoteUserStatus = function (id) {

        UserFactory.promoteUserStatus(id).then(function (users) {
            $scope.userlist = users;
        })
    };

    $scope.deleteUserById = function (id) {

        UserFactory.deleteUserById(id).then(function (users) {
            $scope.userlist = users;
        })
    }
});