app.factory('AjaxFactory', function ($http){

	return {

		getMicros: function (name){

			var queryParams = {};

			if (name) {
				queryParams.microName = name;
			}

			return $http.get("/api/micros", {
				params: queryParams
			}).then(function (response){
				return response.data;
			})

		},

		createMicro: function (micro) {

			return $http.post("/api/micros", micro).then(function (response) {

				return response.data;

			})
		},

		editMicroById: function (id, micro) {
			return $http.put('/api/micros/' + id, micro).then(function (response) {
				return response.data;
			})
		},

		deleteMicroById: function (id) {
			return $http.delete('/api/micros/' + id);
		}

	}
})