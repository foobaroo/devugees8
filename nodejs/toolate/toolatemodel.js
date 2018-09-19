var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var latiesSchema = new Schema({
	name: String,
	time: String,
	date: String
});

var Laties = mongoose.model('laties', latiesSchema);
module.exports = Laties;