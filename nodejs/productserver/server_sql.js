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

    let sql = `insert into products 
    (title, description, price, imageurl, type) 
    values (?, ?, ?, ?, ?)`;

    let values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.imageurl,
        req.body.type,
    ];

    con.query(sql, values, function(err, data) {
        if(err) return res.send({ error: err });

        return res.send({ error: 0, insertId: data.insertId });
    });

});

// Query Parameter: halloworld.com/users?abc=123&xyz=789
//
// Parameter: halloworld.com/users/123
//            halloworld.com/orders/456
// task: implement delete method
// take a look at devugees8/nodejs/sql/nodesql/main.js

app.delete('/products/:id', function(req, res) {
    let sql = 'delete from products where id = ?';
    
    con.query(sql, [req.params.id], function(err, data) {
        if(err) return res.send({ error: err });
        
        return res.send(data);
    });
});

app.listen(3000);