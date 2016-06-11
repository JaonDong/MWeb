/**
 * Created by Ta_wuhen on 2016/6/11.
 */
define(['controllerHelp','bootstrap'],function(controllerHelp){
    controllerHelp.controller('loginController',function($scope){
        $scope.user={
         name:'',
         password:''
         };
         $scope.login=function(loginUser){

             console.log(loginUser);
         };

    });
});