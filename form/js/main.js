// Create application
var myApp = angular.module('myApp', [])

// Bind controller myCtrl
myApp.controller('myCtrl', function($scope){
	$scope.user = {}
    //var name = $scope.user.username 
    //var email = $scope.user.email
	$scope.submitForm = function() {
		console.log('Name: ' + $scope.user.username + '   Email:' + $scope.user.email)
	}
})
