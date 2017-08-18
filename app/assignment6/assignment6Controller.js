angular.module("myApp").controller("controller6",function($scope,Assignment6service){

    var TotalPrice=0;
    $scope.OrderDetails = Assignment6service.getOrderDetails();

    $scope.getTotalPrice = function(){
            if($scope.mainCheckbox)
                {
                    TotalPrice=0;
                    angular.forEach($scope.OrderDetails,function(Item,index) {
                        TotalPrice = parseInt(TotalPrice) + parseInt(Item.Price);
                    });
                }
            return TotalPrice;
           
            
    }

    $scope.updateTotalPrice = function(item){
        if(item.checked)
            {
                TotalPrice = parseInt(TotalPrice) + parseInt(item.Price);
            }
        else{
                TotalPrice = parseInt(TotalPrice) - parseInt(item.Price);
            }
            
    }

    $scope.getUpdatedTotalPrice = function(){
        if(!$scope.mainCheckbox)
            {
                TotalPrice = 0;

                angular.forEach($scope.OrderDetails, function (item) {
         
                    item.checked = false;
                });
            }
         //$scope.mainCheckbox = false;
    }
  
});