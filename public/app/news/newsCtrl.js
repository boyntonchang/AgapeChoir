angular.module('app').controller('newsCtrl', function($scope, paNotice, mvIdentity, mvAuth){
	$scope.notices = paNotice.query();
	$scope.identity = mvIdentity;
	
	//console.log(Object.keys($scope.notices).length);
	
	//pagination
		$scope.currentPage = 1;
		$scope.itemsPerPage = 3;
		$scope.maxSize = 5;
		$scope.pageCount = function () {
			return Math.ceil($scope.notices.length / $scope.itemsPerPage);
		};
	
	$scope.notices.$promise.then(function(){
		$scope.totalItems = $scope.notices.length;
		
		
		
	/* 	$scope.pageChanged = function(){
		console.log('page changed to:  ' + $scope.currentPage); */
		
		 $scope.$watch('currentPage + itemsPerPage', function() {
			  var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
				end = begin + $scope.itemsPerPage;

				$scope.filteredNotices = $scope.notices.slice(begin, end);
		});
	
		//console.log($scope.totalItems);
	});
	
	/* $scope.$watch('currentPage + itemsPerPage', function(){
		var begin = (($scope.currentPage -1) * $scope.itemsPerPage),
				end = begin + $scope.itemsPerPage;
	}) */
	
	
	
	/* $scope.pageChanged = function(){
		console.log('page changed to:  ' + $scope.currentPage);
	} */
});