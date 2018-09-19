var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var studentSchema= new Schema({
    name: String,
    age:Number,
    subjects: Array,
    gender: String,
    updated:Date,
    address: Schema.Types.Mixed    
});


studentSchema.pre('save', function(next){

    //anything based on your need.
    var currentDate=new Date();
    this.updated=currentDate;

    this.age=100;

    next();
});


//now assign schema to model
var Student=mongoose.model('students',studentSchema);

module.exports=Student;
