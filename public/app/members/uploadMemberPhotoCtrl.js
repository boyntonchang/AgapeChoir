angular.module('app').controller('uploadMemberPhotoCtrl', function($scope,$http,  newMember, $timeout, mvNotifier, mvIdentity, mvAuth, mvUser){
	$scope.identity = mvIdentity;

	$scope.fileChange = function(){
		console.log('counter');
		$scope.counter = 0;
		$scope.counter++;
	}
	
	});