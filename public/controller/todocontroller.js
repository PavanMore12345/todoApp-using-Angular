app.controller('todoController',function($scope,$location,logoutService,datainsertion,getcardData)
{
  $scope.title11 = function()
  {
    console.log("title");
    $scope.myvalue=true;
  }
  $scope.getData11 = function()
{
  var httpobj12 = getcardData.getData11();
  httpobj12.then(function(response)
{
  $scope.records=response.data.msg;
  console.log($scope.records);
  console.log(response);
  },function(response)
{

});
}
$scope.getData11();
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
  $scope.done = function()
  {
      $scope.myvalue=false;
    var todo={
    bodyContent:$scope.body11,
    title:$scope.title
  };
  // console.log($scope.body11);

    var httpobj1=datainsertion.done(todo);
    httpobj1.then(function(response)
  {
    console.log(response);
  //  $scope.title="";
  //    $scope.body11="";
  },function(response)
  {

  });    //console.log(todo);
  }

});
app.service("logoutService",function($http) {
    this.logoutPage = function() {
        return $http({
            url: "/logout",
            method: "post"
        });
    }
});
app.service("datainsertion",function($http)
{
  this.done=function(todo)
  {
    console.log(todo);
    return $http({
    url:"/addcard",
    method:"post",
    data:todo
      })
  }
});
app.service("getcardData",function($http)
{
this.getData11=function()
{
return $http({
url:"/getData",
method:"post"
  })
}
});
