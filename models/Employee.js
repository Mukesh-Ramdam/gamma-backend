const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    employeeId:{
        type:String,
    },
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    
    mobileNumber:{
        type: Number,
    },
    gender:{
        type: String,
    },
    dateOfJoining:{
        type: String,
    },
    dateOfBirth:{
        type: String,
    },
    qualification:{
        type: String,
    },
    designation:{
        type: String,
    },
    department:{
        type: String,
    },
    
    
})

module.exports = mongoose.models.Employee || mongoose.model('Employee', employeeSchema)