const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MorningHnd2Model = new Schema({
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

module.exports  = mongoose.model("MorningHnd2",MorningHnd2Model )