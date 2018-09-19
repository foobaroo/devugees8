
//InsertMany
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;


var dbo = db.db("testdb");
var myobj = [
{ name: 'John', address: 'Highway 71'},
{ name: 'Peter', address: 'Lowstreet 4'},
{ name: 'Amy', address: 'Apple st 652'},
{ name: 'Hannah', address: 'Mountain 21'},
{ name: 'Michael', address: 'Valley 345'},
{ name: 'Sandy', address: 'Ocean blvd 2'},
{ name: 'Betty', address: 'Green Grass 1'},
{ name: 'Richard', address: 'Sky st 331'},
{ name: 'Susan', address: 'One way 98'},
{ name: 'Vicky', address: 'Yellow Garden 2'},
{ name: 'Ben', address: 'Park Lane 38'},
{ name: 'William', address: 'Central st 954'},
{ name: 'Chuck', address: 'Main Road 989'},
{ name: 'Viola', address: 'Sideway 1633'}
];
dbo.collection("customers").insertMany(myobj, function(err, res) {
if (err) throw err;
console.log("Number of documents inserted: " + res.insertedCount);
db.close();
});

});

*/


//////_id case

/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
var myobj = [
{ _id: 154, name: 'Chocolate Heaven'},
{ _id: 155, name: 'Tasty Lemon'},
{ _id: 156, name: 'Vanilla Dream'}
];
dbo.collection("products").insertMany(myobj, function(err, res) {
if (err) throw err;
console.log(res);
db.close();
});
});

*/

/////Find one
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
dbo.collection("customers").findOne({}, function(err, result) {
if (err) throw err;
console.log(result.name);
db.close();
});
});

*/

//// Find All
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
dbo.collection("customers").find({}).toArray(function(err, result)
{
if (err) throw err;
console.log(result);
db.close();
});
});
*/

/////Find Specific
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");
    dbo.collection("customers").find({},
        {projection : { _id: 0, address:
        0 }} ).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
*/


////Filter the result
//Find documents with the address "Park Lane 38”:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
var query = { address: "Park Lane 38" };
dbo.collection("customers").find(query).toArray(function(err,
result) {
if (err) throw err;
console.log(result);
db.close();
});
});*/


/////Filter with regular expression
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
var searchStr="S";
console.log(searchStr);
var query = {address: new RegExp('^' + searchStr , 'i') };
dbo.collection("customers").find(query).toArray(function(err, result) {
if (err) throw err;
console.log(result);
db.close();
});
});

*/

////Sort the result
//Sort the result alphabetically by name:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
var mysort = { name: 1 };
dbo.collection("customers").find().sort(mysort).toArray(function(err,
result) {
if (err) throw err;
console.log(result);
db.close();
});
})*/

////Delete document : One
//Delete the document with the address "Mountain 21”:
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
var myquery = { address: 'Mountain 21' };
dbo.collection("customers").deleteOne(myquery, function(err, obj) {
if (err) throw err;
console.log("1 document deleted");
db.close();
});
});
*/

//////Delete document : Many
//Delete all documents were the address starts with the letter “O":
/* var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
var myquery = { address: /^O/ };
dbo.collection("customers").deleteMany(myquery, function(err, obj) {
if (err) throw err;
console.log(obj.result.n + " document(s) deleted");
db.close();
});
})
*/

/////Update document : One
//Update the document with the address "Valley 345" to name="Mickey" and address="Canyon 123”:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
var myquery = { address: "Valley 345" };
var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
if (err) throw err;
console.log("1 document updated");
db.close();
});
});
*/

////Update document : Many
//Update all documents where the name starts with the letter “S":
/* var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
var myquery = { address: /^S/ };
var newvalues = {$set: {name: "Minnie"} };
dbo.collection("customers").updateMany(myquery, newvalues,
function(err, res) {
if (err) throw err;
console.log("result: " +res);
console.log(res.result.nModified + " document(s) updated");
db.close();
});
});

*/

////Limit the result
//Limit the result to only return 5 documents:
/* var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
dbo.collection("customers").find().limit(5).toArray(function(err, result) {
if (err) throw err;
console.log(result);
db.close();
});
});

*/

//// Join collections
//Join the matching "products" document(s) to the "orders" collection:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("testdb");
dbo.collection('orders').aggregate([
{ $lookup:
{
from: 'products',
localField: 'product_id',
foreignField: '_id',
as: 'orderdetails'
}
}
]).toArray(function(err, res) {
if (err) throw err;
console.log(JSON.stringify(res));
//use can use this result
console.log(res[0].orderdetails);
db.close();
});
});
*/

