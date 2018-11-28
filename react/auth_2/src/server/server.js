const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
};

const app = express();
app.use( express.json() );
app.use( cookieParser() );
app.use( session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));

app.use( cors(corsOptions) );

const auth = (req, res, next) => {
    if(req.session && req.session.user === 'jan' && req.session.admin) {
        return next();        
    }
    else {
        return res.sendStatus(401);
    }
}

app.post('/login', (req, res) => {
    if(!req.body.username || !req.body.password) {
        return res.send({ error: 1000, message: 'username and password required'});
    }

    if(req.body.username === 'jan' && req.body.password === 'foobar') {
        req.session.user = 'jan';
        req.session.admin = true;
        return res.send({ error: 0, message: 'login successfull' });
    }

    return res.send({ error: 1001, message: 'login failed' });
});

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.send({ error: 0, message: 'logout successfull' });
});

app.get('/content', auth, (req, res) => {
    res.send({ error: 0, message: 'This is the secret area!'});
});

app.listen( 8000 );
console.log('server running on port 8000');