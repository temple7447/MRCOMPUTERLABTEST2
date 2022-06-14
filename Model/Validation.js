const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Validation = new Schema({
    validation:{
       type:String,
        required:true
    }
    
    
})

module.exports  = mongoose.model("Validation",Validation )