app.factory('UserFactory', function ($http){
  return {
    getAllUsers: function (){
      return $http.get("/users")
      .then(function (response){
        return response.data;
      });
    },
    createUser: function (user) {
      return $http.post("/signup", user)
      .then(function (response) {
        return response.data;
      });
    },
    promoteUserStatus: function (user) {
      return $http.put('/promote/' + id)
      .then(function (response) {
        return response.data;
      })
    },
    deleteUserById: function (id) {
      return $http.delete('/delete/' + id);
    }
  };
});