angular.module('app').controller('noticeDetailCtrl', function($scope, paNotice, $routeParams, mvUser, mvIdentity, $location){
	$scope.notice =paNotice.get({id:$routeParams.id});
	//console.log({id:$routeParams.id});
	$scope.identity = mvIdentity;
	$scope.deleteNotice = function (){
		paNotice.remove({id:$routeParams.id});
		
		$location.path('/news');
	};
	
	$scope.editNotice = function(){
		//$scope.member =paMember.get({_id:$routeParams.id});
		//$location.path('/members/updateMember/:id');
		//console.log('gotoupdatepage');
	}
});