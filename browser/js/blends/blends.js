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
    $scope.editedBlend;
    $scope.image;
    $scope.whichNameToGet;
    $scope.whichToEdit;
    $scope.newBlend = {
        name: "kitten",
        micros: ["557b0df30f7f2ef108051bd1", "557b0df30f7f2ef108051bd2"],
        price: 10
        };

    $scope.showAllBlends = function () {
        BlendsFactory.getAllBlends().then(function (blends) {
            
            $scope.blends = blends;
        });
    };
    $scope.showBlendById = function(blendid) {
        BlendsFactory.getBlendById(blendid).then(function (blend){
            $scope.blends = blend;
        });
    };
    $scope.showBlendByName = function(blendname) {
        BlendsFactory.getBlendByName(blendname).then(function (blend){
            $scope.blends = [blend];
            // $scope.image = blend.image;
        });
    };
    $scope.addBlend = function (blend) {
        BlendsFactory.createBlend(blend).then(function (newBlend){
        $scope.newBlend = {
            name: null,
            micros: [],
            price: null
            };
        });
    };
    $scope.deleteBlend = function (id){
        console.log("called");
        BlendsFactory.deleteBlendById(id).then(function(){
            return;
        });
    };
    $scope.loadBlendToEdit = function (id){
        BlendsFactory.getBlendById(id).then(function (blend){
            $scope.editedBlend = blend;
        });
    };
    $scope.editBlend = function (id, blend){
        console.log("in edit blend");
        BlendsFactory.editBlendById(id, blend).then(function (blend){
            $scope.editedBlend = blend;
        });
    };


});