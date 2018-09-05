const express = require('express');
const randomstring = require('randomstring');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'foobar',
    database: 'productserver'
});

app.use(bodyParser.json());

app.get('/products', function(req, res) {
    let sql = 'select * from products';

    if(req.query.q) {
        sql += ' where lower(title) like lower(?) or lower(description) like lower(?)';
    }

    con.query(sql, ['%'+req.query.q+'%', '%'+req.query.q+'%'], function(err, data) {
        if(err) return res.send({ error: err });

        return res.send(data);
    });
});

app.post('/products', function(req, res) {
    if(!req.body.type || !req.body.title || !req.body.description || !req.body.price || !req.body.imageurl) {
        return res.send({ error: 'invalid request' });
    }


});

// task: implement delete method
// take a look at devugees8/nodejs/sql/nodesql/main.js

app.delete('/products/:id', function(req, res) {

});

app.listen( 3000 );