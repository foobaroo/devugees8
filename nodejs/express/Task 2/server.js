var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var fs=require("fs");

var port=process.env.port || 3000;

var urlencodedParser=bodyParser.urlencoded({extended:false});
var jsonParser=bodyParser.json();

app.use('/assets',express.static(__dirname+'/public'));

//below will define EJS template engine
app.set('view engine','ejs');

app.get('/listUsers',function(req,res){

    var filePath=__dirname+"/"+"users.json";

    fs.readFile(filePath,"utf-8",function(err,data){

        if(err)
            res.send({error: err});

        var users_obj=JSON.parse(data);

        //Part 1:
        //res.end(JSON.stringify(users));

        //Part 2:
        res.render('userlist',{userList: users_obj});
    })
});

app.get('/:id',function(req,res){

    var filePath=__dirname+"/"+"users.json";

    fs.readFile(filePath,"utf-8",function(err,data){

        if(err)
            res.send({error: err});

        var users=JSON.parse(data);

        //Part 1:
        users.forEach((user,index,users) => {

            //whatever we are passing id argument that we have to match with user id and then we will show this user to frontend
            if(user.id==req.params.id)
            {
                res.end(JSON.stringify(user));
            }
            
        });
    })
});

app.post('/addUser',function(req,res){

    var user={
        "name" : "xyz",
        "password" : "password4",
        "profession": "driver",
        "id" : 7
    }

    var filePath=__dirname+"/"+"users.json";

    fs.readFile(filePath,"utf-8",function(err,data){

        var users=JSON.parse(data);

        if(err)
        {
            res.send({error: err});
        }
        else
        {
            //adding new user to array
            users.push(user);

            //write new added user array to file
            fs.writeFile(filePath,JSON.stringify(users,null,2),function(err){

                if(err)
                {
                    return res.send({error:err});
                }
                //Part 1:
                return res.end(JSON.stringify(users));
            })

        }
    })

});

//app.delete('/deleteUser/:id', deleteUser);
app.get('/deleteUser/:id', deleteUser);

function deleteUser(req,res){

    var filePath=__dirname+"/"+"users.json";

    //read file
    fs.readFile(filePath,"utf-8",function(err,data){

        if(err)
        {
            res.send({error: err});
        }
        else
        {
            var users=JSON.parse(data);

            users.forEach((user,index,users) => {

                //whatever we are passing id argument that we have to match with user id and then we will delete this user 
                if(user.id==req.params.id)
                {
                    //delete the match user
                    //remove item from the array
                    users.splice(index,1);
                    
                }
                
            });

            //after removing the suer, now write new array to file
            fs.writeFile(filePath,JSON.stringify(users,null,2),function(err){

                if(err)
                {
                    return res.send({error:err});
                }

                //Part 1:
                //res.end(JSON.stringify(users));

                //Part 2:
                res.render('userlist',{userList:users});
        

            });

            
        }
    });

}

app.get('/',function(req,res){

    res.render('createuser',{message:""});

});


app.post('/addNewUser',urlencodedParser,function(req,res){

    var filePath=__dirname+"/"+"users.json";

    //validation

    fs.readFile(filePath,"utf-8",function(err,data){

        

        if(err)
        {
            res.send({error: err});
        }
        else
        {
            var users=JSON.parse(data);

            /*
            var user={
                "name" : "xyz",
                "password" : "password4",
                "profession": "driver",
                "id" : 7
            }
            */

            var user ={
                name: req.body.name,
                password: req.body.password,
                profession: req.body.profession,
                id: req.body.userid
            }

            //adding new user to array
            users.push(user);

            //write new added user array to file
            fs.writeFile(filePath,JSON.stringify(users,null,2),function(err){

                if(err)
                {
                    return res.send({error:err});
                }
                //Part 1:
                //return res.end(JSON.stringify(users));

                res.render('createuser',{message:"Successfully added record!"});
            })

        }
    });

});

var server=app.listen(port,function(){
    var host = server.address().address;

    console.log("App listening at http://%s:%s",host,port);
});