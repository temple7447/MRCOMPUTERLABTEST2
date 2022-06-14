const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Morningnd1Models = new Schema({
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
    },
    name: String,
    desc: String,
    size:String,
    files:
    {
        data: Buffer,
        contentType: String
    }
    
})

module.exports  = mongoose.model("Morningnd1Models",Morningnd1Models )