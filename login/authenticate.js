angular.module("login")
    .service("authenticateSVC", [ function(){
        var users=[{"username":"bhavya","password":"bhavya123","firstName": "bhavya","lastName": "bhargavi"},
                  {"username":"bhavya1", "password":"bhavya1123", "firstName": "bhavya","lastName": "bhargavi"                   
                  }];
        
        var security={
            isAuthenticated:"false",
            userDetails: {
            firstName:"",
            lastName:""
        }
        };
        
        this.loginUser=function(user){
            angular.forEach(users, function(item){
            if(user.username==user.password && item.username==item.password){
                security.isAuthenticated=true;
                security.userDetails.firstName = item.firstName;
                security.userDetails.lastName = item.lastName;
            }
                return security;
            });
        };
        
        this.logoutUser = function(){
            security.isAuthenticated = false;
            security.userDetails.firstName ="";
            security.userDetails.lastName = "";
        };
        
        this.userCheck = function(){
            return security;
        }
       
    }]);