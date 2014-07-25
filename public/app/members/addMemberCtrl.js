angular.module('app').controller('addMemberCtrl', function($scope, mvNotifier, newMember, $location, mvUser, mvIdentity){
	$scope.addMember = function(){
	
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
		};
		
		newMember.createMember(newMemberData).then(function(){
			
			mvNotifier.notify('New member is added');
			$location.path('/members');
		}, function(reason){
			mvNotifier.error(reason);
		})
	} 
	$scope.identity = mvIdentity;
	
	
})