const express = require('express');
const randomstring = require('randomstring');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017/';
const app = express();

app.use(express.json());

app.get('/', function(req, res) {
    return res.send({ 'crudapi': '1.0' });
})

app.get('/products', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        const dbo = db.db('productserver');
        
        if(!req.query.q) {        
            dbo.collection('products').find({}).toArray(function(err, dbres) {
                if(err) return res.send({ error: err });
                db.close();
                return res.send( dbres );
            });
        }
        else {

            let search = {
                $or: [
                        {title: new RegExp(req.query.q,'i')}, 
                        {description: new RegExp(req.query.q,'i')}
                     ]
                };


            dbo.collection('products').find(search).toArray(function(err, dbres) {
                if(err) return res.send({ error: err });

                db.close();
                return res.send(dbres);
            });
        }
    });
});

app.post('/products', function(req, res) {
    if(!req.body.type || !req.body.title || !req.body.description || !req.body.price || !req.body.imageurl) {
        return res.send({ error: 'invalid request' });
    }

});

app.delete('/products/:id', function(req, res) {

});

app.listen(3000);