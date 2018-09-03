var express = require('express');
var app = express();

app.get('/halloworld', function(req, res) {
    return res.send('hallo world');
});

app.get('/', function(req, res) {
    let x = 3;
    return res.send(`
        <h1>Hallo World</h1>
    `);
});

app.listen(3000);