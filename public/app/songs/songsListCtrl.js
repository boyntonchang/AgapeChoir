angular.module('app').controller('songsListCtrl', function($scope, mvIdentity, paSong, newSong, mvNotifier, $filter,$routeParams, $http, $location, mvUser, $route, $window){
	 $scope.songs= paSong.query();

	$scope.identity = mvIdentity;


	$scope.deleteSong = function(index, _id){

		//console.log(song._id);
		paSong.remove({id:_id},function(success) {
				console.log('splice');
				//var index = $scope.songs.indexOf(row);
				if(index !== -1){
				$scope.songs.splice(index, 1);
				console.log('remove');
				}
            }
       );
	
	
	}



});



	
	

