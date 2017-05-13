// var scotchApp = angular.module('scotchApp', []);
    var app = angular.module('scotchApp', ['ngRoute']);

       // configure our routes
       app.config(function($routeProvider) {
           $routeProvider

               // route for the home page
               .when('/', {
                   templateUrl : 'index.html',
                   controller  : 'mainController'
               })
               .when('/login', {
                   templateUrl : 'template/login.html',
                   controller  : 'loginController'
               })
               .when('/todopage', {
                   templateUrl : 'template/todo.html',
                     controller  : 'todoController'
               })

               // route for the contact page
               .when('/signup', {
                   templateUrl : 'template/signup.html',
                    controller  : 'signupController'
               });
       });
