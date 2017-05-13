app.controller('mainController', function($http,$scope,$location) {
  var url='/checklogin';
  $http.get(url)
.then(
function(response){
  if(response.data.status==true)
  {
    $location.path("/todopage");
    return;
  console.log(response);
}else {
$location.path("/login");
}
},
function(response){
 // failure call back
}
);
});
