var express = require('express'),
	passport = require('passport')
	;
	
	
module.exports = function(app,config){
	app.configure(function(){
		app.set('views', config.rootPath + '/server/views');
		app.set('view engine', 'jade');
		app.use(express.logger('dev'));
		app.use(express.cookieParser());
		app.use(express.bodyParser({uploadDir:'C:/uploadFile'}));
		//app.use(express.bodyParser());
		app.use(express.session({secret:'Dashboard'}));
		app.use(passport.initialize());
		app.use(passport.session());
		app.use(express.static(config.rootPath + '/public'));
		app.use(express.multipart());
		
		});

}
