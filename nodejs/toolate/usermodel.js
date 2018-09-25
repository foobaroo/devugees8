var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: String,
	password: String,
	lastLogin: String,
	activationCode: String,
	active: Boolean
});

var Users = mongoose.model('users', userSchema);
module.exports = Users;