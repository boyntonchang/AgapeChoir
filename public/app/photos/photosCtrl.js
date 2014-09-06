angular.module('app').controller('photosCtrl', function($scope, paPhoto, mvIdentity, mvAuth, mvUser){
	$scope.photos = paPhoto.query();
	$scope.identity = mvIdentity;

	$scope.myInterval = 5000;
	
	console.log($scope.photos);
	console.log($scope.photos.length);
});
	
