const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Edit = new Schema({
    homepagemessage:{
       type:String,
        required:true
    },
    imagename: String,
    imagedesc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
    
})

module.exports  = mongoose.model("Edit",Edit )