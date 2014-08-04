var app=angular.module('app',['ngResource','ngRoute', 'ui.bootstrap', ,'highcharts-ng', 'ngGrid']);
app.config(function($routeProvider, $locationProvider){
	var routeRoleChecks = {
		admin:{
			auth:function(mvAuth){
				return mvAuth.authorizeCurrentUserForRoute('admin')
			}
		},
		user:{
			auth:function(mvAuth){
				return mvAuth.authorizeAuthenticatedUserForRoute()
			}
		}
	}
	$locationProvider.html5Mode(true); 

	$routeProvider	
		.when('/', 
			{templateUrl:'/partials/main/main',
			controller:'mainCtrl'}
		).when('/signup', 
			{templateUrl:'/partials/account/signup',
			controller:'signupCtrl'}
		)
		.when('/profile', 
			{templateUrl:'/partials/account/profile',
			controller:'profileCtrl', resolve:routeRoleChecks.User}
		)
		.when('/members', 
			{templateUrl:'/partials/members/members',
			controller:'membersCtrl'}
		)
		.when('/members/:id', 
			{templateUrl:'/partials/members/member-detail',
			controller:'memberDetailCtrl'}
		)
		.when('/AddMember', 
			{templateUrl:'/partials/members/AddMember',
			controller:'addMemberCtrl'}
		)
		.when('/members/updateMember/:id',
			{templateUrl:'/partials/members/updateMember',
			controller:'updateMemberCtrl'}
		)
		.when('/songs', 
			{templateUrl:'partials/songs/songs',
			controller:'songsListCtrl'}
		)
		
		.when('/AddSong', 
			{templateUrl:'/partials/songs/AddSong',
			controller:'addSongCtrl'}
		)
		.when('/songs/updateSong/:id',
			{templateUrl:'/partials/songs/updateSong',
			controller:'updateSongCtrl'})
		.when('/news', 
			{templateUrl:'/partials/news/news',
			controller:'newsCtrl'}
		)
		.when('/NewNotice',
			{templateUrl:'/partials/news/NewNotice',
			controller:'NewNoticeCtrl'}
		)
		.when('/news/:id',
			{templateUrl:'/partials/news/notice-detail',
			controller:'noticeDetailCtrl'}
		)
		.when('/news/updateNotice/:id',
			{templateUrl:'/partials/news/updateNotice',
			controller:'updateNoticeCtrl'}
		)
		.when('/photos', 
			{templateUrl:'/partials/photos/photos',
			controller:'photosCtrl'}
		)
		.when('/AddPhoto',
			{templateUrl:'/partials/photos/AddPhoto',
			controller:'addPhotoCtrl'}
		)
		.when('/uploadPhoto',
			{templateUrl:'/partials/photos/uploadPhoto',
			controller:'uploadPhotoCtrl'}
		)
		.when('/stats',
			{templateUrl:'/partials/stats/stats',
			controller:'statsCtrl'})
});



/* app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
 */
