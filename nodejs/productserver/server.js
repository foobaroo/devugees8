const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');
const app = express();

if(!fs.existsSync(__dirname + '/products.json')) {
    fs.writeFileSync(__dirname + '/products.json', '[]', 'utf-8');
}

app.use( bodyParser.json() );
app.get('/', function(req, res) {
    return res.send({ productapi: '1.0' });
});

app.get('/products', function(req, res) {
    fs.readFile(__dirname + '/products.json', 'utf-8',
        function(err, data) {
            if(err) {
                return res.send({ error: err });
            }

            let products = JSON.parse(data);
            return res.send(products);
        }
    )
});

app.post('/products', function(req, res) {
    if(!req.body.type || !req.body.title || !req.body.description || !req.body.price) {
        return res.send({ error: 'type, title, description and price required' });
    }

    if(    req.body.type.toLowerCase() !== 'book'
        && req.body.type.toLowerCase() !== 'music'
        && req.body.type.toLowerCase() !== 'movie') {
            return res.send({ error: 'type is either book, music or movie' });
        }
    
    fs.readFile(__dirname + '/products.json', 'utf-8', 
    function(err, data) {
        if(err) return res.send({ error: err });

        let products = JSON.parse(data);
        let newProduct = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            type: req.body.type,
            id: randomstring.generate(20)
        };

        products.push(newProduct);
        let productsJSON = JSON.stringify(products);
        fs.writeFile(__dirname + '/products.json', productsJSON,'utf-8',
            function(err) {
                if(err) return res.send({ error: err });

                return res.send( newProduct );
            });
    });

});

app.delete('/products/:id', function(req, res) {
    fs.readFile(__dirname + '/products.json', 'utf-8', 
        function(err, data) {
            if(err) return res.send({ error: err });

            let products = JSON.parse(data);
            let productFound = false;
            for(let i=0; i<products.length; i++) {
                if(products[i].id === req.params.id) {
                    products.splice(i, 1);
                    productFound = true;
                    break;
                }
            }

            if(!productFound) {
                return res.send({error: 'invalid id'});
            }

            let productsJSON = JSON.stringify(products);
            fs.writeFile(__dirname + '/products.json', productsJSON,'utf-8',
                function(err) {
                    if(err) return res.send({ error: err });
    
                    return res.send({ error: 0, deleted: req.params.id });
                });            
        });
});

app.listen( 3000 );