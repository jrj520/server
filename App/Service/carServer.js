/**
 * Created by Admin on 2017/10/12.
 */
app.factory("carServer",["ajaxServer",function(ajaxServer){
    return {
        getData:function(){
            return ajaxServer.ajax("get","./Data/car.json");
        }
    }
}]);