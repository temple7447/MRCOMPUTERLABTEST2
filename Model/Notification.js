const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Notification = new Schema({
    message:{
       type:String,
        required:true
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

module.exports  = mongoose.model("Notification",Notification )