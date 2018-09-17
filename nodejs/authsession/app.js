const express=require('express');

//install first by command : npm i express-session
const session=require('express-session');

//install first by command : npm i cookie-parser
const cookieParser=require('cookie-parser');

const app= express();
app.use(cookieParser());
app.use(session({

    secret: 'mySecretKey',
    resave:true,
    saveUninitialized:true

}));

//we just created login process and created session
app.get('/login', function(req,res){

    if(!req.query.username || !req.query.password)
    {
        res.send('username and password required')
    }
    else if (req.query.username ==='hello' && req.query.password==='world')
    {
        req.session.user='hello';
        req.session.admin=true;
        
        res.send({error:0,result: 'logged in'});
        console.log(JSON.stringify(req.session));
    }

});

//we will create logout process with destroy session
app.get('/logout',function(req,res){

    req.session.destroy();
    res.send({ error:0, result:'logout successful'});

});

//create authentication/authorize function
function auth(req,res,next)
{
    if(req.session && req.session.user==='hello' && req.session.admin)
    {
        return next();
    }
    else
    {
        return res.sendStatus(401);
    }
}

//any content route
app.get('/content',auth, function(req,res){

    res.send('This is secret area.');

});


app.listen(3000);
console.log('app running at port 3000');