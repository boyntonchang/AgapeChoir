angular.module('app').controller('photosCtrl', function($scope, paPhoto, mvIdentity, mvAuth, mvUser){
	$scope.photos = paPhoto.query();
	$scope.identity = mvIdentity;

	$scope.myInterval = 5000;
	


});
	
