const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config({path:"./.env"})
const multer  = require('multer')
const StudentRouter = require('./Router/Student')
const MainRouter = require('./Router/main')
const AdminRouter = require('./Router/Admit')
const hbs = require('express-handlebars').engine
const handlebars = require('handlebars')
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const ratelimit = require('express-rate-limit');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path')
const fs = require("fs");
const connectDB = require('./config/db')
const passport = require('passport');
const mysql = require('mysql');
const connection = require('./config/sql');
const searchRouter = require('./Router/search');
const NotificationRouter = require('./Router/notification');
const NewsRouter = require('./Router/News');
const StaffRouter = require('./Router/Staff');
const EditRouter = require('./Router/edit');
const DepartmentRouter = require('./Router/department');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const ClassRouter = require('./Router/Class');
const  localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
// const flash = require('connect-flash')
const session = require('express-session');
const request = require('request');
const fetch = require('node-fetch');
// const Passport = require('./config/LocalPassport')
const registerModels = require("./Model/register");


connection.connect((err)=>{
    console.log('you are connected')
    connection.query("create database mysql",(err,result)=>{
        console.log('database was created')
    })
  })





// Passport(passport)

// app.use(flash());

// app.use((req,res, next)=>{
//     res.locals.success_msg = req.flash('success_msg')
//     res.locals.error_msg = req.flash('error_msg')
//     next()
// })

  app.use(session({
    secret:'temple',
    resave:false,
    saveUninitialized:true,
}));

const bodyParser = require("body-parser");
const flash = require('flash');

app.use(bodyParser.urlencoded({ extended: true }));

// mongoose database
connectDB()
// cor middleware
app.use(cors())

// morgan
app.use(morgan('dev'));


// const limiter = ratelimit({
//     windowMs:10*60*1000,
//     max:2
// })

// app.use(limiter)
// app.set("trust proxy", 1)
// static file

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'upload')))
app.use(express.static(path.join(__dirname, 'files')))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  app.use(passport.initialize());
app.use(passport.session())
// file upload
app.use(fileUpload({
    createParentPath: true
}));

// bodyparser middleware
// app.use(bodyparser.urlencoded({ extended:true }))
// express middleware
app.use(express.json())

passport.serializeUser((user,done)=>{
    done(null, user.id);
});
passport.deserializeUser(( id,done)=>{
    registerModels.findById(id,(err,user)=>{
        done(err,user)
    })

})

passport.use(new localStrategy({
    usernameField:'email',
    passwordField: 'password1'
},
(email,password1,done)=>{
    registerModels.findOne({email:email})
    .then((user)=>{
        if(!user){
            return done(null,false, {message : "that email is not register "})
        }
        bcrypt.compare(password1,user.password1,(err,ismatch)=>{
            if(err) return done(err);

            if(ismatch){
                return done(null,user)
            }else{
                return done(null,false,{message: 'the password is not correct'});
            }
        })
    })
    .catch(err=>console.log(err))
})
)


function isLoggingIn(req,res,next){
    if(req.isAuthenticated()) return next();
    
        res.redirect('/registerlogin/stafflogin');
}



app.get('/setup', async (req,res)=>{
    const exists = await registerModels.exists({email:"starukido"})
    if(exists){
        console.log('exists')
        res.redirect('/registerlogin/stafflogin');
        return;
    } 
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err);
        bcrypt.hash("mypassword", salt, (err,hash)=>{
            if(err) return next(err);
            const newAdmin = new registerModels({
                email:"admin",
                password1:hash
            });

            newAdmin.save({});
            res.redirect('/registerlogin/stafflogin')
        })
    })
})



// express handlebars middleware
app.engine('.hbs', hbs({
    layoutsDir: `${__dirname}/views/layouts`,
     extname:'.hbs',
     handlebars: allowInsecurePrototypeAccess(handlebars)}))
app.set('view engine', '.hbs')

// extenal routers
app.use('/',StudentRouter)
app.use('/registerlogin',StaffRouter)
app.use('/',MainRouter)
app.use('/',DepartmentRouter)
app.use('/api',isLoggingIn,NewsRouter)
app.use('/Admin', isLoggingIn ,AdminRouter)
app.use('/Admin',isLoggingIn,searchRouter)
app.use('/Admin',isLoggingIn,NotificationRouter)
app.use('/Admin',isLoggingIn,EditRouter)
app.use('/Admin',isLoggingIn,ClassRouter)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`you are run on port ${PORT}`)
})