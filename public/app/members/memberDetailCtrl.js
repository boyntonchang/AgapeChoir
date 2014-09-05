angular.module('app').controller('memberDetailCtrl',function($scope, paMember, $routeParams, mvUser, mvIdentity, $location){
	$scope.members = paMember.query();
	$scope.member =paMember.get({id:$routeParams.id});
	
	$scope.identity = mvIdentity;
	$scope.deleteMember = function (){
		if(confirm('Are you sure this member is deleted from database?')){
			paMember.remove({id:$routeParams.id});
		
			$location.path('/members');
		
		}
	};
	
	$scope.editPage = function(){

		console.log('gotoupdatepage');
	}
	
	
	
	$scope.currentIndex = ''; 
	//$scope.currentIndex = 0;
	
	$scope.next = function(index) {
		
		//$scope.currentIndex = index;
		$scope.currentIndex < $scope.members.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
		 
		console.log($scope.currentIndex);
		$scope.member = $scope.members[$scope.currentIndex];
		//$scope.currentIndex = index;
	 // $scope.member=$scope.member;
	  
	};
	 
	$scope.prev = function(index) {
	
		 //$scope.currentIndex = index;
		
		$scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.members.length - 1;
		console.log($scope.currentIndex);
		$scope.member = $scope.members[$scope.currentIndex];
		
};
});

