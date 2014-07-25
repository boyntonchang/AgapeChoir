var mongoose = require('mongoose');

var photoSchema = mongoose.Schema({
	title:{type:String, required:'{PATH} is required'},
	image:{type:String, required:'{PATH} is required'}
	
	
});
var Photo = mongoose.model('Photo', photoSchema);

function createDefaultPhotos(){
	Photo.find({}).exec(function(err, collection){
		if(collection.length === 0){
			Photo.create({"title":"Choir 1","image":"CHOIR1.jpg"}),
			Photo.create({"title":"Choir 2","image":"CHOIR2.jpg"}),
			Photo.create({"title":"Choir 3","image":"CHOIR3.jpg"}),
			Photo.create({"title":"Choir 4","image":"CHOIR4.jpg"}),
			Photo.create({"title":"Choir 5","image":"CHOIR5.jpg"}),
			Photo.create({"title":"Choir 6","image":"CHOIR6.jpg"}),
			Photo.create({"title":"Choir 7","image":"CHOIR7.jpg"}),
			Photo.create({"title":"Choir 8","image":"CHOIR8.jpg"}),
			Photo.create({"title":"Choir 9","image":"CHOIR9.jpg"}),
			Photo.create({"title":"Choir 10","image":"CHOIR10.jpg"}),
			Photo.create({"title":"Choir 11","image":"CHOIR11.jpg"}),
			Photo.create({"title":"Choir 12","image":"CHOIR12.jpg"})
		}
	})
}   
 
exports.createDefaultPhotos = createDefaultPhotos; 