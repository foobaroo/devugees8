const express = require('express');
const bodyParser = require('body-parser');

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017/';

const app = express();
app.use(express.json()); // experimental

app.get('/', function(req, res) {
    return res.send({ 'crudapi': '1.0' });
});

app.get('/student', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        const dbo = db.db('studentdb');
        
        if(!req.query.id) {        
            dbo.collection('students').find({}).toArray(function(err, dbres) {
                if(err) return res.send({ error: err });
                db.close();
                return res.send( dbres );
            });
        }
        else {
            let mongoId = null;
            try {
                mongoId = new mongo.ObjectId(req.query.id);
            }
            catch(err) {
                if(err) return res.send({ error: err });
            }

            dbo.collection('students').findOne({'_id': mongoId}, function(err, dbres) {
                if(err) return res.send({ error: err });

                db.close();
                return res.send(dbres);
            });
        }
    });
});

app.post('/student', function(req, res) {
    if(!req.body.name || !req.body.age || !req.body.subjects || !req.body.address) {
        return res.send({ error: 'name, age, subjects and address required' });
    }

    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        var dbo = db.db('studentdb');
        var newStudent = {
            name: req.body.name,
            age: req.body.age,
            subjects: req.body.subjects,
            address: req.body.address
        };

        dbo.collection('students').insertOne(newStudent, function(err, dbres) {
            if(err) return res.send({ error: err });

            db.close();
            return res.send({ error: 0, insertId: dbres.insertedId });
        });
    });
});

app.delete('/student/:id', function(req, res) {
        MongoClient.connect(url, function(err, db) {
            if(err) return res.send({ error: err });
    
            var dbo = db.db('studentdb');

            let mongoId = null;
            try {
                mongoId = new mongo.ObjectId(req.params.id);
            }
            catch(err) {
                return res.send({ error: err });
            }

            dbo.collection('students').deleteOne({'_id': mongoId}, function(err, dbres) {
                if(err) return res.send({ error: err });

                db.close();
                return res.send(dbres);
            });
        });

});

app.put('/student/:id', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        var dbo = db.db('studentdb');

        let mongoId = null;
        try {
            mongoId = new mongo.ObjectId(req.params.id);
        }
        catch(err) {
            return res.send({ error: err });
        }    

        let newValues = { $set: req.body };
        
        dbo.collection('students').updateOne({_id: mongoId}, newValues, function(err, dbres) {
            if(err) return res.send({ error: err });
            
            db.close();
            return res.send({ error: 0, result: dbres });
        });
    });
});

app.listen( 3000 );