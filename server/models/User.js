var mongoose = require('mongoose'),
	encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({ 
		firstName: {type:String, required:'{PATH} is required!'},
		lastName: {type:String, required:'{PATH} is required!'},
		username: {
			type: String,
			required: '{PATH} is required!',
			unique:true
		  },
		salt: {type:String, required:'{PATH} is required!'},
		hashed_pwd: {type:String, required:'{PATH} is required!'},
		roles: [String]
	});
	userSchema.methods = {
		authenticate:function(passwordMatch){
			return encrypt.hashPwd(this.salt, passwordMatch) === this.hashed_pwd;
		}
	}
	var User = mongoose.model('User', userSchema);
	function createDefaultUsers(){
		User.find({}).exec(function(err, collection){  
		if(collection.length === 0){
			var salt, hash;
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt,'chang');
			User.create({firstName:'Chang',lastName:'Jeon', username:'chang', salt:salt, hashed_pwd:hash, roles:['admin']}); 
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt,'hee');
			User.create({firstName:'Hee',lastName:'Yun', username:'hee',salt:salt, hashed_pwd:hash, roles:[]});
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt,'julie');
			User.create({firstName:'Julie',lastName:'Jeon', username:'julie',salt:salt, hashed_pwd:hash}); 
		  
				}  
		  
			}) 
	
	};
	
	exports.createDefaultUsers = createDefaultUsers;
