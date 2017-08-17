angular.module("myApp").controller("controller3",function($scope,Assignment3service){

        $scope.names = Assignment3service.getData();
});