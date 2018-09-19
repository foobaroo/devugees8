const express = require('express');
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

app.delete('/toolate', function(req, res) {

});

app.listen(3000);
