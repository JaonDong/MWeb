/**
 * Created by Jack on 6/8/2016.
 */
define(['app','config'],function(app,config){
    app.controller("myController",['$scope', '$compile', 'myApi', '$timeout',function($scope,$compile,$timeout){
        $scope.creator=new app.layoutCreator();


        app.layoutCreator=function(){

        };
    }]);
});