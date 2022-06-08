const mongoose =  require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    id : String,
    name : String,
    email : String,
    password : String 
});

module.exports = mongoose.model('Employee',EmployeeSchema);