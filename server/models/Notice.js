var mongoose = require('mongoose');

var noticeSchema = mongoose.Schema({
	date:Date,
	title:{type:String, required:'{PATH} is required'},
	content:{type:String, required:'{PATH} is required'},
	report:String,
	image:{type:String, required:'{PATH} is required'}
});

var Notice = mongoose.model('Notice', noticeSchema);

function createDefaultNotices(){
	Notice.find({}).exec(function(err, collection){
		if(collection.length === 0){
			Notice.create({"date":"2/9/2014","title":"In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.","content":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","report":"Louis Phillips","image":"CHOIR1.jpg"}),
			Notice.create({"date":"2/16/2014","title":"Morbi non lectus.","content":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","report":"Rachel Stone","image":"CHOIR2.jpg"}),
			Notice.create({"date":"3/30/2014","title":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","content":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","report":"Ruth Olson","image":"CHOIR3.jpg"})
		}
	})
}

exports.createDefaultNotices = createDefaultNotices;