angular.module("myApp").controller("controller6",function($scope,Assignment6service){

    $scope.OrderDetails = Assignment6service.getOrderDetails();

});