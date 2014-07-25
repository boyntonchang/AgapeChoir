angular.module('app').factory('newSong', function($http, paSong, $q, $routeParams){
	return {
		createSong:function(newSongData){
			var newSong = new paSong(newSongData);
			var dfd = $q.defer();
			
			newSong.$save().then(function(){
				console.log('add song');
				dfd.resolve();
				
			}, function(response){
				dfd.reject(response.data.reason);
			});
			return dfd.promise;
		},
		
		updateCurrentSong:function(updateSongData){
		
			
	
			var dfd = $q.defer();
		
			
		
			
			updateSongData.$update().then(function(){
				console.log('update song');
				dfd.resolve();
			}, function(response){
				dfd.reject(response.data.reason);
			});
			
			
			return dfd.promise;
		}
	}
})