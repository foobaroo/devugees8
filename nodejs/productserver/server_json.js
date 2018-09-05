const express = require('express');
const fs = require('fs');
const randomstring = require('randomstring');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let productFile = __dirname + '/products.json';

if(!fs.existsSync(productFile)) {
    fs.writeFileSync(productFile, '[]', 'utf-8');
}

app.get('/products', function(req, res) {
    fs.readFile(productFile, 'utf-8',
    function(err, data) {
        if(err) return res.send({err: err});

        let products = JSON.parse(data);

        if(!req.query.q) {
            return res.send(products);
        }

        let q = req.query.q.toLowerCase();
        let resultProducts = [];

        for(let i=0; i<products.length; i++) {
            let targetString = products[i].title.toLowerCase() + products[i].description.toLowerCase();

            if(targetString.includes(q)) {
                resultProducts.push(products[i]);
            }
        }

        return res.send(resultProducts);
    });
});

app.post('/products', function(req, res) {
    if(!req.body.type || !req.body.title || !req.body.description || !req.body.price || !req.body.imageurl) {
        return res.send({ error: 'invalid request' });
    }

    fs.readFile(productFile, 'utf-8', function(err, data) {
        if(err) return res.send({ err: err });

        let products = JSON.parse(data);
        let newProduct = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            type: req.body.type,
            imageurl: req.body.imageurl,
            id: randomstring.generate(20)
        };

        products.push(newProduct);
        let productsJSON = JSON.stringify(products);

        fs.writeFile(productFile, productsJSON, 'utf-8', function(err) {
            if(err) return res.send({ err: err });

            return res.send( newProduct );
        })
    });
});

app.delete('/products/:id', function(req, res) {
    fs.readFile(productFile, 'utf-8', function(err, data) {
        if(err) return res.send({ err: err });

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
            return res.send({ error: 'invalid id' });
        }

        let productJSON = JSON.stringify(products);

        fs.writeFile(productFile, productJSON, 'utf-8', function(err) {
            if(err) return res.send({ err: err});

            return res.send({ error: 0, deleted: req.params.id });
        });

    });
});

app.listen( 3000 );