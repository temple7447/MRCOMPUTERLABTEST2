const mongoose = require('mongoose')
const MONGODB = process.env.MONGODB
const ONLINEMONGODB = process.env.ONLINEMONGODB
const MONGODBE = process.env.MONGODBE

const connectDB = async ()=>{
    try {
        
       const conn = await mongoose.connect(ONLINEMONGODB,{
            useUnifiedTopology:true,
            useNewUrlParser:true,

       })

       console.log('mongoose database is connected')

    } catch (error) {
        console.log(error)
        
    }

}













module.exports = connectDB