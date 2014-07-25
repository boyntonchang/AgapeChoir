var mongoose = require('mongoose');

var songSchema = mongoose.Schema({
	//date:{type:Date, required:'{PATH} is required'},
	//title:{type:String, required:'{PATH} is required'},
	date:Date,
	title:String,
	vPath:String
});
var Song = mongoose.model('Song', songSchema);

function createDefaultSongs(){
	Song.find({}).exec(function(err, collection){
		if(collection.length === 0){
			Song.create({"date":"2/09/2014","title":"I will be with you","vPath":"https://www.youtube.com/watch?v=0-iCQRqp_wM"}),
			Song.create({"date":"2/16/2014","title":"Holy is the name of the King","vPath":"https://www.youtube.com/watch?v=65hvQYt1Ycw"}),
			Song.create({"date":"2/23/2014","title":"splendid is thy name","vPath":"https://www.youtube.com/watch?v=9eCpqILf4OI"}),
			Song.create({"date":"3/02/2014","title":"The name","vPath":"https://www.youtube.com/watch?v=HXHcrC9r6j0"}),
			Song.create({"date":"3/09/2014","title":"I look up to you","vPath":"https://www.youtube.com/watch?v=pesUdiIl8KI"}),
			Song.create({"date":"3/16/2014","title":"He is good","vPath":"http://youtu.be/ooDMvxucQ9g"}),
			Song.create({"date":"3/23/2014","title":"over the hill","vPath":"https://www.youtube.com/watch?v=oceml-KueSk"}),
			Song.create({"date":"3/30/2014","title":"You are my strength when I am weak","vPath":"https://www.youtube.com/watch?v=5B1i9gv5LOs"}),
			Song.create({"date":"4/06/2014","title":"Remember me","vPath":"https://www.youtube.com/watch?v=CMsiw5UDcOY"}),
			Song.create({"date":"4/13/2014","title":"Let Jesus name lifted","vPath":"https://www.youtube.com/watch?v=j2hjJPz-4UI"}),
			Song.create({"date":"4/20/2014","title":"Easter Cantata","vPath":"https://www.youtube.com/watch?v=JsGEgRqtvac"}),
			Song.create({"date":"4/27/2014","title":"God will be pleased with you","vPath":"https://www.youtube.com/watch?v=Yjv1oSaR-BE"})
		}
	})
}

exports.createDefaultSongs = createDefaultSongs; 