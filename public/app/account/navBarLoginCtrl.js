angular.module('app').controller('navBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location, $modal){
	$scope.identity = mvIdentity;
	$scope.signin = function(username, password){
		mvAuth.authenticateUser(username, password).then(function(success){
			if(success){
				mvNotifier.notify('You are signed in!');
				$('#myModal').modal('hide');
			} else {
				mvNotifier.notify('username and password combination incorrect');
			}
		})
			
		
		
	}
	$scope.signout = function(){
		mvAuth.logoutUser().then(function(){
			$scope.username = '';
			$scope.password = '';
			mvNotifier.notify('You have signed out!');
			$location.path('/');
		})
	}
}); 

angular.module('app').controller('LogCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location, $modal){
	$scope.identity = mvIdentity;

	
}); 