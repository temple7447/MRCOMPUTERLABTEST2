const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const passport = require('passport')

const UserInfo = require('../Model/Login')


const Passports = (passports)=>{
    
  
        passport.serializeUser((user,done)=>{
            done(null,user.id)

        });

        passport.deserializeUser((id,done)=>{
            Userdb.findById(id, (err,user)=>{
                done(err,user)
            })
        })


}


module.exports = { Passports }



