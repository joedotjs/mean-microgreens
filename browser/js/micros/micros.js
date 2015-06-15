app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('micros', {
        url: '/micros',
        controller: 'MicrosController',
        templateUrl: 'js/micros/micros.html'
    });

});

app.controller('MicrosController', function ($scope, MicrosFactory, AuthService) {

    $scope.micros;
    $scope.image;
    $scope.whichName;

    $scope.levels = [
        'mild',
        'medium',
        'medium-spicy',
        'spicy'
    ]
    // $scope.newMicro = {
    //     name: "kitten",
    //     spice: "mild",
    //     price: 10,
    //     description: "soooo cutteeeee!!!",
    //     image: 'http://cdn.cutestpaw.com/wp-content/uploads/2011/11/cute-cat-l.jpg',
    //     inventory: 1
    //     };

    $scope.checkAdminStatus = function () {

        var user = AuthService.getLoggedInUser().then(function (currUser){
            return currUser.admin;
        });

    }

    $scope.showAllMicros = function () {
        MicrosFactory.getAllMicros().then(function (micros) {
            $scope.micros = micros;
        });
    };
    $scope.showMicroById = function(microid) {
        MicrosFactory.getMicroById(microid).then(function (micro){
            $scope.micros = [micro];
        });
    };
    $scope.showMicroByName = function(microname) {
        microname = this.whichName;
        MicrosFactory.getMicroByName(microname).then(function (micro){
            $scope.micros = [micro];
            $scope.image = micro.image;
        });
    };

    $scope.showMicrosBySpice = function (spicelevel) {
        console.log('wheeeeeeeee!')
        MicrosFactory.getMicrosBySpice(spicelevel).then(function (micros){
            $scope.micros = micros;
        })
    }
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
    $scope.showAllMicros();

});