const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const staffUser = require("../Model/register")
const  localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const passport = require('passport')
const {isLoggingout } = require('../config/auth')


router.get('/stafflogin',isLoggingout,((req,res)=>{

  res.render("login",{layout:"index"})

}))

router.get('/staffregister',((req,res)=>{

  res.render("register",{layout:"index"})

}))



router.post('/stafflogin',((req,res)=>{
  const {email, password2} = req.body
    if(!email || !password2){
        res.redirect('/department/stafflogin');
    }else{
      staffUser.find({email:email,password2:password2}).then((user)=>{
            if(!user){
                res.redirect('/department/stafflogin')
            }
            else{
                res.redirect('/admin')
            }
        })
    }

})
)






router.post('/staffregister',((req,res)=>{

  const {username, firstname, lastname, email, password1, password2,department } = req.body
  let errors =[]

  if(!username || !firstname || !lastname || !email || !password1 || !password2 || !department){
      errors.push({msg: 'please fill all the fields'})

  }
  
  if(password1 !== password2){
      errors.push({msg:'please enter the correct field'})
  }

  if(password1.length < 6){
      errors.push({msg:'please your password should be more than six charater'})
  }

  if(errors.length > 0){
      res.render('register',{
          errors,layout:'register'
      })  
  }
  else{
    staffUser.findOne({email:email}).then(user=>{
          if(user){
              res.render('register',{ layout:'register',username,firstname,
              lastname,email,department})

          }
          else{
              
            const newUser = new staffUser({
              username,
              firstname,
              lastname,
              email,
              department,
              password1,
              password2,
              
          })
          newUser.save({}).then((resp)=>{
            res.redirect('/department/stafflogin')
        })
        .catch((error)=>{
            console.log(error)
        })


        bcrypt.genSalt(10, (err,salt)=>{bcrypt.hash(newUser.password1, salt , (err,hash)=>{
        if(err) throw err;
                newUser.password1 = hash;
                newUser.save({})
                .then(user=>{
                    //  req.flash('success_msg', 'You are now Registered and can log in ')
                     res.redirect('department/stafflogin')
                  })
                .catch(err=> console.log(err))
            })

            })
          }
      })
  }

}))


module.exports = router
