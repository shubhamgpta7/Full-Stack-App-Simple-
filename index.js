//importing dependencies Express and BodyParser 
var Express = require("express");
var bodyParser = require("body-parser");

//creaing instance of Express 
var app = Express();

//using bodyParser as json format 
app.use(bodyParser.json());
//data can be inserted using url from here
app.use(bodyParser.urlencoded({extended:true}));

//importing mongo db client
// var MongoClient = require("mongodb").MongoClient;
// var CONNECTION_STRING = "mongodb+srv://shubham016:@cluster0.prcsoe8.mongodb.net/?retryWrites=true&w=majority"

// var DATABASE = "testdb";
// var database;


// //setting port number and connecting to database 
// app.listen(49146, ()=>{
//     MongoClient.connect(CONNECTION_STRING, {useNewUrlParser:true}, (error,client)=>{
//         database = client.db(DATABASE);
//         console.log("done");
//     })
// });
//DIDNOT WORK upper block

//importing moongoose as database client 
const mongoose = require('mongoose');
const EmployeeDAO = require("./EmployeeDAO")

mongoose.connect('mongodb://localhost:27017/Employee' , { useNewUrlParser : true , useUnifiedTopology : true })
        .then(() => {console.log("Connected to mongodb........")})
        .catch(err => console.error("Error in Connection....",err));


//using get method
app.get('/', (request, response)=>{
    response.send("Hello World");
})