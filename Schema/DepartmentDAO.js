//Require mongoose
const mongoose = require("mongoose");

const DepartmentSchema =  new mongoose.Schema ({
    departmentId : String,
    departmentName : String
});

module.exports = mongoose.model('Department', DepartmentSchema);