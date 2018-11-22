const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

app.use(cors());

loadImages = () => {
    return new Promise( (resolve, reject) => {
        fs.readdir('public/images', 
        (err, files) => {
            if(err) return reject(err);

            return resolve(files);
        });
    });
}

app.get('/images', async (req, res) => {
    try {
        const imageUrls = await loadImages();
        let images = [];
        let i=0;

        imageUrls.forEach( element => {
            images.push({
                id: i,
                url: element
            })
            i++;
        });

        return res.send(images);
    }
    catch(e) {
        return res.send(e);
    }
});

app.listen( 8000 );