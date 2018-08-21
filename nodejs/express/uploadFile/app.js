const express=require('express');
const multer=require('multer');
const upload=multer({
    dest: 'uploads' //this saves your file into a directory called "uploads"
});

const app=express();
var port=process.env.port || 3000;

//first let show index html file to browser.
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

//It is very crucial that the file name matches the name attribute in your html
app.post('/',upload.single('file-to-upload'),function(req,res){
    res.redirect('/');
});



app.listen(port);