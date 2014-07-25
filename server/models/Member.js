var mongoose = require('mongoose');

var memberSchema = mongoose.Schema({
	name:{type:String, required:'{PATH} is required', unique:true},
	part:{type:String, required:'{PATH} is required'},
	address:{type:String, required:'{PATH} is required'},
	tel:{type:String, required:'{PATH} is required'},
	email:{type:String, required:'{PATH} is required'},
	dob:Date,
	doa:Date,
	comment:String,
	image:{type:String, required:'{PATH} is required'}
});
var Member = mongoose.model('Member', memberSchema);

function createDefaultMembers(){
	Member.find({}).exec(function(err, collection){
		if(collection.length === 0){
			Member.create({"name":"Jane Han","part":"soprano","address":"122 w main st Fort Lee, NJ 07652","tel":"2012223443","email":"janehan@gmail.com","doa":"2/3/2012","dob":"7/9/1969","comment":"I am really happy to be a member of AGAPE Choir which give a blessing and joy to church members.","image":"photo11.png"}),
			Member.create({"name":"Kay Love","part":"soprano","address":"9 N. Broad way Wayne, NJ 07075","tel":"456789765","email":"kb@gmail.com","doa":"3/7/2013","dob":"3/3/1980","comment":"Love to be here","image":"photo2.png"}),
			Member.create({"name":"Natalie Lim","part":"soprano","address":"111 Howard st Paramus, NJ 07652","tel":"5676548776","email":"natalielin@gmail.com","doa":"4/8/2013","dob":"5/5/1979","comment":"Sing for God with friends and members","image":"photo12.png"}),
			Member.create({"name":"Karen Kim","part":"alto","address":"85 WHEELER AVE, WESTWOOD, NJ 07675","tel":"7876665453","email":"karenkim@gmail.com","doa":"3/8/2014","dob":"9/7/1960","comment":"Jesus loves me singing for him","image":"photo9.png"}),
			Member.create({"name":"Sumi Cho","part":"soprano","address":"116 LAWRENCE RD, MAHWAH, NJ 07430","tel":"9987654345","email":"sumicho@gmail.com","doa":"7/9/2012","dob":"4/5/1971","comment":"I am more close to Him with songs","image":"photo7.png"}),
			Member.create({"name":"Eugene Jin","part":"soprano","address":"31 FOREST ST, CLOSTER, NJ 07624","tel":"2012223356","email":"eugenekim@gmail.com","doa":"10/12/2013","dob":"1/4/1978","comment":"He is risen!","image":"photo13.png"}),
			Member.create({"name":"Jenny Lee","part":"soprano","address":"196 MILL ST, WESTWOOD, NJ 07675","tel":"2017654567","email":"jennylee@gmail.com","doa":"12/12/2013","dob":"3/29/1977","comment":"God is Love","image":"photo5.png"}),
			Member.create({"name":"Guri Kim","part":"alto","address":"101 LARGE AVE, HILLSDALE, NJ 07642","tel":"6467658897","email":"gurikim@gmail.com","doa":"2/2/2014","dob":"10/1/1980","comment":"Thanks for the opportunity I sing for Him","image":"photo14.png"})
		}
	})
}   
 
exports.createDefaultMembers = createDefaultMembers; 