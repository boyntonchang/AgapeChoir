var mongoose = require('mongoose'),
	userModel = require('../models/User'),
	memberModel=require('../models/Member'), 
	songModel=require('../models/Song'),
	noticeModel = require('../models/Notice'),
	photoModel = require('../models/Photo'); 

module.exports = function(config){
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback(){
		console.log('pigrim db opened'); 
	});
	      
	 
	userModel.createDefaultUsers();   
	memberModel.createDefaultMembers();
	songModel.createDefaultSongs();
	noticeModel.createDefaultNotices();
	photoModel.createDefaultPhotos();    
	      
};                
                                                             