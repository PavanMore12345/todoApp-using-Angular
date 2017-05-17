// var scotchApp = angular.module('scotchApp', []);
    var app = angular.module('app', ['ngRoute']);

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
       app.directive('contenteditable1', [function() {
    return {
        require: '?ngModel',
        scope: {
        },
        link: function(scope, element, attrs, ctrl) {
            // view -> model (when div gets blur update the view value of the model)
            element.bind('blur', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(element.html());
                });
            });

            // model -> view
            ctrl.$render = function() {
                element.html(ctrl.$viewValue);
            };

            // load init value from DOM
            ctrl.$render();

            // remove the attached events to element when destroying the scope
            scope.$on('$destroy', function() {
                element.unbind('blur');
                element.unbind('paste');
                element.unbind('focus');
            });
        }
    };
}]);
