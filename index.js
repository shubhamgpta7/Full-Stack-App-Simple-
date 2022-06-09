//importing dependencies Express and BodyParser 
var Express = require("express");
var bodyParser = require("body-parser");

//creaing instance of Express 
var app = Express();

//using bodyParser as json format 
app.use(bodyParser.json());
//data can be inserted using url from here
app.use(bodyParser.urlencoded({extended:true}));


//importing moongoose as database client 
const mongoose = require('mongoose');
const { response } = require("express");

//set up default mongoose connection
const mongoseDb = 'mongodb://localhost:27017/local'; 
mongoose.connect( mongoseDb , { useNewUrlParser : true , useUnifiedTopology : true })
        .then(() => {console.log("Connected to mongodb........")})
        .catch(err => console.error("Error in Connection....",err));


//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//setting port number
app.listen(49146, ()=>{});

//using get method
app.get('/', (request, response)=>{
    response.send("Hello World");
})

//retriving employee data from database
app.get('/api/employee', (request,response)=>{
    db.collection("Employee").find({}).toArray((error,result)=>{
        if(error){
            console.log(error);
        }

        response.send(result);
    })
})

//retriving department data from database
app.get('/api/department', (request,response)=>{
    db.collection("Department").find({}).toArray((error,result)=>{
        if(error){
            console.log(error);
        }

        response.send(result)
    })
})

//adding new employee data into database
app.post('/api/employee', (request, response)=>{
    db.collection("Employee").count({}, function(error,numOfDocs){
        if(error)
            console.log(error);

        db.collection("Employee").insertOne({
            employeeId : 'A' + numOfDocs+1 ,
            employeeName : request.body['employeeName'],
            doj : request.body['doj']
        });

        response.send("Employee data added sucessfully !!!");
    })
})


//adding new department data into database
app.post('/api/department', (request, response)=>{
    db.collection("Department").count({}, function(error,numOfDocs){
        if(error)
            console.log(error);

        db.collection("Department").insertOne({
            departmentId : 'D' + numOfDocs+1 ,
            departmentName : request.body['departmentName'],
        });

        response.send("Department data added sucessfully !!!");
    })
})


//updating department data into database
app.put('/api/department', (request, response)=>{
    db.collection("Department").updateOne(
        //filtering criteria 
        {
            "departmentId" : request.body['departmentId']
        },
        //Update
        {
            $set:{
                "departmentName" : request.body['departmentName']
            }
        }
    )
    response.send("Department data updated sucessfully !!!");
    
})

//updating employee data into database
app.put('/api/employee', (request, response)=>{
    db.collection("Employee").updateOne(
        //filtering criteria 
        {
            "employeeId" : request.body['employeeId']
        },
        //Update
        {
            $set:{
                "employeeName" : request.body['employeeName']
            }
        }
    )
    response.send("Employee data updated sucessfully !!!");
    
})

//deleting data from Employee database 
app.delete('/api/employee/:employeeId', (request, response)=>{
    db.collection("Employee").deleteOne({
        employeeId : request.params.employeeId
    })
    response.send("Employee data Deleted sucessfully !!!");
    
})


//deleting data from Department database 
app.delete('/api/department/:departmentId', (request, response)=>{
    db.collection("Department").deleteOne({
        departmentId : request.params.departmentId
    })
    response.send("Department data Deleted sucessfully !!!");
    
})


















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

