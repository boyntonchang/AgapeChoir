var path=require('path');
var rootPath=path.normalize(__dirname + '/../../');

module.exports = {
	development:{
		db:'mongodb://localhost/pilgrim',
		rootPath:rootPath,
		port:process.env.PORT || 3030
	},
	production:{
		db:'mongodb://boyntonchang:julielove@ds053168.mongolab.com:53168/pilgrim',
		rootPath:rootPath,
		port:process.env.PORT || 80 
	}
}