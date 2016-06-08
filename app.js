/**
 * Created by Jack on 6/7/2016.
 */
require.config({
    paths:{
        jquery:'libs/jquery.min.js',
        bootstrap:'libs/bootstrap',
        globalVar:'commonjs/globalVar'
    },
    shim:{
        jquery:{exports:'$'},
        bootstrap:{
            deps:['jquery'],
            exports:'Bootstrap'
        },
        globalVar:{
            deps:['jquery'],
            exports:'globalVar'
        }
    }
    });

