angular.module('app').factory('newPhoto', function($http, paPhoto, $q, $routeParams){
	return {
		//console.log('newPhoto');
		createPhoto:function(newPhotoData){
			var newPhoto = new paPhoto(newPhotoData);
			var dfd = $q.defer();
			
			newPhoto.$save().then(function(){
				dfd.resolve();
			}, function(response){
				dfd.reject(response.data.reason);
			});
			return dfd.promise;
		}
	}
});