const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EditImage = new Schema({
    name: String,
    desc: String,
    size:String,
    img:
    {
        data: Buffer,
        contentType: String
    }
    
})

module.exports  = mongoose.model("EditImage",EditImage )