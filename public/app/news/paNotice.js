angular.module('app').factory('paNotice', function($resource){
	var noticeResource = $resource('/api/notices/:id', {id:'@_id'}, {
		update:{method:'PUT', isArray:false}
	});
	
	return noticeResource;
})