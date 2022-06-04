const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MatriculationModelEvening = new Schema({
    
    matriculation:{
       type:String,
        required:true,
        unique:true
    }
    
})

module.exports  = mongoose.model("MatriculationEvening",MatriculationModelEvening )