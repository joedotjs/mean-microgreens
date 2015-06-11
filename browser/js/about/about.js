app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('about', {
        url: '/about',
        controller: 'AboutController',
        templateUrl: 'js/about/about.html'
    });

});

app.controller('AboutController', function ($scope, FullstackPics, AjaxFactory) {

    // Images of beautiful Fullstack people.
    $scope.images = _.shuffle(FullstackPics);
    $scope.micros;

    $scope.getAllMicros = function () {
    	AjaxFactory.getMicros().then(function (micros) {
    		$scope.micros = micros;
    	});
    }


});