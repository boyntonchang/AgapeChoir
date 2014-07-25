angular.module('app').controller('updateNoticeCtrl', function($scope, $routeParams, $location, paNotice, mvNotifier, mvIdentity, newNotice){
	$scope.loadNotice = function(){
		$scope.notice = paNotice.get({id:$routeParams.id});
	};
	
	$scope.loadNotice();
	
	$scope.updateNotice = function(){
		var updateNoticeData = $scope.notice;
		newNotice.updateCurrentNotice(updateNoticeData).then(function(){
			mvNotifier.notify('Notice data is updated');
			$location.path('/news');
		}, function(reason){
			mvNotifier.error(reason);
		})
	}
});