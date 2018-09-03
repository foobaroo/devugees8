var express=require('express');
var app=express();

var port=process.env.port || 3000;

app.use('/assets',express.static(__dirname+'/public'));

app.use('/',function(req,res,next){


    //res.send('Test...');
    console.log("Here middleware process....");
    console.log('Request Url:'+ req.url);
    next();
});


app.get('/',function(req,res){

    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');

});

app.get('/api',function(req,res){
    res.json({firstname: 'John', lastname:'Doe'});
});

app.get('/person/:id',function(req,res){

    res.send('<html><head></head><body><h1>Person: '+req.params.id+'</h1></body></html>');

});


app.listen(port);