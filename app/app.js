var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/assignment1", {
        templateUrl : "assignment1/assignment1.html"
       
    })
    .when("/assignment2", {
        templateUrl : "assignment2/assignment2.html",
        controller : "controller2"
    })
     .when("/assignment3", {
        templateUrl : "assignment3/assignment3.html",
        controller : "controller3"
    })
    .when("/assignment4", {
        templateUrl : "assignment4/assignment4.html"       
    })
    .when("/assignment5", {
        templateUrl : "assignment5/assignment5.html",
        controller : "controller5"      
    })
    .when("/assignment6", {
        templateUrl : "assignment6/assignment6.html",
        controller : "controller6"        
    })
    .otherwise({
        templateUrl : "assignment1/assignment1.html"
    })
    
});