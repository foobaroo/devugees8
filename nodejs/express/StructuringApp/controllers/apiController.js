var bodyParser=require('body-parser');
var jsonParser=bodyParser.json();

module.exports = function (app)
{

  //render person.ejs template from the folder views and pass data to template.
  app.get('/api/person/:id',function(req,res){
      //get that person data from the database
      res.json({firstname: 'nemer', lastname: 'doe'});
  });


  app.post('/api/person',jsonParser, function(req,res){
    //save to the database
  });

  app.delete('/api/person/:id',jsonParser, function(req,res){
      //delete from the database
    });
}