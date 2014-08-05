var Member = require('mongoose').model('Member'),
						fs = require('fs'),
						path=require('path');

exports.getMembers = function(req, res){
	Member.find({}).exec(function(err, collection){
		res.send(collection);
	})
};

exports.getMemberById = function(req, res){
	Member.findOne({_id:req.params.id}).exec(function(err, member){
		res.send(member);
	})
};

exports.createMember = function(req,res, next){

	var memberData = req.body;
	console.log(memberData.name);
	
	Member.create(memberData, function(err, memberData){
		console.log('memberdata');
		if(err){
		console.log('errmemberdata');
			if(err.toString().indexOf('E11000') > -1) {
        err = new Error('Duplicate Username');
      }
			res.status(400);
			return res.send({reason:err.toString()});
		} 
		res.send(memberData);
	
	})
	
	
};



exports.deleteMember = function(req, res){
	Member.findOne({_id:req.params.id}, function(err, member){
		return member.remove(function(err){
			if(!err) {
				console.log('removed');
				return res.send('');
				
			} else {
				console.log(err);
			}
		})
	})
};

exports.updateMember = function(req, res){
	var memberUpdate = req.body;
	
	console.log(memberUpdate._id);
	console.log( memberUpdate);


	Member.findOneAndUpdate({_id:req.params.id}, memberUpdate, function(err, memberUpdate){
		res.send(memberUpdate);
	})


};

exports.uploadMemberPic = function (req, res) {


   fs.readFile(req.files.image.path, function (err, data) {
		console.log('test');
		var imageName = req.files.image.name;
		
		//If there's an error
		if(!imageName){

			console.log("There was an error")
			res.redirect("/");
			res.end();

		} else {

		  var newPath = __dirname + "/../../public/images/memberPhoto/" + imageName;
		//console.log(newPath);
		  //write file to uploads/fullsize folder
		  fs.writeFile(newPath, data, function (err) {

		  	// let's see it
		  	//res.redirect("/images/choirPhoto/" + imageName);
		res.redirect('/AddMember');
		  });
		}
	});

    

};