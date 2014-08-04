angular.module('app').controller('navigationCtrl', function($scope, $location){

	$scope.isCurrentPath = function(path){
		
			return $location.path() == path
		};
	
});