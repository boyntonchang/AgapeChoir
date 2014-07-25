angular.module('app').controller('updateMemberCtrl', function($scope, $routeParams, $location, paMember, mvNotifier, mvIdentity, newMember){
	
	$scope.loadMember = function(){
		$scope.member = paMember.get({id:$routeParams.id});
		
	};
	$scope.loadMember();
	
	$scope.updateMember = function(){
		/* var updateMemberData = {
			name:$scope.member.name,
			part:$scope.member.part,
			email:$scope.member.email,
			tel:$scope.member.tel,
			address:$scope.member.address,
			dob:$scope.member.dob,
			doa:$scope.member.doa,
			comment:$scope.member.comment,
			imgURL:$scope.member.imgURL
		}
		 */
		var updateMemberData = $scope.member;
		
		newMember.updateCurrentMember(updateMemberData).then(function(){
			mvNotifier.notify('Member data is updated');
			$location.path('/members');
		}, function(reason){
			mvNotifier.error(reason);
			}
		
		)
		
		//console.log($scope.member);	
		//$scope.member.$update(function(){
		//console.log('updated');
		//$location.path('/members');
	}
		

		/* $scope.id = $routeParams.id;
		
		
		console.log($scope.id);
	$scope.name  = $route.current.params.name;
	$scope.part  =$routeParams.part;
	$scope.email  = $routeParams.email;
	$scope.tel  = $routeParams.tel;
	$scope.address  = $routeParams.address;
	$scope.dob  = $routeParams.dob;
	$scope.doa  = $routeParams.doa;
	$scope.comment  = $routeParams.comment;
	$scope.imgURL  = $routeParams.imgURL;
	
	
	$scope.updateMember = function(id){
		var newMemberData = {
				name : $scope.name,
				part : $scope.part,
				email : $scope.email,
				tel:$scope.tel,
				address : $scope.address,
				dob : $scope.dob,
				doa : $scope.doa,
				comment : $scope.comment,
				imgURL: $scope.imgURL
		}
		
		
	} */
}); 