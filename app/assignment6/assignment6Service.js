angular.module("myApp").service('Assignment6service',function(){

    var OrderNames = [{'OrderName':'Book','Price':'150'},
                 {'OrderName':'Shoes','Price':'950'},
                {'OrderName':'Shirt','Price':'750'}]

    this.getOrderDetails = function(){
        return OrderNames;
    }
});