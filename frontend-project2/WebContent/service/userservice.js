/**
 * 
 */
app.factory('UserService',function($http)
{
    var userService={}

    userservice.registerUser=function(user)
    {
        return $http.post("http://localhost:8181/backend-project2/registration",user)
    }
return userService;
})