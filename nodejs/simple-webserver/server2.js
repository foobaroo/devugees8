const express = require('express');
const fs = require('fs');
const app = express();

// better
app.use('/', express.static(__dirname + '/public'));

app.get('/hallo', function(req, res) {
    // ... logic happens usually
});

app.get('/search', function(req, res) {
    if(req.query.q) {
        return res.send({ 'the value of q is': req.query.q});
    }

    return res.send({ error: 'no q is given' });
});

// works, not efficient
// app.get('/index.html', function(req, res) {
//     fs.readFile(__dirname + '/public/index.html', 'utf-8',
//         function(err, data) {
//             return res.send(data);
//         }
//     )
// });

// app.get('/jquery.js', function(req, res) {
//     fs.readFile(__dirname + '/public/jquery.js', 'utf-8',
//         function(err, data) {
//             return res.send(data);
//         }
//     )
// });

app.listen(3000);