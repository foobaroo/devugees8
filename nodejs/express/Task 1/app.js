var express=require('express');
var app=express();
var fs=require('fs');

var port=process.env.port || 3000;


app.get('/',function(req,res){

    return res.send({fileExample : '1.0'});

});


//read file
app.get('/:filename',function(req,res){

    console.log("readfile...");

    if(!req.params.filename)
    {
        return res.send({error : 'You need to specify a filename!'});
    }

    let filename=__dirname + '/files/' + req.params.filename;

    fs.readFile(filename,'utf-8',function(err,data){

            if(err)
            {
                return res.send({error : err});
            }

            return res.send({error:0,data: data});

    }); //end readFile

}); //end get /:filename route




//write file
app.post('/:filename',function(req,res){

    console.log("write file to:" +req.params.filename);
  
    if(!req.params.filename)
    {
        return res.send({error : 'You need to specify a filename!'});
    }

    let filename=__dirname + '/files/' + req.params.filename;

    console.log("filename:" +filename);

    fs.writeFile(filename,"Hallo Hamid, I am writing file..", function(err){

            if(err)
            {
                return res.send({error : err});
            }

            return res.send({error:0});

    }); //end readFile

    

}); //end post /:filename route


//delete file
app.delete('/:filename',function(req,res){

    console.log("delete file:" +req.params.filename);
  
    if(!req.params.filename)
    {
        return res.send({error : 'You need to specify a filename!'});
    }

    let filename=__dirname + '/files/' + req.params.filename;

    console.log("filename:" +filename);

    fs.unlink(filename, function(err){

            if(err)
            {
                return res.send({error : err});
            }

            return res.send({error:0});

    }); //end unlink

}); //end delete /:filename route




app.listen(port);