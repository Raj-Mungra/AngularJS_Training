angular.module("myApp").controller("controller2",function($scope){
    
    $scope.CalculateSquare = function(){
        $scope.value =  $scope.number*$scope.number;
    }

    $scope.CalculateFactorial = function(){
        var i=1;
        var temp=1;
        var num;
        if($scope.number<0)
            $scope.value="Factorial of -ve number is not possible";
        else{
            if($scope.number==0 || $scope.number==1)
            {
                $scope.value  = 1;
            }    
            else
            {
                num = $scope.number;
                while(i<=num)
                    {
                        temp = temp * i;
                        i++; 
                    }
                $scope.value=temp;
            }
        }
    }

    $scope.CalculateCube = function(){
        $scope.value =  $scope.number*$scope.number*$scope.number;
    }
});