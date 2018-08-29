var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});

module.exports = function (app) 
{

    //render index.ejs template (ejs) from the folder views
    app.get('/',function(req,res){
        res.render('index');
    });


    app.get('/person/:id',function(req,res){
        res.render('person',{ID:req.params.id, Qstr:req.query.qstr});
    });

    app.post('/person',urlencodedParser,function(req,res){
        res.send('Thank you');
        console.log(req.body);
        console.log(req.body.firstname); //it is data property
        console.log(req.body.lastname); // it is data property
        
    });
}
