var mongoose = require('mongoose');
var User = require('./usermodel');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
};

const app = express();
app.use(bodyParser());
app.use(cors(corsOptions));

mongoose.connect('mongodb://localhost/userlist');
app.get('/', function(req, res) {
	res.json({
		info: 'user crud api'
	})
});

// task:
// Create a CRUD api for creating, updating, deleting and reading user info.
// POST - create
// PUT - update
// DELETE - delete
// GET - read
//
// PUT, DELETE and GET expect a user ID

// add a new user
app.post('/user', function(req, res) {
	// here we take req.body for the new user
	console.log(req.body);
	var newUser = new User(req.body);
	newUser.save(function(err) {
		if(err) {
			return res.send(err);
		}
		
		return res.send({ newUser: req.body });
	});
});

// load user info via id 
app.get('/users', function(req, res) {
	// read statement
	User.find({}, function(err, users) {
		if(!users)
			return res.send({err: 'users not found'});	

		console.log(users);
		return res.send(users);
	});
});

// load user info via id 
app.get('/user/:id', function(req, res) {
	// read statement
	User.findById(req.params.id, function(err, user) {
		
		if(!user)
			return res.send({err: 'user not found'});	

		console.log(user);
		return res.send(user);
	});
});

// load user info via id 
app.get('/userbyname/:name', function(req, res) {
	// read statement
	User.findOne({name:req.params.name}, function(err, user) {
		
		if(!user)
			return res.send({err: 'user not found'});	

		console.log(user);
		return res.send(user);
	});
});

// update statement
app.put('/user/:id', function(req, res) {
	User.findById(req.params.id, function(err, user) {
		if(!user)
			return res.send({err: 'user not found'});

		// check all params that are set in req.body and attach/overwrite the user object
		for(attr in req.body) {
			user[attr] = req.body[attr];
		}

		user.save(function(err) {
			if(err) {
				return res.send(err);
			}

			console.log('user updated');
			return res.send(user);
		});
	});
});

// delete a user
app.delete('/user/:id', function(req, res) {
	User.findById(req.params.id, function(err, user) {
		if(!user)
			return res.send({err: 'user not found'});

		user.remove(function(err) {
			if(err) {
				return res.send(err);
			}

			console.log('user deleted');
			return res.send(user);
		});
	});
});

app.listen(8000, function() {
	console.log('app listening on port 8000');
});