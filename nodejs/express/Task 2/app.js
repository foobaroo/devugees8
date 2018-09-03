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

//render person.ejs template from the folder views and pass data to template.
app.get('/person/:id',function(req,res){
     res.render('person',{ 
                            ID : req.params.id, 
                            Qstr: req.query.qstr
                            }
                );

     /* old method 
     res.send('<html><head></head><body><h1>Person: '+req.params.id+'</h1></body></html>');
     */
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

app.get('/api',function(req,res){
    res.json({firstname: 'John', lastname:'Doe'});
});

app.listen(port);