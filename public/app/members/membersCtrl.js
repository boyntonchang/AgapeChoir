angular.module('app').controller('membersCtrl', function($scope, paMember,mvIdentity, mvAuth, mvUser){

	$scope.members = paMember.query();
	$scope.identity = mvIdentity;
	 
});
