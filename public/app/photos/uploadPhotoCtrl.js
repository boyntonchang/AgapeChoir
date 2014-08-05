angular.module('app').controller('uploadPhotoCtrl', function($scope,$http, newPhoto, $timeout, mvNotifier, mvIdentity, mvAuth, mvUser){
	$scope.identity = mvIdentity;

	$scope.fileChange = function(){
		console.log('counter');
		$scope.counter = 0;
		$scope.counter++;
	}
	
	});