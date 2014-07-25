angular.module('app').factory('paSong', function($resource){
	
	var songResource = $resource('/api/songs/:id', {id:"@_id"}, {
		update:{method:'PUT', isArray:false},
		remove: {method:'DELETE'}
	});
	
	return songResource;
	
});

