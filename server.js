// requiring a  database connection 
require('./models/db')

const express = require('express');
const employeeController = require('./controllers/employeeController');
var app= express();


// listening to the port
app.listen(3000, ()=>{
console.log('express started at port 3000');
});

// using use middleware
app.use('Employee', employeeController);

