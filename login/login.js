angular.module("login", []);

angular.module("login")
        .controller("loginCtrl",["authenticateSVC", function(authenticateSVC){
            this.loginData={
                email:"",
                password:""
            };
            this.loginUser=function(){
                authenticateSVC.loginUser(this.loginData);
            };
            
            this.logoutUser = function(){
                 return security;
            }
            console.log("iam login controller");
   
}]);


