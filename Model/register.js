const mongoose = require('mongoose')

 
const staffUser = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    firstname:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    lastname:{
        trim:true,
        maxlength:32,
        type:String,
    },
    email:{
        trim:true,
        maxlength:32,
        type:String,
    },
    
    department:{
        trim:true,
        maxlength:32,
        type:String,
    },
    password1:{
        type:String,

    },
    password2:{
      type:String,
    },

    Atcreated:{
        type:Date,
        default:Date.now
    }



})




module.exports = mongoose.model('Register', staffUser)

