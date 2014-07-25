angular.module('app').controller('newsCtrl', function($scope, paNotice, mvIdentity, mvAuth){
	$scope.notices = paNotice.query();
	$scope.identity = mvIdentity;
});