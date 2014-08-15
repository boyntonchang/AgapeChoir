var express = require('express'),
	passport = require('passport'),
	bodyParser  = require('body-parser'),
	morgan = require('morgan'),
	session= require('express-session'),
	cookieParser = require('cookie-parser'),
	//serverStatic = require('serve-static'),
	multipart = require('connect-multiparty'),
	app = express()
	;
	
	
module.exports = function(app,config){
	
		app.set('views', config.rootPath + '/server/views');
		app.set('view engine', 'jade');
		app.use(morgan('dev'));
		app.use(cookieParser());
		app.use(bodyParser({uploadDir:'C:/Temp'}));
		//app.use(bodyParser({uploadDir:'C:/uploadFile'}));
		//app.use(express.bodyParser());
		app.use(session({secret:'Dashboard'}));
		app.use(passport.initialize());
		app.use(passport.session());
		app.use(express.static(config.rootPath + '/public'));
		app.use(multipart());

};

