const Employee = require("./Schema/EmployeeSchema")

async function saveEmployee(user){
    const data = new Employee(user);
    const result = await data.save();
    return result;
} 

module.exports.saveEmployee = saveEmployee;