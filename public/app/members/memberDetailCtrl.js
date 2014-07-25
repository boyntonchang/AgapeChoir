angular.module('app').controller('memberDetailCtrl', function($scope, paMember, $routeParams, mvUser, mvIdentity, $location){
	$scope.member =paMember.get({id:$routeParams.id});
	console.log({id:$routeParams.id});
	$scope.identity = mvIdentity;
	$scope.deleteMember = function (){
		paMember.remove({id:$routeParams.id});
		
		$location.path('/members');
	};
	
	$scope.editPage = function(){

		console.log('gotoupdatepage');
	}
});