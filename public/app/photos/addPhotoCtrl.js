angular.module('app').controller('addPhotoCtrl', function($scope,$http, $location, $timeout, newPhoto, mvNotifier, mvIdentity, mvAuth, mvUser){
	$scope.identity = mvIdentity;
	
	$scope.addPhoto = function(){
		var newPhotoData = {
			title:$scope.title,
			image:$scope.image
		};
		
		newPhoto.createPhoto(newPhotoData).then(function(){
			mvNotifier.notify('new photo is added');
			$location.path('/photos');
		}, function(reason){
			mvNotifier.error(reason);
		})
	}


		
	

	});