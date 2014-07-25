angular.module('app').factory('newMember', function($http,paMember, $q, $routeParams){
	return {
		createMember:function(newMemberData){
		
			var newMember = new paMember(newMemberData);
			var dfd = $q.defer();
			
			newMember.$save().then(function(){
			console.log('create member');
				dfd.resolve();
			}, function(response){
				dfd.reject(response.data.reason);
			});
			return dfd.promise;
		},
		updateCurrentMember:function(updateMemberData){
			console.log(updateMemberData);
		
			var dfd = $q.defer();
			
			updateMemberData.$update().then(function(){
				dfd.resolve();
				}, function(response){
					dfd.reject(response.data.reason);
				});
				return dfd.promise;
		}	
	}
}); 