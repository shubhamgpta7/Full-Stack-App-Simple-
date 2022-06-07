//importing dependencies Express and BodyParser 
var Express = require("express");
var bodyParser = require("body-parser");

//creaing instance of Express 
var app = Express();

//using bodyParser as json format 
app.use(bodyParser.json());
//data can be inserted using url from here
app.use(bodyParser.urlencoded({extended:true}));

//setting port number 
app.listen(49146, ()=>{});

//using get method
app.get('/', (request, response)=>{
    response.send("Hello World");
})