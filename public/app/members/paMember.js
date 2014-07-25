angular.module('app').factory('paMember', function($resource){
	var memberResource = $resource('/api/members/:id',  {id:'@_id'}, {
		update:{method:'PUT', isArray:false}
	});
	

	return memberResource;
	
})