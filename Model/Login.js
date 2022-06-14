const mongoose = require('mongoose')

 
const Usershema = new mongoose.Schema({
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




module.exports = mongoose.model('user', Usershema)



    // email:{
    //     type:String,
    //     trim:true,
    //     maxlength:32,
    //     unique: true,
    // },
    // encrypassword:{
    //      type:String,
    //      required:true
    // },
//     salt:String,
// }, {timestamps:true})


// usershema.virtual('password').set(()=>{ }).get(()=>{ })

// usershema.methods = {
//     authenticate: (plainpassword)=> {
//         return this.securepassword(plainpassword) === this.encrypassword 
//     }
// }