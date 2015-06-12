app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('blends', {
        url: '/blends',
        controller: 'BlendsController',
        templateUrl: 'js/blends/blends.html'
    });

});

app.controller('BlendsController', function ($scope, BlendsFactory) {

    $scope.blends;
    $scope.image;
    $scope.whichName;
    $scope.newBlend = {
        // name: "kitten",
        // spice: "mild",
        // price: 10,
        // description: "soooo cutteeeee!!!",
        // image: 'http://cdn.cutestpaw.com/wp-content/uploads/2011/11/cute-cat-l.jpg',
        // inventory: 1
        };

    $scope.showAllBlends = function () {
        BlendsFactory.getAllBlends().then(function (blends) {
            $scope.blends = blends;
        });
    };
    $scope.showMicroById = function(blendid) {
        BlendsFactory.getBlendById(blendid).then(function (blend){
            $scope.blends = blend;
        });
    };
    // $scope.showMicroByName = function(microname) {
    //     MicrosFactory.getMicroByName(microname).then(function (micro){
    //         $scope.micros = [micro];
    //         $scope.image = micro.image;
    //     });
    // };
    $scope.addBlend = function (blend) {
        BLendsFactory.createBlend(blend).then(function (newBlend){
            // $scope.newMicro = {
            //     name: null,
            //     spice: null,
            //     price: null,
            //     description: null,
            //     image: null,
            //     inventory: null
            // };
        });
    };
    $scope.deleteBlend = function (id){
        BlendsFactory.deleteBlendById(id).then(function(){
            return;
        });
    };


});