angular.module('app').factory('newNotice', function($http, paNotice, $q, $routeParams){
	return {
		createNotice:function(newNoticeData){
			var newNotice = new paNotice(newNoticeData);
			var dfd = $q.defer();
			
			newNotice.$save().then(function(){
				dfd.resolve();
			}, function(response){
				dfd.reject(response.data.reason);
			});
			
			return dfd.promise;
		},
		updateCurrentNotice:function(updateNoticeData){
			var dfd = $q.defer();
			updateNoticeData.$update().then(function(){
				dfd.resolve();
			}, function(response){
				dfd.reject(response.data.reason);
			});
			return dfd.promise;
		}
	}
})