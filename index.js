var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var database = require('./modules/database.js');
var queries = require('./modules/queries.js');
var person = require('./modules/person.js');
var user = require('./modules/user.js');


var app = express();
//*********************MIDDLEWARES***************************************//
//BodyParcer json() middleware parses the json object
//from HTTP POST request
app.use(bodyParser.urlencoded());
app.use(function(req,res,next){
  
  console.log(req.method);
  console.log(req.path);
  console.log(__dirname);
  console.log(database.Person);
  console.log(req.body);
  database.myFunction();
  //Send request forward in stack
  next();
});

app.use('/',express.static(path.join(__dirname, 'views')));
app.use('/css',express.static(path.join(__dirname, 'css')));
app.use('/controllers',express.static(path.join(__dirname, 'controllers')));
app.use('/lib',express.static(path.join(__dirname, 'lib')));

app.use('/persons',person);
app.use('/friends',user);

//*****************************ROUTERS***********************************//

app.get("/persons",function(req,res){
  queries.getAllPersons(req,res);
});
app.post("/persons",function(req,res){
  queries.saveNewPerson(req,res);
});
app.listen(3000);