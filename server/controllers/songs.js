var Song = require('mongoose').model('Song');

exports.getSongs = function(req, res){
	Song.find({}).exec(function(err, collection){
		res.send(collection);
	})
};

exports.getSongById = function(req, res){
	Song.findOne({_id:req.params.id}).exec(function(err, song){
		res.send(song);
	})
};


exports.createSong = function(req, res){
	var songData = req.body;
	console.log(songData.title);
	Song.create(songData, function(err, songData){
		if(err){
			console.log('error');
			res.status(400);
		return res.send({reason:err.toString()});
		}
		res.send(songData);
	})
};
exports.deleteSong = function(req, res){

	Song.findOne({_id:req.params.id}, function(err, song){
		
		return song.remove(function(err){
			if(!err) {
				console.log('song removed');
				return res.send('');
				
			} else {
				console.log(err);
				
			}
		});
	});
};

exports.updateSong = function(req, res){

	var songUpdate = req.body;
	console.log(songUpdate._id);
	console.log(songUpdate);
	
	Song.findOneAndUpdate({_id:req.params.id},songUpdate, function(err, songUpdate){
		res.send(songUpdate);
	})
	

	
	};
	


		





