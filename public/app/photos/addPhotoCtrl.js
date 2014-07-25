angular.module('app').controller('addPhotoCtrl', function($scope,$http, $upload, $location, $timeout, newPhoto, mvNotifier, mvIdentity, mvAuth, mvUser){
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


		
		//console.log($scope.selectedFiles[index].name);
	/* 	$scope.progress[index] = 0;
		$scope.errorMsg = null;
		
		console.log('start');
			$scope.upload[index] = $upload.upload({
				url : 'public/images/choirPhoto',
				method: 'POST',
				headers: {'Content-Type': 'image/png'},
				data : {
					title : $scope.selectedFiles[index].name
				},

				file: $scope.selectedFiles[index]
				
			});
			$scope.upload[index].then(function(response) {
				console.log($scope.selectedFiles[index].name);
				$timeout(function() {
					$scope.uploadResult.push(response.data);
				});
			}, function(response) {
				if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
			}, function(evt) {
				// Math.min is to fix IE which reports 200% sometimes
				$scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			});
			$scope.upload[index].xhr(function(xhr){
//				xhr.upload.addEventListener('abort', function() {console.log('abort complete')}, false);
			});  */

	});