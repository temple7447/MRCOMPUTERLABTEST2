const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config({path:"./config/config.env"})
const multer  = require('multer')
const StudentRouter = require('./Router/Student')
const MainRouter = require('./Router/main')
const AdminRouter = require('./Router/Admit')
const hbs = require('express-handlebars').engine
const handlebars = require('handlebars')
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan');
const path = require('path')
const fs = require("fs");
const connectDB = require('./config/db')
const passport = require('passport')
const mysql = require('mysql')
const connection = require('./config/sql')
const searchRouter = require('./Router/search')
const NotificationRouter = require('./Router/notification');
const EditRouter = require('./Router/edit')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const ClassRouter = require('./Router/Class')
// const flash = require('connect-flash')
// const session = require('express-session')
const UserInfoRouter = require('./Router/userinfo')
// const Passport = require('./config/LocalPassport')


connection.connect((err)=>{
    console.log('you are connected')
    connection.query("create database mysql",(err,result)=>{
        console.log('database was created')
    })
  })

//   app.use(passport.initialize());
// app.use(passport.session())

// Passport(passport)

// app.use(flash());

// app.use((req,res, next)=>{
//     res.locals.success_msg = req.flash('success_msg')
//     res.locals.error_msg = req.flash('error_msg')
//     next()
// })

//   app.use(session({
//     secret:'temple',
//     resave:true,
//     saveUninitialized:true,
// }));



const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

// mongoose database
connectDB()
// cor middleware
app.use(cors())

// morgan
app.use(morgan('dev'));


// static file

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'upload')))
app.use(express.static(path.join(__dirname, 'files')))
// file upload
app.use(fileUpload({
    createParentPath: true
}));

// bodyparser middleware
// app.use(bodyparser.urlencoded({ extended:true }))
// express middleware
app.use(express.json())



// express handlebars middleware
app.engine('.hbs', hbs({
    layoutsDir: `${__dirname}/views/layouts`,
     extname:'.hbs',
     handlebars: allowInsecurePrototypeAccess(handlebars)}))
app.set('view engine', '.hbs')

// extenal routers
app.use('/',StudentRouter)
app.use('/',MainRouter)
app.use('/Admin',AdminRouter)
app.use('/Admin',searchRouter)
app.use('/Admin',NotificationRouter)
app.use('/Admin',EditRouter)
app.use('/Admin',ClassRouter)
app.use('/Admin',UserInfoRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`you are run on port ${PORT}`)
})