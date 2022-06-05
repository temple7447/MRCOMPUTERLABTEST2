const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Edit = new Schema({
    homepagemessage:{
       type:String,
        required:true
    }
    
})

module.exports  = mongoose.model("Edit",Edit )