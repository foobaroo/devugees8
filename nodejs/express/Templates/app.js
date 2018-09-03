var express=require('express');
var app=express();

var port=process.env.port || 3000;

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
     res.render('person',{ ID : req.params.id});

     /* old method 
     res.send('<html><head></head><body><h1>Person: '+req.params.id+'</h1></body></html>');
     */
});

app.get('/api',function(req,res){
    res.json({firstname: 'John', lastname:'Doe'});
});

app.listen(port);