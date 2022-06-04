const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MatriculationModelMorning = new Schema({
    
    matriculation:{
       type:String,
        required:true,
        unique:true
    }
    
})

module.exports  = mongoose.model("MatriculationMorning",MatriculationModelMorning )