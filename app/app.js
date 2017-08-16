var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "assignment1/assignment1.html",
       
    })
    .when("/assignment2", {
        templateUrl : "assignment2/assignment2.html",
        controller : "controller2"
    })
    
    
});