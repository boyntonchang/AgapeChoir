angular.module('app').controller('profileCtrl', function($scope, mvAuth, mvIdentity, mvNotifier, $location){
	$scope.username = mvIdentity.currentUser.username;
	$scope.fname = mvIdentity.currentUser.firstName;
	$scope.lname = mvIdentity.currentUser.lastName;
	
	$scope.update = function(){
		var newUserData = {
			username:$scope.username,
			firstName:$scope.fname,
			lastName:$scope.lname
		}
		if($scope.password && $scope.password.length > 0){
			newUserData.password = $scope.password;
		}
		console.log(newUserData);
		mvAuth.updateCurrentUser(newUserData).then(function(){
			mvNotifier.notify('Your account has been updated');
			$location.path('/')
		}, function(reason){
			mvNotifier.error(reason);
		})
	}
})