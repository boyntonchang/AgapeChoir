angular.module('app').controller('updateSongCtrl', function($scope, mvIdentity, paSong, newSong, mvNotifier, $filter, $routeParams, $http, $location){
	$scope.loadSong = function(){
		$scope.song = paSong.get({id:$routeParams.id});
	};
	console.log($scope.song);
	$scope.loadSong();
	$scope.identity = mvIdentity;
	
	
	$scope.updateSong = function(){
	

		 var updateSongData = $scope.song;
		console.log(updateSongData);
		newSong.updateCurrentSong(updateSongData).then(function(){
			mvNotifier.notify('song is updated');
			$location.path('/songs');
		} , function(reason){
			mvNotifier.error(reason);
		} ); 
	}

	
	}); 



	

	
	

