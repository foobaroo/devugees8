var mongoose = require('mongoose');
var Student = require('./studentmodel');
var express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());

mongoose.connect('mongodb://localhost/test');
app.get('/', function(req, res) {
	res.json({
		info: 'student crud api'
	})
});

// task:
// Create a CRUD api for creating, updating, deleting and reading student info.
// POST - create
// PUT - update
// DELETE - delete
// GET - read
//
// PUT, DELETE and GET expect a student ID

// add a new student
app.post('/student', function(req, res) {
	// here we take req.body for the new student
	console.log(req.body);
	var newStudent = new Student(req.body);
	newStudent.save(function(err) {
		if(err) {
			return res.send(err);
		}
		
		console.log('user chris has been saved successfully');
		return res.send({ newStudent: req.body })
	});
});

// load student info via id 
app.get('/student/:id', function(req, res) {
	// read statement
	Student.findById(req.params.id, function(err, student) {
		
		if(!student)
			return res.send({err: 'student not found'});	

		console.log(student);
		return res.send(student);
	});
});

// load student info via id 
app.get('/studentbyname/:name', function(req, res) {
	// read statement
	Student.findOne({name:req.params.name}, function(err, student) {
		
		if(!student)
			return res.send({err: 'student not found'});	

		console.log(student);
		return res.send(student);
	});
});

// update statement
app.put('/student/:id', function(req, res) {
	Student.findById(req.params.id, function(err, student) {
		if(!student)
			return res.send({err: 'student not found'});

		// check all params that are set in req.body and attach/overwrite the student object
		for(attr in req.body) {
			student[attr] = req.body[attr];
		}

		student.save(function(err) {
			if(err) {
				return res.send(err);
			}

			console.log('student updated');
			return res.send(student);
		});
	});
});

// delete a student
app.delete('/student/:id', function(req, res) {
	Student.findById(req.params.id, function(err, student) {
		if(!student)
			return res.send({err: 'student not found'});

		student.remove(function(err) {
			if(err) {
				return res.send(err);
			}

			console.log('student deleted');
			return res.send(student);
		});
	});
});

app.listen(3002, function() {
	console.log('app listening on port 3000');
});