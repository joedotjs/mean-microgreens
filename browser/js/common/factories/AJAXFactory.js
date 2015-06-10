app.factory('AjaxFactory', function ($http){

	return {


		/////////////////////////////micros///////////////////////////////

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
		},

////////////////////////////////blends////////////////////////////////////
		getBlends: function (id) {
			var queryParams = {};

			if (id) {
				queryParams.blendid = id;
			}

			return $http.get('/api/blends', {params: queryParams}).then(function (response) {
				return response.data;
			})

		},

		createBlend: function (blend) {
			return $http.post("/api/blends", blend).then(function (response) {

				return response.data;

			})
		},

		editBlendById: function (id, blend) {
			return $http.put('/api/blends/' + id, blend).then(function (response) {
				return response.data;
			})
		},

		deleteBlendById: function (id) {
			return $http.delete('/api/blends/' + id);
		},

		/////////////////////////////orders/////////////////////////////////////

		getOrder: function (id) {
			var queryParams = {};

			if (id) {
				queryParams.orderid = id;
			}

			return $http.get('/api/orders', {params: queryParams}).then(function (response) {
				return response.data;
			})

		},

		createOrder: function (order) {
			return $http.post("/api/orders", order).then(function (response) {

				return response.data;

			})
		},

		editOrderById: function (id, order) {
			return $http.put('/api/orders/' + id, order).then(function (response) {
				return response.data;
			})
		},

		deleteOrderById: function (id) {
			return $http.delete('/api/orders/' + id);
		},

		////////////////////////////reviews/////////////////////////////////////

		getReview: function (id) {
			var queryParams = {};

			if (id) {
				queryParams.reviewid = id;
			}

			return $http.get('/api/reviews', {params: queryParams}).then(function (response) {
				return response.data;
			})

		},

		createReview: function (review) {
			return $http.post("/api/reviews", review).then(function (response) {

				return response.data;

			})
		},

		editReviewById: function (id, review) {
			return $http.put('/api/orders/' + id, review).then(function (response) {
				return response.data;
			})
		},

		deleteReviewById: function (id) {
			return $http.delete('/api/reviews/' + id);
		}


	}
})