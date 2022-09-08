const mongoose = require('mongoose')

 
const Usershema = new mongoose.Schema({
    email:{
        trim:true,
        maxlength:32,
        type:String,
    },
    password1:{
        type:String,

    },
    Atcreated:{
        type:Date,
        default:Date.now
    }



})




module.exports = mongoose.model('loginuser', Usershema)



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