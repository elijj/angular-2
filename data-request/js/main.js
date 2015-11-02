// Create application
var myApp = angular.module('myApp', [])

// Bind controller myCtrl
myApp.controller('customersCtrl', function($scope,$http){
    $scope.names;

    // Simple GET request example:
    $http({
      method: 'GET',
      url: 'http://www.w3schools.com/angular/customers.php',
      type:'json',
    }).then(function successCallback(response) {
        $scope.names = response.data.records;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
    //var name = $scope.user.username 
    //var email = $scope.user.email
    $scope.submitForm = function() {
        console.log('Name: ' + $scope.user.username + '   Email:' + $scope.user.age + '   Location:' + $scope.user.userLocation + '   Food:' + $scope.user.food )
    }
})