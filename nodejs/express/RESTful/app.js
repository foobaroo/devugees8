var express=require('express');
var bodyParser=require('body-parser');
var app=express();

var port=process.env.port || 3000;

var urlencodedParser=bodyParser.urlencoded({extended:false});
var jsonParser=bodyParser.json();

app.use('/assets',express.static(__dirname+'/public'));

//below will define EJS template engine
app.set('view engine','ejs');

app.use('/',function(req,res,next){
    console.log('Request Url:'+ req.url);
    next();
});

//render index.ejs template (ejs) from the folder views
app.get('/',function(req,res){
    res.render('index');
});


app.post('/person',urlencodedParser,function(req,res){
    res.send('Thank you');
    console.log(req.body);
    console.log(req.body.firstname); //it is name property
    console.log(req.body.lastname); // it is name property
    
});

app.post('/personjson',jsonParser,function(req,res){
    res.send('Thank you for the JSON Data');
    console.log(req.body);
    console.log(req.body.firstname); //it is data property
    console.log(req.body.lastname); // it is data property
    
});


//render person.ejs template from the folder views and pass data to template.
app.get('/person/:id',function(req,res){
    //get that person data from the database
});


app.get('/api/person',jsonParser function(req,res){
  //save to the database
});

app.get('/api/person/:id',jsonParser function(req,res){
    //delete from the database
  });

app.listen(port);