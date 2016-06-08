/**
 * Created by Jack on 6/7/2016.
 */
define(function(require){
    'use strict';
    var app=angular.module('myApp',['ngResource']);

    app.init=function(){
        angular.bootstrap(document,['myApp']);
    };
    app.config(function ($controllerProvider, $provide, $compileProvider, $resourceProvider,$routeProvider) {
        
    });

    app.run(function(){
        console.log("app running...");
    });

    return app;
});