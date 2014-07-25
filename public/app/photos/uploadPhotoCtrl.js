angular.module('app').controller('uploadPhotoCtrl', function($scope,$http, $upload, newPhoto, $timeout, mvNotifier, mvIdentity, mvAuth, mvUser){
	$scope.identity = mvIdentity;

	$scope.fileChange = function(){
		console.log('counter');
		$scope.counter = 0;
		$scope.counter++;
	}
	
	});