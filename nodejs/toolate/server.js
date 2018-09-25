const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const mongoose = require('mongoose');
const Laties = require('./toolatemodel');
const Users = require('./usermodel');
const mailnotifier = require('./mailnotifier');
const randomstring = require('randomstring');
const bcrypt = require('bcrypt');

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
    Users.findOne({ email: req.body.email, active: true },
    function(err, user) {
        if(err) {
            return res.send({ error: err });
        }

        if(!user) {
            return res.send({ error: 'user not found' });
        }

        bcrypt.compare(req.body.password, user.password, function(err, hashResult) {

            if(hashResult) {
                req.session.user = req.body.email;
                req.session.admin = true;        

                user.lastLogin = new Date();
                user.save();
                return res.send({ ...user, error: 0});
            }
            else {
                return res.send({ error: 'password incorrect' });
            }
        });
    });
});

app.post('/signup', function(req, res) {
    if(!req.body.email || !req.body.password || !req.body.repeatPassword) 
        return res.send({ error: 'username, password and repeatPassword required' });

    if(req.body.password !== req.body.repeatPassword) 
        return res.send({ error: 'password must be equal to repeatPassword' });

    Users.findOne({ email: req.body.email}, function(err, userFound) {
        if(err) {
            return res.send({ error: err });
        }

        if(userFound) {
            return res.send({ error: 'user already exists' })
        }

        bcrypt.hash(req.body.password, 10, function(err, hashedPassword) {

            let activationCode = randomstring.generate(20);
            let newUser = new Users({
                email: req.body.email,
                password: hashedPassword,
                activationCode: activationCode,
                active: false,
                lastLogin: null
            });
        
            newUser.save(function(err, newRecord) {
                if(err) return res.send({ error: err });
        
                mailnotifier.sendMail(req.body.email, 'Your Registration at Too Late App', `
                    Hi, 
                    please activate your account at TooLate App by clicking 
                    the following link: <a href="http://localhost:3000/?activate=${activationCode}">Click Here</a>
                `);
        
                return res.send({ ...newRecord, error: 0 });
            });    
        });
    });        
});

app.get('/activate/:activationCode', function(req, res) {
    Users.findOneAndUpdate({ activationCode: req.params.activationCode }, { active: true },
    function(err, user) {
        if(err) {
            return res.send({ error: err });
        }

        if(!user) {
            return res.send({ error: 'user not found' });
        }
    
        // direct login: 
        // req.session.admin = true
        // on frontend perform redirect

        return res.send({ error: 0 });
    });
});

app.post('/logout', function(req, res) {
    if(req.session) {
        req.session.destroy();
        return res.send({ error: 0 });
    }
});

app.listen(3000);