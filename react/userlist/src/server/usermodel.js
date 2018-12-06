const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema that matches the collection on our mongodb
const userSchema = new Schema({
    name: String,
    email: String,
    city: String,
    password: String
});

const User = mongoose.model('users', userSchema);
module.exports = User;