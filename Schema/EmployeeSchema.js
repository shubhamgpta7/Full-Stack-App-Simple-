//Require mongoose
const mongoose =  require('mongoose');


const EmployeeSchema = new mongoose.Schema({
    employeeId : String,
    employeeName : String,
    doj : String 
});

module.exports = mongoose.model('Employee',EmployeeSchema);