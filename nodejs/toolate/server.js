const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const Laties = require('./toolatemodel.js');

mongoose.connect('mongodb://localhost/toolate');

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    return res.send({ toolate: '1.0' });
});

app.get('/laties', function(req, res) {
    Laties.find({}, function(err, result) {
        if(err) {
            return res.send({ error: err });
        }

        if(!result) {
            return res.send({ error: 'some other error' })
        }

        return res.send(result);
    });
});

app.post('/laties', function(req, res) {
    if(!req.body.name || !req.body.time || !req.body.date) {
        return res.send({ error: 'name, time and date needed' });
    }

    let newLaty = new Laties(req.body);
    newLaty.save(function(err, newRecord) {
        if(err) return res.send({ error: err });

        return res.send({ ...req.body, id: newRecord._id })
    });
});

app.delete('/laties/:id', function(req, res) {
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
    if(!req.body.username || !req.body.password) 
        return res.send({ error: 'username password required' });

    if(req.body.username === 'jan' && req.body.password === 'foobar') {
        
    }    

});

app.listen(3000);
