app.controller('todoController', function($scope,$location,logoutService)
{
  $scope.logoutPage = function() {
    console.log("SDfssds");

      var httpobj = logoutService.logoutPage();
      httpobj.then(function(response)
        {
          if(response.data.status==false)
          {
          //$state.go("home");
          alert("logout success");
          $location.path("/login");
        }
      //   else {
      //     // console.log("fgfgfd");
      //     // $location.path("/signup");
      //   }
          // $scope.user="";
        console.log(response);
      }, function(response) {
          // this function handles error
      });
  }
});
app.service("logoutService",function($http) {
    this.logoutPage = function() {
        return $http({
            url: "/logout",
            method: "post",
        });
    }
});
