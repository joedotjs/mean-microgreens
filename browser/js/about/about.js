app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('about', {
        url: '/about',
        controller: 'AboutController',
        templateUrl: 'js/about/about.html'
    });

});

app.controller('AboutController', function ($scope, FullstackPics, MicrosFactory) {

    // Images of beautiful Fullstack people.
    $scope.images = _.shuffle(FullstackPics);
    $scope.micros;
    $scope.newMicro = {
        name: "kitten",
        spice: "mild",
        price: 10,
        description: "soooo cutteeeee!!!",
        image: 'http://cdn.cutestpaw.com/wp-content/uploads/2011/11/cute-cat-l.jpg',
        inventory: 1
        };

    $scope.showAllMicros = function () {
        MicrosFactory.getAllMicros().then(function (micros) {
            $scope.micros = micros;
        });
    };
    $scope.showMicroById = function(microid) {
        MicrosFactory.getMicroById(microid).then(function (micro){
            $scope.micros = micro;
        });
    };
    $scope.showMicroByName = function(microname) {
        MicrosFactory.getMicroByName(microname).then(function (micro){
            $scope.micros = micro;
        });
    };
    $scope.addMicro = function (micro) {
        console.log("in add micro");
        MicrosFactory.createMicro(micro).then(function (newMicro){
            $scope.newMicro = {
                name: null,
                spice: null,
                price: null,
                description: null,
                image: null,
                inventory: null
            };
        });
    };
    $scope.deleteMicro = function (id){
        MicrosFactory.deleteMicroById(id).then(function(){
            return;
        });
    };


});