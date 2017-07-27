var app = angular.module("productsApp",[]);
app.controller("productsCtrl", function($scope, $http){
    $scope.myText = "Hiiiiiii";
        $http({
          method: 'GET',
          url: '/products'
        }).then(function successCallback(response) {
            console.log('Inside client get function');        
            var data = JSON.stringify(response.data);
            console.log('Dataaa'+data);
            $scope.productList = response.data;
          }, function errorCallback(response) {
            console.log('Error inside http'+err);
          });   
});
