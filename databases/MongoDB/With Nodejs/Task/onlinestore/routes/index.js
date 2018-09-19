var express = require('express');
var router = express.Router();
var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;

var dburl="mongodb://localhost:27017/";

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/




router.get('/',function(req,res,next){
  MongoClient.connect(dburl, { useNewUrlParser: true }, function(err,client){

    if(err) {console.log(err); throw err;}

    data="";
    var dbo = client.db("onlinestore");
    dbo.collection('products').find().toArray(function(err,docs){
      if(err) throw err;

      res.render('index.ejs',{title: 'Express', data:docs});
      client.close();
    });
  });
});

router.get('/fetchdata',function(req,res,next){
  MongoClient.connect(dburl, { useNewUrlParser: true }, function(err,client){

    if(err) {console.log(err); throw err;}

    var id=req.query.id;
    console.log("fech:"+id);
    data="";
    var dbo = client.db("onlinestore");
    var query={_id: new mongodb.ObjectID(id)};
    console.log("fetch query:"+ new mongodb.ObjectID(id));
    dbo.collection('products').find(query).toArray(function(err,docs){
      if(err) throw err;

      res.render('edit.ejs',{title: 'Express', data:docs});
      client.close();
    });
  });
});

router.post('/add',function(req,res,next){
  MongoClient.connect(dburl, { useNewUrlParser: true }, function(err,client){

    if(err) {console.log(err); throw err;}

    var dbo = client.db("onlinestore");

    var product ={
          'product_name': req.body.product_name,
          'price': req.body.price,
          'category': req.body.category
    }

    dbo.collection('products').insertOne(product,function(err,result){
      if(err) throw err;
      client.close();
      res.redirect('/');
    });
  });
});


router.post('/edit',function(req,res,next){
  MongoClient.connect(dburl, { useNewUrlParser: true }, function(err,client){

    if(err) {console.log(err); throw err;}

    var dbo = client.db("onlinestore");
    var id=req.body.id; //from the form.
 
    console.log("beore:"+ id);
    var query={'_id': mongodb.ObjectID(id)};
    console.log(query);
    var newValues={ $set: {'product_name':req.body.product_name,'price':req.body.price,'category':req.body.category}};
    dbo.collection('products').updateOne(query,newValues,function(err,result){
      if(err) throw err;

      //console.log(result);
      client.close();
      res.redirect('/');
      //res.send({err: 0, redirectUrl: "/"});
   
    });
  });
});


router.get('/delete',function(req,res,next){
  MongoClient.connect(dburl, { useNewUrlParser: true }, function(err,client){

    if(err) {console.log(err); throw err;}

    var id=req.query.id;
    var dbo = client.db("onlinestore");
    var query={_id: new mongodb.ObjectID(id)};
    console.log("fetch query:"+ new mongodb.ObjectID(id));
    dbo.collection('products').deleteOne(query,function(err,obj){
      if(err) throw err;
      client.close();

      res.redirect('/')
    });
  });
});

module.exports = router;
