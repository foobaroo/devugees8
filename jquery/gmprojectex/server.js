const express = require('express');
const randomstring = require('randomstring');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

// default options
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/location', function(req, res) {
    if(!req.body.lat || !req.body.lng || !req.body.title) {
        return res.send({ error: 'lat, lng and title required' });
    }

    fs.readFile(__dirname + '/public/locations.json', function(err, data) {
        if(err) return res.send({ error: err });
        
        var locations = null;
        try { locations = JSON.parse(data); }
        catch(e) {
            return res.send({ error: e.toString() });
        }

        if(!Array.isArray(locations)) {
            return res.send({error: 'locations json is invalid'});
        }

        let newLocation = req.body;
        newLocation.id = randomstring.generate(20);
        locations.push(newLocation);

        let strLocations = null;
        try {
            strLocations = JSON.stringify( locations );
        }
        catch(e) {
            return res.send({ error: e });
        }

        fs.writeFile(__dirname + '/public/locations.json', strLocations, function(err) {
            if(err) return res.send({ error: err });
            return res.send({ error: 0, newlocation: newLocation });
        })
    });    
});

app.delete('/location/:id', function(req, res) {
    if(!req.params.id) {
        return res.send({ error: 'location id required' });
    }

    fs.readFile(__dirname + '/public/locations.json', function(err, data) {
        var locations = null;
        try { locations = JSON.parse(data); }
        catch(e) {
            return res.send({ error: e });
        }

        let location = null;
        for(let i=0; i<locations.length; i++) {
            if(locations[i].id === req.params.id) {
                location = locations[i];
                locations.splice(i, 1);
                break;
            }
        }

        if(!location) return res.send({ error: 'location not found' });
        let strlocations = JSON.stringify(locations);
        fs.writeFile(__dirname + '/public/locations.json', strlocations, function(err) {
            if(err) {
                return res.send({ error: err});
            }
            
            return res.send({ error: 0 });
        });
    });
});

app.get('/location', function(req, res) {
    fs.readFile(__dirname + '/public/locations.json', function(err, data) {
        if(err) return res.send({ error: err });

        let locations = null;
        try {
            locations = JSON.parse(data);
        }
        catch(err) {
            return res.send({ error: err.toString() });
        }

        return res.send({ error: 0, locations: locations });
    });
});

console.log('started googlemaps server.');
app.listen( 3000 );