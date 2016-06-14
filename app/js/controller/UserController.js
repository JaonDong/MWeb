/**
 * Created by Ta_wuhen on 2016/6/11.
 */
define(['controllerHelp','global','bootstrap','directive/comDirective'],function(controllerHelp,global){
    //登录
    controllerHelp.controller('loginController',function($scope,$http){
        $scope.user={name:'', password:''};
        //登录
         $scope.login=function(loginUser){
             var url=global.webApi.getPath(global.apiList.user.login)+'&phoneNumber='+loginUser.name+'&password='+loginUser.password;
             $http.jsonp(url)
                 .success(function(data){
                     console.log(data);
                     if(data.status=='success'){
                         alert('登录成功');
                         //用户信息处理暂时没有，因后端没定下来验证方式
                     }
                     else
                     {
                         alert(data.message);
                     }
                 });
         };
    });
    //注册
    controllerHelp.controller('registerController',['$scope','$http','$interval','$location',function($scope,$http,$interval,$location){
        $scope.user={phoneNum:'',code:'',password:''};
        //验证码
        $scope.codeState={
            codeText:'获取激活码',
            clickState:false,
            //获取验证码
            getCode: function () {
                var url = global.webApi.getPath(global.apiList.user.sendCode) + '&phoneNumber=' + $scope.user.phoneNum;
                $scope.codeState.clickState = true;
                $http.jsonp(url)
                    .success(function (data) {
                        if (data.status == 'success') {
                            $scope.codeState.clickState = true;
                            $scope.user.code=data.sendCode;
                            var timeSecond = 60;
                            var timer = $interval(function () {
                                timeSecond--;
                                $scope.codeState.codeText = timeSecond+'s后重新获取';
                                if(timeSecond==0){
                                    $scope.codeState.codeText = '获取验证码';
                                    $scope.codeState.clickState = false;
                                    $interval.cancel(timer);
                                }
                            }, 1000);
                        }
                        else {
                            alert('发送失败，请重试');
                            $scope.codeState.clickState = false;
                        }
                    }).error(function (msg) {
                    console.log(msg);
                    $scope.codeState.clickState = false;
                });

            }
        };
        //注册
        $scope.registerState=false;
        $scope.register=function(userModel){
            var url = global.webApi.getPath(global.apiList.user.register)+'&phoneNumber='+userModel.phoneNum+'&password='+userModel.password;
            $http.jsonp(url)
                .success(function(data){
                    console.log(data);
                    if(data.status=='success'){
                        alert('注册成功');
                        $location.path('/');
                    }
                    else {
                        alert('注册失败');
                    }
                });
        };
        //协议
        $scope.circleImg='select-circle.png';
        $scope.selectCircle=function(){
            if($scope.circleImg!='select-circle.png')
            {
                $scope.circleImg='select-circle.png';
                $scope.registerState=false;
            }
            else
            {
                $scope.registerState=true;
                $scope.circleImg='nonselect-circle.png';
            }
        };
    }]);
    controllerHelp.controller('forgetPwd1Controller',function($scope,$interval){
        //验证码
        $scope.freshCode=function(){
            var codeLength=4;
            var val='';
            var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C',
                'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');// 所有候选组成验证码的字符，当然也可以用中文的

            for (var i = 0; i < codeLength; i++) {
                var charIndex = Math.floor(Math.random() * 36);
                val += selectChar[charIndex];
            }
            $scope.code=val;
        };
        $scope.freshCode();
        //下一步
        $scope.nextStep=function(){
        };
        $interval(function(){
            /*console.log($scope.phoneNum.$error.phoneNumValidate);*/
        },1000,60);
    });
});