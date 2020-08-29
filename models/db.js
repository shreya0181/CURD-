const mongoose= require('mongoose');

// connnecting mongoose
mongoose.connect('mongodb+srv://Shreya:44ManOzDJLMjmrPR@cluster0.cyb0i.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true
}, (err)=>{
    if(!err)
    {
        console.log('MongoDB Successfully connected');
    }
    else{
        console.log('Error in DB Connection '+ err);
    }
});

require('./employee.model');

