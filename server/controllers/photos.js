var Photo = require('mongoose').model('Photo'),
		fs = require('fs'),
		path=require('path')
		;

exports.getPhotos = function(req, res){
	Photo.find({}).exec(function(err, collection){
		res.send(collection);
	})
};



exports.uploadPhoto = function (req, res) {


   fs.readFile(req.files.image.path, function (err, data) {

		var imageName = req.files.image.name;
		
		//If there's an error
		if(!imageName){

			console.log("There was an error")
			res.redirect("/");
			res.end();

		} else {

		  var newPath = __dirname + "/../../public/images/choirPhoto/" + imageName;
		//console.log(newPath);
		  //write file to uploads/fullsize folder
		  fs.writeFile(newPath, data, function (err) {

		  	// let's see it
		  	//res.redirect("/images/choirPhoto/" + imageName);
		res.redirect('/AddPhoto');
		  });
		}
	});

    

};

exports.showPhoto = function(req, res){
	console.log('show image');
	file = req.params.file;
	var img = fs.readFileSync(__dirname + "/../../public/images/choirPhoto/" + file);
	res.writeHead(200, {'Content-Type': 'image/*' });
	res.write(img, 'binary');
};

exports.createPhoto = function(req, res){
	console.log('show image');
	var photoData = req.body;
	
	Photo.create(photoData, function(err, photoData){
		if(err){
			res.status(400);
			return res.send({reason:err.toString()});
		}
		res.send(photoData);
	})

};


