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

// no query parameter id: return all users
// query parameter id: return user with id query id
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



app.listen( 3000 );