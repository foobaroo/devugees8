const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// middleware bodyParser
app.use( bodyParser.json() );

app.get('/', function(req, res) {
    // 1. object -> JSON
    // 2. string -> HTML
    res.send('<h2>hi</h2>');
});

app.get('/public/:username', function(req, res) {
    res.send('you requested the user ' + req.params.username);
});

app.post('/user', function(req, res) {
    if(!req.body.username || !req.body.email || !req.body.password) {
        return res.send({ error: 'username, email and password is required' });
    }

    // 1. read request
    let newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    // 2. read file
    fs.readFile(__dirname + '/users.json', 
        function(err, data) {
            if(err) return res.send({ error: err });

            // 3. Parse JSON
            let users = JSON.parse(data);
            // at the beginning: []
            // later: [{}, {}, {}, ...]

            // 4. push the user in the array
            users.push(newUser);
            
            // 5. Stringify the users
            // 6. writeFile 
            fs.writeFile(__dirname + '/users.json', 
                            JSON.stringify(users),
                            'utf-8',
                            function(err) {
                                if(err) return res.send({ error: err });

                                return res.send({ message: 'user has been saved' });
                            });
    });

});

app.get('/user', function(req, res) {
    return res.send({ users: [] });
});

app.listen(3000);