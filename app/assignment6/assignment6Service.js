angular.module("myApp").service('Assignment6service',function(){

    var OrderNames = [{'Id':'1','OrderName':'Book','Price':'150'},
                 {'Id':'2','OrderName':'Shoes','Price':'950'},
                {'Id':'3','OrderName':'Shirt','Price':'750'}]

    this.getOrderDetails = function(){
        return OrderNames;
    }
});