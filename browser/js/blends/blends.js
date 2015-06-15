app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('blends', {
        url: '/blends',
        controller: 'BlendsController',
        templateUrl: 'js/blends/blends.html'
    });

});

app.controller('BlendsController', function ($scope, BlendsFactory, MicrosFactory) {
    $scope.allBlends;
    $scope.allMicros;
    $scope.selectedMicros = [];  
    $scope.blends;
    $scope.editedBlend;
    $scope.image;
    $scope.whichNameToGet;
    $scope.whichToEdit;
    $scope.newBlend = {
        name: "kitten",
        micros: [],
        price: 10
        };

    $scope.logThis = function(something){
        console.log(something);
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

    $scope.refreshNewBlend = function (selectedMicro){
        var indexOfSelectedMicro = $scope.newBlend.micros.indexOf(selectedMicro.id);
        if(selectedMicro.selected){
            if(indexOfSelectedMicro === -1){
                $scope.newBlend.micros.push(selectedMicro.id);
            }
        } else {
            if (indexOfSelectedMicro !== -1){
                $scope.newBlend.micros.splice(indexOfSelectedMicro, 1);
            }
        }
        // console.log($scope.newBlend.micros);
    };


    BlendsFactory.getAllBlends().then(function (blends) {
            $scope.allBlends = blends;
        });

    MicrosFactory.getAllMicros().then(function (micros){
        $scope.allMicros = micros; 
        for(var i = 0; i < $scope.allMicros.length; i++){
            var microObject = {
                id: $scope.allMicros[i]._id,
                selected: false
            };
            $scope.selectedMicros.push(microObject);
        }
    });

});