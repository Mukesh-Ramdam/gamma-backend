const Employee = require('../models/Employee')

exports.createEmployee = async(req, res) => {
    const employee = new Employee({
        ...req.body,
    })
    await employee.save();
    console.log("Employee Created");
    return res.status(200).json({
        msg:'Employee Created Successfully'
    })
}
exports.getAllEmployees = async(req, res) =>{
    const employees = await Employee.find({})
    res.send(employees)
}

exports.updateEmployee = async(req, res)=>{
     await Employee.findByIdAndUpdate(req.body._id, req.body).exec();
     res.json({
        msg:'Employee Updated Successfully'
     })
}

exports.deleteEmployee = async(req, res)=>{
    console.log('Deleting Employee')
    await Employee.findByIdAndDelete({_id:req.params.id} )
    res.json({
        msg:'Employee Deleted Successfully'
     })
}

exports.searchEmployee = async (req, res) =>{
    const employees = await Employee.find({
        "$or":[
            {mobilNumber:{$regex:req.query.searchTerm}},
        ]
    })

    res.send(employees)
}

