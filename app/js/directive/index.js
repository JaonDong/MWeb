/**
 * Created by Jack on 6/8/2016.
 */
define(['app'],function(app){
    app.directive('myLayout',function(){
        return {
            link:function(scope,element,attrs){
                scope.creator.createLayout();
            }
        };
    });
});