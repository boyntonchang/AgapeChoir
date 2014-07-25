angular.module('app').controller('songsListCtrl', function($scope, mvIdentity, paSong, newSong, mvNotifier, $filter, $routeParams, $http){
	$scope.songs = paSong.query();
	$scope.identity = mvIdentity;
	

	
	
	$scope.deleteSong = function(index, _id){
	
		
		
		paSong.remove({_id:_id}, function(success){
			console.log('row removed');
			$scope.songs.splice(index, 1);
		});
	
	
	}
	}); 



	

	
	

