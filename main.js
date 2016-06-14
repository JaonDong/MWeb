/**
 * Created by Jack on 6/8/2016.
 */
require.config({
    baseUrl:'app/js',
    paths:{
        css: '../../libs/requirejs/css',
        text: '../../libs/requirejs/text',
        views: '../views',
        global: '../../config/global',
        jquery:'../../libs/jquery.min',
        bootstrap:'../../libs/bootstrap',
        angular:'../../libs/angular-1.4.2/angular',
        'angular-resource':'../../libs/angular-1.4.2/angular-resource',
        'angular-route':'../../libs/angular-1.4.2/angular-route',
        globalVar:'../../commonjs/globalVar',
        app:'app'
    },
    shim:{
        jquery:{exports:'$'},
        bootstrap:{
            deps:['jquery'],
            exports:'Bootstrap'
        },
        angular:{
            exports:'angular'
        },
        'angular-route':{
            deps:['angular'],
            exports:'angular-route'
        },
        globalVar:{
            deps:['jquery'],
            exports:'globalVar'
        },
        global:{
            exports:'global'
        },
        app:{
            deps:['angular','angular-route'],
            exports:'app'
        }
    },
    deps: ['app']
});
require(['app'],function(app){
    app.init();
});
