angular.module("login-app")
    .controller("mainCtrl", ['$scope','authenticateSVC', function($scope, authenticateSVC){
    $scope.appName = "login-app";
    $scope.loginTemplate="login/login.tpl.html";
        $scope.loadPage = function(pageType){
            var security = authenticateSVC.userCheck();
            if(security.isauthenticated){
             
                
            if(pageType == 'header'){
                $scope.templateUrl = 'header/header.tpl.html'
            }
            else if (pageType == 'login'){
                $scope.loginTemplate = 'login/login.tpl.html';
            }
            }
            else{
                $scope.loginTemplate = 'login/login.tpl.html';
            }
        };
}]);