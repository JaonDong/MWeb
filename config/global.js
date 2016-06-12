/**
 * Created by Jack on 6/8/2016.
 */
define(function(require){
    //严格模式下
    'use strict';

    return {
        webApi:{
            path:'http://115.159.210.12:80/chinook/service/',
            jsonp:'?callback=JSON_CALLBACK',
            getPath:function(pathStr){
                return this.path+pathStr+this.jsonp;
            }
        },
        apiList:{
            user:{
                register:'user/webregister',
                login:'user/weblogin',
                sendCode:'user/websendLoginCode'
            }
        },
        user:{
            name:'dong',
            psw:'123123'
        }
    };
});