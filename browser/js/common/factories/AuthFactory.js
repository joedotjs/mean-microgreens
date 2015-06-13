app.factory('AuthFactory', function ($http) {
    
    var currentUser = null;
    return {
        getCurrentUser: function () {
            return currentUser;
        },
        login: function (credentials) {
            return $http.post('/login', credentials)
            .then(function (user) {
                currentUser = user;
            });
        },
        signup: function (credentials) {
            return new User(credentials).save()
            .then(function (user) {
                currentUser = user;
            });
        },
        logout: function () {
            return $http.get('/logout')
            .then(function () {
                currentUser = null;
            });
        }
    }
});