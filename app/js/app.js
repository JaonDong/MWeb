/**
 * Created by Jack on 6/7/2016.aaa
 */
define(['angular','angular-route','controllers'],function(angular){
    'use strict';
    var app=angular.module('myApp',['ngRoute','myApp.controller']);

    app.config(function ($controllerProvider, $provide, $compileProvider,$routeProvider) {
        //路由初始化
        $routeProvider
            .when('/',{
                templateUrl:'app/views/index.html'
            })
            .when('/login',{
                templateUrl:'app/views/login.html',
                controller:'loginController'
            })
            .when('/register',{
                templateUrl:'app/views/register.html',
                controller:'registerController'
            })
            .when('/forgetPwd1',{
                templateUrl:'app/views/forget_password1.html',
                controller:'forgetPwd1Controller'
            });
    });

    app.run(function(){
        console.log("app running...");
    });
    //启动
    app.init=function(){
        angular.bootstrap(document,['myApp'])
    };

    return app;
});