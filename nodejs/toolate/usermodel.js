var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: String,
	password: String
});

var Users = mongoose.model('users', userSchema);
module.exports = Users;