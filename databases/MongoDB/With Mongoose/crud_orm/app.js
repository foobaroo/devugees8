var mongoose=require('mongoose');
var Student=require('./studentmodel');
const express=require('express');
const bodyParser = require('body-parser');


const app=express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/user_mongoose');
app.get('/',function(req,res){

    res.json({
                info: 'student crud api'
            });


});

//Task
//Create a CRUD API for creating, updating, deleting and reading student info.

//POST - Create
//PUT - update
//DELETE - delete
//GET - read
//PUT, DELETE and GET expect a student ID.

//add a new student
app.post('/student',function(req,res){

    //here we take req.body from the postman for the new student.
    console.log(req.body);

    var newStudent= new Student(req.body);

    newStudent.save(function(err){
        if(err)
            return res.send(err);

        console.log('user ribo has been saved successfully');
        return res.send({ newStudent: req.body});
    });

});

//get or load student info by id.
app.get('/student/:id',function(req,res){

    //read statement
    //req.params.id which we will pass to postman
    //http://localhost:3000/student/5b9a2baab3edac3ef5b928ec
    Student.findById(req.params.id,function(err,student){

        if(!student)
            return res.send({ err: 'student not found'});

        console.log(student);
        return res.send(student);

    });
});

//update statement
app.put('/student/:id',function(req,res){

    //first find student by id which we have passed through postman
    Student.findById(req.params.id, function(err,student){
        
        if(!student)
            return res.send({err:'student not found'});

        //student : it contains old data
        //req.body : contains new data as json object

        //check all params that are set in req.body and attach/overwrite the student object
        for(key in req.body)
        {
            console.log("Key:"+key);
            console.log("Key value:"+req.body[key]);
            student[key]=req.body[key]; 
            //student['name']=req.body['name']
        }

        student.save(function(err){

            if(err)
                return res.send(err);
            
            console.log('student updated');
            return res.send(student);

        });      
    });
});


//delete a student
app.delete('/student/:id',function(req,res){

    //first find student by id which we have passed through postman
    Student.findById(req.params.id, function(err,student){
        
        if(!student)
            return res.send({err:'student not found'});


        student.remove(function(err){

            if(err)
                return res.send(err);
            
            console.log('student deleted');
            return res.send(student);

        });      
    });

});


app.listen(3000,function(){
    console.log('app listening on port 3000');
});