const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EveningHnd2Model = new Schema({
    fullname:{
       type:String,
        required:true
    },
    matriculation:{
       type:String,
        required:true,
        unique:true
    },
    morneven:{
       type:String,
        required:true
    },
    level:{
       type:String,
        required:true
    }
    
})

module.exports  = mongoose.model("EveningHnd2",EveningHnd2Model )