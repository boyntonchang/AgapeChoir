var Notice = require('mongoose').model('Notice');

exports.getNotices = function(req, res){

	Notice.find({}).exec(function(err, collection){
		res.send(collection);
	});
};

exports.getNoticeById = function(req, res){

	Notice.findOne({_id:req.params.id}).exec(function(err, notice){
		res.send(notice);
	})
};

exports.createNotice = function(req, res, next){
	var noticeData = req.body;
	console.log(noticeData);
	
	Notice.create(noticeData, function(err,noticeData){
		if(err){
			console.log('error on notice data');
			res.status(400);
			return res.send({reason:err.toString()});
		}
		res.send(noticeData);
		
		
	})
};

exports.deleteNotice = function(req, res){
	Notice.findOne({_id:req.params.id}, function(err, notice){
		return notice.remove(function(err){
			if(!err){
				console.log('removed');
				return res.send();
			} else{
				console.log(err);
			}
		})
	})
};

exports.updateNotice = function(req, res){
	var noticeUpdate = req.body;
	Notice.findOneAndUpdate({_id:req.params.id}, noticeUpdate, function(err, noticeUpdate){
		res.send(noticeUpdate);
	})
}