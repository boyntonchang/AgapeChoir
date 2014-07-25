angular.module('app').controller('addSongCtrl', function($scope, mvUser, mvNotifier, mvIdentity, newSong, $location){
	$scope.addSong = function(){
		var newSongData = {
			date:$scope.date,
			title:$scope.title,
			vPath:$scope.vPath,
		}
		
		newSong.createSong(newSongData).then(function(){
			mvNotifier.notify('New Song is added');
			$location.path('/songs');
		}, function(reason){
			mvNotifier.error(reason);
		})
	}
	$scope.identity = mvIdentity;
});