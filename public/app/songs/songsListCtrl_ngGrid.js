angular.module('app').controller('songsListCtrl', function($scope, mvIdentity, paSong, newSong, mvNotifier, $filter,$routeParams, $http, $location, mvUser, $route, $window){
	 $scope.songs= paSong.query();

	$scope.identity = mvIdentity;

	

	
	 $scope.filterOptions = {
        filterText: "",
        useExternalFilter: true
    }; 
	$scope.totalServerItems = 0;
	
	$scope.pagingOptions = {
		pageSizes:[5, 10, 15],
		pageSize:10,
		currentPage:1
	};
	
	$scope.setPagingData = function(data, page, pageSize){
		var pagedData = data.slice((page -1) * pageSize, page * pageSize);
		$scope.songs = pagedData;
		$scope.totalServerItems = data.length;
		if(!$scope.$$phase){
			$scope.$apply();
		}
	};
	
	 $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $http.get('/api/songs').success(function (largeLoad) {		
                    data = largeLoad.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    $scope.setPagingData(data,page,pageSize);
                });            
            } else {
                $http.get('api/songs').success(function (largeLoad) {
                    $scope.setPagingData(largeLoad,page,pageSize);
                });
            }
        }, 100);
    
	} 
	 
	 
	
	
	
	 
   


   $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
	
    $scope.$watch('pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
	
	
	$scope.gridOptions = { 
		data: 'songs',
		rowHeight:40,
		enablePaging:true,
		showFooter:true,
		totalServerItems:'totalServerItems',
		pagingOptions:$scope.pagingOptions,
		columnDefs:[
			
			{field:'date', cellClass:'cellPadding', displayName:'DATE', cellFilter:"date:'\MM/dd/yyyy\'", width:'15%'},
			{field:'title', displayName:'TITLE', cellClass:'cellPadding', width:'40%'},
			{field:'vPath', displayName:'WATCH VIDEO', cellClass:'cellPadding', cellTemplate:'<div><span ng-show="identity.currentUser.isAdmin()">{{row.entity.vPath}}</span><a class="fancybox-media" href="{{row.entity.vPath}}" ng-hide="identity.currentUser.isAdmin()"><span class="glyphicon glyphicon-play-circle top-15"></span></a></div>', width:'30%'},
			{displayName:'MANAGE', cellTemplate:'<div  ng-show="identity.currentUser.isAdmin()"><a class="btn btn-default darkGrayBG editBtn" href="/songs/updateSong/{{row.entity._id}}" >Edit</a><a class="btn btn-default darkGrayBG editBtn" href="" ng-click="deleteSong($index,row)" >DELETE</a></div>', width:'20%', cellClass:'cellPadding' } 
			/* {field:'date', cellClass:'cellPadding', displayName:'DATE', cellFilter:"date:'\MM/dd/yyyy\'", width:'150'},
			{field:'title', displayName:'TITLE', cellClass:'cellPadding', width:'300'},
			{field:'vPath', displayName:'WATCH VIDEO', cellClass:'cellPadding', cellTemplate:'<div><span ng-show="identity.currentUser.isAdmin()">{{row.entity.vPath}}</span><a class="fancybox-media" href="{{row.entity.vPath}}" ng-hide="identity.currentUser.isAdmin()"><span class="glyphicon glyphicon-play-circle"></span></a></div>', width:'150'},
			{displayName:'MANAGE', cellTemplate:'<div ng-show="identity.currentUser.isAdmin()"><a class="btn btn-default darkGrayBG editBtn" href="/songs/updateSong/{{row.entity._id}}" >Edit</a><a class="btn btn-default darkGrayBG editBtn" href="" ng-click="deleteSong($index,row)" >DELETE</a></div>', cellClass:'cellPadding' , width:'250'} */
			]
};


	

		if($scope.identity.currentUser && $scope.identity.currentUser.isAdmin()) {
		
			return $scope.gridOptions.columnDefs[3].visible = true;
			//$location.path('/');
			//$scope.$apply(gridOptions);
			console.log('admin');
			
		} else {
		
		
			 return $scope.gridOptions.columnDefs[3].visible = false;
		}



	
	

$scope.deleteSong = function(index,row){
	
			// var index = this.row.rowIndex;
                    // $scope.gridOptions.selectItem(index, false);
		// $scope.songs.splice(index, 1);
		
		console.log(row.entity._id);
		paSong.remove({id:row.entity._id},function(success) {
				console.log('splice');
				var index = row.rowIndex;
             
				$scope.songs.splice(index, 1);
				
            }
       );
	
	
	}



});



	
	

