const mongoose = require('mongoose');



const taskSchema = new mongoose.Schema({

    title :{type:String , required : true},
    description : {type: String , required : true},
    completed : {type : Boolean , default : false},
    important :{ type : Boolean , default:false},
    deadline : {type : Date , required : true},
    dirId : {type : mongoose.Schema.Types.ObjectId, ref : 'Directory' , required : true}

    
});


module.exports = mongoose.model('Task' , taskSchema);