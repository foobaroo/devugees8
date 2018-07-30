const express = require('express');
const fileUpload = require('express-fileupload');
const randomstring = require('randomstring');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// default options
app.use(fileUpload());
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/upload', function(req, res) {
    if (!req.files || !req.body.tags)
        return res.status(400).send({error: 'Files and Tags are required!'});

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    
    if(sampleFile.mimetype !== 'image/png' && sampleFile.mimetype !== 'image/jpeg' && sampleFile.mimetype !== 'image/gif') {
        return res.send({ error: 'only png, gif or jpg files' });
    }
    
    let filename = randomstring.generate(20) + '.' + sampleFile.name.substr(sampleFile.name.lastIndexOf('.') + 1);
    sampleFile.mv(__dirname + '/public/images/' + filename, function(err) {
        if (err)
        return res.status(500).send({ error: err });
        
            fs.readFile(__dirname + '/public/tags.json', function(err, data) {
                if(err) return res.send({ error: err });
                
                var tags = null;
                try { tags = JSON.parse( data ); }
                catch(e) {
                    return res.send({error: e.toString()});
                }

                let newImage = {
                    image: filename,
                    tags: req.body.tags.split(',')
                };

                tags.push( newImage );
                let strTags = null;
                try {
                    strTags = JSON.stringify( tags );
                }
                catch(e) {
                    return res.send({ error: e.toString() });
                }            
                fs.writeFile(__dirname + '/public/tags.json', strTags, function(err) {
                    if(err) return res.send({ error: err });

                    // return res.send({ error: 0, tags: tags });
                    res.redirect('/');
                })
            });
    });
});

app.put('/:image', function(req, res) {
    if(!req.body.tags) {
        return res.send({ error: 'no tags specified' });
    }
    
    if(!Array.isArray(req.body.tags)) {
        return res.send({error: 'tags is not a proper array'});
    }

    fs.readFile(__dirname + '/public/tags.json', function(err, data) {
        var images = null;
        try {
            images = JSON.parse( data );
        }
        catch(e) {
            return res.send({error: e});
        }

        let changed = false;
        for(let i=0; i<images.length; i++) {
            if(images[i].image === req.params.image) {
                images[i].tags = req.body.tags;
                changed = true;
            }
        }

        if(changed) {
            let strImages = JSON.stringify(images);
            fs.writeFile(__dirname + '/public/tags.json', strImages, function(err) {
                return res.send({ error: 0 });
            });        
        }
        else {
            return res.send({ error: 'file not found' });
        }

    });
});

app.delete('/:image', function(req, res) {
    if(!req.params.image) {
        return res.send({ error: 'no image specified' });
    }

    fs.readFile(__dirname + '/public/tags.json', function(err, data) {
        var images = null;
        try { images = JSON.parse( data ); }
        catch(e) {
            return res.send({ error: e });
        }

        let image = null;
        for(let i=0; i<images.length; i++) {
            if(images[i].image === req.params.image) {
                image = images[i];
                images.splice(i, 1);
                break;
            }
        }

        if(!image) return res.send({ error: 'image not found' });

        let filename = __dirname + '/public/images/' + image.image;
        fs.unlink(filename, function(err) {
            if(err) {
                return res.send({ error: 'could not remove file: ' + filename });
            }
            let strImages = JSON.stringify(images);
            fs.writeFile(__dirname + '/public/tags.json', strImages, function(err) {
                if(err) {
                    return res.send({ error: err});
                }
                
                return res.send({ error: 0 });
            });
        });        
    });
});

app.get('/search', function(req, res) {
    fs.readFile(__dirname + '/public/tags.json', function(err, data) {
        if(err) return res.send({ error: err });

        let images = null;
        try {
            images = JSON.parse(data);
        }
        catch(err) {
            return res.send({ error: err.toString() });
        }

        if(req.query.q) {
            let q = req.query.q;
            let resultImages = [];
            
            for(let i=0; i<images.length; i++) {
                let tags = images[i].tags;
                for(let j=0; j<tags.length; j++) {
                    if(new String(tags[j]).toLocaleLowerCase().includes(q)) {
                        resultImages.push( images[i] );
                        break;
                    }
                }
            }
            return res.send({ error: 0, images: resultImages });
        }
        else {
            return res.send({ error: 0, images: images });
        }
    });
});

console.log('started imagegallery server.');
app.listen( 3000 );