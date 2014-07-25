angular.module('app'). controller('NewNoticeCtrl', function($scope, mvNotifier, newNotice, $location, mvIdentity){
	$scope.addNotice = function(){
		var newNoticeData = {
			date:$scope.date,
			title:$scope.title,
			report:$scope.report,
			content:$scope.content,
			imgURL:$scope.imgURL
		};
		
		newNotice.createNotice(newNoticeData).then(function(){
			mvNotifier.notify('News is added');
			$location.path('/news');
		}, function(reason){
			mvNotifier.error(reason);
		})
	}
	$scope.identity = mvIdentity;
})