var auth = require('./auth'),
	users = require('../controllers/users'),
	members = require('../controllers/members'),
	songs = require('../controllers/songs'),
	notices = require('../controllers/notices'),
	photos = require('../controllers/photos'),
	mongoose = require('mongoose'),
	Member = mongoose.model('Member'),
	User = mongoose.model('User'),
	Song = mongoose.model('Song'),
	Notice = mongoose.model('Notice'),
	Photo = mongoose.model('Photo');

module.exports = function(app){
	app.get('/api/users', auth.requiresRole('admin') , users.getUsers);
	app.post('/api/users', users.createUser);
	app.put('/api/users', users.updateUser);
	
	app.get('/api/members', members.getMembers);
	app.get('/api/members/:id', members.getMemberById);
	app.put('/api/members/:id', members.updateMember);
	app.post('/api/members', members.createMember);
	app.delete('/api/members/:id', members.deleteMember);
	
	app.get('/api/songs', songs.getSongs);
	app.get('/api/songs/:id', songs.getSongById);
	app.post('/api/songs', songs.createSong);
	app.delete('/api/songs/:id', songs.deleteSong);
	app.put('/api/songs/:id', songs.updateSong); 
	
	app.get('/api/notices', notices.getNotices);
	app.get('/api/notices/:id', notices.getNoticeById);
	app.post('/api/notices', notices.createNotice);
	app.put('/api/notices/:id', notices.updateNotice);
	app.delete('/api/notices/:id', notices.deleteNotice);
	
	app.get('/api/photos', photos.getPhotos);
	//app.get('/AddPhoto', photos.showPhoto);
	app.post('/api/photos', photos.createPhoto);
	app.post('/upload', photos.uploadPhoto);
	
	app.get('/partials/*', function(req, res){
	res.render('../../public/app/' + req.params[0]);
	});
	
	app.post('/login', auth.authenticate);
	
	app.post('/logout', function(req,res){
		req.logout();
		res.end();
	});
	
	app.all('/api/*', function(req,res){
		res.send(404);
	})
	
	app.get('*', function(req, res){

	res.render('index', {
		bootstrappedUser:req.user
	});
	});
	

}