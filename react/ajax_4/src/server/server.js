const express = require('express');
const randomstring = require('randomstring');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/somedata', (req, res) => {
    res.send({
        result: randomstring.generate(10)
    })
});

app.post('/somedata', (req, res) => {
    console.log(req.body);
    if(!req.body.data) {
        return res.send({ error: 'data is required' });
    }
    
    res.send({
        somedata: 'hallo world -> ' + randomstring.generate(10)
    })
});

app.listen( 8000 );