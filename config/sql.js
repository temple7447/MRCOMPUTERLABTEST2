const mysql = require('mysql')


const connection = mysql.createConnection({
            host:process.env.HOST,
            user:process.env.USER,
            password:process.env.PASSWORD,
            database:process.env.DATABASE
})

module.exports = connection;


// const createMysql = async ()=>{

//     try {
//         const con = await mysql.createConnection({
//             host:process.env.HOST,
//             user:process.env.USER,
//             password:process.env.PASSWORD,
//             database:process.env.DATABASE
//         })
//         con.connect((err)=>{
//             console.log('you are connected')
//             con.query("create database mysql",(err,result)=>{
//                 console.log('database was connected')
//             })
//           })

//     } catch (error) {
//         console.log(error)
//     }
// }




// module.exports = createMysql;