var path=require('path');
var rootPath=path.normalize(__dirname + '/../../');

module.exports = {
	development:{
		db:'mongodb://localhost/pilgrim',
		rootPath:rootPath,
		port:process.env.PORT || 3030
	},
	production:{
		db:'mongodb://boyntonchang:julielove423@ds061721.mongolab.com:61721/heroku_app35593598',
		rootPath:rootPath,
		port:process.env.PORT || 80 
	}
}
