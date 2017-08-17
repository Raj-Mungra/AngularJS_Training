angular.module("myApp").controller("controller5",function($scope){

    $scope.displayResult = false;

    $scope.show = function(){
        $scope.displayResult = true;
    }

    $scope.reset = function(){
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.EmailId = "";
        $scope.mobileNumber = "";
        $scope.Gender = "";
        $scope.Location = "";
        $scope.displayResult = false;

        $scope.RegistrationForm.$setUntouched();
    }

});