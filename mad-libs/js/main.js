// Create application
var myApp = angular.module('myApp', [])

// Bind controller myCtrl
myApp.controller('myCtrl', function($scope){
    $scope.user = {
        username: 'nameless :(',
        age : 'over 9000',
        userLocation : 'the moon',
        food : 'nothing, we are on a diet..'
    }
    //var name = $scope.user.username 
    //var email = $scope.user.email
    $scope.submitForm = function() {
        console.log('Name: ' + $scope.user.username + '   Email:' + $scope.user.age + '   Location:' + $scope.user.userLocation + '   Food:' + $scope.user.food )
    }
})

// Bind controller madCtrl


	// Set initial values for name, age, location, and food

