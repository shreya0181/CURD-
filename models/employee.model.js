// schema of the employee table 


const mongoose =require('mongoose');
// creating an object schema decring  
var employeeSchema= new mongoose.Schema({

    fullname :{
        type: String
    },
    email :{
        type: String
    },
    city : {
        type: String
    }
});

// register the schema to the database
mongoose.model('Employee', employeeSchema);

