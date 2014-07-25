var appt = angular.module("appt", ["xeditable", "ngMockE2E"]);

appt.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

appt.controller('testCtrl', function($scope, $filter, paSong, mvIdentity, $http){
	//console.log(data);
	$scope.identity = mvIdentity;
	$scope.songs = paSong.query();
	
	$scope.updateSong = function(data, id){
		console.log(data);
	};
	
	$scope.students = [
    {id: 1, name: 'awesome user1', status: 2, group: 4, groupName: 'admin'},
    {id: 2, name: 'awesome user2', status: undefined, group: 3, groupName: 'vip'},
    {id: 3, name: 'awesome user3', status: 2, group: null}
  ]; 

  $scope.statuses = [
    {value: 1, text: 'status1'},
    {value: 2, text: 'status2'},
    {value: 3, text: 'status3'},
    {value: 4, text: 'status4'}
  ]; 

  $scope.groups = [];
  $scope.loadGroups = function() {
    return $scope.groups.length ? null : $http.get('/groups').success(function(data) {
      $scope.groups = data;
    });
  };

  $scope.showGroup = function(student) {
    if(student.group && $scope.groups.length) {
      var selected = $filter('filter')($scope.groups, {id: student.group});
      return selected.length ? selected[0].text : 'Not set';
    } else {
      return student.groupName || 'Not set';
    }
  };

  $scope.showStatus = function(student) {
    var selected = [];
    if(student.status) {
      selected = $filter('filter')($scope.statuses, {value: student.status});
    }
    return selected.length ? selected[0].text : 'Not set';
  };

  $scope.checkName = function(data, id) {
    if (id === 2 && data !== 'awesome') {
      return "Username 2 should be `awesome`";
    }
  };

  $scope.saveStudent = function(data, id) {
    //$scope.user not updated yet
    angular.extend(data, {id: id});
    return $http.post('/saveUser', data);
  };

  // remove user
  $scope.removeStudent = function(index) {
    $scope.students.splice(index, 1);
  };

  // add user
  $scope.addStudent = function() {
    $scope.inserted = {
      id: $scope.students.length+1,
      name: '',
      status: null,
      group: null 
    };
    $scope.students.push($scope.inserted);
  };
});

appt.run(function($httpBackend){

			$httpBackend.whenGET('/groups').respond([
    {id: 1, text: 'user'},
    {id: 2, text: 'customer'},
    {id: 3, text: 'vip'},
    {id: 4, text: 'admin'}
			]);
			$httpBackend.whenPOST(/\/updateSong/).respond(function(method, url, data) {
			data = angular.fromJson(data);
			return [200, {status: 'ok'}];
		});
	  });

