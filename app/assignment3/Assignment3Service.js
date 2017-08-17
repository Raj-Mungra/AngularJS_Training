angular.module("myApp").service('Assignment3service',function(){

    var names = [{'Id':'10501','Name':'Manish','Technology':'Salesforce'},
                {'Id':'10505','Name':'Rohit','Technology':'.Net'},
                    {'Id':'10502','Name':'Raj','Technology':'AngularJS'} ]

    this.getData = function(){
        return names;
    }
});