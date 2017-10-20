/**
 * Created by Admin on 2017/10/19.
 */
app.controller("carController",["$scope","carServer",function($scope,carServer){
    carServer.getData().then(function(result){
        $scope.car=result.data;
    });
    $scope.straining=function(){
        $scope.car.forEach(function(v,i){
            if(!v.state){
                v.state=true;
            }
        });
    }
}]);