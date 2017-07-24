var app = angular.module("productsApp",[]);
app.controller("productsCtrl", function($scope, $http){
    console.log('Inside client get function');
   // $scope.myText = "Hiiiiiii";
   /* $http.get('/products').success(function(response){
        console.log('Inside client get function');
        console.log(response);
        //$scope.products = response;
    })*/
    
});
