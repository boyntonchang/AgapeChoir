angular.module('app').factory('paPhoto', function($resource){
	var photoResource = $resource('/api/photos/:id', {id:'@_id'}, {
		update:{method:'PUT', isArray:false}
	});
	
	return photoResource;
})