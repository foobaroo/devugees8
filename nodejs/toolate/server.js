const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const mongoose = require('mongoose');
const Laties = require('./toolatemodel.js');
const Users = require('./usermodel.js');

// task:
//
// 1. protect routes: only let users read, write and delete laties
//    when they are  'jan' and admin
// 2. create a post method /logout, that destroys the session

mongoose.connect('mongodb://localhost/toolate');
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUnitialized: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    return res.send({ toolate: '1.0' });
});

function auth(req, res, next) {
    if(req.session && req.session.admin === true) {
        return next();
    }
    else {
        return res.send(401);
    }    
}

app.get('/laties', auth, function(req, res) {
    Laties.find({},     function(err, result) {
        if(err) {
            return res.send({ error: err });
        }

        if(!result) {
            return res.send({ error: 'some other error' })
        }

        return res.send(result);
    });
});

app.post('/laties', auth, function(req, res) {
    if(!req.body.name || !req.body.time || !req.body.date) {
        return res.send({ error: 'name, time and date needed' });
    }

    let newLaty = new Laties(req.body);
    newLaty.save(function(err, newRecord) {
        if(err) return res.send({ error: err });

        return res.send({ ...req.body, id: newRecord._id })
    });
});

app.delete('/laties/:id', auth, function(req, res) {
    Laties.findById(req.params.id, function(err, laty) {
        if(!laty)
            return res.send({ err: 'laty not found '});

        laty.remove(function(err) {
            if(err) return res.send(err);
            return res.send(laty);
        });
    });
});

app.post('/login', function(req, res) {
    if(!req.body.email || !req.body.password) 
        return res.send({ error: 'username password required' });

    // 1. find usr pwd combo on db
    Users.findOneAndUpdate({ email: req.body.email, password: req.body.password}, {lastLogin: new Date()},
    function(err, user) {
        if(err) {
            return res.send({ error: err });
        }

        if(!user) {
            return res.send({ error: 'user not found' });
        }

        // 2. create a session
        req.session.user = req.body.email;
        req.session.admin = true;
        
        return res.send({ ...user, error: 0});
    });
});

app.post('/logout', function(req, res) {
    if(req.session) {
        req.session.destroy();
        return res.send({ error: 0 });
    }
});

app.listen(3000);
